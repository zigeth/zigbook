---
title: "std.fmt"
description: "Comprehensive reference for Zig's std.fmt module covering formatting, serialization, and text-processing helpers."
navigation:
  title: "Fmt"
  icon: i-lucide-binary
  badge: "Encoding"
badge: "Encoding"
category: "encodings"
tags:
  - "zig"
  - "standard-library"
  - "encodings"
source: "std/fmt.md"
githubPath: "std/fmt.md"
lastUpdated: "2025-10-11T02:43:50.344Z"
seo:
  title: "std.fmt · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.fmt module covering formatting, serialization, and text-processing helpers."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/fmt.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.fmt` |
| Declarations | 38 |
| Breakdown | 20 functions · 7 types · 8 constants · 2 error sets · 1 module |
| Generated (unix epoch) | 1760148105 |

## Overview

String formatting and parsing.

---

## Table of Contents

- [Functions](#functions)
  - [`format`](#fn-format)
  - [`printInt`](#fn-printint)
  - [`digits2`](#fn-digits2)
  - [`Alt`](#fn-alt)
  - [`alt`](#fn-alt-1)
  - [`parseInt`](#fn-parseint)
  - [`parseIntWithGenericCharacter`](#fn-parseintwithgenericcharacter)
  - [`parseUnsigned`](#fn-parseunsigned)
  - [`parseIntSizeSuffix`](#fn-parseintsizesuffix)
  - [`charToDigit`](#fn-chartodigit)
  - [`digitToChar`](#fn-digittochar)
  - [`bufPrint`](#fn-bufprint)
  - [`bufPrintZ`](#fn-bufprintz)
  - [`count`](#fn-count)
  - [`allocPrint`](#fn-allocprint)
  - [`allocPrintSentinel`](#fn-allocprintsentinel)
  - [`comptimePrint`](#fn-comptimeprint)
  - [`bytesToHex`](#fn-bytestohex)
  - [`hexToBytes`](#fn-hextobytes)
  - [`hex`](#fn-hex)

- [Types](#types)
  - [`Alignment`](#type-alignment)
  - [`Case`](#type-case)
  - [`Options`](#type-options)
  - [`Number`](#type-number)
  - [`Placeholder`](#type-placeholder)
  - [`Parser`](#type-parser)
  - [`ArgState`](#type-argstate)

- [Modules](#modules)
  - [`float`](#module-float)

- [Constants](#constants)
  - [`default\_max\_depth`](#const-default-max-depth)
  - [`FormatOptions`](#const-formatoptions)
  - [`Specifier`](#const-specifier)
  - [`ArgSetType`](#const-argsettype)
  - [`Formatter`](#const-formatter)
  - [`parseFloat`](#const-parsefloat)
  - [`ParseFloatError`](#const-parsefloaterror)
  - [`hex\_charset`](#const-hex-charset)

- [Error Sets](#error-sets)
  - [`ParseIntError`](#error-parseinterror)
  - [`BufPrintError`](#error-bufprinterror)

---

## Types (7)

### <a id="type-alignment"></a>`Alignment`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Alignment = enum {
    left,
    center,
    right,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `left` |  |
| `center` |  |
| `right` |  |

</details>

---

### <a id="type-case"></a>`Case`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Case = enum { lower, upper }
```

**Fields:**

| Value | Description |
|-------|-------------|
| `lower` |  |
| `upper` |  |

</details>

---

