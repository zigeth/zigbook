---
title: "std.gpu"
description: "Comprehensive reference for Zig's std.gpu module covering operating system, filesystem, and runtime services."
navigation:
  title: "Gpu"
  icon: i-lucide-server-cog
  badge: "Platform"
badge: "Platform"
category: "platform"
tags:
  - "zig"
  - "standard-library"
  - "platform"
source: "std/gpu.md"
githubPath: "std/gpu.md"
lastUpdated: "2025-10-18T12:44:21.942Z"
seo:
  title: "std.gpu · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.gpu module covering operating system, filesystem, and runtime services."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/gpu.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.gpu` |
| Declarations | 19 |
| Breakdown | 3 functions · 5 types · 10 constants · 1 global variable |
| Generated (unix epoch) | 1760148105 |

---

## Table of Contents

- [Functions](#functions)
  - [`location`](#fn-location)
  - [`binding`](#fn-binding)
  - [`executionMode`](#fn-executionmode)

- [Types](#types)
  - [`position\_in`](#type-position-in)
  - [`position\_out`](#type-position-out)
  - [`point\_size\_in`](#type-point-size-in)
  - [`point\_size\_out`](#type-point-size-out)
  - [`ExecutionMode`](#type-executionmode)

- [Constants](#constants)
  - [`invocation\_id`](#const-invocation-id)
  - [`frag\_coord`](#const-frag-coord)
  - [`point\_coord`](#const-point-coord)
  - [`num\_workgroups`](#const-num-workgroups)
  - [`workgroup\_size`](#const-workgroup-size)
  - [`workgroup\_id`](#const-workgroup-id)
  - [`local\_invocation\_id`](#const-local-invocation-id)
  - [`global\_invocation\_id`](#const-global-invocation-id)
  - [`vertex\_index`](#const-vertex-index)
  - [`instance\_index`](#const-instance-index)

- [Global Variables](#global-variables)
  - [`frag\_depth`](#var-frag-depth)

---

## Types (5)

### <a id="type-position-in"></a>`position_in`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const position_in = @extern(*addrspace(.input) @Vector(4, f32), .{ .name = "position" })
```

</details>

---

### <a id="type-position-out"></a>`position_out`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const position_out = @extern(*addrspace(.output) @Vector(4, f32), .{ .name = "position" })
```

</details>

---

### <a id="type-point-size-in"></a>`point_size_in`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const point_size_in = @extern(*addrspace(.input) f32, .{ .name = "point_size" })
```

</details>

---

### <a id="type-point-size-out"></a>`point_size_out`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const point_size_out = @extern(*addrspace(.output) f32, .{ .name = "point_size" })
```

</details>

---

### <a id="type-executionmode"></a>`ExecutionMode`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const ExecutionMode = union(Tag) {
    /// Sets origin of the framebuffer to the upper-left corner
    origin_upper_left,
    /// Sets origin of the framebuffer to the lower-left corner
    origin_lower_left,
    /// Indicates that the fragment shader writes to `frag_depth`,
    /// replacing the fixed-function depth value.
    depth_replacing,
    /// Indicates that per-fragment tests may assume that
    /// any `frag_depth` built in-decorated value written by the shader is
    /// greater-than-or-equal to the fragment’s interpolated depth value
    depth_greater,
    /// Indicates that per-fragment tests may assume that
    /// any `frag_depth` built in-decorated value written by the shader is
    /// less-than-or-equal to the fragment’s interpolated depth value
    depth_less,
    /// Indicates that per-fragment tests may assume that
    /// any `frag_depth` built in-decorated value written by the shader is
    /// the same as the fragment’s interpolated depth value
    depth_unchanged,
    /// Indicates the workgroup size in the x, y, and z dimensions.
    local_size: LocalSize,

    pub const Tag = enum(u32) {
        origin_upper_left = 7,
        origin_lower_left = 8,
        depth_replacing = 12,
        depth_greater = 14,
        depth_less = 15,
        depth_unchanged = 16,
        local_size = 17,
    };

    pub const LocalSize = struct { x: u32, y: u32, z: u32 };
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `origin_upper_left` | `origin_upper_left` | – | Sets origin of the framebuffer to the upper-left corner |
| `origin_lower_left` | `origin_lower_left` | – | Sets origin of the framebuffer to the lower-left corner |
| `depth_replacing` | `depth_replacing` | – | Indicates that the fragment shader writes to \`frag\_depth\`, replacing the fixed-function depth value. |
| `depth_greater` | `depth_greater` | – | Indicates that per-fragment tests may assume that any \`frag\_depth\` built in-decorated value written by the shader is greater-than-or-equal to the fragment’s interpolated depth value |
| `depth_less` | `depth_less` | – | Indicates that per-fragment tests may assume that any \`frag\_depth\` built in-decorated value written by the shader is less-than-or-equal to the fragment’s interpolated depth value |
| `depth_unchanged` | `depth_unchanged` | – | Indicates that per-fragment tests may assume that any \`frag\_depth\` built in-decorated value written by the shader is the same as the fragment’s interpolated depth value |
| `local_size` | `LocalSize` | – | Indicates the workgroup size in the x, y, and z dimensions. |

</details>

---

## Global Variables (1)

### <a id="var-frag-depth"></a>`frag_depth`

<details class="declaration-card" open>
<summary>Variable – Expand to inspect the definition and usage details.</summary>

```zig
pub extern var frag_depth: f32
```

</details>

---

## Constants (10)

### <a id="const-invocation-id"></a>`invocation_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const invocation_id: u32
```

</details>

---

### <a id="const-frag-coord"></a>`frag_coord`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const frag_coord: @Vector(4, f32)
```

