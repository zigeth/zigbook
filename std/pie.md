# std.pie

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.pie` |
| Declarations | 1 |
| Breakdown | 1 function |
| Generated (unix epoch) | 1760148109 |

---

## Table of Contents

- [Functions](#functions)
  - [`relocate`](#fn-relocate)

---

## Functions (1)

### <a id="fn-relocate"></a>`relocate`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn relocate(phdrs: []const elf.Phdr) void {
    @setRuntimeSafety(false);
    @disableInstrumentation();

    const dynv = getDynamicSymbol();

    // Recover the delta applied by the loader by comparing the effective and
    // the theoretical load addresses for the `_DYNAMIC` symbol.
    const base_addr = base: {
        for (phdrs) |*phdr| {
            if (phdr.p_type != elf.PT_DYNAMIC) continue;
            break :base @intFromPtr(dynv) - phdr.p_vaddr;
        }
        // This is not supposed to happen for well-formed binaries.
        @trap();
    };

    var sorted_dynv: [elf.DT_NUM]elf.Addr = undefined;

    // Zero-initialized this way to prevent the compiler from turning this into
    // `memcpy` or `memset` calls (which can require relocations).
    for (&sorted_dynv) |*dyn| {
        const pdyn: *volatile elf.Addr = @ptrCast(dyn);
        pdyn.* = 0;
    }

    {
        // `dynv` has no defined order. Fix that.
        var i: usize = 0;
        while (dynv[i].d_tag != elf.DT_NULL) : (i += 1) {
            if (dynv[i].d_tag < elf.DT_NUM) sorted_dynv[@bitCast(dynv[i].d_tag)] = dynv[i].d_val;
        }
    }

    // Deal with the GOT relocations that MIPS uses first.
    if (builtin.cpu.arch.isMIPS()) {
        const count: elf.Addr = blk: {
            // This is an architecture-specific tag, so not part of `sorted_dynv`.
            var i: usize = 0;
            while (dynv[i].d_tag != elf.DT_NULL) : (i += 1) {
                if (dynv[i].d_tag == elf.DT_MIPS_LOCAL_GOTNO) break :blk dynv[i].d_val;
            }

            break :blk 0;
        };

        const got: [*]usize = @ptrFromInt(base_addr + sorted_dynv[elf.DT_PLTGOT]);

        for (0..count) |i| {
            got[i] += base_addr;
        }
    }

    // Apply normal relocations.

    const rel = sorted_dynv[elf.DT_REL];
    if (rel != 0) {
        const rels: []const elf.Rel = @ptrCast(@alignCast(
            @as([*]align(@alignOf(elf.Rel)) const u8, @ptrFromInt(base_addr + rel))[0..sorted_dynv[elf.DT_RELSZ]],
        ));
        for (rels) |r| {
            if (r.r_type() != R_RELATIVE) continue;
            @as(*usize, @ptrFromInt(base_addr + r.r_offset)).* += base_addr;
        }
    }

    const rela = sorted_dynv[elf.DT_RELA];
    if (rela != 0) {
        const relas: []const elf.Rela = @ptrCast(@alignCast(
            @as([*]align(@alignOf(elf.Rela)) const u8, @ptrFromInt(base_addr + rela))[0..sorted_dynv[elf.DT_RELASZ]],
        ));
        for (relas) |r| {
            if (r.r_type() != R_RELATIVE) continue;
            @as(*usize, @ptrFromInt(base_addr + r.r_offset)).* = base_addr + @as(usize, @bitCast(r.r_addend));
        }
    }

    const relr = sorted_dynv[elf.DT_RELR];
    if (relr != 0) {
        const relrs: []const elf.Relr = @ptrCast(
            @as([*]align(@alignOf(elf.Relr)) const u8, @ptrFromInt(base_addr + relr))[0..sorted_dynv[elf.DT_RELRSZ]],
        );
        var current: [*]usize = undefined;
        for (relrs) |r| {
            if ((r & 1) == 0) {
                current = @ptrFromInt(base_addr + r);
                current[0] += base_addr;
                current += 1;
            } else {
                // Skip the first bit; there are 63 locations in the bitmap.
                var i: if (@sizeOf(usize) == 8) u6 else u5 = 1;
                while (i < @bitSizeOf(elf.Relr)) : (i += 1) {
                    if (((r >> i) & 1) != 0) current[i] += base_addr;
                }

                current += @bitSizeOf(elf.Relr) - 1;
            }
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `phdrs` | `[]const elf.Phdr` | – | – |
| Return | `void` | – | – |

</details>

---
