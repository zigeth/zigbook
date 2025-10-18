---
title: "std.sort"
description: "Comprehensive reference for Zig's std.sort module covering algorithms, numerics, and performance primitives."
navigation:
  title: "Sort"
  icon: i-lucide-function-square
  badge: "Algorithms"
badge: "Algorithms"
category: "algorithms"
tags:
  - "zig"
  - "standard-library"
  - "algorithms"
source: "std/sort.md"
githubPath: "std/sort.md"
lastUpdated: "2025-10-11T02:43:50.349Z"
seo:
  title: "std.sort · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.sort module covering algorithms, numerics, and performance primitives."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/sort.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.sort` |
| Declarations | 20 |
| Breakdown | 16 functions · 1 type · 3 constants |
| Generated (unix epoch) | 1760148110 |

---

## Table of Contents

- [Functions](#functions)
  - [`insertion`](#fn-insertion)
  - [`insertionContext`](#fn-insertioncontext)
  - [`heap`](#fn-heap)
  - [`heapContext`](#fn-heapcontext)
  - [`asc`](#fn-asc)
  - [`desc`](#fn-desc)
  - [`binarySearch`](#fn-binarysearch)
  - [`lowerBound`](#fn-lowerbound)
  - [`upperBound`](#fn-upperbound)
  - [`partitionPoint`](#fn-partitionpoint)
  - [`equalRange`](#fn-equalrange)
  - [`argMin`](#fn-argmin)
  - [`min`](#fn-min)
  - [`argMax`](#fn-argmax)
  - [`max`](#fn-max)
  - [`isSorted`](#fn-issorted)

- [Types](#types)
  - [`Mode`](#type-mode)

- [Constants](#constants)
  - [`block`](#const-block)
  - [`pdq`](#const-pdq)
  - [`pdqContext`](#const-pdqcontext)

---

## Types (1)

### <a id="type-mode"></a>`Mode`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const Mode = enum { stable, unstable }
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `stable` |  |
| `unstable` |  |

</details>

---

## Constants (3)

### <a id="const-block"></a>`block`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const block = @import("sort/block.zig").block
\`\`\`

</details>

---

### <a id="const-pdq"></a>`pdq`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pdq = @import("sort/pdq.zig").pdq
\`\`\`

</details>

---

### <a id="const-pdqcontext"></a>`pdqContext`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pdqContext = @import("sort/pdq.zig").pdqContext
\`\`\`

</details>

---

## Functions (16)

### <a id="fn-insertion"></a>`insertion`

<details class="declaration-card" open>
<summary>Function – Stable in-place sort</summary>

Stable in-place sort. O(n) best case, O(pow(n, 2)) worst case.
O(1) memory (no allocator required).
Sorts in ascending order with respect to the given `lessThan` function.

\`\`\`zig
pub fn insertion(
    comptime T: type,
    items: []T,
    context: anytype,
    comptime lessThanFn: fn (@TypeOf(context), lhs: T, rhs: T) bool,
) void {
    const Context = struct {
        items: []T,
        sub_ctx: @TypeOf(context),

        pub fn lessThan(ctx: @This(), a: usize, b: usize) bool {
            return lessThanFn(ctx.sub_ctx, ctx.items[a], ctx.items[b]);
        }

        pub fn swap(ctx: @This(), a: usize, b: usize) void {
            return mem.swap(T, &ctx.items[a], &ctx.items[b]);
        }
    };
    insertionContext(0, items.len, Context{ .items = items, .sub_ctx = context });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]T` | – | – |
| `context` | `` | – | – |
| `lessThanFn` | `fn (@TypeOf(context), lhs: T, rhs: T) bool` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-insertioncontext"></a>`insertionContext`

<details class="declaration-card" open>
<summary>Function – Stable in-place sort</summary>

Stable in-place sort. O(n) best case, O(pow(n, 2)) worst case.
O(1) memory (no allocator required).
`context` must have methods `swap` and `lessThan`,
which each take 2 `usize` parameters indicating the index of an item.
Sorts in ascending order with respect to `lessThan`.

