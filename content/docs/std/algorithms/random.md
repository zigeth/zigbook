---
title: "std.Random"
description: "Comprehensive reference for Zig's std.Random module covering algorithms, numerics, and performance primitives."
navigation:
  title: "Random"
  icon: i-lucide-function-square
  badge: "Algorithms"
badge: "Algorithms"
category: "algorithms"
tags:
  - "zig"
  - "standard-library"
  - "algorithms"
source: "std/Random.md"
githubPath: "std/Random.md"
lastUpdated: "2025-10-18T12:44:21.938Z"
seo:
  title: "std.Random · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.Random module covering algorithms, numerics, and performance primitives."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/Random.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.Random` |
| Declarations | 33 |
| Breakdown | 21 functions · 2 constants · 10 modules |
| Generated (unix epoch) | 1760148099 |

## Overview

The engines provided here should be initialized from an external source.
For a thread-local cryptographically secure pseudo random number generator,
use `std.crypto.random`.
Be sure to use a CSPRNG when required, otherwise using a normal PRNG will
be faster and use substantially less stack space.

---

## Table of Contents

- [Functions](#functions)
  - [`init`](#fn-init)
  - [`bytes`](#fn-bytes)
  - [`boolean`](#fn-boolean)
  - [`enumValue`](#fn-enumvalue)
  - [`enumValueWithIndex`](#fn-enumvaluewithindex)
  - [`int`](#fn-int)
  - [`uintLessThanBiased`](#fn-uintlessthanbiased)
  - [`uintLessThan`](#fn-uintlessthan)
  - [`uintAtMostBiased`](#fn-uintatmostbiased)
  - [`uintAtMost`](#fn-uintatmost)
  - [`intRangeLessThanBiased`](#fn-intrangelessthanbiased)
  - [`intRangeLessThan`](#fn-intrangelessthan)
  - [`intRangeAtMostBiased`](#fn-intrangeatmostbiased)
  - [`intRangeAtMost`](#fn-intrangeatmost)
  - [`float`](#fn-float)
  - [`floatNorm`](#fn-floatnorm)
  - [`floatExp`](#fn-floatexp)
  - [`shuffle`](#fn-shuffle)
  - [`shuffleWithIndex`](#fn-shufflewithindex)
  - [`weightedIndex`](#fn-weightedindex)
  - [`limitRangeBiased`](#fn-limitrangebiased)

- [Modules](#modules)
  - [`Ascon`](#module-ascon)
  - [`ChaCha`](#module-chacha)
  - [`Isaac64`](#module-isaac64)
  - [`Pcg`](#module-pcg)
  - [`Xoroshiro128`](#module-xoroshiro128)
  - [`Xoshiro256`](#module-xoshiro256)
  - [`Sfc64`](#module-sfc64)
  - [`RomuTrio`](#module-romutrio)
  - [`SplitMix64`](#module-splitmix64)
  - [`ziggurat`](#module-ziggurat)

- [Constants](#constants)
  - [`DefaultPrng`](#const-defaultprng)
  - [`DefaultCsprng`](#const-defaultcsprng)

---

## Modules (10)

### <a id="module-ascon"></a>`Ascon`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Ascon = @import("Random/Ascon.zig")
```

> **Module:** `Random/Ascon.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/Ascon.zig)

</details>

---

### <a id="module-chacha"></a>`ChaCha`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const ChaCha = @import("Random/ChaCha.zig")
```

> **Module:** `Random/ChaCha.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/ChaCha.zig)

</details>

---

### <a id="module-isaac64"></a>`Isaac64`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Isaac64 = @import("Random/Isaac64.zig")
```

> **Module:** `Random/Isaac64.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/Isaac64.zig)

</details>

---

### <a id="module-pcg"></a>`Pcg`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Pcg = @import("Random/Pcg.zig")
```

> **Module:** `Random/Pcg.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/Pcg.zig)

</details>

---

### <a id="module-xoroshiro128"></a>`Xoroshiro128`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Xoroshiro128 = @import("Random/Xoroshiro128.zig")
```

> **Module:** `Random/Xoroshiro128.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/Xoroshiro128.zig)

</details>

---

### <a id="module-xoshiro256"></a>`Xoshiro256`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Xoshiro256 = @import("Random/Xoshiro256.zig")
```

