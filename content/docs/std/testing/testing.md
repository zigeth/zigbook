---
title: "std.testing"
description: "Comprehensive reference for Zig's std.testing module covering testing utilities and validation helpers."
navigation:
  title: "Testing"
  icon: i-lucide-flask-round
  badge: "Testing"
badge: "Testing"
category: "testing"
tags:
  - "zig"
  - "standard-library"
  - "testing"
source: "std/testing.md"
githubPath: "std/testing.md"
lastUpdated: "2025-10-11T02:43:50.350Z"
seo:
  title: "std.testing · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.testing module covering testing utilities and validation helpers."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/testing.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.testing` |
| Declarations | 27 |
| Breakdown | 17 functions · 3 types · 3 constants · 1 module · 3 global variables |
| Generated (unix epoch) | 1760148111 |

---

## Table of Contents

- [Functions](#functions)
  - [`expectError`](#fn-expecterror)
  - [`expectEqual`](#fn-expectequal)
  - [`expectFmt`](#fn-expectfmt)
  - [`expectApproxEqAbs`](#fn-expectapproxeqabs)
  - [`expectApproxEqRel`](#fn-expectapproxeqrel)
  - [`expectEqualSlices`](#fn-expectequalslices)
  - [`expectEqualSentinel`](#fn-expectequalsentinel)
  - [`expect`](#fn-expect)
  - [`tmpDir`](#fn-tmpdir)
  - [`expectEqualStrings`](#fn-expectequalstrings)
  - [`expectStringStartsWith`](#fn-expectstringstartswith)
  - [`expectStringEndsWith`](#fn-expectstringendswith)
  - [`expectEqualDeep`](#fn-expectequaldeep)
  - [`checkAllAllocationFailures`](#fn-checkallallocationfailures)
  - [`refAllDecls`](#fn-refalldecls)
  - [`refAllDeclsRecursive`](#fn-refalldeclsrecursive)
  - [`fuzz`](#fn-fuzz)

- [Types](#types)
  - [`TmpDir`](#type-tmpdir)
  - [`FuzzInputOptions`](#type-fuzzinputoptions)
  - [`Reader`](#type-reader)

- [Modules](#modules)
  - [`FailingAllocator`](#module-failingallocator)

- [Constants](#constants)
  - [`failing\_allocator`](#const-failing-allocator)
  - [`allocator`](#const-allocator)
  - [`backend\_can\_print`](#const-backend-can-print)

- [Global Variables](#global-variables)
  - [`random\_seed`](#var-random-seed)
  - [`allocator\_instance`](#var-allocator-instance)
  - [`log\_level`](#var-log-level)

---

## Types (3)

### <a id="type-tmpdir"></a>`TmpDir`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const TmpDir = struct {
    dir: std.fs.Dir,
    parent_dir: std.fs.Dir,
    sub_path: [sub_path_len]u8,

    const random_bytes_count = 12;
    const sub_path_len = std.fs.base64_encoder.calcSize(random_bytes_count);

    pub fn cleanup(self: *TmpDir) void {
        self.dir.close();
        self.parent_dir.deleteTree(&self.sub_path) catch {};
        self.parent_dir.close();
        self.* = undefined;
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `dir` | `std.fs.Dir` | – | |
| `parent_dir` | `std.fs.Dir` | – | |
| `sub_path` | `[sub_path_len]u8` | – | |

</details>

---

### <a id="type-fuzzinputoptions"></a>`FuzzInputOptions`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const FuzzInputOptions = struct {
    corpus: []const []const u8 = &.{},
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `corpus` | `[]const []const u8` | `&.{}` | |

</details>

---

### <a id="type-reader"></a>`Reader`

<details class="declaration-card" open>
<summary>Container – A `std</summary>

A `std.Io.Reader` that writes a predetermined list of buffers during `stream`.

