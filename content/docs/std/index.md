---
title: "Std Lib Overview"
navigation:
    title: "Overview"
    order: 2
seo:
    title: "Zig Standard Library Overview · Zigbook"
    description: "Comprehensive reference for Zig 0.15.1's standard library—production-grade data structures, algorithms, cryptography, networking, and systems programming utilities."
---

::Overview
The Zig Standard Library (`std`) is a comprehensive collection of modules that provide the building blocks for systems programming, application development, and high-performance computing.
From memory-safe data structures to cryptographic primitives, the standard library embodies Zig's philosophy of explicit control, zero hidden allocations, and compile-time guarantees.
::

::note
These docs are synced upstream with Zig's `lib/std/`. All module references, APIs, and examples reflect the version-specific release.
::

## Philosophy & Design Principles

Zig's standard library is designed around several core principles that distinguish it from traditional language standard libraries:

::card-group
    :::card{icon="i-lucide-memory-stick" title="Explicit Memory Management"}
    Every allocation is explicit. Functions that allocate memory accept an `Allocator` parameter, giving you complete control over memory management strategies—from stack allocations to arena allocators to custom allocation schemes.
    :::
    :::card{icon="i-lucide-zap" title="Compile-Time Guarantees"}
    Zig leverages its `comptime` metaprogramming capabilities throughout the standard library, enabling zero-cost abstractions, type-safe generics, and optimizations that would require runtime overhead in other languages.
    :::

    :::card{icon="i-lucide-eye" title="No Hidden Control Flow"}
    The standard library never hides complexity. Error handling is explicit via error unions, there are no exceptions, and all side effects are clearly visible in function signatures and implementations.
    :::

    :::card{icon="i-lucide-globe" title="Cross-Platform by Design"}
    The standard library provides consistent abstractions across operating systems while exposing platform-specific functionality when needed. Whether targeting Linux, Windows, macOS, or embedded systems, you get reliable, predictable behavior.
    :::
::

::steps
### Library Organization

The standard library is organized into **69 focused modules**, each addressing a specific domain—collections, algorithms, cryptography, networking, and more. This modularity allows you to include only what you need.

### [Collections & Containers](/docs/std/collections/)

**16 modules** offering a variety of data structures such as dynamic arrays, hash maps, bit sets, priority queues, and linked lists. These implementations prioritize performance, memory efficiency, and predictable behavior.

**Key modules:** `ArrayList`, `HashMap`, `BitSet`, `BitStack`, `BufMap`, `BufSet`, `DoublyLinkedList`, `HashMap`, `Heap`, `MultiArrayList`, `PriorityDequeue`, `PriorityQueue`, `SegmentedList`, `SinglyLinkedList`, `StaticStringMap`, `Treap`

### [Algorithms & Numerics](/docs/std/algorithms/)

**4 modules** delivering battle-tested sorting algorithms, cryptographically secure random number generation, comprehensive mathematical functions, and SIMD vector operations for maximum performance.

**Key modules:** `sort`, `Random`, `math`, `simd`

### [Text & Encoding](/docs/std/encodings/)

**6 modules** handling formatting, parsing, and transformation of text data. From UTF-8 unicode processing to JSON serialization and URI parsing, these modules ensure correct handling of structured data.

**Key modules:** `fmt`, `json`, `unicode`, `ascii`, `base64`, `Uri`

### [Cryptography & Hashing](/docs/std/crypto/)

**2 modules** providing vetted cryptographic primitives and hashing functions. These implementations prioritize security, correctness, and constant-time execution where appropriate.

**Key modules:** `crypto`, `hash`

### [Core Systems](/docs/std/systems/)

**7 modules** exposing low-level concurrency primitives, metaprogramming utilities, memory manipulation, and atomic operations. These are the foundation for building higher-level abstractions.

**Key modules:** `atomic`, `mem`, `meta`, `Thread`, `builtin`, `once`

### [Platform & Runtime](/docs/std/platform/)

**8 modules** interfacing with the operating system—filesystem operations, process management, time and timezone handling, and POSIX compliance. Abstract away platform differences while maintaining low-level access when needed.

**Key modules:** `fs`, `os`, `posix`, `process`, `time`, `Io`, `Tz`, `Gpu`

### [Diagnostics & Observability](/docs/std/observability/)

**3 modules** supporting debugging, structured logging, and progress reporting. Essential for production deployments where visibility into system behavior is critical.

**Key modules:** `debug`, `log`, `Progress`

### [Networking & Protocols](/docs/std/networking/)

**2 modules** enabling network programming with transport abstractions and HTTP client utilities. Build networked applications with the same explicit control found throughout the standard library.

**Key modules:** `net`, `http`

### [Toolchain & Binaries](/docs/std/toolchain/)

**14 modules** for build orchestration, binary format parsing, target metadata, dynamic library loading, and integration with C code. Essential for tooling, compilers, and low-level system interaction.

**Key modules:** `Build`, `Target`, `c`, `elf`, `dwarf`, `macho`, `coff`, `wasm`, `DynLib`, `Pdb`, `Pie`, `Start`, `Valgrind`, `Zig`

