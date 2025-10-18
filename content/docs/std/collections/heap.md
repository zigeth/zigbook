---
title: "std.heap"
description: "Comprehensive reference for Zig's std.heap module covering collections and data-structure utilities."
navigation:
  title: "Heap"
  icon: i-lucide-layers
  badge: "Collections"
badge: "Collections"
category: "collections"
tags:
  - "zig"
  - "standard-library"
  - "collections"
source: "std/heap.md"
githubPath: "std/heap.md"
lastUpdated: "2025-10-18T12:44:21.943Z"
seo:
  title: "std.heap · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.heap module covering collections and data-structure utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/heap.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.heap` |
| Declarations | 32 |
| Breakdown | 8 functions · 1 type · 17 constants · 5 modules · 1 global variable |
| Generated (unix epoch) | 1760148106 |

---

## Table of Contents

- [Functions](#functions)
  - [`pageSize`](#fn-pagesize)
  - [`defaultQueryPageSize`](#fn-defaultquerypagesize)
  - [`stackFallback`](#fn-stackfallback)
  - [`StackFallbackAllocator`](#fn-stackfallbackallocator)
  - [`testAllocator`](#fn-testallocator)
  - [`testAllocatorAligned`](#fn-testallocatoraligned)
  - [`testAllocatorLargeAlignment`](#fn-testallocatorlargealignment)
  - [`testAllocatorAlignedShrink`](#fn-testallocatoralignedshrink)

- [Types](#types)
  - [`Check`](#type-check)

- [Modules](#modules)
  - [`SmpAllocator`](#module-smpallocator)
  - [`FixedBufferAllocator`](#module-fixedbufferallocator)
  - [`PageAllocator`](#module-pageallocator)
  - [`ThreadSafeAllocator`](#module-threadsafeallocator)
  - [`WasmAllocator`](#module-wasmallocator)

- [Constants](#constants)
  - [`ArenaAllocator`](#const-arenaallocator)
  - [`SbrkAllocator`](#const-sbrkallocator)
  - [`DebugAllocatorConfig`](#const-debugallocatorconfig)
  - [`DebugAllocator`](#const-debugallocator)
  - [`GeneralPurposeAllocatorConfig`](#const-generalpurposeallocatorconfig)
  - [`GeneralPurposeAllocator`](#const-generalpurposeallocator)
  - [`MemoryPool`](#const-memorypool)
  - [`MemoryPoolAligned`](#const-memorypoolaligned)
  - [`MemoryPoolExtra`](#const-memorypoolextra)
  - [`MemoryPoolOptions`](#const-memorypooloptions)
  - [`page\_size\_min`](#const-page-size-min)
  - [`page\_size\_max`](#const-page-size-max)
  - [`c\_allocator`](#const-c-allocator)
  - [`raw\_c\_allocator`](#const-raw-c-allocator)
  - [`page\_allocator`](#const-page-allocator)
  - [`smp\_allocator`](#const-smp-allocator)
  - [`wasm\_allocator`](#const-wasm-allocator)

- [Global Variables](#global-variables)
  - [`next\_mmap\_addr\_hint`](#var-next-mmap-addr-hint)

---

## Types (1)

### <a id="type-check"></a>`Check`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Check = enum { ok, leak }
```

**Fields:**

| Value | Description |
|-------|-------------|
| `ok` |  |
| `leak` |  |

</details>

---

## Modules (5)

### <a id="module-smpallocator"></a>`SmpAllocator`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const SmpAllocator = @import("heap/SmpAllocator.zig")
```

> **Module:** `heap/SmpAllocator.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/heap/SmpAllocator.zig)

</details>

---

### <a id="module-fixedbufferallocator"></a>`FixedBufferAllocator`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const FixedBufferAllocator = @import("heap/FixedBufferAllocator.zig")
```

> **Module:** `heap/FixedBufferAllocator.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/heap/FixedBufferAllocator.zig)

</details>

---

### <a id="module-pageallocator"></a>`PageAllocator`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const PageAllocator = @import("heap/PageAllocator.zig")
```

> **Module:** `heap/PageAllocator.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/heap/PageAllocator.zig)

</details>

---

### <a id="module-threadsafeallocator"></a>`ThreadSafeAllocator`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const ThreadSafeAllocator = @import("heap/ThreadSafeAllocator.zig")
```

> **Module:** `heap/ThreadSafeAllocator.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/heap/ThreadSafeAllocator.zig)

</details>

---

### <a id="module-wasmallocator"></a>`WasmAllocator`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const WasmAllocator = @import("heap/WasmAllocator.zig")
```

> **Module:** `heap/WasmAllocator.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/heap/WasmAllocator.zig)

</details>

---

## Global Variables (1)

### <a id="var-next-mmap-addr-hint"></a>`next_mmap_addr_hint`

<details class="declaration-card" open>
<summary>Variable – TODO Utilize this on Windows</summary>

TODO Utilize this on Windows.

```zig
pub var next_mmap_addr_hint: ?[*]align(page_size_min) u8 = null
```

</details>

---

## Constants (17)

### <a id="const-arenaallocator"></a>`ArenaAllocator`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ArenaAllocator = @import("heap/arena_allocator.zig").ArenaAllocator
```

</details>

---

### <a id="const-sbrkallocator"></a>`SbrkAllocator`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SbrkAllocator = @import("heap/sbrk_allocator.zig").SbrkAllocator
```

</details>

---

### <a id="const-debugallocatorconfig"></a>`DebugAllocatorConfig`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DebugAllocatorConfig = @import("heap/debug_allocator.zig").Config
```

</details>

---

### <a id="const-debugallocator"></a>`DebugAllocator`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DebugAllocator = @import("heap/debug_allocator.zig").DebugAllocator
```

</details>

---

### <a id="const-generalpurposeallocatorconfig"></a>`GeneralPurposeAllocatorConfig`

<details class="declaration-card" open>
<summary>Constant – Deprecated; to be removed after 0</summary>

Deprecated; to be removed after 0.14.0 is tagged.

```zig
pub const GeneralPurposeAllocatorConfig = DebugAllocatorConfig
```

</details>

---

### <a id="const-generalpurposeallocator"></a>`GeneralPurposeAllocator`

<details class="declaration-card" open>
<summary>Constant – Deprecated; to be removed after 0</summary>

Deprecated; to be removed after 0.14.0 is tagged.

```zig
pub const GeneralPurposeAllocator = DebugAllocator
```

</details>

---

### <a id="const-memorypool"></a>`MemoryPool`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MemoryPool = memory_pool.MemoryPool
```

</details>

---

### <a id="const-memorypoolaligned"></a>`MemoryPoolAligned`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MemoryPoolAligned = memory_pool.MemoryPoolAligned
```

</details>

---

### <a id="const-memorypoolextra"></a>`MemoryPoolExtra`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MemoryPoolExtra = memory_pool.MemoryPoolExtra
```

</details>

---

### <a id="const-memorypooloptions"></a>`MemoryPoolOptions`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MemoryPoolOptions = memory_pool.Options
```

</details>

---

### <a id="const-page-size-min"></a>`page_size_min`

<details class="declaration-card" open>
<summary>Constant – comptime-known minimum page size of the target</summary>

comptime-known minimum page size of the target.

All pointers from `mmap` or `VirtualAlloc` are aligned to at least
`page_size_min`, but their actual alignment may be bigger.

This value can be overridden via `std.options.page_size_min`.

On many systems, the actual page size can only be determined at runtime
with `pageSize`.

```zig
pub const page_size_min: usize = std.options.page_size_min orelse (page_size_min_default orelse
    @compileError(@tagName(builtin.cpu.arch) ++ "-" ++ @tagName(builtin.os.tag) ++ " has unknown page_size_min; populate std.options.page_size_min"))
```

</details>

---

### <a id="const-page-size-max"></a>`page_size_max`

<details class="declaration-card" open>
<summary>Constant – comptime-known maximum page size of the target</summary>

comptime-known maximum page size of the target.

Targeting a system with a larger page size may require overriding
`std.options.page_size_max`, as well as providing a corresponding linker
option.

The actual page size can only be determined at runtime with `pageSize`.

```zig
pub const page_size_max: usize = std.options.page_size_max orelse (page_size_max_default orelse if (builtin.os.tag == .freestanding or builtin.os.tag == .other)
    @compileError("freestanding/other page_size_max must provided with std.options.page_size_max")
else
    @compileError(@tagName(builtin.cpu.arch) ++ "-" ++ @tagName(builtin.os.tag) ++ " has unknown page_size_max; populate std.options.page_size_max"))
```

</details>

---

### <a id="const-c-allocator"></a>`c_allocator`

<details class="declaration-card" open>
<summary>Constant – Supports the full Allocator interface, including alignment, and exploiting</summary>

Supports the full Allocator interface, including alignment, and exploiting
`malloc_usable_size` if available. For an allocator that directly calls
`malloc`/`free`, see `raw_c_allocator`.

```zig
pub const c_allocator: Allocator = .{
    .ptr = undefined,
    .vtable = &CAllocator.vtable,
}
```

</details>

---

### <a id="const-raw-c-allocator"></a>`raw_c_allocator`

<details class="declaration-card" open>
<summary>Constant – Asserts allocations are within `@alignOf(std</summary>

Asserts allocations are within `@alignOf(std.c.max_align_t)` and directly
calls `malloc`/`free`. Does not attempt to utilize `malloc_usable_size`.
This allocator is safe to use as the backing allocator with
`ArenaAllocator` for example and is more optimal in such a case than
`c_allocator`.

```zig
pub const raw_c_allocator: Allocator = .{
    .ptr = undefined,
    .vtable = &raw_c_allocator_vtable,
}
```

</details>

---

### <a id="const-page-allocator"></a>`page_allocator`

<details class="declaration-card" open>
<summary>Constant – On operating systems that support memory mapping, this allocator makes a</summary>

On operating systems that support memory mapping, this allocator makes a
syscall directly for every allocation and free.

Otherwise, it falls back to the preferred singleton for the target.

Thread-safe.

```zig
pub const page_allocator: Allocator = if (@hasDecl(root, "os") and
    @hasDecl(root.os, "heap") and
    @hasDecl(root.os.heap, "page_allocator"))
    root.os.heap.page_allocator
else if (builtin.target.cpu.arch.isWasm()) .{
    .ptr = undefined,
    .vtable = &WasmAllocator.vtable,
} else if (builtin.target.os.tag == .plan9) .{
    .ptr = undefined,
    .vtable = &SbrkAllocator(std.os.plan9.sbrk).vtable,
} else .{
    .ptr = undefined,
    .vtable = &PageAllocator.vtable,
}
```

</details>

---

### <a id="const-smp-allocator"></a>`smp_allocator`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const smp_allocator: Allocator = .{
    .ptr = undefined,
    .vtable = &SmpAllocator.vtable,
}
```

</details>

---

### <a id="const-wasm-allocator"></a>`wasm_allocator`

<details class="declaration-card" open>
<summary>Constant – This allocator is fast, small, and specific to WebAssembly</summary>

This allocator is fast, small, and specific to WebAssembly. In the future,
this will be the implementation automatically selected by
`GeneralPurposeAllocator` when compiling in `ReleaseSmall` mode for wasm32
and wasm64 architectures.
Until then, it is available here to play with.

```zig
pub const wasm_allocator: Allocator = .{
    .ptr = undefined,
    .vtable = &WasmAllocator.vtable,
}
```

</details>

---

## Functions (8)

### <a id="fn-pagesize"></a>`pageSize`

<details class="declaration-card" open>
<summary>Function – If the page size is comptime-known, return value is comptime</summary>

If the page size is comptime-known, return value is comptime.
Otherwise, calls `std.options.queryPageSize` which by default queries the
host operating system at runtime.

```zig
pub inline fn pageSize() usize {
    if (page_size_min == page_size_max) return page_size_min;
    return std.options.queryPageSize();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `usize` | – | – |

</details>

---

### <a id="fn-defaultquerypagesize"></a>`defaultQueryPageSize`

<details class="declaration-card" open>
<summary>Function – The default implementation of `std</summary>

The default implementation of `std.options.queryPageSize`.
Asserts that the page size is within `page_size_min` and `page_size_max`

```zig
pub fn defaultQueryPageSize() usize {
    const global = struct {
        var cached_result: std.atomic.Value(usize) = .init(0);
    };
    var size = global.cached_result.load(.unordered);
    if (size > 0) return size;
    size = switch (builtin.os.tag) {
        .linux => if (builtin.link_libc) @intCast(std.c.sysconf(@intFromEnum(std.c._SC.PAGESIZE))) else std.os.linux.getauxval(std.elf.AT_PAGESZ),
        .driverkit, .ios, .macos, .tvos, .visionos, .watchos => blk: {
            const task_port = std.c.mach_task_self();
            // mach_task_self may fail "if there are any resource failures or other errors".
            if (task_port == std.c.TASK_NULL)
                break :blk 0;
            var info_count = std.c.TASK_VM_INFO_COUNT;
            var vm_info: std.c.task_vm_info_data_t = undefined;
            vm_info.page_size = 0;
            _ = std.c.task_info(
                task_port,
                std.c.TASK_VM_INFO,
                @as(std.c.task_info_t, @ptrCast(&vm_info)),
                &info_count,
            );
            assert(vm_info.page_size != 0);
            break :blk @intCast(vm_info.page_size);
        },
        .windows => blk: {
            var info: std.os.windows.SYSTEM_INFO = undefined;
            std.os.windows.kernel32.GetSystemInfo(&info);
            break :blk info.dwPageSize;
        },
        else => if (builtin.link_libc)
            @intCast(std.c.sysconf(@intFromEnum(std.c._SC.PAGESIZE)))
        else if (builtin.os.tag == .freestanding or builtin.os.tag == .other)
            @compileError("unsupported target: freestanding/other")
        else
            @compileError("pageSize on " ++ @tagName(builtin.cpu.arch) ++ "-" ++ @tagName(builtin.os.tag) ++ " is not supported without linking libc, using the default implementation"),
    };

    assert(size >= page_size_min);
    assert(size <= page_size_max);
    global.cached_result.store(size, .unordered);

    return size;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `usize` | – | – |

</details>

---

### <a id="fn-stackfallback"></a>`stackFallback`

<details class="declaration-card" open>
<summary>Function – Returns a `StackFallbackAllocator` allocating using either a</summary>

Returns a `StackFallbackAllocator` allocating using either a
`FixedBufferAllocator` on an array of size `size` and falling back to
`fallback_allocator` if that fails.

```zig
pub fn stackFallback(comptime size: usize, fallback_allocator: Allocator) StackFallbackAllocator(size) {
    return StackFallbackAllocator(size){
        .buffer = undefined,
        .fallback_allocator = fallback_allocator,
        .fixed_buffer_allocator = undefined,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `size` | `usize` | – | – |
| `fallback\_allocator` | `Allocator` | – | – |
| Return | `StackFallbackAllocator(size)` | – | – |

</details>

---

### <a id="fn-stackfallbackallocator"></a>`StackFallbackAllocator`

<details class="declaration-card" open>
<summary>Function – An allocator that attempts to allocate using a</summary>

An allocator that attempts to allocate using a
`FixedBufferAllocator` using an array of size `size`. If the
allocation fails, it will fall back to using
`fallback_allocator`. Easily created with `stackFallback`.

```zig
pub fn StackFallbackAllocator(comptime size: usize) type {
    return struct {
        const Self = @This();

        buffer: [size]u8,
        fallback_allocator: Allocator,
        fixed_buffer_allocator: FixedBufferAllocator,
        get_called: if (std.debug.runtime_safety) bool else void =
            if (std.debug.runtime_safety) false else {},

        /// This function both fetches a `Allocator` interface to this
        /// allocator *and* resets the internal buffer allocator.
        pub fn get(self: *Self) Allocator {
            if (std.debug.runtime_safety) {
                assert(!self.get_called); // `get` called multiple times; instead use `const allocator = stackFallback(N).get();`
                self.get_called = true;
            }
            self.fixed_buffer_allocator = FixedBufferAllocator.init(self.buffer[0..]);
            return .{
                .ptr = self,
                .vtable = &.{
                    .alloc = alloc,
                    .resize = resize,
                    .remap = remap,
                    .free = free,
                },
            };
        }

        /// Unlike most std allocators `StackFallbackAllocator` modifies
        /// its internal state before returning an implementation of
        /// the`Allocator` interface and therefore also doesn't use
        /// the usual `.allocator()` method.
        pub const allocator = @compileError("use 'const allocator = stackFallback(N).get();' instead");

        fn alloc(
            ctx: *anyopaque,
            len: usize,
            alignment: Alignment,
            ra: usize,
        ) ?[*]u8 {
            const self: *Self = @ptrCast(@alignCast(ctx));
            return FixedBufferAllocator.alloc(&self.fixed_buffer_allocator, len, alignment, ra) orelse
                return self.fallback_allocator.rawAlloc(len, alignment, ra);
        }

        fn resize(
            ctx: *anyopaque,
            buf: []u8,
            alignment: Alignment,
            new_len: usize,
            ra: usize,
        ) bool {
            const self: *Self = @ptrCast(@alignCast(ctx));
            if (self.fixed_buffer_allocator.ownsPtr(buf.ptr)) {
                return FixedBufferAllocator.resize(&self.fixed_buffer_allocator, buf, alignment, new_len, ra);
            } else {
                return self.fallback_allocator.rawResize(buf, alignment, new_len, ra);
            }
        }

        fn remap(
            context: *anyopaque,
            memory: []u8,
            alignment: Alignment,
            new_len: usize,
            return_address: usize,
        ) ?[*]u8 {
            const self: *Self = @ptrCast(@alignCast(context));
            if (self.fixed_buffer_allocator.ownsPtr(memory.ptr)) {
                return FixedBufferAllocator.remap(&self.fixed_buffer_allocator, memory, alignment, new_len, return_address);
            } else {
                return self.fallback_allocator.rawRemap(memory, alignment, new_len, return_address);
            }
        }

        fn free(
            ctx: *anyopaque,
            buf: []u8,
            alignment: Alignment,
            ra: usize,
        ) void {
            const self: *Self = @ptrCast(@alignCast(ctx));
            if (self.fixed_buffer_allocator.ownsPtr(buf.ptr)) {
                return FixedBufferAllocator.free(&self.fixed_buffer_allocator, buf, alignment, ra);
            } else {
                return self.fallback_allocator.rawFree(buf, alignment, ra);
            }
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `size` | `usize` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-testallocator"></a>`testAllocator`

<details class="declaration-card" open>
<summary>Function – This one should not try alignments that exceed what C malloc can handle</summary>

This one should not try alignments that exceed what C malloc can handle.

```zig
pub fn testAllocator(base_allocator: mem.Allocator) !void {
    var validationAllocator = mem.validationWrap(base_allocator);
    const allocator = validationAllocator.allocator();

    var slice = try allocator.alloc(*i32, 100);
    try testing.expect(slice.len == 100);
    for (slice, 0..) |*item, i| {
        item.* = try allocator.create(i32);
        item.*.* = @as(i32, @intCast(i));
    }

    slice = try allocator.realloc(slice, 20000);
    try testing.expect(slice.len == 20000);

    for (slice[0..100], 0..) |item, i| {
        try testing.expect(item.* == @as(i32, @intCast(i)));
        allocator.destroy(item);
    }

    if (allocator.resize(slice, 50)) {
        slice = slice[0..50];
        if (allocator.resize(slice, 25)) {
            slice = slice[0..25];
            try testing.expect(allocator.resize(slice, 0));
            slice = slice[0..0];
            slice = try allocator.realloc(slice, 10);
            try testing.expect(slice.len == 10);
        }
    }
    allocator.free(slice);

    // Zero-length allocation
    const empty = try allocator.alloc(u8, 0);
    allocator.free(empty);
    // Allocation with zero-sized types
    const zero_bit_ptr = try allocator.create(u0);
    zero_bit_ptr.* = 0;
    allocator.destroy(zero_bit_ptr);
    const zero_len_array = try allocator.create([0]u64);
    allocator.destroy(zero_len_array);

    const oversize = try allocator.alignedAlloc(u32, null, 5);
    try testing.expect(oversize.len >= 5);
    for (oversize) |*item| {
        item.* = 0xDEADBEEF;
    }
    allocator.free(oversize);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `base\_allocator` | `mem.Allocator` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-testallocatoraligned"></a>`testAllocatorAligned`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn testAllocatorAligned(base_allocator: mem.Allocator) !void {
    var validationAllocator = mem.validationWrap(base_allocator);
    const allocator = validationAllocator.allocator();

    // Test a few alignment values, smaller and bigger than the type's one
    inline for ([_]Alignment{ .@"1", .@"2", .@"4", .@"8", .@"16", .@"32", .@"64" }) |alignment| {
        // initial
        var slice = try allocator.alignedAlloc(u8, alignment, 10);
        try testing.expect(slice.len == 10);
        // grow
        slice = try allocator.realloc(slice, 100);
        try testing.expect(slice.len == 100);
        if (allocator.resize(slice, 10)) {
            slice = slice[0..10];
        }
        try testing.expect(allocator.resize(slice, 0));
        slice = slice[0..0];
        // realloc from zero
        slice = try allocator.realloc(slice, 100);
        try testing.expect(slice.len == 100);
        if (allocator.resize(slice, 10)) {
            slice = slice[0..10];
        }
        try testing.expect(allocator.resize(slice, 0));
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `base\_allocator` | `mem.Allocator` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-testallocatorlargealignment"></a>`testAllocatorLargeAlignment`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn testAllocatorLargeAlignment(base_allocator: mem.Allocator) !void {
    var validationAllocator = mem.validationWrap(base_allocator);
    const allocator = validationAllocator.allocator();

    const large_align: usize = page_size_min / 2;

    var align_mask: usize = undefined;
    align_mask = @shlWithOverflow(~@as(usize, 0), @as(Allocator.Log2Align, @ctz(large_align)))[0];

    var slice = try allocator.alignedAlloc(u8, .fromByteUnits(large_align), 500);
    try testing.expect(@intFromPtr(slice.ptr) & align_mask == @intFromPtr(slice.ptr));

    if (allocator.resize(slice, 100)) {
        slice = slice[0..100];
    }

    slice = try allocator.realloc(slice, 5000);
    try testing.expect(@intFromPtr(slice.ptr) & align_mask == @intFromPtr(slice.ptr));

    if (allocator.resize(slice, 10)) {
        slice = slice[0..10];
    }

    slice = try allocator.realloc(slice, 20000);
    try testing.expect(@intFromPtr(slice.ptr) & align_mask == @intFromPtr(slice.ptr));

    allocator.free(slice);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `base\_allocator` | `mem.Allocator` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-testallocatoralignedshrink"></a>`testAllocatorAlignedShrink`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn testAllocatorAlignedShrink(base_allocator: mem.Allocator) !void {
    var validationAllocator = mem.validationWrap(base_allocator);
    const allocator = validationAllocator.allocator();

    var debug_buffer: [1000]u8 = undefined;
    var fib = FixedBufferAllocator.init(&debug_buffer);
    const debug_allocator = fib.allocator();

    const alloc_size = pageSize() * 2 + 50;
    var slice = try allocator.alignedAlloc(u8, .@"16", alloc_size);
    defer allocator.free(slice);

    var stuff_to_free = std.array_list.Managed([]align(16) u8).init(debug_allocator);
    // On Windows, VirtualAlloc returns addresses aligned to a 64K boundary,
    // which is 16 pages, hence the 32. This test may require to increase
    // the size of the allocations feeding the `allocator` parameter if they
    // fail, because of this high over-alignment we want to have.
    while (@intFromPtr(slice.ptr) == mem.alignForward(usize, @intFromPtr(slice.ptr), pageSize() * 32)) {
        try stuff_to_free.append(slice);
        slice = try allocator.alignedAlloc(u8, .@"16", alloc_size);
    }
    while (stuff_to_free.pop()) |item| {
        allocator.free(item);
    }
    slice[0] = 0x12;
    slice[60] = 0x34;

    slice = try allocator.reallocAdvanced(slice, alloc_size / 2, 0);
    try testing.expect(slice[0] == 0x12);
    try testing.expect(slice[60] == 0x34);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `base\_allocator` | `mem.Allocator` | – | – |
| Return | `void` | – | – |

</details>

---