</details>

---

### <a id="const-point-coord"></a>`point_coord`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const point_coord: @Vector(2, f32)
```

</details>

---

### <a id="const-num-workgroups"></a>`num_workgroups`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const num_workgroups: @Vector(3, u32)
```

</details>

---

### <a id="const-workgroup-size"></a>`workgroup_size`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const workgroup_size: @Vector(3, u32)
```

</details>

---

### <a id="const-workgroup-id"></a>`workgroup_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const workgroup_id: @Vector(3, u32)
```

</details>

---

### <a id="const-local-invocation-id"></a>`local_invocation_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const local_invocation_id: @Vector(3, u32)
```

</details>

---

### <a id="const-global-invocation-id"></a>`global_invocation_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const global_invocation_id: @Vector(3, u32)
```

</details>

---

### <a id="const-vertex-index"></a>`vertex_index`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const vertex_index: u32
```

</details>

---

### <a id="const-instance-index"></a>`instance_index`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub extern const instance_index: u32
```

</details>

---

## Functions (3)

### <a id="fn-location"></a>`location`

<details class="declaration-card" open>
<summary>Function – Forms the main linkage for `input` and `output` address spaces</summary>

Forms the main linkage for `input` and `output` address spaces.
`ptr` must be a reference to variable or struct field.

```zig
pub fn location(comptime ptr: anytype, comptime loc: u32) void {
    asm volatile (
        \\OpDecorate %ptr Location $loc
        :
        : [ptr] "" (ptr),
          [loc] "c" (loc),
    );
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `` | – | – |
| `loc` | `u32` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-binding"></a>`binding`

<details class="declaration-card" open>
<summary>Function – Forms the main linkage for `input` and `output` address spaces</summary>

Forms the main linkage for `input` and `output` address spaces.
`ptr` must be a reference to variable or struct field.

```zig
pub fn binding(comptime ptr: anytype, comptime set: u32, comptime bind: u32) void {
    asm volatile (
        \\OpDecorate %ptr DescriptorSet $set
        \\OpDecorate %ptr Binding $bind
        :
        : [ptr] "" (ptr),
          [set] "c" (set),
          [bind] "c" (bind),
    );
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `` | – | – |
| `set` | `u32` | – | – |
| `bind` | `u32` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-executionmode"></a>`executionMode`

<details class="declaration-card" open>
<summary>Function – Declare the mode entry point executes in</summary>

Declare the mode entry point executes in.

```zig
pub fn executionMode(comptime entry_point: anytype, comptime mode: ExecutionMode) void {
    const cc = @typeInfo(@TypeOf(entry_point)).@"fn".calling_convention;
    switch (mode) {
        .origin_upper_left,
        .origin_lower_left,
        .depth_replacing,
        .depth_greater,
        .depth_less,
        .depth_unchanged,
        => {
            if (cc != .spirv_fragment) {
                @compileError(
                    \\invalid execution mode '
                ++ @tagName(mode) ++
                    \\' for function with '
                ++ @tagName(cc) ++
                    \\' calling convention
                );
            }
            asm volatile (
                \\OpExecutionMode %entry_point $mode
                :
                : [entry_point] "" (entry_point),
                  [mode] "c" (@intFromEnum(mode)),
            );
        },
        .local_size => |size| {
            if (cc != .spirv_kernel) {
                @compileError(
                    \\invalid execution mode 'local_size' for function with '
                ++ @tagName(cc) ++
                    \\' calling convention
                );
            }
            asm volatile (
                \\OpExecutionMode %entry_point LocalSize $x $y $z
                :
                : [entry_point] "" (entry_point),
                  [x] "c" (size.x),
                  [y] "c" (size.y),
                  [z] "c" (size.z),
            );
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `entry\_point` | `` | – | – |
| `mode` | [`ExecutionMode`](#fn-executionmode) | – | – |
| Return | `void` | – | – |

</details>

---


