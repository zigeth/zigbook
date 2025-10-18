---
title: "std.meta"
description: "Comprehensive reference for Zig's std.meta module covering low-level systems primitives and metaprogramming utilities."
navigation:
  title: "Meta"
  icon: i-lucide-cpu
  badge: "Systems"
badge: "Systems"
category: "systems"
tags:
  - "zig"
  - "standard-library"
  - "systems"
source: "std/meta.md"
githubPath: "std/meta.md"
lastUpdated: "2025-10-11T02:43:50.347Z"
seo:
  title: "std.meta · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.meta module covering low-level systems primitives and metaprogramming utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/meta.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.meta` |
| Declarations | 33 |
| Breakdown | 31 functions · 1 constant · 1 error set |
| Generated (unix epoch) | 1760148108 |

---

## Table of Contents

- [Functions](#functions)
  - [`stringToEnum`](#fn-stringtoenum)
  - [`alignment`](#fn-alignment)
  - [`Child`](#fn-child)
  - [`Elem`](#fn-elem)
  - [`sentinel`](#fn-sentinel)
  - [`Sentinel`](#fn-sentinel-1)
  - [`containerLayout`](#fn-containerlayout)
  - [`declarations`](#fn-declarations)
  - [`declarationInfo`](#fn-declarationinfo)
  - [`fields`](#fn-fields)
  - [`fieldInfo`](#fn-fieldinfo)
  - [`fieldNames`](#fn-fieldnames)
  - [`tags`](#fn-tags)
  - [`FieldEnum`](#fn-fieldenum)
  - [`DeclEnum`](#fn-declenum)
  - [`Tag`](#fn-tag)
  - [`activeTag`](#fn-activetag)
  - [`TagPayloadByName`](#fn-tagpayloadbyname)
  - [`TagPayload`](#fn-tagpayload)
  - [`eql`](#fn-eql)
  - [`intToEnum`](#fn-inttoenum)
  - [`fieldIndex`](#fn-fieldindex)
  - [`declList`](#fn-decllist)
  - [`Int`](#fn-int)
  - [`Float`](#fn-float)
  - [`ArgsTuple`](#fn-argstuple)
  - [`Tuple`](#fn-tuple)
  - [`isError`](#fn-iserror)
  - [`hasFn`](#fn-hasfn)
  - [`hasMethod`](#fn-hasmethod)
  - [`hasUniqueRepresentation`](#fn-hasuniquerepresentation)

- [Constants](#constants)
  - [`TrailerFlags`](#const-trailerflags)

- [Error Sets](#error-sets)
  - [`IntToEnumError`](#error-inttoenumerror)

---

## Constants (1)

### <a id="const-trailerflags"></a>`TrailerFlags`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const TrailerFlags = @import("meta/trailer_flags.zig").TrailerFlags
```

</details>

---

## Functions (31)

### <a id="fn-stringtoenum"></a>`stringToEnum`

<details class="declaration-card" open>
<summary>Function – Returns the variant of an enum type, `T`, which is named `str`, or `null` if no such variant exists</summary>

Returns the variant of an enum type, `T`, which is named `str`, or `null` if no such variant exists.

```zig
pub fn stringToEnum(comptime T: type, str: []const u8) ?T {
    // Using StaticStringMap here is more performant, but it will start to take too
    // long to compile if the enum is large enough, due to the current limits of comptime
    // performance when doing things like constructing lookup maps at comptime.
    // TODO The '100' here is arbitrary and should be increased when possible:
    // - https://github.com/ziglang/zig/issues/4055
    // - https://github.com/ziglang/zig/issues/3863
    if (@typeInfo(T).@"enum".fields.len <= 100) {
        const kvs = comptime build_kvs: {
            const EnumKV = struct { []const u8, T };
            var kvs_array: [@typeInfo(T).@"enum".fields.len]EnumKV = undefined;
            for (@typeInfo(T).@"enum".fields, 0..) |enumField, i| {
                kvs_array[i] = .{ enumField.name, @field(T, enumField.name) };
            }
            break :build_kvs kvs_array[0..];
        };
        const map = std.StaticStringMap(T).initComptime(kvs);
        return map.get(str);
    } else {
        inline for (@typeInfo(T).@"enum".fields) |enumField| {
            if (mem.eql(u8, str, enumField.name)) {
                return @field(T, enumField.name);
            }
        }
        return null;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `str` | `[]const u8` | – | – |
| Return | `?T` | – | – |

</details>

---

### <a id="fn-alignment"></a>`alignment`

<details class="declaration-card" open>
<summary>Function – Returns the alignment of type T</summary>

Returns the alignment of type T.
Note that if T is a pointer type the result is different than the one
returned by @alignOf(T).
If T is a pointer type the alignment of the type it points to is returned.

```zig
pub fn alignment(comptime T: type) comptime_int {
    return switch (@typeInfo(T)) {
        .optional => |info| switch (@typeInfo(info.child)) {
            .pointer, .@"fn" => alignment(info.child),
            else => @alignOf(T),
        },
        .pointer => |info| info.alignment,
        else => @alignOf(T),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `comptime_int` | – | – |

</details>

---

### <a id="fn-child"></a>`Child`

<details class="declaration-card" open>
<summary>Function – Given a parameterized type (array, vector, pointer, optional), returns the &quot;child type&quot;</summary>

Given a parameterized type (array, vector, pointer, optional), returns the "child type".

```zig
pub fn Child(comptime T: type) type {
    return switch (@typeInfo(T)) {
        .array => |info| info.child,
        .vector => |info| info.child,
        .pointer => |info| info.child,
        .optional => |info| info.child,
        else => @compileError("Expected pointer, optional, array or vector type, found '" ++ @typeName(T) ++ "'"),
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

### <a id="fn-elem"></a>`Elem`

<details class="declaration-card" open>
<summary>Function – Given a &quot;memory span&quot; type (array, slice, vector, or pointer to such), returns the &quot;element type&quot;</summary>

Given a "memory span" type (array, slice, vector, or pointer to such), returns the "element type".

```zig
pub fn Elem(comptime T: type) type {
    switch (@typeInfo(T)) {
        .array => |info| return info.child,
        .vector => |info| return info.child,
        .pointer => |info| switch (info.size) {
            .one => switch (@typeInfo(info.child)) {
                .array => |array_info| return array_info.child,
                .vector => |vector_info| return vector_info.child,
                else => {},
            },
            .many, .c, .slice => return info.child,
        },
        .optional => |info| return Elem(info.child),
        else => {},
    }
    @compileError("Expected pointer, slice, array or vector type, found '" ++ @typeName(T) ++ "'");
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-sentinel"></a>`sentinel`

<details class="declaration-card" open>
<summary>Function – Given a type which can have a sentinel e</summary>

Given a type which can have a sentinel e.g. `[:0]u8`, returns the sentinel value,
or `null` if there is not one.
Types which cannot possibly have a sentinel will be a compile error.
Result is always comptime-known.

```zig
pub inline fn sentinel(comptime T: type) ?Elem(T) {
    switch (@typeInfo(T)) {
        .array => |info| return info.sentinel(),
        .pointer => |info| {
            switch (info.size) {
                .many, .slice => return info.sentinel(),
                .one => switch (@typeInfo(info.child)) {
                    .array => |array_info| return array_info.sentinel(),
                    else => {},
                },
                else => {},
            }
        },
        else => {},
    }
    @compileError("type '" ++ @typeName(T) ++ "' cannot possibly have a sentinel");
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `?Elem(T)` | – | – |

</details>

---

### <a id="fn-sentinel-1"></a>`Sentinel`

<details class="declaration-card" open>
<summary>Function – Given a &quot;memory span&quot; type, returns the same type except with the given sentinel value</summary>

Given a "memory span" type, returns the same type except with the given sentinel value.

```zig
pub fn Sentinel(comptime T: type, comptime sentinel_val: Elem(T)) type {
    switch (@typeInfo(T)) {
        .pointer => |info| switch (info.size) {
            .one => switch (@typeInfo(info.child)) {
                .array => |array_info| return @Type(.{
                    .pointer = .{
                        .size = info.size,
                        .is_const = info.is_const,
                        .is_volatile = info.is_volatile,
                        .alignment = info.alignment,
                        .address_space = info.address_space,
                        .child = @Type(.{
                            .array = .{
                                .len = array_info.len,
                                .child = array_info.child,
                                .sentinel_ptr = @as(?*const anyopaque, @ptrCast(&sentinel_val)),
                            },
                        }),
                        .is_allowzero = info.is_allowzero,
                        .sentinel_ptr = info.sentinel_ptr,
                    },
                }),
                else => {},
            },
            .many, .slice => return @Type(.{
                .pointer = .{
                    .size = info.size,
                    .is_const = info.is_const,
                    .is_volatile = info.is_volatile,
                    .alignment = info.alignment,
                    .address_space = info.address_space,
                    .child = info.child,
                    .is_allowzero = info.is_allowzero,
                    .sentinel_ptr = @as(?*const anyopaque, @ptrCast(&sentinel_val)),
                },
            }),
            else => {},
        },
        .optional => |info| switch (@typeInfo(info.child)) {
            .pointer => |ptr_info| switch (ptr_info.size) {
                .many => return @Type(.{
                    .optional = .{
                        .child = @Type(.{
                            .pointer = .{
                                .size = ptr_info.size,
                                .is_const = ptr_info.is_const,
                                .is_volatile = ptr_info.is_volatile,
                                .alignment = ptr_info.alignment,
                                .address_space = ptr_info.address_space,
                                .child = ptr_info.child,
                                .is_allowzero = ptr_info.is_allowzero,
                                .sentinel_ptr = @as(?*const anyopaque, @ptrCast(&sentinel_val)),
                            },
                        }),
                    },
                }),
                else => {},
            },
            else => {},
        },
        else => {},
    }
    @compileError("Unable to derive a sentinel pointer type from " ++ @typeName(T));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `sentinel\_val` | `Elem(T)` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-containerlayout"></a>`containerLayout`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn containerLayout(comptime T: type) Type.ContainerLayout {
    return switch (@typeInfo(T)) {
        .@"struct" => |info| info.layout,
        .@"union" => |info| info.layout,
        else => @compileError("expected struct or union type, found '" ++ @typeName(T) ++ "'"),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `Type.ContainerLayout` | – | – |

</details>

---

### <a id="fn-declarations"></a>`declarations`

<details class="declaration-card" open>
<summary>Function – Instead of this function, prefer to use e</summary>

Instead of this function, prefer to use e.g. `@typeInfo(foo).@"struct".decls`
directly when you know what kind of type it is.

```zig
pub fn declarations(comptime T: type) []const Type.Declaration {
    return switch (@typeInfo(T)) {
        .@"struct" => |info| info.decls,
        .@"enum" => |info| info.decls,
        .@"union" => |info| info.decls,
        .@"opaque" => |info| info.decls,
        else => @compileError("Expected struct, enum, union, or opaque type, found '" ++ @typeName(T) ++ "'"),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `[]const Type.Declaration` | – | – |

</details>

---

### <a id="fn-declarationinfo"></a>`declarationInfo`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn declarationInfo(comptime T: type, comptime decl_name: []const u8) Type.Declaration {
    inline for (comptime declarations(T)) |decl| {
        if (comptime mem.eql(u8, decl.name, decl_name))
            return decl;
    }

    @compileError("'" ++ @typeName(T) ++ "' has no declaration '" ++ decl_name ++ "'");
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `decl\_name` | `[]const u8` | – | – |
| Return | `Type.Declaration` | – | – |

</details>

---

### <a id="fn-fields"></a>`fields`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fields(comptime T: type) switch (@typeInfo(T)) {
    .@"struct" => []const Type.StructField,
    .@"union" => []const Type.UnionField,
    .@"enum" => []const Type.EnumField,
    .error_set => []const Type.Error,
    else => @compileError("Expected struct, union, error set or enum type, found '" ++ @typeName(T) ++ "'"),
} {
    return switch (@typeInfo(T)) {
        .@"struct" => |info| info.fields,
        .@"union" => |info| info.fields,
        .@"enum" => |info| info.fields,
        .error_set => |errors| errors.?, // must be non global error set
        else => @compileError("Expected struct, union, error set or enum type, found '" ++ @typeName(T) ++ "'"),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | See note[^fn-fields-return-0] | – | – |


[^fn-fields-return-0]:
    Return type for `fields`:

    ```zig
    switch (@typeInfo(T)) {
        .@"struct" => []const Type.StructField,
        .@"union" => []const Type.UnionField,
        .@"enum" => []const Type.EnumField,
        .error_set => []const Type.Error,
        else => @compileError("Expected struct, union, error set or enum type, found '" ++ @typeName(T) ++ "'"),
    }
    ```

</details>

---

### <a id="fn-fieldinfo"></a>`fieldInfo`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fieldInfo(comptime T: type, comptime field: FieldEnum(T)) switch (@typeInfo(T)) {
    .@"struct" => Type.StructField,
    .@"union" => Type.UnionField,
    .@"enum" => Type.EnumField,
    .error_set => Type.Error,
    else => @compileError("Expected struct, union, error set or enum type, found '" ++ @typeName(T) ++ "'"),
} {
    return fields(T)[@intFromEnum(field)];
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `field` | `FieldEnum(T)` | – | – |
| Return | See note[^fn-fieldinfo-return-0] | – | – |


[^fn-fieldinfo-return-0]:
    Return type for `fieldInfo`:

    ```zig
    switch (@typeInfo(T)) {
        .@"struct" => Type.StructField,
        .@"union" => Type.UnionField,
        .@"enum" => Type.EnumField,
        .error_set => Type.Error,
        else => @compileError("Expected struct, union, error set or enum type, found '" ++ @typeName(T) ++ "'"),
    }
    ```

</details>

---

### <a id="fn-fieldnames"></a>`fieldNames`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fieldNames(comptime T: type) *const [fields(T).len][:0]const u8 {
    return comptime blk: {
        const fieldInfos = fields(T);
        var names: [fieldInfos.len][:0]const u8 = undefined;
        for (&names, fieldInfos) |*name, field| name.* = field.name;
        const final = names;
        break :blk &final;
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `*const [fields(T).len][:0]const u8` | – | – |

</details>

---

### <a id="fn-tags"></a>`tags`

<details class="declaration-card" open>
<summary>Function – Given an enum or error set type, returns a pointer to an array containing all tags for that</summary>

Given an enum or error set type, returns a pointer to an array containing all tags for that
enum or error set.

```zig
pub fn tags(comptime T: type) *const [fields(T).len]T {
    return comptime blk: {
        const fieldInfos = fields(T);
        var res: [fieldInfos.len]T = undefined;
        for (fieldInfos, 0..) |field, i| {
            res[i] = @field(T, field.name);
        }
        const final = res;
        break :blk &final;
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `*const [fields(T).len]T` | – | – |

</details>

---

### <a id="fn-fieldenum"></a>`FieldEnum`

<details class="declaration-card" open>
<summary>Function – Returns an enum with a variant named after each field of `T`</summary>

Returns an enum with a variant named after each field of `T`.

```zig
pub fn FieldEnum(comptime T: type) type {
    const field_infos = fields(T);

    if (field_infos.len == 0) {
        return @Type(.{
            .@"enum" = .{
                .tag_type = u0,
                .fields = &.{},
                .decls = &.{},
                .is_exhaustive = true,
            },
        });
    }

    if (@typeInfo(T) == .@"union") {
        if (@typeInfo(T).@"union".tag_type) |tag_type| {
            for (std.enums.values(tag_type), 0..) |v, i| {
                if (@intFromEnum(v) != i) break; // enum values not consecutive
                if (!std.mem.eql(u8, @tagName(v), field_infos[i].name)) break; // fields out of order
            } else {
                return tag_type;
            }
        }
    }

    var enumFields: [field_infos.len]std.builtin.Type.EnumField = undefined;
    var decls = [_]std.builtin.Type.Declaration{};
    inline for (field_infos, 0..) |field, i| {
        enumFields[i] = .{
            .name = field.name,
            .value = i,
        };
    }
    return @Type(.{
        .@"enum" = .{
            .tag_type = std.math.IntFittingRange(0, field_infos.len - 1),
            .fields = &enumFields,
            .decls = &decls,
            .is_exhaustive = true,
        },
    });
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-declenum"></a>`DeclEnum`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn DeclEnum(comptime T: type) type {
    const fieldInfos = std.meta.declarations(T);
    var enumDecls: [fieldInfos.len]std.builtin.Type.EnumField = undefined;
    var decls = [_]std.builtin.Type.Declaration{};
    inline for (fieldInfos, 0..) |field, i| {
        enumDecls[i] = .{ .name = field.name, .value = i };
    }
    return @Type(.{
        .@"enum" = .{
            .tag_type = std.math.IntFittingRange(0, if (fieldInfos.len == 0) 0 else fieldInfos.len - 1),
            .fields = &enumDecls,
            .decls = &decls,
            .is_exhaustive = true,
        },
    });
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-tag"></a>`Tag`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn Tag(comptime T: type) type {
    return switch (@typeInfo(T)) {
        .@"enum" => |info| info.tag_type,
        .@"union" => |info| info.tag_type orelse @compileError(@typeName(T) ++ " has no tag type"),
        else => @compileError("expected enum or union type, found '" ++ @typeName(T) ++ "'"),
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

### <a id="fn-activetag"></a>`activeTag`

<details class="declaration-card" open>
<summary>Function – Returns the active tag of a tagged union</summary>

Returns the active tag of a tagged union

```zig
pub fn activeTag(u: anytype) Tag(@TypeOf(u)) {
    const T = @TypeOf(u);
    return @as(Tag(T), u);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `u` | `` | – | – |
| Return | `Tag(@TypeOf(u))` | – | – |

</details>

---

### <a id="fn-tagpayloadbyname"></a>`TagPayloadByName` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Function • Deprecated – Deprecated: Use @FieldType(U, tag_name)</summary>

> **⚠️ Deprecation Notice:** Deprecated: Use @FieldType(U, tag_name)
>
> This may be removed in a future version.

Deprecated: Use @FieldType(U, tag_name)

```zig
pub fn TagPayloadByName(comptime U: type, comptime tag_name: []const u8) type {
    const info = @typeInfo(U).@"union";

    inline for (info.fields) |field_info| {
        if (comptime mem.eql(u8, field_info.name, tag_name))
            return field_info.type;
    }

    @compileError("no field '" ++ tag_name ++ "' in union '" ++ @typeName(U) ++ "'");
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `U` | `type` | – | – |
| `tag\_name` | `[]const u8` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-tagpayload"></a>`TagPayload` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Function • Deprecated – Deprecated: Use @FieldType(U, @tagName(tag))</summary>

> **⚠️ Deprecation Notice:** Deprecated: Use @FieldType(U, @tagName(tag))
>
> This may be removed in a future version.

Deprecated: Use @FieldType(U, @tagName(tag))

```zig
pub fn TagPayload(comptime U: type, comptime tag: Tag(U)) type {
    return TagPayloadByName(U, @tagName(tag));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `U` | `type` | – | – |
| `tag` | `Tag(U)` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-eql"></a>`eql`

<details class="declaration-card" open>
<summary>Function – Compares two of any type for equality</summary>

Compares two of any type for equality. Containers that do not support comparison
on their own are compared on a field-by-field basis. Pointers are not followed.

```zig
pub fn eql(a: anytype, b: @TypeOf(a)) bool {
    const T = @TypeOf(a);

    switch (@typeInfo(T)) {
        .@"struct" => |info| {
            if (info.layout == .@"packed") return a == b;

            inline for (info.fields) |field_info| {
                if (!eql(@field(a, field_info.name), @field(b, field_info.name))) return false;
            }
            return true;
        },
        .error_union => {
            if (a) |a_p| {
                if (b) |b_p| return eql(a_p, b_p) else |_| return false;
            } else |a_e| {
                if (b) |_| return false else |b_e| return a_e == b_e;
            }
        },
        .@"union" => |info| {
            if (info.tag_type) |UnionTag| {
                const tag_a: UnionTag = a;
                const tag_b: UnionTag = b;
                if (tag_a != tag_b) return false;

                return switch (a) {
                    inline else => |val, tag| return eql(val, @field(b, @tagName(tag))),
                };
            }

            @compileError("cannot compare untagged union type " ++ @typeName(T));
        },
        .array => {
            if (a.len != b.len) return false;
            for (a, 0..) |e, i|
                if (!eql(e, b[i])) return false;
            return true;
        },
        .vector => |info| {
            var i: usize = 0;
            while (i < info.len) : (i += 1) {
                if (!eql(a[i], b[i])) return false;
            }
            return true;
        },
        .pointer => |info| {
            return switch (info.size) {
                .one, .many, .c => a == b,
                .slice => a.ptr == b.ptr and a.len == b.len,
            };
        },
        .optional => {
            if (a == null and b == null) return true;
            if (a == null or b == null) return false;
            return eql(a.?, b.?);
        },
        else => return a == b,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `a` | `` | – | – |
| `b` | `@TypeOf(a)` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-inttoenum"></a>`intToEnum` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Function • Deprecated – Deprecated: use `std</summary>

> **⚠️ Deprecation Notice:** Deprecated: use `std.enums.fromInt` instead and handle null instead of an error.
>
> This may be removed in a future version.

Deprecated: use `std.enums.fromInt` instead and handle null instead of an error.

```zig
pub fn intToEnum(comptime EnumTag: type, tag_int: anytype) IntToEnumError!EnumTag {
    return std.enums.fromInt(EnumTag, tag_int) orelse return error.InvalidEnumTag;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `EnumTag` | `type` | – | – |
| `tag\_int` | `` | – | – |
| Return | [`IntToEnumError!EnumTag`](#error-inttoenumerror) | – | – |

</details>

---

### <a id="fn-fieldindex"></a>`fieldIndex`

<details class="declaration-card" open>
<summary>Function – Given a type and a name, return the field index according to source order</summary>

Given a type and a name, return the field index according to source order.
Returns `null` if the field is not found.

```zig
pub fn fieldIndex(comptime T: type, comptime name: []const u8) ?comptime_int {
    inline for (fields(T), 0..) |field, i| {
        if (mem.eql(u8, field.name, name))
            return i;
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `name` | `[]const u8` | – | – |
| Return | `?comptime_int` | – | – |

</details>

---

### <a id="fn-decllist"></a>`declList`

<details class="declaration-card" open>
<summary>Function – Returns a slice of pointers to public declarations of a namespace</summary>

Returns a slice of pointers to public declarations of a namespace.

```zig
pub fn declList(comptime Namespace: type, comptime Decl: type) []const *const Decl {
    const S = struct {
        fn declNameLessThan(context: void, lhs: *const Decl, rhs: *const Decl) bool {
            _ = context;
            return mem.lessThan(u8, lhs.name, rhs.name);
        }
    };
    comptime {
        const decls = declarations(Namespace);
        var array: [decls.len]*const Decl = undefined;
        for (decls, 0..) |decl, i| {
            array[i] = &@field(Namespace, decl.name);
        }
        mem.sort(*const Decl, &array, {}, S.declNameLessThan);
        return &array;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `Namespace` | `type` | – | – |
| `Decl` | `type` | – | – |
| Return | `[]const *const Decl` | – | – |

</details>

---

### <a id="fn-int"></a>`Int`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn Int(comptime signedness: std.builtin.Signedness, comptime bit_count: u16) type {
    return @Type(.{
        .int = .{
            .signedness = signedness,
            .bits = bit_count,
        },
    });
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `signedness` | `std.builtin.Signedness` | – | – |
| `bit\_count` | `u16` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-float"></a>`Float`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn Float(comptime bit_count: u8) type {
    return @Type(.{
        .float = .{ .bits = bit_count },
    });
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `bit\_count` | `u8` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-argstuple"></a>`ArgsTuple`

<details class="declaration-card" open>
<summary>Function – For a given function type, returns a tuple type which fields will</summary>

For a given function type, returns a tuple type which fields will
correspond to the argument types.

Examples:
- `ArgsTuple(fn () void)` ⇒ `tuple { }`
- `ArgsTuple(fn (a: u32) u32)` ⇒ `tuple { u32 }`
- `ArgsTuple(fn (a: u32, b: f16) noreturn)` ⇒ `tuple { u32, f16 }`

```zig
pub fn ArgsTuple(comptime Function: type) type {
    const info = @typeInfo(Function);
    if (info != .@"fn")
        @compileError("ArgsTuple expects a function type");

    const function_info = info.@"fn";
    if (function_info.is_var_args)
        @compileError("Cannot create ArgsTuple for variadic function");

    var argument_field_list: [function_info.params.len]type = undefined;
    inline for (function_info.params, 0..) |arg, i| {
        const T = arg.type orelse @compileError("cannot create ArgsTuple for function with an 'anytype' parameter");
        argument_field_list[i] = T;
    }

    return CreateUniqueTuple(argument_field_list.len, argument_field_list);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `Function` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-tuple"></a>`Tuple`

<details class="declaration-card" open>
<summary>Function – For a given anonymous list of types, returns a new tuple type</summary>

For a given anonymous list of types, returns a new tuple type
with those types as fields.

Examples:
- `Tuple(&[_]type {})` ⇒ `tuple { }`
- `Tuple(&[_]type {f32})` ⇒ `tuple { f32 }`
- `Tuple(&[_]type {f32,u32})` ⇒ `tuple { f32, u32 }`

```zig
pub fn Tuple(comptime types: []const type) type {
    return CreateUniqueTuple(types.len, types[0..types.len].*);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `types` | `[]const type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-iserror"></a>`isError`

<details class="declaration-card" open>
<summary>Function – Returns whether `error_union` contains an error</summary>

Returns whether `error_union` contains an error.

```zig
pub fn isError(error_union: anytype) bool {
    return if (error_union) |_| false else |_| true;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `error\_union` | `` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-hasfn"></a>`hasFn`

<details class="declaration-card" open>
<summary>Function – Returns true if a type has a namespace and the namespace contains `name`;</summary>

Returns true if a type has a namespace and the namespace contains `name`;
`false` otherwise. Result is always comptime-known.

```zig
pub inline fn hasFn(comptime T: type, comptime name: []const u8) bool {
    switch (@typeInfo(T)) {
        .@"struct", .@"union", .@"enum", .@"opaque" => {},
        else => return false,
    }
    if (!@hasDecl(T, name))
        return false;

    return @typeInfo(@TypeOf(@field(T, name))) == .@"fn";
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `name` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-hasmethod"></a>`hasMethod`

<details class="declaration-card" open>
<summary>Function – Returns true if a type has a `name` method; `false` otherwise</summary>

Returns true if a type has a `name` method; `false` otherwise.
Result is always comptime-known.

```zig
pub inline fn hasMethod(comptime T: type, comptime name: []const u8) bool {
    return switch (@typeInfo(T)) {
        .pointer => |P| switch (P.size) {
            .one => hasFn(P.child, name),
            .many, .slice, .c => false,
        },
        else => hasFn(T, name),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `name` | `[]const u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-hasuniquerepresentation"></a>`hasUniqueRepresentation`

<details class="declaration-card" open>
<summary>Function – True if every value of the type `T` has a unique bit pattern representing it</summary>

True if every value of the type `T` has a unique bit pattern representing it.
In other words, `T` has no unused bits and no padding.
Result is always comptime-known.

```zig
pub inline fn hasUniqueRepresentation(comptime T: type) bool {
    return switch (@typeInfo(T)) {
        else => false, // TODO can we know if it's true for some of these types ?

        .@"anyframe",
        .@"enum",
        .error_set,
        .@"fn",
        => true,

        .bool => false,

        .int => |info| @sizeOf(T) * 8 == info.bits,

        .pointer => |info| info.size != .slice,

        .optional => |info| switch (@typeInfo(info.child)) {
            .pointer => |ptr| !ptr.is_allowzero and switch (ptr.size) {
                .slice, .c => false,
                .one, .many => true,
            },
            else => false,
        },

        .array => |info| hasUniqueRepresentation(info.child),

        .@"struct" => |info| {
            if (info.layout == .@"packed") return @sizeOf(T) * 8 == @bitSizeOf(T);

            var sum_size = @as(usize, 0);

            inline for (info.fields) |field| {
                if (field.is_comptime) continue;
                if (!hasUniqueRepresentation(field.type)) return false;
                sum_size += @sizeOf(field.type);
            }

            return @sizeOf(T) == sum_size;
        },

        .vector => |info| hasUniqueRepresentation(info.child) and
            @sizeOf(T) == @sizeOf(info.child) * info.len,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `bool` | – | – |

</details>

---

## Error Sets (1)

### <a id="error-inttoenumerror"></a>`IntToEnumError`

<details class="declaration-card" open>
<summary>Error Set – Deprecated: use `std</summary>

Deprecated: use `std.enums.fromInt` instead and handle null.

```zig
pub const IntToEnumError = error{InvalidEnumTag}
```

**Errors:**

- `error.InvalidEnumTag`

</details>

---


