---
title: "std.ascii"
description: "Comprehensive reference for Zig's std.ascii module covering formatting, serialization, and text-processing helpers."
navigation:
  title: "Ascii"
  icon: i-lucide-binary
  badge: "Encoding"
badge: "Encoding"
category: "encodings"
tags:
  - "zig"
  - "standard-library"
  - "encodings"
source: "std/ascii.md"
githubPath: "std/ascii.md"
lastUpdated: "2025-10-11T02:43:50.339Z"
seo:
  title: "std.ascii · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.ascii module covering formatting, serialization, and text-processing helpers."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/ascii.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.ascii` |
| Declarations | 31 |
| Breakdown | 25 functions · 2 types · 4 constants |
| Generated (unix epoch) | 1760148101 |

## Overview

The 7-bit [ASCII](https://en.wikipedia.org/wiki/ASCII) character encoding standard.

This is not to be confused with the 8-bit [extended ASCII](https://en.wikipedia.org/wiki/Extended_ASCII) character encoding.

Even though this module concerns itself with 7-bit ASCII,
functions use `u8` as the type instead of `u7` for convenience and compatibility.
Characters outside of the 7-bit range are gracefully handled (e.g. by returning `false`).

See also: https://en.wikipedia.org/wiki/ASCII#Character_set

---

## Table of Contents

- [Functions](#functions)
  - [`isAlphanumeric`](#fn-isalphanumeric)
  - [`isAlphabetic`](#fn-isalphabetic)
  - [`isControl`](#fn-iscontrol)
  - [`isDigit`](#fn-isdigit)
  - [`isLower`](#fn-islower)
  - [`isPrint`](#fn-isprint)
  - [`isWhitespace`](#fn-iswhitespace)
  - [`isUpper`](#fn-isupper)
  - [`isHex`](#fn-ishex)
  - [`isAscii`](#fn-isascii)
  - [`toUpper`](#fn-toupper)
  - [`toLower`](#fn-tolower)
  - [`lowerString`](#fn-lowerstring)
  - [`allocLowerString`](#fn-alloclowerstring)
  - [`upperString`](#fn-upperstring)
  - [`allocUpperString`](#fn-allocupperstring)
  - [`eqlIgnoreCase`](#fn-eqlignorecase)
  - [`startsWithIgnoreCase`](#fn-startswithignorecase)
  - [`endsWithIgnoreCase`](#fn-endswithignorecase)
  - [`indexOfIgnoreCase`](#fn-indexofignorecase)
  - [`indexOfIgnoreCasePos`](#fn-indexofignorecasepos)
  - [`indexOfIgnoreCasePosLinear`](#fn-indexofignorecaseposlinear)
  - [`orderIgnoreCase`](#fn-orderignorecase)
  - [`lessThanIgnoreCase`](#fn-lessthanignorecase)
  - [`hexEscape`](#fn-hexescape)

- [Types](#types)
  - [`control\_code`](#type-control-code)
  - [`HexEscape`](#type-hexescape)

- [Constants](#constants)
  - [`lowercase`](#const-lowercase)
  - [`uppercase`](#const-uppercase)
  - [`letters`](#const-letters)
  - [`whitespace`](#const-whitespace)

---

## Types (2)

### <a id="type-control-code"></a>`control_code`

<details class="declaration-card" open>
<summary>Type Alias – The C0 control codes of the ASCII encoding</summary>

The C0 control codes of the ASCII encoding.

See also: https://en.wikipedia.org/wiki/C0_and_C1_control_codes and `isControl`

\`\`\`zig
pub const control_code = struct {
    /// Null.
    pub const nul = 0x00;
    /// Start of Heading.
    pub const soh = 0x01;
    /// Start of Text.
    pub const stx = 0x02;
    /// End of Text.
    pub const etx = 0x03;
    /// End of Transmission.
    pub const eot = 0x04;
    /// Enquiry.
    pub const enq = 0x05;
    /// Acknowledge.
    pub const ack = 0x06;
    /// Bell, Alert.
    pub const bel = 0x07;
    /// Backspace.
    pub const bs = 0x08;
    /// Horizontal Tab, Tab ('\t').
    pub const ht = 0x09;
    /// Line Feed, Newline ('\n').
    pub const lf = 0x0A;
    /// Vertical Tab.
    pub const vt = 0x0B;
    /// Form Feed.
    pub const ff = 0x0C;
    /// Carriage Return ('\r').
    pub const cr = 0x0D;
    /// Shift Out.
    pub const so = 0x0E;
    /// Shift In.
    pub const si = 0x0F;
    /// Data Link Escape.
    pub const dle = 0x10;
    /// Device Control One (XON).
    pub const dc1 = 0x11;
    /// Device Control Two.
    pub const dc2 = 0x12;
    /// Device Control Three (XOFF).
    pub const dc3 = 0x13;
    /// Device Control Four.
    pub const dc4 = 0x14;
    /// Negative Acknowledge.
    pub const nak = 0x15;
    /// Synchronous Idle.
    pub const syn = 0x16;
    /// End of Transmission Block
    pub const etb = 0x17;
    /// Cancel.
    pub const can = 0x18;
    /// End of Medium.
    pub const em = 0x19;
    /// Substitute.
    pub const sub = 0x1A;
    /// Escape.
    pub const esc = 0x1B;
    /// File Separator.
    pub const fs = 0x1C;
    /// Group Separator.
    pub const gs = 0x1D;
    /// Record Separator.
    pub const rs = 0x1E;
    /// Unit Separator.
    pub const us = 0x1F;

    /// Delete.
    pub const del = 0x7F;

    /// An alias to `dc1`.
    pub const xon = dc1;
    /// An alias to `dc3`.
    pub const xoff = dc3;
}
\`\`\`

</details>

---

### <a id="type-hexescape"></a>`HexEscape`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const HexEscape = struct {
    bytes: []const u8,
    charset: *const [16]u8,

    pub const upper_charset = "0123456789ABCDEF";
    pub const lower_charset = "0123456789abcdef";

    pub fn format(se: HexEscape, w: *std.io.Writer) std.io.Writer.Error!void {
        const charset = se.charset;

        var buf: [4]u8 = undefined;
        buf[0] = '\\';
        buf[1] = 'x';

        for (se.bytes) |c| {
            if (std.ascii.isPrint(c)) {
                try w.writeByte(c);
            } else {
                buf[2] = charset[c >> 4];
                buf[3] = charset[c & 15];
                try w.writeAll(&buf);
            }
        }
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |
| `charset` | `*const [16]u8` | – | |

</details>

---

## Constants (4)

### <a id="const-lowercase"></a>`lowercase`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const lowercase = "abcdefghijklmnopqrstuvwxyz"
\`\`\`

</details>

---

### <a id="const-uppercase"></a>`uppercase`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
\`\`\`

</details>

---

### <a id="const-letters"></a>`letters`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const letters = lowercase ++ uppercase
\`\`\`

</details>

---

### <a id="const-whitespace"></a>`whitespace`

<details class="declaration-card" open>
<summary>Constant – Whitespace for general use</summary>

Whitespace for general use.
This may be used with e.g. `std.mem.trim` to trim whitespace.

See also: `isWhitespace`

\`\`\`zig
pub const whitespace = [_]u8{ ' ', '\t', '\n', '\r', control_code.vt, control_code.ff }
\`\`\`

</details>

---

## Functions (25)

### <a id="fn-isalphanumeric"></a>`isAlphanumeric`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is alphanumeric: A-Z, a-z, or 0-9</summary>

Returns whether the character is alphanumeric: A-Z, a-z, or 0-9.

\`\`\`zig
pub fn isAlphanumeric(c: u8) bool {
    return switch (c) {
        '0'...'9', 'A'...'Z', 'a'...'z' => true,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isalphabetic"></a>`isAlphabetic`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is alphabetic: A-Z or a-z</summary>

Returns whether the character is alphabetic: A-Z or a-z.

\`\`\`zig
pub fn isAlphabetic(c: u8) bool {
    return switch (c) {
        'A'...'Z', 'a'...'z' => true,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-iscontrol"></a>`isControl`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is a control character</summary>

Returns whether the character is a control character.

See also: `control_code`

\`\`\`zig
pub fn isControl(c: u8) bool {
    return c <= control_code.us or c == control_code.del;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isdigit"></a>`isDigit`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is a digit</summary>

Returns whether the character is a digit.

\`\`\`zig
pub fn isDigit(c: u8) bool {
    return switch (c) {
        '0'...'9' => true,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-islower"></a>`isLower`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is a lowercase letter</summary>

Returns whether the character is a lowercase letter.

\`\`\`zig
pub fn isLower(c: u8) bool {
    return switch (c) {
        'a'...'z' => true,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isprint"></a>`isPrint`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is printable and has some graphical representation,</summary>

Returns whether the character is printable and has some graphical representation,
including the space character.

\`\`\`zig
pub fn isPrint(c: u8) bool {
    return isAscii(c) and !isControl(c);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-iswhitespace"></a>`isWhitespace`

<details class="declaration-card" open>
<summary>Function – Returns whether this character is included in `whitespace`</summary>

Returns whether this character is included in `whitespace`.

\`\`\`zig
pub fn isWhitespace(c: u8) bool {
    return switch (c) {
        ' ', '\t'...'\r' => true,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isupper"></a>`isUpper`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is an uppercase letter</summary>

Returns whether the character is an uppercase letter.

\`\`\`zig
pub fn isUpper(c: u8) bool {
    return switch (c) {
        'A'...'Z' => true,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-ishex"></a>`isHex`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is a hexadecimal digit: A-F, a-f, or 0-9</summary>

Returns whether the character is a hexadecimal digit: A-F, a-f, or 0-9.

\`\`\`zig
pub fn isHex(c: u8) bool {
    return switch (c) {
        '0'...'9', 'A'...'F', 'a'...'f' => true,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isascii"></a>`isAscii`

<details class="declaration-card" open>
<summary>Function – Returns whether the character is a 7-bit ASCII character</summary>

Returns whether the character is a 7-bit ASCII character.

\`\`\`zig
pub fn isAscii(c: u8) bool {
    return c < 128;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-toupper"></a>`toUpper`

<details class="declaration-card" open>
<summary>Function – Uppercases the character and returns it as-is if already uppercase or not a letter</summary>

Uppercases the character and returns it as-is if already uppercase or not a letter.

\`\`\`zig
pub fn toUpper(c: u8) u8 {
    const mask = @as(u8, @intFromBool(isLower(c))) << 5;
    return c ^ mask;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `u8` | – | – |

</details>

---

### <a id="fn-tolower"></a>`toLower`

<details class="declaration-card" open>
<summary>Function – Lowercases the character and returns it as-is if already lowercase or not a letter</summary>

Lowercases the character and returns it as-is if already lowercase or not a letter.

\`\`\`zig
pub fn toLower(c: u8) u8 {
    const mask = @as(u8, @intFromBool(isUpper(c))) << 5;
    return c | mask;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u8` | – | – |
