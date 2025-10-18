---
title: "std.simd"
description: "Comprehensive reference for Zig's std.simd module covering algorithms, numerics, and performance primitives."
navigation:
  title: "Simd"
  icon: i-lucide-function-square
  badge: "Algorithms"
badge: "Algorithms"
category: "algorithms"
tags:
  - "zig"
  - "standard-library"
  - "algorithms"
source: "std/simd.md"
githubPath: "std/simd.md"
lastUpdated: "2025-10-18T12:44:21.946Z"
seo:
  title: "std.simd · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.simd module covering algorithms, numerics, and performance primitives."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/simd.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.simd` |
| Declarations | 24 |
| Breakdown | 24 functions |
| Generated (unix epoch) | 1760148110 |

## Overview

SIMD (Single Instruction; Multiple Data) convenience functions.

May offer a potential boost in performance on some targets by performing
the same operation on multiple elements at once.

Some functions are known to not work on MIPS.

---

## Table of Contents

- [Functions](#functions)
  - [`suggestVectorLengthForCpu`](#fn-suggestvectorlengthforcpu)
  - [`suggestVectorLength`](#fn-suggestvectorlength)
  - [`VectorIndex`](#fn-vectorindex)
  - [`VectorCount`](#fn-vectorcount)
  - [`iota`](#fn-iota)
  - [`repeat`](#fn-repeat)
  - [`join`](#fn-join)
  - [`interlace`](#fn-interlace)
  - [`deinterlace`](#fn-deinterlace)
  - [`extract`](#fn-extract)
  - [`mergeShift`](#fn-mergeshift)
  - [`shiftElementsRight`](#fn-shiftelementsright)
  - [`shiftElementsLeft`](#fn-shiftelementsleft)
  - [`rotateElementsLeft`](#fn-rotateelementsleft)
  - [`rotateElementsRight`](#fn-rotateelementsright)
  - [`reverseOrder`](#fn-reverseorder)
  - [`firstTrue`](#fn-firsttrue)
  - [`lastTrue`](#fn-lasttrue)
  - [`countTrues`](#fn-counttrues)
  - [`firstIndexOfValue`](#fn-firstindexofvalue)
  - [`lastIndexOfValue`](#fn-lastindexofvalue)
  - [`countElementsWithValue`](#fn-countelementswithvalue)
  - [`prefixScanWithFunc`](#fn-prefixscanwithfunc)
  - [`prefixScan`](#fn-prefixscan)

---

## Functions (24)

### <a id="fn-suggestvectorlengthforcpu"></a>`suggestVectorLengthForCpu`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn suggestVectorLengthForCpu(comptime T: type, comptime cpu: std.Target.Cpu) ?comptime_int {
    @setEvalBranchQuota(2_000);

    // This is guesswork, if you have better suggestions can add it or edit the current here
    const element_bit_size = @max(8, std.math.ceilPowerOfTwo(u16, @bitSizeOf(T)) catch unreachable);
    const vector_bit_size: u16 = blk: {
        if (cpu.arch.isX86()) {
            if (T == bool and cpu.has(.x86, .prefer_mask_registers)) return 64;
            if (builtin.zig_backend != .stage2_x86_64 and cpu.has(.x86, .avx512f) and !cpu.hasAny(.x86, &.{ .prefer_256_bit, .prefer_128_bit })) break :blk 512;
            if (cpu.hasAny(.x86, &.{ .prefer_256_bit, .avx2 }) and !cpu.has(.x86, .prefer_128_bit)) break :blk 256;
            if (cpu.has(.x86, .sse)) break :blk 128;
            if (cpu.hasAny(.x86, &.{ .mmx, .@"3dnow" })) break :blk 64;
        } else if (cpu.arch.isArm()) {
            if (cpu.has(.arm, .neon)) break :blk 128;
        } else if (cpu.arch.isAARCH64()) {
            // SVE allows up to 2048 bits in the specification, as of 2022 the most powerful machine has implemented 512-bit
            // I think is safer to just be on 128 until is more common
            // TODO: Check on this return when bigger values are more common
            if (cpu.has(.aarch64, .sve)) break :blk 128;
            if (cpu.has(.aarch64, .neon)) break :blk 128;
        } else if (cpu.arch.isPowerPC()) {
            if (cpu.has(.powerpc, .altivec)) break :blk 128;
        } else if (cpu.arch.isMIPS()) {
            if (cpu.has(.mips, .msa)) break :blk 128;
            // TODO: Test MIPS capability to handle bigger vectors
            //       In theory MDMX and by extension mips3d have 32 registers of 64 bits which can use in parallel
            //       for multiple processing, but I don't know what's optimal here, if using
            //       the 2048 bits or using just 64 per vector or something in between
            if (cpu.has(.mips, .mips3d)) break :blk 64;
        } else if (cpu.arch.isRISCV()) {
            // In RISC-V Vector Registers are length agnostic so there's no good way to determine the best size.
            // The usual vector length in most RISC-V cpus is 256 bits, however it can get to multiple kB.
            if (cpu.has(.riscv, .v)) {
                inline for (.{
                    .{ .zvl65536b, 65536 },
                    .{ .zvl32768b, 32768 },
                    .{ .zvl16384b, 16384 },
                    .{ .zvl8192b, 8192 },
                    .{ .zvl4096b, 4096 },
                    .{ .zvl2048b, 2048 },
                    .{ .zvl1024b, 1024 },
                    .{ .zvl512b, 512 },
                    .{ .zvl256b, 256 },
                    .{ .zvl128b, 128 },
                    .{ .zvl64b, 64 },
                    .{ .zvl32b, 32 },
                }) |mapping| {
                    if (cpu.has(.riscv, mapping[0])) break :blk mapping[1];
                }

                break :blk 256;
            }
        } else if (cpu.arch.isSPARC()) {
            // TODO: Test Sparc capability to handle bigger vectors
            //       In theory Sparc have 32 registers of 64 bits which can use in parallel
            //       for multiple processing, but I don't know what's optimal here, if using
            //       the 2048 bits or using just 64 per vector or something in between
            if (cpu.hasAny(.sparc, &.{ .vis, .vis2, .vis3 })) break :blk 64;
        } else if (cpu.arch.isWasm()) {
            if (cpu.has(.wasm, .simd128)) break :blk 128;
        }
        return null;
    };
    if (vector_bit_size <= element_bit_size) return null;

    return @divExact(vector_bit_size, element_bit_size);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `cpu` | `std.Target.Cpu` | – | – |
| Return | `?comptime_int` | – | – |

</details>

---

### <a id="fn-suggestvectorlength"></a>`suggestVectorLength`

<details class="declaration-card" open>
<summary>Function – Suggests a target-dependant vector length for a given type, or null if scalars are recommended</summary>

Suggests a target-dependant vector length for a given type, or null if scalars are recommended.
Not yet implemented for every CPU architecture.

```zig
pub fn suggestVectorLength(comptime T: type) ?comptime_int {
    return suggestVectorLengthForCpu(T, builtin.cpu);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `?comptime_int` | – | – |

</details>

---

### <a id="fn-vectorindex"></a>`VectorIndex`

<details class="declaration-card" open>
<summary>Function – Returns the smallest type of unsigned ints capable of indexing any element within the given vector type</summary>

Returns the smallest type of unsigned ints capable of indexing any element within the given vector type.

```zig
pub fn VectorIndex(comptime VectorType: type) type {
    return std.math.IntFittingRange(0, vectorLength(VectorType) - 1);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `VectorType` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-vectorcount"></a>`VectorCount`

<details class="declaration-card" open>
<summary>Function – Returns the smallest type of unsigned ints capable of holding the length of the given vector type</summary>

Returns the smallest type of unsigned ints capable of holding the length of the given vector type.

```zig
pub fn VectorCount(comptime VectorType: type) type {
    return std.math.IntFittingRange(0, vectorLength(VectorType));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `VectorType` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-iota"></a>`iota`

<details class="declaration-card" open>
<summary>Function – Returns a vector containing the first `len` integers in order from 0 to `len`-1</summary>

Returns a vector containing the first `len` integers in order from 0 to `len`-1.
For example, `iota(i32, 8)` will return a vector containing `.{0, 1, 2, 3, 4, 5, 6, 7}`.

```zig
pub inline fn iota(comptime T: type, comptime len: usize) @Vector(len, T) {
    comptime {
        var out: [len]T = undefined;
        for (&out, 0..) |*element, i| {
            element.* = switch (@typeInfo(T)) {
                .int => @as(T, @intCast(i)),
                .float => @as(T, @floatFromInt(i)),
                else => @compileError("Can't use type " ++ @typeName(T) ++ " in iota."),
            };
        }
        return @as(@Vector(len, T), out);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `len` | `usize` | – | – |
| Return | `@Vector(len, T)` | – | – |

</details>

---

### <a id="fn-repeat"></a>`repeat`

<details class="declaration-card" open>
<summary>Function – Returns a vector containing the same elements as the input, but repeated until the desired length is reached</summary>

Returns a vector containing the same elements as the input, but repeated until the desired length is reached.
For example, `repeat(8, [_]u32{1, 2, 3})` will return a vector containing `.{1, 2, 3, 1, 2, 3, 1, 2}`.

```zig
pub fn repeat(comptime len: usize, vec: anytype) @Vector(len, std.meta.Child(@TypeOf(vec))) {
    const Child = std.meta.Child(@TypeOf(vec));

    return @shuffle(Child, vec, undefined, iota(i32, len) % @as(@Vector(len, i32), @splat(@intCast(vectorLength(@TypeOf(vec))))));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `len` | `usize` | – | – |
| `vec` | `` | – | – |
| Return | `@Vector(len, std.meta.Child(@TypeOf(vec)))` | – | – |

</details>

---

### <a id="fn-join"></a>`join`

<details class="declaration-card" open>
<summary>Function – Returns a vector containing all elements of the first vector at the lower indices followed by all elements of the second vector</summary>

Returns a vector containing all elements of the first vector at the lower indices followed by all elements of the second vector
at the higher indices.

```zig
pub fn join(a: anytype, b: anytype) @Vector(vectorLength(@TypeOf(a)) + vectorLength(@TypeOf(b)), std.meta.Child(@TypeOf(a))) {
    const Child = std.meta.Child(@TypeOf(a));
    const a_len = vectorLength(@TypeOf(a));
    const b_len = vectorLength(@TypeOf(b));

    return @shuffle(Child, a, b, @as([a_len]i32, iota(i32, a_len)) ++ @as([b_len]i32, ~iota(i32, b_len)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `` | – | – |
| `b` | `` | – | – |
| Return | See note[^fn-join-return-0] | – | – |


[^fn-join-return-0]:
    Return type for `join`:

    ```zig
    @Vector(vectorLength(@TypeOf(a)) + vectorLength(@TypeOf(b)), std.meta.Child(@TypeOf(a)))
    ```

</details>

---

### <a id="fn-interlace"></a>`interlace`

<details class="declaration-card" open>
<summary>Function – Returns a vector whose elements alternates between those of each input vector</summary>

Returns a vector whose elements alternates between those of each input vector.
For example, `interlace(.{[4]u32{11, 12, 13, 14}, [4]u32{21, 22, 23, 24}})` returns a vector containing `.{11, 21, 12, 22, 13, 23, 14, 24}`.

```zig
pub fn interlace(vecs: anytype) @Vector(vectorLength(@TypeOf(vecs[0])) * vecs.len, std.meta.Child(@TypeOf(vecs[0]))) {
    // interlace doesn't work on MIPS, for some reason.
    // Notes from earlier debug attempt:
    //  The indices are correct. The problem seems to be with the @shuffle builtin.
    //  On MIPS, the test that interlaces small_base gives { 0, 2, 0, 0, 64, 255, 248, 200, 0, 0 }.
    //  Calling this with two inputs seems to work fine, but I'll let the compile error trigger for all inputs, just to be safe.
    if (builtin.cpu.arch.isMIPS()) @compileError("TODO: Find out why interlace() doesn't work on MIPS");

    const VecType = @TypeOf(vecs[0]);
    const vecs_arr = @as([vecs.len]VecType, vecs);
    const Child = std.meta.Child(@TypeOf(vecs_arr[0]));

    if (vecs_arr.len == 1) return vecs_arr[0];

    const a_vec_count = (1 + vecs_arr.len) >> 1;
    const b_vec_count = vecs_arr.len >> 1;

    const a = interlace(@as(*const [a_vec_count]VecType, @ptrCast(vecs_arr[0..a_vec_count])).*);
    const b = interlace(@as(*const [b_vec_count]VecType, @ptrCast(vecs_arr[a_vec_count..])).*);

    const a_len = vectorLength(@TypeOf(a));
    const b_len = vectorLength(@TypeOf(b));
    const len = a_len + b_len;

    const indices = comptime blk: {
        const Vi32 = @Vector(len, i32);
        const count_up = iota(i32, len);
        const cycle = @divFloor(count_up, @as(Vi32, @splat(@intCast(vecs_arr.len))));
        const select_mask = repeat(len, join(@as(@Vector(a_vec_count, bool), @splat(true)), @as(@Vector(b_vec_count, bool), @splat(false))));
        const a_indices = count_up - cycle * @as(Vi32, @splat(@intCast(b_vec_count)));
        const b_indices = shiftElementsRight(count_up - cycle * @as(Vi32, @splat(@intCast(a_vec_count))), a_vec_count, 0);
        break :blk @select(i32, select_mask, a_indices, ~b_indices);
    };

    return @shuffle(Child, a, b, indices);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vecs` | `` | – | – |
| Return | See note[^fn-interlace-return-0] | – | – |


[^fn-interlace-return-0]:
    Return type for `interlace`:

    ```zig
    @Vector(vectorLength(@TypeOf(vecs[0])) * vecs.len, std.meta.Child(@TypeOf(vecs[0])))
    ```

</details>

---

### <a id="fn-deinterlace"></a>`deinterlace`

<details class="declaration-card" open>
<summary>Function – The contents of `interlaced` is evenly split between vec_count vectors that are returned as an array</summary>

The contents of `interlaced` is evenly split between vec_count vectors that are returned as an array. They "take turns",
receiving one element from `interlaced` at a time.

```zig
pub fn deinterlace(
    comptime vec_count: usize,
    interlaced: anytype,
) [vec_count]@Vector(
    vectorLength(@TypeOf(interlaced)) / vec_count,
    std.meta.Child(@TypeOf(interlaced)),
) {
    const vec_len = vectorLength(@TypeOf(interlaced)) / vec_count;
    const Child = std.meta.Child(@TypeOf(interlaced));

    var out: [vec_count]@Vector(vec_len, Child) = undefined;

    comptime var i: usize = 0; // for-loops don't work for this, apparently.
    inline while (i < out.len) : (i += 1) {
        const indices = comptime iota(i32, vec_len) * @as(@Vector(vec_len, i32), @splat(@intCast(vec_count))) + @as(@Vector(vec_len, i32), @splat(@intCast(i)));
        out[i] = @shuffle(Child, interlaced, undefined, indices);
    }

    return out;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec\_count` | `usize` | – | – |
| `interlaced` | `` | – | – |
| Return | See note[^fn-deinterlace-return-0] | – | – |


[^fn-deinterlace-return-0]:
    Return type for `deinterlace`:

    ```zig
    [vec_count]@Vector(
        vectorLength(@TypeOf(interlaced)) / vec_count,
        std.meta.Child(@TypeOf(interlaced)),
    )
    ```

</details>

---

### <a id="fn-extract"></a>`extract`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn extract(
    vec: anytype,
    comptime first: VectorIndex(@TypeOf(vec)),
    comptime count: VectorCount(@TypeOf(vec)),
) @Vector(count, std.meta.Child(@TypeOf(vec))) {
    const Child = std.meta.Child(@TypeOf(vec));
    const len = vectorLength(@TypeOf(vec));

    std.debug.assert(@as(comptime_int, @intCast(first)) + @as(comptime_int, @intCast(count)) <= len);

    return @shuffle(Child, vec, undefined, iota(i32, count) + @as(@Vector(count, i32), @splat(@intCast(first))));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| `first` | `VectorIndex(@TypeOf(vec))` | – | – |
| `count` | `VectorCount(@TypeOf(vec))` | – | – |
| Return | `@Vector(count, std.meta.Child(@TypeOf(vec)))` | – | – |

</details>

---

### <a id="fn-mergeshift"></a>`mergeShift`

<details class="declaration-card" open>
<summary>Function – Joins two vectors, shifts them leftwards (towards lower indices) and extracts the leftmost elements into a vector the length of a and b</summary>

Joins two vectors, shifts them leftwards (towards lower indices) and extracts the leftmost elements into a vector the length of a and b.

```zig
pub fn mergeShift(a: anytype, b: anytype, comptime shift: VectorCount(@TypeOf(a, b))) @TypeOf(a, b) {
    const len = vectorLength(@TypeOf(a, b));

    return extract(join(a, b), shift, len);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `` | – | – |
| `b` | `` | – | – |
| `shift` | `VectorCount(@TypeOf(a, b))` | – | – |
| Return | `@TypeOf(a, b)` | – | – |

</details>

---

### <a id="fn-shiftelementsright"></a>`shiftElementsRight`

<details class="declaration-card" open>
<summary>Function – Elements are shifted rightwards (towards higher indices)</summary>

Elements are shifted rightwards (towards higher indices). New elements are added to the left, and the rightmost elements are cut off
so that the length of the vector stays the same.

```zig
pub fn shiftElementsRight(vec: anytype, comptime amount: VectorCount(@TypeOf(vec)), shift_in: std.meta.Child(@TypeOf(vec))) @TypeOf(vec) {
    // It may be possible to implement shifts and rotates with a runtime-friendly slice of two joined vectors, as the length of the
    // slice would be comptime-known. This would permit vector shifts and rotates by a non-comptime-known amount.
    // However, I am unsure whether compiler optimizations would handle that well enough on all platforms.
    const V = @TypeOf(vec);
    const len = vectorLength(V);

    return mergeShift(@as(V, @splat(shift_in)), vec, len - amount);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| `amount` | `VectorCount(@TypeOf(vec))` | – | – |
| `shift\_in` | `std.meta.Child(@TypeOf(vec))` | – | – |
| Return | `@TypeOf(vec)` | – | – |

</details>

---

### <a id="fn-shiftelementsleft"></a>`shiftElementsLeft`

<details class="declaration-card" open>
<summary>Function – Elements are shifted leftwards (towards lower indices)</summary>

Elements are shifted leftwards (towards lower indices). New elements are added to the right, and the leftmost elements are cut off
so that no elements with indices below 0 remain.

```zig
pub fn shiftElementsLeft(vec: anytype, comptime amount: VectorCount(@TypeOf(vec)), shift_in: std.meta.Child(@TypeOf(vec))) @TypeOf(vec) {
    const V = @TypeOf(vec);

    return mergeShift(vec, @as(V, @splat(shift_in)), amount);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| `amount` | `VectorCount(@TypeOf(vec))` | – | – |
| `shift\_in` | `std.meta.Child(@TypeOf(vec))` | – | – |
| Return | `@TypeOf(vec)` | – | – |

</details>

---

### <a id="fn-rotateelementsleft"></a>`rotateElementsLeft`

<details class="declaration-card" open>
<summary>Function – Elements are shifted leftwards (towards lower indices)</summary>

Elements are shifted leftwards (towards lower indices). Elements that leave to the left will reappear to the right in the same order.

```zig
pub fn rotateElementsLeft(vec: anytype, comptime amount: VectorCount(@TypeOf(vec))) @TypeOf(vec) {
    return mergeShift(vec, vec, amount);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| `amount` | `VectorCount(@TypeOf(vec))` | – | – |
| Return | `@TypeOf(vec)` | – | – |

</details>

---

### <a id="fn-rotateelementsright"></a>`rotateElementsRight`

<details class="declaration-card" open>
<summary>Function – Elements are shifted rightwards (towards higher indices)</summary>

Elements are shifted rightwards (towards higher indices). Elements that leave to the right will reappear to the left in the same order.

```zig
pub fn rotateElementsRight(vec: anytype, comptime amount: VectorCount(@TypeOf(vec))) @TypeOf(vec) {
    return rotateElementsLeft(vec, vectorLength(@TypeOf(vec)) - amount);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| `amount` | `VectorCount(@TypeOf(vec))` | – | – |
| Return | `@TypeOf(vec)` | – | – |

</details>

---

### <a id="fn-reverseorder"></a>`reverseOrder`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn reverseOrder(vec: anytype) @TypeOf(vec) {
    const Child = std.meta.Child(@TypeOf(vec));
    const len = vectorLength(@TypeOf(vec));

    return @shuffle(Child, vec, undefined, @as(@Vector(len, i32), @splat(@as(i32, @intCast(len)) - 1)) - iota(i32, len));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| Return | `@TypeOf(vec)` | – | – |

</details>

---

### <a id="fn-firsttrue"></a>`firstTrue`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn firstTrue(vec: anytype) ?VectorIndex(@TypeOf(vec)) {
    const len = vectorLength(@TypeOf(vec));
    const IndexInt = VectorIndex(@TypeOf(vec));

    if (!@reduce(.Or, vec)) {
        return null;
    }
    const all_max: @Vector(len, IndexInt) = @splat(~@as(IndexInt, 0));
    const indices = @select(IndexInt, vec, iota(IndexInt, len), all_max);
    return @reduce(.Min, indices);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| Return | `?VectorIndex(@TypeOf(vec))` | – | – |

</details>

---

### <a id="fn-lasttrue"></a>`lastTrue`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn lastTrue(vec: anytype) ?VectorIndex(@TypeOf(vec)) {
    const len = vectorLength(@TypeOf(vec));
    const IndexInt = VectorIndex(@TypeOf(vec));

    if (!@reduce(.Or, vec)) {
        return null;
    }

    const all_zeroes: @Vector(len, IndexInt) = @splat(0);
    const indices = @select(IndexInt, vec, iota(IndexInt, len), all_zeroes);
    return @reduce(.Max, indices);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| Return | `?VectorIndex(@TypeOf(vec))` | – | – |

</details>

---

### <a id="fn-counttrues"></a>`countTrues`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn countTrues(vec: anytype) VectorCount(@TypeOf(vec)) {
    const len = vectorLength(@TypeOf(vec));
    const CountIntType = VectorCount(@TypeOf(vec));

    const all_ones: @Vector(len, CountIntType) = @splat(1);
    const all_zeroes: @Vector(len, CountIntType) = @splat(0);

    const one_if_true = @select(CountIntType, vec, all_ones, all_zeroes);
    return @reduce(.Add, one_if_true);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| Return | `VectorCount(@TypeOf(vec))` | – | – |

</details>

---

### <a id="fn-firstindexofvalue"></a>`firstIndexOfValue`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn firstIndexOfValue(vec: anytype, value: std.meta.Child(@TypeOf(vec))) ?VectorIndex(@TypeOf(vec)) {
    const V = @TypeOf(vec);

    return firstTrue(vec == @as(V, @splat(value)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| `value` | `std.meta.Child(@TypeOf(vec))` | – | – |
| Return | `?VectorIndex(@TypeOf(vec))` | – | – |

</details>

---

### <a id="fn-lastindexofvalue"></a>`lastIndexOfValue`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn lastIndexOfValue(vec: anytype, value: std.meta.Child(@TypeOf(vec))) ?VectorIndex(@TypeOf(vec)) {
    const V = @TypeOf(vec);

    return lastTrue(vec == @as(V, @splat(value)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| `value` | `std.meta.Child(@TypeOf(vec))` | – | – |
| Return | `?VectorIndex(@TypeOf(vec))` | – | – |

</details>

---

### <a id="fn-countelementswithvalue"></a>`countElementsWithValue`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn countElementsWithValue(vec: anytype, value: std.meta.Child(@TypeOf(vec))) VectorCount(@TypeOf(vec)) {
    const V = @TypeOf(vec);

    return countTrues(vec == @as(V, @splat(value)));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `vec` | `` | – | – |
| `value` | `std.meta.Child(@TypeOf(vec))` | – | – |
| Return | `VectorCount(@TypeOf(vec))` | – | – |

</details>

---

### <a id="fn-prefixscanwithfunc"></a>`prefixScanWithFunc`

<details class="declaration-card" open>
<summary>Function – Same as prefixScan, but with a user-provided, mathematically associative function</summary>

Same as prefixScan, but with a user-provided, mathematically associative function.

```zig
pub fn prefixScanWithFunc(
    comptime hop: isize,
    vec: anytype,
    /// The error type that `func` might return. Set this to `void` if `func` doesn't return an error union.
    comptime ErrorType: type,
    comptime func: fn (@TypeOf(vec), @TypeOf(vec)) if (ErrorType == void) @TypeOf(vec) else ErrorType!@TypeOf(vec),
    /// When one operand of the operation performed by `func` is this value, the result must equal the other operand.
    /// For example, this should be 0 for addition or 1 for multiplication.
    comptime identity: std.meta.Child(@TypeOf(vec)),
) if (ErrorType == void) @TypeOf(vec) else ErrorType!@TypeOf(vec) {
    // I haven't debugged this, but it might be a cousin of sorts to what's going on with interlace.
    if (builtin.cpu.arch.isMIPS()) @compileError("TODO: Find out why prefixScan doesn't work on MIPS");

    const len = vectorLength(@TypeOf(vec));

    if (hop == 0) @compileError("hop can not be 0; you'd be going nowhere forever!");
    const abs_hop = if (hop < 0) -hop else hop;

    var acc = vec;
    comptime var i = 0;
    inline while ((abs_hop << i) < len) : (i += 1) {
        const shifted = if (hop < 0) shiftElementsLeft(acc, abs_hop << i, identity) else shiftElementsRight(acc, abs_hop << i, identity);

        acc = if (ErrorType == void) func(acc, shifted) else try func(acc, shifted);
    }
    return acc;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `hop` | `isize` | – | – |
| `vec` | `` | – | – |
| `ErrorType` | `type` | – | – |
| `func` | See note[^fn-prefixscanwithfunc-func-type-0] | – | – |
| `identity` | `std.meta.Child(@TypeOf(vec))` | – | – |
| Return | See note[^fn-prefixscanwithfunc-return-1] | – | – |


[^fn-prefixscanwithfunc-func-type-0]:
    Type for parameter `func` of `prefixScanWithFunc`:

    ```zig
    fn (@TypeOf(vec), @TypeOf(vec)) if (ErrorType == void) @TypeOf(vec) else ErrorType!@TypeOf(vec)
    ```

[^fn-prefixscanwithfunc-return-1]:
    Return type for `prefixScanWithFunc`:

    ```zig
    if (ErrorType == void) @TypeOf(vec) else ErrorType!@TypeOf(vec)
    ```

</details>

---

### <a id="fn-prefixscan"></a>`prefixScan`

<details class="declaration-card" open>
<summary>Function – Returns a vector whose elements are the result of performing the specified operation on the corresponding</summary>

Returns a vector whose elements are the result of performing the specified operation on the corresponding
element of the input vector and every hop'th element that came before it (or after, if hop is negative).
Supports the same operations as the @reduce() builtin. Takes O(logN) to compute.
The scan is not linear, which may affect floating point errors. This may affect the determinism of
algorithms that use this function.

```zig
pub fn prefixScan(comptime op: std.builtin.ReduceOp, comptime hop: isize, vec: anytype) @TypeOf(vec) {
    const VecType = @TypeOf(vec);
    const Child = std.meta.Child(VecType);

    const identity = comptime switch (@typeInfo(Child)) {
        .bool => switch (op) {
            .Or, .Xor => false,
            .And => true,
            else => @compileError("Invalid prefixScan operation " ++ @tagName(op) ++ " for vector of booleans."),
        },
        .int => switch (op) {
            .Max => std.math.minInt(Child),
            .Add, .Or, .Xor => 0,
            .Mul => 1,
            .And, .Min => std.math.maxInt(Child),
        },
        .float => switch (op) {
            .Max => -std.math.inf(Child),
            .Add => 0,
            .Mul => 1,
            .Min => std.math.inf(Child),
            else => @compileError("Invalid prefixScan operation " ++ @tagName(op) ++ " for vector of floats."),
        },
        else => @compileError("Invalid type " ++ @typeName(VecType) ++ " for prefixScan."),
    };

    const fn_container = struct {
        fn opFn(a: VecType, b: VecType) VecType {
            return if (Child == bool) switch (op) {
                .And => @select(bool, a, b, @as(VecType, @splat(false))),
                .Or => @select(bool, a, @as(VecType, @splat(true)), b),
                .Xor => a != b,
                else => unreachable,
            } else switch (op) {
                .And => a & b,
                .Or => a | b,
                .Xor => a ^ b,
                .Add => a + b,
                .Mul => a * b,
                .Min => @min(a, b),
                .Max => @max(a, b),
            };
        }
    };

    return prefixScanWithFunc(hop, vec, void, fn_container.opFn, identity);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `op` | `std.builtin.ReduceOp` | – | – |
| `hop` | `isize` | – | – |
| `vec` | `` | – | – |
| Return | `@TypeOf(vec)` | – | – |

</details>

---