\`\`\`zig
pub const Reader = struct {
    calls: []const Call,
    interface: std.Io.Reader,
    next_call_index: usize,
    next_offset: usize,
    /// Further reduces how many bytes are written in each `stream` call.
    artificial_limit: std.Io.Limit = .unlimited,

    pub const Call = struct {
        buffer: []const u8,
    };

    pub fn init(buffer: []u8, calls: []const Call) Reader {
        return .{
            .next_call_index = 0,
            .next_offset = 0,
            .interface = .{
                .vtable = &.{ .stream = stream },
                .buffer = buffer,
                .seek = 0,
                .end = 0,
            },
            .calls = calls,
        };
    }

    fn stream(io_r: *std.Io.Reader, w: *std.Io.Writer, limit: std.Io.Limit) std.Io.Reader.StreamError!usize {
        const r: *Reader = @alignCast(@fieldParentPtr("interface", io_r));
        if (r.calls.len - r.next_call_index == 0) return error.EndOfStream;
        const call = r.calls[r.next_call_index];
        const buffer = r.artificial_limit.sliceConst(limit.sliceConst(call.buffer[r.next_offset..]));
        const n = try w.write(buffer);
        r.next_offset += n;
        if (call.buffer.len - r.next_offset == 0) {
            r.next_call_index += 1;
            r.next_offset = 0;
        }
        return n;
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `calls` | `[]const Call` | – | |
| `interface` | [`std.Io.Reader`](#type-reader) | – | |
| `next_call_index` | `usize` | – | |
| `next_offset` | `usize` | – | |
| `artificial_limit` | `std.Io.Limit` | `.unlimited` | Further reduces how many bytes are written in each \`stream\` call. |

</details>

---

## Modules (1)

### <a id="module-failingallocator"></a>`FailingAllocator`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const FailingAllocator = @import("testing/FailingAllocator.zig")
\`\`\`

> **Module:** `testing/FailingAllocator.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/testing/FailingAllocator.zig)

</details>

---

## Global Variables (3)

### <a id="var-random-seed"></a>`random_seed`

<details class="declaration-card" open>
<summary>Variable – Provides deterministic randomness in unit tests</summary>

Provides deterministic randomness in unit tests.
Initialized on startup. Read-only after that.

