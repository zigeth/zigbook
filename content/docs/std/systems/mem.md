---
title: "std.mem"
description: "Comprehensive reference for Zig's std.mem module covering low-level systems primitives and metaprogramming utilities."
navigation:
  title: "Mem"
  icon: i-lucide-cpu
  badge: "Systems"
badge: "Systems"
category: "systems"
tags:
  - "zig"
  - "standard-library"
  - "systems"
source: "std/mem.md"
githubPath: "std/mem.md"
lastUpdated: "2025-10-18T12:44:21.944Z"
seo:
  title: "std.mem · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.mem module covering low-level systems primitives and metaprogramming utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/mem.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.mem` |
| Declarations | 124 |
| Breakdown | 114 functions · 2 types · 7 constants · 1 module |
| Generated (unix epoch) | 1760148108 |

---

## Table of Contents

- [Functions](#functions)
  - [`ValidationAllocator`](#fn-validationallocator)
  - [`validationWrap`](#fn-validationwrap)
  - [`copyForwards`](#fn-copyforwards)
  - [`copyBackwards`](#fn-copybackwards)
  - [`zeroes`](#fn-zeroes)
  - [`zeroInit`](#fn-zeroinit)
  - [`sort`](#fn-sort)
  - [`sortUnstable`](#fn-sortunstable)
  - [`sortContext`](#fn-sortcontext)
  - [`sortUnstableContext`](#fn-sortunstablecontext)
  - [`order`](#fn-order)
  - [`orderZ`](#fn-orderz)
  - [`lessThan`](#fn-lessthan)
  - [`eql`](#fn-eql)
  - [`indexOfDiff`](#fn-indexofdiff)
  - [`span`](#fn-span)
  - [`sliceTo`](#fn-sliceto)
  - [`len`](#fn-len)
  - [`indexOfSentinel`](#fn-indexofsentinel)
  - [`allEqual`](#fn-allequal)
  - [`trimStart`](#fn-trimstart)
  - [`trimEnd`](#fn-trimend)
  - [`trim`](#fn-trim)
  - [`indexOfScalar`](#fn-indexofscalar)
  - [`lastIndexOfScalar`](#fn-lastindexofscalar)
  - [`indexOfScalarPos`](#fn-indexofscalarpos)
  - [`indexOfAny`](#fn-indexofany)
  - [`lastIndexOfAny`](#fn-lastindexofany)
  - [`indexOfAnyPos`](#fn-indexofanypos)
  - [`indexOfNone`](#fn-indexofnone)
  - [`lastIndexOfNone`](#fn-lastindexofnone)
  - [`indexOfNonePos`](#fn-indexofnonepos)
  - [`indexOf`](#fn-indexof)
  - [`lastIndexOfLinear`](#fn-lastindexoflinear)
  - [`indexOfPosLinear`](#fn-indexofposlinear)
  - [`lastIndexOf`](#fn-lastindexof)
  - [`indexOfPos`](#fn-indexofpos)
  - [`count`](#fn-count)
  - [`containsAtLeast`](#fn-containsatleast)
  - [`containsAtLeastScalar`](#fn-containsatleastscalar)
  - [`readVarInt`](#fn-readvarint)
  - [`readVarPackedInt`](#fn-readvarpackedint)
  - [`readInt`](#fn-readint)
  - [`readPackedInt`](#fn-readpackedint)
  - [`writeInt`](#fn-writeint)
  - [`writePackedInt`](#fn-writepackedint)
  - [`writeVarPackedInt`](#fn-writevarpackedint)
  - [`byteSwapAllFields`](#fn-byteswapallfields)
  - [`byteSwapAllElements`](#fn-byteswapallelements)
  - [`tokenizeAny`](#fn-tokenizeany)
  - [`tokenizeSequence`](#fn-tokenizesequence)
  - [`tokenizeScalar`](#fn-tokenizescalar)
  - [`splitSequence`](#fn-splitsequence)
  - [`splitAny`](#fn-splitany)
  - [`splitScalar`](#fn-splitscalar)
  - [`splitBackwardsSequence`](#fn-splitbackwardssequence)
  - [`splitBackwardsAny`](#fn-splitbackwardsany)
  - [`splitBackwardsScalar`](#fn-splitbackwardsscalar)
  - [`window`](#fn-window)
  - [`WindowIterator`](#fn-windowiterator)
  - [`startsWith`](#fn-startswith)
  - [`endsWith`](#fn-endswith)
  - [`TokenIterator`](#fn-tokeniterator)
  - [`SplitIterator`](#fn-splititerator)
  - [`SplitBackwardsIterator`](#fn-splitbackwardsiterator)
  - [`join`](#fn-join)
  - [`joinZ`](#fn-joinz)
  - [`concat`](#fn-concat)
  - [`concatWithSentinel`](#fn-concatwithsentinel)
  - [`concatMaybeSentinel`](#fn-concatmaybesentinel)
  - [`min`](#fn-min)
  - [`max`](#fn-max)
  - [`minMax`](#fn-minmax)
  - [`indexOfMin`](#fn-indexofmin)
  - [`indexOfMax`](#fn-indexofmax)
  - [`indexOfMinMax`](#fn-indexofminmax)
  - [`swap`](#fn-swap)
  - [`reverse`](#fn-reverse)
  - [`reverseIterator`](#fn-reverseiterator)
  - [`rotate`](#fn-rotate)
  - [`replace`](#fn-replace)
  - [`replaceScalar`](#fn-replacescalar)
  - [`collapseRepeatsLen`](#fn-collapserepeatslen)
  - [`collapseRepeats`](#fn-collapserepeats)
  - [`replacementSize`](#fn-replacementsize)
  - [`replaceOwned`](#fn-replaceowned)
  - [`littleToNative`](#fn-littletonative)
  - [`bigToNative`](#fn-bigtonative)
  - [`toNative`](#fn-tonative)
  - [`nativeTo`](#fn-nativeto)
  - [`nativeToLittle`](#fn-nativetolittle)
  - [`nativeToBig`](#fn-nativetobig)
  - [`alignPointerOffset`](#fn-alignpointeroffset)
  - [`alignPointer`](#fn-alignpointer)
  - [`asBytes`](#fn-asbytes)
  - [`toBytes`](#fn-tobytes)
  - [`bytesAsValue`](#fn-bytesasvalue)
  - [`bytesToValue`](#fn-bytestovalue)
  - [`bytesAsSlice`](#fn-bytesasslice)
  - [`sliceAsBytes`](#fn-sliceasbytes)
  - [`alignForwardAnyAlign`](#fn-alignforwardanyalign)
  - [`alignForward`](#fn-alignforward)
  - [`alignForwardLog2`](#fn-alignforwardlog2)
  - [`doNotOptimizeAway`](#fn-donotoptimizeaway)
  - [`alignBackwardAnyAlign`](#fn-alignbackwardanyalign)
  - [`alignBackward`](#fn-alignbackward)
  - [`isValidAlign`](#fn-isvalidalign)
  - [`isValidAlignGeneric`](#fn-isvalidaligngeneric)
  - [`isAlignedAnyAlign`](#fn-isalignedanyalign)
  - [`isAlignedLog2`](#fn-isalignedlog2)
  - [`isAligned`](#fn-isaligned)
  - [`isAlignedGeneric`](#fn-isalignedgeneric)
  - [`alignInBytes`](#fn-aligninbytes)
  - [`alignInSlice`](#fn-aligninslice)

- [Types](#types)
  - [`Alignment`](#type-alignment)
  - [`DelimiterType`](#type-delimitertype)

- [Modules](#modules)
  - [`Allocator`](#module-allocator)

- [Constants](#constants)
  - [`byte\_size\_in\_bits`](#const-byte-size-in-bits)
  - [`trimLeft`](#const-trimleft)
  - [`trimRight`](#const-trimright)
  - [`readPackedIntNative`](#const-readpackedintnative)
  - [`readPackedIntForeign`](#const-readpackedintforeign)
  - [`writePackedIntNative`](#const-writepackedintnative)
  - [`writePackedIntForeign`](#const-writepackedintforeign)

---

## Types (2)

### <a id="type-alignment"></a>`Alignment`

<details class="declaration-card" open>
<summary>Container – Stored as a power-of-two</summary>

Stored as a power-of-two.

```zig
pub const Alignment = enum(math.Log2Int(usize)) {
    @"1" = 0,
    @"2" = 1,
    @"4" = 2,
    @"8" = 3,
    @"16" = 4,
    @"32" = 5,
    @"64" = 6,
    _,

    pub fn toByteUnits(a: Alignment) usize {
        return @as(usize, 1) << @intFromEnum(a);
    }

    pub fn fromByteUnits(n: usize) Alignment {
        assert(std.math.isPowerOfTwo(n));
        return @enumFromInt(@ctz(n));
    }

    pub inline fn of(comptime T: type) Alignment {
        return comptime fromByteUnits(@alignOf(T));
    }

    pub fn order(lhs: Alignment, rhs: Alignment) std.math.Order {
        return std.math.order(@intFromEnum(lhs), @intFromEnum(rhs));
    }

    pub fn compare(lhs: Alignment, op: std.math.CompareOperator, rhs: Alignment) bool {
        return std.math.compare(@intFromEnum(lhs), op, @intFromEnum(rhs));
    }

    pub fn max(lhs: Alignment, rhs: Alignment) Alignment {
        return @enumFromInt(@max(@intFromEnum(lhs), @intFromEnum(rhs)));
    }

    pub fn min(lhs: Alignment, rhs: Alignment) Alignment {
        return @enumFromInt(@min(@intFromEnum(lhs), @intFromEnum(rhs)));
    }

    /// Return next address with this alignment.
    pub fn forward(a: Alignment, address: usize) usize {
        const x = (@as(usize, 1) << @intFromEnum(a)) - 1;
        return (address + x) & ~x;
    }

    /// Return previous address with this alignment.
    pub fn backward(a: Alignment, address: usize) usize {
        const x = (@as(usize, 1) << @intFromEnum(a)) - 1;
        return address & ~x;
    }

    /// Return whether address is aligned to this amount.
    pub fn check(a: Alignment, address: usize) bool {
        return @ctz(address) >= @intFromEnum(a);
    }
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `@"1"` |  |
| `@"2"` |  |
| `@"4"` |  |
| `@"8"` |  |
| `@"16"` |  |
| `@"32"` |  |
| `@"64"` |  |
| `_` |  |

</details>

---

### <a id="type-delimitertype"></a>`DelimiterType`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const DelimiterType = enum { sequence, any, scalar }
```

**Fields:**

| Value | Description |
|-------|-------------|
| `sequence` |  |
| `any` |  |
| `scalar` |  |

</details>

---

## Modules (1)

### <a id="module-allocator"></a>`Allocator`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Allocator = @import("mem/Allocator.zig")
```

> **Module:** `mem/Allocator.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/mem/Allocator.zig)

</details>

---

## Constants (7)

### <a id="const-byte-size-in-bits"></a>`byte_size_in_bits`

<details class="declaration-card" open>
<summary>Constant – The standard library currently thoroughly depends on byte size</summary>

The standard library currently thoroughly depends on byte size
being 8 bits.  (see the use of u8 throughout allocation code as
the "byte" type.)  Code which depends on this can reference this
declaration.  If we ever try to port the standard library to a
non-8-bit-byte platform, this will allow us to search for things
which need to be updated.

```zig
pub const byte_size_in_bits = 8
```

</details>

---

### <a id="const-trimleft"></a>`trimLeft` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated: use `trimStart` instead</summary>

> **⚠️ Deprecation Notice:** Deprecated: use `trimStart` instead.
>
> This may be removed in a future version.

Deprecated: use `trimStart` instead.

```zig
pub const trimLeft = trimStart
```

</details>

---

### <a id="const-trimright"></a>`trimRight` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated: use `trimEnd` instead</summary>

> **⚠️ Deprecation Notice:** Deprecated: use `trimEnd` instead.
>
> This may be removed in a future version.

Deprecated: use `trimEnd` instead.

```zig
pub const trimRight = trimEnd
```

</details>

---

### <a id="const-readpackedintnative"></a>`readPackedIntNative`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const readPackedIntNative = switch (native_endian) {
    .little => readPackedIntLittle,
    .big => readPackedIntBig,
}
```

</details>

---

### <a id="const-readpackedintforeign"></a>`readPackedIntForeign`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const readPackedIntForeign = switch (native_endian) {
    .little => readPackedIntBig,
    .big => readPackedIntLittle,
}
```

</details>

---

### <a id="const-writepackedintnative"></a>`writePackedIntNative`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const writePackedIntNative = switch (native_endian) {
    .little => writePackedIntLittle,
    .big => writePackedIntBig,
}
```

</details>

---

### <a id="const-writepackedintforeign"></a>`writePackedIntForeign`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const writePackedIntForeign = switch (native_endian) {
    .little => writePackedIntBig,
    .big => writePackedIntLittle,
}
```

</details>

---

## Functions (114)

### <a id="fn-validationallocator"></a>`ValidationAllocator`

<details class="declaration-card" open>
<summary>Function – Detects and asserts if the std</summary>

Detects and asserts if the std.mem.Allocator interface is violated by the caller
or the allocator.

```zig
pub fn ValidationAllocator(comptime T: type) type {
    return struct {
        const Self = @This();

        underlying_allocator: T,

        pub fn init(underlying_allocator: T) @This() {
            return .{
                .underlying_allocator = underlying_allocator,
            };
        }

        pub fn allocator(self: *Self) Allocator {
            return .{
                .ptr = self,
                .vtable = &.{
                    .alloc = alloc,
                    .resize = resize,
                    .remap = remap,
                    .free = free,
                },
            };
        }

        fn getUnderlyingAllocatorPtr(self: *Self) Allocator {
            if (T == Allocator) return self.underlying_allocator;
            return self.underlying_allocator.allocator();
        }

        pub fn alloc(
            ctx: *anyopaque,
            n: usize,
            alignment: mem.Alignment,
            ret_addr: usize,
        ) ?[*]u8 {
            assert(n > 0);
            const self: *Self = @ptrCast(@alignCast(ctx));
            const underlying = self.getUnderlyingAllocatorPtr();
            const result = underlying.rawAlloc(n, alignment, ret_addr) orelse
                return null;
            assert(alignment.check(@intFromPtr(result)));
            return result;
        }

        pub fn resize(
            ctx: *anyopaque,
            buf: []u8,
            alignment: Alignment,
            new_len: usize,
            ret_addr: usize,
        ) bool {
            const self: *Self = @ptrCast(@alignCast(ctx));
            assert(buf.len > 0);
            const underlying = self.getUnderlyingAllocatorPtr();
            return underlying.rawResize(buf, alignment, new_len, ret_addr);
        }

        pub fn remap(
            ctx: *anyopaque,
            buf: []u8,
            alignment: Alignment,
            new_len: usize,
            ret_addr: usize,
        ) ?[*]u8 {
            const self: *Self = @ptrCast(@alignCast(ctx));
            assert(buf.len > 0);
            const underlying = self.getUnderlyingAllocatorPtr();
            return underlying.rawRemap(buf, alignment, new_len, ret_addr);
        }

        pub fn free(
            ctx: *anyopaque,
            buf: []u8,
            alignment: Alignment,
            ret_addr: usize,
        ) void {
            const self: *Self = @ptrCast(@alignCast(ctx));
            assert(buf.len > 0);
            const underlying = self.getUnderlyingAllocatorPtr();
            underlying.rawFree(buf, alignment, ret_addr);
        }

        pub fn reset(self: *Self) void {
            self.underlying_allocator.reset();
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-validationwrap"></a>`validationWrap`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn validationWrap(allocator: anytype) ValidationAllocator(@TypeOf(allocator)) {
    return ValidationAllocator(@TypeOf(allocator)).init(allocator);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `` | – | – |
| Return | `ValidationAllocator(@TypeOf(allocator))` | – | – |

</details>

---

### <a id="fn-copyforwards"></a>`copyForwards`

<details class="declaration-card" open>
<summary>Function – Copy all of source into dest at position 0</summary>

Copy all of source into dest at position 0.
dest.len must be >= source.len.
If the slices overlap, dest.ptr must be <= src.ptr.
This function is deprecated; use @memmove instead.

```zig
pub fn copyForwards(comptime T: type, dest: []T, source: []const T) void {
    for (dest[0..source.len], source) |*d, s| d.* = s;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `dest` | `[]T` | – | – |
| `source` | `[]const T` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-copybackwards"></a>`copyBackwards`

<details class="declaration-card" open>
<summary>Function – Copy all of source into dest at position 0</summary>

Copy all of source into dest at position 0.
dest.len must be >= source.len.
If the slices overlap, dest.ptr must be >= src.ptr.
This function is deprecated; use @memmove instead.

```zig
pub fn copyBackwards(comptime T: type, dest: []T, source: []const T) void {
    // TODO instead of manually doing this check for the whole array
    // and turning off runtime safety, the compiler should detect loops like
    // this and automatically omit safety checks for loops
    @setRuntimeSafety(false);
    assert(dest.len >= source.len);
    var i = source.len;
    while (i > 0) {
        i -= 1;
        dest[i] = source[i];
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `dest` | `[]T` | – | – |
| `source` | `[]const T` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-zeroes"></a>`zeroes`

<details class="declaration-card" open>
<summary>Function – Generally, Zig users are encouraged to explicitly initialize all fields of a struct explicitly rather than using this function</summary>

Generally, Zig users are encouraged to explicitly initialize all fields of a struct explicitly rather than using this function.
However, it is recognized that there are sometimes use cases for initializing all fields to a "zero" value. For example, when
interfacing with a C API where this practice is more common and relied upon. If you are performing code review and see this
function used, examine closely - it may be a code smell.
Zero initializes the type.
This can be used to zero-initialize any type for which it makes sense. Structs will be initialized recursively.

```zig
pub fn zeroes(comptime T: type) T {
    switch (@typeInfo(T)) {
        .comptime_int, .int, .comptime_float, .float => {
            return @as(T, 0);
        },
        .@"enum" => {
            return @as(T, @enumFromInt(0));
        },
        .void => {
            return {};
        },
        .bool => {
            return false;
        },
        .optional, .null => {
            return null;
        },
        .@"struct" => |struct_info| {
            if (@sizeOf(T) == 0) return undefined;
            if (struct_info.layout == .@"extern") {
                var item: T = undefined;
                @memset(asBytes(&item), 0);
                return item;
            } else {
                var structure: T = undefined;
                inline for (struct_info.fields) |field| {
                    if (!field.is_comptime) {
                        @field(structure, field.name) = zeroes(field.type);
                    }
                }
                return structure;
            }
        },
        .pointer => |ptr_info| {
            switch (ptr_info.size) {
                .slice => {
                    if (ptr_info.sentinel()) |sentinel| {
                        if (ptr_info.child == u8 and sentinel == 0) {
                            return ""; // A special case for the most common use-case: null-terminated strings.
                        }
                        @compileError("Can't set a sentinel slice to zero. This would require allocating memory.");
                    } else {
                        return &[_]ptr_info.child{};
                    }
                },
                .c => {
                    return null;
                },
                .one, .many => {
                    if (ptr_info.is_allowzero) return @ptrFromInt(0);
                    @compileError("Only nullable and allowzero pointers can be set to zero.");
                },
            }
        },
        .array => |info| {
            return @splat(zeroes(info.child));
        },
        .vector => |info| {
            return @splat(zeroes(info.child));
        },
        .@"union" => |info| {
            if (info.layout == .@"extern") {
                var item: T = undefined;
                @memset(asBytes(&item), 0);
                return item;
            }
            @compileError("Can't set a " ++ @typeName(T) ++ " to zero.");
        },
        .enum_literal,
        .error_union,
        .error_set,
        .@"fn",
        .type,
        .noreturn,
        .undefined,
        .@"opaque",
        .frame,
        .@"anyframe",
        => {
            @compileError("Can't set a " ++ @typeName(T) ++ " to zero.");
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-zeroinit"></a>`zeroInit`

<details class="declaration-card" open>
<summary>Function – Initializes all fields of the struct with their default value, or zero values if no default value is present</summary>

Initializes all fields of the struct with their default value, or zero values if no default value is present.
If the field is present in the provided initial values, it will have that value instead.
Structs are initialized recursively.

```zig
pub fn zeroInit(comptime T: type, init: anytype) T {
    const Init = @TypeOf(init);

    switch (@typeInfo(T)) {
        .@"struct" => |struct_info| {
            switch (@typeInfo(Init)) {
                .@"struct" => |init_info| {
                    if (init_info.is_tuple) {
                        if (init_info.fields.len > struct_info.fields.len) {
                            @compileError("Tuple initializer has more elements than there are fields in `" ++ @typeName(T) ++ "`");
                        }
                    } else {
                        inline for (init_info.fields) |field| {
                            if (!@hasField(T, field.name)) {
                                @compileError("Encountered an initializer for `" ++ field.name ++ "`, but it is not a field of " ++ @typeName(T));
                            }
                        }
                    }

                    var value: T = if (struct_info.layout == .@"extern") zeroes(T) else undefined;

                    inline for (struct_info.fields, 0..) |field, i| {
                        if (field.is_comptime) {
                            continue;
                        }

                        if (init_info.is_tuple and init_info.fields.len > i) {
                            @field(value, field.name) = @field(init, init_info.fields[i].name);
                        } else if (@hasField(@TypeOf(init), field.name)) {
                            switch (@typeInfo(field.type)) {
                                .@"struct" => {
                                    @field(value, field.name) = zeroInit(field.type, @field(init, field.name));
                                },
                                else => {
                                    @field(value, field.name) = @field(init, field.name);
                                },
                            }
                        } else if (field.defaultValue()) |val| {
                            @field(value, field.name) = val;
                        } else {
                            switch (@typeInfo(field.type)) {
                                .@"struct" => {
                                    @field(value, field.name) = std.mem.zeroInit(field.type, .{});
                                },
                                else => {
                                    @field(value, field.name) = std.mem.zeroes(@TypeOf(@field(value, field.name)));
                                },
                            }
                        }
                    }

                    return value;
                },
                else => {
                    @compileError("The initializer must be a struct");
                },
            }
        },
        else => {
            @compileError("Can't default init a " ++ @typeName(T));
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `init` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-sort"></a>`sort`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sort(
    comptime T: type,
    items: []T,
    context: anytype,
    comptime lessThanFn: fn (@TypeOf(context), lhs: T, rhs: T) bool,
) void {
    std.sort.block(T, items, context, lessThanFn);
}
```

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

### <a id="fn-sortunstable"></a>`sortUnstable`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sortUnstable(
    comptime T: type,
    items: []T,
    context: anytype,
    comptime lessThanFn: fn (@TypeOf(context), lhs: T, rhs: T) bool,
) void {
    std.sort.pdq(T, items, context, lessThanFn);
}
```

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

### <a id="fn-sortcontext"></a>`sortContext`

<details class="declaration-card" open>
<summary>Function – TODO: currently this just calls `insertionSortContext`</summary>

TODO: currently this just calls `insertionSortContext`. The block sort implementation
in this file needs to be adapted to use the sort context.

```zig
pub fn sortContext(a: usize, b: usize, context: anytype) void {
    std.sort.insertionContext(a, b, context);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `usize` | – | – |
| `b` | `usize` | – | – |
| `context` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-sortunstablecontext"></a>`sortUnstableContext`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sortUnstableContext(a: usize, b: usize, context: anytype) void {
    std.sort.pdqContext(a, b, context);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `usize` | – | – |
| `b` | `usize` | – | – |
| `context` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-order"></a>`order`

<details class="declaration-card" open>
<summary>Function – Compares two slices of numbers lexicographically</summary>

Compares two slices of numbers lexicographically. O(n).

```zig
pub fn order(comptime T: type, lhs: []const T, rhs: []const T) math.Order {
    const n = @min(lhs.len, rhs.len);
    for (lhs[0..n], rhs[0..n]) |lhs_elem, rhs_elem| {
        switch (math.order(lhs_elem, rhs_elem)) {
            .eq => continue,
            .lt => return .lt,
            .gt => return .gt,
        }
    }
    return math.order(lhs.len, rhs.len);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `lhs` | `[]const T` | – | – |
| `rhs` | `[]const T` | – | – |
| Return | `math.Order` | – | – |

</details>

---

### <a id="fn-orderz"></a>`orderZ`

<details class="declaration-card" open>
<summary>Function – Compares two many-item pointers with NUL-termination lexicographically</summary>

Compares two many-item pointers with NUL-termination lexicographically.

```zig
pub fn orderZ(comptime T: type, lhs: [*:0]const T, rhs: [*:0]const T) math.Order {
    var i: usize = 0;
    while (lhs[i] == rhs[i] and lhs[i] != 0) : (i += 1) {}
    return math.order(lhs[i], rhs[i]);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `lhs` | `[*:0]const T` | – | – |
| `rhs` | `[*:0]const T` | – | – |
| Return | `math.Order` | – | – |

</details>

---

### <a id="fn-lessthan"></a>`lessThan`

<details class="declaration-card" open>
<summary>Function – Returns true if lhs &lt; rhs, false otherwise</summary>

Returns true if lhs < rhs, false otherwise

```zig
pub fn lessThan(comptime T: type, lhs: []const T, rhs: []const T) bool {
    return order(T, lhs, rhs) == .lt;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `lhs` | `[]const T` | – | – |
| `rhs` | `[]const T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-eql"></a>`eql`

<details class="declaration-card" open>
<summary>Function – Returns true if and only if the slices have the same length and all elements</summary>

Returns true if and only if the slices have the same length and all elements
compare true using equality operator.

```zig
pub fn eql(comptime T: type, a: []const T, b: []const T) bool {
    if (!@inComptime() and @sizeOf(T) != 0 and std.meta.hasUniqueRepresentation(T) and
        use_vectors_for_comparison)
    {
        return eqlBytes(sliceAsBytes(a), sliceAsBytes(b));
    }

    if (a.len != b.len) return false;
    if (a.len == 0 or a.ptr == b.ptr) return true;

    for (a, b) |a_elem, b_elem| {
        if (a_elem != b_elem) return false;
    }
    return true;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `[]const T` | – | – |
| `b` | `[]const T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-indexofdiff"></a>`indexOfDiff`

<details class="declaration-card" open>
<summary>Function – Compares two slices and returns the index of the first inequality</summary>

Compares two slices and returns the index of the first inequality.
Returns null if the slices are equal.

```zig
pub fn indexOfDiff(comptime T: type, a: []const T, b: []const T) ?usize {
    const shortest = @min(a.len, b.len);
    if (a.ptr == b.ptr)
        return if (a.len == b.len) null else shortest;
    var index: usize = 0;
    while (index < shortest) : (index += 1) if (a[index] != b[index]) return index;
    return if (a.len == b.len) null else shortest;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `[]const T` | – | – |
| `b` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-span"></a>`span`

<details class="declaration-card" open>
<summary>Function – Takes a sentinel-terminated pointer and returns a slice, iterating over the</summary>

Takes a sentinel-terminated pointer and returns a slice, iterating over the
memory to find the sentinel and determine the length.
Pointer attributes such as const are preserved.
`[*c]` pointers are assumed to be non-null and 0-terminated.

```zig
pub fn span(ptr: anytype) Span(@TypeOf(ptr)) {
    if (@typeInfo(@TypeOf(ptr)) == .optional) {
        if (ptr) |non_null| {
            return span(non_null);
        } else {
            return null;
        }
    }
    const Result = Span(@TypeOf(ptr));
    const l = len(ptr);
    const ptr_info = @typeInfo(Result).pointer;
    if (ptr_info.sentinel()) |s| {
        return ptr[0..l :s];
    } else {
        return ptr[0..l];
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `` | – | – |
| Return | `Span(@TypeOf(ptr))` | – | – |

</details>

---

### <a id="fn-sliceto"></a>`sliceTo`

<details class="declaration-card" open>
<summary>Function – Takes a pointer to an array, a sentinel-terminated pointer, or a slice and iterates searching for</summary>

Takes a pointer to an array, a sentinel-terminated pointer, or a slice and iterates searching for
the first occurrence of `end`, returning the scanned slice.
If `end` is not found, the full length of the array/slice/sentinel terminated pointer is returned.
If the pointer type is sentinel terminated and `end` matches that terminator, the
resulting slice is also sentinel terminated.
Pointer properties such as mutability and alignment are preserved.
C pointers are assumed to be non-null.

```zig
pub fn sliceTo(ptr: anytype, comptime end: std.meta.Elem(@TypeOf(ptr))) SliceTo(@TypeOf(ptr), end) {
    if (@typeInfo(@TypeOf(ptr)) == .optional) {
        const non_null = ptr orelse return null;
        return sliceTo(non_null, end);
    }
    const Result = SliceTo(@TypeOf(ptr), end);
    const length = lenSliceTo(ptr, end);
    const ptr_info = @typeInfo(Result).pointer;
    if (ptr_info.sentinel()) |s| {
        return ptr[0..length :s];
    } else {
        return ptr[0..length];
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `` | – | – |
| `end` | `std.meta.Elem(@TypeOf(ptr))` | – | – |
| Return | `SliceTo(@TypeOf(ptr), end)` | – | – |

</details>

---

### <a id="fn-len"></a>`len`

<details class="declaration-card" open>
<summary>Function – Takes a sentinel-terminated pointer and iterates over the memory to find the</summary>

Takes a sentinel-terminated pointer and iterates over the memory to find the
sentinel and determine the length.
`[*c]` pointers are assumed to be non-null and 0-terminated.

```zig
pub fn len(value: anytype) usize {
    switch (@typeInfo(@TypeOf(value))) {
        .pointer => |info| switch (info.size) {
            .many => {
                const sentinel = info.sentinel() orelse
                    @compileError("invalid type given to std.mem.len: " ++ @typeName(@TypeOf(value)));
                return indexOfSentinel(info.child, sentinel, value);
            },
            .c => {
                assert(value != null);
                return indexOfSentinel(info.child, 0, value);
            },
            else => @compileError("invalid type given to std.mem.len: " ++ @typeName(@TypeOf(value))),
        },
        else => @compileError("invalid type given to std.mem.len: " ++ @typeName(@TypeOf(value))),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-indexofsentinel"></a>`indexOfSentinel`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn indexOfSentinel(comptime T: type, comptime sentinel: T, p: [*:sentinel]const T) usize {
    var i: usize = 0;

    if (use_vectors_for_comparison and
        !std.debug.inValgrind() and // https://github.com/ziglang/zig/issues/17717
        !@inComptime() and
        (@typeInfo(T) == .int or @typeInfo(T) == .float) and std.math.isPowerOfTwo(@bitSizeOf(T)))
    {
        switch (@import("builtin").cpu.arch) {
            // The below branch assumes that reading past the end of the buffer is valid, as long
            // as we don't read into a new page. This should be the case for most architectures
            // which use paged memory, however should be confirmed before adding a new arch below.
            .aarch64, .x86, .x86_64 => if (std.simd.suggestVectorLength(T)) |block_len| {
                const page_size = std.heap.page_size_min;
                const block_size = @sizeOf(T) * block_len;
                const Block = @Vector(block_len, T);
                const mask: Block = @splat(sentinel);

                comptime assert(std.heap.page_size_min % @sizeOf(Block) == 0);
                assert(page_size % @sizeOf(Block) == 0);

                // First block may be unaligned
                const start_addr = @intFromPtr(&p[i]);
                const offset_in_page = start_addr & (page_size - 1);
                if (offset_in_page <= page_size - @sizeOf(Block)) {
                    // Will not read past the end of a page, full block.
                    const block: Block = p[i..][0..block_len].*;
                    const matches = block == mask;
                    if (@reduce(.Or, matches)) {
                        return i + std.simd.firstTrue(matches).?;
                    }

                    i += @divExact(std.mem.alignForward(usize, start_addr, block_size) - start_addr, @sizeOf(T));
                } else {
                    @branchHint(.unlikely);
                    // Would read over a page boundary. Per-byte at a time until aligned or found.
                    // 0.39% chance this branch is taken for 4K pages at 16b block length.
                    //
                    // An alternate strategy is to do read a full block (the last in the page) and
                    // mask the entries before the pointer.
                    while ((@intFromPtr(&p[i]) & (block_size - 1)) != 0) : (i += 1) {
                        if (p[i] == sentinel) return i;
                    }
                }

                assert(std.mem.isAligned(@intFromPtr(&p[i]), block_size));
                while (true) {
                    const block: *const Block = @ptrCast(@alignCast(p[i..][0..block_len]));
                    const matches = block.* == mask;
                    if (@reduce(.Or, matches)) {
                        return i + std.simd.firstTrue(matches).?;
                    }
                    i += block_len;
                }
            },
            else => {},
        }
    }

    while (p[i] != sentinel) {
        i += 1;
    }
    return i;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `sentinel` | `T` | – | – |
| `p` | `[*:sentinel]const T` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-allequal"></a>`allEqual`

<details class="declaration-card" open>
<summary>Function – Returns true if all elements in a slice are equal to the scalar value provided</summary>

Returns true if all elements in a slice are equal to the scalar value provided

```zig
pub fn allEqual(comptime T: type, slice: []const T, scalar: T) bool {
    for (slice) |item| {
        if (item != scalar) return false;
    }
    return true;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `scalar` | `T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-trimstart"></a>`trimStart`

<details class="declaration-card" open>
<summary>Function – Remove a set of values from the beginning of a slice</summary>

Remove a set of values from the beginning of a slice.

```zig
pub fn trimStart(comptime T: type, slice: []const T, values_to_strip: []const T) []const T {
    var begin: usize = 0;
    while (begin < slice.len and indexOfScalar(T, values_to_strip, slice[begin]) != null) : (begin += 1) {}
    return slice[begin..];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `values\_to\_strip` | `[]const T` | – | – |
| Return | `[]const T` | – | – |

</details>

---

### <a id="fn-trimend"></a>`trimEnd`

<details class="declaration-card" open>
<summary>Function – Remove a set of values from the end of a slice</summary>

Remove a set of values from the end of a slice.

```zig
pub fn trimEnd(comptime T: type, slice: []const T, values_to_strip: []const T) []const T {
    var end: usize = slice.len;
    while (end > 0 and indexOfScalar(T, values_to_strip, slice[end - 1]) != null) : (end -= 1) {}
    return slice[0..end];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `values\_to\_strip` | `[]const T` | – | – |
| Return | `[]const T` | – | – |

</details>

---

### <a id="fn-trim"></a>`trim`

<details class="declaration-card" open>
<summary>Function – Remove a set of values from the beginning and end of a slice</summary>

Remove a set of values from the beginning and end of a slice.

```zig
pub fn trim(comptime T: type, slice: []const T, values_to_strip: []const T) []const T {
    var begin: usize = 0;
    var end: usize = slice.len;
    while (begin < end and indexOfScalar(T, values_to_strip, slice[begin]) != null) : (begin += 1) {}
    while (end > begin and indexOfScalar(T, values_to_strip, slice[end - 1]) != null) : (end -= 1) {}
    return slice[begin..end];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `values\_to\_strip` | `[]const T` | – | – |
| Return | `[]const T` | – | – |

</details>

---

### <a id="fn-indexofscalar"></a>`indexOfScalar`

<details class="declaration-card" open>
<summary>Function – Linear search for the index of a scalar value inside a slice</summary>

Linear search for the index of a scalar value inside a slice.

```zig
pub fn indexOfScalar(comptime T: type, slice: []const T, value: T) ?usize {
    return indexOfScalarPos(T, slice, 0, value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `value` | `T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-lastindexofscalar"></a>`lastIndexOfScalar`

<details class="declaration-card" open>
<summary>Function – Linear search for the last index of a scalar value inside a slice</summary>

Linear search for the last index of a scalar value inside a slice.

```zig
pub fn lastIndexOfScalar(comptime T: type, slice: []const T, value: T) ?usize {
    var i: usize = slice.len;
    while (i != 0) {
        i -= 1;
        if (slice[i] == value) return i;
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `value` | `T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofscalarpos"></a>`indexOfScalarPos`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn indexOfScalarPos(comptime T: type, slice: []const T, start_index: usize, value: T) ?usize {
    if (start_index >= slice.len) return null;

    var i: usize = start_index;
    if (use_vectors_for_comparison and
        !std.debug.inValgrind() and // https://github.com/ziglang/zig/issues/17717
        !@inComptime() and
        (@typeInfo(T) == .int or @typeInfo(T) == .float) and std.math.isPowerOfTwo(@bitSizeOf(T)))
    {
        if (std.simd.suggestVectorLength(T)) |block_len| {
            // For Intel Nehalem (2009) and AMD Bulldozer (2012) or later, unaligned loads on aligned data result
            // in the same execution as aligned loads. We ignore older arch's here and don't bother pre-aligning.
            //
            // Use `std.simd.suggestVectorLength(T)` to get the same alignment as used in this function
            // however this usually isn't necessary unless your arch has a performance penalty due to this.
            //
            // This may differ for other arch's. Arm for example costs a cycle when loading across a cache
            // line so explicit alignment prologues may be worth exploration.

            // Unrolling here is ~10% improvement. We can then do one bounds check every 2 blocks
            // instead of one which adds up.
            const Block = @Vector(block_len, T);
            if (i + 2 * block_len < slice.len) {
                const mask: Block = @splat(value);
                while (true) {
                    inline for (0..2) |_| {
                        const block: Block = slice[i..][0..block_len].*;
                        const matches = block == mask;
                        if (@reduce(.Or, matches)) {
                            return i + std.simd.firstTrue(matches).?;
                        }
                        i += block_len;
                    }
                    if (i + 2 * block_len >= slice.len) break;
                }
            }

            // {block_len, block_len / 2} check
            inline for (0..2) |j| {
                const block_x_len = block_len / (1 << j);
                comptime if (block_x_len < 4) break;

                const BlockX = @Vector(block_x_len, T);
                if (i + block_x_len < slice.len) {
                    const mask: BlockX = @splat(value);
                    const block: BlockX = slice[i..][0..block_x_len].*;
                    const matches = block == mask;
                    if (@reduce(.Or, matches)) {
                        return i + std.simd.firstTrue(matches).?;
                    }
                    i += block_x_len;
                }
            }
        }
    }

    for (slice[i..], i..) |c, j| {
        if (c == value) return j;
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `start\_index` | `usize` | – | – |
| `value` | `T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofany"></a>`indexOfAny`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn indexOfAny(comptime T: type, slice: []const T, values: []const T) ?usize {
    return indexOfAnyPos(T, slice, 0, values);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `values` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-lastindexofany"></a>`lastIndexOfAny`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn lastIndexOfAny(comptime T: type, slice: []const T, values: []const T) ?usize {
    var i: usize = slice.len;
    while (i != 0) {
        i -= 1;
        for (values) |value| {
            if (slice[i] == value) return i;
        }
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `values` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofanypos"></a>`indexOfAnyPos`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn indexOfAnyPos(comptime T: type, slice: []const T, start_index: usize, values: []const T) ?usize {
    if (start_index >= slice.len) return null;
    for (slice[start_index..], start_index..) |c, i| {
        for (values) |value| {
            if (c == value) return i;
        }
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `start\_index` | `usize` | – | – |
| `values` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofnone"></a>`indexOfNone`

<details class="declaration-card" open>
<summary>Function – Find the first item in `slice` which is not contained in `values`</summary>

Find the first item in `slice` which is not contained in `values`.

Comparable to `strspn` in the C standard library.

```zig
pub fn indexOfNone(comptime T: type, slice: []const T, values: []const T) ?usize {
    return indexOfNonePos(T, slice, 0, values);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `values` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-lastindexofnone"></a>`lastIndexOfNone`

<details class="declaration-card" open>
<summary>Function – Find the last item in `slice` which is not contained in `values`</summary>

Find the last item in `slice` which is not contained in `values`.

Like `strspn` in the C standard library, but searches from the end.

```zig
pub fn lastIndexOfNone(comptime T: type, slice: []const T, values: []const T) ?usize {
    var i: usize = slice.len;
    outer: while (i != 0) {
        i -= 1;
        for (values) |value| {
            if (slice[i] == value) continue :outer;
        }
        return i;
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `values` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofnonepos"></a>`indexOfNonePos`

<details class="declaration-card" open>
<summary>Function – Find the first item in `slice[start_index</summary>

Find the first item in `slice[start_index..]` which is not contained in `values`.
The returned index will be relative to the start of `slice`, and never less than `start_index`.

Comparable to `strspn` in the C standard library.

```zig
pub fn indexOfNonePos(comptime T: type, slice: []const T, start_index: usize, values: []const T) ?usize {
    if (start_index >= slice.len) return null;
    outer: for (slice[start_index..], start_index..) |c, i| {
        for (values) |value| {
            if (c == value) continue :outer;
        }
        return i;
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| `start\_index` | `usize` | – | – |
| `values` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexof"></a>`indexOf`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn indexOf(comptime T: type, haystack: []const T, needle: []const T) ?usize {
    return indexOfPos(T, haystack, 0, needle);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-lastindexoflinear"></a>`lastIndexOfLinear`

<details class="declaration-card" open>
<summary>Function – Find the index in a slice of a sub-slice, searching from the end backwards</summary>

Find the index in a slice of a sub-slice, searching from the end backwards.
To start looking at a different index, slice the haystack first.
Consider using `lastIndexOf` instead of this, which will automatically use a
more sophisticated algorithm on larger inputs.

```zig
pub fn lastIndexOfLinear(comptime T: type, haystack: []const T, needle: []const T) ?usize {
    if (needle.len > haystack.len) return null;
    var i: usize = haystack.len - needle.len;
    while (true) : (i -= 1) {
        if (mem.eql(T, haystack[i..][0..needle.len], needle)) return i;
        if (i == 0) return null;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofposlinear"></a>`indexOfPosLinear`

<details class="declaration-card" open>
<summary>Function – Consider using `indexOfPos` instead of this, which will automatically use a</summary>

Consider using `indexOfPos` instead of this, which will automatically use a
more sophisticated algorithm on larger inputs.

```zig
pub fn indexOfPosLinear(comptime T: type, haystack: []const T, start_index: usize, needle: []const T) ?usize {
    if (needle.len > haystack.len) return null;
    var i: usize = start_index;
    const end = haystack.len - needle.len;
    while (i <= end) : (i += 1) {
        if (eql(T, haystack[i..][0..needle.len], needle)) return i;
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `start\_index` | `usize` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-lastindexof"></a>`lastIndexOf`

<details class="declaration-card" open>
<summary>Function – Find the index in a slice of a sub-slice, searching from the end backwards</summary>

Find the index in a slice of a sub-slice, searching from the end backwards.
To start looking at a different index, slice the haystack first.
Uses the Reverse Boyer-Moore-Horspool algorithm on large inputs;
`lastIndexOfLinear` on small inputs.

```zig
pub fn lastIndexOf(comptime T: type, haystack: []const T, needle: []const T) ?usize {
    if (needle.len > haystack.len) return null;
    if (needle.len == 0) return haystack.len;

    if (!std.meta.hasUniqueRepresentation(T) or haystack.len < 52 or needle.len <= 4)
        return lastIndexOfLinear(T, haystack, needle);

    const haystack_bytes = sliceAsBytes(haystack);
    const needle_bytes = sliceAsBytes(needle);

    var skip_table: [256]usize = undefined;
    boyerMooreHorspoolPreprocessReverse(needle_bytes, skip_table[0..]);

    var i: usize = haystack_bytes.len - needle_bytes.len;
    while (true) {
        if (i % @sizeOf(T) == 0 and mem.eql(u8, haystack_bytes[i .. i + needle_bytes.len], needle_bytes)) {
            return @divExact(i, @sizeOf(T));
        }
        const skip = skip_table[haystack_bytes[i]];
        if (skip > i) break;
        i -= skip;
    }

    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-indexofpos"></a>`indexOfPos`

<details class="declaration-card" open>
<summary>Function – Uses Boyer-Moore-Horspool algorithm on large inputs; `indexOfPosLinear` on small inputs</summary>

Uses Boyer-Moore-Horspool algorithm on large inputs; `indexOfPosLinear` on small inputs.

```zig
pub fn indexOfPos(comptime T: type, haystack: []const T, start_index: usize, needle: []const T) ?usize {
    if (needle.len > haystack.len) return null;
    if (needle.len < 2) {
        if (needle.len == 0) return start_index;
        // indexOfScalarPos is significantly faster than indexOfPosLinear
        return indexOfScalarPos(T, haystack, start_index, needle[0]);
    }

    if (!std.meta.hasUniqueRepresentation(T) or haystack.len < 52 or needle.len <= 4)
        return indexOfPosLinear(T, haystack, start_index, needle);

    const haystack_bytes = sliceAsBytes(haystack);
    const needle_bytes = sliceAsBytes(needle);

    var skip_table: [256]usize = undefined;
    boyerMooreHorspoolPreprocess(needle_bytes, skip_table[0..]);

    var i: usize = start_index * @sizeOf(T);
    while (i <= haystack_bytes.len - needle_bytes.len) {
        if (i % @sizeOf(T) == 0 and mem.eql(u8, haystack_bytes[i .. i + needle_bytes.len], needle_bytes)) {
            return @divExact(i, @sizeOf(T));
        }
        i += skip_table[haystack_bytes[i + needle_bytes.len - 1]];
    }

    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `start\_index` | `usize` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-count"></a>`count`

<details class="declaration-card" open>
<summary>Function – Returns the number of needles inside the haystack</summary>

Returns the number of needles inside the haystack
needle.len must be > 0
does not count overlapping needles

```zig
pub fn count(comptime T: type, haystack: []const T, needle: []const T) usize {
    assert(needle.len > 0);
    var i: usize = 0;
    var found: usize = 0;

    while (indexOfPos(T, haystack, i, needle)) |idx| {
        i = idx + needle.len;
        found += 1;
    }

    return found;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-containsatleast"></a>`containsAtLeast`

<details class="declaration-card" open>
<summary>Function – Returns true if the haystack contains expected_count or more needles</summary>

Returns true if the haystack contains expected_count or more needles
needle.len must be > 0
does not count overlapping needles
//
See also: `containsAtLeastScalar`

```zig
pub fn containsAtLeast(comptime T: type, haystack: []const T, expected_count: usize, needle: []const T) bool {
    assert(needle.len > 0);
    if (expected_count == 0) return true;

    var i: usize = 0;
    var found: usize = 0;

    while (indexOfPos(T, haystack, i, needle)) |idx| {
        i = idx + needle.len;
        found += 1;
        if (found == expected_count) return true;
    }
    return false;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `expected\_count` | `usize` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-containsatleastscalar"></a>`containsAtLeastScalar`

<details class="declaration-card" open>
<summary>Function – Returns true if the haystack contains expected_count or more needles</summary>

Returns true if the haystack contains expected_count or more needles
//
See also: `containsAtLeast`

```zig
pub fn containsAtLeastScalar(comptime T: type, haystack: []const T, expected_count: usize, needle: T) bool {
    if (expected_count == 0) return true;

    var found: usize = 0;

    for (haystack) |item| {
        if (item == needle) {
            found += 1;
            if (found == expected_count) return true;
        }
    }

    return false;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `expected\_count` | `usize` | – | – |
| `needle` | `T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-readvarint"></a>`readVarInt`

<details class="declaration-card" open>
<summary>Function – Reads an integer from memory with size equal to bytes</summary>

Reads an integer from memory with size equal to bytes.len.
T specifies the return type, which must be large enough to store
the result.

```zig
pub fn readVarInt(comptime ReturnType: type, bytes: []const u8, endian: Endian) ReturnType {
    assert(@typeInfo(ReturnType).int.bits >= bytes.len * 8);
    const bits = @typeInfo(ReturnType).int.bits;
    const signedness = @typeInfo(ReturnType).int.signedness;
    const WorkType = std.meta.Int(signedness, @max(16, bits));
    var result: WorkType = 0;
    switch (endian) {
        .big => {
            for (bytes) |b| {
                result = (result << 8) | b;
            }
        },
        .little => {
            const ShiftType = math.Log2Int(WorkType);
            for (bytes, 0..) |b, index| {
                result = result | (@as(WorkType, b) << @as(ShiftType, @intCast(index * 8)));
            }
        },
    }
    return @truncate(result);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ReturnType` | `type` | – | – |
| `bytes` | `[]const u8` | – | – |
| `endian` | `Endian` | – | – |
| Return | `ReturnType` | – | – |

</details>

---

### <a id="fn-readvarpackedint"></a>`readVarPackedInt`

<details class="declaration-card" open>
<summary>Function – Loads an integer from packed memory with provided bit_count, bit_offset, and signedness</summary>

Loads an integer from packed memory with provided bit_count, bit_offset, and signedness.
Asserts that T is large enough to store the read value.

```zig
pub fn readVarPackedInt(
    comptime T: type,
    bytes: []const u8,
    bit_offset: usize,
    bit_count: usize,
    endian: std.builtin.Endian,
    signedness: std.builtin.Signedness,
) T {
    const uN = std.meta.Int(.unsigned, @bitSizeOf(T));
    const iN = std.meta.Int(.signed, @bitSizeOf(T));
    const Log2N = std.math.Log2Int(T);

    const read_size = (bit_count + (bit_offset % 8) + 7) / 8;
    const bit_shift = @as(u3, @intCast(bit_offset % 8));
    const pad = @as(Log2N, @intCast(@bitSizeOf(T) - bit_count));

    const lowest_byte = switch (endian) {
        .big => bytes.len - (bit_offset / 8) - read_size,
        .little => bit_offset / 8,
    };
    const read_bytes = bytes[lowest_byte..][0..read_size];

    if (@bitSizeOf(T) <= 8) {
        // These are the same shifts/masks we perform below, but adds `@truncate`/`@intCast`
        // where needed since int is smaller than a byte.
        const value = if (read_size == 1) b: {
            break :b @as(uN, @truncate(read_bytes[0] >> bit_shift));
        } else b: {
            const i: u1 = @intFromBool(endian == .big);
            const head = @as(uN, @truncate(read_bytes[i] >> bit_shift));
            const tail_shift = @as(Log2N, @intCast(@as(u4, 8) - bit_shift));
            const tail = @as(uN, @truncate(read_bytes[1 - i]));
            break :b (tail << tail_shift) | head;
        };
        switch (signedness) {
            .signed => return @as(T, @intCast((@as(iN, @bitCast(value)) << pad) >> pad)),
            .unsigned => return @as(T, @intCast((@as(uN, @bitCast(value)) << pad) >> pad)),
        }
    }

    // Copy the value out (respecting endianness), accounting for bit_shift
    var int: uN = 0;
    switch (endian) {
        .big => {
            for (read_bytes[0 .. read_size - 1]) |elem| {
                int = elem | (int << 8);
            }
            int = (read_bytes[read_size - 1] >> bit_shift) | (int << (@as(u4, 8) - bit_shift));
        },
        .little => {
            int = read_bytes[0] >> bit_shift;
            for (read_bytes[1..], 0..) |elem, i| {
                int |= (@as(uN, elem) << @as(Log2N, @intCast((8 * (i + 1) - bit_shift))));
            }
        },
    }
    switch (signedness) {
        .signed => return @as(T, @intCast((@as(iN, @bitCast(int)) << pad) >> pad)),
        .unsigned => return @as(T, @intCast((@as(uN, @bitCast(int)) << pad) >> pad)),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `bytes` | `[]const u8` | – | – |
| `bit\_offset` | `usize` | – | – |
| `bit\_count` | `usize` | – | – |
| `endian` | `std.builtin.Endian` | – | – |
| `signedness` | `std.builtin.Signedness` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-readint"></a>`readInt`

<details class="declaration-card" open>
<summary>Function – Reads an integer from memory with bit count specified by T</summary>

Reads an integer from memory with bit count specified by T.
The bit count of T must be evenly divisible by 8.
This function cannot fail and cannot cause undefined behavior.

```zig
pub inline fn readInt(comptime T: type, buffer: *const [@divExact(@typeInfo(T).int.bits, 8)]u8, endian: Endian) T {
    const value: T = @bitCast(buffer.*);
    return if (endian == native_endian) value else @byteSwap(value);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `*const [@divExact(@typeInfo(T).int.bits, 8)]u8` | – | – |
| `endian` | `Endian` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-readpackedint"></a>`readPackedInt`

<details class="declaration-card" open>
<summary>Function – Loads an integer from packed memory</summary>

Loads an integer from packed memory.
Asserts that buffer contains at least bit_offset + @bitSizeOf(T) bits.

```zig
pub fn readPackedInt(comptime T: type, bytes: []const u8, bit_offset: usize, endian: Endian) T {
    switch (endian) {
        .little => return readPackedIntLittle(T, bytes, bit_offset),
        .big => return readPackedIntBig(T, bytes, bit_offset),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `bytes` | `[]const u8` | – | – |
| `bit\_offset` | `usize` | – | – |
| `endian` | `Endian` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-writeint"></a>`writeInt`

<details class="declaration-card" open>
<summary>Function – Writes an integer to memory, storing it in twos-complement</summary>

Writes an integer to memory, storing it in twos-complement.
This function always succeeds, has defined behavior for all inputs, but
the integer bit width must be divisible by 8.

```zig
pub inline fn writeInt(comptime T: type, buffer: *[@divExact(@typeInfo(T).int.bits, 8)]u8, value: T, endian: Endian) void {
    buffer.* = @bitCast(if (endian == native_endian) value else @byteSwap(value));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `*[@divExact(@typeInfo(T).int.bits, 8)]u8` | – | – |
| `value` | `T` | – | – |
| `endian` | `Endian` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-writepackedint"></a>`writePackedInt`

<details class="declaration-card" open>
<summary>Function – Stores an integer to packed memory</summary>

Stores an integer to packed memory.
Asserts that buffer contains at least bit_offset + @bitSizeOf(T) bits.

```zig
pub fn writePackedInt(comptime T: type, bytes: []u8, bit_offset: usize, value: T, endian: Endian) void {
    switch (endian) {
        .little => writePackedIntLittle(T, bytes, bit_offset, value),
        .big => writePackedIntBig(T, bytes, bit_offset, value),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `bytes` | `[]u8` | – | – |
| `bit\_offset` | `usize` | – | – |
| `value` | `T` | – | – |
| `endian` | `Endian` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-writevarpackedint"></a>`writeVarPackedInt`

<details class="declaration-card" open>
<summary>Function – Stores an integer to packed memory with provided bit_offset, bit_count, and signedness</summary>

Stores an integer to packed memory with provided bit_offset, bit_count, and signedness.
If negative, the written value is sign-extended.

```zig
pub fn writeVarPackedInt(bytes: []u8, bit_offset: usize, bit_count: usize, value: anytype, endian: std.builtin.Endian) void {
    const T = @TypeOf(value);
    const uN = std.meta.Int(.unsigned, @bitSizeOf(T));

    const bit_shift = @as(u3, @intCast(bit_offset % 8));
    const write_size = (bit_count + bit_shift + 7) / 8;
    const lowest_byte = switch (endian) {
        .big => bytes.len - (bit_offset / 8) - write_size,
        .little => bit_offset / 8,
    };
    const write_bytes = bytes[lowest_byte..][0..write_size];

    if (write_size == 0) {
        return;
    } else if (write_size == 1) {
        // Single byte writes are handled specially, since we need to mask bits
        // on both ends of the byte.
        const mask = (@as(u8, 0xff) >> @as(u3, @intCast(8 - bit_count)));
        const new_bits = @as(u8, @intCast(@as(uN, @bitCast(value)) & mask)) << bit_shift;
        write_bytes[0] = (write_bytes[0] & ~(mask << bit_shift)) | new_bits;
        return;
    }

    var remaining: T = value;

    // Iterate bytes forward for Little-endian, backward for Big-endian
    const delta: i2 = if (endian == .big) -1 else 1;
    const start = if (endian == .big) @as(isize, @intCast(write_bytes.len - 1)) else 0;

    var i: isize = start; // isize for signed index arithmetic

    // Write first byte, using a mask to protects bits preceding bit_offset
    const head_mask = @as(u8, 0xff) >> bit_shift;
    write_bytes[@intCast(i)] &= ~(head_mask << bit_shift);
    write_bytes[@intCast(i)] |= @as(u8, @intCast(@as(uN, @bitCast(remaining)) & head_mask)) << bit_shift;
    remaining = math.shr(T, remaining, @as(u4, 8) - bit_shift);
    i += delta;

    // Write bytes[1..bytes.len - 1]
    if (@bitSizeOf(T) > 8) {
        const loop_end = start + delta * (@as(isize, @intCast(write_size)) - 1);
        while (i != loop_end) : (i += delta) {
            write_bytes[@as(usize, @intCast(i))] = @as(u8, @truncate(@as(uN, @bitCast(remaining))));
            remaining >>= 8;
        }
    }

    // Write last byte, using a mask to protect bits following bit_offset + bit_count
    const following_bits = -%@as(u3, @truncate(bit_shift + bit_count));
    const tail_mask = (@as(u8, 0xff) << following_bits) >> following_bits;
    write_bytes[@as(usize, @intCast(i))] &= ~tail_mask;
    write_bytes[@as(usize, @intCast(i))] |= @as(u8, @intCast(@as(uN, @bitCast(remaining)) & tail_mask));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]u8` | – | – |
| `bit\_offset` | `usize` | – | – |
| `bit\_count` | `usize` | – | – |
| `value` | `` | – | – |
| `endian` | `std.builtin.Endian` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-byteswapallfields"></a>`byteSwapAllFields`

<details class="declaration-card" open>
<summary>Function – Swap the byte order of all the members of the fields of a struct</summary>

Swap the byte order of all the members of the fields of a struct
(Changing their endianness)

```zig
pub fn byteSwapAllFields(comptime S: type, ptr: *S) void {
    switch (@typeInfo(S)) {
        .@"struct" => {
            inline for (std.meta.fields(S)) |f| {
                switch (@typeInfo(f.type)) {
                    .@"struct" => |struct_info| if (struct_info.backing_integer) |Int| {
                        @field(ptr, f.name) = @bitCast(@byteSwap(@as(Int, @bitCast(@field(ptr, f.name)))));
                    } else {
                        byteSwapAllFields(f.type, &@field(ptr, f.name));
                    },
                    .@"union", .array => byteSwapAllFields(f.type, &@field(ptr, f.name)),
                    .@"enum" => {
                        @field(ptr, f.name) = @enumFromInt(@byteSwap(@intFromEnum(@field(ptr, f.name))));
                    },
                    .bool => {},
                    .float => |float_info| {
                        @field(ptr, f.name) = @bitCast(@byteSwap(@as(std.meta.Int(.unsigned, float_info.bits), @bitCast(@field(ptr, f.name)))));
                    },
                    else => {
                        @field(ptr, f.name) = @byteSwap(@field(ptr, f.name));
                    },
                }
            }
        },
        .@"union" => |union_info| {
            if (union_info.tag_type != null) {
                @compileError("byteSwapAllFields expects an untagged union");
            }

            const first_size = @bitSizeOf(union_info.fields[0].type);
            inline for (union_info.fields) |field| {
                if (@bitSizeOf(field.type) != first_size) {
                    @compileError("Unable to byte-swap unions with varying field sizes");
                }
            }

            const BackingInt = std.meta.Int(.unsigned, @bitSizeOf(S));
            ptr.* = @bitCast(@byteSwap(@as(BackingInt, @bitCast(ptr.*))));
        },
        .array => |info| {
            byteSwapAllElements(info.child, ptr);
        },
        else => {
            ptr.* = @byteSwap(ptr.*);
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `S` | `type` | – | – |
| `ptr` | `*S` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-byteswapallelements"></a>`byteSwapAllElements`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn byteSwapAllElements(comptime Elem: type, slice: []Elem) void {
    for (slice) |*elem| {
        switch (@typeInfo(@TypeOf(elem.*))) {
            .@"struct", .@"union", .array => byteSwapAllFields(@TypeOf(elem.*), elem),
            .@"enum" => {
                elem.* = @enumFromInt(@byteSwap(@intFromEnum(elem.*)));
            },
            .bool => {},
            .float => |float_info| {
                elem.* = @bitCast(@byteSwap(@as(std.meta.Int(.unsigned, float_info.bits), @bitCast(elem.*))));
            },
            else => {
                elem.* = @byteSwap(elem.*);
            },
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `Elem` | `type` | – | – |
| `slice` | `[]Elem` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-tokenizeany"></a>`tokenizeAny`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates over the slices of `buffer` that are not</summary>

Returns an iterator that iterates over the slices of `buffer` that are not
any of the items in `delimiters`.

`tokenizeAny(u8, "   abc|def ||  ghi  ", " |")` will return slices
for "abc", "def", "ghi", null, in that order.

If `buffer` is empty, the iterator will return null.
If none of `delimiters` exist in buffer,
the iterator will return `buffer`, null, in that order.

See also: `tokenizeSequence`, `tokenizeScalar`,
          `splitSequence`,`splitAny`, `splitScalar`,
          `splitBackwardsSequence`, `splitBackwardsAny`, and `splitBackwardsScalar`

```zig
pub fn tokenizeAny(comptime T: type, buffer: []const T, delimiters: []const T) TokenIterator(T, .any) {
    return .{
        .index = 0,
        .buffer = buffer,
        .delimiter = delimiters,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiters` | `[]const T` | – | – |
| Return | `TokenIterator(T, .any)` | – | – |

</details>

---

### <a id="fn-tokenizesequence"></a>`tokenizeSequence`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates over the slices of `buffer` that are not</summary>

Returns an iterator that iterates over the slices of `buffer` that are not
the sequence in `delimiter`.

`tokenizeSequence(u8, "<>abc><def<><>ghi", "<>")` will return slices
for "abc><def", "ghi", null, in that order.

If `buffer` is empty, the iterator will return null.
If `delimiter` does not exist in buffer,
the iterator will return `buffer`, null, in that order.
The delimiter length must not be zero.

See also: `tokenizeAny`, `tokenizeScalar`,
          `splitSequence`,`splitAny`, and `splitScalar`
          `splitBackwardsSequence`, `splitBackwardsAny`, and `splitBackwardsScalar`

```zig
pub fn tokenizeSequence(comptime T: type, buffer: []const T, delimiter: []const T) TokenIterator(T, .sequence) {
    assert(delimiter.len != 0);
    return .{
        .index = 0,
        .buffer = buffer,
        .delimiter = delimiter,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiter` | `[]const T` | – | – |
| Return | `TokenIterator(T, .sequence)` | – | – |

</details>

---

### <a id="fn-tokenizescalar"></a>`tokenizeScalar`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates over the slices of `buffer` that are not</summary>

Returns an iterator that iterates over the slices of `buffer` that are not
`delimiter`.

`tokenizeScalar(u8, "   abc def     ghi  ", ' ')` will return slices
for "abc", "def", "ghi", null, in that order.

If `buffer` is empty, the iterator will return null.
If `delimiter` does not exist in buffer,
the iterator will return `buffer`, null, in that order.

See also: `tokenizeAny`, `tokenizeSequence`,
          `splitSequence`,`splitAny`, and `splitScalar`
          `splitBackwardsSequence`, `splitBackwardsAny`, and `splitBackwardsScalar`

```zig
pub fn tokenizeScalar(comptime T: type, buffer: []const T, delimiter: T) TokenIterator(T, .scalar) {
    return .{
        .index = 0,
        .buffer = buffer,
        .delimiter = delimiter,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiter` | `T` | – | – |
| Return | `TokenIterator(T, .scalar)` | – | – |

</details>

---

### <a id="fn-splitsequence"></a>`splitSequence`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates over the slices of `buffer` that</summary>

Returns an iterator that iterates over the slices of `buffer` that
are separated by the byte sequence in `delimiter`.

`splitSequence(u8, "abc||def||||ghi", "||")` will return slices
for "abc", "def", "", "ghi", null, in that order.

If `delimiter` does not exist in buffer,
the iterator will return `buffer`, null, in that order.
The delimiter length must not be zero.

See also: `splitAny`, `splitScalar`, `splitBackwardsSequence`,
          `splitBackwardsAny`,`splitBackwardsScalar`,
          `tokenizeAny`, `tokenizeSequence`, and `tokenizeScalar`.

```zig
pub fn splitSequence(comptime T: type, buffer: []const T, delimiter: []const T) SplitIterator(T, .sequence) {
    assert(delimiter.len != 0);
    return .{
        .index = 0,
        .buffer = buffer,
        .delimiter = delimiter,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiter` | `[]const T` | – | – |
| Return | `SplitIterator(T, .sequence)` | – | – |

</details>

---

### <a id="fn-splitany"></a>`splitAny`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates over the slices of `buffer` that</summary>

Returns an iterator that iterates over the slices of `buffer` that
are separated by any item in `delimiters`.

`splitAny(u8, "abc,def||ghi", "|,")` will return slices
for "abc", "def", "", "ghi", null, in that order.

If none of `delimiters` exist in buffer,
the iterator will return `buffer`, null, in that order.

See also: `splitSequence`, `splitScalar`, `splitBackwardsSequence`,
          `splitBackwardsAny`,`splitBackwardsScalar`,
          `tokenizeAny`, `tokenizeSequence`, and `tokenizeScalar`.

```zig
pub fn splitAny(comptime T: type, buffer: []const T, delimiters: []const T) SplitIterator(T, .any) {
    return .{
        .index = 0,
        .buffer = buffer,
        .delimiter = delimiters,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiters` | `[]const T` | – | – |
| Return | `SplitIterator(T, .any)` | – | – |

</details>

---

### <a id="fn-splitscalar"></a>`splitScalar`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates over the slices of `buffer` that</summary>

Returns an iterator that iterates over the slices of `buffer` that
are separated by `delimiter`.

`splitScalar(u8, "abc|def||ghi", '|')` will return slices
for "abc", "def", "", "ghi", null, in that order.

If `delimiter` does not exist in buffer,
the iterator will return `buffer`, null, in that order.

See also: `splitSequence`, `splitAny`, `splitBackwardsSequence`,
          `splitBackwardsAny`,`splitBackwardsScalar`,
          `tokenizeAny`, `tokenizeSequence`, and `tokenizeScalar`.

```zig
pub fn splitScalar(comptime T: type, buffer: []const T, delimiter: T) SplitIterator(T, .scalar) {
    return .{
        .index = 0,
        .buffer = buffer,
        .delimiter = delimiter,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiter` | `T` | – | – |
| Return | `SplitIterator(T, .scalar)` | – | – |

</details>

---

### <a id="fn-splitbackwardssequence"></a>`splitBackwardsSequence`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates backwards over the slices of `buffer` that</summary>

Returns an iterator that iterates backwards over the slices of `buffer` that
are separated by the sequence in `delimiter`.

`splitBackwardsSequence(u8, "abc||def||||ghi", "||")` will return slices
for "ghi", "", "def", "abc", null, in that order.

If `delimiter` does not exist in buffer,
the iterator will return `buffer`, null, in that order.
The delimiter length must not be zero.

See also: `splitBackwardsAny`, `splitBackwardsScalar`,
          `splitSequence`, `splitAny`,`splitScalar`,
          `tokenizeAny`, `tokenizeSequence`, and `tokenizeScalar`.

```zig
pub fn splitBackwardsSequence(comptime T: type, buffer: []const T, delimiter: []const T) SplitBackwardsIterator(T, .sequence) {
    assert(delimiter.len != 0);
    return .{
        .index = buffer.len,
        .buffer = buffer,
        .delimiter = delimiter,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiter` | `[]const T` | – | – |
| Return | `SplitBackwardsIterator(T, .sequence)` | – | – |

</details>

---

### <a id="fn-splitbackwardsany"></a>`splitBackwardsAny`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates backwards over the slices of `buffer` that</summary>

Returns an iterator that iterates backwards over the slices of `buffer` that
are separated by any item in `delimiters`.

`splitBackwardsAny(u8, "abc,def||ghi", "|,")` will return slices
for "ghi", "", "def", "abc", null, in that order.

If none of `delimiters` exist in buffer,
the iterator will return `buffer`, null, in that order.

See also: `splitBackwardsSequence`, `splitBackwardsScalar`,
          `splitSequence`, `splitAny`,`splitScalar`,
          `tokenizeAny`, `tokenizeSequence`, and `tokenizeScalar`.

```zig
pub fn splitBackwardsAny(comptime T: type, buffer: []const T, delimiters: []const T) SplitBackwardsIterator(T, .any) {
    return .{
        .index = buffer.len,
        .buffer = buffer,
        .delimiter = delimiters,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiters` | `[]const T` | – | – |
| Return | `SplitBackwardsIterator(T, .any)` | – | – |

</details>

---

### <a id="fn-splitbackwardsscalar"></a>`splitBackwardsScalar`

<details class="declaration-card" open>
<summary>Function – Returns an iterator that iterates backwards over the slices of `buffer` that</summary>

Returns an iterator that iterates backwards over the slices of `buffer` that
are separated by `delimiter`.

`splitBackwardsScalar(u8, "abc|def||ghi", '|')` will return slices
for "ghi", "", "def", "abc", null, in that order.

If `delimiter` does not exist in buffer,
the iterator will return `buffer`, null, in that order.

See also: `splitBackwardsSequence`, `splitBackwardsAny`,
          `splitSequence`, `splitAny`,`splitScalar`,
          `tokenizeAny`, `tokenizeSequence`, and `tokenizeScalar`.

```zig
pub fn splitBackwardsScalar(comptime T: type, buffer: []const T, delimiter: T) SplitBackwardsIterator(T, .scalar) {
    return .{
        .index = buffer.len,
        .buffer = buffer,
        .delimiter = delimiter,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `delimiter` | `T` | – | – |
| Return | `SplitBackwardsIterator(T, .scalar)` | – | – |

</details>

---

### <a id="fn-window"></a>`window`

<details class="declaration-card" open>
<summary>Function – Returns an iterator with a sliding window of slices for `buffer`</summary>

Returns an iterator with a sliding window of slices for `buffer`.
The sliding window has length `size` and on every iteration moves
forward by `advance`.

Extract data for moving average with:
`window(u8, "abcdefg", 3, 1)` will return slices
"abc", "bcd", "cde", "def", "efg", null, in that order.

Chunk or split every N items with:
`window(u8, "abcdefg", 3, 3)` will return slices
"abc", "def", "g", null, in that order.

Pick every even index with:
`window(u8, "abcdefg", 1, 2)` will return slices
"a", "c", "e", "g" null, in that order.

The `size` and `advance` must be not be zero.

```zig
pub fn window(comptime T: type, buffer: []const T, size: usize, advance: usize) WindowIterator(T) {
    assert(size != 0);
    assert(advance != 0);
    return .{
        .index = 0,
        .buffer = buffer,
        .size = size,
        .advance = advance,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `buffer` | `[]const T` | – | – |
| `size` | `usize` | – | – |
| `advance` | `usize` | – | – |
| Return | `WindowIterator(T)` | – | – |

</details>

---

### <a id="fn-windowiterator"></a>`WindowIterator`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn WindowIterator(comptime T: type) type {
    return struct {
        buffer: []const T,
        index: ?usize,
        size: usize,
        advance: usize,

        const Self = @This();

        /// Returns a slice of the first window.
        /// Call this only to get the first window and then use `next` to get
        /// all subsequent windows.
        /// Asserts that iteration has not begun.
        pub fn first(self: *Self) []const T {
            assert(self.index.? == 0);
            return self.next().?;
        }

        /// Returns a slice of the next window, or null if window is at end.
        pub fn next(self: *Self) ?[]const T {
            const start = self.index orelse return null;
            const next_index = start + self.advance;
            const end = if (start + self.size < self.buffer.len and next_index < self.buffer.len) blk: {
                self.index = next_index;
                break :blk start + self.size;
            } else blk: {
                self.index = null;
                break :blk self.buffer.len;
            };

            return self.buffer[start..end];
        }

        /// Resets the iterator to the initial window.
        pub fn reset(self: *Self) void {
            self.index = 0;
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-startswith"></a>`startsWith`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn startsWith(comptime T: type, haystack: []const T, needle: []const T) bool {
    return if (needle.len > haystack.len) false else eql(T, haystack[0..needle.len], needle);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-endswith"></a>`endsWith`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn endsWith(comptime T: type, haystack: []const T, needle: []const T) bool {
    return if (needle.len > haystack.len) false else eql(T, haystack[haystack.len - needle.len ..], needle);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `haystack` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-tokeniterator"></a>`TokenIterator`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn TokenIterator(comptime T: type, comptime delimiter_type: DelimiterType) type {
    return struct {
        buffer: []const T,
        delimiter: switch (delimiter_type) {
            .sequence, .any => []const T,
            .scalar => T,
        },
        index: usize,

        const Self = @This();

        /// Returns a slice of the current token, or null if tokenization is
        /// complete, and advances to the next token.
        pub fn next(self: *Self) ?[]const T {
            const result = self.peek() orelse return null;
            self.index += result.len;
            return result;
        }

        /// Returns a slice of the current token, or null if tokenization is
        /// complete. Does not advance to the next token.
        pub fn peek(self: *Self) ?[]const T {
            // move to beginning of token
            while (self.index < self.buffer.len and self.isDelimiter(self.index)) : (self.index += switch (delimiter_type) {
                .sequence => self.delimiter.len,
                .any, .scalar => 1,
            }) {}
            const start = self.index;
            if (start == self.buffer.len) {
                return null;
            }

            // move to end of token
            var end = start;
            while (end < self.buffer.len and !self.isDelimiter(end)) : (end += 1) {}

            return self.buffer[start..end];
        }

        /// Returns a slice of the remaining bytes. Does not affect iterator state.
        pub fn rest(self: Self) []const T {
            // move to beginning of token
            var index: usize = self.index;
            while (index < self.buffer.len and self.isDelimiter(index)) : (index += switch (delimiter_type) {
                .sequence => self.delimiter.len,
                .any, .scalar => 1,
            }) {}
            return self.buffer[index..];
        }

        /// Resets the iterator to the initial token.
        pub fn reset(self: *Self) void {
            self.index = 0;
        }

        fn isDelimiter(self: Self, index: usize) bool {
            switch (delimiter_type) {
                .sequence => return startsWith(T, self.buffer[index..], self.delimiter),
                .any => {
                    const item = self.buffer[index];
                    for (self.delimiter) |delimiter_item| {
                        if (item == delimiter_item) {
                            return true;
                        }
                    }
                    return false;
                },
                .scalar => return self.buffer[index] == self.delimiter,
            }
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `delimiter\_type` | [`DelimiterType`](#type-delimitertype) | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-splititerator"></a>`SplitIterator`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn SplitIterator(comptime T: type, comptime delimiter_type: DelimiterType) type {
    return struct {
        buffer: []const T,
        index: ?usize,
        delimiter: switch (delimiter_type) {
            .sequence, .any => []const T,
            .scalar => T,
        },

        const Self = @This();

        /// Returns a slice of the first field.
        /// Call this only to get the first field and then use `next` to get all subsequent fields.
        /// Asserts that iteration has not begun.
        pub fn first(self: *Self) []const T {
            assert(self.index.? == 0);
            return self.next().?;
        }

        /// Returns a slice of the next field, or null if splitting is complete.
        pub fn next(self: *Self) ?[]const T {
            const start = self.index orelse return null;
            const end = if (switch (delimiter_type) {
                .sequence => indexOfPos(T, self.buffer, start, self.delimiter),
                .any => indexOfAnyPos(T, self.buffer, start, self.delimiter),
                .scalar => indexOfScalarPos(T, self.buffer, start, self.delimiter),
            }) |delim_start| blk: {
                self.index = delim_start + switch (delimiter_type) {
                    .sequence => self.delimiter.len,
                    .any, .scalar => 1,
                };
                break :blk delim_start;
            } else blk: {
                self.index = null;
                break :blk self.buffer.len;
            };
            return self.buffer[start..end];
        }

        /// Returns a slice of the next field, or null if splitting is complete.
        /// This method does not alter self.index.
        pub fn peek(self: *Self) ?[]const T {
            const start = self.index orelse return null;
            const end = if (switch (delimiter_type) {
                .sequence => indexOfPos(T, self.buffer, start, self.delimiter),
                .any => indexOfAnyPos(T, self.buffer, start, self.delimiter),
                .scalar => indexOfScalarPos(T, self.buffer, start, self.delimiter),
            }) |delim_start| delim_start else self.buffer.len;
            return self.buffer[start..end];
        }

        /// Returns a slice of the remaining bytes. Does not affect iterator state.
        pub fn rest(self: Self) []const T {
            const end = self.buffer.len;
            const start = self.index orelse end;
            return self.buffer[start..end];
        }

        /// Resets the iterator to the initial slice.
        pub fn reset(self: *Self) void {
            self.index = 0;
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `delimiter\_type` | [`DelimiterType`](#type-delimitertype) | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-splitbackwardsiterator"></a>`SplitBackwardsIterator`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn SplitBackwardsIterator(comptime T: type, comptime delimiter_type: DelimiterType) type {
    return struct {
        buffer: []const T,
        index: ?usize,
        delimiter: switch (delimiter_type) {
            .sequence, .any => []const T,
            .scalar => T,
        },

        const Self = @This();

        /// Returns a slice of the first field.
        /// Call this only to get the first field and then use `next` to get all subsequent fields.
        /// Asserts that iteration has not begun.
        pub fn first(self: *Self) []const T {
            assert(self.index.? == self.buffer.len);
            return self.next().?;
        }

        /// Returns a slice of the next field, or null if splitting is complete.
        pub fn next(self: *Self) ?[]const T {
            const end = self.index orelse return null;
            const start = if (switch (delimiter_type) {
                .sequence => lastIndexOf(T, self.buffer[0..end], self.delimiter),
                .any => lastIndexOfAny(T, self.buffer[0..end], self.delimiter),
                .scalar => lastIndexOfScalar(T, self.buffer[0..end], self.delimiter),
            }) |delim_start| blk: {
                self.index = delim_start;
                break :blk delim_start + switch (delimiter_type) {
                    .sequence => self.delimiter.len,
                    .any, .scalar => 1,
                };
            } else blk: {
                self.index = null;
                break :blk 0;
            };
            return self.buffer[start..end];
        }

        /// Returns a slice of the remaining bytes. Does not affect iterator state.
        pub fn rest(self: Self) []const T {
            const end = self.index orelse 0;
            return self.buffer[0..end];
        }

        /// Resets the iterator to the initial slice.
        pub fn reset(self: *Self) void {
            self.index = self.buffer.len;
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `delimiter\_type` | [`DelimiterType`](#type-delimitertype) | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-join"></a>`join`

<details class="declaration-card" open>
<summary>Function – Naively combines a series of slices with a separator</summary>

Naively combines a series of slices with a separator.
Allocates memory for the result, which must be freed by the caller.

```zig
pub fn join(allocator: Allocator, separator: []const u8, slices: []const []const u8) Allocator.Error![]u8 {
    return joinMaybeZ(allocator, separator, slices, false);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `separator` | `[]const u8` | – | – |
| `slices` | `[]const []const u8` | – | – |
| Return | `Allocator.Error![]u8` | – | – |

</details>

---

### <a id="fn-joinz"></a>`joinZ`

<details class="declaration-card" open>
<summary>Function – Naively combines a series of slices with a separator and null terminator</summary>

Naively combines a series of slices with a separator and null terminator.
Allocates memory for the result, which must be freed by the caller.

```zig
pub fn joinZ(allocator: Allocator, separator: []const u8, slices: []const []const u8) Allocator.Error![:0]u8 {
    const out = try joinMaybeZ(allocator, separator, slices, true);
    return out[0 .. out.len - 1 :0];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `separator` | `[]const u8` | – | – |
| `slices` | `[]const []const u8` | – | – |
| Return | `Allocator.Error![:0]u8` | – | – |

</details>

---

### <a id="fn-concat"></a>`concat`

<details class="declaration-card" open>
<summary>Function – Copies each T from slices into a new slice that exactly holds all the elements</summary>

Copies each T from slices into a new slice that exactly holds all the elements.

```zig
pub fn concat(allocator: Allocator, comptime T: type, slices: []const []const T) Allocator.Error![]T {
    return concatMaybeSentinel(allocator, T, slices, null);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `T` | `type` | – | – |
| `slices` | `[]const []const T` | – | – |
| Return | `Allocator.Error![]T` | – | – |

</details>

---

### <a id="fn-concatwithsentinel"></a>`concatWithSentinel`

<details class="declaration-card" open>
<summary>Function – Copies each T from slices into a new slice that exactly holds all the elements</summary>

Copies each T from slices into a new slice that exactly holds all the elements.

```zig
pub fn concatWithSentinel(allocator: Allocator, comptime T: type, slices: []const []const T, comptime s: T) Allocator.Error![:s]T {
    const ret = try concatMaybeSentinel(allocator, T, slices, s);
    return ret[0 .. ret.len - 1 :s];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `T` | `type` | – | – |
| `slices` | `[]const []const T` | – | – |
| `s` | `T` | – | – |
| Return | `Allocator.Error![:s]T` | – | – |

</details>

---

### <a id="fn-concatmaybesentinel"></a>`concatMaybeSentinel`

<details class="declaration-card" open>
<summary>Function – Copies each T from slices into a new slice that exactly holds all the elements as well as the sentinel</summary>

Copies each T from slices into a new slice that exactly holds all the elements as well as the sentinel.

```zig
pub fn concatMaybeSentinel(allocator: Allocator, comptime T: type, slices: []const []const T, comptime s: ?T) Allocator.Error![]T {
    if (slices.len == 0) return if (s) |sentinel| try allocator.dupe(T, &[1]T{sentinel}) else &[0]T{};

    const total_len = blk: {
        var sum: usize = 0;
        for (slices) |slice| {
            sum += slice.len;
        }

        if (s) |_| {
            sum += 1;
        }

        break :blk sum;
    };

    const buf = try allocator.alloc(T, total_len);
    errdefer allocator.free(buf);

    var buf_index: usize = 0;
    for (slices) |slice| {
        @memcpy(buf[buf_index .. buf_index + slice.len], slice);
        buf_index += slice.len;
    }

    if (s) |sentinel| {
        buf[buf.len - 1] = sentinel;
    }

    // No need for shrink since buf is exactly the correct size.
    return buf;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `T` | `type` | – | – |
| `slices` | `[]const []const T` | – | – |
| `s` | `?T` | – | – |
| Return | `Allocator.Error![]T` | – | – |

</details>

---

### <a id="fn-min"></a>`min`

<details class="declaration-card" open>
<summary>Function – Returns the smallest number in a slice</summary>

Returns the smallest number in a slice. O(n).
`slice` must not be empty.

```zig
pub fn min(comptime T: type, slice: []const T) T {
    assert(slice.len > 0);
    var best = slice[0];
    for (slice[1..]) |item| {
        best = @min(best, item);
    }
    return best;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-max"></a>`max`

<details class="declaration-card" open>
<summary>Function – Returns the largest number in a slice</summary>

Returns the largest number in a slice. O(n).
`slice` must not be empty.

```zig
pub fn max(comptime T: type, slice: []const T) T {
    assert(slice.len > 0);
    var best = slice[0];
    for (slice[1..]) |item| {
        best = @max(best, item);
    }
    return best;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-minmax"></a>`minMax`

<details class="declaration-card" open>
<summary>Function – Finds the smallest and largest number in a slice</summary>

Finds the smallest and largest number in a slice. O(n).
Returns an anonymous struct with the fields `min` and `max`.
`slice` must not be empty.

```zig
pub fn minMax(comptime T: type, slice: []const T) struct { T, T } {
    assert(slice.len > 0);
    var running_minimum = slice[0];
    var running_maximum = slice[0];
    for (slice[1..]) |item| {
        running_minimum = @min(running_minimum, item);
        running_maximum = @max(running_maximum, item);
    }
    return .{ running_minimum, running_maximum };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| Return | `struct { T, T }` | – | – |

</details>

---

### <a id="fn-indexofmin"></a>`indexOfMin`

<details class="declaration-card" open>
<summary>Function – Returns the index of the smallest number in a slice</summary>

Returns the index of the smallest number in a slice. O(n).
`slice` must not be empty.

```zig
pub fn indexOfMin(comptime T: type, slice: []const T) usize {
    assert(slice.len > 0);
    var best = slice[0];
    var index: usize = 0;
    for (slice[1..], 0..) |item, i| {
        if (item < best) {
            best = item;
            index = i + 1;
        }
    }
    return index;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-indexofmax"></a>`indexOfMax`

<details class="declaration-card" open>
<summary>Function – Returns the index of the largest number in a slice</summary>

Returns the index of the largest number in a slice. O(n).
`slice` must not be empty.

```zig
pub fn indexOfMax(comptime T: type, slice: []const T) usize {
    assert(slice.len > 0);
    var best = slice[0];
    var index: usize = 0;
    for (slice[1..], 0..) |item, i| {
        if (item > best) {
            best = item;
            index = i + 1;
        }
    }
    return index;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-indexofminmax"></a>`indexOfMinMax`

<details class="declaration-card" open>
<summary>Function – Finds the indices of the smallest and largest number in a slice</summary>

Finds the indices of the smallest and largest number in a slice. O(n).
Returns the indices of the smallest and largest numbers in that order.
`slice` must not be empty.

```zig
pub fn indexOfMinMax(comptime T: type, slice: []const T) struct { usize, usize } {
    assert(slice.len > 0);
    var minVal = slice[0];
    var maxVal = slice[0];
    var minIdx: usize = 0;
    var maxIdx: usize = 0;
    for (slice[1..], 0..) |item, i| {
        if (item < minVal) {
            minVal = item;
            minIdx = i + 1;
        }
        if (item > maxVal) {
            maxVal = item;
            maxIdx = i + 1;
        }
    }
    return .{ minIdx, maxIdx };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]const T` | – | – |
| Return | `struct { usize, usize }` | – | – |

</details>

---

### <a id="fn-swap"></a>`swap`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn swap(comptime T: type, a: *T, b: *T) void {
    const tmp = a.*;
    a.* = b.*;
    b.* = tmp;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `a` | `*T` | – | – |
| `b` | `*T` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-reverse"></a>`reverse`

<details class="declaration-card" open>
<summary>Function – In-place order reversal of a slice</summary>

In-place order reversal of a slice

```zig
pub fn reverse(comptime T: type, items: []T) void {
    var i: usize = 0;
    const end = items.len / 2;
    if (use_vectors and
        !@inComptime() and
        @bitSizeOf(T) > 0 and
        std.math.isPowerOfTwo(@bitSizeOf(T)))
    {
        if (std.simd.suggestVectorLength(T)) |simd_size| {
            if (simd_size <= end) {
                const simd_end = end - (simd_size - 1);
                while (i < simd_end) : (i += simd_size) {
                    const left_slice = items[i .. i + simd_size];
                    const right_slice = items[items.len - i - simd_size .. items.len - i];

                    const left_shuffled: [simd_size]T = reverseVector(simd_size, T, left_slice);
                    const right_shuffled: [simd_size]T = reverseVector(simd_size, T, right_slice);

                    @memcpy(right_slice, &left_shuffled);
                    @memcpy(left_slice, &right_shuffled);
                }
            }
        }
    }

    while (i < end) : (i += 1) {
        swap(T, &items[i], &items[items.len - i - 1]);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]T` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-reverseiterator"></a>`reverseIterator`

<details class="declaration-card" open>
<summary>Function – Iterates over a slice in reverse</summary>

Iterates over a slice in reverse.

```zig
pub fn reverseIterator(slice: anytype) ReverseIterator(@TypeOf(slice)) {
    return .{ .ptr = slice.ptr, .index = slice.len };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `slice` | `` | – | – |
| Return | `ReverseIterator(@TypeOf(slice))` | – | – |

</details>

---

### <a id="fn-rotate"></a>`rotate`

<details class="declaration-card" open>
<summary>Function – In-place rotation of the values in an array ([0 1 2 3] becomes [1 2 3 0] if we rotate by 1)</summary>

In-place rotation of the values in an array ([0 1 2 3] becomes [1 2 3 0] if we rotate by 1)
Assumes 0 <= amount <= items.len

```zig
pub fn rotate(comptime T: type, items: []T, amount: usize) void {
    reverse(T, items[0..amount]);
    reverse(T, items[amount..]);
    reverse(T, items);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `items` | `[]T` | – | – |
| `amount` | `usize` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-replace"></a>`replace`

<details class="declaration-card" open>
<summary>Function – Replace needle with replacement as many times as possible, writing to an output buffer which is assumed to be of</summary>

Replace needle with replacement as many times as possible, writing to an output buffer which is assumed to be of
appropriate size. Use replacementSize to calculate an appropriate buffer size.
The needle must not be empty.
Returns the number of replacements made.

```zig
pub fn replace(comptime T: type, input: []const T, needle: []const T, replacement: []const T, output: []T) usize {
    // Empty needle will loop until output buffer overflows.
    assert(needle.len > 0);

    var i: usize = 0;
    var slide: usize = 0;
    var replacements: usize = 0;
    while (slide < input.len) {
        if (mem.startsWith(T, input[slide..], needle)) {
            @memcpy(output[i..][0..replacement.len], replacement);
            i += replacement.len;
            slide += needle.len;
            replacements += 1;
        } else {
            output[i] = input[slide];
            i += 1;
            slide += 1;
        }
    }

    return replacements;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `input` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| `replacement` | `[]const T` | – | – |
| `output` | `[]T` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-replacescalar"></a>`replaceScalar`

<details class="declaration-card" open>
<summary>Function – Replace all occurrences of `match` with `replacement`</summary>

Replace all occurrences of `match` with `replacement`.

```zig
pub fn replaceScalar(comptime T: type, slice: []T, match: T, replacement: T) void {
    for (slice) |*e| {
        if (e.* == match)
            e.* = replacement;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]T` | – | – |
| `match` | `T` | – | – |
| `replacement` | `T` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-collapserepeatslen"></a>`collapseRepeatsLen`

<details class="declaration-card" open>
<summary>Function – Collapse consecutive duplicate elements into one entry</summary>

Collapse consecutive duplicate elements into one entry.

```zig
pub fn collapseRepeatsLen(comptime T: type, slice: []T, elem: T) usize {
    if (slice.len == 0) return 0;
    var write_idx: usize = 1;
    var read_idx: usize = 1;
    while (read_idx < slice.len) : (read_idx += 1) {
        if (slice[read_idx - 1] != elem or slice[read_idx] != elem) {
            slice[write_idx] = slice[read_idx];
            write_idx += 1;
        }
    }
    return write_idx;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]T` | – | – |
| `elem` | `T` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-collapserepeats"></a>`collapseRepeats`

<details class="declaration-card" open>
<summary>Function – Collapse consecutive duplicate elements into one entry</summary>

Collapse consecutive duplicate elements into one entry.

```zig
pub fn collapseRepeats(comptime T: type, slice: []T, elem: T) []T {
    return slice[0..collapseRepeatsLen(T, slice, elem)];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `slice` | `[]T` | – | – |
| `elem` | `T` | – | – |
| Return | `[]T` | – | – |

</details>

---

### <a id="fn-replacementsize"></a>`replacementSize`

<details class="declaration-card" open>
<summary>Function – Calculate the size needed in an output buffer to perform a replacement</summary>

Calculate the size needed in an output buffer to perform a replacement.
The needle must not be empty.

```zig
pub fn replacementSize(comptime T: type, input: []const T, needle: []const T, replacement: []const T) usize {
    // Empty needle will loop forever.
    assert(needle.len > 0);

    var i: usize = 0;
    var size: usize = input.len;
    while (i < input.len) {
        if (mem.startsWith(T, input[i..], needle)) {
            size = size - needle.len + replacement.len;
            i += needle.len;
        } else {
            i += 1;
        }
    }

    return size;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `input` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| `replacement` | `[]const T` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-replaceowned"></a>`replaceOwned`

<details class="declaration-card" open>
<summary>Function – Perform a replacement on an allocated buffer of pre-determined size</summary>

Perform a replacement on an allocated buffer of pre-determined size. Caller must free returned memory.

```zig
pub fn replaceOwned(comptime T: type, allocator: Allocator, input: []const T, needle: []const T, replacement: []const T) Allocator.Error![]T {
    const output = try allocator.alloc(T, replacementSize(T, input, needle, replacement));
    _ = replace(T, input, needle, replacement, output);
    return output;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `allocator` | `Allocator` | – | – |
| `input` | `[]const T` | – | – |
| `needle` | `[]const T` | – | – |
| `replacement` | `[]const T` | – | – |
| Return | `Allocator.Error![]T` | – | – |

</details>

---

### <a id="fn-littletonative"></a>`littleToNative`

<details class="declaration-card" open>
<summary>Function – Converts a little-endian integer to host endianness</summary>

Converts a little-endian integer to host endianness.

```zig
pub fn littleToNative(comptime T: type, x: T) T {
    return switch (native_endian) {
        .little => x,
        .big => @byteSwap(x),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-bigtonative"></a>`bigToNative`

<details class="declaration-card" open>
<summary>Function – Converts a big-endian integer to host endianness</summary>

Converts a big-endian integer to host endianness.

```zig
pub fn bigToNative(comptime T: type, x: T) T {
    return switch (native_endian) {
        .little => @byteSwap(x),
        .big => x,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-tonative"></a>`toNative`

<details class="declaration-card" open>
<summary>Function – Converts an integer from specified endianness to host endianness</summary>

Converts an integer from specified endianness to host endianness.

```zig
pub fn toNative(comptime T: type, x: T, endianness_of_x: Endian) T {
    return switch (endianness_of_x) {
        .little => littleToNative(T, x),
        .big => bigToNative(T, x),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| `endianness\_of\_x` | `Endian` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-nativeto"></a>`nativeTo`

<details class="declaration-card" open>
<summary>Function – Converts an integer which has host endianness to the desired endianness</summary>

Converts an integer which has host endianness to the desired endianness.

```zig
pub fn nativeTo(comptime T: type, x: T, desired_endianness: Endian) T {
    return switch (desired_endianness) {
        .little => nativeToLittle(T, x),
        .big => nativeToBig(T, x),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| `desired\_endianness` | `Endian` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-nativetolittle"></a>`nativeToLittle`

<details class="declaration-card" open>
<summary>Function – Converts an integer which has host endianness to little endian</summary>

Converts an integer which has host endianness to little endian.

```zig
pub fn nativeToLittle(comptime T: type, x: T) T {
    return switch (native_endian) {
        .little => x,
        .big => @byteSwap(x),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-nativetobig"></a>`nativeToBig`

<details class="declaration-card" open>
<summary>Function – Converts an integer which has host endianness to big endian</summary>

Converts an integer which has host endianness to big endian.

```zig
pub fn nativeToBig(comptime T: type, x: T) T {
    return switch (native_endian) {
        .little => @byteSwap(x),
        .big => x,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `x` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-alignpointeroffset"></a>`alignPointerOffset`

<details class="declaration-card" open>
<summary>Function – Returns the number of elements that, if added to the given pointer, align it</summary>

Returns the number of elements that, if added to the given pointer, align it
to a multiple of the given quantity, or `null` if one of the following
conditions is met:
- The aligned pointer would not fit the address space,
- The delta required to align the pointer is not a multiple of the pointee's
  type.

```zig
pub fn alignPointerOffset(ptr: anytype, align_to: usize) ?usize {
    assert(isValidAlign(align_to));

    const T = @TypeOf(ptr);
    const info = @typeInfo(T);
    if (info != .pointer or info.pointer.size != .many)
        @compileError("expected many item pointer, got " ++ @typeName(T));

    // Do nothing if the pointer is already well-aligned.
    if (align_to <= info.pointer.alignment)
        return 0;

    // Calculate the aligned base address with an eye out for overflow.
    const addr = @intFromPtr(ptr);
    var ov = @addWithOverflow(addr, align_to - 1);
    if (ov[1] != 0) return null;
    ov[0] &= ~@as(usize, align_to - 1);

    // The delta is expressed in terms of bytes, turn it into a number of child
    // type elements.
    const delta = ov[0] - addr;
    const pointee_size = @sizeOf(info.pointer.child);
    if (delta % pointee_size != 0) return null;
    return delta / pointee_size;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `` | – | – |
| `align\_to` | `usize` | – | – |
| Return | `?usize` | – | – |

</details>

---

### <a id="fn-alignpointer"></a>`alignPointer`

<details class="declaration-card" open>
<summary>Function – Aligns a given pointer value to a specified alignment factor</summary>

Aligns a given pointer value to a specified alignment factor.
Returns an aligned pointer or null if one of the following conditions is
met:
- The aligned pointer would not fit the address space,
- The delta required to align the pointer is not a multiple of the pointee's
  type.

```zig
pub fn alignPointer(ptr: anytype, align_to: usize) ?@TypeOf(ptr) {
    const adjust_off = alignPointerOffset(ptr, align_to) orelse return null;
    // Avoid the use of ptrFromInt to avoid losing the pointer provenance info.
    return @alignCast(ptr + adjust_off);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `` | – | – |
| `align\_to` | `usize` | – | – |
| Return | `?@TypeOf(ptr)` | – | – |

</details>

---

### <a id="fn-asbytes"></a>`asBytes`

<details class="declaration-card" open>
<summary>Function – Given a pointer to a single item, returns a slice of the underlying bytes, preserving pointer attributes</summary>

Given a pointer to a single item, returns a slice of the underlying bytes, preserving pointer attributes.

```zig
pub fn asBytes(ptr: anytype) AsBytesReturnType(@TypeOf(ptr)) {
    return @ptrCast(@alignCast(ptr));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `` | – | – |
| Return | `AsBytesReturnType(@TypeOf(ptr))` | – | – |

</details>

---

### <a id="fn-tobytes"></a>`toBytes`

<details class="declaration-card" open>
<summary>Function – Given any value, returns a copy of its bytes in an array</summary>

Given any value, returns a copy of its bytes in an array.

```zig
pub fn toBytes(value: anytype) [@sizeOf(@TypeOf(value))]u8 {
    return asBytes(&value).*;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| Return | `[@sizeOf(@TypeOf(value))]u8` | – | – |

</details>

---

### <a id="fn-bytesasvalue"></a>`bytesAsValue`

<details class="declaration-card" open>
<summary>Function – Given a pointer to an array of bytes, returns a pointer to a value of the specified type</summary>

Given a pointer to an array of bytes, returns a pointer to a value of the specified type
backed by those bytes, preserving pointer attributes.

```zig
pub fn bytesAsValue(comptime T: type, bytes: anytype) BytesAsValueReturnType(T, @TypeOf(bytes)) {
    return @ptrCast(bytes);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `bytes` | `` | – | – |
| Return | `BytesAsValueReturnType(T, @TypeOf(bytes))` | – | – |

</details>

---

### <a id="fn-bytestovalue"></a>`bytesToValue`

<details class="declaration-card" open>
<summary>Function – Given a pointer to an array of bytes, returns a value of the specified type backed by a</summary>

Given a pointer to an array of bytes, returns a value of the specified type backed by a
copy of those bytes.

```zig
pub fn bytesToValue(comptime T: type, bytes: anytype) T {
    return bytesAsValue(T, bytes).*;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `bytes` | `` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-bytesasslice"></a>`bytesAsSlice`

<details class="declaration-card" open>
<summary>Function – Given a slice of bytes, returns a slice of the specified type</summary>

Given a slice of bytes, returns a slice of the specified type
backed by those bytes, preserving pointer attributes.
If `T` is zero-bytes sized, the returned slice has a len of zero.

```zig
pub fn bytesAsSlice(comptime T: type, bytes: anytype) BytesAsSliceReturnType(T, @TypeOf(bytes)) {
    // let's not give an undefined pointer to @ptrCast
    // it may be equal to zero and fail a null check
    if (bytes.len == 0 or @sizeOf(T) == 0) {
        return &[0]T{};
    }

    const cast_target = CopyPtrAttrs(@TypeOf(bytes), .many, T);

    return @as(cast_target, @ptrCast(bytes))[0..@divExact(bytes.len, @sizeOf(T))];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `bytes` | `` | – | – |
| Return | `BytesAsSliceReturnType(T, @TypeOf(bytes))` | – | – |

</details>

---

### <a id="fn-sliceasbytes"></a>`sliceAsBytes`

<details class="declaration-card" open>
<summary>Function – Given a slice, returns a slice of the underlying bytes, preserving pointer attributes</summary>

Given a slice, returns a slice of the underlying bytes, preserving pointer attributes.

```zig
pub fn sliceAsBytes(slice: anytype) SliceAsBytesReturnType(@TypeOf(slice)) {
    const Slice = @TypeOf(slice);

    // a slice of zero-bit values always occupies zero bytes
    if (@sizeOf(std.meta.Elem(Slice)) == 0) return &[0]u8{};

    // let's not give an undefined pointer to @ptrCast
    // it may be equal to zero and fail a null check
    if (slice.len == 0 and std.meta.sentinel(Slice) == null) return &[0]u8{};

    const cast_target = CopyPtrAttrs(Slice, .many, u8);

    return @as(cast_target, @ptrCast(slice))[0 .. slice.len * @sizeOf(std.meta.Elem(Slice))];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `slice` | `` | – | – |
| Return | `SliceAsBytesReturnType(@TypeOf(slice))` | – | – |

</details>

---

### <a id="fn-alignforwardanyalign"></a>`alignForwardAnyAlign`

<details class="declaration-card" open>
<summary>Function – Round an address down to the next (or current) aligned address</summary>

Round an address down to the next (or current) aligned address.
Unlike `alignForward`, `alignment` can be any positive number, not just a power of 2.

```zig
pub fn alignForwardAnyAlign(comptime T: type, addr: T, alignment: T) T {
    if (isValidAlignGeneric(T, alignment))
        return alignForward(T, addr, alignment);
    assert(alignment != 0);
    return alignBackwardAnyAlign(T, addr + (alignment - 1), alignment);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `addr` | `T` | – | – |
| `alignment` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-alignforward"></a>`alignForward`

<details class="declaration-card" open>
<summary>Function – Round an address up to the next (or current) aligned address</summary>

Round an address up to the next (or current) aligned address.
The alignment must be a power of 2 and greater than 0.
Asserts that rounding up the address does not cause integer overflow.

```zig
pub fn alignForward(comptime T: type, addr: T, alignment: T) T {
    assert(isValidAlignGeneric(T, alignment));
    return alignBackward(T, addr + (alignment - 1), alignment);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `addr` | `T` | – | – |
| `alignment` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-alignforwardlog2"></a>`alignForwardLog2`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn alignForwardLog2(addr: usize, log2_alignment: u8) usize {
    const alignment = @as(usize, 1) << @as(math.Log2Int(usize), @intCast(log2_alignment));
    return alignForward(usize, addr, alignment);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `usize` | – | – |
| `log2\_alignment` | `u8` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-donotoptimizeaway"></a>`doNotOptimizeAway`

<details class="declaration-card" open>
<summary>Function – Force an evaluation of the expression; this tries to prevent</summary>

Force an evaluation of the expression; this tries to prevent
the compiler from optimizing the computation away even if the
result eventually gets discarded.

```zig
pub fn doNotOptimizeAway(val: anytype) void {
    if (@inComptime()) return;

    const max_gp_register_bits = @bitSizeOf(c_long);
    const t = @typeInfo(@TypeOf(val));
    switch (t) {
        .void, .null, .comptime_int, .comptime_float => return,
        .@"enum" => doNotOptimizeAway(@intFromEnum(val)),
        .bool => doNotOptimizeAway(@intFromBool(val)),
        .int => {
            const bits = t.int.bits;
            if (bits <= max_gp_register_bits and builtin.zig_backend != .stage2_c) {
                const val2 = @as(
                    std.meta.Int(t.int.signedness, @max(8, std.math.ceilPowerOfTwoAssert(u16, bits))),
                    val,
                );
                asm volatile (""
                    :
                    : [_] "r" (val2),
                );
            } else doNotOptimizeAway(&val);
        },
        .float => {
            if ((t.float.bits == 32 or t.float.bits == 64) and builtin.zig_backend != .stage2_c) {
                asm volatile (""
                    :
                    : [_] "rm" (val),
                );
            } else doNotOptimizeAway(&val);
        },
        .pointer => {
            if (builtin.zig_backend == .stage2_c) {
                doNotOptimizeAwayC(val);
            } else {
                asm volatile (""
                    :
                    : [_] "m" (val),
                    : .{ .memory = true });
            }
        },
        .array => {
            if (t.array.len * @sizeOf(t.array.child) <= 64) {
                for (val) |v| doNotOptimizeAway(v);
            } else doNotOptimizeAway(&val);
        },
        else => doNotOptimizeAway(&val),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `val` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-alignbackwardanyalign"></a>`alignBackwardAnyAlign`

<details class="declaration-card" open>
<summary>Function – Round an address down to the previous (or current) aligned address</summary>

Round an address down to the previous (or current) aligned address.
Unlike `alignBackward`, `alignment` can be any positive number, not just a power of 2.

```zig
pub fn alignBackwardAnyAlign(comptime T: type, addr: T, alignment: T) T {
    if (isValidAlignGeneric(T, alignment))
        return alignBackward(T, addr, alignment);
    assert(alignment != 0);
    return addr - @mod(addr, alignment);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `addr` | `T` | – | – |
| `alignment` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-alignbackward"></a>`alignBackward`

<details class="declaration-card" open>
<summary>Function – Round an address down to the previous (or current) aligned address</summary>

Round an address down to the previous (or current) aligned address.
The alignment must be a power of 2 and greater than 0.

```zig
pub fn alignBackward(comptime T: type, addr: T, alignment: T) T {
    assert(isValidAlignGeneric(T, alignment));
    // 000010000 // example alignment
    // 000001111 // subtract 1
    // 111110000 // binary not
    return addr & ~(alignment - 1);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `addr` | `T` | – | – |
| `alignment` | `T` | – | – |
| Return | `T` | – | – |

</details>

---

### <a id="fn-isvalidalign"></a>`isValidAlign`

<details class="declaration-card" open>
<summary>Function – Returns whether `alignment` is a valid alignment, meaning it is</summary>

Returns whether `alignment` is a valid alignment, meaning it is
a positive power of 2.

```zig
pub fn isValidAlign(alignment: usize) bool {
    return isValidAlignGeneric(usize, alignment);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `alignment` | `usize` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isvalidaligngeneric"></a>`isValidAlignGeneric`

<details class="declaration-card" open>
<summary>Function – Returns whether `alignment` is a valid alignment, meaning it is</summary>

Returns whether `alignment` is a valid alignment, meaning it is
a positive power of 2.

```zig
pub fn isValidAlignGeneric(comptime T: type, alignment: T) bool {
    return alignment > 0 and std.math.isPowerOfTwo(alignment);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `alignment` | `T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isalignedanyalign"></a>`isAlignedAnyAlign`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn isAlignedAnyAlign(i: usize, alignment: usize) bool {
    if (isValidAlign(alignment))
        return isAligned(i, alignment);
    assert(alignment != 0);
    return 0 == @mod(i, alignment);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `i` | `usize` | – | – |
| `alignment` | `usize` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isalignedlog2"></a>`isAlignedLog2`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn isAlignedLog2(addr: usize, log2_alignment: u8) bool {
    return @ctz(addr) >= log2_alignment;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `usize` | – | – |
| `log2\_alignment` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isaligned"></a>`isAligned`

<details class="declaration-card" open>
<summary>Function – Given an address and an alignment, return true if the address is a multiple of the alignment</summary>

Given an address and an alignment, return true if the address is a multiple of the alignment
The alignment must be a power of 2 and greater than 0.

```zig
pub fn isAligned(addr: usize, alignment: usize) bool {
    return isAlignedGeneric(u64, addr, alignment);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `usize` | – | – |
| `alignment` | `usize` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-isalignedgeneric"></a>`isAlignedGeneric`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn isAlignedGeneric(comptime T: type, addr: T, alignment: T) bool {
    return alignBackward(T, addr, alignment) == addr;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `addr` | `T` | – | – |
| `alignment` | `T` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-aligninbytes"></a>`alignInBytes`

<details class="declaration-card" open>
<summary>Function – Returns the largest slice in the given bytes that conforms to the new alignment,</summary>

Returns the largest slice in the given bytes that conforms to the new alignment,
or `null` if the given bytes contain no conforming address.

```zig
pub fn alignInBytes(bytes: []u8, comptime new_alignment: usize) ?[]align(new_alignment) u8 {
    const begin_address = @intFromPtr(bytes.ptr);
    const end_address = begin_address + bytes.len;

    const begin_address_aligned = mem.alignForward(usize, begin_address, new_alignment);
    const new_length = std.math.sub(usize, end_address, begin_address_aligned) catch |e| switch (e) {
        error.Overflow => return null,
    };
    const alignment_offset = begin_address_aligned - begin_address;
    return @alignCast(bytes[alignment_offset .. alignment_offset + new_length]);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bytes` | `[]u8` | – | – |
| `new\_alignment` | `usize` | – | – |
| Return | `?[]align(new_alignment) u8` | – | – |

</details>

---

### <a id="fn-aligninslice"></a>`alignInSlice`

<details class="declaration-card" open>
<summary>Function – Returns the largest sub-slice within the given slice that conforms to the new alignment,</summary>

Returns the largest sub-slice within the given slice that conforms to the new alignment,
or `null` if the given slice contains no conforming address.

```zig
pub fn alignInSlice(slice: anytype, comptime new_alignment: usize) ?AlignedSlice(@TypeOf(slice), new_alignment) {
    const bytes = sliceAsBytes(slice);
    const aligned_bytes = alignInBytes(bytes, new_alignment) orelse return null;

    const Element = @TypeOf(slice[0]);
    const slice_length_bytes = aligned_bytes.len - (aligned_bytes.len % @sizeOf(Element));
    const aligned_slice = bytesAsSlice(Element, aligned_bytes[0..slice_length_bytes]);
    return @alignCast(aligned_slice);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `slice` | `` | – | – |
| `new\_alignment` | `usize` | – | – |
| Return | `?AlignedSlice(@TypeOf(slice), new_alignment)` | – | – |

</details>

---


