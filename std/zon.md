# std.zon

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.zon` |
| Declarations | 3 |
| Breakdown | 3 modules |
| Generated (unix epoch) | 1760148112 |

## Overview

ZON parsing and stringification.

ZON ("Zig Object Notation") is a textual file format. Outside of `nan` and `inf` literals, ZON's
grammar is a subset of Zig's.

Supported Zig primitives:
* boolean literals
* number literals (including `nan` and `inf`)
* character literals
* enum literals
* `null` literals
* string literals
* multiline string literals

Supported Zig container types:
* anonymous struct literals
* anonymous tuple literals

Here is an example ZON object:
```
.{
    .a = 1.5,
    .b = "hello, world!",
    .c = .{ true, false },
    .d = .{ 1, 2, 3 },
    .e = .{ .x = 13, .y = 67 },
}
```

Individual primitives are also valid ZON, for example:
```
"This string is a valid ZON object."
```

ZON may not contain type names.

ZON does not have syntax for pointers, but the parsers will allocate as needed to match the
given Zig types. Similarly, the serializer will traverse pointers.

---

## Table of Contents

- [Modules](#modules)
  - [`parse`](#module-parse)
  - [`stringify`](#module-stringify)
  - [`Serializer`](#module-serializer)

---

## Modules (3)

### <a id="module-parse"></a>`parse`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const parse = @import("zon/parse.zig")
```

> **Module:** `zon/parse.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zon/parse.zig)

</details>

---

### <a id="module-stringify"></a>`stringify`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const stringify = @import("zon/stringify.zig")
```

> **Module:** `zon/stringify.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zon/stringify.zig)

</details>

---

### <a id="module-serializer"></a>`Serializer`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Serializer = @import("zon/Serializer.zig")
```

> **Module:** `zon/Serializer.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/zon/Serializer.zig)

</details>

---

