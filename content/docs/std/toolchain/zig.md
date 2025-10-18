---
title: "std.zig"
description: "Comprehensive reference for Zig's std.zig module covering build coordination, targets, and binary tooling."
navigation:
  title: "Zig"
  icon: i-lucide-hammer
  badge: "Toolchain"
badge: "Toolchain"
category: "toolchain"
tags:
  - "zig"
  - "standard-library"
  - "toolchain"
source: "std/zig.md"
githubPath: "std/zig.md"
lastUpdated: "2025-10-11T02:43:50.351Z"
seo:
  title: "std.zig · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.zig module covering build coordination, targets, and binary tooling."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/zig.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.zig` |
| Declarations | 63 |
| Breakdown | 23 functions · 9 types · 10 constants · 21 modules |
| Generated (unix epoch) | 1760148112 |

## Overview

Builds of the Zig compiler are distributed partly in source form. That
source lives here. These APIs are provided as-is and have absolutely no API
guarantees whatsoever.

---

## Table of Contents

- [Functions](#functions)
  - [`hashSrc`](#fn-hashsrc)
  - [`srcHashEql`](#fn-srchasheql)
  - [`hashName`](#fn-hashname)
  - [`findLineColumn`](#fn-findlinecolumn)
  - [`lineDelta`](#fn-linedelta)
  - [`binNameAlloc`](#fn-binnamealloc)
  - [`serializeCpu`](#fn-serializecpu)
  - [`serializeCpuAlloc`](#fn-serializecpualloc)
  - [`fmtId`](#fn-fmtid)
  - [`fmtIdFlags`](#fn-fmtidflags)
  - [`fmtIdPU`](#fn-fmtidpu)
  - [`fmtIdP`](#fn-fmtidp)
  - [`fmtString`](#fn-fmtstring)
  - [`fmtChar`](#fn-fmtchar)
  - [`stringEscape`](#fn-stringescape)
  - [`charEscape`](#fn-charescape)
  - [`isValidId`](#fn-isvalidid)
  - [`isUnderscore`](#fn-isunderscore)
  - [`readSourceFileToEndAlloc`](#fn-readsourcefiletoendalloc)
  - [`printAstErrorsToStderr`](#fn-printasterrorstostderr)
  - [`putAstErrorsIntoBundle`](#fn-putasterrorsintobundle)
  - [`resolveTargetQueryOrFatal`](#fn-resolvetargetqueryorfatal)
  - [`parseTargetQueryOrReportFatalError`](#fn-parsetargetqueryorreportfatalerror)

- [Types](#types)
  - [`Color`](#type-color)
  - [`Loc`](#type-loc)
  - [`BinNameOptions`](#type-binnameoptions)
  - [`SanitizeC`](#type-sanitizec)
  - [`LtoMode`](#type-ltomode)
  - [`FormatId`](#type-formatid)
  - [`EnvVar`](#type-envvar)
  - [`SimpleComptimeReason`](#type-simplecomptimereason)
  - [`EmitArtifact`](#type-emitartifact)

- [Modules](#modules)
  - [`ErrorBundle`](#module-errorbundle)
  - [`Server`](#module-server)
  - [`Client`](#module-client)
  - [`string\_literal`](#module-string-literal)
  - [`number\_literal`](#module-number-literal)
  - [`primitives`](#module-primitives)
  - [`Ast`](#module-ast)
  - [`AstGen`](#module-astgen)
  - [`Zir`](#module-zir)
  - [`Zoir`](#module-zoir)
  - [`ZonGen`](#module-zongen)
  - [`system`](#module-system)
  - [`BuiltinFn`](#module-builtinfn)
  - [`AstRlAnnotate`](#module-astrlannotate)
  - [`LibCInstallation`](#module-libcinstallation)
  - [`WindowsSdk`](#module-windowssdk)
  - [`LibCDirs`](#module-libcdirs)
  - [`target`](#module-target)
  - [`llvm`](#module-llvm)
  - [`c\_builtins`](#module-c-builtins)
  - [`c\_translation`](#module-c-translation)

- [Constants](#constants)
  - [`Token`](#const-token)
  - [`Tokenizer`](#const-tokenizer)
  - [`isPrimitive`](#const-isprimitive)
  - [`ParsedCharLiteral`](#const-parsedcharliteral)
  - [`parseCharLiteral`](#const-parsecharliteral)
  - [`parseNumberLiteral`](#const-parsenumberliteral)
  - [`SrcHasher`](#const-srchasher)
  - [`SrcHash`](#const-srchash)
  - [`max\_src\_size`](#const-max-src-size)
  - [`BuildId`](#const-buildid)

---

## Types (9)

### <a id="type-color"></a>`Color`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Color = enum {
    /// Determine whether stderr is a terminal or not automatically.
    auto,
    /// Assume stderr is not a terminal.
    off,
    /// Assume stderr is a terminal.
    on,

    pub fn get_tty_conf(color: Color) std.io.tty.Config {
        return switch (color) {
            .auto => std.io.tty.detectConfig(std.fs.File.stderr()),
            .on => .escape_codes,
            .off => .no_color,
        };
    }

    pub fn renderOptions(color: Color) std.zig.ErrorBundle.RenderOptions {
        return .{
            .ttyconf = get_tty_conf(color),
        };
    }
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `auto` | Determine whether stderr is a terminal or not automatically. |
| `off` | Assume stderr is not a terminal. |
| `on` | Assume stderr is a terminal. |

</details>

---

### <a id="type-loc"></a>`Loc`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Loc = struct {
    line: usize,
    column: usize,
    /// Does not include the trailing newline.
    source_line: []const u8,

    pub fn eql(a: Loc, b: Loc) bool {
        return a.line == b.line and a.column == b.column and std.mem.eql(u8, a.source_line, b.source_line);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `line` | `usize` | – | |
| `column` | `usize` | – | |
| `source_line` | `[]const u8` | – | Does not include the trailing newline. |

</details>

---

### <a id="type-binnameoptions"></a>`BinNameOptions`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const BinNameOptions = struct {
    root_name: []const u8,
    target: *const std.Target,
    output_mode: std.builtin.OutputMode,
    link_mode: ?std.builtin.LinkMode = null,
    version: ?std.SemanticVersion = null,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `root_name` | `[]const u8` | – | |
| `target` | `*const std.Target` | – | |
| `output_mode` | `std.builtin.OutputMode` | – | |
| `link_mode` | `?std.builtin.LinkMode` | `null` | |
| `version` | `?std.SemanticVersion` | `null` | |

</details>

---

### <a id="type-sanitizec"></a>`SanitizeC`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const SanitizeC = enum {
    off,
    trap,
    full,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `off` |  |
| `trap` |  |
| `full` |  |

</details>

---

### <a id="type-ltomode"></a>`LtoMode`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const LtoMode = enum { none, full, thin }
```

