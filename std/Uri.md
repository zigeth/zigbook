# std.Uri

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.Uri` |
| Declarations | 15 |
| Breakdown | 10 functions · 1 type · 2 constants · 2 error sets |
| Generated (unix epoch) | 1760148100 |

## Overview

Uniform Resource Identifier (URI) parsing roughly adhering to <https://tools.ietf.org/html/rfc3986>.
Does not do perfect grammar and character class checking, but should be robust against URIs in the wild.

---

## Table of Contents

- [Functions](#functions)
  - [`getHost`](#fn-gethost)
  - [`getHostAlloc`](#fn-gethostalloc)
  - [`percentDecodeBackwards`](#fn-percentdecodebackwards)
  - [`percentDecodeInPlace`](#fn-percentdecodeinplace)
  - [`parseAfterScheme`](#fn-parseafterscheme)
  - [`format`](#fn-format)
  - [`writeToStream`](#fn-writetostream)
  - [`fmt`](#fn-fmt)
  - [`parse`](#fn-parse)
  - [`resolveInPlace`](#fn-resolveinplace)

- [Types](#types)
  - [`Format`](#type-format)

- [Constants](#constants)
  - [`host\_name\_max`](#const-host-name-max)
  - [`Component`](#const-component)

- [Error Sets](#error-sets)
  - [`ParseError`](#error-parseerror)
  - [`ResolveInPlaceError`](#error-resolveinplaceerror)

---

## Types (1)

### <a id="type-format"></a>`Format`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const Format = struct {
    uri: *const Uri,
    flags: Flags = .{},

    pub const Flags = struct {
        /// When true, include the scheme part of the URI.
        scheme: bool = false,
        /// When true, include the user and password part of the URI. Ignored if `authority` is false.
        authentication: bool = false,
        /// When true, include the authority part of the URI.
        authority: bool = false,
        /// When true, include the path part of the URI.
        path: bool = false,
        /// When true, include the query part of the URI. Ignored when `path` is false.
        query: bool = false,
        /// When true, include the fragment part of the URI. Ignored when `path` is false.
        fragment: bool = false,
        /// When true, include the port part of the URI. Ignored when `port` is null.
        port: bool = true,

        pub const all: Flags = .{
            .scheme = true,
            .authentication = true,
            .authority = true,
            .path = true,
            .query = true,
            .fragment = true,
            .port = true,
        };
    };

    pub fn default(f: Format, writer: *Writer) Writer.Error!void {
        return writeToStream(f.uri, writer, f.flags);
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `uri` | `*const Uri` | – | |
| `flags` | `Flags` | `.{}` | |

</details>

---

## Constants (2)

### <a id="const-host-name-max"></a>`host_name_max`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const host_name_max = 255
\`\`\`

</details>

---

### <a id="const-component"></a>`Component`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const Component = union(enum) {
    /// Invalid characters in this component must be percent encoded
    /// before being printed as part of a URI.
    raw: []const u8,
    /// This component is already percent-encoded, it can be printed
    /// directly as part of a URI.
    percent_encoded: []const u8,

    pub const empty: Component = .{ .percent_encoded = "" };

    pub fn isEmpty(component: Component) bool {
        return switch (component) {
            .raw, .percent_encoded => |string| string.len == 0,
        };
    }

    /// Returned value may point into `buffer` or be the original string.
    pub fn toRaw(component: Component, buffer: []u8) error{NoSpaceLeft}![]const u8 {
        return switch (component) {
            .raw => |raw| raw,
            .percent_encoded => |percent_encoded| if (std.mem.indexOfScalar(u8, percent_encoded, '%')) |_|
                try std.fmt.bufPrint(buffer, "{f}", .{std.fmt.alt(component, .formatRaw)})
            else
                percent_encoded,
        };
    }

    /// Allocates the result with `arena` only if needed, so the result should not be freed.
    pub fn toRawMaybeAlloc(component: Component, arena: Allocator) Allocator.Error![]const u8 {
        return switch (component) {
            .raw => |raw| raw,
            .percent_encoded => |percent_encoded| if (std.mem.indexOfScalar(u8, percent_encoded, '%')) |_|
                try std.fmt.allocPrint(arena, "{f}", .{std.fmt.alt(component, .formatRaw)})
            else
                percent_encoded,
        };
    }

    pub fn formatRaw(component: Component, w: *Writer) Writer.Error!void {
        switch (component) {
            .raw => |raw| try w.writeAll(raw),
            .percent_encoded => |percent_encoded| {
                var start: usize = 0;
                var index: usize = 0;
                while (std.mem.indexOfScalarPos(u8, percent_encoded, index, '%')) |percent| {
                    index = percent + 1;
                    if (percent_encoded.len - index < 2) continue;
                    const percent_encoded_char =
                        std.fmt.parseInt(u8, percent_encoded[index..][0..2], 16) catch continue;
                    try w.print("{s}{c}", .{
                        percent_encoded[start..percent],
                        percent_encoded_char,
                    });
                    start = percent + 3;
                    index = percent + 3;
                }
                try w.writeAll(percent_encoded[start..]);
            },
        }
    }

    pub fn formatEscaped(component: Component, w: *Writer) Writer.Error!void {
        switch (component) {
            .raw => |raw| try percentEncode(w, raw, isUnreserved),
            .percent_encoded => |percent_encoded| try w.writeAll(percent_encoded),
        }
    }

    pub fn formatUser(component: Component, w: *Writer) Writer.Error!void {
        switch (component) {
            .raw => |raw| try percentEncode(w, raw, isUserChar),
            .percent_encoded => |percent_encoded| try w.writeAll(percent_encoded),
        }
    }

    pub fn formatPassword(component: Component, w: *Writer) Writer.Error!void {
        switch (component) {
            .raw => |raw| try percentEncode(w, raw, isPasswordChar),
            .percent_encoded => |percent_encoded| try w.writeAll(percent_encoded),
        }
    }

    pub fn formatHost(component: Component, w: *Writer) Writer.Error!void {
        switch (component) {
            .raw => |raw| try percentEncode(w, raw, isHostChar),
            .percent_encoded => |percent_encoded| try w.writeAll(percent_encoded),
        }
    }

    pub fn formatPath(component: Component, w: *Writer) Writer.Error!void {
        switch (component) {
            .raw => |raw| try percentEncode(w, raw, isPathChar),
            .percent_encoded => |percent_encoded| try w.writeAll(percent_encoded),
        }
    }

    pub fn formatQuery(component: Component, w: *Writer) Writer.Error!void {
        switch (component) {
            .raw => |raw| try percentEncode(w, raw, isQueryChar),
            .percent_encoded => |percent_encoded| try w.writeAll(percent_encoded),
        }
    }

    pub fn formatFragment(component: Component, w: *Writer) Writer.Error!void {
        switch (component) {
            .raw => |raw| try percentEncode(w, raw, isFragmentChar),
            .percent_encoded => |percent_encoded| try w.writeAll(percent_encoded),
        }
    }

    pub fn percentEncode(w: *Writer, raw: []const u8, comptime isValidChar: fn (u8) bool) Writer.Error!void {
        var start: usize = 0;
        for (raw, 0..) |char, index| {
            if (isValidChar(char)) continue;
            try w.print("{s}%{X:0>2}", .{ raw[start..index], char });
            start = index + 1;
        }
        try w.writeAll(raw[start..]);
    }
}
\`\`\`

</details>

---

## Functions (10)

### <a id="fn-gethost"></a>`getHost`

<details class="declaration-card" open>
<summary>Function – Returned value may point into `buffer` or be the original string</summary>

Returned value may point into `buffer` or be the original string.

Suggested buffer length: `host_name_max`.

See also:
* `getHostAlloc`

\`\`\`zig
pub fn getHost(uri: Uri, buffer: []u8) error{ UriMissingHost, UriHostTooLong }![]const u8 {
    const component = uri.host orelse return error.UriMissingHost;
    return component.toRaw(buffer) catch |err| switch (err) {
        error.NoSpaceLeft => return error.UriHostTooLong,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uri` | `Uri` | – | – |
