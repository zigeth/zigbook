---
title: "std.atomic"
description: "Comprehensive reference for Zig's std.atomic module covering low-level systems primitives and metaprogramming utilities."
navigation:
  title: "Atomic"
  icon: i-lucide-cpu
  badge: "Systems"
badge: "Systems"
category: "systems"
tags:
  - "zig"
  - "standard-library"
  - "systems"
source: "std/atomic.md"
githubPath: "std/atomic.md"
lastUpdated: "2025-10-11T02:43:50.339Z"
seo:
  title: "std.atomic · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.atomic module covering low-level systems primitives and metaprogramming utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/atomic.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.atomic` |
| Declarations | 4 |
| Breakdown | 3 functions · 1 constant |
| Generated (unix epoch) | 1760148101 |

---

## Table of Contents

- [Functions](#functions)
  - [`Value`](#fn-value)
  - [`spinLoopHint`](#fn-spinloophint)
  - [`cacheLineForCpu`](#fn-cachelineforcpu)

- [Constants](#constants)
  - [`cache\_line`](#const-cache-line)

---

## Constants (1)

### <a id="const-cache-line"></a>`cache_line`

<details class="declaration-card" open>
<summary>Constant – The estimated size of the CPU&#39;s cache line when atomically updating memory</summary>

The estimated size of the CPU's cache line when atomically updating memory.
Add this much padding or align to this boundary to avoid atomically-updated
memory from forcing cache invalidations on near, but non-atomic, memory.

https://en.wikipedia.org/wiki/False_sharing
https://github.com/golang/go/search?q=CacheLinePadSize

```zig
pub const cache_line: comptime_int = cacheLineForCpu(builtin.cpu)
```

</details>

---

## Functions (3)

### <a id="fn-value"></a>`Value`

<details class="declaration-card" open>
<summary>Function – This is a thin wrapper around a primitive value to prevent accidental data races</summary>

This is a thin wrapper around a primitive value to prevent accidental data races.

```zig
pub fn Value(comptime T: type) type {
    return extern struct {
        /// Care must be taken to avoid data races when interacting with this field directly.
        raw: T,

        const Self = @This();

        pub fn init(value: T) Self {
            return .{ .raw = value };
        }

        pub inline fn load(self: *const Self, comptime order: AtomicOrder) T {
            return @atomicLoad(T, &self.raw, order);
        }

        pub inline fn store(self: *Self, value: T, comptime order: AtomicOrder) void {
            @atomicStore(T, &self.raw, value, order);
        }

        pub inline fn swap(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .Xchg, operand, order);
        }

        pub inline fn cmpxchgWeak(
            self: *Self,
            expected_value: T,
            new_value: T,
            comptime success_order: AtomicOrder,
            comptime fail_order: AtomicOrder,
        ) ?T {
            return @cmpxchgWeak(T, &self.raw, expected_value, new_value, success_order, fail_order);
        }

        pub inline fn cmpxchgStrong(
            self: *Self,
            expected_value: T,
            new_value: T,
            comptime success_order: AtomicOrder,
            comptime fail_order: AtomicOrder,
        ) ?T {
            return @cmpxchgStrong(T, &self.raw, expected_value, new_value, success_order, fail_order);
        }

        pub inline fn fetchAdd(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .Add, operand, order);
        }

        pub inline fn fetchSub(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .Sub, operand, order);
        }

        pub inline fn fetchMin(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .Min, operand, order);
        }

        pub inline fn fetchMax(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .Max, operand, order);
        }

        pub inline fn fetchAnd(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .And, operand, order);
        }

        pub inline fn fetchNand(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .Nand, operand, order);
        }

        pub inline fn fetchXor(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .Xor, operand, order);
        }

        pub inline fn fetchOr(self: *Self, operand: T, comptime order: AtomicOrder) T {
            return @atomicRmw(T, &self.raw, .Or, operand, order);
        }

        pub inline fn rmw(
            self: *Self,
            comptime op: std.builtin.AtomicRmwOp,
            operand: T,
            comptime order: AtomicOrder,
        ) T {
            return @atomicRmw(T, &self.raw, op, operand, order);
        }

        const Bit = std.math.Log2Int(T);

        /// Marked `inline` so that if `bit` is comptime-known, the instruction
        /// can be lowered to a more efficient machine code instruction if
        /// possible.
        pub inline fn bitSet(self: *Self, bit: Bit, comptime order: AtomicOrder) u1 {
            const mask = @as(T, 1) << bit;
            const value = self.fetchOr(mask, order);
            return @intFromBool(value & mask != 0);
        }

        /// Marked `inline` so that if `bit` is comptime-known, the instruction
        /// can be lowered to a more efficient machine code instruction if
        /// possible.
        pub inline fn bitReset(self: *Self, bit: Bit, comptime order: AtomicOrder) u1 {
            const mask = @as(T, 1) << bit;
            const value = self.fetchAnd(~mask, order);
            return @intFromBool(value & mask != 0);
        }

        /// Marked `inline` so that if `bit` is comptime-known, the instruction
        /// can be lowered to a more efficient machine code instruction if
        /// possible.
        pub inline fn bitToggle(self: *Self, bit: Bit, comptime order: AtomicOrder) u1 {
            const mask = @as(T, 1) << bit;
            const value = self.fetchXor(mask, order);
            return @intFromBool(value & mask != 0);
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| Return | `type` | – | – |

</details>

---

### <a id="fn-spinloophint"></a>`spinLoopHint`

<details class="declaration-card" open>
<summary>Function – Signals to the processor that the caller is inside a busy-wait spin-loop</summary>

Signals to the processor that the caller is inside a busy-wait spin-loop.

```zig
pub inline fn spinLoopHint() void {
    switch (builtin.target.cpu.arch) {
        // No-op instruction that can hint to save (or share with a hardware-thread)
        // pipelining/power resources
        // https://software.intel.com/content/www/us/en/develop/articles/benefitting-power-and-performance-sleep-loops.html
        .x86,
        .x86_64,
        => asm volatile ("pause"),

        // No-op instruction that serves as a hardware-thread resource yield hint.
        // https://stackoverflow.com/a/7588941
        .powerpc,
        .powerpcle,
        .powerpc64,
        .powerpc64le,
        => asm volatile ("or 27, 27, 27"),

        // `isb` appears more reliable for releasing execution resources than `yield`
        // on common aarch64 CPUs.
        // https://bugs.java.com/bugdatabase/view_bug.do?bug_id=8258604
        // https://bugs.mysql.com/bug.php?id=100664
        .aarch64,
        .aarch64_be,
        => asm volatile ("isb"),

        // `yield` was introduced in v6k but is also available on v6m.
        // https://www.keil.com/support/man/docs/armasm/armasm_dom1361289926796.htm
        .arm,
        .armeb,
        .thumb,
        .thumbeb,
        => if (comptime builtin.cpu.hasAny(.arm, &.{ .has_v6k, .has_v6m })) {
            asm volatile ("yield");
        },

        // The 8-bit immediate specifies the amount of cycles to pause for. We can't really be too
        // opinionated here.
        .hexagon,
        => asm volatile ("pause(#1)"),

        .riscv32,
        .riscv64,
        => if (comptime builtin.cpu.has(.riscv, .zihintpause)) {
            asm volatile ("pause");
        },

        else => {},
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-cachelineforcpu"></a>`cacheLineForCpu`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn cacheLineForCpu(cpu: std.Target.Cpu) u16 {
    return switch (cpu.arch) {
        // x86_64: Starting from Intel's Sandy Bridge, the spatial prefetcher pulls in pairs of 64-byte cache lines at a time.
        // - https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-optimization-manual.pdf
        // - https://github.com/facebook/folly/blob/1b5288e6eea6df074758f877c849b6e73bbb9fbb/folly/lang/Align.h#L107
        //
        // aarch64: Some big.LITTLE ARM archs have "big" cores with 128-byte cache lines:
        // - https://www.mono-project.com/news/2016/09/12/arm64-icache/
        // - https://cpufun.substack.com/p/more-m1-fun-hardware-information
        //
        // - https://github.com/torvalds/linux/blob/3a7e02c040b130b5545e4b115aada7bacd80a2b6/arch/arc/Kconfig#L212
        // - https://github.com/golang/go/blob/3dd58676054223962cd915bb0934d1f9f489d4d2/src/internal/cpu/cpu_ppc64x.go#L9
        .x86_64,
        .aarch64,
        .aarch64_be,
        .arc,
        .powerpc64,
        .powerpc64le,
        => 128,

        // https://github.com/llvm/llvm-project/blob/e379094328e49731a606304f7e3559d4f1fa96f9/clang/lib/Basic/Targets/Hexagon.h#L145-L151
        .hexagon,
        => if (cpu.has(.hexagon, .v73)) 64 else 32,

        // - https://github.com/golang/go/blob/3dd58676054223962cd915bb0934d1f9f489d4d2/src/internal/cpu/cpu_arm.go#L7
        // - https://github.com/golang/go/blob/3dd58676054223962cd915bb0934d1f9f489d4d2/src/internal/cpu/cpu_mips.go#L7
        // - https://github.com/golang/go/blob/3dd58676054223962cd915bb0934d1f9f489d4d2/src/internal/cpu/cpu_mipsle.go#L7
        // - https://github.com/golang/go/blob/3dd58676054223962cd915bb0934d1f9f489d4d2/src/internal/cpu/cpu_mips64x.go#L9
        // - https://github.com/torvalds/linux/blob/3a7e02c040b130b5545e4b115aada7bacd80a2b6/arch/sparc/include/asm/cache.h#L14
        .arm,
        .armeb,
        .thumb,
        .thumbeb,
        .mips,
        .mipsel,
        .mips64,
        .mips64el,
        .sparc,
        .sparc64,
        => 32,

        // - https://github.com/torvalds/linux/blob/3a7e02c040b130b5545e4b115aada7bacd80a2b6/arch/m68k/include/asm/cache.h#L10
        .m68k,
        => 16,

        // - https://www.ti.com/lit/pdf/slaa498
        .msp430,
        => 8,

        // - https://github.com/golang/go/blob/3dd58676054223962cd915bb0934d1f9f489d4d2/src/internal/cpu/cpu_s390x.go#L7
        // - https://sxauroratsubasa.sakura.ne.jp/documents/guide/pdfs/Aurora_ISA_guide.pdf
        .s390x,
        .ve,
        => 256,

        // Other x86 and WASM platforms have 64-byte cache lines.
        // The rest of the architectures are assumed to be similar.
        // - https://github.com/golang/go/blob/dda2991c2ea0c5914714469c4defc2562a907230/src/internal/cpu/cpu_x86.go#L9
        // - https://github.com/golang/go/blob/0a9321ad7f8c91e1b0c7184731257df923977eb9/src/internal/cpu/cpu_loong64.go#L11
        // - https://github.com/golang/go/blob/3dd58676054223962cd915bb0934d1f9f489d4d2/src/internal/cpu/cpu_wasm.go#L7
        // - https://github.com/golang/go/blob/19e923182e590ae6568c2c714f20f32512aeb3e3/src/internal/cpu/cpu_riscv64.go#L7
        // - https://github.com/torvalds/linux/blob/3a7e02c040b130b5545e4b115aada7bacd80a2b6/arch/xtensa/variants/csp/include/variant/core.h#L209
        // - https://github.com/torvalds/linux/blob/3a7e02c040b130b5545e4b115aada7bacd80a2b6/arch/csky/Kconfig#L183
        // - https://www.xmos.com/download/The-XMOS-XS3-Architecture.pdf
        else => 64,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `cpu` | `std.Target.Cpu` | – | – |
| Return | `u16` | – | – |

</details>

---


