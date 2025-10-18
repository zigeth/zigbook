---
title: "std.fs"
description: "Comprehensive reference for Zig's std.fs module covering operating system, filesystem, and runtime services."
navigation:
  title: "Fs"
  icon: i-lucide-server-cog
  badge: "Platform"
badge: "Platform"
category: "platform"
tags:
  - "zig"
  - "standard-library"
  - "platform"
source: "std/fs.md"
githubPath: "std/fs.md"
lastUpdated: "2025-10-18T12:44:21.942Z"
seo:
  title: "std.fs · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.fs module covering operating system, filesystem, and runtime services."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/fs.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.fs` |
| Declarations | 62 |
| Breakdown | 44 functions · 11 constants · 2 error sets · 5 modules |
| Generated (unix epoch) | 1760148105 |

## Overview

File System.

---

## Table of Contents

- [Functions](#functions)
  - [`updateFileAbsolute`](#fn-updatefileabsolute)
  - [`copyFileAbsolute`](#fn-copyfileabsolute)
  - [`makeDirAbsolute`](#fn-makedirabsolute)
  - [`makeDirAbsoluteZ`](#fn-makedirabsolutez)
  - [`makeDirAbsoluteW`](#fn-makedirabsolutew)
  - [`deleteDirAbsolute`](#fn-deletedirabsolute)
  - [`deleteDirAbsoluteZ`](#fn-deletedirabsolutez)
  - [`deleteDirAbsoluteW`](#fn-deletedirabsolutew)
  - [`renameAbsolute`](#fn-renameabsolute)
  - [`renameAbsoluteZ`](#fn-renameabsolutez)
  - [`renameAbsoluteW`](#fn-renameabsolutew)
  - [`rename`](#fn-rename)
  - [`renameZ`](#fn-renamez)
  - [`renameW`](#fn-renamew)
  - [`cwd`](#fn-cwd)
  - [`defaultWasiCwd`](#fn-defaultwasicwd)
  - [`openDirAbsolute`](#fn-opendirabsolute)
  - [`openDirAbsoluteZ`](#fn-opendirabsolutez)
  - [`openDirAbsoluteW`](#fn-opendirabsolutew)
  - [`openFileAbsolute`](#fn-openfileabsolute)
  - [`openFileAbsoluteZ`](#fn-openfileabsolutez)
  - [`openFileAbsoluteW`](#fn-openfileabsolutew)
  - [`accessAbsolute`](#fn-accessabsolute)
  - [`accessAbsoluteZ`](#fn-accessabsolutez)
  - [`accessAbsoluteW`](#fn-accessabsolutew)
  - [`createFileAbsolute`](#fn-createfileabsolute)
  - [`createFileAbsoluteZ`](#fn-createfileabsolutez)
  - [`createFileAbsoluteW`](#fn-createfileabsolutew)
  - [`deleteFileAbsolute`](#fn-deletefileabsolute)
  - [`deleteFileAbsoluteZ`](#fn-deletefileabsolutez)
  - [`deleteFileAbsoluteW`](#fn-deletefileabsolutew)
  - [`deleteTreeAbsolute`](#fn-deletetreeabsolute)
  - [`readLinkAbsolute`](#fn-readlinkabsolute)
  - [`readlinkAbsoluteW`](#fn-readlinkabsolutew)
  - [`readLinkAbsoluteZ`](#fn-readlinkabsolutez)
  - [`symLinkAbsolute`](#fn-symlinkabsolute)
  - [`symLinkAbsoluteW`](#fn-symlinkabsolutew)
  - [`symLinkAbsoluteZ`](#fn-symlinkabsolutez)
  - [`openSelfExe`](#fn-openselfexe)
  - [`selfExePathAlloc`](#fn-selfexepathalloc)
  - [`selfExePath`](#fn-selfexepath)
  - [`selfExeDirPathAlloc`](#fn-selfexedirpathalloc)
  - [`selfExeDirPath`](#fn-selfexedirpath)
  - [`realpathAlloc`](#fn-realpathalloc)

- [Modules](#modules)
  - [`AtomicFile`](#module-atomicfile)
  - [`Dir`](#module-dir)
  - [`File`](#module-file)
  - [`path`](#module-path)
  - [`wasi`](#module-wasi)

- [Constants](#constants)
  - [`has\_executable\_bit`](#const-has-executable-bit)
  - [`realpath`](#const-realpath)
  - [`realpathZ`](#const-realpathz)
  - [`realpathW`](#const-realpathw)
  - [`getAppDataDir`](#const-getappdatadir)
  - [`GetAppDataDirError`](#const-getappdatadirerror)
  - [`max\_path\_bytes`](#const-max-path-bytes)
  - [`max\_name\_bytes`](#const-max-name-bytes)
  - [`base64\_alphabet`](#const-base64-alphabet)
  - [`base64\_encoder`](#const-base64-encoder)
  - [`base64\_decoder`](#const-base64-decoder)

- [Error Sets](#error-sets)
  - [`OpenSelfExeError`](#error-openselfexeerror)
  - [`SelfExePathError`](#error-selfexepatherror)

---

## Modules (5)

### <a id="module-atomicfile"></a>`AtomicFile`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const AtomicFile = @import("fs/AtomicFile.zig")
```

> **Module:** `fs/AtomicFile.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/fs/AtomicFile.zig)

</details>

---

### <a id="module-dir"></a>`Dir`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Dir = @import("fs/Dir.zig")
```

> **Module:** `fs/Dir.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/fs/Dir.zig)

</details>

---

### <a id="module-file"></a>`File`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const File = @import("fs/File.zig")
```

> **Module:** `fs/File.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/fs/File.zig)

</details>

---

### <a id="module-path"></a>`path`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const path = @import("fs/path.zig")
```

> **Module:** `fs/path.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/fs/path.zig)

</details>

---

### <a id="module-wasi"></a>`wasi`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const wasi = @import("fs/wasi.zig")
```

> **Module:** `fs/wasi.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/fs/wasi.zig)

</details>

---

## Constants (11)

### <a id="const-has-executable-bit"></a>`has_executable_bit`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const has_executable_bit = switch (native_os) {
    .windows, .wasi => false,
    else => true,
}
```

</details>

---

### <a id="const-realpath"></a>`realpath`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const realpath = posix.realpath
```

</details>

---

### <a id="const-realpathz"></a>`realpathZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const realpathZ = posix.realpathZ
```

</details>

---

### <a id="const-realpathw"></a>`realpathW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const realpathW = posix.realpathW
```

</details>

---

### <a id="const-getappdatadir"></a>`getAppDataDir`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const getAppDataDir = @import("fs/get_app_data_dir.zig").getAppDataDir
```