| `buffer` | `[]u8` | – | – |
| Return | `error{ UriMissingHost, UriHostTooLong }![]const u8` | – | – |

**Possible Errors:**

- `error.UriMissingHost`
- `error.UriHostTooLong`

</details>

---

### <a id="fn-gethostalloc"></a>`getHostAlloc`

<details class="declaration-card" open>
<summary>Function – Returned value may point into `buffer` or be the original string</summary>

Returned value may point into `buffer` or be the original string.

See also:
* `getHost`

\`\`\`zig
pub fn getHostAlloc(uri: Uri, arena: Allocator) error{ UriMissingHost, UriHostTooLong, OutOfMemory }![]const u8 {
    const component = uri.host orelse return error.UriMissingHost;
    const result = try component.toRawMaybeAlloc(arena);
    if (result.len > host_name_max) return error.UriHostTooLong;
    return result;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uri` | `Uri` | – | – |
| `arena` | `Allocator` | – | – |
| Return | See note[^fn-gethostalloc-return-0] | – | – |


[^fn-gethostalloc-return-0]:
    Return type for `getHostAlloc`:

    \`\`\`zig
    error{ UriMissingHost, UriHostTooLong, OutOfMemory }![]const u8
    \`\`\`

**Possible Errors:**

- `error.UriMissingHost`
- `error.UriHostTooLong`
- `error.OutOfMemory`

</details>

---

### <a id="fn-percentdecodebackwards"></a>`percentDecodeBackwards`

<details class="declaration-card" open>
<summary>Function – Percent decodes all %XX where XX is a valid hex number</summary>

Percent decodes all %XX where XX is a valid hex number.
`output` may alias `input` if `output.ptr <= input.ptr`.
Mutates and returns a subslice of `output`.

\`\`\`zig
pub fn percentDecodeBackwards(output: []u8, input: []const u8) []u8 {
    var input_index = input.len;
    var output_index = output.len;
    while (input_index > 0) {
        if (input_index >= 3) {
            const maybe_percent_encoded = input[input_index - 3 ..][0..3];
            if (maybe_percent_encoded[0] == '%') {
                if (std.fmt.parseInt(u8, maybe_percent_encoded[1..], 16)) |percent_encoded_char| {
                    input_index -= maybe_percent_encoded.len;
                    output_index -= 1;
                    output[output_index] = percent_encoded_char;
                    continue;
                } else |_| {}
            }
        }
        input_index -= 1;
        output_index -= 1;
        output[output_index] = input[input_index];
    }
    return output[output_index..];
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `output` | `[]u8` | – | – |
| `input` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-percentdecodeinplace"></a>`percentDecodeInPlace`

<details class="declaration-card" open>
<summary>Function – Percent decodes all %XX where XX is a valid hex number</summary>

Percent decodes all %XX where XX is a valid hex number.
Mutates and returns a subslice of `buffer`.

\`\`\`zig
pub fn percentDecodeInPlace(buffer: []u8) []u8 {
    return percentDecodeBackwards(buffer, buffer);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buffer` | `[]u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-parseafterscheme"></a>`parseAfterScheme`

<details class="declaration-card" open>
<summary>Function – Parses the URI or returns an error</summary>

Parses the URI or returns an error. This function is not compliant, but is required to parse
some forms of URIs in the wild, such as HTTP Location headers.
The return value will contain strings pointing into the original `text`.
Each component that is provided, will be non-`null`.

\`\`\`zig
pub fn parseAfterScheme(scheme: []const u8, text: []const u8) ParseError!Uri {
    var uri: Uri = .{ .scheme = scheme, .path = undefined };
    var i: usize = 0;

    if (std.mem.startsWith(u8, text, "//")) a: {
        i = std.mem.indexOfAnyPos(u8, text, 2, &authority_sep) orelse text.len;
        const authority = text[2..i];
        if (authority.len == 0) {
            if (!std.mem.startsWith(u8, text[2..], "/")) return error.InvalidFormat;
            break :a;
        }

        var start_of_host: usize = 0;
        if (std.mem.indexOf(u8, authority, "@")) |index| {
            start_of_host = index + 1;
            const user_info = authority[0..index];

            if (std.mem.indexOf(u8, user_info, ":")) |idx| {
                uri.user = .{ .percent_encoded = user_info[0..idx] };
                if (idx < user_info.len - 1) { // empty password is also "no password"
                    uri.password = .{ .percent_encoded = user_info[idx + 1 ..] };
                }
            } else {
                uri.user = .{ .percent_encoded = user_info };
                uri.password = null;
            }
        }

        // only possible if uri consists of only `userinfo@`
        if (start_of_host >= authority.len) break :a;

        var end_of_host: usize = authority.len;

        // if  we see `]` first without `@`
        if (authority[start_of_host] == ']') {
            return error.InvalidFormat;
        }

        if (authority.len > start_of_host and authority[start_of_host] == '[') { // IPv6
            end_of_host = std.mem.lastIndexOf(u8, authority, "]") orelse return error.InvalidFormat;
            end_of_host += 1;

            if (std.mem.lastIndexOf(u8, authority, ":")) |index| {
                if (index >= end_of_host) { // if not part of the V6 address field
                    end_of_host = @min(end_of_host, index);
                    uri.port = std.fmt.parseInt(u16, authority[index + 1 ..], 10) catch return error.InvalidPort;
                }
            }
        } else if (std.mem.lastIndexOf(u8, authority, ":")) |index| {
            if (index >= start_of_host) { // if not part of the userinfo field
                end_of_host = @min(end_of_host, index);
                uri.port = std.fmt.parseInt(u16, authority[index + 1 ..], 10) catch return error.InvalidPort;
            }
        }

        if (start_of_host >= end_of_host) return error.InvalidFormat;
        uri.host = .{ .percent_encoded = authority[start_of_host..end_of_host] };
    }

    const path_start = i;
    i = std.mem.indexOfAnyPos(u8, text, path_start, &path_sep) orelse text.len;
    uri.path = .{ .percent_encoded = text[path_start..i] };

    if (std.mem.startsWith(u8, text[i..], "?")) {
        const query_start = i + 1;
        i = std.mem.indexOfScalarPos(u8, text, query_start, '#') orelse text.len;
        uri.query = .{ .percent_encoded = text[query_start..i] };
    }

    if (std.mem.startsWith(u8, text[i..], "#")) {
        uri.fragment = .{ .percent_encoded = text[i + 1 ..] };
    }

    return uri;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `scheme` | `[]const u8` | – | – |
| `text` | `[]const u8` | – | – |
| Return | [`ParseError!Uri`](#error-parseerror) | – | – |

</details>

---

### <a id="fn-format"></a>`format`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn format(uri: *const Uri, writer: *Writer) Writer.Error!void {
    return writeToStream(uri, writer, .all);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uri` | `*const Uri` | – | – |
