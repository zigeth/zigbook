---
title: "std.SemanticVersion"
description: "Comprehensive reference for Zig's std.SemanticVersion module covering binary parsing, archive handling, and structured formats."
navigation:
  title: "Semantic Version"
  icon: i-lucide-package
  badge: "Formats"
badge: "Formats"
category: "formats"
tags:
  - "zig"
  - "standard-library"
  - "formats"
source: "std/SemanticVersion.md"
githubPath: "std/SemanticVersion.md"
lastUpdated: "2025-10-11T02:43:50.338Z"
seo:
  title: "std.SemanticVersion · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.SemanticVersion module covering binary parsing, archive handling, and structured formats."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/SemanticVersion.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.SemanticVersion` |
| Declarations | 4 |
| Breakdown | 3 functions · 1 type |
| Generated (unix epoch) | 1760148100 |

## Overview

A software version formatted according to the Semantic Versioning 2.0.0 specification.

See: https://semver.org

---

## Table of Contents

- [Functions](#functions)
  - [`order`](#fn-order)
  - [`parse`](#fn-parse)
  - [`format`](#fn-format)

- [Types](#types)
  - [`Range`](#type-range)

---

## Types (1)

### <a id="type-range"></a>`Range`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const Range = struct {
    min: Version,
    max: Version,

    pub fn includesVersion(self: Range, ver: Version) bool {
        if (self.min.order(ver) == .gt) return false;
        if (self.max.order(ver) == .lt) return false;
        return true;
    }

    /// Checks if system is guaranteed to be at least `version` or older than `version`.
    /// Returns `null` if a runtime check is required.
    pub fn isAtLeast(self: Range, ver: Version) ?bool {
        if (self.min.order(ver) != .lt) return true;
        if (self.max.order(ver) == .lt) return false;
        return null;
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `min` | `Version` | – | |
| `max` | `Version` | – | |

</details>

---

## Functions (3)

### <a id="fn-order"></a>`order`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn order(lhs: Version, rhs: Version) std.math.Order {
    if (lhs.major < rhs.major) return .lt;
    if (lhs.major > rhs.major) return .gt;
    if (lhs.minor < rhs.minor) return .lt;
    if (lhs.minor > rhs.minor) return .gt;
    if (lhs.patch < rhs.patch) return .lt;
    if (lhs.patch > rhs.patch) return .gt;
    if (lhs.pre != null and rhs.pre == null) return .lt;
    if (lhs.pre == null and rhs.pre == null) return .eq;
    if (lhs.pre == null and rhs.pre != null) return .gt;

    // Iterate over pre-release identifiers until a difference is found.
    var lhs_pre_it = std.mem.splitScalar(u8, lhs.pre.?, '.');
    var rhs_pre_it = std.mem.splitScalar(u8, rhs.pre.?, '.');
    while (true) {
        const next_lid = lhs_pre_it.next();
        const next_rid = rhs_pre_it.next();

        // A larger set of pre-release fields has a higher precedence than a smaller set.
        if (next_lid == null and next_rid != null) return .lt;
        if (next_lid == null and next_rid == null) return .eq;
        if (next_lid != null and next_rid == null) return .gt;

        const lid = next_lid.?; // Left identifier
        const rid = next_rid.?; // Right identifier

        // Attempt to parse identifiers as numbers. Overflows are checked by parse.
        const lnum: ?usize = std.fmt.parseUnsigned(usize, lid, 10) catch |err| switch (err) {
            error.InvalidCharacter => null,
            error.Overflow => unreachable,
        };
        const rnum: ?usize = std.fmt.parseUnsigned(usize, rid, 10) catch |err| switch (err) {
            error.InvalidCharacter => null,
            error.Overflow => unreachable,
        };

        // Numeric identifiers always have lower precedence than non-numeric identifiers.
        if (lnum != null and rnum == null) return .lt;
        if (lnum == null and rnum != null) return .gt;

        // Identifiers consisting of only digits are compared numerically.
        // Identifiers with letters or hyphens are compared lexically in ASCII sort order.
        if (lnum != null and rnum != null) {
            if (lnum.? < rnum.?) return .lt;
            if (lnum.? > rnum.?) return .gt;
        } else {
            const ord = std.mem.order(u8, lid, rid);
            if (ord != .eq) return ord;
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `lhs` | `Version` | – | – |
| `rhs` | `Version` | – | – |
| Return | `std.math.Order` | – | – |

</details>

---

### <a id="fn-parse"></a>`parse`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn parse(text: []const u8) !Version {
    // Parse the required major, minor, and patch numbers.
    const extra_index = std.mem.indexOfAny(u8, text, "-+");
    const required = text[0..(extra_index orelse text.len)];
    var it = std.mem.splitScalar(u8, required, '.');
    var ver = Version{
        .major = try parseNum(it.first()),
        .minor = try parseNum(it.next() orelse return error.InvalidVersion),
        .patch = try parseNum(it.next() orelse return error.InvalidVersion),
    };
    if (it.next() != null) return error.InvalidVersion;
    if (extra_index == null) return ver;

    // Slice optional pre-release or build metadata components.
    const extra: []const u8 = text[extra_index.?..text.len];
    if (extra[0] == '-') {
        const build_index = std.mem.indexOfScalar(u8, extra, '+');
        ver.pre = extra[1..(build_index orelse extra.len)];
        if (build_index) |idx| ver.build = extra[(idx + 1)..];
    } else {
        ver.build = extra[1..];
    }

    // Check validity of optional pre-release identifiers.
    // See: https://semver.org/#spec-item-9
    if (ver.pre) |pre| {
        it = std.mem.splitScalar(u8, pre, '.');
        while (it.next()) |id| {
            // Identifiers MUST NOT be empty.
            if (id.len == 0) return error.InvalidVersion;

            // Identifiers MUST comprise only ASCII alphanumerics and hyphens [0-9A-Za-z-].
            for (id) |c| if (!std.ascii.isAlphanumeric(c) and c != '-') return error.InvalidVersion;

            // Numeric identifiers MUST NOT include leading zeroes.
            const is_num = for (id) |c| {
                if (!std.ascii.isDigit(c)) break false;
            } else true;
            if (is_num) _ = try parseNum(id);
        }
    }

    // Check validity of optional build metadata identifiers.
    // See: https://semver.org/#spec-item-10
    if (ver.build) |build| {
        it = std.mem.splitScalar(u8, build, '.');
        while (it.next()) |id| {
            // Identifiers MUST NOT be empty.
            if (id.len == 0) return error.InvalidVersion;

            // Identifiers MUST comprise only ASCII alphanumerics and hyphens [0-9A-Za-z-].
            for (id) |c| if (!std.ascii.isAlphanumeric(c) and c != '-') return error.InvalidVersion;
        }
    }

    return ver;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `text` | `[]const u8` | – | – |
| Return | `Version` | – | – |

</details>

---

### <a id="fn-format"></a>`format`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn format(self: Version, w: *std.io.Writer) std.io.Writer.Error!void {
    try w.print("{d}.{d}.{d}", .{ self.major, self.minor, self.patch });
    if (self.pre) |pre| try w.print("-{s}", .{pre});
    if (self.build) |build| try w.print("+{s}", .{build});
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `Version` | – | – |
| `w` | `*std.io.Writer` | – | – |
| Return | `std.io.Writer.Error!void` | – | – |

</details>

---
