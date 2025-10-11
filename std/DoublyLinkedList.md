# std.DoublyLinkedList

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.DoublyLinkedList` |
| Declarations | 10 |
| Breakdown | 9 functions · 1 type |
| Generated (unix epoch) | 1760148099 |

## Overview

A doubly-linked list has a pair of pointers to both the head and
tail of the list. List elements have pointers to both the previous
and next elements in the sequence. The list can be traversed both
forward and backward. Some operations that take linear O(n) time
with a singly-linked list can be done without traversal in constant
O(1) time with a doubly-linked list:

* Removing an element.
* Inserting a new element before an existing element.
* Pushing or popping an element from the end of the list.

---

## Table of Contents

- [Functions](#functions)
  - [`insertAfter`](#fn-insertafter)
  - [`insertBefore`](#fn-insertbefore)
  - [`concatByMoving`](#fn-concatbymoving)
  - [`append`](#fn-append)
  - [`prepend`](#fn-prepend)
  - [`remove`](#fn-remove)
  - [`pop`](#fn-pop)
  - [`popFirst`](#fn-popfirst)
  - [`len`](#fn-len)

- [Types](#types)
  - [`Node`](#type-node)

---

## Types (1)

### <a id="type-node"></a>`Node`

<details class="declaration-card" open>
<summary>Container – This struct contains only the prev and next pointers and not any data</summary>

This struct contains only the prev and next pointers and not any data
payload. The intended usage is to embed it intrusively into another data
structure and access the data with `@fieldParentPtr`.

```zig
pub const Node = struct {
    prev: ?*Node = null,
    next: ?*Node = null,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `prev` | [`?*Node`](#type-node) | `null` | |
| `next` | [`?*Node`](#type-node) | `null` | |

</details>

---

## Functions (9)

### <a id="fn-insertafter"></a>`insertAfter`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn insertAfter(list: *DoublyLinkedList, existing_node: *Node, new_node: *Node) void {
    new_node.prev = existing_node;
    if (existing_node.next) |next_node| {
        // Intermediate node.
        new_node.next = next_node;
        next_node.prev = new_node;
    } else {
        // Last element of the list.
        new_node.next = null;
        list.last = new_node;
    }
    existing_node.next = new_node;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*DoublyLinkedList` | – | – |
| `existing\_node` | [`*Node`](#type-node) | – | – |
| `new\_node` | [`*Node`](#type-node) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-insertbefore"></a>`insertBefore`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn insertBefore(list: *DoublyLinkedList, existing_node: *Node, new_node: *Node) void {
    new_node.next = existing_node;
    if (existing_node.prev) |prev_node| {
        // Intermediate node.
        new_node.prev = prev_node;
        prev_node.next = new_node;
    } else {
        // First element of the list.
        new_node.prev = null;
        list.first = new_node;
    }
    existing_node.prev = new_node;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*DoublyLinkedList` | – | – |
| `existing\_node` | [`*Node`](#type-node) | – | – |
| `new\_node` | [`*Node`](#type-node) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-concatbymoving"></a>`concatByMoving`

<details class="declaration-card" open>
<summary>Function – Concatenate list2 onto the end of list1, removing all entries from the former</summary>

Concatenate list2 onto the end of list1, removing all entries from the former.

Arguments:
    list1: the list to concatenate onto
    list2: the list to be concatenated

```zig
pub fn concatByMoving(list1: *DoublyLinkedList, list2: *DoublyLinkedList) void {
    const l2_first = list2.first orelse return;
    if (list1.last) |l1_last| {
        l1_last.next = list2.first;
        l2_first.prev = list1.last;
    } else {
        // list1 was empty
        list1.first = list2.first;
    }
    list1.last = list2.last;
    list2.first = null;
    list2.last = null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list1` | `*DoublyLinkedList` | – | – |
| `list2` | `*DoublyLinkedList` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-append"></a>`append`

<details class="declaration-card" open>
<summary>Function – Insert a new node at the end of the list</summary>

Insert a new node at the end of the list.

Arguments:
    new_node: Pointer to the new node to insert.

```zig
pub fn append(list: *DoublyLinkedList, new_node: *Node) void {
    if (list.last) |last| {
        // Insert after last.
        list.insertAfter(last, new_node);
    } else {
        // Empty list.
        list.prepend(new_node);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*DoublyLinkedList` | – | – |
| `new\_node` | [`*Node`](#type-node) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-prepend"></a>`prepend`

<details class="declaration-card" open>
<summary>Function – Insert a new node at the beginning of the list</summary>

Insert a new node at the beginning of the list.

Arguments:
    new_node: Pointer to the new node to insert.

```zig
pub fn prepend(list: *DoublyLinkedList, new_node: *Node) void {
    if (list.first) |first| {
        // Insert before first.
        list.insertBefore(first, new_node);
    } else {
        // Empty list.
        list.first = new_node;
        list.last = new_node;
        new_node.prev = null;
        new_node.next = null;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*DoublyLinkedList` | – | – |
| `new\_node` | [`*Node`](#type-node) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-remove"></a>`remove`

<details class="declaration-card" open>
<summary>Function – Remove a node from the list</summary>

Remove a node from the list.

Arguments:
    node: Pointer to the node to be removed.

```zig
pub fn remove(list: *DoublyLinkedList, node: *Node) void {
    if (node.prev) |prev_node| {
        // Intermediate node.
        prev_node.next = node.next;
    } else {
        // First element of the list.
        list.first = node.next;
    }

    if (node.next) |next_node| {
        // Intermediate node.
        next_node.prev = node.prev;
    } else {
        // Last element of the list.
        list.last = node.prev;
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*DoublyLinkedList` | – | – |
| `node` | [`*Node`](#type-node) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-pop"></a>`pop`

<details class="declaration-card" open>
<summary>Function – Remove and return the last node in the list</summary>

Remove and return the last node in the list.

Returns:
    A pointer to the last node in the list.

```zig
pub fn pop(list: *DoublyLinkedList) ?*Node {
    const last = list.last orelse return null;
    list.remove(last);
    return last;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*DoublyLinkedList` | – | – |
| Return | [`?*Node`](#type-node) | – | – |

</details>

---

### <a id="fn-popfirst"></a>`popFirst`

<details class="declaration-card" open>
<summary>Function – Remove and return the first node in the list</summary>

Remove and return the first node in the list.

Returns:
    A pointer to the first node in the list.

```zig
pub fn popFirst(list: *DoublyLinkedList) ?*Node {
    const first = list.first orelse return null;
    list.remove(first);
    return first;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `*DoublyLinkedList` | – | – |
| Return | [`?*Node`](#type-node) | – | – |

</details>

---

### <a id="fn-len"></a>`len`

<details class="declaration-card" open>
<summary>Function – Iterate over all nodes, returning the count</summary>

Iterate over all nodes, returning the count.

This operation is O(N). Consider tracking the length separately rather than
computing it.

```zig
pub fn len(list: DoublyLinkedList) usize {
    var count: usize = 0;
    var it: ?*const Node = list.first;
    while (it) |n| : (it = n.next) count += 1;
    return count;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `list` | `DoublyLinkedList` | – | – |
| Return | `usize` | – | – |

</details>

---

