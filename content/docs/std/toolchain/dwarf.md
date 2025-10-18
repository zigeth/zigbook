---
title: "std.dwarf"
description: "Comprehensive reference for Zig's std.dwarf module covering build coordination, targets, and binary tooling."
navigation:
  title: "Dwarf"
  icon: i-lucide-hammer
  badge: "Toolchain"
badge: "Toolchain"
category: "toolchain"
tags:
  - "zig"
  - "standard-library"
  - "toolchain"
source: "std/dwarf.md"
githubPath: "std/dwarf.md"
lastUpdated: "2025-10-11T02:43:50.343Z"
seo:
  title: "std.dwarf · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.dwarf module covering build coordination, targets, and binary tooling."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/dwarf.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.dwarf` |
| Declarations | 18 |
| Breakdown | 11 types · 7 modules |
| Generated (unix epoch) | 1760148104 |

## Overview

DWARF debugging data format.

This namespace contains unopinionated types and data definitions only. For
an implementation of parsing and caching DWARF information, see
`std.debug.Dwarf`.

---

## Table of Contents

- [Types](#types)
  - [`Format`](#type-format)
  - [`LLE`](#type-lle)
  - [`CFA`](#type-cfa)
  - [`CHILDREN`](#type-children)
  - [`LNS`](#type-lns)
  - [`LNE`](#type-lne)
  - [`UT`](#type-ut)
  - [`LNCT`](#type-lnct)
  - [`RLE`](#type-rle)
  - [`CC`](#type-cc)
  - [`ACCESS`](#type-access)

- [Modules](#modules)
  - [`TAG`](#module-tag)
  - [`AT`](#module-at)
  - [`OP`](#module-op)
  - [`LANG`](#module-lang)
  - [`FORM`](#module-form)
  - [`ATE`](#module-ate)
  - [`EH`](#module-eh)

---

## Types (11)

### <a id="type-format"></a>`Format`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Format = enum { @"32", @"64" }
```

**Fields:**

| Value | Description |
|-------|-------------|
| `@"32"` |  |
| `@"64"` |  |

</details>

---

### <a id="type-lle"></a>`LLE`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const LLE = struct {
    pub const end_of_list = 0x00;
    pub const base_addressx = 0x01;
    pub const startx_endx = 0x02;
    pub const startx_length = 0x03;
    pub const offset_pair = 0x04;
    pub const default_location = 0x05;
    pub const base_address = 0x06;
    pub const start_end = 0x07;
    pub const start_length = 0x08;
}
```

</details>

---

### <a id="type-cfa"></a>`CFA`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const CFA = struct {
    pub const advance_loc = 0x40;
    pub const offset = 0x80;
    pub const restore = 0xc0;
    pub const nop = 0x00;
    pub const set_loc = 0x01;
    pub const advance_loc1 = 0x02;
    pub const advance_loc2 = 0x03;
    pub const advance_loc4 = 0x04;
    pub const offset_extended = 0x05;
    pub const restore_extended = 0x06;
    pub const @"undefined" = 0x07;
    pub const same_value = 0x08;
    pub const register = 0x09;
    pub const remember_state = 0x0a;
    pub const restore_state = 0x0b;
    pub const def_cfa = 0x0c;
    pub const def_cfa_register = 0x0d;
    pub const def_cfa_offset = 0x0e;

    // DWARF 3.
    pub const def_cfa_expression = 0x0f;
    pub const expression = 0x10;
    pub const offset_extended_sf = 0x11;
    pub const def_cfa_sf = 0x12;
    pub const def_cfa_offset_sf = 0x13;
    pub const val_offset = 0x14;
    pub const val_offset_sf = 0x15;
    pub const val_expression = 0x16;

    pub const lo_user = 0x1c;
    pub const hi_user = 0x3f;

    // SGI/MIPS specific.
    pub const MIPS_advance_loc8 = 0x1d;

    // GNU extensions.
    pub const GNU_window_save = 0x2d;
    pub const GNU_args_size = 0x2e;
    pub const GNU_negative_offset_extended = 0x2f;
}
```

</details>

---

### <a id="type-children"></a>`CHILDREN`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const CHILDREN = struct {
    pub const no = 0x00;
    pub const yes = 0x01;
}
```

</details>

---

### <a id="type-lns"></a>`LNS`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const LNS = struct {
    pub const extended_op = 0x00;
    pub const copy = 0x01;
    pub const advance_pc = 0x02;
    pub const advance_line = 0x03;
    pub const set_file = 0x04;
    pub const set_column = 0x05;
    pub const negate_stmt = 0x06;
    pub const set_basic_block = 0x07;
    pub const const_add_pc = 0x08;
    pub const fixed_advance_pc = 0x09;
    pub const set_prologue_end = 0x0a;
    pub const set_epilogue_begin = 0x0b;
    pub const set_isa = 0x0c;
}
```

</details>

---

### <a id="type-lne"></a>`LNE`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const LNE = struct {
    pub const padding = 0x00;
    pub const end_sequence = 0x01;
    pub const set_address = 0x02;
    pub const define_file = 0x03;
    pub const set_discriminator = 0x04;
    pub const lo_user = 0x80;
    pub const hi_user = 0xff;

    // Zig extensions
    pub const ZIG_set_decl = 0xec;
}
```

</details>

---

### <a id="type-ut"></a>`UT`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const UT = struct {
    pub const compile = 0x01;
    pub const @"type" = 0x02;
    pub const partial = 0x03;
    pub const skeleton = 0x04;
    pub const split_compile = 0x05;
    pub const split_type = 0x06;

    pub const lo_user = 0x80;
    pub const hi_user = 0xff;
}
```