### [Binary & Archive Formats](/docs/std/formats/)

**6 modules** handling structured file formats, compression, archive manipulation, and semantic versioning. Parse and generate standardized formats with confidence.

**Key modules:** `tar`, `zip`, `compress`, `SemanticVersion`, `zon`, `leb`

### [Testing & Quality](/docs/std/testing/)

**1 module** providing a robust testing harness with assertions, allocation tracking, and test execution management. Write reliable tests with the same explicit guarantees as production code.

**Key modules:** `testing`

::

## Common Patterns & Best Practices

::tabs
    :::tabs-item{label="Memory Allocation" icon="i-lucide-memory-stick"}
    ```zig [example.zig]
    const std = @import("std");
    const ArrayList = std.ArrayList;

    pub fn processData(allocator: std.mem.Allocator) !void {
        var list = ArrayList(u32).init(allocator);
        defer list.deinit(); // Always pair init with deinit

        try list.append(42);
        // Use list...
    }
    ```

    Pass allocators explicitly to functions that need them. Use `defer` to ensure cleanup happens even if errors occur.
    :::

    :::tabs-item{label="Error Handling" icon="i-lucide-alert-circle"}
    ```zig [example.zig]
    const std = @import("std");

    pub fn readConfig(allocator: std.mem.Allocator) ![]const u8 {
        const file = try std.fs.cwd().openFile("config.json", .{});
        defer file.close();

        return try file.readToEndAlloc(allocator, 1024 * 1024);
    }
    ```

    Errors propagate explicitly via the `!` operator. No hidden exception mechanisms—every error is visible in the type system.
    :::

    :::tabs-item{label="Generics" icon="i-lucide-code"}
    ```zig [example.zig]
    const std = @import("std");

    pub fn Container(comptime T: type) type {
        return struct {
            items: []T,

            pub fn init(allocator: std.mem.Allocator, capacity: usize) !@This() {
                return .{
                    .items = try allocator.alloc(T, capacity),
                };
            }
        };
    }
    ```

    Generic containers and functions use `comptime` parameters, generating specialized code at compile time with zero runtime overhead.
    :::
::

## Performance Characteristics

The standard library is designed for predictable, high-performance execution:

::field-group
    :::field{name="Zero-cost abstractions"}
    Comptime generics and inline functions eliminate abstraction overhead
    :::

    :::field{name="Explicit allocations"}
    No hidden malloc calls or garbage collection pauses
    :::

    :::field{name="Cache-friendly layouts"}
    Structures like `MultiArrayList` optimize for modern CPU architectures
    :::

    :::field{name="SIMD acceleration"}
    Vectorized operations via the `simd` module for data-parallel workloads
    :::

    :::field{name="Minimal dependencies"}
    Lean implementations with no bloat
    :::
::

## Platform Support

Zig's standard library supports a wide range of targets:

::field-group
    :::field{name="Operating Systems"}
    Linux, Windows, macOS, FreeBSD, OpenBSD, Haiku, UEFI, and more
    :::

    :::field{name="Architectures"}
    x86, x86_64, ARM, AArch64, RISC-V, WebAssembly, and others
    :::

    :::field{name="Embedded Systems"}
    Bare-metal programming with freestanding mode
    :::

    :::field{name="Cross-compilation"}
    First-class support for building to any supported target
    :::
::

## Getting Started

Import the standard library in any Zig file:

```zig [main.zig]
const std = @import("std");

pub fn main() !void {
    const stdout = std.io.getStdOut().writer();
    try stdout.print("Hello, {s}!\n", .{"Zig Standard Library"});
}
```

Explore the category pages in the navigation to discover the full breadth of available modules. Each module includes detailed documentation, function signatures, examples, and usage guidance.

::warning
The Zig language is evolving toward a 1.0 release, and the standard library API may change between versions.
::



#### When upgrading:

1. Review release notes for breaking changes
2. Run your test suite against the new version
3. Update code to match new APIs and patterns
4. Leverage the compiler's error messages—they guide you toward correct usage

::tip
For production deployments requiring stability, pin your Zig version and maintain compatibility layers for future migrations.
::

## Additional Resources

::card-group
    :::card{to="https://ziglang.org/documentation/" icon="i-lucide-book-open" title="Official Zig Documentation" target="_blank"}
    Comprehensive documentation from the Zig project
    :::

    :::card{to="https://ziglang.org/documentation/master/" icon="i-lucide-file-text" title="Zig Language Reference" target="_blank"}
    Authoritative specification of language semantics
    :::

    :::card{to="https://github.com/ziglang/zig" icon="i-lucide-github" title="Zig on GitHub" target="_blank"}
    Source code, issues, and discussions
    :::
::

---

::callout{icon="i-lucide-rocket" type="tip"}
        Ready to explore? Start with [Collections & Containers](/docs/std/collections/) for everyday data structures, or dive into [Algorithms & Numerics](/docs/std/algorithms/) for performance-critical operations.
::