> **Module:** `Random/Xoshiro256.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/Xoshiro256.zig)

</details>

---

### <a id="module-sfc64"></a>`Sfc64`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Sfc64 = @import("Random/Sfc64.zig")
```

> **Module:** `Random/Sfc64.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/Sfc64.zig)

</details>

---

### <a id="module-romutrio"></a>`RomuTrio`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const RomuTrio = @import("Random/RomuTrio.zig")
```

> **Module:** `Random/RomuTrio.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/RomuTrio.zig)

</details>

---

### <a id="module-splitmix64"></a>`SplitMix64`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const SplitMix64 = @import("Random/SplitMix64.zig")
```

> **Module:** `Random/SplitMix64.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/SplitMix64.zig)

</details>

---

### <a id="module-ziggurat"></a>`ziggurat`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const ziggurat = @import("Random/ziggurat.zig")
```

> **Module:** `Random/ziggurat.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Random/ziggurat.zig)

</details>

---

## Constants (2)

### <a id="const-defaultprng"></a>`DefaultPrng`

<details class="declaration-card" open>
<summary>Constant – Fast unbiased random numbers</summary>

Fast unbiased random numbers.

```zig
pub const DefaultPrng = Xoshiro256
```

</details>

---

### <a id="const-defaultcsprng"></a>`DefaultCsprng`

<details class="declaration-card" open>
<summary>Constant – Cryptographically secure random numbers</summary>

Cryptographically secure random numbers.

```zig
pub const DefaultCsprng = ChaCha
```

</details>

---

## Functions (21)

### <a id="fn-init"></a>`init`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn init(pointer: anytype, comptime fillFn: fn (ptr: @TypeOf(pointer), buf: []u8) void) Random {
    const Ptr = @TypeOf(pointer);
    assert(@typeInfo(Ptr) == .pointer); // Must be a pointer
    assert(@typeInfo(Ptr).pointer.size == .one); // Must be a single-item pointer
    assert(@typeInfo(@typeInfo(Ptr).pointer.child) == .@"struct"); // Must point to a struct
    const gen = struct {
        fn fill(ptr: *anyopaque, buf: []u8) void {
            const self: Ptr = @ptrCast(@alignCast(ptr));
            fillFn(self, buf);
        }
    };

    return .{
        .ptr = pointer,
        .fillFn = gen.fill,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pointer` | `` | – | – |
| `fillFn` | `fn (ptr: @TypeOf(pointer), buf: []u8) void` | – | – |
| Return | `Random` | – | – |

</details>

---

### <a id="fn-bytes"></a>`bytes`

<details class="declaration-card" open>
<summary>Function – Read random bytes into the specified buffer until full</summary>

Read random bytes into the specified buffer until full.

```zig
pub fn bytes(r: Random, buf: []u8) void {
    r.fillFn(r.ptr, buf);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `buf` | `[]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-boolean"></a>`boolean`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn boolean(r: Random) bool {
    return r.int(u1) != 0;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-enumvalue"></a>`enumValue`

<details class="declaration-card" open>
<summary>Function – Returns a random value from an enum, evenly distributed</summary>

Returns a random value from an enum, evenly distributed.

Note that this will not yield consistent results across all targets
due to dependence on the representation of `usize` as an index.
See `enumValueWithIndex` for further commentary.

