---
title: "std.os"
description: "Comprehensive reference for Zig's std.os module covering operating system, filesystem, and runtime services."
navigation:
  title: "Os"
  icon: i-lucide-server-cog
  badge: "Platform"
badge: "Platform"
category: "platform"
tags:
  - "zig"
  - "standard-library"
  - "platform"
source: "std/os.md"
githubPath: "std/os.md"
lastUpdated: "2025-10-11T02:43:50.347Z"
seo:
  title: "std.os · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.os module covering operating system, filesystem, and runtime services."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/os.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.os` |
| Declarations | 14 |
| Breakdown | 5 functions · 7 modules · 2 global variables |
| Generated (unix epoch) | 1760148108 |

## Overview

This file contains thin wrappers around OS-specific APIs, with these
specific goals in mind:
* Convert "errno"-style error codes into Zig errors.
* When null-terminated byte buffers are required, provide APIs which accept
  slices as well as APIs which accept null-terminated byte buffers. Same goes
  for WTF-16LE encoding.
* Where operating systems share APIs, e.g. POSIX, these thin wrappers provide
  cross platform abstracting.
* When there exists a corresponding libc function and linking libc, the libc
  implementation is used. Exceptions are made for known buggy areas of libc.
  On Linux libc can be side-stepped by using `std.os.linux` directly.
* For Windows, this file represents the API that libc would provide for
  Windows. For thin wrappers around Windows-specific APIs, see `std.os.windows`.

---

## Table of Contents

- [Functions](#functions)
  - [`accessW`](#fn-accessw)
  - [`isGetFdPathSupportedOnTarget`](#fn-isgetfdpathsupportedontarget)
  - [`getFdPath`](#fn-getfdpath)
  - [`fstatat\_wasi`](#fn-fstatat-wasi)
  - [`fstat\_wasi`](#fn-fstat-wasi)

- [Modules](#modules)
  - [`linux`](#module-linux)
  - [`plan9`](#module-plan9)
  - [`uefi`](#module-uefi)
  - [`wasi`](#module-wasi)
  - [`emscripten`](#module-emscripten)
  - [`windows`](#module-windows)
  - [`freebsd`](#module-freebsd)

- [Global Variables](#global-variables)
  - [`environ`](#var-environ)
  - [`argv`](#var-argv)

---

## Modules (7)

### <a id="module-linux"></a>`linux`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const linux = @import("os/linux.zig")
\`\`\`

> **Module:** `os/linux.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/os/linux.zig)

</details>

---

### <a id="module-plan9"></a>`plan9`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const plan9 = @import("os/plan9.zig")
\`\`\`

> **Module:** `os/plan9.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/os/plan9.zig)

</details>

---

### <a id="module-uefi"></a>`uefi`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const uefi = @import("os/uefi.zig")
\`\`\`

> **Module:** `os/uefi.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/os/uefi.zig)

</details>

---

### <a id="module-wasi"></a>`wasi`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const wasi = @import("os/wasi.zig")
\`\`\`

> **Module:** `os/wasi.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/os/wasi.zig)

</details>

---

### <a id="module-emscripten"></a>`emscripten`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const emscripten = @import("os/emscripten.zig")
\`\`\`

> **Module:** `os/emscripten.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/os/emscripten.zig)

</details>

---

### <a id="module-windows"></a>`windows`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const windows = @import("os/windows.zig")
\`\`\`

> **Module:** `os/windows.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/os/windows.zig)

</details>

---

### <a id="module-freebsd"></a>`freebsd`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const freebsd = @import("os/freebsd.zig")
\`\`\`

> **Module:** `os/freebsd.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/os/freebsd.zig)

</details>

---

## Global Variables (2)

### <a id="var-environ"></a>`environ`

<details class="declaration-card" open>
<summary>Variable – See also `getenv`</summary>

See also `getenv`. Populated by startup code before main().
TODO this is a footgun because the value will be undefined when using `zig build-lib`.
https://github.com/ziglang/zig/issues/4524

