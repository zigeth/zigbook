---
title: "std.Thread"
description: "Comprehensive reference for Zig's std.Thread module covering low-level systems primitives and metaprogramming utilities."
navigation:
  title: "Thread"
  icon: i-lucide-cpu
  badge: "Systems"
badge: "Systems"
category: "systems"
tags:
  - "zig"
  - "standard-library"
  - "systems"
source: "std/Thread.md"
githubPath: "std/Thread.md"
lastUpdated: "2025-10-11T02:43:50.338Z"
seo:
  title: "std.Thread · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.Thread module covering low-level systems primitives and metaprogramming utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/Thread.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.Thread` |
| Declarations | 28 |
| Breakdown | 10 functions · 1 type · 4 constants · 5 error sets · 8 modules |
| Generated (unix epoch) | 1760148100 |

## Overview

This struct represents a kernel thread, and acts as a namespace for concurrency
primitives that operate on kernel threads. For concurrency primitives that support
both evented I/O and async I/O, see the respective names in the top level std namespace.

---

## Table of Contents

- [Functions](#functions)
  - [`sleep`](#fn-sleep)
  - [`setName`](#fn-setname)
  - [`getName`](#fn-getname)
  - [`getCurrentId`](#fn-getcurrentid)
  - [`getCpuCount`](#fn-getcpucount)
  - [`spawn`](#fn-spawn)
  - [`getHandle`](#fn-gethandle)
  - [`detach`](#fn-detach)
  - [`join`](#fn-join)
  - [`yield`](#fn-yield)

- [Types](#types)
  - [`SpawnConfig`](#type-spawnconfig)

- [Modules](#modules)
  - [`Futex`](#module-futex)
  - [`ResetEvent`](#module-resetevent)
  - [`Mutex`](#module-mutex)
  - [`Semaphore`](#module-semaphore)
  - [`Condition`](#module-condition)
  - [`RwLock`](#module-rwlock)
  - [`Pool`](#module-pool)
  - [`WaitGroup`](#module-waitgroup)

- [Constants](#constants)
  - [`use\_pthreads`](#const-use-pthreads)
  - [`max\_name\_len`](#const-max-name-len)
  - [`Id`](#const-id)
  - [`Handle`](#const-handle)

- [Error Sets](#error-sets)
  - [`SetNameError`](#error-setnameerror)
  - [`GetNameError`](#error-getnameerror)
  - [`CpuCountError`](#error-cpucounterror)
  - [`SpawnError`](#error-spawnerror)
  - [`YieldError`](#error-yielderror)

---

## Types (1)

### <a id="type-spawnconfig"></a>`SpawnConfig`

<details class="declaration-card" open>
<summary>Container – Configuration options for hints on how to spawn threads</summary>

Configuration options for hints on how to spawn threads.

```zig
pub const SpawnConfig = struct {
    // TODO compile-time call graph analysis to determine stack upper bound
    // https://github.com/ziglang/zig/issues/157

    /// Size in bytes of the Thread's stack
    stack_size: usize = default_stack_size,
    /// The allocator to be used to allocate memory for the to-be-spawned thread
    allocator: ?std.mem.Allocator = null,

    pub const default_stack_size = 16 * 1024 * 1024;
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `stack_size` | `usize` | `default\_stack\_size` | Size in bytes of the Thread's stack |
| `allocator` | `?std.mem.Allocator` | `null` | The allocator to be used to allocate memory for the to-be-spawned thread |

</details>

---

## Modules (8)

### <a id="module-futex"></a>`Futex`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Futex = @import("Thread/Futex.zig")
```

> **Module:** `Thread/Futex.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Thread/Futex.zig)

</details>

---

### <a id="module-resetevent"></a>`ResetEvent`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const ResetEvent = @import("Thread/ResetEvent.zig")
```

> **Module:** `Thread/ResetEvent.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Thread/ResetEvent.zig)

</details>

---

### <a id="module-mutex"></a>`Mutex`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Mutex = @import("Thread/Mutex.zig")
```

> **Module:** `Thread/Mutex.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Thread/Mutex.zig)

</details>

---

### <a id="module-semaphore"></a>`Semaphore`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Semaphore = @import("Thread/Semaphore.zig")
```

> **Module:** `Thread/Semaphore.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Thread/Semaphore.zig)

</details>

---

### <a id="module-condition"></a>`Condition`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Condition = @import("Thread/Condition.zig")
```

> **Module:** `Thread/Condition.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Thread/Condition.zig)

</details>

---

### <a id="module-rwlock"></a>`RwLock`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const RwLock = @import("Thread/RwLock.zig")
```

> **Module:** `Thread/RwLock.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Thread/RwLock.zig)

</details>

---

### <a id="module-pool"></a>`Pool`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Pool = @import("Thread/Pool.zig")
```

> **Module:** `Thread/Pool.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Thread/Pool.zig)

</details>

---

### <a id="module-waitgroup"></a>`WaitGroup`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const WaitGroup = @import("Thread/WaitGroup.zig")
```

> **Module:** `Thread/WaitGroup.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Thread/WaitGroup.zig)

</details>

---

## Constants (4)

### <a id="const-use-pthreads"></a>`use_pthreads`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const use_pthreads = native_os != .windows and native_os != .wasi and builtin.link_libc
```

</details>

---

### <a id="const-max-name-len"></a>`max_name_len`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const max_name_len = switch (native_os) {
    .linux => 15,
    .windows => 31,
    .macos, .ios, .watchos, .tvos, .visionos => 63,
    .netbsd => 31,
    .freebsd => 15,
    .openbsd => 23,
    .dragonfly => 1023,
    .solaris, .illumos => 31,
    // https://github.com/SerenityOS/serenity/blob/6b4c300353da49d3508b5442cf61da70bd04d757/Kernel/Tasks/Thread.h#L102
    .serenity => 63,
    else => 0,
}
```

</details>

---

### <a id="const-id"></a>`Id`

<details class="declaration-card" open>
<summary>Constant – Represents an ID per thread guaranteed to be unique only within a process</summary>

Represents an ID per thread guaranteed to be unique only within a process.

```zig
pub const Id = switch (native_os) {
    .linux,
    .dragonfly,
    .netbsd,
    .freebsd,
    .openbsd,
    .haiku,
    .wasi,
    .serenity,
    => u32,
    .macos, .ios, .watchos, .tvos, .visionos => u64,
    .windows => windows.DWORD,
    else => usize,
}
```

</details>

---

### <a id="const-handle"></a>`Handle`

<details class="declaration-card" open>
<summary>Constant – Represents a kernel thread handle</summary>

Represents a kernel thread handle.
May be an integer or a pointer depending on the platform.

```zig
pub const Handle = Impl.ThreadHandle
```

</details>

---

## Functions (10)

### <a id="fn-sleep"></a>`sleep`

<details class="declaration-card" open>
<summary>Function – Spurious wakeups are possible and no precision of timing is guaranteed</summary>

Spurious wakeups are possible and no precision of timing is guaranteed.

```zig
pub fn sleep(nanoseconds: u64) void {
    if (builtin.os.tag == .windows) {
        const big_ms_from_ns = nanoseconds / std.time.ns_per_ms;
        const ms = math.cast(windows.DWORD, big_ms_from_ns) orelse math.maxInt(windows.DWORD);
        windows.kernel32.Sleep(ms);
        return;
    }

    if (builtin.os.tag == .wasi) {
        const w = std.os.wasi;
        const userdata: w.userdata_t = 0x0123_45678;
        const clock: w.subscription_clock_t = .{
            .id = .MONOTONIC,
            .timeout = nanoseconds,
            .precision = 0,
            .flags = 0,
        };
        const in: w.subscription_t = .{
            .userdata = userdata,
            .u = .{
                .tag = .CLOCK,
                .u = .{ .clock = clock },
            },
        };

        var event: w.event_t = undefined;
        var nevents: usize = undefined;
        _ = w.poll_oneoff(&in, &event, 1, &nevents);
        return;
    }

    if (builtin.os.tag == .uefi) {
        const boot_services = std.os.uefi.system_table.boot_services.?;
        const us_from_ns = nanoseconds / std.time.ns_per_us;
        const us = math.cast(usize, us_from_ns) orelse math.maxInt(usize);
        boot_services.stall(us) catch unreachable;
        return;
    }

    const s = nanoseconds / std.time.ns_per_s;
    const ns = nanoseconds % std.time.ns_per_s;

    // Newer kernel ports don't have old `nanosleep()` and `clock_nanosleep()` has been around
    // since Linux 2.6 and glibc 2.1 anyway.
    if (builtin.os.tag == .linux) {
        const linux = std.os.linux;

        var req: linux.timespec = .{
            .sec = std.math.cast(linux.time_t, s) orelse std.math.maxInt(linux.time_t),
            .nsec = std.math.cast(linux.time_t, ns) orelse std.math.maxInt(linux.time_t),
        };
        var rem: linux.timespec = undefined;

        while (true) {
            switch (linux.E.init(linux.clock_nanosleep(.MONOTONIC, .{ .ABSTIME = false }, &req, &rem))) {
                .SUCCESS => return,
                .INTR => {
                    req = rem;
                    continue;
                },
                .FAULT,
                .INVAL,
                .OPNOTSUPP,
                => unreachable,
                else => return,
            }
        }
    }

    posix.nanosleep(s, ns);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `nanoseconds` | `u64` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-setname"></a>`setName`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setName(self: Thread, name: []const u8) SetNameError!void {
    if (name.len > max_name_len) return error.NameTooLong;

    const name_with_terminator = blk: {
        var name_buf: [max_name_len:0]u8 = undefined;
        @memcpy(name_buf[0..name.len], name);
        name_buf[name.len] = 0;
        break :blk name_buf[0..name.len :0];
    };

    switch (native_os) {
        .linux => if (use_pthreads) {
            if (self.getHandle() == std.c.pthread_self()) {
                // Set the name of the calling thread (no thread id required).
                const err = try posix.prctl(.SET_NAME, .{@intFromPtr(name_with_terminator.ptr)});
                switch (@as(posix.E, @enumFromInt(err))) {
                    .SUCCESS => return,
                    else => |e| return posix.unexpectedErrno(e),
                }
            } else {
                const err = std.c.pthread_setname_np(self.getHandle(), name_with_terminator.ptr);
                switch (@as(posix.E, @enumFromInt(err))) {
                    .SUCCESS => return,
                    .RANGE => unreachable,
                    else => |e| return posix.unexpectedErrno(e),
                }
            }
        } else {
            var buf: [32]u8 = undefined;
            const path = try std.fmt.bufPrint(&buf, "/proc/self/task/{d}/comm", .{self.getHandle()});

            const file = try std.fs.cwd().openFile(path, .{ .mode = .write_only });
            defer file.close();

            try file.deprecatedWriter().writeAll(name);
            return;
        },
        .windows => {
            var buf: [max_name_len]u16 = undefined;
            const len = try std.unicode.wtf8ToWtf16Le(&buf, name);
            const byte_len = math.cast(c_ushort, len * 2) orelse return error.NameTooLong;

            // Note: NT allocates its own copy, no use-after-free here.
            const unicode_string = windows.UNICODE_STRING{
                .Length = byte_len,
                .MaximumLength = byte_len,
                .Buffer = &buf,
            };

            switch (windows.ntdll.NtSetInformationThread(
                self.getHandle(),
                .ThreadNameInformation,
                &unicode_string,
                @sizeOf(windows.UNICODE_STRING),
            )) {
                .SUCCESS => return,
                .NOT_IMPLEMENTED => return error.Unsupported,
                else => |err| return windows.unexpectedStatus(err),
            }
        },
        .macos, .ios, .watchos, .tvos, .visionos => if (use_pthreads) {
            // There doesn't seem to be a way to set the name for an arbitrary thread, only the current one.
            if (self.getHandle() != std.c.pthread_self()) return error.Unsupported;

            const err = std.c.pthread_setname_np(name_with_terminator.ptr);
            switch (@as(posix.E, @enumFromInt(err))) {
                .SUCCESS => return,
                else => |e| return posix.unexpectedErrno(e),
            }
        },
        .serenity => if (use_pthreads) {
            const err = std.c.pthread_setname_np(self.getHandle(), name_with_terminator.ptr);
            switch (@as(posix.E, @enumFromInt(err))) {
                .SUCCESS => return,
                .NAMETOOLONG => unreachable,
                .SRCH => unreachable,
                else => |e| return posix.unexpectedErrno(e),
            }
        },
        .netbsd, .solaris, .illumos => if (use_pthreads) {
            const err = std.c.pthread_setname_np(self.getHandle(), name_with_terminator.ptr, null);
            switch (@as(posix.E, @enumFromInt(err))) {
                .SUCCESS => return,
                .INVAL => unreachable,
                .SRCH => unreachable,
                .NOMEM => unreachable,
                else => |e| return posix.unexpectedErrno(e),
            }
        },
        .freebsd, .openbsd => if (use_pthreads) {
            // Use pthread_set_name_np for FreeBSD because pthread_setname_np is FreeBSD 12.2+ only.
            // TODO maybe revisit this if depending on FreeBSD 12.2+ is acceptable because
            // pthread_setname_np can return an error.

            std.c.pthread_set_name_np(self.getHandle(), name_with_terminator.ptr);
            return;
        },
        .dragonfly => if (use_pthreads) {
            const err = std.c.pthread_setname_np(self.getHandle(), name_with_terminator.ptr);
            switch (@as(posix.E, @enumFromInt(err))) {
                .SUCCESS => return,
                .INVAL => unreachable,
                .FAULT => unreachable,
                .NAMETOOLONG => unreachable, // already checked
                .SRCH => unreachable,
                else => |e| return posix.unexpectedErrno(e),
            }
        },
        else => {},
    }
    return error.Unsupported;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `Thread` | – | – |
| `name` | `[]const u8` | – | – |
| Return | [`SetNameError!void`](#error-setnameerror) | – | – |

</details>

---

### <a id="fn-getname"></a>`getName`

<details class="declaration-card" open>
<summary>Function – On Windows, the result is encoded as [WTF-8](https://simonsapin</summary>

On Windows, the result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On other platforms, the result is an opaque sequence of bytes with no particular encoding.

```zig
pub fn getName(self: Thread, buffer_ptr: *[max_name_len:0]u8) GetNameError!?[]const u8 {
    buffer_ptr[max_name_len] = 0;
    var buffer: [:0]u8 = buffer_ptr;

    switch (native_os) {
        .linux => if (use_pthreads) {
            if (self.getHandle() == std.c.pthread_self()) {
                // Get the name of the calling thread (no thread id required).
                const err = try posix.prctl(.GET_NAME, .{@intFromPtr(buffer.ptr)});
                switch (@as(posix.E, @enumFromInt(err))) {
                    .SUCCESS => return std.mem.sliceTo(buffer, 0),
                    else => |e| return posix.unexpectedErrno(e),
                }
            } else {
                const err = std.c.pthread_getname_np(self.getHandle(), buffer.ptr, max_name_len + 1);
                switch (@as(posix.E, @enumFromInt(err))) {
                    .SUCCESS => return std.mem.sliceTo(buffer, 0),
                    .RANGE => unreachable,
                    else => |e| return posix.unexpectedErrno(e),
                }
            }
        } else {
            var buf: [32]u8 = undefined;
            const path = try std.fmt.bufPrint(&buf, "/proc/self/task/{d}/comm", .{self.getHandle()});

            const file = try std.fs.cwd().openFile(path, .{});
            defer file.close();

            const data_len = try file.deprecatedReader().readAll(buffer_ptr[0 .. max_name_len + 1]);

            return if (data_len >= 1) buffer[0 .. data_len - 1] else null;
        },
        .windows => {
            const buf_capacity = @sizeOf(windows.UNICODE_STRING) + (@sizeOf(u16) * max_name_len);
            var buf: [buf_capacity]u8 align(@alignOf(windows.UNICODE_STRING)) = undefined;

            switch (windows.ntdll.NtQueryInformationThread(
                self.getHandle(),
                .ThreadNameInformation,
                &buf,
                buf_capacity,
                null,
            )) {
                .SUCCESS => {
                    const string = @as(*const windows.UNICODE_STRING, @ptrCast(&buf));
                    const len = std.unicode.wtf16LeToWtf8(buffer, string.Buffer.?[0 .. string.Length / 2]);
                    return if (len > 0) buffer[0..len] else null;
                },
                .NOT_IMPLEMENTED => return error.Unsupported,
                else => |err| return windows.unexpectedStatus(err),
            }
        },
        .macos, .ios, .watchos, .tvos, .visionos => if (use_pthreads) {
            const err = std.c.pthread_getname_np(self.getHandle(), buffer.ptr, max_name_len + 1);
            switch (@as(posix.E, @enumFromInt(err))) {
                .SUCCESS => return std.mem.sliceTo(buffer, 0),
                .SRCH => unreachable,
                else => |e| return posix.unexpectedErrno(e),
            }
        },
        .serenity => if (use_pthreads) {
            const err = std.c.pthread_getname_np(self.getHandle(), buffer.ptr, max_name_len + 1);
            switch (@as(posix.E, @enumFromInt(err))) {
                .SUCCESS => return,
                .NAMETOOLONG => unreachable,
                .SRCH => unreachable,
                .FAULT => unreachable,
                else => |e| return posix.unexpectedErrno(e),
            }
        },
        .netbsd, .solaris, .illumos => if (use_pthreads) {
            const err = std.c.pthread_getname_np(self.getHandle(), buffer.ptr, max_name_len + 1);
            switch (@as(posix.E, @enumFromInt(err))) {
                .SUCCESS => return std.mem.sliceTo(buffer, 0),
                .INVAL => unreachable,
                .SRCH => unreachable,
                else => |e| return posix.unexpectedErrno(e),
            }
        },
        .freebsd, .openbsd => if (use_pthreads) {
            // Use pthread_get_name_np for FreeBSD because pthread_getname_np is FreeBSD 12.2+ only.
            // TODO maybe revisit this if depending on FreeBSD 12.2+ is acceptable because pthread_getname_np can return an error.

            std.c.pthread_get_name_np(self.getHandle(), buffer.ptr, max_name_len + 1);
            return std.mem.sliceTo(buffer, 0);
        },
        .dragonfly => if (use_pthreads) {
            const err = std.c.pthread_getname_np(self.getHandle(), buffer.ptr, max_name_len + 1);
            switch (@as(posix.E, @enumFromInt(err))) {
                .SUCCESS => return std.mem.sliceTo(buffer, 0),
                .INVAL => unreachable,
                .FAULT => unreachable,
                .SRCH => unreachable,
                else => |e| return posix.unexpectedErrno(e),
            }
        },
        else => {},
    }
    return error.Unsupported;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `Thread` | – | – |
| `buffer\_ptr` | `*[max_name_len:0]u8` | – | – |
| Return | [`GetNameError!?[]const u8`](#error-getnameerror) | – | – |

</details>

---

### <a id="fn-getcurrentid"></a>`getCurrentId`

<details class="declaration-card" open>
<summary>Function – Returns the platform ID of the callers thread</summary>

Returns the platform ID of the callers thread.
Attempts to use thread locals and avoid syscalls when possible.

```zig
pub fn getCurrentId() Id {
    return Impl.getCurrentId();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | [`Id`](#const-id) | – | – |

</details>

---

### <a id="fn-getcpucount"></a>`getCpuCount`

<details class="declaration-card" open>
<summary>Function – Returns the platforms view on the number of logical CPU cores available</summary>

Returns the platforms view on the number of logical CPU cores available.

```zig
pub fn getCpuCount() CpuCountError!usize {
    return try Impl.getCpuCount();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | [`CpuCountError!usize`](#error-cpucounterror) | – | – |

</details>

---

### <a id="fn-spawn"></a>`spawn`

<details class="declaration-card" open>
<summary>Function – Spawns a new thread which executes `function` using `args` and returns a handle to the spawned thread</summary>

Spawns a new thread which executes `function` using `args` and returns a handle to the spawned thread.
`config` can be used as hints to the platform for how to spawn and execute the `function`.
The caller must eventually either call `join()` to wait for the thread to finish and free its resources
or call `detach()` to excuse the caller from calling `join()` and have the thread clean up its resources on completion.

```zig
pub fn spawn(config: SpawnConfig, comptime function: anytype, args: anytype) SpawnError!Thread {
    if (builtin.single_threaded) {
        @compileError("Cannot spawn thread when building in single-threaded mode");
    }

    const impl = try Impl.spawn(config, function, args);
    return Thread{ .impl = impl };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `config` | [`SpawnConfig`](#type-spawnconfig) | – | – |
| `function` | `` | – | – |
| `args` | `` | – | – |
| Return | [`SpawnError!Thread`](#error-spawnerror) | – | – |

</details>

---

### <a id="fn-gethandle"></a>`getHandle`

<details class="declaration-card" open>
<summary>Function – Returns the handle of this thread</summary>

Returns the handle of this thread

```zig
pub fn getHandle(self: Thread) Handle {
    return self.impl.getHandle();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `Thread` | – | – |
| Return | [`Handle`](#const-handle) | – | – |

</details>

---

### <a id="fn-detach"></a>`detach`

<details class="declaration-card" open>
<summary>Function – Release the obligation of the caller to call `join()` and have the thread clean up its own resources on completion</summary>

Release the obligation of the caller to call `join()` and have the thread clean up its own resources on completion.
Once called, this consumes the Thread object and invoking any other functions on it is considered undefined behavior.

```zig
pub fn detach(self: Thread) void {
    return self.impl.detach();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `Thread` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-join"></a>`join`

<details class="declaration-card" open>
<summary>Function – Waits for the thread to complete, then deallocates any resources created on `spawn()`</summary>

Waits for the thread to complete, then deallocates any resources created on `spawn()`.
Once called, this consumes the Thread object and invoking any other functions on it is considered undefined behavior.

```zig
pub fn join(self: Thread) void {
    return self.impl.join();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `self` | `Thread` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-yield"></a>`yield`

<details class="declaration-card" open>
<summary>Function – Yields the current thread potentially allowing other threads to run</summary>

Yields the current thread potentially allowing other threads to run.

```zig
pub fn yield() YieldError!void {
    if (native_os == .windows) {
        // The return value has to do with how many other threads there are; it is not
        // an error condition on Windows.
        _ = windows.kernel32.SwitchToThread();
        return;
    }
    switch (posix.errno(posix.system.sched_yield())) {
        .SUCCESS => return,
        .NOSYS => return error.SystemCannotYield,
        else => return error.SystemCannotYield,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | [`YieldError!void`](#error-yielderror) | – | – |

</details>

---

## Error Sets (5)

### <a id="error-setnameerror"></a>`SetNameError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SetNameError = error{
    NameTooLong,
    Unsupported,
    Unexpected,
} || posix.PrctlError || posix.WriteError || std.fs.File.OpenError || std.fmt.BufPrintError
```

**Errors:**

- `error.NameTooLong`
- `error.Unsupported`
- `error.Unexpected`

</details>

---

### <a id="error-getnameerror"></a>`GetNameError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const GetNameError = error{
    Unsupported,
    Unexpected,
} || posix.PrctlError || posix.ReadError || std.fs.File.OpenError || std.fmt.BufPrintError
```

**Errors:**

- `error.Unsupported`
- `error.Unexpected`

</details>

---

### <a id="error-cpucounterror"></a>`CpuCountError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const CpuCountError = error{
    PermissionDenied,
    SystemResources,
    Unsupported,
    Unexpected,
}
```

**Errors:**

- `error.PermissionDenied`
- `error.SystemResources`
- `error.Unsupported`
- `error.Unexpected`

</details>

---

### <a id="error-spawnerror"></a>`SpawnError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SpawnError = error{
    /// A system-imposed limit on the number of threads was encountered.
    /// There are a number of limits that may trigger this error:
    /// *  the  RLIMIT_NPROC soft resource limit (set via setrlimit(2)),
    ///    which limits the number of processes and threads for  a  real
    ///    user ID, was reached;
    /// *  the kernel's system-wide limit on the number of processes and
    ///    threads,  /proc/sys/kernel/threads-max,  was   reached   (see
    ///    proc(5));
    /// *  the  maximum  number  of  PIDs, /proc/sys/kernel/pid_max, was
    ///    reached (see proc(5)); or
    /// *  the PID limit (pids.max) imposed by the cgroup "process  num‐
    ///    ber" (PIDs) controller was reached.
    ThreadQuotaExceeded,

    /// The kernel cannot allocate sufficient memory to allocate a task structure
    /// for the child, or to copy those parts of the caller's context that need to
    /// be copied.
    SystemResources,

    /// Not enough userland memory to spawn the thread.
    OutOfMemory,

    /// `mlockall` is enabled, and the memory needed to spawn the thread
    /// would exceed the limit.
    LockedMemoryLimitExceeded,

    Unexpected,
}
```

**Errors:**

- `error.ThreadQuotaExceeded` - A system-imposed limit on the number of threads was encountered. There are a number of limits that may trigger this error: \*  the  RLIMIT\_NPROC soft resource limit (set via setrlimit(2)), which limits the number of processes and threads for  a  real user ID, was reached; \*  the kernel's system-wide limit on the number of processes and threads,  /proc/sys/kernel/threads-max,  was   reached   (see proc(5)); \*  the  maximum  number  of  PIDs, /proc/sys/kernel/pid\_max, was reached (see proc(5)); or \*  the PID limit (pids.max) imposed by the cgroup "process  num‐ ber" (PIDs) controller was reached.
- `error.SystemResources` - The kernel cannot allocate sufficient memory to allocate a task structure for the child, or to copy those parts of the caller's context that need to be copied.
- `error.OutOfMemory` - Not enough userland memory to spawn the thread.
- `error.LockedMemoryLimitExceeded` - \`mlockall\` is enabled, and the memory needed to spawn the thread would exceed the limit.
- `error.Unexpected`

</details>

---

### <a id="error-yielderror"></a>`YieldError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const YieldError = error{
    /// The system is not configured to allow yielding
    SystemCannotYield,
}
```

**Errors:**

- `error.SystemCannotYield` - The system is not configured to allow yielding

</details>

---