\`\`\`zig
pub fn insertionContext(a: usize, b: usize, context: anytype) void {
    assert(a <= b);

    var i = a + 1;
    while (i < b) : (i += 1) {
        var j = i;
        while (j > a and context.lessThan(j, j - 1)) : (j -= 1) {
            context.swap(j, j - 1);
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `usize` | – | – |
| `b` | `usize` | – | – |
| `context` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-heap"></a>`heap`

<details class="declaration-card" open>
<summary>Function – Unstable in-place sort</summary>

Unstable in-place sort. O(n*log(n)) best case, worst case and average case.
O(1) memory (no allocator required).
Sorts in ascending order with respect to the given `lessThan` function.

\`\`\`zig
pub fn heap(
    comptime T: type,
    items: []T,
    context: anytype,
    comptime lessThanFn: fn (@TypeOf(context), lhs: T, rhs: T) bool,
) void {
    const Context = struct {
        items: []T,
        sub_ctx: @TypeOf(context),

        pub fn lessThan(ctx: @This(), a: usize, b: usize) bool {
            return lessThanFn(ctx.sub_ctx, ctx.items[a], ctx.items[b]);
        }

        pub fn swap(ctx: @This(), a: usize, b: usize) void {
            return mem.swap(T, &ctx.items[a], &ctx.items[b]);
        }
    };
    heapContext(0, items.len, Context{ .items = items, .sub_ctx = context });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]T` | – | – |
| `context` | `` | – | – |
| `lessThanFn` | `fn (@TypeOf(context), lhs: T, rhs: T) bool` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-heapcontext"></a>`heapContext`

<details class="declaration-card" open>
<summary>Function – Unstable in-place sort</summary>

Unstable in-place sort. O(n*log(n)) best case, worst case and average case.
O(1) memory (no allocator required).
`context` must have methods `swap` and `lessThan`,
which each take 2 `usize` parameters indicating the index of an item.
Sorts in ascending order with respect to `lessThan`.

\`\`\`zig
pub fn heapContext(a: usize, b: usize, context: anytype) void {
    assert(a <= b);
    // build the heap in linear time.
    var i = a + (b - a) / 2;
    while (i > a) {
        i -= 1;
        siftDown(a, i, b, context);
    }

    // pop maximal elements from the heap.
    i = b;
    while (i > a) {
        i -= 1;
        context.swap(a, i);
        siftDown(a, a, i, context);
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `usize` | – | – |
| `b` | `usize` | – | – |
| `context` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-asc"></a>`asc`

<details class="declaration-card" open>
<summary>Function – Use to generate a comparator function for a given type</summary>

Use to generate a comparator function for a given type. e.g. `sort(u8, slice, {}, asc(u8))`.

\`\`\`zig
pub fn asc(comptime T: type) fn (void, T, T) bool {
    return struct {
        pub fn inner(_: void, a: T, b: T) bool {
            return a < b;
        }
    }.inner;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `fn (void, T, T) bool` | – | – |

</details>

---

### <a id="fn-desc"></a>`desc`

<details class="declaration-card" open>
<summary>Function – Use to generate a comparator function for a given type</summary>

Use to generate a comparator function for a given type. e.g. `sort(u8, slice, {}, desc(u8))`.

\`\`\`zig
pub fn desc(comptime T: type) fn (void, T, T) bool {
    return struct {
        pub fn inner(_: void, a: T, b: T) bool {
            return a > b;
        }
    }.inner;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `fn (void, T, T) bool` | – | – |

</details>

---

### <a id="fn-binarysearch"></a>`binarySearch`

<details class="declaration-card" open>
<summary>Function – Returns the index of an element in `items` returning `</summary>

Returns the index of an element in `items` returning `.eq` when given to `compareFn`.
- If there are multiple such elements, returns the index of any one of them.
- If there are no such elements, returns `null`.

`items` must be sorted in ascending order with respect to `compareFn`:
\`\`\`
[0]                                                   [len]
┌───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┐
│.lt│.lt│ \ \ │.lt│.eq│.eq│ \ \ │.eq│.gt│.gt│ \ \ │.gt│
└───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┘
├─────────────────┼─────────────────┼─────────────────┤
 ↳ zero or more    ↳ zero or more    ↳ zero or more
                  ├─────────────────┤
                   ↳ if not null, returned
                     index is in this range
\`\`\`

`O(log n)` time complexity.

See also: `lowerBound, `upperBound`, `partitionPoint`, `equalRange`.