### <a id="type-options"></a>`Options`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Options = struct {
    precision: ?usize = null,
    width: ?usize = null,
    alignment: Alignment = default_alignment,
    fill: u8 = default_fill_char,

    pub fn toNumber(o: Options, mode: Number.Mode, case: Case) Number {
        return .{
            .mode = mode,
            .case = case,
            .precision = o.precision,
            .width = o.width,
            .alignment = o.alignment,
            .fill = o.fill,
        };
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `precision` | `?usize` | `null` | |
| `width` | `?usize` | `null` | |
| `alignment` | [`Alignment`](#type-alignment) | `default\_alignment` | |
| `fill` | `u8` | `default\_fill\_char` | |

</details>

---

### <a id="type-number"></a>`Number`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Number = struct {
    mode: Mode = .decimal,
    /// Affects hex digits as well as floating point "inf"/"INF".
    case: Case = .lower,
    precision: ?usize = null,
    width: ?usize = null,
    alignment: Alignment = default_alignment,
    fill: u8 = default_fill_char,

    pub const Mode = enum {
        decimal,
        binary,
        octal,
        hex,
        scientific,

        pub fn base(mode: Mode) ?u8 {
            return switch (mode) {
                .decimal => 10,
                .binary => 2,
                .octal => 8,
                .hex => 16,
                .scientific => null,
            };
        }
    };
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `mode` | `Mode` | `.decimal` | |
| `case` | [`Case`](#type-case) | `.lower` | Affects hex digits as well as floating point "inf"/"INF". |
| `precision` | `?usize` | `null` | |
| `width` | `?usize` | `null` | |
| `alignment` | [`Alignment`](#type-alignment) | `default\_alignment` | |
| `fill` | `u8` | `default\_fill\_char` | |

</details>

---

### <a id="type-placeholder"></a>`Placeholder`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Placeholder = struct {
    specifier_arg: []const u8,
    fill: u8,
    alignment: Alignment,
    arg: Specifier,
    width: Specifier,
    precision: Specifier,

    pub fn parse(comptime bytes: []const u8) Placeholder {
        var parser: Parser = .{ .bytes = bytes, .i = 0 };
        const arg = parser.specifier() catch |err| @compileError(@errorName(err));
        const specifier_arg = parser.until(':');
        if (parser.char()) |b| {
            if (b != ':') @compileError("expected : or }, found '" ++ &[1]u8{b} ++ "'");
        }

        // Parse the fill byte, if present.
        //
        // When the width field is also specified, the fill byte must
        // be followed by an alignment specifier, unless it's '0' (zero)
        // (in which case it's handled as part of the width specifier).
        var fill: ?u8 = if (parser.peek(1)) |b|
            switch (b) {
                '<', '^', '>' => parser.char(),
                else => null,
            }
        else
            null;

        // Parse the alignment parameter
        const alignment: ?Alignment = if (parser.peek(0)) |b| init: {
            switch (b) {
                '<', '^', '>' => {
                    // consume the character
                    break :init switch (parser.char().?) {
                        '<' => .left,
                        '^' => .center,
                        else => .right,
                    };
                },
                else => break :init null,
            }
        } else null;

        // When none of the fill character and the alignment specifier have
        // been provided, check whether the width starts with a zero.
        if (fill == null and alignment == null) {
            fill = if (parser.peek(0) == '0') '0' else null;
        }

        // Parse the width parameter
        const width = parser.specifier() catch |err| @compileError(@errorName(err));

        // Skip the dot, if present
        if (parser.char()) |b| {
            if (b != '.') @compileError("expected . or }, found '" ++ &[1]u8{b} ++ "'");
        }

        // Parse the precision parameter
        const precision = parser.specifier() catch |err| @compileError(@errorName(err));

        if (parser.char()) |b| @compileError("extraneous trailing character '" ++ &[1]u8{b} ++ "'");

        const specifier_array = specifier_arg[0..specifier_arg.len].*;

        return .{
            .specifier_arg = &specifier_array,
            .fill = fill orelse default_fill_char,
            .alignment = alignment orelse default_alignment,
            .arg = arg,
            .width = width,
            .precision = precision,
        };
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `specifier_arg` | `[]const u8` | – | |
| `fill` | `u8` | – | |
| `alignment` | [`Alignment`](#type-alignment) | – | |
| `arg` | [`Specifier`](#const-specifier) | – | |
| `width` | [`Specifier`](#const-specifier) | – | |
| `precision` | [`Specifier`](#const-specifier) | – | |

</details>

---

### <a id="type-parser"></a>`Parser`

<details class="declaration-card" open>
<summary>Container – A stream based parser for format strings</summary>

A stream based parser for format strings.

Allows to implement formatters compatible with std.fmt without replicating
the standard library behavior.

```zig
pub const Parser = struct {
    bytes: []const u8,
    i: usize,

    pub fn number(self: *@This()) ?usize {
        var r: ?usize = null;
        while (self.peek(0)) |byte| {
            switch (byte) {
                '0'...'9' => {
                    if (r == null) r = 0;
                    r.? *= 10;
                    r.? += byte - '0';
                },
                else => break,
            }
            self.i += 1;
        }
        return r;
    }

    pub fn until(self: *@This(), delimiter: u8) []const u8 {
        const start = self.i;
        self.i = std.mem.indexOfScalarPos(u8, self.bytes, self.i, delimiter) orelse self.bytes.len;
        return self.bytes[start..self.i];
    }

    pub fn char(self: *@This()) ?u8 {
        const i = self.i;
        if (self.bytes.len - i == 0) return null;
        self.i = i + 1;
        return self.bytes[i];
    }

    pub fn maybe(self: *@This(), byte: u8) bool {
        if (self.peek(0) == byte) {
            self.i += 1;
            return true;
        }
        return false;
    }

    pub fn specifier(self: *@This()) !Specifier {
        if (self.maybe('[')) {
            const arg_name = self.until(']');
            if (!self.maybe(']')) return error.@"Expected closing ]";
            return .{ .named = arg_name };
        }
        if (self.number()) |i| return .{ .number = i };
        return .{ .none = {} };
    }

    pub fn peek(self: *@This(), i: usize) ?u8 {
        const peek_index = self.i + i;
        if (peek_index >= self.bytes.len) return null;
        return self.bytes[peek_index];
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |
| `i` | `usize` | – | |

</details>

---

### <a id="type-argstate"></a>`ArgState`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const ArgState = struct {
    next_arg: usize = 0,
    used_args: ArgSetType = 0,
    args_len: usize,

    pub fn hasUnusedArgs(self: *@This()) bool {
        return @popCount(self.used_args) != self.args_len;
    }

    pub fn nextArg(self: *@This(), arg_index: ?usize) ?usize {
        const next_index = arg_index orelse init: {
            const arg = self.next_arg;
            self.next_arg += 1;
            break :init arg;
        };

        if (next_index >= self.args_len) {
            return null;
        }

        // Mark this argument as used
        self.used_args |= @as(ArgSetType, 1) << @as(u5, @intCast(next_index));
        return next_index;
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `next_arg` | `usize` | `0` | |
| `used_args` | [`ArgSetType`](#const-argsettype) | `0` | |
| `args_len` | `usize` | – | |

</details>

---

## Modules (1)

### <a id="module-float"></a>`float`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const float = @import("fmt/float.zig")
```

> **Module:** `fmt/float.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/fmt/float.zig)

</details>

---

## Constants (8)

### <a id="const-default-max-depth"></a>`default_max_depth`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const default_max_depth = 3
```

</details>

---

### <a id="const-formatoptions"></a>`FormatOptions` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated in favor of `Options`</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Options`.
>
> This may be removed in a future version.

Deprecated in favor of `Options`.

```zig
pub const FormatOptions = Options
```

</details>

---

### <a id="const-specifier"></a>`Specifier`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Specifier = union(enum) {
    none,
    number: usize,
    named: []const u8,
}
```

</details>

---

### <a id="const-argsettype"></a>`ArgSetType`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ArgSetType = u32
```

</details>

---

### <a id="const-formatter"></a>`Formatter` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated in favor of `Alt`</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Alt`.
>
> This may be removed in a future version.

Deprecated in favor of `Alt`.

```zig
pub const Formatter = Alt
```

</details>

---

### <a id="const-parsefloat"></a>`parseFloat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseFloat = @import("fmt/parse_float.zig").parseFloat
```

</details>

---

### <a id="const-parsefloaterror"></a>`ParseFloatError`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ParseFloatError = @import("fmt/parse_float.zig").ParseFloatError
```

</details>

---

### <a id="const-hex-charset"></a>`hex_charset`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const hex_charset = "0123456789abcdef"
```

</details>

---

## Functions (20)

### <a id="fn-format"></a>`format` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Function • Deprecated – Deprecated in favor of `Writer</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Writer.print`.
>
> This may be removed in a future version.

Deprecated in favor of `Writer.print`.

```zig
pub fn format(writer: anytype, comptime fmt: []const u8, args: anytype) !void {
    var adapter = writer.adaptToNewApi(&.{});
    return adapter.new_interface.print(fmt, args) catch |err| switch (err) {
        error.WriteFailed => return adapter.err.?,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `writer` | `` | – | – |
| `fmt` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-printint"></a>`printInt`

<details class="declaration-card" open>
<summary>Function – Asserts the rendered integer value fits in `buffer`</summary>

Asserts the rendered integer value fits in `buffer`.
Returns the end index within `buffer`.

```zig
pub fn printInt(buffer: []u8, value: anytype, base: u8, case: Case, options: Options) usize {
    var w: Writer = .fixed(buffer);
    w.printInt(value, base, case, options) catch unreachable;
    return w.end;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buffer` | `[]u8` | – | – |
| `value` | `` | – | – |
| `base` | `u8` | – | – |
| `case` | [`Case`](#type-case) | – | – |
| `options` | [`Options`](#type-options) | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-digits2"></a>`digits2`

<details class="declaration-card" open>
<summary>Function – Converts values in the range [0, 100) to a base 10 string</summary>

Converts values in the range [0, 100) to a base 10 string.

```zig
pub fn digits2(value: u8) [2]u8 {
    if (builtin.mode == .ReleaseSmall) {
        return .{ @intCast('0' + value / 10), @intCast('0' + value % 10) };
    } else {
        return "00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899"[value * 2 ..][0..2].*;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `u8` | – | – |
| Return | `[2]u8` | – | – |

</details>

---

### <a id="fn-alt"></a>`Alt`

<details class="declaration-card" open>
<summary>Function – Creates a type suitable for instantiating and passing to a &quot;{f}&quot; placeholder</summary>

Creates a type suitable for instantiating and passing to a "{f}" placeholder.

```zig
pub fn Alt(
    comptime Data: type,
    comptime formatFn: fn (data: Data, writer: *Writer) Writer.Error!void,
) type {
    return struct {
        data: Data,
        pub inline fn format(self: @This(), writer: *Writer) Writer.Error!void {
            try formatFn(self.data, writer);
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `Data` | `type` | – | – |
| `formatFn` | `fn (data: Data, writer: *Writer) Writer.Error!void` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-alt-1"></a>`alt`

<details class="declaration-card" open>
<summary>Function – Helper for calling alternate format methods besides one named &quot;format&quot;</summary>

Helper for calling alternate format methods besides one named "format".

```zig
pub fn alt(
    context: anytype,
    comptime func_name: @TypeOf(.enum_literal),
) Formatter(@TypeOf(context), @field(@TypeOf(context), @tagName(func_name))) {
    return .{ .data = context };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `context` | `` | – | – |
| `func\_name` | `@TypeOf(.enum_literal)` | – | – |
| Return | See note[^fn-alt-1-return-0] | – | – |


[^fn-alt-1-return-0]:
    Return type for `alt`:

    ```zig
    Formatter(@TypeOf(context), @field(@TypeOf(context), @tagName(func_name)))
    ```

</details>

---

### <a id="fn-parseint"></a>`parseInt`

<details class="declaration-card" open>
<summary>Function – Parses the string `buf` as signed or unsigned representation in the</summary>

Parses the string `buf` as signed or unsigned representation in the
specified base of an integral value of type `T`.

When `base` is zero the string prefix is examined to detect the true base:
 * A prefix of "0b" implies base=2,
 * A prefix of "0o" implies base=8,
 * A prefix of "0x" implies base=16,
 * Otherwise base=10 is assumed.

Ignores '_' character in `buf`.
See also `parseUnsigned`.

```zig
pub fn parseInt(comptime T: type, buf: []const u8, base: u8) ParseIntError!T {
    return parseIntWithGenericCharacter(T, u8, buf, base);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buf` | `[]const u8` | – | – |
| `base` | `u8` | – | – |
| Return | [`ParseIntError!T`](#error-parseinterror) | – | – |

</details>

---

### <a id="fn-parseintwithgenericcharacter"></a>`parseIntWithGenericCharacter`

<details class="declaration-card" open>
<summary>Function – Like `parseInt`, but with a generic `Character` type</summary>

Like `parseInt`, but with a generic `Character` type.

```zig
pub fn parseIntWithGenericCharacter(
    comptime Result: type,
    comptime Character: type,
    buf: []const Character,
    base: u8,
) ParseIntError!Result {
    if (buf.len == 0) return error.InvalidCharacter;
    if (buf[0] == '+') return parseIntWithSign(Result, Character, buf[1..], base, .pos);
    if (buf[0] == '-') return parseIntWithSign(Result, Character, buf[1..], base, .neg);
    return parseIntWithSign(Result, Character, buf, base, .pos);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `Result` | `type` | – | – |
| `Character` | `type` | – | – |
| `buf` | `[]const Character` | – | – |
| `base` | `u8` | – | – |
| Return | [`ParseIntError!Result`](#error-parseinterror) | – | – |

</details>

---

### <a id="fn-parseunsigned"></a>`parseUnsigned`

<details class="declaration-card" open>
<summary>Function – Parses the string `buf` as unsigned representation in the specified base</summary>

Parses the string `buf` as unsigned representation in the specified base
of an integral value of type `T`.

When `base` is zero the string prefix is examined to detect the true base:
 * A prefix of "0b" implies base=2,
 * A prefix of "0o" implies base=8,
 * A prefix of "0x" implies base=16,
 * Otherwise base=10 is assumed.

Ignores '_' character in `buf`.
See also `parseInt`.

```zig
pub fn parseUnsigned(comptime T: type, buf: []const u8, base: u8) ParseIntError!T {
    return parseIntWithSign(T, u8, buf, base, .pos);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buf` | `[]const u8` | – | – |
| `base` | `u8` | – | – |
| Return | [`ParseIntError!T`](#error-parseinterror) | – | – |

</details>

---

### <a id="fn-parseintsizesuffix"></a>`parseIntSizeSuffix`

<details class="declaration-card" open>
<summary>Function – Parses a number like &#39;2G&#39;, &#39;2Gi&#39;, or &#39;2GiB&#39;</summary>

Parses a number like '2G', '2Gi', or '2GiB'.

```zig
pub fn parseIntSizeSuffix(buf: []const u8, digit_base: u8) ParseIntError!usize {
    var without_B = buf;
    if (mem.endsWith(u8, buf, "B")) without_B.len -= 1;
    var without_i = without_B;
    var magnitude_base: usize = 1000;
    if (mem.endsWith(u8, without_B, "i")) {
        without_i.len -= 1;
        magnitude_base = 1024;
    }
    if (without_i.len == 0) return error.InvalidCharacter;
    const orders_of_magnitude: usize = switch (without_i[without_i.len - 1]) {
        'k', 'K' => 1,
        'M' => 2,
        'G' => 3,
        'T' => 4,
        'P' => 5,
        'E' => 6,
        'Z' => 7,
        'Y' => 8,
        'R' => 9,
        'Q' => 10,
        else => 0,
    };
    var without_suffix = without_i;
    if (orders_of_magnitude > 0) {
        without_suffix.len -= 1;
    } else if (without_i.len != without_B.len) {
        return error.InvalidCharacter;
    }
    const multiplier = math.powi(usize, magnitude_base, orders_of_magnitude) catch |err| switch (err) {
        error.Underflow => unreachable,
        error.Overflow => return error.Overflow,
    };
    const number = try std.fmt.parseInt(usize, without_suffix, digit_base);
    return math.mul(usize, number, multiplier);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `[]const u8` | – | – |
| `digit\_base` | `u8` | – | – |
| Return | [`ParseIntError!usize`](#error-parseinterror) | – | – |

</details>

---

### <a id="fn-chartodigit"></a>`charToDigit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn charToDigit(c: u8, base: u8) (error{InvalidCharacter}!u8) {
    const value = switch (c) {
        '0'...'9' => c - '0',
        'A'...'Z' => c - 'A' + 10,
        'a'...'z' => c - 'a' + 10,
        else => return error.InvalidCharacter,
    };

    if (value >= base) return error.InvalidCharacter;

    return value;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| `base` | `u8` | – | – |
| Return | `(error{InvalidCharacter}!u8)` | – | – |

**Possible Errors:**

- `error.InvalidCharacter`

</details>

---

### <a id="fn-digittochar"></a>`digitToChar`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn digitToChar(digit: u8, case: Case) u8 {
    return switch (digit) {
        0...9 => digit + '0',
        10...35 => digit + ((if (case == .upper) @as(u8, 'A') else @as(u8, 'a')) - 10),
        else => unreachable,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `digit` | `u8` | – | – |
| `case` | [`Case`](#type-case) | – | – |
| Return | `u8` | – | – |

</details>

---

### <a id="fn-bufprint"></a>`bufPrint`

<details class="declaration-card" open>
<summary>Function – Print a Formatter string into `buf`</summary>

Print a Formatter string into `buf`. Returns a slice of the bytes printed.

```zig
pub fn bufPrint(buf: []u8, comptime fmt: []const u8, args: anytype) BufPrintError![]u8 {
    var w: Writer = .fixed(buf);
    w.print(fmt, args) catch |err| switch (err) {
        error.WriteFailed => return error.NoSpaceLeft,
    };
    return w.buffered();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `[]u8` | – | – |
| `fmt` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | [`BufPrintError![]u8`](#error-bufprinterror) | – | – |

</details>

---

### <a id="fn-bufprintz"></a>`bufPrintZ`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn bufPrintZ(buf: []u8, comptime fmt: []const u8, args: anytype) BufPrintError![:0]u8 {
    const result = try bufPrint(buf, fmt ++ "\x00", args);
    return result[0 .. result.len - 1 :0];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `[]u8` | – | – |
| `fmt` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | [`BufPrintError![:0]u8`](#error-bufprinterror) | – | – |

</details>

---

### <a id="fn-count"></a>`count`

<details class="declaration-card" open>
<summary>Function – Count the characters needed for format</summary>

Count the characters needed for format.

```zig
pub fn count(comptime fmt: []const u8, args: anytype) usize {
    var trash_buffer: [64]u8 = undefined;
    var dw: Writer.Discarding = .init(&trash_buffer);
    dw.writer.print(fmt, args) catch |err| switch (err) {
        error.WriteFailed => unreachable,
    };
    return @intCast(dw.count + dw.writer.end);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fmt` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-allocprint"></a>`allocPrint`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn allocPrint(gpa: Allocator, comptime fmt: []const u8, args: anytype) Allocator.Error![]u8 {
    var aw = try Writer.Allocating.initCapacity(gpa, fmt.len);
    defer aw.deinit();
    aw.writer.print(fmt, args) catch |err| switch (err) {
        error.WriteFailed => return error.OutOfMemory,
    };
    return aw.toOwnedSlice();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gpa` | `Allocator` | – | – |
| `fmt` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | `Allocator.Error![]u8` | – | – |

</details>

---

### <a id="fn-allocprintsentinel"></a>`allocPrintSentinel`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn allocPrintSentinel(
    gpa: Allocator,
    comptime fmt: []const u8,
    args: anytype,
    comptime sentinel: u8,
) Allocator.Error![:sentinel]u8 {
    var aw = try Writer.Allocating.initCapacity(gpa, fmt.len);
    defer aw.deinit();
    aw.writer.print(fmt, args) catch |err| switch (err) {
        error.WriteFailed => return error.OutOfMemory,
    };
    return aw.toOwnedSliceSentinel(sentinel);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gpa` | `Allocator` | – | – |
| `fmt` | `[]const u8` | – | – |
| `args` | `` | – | – |
| `sentinel` | `u8` | – | – |
| Return | `Allocator.Error![:sentinel]u8` | – | – |

</details>

---

### <a id="fn-comptimeprint"></a>`comptimePrint`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub inline fn comptimePrint(comptime fmt: []const u8, args: anytype) *const [count(fmt, args):0]u8 {
    comptime {
        var buf: [count(fmt, args):0]u8 = undefined;
        _ = bufPrint(&buf, fmt, args) catch unreachable;
        buf[buf.len] = 0;
        const final = buf;
        return &final;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fmt` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | `*const [count(fmt, args):0]u8` | – | – |

</details>

---

### <a id="fn-bytestohex"></a>`bytesToHex`

<details class="declaration-card" open>
<summary>Function – Encodes a sequence of bytes as hexadecimal digits</summary>

Encodes a sequence of bytes as hexadecimal digits.
Returns an array containing the encoded bytes.

```zig
pub fn bytesToHex(input: anytype, case: Case) [input.len * 2]u8 {
    if (input.len == 0) return [_]u8{};
    comptime assert(@TypeOf(input[0]) == u8); // elements to encode must be unsigned bytes

    const charset = "0123456789" ++ if (case == .upper) "ABCDEF" else "abcdef";
    var result: [input.len * 2]u8 = undefined;
    for (input, 0..) |b, i| {
        result[i * 2 + 0] = charset[b >> 4];
        result[i * 2 + 1] = charset[b & 15];
    }
    return result;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `input` | `` | – | – |
| `case` | [`Case`](#type-case) | – | – |
| Return | `[input.len * 2]u8` | – | – |

</details>

---

### <a id="fn-hextobytes"></a>`hexToBytes`

<details class="declaration-card" open>
<summary>Function – Decodes the sequence of bytes represented by the specified string of</summary>

Decodes the sequence of bytes represented by the specified string of
hexadecimal characters.
Returns a slice of the output buffer containing the decoded bytes.

```zig
pub fn hexToBytes(out: []u8, input: []const u8) ![]u8 {
    // Expect 0 or n pairs of hexadecimal digits.
    if (input.len & 1 != 0)
        return error.InvalidLength;
    if (out.len * 2 < input.len)
        return error.NoSpaceLeft;

    var in_i: usize = 0;
    while (in_i < input.len) : (in_i += 2) {
        const hi = try charToDigit(input[in_i], 16);
        const lo = try charToDigit(input[in_i + 1], 16);
        out[in_i / 2] = (hi << 4) | lo;
    }

    return out[0 .. in_i / 2];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `out` | `[]u8` | – | – |
| `input` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-hex"></a>`hex`

<details class="declaration-card" open>
<summary>Function – Converts an unsigned integer of any multiple of u8 to an array of lowercase</summary>

Converts an unsigned integer of any multiple of u8 to an array of lowercase
hex bytes, little endian.

```zig
pub fn hex(x: anytype) [@sizeOf(@TypeOf(x)) * 2]u8 {
    comptime assert(@typeInfo(@TypeOf(x)).int.signedness == .unsigned);
    var result: [@sizeOf(@TypeOf(x)) * 2]u8 = undefined;
    var i: usize = 0;
    while (i < result.len / 2) : (i += 1) {
        const byte: u8 = @truncate(x >> @intCast(8 * i));
        result[i * 2 + 0] = hex_charset[byte >> 4];
        result[i * 2 + 1] = hex_charset[byte & 15];
    }
    return result;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `x` | `` | – | – |
| Return | `[@sizeOf(@TypeOf(x)) * 2]u8` | – | – |

</details>

---

## Error Sets (2)

### <a id="error-parseinterror"></a>`ParseIntError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ParseIntError = error{
    /// The result cannot fit in the type specified.
    Overflow,
    /// The input was empty or contained an invalid character.
    InvalidCharacter,
}
```

**Errors:**

- `error.Overflow` - The result cannot fit in the type specified.
- `error.InvalidCharacter` - The input was empty or contained an invalid character.

</details>

---

### <a id="error-bufprinterror"></a>`BufPrintError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const BufPrintError = error{
    /// As much as possible was written to the buffer, but it was too small to fit all the printed bytes.
    NoSpaceLeft,
}
```

**Errors:**

- `error.NoSpaceLeft` - As much as possible was written to the buffer, but it was too small to fit all the printed bytes.

</details>

---