</details>

---

### <a id="type-lnct"></a>`LNCT`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const LNCT = struct {
    pub const path = 0x1;
    pub const directory_index = 0x2;
    pub const timestamp = 0x3;
    pub const size = 0x4;
    pub const MD5 = 0x5;

    pub const lo_user = 0x2000;
    pub const hi_user = 0x3fff;

    pub const LLVM_source = 0x2001;
}
```

</details>

---

### <a id="type-rle"></a>`RLE`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const RLE = struct {
    pub const end_of_list = 0x00;
    pub const base_addressx = 0x01;
    pub const startx_endx = 0x02;
    pub const startx_length = 0x03;
    pub const offset_pair = 0x04;
    pub const base_address = 0x05;
    pub const start_end = 0x06;
    pub const start_length = 0x07;
}
```

</details>

---

### <a id="type-cc"></a>`CC`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const CC = enum(u8) {
    normal = 0x1,
    program = 0x2,
    nocall = 0x3,

    pass_by_reference = 0x4,
    pass_by_value = 0x5,

    GNU_renesas_sh = 0x40,
    GNU_borland_fastcall_i386 = 0x41,

    BORLAND_safecall = 0xb0,
    BORLAND_stdcall = 0xb1,
    BORLAND_pascal = 0xb2,
    BORLAND_msfastcall = 0xb3,
    BORLAND_msreturn = 0xb4,
    BORLAND_thiscall = 0xb5,
    BORLAND_fastcall = 0xb6,

    LLVM_vectorcall = 0xc0,
    LLVM_Win64 = 0xc1,
    LLVM_X86_64SysV = 0xc2,
    LLVM_AAPCS = 0xc3,
    LLVM_AAPCS_VFP = 0xc4,
    LLVM_IntelOclBicc = 0xc5,
    LLVM_SpirFunction = 0xc6,
    LLVM_OpenCLKernel = 0xc7,
    LLVM_Swift = 0xc8,
    LLVM_PreserveMost = 0xc9,
    LLVM_PreserveAll = 0xca,
    LLVM_X86RegCall = 0xcb,
    LLVM_M68kRTD = 0xcc,
    LLVM_PreserveNone = 0xcd,
    LLVM_RISCVVectorCall = 0xce,
    LLVM_SwiftTail = 0xcf,

    pub const lo_user = 0x40;
    pub const hi_user = 0xff;
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `normal` |  |
| `program` |  |
| `nocall` |  |
| `pass_by_reference` |  |
| `pass_by_value` |  |
| `GNU_renesas_sh` |  |
| `GNU_borland_fastcall_i386` |  |
| `BORLAND_safecall` |  |
| `BORLAND_stdcall` |  |
| `BORLAND_pascal` |  |
| `BORLAND_msfastcall` |  |
| `BORLAND_msreturn` |  |
| `BORLAND_thiscall` |  |
| `BORLAND_fastcall` |  |
| `LLVM_vectorcall` |  |
| `LLVM_Win64` |  |
| `LLVM_X86_64SysV` |  |
| `LLVM_AAPCS` |  |
| `LLVM_AAPCS_VFP` |  |
| `LLVM_IntelOclBicc` |  |
| `LLVM_SpirFunction` |  |
| `LLVM_OpenCLKernel` |  |
| `LLVM_Swift` |  |
| `LLVM_PreserveMost` |  |
| `LLVM_PreserveAll` |  |
| `LLVM_X86RegCall` |  |
| `LLVM_M68kRTD` |  |
| `LLVM_PreserveNone` |  |
| `LLVM_RISCVVectorCall` |  |
| `LLVM_SwiftTail` |  |

</details>

---

### <a id="type-access"></a>`ACCESS`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const ACCESS = struct {
    pub const public = 0x01;
    pub const protected = 0x02;
    pub const private = 0x03;
}
```

</details>

---

## Modules (7)

### <a id="module-tag"></a>`TAG`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const TAG = @import("dwarf/TAG.zig")
```

> **Module:** `dwarf/TAG.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/dwarf/TAG.zig)

</details>

---

### <a id="module-at"></a>`AT`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const AT = @import("dwarf/AT.zig")
```

> **Module:** `dwarf/AT.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/dwarf/AT.zig)

</details>

---

### <a id="module-op"></a>`OP`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const OP = @import("dwarf/OP.zig")
```

> **Module:** `dwarf/OP.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/dwarf/OP.zig)

</details>

---

### <a id="module-lang"></a>`LANG`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const LANG = @import("dwarf/LANG.zig")
```

> **Module:** `dwarf/LANG.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/dwarf/LANG.zig)

</details>

---

### <a id="module-form"></a>`FORM`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const FORM = @import("dwarf/FORM.zig")
```

> **Module:** `dwarf/FORM.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/dwarf/FORM.zig)

</details>

---

### <a id="module-ate"></a>`ATE`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const ATE = @import("dwarf/ATE.zig")
```

> **Module:** `dwarf/ATE.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/dwarf/ATE.zig)

</details>

---

### <a id="module-eh"></a>`EH`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const EH = @import("dwarf/EH.zig")
```

> **Module:** `dwarf/EH.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/dwarf/EH.zig)

</details>

---