| Return | `u8` | – | – |

</details>

---

### <a id="fn-lowerstring"></a>`lowerString`

<details class="declaration-card" open>
<summary>Function – Writes a lower case copy of `ascii_string` to `output`</summary>

Writes a lower case copy of `ascii_string` to `output`.
Asserts `output.len >= ascii_string.len`.

\`\`\`zig
pub fn lowerString(output: []u8, ascii_string: []const u8) []u8 {
    std.debug.assert(output.len >= ascii_string.len);
    for (ascii_string, 0..) |c, i| {
        output[i] = toLower(c);
    }
    return output[0..ascii_string.len];
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `output` | `[]u8` | – | – |
| `ascii\_string` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-alloclowerstring"></a>`allocLowerString`

<details class="declaration-card" open>
<summary>Function – Allocates a lower case copy of `ascii_string`</summary>

Allocates a lower case copy of `ascii_string`.
Caller owns returned string and must free with `allocator`.

\`\`\`zig
pub fn allocLowerString(allocator: std.mem.Allocator, ascii_string: []const u8) ![]u8 {
    const result = try allocator.alloc(u8, ascii_string.len);
    return lowerString(result, ascii_string);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `std.mem.Allocator` | – | – |
| `ascii\_string` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-upperstring"></a>`upperString`

<details class="declaration-card" open>
<summary>Function – Writes an upper case copy of `ascii_string` to `output`</summary>

Writes an upper case copy of `ascii_string` to `output`.
Asserts `output.len >= ascii_string.len`.

\`\`\`zig
pub fn upperString(output: []u8, ascii_string: []const u8) []u8 {
    std.debug.assert(output.len >= ascii_string.len);
    for (ascii_string, 0..) |c, i| {
        output[i] = toUpper(c);
    }
    return output[0..ascii_string.len];
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `output` | `[]u8` | – | – |
| `ascii\_string` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-allocupperstring"></a>`allocUpperString`

<details class="declaration-card" open>
<summary>Function – Allocates an upper case copy of `ascii_string`</summary>

Allocates an upper case copy of `ascii_string`.
Caller owns returned string and must free with `allocator`.

\`\`\`zig
pub fn allocUpperString(allocator: std.mem.Allocator, ascii_string: []const u8) ![]u8 {
    const result = try allocator.alloc(u8, ascii_string.len);
    return upperString(result, ascii_string);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `std.mem.Allocator` | – | – |
| `ascii\_string` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-eqlignorecase"></a>`eqlIgnoreCase`

<details class="declaration-card" open>
<summary>Function – Compares strings `a` and `b` case-insensitively and returns whether they are equal</summary>

Compares strings `a` and `b` case-insensitively and returns whether they are equal.

\`\`\`zig
pub fn eqlIgnoreCase(a: []const u8, b: []const u8) bool {
    if (a.len != b.len) return false;
    for (a, 0..) |a_c, i| {
        if (toLower(a_c) != toLower(b[i])) return false;
    }
    return true;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `[]const u8` | – | – |
| `b` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-startswithignorecase"></a>`startsWithIgnoreCase`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn startsWithIgnoreCase(haystack: []const u8, needle: []const u8) bool {
    return if (needle.len > haystack.len) false else eqlIgnoreCase(haystack[0..needle.len], needle);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `haystack` | `[]const u8` | – | – |
| `needle` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-endswithignorecase"></a>`endsWithIgnoreCase`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn endsWithIgnoreCase(haystack: []const u8, needle: []const u8) bool {
    return if (needle.len > haystack.len) false else eqlIgnoreCase(haystack[haystack.len - needle.len ..], needle);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `haystack` | `[]const u8` | – | – |
| `needle` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-indexofignorecase"></a>`indexOfIgnoreCase`

<details class="declaration-card" open>
<summary>Function – Finds `needle` in `haystack`, ignoring case, starting at index 0</summary>

Finds `needle` in `haystack`, ignoring case, starting at index 0.

\`\`\`zig
pub fn indexOfIgnoreCase(haystack: []const u8, needle: []const u8) ?usize {
    return indexOfIgnoreCasePos(haystack, 0, needle);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `haystack` | `[]const u8` | – | – |
| `needle` | `[]const u8` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofignorecasepos"></a>`indexOfIgnoreCasePos`

<details class="declaration-card" open>
<summary>Function – Finds `needle` in `haystack`, ignoring case, starting at `start_index`</summary>

Finds `needle` in `haystack`, ignoring case, starting at `start_index`.
Uses Boyer-Moore-Horspool algorithm on large inputs; `indexOfIgnoreCasePosLinear` on small inputs.

\`\`\`zig
pub fn indexOfIgnoreCasePos(haystack: []const u8, start_index: usize, needle: []const u8) ?usize {
    if (needle.len > haystack.len) return null;
    if (needle.len == 0) return start_index;

    if (haystack.len < 52 or needle.len <= 4)
        return indexOfIgnoreCasePosLinear(haystack, start_index, needle);

    var skip_table: [256]usize = undefined;
    boyerMooreHorspoolPreprocessIgnoreCase(needle, skip_table[0..]);

    var i: usize = start_index;
    while (i <= haystack.len - needle.len) {
        if (eqlIgnoreCase(haystack[i .. i + needle.len], needle)) return i;
        i += skip_table[toLower(haystack[i + needle.len - 1])];
    }

    return null;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `haystack` | `[]const u8` | – | – |
| `start\_index` | `usize` | – | – |
| `needle` | `[]const u8` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofignorecaseposlinear"></a>`indexOfIgnoreCasePosLinear`

<details class="declaration-card" open>
<summary>Function – Consider using `indexOfIgnoreCasePos` instead of this, which will automatically use a</summary>

Consider using `indexOfIgnoreCasePos` instead of this, which will automatically use a
more sophisticated algorithm on larger inputs.

\`\`\`zig
pub fn indexOfIgnoreCasePosLinear(haystack: []const u8, start_index: usize, needle: []const u8) ?usize {
    var i: usize = start_index;
    const end = haystack.len - needle.len;
    while (i <= end) : (i += 1) {
        if (eqlIgnoreCase(haystack[i .. i + needle.len], needle)) return i;
    }
    return null;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `haystack` | `[]const u8` | – | – |
| `start\_index` | `usize` | – | – |
| `needle` | `[]const u8` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-orderignorecase"></a>`orderIgnoreCase`

<details class="declaration-card" open>
<summary>Function – Returns the lexicographical order of two slices</summary>

Returns the lexicographical order of two slices. O(n).

\`\`\`zig
pub fn orderIgnoreCase(lhs: []const u8, rhs: []const u8) std.math.Order {
    const n = @min(lhs.len, rhs.len);
    var i: usize = 0;
    while (i < n) : (i += 1) {
        switch (std.math.order(toLower(lhs[i]), toLower(rhs[i]))) {
            .eq => continue,
            .lt => return .lt,
            .gt => return .gt,
        }
    }
    return std.math.order(lhs.len, rhs.len);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `lhs` | `[]const u8` | – | – |
| `rhs` | `[]const u8` | – | – |
| Return | `std.math.Order` | – | – |

</details>

---

### <a id="fn-lessthanignorecase"></a>`lessThanIgnoreCase`

<details class="declaration-card" open>
<summary>Function – Returns whether the lexicographical order of `lhs` is lower than `rhs`</summary>

Returns whether the lexicographical order of `lhs` is lower than `rhs`.

\`\`\`zig
pub fn lessThanIgnoreCase(lhs: []const u8, rhs: []const u8) bool {
    return orderIgnoreCase(lhs, rhs) == .lt;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `lhs` | `[]const u8` | – | – |
| `rhs` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-hexescape"></a>`hexEscape`

<details class="declaration-card" open>
<summary>Function – Replaces non-ASCII bytes with hex escapes</summary>

Replaces non-ASCII bytes with hex escapes.

\`\`\`zig
pub fn hexEscape(bytes: []const u8, case: std.fmt.Case) std.fmt.Formatter(HexEscape, HexEscape.format) {
    return .{ .data = .{ .bytes = bytes, .charset = switch (case) {
        .lower => HexEscape.lower_charset,
        .upper => HexEscape.upper_charset,
    } } };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| `case` | `std.fmt.Case` | – | – |
| Return | `std.fmt.Formatter(HexEscape, HexEscape.format)` | – | – |

</details>

---