\`\`\`zig
pub fn binarySearch(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime compareFn: fn (@TypeOf(context), T) std.math.Order,
) ?usize {
    var low: usize = 0;
    var high: usize = items.len;

    while (low < high) {
        // Avoid overflowing in the midpoint calculation
        const mid = low + (high - low) / 2;
        switch (compareFn(context, items[mid])) {
            .eq => return mid,
            .gt => low = mid + 1,
            .lt => high = mid,
        }
    }
    return null;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `compareFn` | `fn (@TypeOf(context), T) std.math.Order` | – | – |
| Return | `?usize` | – | – |

**Examples:**

#### Example 1: Calling `binarySearch`

This example demonstrates how to call `binarySearch`.

\`\`\`zig
[0]                                                   [len]
┌───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┐
│.lt│.lt│ \ \ │.lt│.eq│.eq│ \ \ │.eq│.gt│.gt│ \ \ │.gt│
└───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┘
├─────────────────┼─────────────────┼─────────────────┤
↳ zero or more    ↳ zero or more    ↳ zero or more
├─────────────────┤
↳ if not null, returned
index is in this range
\`\`\`

</details>

---

### <a id="fn-lowerbound"></a>`lowerBound`

<details class="declaration-card" open>
<summary>Function – Returns the index of the first element in `items` that is greater than or equal to `context`,</summary>

Returns the index of the first element in `items` that is greater than or equal to `context`,
as determined by `compareFn`. If no such element exists, returns `items.len`.

`items` must be sorted in ascending order with respect to `compareFn`:
\`\`\`
[0]                                                   [len]
┌───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┐
│.lt│.lt│ \ \ │.lt│.eq│.eq│ \ \ │.eq│.gt│.gt│ \ \ │.gt│
└───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┘
├─────────────────┼─────────────────┼─────────────────┤
 ↳ zero or more    ↳ zero or more    ↳ zero or more
                  ├───┤
                   ↳ returned index
\`\`\`

`O(log n)` time complexity.

See also: `binarySearch`, `upperBound`, `partitionPoint`, `equalRange`.

\`\`\`zig
pub fn lowerBound(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime compareFn: fn (@TypeOf(context), T) std.math.Order,
) usize {
    const S = struct {
        fn predicate(ctx: @TypeOf(context), item: T) bool {
            return compareFn(ctx, item).invert() == .lt;
        }
    };
    return partitionPoint(T, items, context, S.predicate);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `compareFn` | `fn (@TypeOf(context), T) std.math.Order` | – | – |
| Return | `usize` | – | – |

**Examples:**

#### Example 1: Calling `lowerBound`

This example demonstrates how to call `lowerBound`.

\`\`\`zig
[0]                                                   [len]
┌───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┐
│.lt│.lt│ \ \ │.lt│.eq│.eq│ \ \ │.eq│.gt│.gt│ \ \ │.gt│
└───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┘
├─────────────────┼─────────────────┼─────────────────┤
↳ zero or more    ↳ zero or more    ↳ zero or more
├───┤
↳ returned index
\`\`\`

</details>

---

### <a id="fn-upperbound"></a>`upperBound`

<details class="declaration-card" open>
<summary>Function – Returns the index of the first element in `items` that is greater than `context`, as determined</summary>

Returns the index of the first element in `items` that is greater than `context`, as determined
by `compareFn`. If no such element exists, returns `items.len`.

`items` must be sorted in ascending order with respect to `compareFn`:
\`\`\`
[0]                                                   [len]
┌───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┐
│.lt│.lt│ \ \ │.lt│.eq│.eq│ \ \ │.eq│.gt│.gt│ \ \ │.gt│
└───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┘
├─────────────────┼─────────────────┼─────────────────┤
 ↳ zero or more    ↳ zero or more    ↳ zero or more
                                    ├───┤
                                     ↳ returned index
\`\`\`

`O(log n)` time complexity.

See also: `binarySearch`, `lowerBound`, `partitionPoint`, `equalRange`.

\`\`\`zig
pub fn upperBound(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime compareFn: fn (@TypeOf(context), T) std.math.Order,
) usize {
    const S = struct {
        fn predicate(ctx: @TypeOf(context), item: T) bool {
            return compareFn(ctx, item).invert() != .gt;
        }
    };
    return partitionPoint(T, items, context, S.predicate);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `compareFn` | `fn (@TypeOf(context), T) std.math.Order` | – | – |
| Return | `usize` | – | – |

**Examples:**

#### Example 1: Calling `upperBound`

This example demonstrates how to call `upperBound`.

\`\`\`zig
[0]                                                   [len]
┌───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┐
│.lt│.lt│ \ \ │.lt│.eq│.eq│ \ \ │.eq│.gt│.gt│ \ \ │.gt│
└───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┘
├─────────────────┼─────────────────┼─────────────────┤
↳ zero or more    ↳ zero or more    ↳ zero or more
├───┤
↳ returned index
\`\`\`

</details>

---

### <a id="fn-partitionpoint"></a>`partitionPoint`

<details class="declaration-card" open>
<summary>Function – Returns the index of the partition point of `items` in relation to the given predicate</summary>

Returns the index of the partition point of `items` in relation to the given predicate.
- If all elements of `items` satisfy the predicate the returned value is `items.len`.

`items` must contain a prefix for which all elements satisfy the predicate,
and beyond which none of the elements satisfy the predicate:
\`\`\`
[0]                                          [len]
┌────┬────┬─/ /─┬────┬─────┬─────┬─/ /─┬─────┐
│true│true│ \ \ │true│false│false│ \ \ │false│
└────┴────┴─/ /─┴────┴─────┴─────┴─/ /─┴─────┘
├────────────────────┼───────────────────────┤
 ↳ zero or more       ↳ zero or more
                     ├─────┤
                      ↳ returned index
\`\`\`

`O(log n)` time complexity.

See also: `binarySearch`, `lowerBound, `upperBound`, `equalRange`.

