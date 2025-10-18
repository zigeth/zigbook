---
title: "std.unicode"
description: "Comprehensive reference for Zig's std.unicode module covering formatting, serialization, and text-processing helpers."
navigation:
  title: "Unicode"
  icon: i-lucide-binary
  badge: "Encoding"
badge: "Encoding"
category: "encodings"
tags:
  - "zig"
  - "standard-library"
  - "encodings"
source: "std/unicode.md"
githubPath: "std/unicode.md"
lastUpdated: "2025-10-11T02:43:50.350Z"
seo:
  title: "std.unicode · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.unicode module covering formatting, serialization, and text-processing helpers."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/unicode.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.unicode` |
| Declarations | 62 |
| Breakdown | 52 functions · 6 types · 3 constants · 1 error set |
| Generated (unix epoch) | 1760148111 |

---

## Table of Contents

- [Functions](#functions)
  - [`utf8CodepointSequenceLength`](#fn-utf8codepointsequencelength)
  - [`utf8ByteSequenceLength`](#fn-utf8bytesequencelength)
  - [`utf8Encode`](#fn-utf8encode)
  - [`utf8EncodeComptime`](#fn-utf8encodecomptime)
  - [`utf8Decode`](#fn-utf8decode)
  - [`utf8Decode2`](#fn-utf8decode2)
  - [`utf8Decode3`](#fn-utf8decode3)
  - [`utf8Decode3AllowSurrogateHalf`](#fn-utf8decode3allowsurrogatehalf)
  - [`utf8Decode4`](#fn-utf8decode4)
  - [`utf8ValidCodepoint`](#fn-utf8validcodepoint)
  - [`utf8CountCodepoints`](#fn-utf8countcodepoints)
  - [`utf8ValidateSlice`](#fn-utf8validateslice)
  - [`utf16IsHighSurrogate`](#fn-utf16ishighsurrogate)
  - [`utf16IsLowSurrogate`](#fn-utf16islowsurrogate)
  - [`utf16CodepointSequenceLength`](#fn-utf16codepointsequencelength)
  - [`utf16CodeUnitSequenceLength`](#fn-utf16codeunitsequencelength)
  - [`utf16DecodeSurrogatePair`](#fn-utf16decodesurrogatepair)
  - [`utf16CountCodepoints`](#fn-utf16countcodepoints)
  - [`fmtUtf8`](#fn-fmtutf8)
  - [`utf16LeToUtf8ArrayList`](#fn-utf16letoutf8arraylist)
  - [`utf16LeToUtf8Alloc`](#fn-utf16letoutf8alloc)
  - [`utf16LeToUtf8AllocZ`](#fn-utf16letoutf8allocz)
  - [`utf16LeToUtf8`](#fn-utf16letoutf8)
  - [`utf8ToUtf16LeArrayList`](#fn-utf8toutf16learraylist)
  - [`utf8ToUtf16LeAlloc`](#fn-utf8toutf16lealloc)
  - [`utf8ToUtf16LeAllocZ`](#fn-utf8toutf16leallocz)
  - [`utf8ToUtf16Le`](#fn-utf8toutf16le)
  - [`utf8ToUtf16LeImpl`](#fn-utf8toutf16leimpl)
  - [`utf8ToUtf16LeStringLiteral`](#fn-utf8toutf16lestringliteral)
  - [`wtf8ToWtf16LeStringLiteral`](#fn-wtf8towtf16lestringliteral)
  - [`calcUtf16LeLenImpl`](#fn-calcutf16lelenimpl)
  - [`calcUtf16LeLen`](#fn-calcutf16lelen)
  - [`calcWtf16LeLen`](#fn-calcwtf16lelen)
  - [`fmtUtf16Le`](#fn-fmtutf16le)
  - [`isSurrogateCodepoint`](#fn-issurrogatecodepoint)
  - [`wtf8Encode`](#fn-wtf8encode)
  - [`wtf8Decode`](#fn-wtf8decode)
  - [`wtf8ValidateSlice`](#fn-wtf8validateslice)
  - [`wtf16LeToWtf8ArrayList`](#fn-wtf16letowtf8arraylist)
  - [`wtf16LeToWtf8Alloc`](#fn-wtf16letowtf8alloc)
  - [`wtf16LeToWtf8AllocZ`](#fn-wtf16letowtf8allocz)
  - [`wtf16LeToWtf8`](#fn-wtf16letowtf8)
  - [`wtf8ToWtf16LeArrayList`](#fn-wtf8towtf16learraylist)
  - [`wtf8ToWtf16LeAlloc`](#fn-wtf8towtf16lealloc)
  - [`wtf8ToWtf16LeAllocZ`](#fn-wtf8towtf16leallocz)
  - [`wtf8ToWtf16Le`](#fn-wtf8towtf16le)
  - [`checkUtf8ToUtf16LeOverflow`](#fn-checkutf8toutf16leoverflow)
  - [`checkWtf8ToWtf16LeOverflow`](#fn-checkwtf8towtf16leoverflow)
  - [`wtf8ToUtf8Lossy`](#fn-wtf8toutf8lossy)
  - [`wtf8ToUtf8LossyAlloc`](#fn-wtf8toutf8lossyalloc)
  - [`wtf8ToUtf8LossyAllocZ`](#fn-wtf8toutf8lossyallocz)
  - [`calcWtf8Len`](#fn-calcwtf8len)

- [Types](#types)
  - [`Utf8View`](#type-utf8view)
  - [`Utf8Iterator`](#type-utf8iterator)
  - [`Utf16LeIterator`](#type-utf16leiterator)
  - [`Wtf8View`](#type-wtf8view)
  - [`Wtf8Iterator`](#type-wtf8iterator)
  - [`Wtf16LeIterator`](#type-wtf16leiterator)

- [Constants](#constants)
  - [`replacement\_character`](#const-replacement-character)
  - [`replacement\_character\_utf8`](#const-replacement-character-utf8)
  - [`Utf16LeToUtf8Error`](#const-utf16letoutf8error)

- [Error Sets](#error-sets)
  - [`Utf16LeToUtf8AllocError`](#error-utf16letoutf8allocerror)

---

## Types (6)

### <a id="type-utf8view"></a>`Utf8View`

<details class="declaration-card" open>
<summary>Container – Utf8View iterates the code points of a utf-8 encoded string</summary>

Utf8View iterates the code points of a utf-8 encoded string.

\`\`\`
var utf8 = (try std.unicode.Utf8View.init("hi there")).iterator();
while (utf8.nextCodepointSlice()) |codepoint| {
  std.debug.print("got codepoint {s}\n", .{codepoint});
}
\`\`\`

\`\`\`zig
pub const Utf8View = struct {
    bytes: []const u8,

    pub fn init(s: []const u8) !Utf8View {
        if (!utf8ValidateSlice(s)) {
            return error.InvalidUtf8;
        }

        return initUnchecked(s);
    }

    pub fn initUnchecked(s: []const u8) Utf8View {
        return Utf8View{ .bytes = s };
    }

    pub inline fn initComptime(comptime s: []const u8) Utf8View {
        return comptime if (init(s)) |r| r else |err| switch (err) {
            error.InvalidUtf8 => {
                @compileError("invalid utf8");
            },
        };
    }

    pub fn iterator(s: Utf8View) Utf8Iterator {
        return Utf8Iterator{
            .bytes = s.bytes,
            .i = 0,
        };
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |

**Examples:**

#### Example 1: Working with `Utf8View`

This example illustrates typical usage patterns for `Utf8View`.

\`\`\`zig
var utf8 = (try std.unicode.Utf8View.init("hi there")).iterator();
while (utf8.nextCodepointSlice()) |codepoint| {
std.debug.print("got codepoint {s}\n", .{codepoint});
}
\`\`\`

</details>

---

### <a id="type-utf8iterator"></a>`Utf8Iterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const Utf8Iterator = struct {
    bytes: []const u8,
    i: usize,

    pub fn nextCodepointSlice(it: *Utf8Iterator) ?[]const u8 {
        if (it.i >= it.bytes.len) {
            return null;
        }

        const cp_len = utf8ByteSequenceLength(it.bytes[it.i]) catch unreachable;
        it.i += cp_len;
        return it.bytes[it.i - cp_len .. it.i];
    }

    pub fn nextCodepoint(it: *Utf8Iterator) ?u21 {
        const slice = it.nextCodepointSlice() orelse return null;
        return utf8Decode(slice) catch unreachable;
    }

    /// Look ahead at the next n codepoints without advancing the iterator.
    /// If fewer than n codepoints are available, then return the remainder of the string.
    pub fn peek(it: *Utf8Iterator, n: usize) []const u8 {
        const original_i = it.i;
        defer it.i = original_i;

        var end_ix = original_i;
        var found: usize = 0;
        while (found < n) : (found += 1) {
            const next_codepoint = it.nextCodepointSlice() orelse return it.bytes[original_i..];
            end_ix += next_codepoint.len;
        }

        return it.bytes[original_i..end_ix];
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |
| `i` | `usize` | – | |

</details>

---

### <a id="type-utf16leiterator"></a>`Utf16LeIterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const Utf16LeIterator = struct {
    bytes: []const u8,
    i: usize,

    pub fn init(s: []const u16) Utf16LeIterator {
        return Utf16LeIterator{
            .bytes = mem.sliceAsBytes(s),
            .i = 0,
        };
    }

    pub const NextCodepointError = error{ DanglingSurrogateHalf, ExpectedSecondSurrogateHalf, UnexpectedSecondSurrogateHalf };

    pub fn nextCodepoint(it: *Utf16LeIterator) NextCodepointError!?u21 {
        assert(it.i <= it.bytes.len);
        if (it.i == it.bytes.len) return null;
        var code_units: [2]u16 = undefined;
        code_units[0] = mem.readInt(u16, it.bytes[it.i..][0..2], .little);
        it.i += 2;
        if (utf16IsHighSurrogate(code_units[0])) {
            // surrogate pair
            if (it.i >= it.bytes.len) return error.DanglingSurrogateHalf;
            code_units[1] = mem.readInt(u16, it.bytes[it.i..][0..2], .little);
            const codepoint = try utf16DecodeSurrogatePair(&code_units);
            it.i += 2;
            return codepoint;
        } else if (utf16IsLowSurrogate(code_units[0])) {
            return error.UnexpectedSecondSurrogateHalf;
        } else {
            return code_units[0];
        }
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |
| `i` | `usize` | – | |

</details>

---

### <a id="type-wtf8view"></a>`Wtf8View`

<details class="declaration-card" open>
<summary>Container – Wtf8View iterates the code points of a WTF-8 encoded string,</summary>

Wtf8View iterates the code points of a WTF-8 encoded string,
including surrogate halves.

\`\`\`
var wtf8 = (try std.unicode.Wtf8View.init("hi there")).iterator();
while (wtf8.nextCodepointSlice()) |codepoint| {
  // note: codepoint could be a surrogate half which is invalid
  // UTF-8, avoid printing or otherwise sending/emitting this directly
}
\`\`\`

\`\`\`zig
pub const Wtf8View = struct {
    bytes: []const u8,

    pub fn init(s: []const u8) error{InvalidWtf8}!Wtf8View {
        if (!wtf8ValidateSlice(s)) {
            return error.InvalidWtf8;
        }

        return initUnchecked(s);
    }

    pub fn initUnchecked(s: []const u8) Wtf8View {
        return Wtf8View{ .bytes = s };
    }

    pub inline fn initComptime(comptime s: []const u8) Wtf8View {
        return comptime if (init(s)) |r| r else |err| switch (err) {
            error.InvalidWtf8 => {
                @compileError("invalid wtf8");
            },
        };
    }

    pub fn iterator(s: Wtf8View) Wtf8Iterator {
        return Wtf8Iterator{
            .bytes = s.bytes,
            .i = 0,
        };
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |

**Examples:**

#### Example 1: Working with `Wtf8View`

This example illustrates typical usage patterns for `Wtf8View`.

\`\`\`zig
var wtf8 = (try std.unicode.Wtf8View.init("hi there")).iterator();
while (wtf8.nextCodepointSlice()) |codepoint| {
// note: codepoint could be a surrogate half which is invalid
// UTF-8, avoid printing or otherwise sending/emitting this directly
}
\`\`\`

</details>

---

### <a id="type-wtf8iterator"></a>`Wtf8Iterator`

<details class="declaration-card" open>
<summary>Container – Asserts that `bytes` is valid WTF-8</summary>

Asserts that `bytes` is valid WTF-8

\`\`\`zig
pub const Wtf8Iterator = struct {
    bytes: []const u8,
    i: usize,

    pub fn nextCodepointSlice(it: *Wtf8Iterator) ?[]const u8 {
        if (it.i >= it.bytes.len) {
            return null;
        }

        const cp_len = utf8ByteSequenceLength(it.bytes[it.i]) catch unreachable;
        it.i += cp_len;
        return it.bytes[it.i - cp_len .. it.i];
    }

    pub fn nextCodepoint(it: *Wtf8Iterator) ?u21 {
        const slice = it.nextCodepointSlice() orelse return null;
        return wtf8Decode(slice) catch unreachable;
    }

    /// Look ahead at the next n codepoints without advancing the iterator.
    /// If fewer than n codepoints are available, then return the remainder of the string.
    pub fn peek(it: *Wtf8Iterator, n: usize) []const u8 {
        const original_i = it.i;
        defer it.i = original_i;

        var end_ix = original_i;
        var found: usize = 0;
        while (found < n) : (found += 1) {
            const next_codepoint = it.nextCodepointSlice() orelse return it.bytes[original_i..];
            end_ix += next_codepoint.len;
        }

        return it.bytes[original_i..end_ix];
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |
| `i` | `usize` | – | |

</details>

---

### <a id="type-wtf16leiterator"></a>`Wtf16LeIterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const Wtf16LeIterator = struct {
    bytes: []const u8,
    i: usize,

    pub fn init(s: []const u16) Wtf16LeIterator {
        return Wtf16LeIterator{
            .bytes = mem.sliceAsBytes(s),
            .i = 0,
        };
    }

    /// If the next codepoint is encoded by a surrogate pair, returns the
    /// codepoint that the surrogate pair represents.
    /// If the next codepoint is an unpaired surrogate, returns the codepoint
    /// of the unpaired surrogate.
    pub fn nextCodepoint(it: *Wtf16LeIterator) ?u21 {
        assert(it.i <= it.bytes.len);
        if (it.i == it.bytes.len) return null;
        var code_units: [2]u16 = undefined;
        code_units[0] = mem.readInt(u16, it.bytes[it.i..][0..2], .little);
        it.i += 2;
        surrogate_pair: {
            if (utf16IsHighSurrogate(code_units[0])) {
                if (it.i >= it.bytes.len) break :surrogate_pair;
                code_units[1] = mem.readInt(u16, it.bytes[it.i..][0..2], .little);
                const codepoint = utf16DecodeSurrogatePair(&code_units) catch break :surrogate_pair;
                it.i += 2;
                return codepoint;
            }
        }
        return code_units[0];
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `bytes` | `[]const u8` | – | |
| `i` | `usize` | – | |

</details>

---

## Constants (3)

### <a id="const-replacement-character"></a>`replacement_character`

<details class="declaration-card" open>
<summary>Constant – Use this to replace an unknown, unrecognized, or unrepresentable character</summary>

Use this to replace an unknown, unrecognized, or unrepresentable character.

See also: https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character

\`\`\`zig
pub const replacement_character: u21 = 0xFFFD
\`\`\`

</details>

---

### <a id="const-replacement-character-utf8"></a>`replacement_character_utf8`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const replacement_character_utf8: [3]u8 = utf8EncodeComptime(replacement_character)
\`\`\`

</details>

---

### <a id="const-utf16letoutf8error"></a>`Utf16LeToUtf8Error`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const Utf16LeToUtf8Error = Utf16LeIterator.NextCodepointError
\`\`\`

</details>

---

## Functions (52)

### <a id="fn-utf8codepointsequencelength"></a>`utf8CodepointSequenceLength`

<details class="declaration-card" open>
<summary>Function – Returns how many bytes the UTF-8 representation would require</summary>

Returns how many bytes the UTF-8 representation would require
for the given codepoint.

\`\`\`zig
pub fn utf8CodepointSequenceLength(c: u21) !u3 {
    if (c < 0x80) return @as(u3, 1);
    if (c < 0x800) return @as(u3, 2);
    if (c < 0x10000) return @as(u3, 3);
    if (c < 0x110000) return @as(u3, 4);
    return error.CodepointTooLarge;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u21` | – | – |
| Return | `u3` | – | – |

</details>

---

### <a id="fn-utf8bytesequencelength"></a>`utf8ByteSequenceLength`

<details class="declaration-card" open>
<summary>Function – Given the first byte of a UTF-8 codepoint,</summary>

Given the first byte of a UTF-8 codepoint,
returns a number 1-4 indicating the total length of the codepoint in bytes.
If this byte does not match the form of a UTF-8 start byte, returns Utf8InvalidStartByte.

\`\`\`zig
pub fn utf8ByteSequenceLength(first_byte: u8) !u3 {
    // The switch is optimized much better than a "smart" approach using @clz
    return switch (first_byte) {
        0b0000_0000...0b0111_1111 => 1,
        0b1100_0000...0b1101_1111 => 2,
        0b1110_0000...0b1110_1111 => 3,
        0b1111_0000...0b1111_0111 => 4,
        else => error.Utf8InvalidStartByte,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `first\_byte` | `u8` | – | – |
| Return | `u3` | – | – |

</details>

---

### <a id="fn-utf8encode"></a>`utf8Encode`

<details class="declaration-card" open>
<summary>Function – Encodes the given codepoint into a UTF-8 byte sequence</summary>

Encodes the given codepoint into a UTF-8 byte sequence.
c: the codepoint.
out: the out buffer to write to. Must have a len >= utf8CodepointSequenceLength(c).
Errors: if c cannot be encoded in UTF-8.
Returns: the number of bytes written to out.

\`\`\`zig
pub fn utf8Encode(c: u21, out: []u8) error{ Utf8CannotEncodeSurrogateHalf, CodepointTooLarge }!u3 {
    return utf8EncodeImpl(c, out, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u21` | – | – |
| `out` | `[]u8` | – | – |
| Return | `error{ Utf8CannotEncodeSurrogateHalf, CodepointTooLarge }!u3` | – | – |

**Possible Errors:**

- `error.Utf8CannotEncodeSurrogateHalf`
- `error.CodepointTooLarge`

</details>

---

### <a id="fn-utf8encodecomptime"></a>`utf8EncodeComptime`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub inline fn utf8EncodeComptime(comptime c: u21) [
    utf8CodepointSequenceLength(c) catch |err|
        @compileError(@errorName(err))
]u8 {
    comptime var result: [
        utf8CodepointSequenceLength(c) catch
            unreachable
    ]u8 = undefined;
    comptime assert((utf8Encode(c, &result) catch |err|
        @compileError(@errorName(err))) == result.len);
    return result;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u21` | – | – |
| Return | See note[^fn-utf8encodecomptime-return-0] | – | – |


[^fn-utf8encodecomptime-return-0]:
    Return type for `utf8EncodeComptime`:

    \`\`\`zig
    [
        utf8CodepointSequenceLength(c) catch |err|
            @compileError(@errorName(err))
    ]u8
    \`\`\`

</details>

---

### <a id="fn-utf8decode"></a>`utf8Decode`

<details class="declaration-card" open>
<summary>Function – Deprecated</summary>

Deprecated. This function has an awkward API that is too easy to use incorrectly.

\`\`\`zig
pub fn utf8Decode(bytes: []const u8) Utf8DecodeError!u21 {
    return switch (bytes.len) {
        1 => bytes[0],
        2 => utf8Decode2(bytes[0..2].*),
        3 => utf8Decode3(bytes[0..3].*),
        4 => utf8Decode4(bytes[0..4].*),
        else => unreachable,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| Return | `Utf8DecodeError!u21` | – | – |

</details>

---

### <a id="fn-utf8decode2"></a>`utf8Decode2`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf8Decode2(bytes: [2]u8) Utf8Decode2Error!u21 {
    assert(bytes[0] & 0b11100000 == 0b11000000);
    var value: u21 = bytes[0] & 0b00011111;

    if (bytes[1] & 0b11000000 != 0b10000000) return error.Utf8ExpectedContinuation;
    value <<= 6;
    value |= bytes[1] & 0b00111111;

    if (value < 0x80) return error.Utf8OverlongEncoding;

    return value;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[2]u8` | – | – |
| Return | `Utf8Decode2Error!u21` | – | – |

</details>

---

### <a id="fn-utf8decode3"></a>`utf8Decode3`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf8Decode3(bytes: [3]u8) Utf8Decode3Error!u21 {
    const value = try utf8Decode3AllowSurrogateHalf(bytes);

    if (0xd800 <= value and value <= 0xdfff) return error.Utf8EncodesSurrogateHalf;

    return value;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[3]u8` | – | – |
| Return | `Utf8Decode3Error!u21` | – | – |

</details>

---

### <a id="fn-utf8decode3allowsurrogatehalf"></a>`utf8Decode3AllowSurrogateHalf`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf8Decode3AllowSurrogateHalf(bytes: [3]u8) Utf8Decode3AllowSurrogateHalfError!u21 {
    assert(bytes[0] & 0b11110000 == 0b11100000);
    var value: u21 = bytes[0] & 0b00001111;

    if (bytes[1] & 0b11000000 != 0b10000000) return error.Utf8ExpectedContinuation;
    value <<= 6;
    value |= bytes[1] & 0b00111111;

    if (bytes[2] & 0b11000000 != 0b10000000) return error.Utf8ExpectedContinuation;
    value <<= 6;
    value |= bytes[2] & 0b00111111;

    if (value < 0x800) return error.Utf8OverlongEncoding;

    return value;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[3]u8` | – | – |
| Return | `Utf8Decode3AllowSurrogateHalfError!u21` | – | – |

</details>

---

### <a id="fn-utf8decode4"></a>`utf8Decode4`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf8Decode4(bytes: [4]u8) Utf8Decode4Error!u21 {
    assert(bytes[0] & 0b11111000 == 0b11110000);
    var value: u21 = bytes[0] & 0b00000111;

    if (bytes[1] & 0b11000000 != 0b10000000) return error.Utf8ExpectedContinuation;
    value <<= 6;
    value |= bytes[1] & 0b00111111;

    if (bytes[2] & 0b11000000 != 0b10000000) return error.Utf8ExpectedContinuation;
    value <<= 6;
    value |= bytes[2] & 0b00111111;

    if (bytes[3] & 0b11000000 != 0b10000000) return error.Utf8ExpectedContinuation;
    value <<= 6;
    value |= bytes[3] & 0b00111111;

    if (value < 0x10000) return error.Utf8OverlongEncoding;
    if (value > 0x10FFFF) return error.Utf8CodepointTooLarge;

    return value;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[4]u8` | – | – |
| Return | `Utf8Decode4Error!u21` | – | – |

</details>

---

### <a id="fn-utf8validcodepoint"></a>`utf8ValidCodepoint`

<details class="declaration-card" open>
<summary>Function – Returns true if the given unicode codepoint can be encoded in UTF-8</summary>

Returns true if the given unicode codepoint can be encoded in UTF-8.

\`\`\`zig
pub fn utf8ValidCodepoint(value: u21) bool {
    return switch (value) {
        0xD800...0xDFFF => false, // Surrogates range
        0x110000...0x1FFFFF => false, // Above the maximum codepoint value
        else => true,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `u21` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-utf8countcodepoints"></a>`utf8CountCodepoints`

<details class="declaration-card" open>
<summary>Function – Returns the length of a supplied UTF-8 string literal in terms of unicode</summary>

Returns the length of a supplied UTF-8 string literal in terms of unicode
codepoints.

\`\`\`zig
pub fn utf8CountCodepoints(s: []const u8) !usize {
    var len: usize = 0;

    const N = @sizeOf(usize);
    const MASK = 0x80 * (std.math.maxInt(usize) / 0xff);

    var i: usize = 0;
    while (i < s.len) {
        // Fast path for ASCII sequences
        while (i + N <= s.len) : (i += N) {
            const v = mem.readInt(usize, s[i..][0..N], native_endian);
            if (v & MASK != 0) break;
            len += N;
        }

        if (i < s.len) {
            const n = try utf8ByteSequenceLength(s[i]);
            if (i + n > s.len) return error.TruncatedInput;

            switch (n) {
                1 => {}, // ASCII, no validation needed
                else => _ = try utf8Decode(s[i..][0..n]),
            }

            i += n;
            len += 1;
        }
    }

    return len;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `s` | `[]const u8` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-utf8validateslice"></a>`utf8ValidateSlice`

<details class="declaration-card" open>
<summary>Function – Returns true if the input consists entirely of UTF-8 codepoints</summary>

Returns true if the input consists entirely of UTF-8 codepoints

\`\`\`zig
pub fn utf8ValidateSlice(input: []const u8) bool {
    return utf8ValidateSliceImpl(input, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `input` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-utf16ishighsurrogate"></a>`utf16IsHighSurrogate`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf16IsHighSurrogate(c: u16) bool {
    return c & ~@as(u16, 0x03ff) == 0xd800;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u16` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-utf16islowsurrogate"></a>`utf16IsLowSurrogate`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf16IsLowSurrogate(c: u16) bool {
    return c & ~@as(u16, 0x03ff) == 0xdc00;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u16` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-utf16codepointsequencelength"></a>`utf16CodepointSequenceLength`

<details class="declaration-card" open>
<summary>Function – Returns how many code units the UTF-16 representation would require</summary>

Returns how many code units the UTF-16 representation would require
for the given codepoint.

\`\`\`zig
pub fn utf16CodepointSequenceLength(c: u21) !u2 {
    if (c <= 0xFFFF) return 1;
    if (c <= 0x10FFFF) return 2;
    return error.CodepointTooLarge;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u21` | – | – |
| Return | `u2` | – | – |

</details>

---

### <a id="fn-utf16codeunitsequencelength"></a>`utf16CodeUnitSequenceLength`

<details class="declaration-card" open>
<summary>Function – Given the first code unit of a UTF-16 codepoint, returns a number 1-2</summary>

Given the first code unit of a UTF-16 codepoint, returns a number 1-2
indicating the total length of the codepoint in UTF-16 code units.
If this code unit does not match the form of a UTF-16 start code unit, returns Utf16InvalidStartCodeUnit.

\`\`\`zig
pub fn utf16CodeUnitSequenceLength(first_code_unit: u16) !u2 {
    if (utf16IsHighSurrogate(first_code_unit)) return 2;
    if (utf16IsLowSurrogate(first_code_unit)) return error.Utf16InvalidStartCodeUnit;
    return 1;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `first\_code\_unit` | `u16` | – | – |
| Return | `u2` | – | – |

</details>

---

### <a id="fn-utf16decodesurrogatepair"></a>`utf16DecodeSurrogatePair`

<details class="declaration-card" open>
<summary>Function – Decodes the codepoint encoded in the given pair of UTF-16 code units</summary>

Decodes the codepoint encoded in the given pair of UTF-16 code units.
Asserts that `surrogate_pair.len >= 2` and that the first code unit is a high surrogate.
If the second code unit is not a low surrogate, error.ExpectedSecondSurrogateHalf is returned.

\`\`\`zig
pub fn utf16DecodeSurrogatePair(surrogate_pair: []const u16) !u21 {
    assert(surrogate_pair.len >= 2);
    assert(utf16IsHighSurrogate(surrogate_pair[0]));
    const high_half: u21 = surrogate_pair[0];
    const low_half = surrogate_pair[1];
    if (!utf16IsLowSurrogate(low_half)) return error.ExpectedSecondSurrogateHalf;
    return 0x10000 + ((high_half & 0x03ff) << 10) | (low_half & 0x03ff);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `surrogate\_pair` | `[]const u16` | – | – |
| Return | `u21` | – | – |

</details>

---

### <a id="fn-utf16countcodepoints"></a>`utf16CountCodepoints`

<details class="declaration-card" open>
<summary>Function – Returns the length of a supplied UTF-16 string literal in terms of unicode</summary>

Returns the length of a supplied UTF-16 string literal in terms of unicode
codepoints.

\`\`\`zig
pub fn utf16CountCodepoints(utf16le: []const u16) !usize {
    var len: usize = 0;
    var it = Utf16LeIterator.init(utf16le);
    while (try it.nextCodepoint()) |_| len += 1;
    return len;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf16le` | `[]const u16` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-fmtutf8"></a>`fmtUtf8`

<details class="declaration-card" open>
<summary>Function – Return a Formatter for a (potentially ill-formed) UTF-8 string</summary>

Return a Formatter for a (potentially ill-formed) UTF-8 string.
Ill-formed UTF-8 byte sequences are replaced by the replacement character (U+FFFD)
according to "U+FFFD Substitution of Maximal Subparts" from Chapter 3 of
the Unicode standard, and as specified by https://encoding.spec.whatwg.org/#utf-8-decoder

\`\`\`zig
pub fn fmtUtf8(utf8: []const u8) std.fmt.Formatter([]const u8, formatUtf8) {
    return .{ .data = utf8 };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf8` | `[]const u8` | – | – |
| Return | `std.fmt.Formatter([]const u8, formatUtf8)` | – | – |

</details>

---

### <a id="fn-utf16letoutf8arraylist"></a>`utf16LeToUtf8ArrayList`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf16LeToUtf8ArrayList(result: *std.array_list.Managed(u8), utf16le: []const u16) Utf16LeToUtf8AllocError!void {
    try result.ensureUnusedCapacity(utf16le.len);
    return utf16LeToUtf8ArrayListImpl(result, utf16le, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `result` | `*std.array_list.Managed(u8)` | – | – |
| `utf16le` | `[]const u16` | – | – |
| Return | [`Utf16LeToUtf8AllocError!void`](#error-utf16letoutf8allocerror) | – | – |

</details>

---

### <a id="fn-utf16letoutf8alloc"></a>`utf16LeToUtf8Alloc`

<details class="declaration-card" open>
<summary>Function – Caller owns returned memory</summary>

Caller owns returned memory.

\`\`\`zig
pub fn utf16LeToUtf8Alloc(allocator: Allocator, utf16le: []const u16) Utf16LeToUtf8AllocError![]u8 {
    // optimistically guess that it will all be ascii.
    var result = try std.array_list.Managed(u8).initCapacity(allocator, utf16le.len);
    errdefer result.deinit();

    try utf16LeToUtf8ArrayListImpl(&result, utf16le, .cannot_encode_surrogate_half);
    return result.toOwnedSlice();
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `utf16le` | `[]const u16` | – | – |
| Return | [`Utf16LeToUtf8AllocError![]u8`](#error-utf16letoutf8allocerror) | – | – |

</details>

---

### <a id="fn-utf16letoutf8allocz"></a>`utf16LeToUtf8AllocZ`

<details class="declaration-card" open>
<summary>Function – Caller owns returned memory</summary>

Caller owns returned memory.

\`\`\`zig
pub fn utf16LeToUtf8AllocZ(allocator: Allocator, utf16le: []const u16) Utf16LeToUtf8AllocError![:0]u8 {
    // optimistically guess that it will all be ascii (and allocate space for the null terminator)
    var result = try std.array_list.Managed(u8).initCapacity(allocator, utf16le.len + 1);
    errdefer result.deinit();

    try utf16LeToUtf8ArrayListImpl(&result, utf16le, .cannot_encode_surrogate_half);
    return result.toOwnedSliceSentinel(0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `utf16le` | `[]const u16` | – | – |
| Return | [`Utf16LeToUtf8AllocError![:0]u8`](#error-utf16letoutf8allocerror) | – | – |

</details>

---

### <a id="fn-utf16letoutf8"></a>`utf16LeToUtf8`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf16LeToUtf8(utf8: []u8, utf16le: []const u16) Utf16LeToUtf8Error!usize {
    return utf16LeToUtf8Impl(utf8, utf16le, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf8` | `[]u8` | – | – |
| `utf16le` | `[]const u16` | – | – |
| Return | [`Utf16LeToUtf8Error!usize`](#const-utf16letoutf8error) | – | – |

</details>

---

### <a id="fn-utf8toutf16learraylist"></a>`utf8ToUtf16LeArrayList`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf8ToUtf16LeArrayList(result: *std.array_list.Managed(u16), utf8: []const u8) error{ InvalidUtf8, OutOfMemory }!void {
    try result.ensureUnusedCapacity(utf8.len);
    return utf8ToUtf16LeArrayListImpl(result, utf8, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `result` | `*std.array_list.Managed(u16)` | – | – |
| `utf8` | `[]const u8` | – | – |
| Return | `error{ InvalidUtf8, OutOfMemory }!void` | – | – |

**Possible Errors:**

- `error.InvalidUtf8`
- `error.OutOfMemory`

</details>

---

### <a id="fn-utf8toutf16lealloc"></a>`utf8ToUtf16LeAlloc`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf8ToUtf16LeAlloc(allocator: Allocator, utf8: []const u8) error{ InvalidUtf8, OutOfMemory }![]u16 {
    // optimistically guess that it will not require surrogate pairs
    var result = try std.array_list.Managed(u16).initCapacity(allocator, utf8.len);
    errdefer result.deinit();

    try utf8ToUtf16LeArrayListImpl(&result, utf8, .cannot_encode_surrogate_half);
    return result.toOwnedSlice();
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `utf8` | `[]const u8` | – | – |
| Return | `error{ InvalidUtf8, OutOfMemory }![]u16` | – | – |

**Possible Errors:**

- `error.InvalidUtf8`
- `error.OutOfMemory`

</details>

---

### <a id="fn-utf8toutf16leallocz"></a>`utf8ToUtf16LeAllocZ`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf8ToUtf16LeAllocZ(allocator: Allocator, utf8: []const u8) error{ InvalidUtf8, OutOfMemory }![:0]u16 {
    // optimistically guess that it will not require surrogate pairs
    var result = try std.array_list.Managed(u16).initCapacity(allocator, utf8.len + 1);
    errdefer result.deinit();

    try utf8ToUtf16LeArrayListImpl(&result, utf8, .cannot_encode_surrogate_half);
    return result.toOwnedSliceSentinel(0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `utf8` | `[]const u8` | – | – |
| Return | `error{ InvalidUtf8, OutOfMemory }![:0]u16` | – | – |

**Possible Errors:**

- `error.InvalidUtf8`
- `error.OutOfMemory`

</details>

---

### <a id="fn-utf8toutf16le"></a>`utf8ToUtf16Le`

<details class="declaration-card" open>
<summary>Function – Returns index of next character</summary>

Returns index of next character. If exact fit, returned index equals output slice length.
Assumes there is enough space for the output.

\`\`\`zig
pub fn utf8ToUtf16Le(utf16le: []u16, utf8: []const u8) error{InvalidUtf8}!usize {
    return utf8ToUtf16LeImpl(utf16le, utf8, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf16le` | `[]u16` | – | – |
| `utf8` | `[]const u8` | – | – |
| Return | `error{InvalidUtf8}!usize` | – | – |

**Possible Errors:**

- `error.InvalidUtf8`

</details>

---

### <a id="fn-utf8toutf16leimpl"></a>`utf8ToUtf16LeImpl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn utf8ToUtf16LeImpl(utf16le: []u16, utf8: []const u8, comptime surrogates: Surrogates) !usize {
    var dest_index: usize = 0;

    var remaining = utf8;
    vectorized: {
        const chunk_len = std.simd.suggestVectorLength(u16) orelse break :vectorized;
        const Chunk = @Vector(chunk_len, u8);

        // Fast path. Check for and encode ASCII characters at the start of the input.
        while (remaining.len >= chunk_len) {
            const chunk: Chunk = remaining[0..chunk_len].*;
            const mask: Chunk = @splat(0x80);
            if (@reduce(.Or, chunk & mask == mask)) {
                // found a non ASCII code unit
                break;
            }
            const utf16_chunk = mem.nativeToLittle(@Vector(chunk_len, u16), chunk);
            utf16le[dest_index..][0..chunk_len].* = utf16_chunk;
            dest_index += chunk_len;
            remaining = remaining[chunk_len..];
        }
    }

    const view = switch (surrogates) {
        .cannot_encode_surrogate_half => try Utf8View.init(remaining),
        .can_encode_surrogate_half => try Wtf8View.init(remaining),
    };
    var it = view.iterator();
    while (it.nextCodepoint()) |codepoint| {
        if (codepoint < 0x10000) {
            utf16le[dest_index] = mem.nativeToLittle(u16, @intCast(codepoint));
            dest_index += 1;
        } else {
            const high = @as(u16, @intCast((codepoint - 0x10000) >> 10)) + 0xD800;
            const low = @as(u16, @intCast(codepoint & 0x3FF)) + 0xDC00;
            utf16le[dest_index..][0..2].* = .{ mem.nativeToLittle(u16, high), mem.nativeToLittle(u16, low) };
            dest_index += 2;
        }
    }
    return dest_index;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf16le` | `[]u16` | – | – |
| `utf8` | `[]const u8` | – | – |
| `surrogates` | `Surrogates` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-utf8toutf16lestringliteral"></a>`utf8ToUtf16LeStringLiteral`

<details class="declaration-card" open>
<summary>Function – Converts a UTF-8 string literal into a UTF-16LE string literal</summary>

Converts a UTF-8 string literal into a UTF-16LE string literal.

\`\`\`zig
pub fn utf8ToUtf16LeStringLiteral(comptime utf8: []const u8) *const [calcUtf16LeLen(utf8) catch |err| @compileError(err):0]u16 {
    return utf8ToUtf16LeStringLiteralImpl(utf8, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf8` | `[]const u8` | – | – |
| Return | See note[^fn-utf8toutf16lestringliteral-return-0] | – | – |


[^fn-utf8toutf16lestringliteral-return-0]:
    Return type for `utf8ToUtf16LeStringLiteral`:

    \`\`\`zig
    *const [calcUtf16LeLen(utf8) catch |err| @compileError(err):0]u16
    \`\`\`

</details>

---

### <a id="fn-wtf8towtf16lestringliteral"></a>`wtf8ToWtf16LeStringLiteral`

<details class="declaration-card" open>
<summary>Function – Converts a WTF-8 string literal into a WTF-16LE string literal</summary>

Converts a WTF-8 string literal into a WTF-16LE string literal.

\`\`\`zig
pub fn wtf8ToWtf16LeStringLiteral(comptime wtf8: []const u8) *const [calcWtf16LeLen(wtf8) catch |err| @compileError(err):0]u16 {
    return utf8ToUtf16LeStringLiteralImpl(wtf8, .can_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `wtf8` | `[]const u8` | – | – |
| Return | See note[^fn-wtf8towtf16lestringliteral-return-0] | – | – |


[^fn-wtf8towtf16lestringliteral-return-0]:
    Return type for `wtf8ToWtf16LeStringLiteral`:

    \`\`\`zig
    *const [calcWtf16LeLen(wtf8) catch |err| @compileError(err):0]u16
    \`\`\`

</details>

---

### <a id="fn-calcutf16lelenimpl"></a>`calcUtf16LeLenImpl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn calcUtf16LeLenImpl(utf8: []const u8, comptime surrogates: Surrogates) !usize {
    const utf8DecodeImpl = switch (surrogates) {
        .cannot_encode_surrogate_half => utf8Decode,
        .can_encode_surrogate_half => wtf8Decode,
    };
    var src_i: usize = 0;
    var dest_len: usize = 0;
    while (src_i < utf8.len) {
        const n = try utf8ByteSequenceLength(utf8[src_i]);
        const next_src_i = src_i + n;
        const codepoint = try utf8DecodeImpl(utf8[src_i..next_src_i]);
        if (codepoint < 0x10000) {
            dest_len += 1;
        } else {
            dest_len += 2;
        }
        src_i = next_src_i;
    }
    return dest_len;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf8` | `[]const u8` | – | – |
| `surrogates` | `Surrogates` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-calcutf16lelen"></a>`calcUtf16LeLen`

<details class="declaration-card" open>
<summary>Function – Returns length in UTF-16LE of UTF-8 slice as length of []u16</summary>

Returns length in UTF-16LE of UTF-8 slice as length of []u16.
Length in []u8 is 2*len16.

\`\`\`zig
pub fn calcUtf16LeLen(utf8: []const u8) CalcUtf16LeLenError!usize {
    return calcUtf16LeLenImpl(utf8, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf8` | `[]const u8` | – | – |
| Return | `CalcUtf16LeLenError!usize` | – | – |

</details>

---

### <a id="fn-calcwtf16lelen"></a>`calcWtf16LeLen`

<details class="declaration-card" open>
<summary>Function – Returns length in WTF-16LE of WTF-8 slice as length of []u16</summary>

Returns length in WTF-16LE of WTF-8 slice as length of []u16.
Length in []u8 is 2*len16.

\`\`\`zig
pub fn calcWtf16LeLen(wtf8: []const u8) CalcWtf16LeLenError!usize {
    return calcUtf16LeLenImpl(wtf8, .can_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `wtf8` | `[]const u8` | – | – |
| Return | `CalcWtf16LeLenError!usize` | – | – |

</details>

---

### <a id="fn-fmtutf16le"></a>`fmtUtf16Le`

<details class="declaration-card" open>
<summary>Function – Return a Formatter for a (potentially ill-formed) UTF-16 LE string,</summary>

Return a Formatter for a (potentially ill-formed) UTF-16 LE string,
which will be converted to UTF-8 during formatting.
Unpaired surrogates are replaced by the replacement character (U+FFFD).

\`\`\`zig
pub fn fmtUtf16Le(utf16le: []const u16) std.fmt.Formatter([]const u16, formatUtf16Le) {
    return .{ .data = utf16le };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf16le` | `[]const u16` | – | – |
| Return | `std.fmt.Formatter([]const u16, formatUtf16Le)` | – | – |

</details>

---

### <a id="fn-issurrogatecodepoint"></a>`isSurrogateCodepoint`

<details class="declaration-card" open>
<summary>Function – Returns true if the codepoint is a surrogate (U+DC00 to U+DFFF)</summary>

Returns true if the codepoint is a surrogate (U+DC00 to U+DFFF)

\`\`\`zig
pub fn isSurrogateCodepoint(c: u21) bool {
    return switch (c) {
        0xD800...0xDFFF => true,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u21` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-wtf8encode"></a>`wtf8Encode`

<details class="declaration-card" open>
<summary>Function – Encodes the given codepoint into a WTF-8 byte sequence</summary>

Encodes the given codepoint into a WTF-8 byte sequence.
c: the codepoint.
out: the out buffer to write to. Must have a len >= utf8CodepointSequenceLength(c).
Errors: if c cannot be encoded in WTF-8.
Returns: the number of bytes written to out.

\`\`\`zig
pub fn wtf8Encode(c: u21, out: []u8) error{CodepointTooLarge}!u3 {
    return utf8EncodeImpl(c, out, .can_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `c` | `u21` | – | – |
| `out` | `[]u8` | – | – |
| Return | `error{CodepointTooLarge}!u3` | – | – |

**Possible Errors:**

- `error.CodepointTooLarge`

</details>

---

### <a id="fn-wtf8decode"></a>`wtf8Decode`

<details class="declaration-card" open>
<summary>Function – Deprecated</summary>

Deprecated. This function has an awkward API that is too easy to use incorrectly.

\`\`\`zig
pub fn wtf8Decode(bytes: []const u8) Wtf8DecodeError!u21 {
    return switch (bytes.len) {
        1 => bytes[0],
        2 => utf8Decode2(bytes[0..2].*),
        3 => utf8Decode3AllowSurrogateHalf(bytes[0..3].*),
        4 => utf8Decode4(bytes[0..4].*),
        else => unreachable,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]const u8` | – | – |
| Return | `Wtf8DecodeError!u21` | – | – |

</details>

---

### <a id="fn-wtf8validateslice"></a>`wtf8ValidateSlice`

<details class="declaration-card" open>
<summary>Function – Returns true if the input consists entirely of WTF-8 codepoints</summary>

Returns true if the input consists entirely of WTF-8 codepoints
(all the same restrictions as UTF-8, but allows surrogate codepoints
U+D800 to U+DFFF).
Does not check for well-formed WTF-8, meaning that this function
does not check that all surrogate halves are unpaired.

\`\`\`zig
pub fn wtf8ValidateSlice(input: []const u8) bool {
    return utf8ValidateSliceImpl(input, .can_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `input` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-wtf16letowtf8arraylist"></a>`wtf16LeToWtf8ArrayList`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn wtf16LeToWtf8ArrayList(result: *std.array_list.Managed(u8), utf16le: []const u16) Allocator.Error!void {
    try result.ensureUnusedCapacity(utf16le.len);
    return utf16LeToUtf8ArrayListImpl(result, utf16le, .can_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `result` | `*std.array_list.Managed(u8)` | – | – |
| `utf16le` | `[]const u16` | – | – |
| Return | `Allocator.Error!void` | – | – |

</details>

---

### <a id="fn-wtf16letowtf8alloc"></a>`wtf16LeToWtf8Alloc`

<details class="declaration-card" open>
<summary>Function – Caller must free returned memory</summary>

Caller must free returned memory.

\`\`\`zig
pub fn wtf16LeToWtf8Alloc(allocator: Allocator, wtf16le: []const u16) Allocator.Error![]u8 {
    // optimistically guess that it will all be ascii.
    var result = try std.array_list.Managed(u8).initCapacity(allocator, wtf16le.len);
    errdefer result.deinit();

    try utf16LeToUtf8ArrayListImpl(&result, wtf16le, .can_encode_surrogate_half);
    return result.toOwnedSlice();
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `wtf16le` | `[]const u16` | – | – |
| Return | `Allocator.Error![]u8` | – | – |

</details>

---

### <a id="fn-wtf16letowtf8allocz"></a>`wtf16LeToWtf8AllocZ`

<details class="declaration-card" open>
<summary>Function – Caller must free returned memory</summary>

Caller must free returned memory.

\`\`\`zig
pub fn wtf16LeToWtf8AllocZ(allocator: Allocator, wtf16le: []const u16) Allocator.Error![:0]u8 {
    // optimistically guess that it will all be ascii (and allocate space for the null terminator)
    var result = try std.array_list.Managed(u8).initCapacity(allocator, wtf16le.len + 1);
    errdefer result.deinit();

    try utf16LeToUtf8ArrayListImpl(&result, wtf16le, .can_encode_surrogate_half);
    return result.toOwnedSliceSentinel(0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `wtf16le` | `[]const u16` | – | – |
| Return | `Allocator.Error![:0]u8` | – | – |

</details>

---

### <a id="fn-wtf16letowtf8"></a>`wtf16LeToWtf8`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn wtf16LeToWtf8(wtf8: []u8, wtf16le: []const u16) usize {
    return utf16LeToUtf8Impl(wtf8, wtf16le, .can_encode_surrogate_half) catch |err| switch (err) {};
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `wtf8` | `[]u8` | – | – |
| `wtf16le` | `[]const u16` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-wtf8towtf16learraylist"></a>`wtf8ToWtf16LeArrayList`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn wtf8ToWtf16LeArrayList(result: *std.array_list.Managed(u16), wtf8: []const u8) error{ InvalidWtf8, OutOfMemory }!void {
    try result.ensureUnusedCapacity(wtf8.len);
    return utf8ToUtf16LeArrayListImpl(result, wtf8, .can_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `result` | `*std.array_list.Managed(u16)` | – | – |
| `wtf8` | `[]const u8` | – | – |
| Return | `error{ InvalidWtf8, OutOfMemory }!void` | – | – |

**Possible Errors:**

- `error.InvalidWtf8`
- `error.OutOfMemory`

</details>

---

### <a id="fn-wtf8towtf16lealloc"></a>`wtf8ToWtf16LeAlloc`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn wtf8ToWtf16LeAlloc(allocator: Allocator, wtf8: []const u8) error{ InvalidWtf8, OutOfMemory }![]u16 {
    // optimistically guess that it will not require surrogate pairs
    var result = try std.array_list.Managed(u16).initCapacity(allocator, wtf8.len);
    errdefer result.deinit();

    try utf8ToUtf16LeArrayListImpl(&result, wtf8, .can_encode_surrogate_half);
    return result.toOwnedSlice();
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `wtf8` | `[]const u8` | – | – |
| Return | `error{ InvalidWtf8, OutOfMemory }![]u16` | – | – |

**Possible Errors:**

- `error.InvalidWtf8`
- `error.OutOfMemory`

</details>

---

### <a id="fn-wtf8towtf16leallocz"></a>`wtf8ToWtf16LeAllocZ`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn wtf8ToWtf16LeAllocZ(allocator: Allocator, wtf8: []const u8) error{ InvalidWtf8, OutOfMemory }![:0]u16 {
    // optimistically guess that it will not require surrogate pairs
    var result = try std.array_list.Managed(u16).initCapacity(allocator, wtf8.len + 1);
    errdefer result.deinit();

    try utf8ToUtf16LeArrayListImpl(&result, wtf8, .can_encode_surrogate_half);
    return result.toOwnedSliceSentinel(0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `wtf8` | `[]const u8` | – | – |
| Return | `error{ InvalidWtf8, OutOfMemory }![:0]u16` | – | – |

**Possible Errors:**

- `error.InvalidWtf8`
- `error.OutOfMemory`

</details>

---

### <a id="fn-wtf8towtf16le"></a>`wtf8ToWtf16Le`

<details class="declaration-card" open>
<summary>Function – Returns index of next character</summary>

Returns index of next character. If exact fit, returned index equals output slice length.
Assumes there is enough space for the output.

\`\`\`zig
pub fn wtf8ToWtf16Le(wtf16le: []u16, wtf8: []const u8) error{InvalidWtf8}!usize {
    return utf8ToUtf16LeImpl(wtf16le, wtf8, .can_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `wtf16le` | `[]u16` | – | – |
| `wtf8` | `[]const u8` | – | – |
| Return | `error{InvalidWtf8}!usize` | – | – |

**Possible Errors:**

- `error.InvalidWtf8`

</details>

---

### <a id="fn-checkutf8toutf16leoverflow"></a>`checkUtf8ToUtf16LeOverflow`

<details class="declaration-card" open>
<summary>Function – Checks if calling `utf8ToUtf16Le` would overflow</summary>

Checks if calling `utf8ToUtf16Le` would overflow. Might fail if utf8 is not
valid UTF-8.

\`\`\`zig
pub fn checkUtf8ToUtf16LeOverflow(utf8: []const u8, utf16le: []const u16) error{InvalidUtf8}!bool {
    return checkUtf8ToUtf16LeOverflowImpl(utf8, utf16le, .cannot_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf8` | `[]const u8` | – | – |
| `utf16le` | `[]const u16` | – | – |
| Return | `error{InvalidUtf8}!bool` | – | – |

**Possible Errors:**

- `error.InvalidUtf8`

</details>

---

### <a id="fn-checkwtf8towtf16leoverflow"></a>`checkWtf8ToWtf16LeOverflow`

<details class="declaration-card" open>
<summary>Function – Checks if calling `utf8ToUtf16Le` would overflow</summary>

Checks if calling `utf8ToUtf16Le` would overflow. Might fail if wtf8 is not
valid WTF-8.

\`\`\`zig
pub fn checkWtf8ToWtf16LeOverflow(wtf8: []const u8, wtf16le: []const u16) error{InvalidWtf8}!bool {
    return checkUtf8ToUtf16LeOverflowImpl(wtf8, wtf16le, .can_encode_surrogate_half);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `wtf8` | `[]const u8` | – | – |
| `wtf16le` | `[]const u16` | – | – |
| Return | `error{InvalidWtf8}!bool` | – | – |

**Possible Errors:**

- `error.InvalidWtf8`

</details>

---

### <a id="fn-wtf8toutf8lossy"></a>`wtf8ToUtf8Lossy`

<details class="declaration-card" open>
<summary>Function – Surrogate codepoints (U+D800 to U+DFFF) are replaced by the Unicode replacement</summary>

Surrogate codepoints (U+D800 to U+DFFF) are replaced by the Unicode replacement
character (U+FFFD).
All surrogate codepoints and the replacement character are encoded as three
bytes, meaning the input and output slices will always be the same length.
In-place conversion is supported when `utf8` and `wtf8` refer to the same slice.
Note: If `wtf8` is entirely composed of well-formed UTF-8, then no conversion is necessary.
      `utf8ValidateSlice` can be used to check if lossy conversion is worthwhile.
If `wtf8` is not valid WTF-8, then `error.InvalidWtf8` is returned.

\`\`\`zig
pub fn wtf8ToUtf8Lossy(utf8: []u8, wtf8: []const u8) error{InvalidWtf8}!void {
    assert(utf8.len >= wtf8.len);

    const in_place = utf8.ptr == wtf8.ptr;
    const replacement_char_bytes = comptime blk: {
        var buf: [3]u8 = undefined;
        assert((utf8Encode(replacement_character, &buf) catch unreachable) == 3);
        break :blk buf;
    };

    var dest_i: usize = 0;
    const view = try Wtf8View.init(wtf8);
    var it = view.iterator();
    while (it.nextCodepointSlice()) |codepoint_slice| {
        // All surrogate codepoints are encoded as 3 bytes
        if (codepoint_slice.len == 3) {
            const codepoint = wtf8Decode(codepoint_slice) catch unreachable;
            if (isSurrogateCodepoint(codepoint)) {
                @memcpy(utf8[dest_i..][0..replacement_char_bytes.len], &replacement_char_bytes);
                dest_i += replacement_char_bytes.len;
                continue;
            }
        }
        if (!in_place) {
            @memcpy(utf8[dest_i..][0..codepoint_slice.len], codepoint_slice);
        }
        dest_i += codepoint_slice.len;
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `utf8` | `[]u8` | – | – |
| `wtf8` | `[]const u8` | – | – |
| Return | `error{InvalidWtf8}!void` | – | – |

**Possible Errors:**

- `error.InvalidWtf8`

</details>

---

### <a id="fn-wtf8toutf8lossyalloc"></a>`wtf8ToUtf8LossyAlloc`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn wtf8ToUtf8LossyAlloc(allocator: Allocator, wtf8: []const u8) error{ InvalidWtf8, OutOfMemory }![]u8 {
    const utf8 = try allocator.alloc(u8, wtf8.len);
    errdefer allocator.free(utf8);

    try wtf8ToUtf8Lossy(utf8, wtf8);

    return utf8;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `wtf8` | `[]const u8` | – | – |
| Return | `error{ InvalidWtf8, OutOfMemory }![]u8` | – | – |

**Possible Errors:**

- `error.InvalidWtf8`
- `error.OutOfMemory`

</details>

---

### <a id="fn-wtf8toutf8lossyallocz"></a>`wtf8ToUtf8LossyAllocZ`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn wtf8ToUtf8LossyAllocZ(allocator: Allocator, wtf8: []const u8) error{ InvalidWtf8, OutOfMemory }![:0]u8 {
    const utf8 = try allocator.allocSentinel(u8, wtf8.len, 0);
    errdefer allocator.free(utf8);

    try wtf8ToUtf8Lossy(utf8, wtf8);

    return utf8;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `wtf8` | `[]const u8` | – | – |
| Return | `error{ InvalidWtf8, OutOfMemory }![:0]u8` | – | – |

**Possible Errors:**

- `error.InvalidWtf8`
- `error.OutOfMemory`

</details>

---

### <a id="fn-calcwtf8len"></a>`calcWtf8Len`

<details class="declaration-card" open>
<summary>Function – Returns the length, in bytes, that would be necessary to encode the</summary>

Returns the length, in bytes, that would be necessary to encode the
given WTF-16 LE slice as WTF-8.

\`\`\`zig
pub fn calcWtf8Len(wtf16le: []const u16) usize {
    var it = Wtf16LeIterator.init(wtf16le);
    var num_wtf8_bytes: usize = 0;
    while (it.nextCodepoint()) |codepoint| {
        // Note: If utf8CodepointSequenceLength is ever changed to error on surrogate
        // codepoints, then it would no longer be eligible to be used in this context.
        num_wtf8_bytes += utf8CodepointSequenceLength(codepoint) catch |err| switch (err) {
            error.CodepointTooLarge => unreachable,
        };
    }
    return num_wtf8_bytes;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `wtf16le` | `[]const u16` | – | – |
| Return | `usize` | – | – |

</details>

---

## Error Sets (1)

### <a id="error-utf16letoutf8allocerror"></a>`Utf16LeToUtf8AllocError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

\`\`\`zig
pub const Utf16LeToUtf8AllocError = Allocator.Error || Utf16LeToUtf8Error
\`\`\`

</details>

---