</details>

---

### <a id="const-getappdatadirerror"></a>`GetAppDataDirError`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const GetAppDataDirError = @import("fs/get_app_data_dir.zig").GetAppDataDirError
```

</details>

---

### <a id="const-max-path-bytes"></a>`max_path_bytes`

<details class="declaration-card" open>
<summary>Constant – The maximum length of a file path that the operating system will accept</summary>

The maximum length of a file path that the operating system will accept.

Paths, including those returned from file system operations, may be longer
than this length, but such paths cannot be successfully passed back in
other file system operations. However, all path components returned by file
system operations are assumed to fit into a `u8` array of this length.

The byte count includes room for a null sentinel byte.

* On Windows, `[]u8` file paths are encoded as
  [WTF-8](https://simonsapin.github.io/wtf-8/).
* On WASI, `[]u8` file paths are encoded as valid UTF-8.
* On other platforms, `[]u8` file paths are opaque sequences of bytes with
  no particular encoding.

```zig
pub const max_path_bytes = switch (native_os) {
    .linux, .macos, .ios, .freebsd, .openbsd, .netbsd, .dragonfly, .haiku, .solaris, .illumos, .plan9, .emscripten, .wasi, .serenity => posix.PATH_MAX,
    // Each WTF-16LE code unit may be expanded to 3 WTF-8 bytes.
    // If it would require 4 WTF-8 bytes, then there would be a surrogate
    // pair in the WTF-16LE, and we (over)account 3 bytes for it that way.
    // +1 for the null byte at the end, which can be encoded in 1 byte.
    .windows => windows.PATH_MAX_WIDE * 3 + 1,
    else => if (@hasDecl(root, "os") and @hasDecl(root.os, "PATH_MAX"))
        root.os.PATH_MAX
    else
        @compileError("PATH_MAX not implemented for " ++ @tagName(native_os)),
}
```

</details>

---

### <a id="const-max-name-bytes"></a>`max_name_bytes`

<details class="declaration-card" open>
<summary>Constant – This represents the maximum size of a `[]u8` file name component that</summary>

This represents the maximum size of a `[]u8` file name component that
the platform's common file systems support. File name components returned by file system
operations are likely to fit into a `u8` array of this length, but
(depending on the platform) this assumption may not hold for every configuration.
The byte count does not include a null sentinel byte.
On Windows, `[]u8` file name components are encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, file name components are encoded as valid UTF-8.
On other platforms, `[]u8` components are an opaque sequence of bytes with no particular encoding.

```zig
pub const max_name_bytes = switch (native_os) {
    .linux, .macos, .ios, .freebsd, .openbsd, .netbsd, .dragonfly, .solaris, .illumos, .serenity => posix.NAME_MAX,
    // Haiku's NAME_MAX includes the null terminator, so subtract one.
    .haiku => posix.NAME_MAX - 1,
    // Each WTF-16LE character may be expanded to 3 WTF-8 bytes.
    // If it would require 4 WTF-8 bytes, then there would be a surrogate
    // pair in the WTF-16LE, and we (over)account 3 bytes for it that way.
    .windows => windows.NAME_MAX * 3,
    // For WASI, the MAX_NAME will depend on the host OS, so it needs to be
    // as large as the largest max_name_bytes (Windows) in order to work on any host OS.
    // TODO determine if this is a reasonable approach
    .wasi => windows.NAME_MAX * 3,
    else => if (@hasDecl(root, "os") and @hasDecl(root.os, "NAME_MAX"))
        root.os.NAME_MAX
    else
        @compileError("NAME_MAX not implemented for " ++ @tagName(native_os)),
}
```

</details>

---

### <a id="const-base64-alphabet"></a>`base64_alphabet`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const base64_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".*
```

</details>

---

### <a id="const-base64-encoder"></a>`base64_encoder`

<details class="declaration-card" open>
<summary>Constant – Base64 encoder, replacing the standard `+/` with `-_` so that it can be used in a file name on any filesystem</summary>

Base64 encoder, replacing the standard `+/` with `-_` so that it can be used in a file name on any filesystem.

```zig
pub const base64_encoder = base64.Base64Encoder.init(base64_alphabet, null)
```

</details>

---

### <a id="const-base64-decoder"></a>`base64_decoder`

<details class="declaration-card" open>
<summary>Constant – Base64 decoder, replacing the standard `+/` with `-_` so that it can be used in a file name on any filesystem</summary>

Base64 decoder, replacing the standard `+/` with `-_` so that it can be used in a file name on any filesystem.

```zig
pub const base64_decoder = base64.Base64Decoder.init(base64_alphabet, null)
```

</details>

---

## Functions (44)

### <a id="fn-updatefileabsolute"></a>`updateFileAbsolute`

<details class="declaration-card" open>
<summary>Function – Same as `Dir</summary>

Same as `Dir.updateFile`, except asserts that both `source_path` and `dest_path`
are absolute. See `Dir.updateFile` for a function that operates on both
absolute and relative paths.
On Windows, both paths should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn updateFileAbsolute(
    source_path: []const u8,
    dest_path: []const u8,
    args: Dir.CopyFileOptions,
) !Dir.PrevStatus {
    assert(path.isAbsolute(source_path));
    assert(path.isAbsolute(dest_path));
    const my_cwd = cwd();
    return Dir.updateFile(my_cwd, source_path, my_cwd, dest_path, args);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `source\_path` | `[]const u8` | – | – |
| `dest\_path` | `[]const u8` | – | – |
| `args` | `Dir.CopyFileOptions` | – | – |
| Return | `Dir.PrevStatus` | – | – |

</details>

---

### <a id="fn-copyfileabsolute"></a>`copyFileAbsolute`

<details class="declaration-card" open>
<summary>Function – Same as `Dir</summary>

