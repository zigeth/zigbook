---
title: "std.math"
description: "Comprehensive reference for Zig's std.math module covering algorithms, numerics, and performance primitives."
navigation:
  title: "Math"
  icon: i-lucide-function-square
  badge: "Algorithms"
badge: "Algorithms"
category: "algorithms"
tags:
  - "zig"
  - "standard-library"
  - "algorithms"
source: "std/math.md"
githubPath: "std/math.md"
lastUpdated: "2025-10-11T02:43:50.346Z"
seo:
  title: "std.math · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.math module covering algorithms, numerics, and performance primitives."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/math.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.math` |
| Declarations | 140 |
| Breakdown | 60 functions · 4 types · 73 constants · 1 error set · 2 modules |
| Generated (unix epoch) | 1760148107 |

---

## Table of Contents

- [Functions](#functions)
  - [`approxEqAbs`](#fn-approxeqabs)
  - [`approxEqRel`](#fn-approxeqrel)
  - [`raiseInvalid`](#fn-raiseinvalid)
  - [`raiseUnderflow`](#fn-raiseunderflow)
  - [`raiseOverflow`](#fn-raiseoverflow)
  - [`raiseInexact`](#fn-raiseinexact)
  - [`raiseDivByZero`](#fn-raisedivbyzero)
  - [`sin`](#fn-sin)
  - [`cos`](#fn-cos)
  - [`tan`](#fn-tan)
  - [`radiansToDegrees`](#fn-radianstodegrees)
  - [`degreesToRadians`](#fn-degreestoradians)
  - [`exp`](#fn-exp)
  - [`exp2`](#fn-exp2)
  - [`Min`](#fn-min)
  - [`wrap`](#fn-wrap)
  - [`clamp`](#fn-clamp)
  - [`mul`](#fn-mul)
  - [`add`](#fn-add)
  - [`sub`](#fn-sub)
  - [`negate`](#fn-negate)
  - [`shlExact`](#fn-shlexact)
  - [`shl`](#fn-shl)
  - [`shr`](#fn-shr)
  - [`rotr`](#fn-rotr)
  - [`rotl`](#fn-rotl)
  - [`Log2Int`](#fn-log2int)
  - [`Log2IntCeil`](#fn-log2intceil)
  - [`IntFittingRange`](#fn-intfittingrange)
  - [`divTrunc`](#fn-divtrunc)
  - [`divFloor`](#fn-divfloor)
  - [`divCeil`](#fn-divceil)
  - [`divExact`](#fn-divexact)
  - [`mod`](#fn-mod)
  - [`rem`](#fn-rem)
  - [`negateCast`](#fn-negatecast)
  - [`cast`](#fn-cast)
  - [`alignCast`](#fn-aligncast)
  - [`isPowerOfTwo`](#fn-ispoweroftwo)
  - [`ByteAlignedInt`](#fn-bytealignedint)
  - [`round`](#fn-round)
  - [`trunc`](#fn-trunc)
  - [`floor`](#fn-floor)
  - [`floorPowerOfTwo`](#fn-floorpoweroftwo)
  - [`ceil`](#fn-ceil)
  - [`ceilPowerOfTwoPromote`](#fn-ceilpoweroftwopromote)
  - [`ceilPowerOfTwo`](#fn-ceilpoweroftwo)
  - [`ceilPowerOfTwoAssert`](#fn-ceilpoweroftwoassert)
  - [`log2\_int`](#fn-log2-int)
  - [`log2\_int\_ceil`](#fn-log2-int-ceil)
  - [`lossyCast`](#fn-lossycast)
  - [`lerp`](#fn-lerp)
  - [`maxInt`](#fn-maxint)
  - [`minInt`](#fn-minint)
  - [`mulWide`](#fn-mulwide)
  - [`order`](#fn-order)
  - [`compare`](#fn-compare)
  - [`boolMask`](#fn-boolmask)
  - [`comptimeMod`](#fn-comptimemod)
  - [`sign`](#fn-sign)

- [Types](#types)
  - [`Sign`](#type-sign)
  - [`Order`](#type-order)
  - [`CompareOperator`](#type-compareoperator)
  - [`F80`](#type-f80)

- [Modules](#modules)
  - [`complex`](#module-complex)
  - [`big`](#module-big)

- [Constants](#constants)
  - [`e`](#const-e)
  - [`pi`](#const-pi)
  - [`phi`](#const-phi)
  - [`tau`](#const-tau)
  - [`log2e`](#const-log2e)
  - [`log10e`](#const-log10e)
  - [`ln2`](#const-ln2)
  - [`ln10`](#const-ln10)
  - [`two\_sqrtpi`](#const-two-sqrtpi)
  - [`sqrt2`](#const-sqrt2)
  - [`sqrt1\_2`](#const-sqrt1-2)
  - [`rad\_per\_deg`](#const-rad-per-deg)
  - [`deg\_per\_rad`](#const-deg-per-rad)
  - [`FloatRepr`](#const-floatrepr)
  - [`floatExponentBits`](#const-floatexponentbits)
  - [`floatMantissaBits`](#const-floatmantissabits)
  - [`floatFractionalBits`](#const-floatfractionalbits)
  - [`floatExponentMin`](#const-floatexponentmin)
  - [`floatExponentMax`](#const-floatexponentmax)
  - [`floatTrueMin`](#const-floattruemin)
  - [`floatMin`](#const-floatmin)
  - [`floatMax`](#const-floatmax)
  - [`floatEps`](#const-floateps)
  - [`floatEpsAt`](#const-floatepsat)
  - [`inf`](#const-inf)
  - [`nan`](#const-nan)
  - [`snan`](#const-snan)
  - [`isNan`](#const-isnan)
  - [`isSignalNan`](#const-issignalnan)
  - [`frexp`](#const-frexp)
  - [`Frexp`](#const-frexp-1)
  - [`modf`](#const-modf)
  - [`Modf`](#const-modf-1)
  - [`copysign`](#const-copysign)
  - [`isFinite`](#const-isfinite)
  - [`isInf`](#const-isinf)
  - [`isPositiveInf`](#const-ispositiveinf)
  - [`isNegativeInf`](#const-isnegativeinf)
  - [`isPositiveZero`](#const-ispositivezero)
  - [`isNegativeZero`](#const-isnegativezero)
  - [`isNormal`](#const-isnormal)
  - [`nextAfter`](#const-nextafter)
  - [`signbit`](#const-signbit)
  - [`scalbn`](#const-scalbn)
  - [`ldexp`](#const-ldexp)
  - [`pow`](#const-pow)
  - [`powi`](#const-powi)
  - [`sqrt`](#const-sqrt)
  - [`cbrt`](#const-cbrt)
  - [`acos`](#const-acos)
  - [`asin`](#const-asin)
  - [`atan`](#const-atan)
  - [`atan2`](#const-atan2)
  - [`hypot`](#const-hypot)
  - [`expm1`](#const-expm1)
  - [`ilogb`](#const-ilogb)
  - [`log`](#const-log)
  - [`log2`](#const-log2)
  - [`log10`](#const-log10)
  - [`log10\_int`](#const-log10-int)
  - [`log\_int`](#const-log-int)
  - [`log1p`](#const-log1p)
  - [`asinh`](#const-asinh)
  - [`acosh`](#const-acosh)
  - [`atanh`](#const-atanh)
  - [`sinh`](#const-sinh)
  - [`cosh`](#const-cosh)
  - [`tanh`](#const-tanh)
  - [`gcd`](#const-gcd)
  - [`lcm`](#const-lcm)
  - [`gamma`](#const-gamma)
  - [`lgamma`](#const-lgamma)
  - [`Complex`](#const-complex)

- [Error Sets](#error-sets)
  - [`AlignCastError`](#error-aligncasterror)

---

## Types (4)

### <a id="type-sign"></a>`Sign`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Sign = enum(u1) { positive, negative }
```

**Fields:**

| Value | Description |
|-------|-------------|
| `positive` |  |
| `negative` |  |

</details>

---

### <a id="type-order"></a>`Order`

<details class="declaration-card" open>
<summary>Container – See also `CompareOperator`</summary>

See also `CompareOperator`.

