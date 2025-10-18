---
title: "std.tar"
description: "Comprehensive reference for Zig's std.tar module covering binary parsing, archive handling, and structured formats."
navigation:
  title: "Tar"
  icon: i-lucide-package
  badge: "Formats"
badge: "Formats"
category: "formats"
tags:
  - "zig"
  - "standard-library"
  - "formats"
source: "std/tar.md"
githubPath: "std/tar.md"
lastUpdated: "2025-10-11T02:43:50.350Z"
seo:
  title: "std.tar · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.tar module covering binary parsing, archive handling, and structured formats."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/tar.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.tar` |
| Declarations | 7 |
| Breakdown | 1 function · 5 types · 1 module |
| Generated (unix epoch) | 1760148111 |

## Overview

Tar archive is single ordinary file which can contain many files (or
directories, symlinks, ...). It's build by series of blocks each size of 512
bytes. First block of each entry is header which defines type, name, size
permissions and other attributes. Header is followed by series of blocks of
file content, if any that entry has content. Content is padded to the block
size, so next header always starts at block boundary.

This simple format is extended by GNU and POSIX pax extensions to support
file names longer than 256 bytes and additional attributes.

This is not comprehensive tar parser. Here we are only file types needed to
support Zig package manager; normal file, directory, symbolic link. And
subset of attributes: name, size, permissions.

GNU tar reference: https://www.gnu.org/software/tar/manual/html_node/Standard.html
pax reference: https://pubs.opengroup.org/onlinepubs/9699919799/utilities/pax.html#tag_20_92_13

---

## Table of Contents

- [Functions](#functions)
  - [`pipeToFileSystem`](#fn-pipetofilesystem)

- [Types](#types)
  - [`Diagnostics`](#type-diagnostics)
  - [`PipeOptions`](#type-pipeoptions)
  - [`FileKind`](#type-filekind)
  - [`Iterator`](#type-iterator)
  - [`PaxIterator`](#type-paxiterator)

- [Modules](#modules)
  - [`Writer`](#module-writer)

---

## Types (5)

### <a id="type-diagnostics"></a>`Diagnostics`

<details class="declaration-card" open>
<summary>Container – Provide this to receive detailed error messages</summary>

Provide this to receive detailed error messages.
When this is provided, some errors which would otherwise be returned
immediately will instead be added to this structure. The API user must check
the errors in diagnostics to know whether the operation succeeded or failed.

\`\`\`zig
pub const Diagnostics = struct {
    allocator: std.mem.Allocator,
    errors: std.ArrayListUnmanaged(Error) = .empty,

    entries: usize = 0,
    root_dir: []const u8 = "",

    pub const Error = union(enum) {
        unable_to_create_sym_link: struct {
            code: anyerror,
            file_name: []const u8,
            link_name: []const u8,
        },
        unable_to_create_file: struct {
            code: anyerror,
            file_name: []const u8,
        },
        unsupported_file_type: struct {
            file_name: []const u8,
            file_type: Header.Kind,
        },
        components_outside_stripped_prefix: struct {
            file_name: []const u8,
        },
    };

    fn findRoot(d: *Diagnostics, kind: FileKind, path: []const u8) !void {
        if (path.len == 0) return;

        d.entries += 1;
        const root_dir = rootDir(path, kind);
        if (d.entries == 1) {
            d.root_dir = try d.allocator.dupe(u8, root_dir);
            return;
        }
        if (d.root_dir.len == 0 or std.mem.eql(u8, root_dir, d.root_dir))
            return;
        d.allocator.free(d.root_dir);
        d.root_dir = "";
    }

    // Returns root dir of the path, assumes non empty path.
    fn rootDir(path: []const u8, kind: FileKind) []const u8 {
        const start_index: usize = if (path[0] == '/') 1 else 0;
        const end_index: usize = if (path[path.len - 1] == '/') path.len - 1 else path.len;
        const buf = path[start_index..end_index];
        if (std.mem.indexOfScalarPos(u8, buf, 0, '/')) |idx| {
            return buf[0..idx];
        }

        return switch (kind) {
            .file => "",
            .sym_link => "",
            .directory => buf,
        };
    }

    test rootDir {
        const expectEqualStrings = testing.expectEqualStrings;
        try expectEqualStrings("", rootDir("a", .file));
        try expectEqualStrings("a", rootDir("a", .directory));
        try expectEqualStrings("b", rootDir("b", .directory));
        try expectEqualStrings("c", rootDir("/c", .directory));
        try expectEqualStrings("d", rootDir("/d/", .directory));
        try expectEqualStrings("a", rootDir("a/b", .directory));
        try expectEqualStrings("a", rootDir("a/b", .file));
        try expectEqualStrings("a", rootDir("a/b/c", .directory));
    }

    pub fn deinit(d: *Diagnostics) void {
        for (d.errors.items) |item| {
            switch (item) {
                .unable_to_create_sym_link => |info| {
                    d.allocator.free(info.file_name);
                    d.allocator.free(info.link_name);
                },
                .unable_to_create_file => |info| {
                    d.allocator.free(info.file_name);
                },
                .unsupported_file_type => |info| {
                    d.allocator.free(info.file_name);
                },
                .components_outside_stripped_prefix => |info| {
                    d.allocator.free(info.file_name);
                },
            }
        }
        d.errors.deinit(d.allocator);
        d.allocator.free(d.root_dir);
        d.* = undefined;
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `allocator` | `std.mem.Allocator` | – | |
| `errors` | `std.ArrayListUnmanaged(Error)` | `.empty` | |
| `entries` | `usize` | `0` | |
| `root_dir` | `[]const u8` | `""` | |

</details>

---

### <a id="type-pipeoptions"></a>`PipeOptions`

<details class="declaration-card" open>
<summary>Container – pipeToFileSystem options</summary>

pipeToFileSystem options

\`\`\`zig
pub const PipeOptions = struct {
    /// Number of directory levels to skip when extracting files.
    strip_components: u32 = 0,
    /// How to handle the "mode" property of files from within the tar file.
    mode_mode: ModeMode = .executable_bit_only,
    /// Prevents creation of empty directories.
    exclude_empty_directories: bool = false,
    /// Collects error messages during unpacking
    diagnostics: ?*Diagnostics = null,

    pub const ModeMode = enum {
        /// The mode from the tar file is completely ignored. Files are created
        /// with the default mode when creating files.
        ignore,
        /// The mode from the tar file is inspected for the owner executable bit
        /// only. This bit is copied to the group and other executable bits.
        /// Other bits of the mode are left as the default when creating files.
        executable_bit_only,
    };
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `strip_components` | `u32` | `0` | Number of directory levels to skip when extracting files. |
| `mode_mode` | `ModeMode` | `.executable\_bit\_only` | How to handle the "mode" property of files from within the tar file. |
| `exclude_empty_directories` | `bool` | `false` | Prevents creation of empty directories. |
| `diagnostics` | [`?*Diagnostics`](#type-diagnostics) | `null` | Collects error messages during unpacking |

</details>

---

### <a id="type-filekind"></a>`FileKind`

<details class="declaration-card" open>
<summary>Container – Type of the file returned by iterator `next` method</summary>

Type of the file returned by iterator `next` method.

\`\`\`zig
pub const FileKind = enum {
    directory,
    sym_link,
    file,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `directory` |  |
| `sym_link` |  |
| `file` |  |

</details>

---

### <a id="type-iterator"></a>`Iterator`

<details class="declaration-card" open>
<summary>Container – Iterator over entries in the tar file represented by reader</summary>

Iterator over entries in the tar file represented by reader.

\`\`\`zig
pub const Iterator = struct {
    reader: *std.Io.Reader,
    diagnostics: ?*Diagnostics = null,

    // buffers for heeader and file attributes
    header_buffer: [Header.SIZE]u8 = undefined,
    file_name_buffer: []u8,
    link_name_buffer: []u8,

    // bytes of padding to the end of the block
    padding: usize = 0,
    // not consumed bytes of file from last next iteration
    unread_file_bytes: u64 = 0,

    /// Options for iterator.
    /// Buffers should be provided by the caller.
    pub const Options = struct {
        /// Use a buffer with length `std.fs.max_path_bytes` to match file system capabilities.
        file_name_buffer: []u8,
        /// Use a buffer with length `std.fs.max_path_bytes` to match file system capabilities.
        link_name_buffer: []u8,
        /// Collects error messages during unpacking
        diagnostics: ?*Diagnostics = null,
    };

    /// Iterates over files in tar archive.
    /// `next` returns each file in tar archive.
    pub fn init(reader: *std.Io.Reader, options: Options) Iterator {
        return .{
            .reader = reader,
            .diagnostics = options.diagnostics,
            .file_name_buffer = options.file_name_buffer,
            .link_name_buffer = options.link_name_buffer,
        };
    }

    pub const File = struct {
        name: []const u8, // name of file, symlink or directory
        link_name: []const u8, // target name of symlink
        size: u64 = 0, // size of the file in bytes
        mode: u32 = 0,
        kind: FileKind = .file,
    };

    fn readHeader(self: *Iterator) !?Header {
        if (self.padding > 0) {
            try self.reader.discardAll(self.padding);
        }
        const n = try self.reader.readSliceShort(&self.header_buffer);
        if (n == 0) return null;
        if (n < Header.SIZE) return error.UnexpectedEndOfStream;
        const header = Header{ .bytes = self.header_buffer[0..Header.SIZE] };
        if (try header.checkChksum() == 0) return null;
        return header;
    }

    fn readString(self: *Iterator, size: usize, buffer: []u8) ![]const u8 {
        if (size > buffer.len) return error.TarInsufficientBuffer;
        const buf = buffer[0..size];
        try self.reader.readSliceAll(buf);
        return nullStr(buf);
    }

    fn newFile(self: *Iterator) File {
        return .{
            .name = self.file_name_buffer[0..0],
            .link_name = self.link_name_buffer[0..0],
        };
    }

    // Number of padding bytes in the last file block.
    fn blockPadding(size: u64) usize {
        const block_rounded = std.mem.alignForward(u64, size, Header.SIZE); // size rounded to te block boundary
        return @intCast(block_rounded - size);
    }

    /// Iterates through the tar archive as if it is a series of files.
    /// Internally, the tar format often uses entries (header with optional
    /// content) to add meta data that describes the next file. These
    /// entries should not normally be visible to the outside. As such, this
    /// loop iterates through one or more entries until it collects a all
    /// file attributes.
    pub fn next(self: *Iterator) !?File {
        if (self.unread_file_bytes > 0) {
            // If file content was not consumed by caller
            try self.reader.discardAll64(self.unread_file_bytes);
            self.unread_file_bytes = 0;
        }
        var file: File = self.newFile();

        while (try self.readHeader()) |header| {
            const kind = header.kind();
            const size: u64 = try header.size();
            self.padding = blockPadding(size);

            switch (kind) {
                // File types to return upstream
                .directory, .normal, .symbolic_link => {
                    file.kind = switch (kind) {
                        .directory => .directory,
                        .normal => .file,
                        .symbolic_link => .sym_link,
                        else => unreachable,
                    };
                    file.mode = try header.mode();

                    // set file attributes if not already set by prefix/extended headers
                    if (file.size == 0) {
                        file.size = size;
                    }
                    if (file.link_name.len == 0) {
                        file.link_name = try header.linkName(self.link_name_buffer);
                    }
                    if (file.name.len == 0) {
                        file.name = try header.fullName(self.file_name_buffer);
                    }

                    self.padding = blockPadding(file.size);
                    self.unread_file_bytes = file.size;
                    return file;
                },
                // Prefix header types
                .gnu_long_name => {
                    file.name = try self.readString(@intCast(size), self.file_name_buffer);
                },
                .gnu_long_link => {
                    file.link_name = try self.readString(@intCast(size), self.link_name_buffer);
                },
                .extended_header => {
                    // Use just attributes from last extended header.
                    file = self.newFile();

                    var rdr: PaxIterator = .{
                        .reader = self.reader,
                        .size = @intCast(size),
                    };
                    while (try rdr.next()) |attr| {
                        switch (attr.kind) {
                            .path => {
                                file.name = try attr.value(self.file_name_buffer);
                            },
                            .linkpath => {
                                file.link_name = try attr.value(self.link_name_buffer);
                            },
                            .size => {
                                var buf: [pax_max_size_attr_len]u8 = undefined;
                                file.size = try std.fmt.parseInt(u64, try attr.value(&buf), 10);
                            },
                        }
                    }
                },
                // Ignored header type
                .global_extended_header => {
                    self.reader.discardAll64(size) catch return error.TarHeadersTooBig;
                },
                // All other are unsupported header types
                else => {
                    const d = self.diagnostics orelse return error.TarUnsupportedHeader;
                    try d.errors.append(d.allocator, .{ .unsupported_file_type = .{
                        .file_name = try d.allocator.dupe(u8, header.name()),
                        .file_type = kind,
                    } });
                    if (kind == .gnu_sparse) {
                        try self.skipGnuSparseExtendedHeaders(header);
                    }
                    self.reader.discardAll64(size) catch return error.TarHeadersTooBig;
                },
            }
        }
        return null;
    }

    pub fn streamRemaining(it: *Iterator, file: File, w: *std.Io.Writer) std.Io.Reader.StreamError!void {
        try it.reader.streamExact64(w, file.size);
        it.unread_file_bytes = 0;
    }

    fn skipGnuSparseExtendedHeaders(self: *Iterator, header: Header) !void {
        var is_extended = header.bytes[482] > 0;
        while (is_extended) {
            var buf: [Header.SIZE]u8 = undefined;
            try self.reader.readSliceAll(&buf);
            is_extended = buf[504] > 0;
        }
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `reader` | `*std.Io.Reader` | – | |
| `diagnostics` | [`?*Diagnostics`](#type-diagnostics) | `null` | |
| `header_buffer` | `[Header.SIZE]u8` | `undefined` | |
| `file_name_buffer` | `[]u8` | – | |
| `link_name_buffer` | `[]u8` | – | |
| `padding` | `usize` | `0` | |
| `unread_file_bytes` | `u64` | `0` | |

</details>

---

### <a id="type-paxiterator"></a>`PaxIterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const PaxIterator = struct {
    size: usize, // cumulative size of all pax attributes
    reader: *std.Io.Reader,

    const Self = @This();

    const Attribute = struct {
        kind: PaxAttributeKind,
        len: usize, // length of the attribute value
        reader: *std.Io.Reader, // reader positioned at value start

        // Copies pax attribute value into destination buffer.
        // Must be called with destination buffer of size at least Attribute.len.
        pub fn value(self: Attribute, dst: []u8) ![]const u8 {
            if (self.len > dst.len) return error.TarInsufficientBuffer;
            // assert(self.len <= dst.len);
            const buf = dst[0..self.len];
            const n = try self.reader.readSliceShort(buf);
            if (n < self.len) return error.UnexpectedEndOfStream;
            try validateAttributeEnding(self.reader);
            if (hasNull(buf)) return error.PaxNullInValue;
            return buf;
        }
    };

    // Iterates over pax attributes. Returns known only known attributes.
    // Caller has to call value in Attribute, to advance reader across value.
    pub fn next(self: *Self) !?Attribute {
        // Pax extended header consists of one or more attributes, each constructed as follows:
        // "%d %s=%s\n", <length>, <keyword>, <value>
        while (self.size > 0) {
            const length_buf = try self.reader.takeSentinel(' ');
            const length = try std.fmt.parseInt(usize, length_buf, 10); // record length in bytes

            const keyword = try self.reader.takeSentinel('=');
            if (hasNull(keyword)) return error.PaxNullInKeyword;

            // calculate value_len
            const value_start = length_buf.len + keyword.len + 2; // 2 separators
            if (length < value_start + 1 or self.size < length) return error.UnexpectedEndOfStream;
            const value_len = length - value_start - 1; // \n separator at end
            self.size -= length;

            const kind: PaxAttributeKind = if (eql(keyword, "path"))
                .path
            else if (eql(keyword, "linkpath"))
                .linkpath
            else if (eql(keyword, "size"))
                .size
            else {
                try self.reader.discardAll(value_len);
                try validateAttributeEnding(self.reader);
                continue;
            };
            if (kind == .size and value_len > pax_max_size_attr_len) {
                return error.PaxSizeAttrOverflow;
            }
            return .{
                .kind = kind,
                .len = value_len,
                .reader = self.reader,
            };
        }

        return null;
    }

    fn eql(a: []const u8, b: []const u8) bool {
        return std.mem.eql(u8, a, b);
    }

    fn hasNull(str: []const u8) bool {
        return (std.mem.indexOfScalar(u8, str, 0)) != null;
    }

    // Checks that each record ends with new line.
    fn validateAttributeEnding(reader: *std.Io.Reader) !void {
        if (try reader.takeByte() != '\n') return error.PaxInvalidAttributeEnd;
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `size` | `usize` | – | |
| `reader` | `*std.Io.Reader` | – | |

</details>

---

## Modules (1)

### <a id="module-writer"></a>`Writer`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const Writer = @import("tar/Writer.zig")
\`\`\`

> **Module:** `tar/Writer.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/tar/Writer.zig)

</details>

---

## Functions (1)

### <a id="fn-pipetofilesystem"></a>`pipeToFileSystem`

<details class="declaration-card" open>
<summary>Function – Saves tar file content to the file systems</summary>

Saves tar file content to the file systems.

\`\`\`zig
pub fn pipeToFileSystem(dir: std.fs.Dir, reader: *std.Io.Reader, options: PipeOptions) !void {
    var file_name_buffer: [std.fs.max_path_bytes]u8 = undefined;
    var link_name_buffer: [std.fs.max_path_bytes]u8 = undefined;
    var file_contents_buffer: [1024]u8 = undefined;
    var it: Iterator = .init(reader, .{
        .file_name_buffer = &file_name_buffer,
        .link_name_buffer = &link_name_buffer,
        .diagnostics = options.diagnostics,
    });

    while (try it.next()) |file| {
        const file_name = stripComponents(file.name, options.strip_components);
        if (file_name.len == 0 and file.kind != .directory) {
            const d = options.diagnostics orelse return error.TarComponentsOutsideStrippedPrefix;
            try d.errors.append(d.allocator, .{ .components_outside_stripped_prefix = .{
                .file_name = try d.allocator.dupe(u8, file.name),
            } });
            continue;
        }
        if (options.diagnostics) |d| {
            try d.findRoot(file.kind, file_name);
        }

        switch (file.kind) {
            .directory => {
                if (file_name.len > 0 and !options.exclude_empty_directories) {
                    try dir.makePath(file_name);
                }
            },
            .file => {
                if (createDirAndFile(dir, file_name, fileMode(file.mode, options))) |fs_file| {
                    defer fs_file.close();
                    var file_writer = fs_file.writer(&file_contents_buffer);
                    try it.streamRemaining(file, &file_writer.interface);
                    try file_writer.interface.flush();
                } else |err| {
                    const d = options.diagnostics orelse return err;
                    try d.errors.append(d.allocator, .{ .unable_to_create_file = .{
                        .code = err,
                        .file_name = try d.allocator.dupe(u8, file_name),
                    } });
                }
            },
            .sym_link => {
                const link_name = file.link_name;
                createDirAndSymlink(dir, link_name, file_name) catch |err| {
                    const d = options.diagnostics orelse return error.UnableToCreateSymLink;
                    try d.errors.append(d.allocator, .{ .unable_to_create_sym_link = .{
                        .code = err,
                        .file_name = try d.allocator.dupe(u8, file_name),
                        .link_name = try d.allocator.dupe(u8, link_name),
                    } });
                };
            },
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir` | `std.fs.Dir` | – | – |
| `reader` | `*std.Io.Reader` | – | – |
| `options` | [`PipeOptions`](#type-pipeoptions) | – | – |
| Return | `void` | – | – |

</details>

---