**Fields:**

| Value | Description |
|-------|-------------|
| `none` |  |
| `full` |  |
| `thin` |  |

</details>

---

### <a id="type-formatid"></a>`FormatId`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const FormatId = struct {
    bytes: []const u8,
    flags: Flags,
    pub const Flags = struct {
        allow_primitive: bool = false,
        allow_underscore: bool = false,
    };

    /// Print the string as a Zig identifier, escaping it with `@""` syntax if needed.
    pub fn format(ctx: FormatId, writer: *Writer) Writer.Error!void {
        const bytes = ctx.bytes;
        if (isValidId(bytes) and
            (ctx.flags.allow_primitive or !std.zig.isPrimitive(bytes)) and
            (ctx.flags.allow_underscore or !isUnderscore(bytes)))
        {
            return writer.writeAll(bytes);
        }
        try writer.writeAll("@\"");
        try stringEscape(bytes, writer);
        try writer.writeByte('"');
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |
| `flags` | `Flags` | – | |

</details>

---

### <a id="type-envvar"></a>`EnvVar`

<details class="declaration-card" open>
<summary>Container – Collects all the environment variables that Zig could possibly inspect, so</summary>

Collects all the environment variables that Zig could possibly inspect, so
that we can do reflection on this and print them with `zig env`.

```zig
pub const EnvVar = enum {
    ZIG_GLOBAL_CACHE_DIR,
    ZIG_LOCAL_CACHE_DIR,
    ZIG_LIB_DIR,
    ZIG_LIBC,
    ZIG_BUILD_RUNNER,
    ZIG_VERBOSE_LINK,
    ZIG_VERBOSE_CC,
    ZIG_BTRFS_WORKAROUND,
    ZIG_DEBUG_CMD,
    CC,
    NO_COLOR,
    CLICOLOR_FORCE,
    XDG_CACHE_HOME,
    HOME,

    pub fn isSet(comptime ev: EnvVar) bool {
        return std.process.hasNonEmptyEnvVarConstant(@tagName(ev));
    }

    pub fn get(ev: EnvVar, arena: std.mem.Allocator) !?[]u8 {
        if (std.process.getEnvVarOwned(arena, @tagName(ev))) |value| {
            return value;
        } else |err| switch (err) {
            error.EnvironmentVariableNotFound => return null,
            else => |e| return e,
        }
    }

    pub fn getPosix(comptime ev: EnvVar) ?[:0]const u8 {
        return std.posix.getenvZ(@tagName(ev));
    }
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `ZIG_GLOBAL_CACHE_DIR` |  |
| `ZIG_LOCAL_CACHE_DIR` |  |
| `ZIG_LIB_DIR` |  |
| `ZIG_LIBC` |  |
| `ZIG_BUILD_RUNNER` |  |
| `ZIG_VERBOSE_LINK` |  |
| `ZIG_VERBOSE_CC` |  |
| `ZIG_BTRFS_WORKAROUND` |  |
| `ZIG_DEBUG_CMD` |  |
| `CC` |  |
| `NO_COLOR` |  |
| `CLICOLOR_FORCE` |  |
| `XDG_CACHE_HOME` |  |
| `HOME` |  |

</details>

---

### <a id="type-simplecomptimereason"></a>`SimpleComptimeReason`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const SimpleComptimeReason = enum(u32) {
    // Evaluating at comptime because a builtin operand must be comptime-known.
    // These messages all mention a specific builtin.
    operand_Type,
    operand_setEvalBranchQuota,
    operand_setFloatMode,
    operand_branchHint,
    operand_setRuntimeSafety,
    operand_embedFile,
    operand_cImport,
    operand_cDefine_macro_name,
    operand_cDefine_macro_value,
    operand_cInclude_file_name,
    operand_cUndef_macro_name,
    operand_shuffle_mask,
    operand_atomicRmw_operation,
    operand_reduce_operation,

    // Evaluating at comptime because an operand must be comptime-known.
    // These messages do not mention a specific builtin (and may not be about a builtin at all).
    export_target,
    export_options,
    extern_options,
    prefetch_options,
    call_modifier,
    compile_error_string,
    inline_assembly_code,
    atomic_order,
    array_mul_factor,
    slice_cat_operand,
    inline_call_target,
    generic_call_target,
    wasm_memory_index,
    work_group_dim_index,
    clobber,

    // Evaluating at comptime because types must be comptime-known.
    // Reasons other than `.type` are just more specific messages.
    type,
    array_sentinel,
    pointer_sentinel,
    slice_sentinel,
    array_length,
    vector_length,
    error_set_contents,
    struct_fields,
    enum_fields,
    union_fields,
    function_ret_ty,
    function_parameters,

    // Evaluating at comptime because decl/field name must be comptime-known.
    decl_name,
    field_name,
    struct_field_name,
    enum_field_name,
    union_field_name,
    tuple_field_name,
    tuple_field_index,

    // Evaluating at comptime because it is an attribute of a global declaration.
    container_var_init,
    @"callconv",
    @"align",
    @"addrspace",
    @"linksection",

    // Miscellaneous reasons.
    comptime_keyword,
    comptime_call_modifier,
    inline_loop_operand,
    switch_item,
    tuple_field_default_value,
    struct_field_default_value,
    enum_field_tag_value,
    slice_single_item_ptr_bounds,
    stored_to_comptime_field,
    stored_to_comptime_var,
    casted_to_comptime_enum,
    casted_to_comptime_int,
    casted_to_comptime_float,
    panic_handler,

    pub fn message(r: SimpleComptimeReason) []const u8 {
        return switch (r) {
            // zig fmt: off
            .operand_Type                => "operand to '@Type' must be comptime-known",
            .operand_setEvalBranchQuota  => "operand to '@setEvalBranchQuota' must be comptime-known",
            .operand_setFloatMode        => "operand to '@setFloatMode' must be comptime-known",
            .operand_branchHint          => "operand to '@branchHint' must be comptime-known",
            .operand_setRuntimeSafety    => "operand to '@setRuntimeSafety' must be comptime-known",
            .operand_embedFile           => "operand to '@embedFile' must be comptime-known",
            .operand_cImport             => "operand to '@cImport' is evaluated at comptime",
            .operand_cDefine_macro_name  => "'@cDefine' macro name must be comptime-known",
            .operand_cDefine_macro_value => "'@cDefine' macro value must be comptime-known",
            .operand_cInclude_file_name  => "'@cInclude' file name must be comptime-known",
            .operand_cUndef_macro_name   => "'@cUndef' macro name must be comptime-known",
            .operand_shuffle_mask        => "'@shuffle' mask must be comptime-known",
            .operand_atomicRmw_operation => "'@atomicRmw' operation must be comptime-known",
            .operand_reduce_operation    => "'@reduce' operation must be comptime-known",

            .export_target        => "export target must be comptime-known",
            .export_options       => "export options must be comptime-known",
            .extern_options       => "extern options must be comptime-known",
            .prefetch_options     => "prefetch options must be comptime-known",
            .call_modifier        => "call modifier must be comptime-known",
            .compile_error_string => "compile error string must be comptime-known",
            .inline_assembly_code => "inline assembly code must be comptime-known",
            .atomic_order         => "atomic order must be comptime-known",
            .array_mul_factor     => "array multiplication factor must be comptime-known",
            .slice_cat_operand    => "slice being concatenated must be comptime-known",
            .inline_call_target   => "function being called inline must be comptime-known",
            .generic_call_target  => "generic function being called must be comptime-known",
            .wasm_memory_index    => "wasm memory index must be comptime-known",
            .work_group_dim_index => "work group dimension index must be comptime-known",
            .clobber              => "clobber must be comptime-known",

            .type                => "types must be comptime-known",
            .array_sentinel      => "array sentinel value must be comptime-known",
            .pointer_sentinel    => "pointer sentinel value must be comptime-known",
            .slice_sentinel      => "slice sentinel value must be comptime-known",
            .array_length        => "array length must be comptime-known",
            .vector_length       => "vector length must be comptime-known",
            .error_set_contents  => "error set contents must be comptime-known",
            .struct_fields       => "struct fields must be comptime-known",
            .enum_fields         => "enum fields must be comptime-known",
            .union_fields        => "union fields must be comptime-known",
            .function_ret_ty     => "function return type must be comptime-known",
            .function_parameters => "function parameters must be comptime-known",

            .decl_name         => "declaration name must be comptime-known",
            .field_name        => "field name must be comptime-known",
            .struct_field_name => "struct field name must be comptime-known",
            .enum_field_name   => "enum field name must be comptime-known",
            .union_field_name  => "union field name must be comptime-known",
            .tuple_field_name  => "tuple field name must be comptime-known",
            .tuple_field_index => "tuple field index must be comptime-known",

            .container_var_init => "initializer of container-level variable must be comptime-known",
            .@"callconv"        => "calling convention must be comptime-known",
            .@"align"           => "alignment must be comptime-known",
            .@"addrspace"       => "address space must be comptime-known",
            .@"linksection"     => "linksection must be comptime-known",

            .comptime_keyword             => "'comptime' keyword forces comptime evaluation",
            .comptime_call_modifier       => "'.compile_time' call modifier forces comptime evaluation",
            .inline_loop_operand          => "inline loop condition must be comptime-known",
            .switch_item                  => "switch prong values must be comptime-known",
            .tuple_field_default_value    => "tuple field default value must be comptime-known",
            .struct_field_default_value   => "struct field default value must be comptime-known",
            .enum_field_tag_value         => "enum field tag value must be comptime-known",
            .slice_single_item_ptr_bounds => "slice of single-item pointer must have comptime-known bounds",
            .stored_to_comptime_field     => "value stored to a comptime field must be comptime-known",
            .stored_to_comptime_var       => "value stored to a comptime variable must be comptime-known",
            .casted_to_comptime_enum      => "value casted to enum with 'comptime_int' tag type must be comptime-known",
            .casted_to_comptime_int       => "value casted to 'comptime_int' must be comptime-known",
            .casted_to_comptime_float     => "value casted to 'comptime_float' must be comptime-known",
            .panic_handler                => "panic handler must be comptime-known",
            // zig fmt: on
        };
    }
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `operand_Type` |  |
| `operand_setEvalBranchQuota` |  |
| `operand_setFloatMode` |  |
| `operand_branchHint` |  |
| `operand_setRuntimeSafety` |  |
| `operand_embedFile` |  |
| `operand_cImport` |  |
| `operand_cDefine_macro_name` |  |
| `operand_cDefine_macro_value` |  |
| `operand_cInclude_file_name` |  |
| `operand_cUndef_macro_name` |  |
| `operand_shuffle_mask` |  |
| `operand_atomicRmw_operation` |  |
| `operand_reduce_operation` |  |
| `export_target` |  |
| `export_options` |  |
| `extern_options` |  |
| `prefetch_options` |  |
| `call_modifier` |  |
| `compile_error_string` |  |
| `inline_assembly_code` |  |
| `atomic_order` |  |
| `array_mul_factor` |  |
| `slice_cat_operand` |  |
| `inline_call_target` |  |
| `generic_call_target` |  |
| `wasm_memory_index` |  |
| `work_group_dim_index` |  |
| `clobber` |  |
| `type` |  |
| `array_sentinel` |  |
| `pointer_sentinel` |  |
| `slice_sentinel` |  |
| `array_length` |  |
| `vector_length` |  |
| `error_set_contents` |  |
| `struct_fields` |  |
| `enum_fields` |  |
| `union_fields` |  |
| `function_ret_ty` |  |
| `function_parameters` |  |
| `decl_name` |  |
| `field_name` |  |
| `struct_field_name` |  |
| `enum_field_name` |  |
| `union_field_name` |  |
| `tuple_field_name` |  |
| `tuple_field_index` |  |
| `container_var_init` |  |
| `@"callconv"` |  |
| `@"align"` |  |
| `@"addrspace"` |  |
| `@"linksection"` |  |
| `comptime_keyword` |  |
| `comptime_call_modifier` |  |
| `inline_loop_operand` |  |
| `switch_item` |  |
| `tuple_field_default_value` |  |
| `struct_field_default_value` |  |
| `enum_field_tag_value` |  |
| `slice_single_item_ptr_bounds` |  |
| `stored_to_comptime_field` |  |
| `stored_to_comptime_var` |  |
| `casted_to_comptime_enum` |  |
| `casted_to_comptime_int` |  |
| `casted_to_comptime_float` |  |
| `panic_handler` |  |

</details>

---

### <a id="type-emitartifact"></a>`EmitArtifact`

<details class="declaration-card" open>
<summary>Container – Every kind of artifact which the compiler can emit</summary>

Every kind of artifact which the compiler can emit.

```zig
pub const EmitArtifact = enum {
    bin,
    @"asm",
    implib,
    llvm_ir,
    llvm_bc,
    docs,
    pdb,
    h,

    /// If using `Server` to communicate with the compiler, it will place requested artifacts in
    /// paths under the output directory, where those paths are named according to this function.
    /// Returned string is allocated with `gpa` and owned by the caller.
    pub fn cacheName(ea: EmitArtifact, gpa: Allocator, opts: BinNameOptions) Allocator.Error![]const u8 {
        const suffix: []const u8 = switch (ea) {
            .bin => return binNameAlloc(gpa, opts),
            .@"asm" => ".s",
            .implib => ".lib",
            .llvm_ir => ".ll",
            .llvm_bc => ".bc",
            .docs => "-docs",
            .pdb => ".pdb",
            .h => ".h",
        };
        return std.fmt.allocPrint(gpa, "{s}{s}", .{ opts.root_name, suffix });
    }
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `bin` |  |
| `@"asm"` |  |
| `implib` |  |
| `llvm_ir` |  |
| `llvm_bc` |  |
| `docs` |  |
| `pdb` |  |
| `h` |  |

</details>

---

## Modules (21)

### <a id="module-errorbundle"></a>`ErrorBundle`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const ErrorBundle = @import("zig/ErrorBundle.zig")
```

> **Module:** `zig/ErrorBundle.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/ErrorBundle.zig)

</details>

---

### <a id="module-server"></a>`Server`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Server = @import("zig/Server.zig")
```

> **Module:** `zig/Server.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/Server.zig)