\`\`\`zig
pub var random_seed: u32 = 0
\`\`\`

</details>

---

### <a id="var-allocator-instance"></a>`allocator_instance`

<details class="declaration-card" open>
<summary>Variable – Expand to inspect the definition and usage details.</summary>

\`\`\`zig
pub var allocator_instance: std.heap.GeneralPurposeAllocator(.{
    .stack_trace_frames = if (std.debug.sys_can_stack_trace) 10 else 0,
    .resize_stack_traces = true,
    // A unique value so that when a default-constructed
    // GeneralPurposeAllocator is incorrectly passed to testing allocator, or
    // vice versa, panic occurs.
    .canary = @truncate(0x2731e675c3a701ba),
}) = b: {
    if (!builtin.is_test) @compileError("testing allocator used when not testing");
    break :b .init;
}
\`\`\`

</details>

---

### <a id="var-log-level"></a>`log_level`

<details class="declaration-card" open>
<summary>Variable – TODO https://github</summary>

TODO https://github.com/ziglang/zig/issues/5738

\`\`\`zig
pub var log_level = std.log.Level.warn
\`\`\`

</details>

---

## Constants (3)

### <a id="const-failing-allocator"></a>`failing_allocator`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const failing_allocator = failing_allocator_instance.allocator()
\`\`\`

</details>

---

### <a id="const-allocator"></a>`allocator`

<details class="declaration-card" open>
<summary>Constant – This should only be used in temporary test programs</summary>

This should only be used in temporary test programs.

\`\`\`zig
pub const allocator = allocator_instance.allocator()
\`\`\`

</details>

---

### <a id="const-backend-can-print"></a>`backend_can_print`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const backend_can_print = switch (builtin.zig_backend) {
    .stage2_aarch64,
    .stage2_powerpc,
    .stage2_riscv64,
    .stage2_spirv,
    => false,
    else => true,
}
\`\`\`

</details>

---

## Functions (17)

### <a id="fn-expecterror"></a>`expectError`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests. It prints diagnostics to stderr
and then returns a test failure error when actual_error_union is not expected_error.

\`\`\`zig
pub fn expectError(expected_error: anyerror, actual_error_union: anytype) !void {
    if (actual_error_union) |actual_payload| {
        print("expected error.{s}, found {any}\n", .{ @errorName(expected_error), actual_payload });
        return error.TestExpectedError;
    } else |actual_error| {
        if (expected_error != actual_error) {
            print("expected error.{s}, found error.{s}\n", .{
                @errorName(expected_error),
                @errorName(actual_error),
            });
            return error.TestUnexpectedError;
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `expected\_error` | `anyerror` | – | – |
| `actual\_error\_union` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectequal"></a>`expectEqual`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests. When the two values are not
equal, prints diagnostics to stderr to show exactly how they are not equal,
then returns a test failure error.
`actual` and `expected` are coerced to a common type using peer type resolution.

\`\`\`zig
pub inline fn expectEqual(expected: anytype, actual: anytype) !void {
    const T = @TypeOf(expected, actual);
    return expectEqualInner(T, expected, actual);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `expected` | `` | – | – |
| `actual` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectfmt"></a>`expectFmt`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests. When the formatted result of the template
and its arguments does not equal the expected text, it prints diagnostics to stderr to show how
they are not equal, then returns an error. It depends on `expectEqualStrings` for printing
diagnostics.

\`\`\`zig
pub fn expectFmt(expected: []const u8, comptime template: []const u8, args: anytype) !void {
    if (@inComptime()) {
        var buffer: [std.fmt.count(template, args)]u8 = undefined;
        return expectEqualStrings(expected, try std.fmt.bufPrint(&buffer, template, args));
    }
    const actual = try std.fmt.allocPrint(allocator, template, args);
    defer allocator.free(actual);
    return expectEqualStrings(expected, actual);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `expected` | `[]const u8` | – | – |
| `template` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectapproxeqabs"></a>`expectApproxEqAbs`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests. When the actual value is
not approximately equal to the expected value, prints diagnostics to stderr
to show exactly how they are not equal, then returns a test failure error.
See `math.approxEqAbs` for more information on the tolerance parameter.
The types must be floating-point.
`actual` and `expected` are coerced to a common type using peer type resolution.

\`\`\`zig
pub inline fn expectApproxEqAbs(expected: anytype, actual: anytype, tolerance: anytype) !void {
    const T = @TypeOf(expected, actual, tolerance);
    return expectApproxEqAbsInner(T, expected, actual, tolerance);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `expected` | `` | – | – |
| `actual` | `` | – | – |
| `tolerance` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectapproxeqrel"></a>`expectApproxEqRel`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests. When the actual value is
not approximately equal to the expected value, prints diagnostics to stderr
to show exactly how they are not equal, then returns a test failure error.
See `math.approxEqRel` for more information on the tolerance parameter.
The types must be floating-point.
`actual` and `expected` are coerced to a common type using peer type resolution.

\`\`\`zig
pub inline fn expectApproxEqRel(expected: anytype, actual: anytype, tolerance: anytype) !void {
    const T = @TypeOf(expected, actual, tolerance);
    return expectApproxEqRelInner(T, expected, actual, tolerance);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `expected` | `` | – | – |
| `actual` | `` | – | – |
| `tolerance` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectequalslices"></a>`expectEqualSlices`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests. When the two slices are not
equal, prints diagnostics to stderr to show exactly how they are not equal (with
the differences highlighted in red), then returns a test failure error.
The colorized output is optional and controlled by the return of `std.io.tty.detectConfig()`.
If your inputs are UTF-8 encoded strings, consider calling `expectEqualStrings` instead.

\`\`\`zig
pub fn expectEqualSlices(comptime T: type, expected: []const T, actual: []const T) !void {
    const diff_index: usize = diff_index: {
        const shortest = @min(expected.len, actual.len);
        var index: usize = 0;
        while (index < shortest) : (index += 1) {
            if (!std.meta.eql(actual[index], expected[index])) break :diff_index index;
        }
        break :diff_index if (expected.len == actual.len) return else shortest;
    };
    if (!backend_can_print) return error.TestExpectedEqual;
    const stderr_w = std.debug.lockStderrWriter(&.{});
    defer std.debug.unlockStderrWriter();
    failEqualSlices(T, expected, actual, diff_index, stderr_w) catch {};
    return error.TestExpectedEqual;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `expected` | `[]const T` | – | – |
| `actual` | `[]const T` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectequalsentinel"></a>`expectEqualSentinel`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests. Checks that two slices or two arrays are equal,
including that their sentinel (if any) are the same. Will error if given another type.

\`\`\`zig
pub fn expectEqualSentinel(comptime T: type, comptime sentinel: T, expected: [:sentinel]const T, actual: [:sentinel]const T) !void {
    try expectEqualSlices(T, expected, actual);

    const expected_value_sentinel = blk: {
        switch (@typeInfo(@TypeOf(expected))) {
            .pointer => {
                break :blk expected[expected.len];
            },
            .array => |array_info| {
                const indexable_outside_of_bounds = @as([]const array_info.child, &expected);
                break :blk indexable_outside_of_bounds[indexable_outside_of_bounds.len];
            },
            else => {},
        }
    };

    const actual_value_sentinel = blk: {
        switch (@typeInfo(@TypeOf(actual))) {
            .pointer => {
                break :blk actual[actual.len];
            },
            .array => |array_info| {
                const indexable_outside_of_bounds = @as([]const array_info.child, &actual);
                break :blk indexable_outside_of_bounds[indexable_outside_of_bounds.len];
            },
            else => {},
        }
    };

    if (!std.meta.eql(sentinel, expected_value_sentinel)) {
        print("expectEqualSentinel: 'expected' sentinel in memory is different from its type sentinel. type sentinel {}, in memory sentinel {}\n", .{ sentinel, expected_value_sentinel });
        return error.TestExpectedEqual;
    }

    if (!std.meta.eql(sentinel, actual_value_sentinel)) {
        print("expectEqualSentinel: 'actual' sentinel in memory is different from its type sentinel. type sentinel {}, in memory sentinel {}\n", .{ sentinel, actual_value_sentinel });
        return error.TestExpectedEqual;
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `sentinel` | `T` | – | – |
| `expected` | `[:sentinel]const T` | – | – |
| `actual` | `[:sentinel]const T` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expect"></a>`expect`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests.
When `ok` is false, returns a test failure error.

\`\`\`zig
pub fn expect(ok: bool) !void {
    if (!ok) return error.TestUnexpectedResult;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ok` | `bool` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-tmpdir"></a>`tmpDir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn tmpDir(opts: std.fs.Dir.OpenOptions) TmpDir {
    var random_bytes: [TmpDir.random_bytes_count]u8 = undefined;
    std.crypto.random.bytes(&random_bytes);
    var sub_path: [TmpDir.sub_path_len]u8 = undefined;
    _ = std.fs.base64_encoder.encode(&sub_path, &random_bytes);

    const cwd = std.fs.cwd();
    var cache_dir = cwd.makeOpenPath(".zig-cache", .{}) catch
        @panic("unable to make tmp dir for testing: unable to make and open .zig-cache dir");
    defer cache_dir.close();
    const parent_dir = cache_dir.makeOpenPath("tmp", .{}) catch
        @panic("unable to make tmp dir for testing: unable to make and open .zig-cache/tmp dir");
    const dir = parent_dir.makeOpenPath(&sub_path, opts) catch
        @panic("unable to make tmp dir for testing: unable to make and open the tmp dir");

    return .{
        .dir = dir,
        .parent_dir = parent_dir,
        .sub_path = sub_path,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `opts` | `std.fs.Dir.OpenOptions` | – | – |
| Return | [`TmpDir`](#fn-tmpdir) | – | – |

</details>

---

### <a id="fn-expectequalstrings"></a>`expectEqualStrings`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn expectEqualStrings(expected: []const u8, actual: []const u8) !void {
    if (std.mem.indexOfDiff(u8, actual, expected)) |diff_index| {
        if (@inComptime()) {
            @compileError(std.fmt.comptimePrint("\nexpected:\n{s}\nfound:\n{s}\ndifference starts at index {d}", .{
                expected, actual, diff_index,
            }));
        }
        print("\n====== expected this output: =========\n", .{});
        printWithVisibleNewlines(expected);
        print("\n======== instead found this: =========\n", .{});
        printWithVisibleNewlines(actual);
        print("\n======================================\n", .{});

        var diff_line_number: usize = 1;
        for (expected[0..diff_index]) |value| {
            if (value == '\n') diff_line_number += 1;
        }
        print("First difference occurs on line {d}:\n", .{diff_line_number});

        print("expected:\n", .{});
        printIndicatorLine(expected, diff_index);

        print("found:\n", .{});
        printIndicatorLine(actual, diff_index);

        return error.TestExpectedEqual;
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `expected` | `[]const u8` | – | – |
| `actual` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectstringstartswith"></a>`expectStringStartsWith`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn expectStringStartsWith(actual: []const u8, expected_starts_with: []const u8) !void {
    if (std.mem.startsWith(u8, actual, expected_starts_with))
        return;

    const shortened_actual = if (actual.len >= expected_starts_with.len)
        actual[0..expected_starts_with.len]
    else
        actual;

    print("\n====== expected to start with: =========\n", .{});
    printWithVisibleNewlines(expected_starts_with);
    print("\n====== instead started with: ===========\n", .{});
    printWithVisibleNewlines(shortened_actual);
    print("\n========= full output: ==============\n", .{});
    printWithVisibleNewlines(actual);
    print("\n======================================\n", .{});

    return error.TestExpectedStartsWith;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `actual` | `[]const u8` | – | – |
| `expected\_starts\_with` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectstringendswith"></a>`expectStringEndsWith`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn expectStringEndsWith(actual: []const u8, expected_ends_with: []const u8) !void {
    if (std.mem.endsWith(u8, actual, expected_ends_with))
        return;

    const shortened_actual = if (actual.len >= expected_ends_with.len)
        actual[(actual.len - expected_ends_with.len)..]
    else
        actual;

    print("\n====== expected to end with: =========\n", .{});
    printWithVisibleNewlines(expected_ends_with);
    print("\n====== instead ended with: ===========\n", .{});
    printWithVisibleNewlines(shortened_actual);
    print("\n========= full output: ==============\n", .{});
    printWithVisibleNewlines(actual);
    print("\n======================================\n", .{});

    return error.TestExpectedEndsWith;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `actual` | `[]const u8` | – | – |
| `expected\_ends\_with` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-expectequaldeep"></a>`expectEqualDeep`

<details class="declaration-card" open>
<summary>Function – This function is intended to be used only in tests</summary>

This function is intended to be used only in tests. When the two values are not
deeply equal, prints diagnostics to stderr to show exactly how they are not equal,
then returns a test failure error.
`actual` and `expected` are coerced to a common type using peer type resolution.

Deeply equal is defined as follows:
Primitive types are deeply equal if they are equal using `==` operator.
Struct values are deeply equal if their corresponding fields are deeply equal.
Container types(like Array/Slice/Vector) deeply equal when their corresponding elements are deeply equal.
Pointer values are deeply equal if values they point to are deeply equal.

Note: Self-referential structs are supported (e.g. things like std.SinglyLinkedList)
but may cause infinite recursion or stack overflow when a container has a pointer to itself.

\`\`\`zig
pub inline fn expectEqualDeep(expected: anytype, actual: anytype) error{TestExpectedEqual}!void {
    const T = @TypeOf(expected, actual);
    return expectEqualDeepInner(T, expected, actual);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `expected` | `` | – | – |
| `actual` | `` | – | – |
| Return | `error{TestExpectedEqual}!void` | – | – |

**Possible Errors:**

- `error.TestExpectedEqual`

</details>

---

### <a id="fn-checkallallocationfailures"></a>`checkAllAllocationFailures`

<details class="declaration-card" open>
<summary>Function – Exhaustively check that allocation failures within `test_fn` are handled without</summary>

Exhaustively check that allocation failures within `test_fn` are handled without
introducing memory leaks. If used with the `testing.allocator` as the `backing_allocator`,
it will also be able to detect double frees, etc (when runtime safety is enabled).

The provided `test_fn` must have a `std.mem.Allocator` as its first argument,
and must have a return type of `!void`. Any extra arguments of `test_fn` can
be provided via the `extra_args` tuple.

Any relevant state shared between runs of `test_fn` *must* be reset within `test_fn`.

The strategy employed is to:
- Run the test function once to get the total number of allocations.
- Then, iterate and run the function X more times, incrementing
  the failing index each iteration (where X is the total number of
  allocations determined previously)

Expects that `test_fn` has a deterministic number of memory allocations:
- If an allocation was made to fail during a run of `test_fn`, but `test_fn`
  didn't return `error.OutOfMemory`, then `error.SwallowedOutOfMemoryError`
  is returned from `checkAllAllocationFailures`. You may want to ignore this
  depending on whether or not the code you're testing includes some strategies
  for recovering from `error.OutOfMemory`.
- If a run of `test_fn` with an expected allocation failure executes without
  an allocation failure being induced, then `error.NondeterministicMemoryUsage`
  is returned. This error means that there are allocation points that won't be
  tested by the strategy this function employs (that is, there are sometimes more
  points of allocation than the initial run of `test_fn` detects).

---

Here's an example using a simple test case that will cause a leak when the
allocation of `bar` fails (but will pass normally):

\`\`\`zig
test {
    const length: usize = 10;
    const allocator = std.testing.allocator;
    var foo = try allocator.alloc(u8, length);
    var bar = try allocator.alloc(u8, length);

    allocator.free(foo);
    allocator.free(bar);
}
\`\`\`

The test case can be converted to something that this function can use by
doing:

\`\`\`zig
fn testImpl(allocator: std.mem.Allocator, length: usize) !void {
    var foo = try allocator.alloc(u8, length);
    var bar = try allocator.alloc(u8, length);

    allocator.free(foo);
    allocator.free(bar);
}

test {
    const length: usize = 10;
    const allocator = std.testing.allocator;
    try std.testing.checkAllAllocationFailures(allocator, testImpl, .{length});
}
\`\`\`

Running this test will show that `foo` is leaked when the allocation of
`bar` fails. The simplest fix, in this case, would be to use defer like so:

\`\`\`zig
fn testImpl(allocator: std.mem.Allocator, length: usize) !void {
    var foo = try allocator.alloc(u8, length);
    defer allocator.free(foo);
    var bar = try allocator.alloc(u8, length);
    defer allocator.free(bar);
}
\`\`\`

\`\`\`zig
pub fn checkAllAllocationFailures(backing_allocator: std.mem.Allocator, comptime test_fn: anytype, extra_args: anytype) !void {
    switch (@typeInfo(@typeInfo(@TypeOf(test_fn)).@"fn".return_type.?)) {
        .error_union => |info| {
            if (info.payload != void) {
                @compileError("Return type must be !void");
            }
        },
        else => @compileError("Return type must be !void"),
    }
    if (@typeInfo(@TypeOf(extra_args)) != .@"struct") {
        @compileError("Expected tuple or struct argument, found " ++ @typeName(@TypeOf(extra_args)));
    }

    const ArgsTuple = std.meta.ArgsTuple(@TypeOf(test_fn));
    const fn_args_fields = @typeInfo(ArgsTuple).@"struct".fields;
    if (fn_args_fields.len == 0 or fn_args_fields[0].type != std.mem.Allocator) {
        @compileError("The provided function must have an " ++ @typeName(std.mem.Allocator) ++ " as its first argument");
    }
    const expected_args_tuple_len = fn_args_fields.len - 1;
    if (extra_args.len != expected_args_tuple_len) {
        @compileError("The provided function expects " ++ std.fmt.comptimePrint("{d}", .{expected_args_tuple_len}) ++ " extra arguments, but the provided tuple contains " ++ std.fmt.comptimePrint("{d}", .{extra_args.len}));
    }

    // Setup the tuple that will actually be used with @call (we'll need to insert
    // the failing allocator in field @"0" before each @call)
    var args: ArgsTuple = undefined;
    inline for (@typeInfo(@TypeOf(extra_args)).@"struct".fields, 0..) |field, i| {
        const arg_i_str = comptime str: {
            var str_buf: [100]u8 = undefined;
            const args_i = i + 1;
            const str_len = std.fmt.printInt(&str_buf, args_i, 10, .lower, .{});
            break :str str_buf[0..str_len];
        };
        @field(args, arg_i_str) = @field(extra_args, field.name);
    }

    // Try it once with unlimited memory, make sure it works
    const needed_alloc_count = x: {
        var failing_allocator_inst = std.testing.FailingAllocator.init(backing_allocator, .{});
        args.@"0" = failing_allocator_inst.allocator();

        try @call(.auto, test_fn, args);
        break :x failing_allocator_inst.alloc_index;
    };

    var fail_index: usize = 0;
    while (fail_index < needed_alloc_count) : (fail_index += 1) {
        var failing_allocator_inst = std.testing.FailingAllocator.init(backing_allocator, .{ .fail_index = fail_index });
        args.@"0" = failing_allocator_inst.allocator();

        if (@call(.auto, test_fn, args)) |_| {
            if (failing_allocator_inst.has_induced_failure) {
                return error.SwallowedOutOfMemoryError;
            } else {
                return error.NondeterministicMemoryUsage;
            }
        } else |err| switch (err) {
            error.OutOfMemory => {
                if (failing_allocator_inst.allocated_bytes != failing_allocator_inst.freed_bytes) {
                    print(
                        "\nfail_index: {d}/{d}\nallocated bytes: {d}\nfreed bytes: {d}\nallocations: {d}\ndeallocations: {d}\nallocation that was made to fail: {f}",
                        .{
                            fail_index,
                            needed_alloc_count,
                            failing_allocator_inst.allocated_bytes,
                            failing_allocator_inst.freed_bytes,
                            failing_allocator_inst.allocations,
                            failing_allocator_inst.deallocations,
                            failing_allocator_inst.getStackTrace(),
                        },
                    );
                    return error.MemoryLeakDetected;
                }
            },
            else => return err,
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `backing\_allocator` | `std.mem.Allocator` | – | – |
| `test\_fn` | `` | – | – |
| `extra\_args` | `` | – | – |
| Return | `void` | – | – |

**Examples:**

#### Example 1: an allocation failure being induced, then \`error

an allocation failure being induced, then \`error.NondeterministicMemoryUsage\` Here's an example using a simple test case that will cause a leak when the.

\`\`\`zig
test {
const length: usize = 10;
const allocator = std.testing.allocator;
var foo = try allocator.alloc(u8, length);
var bar = try allocator.alloc(u8, length);

allocator.free(foo);
allocator.free(bar);
}
\`\`\`

#### Example 2: Calling `checkAllAllocationFailures`

This example demonstrates how to call `checkAllAllocationFailures`.

\`\`\`zig
fn testImpl(allocator: std.mem.Allocator, length: usize) !void {
var foo = try allocator.alloc(u8, length);
var bar = try allocator.alloc(u8, length);

allocator.free(foo);
allocator.free(bar);
}

test {
const length: usize = 10;
const allocator = std.testing.allocator;
try std.testing.checkAllAllocationFailures(allocator, testImpl, .{length});
}
\`\`\`

#### Example 3: Calling `checkAllAllocationFailures`

This example demonstrates how to call `checkAllAllocationFailures`.

\`\`\`zig
fn testImpl(allocator: std.mem.Allocator, length: usize) !void {
var foo = try allocator.alloc(u8, length);
defer allocator.free(foo);
var bar = try allocator.alloc(u8, length);
defer allocator.free(bar);
}
\`\`\`

</details>

---

### <a id="fn-refalldecls"></a>`refAllDecls`

<details class="declaration-card" open>
<summary>Function – Given a type, references all the declarations inside, so that the semantic analyzer sees them</summary>

Given a type, references all the declarations inside, so that the semantic analyzer sees them.

\`\`\`zig
pub fn refAllDecls(comptime T: type) void {
    if (!builtin.is_test) return;
    inline for (comptime std.meta.declarations(T)) |decl| {
        _ = &@field(T, decl.name);
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-refalldeclsrecursive"></a>`refAllDeclsRecursive`

<details class="declaration-card" open>
<summary>Function – Given a type, recursively references all the declarations inside, so that the semantic analyzer sees them</summary>

Given a type, recursively references all the declarations inside, so that the semantic analyzer sees them.
For deep types, you may use `@setEvalBranchQuota`.

\`\`\`zig
pub fn refAllDeclsRecursive(comptime T: type) void {
    if (!builtin.is_test) return;
    inline for (comptime std.meta.declarations(T)) |decl| {
        if (@TypeOf(@field(T, decl.name)) == type) {
            switch (@typeInfo(@field(T, decl.name))) {
                .@"struct", .@"enum", .@"union", .@"opaque" => refAllDeclsRecursive(@field(T, decl.name)),
                else => {},
            }
        }
        _ = &@field(T, decl.name);
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-fuzz"></a>`fuzz`

<details class="declaration-card" open>
<summary>Function – Inline to avoid coverage instrumentation</summary>

Inline to avoid coverage instrumentation.

\`\`\`zig
pub inline fn fuzz(
    context: anytype,
    comptime testOne: fn (context: @TypeOf(context), input: []const u8) anyerror!void,
    options: FuzzInputOptions,
) anyerror!void {
    return @import("root").fuzz(context, testOne, options);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `context` | `` | – | – |
| `testOne` | See note[^fn-fuzz-testone-type-0] | – | – |
| `options` | [`FuzzInputOptions`](#type-fuzzinputoptions) | – | – |
| Return | `anyerror!void` | – | – |


[^fn-fuzz-testone-type-0]:
    Type for parameter `testOne` of `fuzz`:

    \`\`\`zig
    fn (context: @TypeOf(context), input: []const u8) anyerror!void
    \`\`\`

</details>

---
