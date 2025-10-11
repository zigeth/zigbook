# std.builtin

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.builtin` |
| Declarations | 38 |
| Breakdown | 1 function · 30 types · 6 constants · 1 module |
| Generated (unix epoch) | 1760148101 |

## Overview

Types and values provided by the Zig language.

---

## Table of Contents

- [Functions](#functions)
  - [`returnError`](#fn-returnerror)

- [Types](#types)
  - [`StackTrace`](#type-stacktrace)
  - [`GlobalLinkage`](#type-globallinkage)
  - [`SymbolVisibility`](#type-symbolvisibility)
  - [`AtomicOrder`](#type-atomicorder)
  - [`ReduceOp`](#type-reduceop)
  - [`AtomicRmwOp`](#type-atomicrmwop)
  - [`CodeModel`](#type-codemodel)
  - [`OptimizeMode`](#type-optimizemode)
  - [`AddressSpace`](#type-addressspace)
  - [`SourceLocation`](#type-sourcelocation)
  - [`FloatMode`](#type-floatmode)
  - [`Endian`](#type-endian)
  - [`Signedness`](#type-signedness)
  - [`OutputMode`](#type-outputmode)
  - [`LinkMode`](#type-linkmode)
  - [`UnwindTables`](#type-unwindtables)
  - [`WasiExecModel`](#type-wasiexecmodel)
  - [`CallModifier`](#type-callmodifier)
  - [`VaListAarch64`](#type-valistaarch64)
  - [`VaListHexagon`](#type-valisthexagon)
  - [`VaListPowerPc`](#type-valistpowerpc)
  - [`VaListS390x`](#type-valists390x)
  - [`VaListX86\_64`](#type-valistx86-64)
  - [`VaListXtensa`](#type-valistxtensa)
  - [`PrefetchOptions`](#type-prefetchoptions)
  - [`ExportOptions`](#type-exportoptions)
  - [`ExternOptions`](#type-externoptions)
  - [`BranchHint`](#type-branchhint)
  - [`CompilerBackend`](#type-compilerbackend)
  - [`TestFn`](#type-testfn)

- [Modules](#modules)
  - [`assembly`](#module-assembly)

- [Constants](#constants)
  - [`subsystem`](#const-subsystem)
  - [`CallingConvention`](#const-callingconvention)
  - [`TypeId`](#const-typeid)
  - [`Type`](#const-type)
  - [`VaList`](#const-valist)
  - [`panic`](#const-panic)

---

## Types (30)

### <a id="type-stacktrace"></a>`StackTrace`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const StackTrace = struct {
    index: usize,
    instruction_addresses: []usize,

    pub fn format(self: StackTrace, writer: *std.io.Writer) std.io.Writer.Error!void {
        // TODO: re-evaluate whether to use format() methods at all.
        // Until then, avoid an error when using GeneralPurposeAllocator with WebAssembly
        // where it tries to call detectTTYConfig here.
        if (builtin.os.tag == .freestanding) return;

        const debug_info = std.debug.getSelfDebugInfo() catch |err| {
            return writer.print("\nUnable to print stack trace: Unable to open debug info: {s}\n", .{@errorName(err)});
        };
        const tty_config = std.io.tty.detectConfig(std.fs.File.stderr());
        try writer.writeAll("\n");
        std.debug.writeStackTrace(self, writer, debug_info, tty_config) catch |err| {
            try writer.print("Unable to print stack trace: {s}\n", .{@errorName(err)});
        };
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `index` | `usize` | – | |
| `instruction_addresses` | `[]usize` | – | |

</details>

---

### <a id="type-globallinkage"></a>`GlobalLinkage`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const GlobalLinkage = enum(u2) {
    internal,
    strong,
    weak,
    link_once,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `internal` |  |
| `strong` |  |
| `weak` |  |
| `link_once` |  |

</details>

---

### <a id="type-symbolvisibility"></a>`SymbolVisibility`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const SymbolVisibility = enum(u2) {
    default,
    hidden,
    protected,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `default` |  |
| `hidden` |  |
| `protected` |  |

</details>

---

### <a id="type-atomicorder"></a>`AtomicOrder`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const AtomicOrder = enum {
    unordered,
    monotonic,
    acquire,
    release,
    acq_rel,
    seq_cst,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `unordered` |  |
| `monotonic` |  |
| `acquire` |  |
| `release` |  |
| `acq_rel` |  |
| `seq_cst` |  |

</details>

---

### <a id="type-reduceop"></a>`ReduceOp`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const ReduceOp = enum {
    And,
    Or,
    Xor,
    Min,
    Max,
    Add,
    Mul,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `And` |  |
| `Or` |  |
| `Xor` |  |
| `Min` |  |
| `Max` |  |
| `Add` |  |
| `Mul` |  |

</details>

---

### <a id="type-atomicrmwop"></a>`AtomicRmwOp`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const AtomicRmwOp = enum {
    /// Exchange - store the operand unmodified.
    /// Supports enums, integers, and floats.
    Xchg,
    /// Add operand to existing value.
    /// Supports integers and floats.
    /// For integers, two's complement wraparound applies.
    Add,
    /// Subtract operand from existing value.
    /// Supports integers and floats.
    /// For integers, two's complement wraparound applies.
    Sub,
    /// Perform bitwise AND on existing value with operand.
    /// Supports integers.
    And,
    /// Perform bitwise NAND on existing value with operand.
    /// Supports integers.
    Nand,
    /// Perform bitwise OR on existing value with operand.
    /// Supports integers.
    Or,
    /// Perform bitwise XOR on existing value with operand.
    /// Supports integers.
    Xor,
    /// Store operand if it is larger than the existing value.
    /// Supports integers and floats.
    Max,
    /// Store operand if it is smaller than the existing value.
    /// Supports integers and floats.
    Min,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `Xchg` | Exchange - store the operand unmodified. Supports enums, integers, and floats. |
| `Add` | Add operand to existing value. Supports integers and floats. For integers, two's complement wraparound applies. |
| `Sub` | Subtract operand from existing value. Supports integers and floats. For integers, two's complement wraparound applies. |
| `And` | Perform bitwise AND on existing value with operand. Supports integers. |
| `Nand` | Perform bitwise NAND on existing value with operand. Supports integers. |
| `Or` | Perform bitwise OR on existing value with operand. Supports integers. |
| `Xor` | Perform bitwise XOR on existing value with operand. Supports integers. |
| `Max` | Store operand if it is larger than the existing value. Supports integers and floats. |
| `Min` | Store operand if it is smaller than the existing value. Supports integers and floats. |

</details>

---

### <a id="type-codemodel"></a>`CodeModel`

<details class="declaration-card" open>
<summary>Container – The code model puts constraints on the location of symbols and the size of code and data</summary>

The code model puts constraints on the location of symbols and the size of code and data.
The selection of a code model is a trade off on speed and restrictions that needs to be selected on a per application basis to meet its requirements.
A slightly more detailed explanation can be found in (for example) the [System V Application Binary Interface (x86_64)](https://github.com/hjl-tools/x86-psABI/wiki/x86-64-psABI-1.0.pdf) 3.5.1.

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const CodeModel = enum {
    default,
    extreme,
    kernel,
    large,
    medany,
    medium,
    medlow,
    medmid,
    normal,
    small,
    tiny,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `default` |  |
| `extreme` |  |
| `kernel` |  |
| `large` |  |
| `medany` |  |
| `medium` |  |
| `medlow` |  |
| `medmid` |  |
| `normal` |  |
| `small` |  |
| `tiny` |  |

</details>

---

### <a id="type-optimizemode"></a>`OptimizeMode`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const OptimizeMode = enum {
    Debug,
    ReleaseSafe,
    ReleaseFast,
    ReleaseSmall,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `Debug` |  |
| `ReleaseSafe` |  |
| `ReleaseFast` |  |
| `ReleaseSmall` |  |

</details>

---

### <a id="type-addressspace"></a>`AddressSpace`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const AddressSpace = enum(u5) {
    /// The places where a user can specify an address space attribute
    pub const Context = enum {
        /// A function is specified to be placed in a certain address space.
        function,
        /// A (global) variable is specified to be placed in a certain address space.
        /// In contrast to .constant, these values (and thus the address space they will be
        /// placed in) are required to be mutable.
        variable,
        /// A (global) constant value is specified to be placed in a certain address space.
        /// In contrast to .variable, values placed in this address space are not required to be mutable.
        constant,
        /// A pointer is ascripted to point into a certain address space.
        pointer,
    };

    // CPU address spaces.
    generic,
    gs,
    fs,
    ss,

    // GPU address spaces.
    global,
    constant,
    param,
    shared,
    local,
    input,
    output,
    uniform,
    push_constant,
    storage_buffer,
    physical_storage_buffer,

    // AVR address spaces.
    flash,
    flash1,
    flash2,
    flash3,
    flash4,
    flash5,

    // Propeller address spaces.

    /// This address space only addresses the cog-local ram.
    cog,

    /// This address space only addresses shared hub ram.
    hub,

    /// This address space only addresses the "lookup" ram
    lut,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `generic` |  |
| `gs` |  |
| `fs` |  |
| `ss` |  |
| `global` |  |
| `constant` |  |
| `param` |  |
| `shared` |  |
| `local` |  |
| `input` |  |
| `output` |  |
| `uniform` |  |
| `push_constant` |  |
| `storage_buffer` |  |
| `physical_storage_buffer` |  |
| `flash` |  |
| `flash1` |  |
| `flash2` |  |
| `flash3` |  |
| `flash4` |  |
| `flash5` |  |
| `cog` | This address space only addresses the cog-local ram. |
| `hub` | This address space only addresses shared hub ram. |
| `lut` | This address space only addresses the "lookup" ram |

</details>

---

### <a id="type-sourcelocation"></a>`SourceLocation`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const SourceLocation = struct {
    /// The name chosen when compiling. Not a file path.
    module: [:0]const u8,
    /// Relative to the root directory of its module.
    file: [:0]const u8,
    fn_name: [:0]const u8,
    line: u32,
    column: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `module` | `[:0]const u8` | – | The name chosen when compiling. Not a file path. |
| `file` | `[:0]const u8` | – | Relative to the root directory of its module. |
| `fn_name` | `[:0]const u8` | – | |
| `line` | `u32` | – | |
| `column` | `u32` | – | |

</details>

---

### <a id="type-floatmode"></a>`FloatMode`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const FloatMode = enum {
    strict,
    optimized,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `strict` |  |
| `optimized` |  |

</details>

---

### <a id="type-endian"></a>`Endian`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const Endian = enum {
    big,
    little,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `big` |  |
| `little` |  |

</details>

---

### <a id="type-signedness"></a>`Signedness`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const Signedness = enum(u1) {
    signed,
    unsigned,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `signed` |  |
| `unsigned` |  |

</details>

---

### <a id="type-outputmode"></a>`OutputMode`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const OutputMode = enum {
    Exe,
    Lib,
    Obj,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `Exe` |  |
| `Lib` |  |
| `Obj` |  |

</details>

---

### <a id="type-linkmode"></a>`LinkMode`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const LinkMode = enum {
    static,
    dynamic,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `static` |  |
| `dynamic` |  |

</details>

---

### <a id="type-unwindtables"></a>`UnwindTables`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const UnwindTables = enum {
    none,
    sync,
    async,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `none` |  |
| `sync` |  |
| `async` |  |

</details>

---

### <a id="type-wasiexecmodel"></a>`WasiExecModel`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const WasiExecModel = enum {
    command,
    reactor,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `command` |  |
| `reactor` |  |

</details>

---

### <a id="type-callmodifier"></a>`CallModifier`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const CallModifier = enum {
    /// Equivalent to function call syntax.
    auto,
    /// Prevents tail call optimization. This guarantees that the return
    /// address will point to the callsite, as opposed to the callsite's
    /// callsite. If the call is otherwise required to be tail-called
    /// or inlined, a compile error is emitted instead.
    never_tail,
    /// Guarantees that the call will not be inlined. If the call is
    /// otherwise required to be inlined, a compile error is emitted instead.
    never_inline,
    /// Asserts that the function call will not suspend. This allows a
    /// non-async function to call an async function.
    no_suspend,
    /// Guarantees that the call will be generated with tail call optimization.
    /// If this is not possible, a compile error is emitted instead.
    always_tail,
    /// Guarantees that the call will be inlined at the callsite.
    /// If this is not possible, a compile error is emitted instead.
    always_inline,
    /// Evaluates the call at compile-time. If the call cannot be completed at
    /// compile-time, a compile error is emitted instead.
    compile_time,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `auto` | Equivalent to function call syntax. |
| `never_tail` | Prevents tail call optimization. This guarantees that the return address will point to the callsite, as opposed to the callsite's callsite. If the call is otherwise required to be tail-called or inlined, a compile error is emitted instead. |
| `never_inline` | Guarantees that the call will not be inlined. If the call is otherwise required to be inlined, a compile error is emitted instead. |
| `no_suspend` | Asserts that the function call will not suspend. This allows a non-async function to call an async function. |
| `always_tail` | Guarantees that the call will be generated with tail call optimization. If this is not possible, a compile error is emitted instead. |
| `always_inline` | Guarantees that the call will be inlined at the callsite. If this is not possible, a compile error is emitted instead. |
| `compile_time` | Evaluates the call at compile-time. If the call cannot be completed at compile-time, a compile error is emitted instead. |

</details>

---

### <a id="type-valistaarch64"></a>`VaListAarch64`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const VaListAarch64 = extern struct {
    __stack: *anyopaque,
    __gr_top: *anyopaque,
    __vr_top: *anyopaque,
    __gr_offs: c_int,
    __vr_offs: c_int,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `__stack` | `*anyopaque` | – | |
| `__gr_top` | `*anyopaque` | – | |
| `__vr_top` | `*anyopaque` | – | |
| `__gr_offs` | `c_int` | – | |
| `__vr_offs` | `c_int` | – | |

</details>

---

### <a id="type-valisthexagon"></a>`VaListHexagon`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const VaListHexagon = extern struct {
    __gpr: c_long,
    __fpr: c_long,
    __overflow_arg_area: *anyopaque,
    __reg_save_area: *anyopaque,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `__gpr` | `c_long` | – | |
| `__fpr` | `c_long` | – | |
| `__overflow_arg_area` | `*anyopaque` | – | |
| `__reg_save_area` | `*anyopaque` | – | |

</details>

---

### <a id="type-valistpowerpc"></a>`VaListPowerPc`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const VaListPowerPc = extern struct {
    gpr: u8,
    fpr: u8,
    reserved: c_ushort,
    overflow_arg_area: *anyopaque,
    reg_save_area: *anyopaque,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `gpr` | `u8` | – | |
| `fpr` | `u8` | – | |
| `reserved` | `c_ushort` | – | |
| `overflow_arg_area` | `*anyopaque` | – | |
| `reg_save_area` | `*anyopaque` | – | |

</details>

---

### <a id="type-valists390x"></a>`VaListS390x`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const VaListS390x = extern struct {
    __current_saved_reg_area_pointer: *anyopaque,
    __saved_reg_area_end_pointer: *anyopaque,
    __overflow_area_pointer: *anyopaque,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `__current_saved_reg_area_pointer` | `*anyopaque` | – | |
| `__saved_reg_area_end_pointer` | `*anyopaque` | – | |
| `__overflow_area_pointer` | `*anyopaque` | – | |

</details>

---

### <a id="type-valistx86-64"></a>`VaListX86_64`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const VaListX86_64 = extern struct {
    gp_offset: c_uint,
    fp_offset: c_uint,
    overflow_arg_area: *anyopaque,
    reg_save_area: *anyopaque,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `gp_offset` | `c_uint` | – | |
| `fp_offset` | `c_uint` | – | |
| `overflow_arg_area` | `*anyopaque` | – | |
| `reg_save_area` | `*anyopaque` | – | |

</details>

---

### <a id="type-valistxtensa"></a>`VaListXtensa`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const VaListXtensa = extern struct {
    __va_stk: *c_int,
    __va_reg: *c_int,
    __va_ndx: c_int,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `__va_stk` | `*c_int` | – | |
| `__va_reg` | `*c_int` | – | |
| `__va_ndx` | `c_int` | – | |

</details>

---

### <a id="type-prefetchoptions"></a>`PrefetchOptions`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const PrefetchOptions = struct {
    /// Whether the prefetch should prepare for a read or a write.
    rw: Rw = .read,
    /// The data's locality in an inclusive range from 0 to 3.
    ///
    /// 0 means no temporal locality. That is, the data can be immediately
    /// dropped from the cache after it is accessed.
    ///
    /// 3 means high temporal locality. That is, the data should be kept in
    /// the cache as it is likely to be accessed again soon.
    locality: u2 = 3,
    /// The cache that the prefetch should be performed on.
    cache: Cache = .data,

    pub const Rw = enum(u1) {
        read,
        write,
    };

    pub const Cache = enum(u1) {
        instruction,
        data,
    };
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `rw` | `Rw` | `.read` | Whether the prefetch should prepare for a read or a write. |
| `locality` | `u2` | `3` | The data's locality in an inclusive range from 0 to 3. 0 means no temporal locality. That is, the data can be immediately dropped from the cache after it is accessed. 3 means high temporal locality. That is, the data should be kept in the cache as it is likely to be accessed again soon. |
| `cache` | `Cache` | `.data` | The cache that the prefetch should be performed on. |

</details>

---

### <a id="type-exportoptions"></a>`ExportOptions`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const ExportOptions = struct {
    name: []const u8,
    linkage: GlobalLinkage = .strong,
    section: ?[]const u8 = null,
    visibility: SymbolVisibility = .default,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `[]const u8` | – | |
| `linkage` | [`GlobalLinkage`](#type-globallinkage) | `.strong` | |
| `section` | `?[]const u8` | `null` | |
| `visibility` | [`SymbolVisibility`](#type-symbolvisibility) | `.default` | |

</details>

---

### <a id="type-externoptions"></a>`ExternOptions`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const ExternOptions = struct {
    name: []const u8,
    library_name: ?[]const u8 = null,
    linkage: GlobalLinkage = .strong,
    visibility: SymbolVisibility = .default,
    /// Setting this to `true` makes the `@extern` a runtime value.
    is_thread_local: bool = false,
    is_dll_import: bool = false,
    relocation: Relocation = .any,

    pub const Relocation = enum(u1) {
        /// Any type of relocation is allowed.
        any,
        /// A program-counter-relative relocation is required.
        /// Using this value makes the `@extern` a runtime value.
        pcrel,
    };
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `[]const u8` | – | |
| `library_name` | `?[]const u8` | `null` | |
| `linkage` | [`GlobalLinkage`](#type-globallinkage) | `.strong` | |
| `visibility` | [`SymbolVisibility`](#type-symbolvisibility) | `.default` | |
| `is_thread_local` | `bool` | `false` | Setting this to \`true\` makes the \`@extern\` a runtime value. |
| `is_dll_import` | `bool` | `false` | |
| `relocation` | `Relocation` | `.any` | |

</details>

---

### <a id="type-branchhint"></a>`BranchHint`

<details class="declaration-card" open>
<summary>Container – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const BranchHint = enum(u3) {
    /// Equivalent to no hint given.
    none,
    /// This branch of control flow is more likely to be reached than its peers.
    /// The optimizer should optimize for reaching it.
    likely,
    /// This branch of control flow is less likely to be reached than its peers.
    /// The optimizer should optimize for not reaching it.
    unlikely,
    /// This branch of control flow is unlikely to *ever* be reached.
    /// The optimizer may place it in a different page of memory to optimize other branches.
    cold,
    /// It is difficult to predict whether this branch of control flow will be reached.
    /// The optimizer should avoid branching behavior with expensive mispredictions.
    unpredictable,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `none` | Equivalent to no hint given. |
| `likely` | This branch of control flow is more likely to be reached than its peers. The optimizer should optimize for reaching it. |
| `unlikely` | This branch of control flow is less likely to be reached than its peers. The optimizer should optimize for not reaching it. |
| `cold` | This branch of control flow is unlikely to \*ever\* be reached. The optimizer may place it in a different page of memory to optimize other branches. |
| `unpredictable` | It is difficult to predict whether this branch of control flow will be reached. The optimizer should avoid branching behavior with expensive mispredictions. |

</details>

---

### <a id="type-compilerbackend"></a>`CompilerBackend`

<details class="declaration-card" open>
<summary>Container – This enum is set by the compiler and communicates which compiler backend is</summary>

This enum is set by the compiler and communicates which compiler backend is
used to produce machine code.
Think carefully before deciding to observe this value. Nearly all code should
be agnostic to the backend that implements the language. The use case
to use this value is to **work around problems with compiler implementations.**

Avoid failing the compilation if the compiler backend does not match a
whitelist of backends; rather one should detect that a known problem would
occur in a blacklist of backends.

The enum is nonexhaustive so that alternate Zig language implementations may
choose a number as their tag (please use a random number generator rather
than a "cute" number) and codebases can interact with these values even if
this upstream enum does not have a name for the number. Of course, upstream
is happy to accept pull requests to add Zig implementations to this enum.

This data structure is part of the Zig language specification.

```zig
pub const CompilerBackend = enum(u64) {
    /// It is allowed for a compiler implementation to not reveal its identity,
    /// in which case this value is appropriate. Be cool and make sure your
    /// code supports `other` Zig compilers!
    other = 0,
    /// The original Zig compiler created in 2015 by Andrew Kelley. Implemented
    /// in C++. Used LLVM. Deleted from the ZSF ziglang/zig codebase on
    /// December 6th, 2022.
    stage1 = 1,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// LLVM backend.
    stage2_llvm = 2,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// backend that generates C source code.
    /// Note that one can observe whether the compilation will output C code
    /// directly with `object_format` value rather than the `compiler_backend` value.
    stage2_c = 3,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// WebAssembly backend.
    stage2_wasm = 4,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// arm backend.
    stage2_arm = 5,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// x86_64 backend.
    stage2_x86_64 = 6,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// aarch64 backend.
    stage2_aarch64 = 7,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// x86 backend.
    stage2_x86 = 8,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// riscv64 backend.
    stage2_riscv64 = 9,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// sparc64 backend.
    stage2_sparc64 = 10,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// spirv backend.
    stage2_spirv = 11,
    /// The reference implementation self-hosted compiler of Zig, using the
    /// powerpc backend.
    stage2_powerpc = 12,

    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `other` | It is allowed for a compiler implementation to not reveal its identity, in which case this value is appropriate. Be cool and make sure your code supports \`other\` Zig compilers! |
| `stage1` | The original Zig compiler created in 2015 by Andrew Kelley. Implemented in C++. Used LLVM. Deleted from the ZSF ziglang/zig codebase on December 6th, 2022. |
| `stage2_llvm` | The reference implementation self-hosted compiler of Zig, using the LLVM backend. |
| `stage2_c` | The reference implementation self-hosted compiler of Zig, using the backend that generates C source code. Note that one can observe whether the compilation will output C code directly with \`object\_format\` value rather than the \`compiler\_backend\` value. |
| `stage2_wasm` | The reference implementation self-hosted compiler of Zig, using the WebAssembly backend. |
| `stage2_arm` | The reference implementation self-hosted compiler of Zig, using the arm backend. |
| `stage2_x86_64` | The reference implementation self-hosted compiler of Zig, using the x86\_64 backend. |
| `stage2_aarch64` | The reference implementation self-hosted compiler of Zig, using the aarch64 backend. |
| `stage2_x86` | The reference implementation self-hosted compiler of Zig, using the x86 backend. |
| `stage2_riscv64` | The reference implementation self-hosted compiler of Zig, using the riscv64 backend. |
| `stage2_sparc64` | The reference implementation self-hosted compiler of Zig, using the sparc64 backend. |
| `stage2_spirv` | The reference implementation self-hosted compiler of Zig, using the spirv backend. |
| `stage2_powerpc` | The reference implementation self-hosted compiler of Zig, using the powerpc backend. |
| `_` |  |

</details>

---

### <a id="type-testfn"></a>`TestFn`

<details class="declaration-card" open>
<summary>Container – This function type is used by the Zig language code generation and</summary>

This function type is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const TestFn = struct {
    name: []const u8,
    func: *const fn () anyerror!void,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `[]const u8` | – | |
| `func` | `*const fn () anyerror!void` | – | |

</details>

---

## Modules (1)

### <a id="module-assembly"></a>`assembly`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const assembly = @import("builtin/assembly.zig")
```

> **Module:** `builtin/assembly.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/builtin/assembly.zig)

</details>

---

## Constants (6)

### <a id="const-subsystem"></a>`subsystem`

<details class="declaration-card" open>
<summary>Constant – `explicit_subsystem` is missing when the subsystem is automatically detected,</summary>

`explicit_subsystem` is missing when the subsystem is automatically detected,
so Zig standard library has the subsystem detection logic here. This should generally be
used rather than `explicit_subsystem`.
On non-Windows targets, this is `null`.

```zig
pub const subsystem: ?std.Target.SubSystem = blk: {
    if (@hasDecl(builtin, "explicit_subsystem")) break :blk builtin.explicit_subsystem;
    switch (builtin.os.tag) {
        .windows => {
            if (builtin.is_test) {
                break :blk std.Target.SubSystem.Console;
            }
            if (@hasDecl(root, "main") or
                @hasDecl(root, "WinMain") or
                @hasDecl(root, "wWinMain") or
                @hasDecl(root, "WinMainCRTStartup") or
                @hasDecl(root, "wWinMainCRTStartup"))
            {
                break :blk std.Target.SubSystem.Windows;
            } else {
                break :blk std.Target.SubSystem.Console;
            }
        },
        else => break :blk null,
    }
}
```

</details>

---

### <a id="const-callingconvention"></a>`CallingConvention`

<details class="declaration-card" open>
<summary>Constant – The calling convention of a function defines how arguments and return values are passed, as well</summary>

The calling convention of a function defines how arguments and return values are passed, as well
as any other requirements which callers and callees must respect, such as register preservation
and stack alignment.

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const CallingConvention = union(enum(u8)) {
    pub const Tag = @typeInfo(CallingConvention).@"union".tag_type.?;

    /// This is an alias for the default C calling convention for this target.
    /// Functions marked as `extern` or `export` are given this calling convention by default.
    pub const c = builtin.target.cCallingConvention().?;

    pub const winapi: CallingConvention = switch (builtin.target.cpu.arch) {
        .x86_64 => .{ .x86_64_win = .{} },
        .x86 => .{ .x86_stdcall = .{} },
        .aarch64 => .{ .aarch64_aapcs_win = .{} },
        .thumb => .{ .arm_aapcs_vfp = .{} },
        else => unreachable,
    };

    pub const kernel: CallingConvention = switch (builtin.target.cpu.arch) {
        .amdgcn => .amdgcn_kernel,
        .nvptx, .nvptx64 => .nvptx_kernel,
        .spirv32, .spirv64 => .spirv_kernel,
        else => unreachable,
    };

    /// The default Zig calling convention when neither `export` nor `inline` is specified.
    /// This calling convention makes no guarantees about stack alignment, registers, etc.
    /// It can only be used within this Zig compilation unit.
    auto,

    /// The calling convention of a function that can be called with `async` syntax. An `async` call
    /// of a runtime-known function must target a function with this calling convention.
    /// Comptime-known functions with other calling conventions may be coerced to this one.
    async,

    /// Functions with this calling convention have no prologue or epilogue, making the function
    /// uncallable in regular Zig code. This can be useful when integrating with assembly.
    naked,

    /// This calling convention is exactly equivalent to using the `inline` keyword on a function
    /// definition. This function will be semantically inlined by the Zig compiler at call sites.
    /// Pointers to inline functions are comptime-only.
    @"inline",

    // Calling conventions for the `x86_64` architecture.
    x86_64_sysv: CommonOptions,
    x86_64_win: CommonOptions,
    x86_64_regcall_v3_sysv: CommonOptions,
    x86_64_regcall_v4_win: CommonOptions,
    x86_64_vectorcall: CommonOptions,
    x86_64_interrupt: CommonOptions,

    // Calling conventions for the `x86` architecture.
    x86_sysv: X86RegparmOptions,
    x86_win: X86RegparmOptions,
    x86_stdcall: X86RegparmOptions,
    x86_fastcall: CommonOptions,
    x86_thiscall: CommonOptions,
    x86_thiscall_mingw: CommonOptions,
    x86_regcall_v3: CommonOptions,
    x86_regcall_v4_win: CommonOptions,
    x86_vectorcall: CommonOptions,
    x86_interrupt: CommonOptions,

    // Calling conventions for the `aarch64` and `aarch64_be` architectures.
    aarch64_aapcs: CommonOptions,
    aarch64_aapcs_darwin: CommonOptions,
    aarch64_aapcs_win: CommonOptions,
    aarch64_vfabi: CommonOptions,
    aarch64_vfabi_sve: CommonOptions,

    // Calling convetions for the `arm`, `armeb`, `thumb`, and `thumbeb` architectures.
    /// ARM Architecture Procedure Call Standard
    arm_aapcs: CommonOptions,
    /// ARM Architecture Procedure Call Standard Vector Floating-Point
    arm_aapcs_vfp: CommonOptions,
    arm_interrupt: ArmInterruptOptions,

    // Calling conventions for the `mips64` and `mips64el` architectures.
    mips64_n64: CommonOptions,
    mips64_n32: CommonOptions,
    mips64_interrupt: MipsInterruptOptions,

    // Calling conventions for the `mips` and `mipsel` architectures.
    mips_o32: CommonOptions,
    mips_interrupt: MipsInterruptOptions,

    // Calling conventions for the `riscv64` architecture.
    riscv64_lp64: CommonOptions,
    riscv64_lp64_v: CommonOptions,
    riscv64_interrupt: RiscvInterruptOptions,

    // Calling conventions for the `riscv32` architecture.
    riscv32_ilp32: CommonOptions,
    riscv32_ilp32_v: CommonOptions,
    riscv32_interrupt: RiscvInterruptOptions,

    // Calling conventions for the `sparc64` architecture.
    sparc64_sysv: CommonOptions,

    // Calling conventions for the `sparc` architecture.
    sparc_sysv: CommonOptions,

    // Calling conventions for the `powerpc64` and `powerpc64le` architectures.
    powerpc64_elf: CommonOptions,
    powerpc64_elf_altivec: CommonOptions,
    powerpc64_elf_v2: CommonOptions,

    // Calling conventions for the `powerpc` and `powerpcle` architectures.
    powerpc_sysv: CommonOptions,
    powerpc_sysv_altivec: CommonOptions,
    powerpc_aix: CommonOptions,
    powerpc_aix_altivec: CommonOptions,

    /// The standard `wasm32` and `wasm64` calling convention, as specified in the WebAssembly Tool Conventions.
    wasm_mvp: CommonOptions,

    /// The standard `arc` calling convention.
    arc_sysv: CommonOptions,

    // Calling conventions for the `avr` architecture.
    avr_gnu,
    avr_builtin,
    avr_signal,
    avr_interrupt,

    /// The standard `bpfel`/`bpfeb` calling convention.
    bpf_std: CommonOptions,

    // Calling conventions for the `csky` architecture.
    csky_sysv: CommonOptions,
    csky_interrupt: CommonOptions,

    // Calling conventions for the `hexagon` architecture.
    hexagon_sysv: CommonOptions,
    hexagon_sysv_hvx: CommonOptions,

    /// The standard `lanai` calling convention.
    lanai_sysv: CommonOptions,

    /// The standard `loongarch64` calling convention.
    loongarch64_lp64: CommonOptions,

    /// The standard `loongarch32` calling convention.
    loongarch32_ilp32: CommonOptions,

    // Calling conventions for the `m68k` architecture.
    m68k_sysv: CommonOptions,
    m68k_gnu: CommonOptions,
    m68k_rtd: CommonOptions,
    m68k_interrupt: CommonOptions,

    /// The standard `msp430` calling convention.
    msp430_eabi: CommonOptions,

    /// The standard `or1k` calling convention.
    or1k_sysv: CommonOptions,

    /// The standard `propeller` calling convention.
    propeller_sysv: CommonOptions,

    // Calling conventions for the `s390x` architecture.
    s390x_sysv: CommonOptions,
    s390x_sysv_vx: CommonOptions,

    /// The standard `ve` calling convention.
    ve_sysv: CommonOptions,

    // Calling conventions for the `xcore` architecture.
    xcore_xs1: CommonOptions,
    xcore_xs2: CommonOptions,

    // Calling conventions for the `xtensa` architecture.
    xtensa_call0: CommonOptions,
    xtensa_windowed: CommonOptions,

    // Calling conventions for the `amdgcn` architecture.
    amdgcn_device: CommonOptions,
    amdgcn_kernel,
    amdgcn_cs: CommonOptions,

    // Calling conventions for the `nvptx` and `nvptx64` architectures.
    nvptx_device,
    nvptx_kernel,

    // Calling conventions for kernels and shaders on the `spirv`, `spirv32`, and `spirv64` architectures.
    spirv_device,
    spirv_kernel,
    spirv_fragment,
    spirv_vertex,

    /// Options shared across most calling conventions.
    pub const CommonOptions = struct {
        /// The boundary the stack is aligned to when the function is called.
        /// `null` means the default for this calling convention.
        incoming_stack_alignment: ?u64 = null,
    };

    /// Options for x86 calling conventions which support the regparm attribute to pass some
    /// arguments in registers.
    pub const X86RegparmOptions = struct {
        /// The boundary the stack is aligned to when the function is called.
        /// `null` means the default for this calling convention.
        incoming_stack_alignment: ?u64 = null,
        /// The number of arguments to pass in registers before passing the remaining arguments
        /// according to the calling convention.
        /// Equivalent to `__attribute__((regparm(x)))` in Clang and GCC.
        register_params: u2 = 0,
    };

    /// Options for the `arm_interrupt` calling convention.
    pub const ArmInterruptOptions = struct {
        /// The boundary the stack is aligned to when the function is called.
        /// `null` means the default for this calling convention.
        incoming_stack_alignment: ?u64 = null,
        /// The kind of interrupt being received.
        type: InterruptType = .generic,

        pub const InterruptType = enum(u3) {
            generic,
            irq,
            fiq,
            swi,
            abort,
            undef,
        };
    };

    /// Options for the `mips_interrupt` and `mips64_interrupt` calling conventions.
    pub const MipsInterruptOptions = struct {
        /// The boundary the stack is aligned to when the function is called.
        /// `null` means the default for this calling convention.
        incoming_stack_alignment: ?u64 = null,
        /// The interrupt mode.
        mode: InterruptMode = .eic,

        pub const InterruptMode = enum(u4) {
            eic,
            sw0,
            sw1,
            hw0,
            hw1,
            hw2,
            hw3,
            hw4,
            hw5,
        };
    };

    /// Options for the `riscv32_interrupt` and `riscv64_interrupt` calling conventions.
    pub const RiscvInterruptOptions = struct {
        /// The boundary the stack is aligned to when the function is called.
        /// `null` means the default for this calling convention.
        incoming_stack_alignment: ?u64 = null,
        /// The privilege mode.
        mode: PrivilegeMode,

        pub const PrivilegeMode = enum(u2) {
            supervisor,
            machine,
        };
    };

    /// Returns the array of `std.Target.Cpu.Arch` to which this `CallingConvention` applies.
    /// Asserts that `cc` is not `.auto`, `.@"async"`, `.naked`, or `.@"inline"`.
    pub fn archs(cc: CallingConvention) []const std.Target.Cpu.Arch {
        return std.Target.Cpu.Arch.fromCallingConvention(cc);
    }

    pub fn eql(a: CallingConvention, b: CallingConvention) bool {
        return std.meta.eql(a, b);
    }

    pub fn withStackAlign(cc: CallingConvention, incoming_stack_alignment: u64) CallingConvention {
        const tag: CallingConvention.Tag = cc;
        var result = cc;
        @field(result, @tagName(tag)).incoming_stack_alignment = incoming_stack_alignment;
        return result;
    }
}
```

</details>

---

### <a id="const-typeid"></a>`TypeId`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const TypeId = std.meta.Tag(Type)
```

</details>

---

### <a id="const-type"></a>`Type`

<details class="declaration-card" open>
<summary>Constant – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const Type = union(enum) {
    type: void,
    void: void,
    bool: void,
    noreturn: void,
    int: Int,
    float: Float,
    pointer: Pointer,
    array: Array,
    @"struct": Struct,
    comptime_float: void,
    comptime_int: void,
    undefined: void,
    null: void,
    optional: Optional,
    error_union: ErrorUnion,
    error_set: ErrorSet,
    @"enum": Enum,
    @"union": Union,
    @"fn": Fn,
    @"opaque": Opaque,
    frame: Frame,
    @"anyframe": AnyFrame,
    vector: Vector,
    enum_literal: void,

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Int = struct {
        signedness: Signedness,
        bits: u16,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Float = struct {
        bits: u16,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Pointer = struct {
        size: Size,
        is_const: bool,
        is_volatile: bool,
        /// TODO make this u16 instead of comptime_int
        alignment: comptime_int,
        address_space: AddressSpace,
        child: type,
        is_allowzero: bool,

        /// The type of the sentinel is the element type of the pointer, which is
        /// the value of the `child` field in this struct. However there is no way
        /// to refer to that type here, so we use `*const anyopaque`.
        /// See also: `sentinel`
        sentinel_ptr: ?*const anyopaque,

        /// Loads the pointer type's sentinel value from `sentinel_ptr`.
        /// Returns `null` if the pointer type has no sentinel.
        pub inline fn sentinel(comptime ptr: Pointer) ?ptr.child {
            const sp: *const ptr.child = @ptrCast(@alignCast(ptr.sentinel_ptr orelse return null));
            return sp.*;
        }

        /// This data structure is used by the Zig language code generation and
        /// therefore must be kept in sync with the compiler implementation.
        pub const Size = enum(u2) {
            one,
            many,
            slice,
            c,
        };
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Array = struct {
        len: comptime_int,
        child: type,

        /// The type of the sentinel is the element type of the array, which is
        /// the value of the `child` field in this struct. However there is no way
        /// to refer to that type here, so we use `*const anyopaque`.
        /// See also: `sentinel`.
        sentinel_ptr: ?*const anyopaque,

        /// Loads the array type's sentinel value from `sentinel_ptr`.
        /// Returns `null` if the array type has no sentinel.
        pub inline fn sentinel(comptime arr: Array) ?arr.child {
            const sp: *const arr.child = @ptrCast(@alignCast(arr.sentinel_ptr orelse return null));
            return sp.*;
        }
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const ContainerLayout = enum(u2) {
        auto,
        @"extern",
        @"packed",
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const StructField = struct {
        name: [:0]const u8,
        type: type,
        /// The type of the default value is the type of this struct field, which
        /// is the value of the `type` field in this struct. However there is no
        /// way to refer to that type here, so we use `*const anyopaque`.
        /// See also: `defaultValue`.
        default_value_ptr: ?*const anyopaque,
        is_comptime: bool,
        alignment: comptime_int,

        /// Loads the field's default value from `default_value_ptr`.
        /// Returns `null` if the field has no default value.
        pub inline fn defaultValue(comptime sf: StructField) ?sf.type {
            const dp: *const sf.type = @ptrCast(@alignCast(sf.default_value_ptr orelse return null));
            return dp.*;
        }
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Struct = struct {
        layout: ContainerLayout,
        /// Only valid if layout is .@"packed"
        backing_integer: ?type = null,
        fields: []const StructField,
        decls: []const Declaration,
        is_tuple: bool,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Optional = struct {
        child: type,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const ErrorUnion = struct {
        error_set: type,
        payload: type,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Error = struct {
        name: [:0]const u8,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const ErrorSet = ?[]const Error;

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const EnumField = struct {
        name: [:0]const u8,
        value: comptime_int,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Enum = struct {
        tag_type: type,
        fields: []const EnumField,
        decls: []const Declaration,
        is_exhaustive: bool,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const UnionField = struct {
        name: [:0]const u8,
        type: type,
        alignment: comptime_int,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Union = struct {
        layout: ContainerLayout,
        tag_type: ?type,
        fields: []const UnionField,
        decls: []const Declaration,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Fn = struct {
        calling_convention: CallingConvention,
        is_generic: bool,
        is_var_args: bool,
        /// TODO change the language spec to make this not optional.
        return_type: ?type,
        params: []const Param,

        /// This data structure is used by the Zig language code generation and
        /// therefore must be kept in sync with the compiler implementation.
        pub const Param = struct {
            is_generic: bool,
            is_noalias: bool,
            type: ?type,
        };
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Opaque = struct {
        decls: []const Declaration,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Frame = struct {
        function: *const anyopaque,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const AnyFrame = struct {
        child: ?type,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Vector = struct {
        len: comptime_int,
        child: type,
    };

    /// This data structure is used by the Zig language code generation and
    /// therefore must be kept in sync with the compiler implementation.
    pub const Declaration = struct {
        name: [:0]const u8,
    };
}
```

</details>

---

### <a id="const-valist"></a>`VaList`

<details class="declaration-card" open>
<summary>Constant – This data structure is used by the Zig language code generation and</summary>

This data structure is used by the Zig language code generation and
therefore must be kept in sync with the compiler implementation.

```zig
pub const VaList = switch (builtin.cpu.arch) {
    .aarch64, .aarch64_be => switch (builtin.os.tag) {
        .windows => *u8,
        .ios, .macos, .tvos, .watchos, .visionos => *u8,
        else => switch (builtin.zig_backend) {
            else => VaListAarch64,
            .stage2_llvm => @compileError("disabled due to miscompilations"),
        },
    },
    .arm, .armeb, .thumb, .thumbeb => switch (builtin.os.tag) {
        .ios, .macos, .tvos, .watchos, .visionos => *u8,
        else => *anyopaque,
    },
    .amdgcn => *u8,
    .avr => *anyopaque,
    .bpfel, .bpfeb => *anyopaque,
    .hexagon => if (builtin.target.abi.isMusl()) VaListHexagon else *u8,
    .loongarch32, .loongarch64 => *anyopaque,
    .mips, .mipsel, .mips64, .mips64el => *anyopaque,
    .riscv32, .riscv64 => *anyopaque,
    .powerpc, .powerpcle => switch (builtin.os.tag) {
        .ios, .macos, .tvos, .watchos, .visionos, .aix => *u8,
        else => VaListPowerPc,
    },
    .powerpc64, .powerpc64le => *u8,
    .sparc, .sparc64 => *anyopaque,
    .spirv32, .spirv64 => *anyopaque,
    .s390x => VaListS390x,
    .wasm32, .wasm64 => *anyopaque,
    .x86 => *u8,
    .x86_64 => switch (builtin.os.tag) {
        .windows => switch (builtin.zig_backend) {
            else => *u8,
            .stage2_llvm => @compileError("disabled due to miscompilations"),
        },
        else => VaListX86_64,
    },
    .xtensa => VaListXtensa,
    else => @compileError("VaList not supported for this target yet"),
}
```

</details>

---

### <a id="const-panic"></a>`panic`

<details class="declaration-card" open>
<summary>Constant – This namespace is used by the Zig compiler to emit various kinds of safety</summary>

This namespace is used by the Zig compiler to emit various kinds of safety
panics. These can be overridden by making a public `panic` namespace in the
root source file.

```zig
pub const panic: type = p: {
    if (@hasDecl(root, "panic")) {
        if (@TypeOf(root.panic) != type) {
            // Deprecated; make `panic` a namespace instead.
            break :p std.debug.FullPanic(struct {
                fn panic(msg: []const u8, ra: ?usize) noreturn {
                    root.panic(msg, @errorReturnTrace(), ra);
                }
            }.panic);
        }
        break :p root.panic;
    }
    break :p switch (builtin.zig_backend) {
        .stage2_powerpc,
        .stage2_riscv64,
        => std.debug.simple_panic,
        else => std.debug.FullPanic(std.debug.defaultPanic),
    };
}
```

</details>

---

## Functions (1)

### <a id="fn-returnerror"></a>`returnError`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub noinline fn returnError() void {
    @branchHint(.unlikely);
    @setRuntimeSafety(false);
    const st = @errorReturnTrace().?;
    if (st.index < st.instruction_addresses.len)
        st.instruction_addresses[st.index] = @returnAddress();
    st.index += 1;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