Same as `Dir.copyFile`, except asserts that both `source_path` and `dest_path`
are absolute. See `Dir.copyFile` for a function that operates on both
absolute and relative paths.
On Windows, both paths should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn copyFileAbsolute(
    source_path: []const u8,
    dest_path: []const u8,
    args: Dir.CopyFileOptions,
) !void {
    assert(path.isAbsolute(source_path));
    assert(path.isAbsolute(dest_path));
    const my_cwd = cwd();
    return Dir.copyFile(my_cwd, source_path, my_cwd, dest_path, args);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `source\_path` | `[]const u8` | – | – |
| `dest\_path` | `[]const u8` | – | – |
| `args` | `Dir.CopyFileOptions` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-makedirabsolute"></a>`makeDirAbsolute`

<details class="declaration-card" open>
<summary>Function – Create a new directory, based on an absolute path</summary>

Create a new directory, based on an absolute path.
Asserts that the path is absolute. See `Dir.makeDir` for a function that operates
on both absolute and relative paths.
On Windows, `absolute_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `absolute_path` should be encoded as valid UTF-8.
On other platforms, `absolute_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn makeDirAbsolute(absolute_path: []const u8) !void {
    assert(path.isAbsolute(absolute_path));
    return posix.mkdir(absolute_path, Dir.default_mode);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-makedirabsolutez"></a>`makeDirAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `makeDirAbsolute` except the parameter is null-terminated</summary>

Same as `makeDirAbsolute` except the parameter is null-terminated.

```zig
pub fn makeDirAbsoluteZ(absolute_path_z: [*:0]const u8) !void {
    assert(path.isAbsoluteZ(absolute_path_z));
    return posix.mkdirZ(absolute_path_z, Dir.default_mode);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_z` | `[*:0]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-makedirabsolutew"></a>`makeDirAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Same as `makeDirAbsolute` except the parameter is a null-terminated WTF-16 LE-encoded string</summary>

Same as `makeDirAbsolute` except the parameter is a null-terminated WTF-16 LE-encoded string.

```zig
pub fn makeDirAbsoluteW(absolute_path_w: [*:0]const u16) !void {
    assert(path.isAbsoluteWindowsW(absolute_path_w));
    return posix.mkdirW(mem.span(absolute_path_w), Dir.default_mode);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_w` | `[*:0]const u16` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-deletedirabsolute"></a>`deleteDirAbsolute`

<details class="declaration-card" open>
<summary>Function – Same as `Dir</summary>

Same as `Dir.deleteDir` except the path is absolute.
On Windows, `dir_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `dir_path` should be encoded as valid UTF-8.
On other platforms, `dir_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn deleteDirAbsolute(dir_path: []const u8) !void {
    assert(path.isAbsolute(dir_path));
    return posix.rmdir(dir_path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-deletedirabsolutez"></a>`deleteDirAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `deleteDirAbsolute` except the path parameter is null-terminated</summary>

Same as `deleteDirAbsolute` except the path parameter is null-terminated.

```zig
pub fn deleteDirAbsoluteZ(dir_path: [*:0]const u8) !void {
    assert(path.isAbsoluteZ(dir_path));
    return posix.rmdirZ(dir_path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[*:0]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-deletedirabsolutew"></a>`deleteDirAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Same as `deleteDirAbsolute` except the path parameter is WTF-16 and target OS is assumed Windows</summary>

Same as `deleteDirAbsolute` except the path parameter is WTF-16 and target OS is assumed Windows.

```zig
pub fn deleteDirAbsoluteW(dir_path: [*:0]const u16) !void {
    assert(path.isAbsoluteWindowsW(dir_path));
    return posix.rmdirW(mem.span(dir_path));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[*:0]const u16` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-renameabsolute"></a>`renameAbsolute`

<details class="declaration-card" open>
<summary>Function – Same as `Dir</summary>

Same as `Dir.rename` except the paths are absolute.
On Windows, both paths should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn renameAbsolute(old_path: []const u8, new_path: []const u8) !void {
    assert(path.isAbsolute(old_path));
    assert(path.isAbsolute(new_path));
    return posix.rename(old_path, new_path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_path` | `[]const u8` | – | – |
| `new\_path` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-renameabsolutez"></a>`renameAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `renameAbsolute` except the path parameters are null-terminated</summary>

Same as `renameAbsolute` except the path parameters are null-terminated.

```zig
pub fn renameAbsoluteZ(old_path: [*:0]const u8, new_path: [*:0]const u8) !void {
    assert(path.isAbsoluteZ(old_path));
    assert(path.isAbsoluteZ(new_path));
    return posix.renameZ(old_path, new_path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_path` | `[*:0]const u8` | – | – |
| `new\_path` | `[*:0]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-renameabsolutew"></a>`renameAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Same as `renameAbsolute` except the path parameters are WTF-16 and target OS is assumed Windows</summary>

Same as `renameAbsolute` except the path parameters are WTF-16 and target OS is assumed Windows.

```zig
pub fn renameAbsoluteW(old_path: [*:0]const u16, new_path: [*:0]const u16) !void {
    assert(path.isAbsoluteWindowsW(old_path));
    assert(path.isAbsoluteWindowsW(new_path));
    return posix.renameW(old_path, new_path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_path` | `[*:0]const u16` | – | – |
| `new\_path` | `[*:0]const u16` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-rename"></a>`rename`

<details class="declaration-card" open>
<summary>Function – Same as `Dir</summary>

Same as `Dir.rename`, except `new_sub_path` is relative to `new_dir`

```zig
pub fn rename(old_dir: Dir, old_sub_path: []const u8, new_dir: Dir, new_sub_path: []const u8) !void {
    return posix.renameat(old_dir.fd, old_sub_path, new_dir.fd, new_sub_path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_dir` | `Dir` | – | – |
| `old\_sub\_path` | `[]const u8` | – | – |
| `new\_dir` | `Dir` | – | – |
| `new\_sub\_path` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-renamez"></a>`renameZ`

<details class="declaration-card" open>
<summary>Function – Same as `rename` except the parameters are null-terminated</summary>

Same as `rename` except the parameters are null-terminated.

```zig
pub fn renameZ(old_dir: Dir, old_sub_path_z: [*:0]const u8, new_dir: Dir, new_sub_path_z: [*:0]const u8) !void {
    return posix.renameatZ(old_dir.fd, old_sub_path_z, new_dir.fd, new_sub_path_z);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_dir` | `Dir` | – | – |
| `old\_sub\_path\_z` | `[*:0]const u8` | – | – |
| `new\_dir` | `Dir` | – | – |
| `new\_sub\_path\_z` | `[*:0]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-renamew"></a>`renameW`

<details class="declaration-card" open>
<summary>Function – Same as `rename` except the parameters are WTF16LE, NT prefixed</summary>

Same as `rename` except the parameters are WTF16LE, NT prefixed.
This function is Windows-only.

```zig
pub fn renameW(old_dir: Dir, old_sub_path_w: []const u16, new_dir: Dir, new_sub_path_w: []const u16) !void {
    return posix.renameatW(old_dir.fd, old_sub_path_w, new_dir.fd, new_sub_path_w, windows.TRUE);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_dir` | `Dir` | – | – |
| `old\_sub\_path\_w` | `[]const u16` | – | – |
| `new\_dir` | `Dir` | – | – |
| `new\_sub\_path\_w` | `[]const u16` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-cwd"></a>`cwd`

<details class="declaration-card" open>
<summary>Function – Returns a handle to the current working directory</summary>

Returns a handle to the current working directory. It is not opened with iteration capability.
Closing the returned `Dir` is checked illegal behavior. Iterating over the result is illegal behavior.
On POSIX targets, this function is comptime-callable.

```zig
pub fn cwd() Dir {
    if (native_os == .windows) {
        return .{ .fd = windows.peb().ProcessParameters.CurrentDirectory.Handle };
    } else if (native_os == .wasi) {
        return .{ .fd = std.options.wasiCwd() };
    } else {
        return .{ .fd = posix.AT.FDCWD };
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `Dir` | – | – |

</details>

---

### <a id="fn-defaultwasicwd"></a>`defaultWasiCwd`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn defaultWasiCwd() std.os.wasi.fd_t {
    // Expect the first preopen to be current working directory.
    return 3;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `std.os.wasi.fd_t` | – | – |

</details>

---

### <a id="fn-opendirabsolute"></a>`openDirAbsolute`

<details class="declaration-card" open>
<summary>Function – Opens a directory at the given path</summary>

Opens a directory at the given path. The directory is a system resource that remains
open until `close` is called on the result.
See `openDirAbsoluteZ` for a function that accepts a null-terminated path.

Asserts that the path parameter has no null bytes.
On Windows, `absolute_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `absolute_path` should be encoded as valid UTF-8.
On other platforms, `absolute_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn openDirAbsolute(absolute_path: []const u8, flags: Dir.OpenOptions) File.OpenError!Dir {
    assert(path.isAbsolute(absolute_path));
    return cwd().openDir(absolute_path, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[]const u8` | – | – |
| `flags` | `Dir.OpenOptions` | – | – |
| Return | `File.OpenError!Dir` | – | – |

</details>

---

### <a id="fn-opendirabsolutez"></a>`openDirAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `openDirAbsolute` but the path parameter is null-terminated</summary>

Same as `openDirAbsolute` but the path parameter is null-terminated.

```zig
pub fn openDirAbsoluteZ(absolute_path_c: [*:0]const u8, flags: Dir.OpenOptions) File.OpenError!Dir {
    assert(path.isAbsoluteZ(absolute_path_c));
    return cwd().openDirZ(absolute_path_c, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_c` | `[*:0]const u8` | – | – |
| `flags` | `Dir.OpenOptions` | – | – |
| Return | `File.OpenError!Dir` | – | – |

</details>

---

### <a id="fn-opendirabsolutew"></a>`openDirAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Same as `openDirAbsolute` but the path parameter is null-terminated</summary>

Same as `openDirAbsolute` but the path parameter is null-terminated.

```zig
pub fn openDirAbsoluteW(absolute_path_c: [*:0]const u16, flags: Dir.OpenOptions) File.OpenError!Dir {
    assert(path.isAbsoluteWindowsW(absolute_path_c));
    return cwd().openDirW(absolute_path_c, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_c` | `[*:0]const u16` | – | – |
| `flags` | `Dir.OpenOptions` | – | – |
| Return | `File.OpenError!Dir` | – | – |

</details>

---

### <a id="fn-openfileabsolute"></a>`openFileAbsolute`

<details class="declaration-card" open>
<summary>Function – Opens a file for reading or writing, without attempting to create a new file, based on an absolute path</summary>

Opens a file for reading or writing, without attempting to create a new file, based on an absolute path.
Call `File.close` to release the resource.
Asserts that the path is absolute. See `Dir.openFile` for a function that
operates on both absolute and relative paths.
Asserts that the path parameter has no null bytes. See `openFileAbsoluteZ` for a function
that accepts a null-terminated path.
On Windows, `absolute_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `absolute_path` should be encoded as valid UTF-8.
On other platforms, `absolute_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn openFileAbsolute(absolute_path: []const u8, flags: File.OpenFlags) File.OpenError!File {
    assert(path.isAbsolute(absolute_path));
    return cwd().openFile(absolute_path, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[]const u8` | – | – |
| `flags` | `File.OpenFlags` | – | – |
| Return | `File.OpenError!File` | – | – |

</details>

---

### <a id="fn-openfileabsolutez"></a>`openFileAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `openFileAbsolute` but the path parameter is null-terminated</summary>

Same as `openFileAbsolute` but the path parameter is null-terminated.

```zig
pub fn openFileAbsoluteZ(absolute_path_c: [*:0]const u8, flags: File.OpenFlags) File.OpenError!File {
    assert(path.isAbsoluteZ(absolute_path_c));
    return cwd().openFileZ(absolute_path_c, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_c` | `[*:0]const u8` | – | – |
| `flags` | `File.OpenFlags` | – | – |
| Return | `File.OpenError!File` | – | – |

</details>

---

### <a id="fn-openfileabsolutew"></a>`openFileAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Same as `openFileAbsolute` but the path parameter is WTF-16-encoded</summary>

Same as `openFileAbsolute` but the path parameter is WTF-16-encoded.

```zig
pub fn openFileAbsoluteW(absolute_path_w: []const u16, flags: File.OpenFlags) File.OpenError!File {
    assert(path.isAbsoluteWindowsWTF16(absolute_path_w));
    return cwd().openFileW(absolute_path_w, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_w` | `[]const u16` | – | – |
| `flags` | `File.OpenFlags` | – | – |
| Return | `File.OpenError!File` | – | – |

</details>

---

### <a id="fn-accessabsolute"></a>`accessAbsolute`

<details class="declaration-card" open>
<summary>Function – Test accessing `path`</summary>

Test accessing `path`.
Be careful of Time-Of-Check-Time-Of-Use race conditions when using this function.
For example, instead of testing if a file exists and then opening it, just
open it and handle the error for file not found.
See `accessAbsoluteZ` for a function that accepts a null-terminated path.
On Windows, `absolute_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `absolute_path` should be encoded as valid UTF-8.
On other platforms, `absolute_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn accessAbsolute(absolute_path: []const u8, flags: File.OpenFlags) Dir.AccessError!void {
    assert(path.isAbsolute(absolute_path));
    try cwd().access(absolute_path, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[]const u8` | – | – |
| `flags` | `File.OpenFlags` | – | – |
| Return | `Dir.AccessError!void` | – | – |

</details>

---

### <a id="fn-accessabsolutez"></a>`accessAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `accessAbsolute` but the path parameter is null-terminated</summary>

Same as `accessAbsolute` but the path parameter is null-terminated.

```zig
pub fn accessAbsoluteZ(absolute_path: [*:0]const u8, flags: File.OpenFlags) Dir.AccessError!void {
    assert(path.isAbsoluteZ(absolute_path));
    try cwd().accessZ(absolute_path, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[*:0]const u8` | – | – |
| `flags` | `File.OpenFlags` | – | – |
| Return | `Dir.AccessError!void` | – | – |

</details>

---

### <a id="fn-accessabsolutew"></a>`accessAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Same as `accessAbsolute` but the path parameter is WTF-16 encoded</summary>

Same as `accessAbsolute` but the path parameter is WTF-16 encoded.

```zig
pub fn accessAbsoluteW(absolute_path: [*:0]const u16, flags: File.OpenFlags) Dir.AccessError!void {
    assert(path.isAbsoluteWindowsW(absolute_path));
    try cwd().accessW(absolute_path, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[*:0]const u16` | – | – |
| `flags` | `File.OpenFlags` | – | – |
| Return | `Dir.AccessError!void` | – | – |

</details>

---

### <a id="fn-createfileabsolute"></a>`createFileAbsolute`

<details class="declaration-card" open>
<summary>Function – Creates, opens, or overwrites a file with write access, based on an absolute path</summary>

Creates, opens, or overwrites a file with write access, based on an absolute path.
Call `File.close` to release the resource.
Asserts that the path is absolute. See `Dir.createFile` for a function that
operates on both absolute and relative paths.
Asserts that the path parameter has no null bytes. See `createFileAbsoluteC` for a function
that accepts a null-terminated path.
On Windows, `absolute_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `absolute_path` should be encoded as valid UTF-8.
On other platforms, `absolute_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn createFileAbsolute(absolute_path: []const u8, flags: File.CreateFlags) File.OpenError!File {
    assert(path.isAbsolute(absolute_path));
    return cwd().createFile(absolute_path, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[]const u8` | – | – |
| `flags` | `File.CreateFlags` | – | – |
| Return | `File.OpenError!File` | – | – |

</details>

---

### <a id="fn-createfileabsolutez"></a>`createFileAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `createFileAbsolute` but the path parameter is null-terminated</summary>

Same as `createFileAbsolute` but the path parameter is null-terminated.

```zig
pub fn createFileAbsoluteZ(absolute_path_c: [*:0]const u8, flags: File.CreateFlags) File.OpenError!File {
    assert(path.isAbsoluteZ(absolute_path_c));
    return cwd().createFileZ(absolute_path_c, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_c` | `[*:0]const u8` | – | – |
| `flags` | `File.CreateFlags` | – | – |
| Return | `File.OpenError!File` | – | – |

</details>

---

### <a id="fn-createfileabsolutew"></a>`createFileAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Same as `createFileAbsolute` but the path parameter is WTF-16 encoded</summary>

Same as `createFileAbsolute` but the path parameter is WTF-16 encoded.

```zig
pub fn createFileAbsoluteW(absolute_path_w: [*:0]const u16, flags: File.CreateFlags) File.OpenError!File {
    assert(path.isAbsoluteWindowsW(absolute_path_w));
    return cwd().createFileW(mem.span(absolute_path_w), flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_w` | `[*:0]const u16` | – | – |
| `flags` | `File.CreateFlags` | – | – |
| Return | `File.OpenError!File` | – | – |

</details>

---

### <a id="fn-deletefileabsolute"></a>`deleteFileAbsolute`

<details class="declaration-card" open>
<summary>Function – Delete a file name and possibly the file it refers to, based on an absolute path</summary>

Delete a file name and possibly the file it refers to, based on an absolute path.
Asserts that the path is absolute. See `Dir.deleteFile` for a function that
operates on both absolute and relative paths.
Asserts that the path parameter has no null bytes.
On Windows, `absolute_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `absolute_path` should be encoded as valid UTF-8.
On other platforms, `absolute_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn deleteFileAbsolute(absolute_path: []const u8) Dir.DeleteFileError!void {
    assert(path.isAbsolute(absolute_path));
    return cwd().deleteFile(absolute_path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[]const u8` | – | – |
| Return | `Dir.DeleteFileError!void` | – | – |

</details>

---

### <a id="fn-deletefileabsolutez"></a>`deleteFileAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `deleteFileAbsolute` except the parameter is null-terminated</summary>

Same as `deleteFileAbsolute` except the parameter is null-terminated.

```zig
pub fn deleteFileAbsoluteZ(absolute_path_c: [*:0]const u8) Dir.DeleteFileError!void {
    assert(path.isAbsoluteZ(absolute_path_c));
    return cwd().deleteFileZ(absolute_path_c);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_c` | `[*:0]const u8` | – | – |
| Return | `Dir.DeleteFileError!void` | – | – |

</details>

---

### <a id="fn-deletefileabsolutew"></a>`deleteFileAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Same as `deleteFileAbsolute` except the parameter is WTF-16 encoded</summary>

Same as `deleteFileAbsolute` except the parameter is WTF-16 encoded.

```zig
pub fn deleteFileAbsoluteW(absolute_path_w: [*:0]const u16) Dir.DeleteFileError!void {
    assert(path.isAbsoluteWindowsW(absolute_path_w));
    return cwd().deleteFileW(mem.span(absolute_path_w));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path\_w` | `[*:0]const u16` | – | – |
| Return | `Dir.DeleteFileError!void` | – | – |

</details>

---

### <a id="fn-deletetreeabsolute"></a>`deleteTreeAbsolute`

<details class="declaration-card" open>
<summary>Function – Removes a symlink, file, or directory</summary>

Removes a symlink, file, or directory.
This is equivalent to `Dir.deleteTree` with the base directory.
Asserts that the path is absolute. See `Dir.deleteTree` for a function that
operates on both absolute and relative paths.
Asserts that the path parameter has no null bytes.
On Windows, `absolute_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `absolute_path` should be encoded as valid UTF-8.
On other platforms, `absolute_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn deleteTreeAbsolute(absolute_path: []const u8) !void {
    assert(path.isAbsolute(absolute_path));
    const dirname = path.dirname(absolute_path) orelse return error{
        /// Attempt to remove the root file system path.
        /// This error is unreachable if `absolute_path` is relative.
        CannotDeleteRootDirectory,
    }.CannotDeleteRootDirectory;

    var dir = try cwd().openDir(dirname, .{});
    defer dir.close();

    return dir.deleteTree(path.basename(absolute_path));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `absolute\_path` | `[]const u8` | – | – |
| Return | `void` | – | – |

**Possible Errors:**

- `error./// Attempt to remove the root file system path.
        /// This error is unreachable if `absolute_path` is relative.
        CannotDeleteRootDirectory`

</details>

---

### <a id="fn-readlinkabsolute"></a>`readLinkAbsolute`

<details class="declaration-card" open>
<summary>Function – Same as `Dir</summary>

Same as `Dir.readLink`, except it asserts the path is absolute.
On Windows, `pathname` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `pathname` should be encoded as valid UTF-8.
On other platforms, `pathname` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn readLinkAbsolute(pathname: []const u8, buffer: *[max_path_bytes]u8) ![]u8 {
    assert(path.isAbsolute(pathname));
    return posix.readlink(pathname, buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pathname` | `[]const u8` | – | – |
| `buffer` | `*[max_path_bytes]u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-readlinkabsolutew"></a>`readlinkAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `readlinkW`, except the path parameter is null-terminated, WTF16
encoded.

```zig
pub fn readlinkAbsoluteW(pathname_w: [*:0]const u16, buffer: *[max_path_bytes]u8) ![]u8 {
    assert(path.isAbsoluteWindowsW(pathname_w));
    return posix.readlinkW(mem.span(pathname_w), buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pathname\_w` | `[*:0]const u16` | – | – |
| `buffer` | `*[max_path_bytes]u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-readlinkabsolutez"></a>`readLinkAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `readLink`, except the path parameter is null-terminated</summary>

Same as `readLink`, except the path parameter is null-terminated.

```zig
pub fn readLinkAbsoluteZ(pathname_c: [*:0]const u8, buffer: *[max_path_bytes]u8) ![]u8 {
    assert(path.isAbsoluteZ(pathname_c));
    return posix.readlinkZ(pathname_c, buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pathname\_c` | `[*:0]const u8` | – | – |
| `buffer` | `*[max_path_bytes]u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-symlinkabsolute"></a>`symLinkAbsolute`

<details class="declaration-card" open>
<summary>Function – Creates a symbolic link named `sym_link_path` which contains the string `target_path`</summary>

Creates a symbolic link named `sym_link_path` which contains the string `target_path`.
A symbolic link (also known as a soft link) may point to an existing file or to a nonexistent
one; the latter case is known as a dangling link.
If `sym_link_path` exists, it will not be overwritten.
See also `symLinkAbsoluteZ` and `symLinkAbsoluteW`.
On Windows, both paths should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn symLinkAbsolute(
    target_path: []const u8,
    sym_link_path: []const u8,
    flags: Dir.SymLinkFlags,
) !void {
    assert(path.isAbsolute(target_path));
    assert(path.isAbsolute(sym_link_path));
    if (native_os == .windows) {
        const target_path_w = try windows.sliceToPrefixedFileW(null, target_path);
        const sym_link_path_w = try windows.sliceToPrefixedFileW(null, sym_link_path);
        return windows.CreateSymbolicLink(null, sym_link_path_w.span(), target_path_w.span(), flags.is_directory);
    }
    return posix.symlink(target_path, sym_link_path);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_path` | `[]const u8` | – | – |
| `sym\_link\_path` | `[]const u8` | – | – |
| `flags` | `Dir.SymLinkFlags` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-symlinkabsolutew"></a>`symLinkAbsoluteW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `symLinkAbsolute` except the parameters are null-terminated, WTF16 LE encoded.
Note that this function will by default try creating a symbolic link to a file. If you would
like to create a symbolic link to a directory, specify this with `SymLinkFlags{ .is_directory = true }`.
See also `symLinkAbsolute`, `symLinkAbsoluteZ`.

```zig
pub fn symLinkAbsoluteW(
    target_path_w: [*:0]const u16,
    sym_link_path_w: [*:0]const u16,
    flags: Dir.SymLinkFlags,
) !void {
    assert(path.isAbsoluteWindowsW(target_path_w));
    assert(path.isAbsoluteWindowsW(sym_link_path_w));
    return windows.CreateSymbolicLink(null, mem.span(sym_link_path_w), mem.span(target_path_w), flags.is_directory);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_path\_w` | `[*:0]const u16` | – | – |
| `sym\_link\_path\_w` | `[*:0]const u16` | – | – |
| `flags` | `Dir.SymLinkFlags` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-symlinkabsolutez"></a>`symLinkAbsoluteZ`

<details class="declaration-card" open>
<summary>Function – Same as `symLinkAbsolute` except the parameters are null-terminated pointers</summary>

Same as `symLinkAbsolute` except the parameters are null-terminated pointers.
See also `symLinkAbsolute`.

```zig
pub fn symLinkAbsoluteZ(
    target_path_c: [*:0]const u8,
    sym_link_path_c: [*:0]const u8,
    flags: Dir.SymLinkFlags,
) !void {
    assert(path.isAbsoluteZ(target_path_c));
    assert(path.isAbsoluteZ(sym_link_path_c));
    if (native_os == .windows) {
        const target_path_w = try windows.cStrToPrefixedFileW(null, target_path_c);
        const sym_link_path_w = try windows.cStrToPrefixedFileW(null, sym_link_path_c);
        return windows.CreateSymbolicLink(null, sym_link_path_w.span(), target_path_w.span(), flags.is_directory);
    }
    return posix.symlinkZ(target_path_c, sym_link_path_c);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_path\_c` | `[*:0]const u8` | – | – |
| `sym\_link\_path\_c` | `[*:0]const u8` | – | – |
| `flags` | `Dir.SymLinkFlags` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-openselfexe"></a>`openSelfExe`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn openSelfExe(flags: File.OpenFlags) OpenSelfExeError!File {
    if (native_os == .linux or native_os == .serenity) {
        return openFileAbsoluteZ("/proc/self/exe", flags);
    }
    if (native_os == .windows) {
        // If ImagePathName is a symlink, then it will contain the path of the symlink,
        // not the path that the symlink points to. However, because we are opening
        // the file, we can let the openFileW call follow the symlink for us.
        const image_path_unicode_string = &windows.peb().ProcessParameters.ImagePathName;
        const image_path_name = image_path_unicode_string.Buffer.?[0 .. image_path_unicode_string.Length / 2 :0];
        const prefixed_path_w = try windows.wToPrefixedFileW(null, image_path_name);
        return cwd().openFileW(prefixed_path_w.span(), flags);
    }
    // Use of max_path_bytes here is valid as the resulting path is immediately
    // opened with no modification.
    var buf: [max_path_bytes]u8 = undefined;
    const self_exe_path = try selfExePath(&buf);
    buf[self_exe_path.len] = 0;
    return openFileAbsoluteZ(buf[0..self_exe_path.len :0].ptr, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `flags` | `File.OpenFlags` | – | – |
| Return | [`OpenSelfExeError!File`](#error-openselfexeerror) | – | – |

</details>

---

### <a id="fn-selfexepathalloc"></a>`selfExePathAlloc`

<details class="declaration-card" open>
<summary>Function – `selfExePath` except allocates the result on the heap</summary>

`selfExePath` except allocates the result on the heap.
Caller owns returned memory.

```zig
pub fn selfExePathAlloc(allocator: Allocator) ![]u8 {
    // Use of max_path_bytes here is justified as, at least on one tested Linux
    // system, readlink will completely fail to return a result larger than
    // PATH_MAX even if given a sufficiently large buffer. This makes it
    // fundamentally impossible to get the selfExePath of a program running in
    // a very deeply nested directory chain in this way.
    // TODO(#4812): Investigate other systems and whether it is possible to get
    // this path by trying larger and larger buffers until one succeeds.
    var buf: [max_path_bytes]u8 = undefined;
    return allocator.dupe(u8, try selfExePath(&buf));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-selfexepath"></a>`selfExePath`

<details class="declaration-card" open>
<summary>Function – Get the path to the current executable</summary>

Get the path to the current executable. Follows symlinks.
If you only need the directory, use selfExeDirPath.
If you only want an open file handle, use openSelfExe.
This function may return an error if the current executable
was deleted after spawning.
Returned value is a slice of out_buffer.
On Windows, the result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On other platforms, the result is an opaque sequence of bytes with no particular encoding.

On Linux, depends on procfs being mounted. If the currently executing binary has
been deleted, the file path looks something like `/a/b/c/exe (deleted)`.
TODO make the return type of this a null terminated pointer

```zig
pub fn selfExePath(out_buffer: []u8) SelfExePathError![]u8 {
    if (is_darwin) {
        // Note that _NSGetExecutablePath() will return "a path" to
        // the executable not a "real path" to the executable.
        var symlink_path_buf: [max_path_bytes:0]u8 = undefined;
        var u32_len: u32 = max_path_bytes + 1; // include the sentinel
        const rc = std.c._NSGetExecutablePath(&symlink_path_buf, &u32_len);
        if (rc != 0) return error.NameTooLong;

        var real_path_buf: [max_path_bytes]u8 = undefined;
        const real_path = std.posix.realpathZ(&symlink_path_buf, &real_path_buf) catch |err| switch (err) {
            error.InvalidWtf8 => unreachable, // Windows-only
            error.NetworkNotFound => unreachable, // Windows-only
            else => |e| return e,
        };
        if (real_path.len > out_buffer.len) return error.NameTooLong;
        const result = out_buffer[0..real_path.len];
        @memcpy(result, real_path);
        return result;
    }
    switch (native_os) {
        .linux, .serenity => return posix.readlinkZ("/proc/self/exe", out_buffer) catch |err| switch (err) {
            error.InvalidUtf8 => unreachable, // WASI-only
            error.InvalidWtf8 => unreachable, // Windows-only
            error.UnsupportedReparsePointType => unreachable, // Windows-only
            error.NetworkNotFound => unreachable, // Windows-only
            else => |e| return e,
        },
        .solaris, .illumos => return posix.readlinkZ("/proc/self/path/a.out", out_buffer) catch |err| switch (err) {
            error.InvalidUtf8 => unreachable, // WASI-only
            error.InvalidWtf8 => unreachable, // Windows-only
            error.UnsupportedReparsePointType => unreachable, // Windows-only
            error.NetworkNotFound => unreachable, // Windows-only
            else => |e| return e,
        },
        .freebsd, .dragonfly => {
            var mib = [4]c_int{ posix.CTL.KERN, posix.KERN.PROC, posix.KERN.PROC_PATHNAME, -1 };
            var out_len: usize = out_buffer.len;
            try posix.sysctl(&mib, out_buffer.ptr, &out_len, null, 0);
            // TODO could this slice from 0 to out_len instead?
            return mem.sliceTo(out_buffer, 0);
        },
        .netbsd => {
            var mib = [4]c_int{ posix.CTL.KERN, posix.KERN.PROC_ARGS, -1, posix.KERN.PROC_PATHNAME };
            var out_len: usize = out_buffer.len;
            try posix.sysctl(&mib, out_buffer.ptr, &out_len, null, 0);
            // TODO could this slice from 0 to out_len instead?
            return mem.sliceTo(out_buffer, 0);
        },
        .openbsd, .haiku => {
            // OpenBSD doesn't support getting the path of a running process, so try to guess it
            if (std.os.argv.len == 0)
                return error.FileNotFound;

            const argv0 = mem.span(std.os.argv[0]);
            if (mem.indexOf(u8, argv0, "/") != null) {
                // argv[0] is a path (relative or absolute): use realpath(3) directly
                var real_path_buf: [max_path_bytes]u8 = undefined;
                const real_path = posix.realpathZ(std.os.argv[0], &real_path_buf) catch |err| switch (err) {
                    error.InvalidWtf8 => unreachable, // Windows-only
                    error.NetworkNotFound => unreachable, // Windows-only
                    else => |e| return e,
                };
                if (real_path.len > out_buffer.len)
                    return error.NameTooLong;
                const result = out_buffer[0..real_path.len];
                @memcpy(result, real_path);
                return result;
            } else if (argv0.len != 0) {
                // argv[0] is not empty (and not a path): search it inside PATH
                const PATH = posix.getenvZ("PATH") orelse return error.FileNotFound;
                var path_it = mem.tokenizeScalar(u8, PATH, path.delimiter);
                while (path_it.next()) |a_path| {
                    var resolved_path_buf: [max_path_bytes - 1:0]u8 = undefined;
                    const resolved_path = std.fmt.bufPrintZ(&resolved_path_buf, "{s}/{s}", .{
                        a_path,
                        std.os.argv[0],
                    }) catch continue;

                    var real_path_buf: [max_path_bytes]u8 = undefined;
                    if (posix.realpathZ(resolved_path, &real_path_buf)) |real_path| {
                        // found a file, and hope it is the right file
                        if (real_path.len > out_buffer.len)
                            return error.NameTooLong;
                        const result = out_buffer[0..real_path.len];
                        @memcpy(result, real_path);
                        return result;
                    } else |_| continue;
                }
            }
            return error.FileNotFound;
        },
        .windows => {
            const image_path_unicode_string = &windows.peb().ProcessParameters.ImagePathName;
            const image_path_name = image_path_unicode_string.Buffer.?[0 .. image_path_unicode_string.Length / 2 :0];

            // If ImagePathName is a symlink, then it will contain the path of the
            // symlink, not the path that the symlink points to. We want the path
            // that the symlink points to, though, so we need to get the realpath.
            const pathname_w = try windows.wToPrefixedFileW(null, image_path_name);
            return std.fs.cwd().realpathW(pathname_w.span(), out_buffer) catch |err| switch (err) {
                error.InvalidWtf8 => unreachable,
                else => |e| return e,
            };
        },
        else => @compileError("std.fs.selfExePath not supported for this target"),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `out\_buffer` | `[]u8` | – | – |
| Return | [`SelfExePathError![]u8`](#error-selfexepatherror) | – | – |

</details>

---

### <a id="fn-selfexedirpathalloc"></a>`selfExeDirPathAlloc`

<details class="declaration-card" open>
<summary>Function – `selfExeDirPath` except allocates the result on the heap</summary>

`selfExeDirPath` except allocates the result on the heap.
Caller owns returned memory.

```zig
pub fn selfExeDirPathAlloc(allocator: Allocator) ![]u8 {
    // Use of max_path_bytes here is justified as, at least on one tested Linux
    // system, readlink will completely fail to return a result larger than
    // PATH_MAX even if given a sufficiently large buffer. This makes it
    // fundamentally impossible to get the selfExeDirPath of a program running
    // in a very deeply nested directory chain in this way.
    // TODO(#4812): Investigate other systems and whether it is possible to get
    // this path by trying larger and larger buffers until one succeeds.
    var buf: [max_path_bytes]u8 = undefined;
    return allocator.dupe(u8, try selfExeDirPath(&buf));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-selfexedirpath"></a>`selfExeDirPath`

<details class="declaration-card" open>
<summary>Function – Get the directory path that contains the current executable</summary>

Get the directory path that contains the current executable.
Returned value is a slice of out_buffer.
On Windows, the result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On other platforms, the result is an opaque sequence of bytes with no particular encoding.

```zig
pub fn selfExeDirPath(out_buffer: []u8) SelfExePathError![]const u8 {
    const self_exe_path = try selfExePath(out_buffer);
    // Assume that the OS APIs return absolute paths, and therefore dirname
    // will not return null.
    return path.dirname(self_exe_path).?;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `out\_buffer` | `[]u8` | – | – |
| Return | [`SelfExePathError![]const u8`](#error-selfexepatherror) | – | – |

</details>

---

### <a id="fn-realpathalloc"></a>`realpathAlloc`

<details class="declaration-card" open>
<summary>Function – `realpath`, except caller must free the returned memory</summary>

`realpath`, except caller must free the returned memory.
On Windows, the result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On other platforms, the result is an opaque sequence of bytes with no particular encoding.
See also `Dir.realpath`.

```zig
pub fn realpathAlloc(allocator: Allocator, pathname: []const u8) ![]u8 {
    // Use of max_path_bytes here is valid as the realpath function does not
    // have a variant that takes an arbitrary-size buffer.
    // TODO(#4812): Consider reimplementing realpath or using the POSIX.1-2008
    // NULL out parameter (GNU's canonicalize_file_name) to handle overelong
    // paths. musl supports passing NULL but restricts the output to PATH_MAX
    // anyway.
    var buf: [max_path_bytes]u8 = undefined;
    return allocator.dupe(u8, try posix.realpath(pathname, &buf));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `Allocator` | – | – |
| `pathname` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

## Error Sets (2)

### <a id="error-openselfexeerror"></a>`OpenSelfExeError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const OpenSelfExeError = posix.OpenError || SelfExePathError || posix.FlockError
```

</details>

---

### <a id="error-selfexepatherror"></a>`SelfExePathError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SelfExePathError = error{
    FileNotFound,
    AccessDenied,
    NameTooLong,
    NotSupported,
    NotDir,
    SymLinkLoop,
    InputOutput,
    FileTooBig,
    IsDir,
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
    NoDevice,
    SystemResources,
    NoSpaceLeft,
    FileSystem,
    BadPathName,
    DeviceBusy,
    SharingViolation,
    PipeBusy,
    NotLink,
    PathAlreadyExists,

    /// On Windows, `\\server` or `\\server\share` was not found.
    NetworkNotFound,
    ProcessNotFound,

    /// On Windows, antivirus software is enabled by default. It can be
    /// disabled, but Windows Update sometimes ignores the user's preference
    /// and re-enables it. When enabled, antivirus software on Windows
    /// intercepts file system operations and makes them significantly slower
    /// in addition to possibly failing with this error code.
    AntivirusInterference,

    /// On Windows, the volume does not contain a recognized file system. File
    /// system drivers might not be loaded, or the volume may be corrupt.
    UnrecognizedVolume,
} || posix.SysCtlError
```

**Errors:**

- `error.FileNotFound`
- `error.AccessDenied`
- `error.NameTooLong`
- `error.NotSupported`
- `error.NotDir`
- `error.SymLinkLoop`
- `error.InputOutput`
- `error.FileTooBig`
- `error.IsDir`
- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`
- `error.NoDevice`
- `error.SystemResources`
- `error.NoSpaceLeft`
- `error.FileSystem`
- `error.BadPathName`
- `error.DeviceBusy`
- `error.SharingViolation`
- `error.PipeBusy`
- `error.NotLink`
- `error.PathAlreadyExists`
- `error.NetworkNotFound` - On Windows, \`\\\\server\` or \`\\\\server\\share\` was not found.
- `error.ProcessNotFound`
- `error.AntivirusInterference` - On Windows, antivirus software is enabled by default. It can be disabled, but Windows Update sometimes ignores the user's preference and re-enables it. When enabled, antivirus software on Windows intercepts file system operations and makes them significantly slower in addition to possibly failing with this error code.
- `error.UnrecognizedVolume` - On Windows, the volume does not contain a recognized file system. File system drivers might not be loaded, or the volume may be corrupt.

</details>

---