\`\`\`zig
pub var environ: [][*:0]u8 = undefined
\`\`\`

</details>

---

### <a id="var-argv"></a>`argv`

<details class="declaration-card" open>
<summary>Variable – Populated by startup code before main()</summary>

Populated by startup code before main().
Not available on WASI or Windows without libc. See `std.process.argsAlloc`
or `std.process.argsWithAllocator` for a cross-platform alternative.

\`\`\`zig
pub var argv: [][*:0]u8 = if (builtin.link_libc) undefined else switch (native_os) {
    .windows => @compileError("argv isn't supported on Windows: use std.process.argsAlloc instead"),
    .wasi => @compileError("argv isn't supported on WASI: use std.process.argsAlloc instead"),
    else => undefined,
}
\`\`\`

</details>

---

## Functions (5)

### <a id="fn-accessw"></a>`accessW`

<details class="declaration-card" open>
<summary>Function – Call from Windows-specific code if you already have a WTF-16LE encoded, null terminated string</summary>

Call from Windows-specific code if you already have a WTF-16LE encoded, null terminated string.
Otherwise use `access` or `accessZ`.

\`\`\`zig
pub fn accessW(path: [*:0]const u16) windows.GetFileAttributesError!void {
    const ret = try windows.GetFileAttributesW(path);
    if (ret != windows.INVALID_FILE_ATTRIBUTES) {
        return;
    }
    switch (windows.GetLastError()) {
        .FILE_NOT_FOUND => return error.FileNotFound,
        .PATH_NOT_FOUND => return error.FileNotFound,
        .ACCESS_DENIED => return error.AccessDenied,
        else => |err| return windows.unexpectedError(err),
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u16` | – | – |
| Return | `windows.GetFileAttributesError!void` | – | – |

</details>

---

