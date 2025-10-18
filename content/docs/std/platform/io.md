---
title: "std.Io"
description: "Comprehensive reference for Zig's std.Io module covering operating system, filesystem, and runtime services."
navigation:
  title: "Io"
  icon: i-lucide-server-cog
  badge: "Platform"
badge: "Platform"
category: "platform"
tags:
  - "zig"
  - "standard-library"
  - "platform"
source: "std/Io.md"
githubPath: "std/Io.md"
lastUpdated: "2025-10-11T02:43:50.337Z"
seo:
  title: "std.Io · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.Io module covering operating system, filesystem, and runtime services."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/Io.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.Io` |
| Declarations | 17 |
| Breakdown | 5 functions · 1 type · 6 constants · 5 modules |
| Generated (unix epoch) | 1760148099 |

---

## Table of Contents

- [Functions](#functions)
  - [`GenericReader`](#fn-genericreader)
  - [`GenericWriter`](#fn-genericwriter)
  - [`poll`](#fn-poll)
  - [`Poller`](#fn-poller)
  - [`PollFiles`](#fn-pollfiles)

- [Types](#types)
  - [`Limit`](#type-limit)

- [Modules](#modules)
  - [`AnyReader`](#module-anyreader)
  - [`AnyWriter`](#module-anywriter)
  - [`Reader`](#module-reader)
  - [`tty`](#module-tty)
  - [`Writer`](#module-writer)

- [Constants](#constants)
  - [`CountingReader`](#const-countingreader)
  - [`countingReader`](#const-countingreader-1)
  - [`FixedBufferStream`](#const-fixedbufferstream)
  - [`fixedBufferStream`](#const-fixedbufferstream-1)
  - [`null\_writer`](#const-null-writer)
  - [`NullWriter`](#const-nullwriter)

---

## Types (1)

### <a id="type-limit"></a>`Limit`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Limit = enum(usize) {
    nothing = 0,
    unlimited = std.math.maxInt(usize),
    _,

    /// `std.math.maxInt(usize)` is interpreted to mean `.unlimited`.
    pub fn limited(n: usize) Limit {
        return @enumFromInt(n);
    }

    /// Any value grater than `std.math.maxInt(usize)` is interpreted to mean
    /// `.unlimited`.
    pub fn limited64(n: u64) Limit {
        return @enumFromInt(@min(n, std.math.maxInt(usize)));
    }

    pub fn countVec(data: []const []const u8) Limit {
        var total: usize = 0;
        for (data) |d| total += d.len;
        return .limited(total);
    }

    pub fn min(a: Limit, b: Limit) Limit {
        return @enumFromInt(@min(@intFromEnum(a), @intFromEnum(b)));
    }

    pub fn minInt(l: Limit, n: usize) usize {
        return @min(n, @intFromEnum(l));
    }

    pub fn minInt64(l: Limit, n: u64) usize {
        return @min(n, @intFromEnum(l));
    }

    pub fn slice(l: Limit, s: []u8) []u8 {
        return s[0..l.minInt(s.len)];
    }

    pub fn sliceConst(l: Limit, s: []const u8) []const u8 {
        return s[0..l.minInt(s.len)];
    }

    pub fn toInt(l: Limit) ?usize {
        return switch (l) {
            else => @intFromEnum(l),
            .unlimited => null,
        };
    }

    /// Reduces a slice to account for the limit, leaving room for one extra
    /// byte above the limit, allowing for the use case of differentiating
    /// between end-of-stream and reaching the limit.
    pub fn slice1(l: Limit, non_empty_buffer: []u8) []u8 {
        assert(non_empty_buffer.len >= 1);
        return non_empty_buffer[0..@min(@intFromEnum(l) +| 1, non_empty_buffer.len)];
    }

    pub fn nonzero(l: Limit) bool {
        return @intFromEnum(l) > 0;
    }

    /// Return a new limit reduced by `amount` or return `null` indicating
    /// limit would be exceeded.
    pub fn subtract(l: Limit, amount: usize) ?Limit {
        if (l == .unlimited) return .unlimited;
        if (amount > @intFromEnum(l)) return null;
        return @enumFromInt(@intFromEnum(l) - amount);
    }
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `nothing` |  |
| `unlimited` |  |
| `_` |  |

</details>

---

## Modules (5)

### <a id="module-anyreader"></a>`AnyReader`

<details class="declaration-card" open>
<summary>Module – Deprecated in favor of `Reader`</summary>

Deprecated in favor of `Reader`.

```zig
pub const AnyReader = @import("Io/DeprecatedReader.zig")
```

> **Module:** `Io/DeprecatedReader.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Io/DeprecatedReader.zig)

