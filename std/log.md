# std.log

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.log` |
| Declarations | 13 |
| Breakdown | 4 functions · 2 types · 7 constants |
| Generated (unix epoch) | 1760148106 |

## Overview

std.log is a standardized interface for logging which allows for the logging
of programs and libraries using this interface to be formatted and filtered
by the implementer of the `std.options.logFn` function.

Each log message has an associated scope enum, which can be used to give
context to the logging. The logging functions in std.log implicitly use a
scope of .default.

A logging namespace using a custom scope can be created using the
std.log.scoped function, passing the scope as an argument; the logging
functions in the resulting struct use the provided scope parameter.
For example, a library called 'libfoo' might use
`const log = std.log.scoped(.libfoo);` to use .libfoo as the scope of its
log messages.

An example `logFn` might look something like this:

\`\`\`
const std = @import("std");

pub const std_options: std.Options = .{
    // Set the log level to info
    .log_level = .info,

    // Define logFn to override the std implementation
    .logFn = myLogFn,
};

pub fn myLogFn(
    comptime level: std.log.Level,
    comptime scope: @Type(.enum_literal),
    comptime format: []const u8,
    args: anytype,
) void {
    // Ignore all non-error logging from sources other than
    // .my_project, .nice_library and the default
    const scope_prefix = "(" ++ switch (scope) {
        .my_project, .nice_library, std.log.default_log_scope => @tagName(scope),
        else => if (@intFromEnum(level) <= @intFromEnum(std.log.Level.err))
            @tagName(scope)
        else
            return,
    } ++ "): ";

    const prefix = "[" ++ comptime level.asText() ++ "] " ++ scope_prefix;

    // Print the message to stderr, silently ignoring any errors
    std.debug.lockStdErr();
    defer std.debug.unlockStdErr();
    const stderr = std.fs.File.stderr().deprecatedWriter();
    nosuspend stderr.print(prefix ++ format ++ "\n", args) catch return;
}

pub fn main() void {
    // Using the default scope:
    std.log.debug("A borderline useless debug log message", .{}); // Won't be printed as log_level is .info
    std.log.info("Flux capacitor is starting to overheat", .{});

    // Using scoped logging:
    const my_project_log = std.log.scoped(.my_project);
    const nice_library_log = std.log.scoped(.nice_library);
    const verbose_lib_log = std.log.scoped(.verbose_lib);

    my_project_log.debug("Starting up", .{}); // Won't be printed as log_level is .info
    nice_library_log.warn("Something went very wrong, sorry", .{});
    verbose_lib_log.warn("Added 1 + 1: {}", .{1 + 1}); // Won't be printed as it gets filtered out by our log function
}
\`\`\`
Which produces the following output:
\`\`\`
[info] (default): Flux capacitor is starting to overheat
[warning] (nice_library): Something went very wrong, sorry
\`\`\`

---

## Table of Contents

- [Functions](#functions)
  - [`logEnabled`](#fn-logenabled)
  - [`defaultLogEnabled`](#fn-defaultlogenabled)
  - [`defaultLog`](#fn-defaultlog)
  - [`scoped`](#fn-scoped)

- [Types](#types)
  - [`Level`](#type-level)
  - [`ScopeLevel`](#type-scopelevel)

- [Constants](#constants)
  - [`default\_level`](#const-default-level)
  - [`default\_log\_scope`](#const-default-log-scope)
  - [`default`](#const-default)
  - [`err`](#const-err)
  - [`warn`](#const-warn)
  - [`info`](#const-info)
  - [`debug`](#const-debug)

---

## Types (2)

### <a id="type-level"></a>`Level`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const Level = enum {
    /// Error: something has gone wrong. This might be recoverable or might
    /// be followed by the program exiting.
    err,
    /// Warning: it is uncertain if something has gone wrong or not, but the
    /// circumstances would be worth investigating.
    warn,
    /// Info: general messages about the state of the program.
    info,
    /// Debug: messages only useful for debugging.
    debug,

    /// Returns a string literal of the given level in full text form.
    pub fn asText(comptime self: Level) []const u8 {
        return switch (self) {
            .err => "error",
            .warn => "warning",
            .info => "info",
            .debug => "debug",
        };
    }
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `err` | Error: something has gone wrong. This might be recoverable or might be followed by the program exiting. |
| `warn` | Warning: it is uncertain if something has gone wrong or not, but the circumstances would be worth investigating. |
| `info` | Info: general messages about the state of the program. |
| `debug` | Debug: messages only useful for debugging. |

</details>

---

### <a id="type-scopelevel"></a>`ScopeLevel`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ScopeLevel = struct {
    scope: @Type(.enum_literal),
    level: Level,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `scope` | `@Type(.enum_literal)` | – | |
| `level` | [`Level`](#type-level) | – | |

</details>

---

## Constants (7)

### <a id="const-default-level"></a>`default_level`

<details class="declaration-card" open>
<summary>Constant – The default log level is based on build mode</summary>

The default log level is based on build mode.

\`\`\`zig
pub const default_level: Level = switch (builtin.mode) {
    .Debug => .debug,
    .ReleaseSafe, .ReleaseFast, .ReleaseSmall => .info,
}
\`\`\`

</details>

---

### <a id="const-default-log-scope"></a>`default_log_scope`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const default_log_scope = .default
\`\`\`

</details>

---

### <a id="const-default"></a>`default`

<details class="declaration-card" open>
<summary>Constant – The default scoped logging namespace</summary>

The default scoped logging namespace.

\`\`\`zig
pub const default = scoped(default_log_scope)
\`\`\`

</details>

---

### <a id="const-err"></a>`err`

<details class="declaration-card" open>
<summary>Constant – Log an error message using the default scope</summary>

Log an error message using the default scope. This log level is intended to
be used when something has gone wrong. This might be recoverable or might
be followed by the program exiting.

\`\`\`zig
pub const err = default.err
\`\`\`

</details>

---

### <a id="const-warn"></a>`warn`

<details class="declaration-card" open>
<summary>Constant – Log a warning message using the default scope</summary>

Log a warning message using the default scope. This log level is intended
to be used if it is uncertain whether something has gone wrong or not, but
the circumstances would be worth investigating.

\`\`\`zig
pub const warn = default.warn
\`\`\`

</details>

---

### <a id="const-info"></a>`info`

<details class="declaration-card" open>
<summary>Constant – Log an info message using the default scope</summary>

Log an info message using the default scope. This log level is intended to
be used for general messages about the state of the program.

\`\`\`zig
pub const info = default.info
\`\`\`

</details>

---

### <a id="const-debug"></a>`debug`

<details class="declaration-card" open>
<summary>Constant – Log a debug message using the default scope</summary>

Log a debug message using the default scope. This log level is intended to
be used for messages which are only useful for debugging.

\`\`\`zig
pub const debug = default.debug
\`\`\`

</details>

---

## Functions (4)

### <a id="fn-logenabled"></a>`logEnabled`

<details class="declaration-card" open>
<summary>Function – Determine if a specific log message level and scope combination are enabled for logging</summary>

Determine if a specific log message level and scope combination are enabled for logging.

\`\`\`zig
pub fn logEnabled(comptime message_level: Level, comptime scope: @Type(.enum_literal)) bool {
    inline for (scope_levels) |scope_level| {
        if (scope_level.scope == scope) return @intFromEnum(message_level) <= @intFromEnum(scope_level.level);
    }
    return @intFromEnum(message_level) <= @intFromEnum(level);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `message\_level` | [`Level`](#type-level) | – | – |
| `scope` | `@Type(.enum_literal)` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-defaultlogenabled"></a>`defaultLogEnabled`

<details class="declaration-card" open>
<summary>Function – Determine if a specific log message level using the default log scope is enabled for logging</summary>

Determine if a specific log message level using the default log scope is enabled for logging.

\`\`\`zig
pub fn defaultLogEnabled(comptime message_level: Level) bool {
    return comptime logEnabled(message_level, default_log_scope);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `message\_level` | [`Level`](#type-level) | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-defaultlog"></a>`defaultLog`

<details class="declaration-card" open>
<summary>Function – The default implementation for the log function</summary>

The default implementation for the log function. Custom log functions may
forward log messages to this function.

Uses a 64-byte buffer for formatted printing which is flushed before this
function returns.

\`\`\`zig
pub fn defaultLog(
    comptime message_level: Level,
    comptime scope: @Type(.enum_literal),
    comptime format: []const u8,
    args: anytype,
) void {
    const level_txt = comptime message_level.asText();
    const prefix2 = if (scope == .default) ": " else "(" ++ @tagName(scope) ++ "): ";
    var buffer: [64]u8 = undefined;
    const stderr = std.debug.lockStderrWriter(&buffer);
    defer std.debug.unlockStderrWriter();
    nosuspend stderr.print(level_txt ++ prefix2 ++ format ++ "\n", args) catch return;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `message\_level` | [`Level`](#type-level) | – | – |
| `scope` | `@Type(.enum_literal)` | – | – |
| `format` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-scoped"></a>`scoped`

<details class="declaration-card" open>
<summary>Function – Returns a scoped logging namespace that logs all messages using the scope</summary>

Returns a scoped logging namespace that logs all messages using the scope
provided here.

\`\`\`zig
pub fn scoped(comptime scope: @Type(.enum_literal)) type {
    return struct {
        /// Log an error message. This log level is intended to be used
        /// when something has gone wrong. This might be recoverable or might
        /// be followed by the program exiting.
        pub fn err(
            comptime format: []const u8,
            args: anytype,
        ) void {
            @branchHint(.cold);
            log(.err, scope, format, args);
        }

        /// Log a warning message. This log level is intended to be used if
        /// it is uncertain whether something has gone wrong or not, but the
        /// circumstances would be worth investigating.
        pub fn warn(
            comptime format: []const u8,
            args: anytype,
        ) void {
            log(.warn, scope, format, args);
        }

        /// Log an info message. This log level is intended to be used for
        /// general messages about the state of the program.
        pub fn info(
            comptime format: []const u8,
            args: anytype,
        ) void {
            log(.info, scope, format, args);
        }

        /// Log a debug message. This log level is intended to be used for
        /// messages which are only useful for debugging.
        pub fn debug(
            comptime format: []const u8,
            args: anytype,
        ) void {
            log(.debug, scope, format, args);
        }
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `scope` | `@Type(.enum_literal)` | – | – |
| Return | `type` | – | – |

</details>

---
