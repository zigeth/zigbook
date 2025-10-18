# std.SinglyLinkedList

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.SinglyLinkedList` |
| Declarations | 5 |
| Breakdown | 4 functions · 1 type |
| Generated (unix epoch) | 1760148100 |

## Overview

A singly-linked list is headed by a single forward pointer. The elements
are singly-linked for minimum space and pointer manipulation overhead at
the expense of O(n) removal for arbitrary elements. New elements can be
added to the list after an existing element or at the head of the list.

A singly-linked list may only be traversed in the forward direction.

Singly-linked lists are useful under these conditions:
* Ability to preallocate elements / requirement of infallibility for
  insertion.
* Ability to allocate elements intrusively along with other data.
* Homogenous elements.

---

## Table of Contents

- [Functions](#functions)
  - [`prepend`](#fn-prepend)
  - [`remove`](#fn-remove)
  - [`popFirst`](#fn-popfirst)
  - [`len`](#fn-len)

- [Types](#types)
  - [`Node`](#type-node)

---

## Types (1)

### <a id="type-node"></a>`Node`

<details class="declaration-card" open>
<summary>Container – This struct contains only a next pointer and not any data payload</summary>

This struct contains only a next pointer and not any data payload. The
intended usage is to embed it intrusively into another data structure and
access the data with `@fieldParentPtr`.

\`\`\`zig
pub const Node = struct {
    next: ?*Node = null,

    pub fn insertAfter(node: *Node, new_node: *Node) void {
        new_node.next = node.next;
        node.next = new_node;
    }

    /// Remove the node after the one provided, returning it.
    pub fn removeNext(node: *Node) ?*Node {
        const next_node = node.next orelse return null;
        node.next = next_node.next;
        return next_node;
    }

    /// Iterate over the singly-linked list from this node, until the final
    /// node is found.
    ///
    /// This operation is O(N). Instead of calling this function, consider
    /// using a different data structure.
    pub fn findLast(node: *Node) *Node {
        var it = node;
        while (true) {
            it = it.next orelse return it;
        }
    }

    /// Iterate over each next node, returning the count of all nodes except
    /// the starting one.
    ///
    /// This operation is O(N). Instead of calling this function, consider
    /// using a different data structure.
    pub fn countChildren(node: *const Node) usize {
        var count: usize = 0;
        var it: ?*const Node = node.next;
        while (it) |n| : (it = n.next) {
            count += 1;
        }
        return count;
    }

    /// Reverse the list starting from this node in-place.
    ///
    /// This operation is O(N). Instead of calling this function, consider
    /// using a different data structure.
    pub fn reverse(indirect: *?*Node) void {
        if (indirect.* == null) {
            return;
        }
        var current: *Node = indirect.*.?;
        while (current.next) |next| {
            current.next = next.next;
            next.next = indirect.*;
            indirect.* = next;
        }
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `next` | [`?*Node`](#type-node) | `null` | |

</details>

---

## Functions (4)

### <a id="fn-prepend"></a>`prepend`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn prepend(list: *SinglyLinkedList, new_node: *Node) void {
    new_node.next = list.first;
    list.first = new_node;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*SinglyLinkedList` | – | – |
| `new\_node` | [`*Node`](#type-node) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-remove"></a>`remove`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn remove(list: *SinglyLinkedList, node: *Node) void {
    if (list.first == node) {
        list.first = node.next;
    } else {
        var current_elm = list.first.?;
        while (current_elm.next != node) {
            current_elm = current_elm.next.?;
        }
        current_elm.next = node.next;
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*SinglyLinkedList` | – | – |
| `node` | [`*Node`](#type-node) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-popfirst"></a>`popFirst`

<details class="declaration-card" open>
<summary>Function – Remove and return the first node in the list</summary>

Remove and return the first node in the list.

\`\`\`zig
pub fn popFirst(list: *SinglyLinkedList) ?*Node {
    const first = list.first orelse return null;
    list.first = first.next;
    return first;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*SinglyLinkedList` | – | – |
| Return | [`?*Node`](#type-node) | – | – |

</details>

---

### <a id="fn-len"></a>`len`

<details class="declaration-card" open>
<summary>Function – Iterate over all nodes, returning the count</summary>

Iterate over all nodes, returning the count.

This operation is O(N). Consider tracking the length separately rather than
computing it.

\`\`\`zig
pub fn len(list: SinglyLinkedList) usize {
    if (list.first) |n| {
        return 1 + n.countChildren();
    } else {
        return 0;
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `SinglyLinkedList` | – | – |
| Return | `usize` | – | – |

</details>

---