</details>

---

### <a id="module-client"></a>`Client`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Client = @import("zig/Client.zig")
```

> **Module:** `zig/Client.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/Client.zig)

</details>

---

### <a id="module-string-literal"></a>`string_literal`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const string_literal = @import("zig/string_literal.zig")
```

> **Module:** `zig/string_literal.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/string_literal.zig)

</details>

---

### <a id="module-number-literal"></a>`number_literal`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const number_literal = @import("zig/number_literal.zig")
```

> **Module:** `zig/number_literal.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/number_literal.zig)

</details>

---

### <a id="module-primitives"></a>`primitives`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const primitives = @import("zig/primitives.zig")
```

> **Module:** `zig/primitives.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/primitives.zig)

</details>

---

### <a id="module-ast"></a>`Ast`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Ast = @import("zig/Ast.zig")
```

> **Module:** `zig/Ast.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/Ast.zig)

</details>

---

### <a id="module-astgen"></a>`AstGen`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const AstGen = @import("zig/AstGen.zig")
```

> **Module:** `zig/AstGen.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/AstGen.zig)

</details>

---

### <a id="module-zir"></a>`Zir`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Zir = @import("zig/Zir.zig")
```

> **Module:** `zig/Zir.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/Zir.zig)

</details>

---

### <a id="module-zoir"></a>`Zoir`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Zoir = @import("zig/Zoir.zig")
```

> **Module:** `zig/Zoir.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/Zoir.zig)

