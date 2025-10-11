# std.BitStack

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.BitStack` |
| Declarations | 9 |
| Breakdown | 9 functions |
| Generated (unix epoch) | 1760148098 |

## Overview

Effectively a stack of u1 values implemented using ArrayList(u8).

---

## Table of Contents

- [Functions](#functions)
  - [`init`](#fn-init)
  - [`deinit`](#fn-deinit)
  - [`ensureTotalCapacity`](#fn-ensuretotalcapacity)
  - [`push`](#fn-push)
  - [`peek`](#fn-peek)
  - [`pop`](#fn-pop)
  - [`pushWithStateAssumeCapacity`](#fn-pushwithstateassumecapacity)
  - [`peekWithState`](#fn-peekwithstate)
  - [`popWithState`](#fn-popwithstate)

---

## Functions (9)

### <a id="fn-init"></a>`init`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn init(allocator: Allocator) @This() {
    return .{
        .bytes = std.array_list.Managed(u8).init(allocator),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| Return | `@This()` | – | – |

</details>

---

### <a id="fn-deinit"></a>`deinit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn deinit(self: *@This()) void {
    self.bytes.deinit();
    self.* = undefined;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `*@This()` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-ensuretotalcapacity"></a>`ensureTotalCapacity`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn ensureTotalCapacity(self: *@This(), bit_capacity: usize) Allocator.Error!void {
    const byte_capacity = (bit_capacity + 7) >> 3;
    try self.bytes.ensureTotalCapacity(byte_capacity);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `*@This()` | – | – |
| `bit\_capacity` | `usize` | – | – |
| Return | `Allocator.Error!void` | – | – |

</details>

---

### <a id="fn-push"></a>`push`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn push(self: *@This(), b: u1) Allocator.Error!void {
    const byte_index = self.bit_len >> 3;
    if (self.bytes.items.len <= byte_index) {
        try self.bytes.append(0);
    }

    pushWithStateAssumeCapacity(self.bytes.items, &self.bit_len, b);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `*@This()` | – | – |
| `b` | `u1` | – | – |
| Return | `Allocator.Error!void` | – | – |

</details>

---

### <a id="fn-peek"></a>`peek`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn peek(self: *const @This()) u1 {
    return peekWithState(self.bytes.items, self.bit_len);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `*const @This()` | – | – |
| Return | `u1` | – | – |

</details>

---

### <a id="fn-pop"></a>`pop`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn pop(self: *@This()) u1 {
    return popWithState(self.bytes.items, &self.bit_len);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `*@This()` | – | – |
| Return | `u1` | – | – |

</details>

---

### <a id="fn-pushwithstateassumecapacity"></a>`pushWithStateAssumeCapacity`

<details class="declaration-card" open>
<summary>Function – Standalone function for working with a fixed-size buffer</summary>

Standalone function for working with a fixed-size buffer.

```zig
pub fn pushWithStateAssumeCapacity(buf: []u8, bit_len: *usize, b: u1) void {
    const byte_index = bit_len.* >> 3;
    const bit_index = @as(u3, @intCast(bit_len.* & 7));

    buf[byte_index] &= ~(@as(u8, 1) << bit_index);
    buf[byte_index] |= @as(u8, b) << bit_index;

    bit_len.* += 1;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `[]u8` | – | – |
| `bit\_len` | `*usize` | – | – |
| `b` | `u1` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-peekwithstate"></a>`peekWithState`

<details class="declaration-card" open>
<summary>Function – Standalone function for working with a fixed-size buffer</summary>

Standalone function for working with a fixed-size buffer.

```zig
pub fn peekWithState(buf: []const u8, bit_len: usize) u1 {
    const byte_index = (bit_len - 1) >> 3;
    const bit_index = @as(u3, @intCast((bit_len - 1) & 7));
    return @as(u1, @intCast((buf[byte_index] >> bit_index) & 1));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `[]const u8` | – | – |
| `bit\_len` | `usize` | – | – |
| Return | `u1` | – | – |

</details>

---

### <a id="fn-popwithstate"></a>`popWithState`

<details class="declaration-card" open>
<summary>Function – Standalone function for working with a fixed-size buffer</summary>

Standalone function for working with a fixed-size buffer.

```zig
pub fn popWithState(buf: []const u8, bit_len: *usize) u1 {
    const b = peekWithState(buf, bit_len.*);
    bit_len.* -= 1;
    return b;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `[]const u8` | – | – |
| `bit\_len` | `*usize` | – | – |
| Return | `u1` | – | – |

</details>

---

