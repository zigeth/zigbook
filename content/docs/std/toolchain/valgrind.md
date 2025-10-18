---
title: "std.valgrind"
description: "Comprehensive reference for Zig's std.valgrind module covering build coordination, targets, and binary tooling."
navigation:
  title: "Valgrind"
  icon: i-lucide-hammer
  badge: "Toolchain"
badge: "Toolchain"
category: "toolchain"
tags:
  - "zig"
  - "standard-library"
  - "toolchain"
source: "std/valgrind.md"
githubPath: "std/valgrind.md"
lastUpdated: "2025-10-11T02:43:50.350Z"
seo:
  title: "std.valgrind · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.valgrind module covering build coordination, targets, and binary tooling."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/valgrind.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.valgrind` |
| Declarations | 34 |
| Breakdown | 29 functions · 2 types · 3 modules |
| Generated (unix epoch) | 1760148111 |

---

## Table of Contents

- [Functions](#functions)
  - [`doClientRequest`](#fn-doclientrequest)
  - [`ToolBase`](#fn-toolbase)
  - [`IsTool`](#fn-istool)
  - [`runningOnValgrind`](#fn-runningonvalgrind)
  - [`discardTranslations`](#fn-discardtranslations)
  - [`innerThreads`](#fn-innerthreads)
  - [`nonSimdCall0`](#fn-nonsimdcall0)
  - [`nonSimdCall1`](#fn-nonsimdcall1)
  - [`nonSimdCall2`](#fn-nonsimdcall2)
  - [`nonSimdCall3`](#fn-nonsimdcall3)
  - [`countErrors`](#fn-counterrors)
  - [`mallocLikeBlock`](#fn-malloclikeblock)
  - [`resizeInPlaceBlock`](#fn-resizeinplaceblock)
  - [`freeLikeBlock`](#fn-freelikeblock)
  - [`createMempool`](#fn-createmempool)
  - [`destroyMempool`](#fn-destroymempool)
  - [`mempoolAlloc`](#fn-mempoolalloc)
  - [`mempoolFree`](#fn-mempoolfree)
  - [`mempoolTrim`](#fn-mempooltrim)
  - [`moveMempool`](#fn-movemempool)
  - [`mempoolChange`](#fn-mempoolchange)
  - [`mempoolExists`](#fn-mempoolexists)
  - [`stackRegister`](#fn-stackregister)
  - [`stackDeregister`](#fn-stackderegister)
  - [`stackChange`](#fn-stackchange)
  - [`mapIpToSrcloc`](#fn-mapiptosrcloc)
  - [`disableErrorReporting`](#fn-disableerrorreporting)
  - [`enableErrorReporting`](#fn-enableerrorreporting)
  - [`monitorCommand`](#fn-monitorcommand)

- [Types](#types)
  - [`ClientRequest`](#type-clientrequest)
  - [`MempoolFlags`](#type-mempoolflags)

- [Modules](#modules)
  - [`memcheck`](#module-memcheck)
  - [`callgrind`](#module-callgrind)
  - [`cachegrind`](#module-cachegrind)

---

## Types (2)

### <a id="type-clientrequest"></a>`ClientRequest`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ClientRequest = enum(u32) {
    RunningOnValgrind = 4097,
    DiscardTranslations = 4098,
    ClientCall0 = 4353,
    ClientCall1 = 4354,
    ClientCall2 = 4355,
    ClientCall3 = 4356,
    CountErrors = 4609,
    GdbMonitorCommand = 4610,
    MalloclikeBlock = 4865,
    ResizeinplaceBlock = 4875,
    FreelikeBlock = 4866,
    CreateMempool = 4867,
    DestroyMempool = 4868,
    MempoolAlloc = 4869,
    MempoolFree = 4870,
    MempoolTrim = 4871,
    MoveMempool = 4872,
    MempoolChange = 4873,
    MempoolExists = 4874,
    Printf = 5121,
    PrintfBacktrace = 5122,
    PrintfValistByRef = 5123,
    PrintfBacktraceValistByRef = 5124,
    StackRegister = 5377,
    StackDeregister = 5378,
    StackChange = 5379,
    LoadPdbDebuginfo = 5633,
    MapIpToSrcloc = 5889,
    ChangeErrDisablement = 6145,
    VexInitForIri = 6401,
    InnerThreads = 6402,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `RunningOnValgrind` |  |
| `DiscardTranslations` |  |
| `ClientCall0` |  |
| `ClientCall1` |  |
| `ClientCall2` |  |
| `ClientCall3` |  |
| `CountErrors` |  |
| `GdbMonitorCommand` |  |
| `MalloclikeBlock` |  |
| `ResizeinplaceBlock` |  |
| `FreelikeBlock` |  |
| `CreateMempool` |  |
| `DestroyMempool` |  |
| `MempoolAlloc` |  |
| `MempoolFree` |  |
| `MempoolTrim` |  |
| `MoveMempool` |  |
| `MempoolChange` |  |
| `MempoolExists` |  |
| `Printf` |  |
| `PrintfBacktrace` |  |
| `PrintfValistByRef` |  |
| `PrintfBacktraceValistByRef` |  |
| `StackRegister` |  |
| `StackDeregister` |  |
| `StackChange` |  |
| `LoadPdbDebuginfo` |  |
| `MapIpToSrcloc` |  |
| `ChangeErrDisablement` |  |
| `VexInitForIri` |  |
| `InnerThreads` |  |

</details>

---

### <a id="type-mempoolflags"></a>`MempoolFlags`

<details class="declaration-card" open>
<summary>Type Alias – Create a memory pool</summary>

Create a memory pool.

\`\`\`zig
pub const MempoolFlags = struct {
    pub const AutoFree = 1;
    pub const MetaPool = 2;
}
\`\`\`

</details>

---

## Modules (3)

### <a id="module-memcheck"></a>`memcheck`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const memcheck = @import("valgrind/memcheck.zig")
\`\`\`

> **Module:** `valgrind/memcheck.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/valgrind/memcheck.zig)

