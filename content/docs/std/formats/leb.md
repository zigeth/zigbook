---
title: "std.leb"
description: "Comprehensive reference for Zig's std.leb module covering binary parsing, archive handling, and structured formats."
navigation:
  title: "Leb"
  icon: i-lucide-package
  badge: "Formats"
badge: "Formats"
category: "formats"
tags:
  - "zig"
  - "standard-library"
  - "formats"
source: "std/leb.md"
githubPath: "std/leb.md"
lastUpdated: "2025-10-11T02:43:50.346Z"
seo:
  title: "std.leb · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.leb module covering binary parsing, archive handling, and structured formats."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/leb.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.leb` |
| Declarations | 7 |
| Breakdown | 7 functions |
| Generated (unix epoch) | 1760148106 |

---

## Table of Contents

- [Functions](#functions)
  - [`readUleb128`](#fn-readuleb128)
  - [`writeUleb128`](#fn-writeuleb128)
  - [`readIleb128`](#fn-readileb128)
  - [`writeIleb128`](#fn-writeileb128)
  - [`writeUnsignedFixed`](#fn-writeunsignedfixed)
  - [`writeUnsignedExtended`](#fn-writeunsignedextended)
  - [`writeSignedFixed`](#fn-writesignedfixed)

---

## Functions (7)

### <a id="fn-readuleb128"></a>`readUleb128`

<details class="declaration-card" open>
<summary>Function – Read a single unsigned LEB128 value from the given reader as type T,</summary>

Read a single unsigned LEB128 value from the given reader as type T,
or error.Overflow if the value cannot fit.

\`\`\`zig
pub fn readUleb128(comptime T: type, reader: anytype) !T {
    const U = if (@typeInfo(T).int.bits < 8) u8 else T;
    const ShiftT = std.math.Log2Int(U);

    const max_group = (@typeInfo(U).int.bits + 6) / 7;

    var value: U = 0;
    var group: ShiftT = 0;

    while (group < max_group) : (group += 1) {
        const byte = try reader.readByte();

        const ov = @shlWithOverflow(@as(U, byte & 0x7f), group * 7);
        if (ov[1] != 0) return error.Overflow;

        value |= ov[0];
        if (byte & 0x80 == 0) break;
    } else {
        return error.Overflow;
    }

    // only applies in the case that we extended to u8
    if (U != T) {
        if (value > std.math.maxInt(T)) return error.Overflow;
    }

    return @as(T, @truncate(value));
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `reader` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-writeuleb128"></a>`writeUleb128`

<details class="declaration-card" open>
<summary>Function – Write a single unsigned integer as unsigned LEB128 to the given writer</summary>

Write a single unsigned integer as unsigned LEB128 to the given writer.

\`\`\`zig
pub fn writeUleb128(writer: anytype, arg: anytype) !void {
    const Arg = @TypeOf(arg);
    const Int = switch (Arg) {
        comptime_int => std.math.IntFittingRange(arg, arg),
        else => Arg,
    };
    const Value = if (@typeInfo(Int).int.bits < 8) u8 else Int;
    var value: Value = arg;

    while (true) {
        const byte: u8 = @truncate(value & 0x7f);
        value >>= 7;
        if (value == 0) {
            try writer.writeByte(byte);
            break;
        } else {
            try writer.writeByte(byte | 0x80);
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `writer` | `` | – | – |
| `arg` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-readileb128"></a>`readIleb128`

<details class="declaration-card" open>
<summary>Function – Read a single signed LEB128 value from the given reader as type T,</summary>

Read a single signed LEB128 value from the given reader as type T,
or error.Overflow if the value cannot fit.

\`\`\`zig
pub fn readIleb128(comptime T: type, reader: anytype) !T {
    const S = if (@typeInfo(T).int.bits < 8) i8 else T;
    const U = std.meta.Int(.unsigned, @typeInfo(S).int.bits);
    const ShiftU = std.math.Log2Int(U);

    const max_group = (@typeInfo(U).int.bits + 6) / 7;

    var value = @as(U, 0);
    var group = @as(ShiftU, 0);

    while (group < max_group) : (group += 1) {
        const byte = try reader.readByte();

        const shift = group * 7;
        const ov = @shlWithOverflow(@as(U, byte & 0x7f), shift);
        if (ov[1] != 0) {
            // Overflow is ok so long as the sign bit is set and this is the last byte
            if (byte & 0x80 != 0) return error.Overflow;
            if (@as(S, @bitCast(ov[0])) >= 0) return error.Overflow;

            // and all the overflowed bits are 1
            const remaining_shift = @as(u3, @intCast(@typeInfo(U).int.bits - @as(u16, shift)));
            const remaining_bits = @as(i8, @bitCast(byte | 0x80)) >> remaining_shift;
            if (remaining_bits != -1) return error.Overflow;
        } else {
            // If we don't overflow and this is the last byte and the number being decoded
            // is negative, check that the remaining bits are 1
            if ((byte & 0x80 == 0) and (@as(S, @bitCast(ov[0])) < 0)) {
                const remaining_shift = @as(u3, @intCast(@typeInfo(U).int.bits - @as(u16, shift)));
                const remaining_bits = @as(i8, @bitCast(byte | 0x80)) >> remaining_shift;
                if (remaining_bits != -1) return error.Overflow;
            }
        }

        value |= ov[0];
        if (byte & 0x80 == 0) {
            const needs_sign_ext = group + 1 < max_group;
            if (byte & 0x40 != 0 and needs_sign_ext) {
                const ones = @as(S, -1);
                value |= @as(U, @bitCast(ones)) << (shift + 7);
            }
            break;
        }
    } else {
        return error.Overflow;
    }

    const result = @as(S, @bitCast(value));
    // Only applies if we extended to i8
    if (S != T) {
        if (result > std.math.maxInt(T) or result < std.math.minInt(T)) return error.Overflow;
    }

    return @as(T, @truncate(result));
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `reader` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-writeileb128"></a>`writeIleb128`

<details class="declaration-card" open>
<summary>Function – Write a single signed integer as signed LEB128 to the given writer</summary>

Write a single signed integer as signed LEB128 to the given writer.

\`\`\`zig
pub fn writeIleb128(writer: anytype, arg: anytype) !void {
    const Arg = @TypeOf(arg);
    const Int = switch (Arg) {
        comptime_int => std.math.IntFittingRange(-@abs(arg), @abs(arg)),
        else => Arg,
    };
    const Signed = if (@typeInfo(Int).int.bits < 8) i8 else Int;
    const Unsigned = std.meta.Int(.unsigned, @typeInfo(Signed).int.bits);
    var value: Signed = arg;

    while (true) {
        const unsigned: Unsigned = @bitCast(value);
        const byte: u8 = @truncate(unsigned);
        value >>= 6;
        if (value == -1 or value == 0) {
            try writer.writeByte(byte & 0x7F);
            break;
        } else {
            value >>= 1;
            try writer.writeByte(byte | 0x80);
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `writer` | `` | – | – |
| `arg` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-writeunsignedfixed"></a>`writeUnsignedFixed`

<details class="declaration-card" open>
<summary>Function – This is an &quot;advanced&quot; function</summary>

This is an "advanced" function. It allows one to use a fixed amount of memory to store a
ULEB128. This defeats the entire purpose of using this data encoding; it will no longer use
fewer bytes to store smaller numbers. The advantage of using a fixed width is that it makes
fields have a predictable size and so depending on the use case this tradeoff can be worthwhile.
An example use case of this is in emitting DWARF info where one wants to make a ULEB128 field
"relocatable", meaning that it becomes possible to later go back and patch the number to be a
different value without shifting all the following code.

\`\`\`zig
pub fn writeUnsignedFixed(comptime l: usize, ptr: *[l]u8, int: std.meta.Int(.unsigned, l * 7)) void {
    writeUnsignedExtended(ptr, int);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `l` | `usize` | – | – |
| `ptr` | `*[l]u8` | – | – |
| `int` | `std.meta.Int(.unsigned, l * 7)` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-writeunsignedextended"></a>`writeUnsignedExtended`

<details class="declaration-card" open>
<summary>Function – Same as `writeUnsignedFixed` but with a runtime-known length</summary>

Same as `writeUnsignedFixed` but with a runtime-known length.
Asserts `slice.len > 0`.

\`\`\`zig
pub fn writeUnsignedExtended(slice: []u8, arg: anytype) void {
    const Arg = @TypeOf(arg);
    const Int = switch (Arg) {
        comptime_int => std.math.IntFittingRange(arg, arg),
        else => Arg,
    };
    const Value = if (@typeInfo(Int).int.bits < 8) u8 else Int;
    var value: Value = arg;

    for (slice[0 .. slice.len - 1]) |*byte| {
        byte.* = @truncate(0x80 | value);
        value >>= 7;
    }
    slice[slice.len - 1] = @as(u7, @intCast(value));
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `slice` | `[]u8` | – | – |
| `arg` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-writesignedfixed"></a>`writeSignedFixed`

<details class="declaration-card" open>
<summary>Function – This is an &quot;advanced&quot; function</summary>

This is an "advanced" function. It allows one to use a fixed amount of memory to store an
ILEB128. This defeats the entire purpose of using this data encoding; it will no longer use
fewer bytes to store smaller numbers. The advantage of using a fixed width is that it makes
fields have a predictable size and so depending on the use case this tradeoff can be worthwhile.
An example use case of this is in emitting DWARF info where one wants to make a ILEB128 field
"relocatable", meaning that it becomes possible to later go back and patch the number to be a
different value without shifting all the following code.

\`\`\`zig
pub fn writeSignedFixed(comptime l: usize, ptr: *[l]u8, int: std.meta.Int(.signed, l * 7)) void {
    const T = @TypeOf(int);
    const U = if (@typeInfo(T).int.bits < 8) u8 else T;
    var value: U = @intCast(int);

    comptime var i = 0;
    inline while (i < (l - 1)) : (i += 1) {
        const byte: u8 = @bitCast(@as(i8, @truncate(value)) | -0b1000_0000);
        value >>= 7;
        ptr[i] = byte;
    }
    ptr[i] = @as(u7, @bitCast(@as(i7, @truncate(value))));
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `l` | `usize` | – | – |
| `ptr` | `*[l]u8` | – | – |
| `int` | `std.meta.Int(.signed, l * 7)` | – | – |
| Return | `void` | – | – |

</details>

---