</details>

---

### <a id="module-zongen"></a>`ZonGen`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const ZonGen = @import("zig/ZonGen.zig")
```

> **Module:** `zig/ZonGen.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/ZonGen.zig)

</details>

---

### <a id="module-system"></a>`system`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const system = @import("zig/system.zig")
```

> **Module:** `zig/system.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/system.zig)

</details>

---

### <a id="module-builtinfn"></a>`BuiltinFn`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const BuiltinFn = @import("zig/BuiltinFn.zig")
```

> **Module:** `zig/BuiltinFn.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/BuiltinFn.zig)

</details>

---

### <a id="module-astrlannotate"></a>`AstRlAnnotate`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const AstRlAnnotate = @import("zig/AstRlAnnotate.zig")
```

> **Module:** `zig/AstRlAnnotate.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/AstRlAnnotate.zig)

</details>

---

### <a id="module-libcinstallation"></a>`LibCInstallation`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const LibCInstallation = @import("zig/LibCInstallation.zig")
```

> **Module:** `zig/LibCInstallation.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/LibCInstallation.zig)

</details>

---

### <a id="module-windowssdk"></a>`WindowsSdk`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const WindowsSdk = @import("zig/WindowsSdk.zig")
```

> **Module:** `zig/WindowsSdk.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/WindowsSdk.zig)

</details>

---

### <a id="module-libcdirs"></a>`LibCDirs`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const LibCDirs = @import("zig/LibCDirs.zig")
```

> **Module:** `zig/LibCDirs.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/LibCDirs.zig)

</details>

---

### <a id="module-target"></a>`target`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const target = @import("zig/target.zig")
```

> **Module:** `zig/target.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/target.zig)

</details>

---

### <a id="module-llvm"></a>`llvm`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const llvm = @import("zig/llvm.zig")
```

> **Module:** `zig/llvm.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/llvm.zig)

</details>

---

### <a id="module-c-builtins"></a>`c_builtins`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const c_builtins = @import("zig/c_builtins.zig")
```

> **Module:** `zig/c_builtins.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/c_builtins.zig)

</details>

---

### <a id="module-c-translation"></a>`c_translation`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const c_translation = @import("zig/c_translation.zig")
```

> **Module:** `zig/c_translation.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zig/c_translation.zig)

</details>

---

## Constants (10)

### <a id="const-token"></a>`Token`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Token = tokenizer.Token
```

</details>

---

### <a id="const-tokenizer"></a>`Tokenizer`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Tokenizer = tokenizer.Tokenizer
```

</details>

---

### <a id="const-isprimitive"></a>`isPrimitive`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isPrimitive = primitives.isPrimitive
```

</details>

---

### <a id="const-parsedcharliteral"></a>`ParsedCharLiteral`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ParsedCharLiteral = string_literal.ParsedCharLiteral
```

</details>

---

### <a id="const-parsecharliteral"></a>`parseCharLiteral`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseCharLiteral = string_literal.parseCharLiteral
```

</details>

---

### <a id="const-parsenumberliteral"></a>`parseNumberLiteral`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseNumberLiteral = number_literal.parseNumberLiteral
```

</details>

---

### <a id="const-srchasher"></a>`SrcHasher`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SrcHasher = std.crypto.hash.Blake3
```

</details>

---

### <a id="const-srchash"></a>`SrcHash`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SrcHash = [16]u8
```

</details>

---

### <a id="const-max-src-size"></a>`max_src_size`

<details class="declaration-card" open>
<summary>Constant – There are many assumptions in the entire codebase that Zig source files can</summary>

There are many assumptions in the entire codebase that Zig source files can
be byte-indexed with a u32 integer.