</details>

---

### <a id="module-anywriter"></a>`AnyWriter`

<details class="declaration-card" open>
<summary>Module – Deprecated in favor of `Writer`</summary>

Deprecated in favor of `Writer`.

```zig
pub const AnyWriter = @import("Io/DeprecatedWriter.zig")
```

> **Module:** `Io/DeprecatedWriter.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Io/DeprecatedWriter.zig)

</details>

---

### <a id="module-reader"></a>`Reader`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Reader = @import("Io/Reader.zig")
```

> **Module:** `Io/Reader.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Io/Reader.zig)

</details>

---

### <a id="module-tty"></a>`tty`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const tty = @import("Io/tty.zig")
```

> **Module:** `Io/tty.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Io/tty.zig)

</details>

---

### <a id="module-writer"></a>`Writer`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Writer = @import("Io/Writer.zig")
```

> **Module:** `Io/Writer.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Io/Writer.zig)

</details>

---

## Constants (6)

### <a id="const-countingreader"></a>`CountingReader` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated with no replacement; inefficient pattern</summary>

> **⚠️ Deprecation Notice:** Deprecated with no replacement; inefficient pattern
>
> This may be removed in a future version.

Deprecated with no replacement; inefficient pattern

```zig
pub const CountingReader = @import("Io/counting_reader.zig").CountingReader
```

</details>

---

### <a id="const-countingreader-1"></a>`countingReader` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated with no replacement; inefficient pattern</summary>

> **⚠️ Deprecation Notice:** Deprecated with no replacement; inefficient pattern
>
> This may be removed in a future version.

Deprecated with no replacement; inefficient pattern

```zig
pub const countingReader = @import("Io/counting_reader.zig").countingReader
```

</details>

---

### <a id="const-fixedbufferstream"></a>`FixedBufferStream` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated in favor of `Reader`</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Reader`.
>
> This may be removed in a future version.

Deprecated in favor of `Reader`.

```zig
pub const FixedBufferStream = @import("Io/fixed_buffer_stream.zig").FixedBufferStream
```

</details>

---

### <a id="const-fixedbufferstream-1"></a>`fixedBufferStream` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated in favor of `Reader`</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Reader`.
>
> This may be removed in a future version.

Deprecated in favor of `Reader`.

```zig
pub const fixedBufferStream = @import("Io/fixed_buffer_stream.zig").fixedBufferStream
```

</details>

---

### <a id="const-null-writer"></a>`null_writer` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated in favor of `Writer</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Writer.Discarding`.
>
> This may be removed in a future version.

Deprecated in favor of `Writer.Discarding`.

```zig
pub const null_writer: NullWriter = .{ .context = {} }
```

</details>

---

### <a id="const-nullwriter"></a>`NullWriter` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Constant • Deprecated – Deprecated in favor of `Writer</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Writer.Discarding`.
>
> This may be removed in a future version.

Deprecated in favor of `Writer.Discarding`.

```zig
pub const NullWriter = GenericWriter(void, error{}, dummyWrite)
```

</details>

---

## Functions (5)

### <a id="fn-genericreader"></a>`GenericReader` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Function • Deprecated – Deprecated in favor of `Reader`</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Reader`.
>
> This may be removed in a future version.

Deprecated in favor of `Reader`.