| `writer` | `*Writer` | – | – |
| Return | `Writer.Error!void` | – | – |

</details>

---

### <a id="fn-writetostream"></a>`writeToStream`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn writeToStream(uri: *const Uri, writer: *Writer, flags: Format.Flags) Writer.Error!void {
    if (flags.scheme) {
        try writer.print("{s}:", .{uri.scheme});
        if (flags.authority and uri.host != null) {
            try writer.writeAll("//");
        }
    }
    if (flags.authority) {
        if (flags.authentication and uri.host != null) {
            if (uri.user) |user| {
                try user.formatUser(writer);
                if (uri.password) |password| {
                    try writer.writeByte(':');
                    try password.formatPassword(writer);
                }
                try writer.writeByte('@');
            }
        }
        if (uri.host) |host| {
            try host.formatHost(writer);
            if (flags.port) {
                if (uri.port) |port| try writer.print(":{d}", .{port});
            }
        }
    }
    if (flags.path) {
        const uri_path: Component = if (uri.path.isEmpty()) .{ .percent_encoded = "/" } else uri.path;
        try uri_path.formatPath(writer);
        if (flags.query) {
            if (uri.query) |query| {
                try writer.writeByte('?');
                try query.formatQuery(writer);
            }
        }
        if (flags.fragment) {
            if (uri.fragment) |fragment| {
                try writer.writeByte('#');
                try fragment.formatFragment(writer);
            }
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uri` | `*const Uri` | – | – |
| `writer` | `*Writer` | – | – |
| `flags` | `Format.Flags` | – | – |
| Return | `Writer.Error!void` | – | – |

</details>

---

### <a id="fn-fmt"></a>`fmt`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn fmt(uri: *const Uri, flags: Format.Flags) std.fmt.Formatter(Format, Format.default) {
    return .{ .data = .{ .uri = uri, .flags = flags } };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uri` | `*const Uri` | – | – |
| `flags` | `Format.Flags` | – | – |
| Return | `std.fmt.Formatter(Format, Format.default)` | – | – |

</details>

---

### <a id="fn-parse"></a>`parse`

<details class="declaration-card" open>
<summary>Function – The return value will contain strings pointing into the original `text`</summary>

The return value will contain strings pointing into the original `text`.
Each component that is provided will be non-`null`.

\`\`\`zig
pub fn parse(text: []const u8) ParseError!Uri {
    const end = for (text, 0..) |byte, i| {
        if (!isSchemeChar(byte)) break i;
    } else text.len;
    // After the scheme, a ':' must appear.
    if (end >= text.len) return error.InvalidFormat;
    if (text[end] != ':') return error.UnexpectedCharacter;
    return parseAfterScheme(text[0..end], text[end + 1 ..]);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `text` | `[]const u8` | – | – |
| Return | [`ParseError!Uri`](#error-parseerror) | – | – |

</details>

---

### <a id="fn-resolveinplace"></a>`resolveInPlace`

<details class="declaration-card" open>
<summary>Function – Resolves a URI against a base URI, conforming to</summary>

Resolves a URI against a base URI, conforming to
[RFC 3986, Section 5](https://www.rfc-editor.org/rfc/rfc3986#section-5)

Assumes new location is already copied to the beginning of `aux_buf.*`.
Parses that new location as a URI, and then resolves the path in place.

If a merge needs to take place, the newly constructed path will be stored
in `aux_buf.*` just after the copied location, and `aux_buf.*` will be
modified to only contain the remaining unused space.

\`\`\`zig
pub fn resolveInPlace(base: Uri, new_len: usize, aux_buf: *[]u8) ResolveInPlaceError!Uri {
    const new = aux_buf.*[0..new_len];
    const new_parsed = parse(new) catch |err| (parseAfterScheme("", new) catch return err);
    aux_buf.* = aux_buf.*[new_len..];
    // As you can see above, `new` is not a const pointer.
    const new_path: []u8 = @constCast(new_parsed.path.percent_encoded);

    if (new_parsed.scheme.len > 0) return .{
        .scheme = new_parsed.scheme,
        .user = new_parsed.user,
        .password = new_parsed.password,
        .host = new_parsed.host,
        .port = new_parsed.port,
        .path = remove_dot_segments(new_path),
        .query = new_parsed.query,
        .fragment = new_parsed.fragment,
    };

    if (new_parsed.host) |host| return .{
        .scheme = base.scheme,
        .user = new_parsed.user,
        .password = new_parsed.password,
        .host = host,
        .port = new_parsed.port,
        .path = remove_dot_segments(new_path),
        .query = new_parsed.query,
        .fragment = new_parsed.fragment,
    };

    const path, const query = if (new_path.len == 0) .{
        base.path,
        new_parsed.query orelse base.query,
    } else if (new_path[0] == '/') .{
        remove_dot_segments(new_path),
        new_parsed.query,
    } else .{
        try merge_paths(base.path, new_path, aux_buf),
        new_parsed.query,
    };

    return .{
        .scheme = base.scheme,
        .user = base.user,
        .password = base.password,
        .host = base.host,
        .port = base.port,
        .path = path,
        .query = query,
        .fragment = new_parsed.fragment,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `base` | `Uri` | – | – |
| `new\_len` | `usize` | – | – |
| `aux\_buf` | `*[]u8` | – | – |
| Return | [`ResolveInPlaceError!Uri`](#error-resolveinplaceerror) | – | – |

</details>

---

## Error Sets (2)

### <a id="error-parseerror"></a>`ParseError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

\`\`\`zig
pub const ParseError = error{ UnexpectedCharacter, InvalidFormat, InvalidPort }
\`\`\`

**Errors:**

- `error.UnexpectedCharacter`
- `error.InvalidFormat`
- `error.InvalidPort`

</details>

---

### <a id="error-resolveinplaceerror"></a>`ResolveInPlaceError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

\`\`\`zig
pub const ResolveInPlaceError = ParseError || error{NoSpaceLeft}
\`\`\`

**Errors:**

- `error.NoSpaceLeft`

</details>

---