```zig
pub inline fn enumValue(r: Random, comptime EnumType: type) EnumType {
    return r.enumValueWithIndex(EnumType, usize);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `EnumType` | `type` | – | – |
| Return | `EnumType` | – | – |

</details>

---

### <a id="fn-enumvaluewithindex"></a>`enumValueWithIndex`

<details class="declaration-card" open>
<summary>Function – Returns a random value from an enum, evenly distributed</summary>

Returns a random value from an enum, evenly distributed.

An index into an array of all named values is generated using the
specified `Index` type to determine the return value.
This allows for results to be independent of `usize` representation.

Prefer `enumValue` if this isn't important.

See `uintLessThan`, which this function uses in most cases,
for commentary on the runtime of this function.

```zig
pub fn enumValueWithIndex(r: Random, comptime EnumType: type, comptime Index: type) EnumType {
    comptime assert(@typeInfo(EnumType) == .@"enum");

    // We won't use int -> enum casting because enum elements can have
    //  arbitrary values.  Instead we'll randomly pick one of the type's values.
    const values = comptime std.enums.values(EnumType);
    comptime assert(values.len > 0); // can't return anything
    comptime assert(maxInt(Index) >= values.len - 1); // can't access all values
    if (values.len == 1) return values[0];

    const index = if (comptime values.len - 1 == maxInt(Index))
        r.int(Index)
    else
        r.uintLessThan(Index, values.len);

    const MinInt = MinArrayIndex(Index);
    return values[@as(MinInt, @intCast(index))];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `EnumType` | `type` | – | – |
| `Index` | `type` | – | – |
| Return | `EnumType` | – | – |

</details>

---

### <a id="fn-int"></a>`int`

<details class="declaration-card" open>
<summary>Function – Returns a random int `i` such that `minInt(T) &lt;= i &lt;= maxInt(T)`</summary>

Returns a random int `i` such that `minInt(T) <= i <= maxInt(T)`.
`i` is evenly distributed.

```zig
pub fn int(r: Random, comptime T: type) T {
    const bits = @typeInfo(T).int.bits;
    const UnsignedT = std.meta.Int(.unsigned, bits);
    const ceil_bytes = comptime std.math.divCeil(u16, bits, 8) catch unreachable;
    const ByteAlignedT = std.meta.Int(.unsigned, ceil_bytes * 8);

    var rand_bytes: [ceil_bytes]u8 = undefined;
    r.bytes(&rand_bytes);

    // use LE instead of native endian for better portability maybe?
    // TODO: endian portability is pointless if the underlying prng isn't endian portable.
    // TODO: document the endian portability of this library.
    const byte_aligned_result = mem.readInt(ByteAlignedT, &rand_bytes, .little);
    const unsigned_result: UnsignedT = @truncate(byte_aligned_result);
    return @bitCast(unsigned_result);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-uintlessthanbiased"></a>`uintLessThanBiased`

<details class="declaration-card" open>
<summary>Function – Constant-time implementation off `uintLessThan`</summary>

Constant-time implementation off `uintLessThan`.
The results of this function may be biased.

```zig
pub fn uintLessThanBiased(r: Random, comptime T: type, less_than: T) T {
    comptime assert(@typeInfo(T).int.signedness == .unsigned);
    assert(0 < less_than);
    return limitRangeBiased(T, r.int(T), less_than);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `less\_than` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-uintlessthan"></a>`uintLessThan`

<details class="declaration-card" open>
<summary>Function – Returns an evenly distributed random unsigned integer `0 &lt;= i &lt; less_than`</summary>

Returns an evenly distributed random unsigned integer `0 <= i < less_than`.
This function assumes that the underlying `fillFn` produces evenly distributed values.
Within this assumption, the runtime of this function is exponentially distributed.
If `fillFn` were backed by a true random generator,
the runtime of this function would technically be unbounded.
However, if `fillFn` is backed by any evenly distributed pseudo random number generator,
this function is guaranteed to return.
If you need deterministic runtime bounds, use `uintLessThanBiased`.

```zig
pub fn uintLessThan(r: Random, comptime T: type, less_than: T) T {
    comptime assert(@typeInfo(T).int.signedness == .unsigned);
    const bits = @typeInfo(T).int.bits;
    assert(0 < less_than);

    // adapted from:
    //   http://www.pcg-random.org/posts/bounded-rands.html
    //   "Lemire's (with an extra tweak from me)"
    var x = r.int(T);
    var m = math.mulWide(T, x, less_than);
    var l: T = @truncate(m);
    if (l < less_than) {
        var t = -%less_than;

        if (t >= less_than) {
            t -= less_than;
            if (t >= less_than) {
                t %= less_than;
            }
        }
        while (l < t) {
            x = r.int(T);
            m = math.mulWide(T, x, less_than);
            l = @truncate(m);
        }
    }
    return @intCast(m >> bits);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `less\_than` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-uintatmostbiased"></a>`uintAtMostBiased`

<details class="declaration-card" open>
<summary>Function – Constant-time implementation off `uintAtMost`</summary>

Constant-time implementation off `uintAtMost`.
The results of this function may be biased.

```zig
pub fn uintAtMostBiased(r: Random, comptime T: type, at_most: T) T {
    assert(@typeInfo(T).int.signedness == .unsigned);
    if (at_most == maxInt(T)) {
        // have the full range
        return r.int(T);
    }
    return r.uintLessThanBiased(T, at_most + 1);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `at\_most` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-uintatmost"></a>`uintAtMost`

<details class="declaration-card" open>
<summary>Function – Returns an evenly distributed random unsigned integer `0 &lt;= i &lt;= at_most`</summary>

Returns an evenly distributed random unsigned integer `0 <= i <= at_most`.
See `uintLessThan`, which this function uses in most cases,
for commentary on the runtime of this function.

```zig
pub fn uintAtMost(r: Random, comptime T: type, at_most: T) T {
    assert(@typeInfo(T).int.signedness == .unsigned);
    if (at_most == maxInt(T)) {
        // have the full range
        return r.int(T);
    }
    return r.uintLessThan(T, at_most + 1);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `at\_most` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-intrangelessthanbiased"></a>`intRangeLessThanBiased`

<details class="declaration-card" open>
<summary>Function – Constant-time implementation off `intRangeLessThan`</summary>

Constant-time implementation off `intRangeLessThan`.
The results of this function may be biased.

```zig
pub fn intRangeLessThanBiased(r: Random, comptime T: type, at_least: T, less_than: T) T {
    assert(at_least < less_than);
    const info = @typeInfo(T).int;
    if (info.signedness == .signed) {
        // Two's complement makes this math pretty easy.
        const UnsignedT = std.meta.Int(.unsigned, info.bits);
        const lo: UnsignedT = @bitCast(at_least);
        const hi: UnsignedT = @bitCast(less_than);
        const result = lo +% r.uintLessThanBiased(UnsignedT, hi -% lo);
        return @bitCast(result);
    } else {
        // The signed implementation would work fine, but we can use stricter arithmetic operators here.
        return at_least + r.uintLessThanBiased(T, less_than - at_least);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `at\_least` | `T` | – | – |
| `less\_than` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-intrangelessthan"></a>`intRangeLessThan`

<details class="declaration-card" open>
<summary>Function – Returns an evenly distributed random integer `at_least &lt;= i &lt; less_than`</summary>

Returns an evenly distributed random integer `at_least <= i < less_than`.
See `uintLessThan`, which this function uses in most cases,
for commentary on the runtime of this function.

```zig
pub fn intRangeLessThan(r: Random, comptime T: type, at_least: T, less_than: T) T {
    assert(at_least < less_than);
    const info = @typeInfo(T).int;
    if (info.signedness == .signed) {
        // Two's complement makes this math pretty easy.
        const UnsignedT = std.meta.Int(.unsigned, info.bits);
        const lo: UnsignedT = @bitCast(at_least);
        const hi: UnsignedT = @bitCast(less_than);
        const result = lo +% r.uintLessThan(UnsignedT, hi -% lo);
        return @bitCast(result);
    } else {
        // The signed implementation would work fine, but we can use stricter arithmetic operators here.
        return at_least + r.uintLessThan(T, less_than - at_least);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `at\_least` | `T` | – | – |
| `less\_than` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-intrangeatmostbiased"></a>`intRangeAtMostBiased`

<details class="declaration-card" open>
<summary>Function – Constant-time implementation off `intRangeAtMostBiased`</summary>

Constant-time implementation off `intRangeAtMostBiased`.
The results of this function may be biased.

```zig
pub fn intRangeAtMostBiased(r: Random, comptime T: type, at_least: T, at_most: T) T {
    assert(at_least <= at_most);
    const info = @typeInfo(T).int;
    if (info.signedness == .signed) {
        // Two's complement makes this math pretty easy.
        const UnsignedT = std.meta.Int(.unsigned, info.bits);
        const lo: UnsignedT = @bitCast(at_least);
        const hi: UnsignedT = @bitCast(at_most);
        const result = lo +% r.uintAtMostBiased(UnsignedT, hi -% lo);
        return @bitCast(result);
    } else {
        // The signed implementation would work fine, but we can use stricter arithmetic operators here.
        return at_least + r.uintAtMostBiased(T, at_most - at_least);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `at\_least` | `T` | – | – |
| `at\_most` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-intrangeatmost"></a>`intRangeAtMost`

<details class="declaration-card" open>
<summary>Function – Returns an evenly distributed random integer `at_least &lt;= i &lt;= at_most`</summary>

Returns an evenly distributed random integer `at_least <= i <= at_most`.
See `uintLessThan`, which this function uses in most cases,
for commentary on the runtime of this function.

```zig
pub fn intRangeAtMost(r: Random, comptime T: type, at_least: T, at_most: T) T {
    assert(at_least <= at_most);
    const info = @typeInfo(T).int;
    if (info.signedness == .signed) {
        // Two's complement makes this math pretty easy.
        const UnsignedT = std.meta.Int(.unsigned, info.bits);
        const lo: UnsignedT = @bitCast(at_least);
        const hi: UnsignedT = @bitCast(at_most);
        const result = lo +% r.uintAtMost(UnsignedT, hi -% lo);
        return @bitCast(result);
    } else {
        // The signed implementation would work fine, but we can use stricter arithmetic operators here.
        return at_least + r.uintAtMost(T, at_most - at_least);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `at\_least` | `T` | – | – |
| `at\_most` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-float"></a>`float`

<details class="declaration-card" open>
<summary>Function – Return a floating point value evenly distributed in the range [0, 1)</summary>

Return a floating point value evenly distributed in the range [0, 1).

```zig
pub fn float(r: Random, comptime T: type) T {
    // Generate a uniformly random value for the mantissa.
    // Then generate an exponentially biased random value for the exponent.
    // This covers every possible value in the range.
    switch (T) {
        f32 => {
            // Use 23 random bits for the mantissa, and the rest for the exponent.
            // If all 41 bits are zero, generate additional random bits, until a
            // set bit is found, or 126 bits have been generated.
            const rand = r.int(u64);
            var rand_lz = @clz(rand);
            if (rand_lz >= 41) {
                @branchHint(.unlikely);
                rand_lz = 41 + @clz(r.int(u64));
                if (rand_lz == 41 + 64) {
                    @branchHint(.unlikely);
                    // It is astronomically unlikely to reach this point.
                    rand_lz += @clz(r.int(u32) | 0x7FF);
                }
            }
            const mantissa: u23 = @truncate(rand);
            const exponent = @as(u32, 126 - rand_lz) << 23;
            return @bitCast(exponent | mantissa);
        },
        f64 => {
            // Use 52 random bits for the mantissa, and the rest for the exponent.
            // If all 12 bits are zero, generate additional random bits, until a
            // set bit is found, or 1022 bits have been generated.
            const rand = r.int(u64);
            var rand_lz: u64 = @clz(rand);
            if (rand_lz >= 12) {
                rand_lz = 12;
                while (true) {
                    // It is astronomically unlikely for this loop to execute more than once.
                    const addl_rand_lz = @clz(r.int(u64));
                    rand_lz += addl_rand_lz;
                    if (addl_rand_lz != 64) {
                        @branchHint(.likely);
                        break;
                    }
                    if (rand_lz >= 1022) {
                        rand_lz = 1022;
                        break;
                    }
                }
            }
            const mantissa = rand & 0xFFFFFFFFFFFFF;
            const exponent = (1022 - rand_lz) << 52;
            return @bitCast(exponent | mantissa);
        },
        else => @compileError("unknown floating point type"),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-floatnorm"></a>`floatNorm`

<details class="declaration-card" open>
<summary>Function – Return a floating point value normally distributed with mean = 0, stddev = 1</summary>

Return a floating point value normally distributed with mean = 0, stddev = 1.

To use different parameters, use: floatNorm(...) * desiredStddev + desiredMean.

```zig
pub fn floatNorm(r: Random, comptime T: type) T {
    const value = ziggurat.next_f64(r, ziggurat.NormDist);
    switch (T) {
        f32 => return @floatCast(value),
        f64 => return value,
        else => @compileError("unknown floating point type"),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-floatexp"></a>`floatExp`

<details class="declaration-card" open>
<summary>Function – Return an exponentially distributed float with a rate parameter of 1</summary>

Return an exponentially distributed float with a rate parameter of 1.

To use a different rate parameter, use: floatExp(...) / desiredRate.

```zig
pub fn floatExp(r: Random, comptime T: type) T {
    const value = ziggurat.next_f64(r, ziggurat.ExpDist);
    switch (T) {
        f32 => return @floatCast(value),
        f64 => return value,
        else => @compileError("unknown floating point type"),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-shuffle"></a>`shuffle`

<details class="declaration-card" open>
<summary>Function – Shuffle a slice into a random order</summary>

Shuffle a slice into a random order.

Note that this will not yield consistent results across all targets
due to dependence on the representation of `usize` as an index.
See `shuffleWithIndex` for further commentary.

```zig
pub inline fn shuffle(r: Random, comptime T: type, buf: []T) void {
    r.shuffleWithIndex(T, buf, usize);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `buf` | `[]T` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-shufflewithindex"></a>`shuffleWithIndex`

<details class="declaration-card" open>
<summary>Function – Shuffle a slice into a random order, using an index of a</summary>

Shuffle a slice into a random order, using an index of a
specified type to maintain distribution across targets.
Asserts the index type can represent `buf.len`.

Indexes into the slice are generated using the specified `Index`
type, which determines distribution properties. This allows for
results to be independent of `usize` representation.

Prefer `shuffle` if this isn't important.

See `intRangeLessThan`, which this function uses,
for commentary on the runtime of this function.

```zig
pub fn shuffleWithIndex(r: Random, comptime T: type, buf: []T, comptime Index: type) void {
    const MinInt = MinArrayIndex(Index);
    if (buf.len < 2) {
        return;
    }

    // `i <= j < max <= maxInt(MinInt)`
    const max: MinInt = @intCast(buf.len);
    var i: MinInt = 0;
    while (i < max - 1) : (i += 1) {
        const j: MinInt = @intCast(r.intRangeLessThan(Index, i, max));
        mem.swap(T, &buf[i], &buf[j]);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `buf` | `[]T` | – | – |
| `Index` | `type` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-weightedindex"></a>`weightedIndex`

<details class="declaration-card" open>
<summary>Function – Randomly selects an index into `proportions`, where the likelihood of each</summary>

Randomly selects an index into `proportions`, where the likelihood of each
index is weighted by that proportion.
It is more likely for the index of the last proportion to be returned
than the index of the first proportion in the slice, and vice versa.

This is useful for selecting an item from a slice where weights are not equal.
`T` must be a numeric type capable of holding the sum of `proportions`.

```zig
pub fn weightedIndex(r: Random, comptime T: type, proportions: []const T) usize {
    // This implementation works by summing the proportions and picking a
    // random point in [0, sum).  We then loop over the proportions,
    // accumulating until our accumulator is greater than the random point.

    const sum = s: {
        var sum: T = 0;
        for (proportions) |v| sum += v;
        break :s sum;
    };

    const point = switch (@typeInfo(T)) {
        .int => |int_info| switch (int_info.signedness) {
            .signed => r.intRangeLessThan(T, 0, sum),
            .unsigned => r.uintLessThan(T, sum),
        },
        // take care that imprecision doesn't lead to a value slightly greater than sum
        .float => @min(r.float(T) * sum, sum - std.math.floatEps(T)),
        else => @compileError("weightedIndex does not support proportions of type " ++
            @typeName(T)),
    };

    assert(point < sum);

    var accumulator: T = 0;
    for (proportions, 0..) |p, index| {
        accumulator += p;
        if (point < accumulator) return index;
    } else unreachable;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `r` | `Random` | – | – |
| `T` | `type` | – | – |
| `proportions` | `[]const T` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-limitrangebiased"></a>`limitRangeBiased`

<details class="declaration-card" open>
<summary>Function – Convert a random integer 0 &lt;= random_int &lt;= maxValue(T),</summary>

Convert a random integer 0 <= random_int <= maxValue(T),
into an integer 0 <= result < less_than.
This function introduces a minor bias.

```zig
pub fn limitRangeBiased(comptime T: type, random_int: T, less_than: T) T {
    comptime assert(@typeInfo(T).int.signedness == .unsigned);
    const bits = @typeInfo(T).int.bits;

    // adapted from:
    //   http://www.pcg-random.org/posts/bounded-rands.html
    //   "Integer Multiplication (Biased)"
    const m = math.mulWide(T, random_int, less_than);
    return @intCast(m >> bits);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `random\_int` | `T` | – | – |
| `less\_than` | `T` | – | – |
| Return | `T` | – | – |

</details>

---


