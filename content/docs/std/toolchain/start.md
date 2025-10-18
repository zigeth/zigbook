---
title: "std.start"
description: "Comprehensive reference for Zig's std.start module covering build coordination, targets, and binary tooling."
navigation:
  title: "Start"
  icon: i-lucide-hammer
  badge: "Toolchain"
badge: "Toolchain"
category: "toolchain"
tags:
  - "zig"
  - "standard-library"
  - "toolchain"
source: "std/start.md"
githubPath: "std/start.md"
lastUpdated: "2025-10-18T12:44:21.946Z"
seo:
  title: "std.start · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.start module covering build coordination, targets, and binary tooling."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/start.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.start` |
| Declarations | 3 |
| Breakdown | 2 functions · 1 constant |
| Generated (unix epoch) | 1760148110 |

---

## Table of Contents

- [Functions](#functions)
  - [`callMain`](#fn-callmain)
  - [`call\_wWinMain`](#fn-call-wwinmain)

- [Constants](#constants)
  - [`simplified\_logic`](#const-simplified-logic)

---

## Constants (1)

### <a id="const-simplified-logic"></a>`simplified_logic`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const simplified_logic = switch (builtin.zig_backend) {
    .stage2_aarch64,
    .stage2_arm,
    .stage2_powerpc,
    .stage2_sparc64,
    .stage2_spirv,
    .stage2_x86,
    => true,
    else => false,
}
```

</details>

---

## Functions (2)

### <a id="fn-callmain"></a>`callMain`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub inline fn callMain() u8 {
    const ReturnType = @typeInfo(@TypeOf(root.main)).@"fn".return_type.?;

    switch (ReturnType) {
        void => {
            root.main();
            return 0;
        },
        noreturn, u8 => {
            return root.main();
        },
        else => {
            if (@typeInfo(ReturnType) != .error_union) @compileError(bad_main_ret);

            const result = root.main() catch |err| {
                switch (builtin.zig_backend) {
                    .stage2_powerpc,
                    .stage2_riscv64,
                    => {
                        _ = std.posix.write(std.posix.STDERR_FILENO, "error: failed with error\n") catch {};
                        return 1;
                    },
                    else => {},
                }
                std.log.err("{s}", .{@errorName(err)});
                if (@errorReturnTrace()) |trace| {
                    std.debug.dumpStackTrace(trace.*);
                }
                return 1;
            };

            return switch (@TypeOf(result)) {
                void => 0,
                u8 => result,
                else => @compileError(bad_main_ret),
            };
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `u8` | – | – |

</details>

---

### <a id="fn-call-wwinmain"></a>`call_wWinMain`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn call_wWinMain() std.os.windows.INT {
    const peb = std.os.windows.peb();
    const MAIN_HINSTANCE = @typeInfo(@TypeOf(root.wWinMain)).@"fn".params[0].type.?;
    const hInstance: MAIN_HINSTANCE = @ptrCast(peb.ImageBaseAddress);
    const lpCmdLine: [*:0]u16 = @ptrCast(peb.ProcessParameters.CommandLine.Buffer);

    // There are various types used for the 'show window' variable through the Win32 APIs:
    // - u16 in STARTUPINFOA.wShowWindow / STARTUPINFOW.wShowWindow
    // - c_int in ShowWindow
    // - u32 in PEB.ProcessParameters.dwShowWindow
    // Since STARTUPINFO is the bottleneck for the allowed values, we use `u16` as the
    // type which can coerce into i32/c_int/u32 depending on how the user defines their wWinMain
    // (the Win32 docs show wWinMain with `int` as the type for nCmdShow).
    const nCmdShow: u16 = nCmdShow: {
        // This makes Zig match the nCmdShow behavior of a C program with a WinMain symbol:
        // - With STARTF_USESHOWWINDOW set in STARTUPINFO.dwFlags of the CreateProcess call:
        //   - Compiled with subsystem:console -> nCmdShow is always SW_SHOWDEFAULT
        //   - Compiled with subsystem:windows -> nCmdShow is STARTUPINFO.wShowWindow from
        //     the parent CreateProcess call
        // - With STARTF_USESHOWWINDOW unset:
        //   - nCmdShow is always SW_SHOWDEFAULT
        const SW_SHOWDEFAULT = 10;
        const STARTF_USESHOWWINDOW = 1;
        // root having a wWinMain means that std.builtin.subsystem will always have a non-null value.
        if (std.builtin.subsystem.? == .Windows and peb.ProcessParameters.dwFlags & STARTF_USESHOWWINDOW != 0) {
            break :nCmdShow @truncate(peb.ProcessParameters.dwShowWindow);
        }
        break :nCmdShow SW_SHOWDEFAULT;
    };

    // second parameter hPrevInstance, MSDN: "This parameter is always NULL"
    return root.wWinMain(hInstance, null, lpCmdLine, nCmdShow);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `std.os.windows.INT` | – | – |

</details>

---


