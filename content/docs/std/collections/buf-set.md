---
title: "std.BufSet"
description: "Comprehensive reference for Zig's std.BufSet module covering collections and data-structure utilities."
navigation:
  title: "Buf Set"
  icon: i-lucide-layers
  badge: "Collections"
badge: "Collections"
category: "collections"
tags:
  - "zig"
  - "standard-library"
  - "collections"
source: "std/BufSet.md"
githubPath: "std/BufSet.md"
lastUpdated: "2025-10-11T02:43:50.337Z"
seo:
  title: "std.BufSet · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.BufSet module covering collections and data-structure utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/BufSet.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.BufSet` |
| Declarations | 1 |
| Breakdown | 1 type |
| Generated (unix epoch) | 1760148098 |

---

## Table of Contents

- [Types](#types)
  - [`BufSet`](#type-bufset)

---

## Types (1)

### <a id="type-bufset"></a>`BufSet`

<details class="declaration-card" open>
<summary>Container – A BufSet is a set of strings</summary>

A BufSet is a set of strings.  The BufSet duplicates
strings internally, and never takes ownership of strings
which are passed to it.

\`\`\`zig
pub const BufSet = struct {
    hash_map: BufSetHashMap,

    const BufSetHashMap = StringHashMap(void);
    pub const Iterator = BufSetHashMap.KeyIterator;

    /// Create a BufSet using an allocator.  The allocator will
    /// be used internally for both backing allocations and
    /// string duplication.
    pub fn init(a: Allocator) BufSet {
        return .{ .hash_map = BufSetHashMap.init(a) };
    }

    /// Free a BufSet along with all stored keys.
    pub fn deinit(self: *BufSet) void {
        var it = self.hash_map.keyIterator();
        while (it.next()) |key_ptr| {
            self.free(key_ptr.*);
        }
        self.hash_map.deinit();
        self.* = undefined;
    }

    /// Insert an item into the BufSet.  The item will be
    /// copied, so the caller may delete or reuse the
    /// passed string immediately.
    pub fn insert(self: *BufSet, value: []const u8) !void {
        const gop = try self.hash_map.getOrPut(value);
        if (!gop.found_existing) {
            gop.key_ptr.* = self.copy(value) catch |err| {
                _ = self.hash_map.remove(value);
                return err;
            };
        }
    }

    /// Check if the set contains an item matching the passed string
    pub fn contains(self: BufSet, value: []const u8) bool {
        return self.hash_map.contains(value);
    }

    /// Remove an item from the set.
    pub fn remove(self: *BufSet, value: []const u8) void {
        const kv = self.hash_map.fetchRemove(value) orelse return;
        self.free(kv.key);
    }

    /// Returns the number of items stored in the set
    pub fn count(self: *const BufSet) usize {
        return self.hash_map.count();
    }

    /// Returns an iterator over the items stored in the set.
    /// Iteration order is arbitrary.
    pub fn iterator(self: *const BufSet) Iterator {
        return self.hash_map.keyIterator();
    }

    /// Get the allocator used by this set
    pub fn allocator(self: *const BufSet) Allocator {
        return self.hash_map.allocator;
    }

    /// Creates a copy of this BufSet, using a specified allocator.
    pub fn cloneWithAllocator(
        self: *const BufSet,
        new_allocator: Allocator,
    ) Allocator.Error!BufSet {
        const cloned_hashmap = try self.hash_map.cloneWithAllocator(new_allocator);
        const cloned = BufSet{ .hash_map = cloned_hashmap };
        var it = cloned.hash_map.keyIterator();
        while (it.next()) |key_ptr| {
            key_ptr.* = try cloned.copy(key_ptr.*);
        }

        return cloned;
    }

    /// Creates a copy of this BufSet, using the same allocator.
    pub fn clone(self: *const BufSet) Allocator.Error!BufSet {
        return self.cloneWithAllocator(self.allocator());
    }

    test clone {
        var original = BufSet.init(testing.allocator);
        defer original.deinit();
        try original.insert("x");

        var cloned = try original.clone();
        defer cloned.deinit();
        cloned.remove("x");
        try testing.expect(original.count() == 1);
        try testing.expect(cloned.count() == 0);

        try testing.expectError(
            error.OutOfMemory,
            original.cloneWithAllocator(testing.failing_allocator),
        );
    }

    fn free(self: *const BufSet, value: []const u8) void {
        self.hash_map.allocator.free(value);
    }

    fn copy(self: *const BufSet, value: []const u8) ![]const u8 {
        const result = try self.hash_map.allocator.alloc(u8, value.len);
        @memcpy(result, value);
        return result;
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `hash_map` | `BufSetHashMap` | – | |

</details>

---