</details>

---

### <a id="module-callgrind"></a>`callgrind`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const callgrind = @import("valgrind/callgrind.zig")
\`\`\`

> **Module:** `valgrind/callgrind.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/valgrind/callgrind.zig)

</details>

---

### <a id="module-cachegrind"></a>`cachegrind`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const cachegrind = @import("valgrind/cachegrind.zig")
\`\`\`

> **Module:** `valgrind/cachegrind.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/valgrind/cachegrind.zig)

</details>

---

## Functions (29)

### <a id="fn-doclientrequest"></a>`doClientRequest`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn doClientRequest(default: usize, request: usize, a1: usize, a2: usize, a3: usize, a4: usize, a5: usize) usize {
    if (!builtin.valgrind_support) {
        return default;
    }

    const args = &[_]usize{ request, a1, a2, a3, a4, a5 };

    return switch (builtin.cpu.arch) {
        .arm, .armeb, .thumb, .thumbeb => asm volatile (
            \\ mov r12, r12, ror #3  ; mov r12, r12, ror #13
            \\ mov r12, r12, ror #29 ; mov r12, r12, ror #19
            \\ orr r10, r10, r10
            : [_] "={r3}" (-> usize),
            : [_] "{r4}" (args),
              [_] "{r3}" (default),
            : .{ .memory = true }),
        .aarch64, .aarch64_be => asm volatile (
            \\ ror x12, x12, #3  ; ror x12, x12, #13
            \\ ror x12, x12, #51 ; ror x12, x12, #61
            \\ orr x10, x10, x10
            : [_] "={x3}" (-> usize),
            : [_] "{x4}" (args),
              [_] "{x3}" (default),
            : .{ .memory = true }),
        .mips, .mipsel => asm volatile (
            \\ srl $0,  $0,  13
            \\ srl $0,  $0,  29
            \\ srl $0,  $0,  3
            \\ srl $0,  $0,  19
            \\ or  $13, $13, $13
            : [_] "={$11}" (-> usize),
            : [_] "{$12}" (args),
              [_] "{$11}" (default),
            : .{ .memory = true }),
        .mips64, .mips64el => asm volatile (
            \\ dsll $0,  $0,  3   ; dsll $0, $0, 13
            \\ dsll $0,  $0,  29  ; dsll $0, $0, 19
            \\ or   $13, $13, $13
            : [_] "={$11}" (-> usize),
            : [_] "{$12}" (args),
              [_] "{$11}" (default),
            : .{ .memory = true }),
        .powerpc, .powerpcle => asm volatile (
            \\ rlwinm 0, 0, 3,  0, 31 ; rlwinm 0, 0, 13, 0, 31
            \\ rlwinm 0, 0, 29, 0, 31 ; rlwinm 0, 0, 19, 0, 31
            \\ or     1, 1, 1
            : [_] "={r3}" (-> usize),
            : [_] "{r4}" (args),
              [_] "{r3}" (default),
            : .{ .memory = true }),
        .powerpc64, .powerpc64le => asm volatile (
            \\ rotldi 0, 0, 3  ; rotldi 0, 0, 13
            \\ rotldi 0, 0, 61 ; rotldi 0, 0, 51
            \\ or     1, 1, 1
            : [_] "={r3}" (-> usize),
            : [_] "{r4}" (args),
              [_] "{r3}" (default),
            : .{ .memory = true }),
        .riscv64 => asm volatile (
            \\ .option push
            \\ .option norvc
            \\ srli zero, zero, 3
            \\ srli zero, zero, 13
            \\ srli zero, zero, 51
            \\ srli zero, zero, 61
            \\ or   a0,   a0,   a0
            \\ .option pop
            : [_] "={a3}" (-> usize),
            : [_] "{a4}" (args),
              [_] "{a3}" (default),
            : .{ .memory = true }),
        .s390x => asm volatile (
            \\ lr %%r15, %%r15
            \\ lr %%r1,  %%r1
            \\ lr %%r2,  %%r2
            \\ lr %%r3,  %%r3
            \\ lr %%r2,  %%r2
            : [_] "={r3}" (-> usize),
            : [_] "{r2}" (args),
              [_] "{r3}" (default),
            : .{ .memory = true }),
        .x86 => asm volatile (
            \\ roll  $3,    %%edi ; roll $13, %%edi
            \\ roll  $29,   %%edi ; roll $19, %%edi
            \\ xchgl %%ebx, %%ebx
            : [_] "={edx}" (-> usize),
            : [_] "{eax}" (args),
              [_] "{edx}" (default),
            : .{ .memory = true }),
        .x86_64 => asm volatile (
            \\ rolq  $3,    %%rdi ; rolq $13, %%rdi
            \\ rolq  $61,   %%rdi ; rolq $51, %%rdi
            \\ xchgq %%rbx, %%rbx
            : [_] "={rdx}" (-> usize),
            : [_] "{rax}" (args),
              [_] "{rdx}" (default),
            : .{ .memory = true }),
        else => default,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `default` | `usize` | – | – |
| `request` | `usize` | – | – |
| `a1` | `usize` | – | – |
| `a2` | `usize` | – | – |
| `a3` | `usize` | – | – |
| `a4` | `usize` | – | – |
| `a5` | `usize` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-toolbase"></a>`ToolBase`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn ToolBase(base: [2]u8) u32 {
    return (@as(u32, base[0] & 0xff) << 24) | (@as(u32, base[1] & 0xff) << 16);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `base` | `[2]u8` | – | – |
| Return | `u32` | – | – |

</details>

---

### <a id="fn-istool"></a>`IsTool`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn IsTool(base: [2]u8, code: usize) bool {
    return ToolBase(base) == (code & 0xffff0000);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `base` | `[2]u8` | – | – |
| `code` | `usize` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-runningonvalgrind"></a>`runningOnValgrind`

<details class="declaration-card" open>
<summary>Function – Returns the number of Valgrinds this code is running under</summary>

Returns the number of Valgrinds this code is running under.  That
is, 0 if running natively, 1 if running under Valgrind, 2 if
running under Valgrind which is running under another Valgrind,
etc.

\`\`\`zig
pub fn runningOnValgrind() usize {
    return doClientRequestExpr(0, .RunningOnValgrind, 0, 0, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `usize` | – | – |

</details>

---

### <a id="fn-discardtranslations"></a>`discardTranslations`

<details class="declaration-card" open>
<summary>Function – Discard translation of code in the slice qzz</summary>

Discard translation of code in the slice qzz.  Useful if you are debugging
a JITter or some such, since it provides a way to make sure valgrind will
retranslate the invalidated area.  Returns no value.

\`\`\`zig
pub fn discardTranslations(qzz: []const u8) void {
    doClientRequestStmt(.DiscardTranslations, @intFromPtr(qzz.ptr), qzz.len, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `qzz` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-innerthreads"></a>`innerThreads`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn innerThreads(qzz: [*]u8) void {
    doClientRequestStmt(.InnerThreads, @intFromPtr(qzz), 0, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `qzz` | `[*]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-nonsimdcall0"></a>`nonSimdCall0`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn nonSimdCall0(func: fn (usize) usize) usize {
    return doClientRequestExpr(0, .ClientCall0, @intFromPtr(func), 0, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `func` | `fn (usize) usize` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-nonsimdcall1"></a>`nonSimdCall1`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn nonSimdCall1(func: fn (usize, usize) usize, a1: usize) usize {
    return doClientRequestExpr(0, .ClientCall1, @intFromPtr(func), a1, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `func` | `fn (usize, usize) usize` | – | – |
| `a1` | `usize` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-nonsimdcall2"></a>`nonSimdCall2`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn nonSimdCall2(func: fn (usize, usize, usize) usize, a1: usize, a2: usize) usize {
    return doClientRequestExpr(0, .ClientCall2, @intFromPtr(func), a1, a2, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `func` | `fn (usize, usize, usize) usize` | – | – |
| `a1` | `usize` | – | – |
| `a2` | `usize` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-nonsimdcall3"></a>`nonSimdCall3`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn nonSimdCall3(func: fn (usize, usize, usize, usize) usize, a1: usize, a2: usize, a3: usize) usize {
    return doClientRequestExpr(0, .ClientCall3, @intFromPtr(func), a1, a2, a3, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `func` | `fn (usize, usize, usize, usize) usize` | – | – |
| `a1` | `usize` | – | – |
| `a2` | `usize` | – | – |
| `a3` | `usize` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-counterrors"></a>`countErrors`

<details class="declaration-card" open>
<summary>Function – Counts the number of errors that have been recorded by a tool</summary>

Counts the number of errors that have been recorded by a tool.  Nb:
the tool must record the errors with VG_(maybe_record_error)() or
VG_(unique_error)() for them to be counted.

\`\`\`zig
pub fn countErrors() usize {
    return doClientRequestExpr(0, // default return
        .CountErrors, 0, 0, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `usize` | – | – |

</details>

---

### <a id="fn-malloclikeblock"></a>`mallocLikeBlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn mallocLikeBlock(mem: []u8, rzB: usize, is_zeroed: bool) void {
    doClientRequestStmt(.MalloclikeBlock, @intFromPtr(mem.ptr), mem.len, rzB, @intFromBool(is_zeroed), 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `mem` | `[]u8` | – | – |
| `rzB` | `usize` | – | – |
| `is\_zeroed` | `bool` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-resizeinplaceblock"></a>`resizeInPlaceBlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn resizeInPlaceBlock(oldmem: []u8, newsize: usize, rzB: usize) void {
    doClientRequestStmt(.ResizeinplaceBlock, @intFromPtr(oldmem.ptr), oldmem.len, newsize, rzB, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `oldmem` | `[]u8` | – | – |
| `newsize` | `usize` | – | – |
| `rzB` | `usize` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-freelikeblock"></a>`freeLikeBlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn freeLikeBlock(addr: [*]u8, rzB: usize) void {
    doClientRequestStmt(.FreelikeBlock, @intFromPtr(addr), rzB, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `[*]u8` | – | – |
| `rzB` | `usize` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-createmempool"></a>`createMempool`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn createMempool(pool: [*]u8, rzB: usize, is_zeroed: bool, flags: usize) void {
    doClientRequestStmt(.CreateMempool, @intFromPtr(pool), rzB, @intFromBool(is_zeroed), flags, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pool` | `[*]u8` | – | – |
| `rzB` | `usize` | – | – |
| `is\_zeroed` | `bool` | – | – |
| `flags` | `usize` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-destroymempool"></a>`destroyMempool`

<details class="declaration-card" open>
<summary>Function – Destroy a memory pool</summary>

Destroy a memory pool.

\`\`\`zig
pub fn destroyMempool(pool: [*]u8) void {
    doClientRequestStmt(.DestroyMempool, @intFromPtr(pool), 0, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pool` | `[*]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-mempoolalloc"></a>`mempoolAlloc`

<details class="declaration-card" open>
<summary>Function – Associate a piece of memory with a memory pool</summary>

Associate a piece of memory with a memory pool.

\`\`\`zig
pub fn mempoolAlloc(pool: [*]u8, mem: []u8) void {
    doClientRequestStmt(.MempoolAlloc, @intFromPtr(pool), @intFromPtr(mem.ptr), mem.len, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pool` | `[*]u8` | – | – |
| `mem` | `[]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-mempoolfree"></a>`mempoolFree`

<details class="declaration-card" open>
<summary>Function – Disassociate a piece of memory from a memory pool</summary>

Disassociate a piece of memory from a memory pool.

\`\`\`zig
pub fn mempoolFree(pool: [*]u8, addr: [*]u8) void {
    doClientRequestStmt(.MempoolFree, @intFromPtr(pool), @intFromPtr(addr), 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pool` | `[*]u8` | – | – |
| `addr` | `[*]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-mempooltrim"></a>`mempoolTrim`

<details class="declaration-card" open>
<summary>Function – Disassociate any pieces outside a particular range</summary>

Disassociate any pieces outside a particular range.

\`\`\`zig
pub fn mempoolTrim(pool: [*]u8, mem: []u8) void {
    doClientRequestStmt(.MempoolTrim, @intFromPtr(pool), @intFromPtr(mem.ptr), mem.len, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pool` | `[*]u8` | – | – |
| `mem` | `[]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-movemempool"></a>`moveMempool`

<details class="declaration-card" open>
<summary>Function – Resize and/or move a piece associated with a memory pool</summary>

Resize and/or move a piece associated with a memory pool.

\`\`\`zig
pub fn moveMempool(poolA: [*]u8, poolB: [*]u8) void {
    doClientRequestStmt(.MoveMempool, @intFromPtr(poolA), @intFromPtr(poolB), 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `poolA` | `[*]u8` | – | – |
| `poolB` | `[*]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-mempoolchange"></a>`mempoolChange`

<details class="declaration-card" open>
<summary>Function – Resize and/or move a piece associated with a memory pool</summary>

Resize and/or move a piece associated with a memory pool.

\`\`\`zig
pub fn mempoolChange(pool: [*]u8, addrA: [*]u8, mem: []u8) void {
    doClientRequestStmt(.MempoolChange, @intFromPtr(pool), @intFromPtr(addrA), @intFromPtr(mem.ptr), mem.len, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pool` | `[*]u8` | – | – |
| `addrA` | `[*]u8` | – | – |
| `mem` | `[]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-mempoolexists"></a>`mempoolExists`

<details class="declaration-card" open>
<summary>Function – Return if a mempool exists</summary>

Return if a mempool exists.

\`\`\`zig
pub fn mempoolExists(pool: [*]u8) bool {
    return doClientRequestExpr(0, .MempoolExists, @intFromPtr(pool), 0, 0, 0, 0) != 0;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pool` | `[*]u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-stackregister"></a>`stackRegister`

<details class="declaration-card" open>
<summary>Function – Mark a piece of memory as being a stack</summary>

Mark a piece of memory as being a stack. Returns a stack id.
start is the lowest addressable stack byte, end is the highest
addressable stack byte.

\`\`\`zig
pub fn stackRegister(stack: []u8) usize {
    return doClientRequestExpr(0, .StackRegister, @intFromPtr(stack.ptr), @intFromPtr(stack.ptr) + stack.len, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `stack` | `[]u8` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-stackderegister"></a>`stackDeregister`

<details class="declaration-card" open>
<summary>Function – Unmark the piece of memory associated with a stack id as being a stack</summary>

Unmark the piece of memory associated with a stack id as being a stack.

\`\`\`zig
pub fn stackDeregister(id: usize) void {
    doClientRequestStmt(.StackDeregister, id, 0, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `id` | `usize` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-stackchange"></a>`stackChange`

<details class="declaration-card" open>
<summary>Function – Change the start and end address of the stack id</summary>

Change the start and end address of the stack id.
start is the new lowest addressable stack byte, end is the new highest
addressable stack byte.

\`\`\`zig
pub fn stackChange(id: usize, newstack: []u8) void {
    doClientRequestStmt(.StackChange, id, @intFromPtr(newstack.ptr), @intFromPtr(newstack.ptr) + newstack.len, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `id` | `usize` | – | – |
| `newstack` | `[]u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-mapiptosrcloc"></a>`mapIpToSrcloc`

<details class="declaration-card" open>
<summary>Function – Map a code address to a source file name and line number</summary>

Map a code address to a source file name and line number.  buf64
must point to a 64-byte buffer in the caller's address space. The
result will be dumped in there and is guaranteed to be zero
terminated.  If no info is found, the first byte is set to zero.

\`\`\`zig
pub fn mapIpToSrcloc(addr: *const u8, buf64: [64]u8) usize {
    return doClientRequestExpr(0, .MapIpToSrcloc, @intFromPtr(addr), @intFromPtr(&buf64[0]), 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `*const u8` | – | – |
| `buf64` | `[64]u8` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-disableerrorreporting"></a>`disableErrorReporting`

<details class="declaration-card" open>
<summary>Function – Disable error reporting for this thread</summary>

Disable error reporting for this thread.  Behaves in a stack like
way, so you can safely call this multiple times provided that
enableErrorReporting() is called the same number of times
to re-enable reporting.  The first call of this macro disables
reporting.  Subsequent calls have no effect except to increase the
number of enableErrorReporting() calls needed to re-enable
reporting.  Child threads do not inherit this setting from their
parents -- they are always created with reporting enabled.

\`\`\`zig
pub fn disableErrorReporting() void {
    doClientRequestStmt(.ChangeErrDisablement, 1, 0, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-enableerrorreporting"></a>`enableErrorReporting`

<details class="declaration-card" open>
<summary>Function – Re-enable error reporting</summary>

Re-enable error reporting. (see disableErrorReporting())

\`\`\`zig
pub fn enableErrorReporting() void {
    doClientRequestStmt(.ChangeErrDisablement, math.maxInt(usize), 0, 0, 0, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-monitorcommand"></a>`monitorCommand`

<details class="declaration-card" open>
<summary>Function – Execute a monitor command from the client program</summary>

Execute a monitor command from the client program.
If a connection is opened with GDB, the output will be sent
according to the output mode set for vgdb.
If no connection is opened, output will go to the log output.
Returns 1 if command not recognised, 0 otherwise.

\`\`\`zig
pub fn monitorCommand(command: [*]u8) bool {
    return doClientRequestExpr(0, .GdbMonitorCommand, @intFromPtr(command), 0, 0, 0, 0) != 0;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `command` | `[*]u8` | – | – |
| Return | `bool` | – | – |

</details>

---
