---
title: "std.hash"
description: "Comprehensive reference for Zig's std.hash module covering cryptographic primitives and hashing utilities."
navigation:
  title: "Hash"
  icon: i-lucide-shield-check
  badge: "Crypto"
badge: "Crypto"
category: "crypto"
tags:
  - "zig"
  - "standard-library"
  - "crypto"
source: "std/hash.md"
githubPath: "std/hash.md"
lastUpdated: "2025-10-18T12:44:21.943Z"
seo:
  title: "std.hash · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.hash module covering cryptographic primitives and hashing utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/hash.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.hash` |
| Declarations | 23 |
| Breakdown | 1 function · 18 constants · 4 modules |
| Generated (unix epoch) | 1760148106 |

---

## Table of Contents

- [Functions](#functions)
  - [`int`](#fn-int)

- [Modules](#modules)
  - [`Adler32`](#module-adler32)
  - [`crc`](#module-crc)
  - [`murmur`](#module-murmur)
  - [`cityhash`](#module-cityhash)

- [Constants](#constants)
  - [`autoHash`](#const-autohash)
  - [`autoHashStrat`](#const-autohashstrat)
  - [`Strategy`](#const-strategy)
  - [`Crc32`](#const-crc32)
  - [`Fnv1a\_32`](#const-fnv1a-32)
  - [`Fnv1a\_64`](#const-fnv1a-64)
  - [`Fnv1a\_128`](#const-fnv1a-128)
  - [`SipHash64`](#const-siphash64)
  - [`SipHash128`](#const-siphash128)
  - [`Murmur2\_32`](#const-murmur2-32)
  - [`Murmur2\_64`](#const-murmur2-64)
  - [`Murmur3\_32`](#const-murmur3-32)
  - [`CityHash32`](#const-cityhash32)
  - [`CityHash64`](#const-cityhash64)
  - [`Wyhash`](#const-wyhash)
  - [`XxHash3`](#const-xxhash3)
  - [`XxHash64`](#const-xxhash64)
  - [`XxHash32`](#const-xxhash32)

---

## Modules (4)

### <a id="module-adler32"></a>`Adler32`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Adler32 = @import("hash/Adler32.zig")
```

> **Module:** `hash/Adler32.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/hash/Adler32.zig)

</details>

---

### <a id="module-crc"></a>`crc`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const crc = @import("hash/crc.zig")
```

> **Module:** `hash/crc.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/hash/crc.zig)

</details>

---

### <a id="module-murmur"></a>`murmur`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const murmur = @import("hash/murmur.zig")
```

> **Module:** `hash/murmur.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/hash/murmur.zig)

</details>

---

### <a id="module-cityhash"></a>`cityhash`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const cityhash = @import("hash/cityhash.zig")
```

> **Module:** `hash/cityhash.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/hash/cityhash.zig)

</details>

---

## Constants (18)

### <a id="const-autohash"></a>`autoHash`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const autoHash = auto_hash.autoHash
```

</details>

---

### <a id="const-autohashstrat"></a>`autoHashStrat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const autoHashStrat = auto_hash.hash
```

</details>

---

### <a id="const-strategy"></a>`Strategy`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Strategy = auto_hash.HashStrategy
```

</details>

---

### <a id="const-crc32"></a>`Crc32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Crc32 = crc.Crc32
```

</details>

---

### <a id="const-fnv1a-32"></a>`Fnv1a_32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Fnv1a_32 = fnv.Fnv1a_32
```

</details>

---

### <a id="const-fnv1a-64"></a>`Fnv1a_64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Fnv1a_64 = fnv.Fnv1a_64
```

</details>

---

### <a id="const-fnv1a-128"></a>`Fnv1a_128`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Fnv1a_128 = fnv.Fnv1a_128
```

</details>

---

### <a id="const-siphash64"></a>`SipHash64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SipHash64 = siphash.SipHash64
```

</details>

---

### <a id="const-siphash128"></a>`SipHash128`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SipHash128 = siphash.SipHash128
```

</details>

---

### <a id="const-murmur2-32"></a>`Murmur2_32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Murmur2_32 = murmur.Murmur2_32
```

</details>

---

### <a id="const-murmur2-64"></a>`Murmur2_64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Murmur2_64 = murmur.Murmur2_64
```

</details>

---

### <a id="const-murmur3-32"></a>`Murmur3_32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Murmur3_32 = murmur.Murmur3_32
```

</details>

---

### <a id="const-cityhash32"></a>`CityHash32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CityHash32 = cityhash.CityHash32
```

</details>

---

### <a id="const-cityhash64"></a>`CityHash64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CityHash64 = cityhash.CityHash64
```

</details>

---

### <a id="const-wyhash"></a>`Wyhash`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Wyhash = wyhash.Wyhash
```

</details>

---

### <a id="const-xxhash3"></a>`XxHash3`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const XxHash3 = xxhash.XxHash3
```

</details>

---

### <a id="const-xxhash64"></a>`XxHash64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const XxHash64 = xxhash.XxHash64
```

</details>

---

### <a id="const-xxhash32"></a>`XxHash32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const XxHash32 = xxhash.XxHash32
```

</details>

---

## Functions (1)

### <a id="fn-int"></a>`int`

<details class="declaration-card" open>
<summary>Function – Integer-to-integer hashing for bit widths &lt;= 256</summary>

Integer-to-integer hashing for bit widths <= 256.

```zig
pub fn int(input: anytype) @TypeOf(input) {
    // This function is only intended for integer types
    const info = @typeInfo(@TypeOf(input)).int;
    const bits = info.bits;
    // Convert input to unsigned integer (easier to deal with)
    const Uint = @Type(.{ .int = .{ .bits = bits, .signedness = .unsigned } });
    const u_input: Uint = @bitCast(input);
    if (bits > 256) @compileError("bit widths > 256 are unsupported, use std.hash.autoHash functionality.");
    // For bit widths that don't have a dedicated function, use a heuristic
    // construction with a multiplier suited to diffusion -
    // a mod 2^bits where a^2 - 46 * a + 1 = 0 mod 2^(bits + 4),
    // on Mathematica: bits = 256; BaseForm[Solve[1 - 46 a + a^2 == 0, a, Modulus -> 2^(bits + 4)][[-1]][[1]][[2]], 16]
    const mult: Uint = @truncate(0xfac2e27ed2036860a062b5f264d80a512b00aa459b448bf1eca24d41c96f59e5b);
    // The bit width of the input integer determines how to hash it
    const output = switch (bits) {
        0...2 => u_input *% mult,
        16 => uint16(u_input),
        32 => uint32(u_input),
        64 => uint64(u_input),
        else => blk: {
            var x: Uint = u_input;
            inline for (0..4) |_| {
                x ^= x >> (bits / 2);
                x *%= mult;
            }
            break :blk x;
        },
    };
    return @bitCast(output);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `input` | `` | – | – |
| Return | `@TypeOf(input)` | – | – |

</details>

---