```zig
pub const Order = enum {
    /// Greater than (`>`)
    gt,

    /// Less than (`<`)
    lt,

    /// Equal (`==`)
    eq,

    pub fn invert(self: Order) Order {
        return switch (self) {
            .lt => .gt,
            .eq => .eq,
            .gt => .lt,
        };
    }

    test invert {
        try testing.expect(Order.invert(order(0, 0)) == .eq);
        try testing.expect(Order.invert(order(1, 0)) == .lt);
        try testing.expect(Order.invert(order(-1, 0)) == .gt);
    }

    pub fn differ(self: Order) ?Order {
        return if (self != .eq) self else null;
    }

    test differ {
        const neg: i32 = -1;
        const zero: i32 = 0;
        const pos: i32 = 1;
        try testing.expect(order(zero, neg).differ() orelse
            order(pos, zero) == .gt);
        try testing.expect(order(zero, zero).differ() orelse
            order(zero, zero) == .eq);
        try testing.expect(order(pos, pos).differ() orelse
            order(neg, zero) == .lt);
        try testing.expect(order(zero, zero).differ() orelse
            order(pos, neg).differ() orelse
            order(neg, zero) == .gt);
        try testing.expect(order(pos, pos).differ() orelse
            order(pos, pos).differ() orelse
            order(neg, neg) == .eq);
        try testing.expect(order(zero, pos).differ() orelse
            order(neg, pos).differ() orelse
            order(pos, neg) == .lt);
    }

    pub fn compare(self: Order, op: CompareOperator) bool {
        return switch (self) {
            .lt => switch (op) {
                .lt => true,
                .lte => true,
                .eq => false,
                .gte => false,
                .gt => false,
                .neq => true,
            },
            .eq => switch (op) {
                .lt => false,
                .lte => true,
                .eq => true,
                .gte => true,
                .gt => false,
                .neq => false,
            },
            .gt => switch (op) {
                .lt => false,
                .lte => false,
                .eq => false,
                .gte => true,
                .gt => true,
                .neq => true,
            },
        };
    }

    // https://github.com/ziglang/zig/issues/19295
    test "compare" {
        try testing.expect(order(-1, 0).compare(.lt));
        try testing.expect(order(-1, 0).compare(.lte));
        try testing.expect(order(0, 0).compare(.lte));
        try testing.expect(order(0, 0).compare(.eq));
        try testing.expect(order(0, 0).compare(.gte));
        try testing.expect(order(1, 0).compare(.gte));
        try testing.expect(order(1, 0).compare(.gt));
        try testing.expect(order(1, 0).compare(.neq));
    }
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `gt` | Greater than (\`\>\`) |
| `lt` | Less than (\`\<\`) |
| `eq` | Equal (\`==\`) |

</details>

---

### <a id="type-compareoperator"></a>`CompareOperator`

<details class="declaration-card" open>
<summary>Container – See also `Order`</summary>

See also `Order`.

```zig
pub const CompareOperator = enum {
    /// Less than (`<`)
    lt,
    /// Less than or equal (`<=`)
    lte,
    /// Equal (`==`)
    eq,
    /// Greater than or equal (`>=`)
    gte,
    /// Greater than (`>`)
    gt,
    /// Not equal (`!=`)
    neq,

    /// Reverse the direction of the comparison.
    /// Use when swapping the left and right hand operands.
    pub fn reverse(op: CompareOperator) CompareOperator {
        return switch (op) {
            .lt => .gt,
            .lte => .gte,
            .gt => .lt,
            .gte => .lte,
            .eq => .eq,
            .neq => .neq,
        };
    }

    test reverse {
        inline for (@typeInfo(CompareOperator).@"enum".fields) |op_field| {
            const op = @as(CompareOperator, @enumFromInt(op_field.value));
            try testing.expect(compare(2, op, 3) == compare(3, op.reverse(), 2));
            try testing.expect(compare(3, op, 3) == compare(3, op.reverse(), 3));
            try testing.expect(compare(4, op, 3) == compare(3, op.reverse(), 4));
        }
    }
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `lt` | Less than (\`\<\`) |
| `lte` | Less than or equal (\`\<=\`) |
| `eq` | Equal (\`==\`) |
| `gte` | Greater than or equal (\`\>=\`) |
| `gt` | Greater than (\`\>\`) |
| `neq` | Not equal (\`!=\`) |

</details>

---

### <a id="type-f80"></a>`F80`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const F80 = struct {
    fraction: u64,
    exp: u16,

    pub fn toFloat(self: F80) f80 {
        const int = (@as(u80, self.exp) << 64) | self.fraction;
        return @as(f80, @bitCast(int));
    }

    pub fn fromFloat(x: f80) F80 {
        const int = @as(u80, @bitCast(x));
        return .{
            .fraction = @as(u64, @truncate(int)),
            .exp = @as(u16, @truncate(int >> 64)),
        };
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `fraction` | `u64` | – | |
| `exp` | `u16` | – | |

</details>

---

## Modules (2)

### <a id="module-complex"></a>`complex`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const complex = @import("math/complex.zig")
```

> **Module:** `math/complex.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/math/complex.zig)

</details>

---

### <a id="module-big"></a>`big`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const big = @import("math/big.zig")
```

> **Module:** `math/big.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/math/big.zig)

</details>

---

## Constants (73)

### <a id="const-e"></a>`e`

<details class="declaration-card" open>
<summary>Constant – Euler&#39;s number (e)</summary>

Euler's number (e)

```zig
pub const e = 2.71828182845904523536028747135266249775724709369995
```

</details>

---

### <a id="const-pi"></a>`pi`

<details class="declaration-card" open>
<summary>Constant – Archimedes&#39; constant (π)</summary>

Archimedes' constant (π)

```zig
pub const pi = 3.14159265358979323846264338327950288419716939937510
```

</details>

---

### <a id="const-phi"></a>`phi`

<details class="declaration-card" open>
<summary>Constant – Phi or Golden ratio constant (Φ) = (1 + sqrt(5))/2</summary>

Phi or Golden ratio constant (Φ) = (1 + sqrt(5))/2

```zig
pub const phi = 1.6180339887498948482045868343656381177203091798057628621
```

</details>

---

### <a id="const-tau"></a>`tau`

<details class="declaration-card" open>
<summary>Constant – Circle constant (τ)</summary>

Circle constant (τ)

```zig
pub const tau = 2 * pi
```

</details>

---

### <a id="const-log2e"></a>`log2e`

<details class="declaration-card" open>
<summary>Constant – log2(e)</summary>

log2(e)

```zig
pub const log2e = 1.442695040888963407359924681001892137
```

</details>

---

### <a id="const-log10e"></a>`log10e`

<details class="declaration-card" open>
<summary>Constant – log10(e)</summary>

log10(e)

```zig
pub const log10e = 0.434294481903251827651128918916605082
```

</details>

---

### <a id="const-ln2"></a>`ln2`

<details class="declaration-card" open>
<summary>Constant – ln(2)</summary>

ln(2)

```zig
pub const ln2 = 0.693147180559945309417232121458176568
```

</details>

---

### <a id="const-ln10"></a>`ln10`

<details class="declaration-card" open>
<summary>Constant – ln(10)</summary>

ln(10)

```zig
pub const ln10 = 2.302585092994045684017991454684364208
```

</details>

---

### <a id="const-two-sqrtpi"></a>`two_sqrtpi`

<details class="declaration-card" open>
<summary>Constant – 2/sqrt(π)</summary>

2/sqrt(π)

```zig
pub const two_sqrtpi = 1.128379167095512573896158903121545172
```

</details>

---

### <a id="const-sqrt2"></a>`sqrt2`

<details class="declaration-card" open>
<summary>Constant – sqrt(2)</summary>

sqrt(2)

```zig
pub const sqrt2 = 1.414213562373095048801688724209698079
```

</details>

---

### <a id="const-sqrt1-2"></a>`sqrt1_2`

<details class="declaration-card" open>
<summary>Constant – 1/sqrt(2)</summary>

1/sqrt(2)

```zig
pub const sqrt1_2 = 0.707106781186547524400844362104849039
```

</details>

---

### <a id="const-rad-per-deg"></a>`rad_per_deg`

<details class="declaration-card" open>
<summary>Constant – pi/180</summary>

pi/180.0

```zig
pub const rad_per_deg = 0.0174532925199432957692369076848861271344287188854172545609719144
```

</details>

---

### <a id="const-deg-per-rad"></a>`deg_per_rad`

<details class="declaration-card" open>
<summary>Constant – 180</summary>

180.0/pi

```zig
pub const deg_per_rad = 57.295779513082320876798154814105170332405472466564321549160243861
```

</details>

---

### <a id="const-floatrepr"></a>`FloatRepr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const FloatRepr = float.FloatRepr
```

</details>

---

### <a id="const-floatexponentbits"></a>`floatExponentBits`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatExponentBits = float.floatExponentBits
```

</details>

---

### <a id="const-floatmantissabits"></a>`floatMantissaBits`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatMantissaBits = float.floatMantissaBits
```

</details>

---

### <a id="const-floatfractionalbits"></a>`floatFractionalBits`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatFractionalBits = float.floatFractionalBits
```

</details>

---

### <a id="const-floatexponentmin"></a>`floatExponentMin`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatExponentMin = float.floatExponentMin
```

</details>

---

### <a id="const-floatexponentmax"></a>`floatExponentMax`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatExponentMax = float.floatExponentMax
```

</details>

---

### <a id="const-floattruemin"></a>`floatTrueMin`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatTrueMin = float.floatTrueMin
```

</details>

---

### <a id="const-floatmin"></a>`floatMin`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatMin = float.floatMin
```

</details>

---

### <a id="const-floatmax"></a>`floatMax`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatMax = float.floatMax
```

</details>

---

### <a id="const-floateps"></a>`floatEps`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatEps = float.floatEps
```

</details>

---

### <a id="const-floatepsat"></a>`floatEpsAt`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const floatEpsAt = float.floatEpsAt
```

</details>

---

### <a id="const-inf"></a>`inf`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const inf = float.inf
```

</details>

---

### <a id="const-nan"></a>`nan`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const nan = float.nan
```

</details>

---

### <a id="const-snan"></a>`snan`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const snan = float.snan
```

</details>

---

### <a id="const-isnan"></a>`isNan`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isNan = @import("math/isnan.zig").isNan
```

</details>

---

### <a id="const-issignalnan"></a>`isSignalNan`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isSignalNan = @import("math/isnan.zig").isSignalNan
```

</details>

---

### <a id="const-frexp"></a>`frexp`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const frexp = @import("math/frexp.zig").frexp
```

</details>

---

### <a id="const-frexp-1"></a>`Frexp`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Frexp = @import("math/frexp.zig").Frexp
```

</details>

---

### <a id="const-modf"></a>`modf`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const modf = @import("math/modf.zig").modf
```

</details>

---

### <a id="const-modf-1"></a>`Modf`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Modf = @import("math/modf.zig").Modf
```

</details>

---

### <a id="const-copysign"></a>`copysign`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const copysign = @import("math/copysign.zig").copysign
```

</details>

---

### <a id="const-isfinite"></a>`isFinite`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isFinite = @import("math/isfinite.zig").isFinite
```

</details>

---

### <a id="const-isinf"></a>`isInf`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isInf = @import("math/isinf.zig").isInf
```

</details>

---

### <a id="const-ispositiveinf"></a>`isPositiveInf`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isPositiveInf = @import("math/isinf.zig").isPositiveInf
```

</details>

---

### <a id="const-isnegativeinf"></a>`isNegativeInf`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isNegativeInf = @import("math/isinf.zig").isNegativeInf
```

</details>

---

### <a id="const-ispositivezero"></a>`isPositiveZero`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isPositiveZero = @import("math/iszero.zig").isPositiveZero
```

</details>

---

### <a id="const-isnegativezero"></a>`isNegativeZero`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isNegativeZero = @import("math/iszero.zig").isNegativeZero
```

</details>

---

### <a id="const-isnormal"></a>`isNormal`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isNormal = @import("math/isnormal.zig").isNormal
```

</details>

---

### <a id="const-nextafter"></a>`nextAfter`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const nextAfter = @import("math/nextafter.zig").nextAfter
```

</details>

---

### <a id="const-signbit"></a>`signbit`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const signbit = @import("math/signbit.zig").signbit
```

</details>

---

### <a id="const-scalbn"></a>`scalbn`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const scalbn = @import("math/scalbn.zig").scalbn
```

</details>

---

### <a id="const-ldexp"></a>`ldexp`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ldexp = @import("math/ldexp.zig").ldexp
```

</details>

---

### <a id="const-pow"></a>`pow`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const pow = @import("math/pow.zig").pow
```

</details>

---

### <a id="const-powi"></a>`powi`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const powi = @import("math/powi.zig").powi
```

</details>

---

### <a id="const-sqrt"></a>`sqrt`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const sqrt = @import("math/sqrt.zig").sqrt
```

</details>

---

### <a id="const-cbrt"></a>`cbrt`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const cbrt = @import("math/cbrt.zig").cbrt
```

</details>

---

### <a id="const-acos"></a>`acos`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const acos = @import("math/acos.zig").acos
```

</details>

---

### <a id="const-asin"></a>`asin`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const asin = @import("math/asin.zig").asin
```

</details>

---

### <a id="const-atan"></a>`atan`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const atan = @import("math/atan.zig").atan
```

</details>

---

### <a id="const-atan2"></a>`atan2`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const atan2 = @import("math/atan2.zig").atan2
```

</details>

---

### <a id="const-hypot"></a>`hypot`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const hypot = @import("math/hypot.zig").hypot
```

</details>

---

### <a id="const-expm1"></a>`expm1`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const expm1 = @import("math/expm1.zig").expm1
```

</details>

---

### <a id="const-ilogb"></a>`ilogb`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ilogb = @import("math/ilogb.zig").ilogb
```

</details>

---

### <a id="const-log"></a>`log`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const log = @import("math/log.zig").log
```

</details>

---

### <a id="const-log2"></a>`log2`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const log2 = @import("math/log2.zig").log2
```

</details>

---

### <a id="const-log10"></a>`log10`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const log10 = @import("math/log10.zig").log10
```

</details>

---

### <a id="const-log10-int"></a>`log10_int`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const log10_int = @import("math/log10.zig").log10_int
```

</details>

---

### <a id="const-log-int"></a>`log_int`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const log_int = @import("math/log_int.zig").log_int
```

</details>

---

### <a id="const-log1p"></a>`log1p`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const log1p = @import("math/log1p.zig").log1p
```

</details>

---

### <a id="const-asinh"></a>`asinh`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const asinh = @import("math/asinh.zig").asinh
```

</details>

---

### <a id="const-acosh"></a>`acosh`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const acosh = @import("math/acosh.zig").acosh
```

</details>

---

### <a id="const-atanh"></a>`atanh`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const atanh = @import("math/atanh.zig").atanh
```

</details>

---

### <a id="const-sinh"></a>`sinh`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const sinh = @import("math/sinh.zig").sinh
```

</details>

---

### <a id="const-cosh"></a>`cosh`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const cosh = @import("math/cosh.zig").cosh
```

</details>

---

### <a id="const-tanh"></a>`tanh`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const tanh = @import("math/tanh.zig").tanh
```

</details>

---

### <a id="const-gcd"></a>`gcd`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const gcd = @import("math/gcd.zig").gcd
```

</details>

---

### <a id="const-lcm"></a>`lcm`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const lcm = @import("math/lcm.zig").lcm
```

</details>

---

### <a id="const-gamma"></a>`gamma`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const gamma = @import("math/gamma.zig").gamma
```

</details>

---

### <a id="const-lgamma"></a>`lgamma`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const lgamma = @import("math/gamma.zig").lgamma
```

</details>

---

### <a id="const-complex"></a>`Complex`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Complex = complex.Complex
```

</details>

---

## Functions (60)

### <a id="fn-approxeqabs"></a>`approxEqAbs`

<details class="declaration-card" open>
<summary>Function – Performs an approximate comparison of two floating point values `x` and `y`</summary>

Performs an approximate comparison of two floating point values `x` and `y`.
Returns true if the absolute difference between them is less or equal than
the specified tolerance.

The `tolerance` parameter is the absolute tolerance used when determining if
the two numbers are close enough; a good value for this parameter is a small
multiple of `floatEps(T)`.

Note that this function is recommended for comparing small numbers
around zero; using `approxEqRel` is suggested otherwise.

NaN values are never considered equal to any value.

```zig
pub fn approxEqAbs(comptime T: type, x: T, y: T, tolerance: T) bool {
    assert(@typeInfo(T) == .float or @typeInfo(T) == .comptime_float);
    assert(tolerance >= 0);

    // Fast path for equal values (and signed zeros and infinites).
    if (x == y)
        return true;

    if (isNan(x) or isNan(y))
        return false;

    return @abs(x - y) <= tolerance;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| `y` | `T` | – | – |
| `tolerance` | `T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-approxeqrel"></a>`approxEqRel`

<details class="declaration-card" open>
<summary>Function – Performs an approximate comparison of two floating point values `x` and `y`</summary>

Performs an approximate comparison of two floating point values `x` and `y`.
Returns true if the absolute difference between them is less or equal than
`max(|x|, |y|) * tolerance`, where `tolerance` is a positive number greater
than zero.

The `tolerance` parameter is the relative tolerance used when determining if
the two numbers are close enough; a good value for this parameter is usually
`sqrt(floatEps(T))`, meaning that the two numbers are considered equal if at
least half of the digits are equal.

Note that for comparisons of small numbers around zero this function won't
give meaningful results, use `approxEqAbs` instead.

NaN values are never considered equal to any value.

```zig
pub fn approxEqRel(comptime T: type, x: T, y: T, tolerance: T) bool {
    assert(@typeInfo(T) == .float or @typeInfo(T) == .comptime_float);
    assert(tolerance > 0);

    // Fast path for equal values (and signed zeros and infinites).
    if (x == y)
        return true;

    if (isNan(x) or isNan(y))
        return false;

    return @abs(x - y) <= @max(@abs(x), @abs(y)) * tolerance;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| `y` | `T` | – | – |
| `tolerance` | `T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-raiseinvalid"></a>`raiseInvalid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn raiseInvalid() void {
    // Raise INVALID fpu exception
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-raiseunderflow"></a>`raiseUnderflow`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn raiseUnderflow() void {
    // Raise UNDERFLOW fpu exception
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-raiseoverflow"></a>`raiseOverflow`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn raiseOverflow() void {
    // Raise OVERFLOW fpu exception
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-raiseinexact"></a>`raiseInexact`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn raiseInexact() void {
    // Raise INEXACT fpu exception
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-raisedivbyzero"></a>`raiseDivByZero`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn raiseDivByZero() void {
    // Raise INEXACT fpu exception
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-sin"></a>`sin`

<details class="declaration-card" open>
<summary>Function – Sine trigonometric function on a floating point number</summary>

Sine trigonometric function on a floating point number.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @sin

```zig
pub inline fn sin(value: anytype) @TypeOf(value) {
    return @sin(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-cos"></a>`cos`

<details class="declaration-card" open>
<summary>Function – Cosine trigonometric function on a floating point number</summary>

Cosine trigonometric function on a floating point number.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @cos

```zig
pub inline fn cos(value: anytype) @TypeOf(value) {
    return @cos(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-tan"></a>`tan`

<details class="declaration-card" open>
<summary>Function – Tangent trigonometric function on a floating point number</summary>

Tangent trigonometric function on a floating point number.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @tan

```zig
pub inline fn tan(value: anytype) @TypeOf(value) {
    return @tan(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-radianstodegrees"></a>`radiansToDegrees`

<details class="declaration-card" open>
<summary>Function – Converts an angle in radians to degrees</summary>

Converts an angle in radians to degrees. T must be a float or comptime number or a vector of floats.

```zig
pub fn radiansToDegrees(ang: anytype) if (@TypeOf(ang) == comptime_int) comptime_float else @TypeOf(ang) {
    const T = @TypeOf(ang);
    switch (@typeInfo(T)) {
        .float, .comptime_float, .comptime_int => return ang * deg_per_rad,
        .vector => |V| if (@typeInfo(V.child) == .float) return ang * @as(T, @splat(deg_per_rad)),
        else => {},
    }
    @compileError("Input must be float or a comptime number, or a vector of floats.");
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ang` | `` | – | – |
| Return | See note[^fn-radianstodegrees-return-0] | – | – |


[^fn-radianstodegrees-return-0]:
    Return type for `radiansToDegrees`:

    ```zig
    if (@TypeOf(ang) == comptime_int) comptime_float else @TypeOf(ang)
    ```

</details>

---

### <a id="fn-degreestoradians"></a>`degreesToRadians`

<details class="declaration-card" open>
<summary>Function – Converts an angle in degrees to radians</summary>

Converts an angle in degrees to radians. T must be a float or comptime number or a vector of floats.

```zig
pub fn degreesToRadians(ang: anytype) if (@TypeOf(ang) == comptime_int) comptime_float else @TypeOf(ang) {
    const T = @TypeOf(ang);
    switch (@typeInfo(T)) {
        .float, .comptime_float, .comptime_int => return ang * rad_per_deg,
        .vector => |V| if (@typeInfo(V.child) == .float) return ang * @as(T, @splat(rad_per_deg)),
        else => {},
    }
    @compileError("Input must be float or a comptime number, or a vector of floats.");
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ang` | `` | – | – |
| Return | See note[^fn-degreestoradians-return-0] | – | – |


[^fn-degreestoradians-return-0]:
    Return type for `degreesToRadians`:

    ```zig
    if (@TypeOf(ang) == comptime_int) comptime_float else @TypeOf(ang)
    ```

</details>

---

### <a id="fn-exp"></a>`exp`

<details class="declaration-card" open>
<summary>Function – Base-e exponential function on a floating point number</summary>

Base-e exponential function on a floating point number.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @exp

```zig
pub inline fn exp(value: anytype) @TypeOf(value) {
    return @exp(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-exp2"></a>`exp2`

<details class="declaration-card" open>
<summary>Function – Base-2 exponential function on a floating point number</summary>

Base-2 exponential function on a floating point number.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @exp2

```zig
pub inline fn exp2(value: anytype) @TypeOf(value) {
    return @exp2(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-min"></a>`Min`

<details class="declaration-card" open>
<summary>Function – Given two types, returns the smallest one which is capable of holding the</summary>

Given two types, returns the smallest one which is capable of holding the
full range of the minimum value.

```zig
pub fn Min(comptime A: type, comptime B: type) type {
    switch (@typeInfo(A)) {
        .int => |a_info| switch (@typeInfo(B)) {
            .int => |b_info| if (a_info.signedness == .unsigned and b_info.signedness == .unsigned) {
                if (a_info.bits < b_info.bits) {
                    return A;
                } else {
                    return B;
                }
            },
            else => {},
        },
        else => {},
    }
    return @TypeOf(@as(A, 0) + @as(B, 0));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `A` | `type` | – | – |
| `B` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-wrap"></a>`wrap`

<details class="declaration-card" open>
<summary>Function – Odd sawtooth function</summary>

Odd sawtooth function
```
        |
     /  | /    /
    /   |/    /
 --/----/----/--
  /    /|   /
 /    / |  /
        |
```
Limit x to the half-open interval [-r, r).

```zig
pub fn wrap(x: anytype, r: anytype) @TypeOf(x) {
    const info_x = @typeInfo(@TypeOf(x));
    const info_r = @typeInfo(@TypeOf(r));
    if (info_x == .int and info_x.int.signedness != .signed) {
        @compileError("x must be floating point, comptime integer, or signed integer.");
    }
    switch (info_r) {
        .int => {
            // in the rare usecase of r not being comptime_int or float,
            // take the penalty of having an intermediary type conversion,
            // otherwise the alternative is to unwind iteratively to avoid overflow
            const R = comptime do: {
                var info = info_r;
                info.int.bits += 1;
                info.int.signedness = .signed;
                break :do @Type(info);
            };
            const radius: if (info_r.int.signedness == .signed) @TypeOf(r) else R = r;
            return @intCast(@mod(x - radius, 2 * @as(R, r)) - r); // provably impossible to overflow
        },
        else => {
            return @mod(x - r, 2 * r) - r;
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `x` | `` | – | – |
| `r` | `` | – | – |
| Return | `@TypeOf(x)` | – | – |

**Examples:**

#### Example 1: Calling `wrap`

This example demonstrates how to call `wrap`.

```zig
|
/  | /    /
/   |/    /
--/----/----/--
/    /|   /
/    / |  /
|
```

</details>

---

### <a id="fn-clamp"></a>`clamp`

<details class="declaration-card" open>
<summary>Function – Odd ramp function</summary>

Odd ramp function
```
        |  _____
        | /
        |/
 -------/-------
       /|
 _____/ |
        |
```
Limit val to the inclusive range [lower, upper].

```zig
pub fn clamp(val: anytype, lower: anytype, upper: anytype) @TypeOf(val, lower, upper) {
    const T = @TypeOf(val, lower, upper);
    switch (@typeInfo(T)) {
        .int, .float, .comptime_int, .comptime_float => assert(lower <= upper),
        .vector => |vinfo| switch (@typeInfo(vinfo.child)) {
            .int, .float => assert(@reduce(.And, lower <= upper)),
            else => @compileError("Expected vector of ints or floats, found " ++ @typeName(T)),
        },
        else => @compileError("Expected an int, float or vector of one, found " ++ @typeName(T)),
    }
    return @max(lower, @min(val, upper));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `val` | `` | – | – |
| `lower` | `` | – | – |
| `upper` | `` | – | – |
| Return | `@TypeOf(val, lower, upper)` | – | – |

**Examples:**

#### Example 1: Calling `clamp`

This example demonstrates how to call `clamp`.

```zig
|  _____
| /
|/
-------/-------
/|
_____/ |
|
```

</details>

---

### <a id="fn-mul"></a>`mul`

<details class="declaration-card" open>
<summary>Function – Returns the product of a and b</summary>

Returns the product of a and b. Returns an error on overflow.

```zig
pub fn mul(comptime T: type, a: T, b: T) (error{Overflow}!T) {
    if (T == comptime_int) return a * b;
    const ov = @mulWithOverflow(a, b);
    if (ov[1] != 0) return error.Overflow;
    return ov[0];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `T` | – | – |
| `b` | `T` | – | – |
| Return | `(error{Overflow}!T)` | – | – |

**Possible Errors:**

- `error.Overflow`

</details>

---

### <a id="fn-add"></a>`add`

<details class="declaration-card" open>
<summary>Function – Returns the sum of a and b</summary>

Returns the sum of a and b. Returns an error on overflow.

```zig
pub fn add(comptime T: type, a: T, b: T) (error{Overflow}!T) {
    if (T == comptime_int) return a + b;
    const ov = @addWithOverflow(a, b);
    if (ov[1] != 0) return error.Overflow;
    return ov[0];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `T` | – | – |
| `b` | `T` | – | – |
| Return | `(error{Overflow}!T)` | – | – |

**Possible Errors:**

- `error.Overflow`

</details>

---

### <a id="fn-sub"></a>`sub`

<details class="declaration-card" open>
<summary>Function – Returns a - b, or an error on overflow</summary>

Returns a - b, or an error on overflow.

```zig
pub fn sub(comptime T: type, a: T, b: T) (error{Overflow}!T) {
    if (T == comptime_int) return a - b;
    const ov = @subWithOverflow(a, b);
    if (ov[1] != 0) return error.Overflow;
    return ov[0];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `T` | – | – |
| `b` | `T` | – | – |
| Return | `(error{Overflow}!T)` | – | – |

**Possible Errors:**

- `error.Overflow`

</details>

---

### <a id="fn-negate"></a>`negate`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn negate(x: anytype) !@TypeOf(x) {
    return sub(@TypeOf(x), 0, x);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `x` | `` | – | – |
| Return | `@TypeOf(x)` | – | – |

</details>

---

### <a id="fn-shlexact"></a>`shlExact`

<details class="declaration-card" open>
<summary>Function – Shifts a left by shift_amt</summary>

Shifts a left by shift_amt. Returns an error on overflow. shift_amt
is unsigned.

```zig
pub fn shlExact(comptime T: type, a: T, shift_amt: Log2Int(T)) !T {
    if (T == comptime_int) return a << shift_amt;
    const ov = @shlWithOverflow(a, shift_amt);
    if (ov[1] != 0) return error.Overflow;
    return ov[0];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `T` | – | – |
| `shift\_amt` | `Log2Int(T)` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-shl"></a>`shl`

<details class="declaration-card" open>
<summary>Function – Shifts left</summary>

Shifts left. Overflowed bits are truncated.
A negative shift amount results in a right shift.

```zig
pub fn shl(comptime T: type, a: T, shift_amt: anytype) T {
    const is_shl = shift_amt >= 0;
    const abs_shift_amt = @abs(shift_amt);
    const casted_shift_amt = casted_shift_amt: switch (@typeInfo(T)) {
        .int => |info| {
            if (abs_shift_amt < info.bits) break :casted_shift_amt @as(
                Log2Int(T),
                @intCast(abs_shift_amt),
            );
            if (info.signedness == .unsigned or is_shl) return 0;
            return a >> (info.bits - 1);
        },
        .vector => |info| {
            const Child = info.child;
            const child_info = @typeInfo(Child).int;
            if (abs_shift_amt < child_info.bits) break :casted_shift_amt @as(
                @Vector(info.len, Log2Int(Child)),
                @splat(@as(Log2Int(Child), @intCast(abs_shift_amt))),
            );
            if (child_info.signedness == .unsigned or is_shl) return @splat(0);
            return a >> @splat(child_info.bits - 1);
        },
        else => comptime unreachable,
    };
    return if (is_shl) a << casted_shift_amt else a >> casted_shift_amt;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `T` | – | – |
| `shift\_amt` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-shr"></a>`shr`

<details class="declaration-card" open>
<summary>Function – Shifts right</summary>

Shifts right. Overflowed bits are truncated.
A negative shift amount results in a left shift.

```zig
pub fn shr(comptime T: type, a: T, shift_amt: anytype) T {
    const is_shl = shift_amt < 0;
    const abs_shift_amt = @abs(shift_amt);
    const casted_shift_amt = casted_shift_amt: switch (@typeInfo(T)) {
        .int => |info| {
            if (abs_shift_amt < info.bits) break :casted_shift_amt @as(
                Log2Int(T),
                @intCast(abs_shift_amt),
            );
            if (info.signedness == .unsigned or is_shl) return 0;
            return a >> (info.bits - 1);
        },
        .vector => |info| {
            const Child = info.child;
            const child_info = @typeInfo(Child).int;
            if (abs_shift_amt < child_info.bits) break :casted_shift_amt @as(
                @Vector(info.len, Log2Int(Child)),
                @splat(@as(Log2Int(Child), @intCast(abs_shift_amt))),
            );
            if (child_info.signedness == .unsigned or is_shl) return @splat(0);
            return a >> @splat(child_info.bits - 1);
        },
        else => comptime unreachable,
    };
    return if (is_shl) a << casted_shift_amt else a >> casted_shift_amt;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `T` | – | – |
| `shift\_amt` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-rotr"></a>`rotr`

<details class="declaration-card" open>
<summary>Function – Rotates right</summary>

Rotates right. Only unsigned values can be rotated.  Negative shift
values result in shift modulo the bit count.

```zig
pub fn rotr(comptime T: type, x: T, r: anytype) T {
    if (@typeInfo(T) == .vector) {
        const C = @typeInfo(T).vector.child;
        if (C == u0) return @splat(0);

        if (@typeInfo(C).int.signedness == .signed) {
            @compileError("cannot rotate signed integers");
        }
        const ar: Log2Int(C) = @intCast(@mod(r, @typeInfo(C).int.bits));
        return (x >> @splat(ar)) | (x << @splat(1 + ~ar));
    } else if (@typeInfo(T).int.signedness == .signed) {
        @compileError("cannot rotate signed integer");
    } else {
        if (T == u0) return 0;

        if (comptime isPowerOfTwo(@typeInfo(T).int.bits)) {
            const ar: Log2Int(T) = @intCast(@mod(r, @typeInfo(T).int.bits));
            return x >> ar | x << (1 +% ~ar);
        } else {
            const ar = @mod(r, @typeInfo(T).int.bits);
            return shr(T, x, ar) | shl(T, x, @typeInfo(T).int.bits - ar);
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| `r` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-rotl"></a>`rotl`

<details class="declaration-card" open>
<summary>Function – Rotates left</summary>

Rotates left. Only unsigned values can be rotated.  Negative shift
values result in shift modulo the bit count.

```zig
pub fn rotl(comptime T: type, x: T, r: anytype) T {
    if (@typeInfo(T) == .vector) {
        const C = @typeInfo(T).vector.child;
        if (C == u0) return @splat(0);

        if (@typeInfo(C).int.signedness == .signed) {
            @compileError("cannot rotate signed integers");
        }
        const ar: Log2Int(C) = @intCast(@mod(r, @typeInfo(C).int.bits));
        return (x << @splat(ar)) | (x >> @splat(1 +% ~ar));
    } else if (@typeInfo(T).int.signedness == .signed) {
        @compileError("cannot rotate signed integer");
    } else {
        if (T == u0) return 0;

        if (comptime isPowerOfTwo(@typeInfo(T).int.bits)) {
            const ar: Log2Int(T) = @intCast(@mod(r, @typeInfo(T).int.bits));
            return x << ar | x >> 1 +% ~ar;
        } else {
            const ar = @mod(r, @typeInfo(T).int.bits);
            return shl(T, x, ar) | shr(T, x, @typeInfo(T).int.bits - ar);
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| `r` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-log2int"></a>`Log2Int`

<details class="declaration-card" open>
<summary>Function – Returns an unsigned int type that can hold the number of bits in T - 1</summary>

Returns an unsigned int type that can hold the number of bits in T - 1.
Suitable for 0-based bit indices of T.

```zig
pub fn Log2Int(comptime T: type) type {
    // comptime ceil log2
    if (T == comptime_int) return comptime_int;
    const bits: u16 = @typeInfo(T).int.bits;
    const log2_bits = 16 - @clz(bits - 1);
    return std.meta.Int(.unsigned, log2_bits);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-log2intceil"></a>`Log2IntCeil`

<details class="declaration-card" open>
<summary>Function – Returns an unsigned int type that can hold the number of bits in T</summary>

Returns an unsigned int type that can hold the number of bits in T.

```zig
pub fn Log2IntCeil(comptime T: type) type {
    // comptime ceil log2
    if (T == comptime_int) return comptime_int;
    const bits: u16 = @typeInfo(T).int.bits;
    const log2_bits = 16 - @clz(bits);
    return std.meta.Int(.unsigned, log2_bits);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-intfittingrange"></a>`IntFittingRange`

<details class="declaration-card" open>
<summary>Function – Returns the smallest integer type that can hold both from and to</summary>

Returns the smallest integer type that can hold both from and to.

```zig
pub fn IntFittingRange(comptime from: comptime_int, comptime to: comptime_int) type {
    assert(from <= to);
    const signedness: std.builtin.Signedness = if (from < 0) .signed else .unsigned;
    return @Type(.{ .int = .{
        .signedness = signedness,
        .bits = @as(u16, @intFromBool(signedness == .signed)) +
            switch (if (from < 0) @max(@abs(from) - 1, to) else to) {
                0 => 0,
                else => |pos_max| 1 + log2(pos_max),
            },
    } });
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `from` | `comptime_int` | – | – |
| `to` | `comptime_int` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-divtrunc"></a>`divTrunc`

<details class="declaration-card" open>
<summary>Function – Divide numerator by denominator, rounding toward zero</summary>

Divide numerator by denominator, rounding toward zero. Returns an
error on overflow or when denominator is zero.

```zig
pub fn divTrunc(comptime T: type, numerator: T, denominator: T) !T {
    @setRuntimeSafety(false);
    if (denominator == 0) return error.DivisionByZero;
    if (@typeInfo(T) == .int and @typeInfo(T).int.signedness == .signed and numerator == minInt(T) and denominator == -1) return error.Overflow;
    return @divTrunc(numerator, denominator);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `numerator` | `T` | – | – |
| `denominator` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-divfloor"></a>`divFloor`

<details class="declaration-card" open>
<summary>Function – Divide numerator by denominator, rounding toward negative</summary>

Divide numerator by denominator, rounding toward negative
infinity. Returns an error on overflow or when denominator is
zero.

```zig
pub fn divFloor(comptime T: type, numerator: T, denominator: T) !T {
    @setRuntimeSafety(false);
    if (denominator == 0) return error.DivisionByZero;
    if (@typeInfo(T) == .int and @typeInfo(T).int.signedness == .signed and numerator == minInt(T) and denominator == -1) return error.Overflow;
    return @divFloor(numerator, denominator);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `numerator` | `T` | – | – |
| `denominator` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-divceil"></a>`divCeil`

<details class="declaration-card" open>
<summary>Function – Divide numerator by denominator, rounding toward positive</summary>

Divide numerator by denominator, rounding toward positive
infinity. Returns an error on overflow or when denominator is
zero.

```zig
pub fn divCeil(comptime T: type, numerator: T, denominator: T) !T {
    @setRuntimeSafety(false);
    if (denominator == 0) return error.DivisionByZero;
    const info = @typeInfo(T);
    switch (info) {
        .comptime_float, .float => return @ceil(numerator / denominator),
        .comptime_int, .int => {
            if (numerator < 0 and denominator < 0) {
                if (info == .int and numerator == minInt(T) and denominator == -1)
                    return error.Overflow;
                return @divFloor(numerator + 1, denominator) + 1;
            }
            if (numerator > 0 and denominator > 0)
                return @divFloor(numerator - 1, denominator) + 1;
            return @divTrunc(numerator, denominator);
        },
        else => @compileError("divCeil unsupported on " ++ @typeName(T)),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `numerator` | `T` | – | – |
| `denominator` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-divexact"></a>`divExact`

<details class="declaration-card" open>
<summary>Function – Divide numerator by denominator</summary>

Divide numerator by denominator. Return an error if quotient is
not an integer, denominator is zero, or on overflow.

```zig
pub fn divExact(comptime T: type, numerator: T, denominator: T) !T {
    @setRuntimeSafety(false);
    if (denominator == 0) return error.DivisionByZero;
    if (@typeInfo(T) == .int and @typeInfo(T).int.signedness == .signed and numerator == minInt(T) and denominator == -1) return error.Overflow;
    const result = @divTrunc(numerator, denominator);
    if (result * denominator != numerator) return error.UnexpectedRemainder;
    return result;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `numerator` | `T` | – | – |
| `denominator` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-mod"></a>`mod`

<details class="declaration-card" open>
<summary>Function – Returns numerator modulo denominator, or an error if denominator is</summary>

Returns numerator modulo denominator, or an error if denominator is
zero or negative. Negative numerators never result in negative
return values.

```zig
pub fn mod(comptime T: type, numerator: T, denominator: T) !T {
    @setRuntimeSafety(false);
    if (denominator == 0) return error.DivisionByZero;
    if (denominator < 0) return error.NegativeDenominator;
    return @mod(numerator, denominator);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `numerator` | `T` | – | – |
| `denominator` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-rem"></a>`rem`

<details class="declaration-card" open>
<summary>Function – Returns the remainder when numerator is divided by denominator, or</summary>

Returns the remainder when numerator is divided by denominator, or
an error if denominator is zero or negative. Negative numerators
can give negative results.

```zig
pub fn rem(comptime T: type, numerator: T, denominator: T) !T {
    @setRuntimeSafety(false);
    if (denominator == 0) return error.DivisionByZero;
    if (denominator < 0) return error.NegativeDenominator;
    return @rem(numerator, denominator);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `numerator` | `T` | – | – |
| `denominator` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-negatecast"></a>`negateCast`

<details class="declaration-card" open>
<summary>Function – Returns the negation of the integer parameter</summary>

Returns the negation of the integer parameter.
Result is a signed integer.

```zig
pub fn negateCast(x: anytype) !std.meta.Int(.signed, @bitSizeOf(@TypeOf(x))) {
    if (@typeInfo(@TypeOf(x)).int.signedness == .signed) return negate(x);

    const int = std.meta.Int(.signed, @bitSizeOf(@TypeOf(x)));
    if (x > -minInt(int)) return error.Overflow;

    if (x == -minInt(int)) return minInt(int);

    return -@as(int, @intCast(x));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `x` | `` | – | – |
| Return | `std.meta.Int(.signed, @bitSizeOf(@TypeOf(x)))` | – | – |

</details>

---

### <a id="fn-cast"></a>`cast`

<details class="declaration-card" open>
<summary>Function – Cast an integer to a different integer type</summary>

Cast an integer to a different integer type. If the value doesn't fit,
return null.

```zig
pub fn cast(comptime T: type, x: anytype) ?T {
    comptime assert(@typeInfo(T) == .int); // must pass an integer
    const is_comptime = @TypeOf(x) == comptime_int;
    comptime assert(is_comptime or @typeInfo(@TypeOf(x)) == .int); // must pass an integer
    if ((is_comptime or maxInt(@TypeOf(x)) > maxInt(T)) and x > maxInt(T)) {
        return null;
    } else if ((is_comptime or minInt(@TypeOf(x)) < minInt(T)) and x < minInt(T)) {
        return null;
    } else {
        return @as(T, @intCast(x));
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `` | – | – |
| Return | `?T` | – | – |

</details>

---

### <a id="fn-aligncast"></a>`alignCast`

<details class="declaration-card" open>
<summary>Function – Align cast a pointer but return an error if it&#39;s the wrong alignment</summary>

Align cast a pointer but return an error if it's the wrong alignment

```zig
pub fn alignCast(comptime alignment: Alignment, ptr: anytype) AlignCastError!AlignCastResult(alignment, @TypeOf(ptr)) {
    if (alignment.check(@intFromPtr(ptr))) return @alignCast(ptr);
    return error.UnalignedMemory;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `alignment` | `Alignment` | – | – |
| `ptr` | `` | – | – |
| Return | [`AlignCastError!AlignCastResult(alignment, @TypeOf(ptr))`](#error-aligncasterror) | – | – |

</details>

---

### <a id="fn-ispoweroftwo"></a>`isPowerOfTwo`

<details class="declaration-card" open>
<summary>Function – Asserts `int &gt; 0`</summary>

Asserts `int > 0`.

```zig
pub fn isPowerOfTwo(int: anytype) bool {
    assert(int > 0);
    return (int & (int - 1)) == 0;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `int` | `` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-bytealignedint"></a>`ByteAlignedInt`

<details class="declaration-card" open>
<summary>Function – Aligns the given integer type bit width to a width divisible by 8</summary>

Aligns the given integer type bit width to a width divisible by 8.

```zig
pub fn ByteAlignedInt(comptime T: type) type {
    const info = @typeInfo(T).int;
    const bits = (info.bits + 7) / 8 * 8;
    const extended_type = std.meta.Int(info.signedness, bits);
    return extended_type;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-round"></a>`round`

<details class="declaration-card" open>
<summary>Function – Rounds the given floating point number to the nearest integer</summary>

Rounds the given floating point number to the nearest integer.
If two integers are equally close, rounds away from zero.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @round

```zig
pub inline fn round(value: anytype) @TypeOf(value) {
    return @round(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-trunc"></a>`trunc`

<details class="declaration-card" open>
<summary>Function – Rounds the given floating point number to an integer, towards zero</summary>

Rounds the given floating point number to an integer, towards zero.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @trunc

```zig
pub inline fn trunc(value: anytype) @TypeOf(value) {
    return @trunc(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-floor"></a>`floor`

<details class="declaration-card" open>
<summary>Function – Returns the largest integral value not greater than the given floating point number</summary>

Returns the largest integral value not greater than the given floating point number.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @floor

```zig
pub inline fn floor(value: anytype) @TypeOf(value) {
    return @floor(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-floorpoweroftwo"></a>`floorPowerOfTwo`

<details class="declaration-card" open>
<summary>Function – Returns the nearest power of two less than or equal to value, or</summary>

Returns the nearest power of two less than or equal to value, or
zero if value is less than or equal to zero.

```zig
pub fn floorPowerOfTwo(comptime T: type, value: T) T {
    const uT = std.meta.Int(.unsigned, @typeInfo(T).int.bits);
    if (value <= 0) return 0;
    return @as(T, 1) << log2_int(uT, @as(uT, @intCast(value)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `value` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-ceil"></a>`ceil`

<details class="declaration-card" open>
<summary>Function – Returns the smallest integral value not less than the given floating point number</summary>

Returns the smallest integral value not less than the given floating point number.
Uses a dedicated hardware instruction when available.
This is the same as calling the builtin @ceil

```zig
pub inline fn ceil(value: anytype) @TypeOf(value) {
    return @ceil(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `@TypeOf(value)` | – | – |

</details>

---

### <a id="fn-ceilpoweroftwopromote"></a>`ceilPowerOfTwoPromote`

<details class="declaration-card" open>
<summary>Function – Returns the next power of two (if the value is not already a power of two)</summary>

Returns the next power of two (if the value is not already a power of two).
Only unsigned integers can be used. Zero is not an allowed input.
Result is a type with 1 more bit than the input type.

```zig
pub fn ceilPowerOfTwoPromote(comptime T: type, value: T) std.meta.Int(@typeInfo(T).int.signedness, @typeInfo(T).int.bits + 1) {
    comptime assert(@typeInfo(T) == .int);
    comptime assert(@typeInfo(T).int.signedness == .unsigned);
    assert(value != 0);
    const PromotedType = std.meta.Int(@typeInfo(T).int.signedness, @typeInfo(T).int.bits + 1);
    const ShiftType = std.math.Log2Int(PromotedType);
    return @as(PromotedType, 1) << @as(ShiftType, @intCast(@typeInfo(T).int.bits - @clz(value - 1)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `value` | `T` | – | – |
| Return | See note[^fn-ceilpoweroftwopromote-return-0] | – | – |


[^fn-ceilpoweroftwopromote-return-0]:
    Return type for `ceilPowerOfTwoPromote`:

    ```zig
    std.meta.Int(@typeInfo(T).int.signedness, @typeInfo(T).int.bits + 1)
    ```

</details>

---

### <a id="fn-ceilpoweroftwo"></a>`ceilPowerOfTwo`

<details class="declaration-card" open>
<summary>Function – Returns the next power of two (if the value is not already a power of two)</summary>

Returns the next power of two (if the value is not already a power of two).
Only unsigned integers can be used. Zero is not an allowed input.
If the value doesn't fit, returns an error.

```zig
pub fn ceilPowerOfTwo(comptime T: type, value: T) (error{Overflow}!T) {
    comptime assert(@typeInfo(T) == .int);
    const info = @typeInfo(T).int;
    comptime assert(info.signedness == .unsigned);
    const PromotedType = std.meta.Int(info.signedness, info.bits + 1);
    const overflowBit = @as(PromotedType, 1) << info.bits;
    const x = ceilPowerOfTwoPromote(T, value);
    if (overflowBit & x != 0) {
        return error.Overflow;
    }
    return @as(T, @intCast(x));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `value` | `T` | – | – |
| Return | `(error{Overflow}!T)` | – | – |

**Possible Errors:**

- `error.Overflow`

</details>

---

### <a id="fn-ceilpoweroftwoassert"></a>`ceilPowerOfTwoAssert`

<details class="declaration-card" open>
<summary>Function – Returns the next power of two (if the value is not already a power</summary>

Returns the next power of two (if the value is not already a power
of two). Only unsigned integers can be used. Zero is not an
allowed input. Asserts that the value fits.

```zig
pub fn ceilPowerOfTwoAssert(comptime T: type, value: T) T {
    return ceilPowerOfTwo(T, value) catch unreachable;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `value` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-log2-int"></a>`log2_int`

<details class="declaration-card" open>
<summary>Function – Return the log base 2 of integer value x, rounding down to the</summary>

Return the log base 2 of integer value x, rounding down to the
nearest integer.

```zig
pub fn log2_int(comptime T: type, x: T) Log2Int(T) {
    if (@typeInfo(T) != .int or @typeInfo(T).int.signedness != .unsigned)
        @compileError("log2_int requires an unsigned integer, found " ++ @typeName(T));
    assert(x != 0);
    return @as(Log2Int(T), @intCast(@typeInfo(T).int.bits - 1 - @clz(x)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| Return | `Log2Int(T)` | – | – |

</details>

---

### <a id="fn-log2-int-ceil"></a>`log2_int_ceil`

<details class="declaration-card" open>
<summary>Function – Return the log base 2 of integer value x, rounding up to the</summary>

Return the log base 2 of integer value x, rounding up to the
nearest integer.

```zig
pub fn log2_int_ceil(comptime T: type, x: T) Log2IntCeil(T) {
    if (@typeInfo(T) != .int or @typeInfo(T).int.signedness != .unsigned)
        @compileError("log2_int_ceil requires an unsigned integer, found " ++ @typeName(T));
    assert(x != 0);
    if (x == 1) return 0;
    const log2_val: Log2IntCeil(T) = log2_int(T, x - 1);
    return log2_val + 1;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| Return | `Log2IntCeil(T)` | – | – |

</details>

---

### <a id="fn-lossycast"></a>`lossyCast`

<details class="declaration-card" open>
<summary>Function – Cast a value to a different type</summary>

Cast a value to a different type. If the value doesn't fit in, or
can't be perfectly represented by, the new type, it will be
converted to the closest possible representation.

```zig
pub fn lossyCast(comptime T: type, value: anytype) T {
    switch (@typeInfo(T)) {
        .float => {
            switch (@typeInfo(@TypeOf(value))) {
                .int => return @floatFromInt(value),
                .float => return @floatCast(value),
                .comptime_int => return value,
                .comptime_float => return value,
                else => @compileError("bad type"),
            }
        },
        .int => {
            switch (@typeInfo(@TypeOf(value))) {
                .int, .comptime_int => {
                    if (value >= maxInt(T)) {
                        return maxInt(T);
                    } else if (value <= minInt(T)) {
                        return minInt(T);
                    } else {
                        return @intCast(value);
                    }
                },
                .float, .comptime_float => {
                    // In extreme cases, we probably need a language enhancement to be able to
                    // specify a rounding mode here to prevent `@intFromFloat` panics.
                    const max: @TypeOf(value) = @floatFromInt(maxInt(T));
                    const min: @TypeOf(value) = @floatFromInt(minInt(T));
                    if (isNan(value)) {
                        return 0;
                    } else if (value >= max) {
                        return maxInt(T);
                    } else if (value <= min) {
                        return minInt(T);
                    } else {
                        return @intFromFloat(value);
                    }
                },
                else => @compileError("bad type"),
            }
        },
        else => @compileError("bad result type"),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `value` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-lerp"></a>`lerp`

<details class="declaration-card" open>
<summary>Function – Performs linear interpolation between *a* and *b* based on *t*</summary>

Performs linear interpolation between *a* and *b* based on *t*.
*t* ranges from 0.0 to 1.0, but may exceed these bounds.
Supports floats and vectors of floats.

This does not guarantee returning *b* if *t* is 1 due to floating-point errors.
This is monotonic.

```zig
pub fn lerp(a: anytype, b: anytype, t: anytype) @TypeOf(a, b, t) {
    const Type = @TypeOf(a, b, t);
    return @mulAdd(Type, b - a, t, a);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `` | – | – |
| `b` | `` | – | – |
| `t` | `` | – | – |
| Return | `@TypeOf(a, b, t)` | – | – |

</details>

---

### <a id="fn-maxint"></a>`maxInt`

<details class="declaration-card" open>
<summary>Function – Returns the maximum value of integer type T</summary>

Returns the maximum value of integer type T.

```zig
pub fn maxInt(comptime T: type) comptime_int {
    const info = @typeInfo(T);
    const bit_count = info.int.bits;
    if (bit_count == 0) return 0;
    return (1 << (bit_count - @intFromBool(info.int.signedness == .signed))) - 1;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `comptime_int` | – | – |

</details>

---

### <a id="fn-minint"></a>`minInt`

<details class="declaration-card" open>
<summary>Function – Returns the minimum value of integer type T</summary>

Returns the minimum value of integer type T.

```zig
pub fn minInt(comptime T: type) comptime_int {
    const info = @typeInfo(T);
    const bit_count = info.int.bits;
    if (info.int.signedness == .unsigned) return 0;
    if (bit_count == 0) return 0;
    return -(1 << (bit_count - 1));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `comptime_int` | – | – |

</details>

---

### <a id="fn-mulwide"></a>`mulWide`

<details class="declaration-card" open>
<summary>Function – Multiply a and b</summary>

Multiply a and b. Return type is wide enough to guarantee no
overflow.

```zig
pub fn mulWide(comptime T: type, a: T, b: T) std.meta.Int(
    @typeInfo(T).int.signedness,
    @typeInfo(T).int.bits * 2,
) {
    const ResultInt = std.meta.Int(
        @typeInfo(T).int.signedness,
        @typeInfo(T).int.bits * 2,
    );
    return @as(ResultInt, a) * @as(ResultInt, b);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `T` | – | – |
| `b` | `T` | – | – |
| Return | See note[^fn-mulwide-return-0] | – | – |


[^fn-mulwide-return-0]:
    Return type for `mulWide`:

    ```zig
    std.meta.Int(
        @typeInfo(T).int.signedness,
        @typeInfo(T).int.bits * 2,
    )
    ```

</details>

---

### <a id="fn-order"></a>`order`

<details class="declaration-card" open>
<summary>Function – Given two numbers, this function returns the order they are with respect to each other</summary>

Given two numbers, this function returns the order they are with respect to each other.

```zig
pub fn order(a: anytype, b: anytype) Order {
    if (a == b) {
        return .eq;
    } else if (a < b) {
        return .lt;
    } else if (a > b) {
        return .gt;
    } else {
        unreachable;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `` | – | – |
| `b` | `` | – | – |
| Return | [`Order`](#fn-order) | – | – |

</details>

---

### <a id="fn-compare"></a>`compare`

<details class="declaration-card" open>
<summary>Function – This function does the same thing as comparison operators, however the</summary>

This function does the same thing as comparison operators, however the
operator is a runtime-known enum value. Works on any operands that
support comparison operators.

```zig
pub fn compare(a: anytype, op: CompareOperator, b: anytype) bool {
    return switch (op) {
        .lt => a < b,
        .lte => a <= b,
        .eq => a == b,
        .neq => a != b,
        .gt => a > b,
        .gte => a >= b,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `` | – | – |
| `op` | [`CompareOperator`](#type-compareoperator) | – | – |
| `b` | `` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-boolmask"></a>`boolMask`

<details class="declaration-card" open>
<summary>Function – Returns a mask of all ones if value is true,</summary>

Returns a mask of all ones if value is true,
and a mask of all zeroes if value is false.
Compiles to one instruction for register sized integers.

```zig
pub inline fn boolMask(comptime MaskInt: type, value: bool) MaskInt {
    if (@typeInfo(MaskInt) != .int)
        @compileError("boolMask requires an integer mask type.");

    if (MaskInt == u0 or MaskInt == i0)
        @compileError("boolMask cannot convert to u0 or i0, they are too small.");

    // The u1 and i1 cases tend to overflow,
    // so we special case them here.
    if (MaskInt == u1) return @intFromBool(value);
    if (MaskInt == i1) {
        // The @as here is a workaround for #7950
        return @as(i1, @bitCast(@as(u1, @intFromBool(value))));
    }

    return -%@as(MaskInt, @intCast(@intFromBool(value)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `MaskInt` | `type` | – | – |
| `value` | `bool` | – | – |
| Return | `MaskInt` | – | – |

</details>

---

### <a id="fn-comptimemod"></a>`comptimeMod`

<details class="declaration-card" open>
<summary>Function – Return the mod of `num` with the smallest integer type</summary>

Return the mod of `num` with the smallest integer type

```zig
pub fn comptimeMod(num: anytype, comptime denom: comptime_int) IntFittingRange(0, denom - 1) {
    return @as(IntFittingRange(0, denom - 1), @intCast(@mod(num, denom)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `num` | `` | – | – |
| `denom` | `comptime_int` | – | – |
| Return | `IntFittingRange(0, denom - 1)` | – | – |

</details>

---

### <a id="fn-sign"></a>`sign`

<details class="declaration-card" open>
<summary>Function – Returns -1, 0, or 1</summary>

Returns -1, 0, or 1.
Supports integer and float types and vectors of integer and float types.
Unsigned integer types will always return 0 or 1.
Branchless.

```zig
pub inline fn sign(i: anytype) @TypeOf(i) {
    const T = @TypeOf(i);
    return switch (@typeInfo(T)) {
        .int, .comptime_int => @as(T, @intFromBool(i > 0)) - @as(T, @intFromBool(i < 0)),
        .float, .comptime_float => @as(T, @floatFromInt(@intFromBool(i > 0))) - @as(T, @floatFromInt(@intFromBool(i < 0))),
        .vector => |vinfo| blk: {
            switch (@typeInfo(vinfo.child)) {
                .int, .float => {
                    const zero: T = @splat(0);
                    const one: T = @splat(1);
                    break :blk @select(vinfo.child, i > zero, one, zero) - @select(vinfo.child, i < zero, one, zero);
                },
                else => @compileError("Expected vector of ints or floats, found " ++ @typeName(T)),
            }
        },
        else => @compileError("Expected an int, float or vector of one, found " ++ @typeName(T)),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `i` | `` | – | – |
| Return | `@TypeOf(i)` | – | – |

</details>

---

## Error Sets (1)

### <a id="error-aligncasterror"></a>`AlignCastError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const AlignCastError = error{UnalignedMemory}
```

**Errors:**

- `error.UnalignedMemory`

</details>

---


