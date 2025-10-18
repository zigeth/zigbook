---
title: "std.Progress"
description: "Comprehensive reference for Zig's std.Progress module covering logging, debugging, and instrumentation helpers."
navigation:
  title: "Progress"
  icon: i-lucide-activity
  badge: "Observability"
badge: "Observability"
category: "observability"
tags:
  - "zig"
  - "standard-library"
  - "observability"
source: "std/Progress.md"
githubPath: "std/Progress.md"
lastUpdated: "2025-10-18T12:44:21.937Z"
seo:
  title: "std.Progress · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.Progress module covering logging, debugging, and instrumentation helpers."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/Progress.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.Progress` |
| Declarations | 11 |
| Breakdown | 6 functions · 3 types · 2 constants |
| Generated (unix epoch) | 1760148099 |

## Overview

This API is non-allocating, non-fallible, thread-safe, and lock-free.

---

## Table of Contents

- [Functions](#functions)
  - [`start`](#fn-start)
  - [`setStatus`](#fn-setstatus)
  - [`lockStdErr`](#fn-lockstderr)
  - [`unlockStdErr`](#fn-unlockstderr)
  - [`lockStderrWriter`](#fn-lockstderrwriter)
  - [`unlockStderrWriter`](#fn-unlockstderrwriter)

- [Types](#types)
  - [`Status`](#type-status)
  - [`Options`](#type-options)
  - [`Node`](#type-node)

- [Constants](#constants)
  - [`TerminalMode`](#const-terminalmode)
  - [`have\_ipc`](#const-have-ipc)

---

## Types (3)

### <a id="type-status"></a>`Status`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Status = enum {
    /// Indicates the application is progressing towards completion of a task.
    /// Unless the application is interactive, this is the only status the
    /// program will ever have!
    working,
    /// The application has completed an operation, and is now waiting for user
    /// input rather than calling exit(0).
    success,
    /// The application encountered an error, and is now waiting for user input
    /// rather than calling exit(1).
    failure,
    /// The application encountered at least one error, but is still working on
    /// more tasks.
    failure_working,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `working` | Indicates the application is progressing towards completion of a task. Unless the application is interactive, this is the only status the program will ever have! |
| `success` | The application has completed an operation, and is now waiting for user input rather than calling exit(0). |
| `failure` | The application encountered an error, and is now waiting for user input rather than calling exit(1). |
| `failure_working` | The application encountered at least one error, but is still working on more tasks. |

</details>

---

### <a id="type-options"></a>`Options`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Options = struct {
    /// User-provided buffer with static lifetime.
    ///
    /// Used to store the entire write buffer sent to the terminal. Progress output will be truncated if it
    /// cannot fit into this buffer which will look bad but not cause any malfunctions.
    ///
    /// Must be at least 200 bytes.
    draw_buffer: []u8 = &default_draw_buffer,
    /// How many nanoseconds between writing updates to the terminal.
    refresh_rate_ns: u64 = 80 * std.time.ns_per_ms,
    /// How many nanoseconds to keep the output hidden
    initial_delay_ns: u64 = 200 * std.time.ns_per_ms,
    /// If provided, causes the progress item to have a denominator.
    /// 0 means unknown.
    estimated_total_items: usize = 0,
    root_name: []const u8 = "",
    disable_printing: bool = false,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `draw_buffer` | `[]u8` | `&default\_draw\_buffer` | User-provided buffer with static lifetime. Used to store the entire write buffer sent to the terminal. Progress output will be truncated if it cannot fit into this buffer which will look bad but not cause any malfunctions. Must be at least 200 bytes. |
| `refresh_rate_ns` | `u64` | `80 \* std.time.ns\_per\_ms` | How many nanoseconds between writing updates to the terminal. |
| `initial_delay_ns` | `u64` | `200 \* std.time.ns\_per\_ms` | How many nanoseconds to keep the output hidden |
| `estimated_total_items` | `usize` | `0` | If provided, causes the progress item to have a denominator. 0 means unknown. |
| `root_name` | `[]const u8` | `""` | |
| `disable_printing` | `bool` | `false` | |

</details>

---

### <a id="type-node"></a>`Node`

<details class="declaration-card" open>
<summary>Container – Represents one unit of progress</summary>

Represents one unit of progress. Each node can have children nodes, or
one can use integers with `update`.

```zig
pub const Node = struct {
    index: OptionalIndex,

    pub const none: Node = .{ .index = .none };

    pub const max_name_len = 40;

    const Storage = extern struct {
        /// Little endian.
        completed_count: u32,
        /// 0 means unknown.
        /// Little endian.
        estimated_total_count: u32,
        name: [max_name_len]u8 align(@alignOf(usize)),

        /// Not thread-safe.
        fn getIpcFd(s: Storage) ?posix.fd_t {
            return if (s.estimated_total_count == std.math.maxInt(u32)) switch (@typeInfo(posix.fd_t)) {
                .int => @bitCast(s.completed_count),
                .pointer => @ptrFromInt(s.completed_count),
                else => @compileError("unsupported fd_t of " ++ @typeName(posix.fd_t)),
            } else null;
        }

        /// Thread-safe.
        fn setIpcFd(s: *Storage, fd: posix.fd_t) void {
            const integer: u32 = switch (@typeInfo(posix.fd_t)) {
                .int => @bitCast(fd),
                .pointer => @intFromPtr(fd),
                else => @compileError("unsupported fd_t of " ++ @typeName(posix.fd_t)),
            };
            // `estimated_total_count` max int indicates the special state that
            // causes `completed_count` to be treated as a file descriptor, so
            // the order here matters.
            @atomicStore(u32, &s.completed_count, integer, .monotonic);
            @atomicStore(u32, &s.estimated_total_count, std.math.maxInt(u32), .release); // synchronizes with acquire in `serialize`
        }

        /// Not thread-safe.
        fn byteSwap(s: *Storage) void {
            s.completed_count = @byteSwap(s.completed_count);
            s.estimated_total_count = @byteSwap(s.estimated_total_count);
        }

        comptime {
            assert((@sizeOf(Storage) % 4) == 0);
        }
    };

    const Parent = enum(u8) {
        /// Unallocated storage.
        unused = std.math.maxInt(u8) - 1,
        /// Indicates root node.
        none = std.math.maxInt(u8),
        /// Index into `node_storage`.
        _,

        fn unwrap(i: @This()) ?Index {
            return switch (i) {
                .unused, .none => return null,
                else => @enumFromInt(@intFromEnum(i)),
            };
        }
    };

    pub const OptionalIndex = enum(u8) {
        none = std.math.maxInt(u8),
        /// Index into `node_storage`.
        _,

        pub fn unwrap(i: @This()) ?Index {
            if (i == .none) return null;
            return @enumFromInt(@intFromEnum(i));
        }

        fn toParent(i: @This()) Parent {
            assert(@intFromEnum(i) != @intFromEnum(Parent.unused));
            return @enumFromInt(@intFromEnum(i));
        }
    };

    /// Index into `node_storage`.
    pub const Index = enum(u8) {
        _,

        fn toParent(i: @This()) Parent {
            assert(@intFromEnum(i) != @intFromEnum(Parent.unused));
            assert(@intFromEnum(i) != @intFromEnum(Parent.none));
            return @enumFromInt(@intFromEnum(i));
        }

        pub fn toOptional(i: @This()) OptionalIndex {
            return @enumFromInt(@intFromEnum(i));
        }
    };

    /// Create a new child progress node. Thread-safe.
    ///
    /// Passing 0 for `estimated_total_items` means unknown.
    pub fn start(node: Node, name: []const u8, estimated_total_items: usize) Node {
        if (noop_impl) {
            assert(node.index == .none);
            return Node.none;
        }
        const node_index = node.index.unwrap() orelse return Node.none;
        const parent = node_index.toParent();

        const freelist = &global_progress.node_freelist;
        var old_freelist = @atomicLoad(Freelist, freelist, .acquire); // acquire to ensure we have the correct "next" entry
        while (old_freelist.head.unwrap()) |free_index| {
            const next_ptr = freelistNextByIndex(free_index);
            const new_freelist: Freelist = .{
                .head = @atomicLoad(Node.OptionalIndex, next_ptr, .monotonic),
                // We don't need to increment the generation when removing nodes from the free list,
                // only when adding them. (This choice is arbitrary; the opposite would also work.)
                .generation = old_freelist.generation,
            };
            old_freelist = @cmpxchgWeak(
                Freelist,
                freelist,
                old_freelist,
                new_freelist,
                .acquire, // not theoretically necessary, but not allowed to be weaker than the failure order
                .acquire, // ensure we have the correct `node_freelist_next` entry on the next iteration
            ) orelse {
                // We won the allocation race.
                return init(free_index, parent, name, estimated_total_items);
            };
        }

        const free_index = @atomicRmw(u32, &global_progress.node_end_index, .Add, 1, .monotonic);
        if (free_index >= global_progress.node_storage.len) {
            // Ran out of node storage memory. Progress for this node will not be tracked.
            _ = @atomicRmw(u32, &global_progress.node_end_index, .Sub, 1, .monotonic);
            return Node.none;
        }

        return init(@enumFromInt(free_index), parent, name, estimated_total_items);
    }

    /// This is the same as calling `start` and then `end` on the returned `Node`. Thread-safe.
    pub fn completeOne(n: Node) void {
        const index = n.index.unwrap() orelse return;
        const storage = storageByIndex(index);
        _ = @atomicRmw(u32, &storage.completed_count, .Add, 1, .monotonic);
    }

    /// Thread-safe. Bytes after '0' in `new_name` are ignored.
    pub fn setName(n: Node, new_name: []const u8) void {
        const index = n.index.unwrap() orelse return;
        const storage = storageByIndex(index);

        const name_len = @min(max_name_len, std.mem.indexOfScalar(u8, new_name, 0) orelse new_name.len);

        copyAtomicStore(storage.name[0..name_len], new_name[0..name_len]);
        if (name_len < storage.name.len)
            @atomicStore(u8, &storage.name[name_len], 0, .monotonic);
    }

    /// Gets the name of this `Node`.
    /// A pointer to this array can later be passed to `setName` to restore the name.
    pub fn getName(n: Node) [max_name_len]u8 {
        var dest: [max_name_len]u8 align(@alignOf(usize)) = undefined;
        if (n.index.unwrap()) |index| {
            copyAtomicLoad(&dest, &storageByIndex(index).name);
        }
        return dest;
    }

    /// Thread-safe.
    pub fn setCompletedItems(n: Node, completed_items: usize) void {
        const index = n.index.unwrap() orelse return;
        const storage = storageByIndex(index);
        @atomicStore(u32, &storage.completed_count, std.math.lossyCast(u32, completed_items), .monotonic);
    }

    /// Thread-safe. 0 means unknown.
    pub fn setEstimatedTotalItems(n: Node, count: usize) void {
        const index = n.index.unwrap() orelse return;
        const storage = storageByIndex(index);
        // Avoid u32 max int which is used to indicate a special state.
        const saturated = @min(std.math.maxInt(u32) - 1, count);
        @atomicStore(u32, &storage.estimated_total_count, saturated, .monotonic);
    }

    /// Thread-safe.
    pub fn increaseEstimatedTotalItems(n: Node, count: usize) void {
        const index = n.index.unwrap() orelse return;
        const storage = storageByIndex(index);
        _ = @atomicRmw(u32, &storage.estimated_total_count, .Add, std.math.lossyCast(u32, count), .monotonic);
    }

    /// Finish a started `Node`. Thread-safe.
    pub fn end(n: Node) void {
        if (noop_impl) {
            assert(n.index == .none);
            return;
        }
        const index = n.index.unwrap() orelse return;
        const parent_ptr = parentByIndex(index);
        if (@atomicLoad(Node.Parent, parent_ptr, .monotonic).unwrap()) |parent_index| {
            _ = @atomicRmw(u32, &storageByIndex(parent_index).completed_count, .Add, 1, .monotonic);
            @atomicStore(Node.Parent, parent_ptr, .unused, .monotonic);

            const freelist = &global_progress.node_freelist;
            var old_freelist = @atomicLoad(Freelist, freelist, .monotonic);
            while (true) {
                @atomicStore(Node.OptionalIndex, freelistNextByIndex(index), old_freelist.head, .monotonic);
                old_freelist = @cmpxchgWeak(
                    Freelist,
                    freelist,
                    old_freelist,
                    .{ .head = index.toOptional(), .generation = old_freelist.generation +% 1 },
                    .release, // ensure a matching `start` sees the freelist link written above
                    .monotonic, // our write above is irrelevant if we need to retry
                ) orelse {
                    // We won the race.
                    return;
                };
            }
        } else {
            @atomicStore(bool, &global_progress.done, true, .monotonic);
            global_progress.redraw_event.set();
            if (global_progress.update_thread) |thread| thread.join();
        }
    }

    /// Posix-only. Used by `std.process.Child`. Thread-safe.
    pub fn setIpcFd(node: Node, fd: posix.fd_t) void {
        const index = node.index.unwrap() orelse return;
        assert(fd >= 0);
        assert(fd != posix.STDOUT_FILENO);
        assert(fd != posix.STDIN_FILENO);
        assert(fd != posix.STDERR_FILENO);
        storageByIndex(index).setIpcFd(fd);
    }

    /// Posix-only. Thread-safe. Assumes the node is storing an IPC file
    /// descriptor.
    pub fn getIpcFd(node: Node) ?posix.fd_t {
        const index = node.index.unwrap() orelse return null;
        const storage = storageByIndex(index);
        const int = @atomicLoad(u32, &storage.completed_count, .monotonic);
        return switch (@typeInfo(posix.fd_t)) {
            .int => @bitCast(int),
            .pointer => @ptrFromInt(int),
            else => @compileError("unsupported fd_t of " ++ @typeName(posix.fd_t)),
        };
    }

    fn storageByIndex(index: Node.Index) *Node.Storage {
        return &global_progress.node_storage[@intFromEnum(index)];
    }

    fn parentByIndex(index: Node.Index) *Node.Parent {
        return &global_progress.node_parents[@intFromEnum(index)];
    }

    fn freelistNextByIndex(index: Node.Index) *Node.OptionalIndex {
        return &global_progress.node_freelist_next[@intFromEnum(index)];
    }

    fn init(free_index: Index, parent: Parent, name: []const u8, estimated_total_items: usize) Node {
        assert(parent == .none or @intFromEnum(parent) < node_storage_buffer_len);

        const storage = storageByIndex(free_index);
        @atomicStore(u32, &storage.completed_count, 0, .monotonic);
        @atomicStore(u32, &storage.estimated_total_count, std.math.lossyCast(u32, estimated_total_items), .monotonic);
        const name_len = @min(max_name_len, name.len);
        copyAtomicStore(storage.name[0..name_len], name[0..name_len]);
        if (name_len < storage.name.len)
            @atomicStore(u8, &storage.name[name_len], 0, .monotonic);

        const parent_ptr = parentByIndex(free_index);
        if (std.debug.runtime_safety) {
            assert(@atomicLoad(Node.Parent, parent_ptr, .monotonic) == .unused);
        }
        @atomicStore(Node.Parent, parent_ptr, parent, .monotonic);

        return .{ .index = free_index.toOptional() };
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `index` | `OptionalIndex` | – | |

</details>

---

## Constants (2)

### <a id="const-terminalmode"></a>`TerminalMode`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const TerminalMode = union(enum) {
    off,
    ansi_escape_codes,
    /// This is not the same as being run on windows because other terminals
    /// exist like MSYS/git-bash.
    windows_api: if (is_windows) WindowsApi else void,

    pub const WindowsApi = struct {
        /// The output code page of the console.
        code_page: windows.UINT,
    };
}
```

</details>

---

### <a id="const-have-ipc"></a>`have_ipc`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const have_ipc = switch (builtin.os.tag) {
    .wasi, .freestanding, .windows => false,
    else => true,
}
```

</details>

---

## Functions (6)

### <a id="fn-start"></a>`start`

<details class="declaration-card" open>
<summary>Function – Initializes a global Progress instance</summary>

Initializes a global Progress instance.

Asserts there is only one global Progress instance.

Call `Node.end` when done.

```zig
pub fn start(options: Options) Node {
    // Ensure there is only 1 global Progress object.
    if (global_progress.node_end_index != 0) {
        debug_start_trace.dump();
        unreachable;
    }
    debug_start_trace.add("first initialized here");

    @memset(global_progress.node_parents, .unused);
    const root_node = Node.init(@enumFromInt(0), .none, options.root_name, options.estimated_total_items);
    global_progress.done = false;
    global_progress.node_end_index = 1;

    assert(options.draw_buffer.len >= 200);
    global_progress.draw_buffer = options.draw_buffer;
    global_progress.refresh_rate_ns = options.refresh_rate_ns;
    global_progress.initial_delay_ns = options.initial_delay_ns;

    if (noop_impl)
        return Node.none;

    if (std.process.parseEnvVarInt("ZIG_PROGRESS", u31, 10)) |ipc_fd| {
        global_progress.update_thread = std.Thread.spawn(.{}, ipcThreadRun, .{
            @as(posix.fd_t, switch (@typeInfo(posix.fd_t)) {
                .int => ipc_fd,
                .pointer => @ptrFromInt(ipc_fd),
                else => @compileError("unsupported fd_t of " ++ @typeName(posix.fd_t)),
            }),
        }) catch |err| {
            std.log.warn("failed to spawn IPC thread for communicating progress to parent: {s}", .{@errorName(err)});
            return Node.none;
        };
    } else |env_err| switch (env_err) {
        error.EnvironmentVariableNotFound => {
            if (options.disable_printing) {
                return Node.none;
            }
            const stderr: std.fs.File = .stderr();
            global_progress.terminal = stderr;
            if (stderr.getOrEnableAnsiEscapeSupport()) {
                global_progress.terminal_mode = .ansi_escape_codes;
            } else if (is_windows and stderr.isTty()) {
                global_progress.terminal_mode = TerminalMode{ .windows_api = .{
                    .code_page = windows.kernel32.GetConsoleOutputCP(),
                } };
            }

            if (global_progress.terminal_mode == .off) {
                return Node.none;
            }

            if (have_sigwinch) {
                const act: posix.Sigaction = .{
                    .handler = .{ .sigaction = handleSigWinch },
                    .mask = posix.sigemptyset(),
                    .flags = (posix.SA.SIGINFO | posix.SA.RESTART),
                };
                posix.sigaction(posix.SIG.WINCH, &act, null);
            }

            if (switch (global_progress.terminal_mode) {
                .off => unreachable, // handled a few lines above
                .ansi_escape_codes => std.Thread.spawn(.{}, updateThreadRun, .{}),
                .windows_api => if (is_windows) std.Thread.spawn(.{}, windowsApiUpdateThreadRun, .{}) else unreachable,
            }) |thread| {
                global_progress.update_thread = thread;
            } else |err| {
                std.log.warn("unable to spawn thread for printing progress to terminal: {s}", .{@errorName(err)});
                return Node.none;
            }
        },
        else => |e| {
            std.log.warn("invalid ZIG_PROGRESS file descriptor integer: {s}", .{@errorName(e)});
            return Node.none;
        },
    }

    return root_node;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `options` | [`Options`](#type-options) | – | – |
| Return | [`Node`](#type-node) | – | – |

</details>

---

### <a id="fn-setstatus"></a>`setStatus`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setStatus(new_status: Status) void {
    if (noop_impl) return;
    @atomicStore(Status, &global_progress.status, new_status, .monotonic);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `new\_status` | [`Status`](#type-status) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-lockstderr"></a>`lockStdErr`

<details class="declaration-card" open>
<summary>Function – Allows the caller to freely write to stderr until `unlockStdErr` is called</summary>

Allows the caller to freely write to stderr until `unlockStdErr` is called.

During the lock, any `std.Progress` information is cleared from the terminal.

The lock is recursive; the same thread may hold the lock multiple times.

```zig
pub fn lockStdErr() void {
    stderr_mutex.lock();
    clearWrittenWithEscapeCodes() catch {};
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-unlockstderr"></a>`unlockStdErr`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn unlockStdErr() void {
    stderr_mutex.unlock();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-lockstderrwriter"></a>`lockStderrWriter`

<details class="declaration-card" open>
<summary>Function – Allows the caller to freely write to the returned `Writer`,</summary>

Allows the caller to freely write to the returned `Writer`,
initialized with `buffer`, until `unlockStderrWriter` is called.

During the lock, any `std.Progress` information is cleared from the terminal.

The lock is recursive; the same thread may hold the lock multiple times.

```zig
pub fn lockStderrWriter(buffer: []u8) *Writer {
    stderr_mutex.lock();
    clearWrittenWithEscapeCodes() catch {};
    if (is_windows) stderr_file_writer.file = .stderr();
    stderr_writer.flush() catch {};
    stderr_writer.buffer = buffer;
    return stderr_writer;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buffer` | `[]u8` | – | – |
| Return | `*Writer` | – | – |

</details>

---

### <a id="fn-unlockstderrwriter"></a>`unlockStderrWriter`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn unlockStderrWriter() void {
    stderr_writer.flush() catch {};
    stderr_writer.end = 0;
    stderr_writer.buffer = &.{};
    stderr_mutex.unlock();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---