```zig
pub const max_src_size = std.math.maxInt(u32)
```

</details>

---

### <a id="const-buildid"></a>`BuildId`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BuildId = union(enum) {
    none,
    fast,
    uuid,
    sha1,
    md5,
    hexstring: HexString,

    pub fn eql(a: BuildId, b: BuildId) bool {
        const Tag = @typeInfo(BuildId).@"union".tag_type.?;
        const a_tag: Tag = a;
        const b_tag: Tag = b;
        if (a_tag != b_tag) return false;
        return switch (a) {
            .none, .fast, .uuid, .sha1, .md5 => true,
            .hexstring => |a_hexstring| std.mem.eql(u8, a_hexstring.toSlice(), b.hexstring.toSlice()),
        };
    }

    pub const HexString = struct {
        bytes: [32]u8,
        len: u8,

        /// Result is byte values, *not* hex-encoded.
        pub fn toSlice(hs: *const HexString) []const u8 {
            return hs.bytes[0..hs.len];
        }
    };

    /// Input is byte values, *not* hex-encoded.
    /// Asserts `bytes` fits inside `HexString`
    pub fn initHexString(bytes: []const u8) BuildId {
        var result: BuildId = .{ .hexstring = .{
            .bytes = undefined,
            .len = @intCast(bytes.len),
        } };
        @memcpy(result.hexstring.bytes[0..bytes.len], bytes);
        return result;
    }

    /// Converts UTF-8 text to a `BuildId`.
    pub fn parse(text: []const u8) !BuildId {
        if (std.mem.eql(u8, text, "none")) {
            return .none;
        } else if (std.mem.eql(u8, text, "fast")) {
            return .fast;
        } else if (std.mem.eql(u8, text, "uuid")) {
            return .uuid;
        } else if (std.mem.eql(u8, text, "sha1") or std.mem.eql(u8, text, "tree")) {
            return .sha1;
        } else if (std.mem.eql(u8, text, "md5")) {
            return .md5;
        } else if (std.mem.startsWith(u8, text, "0x")) {
            var result: BuildId = .{ .hexstring = undefined };
            const slice = try std.fmt.hexToBytes(&result.hexstring.bytes, text[2..]);
            result.hexstring.len = @as(u8, @intCast(slice.len));
            return result;
        }
        return error.InvalidBuildIdStyle;
    }

    test parse {
        try std.testing.expectEqual(BuildId.md5, try parse("md5"));
        try std.testing.expectEqual(BuildId.none, try parse("none"));
        try std.testing.expectEqual(BuildId.fast, try parse("fast"));
        try std.testing.expectEqual(BuildId.uuid, try parse("uuid"));
        try std.testing.expectEqual(BuildId.sha1, try parse("sha1"));
        try std.testing.expectEqual(BuildId.sha1, try parse("tree"));

        try std.testing.expect(BuildId.initHexString("").eql(try parse("0x")));
        try std.testing.expect(BuildId.initHexString("\x12\x34\x56").eql(try parse("0x123456")));
        try std.testing.expectError(error.InvalidLength, parse("0x12-34"));
        try std.testing.expectError(error.InvalidCharacter, parse("0xfoobbb"));
        try std.testing.expectError(error.InvalidBuildIdStyle, parse("yaddaxxx"));
    }

    pub fn format(id: BuildId, writer: *std.io.Writer) std.io.Writer.Error!void {
        switch (id) {
            .none, .fast, .uuid, .sha1, .md5 => {
                try writer.writeAll(@tagName(id));
            },
            .hexstring => |hs| {
                try writer.print("0x{x}", .{hs.toSlice()});
            },
        }
    }

    test format {
        try std.testing.expectFmt("none", "{f}", .{@as(BuildId, .none)});
        try std.testing.expectFmt("fast", "{f}", .{@as(BuildId, .fast)});
        try std.testing.expectFmt("uuid", "{f}", .{@as(BuildId, .uuid)});
        try std.testing.expectFmt("sha1", "{f}", .{@as(BuildId, .sha1)});
        try std.testing.expectFmt("md5", "{f}", .{@as(BuildId, .md5)});
        try std.testing.expectFmt("0x", "{f}", .{BuildId.initHexString("")});
        try std.testing.expectFmt("0x1234cdef", "{f}", .{BuildId.initHexString("\x12\x34\xcd\xef")});
    }
}
```

</details>

---

## Functions (23)

### <a id="fn-hashsrc"></a>`hashSrc`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn hashSrc(src: []const u8) SrcHash {
    var out: SrcHash = undefined;
    SrcHasher.hash(src, &out, .{});
    return out;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `src` | `[]const u8` | – | – |
| Return | [`SrcHash`](#const-srchash) | – | – |

</details>

---

### <a id="fn-srchasheql"></a>`srcHashEql`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn srcHashEql(a: SrcHash, b: SrcHash) bool {
    return @as(u128, @bitCast(a)) == @as(u128, @bitCast(b));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | [`SrcHash`](#const-srchash) | – | – |
| `b` | [`SrcHash`](#const-srchash) | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-hashname"></a>`hashName`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn hashName(parent_hash: SrcHash, sep: []const u8, name: []const u8) SrcHash {
    var out: SrcHash = undefined;
    var hasher = SrcHasher.init(.{});
    hasher.update(&parent_hash);
    hasher.update(sep);
    hasher.update(name);
    hasher.final(&out);
    return out;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `parent\_hash` | [`SrcHash`](#const-srchash) | – | – |
| `sep` | `[]const u8` | – | – |
| `name` | `[]const u8` | – | – |
| Return | [`SrcHash`](#const-srchash) | – | – |

</details>

---

### <a id="fn-findlinecolumn"></a>`findLineColumn`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn findLineColumn(source: []const u8, byte_offset: usize) Loc {
    var line: usize = 0;
    var column: usize = 0;
    var line_start: usize = 0;
    var i: usize = 0;
    while (i < byte_offset) : (i += 1) {
        switch (source[i]) {
            '\n' => {
                line += 1;
                column = 0;
                line_start = i + 1;
            },
            else => {
                column += 1;
            },
        }
    }
    while (i < source.len and source[i] != '\n') {
        i += 1;
    }
    return .{
        .line = line,
        .column = column,
        .source_line = source[line_start..i],
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `source` | `[]const u8` | – | – |
| `byte\_offset` | `usize` | – | – |
| Return | [`Loc`](#type-loc) | – | – |

</details>

---

### <a id="fn-linedelta"></a>`lineDelta`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn lineDelta(source: []const u8, start: usize, end: usize) isize {
    var line: isize = 0;
    if (end >= start) {
        for (source[start..end]) |byte| switch (byte) {
            '\n' => line += 1,
            else => continue,
        };
    } else {
        for (source[end..start]) |byte| switch (byte) {
            '\n' => line -= 1,
            else => continue,
        };
    }
    return line;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `source` | `[]const u8` | – | – |
| `start` | `usize` | – | – |
| `end` | `usize` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-binnamealloc"></a>`binNameAlloc`

<details class="declaration-card" open>
<summary>Function – Returns the standard file system basename of a binary generated by the Zig compiler</summary>

Returns the standard file system basename of a binary generated by the Zig compiler.

```zig
pub fn binNameAlloc(allocator: Allocator, options: BinNameOptions) error{OutOfMemory}![]u8 {
    const root_name = options.root_name;
    const t = options.target;
    switch (t.ofmt) {
        .coff => switch (options.output_mode) {
            .Exe => return std.fmt.allocPrint(allocator, "{s}{s}", .{ root_name, t.exeFileExt() }),
            .Lib => {
                const suffix = switch (options.link_mode orelse .static) {
                    .static => ".lib",
                    .dynamic => ".dll",
                };
                return std.fmt.allocPrint(allocator, "{s}{s}", .{ root_name, suffix });
            },
            .Obj => return std.fmt.allocPrint(allocator, "{s}.obj", .{root_name}),
        },
        .elf, .goff, .xcoff => switch (options.output_mode) {
            .Exe => return allocator.dupe(u8, root_name),
            .Lib => {
                switch (options.link_mode orelse .static) {
                    .static => return std.fmt.allocPrint(allocator, "{s}{s}.a", .{
                        t.libPrefix(), root_name,
                    }),
                    .dynamic => {
                        if (options.version) |ver| {
                            return std.fmt.allocPrint(allocator, "{s}{s}.so.{d}.{d}.{d}", .{
                                t.libPrefix(), root_name, ver.major, ver.minor, ver.patch,
                            });
                        } else {
                            return std.fmt.allocPrint(allocator, "{s}{s}.so", .{
                                t.libPrefix(), root_name,
                            });
                        }
                    },
                }
            },
            .Obj => return std.fmt.allocPrint(allocator, "{s}.o", .{root_name}),
        },
        .macho => switch (options.output_mode) {
            .Exe => return allocator.dupe(u8, root_name),
            .Lib => {
                switch (options.link_mode orelse .static) {
                    .static => return std.fmt.allocPrint(allocator, "{s}{s}.a", .{
                        t.libPrefix(), root_name,
                    }),
                    .dynamic => {
                        if (options.version) |ver| {
                            return std.fmt.allocPrint(allocator, "{s}{s}.{d}.{d}.{d}.dylib", .{
                                t.libPrefix(), root_name, ver.major, ver.minor, ver.patch,
                            });
                        } else {
                            return std.fmt.allocPrint(allocator, "{s}{s}.dylib", .{
                                t.libPrefix(), root_name,
                            });
                        }
                    },
                }
            },
            .Obj => return std.fmt.allocPrint(allocator, "{s}.o", .{root_name}),
        },
        .wasm => switch (options.output_mode) {
            .Exe => return std.fmt.allocPrint(allocator, "{s}{s}", .{ root_name, t.exeFileExt() }),
            .Lib => {
                switch (options.link_mode orelse .static) {
                    .static => return std.fmt.allocPrint(allocator, "{s}{s}.a", .{
                        t.libPrefix(), root_name,
                    }),
                    .dynamic => return std.fmt.allocPrint(allocator, "{s}.wasm", .{root_name}),
                }
            },
            .Obj => return std.fmt.allocPrint(allocator, "{s}.o", .{root_name}),
        },
        .c => return std.fmt.allocPrint(allocator, "{s}.c", .{root_name}),
        .spirv => return std.fmt.allocPrint(allocator, "{s}.spv", .{root_name}),
        .hex => return std.fmt.allocPrint(allocator, "{s}.ihex", .{root_name}),
        .raw => return std.fmt.allocPrint(allocator, "{s}.bin", .{root_name}),
        .plan9 => switch (options.output_mode) {
            .Exe => return allocator.dupe(u8, root_name),
            .Obj => return std.fmt.allocPrint(allocator, "{s}{s}", .{
                root_name, t.ofmt.fileExt(t.cpu.arch),
            }),
            .Lib => return std.fmt.allocPrint(allocator, "{s}{s}.a", .{
                t.libPrefix(), root_name,
            }),
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `options` | [`BinNameOptions`](#type-binnameoptions) | – | – |
| Return | `error{OutOfMemory}![]u8` | – | – |

**Possible Errors:**

- `error.OutOfMemory`

</details>

---

### <a id="fn-serializecpu"></a>`serializeCpu`

<details class="declaration-card" open>
<summary>Function – Renders a `std</summary>

Renders a `std.Target.Cpu` value into a textual representation that can be parsed
via the `-mcpu` flag passed to the Zig compiler.
Appends the result to `buffer`.

```zig
pub fn serializeCpu(buffer: *std.array_list.Managed(u8), cpu: std.Target.Cpu) Allocator.Error!void {
    const all_features = cpu.arch.allFeaturesList();
    var populated_cpu_features = cpu.model.features;
    populated_cpu_features.populateDependencies(all_features);

    try buffer.appendSlice(cpu.model.name);

    if (populated_cpu_features.eql(cpu.features)) {
        // The CPU name alone is sufficient.
        return;
    }

    for (all_features, 0..) |feature, i_usize| {
        const i: std.Target.Cpu.Feature.Set.Index = @intCast(i_usize);
        const in_cpu_set = populated_cpu_features.isEnabled(i);
        const in_actual_set = cpu.features.isEnabled(i);
        try buffer.ensureUnusedCapacity(feature.name.len + 1);
        if (in_cpu_set and !in_actual_set) {
            buffer.appendAssumeCapacity('-');
            buffer.appendSliceAssumeCapacity(feature.name);
        } else if (!in_cpu_set and in_actual_set) {
            buffer.appendAssumeCapacity('+');
            buffer.appendSliceAssumeCapacity(feature.name);
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buffer` | `*std.array_list.Managed(u8)` | – | – |
| `cpu` | `std.Target.Cpu` | – | – |
| Return | `Allocator.Error!void` | – | – |

</details>

---

### <a id="fn-serializecpualloc"></a>`serializeCpuAlloc`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn serializeCpuAlloc(ally: Allocator, cpu: std.Target.Cpu) Allocator.Error![]u8 {
    var buffer = std.array_list.Managed(u8).init(ally);
    try serializeCpu(&buffer, cpu);
    return buffer.toOwnedSlice();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ally` | `Allocator` | – | – |
| `cpu` | `std.Target.Cpu` | – | – |
| Return | `Allocator.Error![]u8` | – | – |

</details>

---

### <a id="fn-fmtid"></a>`fmtId`

<details class="declaration-card" open>
<summary>Function – Return a Formatter for a Zig identifier, escaping it with `@&quot;&quot;` syntax if needed</summary>

Return a Formatter for a Zig identifier, escaping it with `@""` syntax if needed.

See also `fmtIdFlags`.

```zig
pub fn fmtId(bytes: []const u8) FormatId {
    return .{ .bytes = bytes, .flags = .{} };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| Return | [`FormatId`](#type-formatid) | – | – |

</details>

---

### <a id="fn-fmtidflags"></a>`fmtIdFlags`

<details class="declaration-card" open>
<summary>Function – Return a Formatter for a Zig identifier, escaping it with `@&quot;&quot;` syntax if needed</summary>

Return a Formatter for a Zig identifier, escaping it with `@""` syntax if needed.

See also `fmtId`.

```zig
pub fn fmtIdFlags(bytes: []const u8, flags: FormatId.Flags) FormatId {
    return .{ .bytes = bytes, .flags = flags };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| `flags` | `FormatId.Flags` | – | – |
| Return | [`FormatId`](#type-formatid) | – | – |

</details>

---

### <a id="fn-fmtidpu"></a>`fmtIdPU`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fmtIdPU(bytes: []const u8) FormatId {
    return .{ .bytes = bytes, .flags = .{ .allow_primitive = true, .allow_underscore = true } };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| Return | [`FormatId`](#type-formatid) | – | – |

</details>

---

### <a id="fn-fmtidp"></a>`fmtIdP`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fmtIdP(bytes: []const u8) FormatId {
    return .{ .bytes = bytes, .flags = .{ .allow_primitive = true } };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| Return | [`FormatId`](#type-formatid) | – | – |

</details>

---

### <a id="fn-fmtstring"></a>`fmtString`

<details class="declaration-card" open>
<summary>Function – Return a formatter for escaping a double quoted Zig string</summary>

Return a formatter for escaping a double quoted Zig string.

```zig
pub fn fmtString(bytes: []const u8) std.fmt.Formatter([]const u8, stringEscape) {
    return .{ .data = bytes };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| Return | `std.fmt.Formatter([]const u8, stringEscape)` | – | – |

</details>

---

### <a id="fn-fmtchar"></a>`fmtChar`

<details class="declaration-card" open>
<summary>Function – Return a formatter for escaping a single quoted Zig string</summary>

Return a formatter for escaping a single quoted Zig string.

```zig
pub fn fmtChar(c: u21) std.fmt.Formatter(u21, charEscape) {
    return .{ .data = c };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u21` | – | – |
| Return | `std.fmt.Formatter(u21, charEscape)` | – | – |

</details>

---

### <a id="fn-stringescape"></a>`stringEscape`

<details class="declaration-card" open>
<summary>Function – Print the string as escaped contents of a double quoted string</summary>

Print the string as escaped contents of a double quoted string.

```zig
pub fn stringEscape(bytes: []const u8, w: *Writer) Writer.Error!void {
    for (bytes) |byte| switch (byte) {
        '\n' => try w.writeAll("\\n"),
        '\r' => try w.writeAll("\\r"),
        '\t' => try w.writeAll("\\t"),
        '\\' => try w.writeAll("\\\\"),
        '"' => try w.writeAll("\\\""),
        '\'' => try w.writeByte('\''),
        ' ', '!', '#'...'&', '('...'[', ']'...'~' => try w.writeByte(byte),
        else => {
            try w.writeAll("\\x");
            try w.printInt(byte, 16, .lower, .{ .width = 2, .fill = '0' });
        },
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| `w` | `*Writer` | – | – |
| Return | `Writer.Error!void` | – | – |

</details>

---

### <a id="fn-charescape"></a>`charEscape`

<details class="declaration-card" open>
<summary>Function – Print as escaped contents of a single-quoted string</summary>

Print as escaped contents of a single-quoted string.

```zig
pub fn charEscape(codepoint: u21, w: *Writer) Writer.Error!void {
    switch (codepoint) {
        '\n' => try w.writeAll("\\n"),
        '\r' => try w.writeAll("\\r"),
        '\t' => try w.writeAll("\\t"),
        '\\' => try w.writeAll("\\\\"),
        '\'' => try w.writeAll("\\'"),
        '"', ' ', '!', '#'...'&', '('...'[', ']'...'~' => try w.writeByte(@intCast(codepoint)),
        else => {
            if (std.math.cast(u8, codepoint)) |byte| {
                try w.writeAll("\\x");
                try w.printInt(byte, 16, .lower, .{ .width = 2, .fill = '0' });
            } else {
                try w.writeAll("\\u{");
                try w.printInt(codepoint, 16, .lower, .{});
                try w.writeByte('}');
            }
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `codepoint` | `u21` | – | – |
| `w` | `*Writer` | – | – |
| Return | `Writer.Error!void` | – | – |

</details>

---

### <a id="fn-isvalidid"></a>`isValidId`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn isValidId(bytes: []const u8) bool {
    if (bytes.len == 0) return false;
    for (bytes, 0..) |c, i| {
        switch (c) {
            '_', 'a'...'z', 'A'...'Z' => {},
            '0'...'9' => if (i == 0) return false,
            else => return false,
        }
    }
    return std.zig.Token.getKeyword(bytes) == null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isunderscore"></a>`isUnderscore`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn isUnderscore(bytes: []const u8) bool {
    return bytes.len == 1 and bytes[0] == '_';
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-readsourcefiletoendalloc"></a>`readSourceFileToEndAlloc`

<details class="declaration-card" open>
<summary>Function – If the source can be UTF-16LE encoded, this function asserts that `gpa`</summary>

If the source can be UTF-16LE encoded, this function asserts that `gpa`
will align a byte-sized allocation to at least 2. Allocators that don't do
this are rare.

```zig
pub fn readSourceFileToEndAlloc(gpa: Allocator, file_reader: *std.fs.File.Reader) ![:0]u8 {
    var buffer: std.ArrayList(u8) = .empty;
    defer buffer.deinit(gpa);

    if (file_reader.getSize()) |size| {
        const casted_size = std.math.cast(u32, size) orelse return error.StreamTooLong;
        // +1 to avoid resizing for the null byte added in toOwnedSliceSentinel below.
        try buffer.ensureTotalCapacityPrecise(gpa, casted_size + 1);
    } else |_| {}

    try file_reader.interface.appendRemaining(gpa, &buffer, .limited(max_src_size));

    // Detect unsupported file types with their Byte Order Mark
    const unsupported_boms = [_][]const u8{
        "\xff\xfe\x00\x00", // UTF-32 little endian
        "\xfe\xff\x00\x00", // UTF-32 big endian
        "\xfe\xff", // UTF-16 big endian
    };
    for (unsupported_boms) |bom| {
        if (std.mem.startsWith(u8, buffer.items, bom)) {
            return error.UnsupportedEncoding;
        }
    }

    // If the file starts with a UTF-16 little endian BOM, translate it to UTF-8
    if (std.mem.startsWith(u8, buffer.items, "\xff\xfe")) {
        if (buffer.items.len % 2 != 0) return error.InvalidEncoding;
        return std.unicode.utf16LeToUtf8AllocZ(gpa, @ptrCast(@alignCast(buffer.items))) catch |err| switch (err) {
            error.DanglingSurrogateHalf => error.UnsupportedEncoding,
            error.ExpectedSecondSurrogateHalf => error.UnsupportedEncoding,
            error.UnexpectedSecondSurrogateHalf => error.UnsupportedEncoding,
            else => |e| return e,
        };
    }

    return buffer.toOwnedSliceSentinel(gpa, 0);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gpa` | `Allocator` | – | – |
| `file\_reader` | `*std.fs.File.Reader` | – | – |
| Return | `[:0]u8` | – | – |

</details>

---

### <a id="fn-printasterrorstostderr"></a>`printAstErrorsToStderr`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn printAstErrorsToStderr(gpa: Allocator, tree: Ast, path: []const u8, color: Color) !void {
    var wip_errors: std.zig.ErrorBundle.Wip = undefined;
    try wip_errors.init(gpa);
    defer wip_errors.deinit();

    try putAstErrorsIntoBundle(gpa, tree, path, &wip_errors);

    var error_bundle = try wip_errors.toOwnedBundle("");
    defer error_bundle.deinit(gpa);
    error_bundle.renderToStdErr(color.renderOptions());
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gpa` | `Allocator` | – | – |
| `tree` | `Ast` | – | – |
| `path` | `[]const u8` | – | – |
| `color` | [`Color`](#type-color) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-putasterrorsintobundle"></a>`putAstErrorsIntoBundle`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn putAstErrorsIntoBundle(
    gpa: Allocator,
    tree: Ast,
    path: []const u8,
    wip_errors: *std.zig.ErrorBundle.Wip,
) Allocator.Error!void {
    var zir = try AstGen.generate(gpa, tree);
    defer zir.deinit(gpa);

    try wip_errors.addZirErrorMessages(zir, tree, tree.source, path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gpa` | `Allocator` | – | – |
| `tree` | `Ast` | – | – |
| `path` | `[]const u8` | – | – |
| `wip\_errors` | `*std.zig.ErrorBundle.Wip` | – | – |
| Return | `Allocator.Error!void` | – | – |

</details>

---

### <a id="fn-resolvetargetqueryorfatal"></a>`resolveTargetQueryOrFatal`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn resolveTargetQueryOrFatal(target_query: std.Target.Query) std.Target {
    return std.zig.system.resolveTargetQuery(target_query) catch |err|
        std.process.fatal("unable to resolve target: {s}", .{@errorName(err)});
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_query` | `std.Target.Query` | – | – |
| Return | `std.Target` | – | – |

</details>

---

### <a id="fn-parsetargetqueryorreportfatalerror"></a>`parseTargetQueryOrReportFatalError`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn parseTargetQueryOrReportFatalError(
    allocator: Allocator,
    opts: std.Target.Query.ParseOptions,
) std.Target.Query {
    var opts_with_diags = opts;
    var diags: std.Target.Query.ParseOptions.Diagnostics = .{};
    if (opts_with_diags.diagnostics == null) {
        opts_with_diags.diagnostics = &diags;
    }
    return std.Target.Query.parse(opts_with_diags) catch |err| switch (err) {
        error.UnknownCpuModel => {
            help: {
                var help_text = std.array_list.Managed(u8).init(allocator);
                defer help_text.deinit();
                for (diags.arch.?.allCpuModels()) |cpu| {
                    help_text.print(" {s}\n", .{cpu.name}) catch break :help;
                }
                std.log.info("available CPUs for architecture '{s}':\n{s}", .{
                    @tagName(diags.arch.?), help_text.items,
                });
            }
            std.process.fatal("unknown CPU: '{s}'", .{diags.cpu_name.?});
        },
        error.UnknownCpuFeature => {
            help: {
                var help_text = std.array_list.Managed(u8).init(allocator);
                defer help_text.deinit();
                for (diags.arch.?.allFeaturesList()) |feature| {
                    help_text.print(" {s}: {s}\n", .{ feature.name, feature.description }) catch break :help;
                }
                std.log.info("available CPU features for architecture '{s}':\n{s}", .{
                    @tagName(diags.arch.?), help_text.items,
                });
            }
            std.process.fatal("unknown CPU feature: '{s}'", .{diags.unknown_feature_name.?});
        },
        error.UnknownObjectFormat => {
            help: {
                var help_text = std.array_list.Managed(u8).init(allocator);
                defer help_text.deinit();
                inline for (@typeInfo(std.Target.ObjectFormat).@"enum".fields) |field| {
                    help_text.print(" {s}\n", .{field.name}) catch break :help;
                }
                std.log.info("available object formats:\n{s}", .{help_text.items});
            }
            std.process.fatal("unknown object format: '{s}'", .{opts.object_format.?});
        },
        error.UnknownArchitecture => {
            help: {
                var help_text = std.array_list.Managed(u8).init(allocator);
                defer help_text.deinit();
                inline for (@typeInfo(std.Target.Cpu.Arch).@"enum".fields) |field| {
                    help_text.print(" {s}\n", .{field.name}) catch break :help;
                }
                std.log.info("available architectures:\n{s} native\n", .{help_text.items});
            }
            std.process.fatal("unknown architecture: '{s}'", .{diags.unknown_architecture_name.?});
        },
        else => |e| std.process.fatal("unable to parse target query '{s}': {s}", .{
            opts.arch_os_abi, @errorName(e),
        }),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `opts` | `std.Target.Query.ParseOptions` | – | – |
| Return | `std.Target.Query` | – | – |

</details>

---