\`\`\`zig
pub fn partitionPoint(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime predicate: fn (@TypeOf(context), T) bool,
) usize {
    var low: usize = 0;
    var high: usize = items.len;

    while (low < high) {
        const mid = low + (high - low) / 2;
        if (predicate(context, items[mid])) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `predicate` | `fn (@TypeOf(context), T) bool` | – | – |
| Return | `usize` | – | – |

**Examples:**

#### Example 1: Calling `partitionPoint`

This example demonstrates how to call `partitionPoint`.

\`\`\`zig
[0]                                          [len]
┌────┬────┬─/ /─┬────┬─────┬─────┬─/ /─┬─────┐
│true│true│ \ \ │true│false│false│ \ \ │false│
└────┴────┴─/ /─┴────┴─────┴─────┴─/ /─┴─────┘
├────────────────────┼───────────────────────┤
↳ zero or more       ↳ zero or more
├─────┤
↳ returned index
\`\`\`

</details>

---

### <a id="fn-equalrange"></a>`equalRange`

<details class="declaration-card" open>
<summary>Function – Returns a tuple of the lower and upper indices in `items` between which all</summary>

Returns a tuple of the lower and upper indices in `items` between which all
elements return `.eq` when given to `compareFn`.
- If no element in `items` returns `.eq`, both indices are the
index of the first element in `items` returning `.gt`.
- If no element in `items` returns `.gt`, both indices equal `items.len`.

`items` must be sorted in ascending order with respect to `compareFn`:
\`\`\`
[0]                                                   [len]
┌───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┐
│.lt│.lt│ \ \ │.lt│.eq│.eq│ \ \ │.eq│.gt│.gt│ \ \ │.gt│
└───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┘
├─────────────────┼─────────────────┼─────────────────┤
 ↳ zero or more    ↳ zero or more    ↳ zero or more
                  ├─────────────────┤
                   ↳ returned range
\`\`\`

`O(log n)` time complexity.

See also: `binarySearch`, `lowerBound, `upperBound`, `partitionPoint`.