```zig
pub fn GenericReader(
    comptime Context: type,
    comptime ReadError: type,
    /// Returns the number of bytes read. It may be less than buffer.len.
    /// If the number of bytes read is 0, it means end of stream.
    /// End of stream is not an error condition.
    comptime readFn: fn (context: Context, buffer: []u8) ReadError!usize,
) type {
    return struct {
        context: Context,

        pub const Error = ReadError;
        pub const NoEofError = ReadError || error{
            EndOfStream,
        };

        pub inline fn read(self: Self, buffer: []u8) Error!usize {
            return readFn(self.context, buffer);
        }

        pub inline fn readAll(self: Self, buffer: []u8) Error!usize {
            return @errorCast(self.any().readAll(buffer));
        }

        pub inline fn readAtLeast(self: Self, buffer: []u8, len: usize) Error!usize {
            return @errorCast(self.any().readAtLeast(buffer, len));
        }

        pub inline fn readNoEof(self: Self, buf: []u8) NoEofError!void {
            return @errorCast(self.any().readNoEof(buf));
        }

        pub inline fn readAllArrayList(
            self: Self,
            array_list: *std.array_list.Managed(u8),
            max_append_size: usize,
        ) (error{StreamTooLong} || Allocator.Error || Error)!void {
            return @errorCast(self.any().readAllArrayList(array_list, max_append_size));
        }

        pub inline fn readAllArrayListAligned(
            self: Self,
            comptime alignment: ?Alignment,
            array_list: *std.array_list.AlignedManaged(u8, alignment),
            max_append_size: usize,
        ) (error{StreamTooLong} || Allocator.Error || Error)!void {
            return @errorCast(self.any().readAllArrayListAligned(
                alignment,
                array_list,
                max_append_size,
            ));
        }

        pub inline fn readAllAlloc(
            self: Self,
            allocator: Allocator,
            max_size: usize,
        ) (Error || Allocator.Error || error{StreamTooLong})![]u8 {
            return @errorCast(self.any().readAllAlloc(allocator, max_size));
        }

        pub inline fn readUntilDelimiterArrayList(
            self: Self,
            array_list: *std.array_list.Managed(u8),
            delimiter: u8,
            max_size: usize,
        ) (NoEofError || Allocator.Error || error{StreamTooLong})!void {
            return @errorCast(self.any().readUntilDelimiterArrayList(
                array_list,
                delimiter,
                max_size,
            ));
        }

        pub inline fn readUntilDelimiterAlloc(
            self: Self,
            allocator: Allocator,
            delimiter: u8,
            max_size: usize,
        ) (NoEofError || Allocator.Error || error{StreamTooLong})![]u8 {
            return @errorCast(self.any().readUntilDelimiterAlloc(
                allocator,
                delimiter,
                max_size,
            ));
        }

        pub inline fn readUntilDelimiter(
            self: Self,
            buf: []u8,
            delimiter: u8,
        ) (NoEofError || error{StreamTooLong})![]u8 {
            return @errorCast(self.any().readUntilDelimiter(buf, delimiter));
        }

        pub inline fn readUntilDelimiterOrEofAlloc(
            self: Self,
            allocator: Allocator,
            delimiter: u8,
            max_size: usize,
        ) (Error || Allocator.Error || error{StreamTooLong})!?[]u8 {
            return @errorCast(self.any().readUntilDelimiterOrEofAlloc(
                allocator,
                delimiter,
                max_size,
            ));
        }

        pub inline fn readUntilDelimiterOrEof(
            self: Self,
            buf: []u8,
            delimiter: u8,
        ) (Error || error{StreamTooLong})!?[]u8 {
            return @errorCast(self.any().readUntilDelimiterOrEof(buf, delimiter));
        }

        pub inline fn streamUntilDelimiter(
            self: Self,
            writer: anytype,
            delimiter: u8,
            optional_max_size: ?usize,
        ) (NoEofError || error{StreamTooLong} || @TypeOf(writer).Error)!void {
            return @errorCast(self.any().streamUntilDelimiter(
                writer,
                delimiter,
                optional_max_size,
            ));
        }

        pub inline fn skipUntilDelimiterOrEof(self: Self, delimiter: u8) Error!void {
            return @errorCast(self.any().skipUntilDelimiterOrEof(delimiter));
        }

        pub inline fn readByte(self: Self) NoEofError!u8 {
            return @errorCast(self.any().readByte());
        }

        pub inline fn readByteSigned(self: Self) NoEofError!i8 {
            return @errorCast(self.any().readByteSigned());
        }

        pub inline fn readBytesNoEof(
            self: Self,
            comptime num_bytes: usize,
        ) NoEofError![num_bytes]u8 {
            return @errorCast(self.any().readBytesNoEof(num_bytes));
        }

        pub inline fn readInt(self: Self, comptime T: type, endian: std.builtin.Endian) NoEofError!T {
            return @errorCast(self.any().readInt(T, endian));
        }

        pub inline fn readVarInt(
            self: Self,
            comptime ReturnType: type,
            endian: std.builtin.Endian,
            size: usize,
        ) NoEofError!ReturnType {
            return @errorCast(self.any().readVarInt(ReturnType, endian, size));
        }

        pub const SkipBytesOptions = AnyReader.SkipBytesOptions;

        pub inline fn skipBytes(
            self: Self,
            num_bytes: u64,
            comptime options: SkipBytesOptions,
        ) NoEofError!void {
            return @errorCast(self.any().skipBytes(num_bytes, options));
        }

        pub inline fn isBytes(self: Self, slice: []const u8) NoEofError!bool {
            return @errorCast(self.any().isBytes(slice));
        }

        pub inline fn readStruct(self: Self, comptime T: type) NoEofError!T {
            return @errorCast(self.any().readStruct(T));
        }

        pub inline fn readStructEndian(self: Self, comptime T: type, endian: std.builtin.Endian) NoEofError!T {
            return @errorCast(self.any().readStructEndian(T, endian));
        }

        pub const ReadEnumError = NoEofError || error{
            /// An integer was read, but it did not match any of the tags in the supplied enum.
            InvalidValue,
        };

        pub inline fn readEnum(
            self: Self,
            comptime Enum: type,
            endian: std.builtin.Endian,
        ) ReadEnumError!Enum {
            return @errorCast(self.any().readEnum(Enum, endian));
        }

        pub inline fn any(self: *const Self) AnyReader {
            return .{
                .context = @ptrCast(&self.context),
                .readFn = typeErasedReadFn,
            };
        }

        const Self = @This();

        fn typeErasedReadFn(context: *const anyopaque, buffer: []u8) anyerror!usize {
            const ptr: *const Context = @ptrCast(@alignCast(context));
            return readFn(ptr.*, buffer);
        }

        /// Helper for bridging to the new `Reader` API while upgrading.
        pub fn adaptToNewApi(self: *const Self, buffer: []u8) Adapter {
            return .{
                .derp_reader = self.*,
                .new_interface = .{
                    .buffer = buffer,
                    .vtable = &.{ .stream = Adapter.stream },
                    .seek = 0,
                    .end = 0,
                },
            };
        }

        pub const Adapter = struct {
            derp_reader: Self,
            new_interface: Reader,
            err: ?Error = null,

            fn stream(r: *Reader, w: *Writer, limit: Limit) Reader.StreamError!usize {
                const a: *@This() = @alignCast(@fieldParentPtr("new_interface", r));
                const buf = limit.slice(try w.writableSliceGreedy(1));
                const n = a.derp_reader.read(buf) catch |err| {
                    a.err = err;
                    return error.ReadFailed;
                };
                if (n == 0) return error.EndOfStream;
                w.advance(n);
                return n;
            }
        };
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `Context` | `type` | – | – |
| `ReadError` | `type` | – | – |
| `readFn` | `fn (context: Context, buffer: []u8) ReadError!usize` | – | – |
| Return | `type` | – | – |

**Possible Errors:**

- `error.EndOfStream`

</details>

---

### <a id="fn-genericwriter"></a>`GenericWriter` ⚠️ **DEPRECATED**

<details class="declaration-card" open>
<summary>Function • Deprecated – Deprecated in favor of `Writer`</summary>

> **⚠️ Deprecation Notice:** Deprecated in favor of `Writer`.
>
> This may be removed in a future version.

Deprecated in favor of `Writer`.

```zig
pub fn GenericWriter(
    comptime Context: type,
    comptime WriteError: type,
    comptime writeFn: fn (context: Context, bytes: []const u8) WriteError!usize,
) type {
    return struct {
        context: Context,

        const Self = @This();
        pub const Error = WriteError;

        pub inline fn write(self: Self, bytes: []const u8) Error!usize {
            return writeFn(self.context, bytes);
        }

        pub inline fn writeAll(self: Self, bytes: []const u8) Error!void {
            return @errorCast(self.any().writeAll(bytes));
        }

        pub inline fn print(self: Self, comptime format: []const u8, args: anytype) Error!void {
            return @errorCast(self.any().print(format, args));
        }

        pub inline fn writeByte(self: Self, byte: u8) Error!void {
            return @errorCast(self.any().writeByte(byte));
        }

        pub inline fn writeByteNTimes(self: Self, byte: u8, n: usize) Error!void {
            return @errorCast(self.any().writeByteNTimes(byte, n));
        }

        pub inline fn writeBytesNTimes(self: Self, bytes: []const u8, n: usize) Error!void {
            return @errorCast(self.any().writeBytesNTimes(bytes, n));
        }

        pub inline fn writeInt(self: Self, comptime T: type, value: T, endian: std.builtin.Endian) Error!void {
            return @errorCast(self.any().writeInt(T, value, endian));
        }

        pub inline fn writeStruct(self: Self, value: anytype) Error!void {
            return @errorCast(self.any().writeStruct(value));
        }

        pub inline fn writeStructEndian(self: Self, value: anytype, endian: std.builtin.Endian) Error!void {
            return @errorCast(self.any().writeStructEndian(value, endian));
        }

        pub inline fn any(self: *const Self) AnyWriter {
            return .{
                .context = @ptrCast(&self.context),
                .writeFn = typeErasedWriteFn,
            };
        }

        fn typeErasedWriteFn(context: *const anyopaque, bytes: []const u8) anyerror!usize {
            const ptr: *const Context = @ptrCast(@alignCast(context));
            return writeFn(ptr.*, bytes);
        }

        /// Helper for bridging to the new `Writer` API while upgrading.
        pub fn adaptToNewApi(self: *const Self, buffer: []u8) Adapter {
            return .{
                .derp_writer = self.*,
                .new_interface = .{
                    .buffer = buffer,
                    .vtable = &.{ .drain = Adapter.drain },
                },
            };
        }

        pub const Adapter = struct {
            derp_writer: Self,
            new_interface: Writer,
            err: ?Error = null,

            fn drain(w: *std.io.Writer, data: []const []const u8, splat: usize) std.io.Writer.Error!usize {
                _ = splat;
                const a: *@This() = @alignCast(@fieldParentPtr("new_interface", w));
                const buffered = w.buffered();
                if (buffered.len != 0) return w.consume(a.derp_writer.write(buffered) catch |err| {
                    a.err = err;
                    return error.WriteFailed;
                });
                return a.derp_writer.write(data[0]) catch |err| {
                    a.err = err;
                    return error.WriteFailed;
                };
            }
        };
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `Context` | `type` | – | – |
| `WriteError` | `type` | – | – |
| `writeFn` | `fn (context: Context, bytes: []const u8) WriteError!usize` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-poll"></a>`poll`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn poll(
    gpa: Allocator,
    comptime StreamEnum: type,
    files: PollFiles(StreamEnum),
) Poller(StreamEnum) {
    const enum_fields = @typeInfo(StreamEnum).@"enum".fields;
    var result: Poller(StreamEnum) = .{
        .gpa = gpa,
        .readers = @splat(.failing),
        .poll_fds = undefined,
        .windows = if (is_windows) .{
            .first_read_done = false,
            .overlapped = [1]windows.OVERLAPPED{
                std.mem.zeroes(windows.OVERLAPPED),
            } ** enum_fields.len,
            .small_bufs = undefined,
            .active = .{
                .count = 0,
                .handles_buf = undefined,
                .stream_map = undefined,
            },
        } else {},
    };

    inline for (enum_fields, 0..) |field, i| {
        if (is_windows) {
            result.windows.active.handles_buf[i] = @field(files, field.name).handle;
        } else {
            result.poll_fds[i] = .{
                .fd = @field(files, field.name).handle,
                .events = posix.POLL.IN,
                .revents = undefined,
            };
        }
    }

    return result;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gpa` | `Allocator` | – | – |
| `StreamEnum` | `type` | – | – |
| `files` | `PollFiles(StreamEnum)` | – | – |
| Return | `Poller(StreamEnum)` | – | – |

</details>

---

### <a id="fn-poller"></a>`Poller`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn Poller(comptime StreamEnum: type) type {
    return struct {
        const enum_fields = @typeInfo(StreamEnum).@"enum".fields;
        const PollFd = if (is_windows) void else posix.pollfd;

        gpa: Allocator,
        readers: [enum_fields.len]Reader,
        poll_fds: [enum_fields.len]PollFd,
        windows: if (is_windows) struct {
            first_read_done: bool,
            overlapped: [enum_fields.len]windows.OVERLAPPED,
            small_bufs: [enum_fields.len][128]u8,
            active: struct {
                count: math.IntFittingRange(0, enum_fields.len),
                handles_buf: [enum_fields.len]windows.HANDLE,
                stream_map: [enum_fields.len]StreamEnum,

                pub fn removeAt(self: *@This(), index: u32) void {
                    assert(index < self.count);
                    for (index + 1..self.count) |i| {
                        self.handles_buf[i - 1] = self.handles_buf[i];
                        self.stream_map[i - 1] = self.stream_map[i];
                    }
                    self.count -= 1;
                }
            },
        } else void,

        const Self = @This();

        pub fn deinit(self: *Self) void {
            const gpa = self.gpa;
            if (is_windows) {
                // cancel any pending IO to prevent clobbering OVERLAPPED value
                for (self.windows.active.handles_buf[0..self.windows.active.count]) |h| {
                    _ = windows.kernel32.CancelIo(h);
                }
            }
            inline for (&self.readers) |*r| gpa.free(r.buffer);
            self.* = undefined;
        }

        pub fn poll(self: *Self) !bool {
            if (is_windows) {
                return pollWindows(self, null);
            } else {
                return pollPosix(self, null);
            }
        }

        pub fn pollTimeout(self: *Self, nanoseconds: u64) !bool {
            if (is_windows) {
                return pollWindows(self, nanoseconds);
            } else {
                return pollPosix(self, nanoseconds);
            }
        }

        pub fn reader(self: *Self, which: StreamEnum) *Reader {
            return &self.readers[@intFromEnum(which)];
        }

        pub fn toOwnedSlice(self: *Self, which: StreamEnum) error{OutOfMemory}![]u8 {
            const gpa = self.gpa;
            const r = reader(self, which);
            if (r.seek == 0) {
                const new = try gpa.realloc(r.buffer, r.end);
                r.buffer = &.{};
                r.end = 0;
                return new;
            }
            const new = try gpa.dupe(u8, r.buffered());
            gpa.free(r.buffer);
            r.buffer = &.{};
            r.seek = 0;
            r.end = 0;
            return new;
        }

        fn pollWindows(self: *Self, nanoseconds: ?u64) !bool {
            const bump_amt = 512;
            const gpa = self.gpa;

            if (!self.windows.first_read_done) {
                var already_read_data = false;
                for (0..enum_fields.len) |i| {
                    const handle = self.windows.active.handles_buf[i];
                    switch (try windowsAsyncReadToFifoAndQueueSmallRead(
                        gpa,
                        handle,
                        &self.windows.overlapped[i],
                        &self.readers[i],
                        &self.windows.small_bufs[i],
                        bump_amt,
                    )) {
                        .populated, .empty => |state| {
                            if (state == .populated) already_read_data = true;
                            self.windows.active.handles_buf[self.windows.active.count] = handle;
                            self.windows.active.stream_map[self.windows.active.count] = @as(StreamEnum, @enumFromInt(i));
                            self.windows.active.count += 1;
                        },
                        .closed => {}, // don't add to the wait_objects list
                        .closed_populated => {
                            // don't add to the wait_objects list, but we did already get data
                            already_read_data = true;
                        },
                    }
                }
                self.windows.first_read_done = true;
                if (already_read_data) return true;
            }

            while (true) {
                if (self.windows.active.count == 0) return false;

                const status = windows.kernel32.WaitForMultipleObjects(
                    self.windows.active.count,
                    &self.windows.active.handles_buf,
                    0,
                    if (nanoseconds) |ns|
                        @min(std.math.cast(u32, ns / std.time.ns_per_ms) orelse (windows.INFINITE - 1), windows.INFINITE - 1)
                    else
                        windows.INFINITE,
                );
                if (status == windows.WAIT_FAILED)
                    return windows.unexpectedError(windows.GetLastError());
                if (status == windows.WAIT_TIMEOUT)
                    return true;

                if (status < windows.WAIT_OBJECT_0 or status > windows.WAIT_OBJECT_0 + enum_fields.len - 1)
                    unreachable;

                const active_idx = status - windows.WAIT_OBJECT_0;

                const stream_idx = @intFromEnum(self.windows.active.stream_map[active_idx]);
                const handle = self.windows.active.handles_buf[active_idx];

                const overlapped = &self.windows.overlapped[stream_idx];
                const stream_reader = &self.readers[stream_idx];
                const small_buf = &self.windows.small_bufs[stream_idx];

                const num_bytes_read = switch (try windowsGetReadResult(handle, overlapped, false)) {
                    .success => |n| n,
                    .closed => {
                        self.windows.active.removeAt(active_idx);
                        continue;
                    },
                    .aborted => unreachable,
                };
                const buf = small_buf[0..num_bytes_read];
                const dest = try writableSliceGreedyAlloc(stream_reader, gpa, buf.len);
                @memcpy(dest[0..buf.len], buf);
                advanceBufferEnd(stream_reader, buf.len);

                switch (try windowsAsyncReadToFifoAndQueueSmallRead(
                    gpa,
                    handle,
                    overlapped,
                    stream_reader,
                    small_buf,
                    bump_amt,
                )) {
                    .empty => {}, // irrelevant, we already got data from the small buffer
                    .populated => {},
                    .closed,
                    .closed_populated, // identical, since we already got data from the small buffer
                    => self.windows.active.removeAt(active_idx),
                }
                return true;
            }
        }

        fn pollPosix(self: *Self, nanoseconds: ?u64) !bool {
            const gpa = self.gpa;
            // We ask for ensureUnusedCapacity with this much extra space. This
            // has more of an effect on small reads because once the reads
            // start to get larger the amount of space an ArrayList will
            // allocate grows exponentially.
            const bump_amt = 512;

            const err_mask = posix.POLL.ERR | posix.POLL.NVAL | posix.POLL.HUP;

            const events_len = try posix.poll(&self.poll_fds, if (nanoseconds) |ns|
                std.math.cast(i32, ns / std.time.ns_per_ms) orelse std.math.maxInt(i32)
            else
                -1);
            if (events_len == 0) {
                for (self.poll_fds) |poll_fd| {
                    if (poll_fd.fd != -1) return true;
                } else return false;
            }

            var keep_polling = false;
            for (&self.poll_fds, &self.readers) |*poll_fd, *r| {
                // Try reading whatever is available before checking the error
                // conditions.
                // It's still possible to read after a POLL.HUP is received,
                // always check if there's some data waiting to be read first.
                if (poll_fd.revents & posix.POLL.IN != 0) {
                    const buf = try writableSliceGreedyAlloc(r, gpa, bump_amt);
                    const amt = posix.read(poll_fd.fd, buf) catch |err| switch (err) {
                        error.BrokenPipe => 0, // Handle the same as EOF.
                        else => |e| return e,
                    };
                    advanceBufferEnd(r, amt);
                    if (amt == 0) {
                        // Remove the fd when the EOF condition is met.
                        poll_fd.fd = -1;
                    } else {
                        keep_polling = true;
                    }
                } else if (poll_fd.revents & err_mask != 0) {
                    // Exclude the fds that signaled an error.
                    poll_fd.fd = -1;
                } else if (poll_fd.fd != -1) {
                    keep_polling = true;
                }
            }
            return keep_polling;
        }

        /// Returns a slice into the unused capacity of `buffer` with at least
        /// `min_len` bytes, extending `buffer` by resizing it with `gpa` as necessary.
        ///
        /// After calling this function, typically the caller will follow up with a
        /// call to `advanceBufferEnd` to report the actual number of bytes buffered.
        fn writableSliceGreedyAlloc(r: *Reader, allocator: Allocator, min_len: usize) Allocator.Error![]u8 {
            {
                const unused = r.buffer[r.end..];
                if (unused.len >= min_len) return unused;
            }
            if (r.seek > 0) {
                const data = r.buffer[r.seek..r.end];
                @memmove(r.buffer[0..data.len], data);
                r.seek = 0;
                r.end = data.len;
            }
            {
                var list: std.ArrayListUnmanaged(u8) = .{
                    .items = r.buffer[0..r.end],
                    .capacity = r.buffer.len,
                };
                defer r.buffer = list.allocatedSlice();
                try list.ensureUnusedCapacity(allocator, min_len);
            }
            const unused = r.buffer[r.end..];
            assert(unused.len >= min_len);
            return unused;
        }

        /// After writing directly into the unused capacity of `buffer`, this function
        /// updates `end` so that users of `Reader` can receive the data.
        fn advanceBufferEnd(r: *Reader, n: usize) void {
            assert(n <= r.buffer.len - r.end);
            r.end += n;
        }

        /// The `ReadFile` docuementation states that `lpNumberOfBytesRead` does not have a meaningful
        /// result when using overlapped I/O, but also that it cannot be `null` on Windows 7. For
        /// compatibility, we point it to this dummy variables, which we never otherwise access.
        /// See: https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-readfile
        var win_dummy_bytes_read: u32 = undefined;

        /// Read as much data as possible from `handle` with `overlapped`, and write it to the FIFO. Before
        /// returning, queue a read into `small_buf` so that `WaitForMultipleObjects` returns when more data
        /// is available. `handle` must have no pending asynchronous operation.
        fn windowsAsyncReadToFifoAndQueueSmallRead(
            gpa: Allocator,
            handle: windows.HANDLE,
            overlapped: *windows.OVERLAPPED,
            r: *Reader,
            small_buf: *[128]u8,
            bump_amt: usize,
        ) !enum { empty, populated, closed_populated, closed } {
            var read_any_data = false;
            while (true) {
                const fifo_read_pending = while (true) {
                    const buf = try writableSliceGreedyAlloc(r, gpa, bump_amt);
                    const buf_len = math.cast(u32, buf.len) orelse math.maxInt(u32);

                    if (0 == windows.kernel32.ReadFile(
                        handle,
                        buf.ptr,
                        buf_len,
                        &win_dummy_bytes_read,
                        overlapped,
                    )) switch (windows.GetLastError()) {
                        .IO_PENDING => break true,
                        .BROKEN_PIPE => return if (read_any_data) .closed_populated else .closed,
                        else => |err| return windows.unexpectedError(err),
                    };

                    const num_bytes_read = switch (try windowsGetReadResult(handle, overlapped, false)) {
                        .success => |n| n,
                        .closed => return if (read_any_data) .closed_populated else .closed,
                        .aborted => unreachable,
                    };

                    read_any_data = true;
                    advanceBufferEnd(r, num_bytes_read);

                    if (num_bytes_read == buf_len) {
                        // We filled the buffer, so there's probably more data available.
                        continue;
                    } else {
                        // We didn't fill the buffer, so assume we're out of data.
                        // There is no pending read.
                        break false;
                    }
                };

                if (fifo_read_pending) cancel_read: {
                    // Cancel the pending read into the FIFO.
                    _ = windows.kernel32.CancelIo(handle);

                    // We have to wait for the handle to be signalled, i.e. for the cancellation to complete.
                    switch (windows.kernel32.WaitForSingleObject(handle, windows.INFINITE)) {
                        windows.WAIT_OBJECT_0 => {},
                        windows.WAIT_FAILED => return windows.unexpectedError(windows.GetLastError()),
                        else => unreachable,
                    }

                    // If it completed before we canceled, make sure to tell the FIFO!
                    const num_bytes_read = switch (try windowsGetReadResult(handle, overlapped, true)) {
                        .success => |n| n,
                        .closed => return if (read_any_data) .closed_populated else .closed,
                        .aborted => break :cancel_read,
                    };
                    read_any_data = true;
                    advanceBufferEnd(r, num_bytes_read);
                }

                // Try to queue the 1-byte read.
                if (0 == windows.kernel32.ReadFile(
                    handle,
                    small_buf,
                    small_buf.len,
                    &win_dummy_bytes_read,
                    overlapped,
                )) switch (windows.GetLastError()) {
                    .IO_PENDING => {
                        // 1-byte read pending as intended
                        return if (read_any_data) .populated else .empty;
                    },
                    .BROKEN_PIPE => return if (read_any_data) .closed_populated else .closed,
                    else => |err| return windows.unexpectedError(err),
                };

                // We got data back this time. Write it to the FIFO and run the main loop again.
                const num_bytes_read = switch (try windowsGetReadResult(handle, overlapped, false)) {
                    .success => |n| n,
                    .closed => return if (read_any_data) .closed_populated else .closed,
                    .aborted => unreachable,
                };
                const buf = small_buf[0..num_bytes_read];
                const dest = try writableSliceGreedyAlloc(r, gpa, buf.len);
                @memcpy(dest[0..buf.len], buf);
                advanceBufferEnd(r, buf.len);
                read_any_data = true;
            }
        }

        /// Simple wrapper around `GetOverlappedResult` to determine the result of a `ReadFile` operation.
        /// If `!allow_aborted`, then `aborted` is never returned (`OPERATION_ABORTED` is considered unexpected).
        ///
        /// The `ReadFile` documentation states that the number of bytes read by an overlapped `ReadFile` must be determined using `GetOverlappedResult`, even if the
        /// operation immediately returns data:
        /// "Use NULL for [lpNumberOfBytesRead] if this is an asynchronous operation to avoid potentially
        /// erroneous results."
        /// "If `hFile` was opened with `FILE_FLAG_OVERLAPPED`, the following conditions are in effect: [...]
        /// The lpNumberOfBytesRead parameter should be set to NULL. Use the GetOverlappedResult function to
        /// get the actual number of bytes read."
        /// See: https://learn.microsoft.com/en-us/windows/win32/api/fileapi/nf-fileapi-readfile
        fn windowsGetReadResult(
            handle: windows.HANDLE,
            overlapped: *windows.OVERLAPPED,
            allow_aborted: bool,
        ) !union(enum) {
            success: u32,
            closed,
            aborted,
        } {
            var num_bytes_read: u32 = undefined;
            if (0 == windows.kernel32.GetOverlappedResult(
                handle,
                overlapped,
                &num_bytes_read,
                0,
            )) switch (windows.GetLastError()) {
                .BROKEN_PIPE => return .closed,
                .OPERATION_ABORTED => |err| if (allow_aborted) {
                    return .aborted;
                } else {
                    return windows.unexpectedError(err);
                },
                else => |err| return windows.unexpectedError(err),
            };
            return .{ .success = num_bytes_read };
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `StreamEnum` | `type` | – | – |
| Return | `type` | – | – |

**Possible Errors:**

- `error.OutOfMemory`

</details>

---

### <a id="fn-pollfiles"></a>`PollFiles`

<details class="declaration-card" open>
<summary>Function – Given an enum, returns a struct with fields of that enum, each field</summary>

Given an enum, returns a struct with fields of that enum, each field
representing an I/O stream for polling.

```zig
pub fn PollFiles(comptime StreamEnum: type) type {
    const enum_fields = @typeInfo(StreamEnum).@"enum".fields;
    var struct_fields: [enum_fields.len]std.builtin.Type.StructField = undefined;
    for (&struct_fields, enum_fields) |*struct_field, enum_field| {
        struct_field.* = .{
            .name = enum_field.name,
            .type = std.fs.File,
            .default_value_ptr = null,
            .is_comptime = false,
            .alignment = @alignOf(std.fs.File),
        };
    }
    return @Type(.{ .@"struct" = .{
        .layout = .auto,
        .fields = &struct_fields,
        .decls = &.{},
        .is_tuple = false,
    } });
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `StreamEnum` | `type` | – | – |
| Return | `type` | – | – |

</details>

---