### <a id="fn-isgetfdpathsupportedontarget"></a>`isGetFdPathSupportedOnTarget`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn isGetFdPathSupportedOnTarget(os: std.Target.Os) bool {
    return switch (os.tag) {
        .windows,
        .macos,
        .ios,
        .watchos,
        .tvos,
        .visionos,
        .linux,
        .solaris,
        .illumos,
        .freebsd,
        .serenity,
        => true,

        .dragonfly => os.version_range.semver.max.order(.{ .major = 6, .minor = 0, .patch = 0 }) != .lt,
        .netbsd => os.version_range.semver.max.order(.{ .major = 10, .minor = 0, .patch = 0 }) != .lt,
        else => false,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `os` | `std.Target.Os` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-getfdpath"></a>`getFdPath`

<details class="declaration-card" open>
<summary>Function – Return canonical path of handle `fd`</summary>

Return canonical path of handle `fd`.

This function is very host-specific and is not universally supported by all hosts.
For example, while it generally works on Linux, macOS, FreeBSD or Windows, it is
unsupported on WASI.

* On Windows, the result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
* On other platforms, the result is an opaque sequence of bytes with no particular encoding.

Calling this function is usually a bug.

\`\`\`zig
pub fn getFdPath(fd: std.posix.fd_t, out_buffer: *[max_path_bytes]u8) std.posix.RealPathError![]u8 {
    if (!comptime isGetFdPathSupportedOnTarget(builtin.os)) {
        @compileError("querying for canonical path of a handle is unsupported on this host");
    }
    switch (native_os) {
        .windows => {
            var wide_buf: [windows.PATH_MAX_WIDE]u16 = undefined;
            const wide_slice = try windows.GetFinalPathNameByHandle(fd, .{}, wide_buf[0..]);

            const end_index = std.unicode.wtf16LeToWtf8(out_buffer, wide_slice);
            return out_buffer[0..end_index];
        },
        .macos, .ios, .watchos, .tvos, .visionos => {
            // On macOS, we can use F.GETPATH fcntl command to query the OS for
            // the path to the file descriptor.
            @memset(out_buffer[0..max_path_bytes], 0);
            switch (posix.errno(posix.system.fcntl(fd, posix.F.GETPATH, out_buffer))) {
                .SUCCESS => {},
                .BADF => return error.FileNotFound,
                .NOSPC => return error.NameTooLong,
                .NOENT => return error.FileNotFound,
                // TODO man pages for fcntl on macOS don't really tell you what
                // errno values to expect when command is F.GETPATH...
                else => |err| return posix.unexpectedErrno(err),
            }
            const len = mem.indexOfScalar(u8, out_buffer[0..], 0) orelse max_path_bytes;
            return out_buffer[0..len];
        },
        .linux, .serenity => {
            var procfs_buf: ["/proc/self/fd/-2147483648\x00".len]u8 = undefined;
            const proc_path = std.fmt.bufPrintZ(procfs_buf[0..], "/proc/self/fd/{d}", .{fd}) catch unreachable;

            const target = posix.readlinkZ(proc_path, out_buffer) catch |err| {
                switch (err) {
                    error.NotLink => unreachable,
                    error.BadPathName => unreachable,
                    error.InvalidUtf8 => unreachable, // WASI-only
                    error.InvalidWtf8 => unreachable, // Windows-only
                    error.UnsupportedReparsePointType => unreachable, // Windows-only
                    error.NetworkNotFound => unreachable, // Windows-only
                    else => |e| return e,
                }
            };
            return target;
        },
        .solaris, .illumos => {
            var procfs_buf: ["/proc/self/path/-2147483648\x00".len]u8 = undefined;
            const proc_path = std.fmt.bufPrintZ(procfs_buf[0..], "/proc/self/path/{d}", .{fd}) catch unreachable;

            const target = posix.readlinkZ(proc_path, out_buffer) catch |err| switch (err) {
                error.UnsupportedReparsePointType => unreachable,
                error.NotLink => unreachable,
                error.InvalidUtf8 => unreachable, // WASI-only
                else => |e| return e,
            };
            return target;
        },
        .freebsd => {
            var kfile: std.c.kinfo_file = undefined;
            kfile.structsize = std.c.KINFO_FILE_SIZE;
            switch (posix.errno(std.c.fcntl(fd, std.c.F.KINFO, @intFromPtr(&kfile)))) {
                .SUCCESS => {},
                .BADF => return error.FileNotFound,
                else => |err| return posix.unexpectedErrno(err),
            }
            const len = mem.indexOfScalar(u8, &kfile.path, 0) orelse max_path_bytes;
            if (len == 0) return error.NameTooLong;
            const result = out_buffer[0..len];
            @memcpy(result, kfile.path[0..len]);
            return result;
        },
        .dragonfly => {
            @memset(out_buffer[0..max_path_bytes], 0);
            switch (posix.errno(std.c.fcntl(fd, posix.F.GETPATH, out_buffer))) {
                .SUCCESS => {},
                .BADF => return error.FileNotFound,
                .RANGE => return error.NameTooLong,
                else => |err| return posix.unexpectedErrno(err),
            }
            const len = mem.indexOfScalar(u8, out_buffer[0..], 0) orelse max_path_bytes;
            return out_buffer[0..len];
        },
        .netbsd => {
            @memset(out_buffer[0..max_path_bytes], 0);
            switch (posix.errno(std.c.fcntl(fd, posix.F.GETPATH, out_buffer))) {
                .SUCCESS => {},
                .ACCES => return error.AccessDenied,
                .BADF => return error.FileNotFound,
                .NOENT => return error.FileNotFound,
                .NOMEM => return error.SystemResources,
                .RANGE => return error.NameTooLong,
                else => |err| return posix.unexpectedErrno(err),
            }
            const len = mem.indexOfScalar(u8, out_buffer[0..], 0) orelse max_path_bytes;
            return out_buffer[0..len];
        },
        else => unreachable, // made unreachable by isGetFdPathSupportedOnTarget above
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `std.posix.fd_t` | – | – |
| `out\_buffer` | `*[max_path_bytes]u8` | – | – |
| Return | `std.posix.RealPathError![]u8` | – | – |

</details>

---

### <a id="fn-fstatat-wasi"></a>`fstatat_wasi`

<details class="declaration-card" open>
<summary>Function – WASI-only</summary>

WASI-only. Same as `fstatat` but targeting WASI.
`pathname` should be encoded as valid UTF-8.
See also `fstatat`.

\`\`\`zig
pub fn fstatat_wasi(dirfd: posix.fd_t, pathname: []const u8, flags: wasi.lookupflags_t) posix.FStatAtError!wasi.filestat_t {
    var stat: wasi.filestat_t = undefined;
    switch (wasi.path_filestat_get(dirfd, flags, pathname.ptr, pathname.len, &stat)) {
        .SUCCESS => return stat,
        .INVAL => unreachable,
        .BADF => unreachable, // Always a race condition.
        .NOMEM => return error.SystemResources,
        .ACCES => return error.AccessDenied,
        .FAULT => unreachable,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.FileNotFound,
        .NOTCAPABLE => return error.AccessDenied,
        .ILSEQ => return error.InvalidUtf8,
        else => |err| return posix.unexpectedErrno(err),
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `posix.fd_t` | – | – |
| `pathname` | `[]const u8` | – | – |
| `flags` | `wasi.lookupflags_t` | – | – |
| Return | `posix.FStatAtError!wasi.filestat_t` | – | – |

</details>

---

### <a id="fn-fstat-wasi"></a>`fstat_wasi`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn fstat_wasi(fd: posix.fd_t) posix.FStatError!wasi.filestat_t {
    var stat: wasi.filestat_t = undefined;
    switch (wasi.fd_filestat_get(fd, &stat)) {
        .SUCCESS => return stat,
        .INVAL => unreachable,
        .BADF => unreachable, // Always a race condition.
        .NOMEM => return error.SystemResources,
        .ACCES => return error.AccessDenied,
        .NOTCAPABLE => return error.AccessDenied,
        else => |err| return posix.unexpectedErrno(err),
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `posix.fd_t` | – | – |
| Return | `posix.FStatError!wasi.filestat_t` | – | – |

</details>

---