\`\`\`zig
pub fn equalRange(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime compareFn: fn (@TypeOf(context), T) std.math.Order,
) struct { usize, usize } {
    var low: usize = 0;
    var high: usize = items.len;

    while (low < high) {
        const mid = low + (high - low) / 2;
        switch (compareFn(context, items[mid])) {
            .gt => {
                low = mid + 1;
            },
            .lt => {
                high = mid;
            },
            .eq => {
                return .{
                    low + std.sort.lowerBound(
                        T,
                        items[low..mid],
                        context,
                        compareFn,
                    ),
                    mid + std.sort.upperBound(
                        T,
                        items[mid..high],
                        context,
                        compareFn,
                    ),
                };
            },
        }
    }

    return .{ low, low };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `compareFn` | `fn (@TypeOf(context), T) std.math.Order` | – | – |
| Return | `struct { usize, usize }` | – | – |

**Examples:**

#### Example 1: Calling `equalRange`

This example demonstrates how to call `equalRange`.

\`\`\`zig
[0]                                                   [len]
┌───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┬───┬───┬─/ /─┬───┐
│.lt│.lt│ \ \ │.lt│.eq│.eq│ \ \ │.eq│.gt│.gt│ \ \ │.gt│
└───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┴───┴───┴─/ /─┴───┘
├─────────────────┼─────────────────┼─────────────────┤
↳ zero or more    ↳ zero or more    ↳ zero or more
├─────────────────┤
↳ returned range
\`\`\`

</details>

---

### <a id="fn-argmin"></a>`argMin`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn argMin(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime lessThan: fn (@TypeOf(context), lhs: T, rhs: T) bool,
) ?usize {
    if (items.len == 0) {
        return null;
    }

    var smallest = items[0];
    var smallest_index: usize = 0;
    for (items[1..], 0..) |item, i| {
        if (lessThan(context, item, smallest)) {
            smallest = item;
            smallest_index = i + 1;
        }
    }

    return smallest_index;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `lessThan` | `fn (@TypeOf(context), lhs: T, rhs: T) bool` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-min"></a>`min`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn min(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime lessThan: fn (context: @TypeOf(context), lhs: T, rhs: T) bool,
) ?T {
    const i = argMin(T, items, context, lessThan) orelse return null;
    return items[i];
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `lessThan` | `fn (context: @TypeOf(context), lhs: T, rhs: T) bool` | – | – |
| Return | `?T` | – | – |

</details>

---

### <a id="fn-argmax"></a>`argMax`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn argMax(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime lessThan: fn (context: @TypeOf(context), lhs: T, rhs: T) bool,
) ?usize {
    if (items.len == 0) {
        return null;
    }

    var biggest = items[0];
    var biggest_index: usize = 0;
    for (items[1..], 0..) |item, i| {
        if (lessThan(context, biggest, item)) {
            biggest = item;
            biggest_index = i + 1;
        }
    }

    return biggest_index;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `lessThan` | `fn (context: @TypeOf(context), lhs: T, rhs: T) bool` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-max"></a>`max`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn max(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime lessThan: fn (context: @TypeOf(context), lhs: T, rhs: T) bool,
) ?T {
    const i = argMax(T, items, context, lessThan) orelse return null;
    return items[i];
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `lessThan` | `fn (context: @TypeOf(context), lhs: T, rhs: T) bool` | – | – |
| Return | `?T` | – | – |

</details>

---

### <a id="fn-issorted"></a>`isSorted`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn isSorted(
    comptime T: type,
    items: []const T,
    context: anytype,
    comptime lessThan: fn (context: @TypeOf(context), lhs: T, rhs: T) bool,
) bool {
    var i: usize = 1;
    while (i < items.len) : (i += 1) {
        if (lessThan(context, items[i], items[i - 1])) {
            return false;
        }
    }

    return true;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]const T` | – | – |
| `context` | `` | – | – |
| `lessThan` | `fn (context: @TypeOf(context), lhs: T, rhs: T) bool` | – | – |
| Return | `bool` | – | – |

</details>

---
