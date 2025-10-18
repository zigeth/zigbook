# std.wasm

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.wasm` |
| Declarations | 19 |
| Breakdown | 12 types · 7 constants |
| Generated (unix epoch) | 1760148112 |

---

## Table of Contents

- [Types](#types)
  - [`Opcode`](#type-opcode)
  - [`MiscOpcode`](#type-miscopcode)
  - [`SimdOpcode`](#type-simdopcode)
  - [`AtomicsOpcode`](#type-atomicsopcode)
  - [`Valtype`](#type-valtype)
  - [`RefType`](#type-reftype)
  - [`Limits`](#type-limits)
  - [`Memory`](#type-memory)
  - [`Section`](#type-section)
  - [`ExternalKind`](#type-externalkind)
  - [`NameSubsection`](#type-namesubsection)
  - [`BlockType`](#type-blocktype)

- [Constants](#constants)
  - [`InitExpression`](#const-initexpression)
  - [`element\_type`](#const-element-type)
  - [`function\_type`](#const-function-type)
  - [`result\_type`](#const-result-type)
  - [`magic`](#const-magic)
  - [`version`](#const-version)
  - [`page\_size`](#const-page-size)

---

## Types (12)

### <a id="type-opcode"></a>`Opcode`

<details class="declaration-card" open>
<summary>Container – Wasm instruction opcodes</summary>

Wasm instruction opcodes

All instructions are defined as per spec:
https://webassembly.github.io/spec/core/appendix/index-instructions.html

\`\`\`zig
pub const Opcode = enum(u8) {
    @"unreachable" = 0x00,
    nop = 0x01,
    block = 0x02,
    loop = 0x03,
    @"if" = 0x04,
    @"else" = 0x05,
    end = 0x0B,
    br = 0x0C,
    br_if = 0x0D,
    br_table = 0x0E,
    @"return" = 0x0F,
    call = 0x10,
    call_indirect = 0x11,
    drop = 0x1A,
    select = 0x1B,
    local_get = 0x20,
    local_set = 0x21,
    local_tee = 0x22,
    global_get = 0x23,
    global_set = 0x24,
    i32_load = 0x28,
    i64_load = 0x29,
    f32_load = 0x2A,
    f64_load = 0x2B,
    i32_load8_s = 0x2C,
    i32_load8_u = 0x2D,
    i32_load16_s = 0x2E,
    i32_load16_u = 0x2F,
    i64_load8_s = 0x30,
    i64_load8_u = 0x31,
    i64_load16_s = 0x32,
    i64_load16_u = 0x33,
    i64_load32_s = 0x34,
    i64_load32_u = 0x35,
    i32_store = 0x36,
    i64_store = 0x37,
    f32_store = 0x38,
    f64_store = 0x39,
    i32_store8 = 0x3A,
    i32_store16 = 0x3B,
    i64_store8 = 0x3C,
    i64_store16 = 0x3D,
    i64_store32 = 0x3E,
    memory_size = 0x3F,
    memory_grow = 0x40,
    i32_const = 0x41,
    i64_const = 0x42,
    f32_const = 0x43,
    f64_const = 0x44,
    i32_eqz = 0x45,
    i32_eq = 0x46,
    i32_ne = 0x47,
    i32_lt_s = 0x48,
    i32_lt_u = 0x49,
    i32_gt_s = 0x4A,
    i32_gt_u = 0x4B,
    i32_le_s = 0x4C,
    i32_le_u = 0x4D,
    i32_ge_s = 0x4E,
    i32_ge_u = 0x4F,
    i64_eqz = 0x50,
    i64_eq = 0x51,
    i64_ne = 0x52,
    i64_lt_s = 0x53,
    i64_lt_u = 0x54,
    i64_gt_s = 0x55,
    i64_gt_u = 0x56,
    i64_le_s = 0x57,
    i64_le_u = 0x58,
    i64_ge_s = 0x59,
    i64_ge_u = 0x5A,
    f32_eq = 0x5B,
    f32_ne = 0x5C,
    f32_lt = 0x5D,
    f32_gt = 0x5E,
    f32_le = 0x5F,
    f32_ge = 0x60,
    f64_eq = 0x61,
    f64_ne = 0x62,
    f64_lt = 0x63,
    f64_gt = 0x64,
    f64_le = 0x65,
    f64_ge = 0x66,
    i32_clz = 0x67,
    i32_ctz = 0x68,
    i32_popcnt = 0x69,
    i32_add = 0x6A,
    i32_sub = 0x6B,
    i32_mul = 0x6C,
    i32_div_s = 0x6D,
    i32_div_u = 0x6E,
    i32_rem_s = 0x6F,
    i32_rem_u = 0x70,
    i32_and = 0x71,
    i32_or = 0x72,
    i32_xor = 0x73,
    i32_shl = 0x74,
    i32_shr_s = 0x75,
    i32_shr_u = 0x76,
    i32_rotl = 0x77,
    i32_rotr = 0x78,
    i64_clz = 0x79,
    i64_ctz = 0x7A,
    i64_popcnt = 0x7B,
    i64_add = 0x7C,
    i64_sub = 0x7D,
    i64_mul = 0x7E,
    i64_div_s = 0x7F,
    i64_div_u = 0x80,
    i64_rem_s = 0x81,
    i64_rem_u = 0x82,
    i64_and = 0x83,
    i64_or = 0x84,
    i64_xor = 0x85,
    i64_shl = 0x86,
    i64_shr_s = 0x87,
    i64_shr_u = 0x88,
    i64_rotl = 0x89,
    i64_rotr = 0x8A,
    f32_abs = 0x8B,
    f32_neg = 0x8C,
    f32_ceil = 0x8D,
    f32_floor = 0x8E,
    f32_trunc = 0x8F,
    f32_nearest = 0x90,
    f32_sqrt = 0x91,
    f32_add = 0x92,
    f32_sub = 0x93,
    f32_mul = 0x94,
    f32_div = 0x95,
    f32_min = 0x96,
    f32_max = 0x97,
    f32_copysign = 0x98,
    f64_abs = 0x99,
    f64_neg = 0x9A,
    f64_ceil = 0x9B,
    f64_floor = 0x9C,
    f64_trunc = 0x9D,
    f64_nearest = 0x9E,
    f64_sqrt = 0x9F,
    f64_add = 0xA0,
    f64_sub = 0xA1,
    f64_mul = 0xA2,
    f64_div = 0xA3,
    f64_min = 0xA4,
    f64_max = 0xA5,
    f64_copysign = 0xA6,
    i32_wrap_i64 = 0xA7,
    i32_trunc_f32_s = 0xA8,
    i32_trunc_f32_u = 0xA9,
    i32_trunc_f64_s = 0xAA,
    i32_trunc_f64_u = 0xAB,
    i64_extend_i32_s = 0xAC,
    i64_extend_i32_u = 0xAD,
    i64_trunc_f32_s = 0xAE,
    i64_trunc_f32_u = 0xAF,
    i64_trunc_f64_s = 0xB0,
    i64_trunc_f64_u = 0xB1,
    f32_convert_i32_s = 0xB2,
    f32_convert_i32_u = 0xB3,
    f32_convert_i64_s = 0xB4,
    f32_convert_i64_u = 0xB5,
    f32_demote_f64 = 0xB6,
    f64_convert_i32_s = 0xB7,
    f64_convert_i32_u = 0xB8,
    f64_convert_i64_s = 0xB9,
    f64_convert_i64_u = 0xBA,
    f64_promote_f32 = 0xBB,
    i32_reinterpret_f32 = 0xBC,
    i64_reinterpret_f64 = 0xBD,
    f32_reinterpret_i32 = 0xBE,
    f64_reinterpret_i64 = 0xBF,
    i32_extend8_s = 0xC0,
    i32_extend16_s = 0xC1,
    i64_extend8_s = 0xC2,
    i64_extend16_s = 0xC3,
    i64_extend32_s = 0xC4,

    misc_prefix = 0xFC,
    simd_prefix = 0xFD,
    atomics_prefix = 0xFE,
    _,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `@"unreachable"` |  |
| `nop` |  |
| `block` |  |
| `loop` |  |
| `@"if"` |  |
| `@"else"` |  |
| `end` |  |
| `br` |  |
| `br_if` |  |
| `br_table` |  |
| `@"return"` |  |
| `call` |  |
| `call_indirect` |  |
| `drop` |  |
| `select` |  |
| `local_get` |  |
| `local_set` |  |
| `local_tee` |  |
| `global_get` |  |
| `global_set` |  |
| `i32_load` |  |
| `i64_load` |  |
| `f32_load` |  |
| `f64_load` |  |
| `i32_load8_s` |  |
| `i32_load8_u` |  |
| `i32_load16_s` |  |
| `i32_load16_u` |  |
| `i64_load8_s` |  |
| `i64_load8_u` |  |
| `i64_load16_s` |  |
| `i64_load16_u` |  |
| `i64_load32_s` |  |
| `i64_load32_u` |  |
| `i32_store` |  |
| `i64_store` |  |
| `f32_store` |  |
| `f64_store` |  |
| `i32_store8` |  |
| `i32_store16` |  |
| `i64_store8` |  |
| `i64_store16` |  |
| `i64_store32` |  |
| `memory_size` |  |
| `memory_grow` |  |
| `i32_const` |  |
| `i64_const` |  |
| `f32_const` |  |
| `f64_const` |  |
| `i32_eqz` |  |
| `i32_eq` |  |
| `i32_ne` |  |
| `i32_lt_s` |  |
| `i32_lt_u` |  |
| `i32_gt_s` |  |
| `i32_gt_u` |  |
| `i32_le_s` |  |
| `i32_le_u` |  |
| `i32_ge_s` |  |
| `i32_ge_u` |  |
| `i64_eqz` |  |
| `i64_eq` |  |
| `i64_ne` |  |
| `i64_lt_s` |  |
| `i64_lt_u` |  |
| `i64_gt_s` |  |
| `i64_gt_u` |  |
| `i64_le_s` |  |
| `i64_le_u` |  |
| `i64_ge_s` |  |
| `i64_ge_u` |  |
| `f32_eq` |  |
| `f32_ne` |  |
| `f32_lt` |  |
| `f32_gt` |  |
| `f32_le` |  |
| `f32_ge` |  |
| `f64_eq` |  |
| `f64_ne` |  |
| `f64_lt` |  |
| `f64_gt` |  |
| `f64_le` |  |
| `f64_ge` |  |
| `i32_clz` |  |
| `i32_ctz` |  |
| `i32_popcnt` |  |
| `i32_add` |  |
| `i32_sub` |  |
| `i32_mul` |  |
| `i32_div_s` |  |
| `i32_div_u` |  |
| `i32_rem_s` |  |
| `i32_rem_u` |  |
| `i32_and` |  |
| `i32_or` |  |
| `i32_xor` |  |
| `i32_shl` |  |
| `i32_shr_s` |  |
| `i32_shr_u` |  |
| `i32_rotl` |  |
| `i32_rotr` |  |
| `i64_clz` |  |
| `i64_ctz` |  |
| `i64_popcnt` |  |
| `i64_add` |  |
| `i64_sub` |  |
| `i64_mul` |  |
| `i64_div_s` |  |
| `i64_div_u` |  |
| `i64_rem_s` |  |
| `i64_rem_u` |  |
| `i64_and` |  |
| `i64_or` |  |
| `i64_xor` |  |
| `i64_shl` |  |
| `i64_shr_s` |  |
| `i64_shr_u` |  |
| `i64_rotl` |  |
| `i64_rotr` |  |
| `f32_abs` |  |
| `f32_neg` |  |
| `f32_ceil` |  |
| `f32_floor` |  |
| `f32_trunc` |  |
| `f32_nearest` |  |
| `f32_sqrt` |  |
| `f32_add` |  |
| `f32_sub` |  |
| `f32_mul` |  |
| `f32_div` |  |
| `f32_min` |  |
| `f32_max` |  |
| `f32_copysign` |  |
| `f64_abs` |  |
| `f64_neg` |  |
| `f64_ceil` |  |
| `f64_floor` |  |
| `f64_trunc` |  |
| `f64_nearest` |  |
| `f64_sqrt` |  |
| `f64_add` |  |
| `f64_sub` |  |
| `f64_mul` |  |
| `f64_div` |  |
| `f64_min` |  |
| `f64_max` |  |
| `f64_copysign` |  |
| `i32_wrap_i64` |  |
| `i32_trunc_f32_s` |  |
| `i32_trunc_f32_u` |  |
| `i32_trunc_f64_s` |  |
| `i32_trunc_f64_u` |  |
| `i64_extend_i32_s` |  |
| `i64_extend_i32_u` |  |
| `i64_trunc_f32_s` |  |
| `i64_trunc_f32_u` |  |
| `i64_trunc_f64_s` |  |
| `i64_trunc_f64_u` |  |
| `f32_convert_i32_s` |  |
| `f32_convert_i32_u` |  |
| `f32_convert_i64_s` |  |
| `f32_convert_i64_u` |  |
| `f32_demote_f64` |  |
| `f64_convert_i32_s` |  |
| `f64_convert_i32_u` |  |
| `f64_convert_i64_s` |  |
| `f64_convert_i64_u` |  |
| `f64_promote_f32` |  |
| `i32_reinterpret_f32` |  |
| `i64_reinterpret_f64` |  |
| `f32_reinterpret_i32` |  |
| `f64_reinterpret_i64` |  |
| `i32_extend8_s` |  |
| `i32_extend16_s` |  |
| `i64_extend8_s` |  |
| `i64_extend16_s` |  |
| `i64_extend32_s` |  |
| `misc_prefix` |  |
| `simd_prefix` |  |
| `atomics_prefix` |  |
| `_` |  |

</details>

---

### <a id="type-miscopcode"></a>`MiscOpcode`

<details class="declaration-card" open>
<summary>Container – Opcodes that require a prefix `0xFC`</summary>

Opcodes that require a prefix `0xFC`.
Each opcode represents a varuint32, meaning
they are encoded as leb128 in binary.

\`\`\`zig
pub const MiscOpcode = enum(u32) {
    i32_trunc_sat_f32_s = 0x00,
    i32_trunc_sat_f32_u = 0x01,
    i32_trunc_sat_f64_s = 0x02,
    i32_trunc_sat_f64_u = 0x03,
    i64_trunc_sat_f32_s = 0x04,
    i64_trunc_sat_f32_u = 0x05,
    i64_trunc_sat_f64_s = 0x06,
    i64_trunc_sat_f64_u = 0x07,
    memory_init = 0x08,
    data_drop = 0x09,
    memory_copy = 0x0A,
    memory_fill = 0x0B,
    table_init = 0x0C,
    elem_drop = 0x0D,
    table_copy = 0x0E,
    table_grow = 0x0F,
    table_size = 0x10,
    table_fill = 0x11,
    _,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `i32_trunc_sat_f32_s` |  |
| `i32_trunc_sat_f32_u` |  |
| `i32_trunc_sat_f64_s` |  |
| `i32_trunc_sat_f64_u` |  |
| `i64_trunc_sat_f32_s` |  |
| `i64_trunc_sat_f32_u` |  |
| `i64_trunc_sat_f64_s` |  |
| `i64_trunc_sat_f64_u` |  |
| `memory_init` |  |
| `data_drop` |  |
| `memory_copy` |  |
| `memory_fill` |  |
| `table_init` |  |
| `elem_drop` |  |
| `table_copy` |  |
| `table_grow` |  |
| `table_size` |  |
| `table_fill` |  |
| `_` |  |

</details>

---

### <a id="type-simdopcode"></a>`SimdOpcode`

<details class="declaration-card" open>
<summary>Container – Simd opcodes that require a prefix `0xFD`</summary>

Simd opcodes that require a prefix `0xFD`.
Each opcode represents a varuint32, meaning
they are encoded as leb128 in binary.

\`\`\`zig
pub const SimdOpcode = enum(u32) {
    v128_load = 0x00,
    v128_load8x8_s = 0x01,
    v128_load8x8_u = 0x02,
    v128_load16x4_s = 0x03,
    v128_load16x4_u = 0x04,
    v128_load32x2_s = 0x05,
    v128_load32x2_u = 0x06,
    v128_load8_splat = 0x07,
    v128_load16_splat = 0x08,
    v128_load32_splat = 0x09,
    v128_load64_splat = 0x0A,
    v128_store = 0x0B,
    v128_const = 0x0C,
    i8x16_shuffle = 0x0D,
    i8x16_swizzle = 0x0E,
    i8x16_splat = 0x0F,
    i16x8_splat = 0x10,
    i32x4_splat = 0x11,
    i64x2_splat = 0x12,
    f32x4_splat = 0x13,
    f64x2_splat = 0x14,
    i8x16_extract_lane_s = 0x15,
    i8x16_extract_lane_u = 0x16,
    i8x16_replace_lane = 0x17,
    i16x8_extract_lane_s = 0x18,
    i16x8_extract_lane_u = 0x19,
    i16x8_replace_lane = 0x1A,
    i32x4_extract_lane = 0x1B,
    i32x4_replace_lane = 0x1C,
    i64x2_extract_lane = 0x1D,
    i64x2_replace_lane = 0x1E,
    f32x4_extract_lane = 0x1F,
    f32x4_replace_lane = 0x20,
    f64x2_extract_lane = 0x21,
    f64x2_replace_lane = 0x22,
    i8x16_eq = 0x23,
    i16x8_eq = 0x2D,
    i32x4_eq = 0x37,
    i8x16_ne = 0x24,
    i16x8_ne = 0x2E,
    i32x4_ne = 0x38,
    i8x16_lt_s = 0x25,
    i16x8_lt_s = 0x2F,
    i32x4_lt_s = 0x39,
    i8x16_lt_u = 0x26,
    i16x8_lt_u = 0x30,
    i32x4_lt_u = 0x3A,
    i8x16_gt_s = 0x27,
    i16x8_gt_s = 0x31,
    i32x4_gt_s = 0x3B,
    i8x16_gt_u = 0x28,
    i16x8_gt_u = 0x32,
    i32x4_gt_u = 0x3C,
    i8x16_le_s = 0x29,
    i16x8_le_s = 0x33,
    i32x4_le_s = 0x3D,
    i8x16_le_u = 0x2A,
    i16x8_le_u = 0x34,
    i32x4_le_u = 0x3E,
    i8x16_ge_s = 0x2B,
    i16x8_ge_s = 0x35,
    i32x4_ge_s = 0x3F,
    i8x16_ge_u = 0x2C,
    i16x8_ge_u = 0x36,
    i32x4_ge_u = 0x40,
    f32x4_eq = 0x41,
    f64x2_eq = 0x47,
    f32x4_ne = 0x42,
    f64x2_ne = 0x48,
    f32x4_lt = 0x43,
    f64x2_lt = 0x49,
    f32x4_gt = 0x44,
    f64x2_gt = 0x4A,
    f32x4_le = 0x45,
    f64x2_le = 0x4B,
    f32x4_ge = 0x46,
    f64x2_ge = 0x4C,
    v128_not = 0x4D,
    v128_and = 0x4E,
    v128_andnot = 0x4F,
    v128_or = 0x50,
    v128_xor = 0x51,
    v128_bitselect = 0x52,
    v128_any_true = 0x53,
    v128_load8_lane = 0x54,
    v128_load16_lane = 0x55,
    v128_load32_lane = 0x56,
    v128_load64_lane = 0x57,
    v128_store8_lane = 0x58,
    v128_store16_lane = 0x59,
    v128_store32_lane = 0x5A,
    v128_store64_lane = 0x5B,
    v128_load32_zero = 0x5C,
    v128_load64_zero = 0x5D,
    f32x4_demote_f64x2_zero = 0x5E,
    f64x2_promote_low_f32x4 = 0x5F,
    i8x16_abs = 0x60,
    i16x8_abs = 0x80,
    i32x4_abs = 0xA0,
    i64x2_abs = 0xC0,
    i8x16_neg = 0x61,
    i16x8_neg = 0x81,
    i32x4_neg = 0xA1,
    i64x2_neg = 0xC1,
    i8x16_popcnt = 0x62,
    i16x8_q15mulr_sat_s = 0x82,
    i8x16_all_true = 0x63,
    i16x8_all_true = 0x83,
    i32x4_all_true = 0xA3,
    i64x2_all_true = 0xC3,
    i8x16_bitmask = 0x64,
    i16x8_bitmask = 0x84,
    i32x4_bitmask = 0xA4,
    i64x2_bitmask = 0xC4,
    i8x16_narrow_i16x8_s = 0x65,
    i16x8_narrow_i32x4_s = 0x85,
    i8x16_narrow_i16x8_u = 0x66,
    i16x8_narrow_i32x4_u = 0x86,
    f32x4_ceil = 0x67,
    i16x8_extend_low_i8x16_s = 0x87,
    i32x4_extend_low_i16x8_s = 0xA7,
    i64x2_extend_low_i32x4_s = 0xC7,
    f32x4_floor = 0x68,
    i16x8_extend_high_i8x16_s = 0x88,
    i32x4_extend_high_i16x8_s = 0xA8,
    i64x2_extend_high_i32x4_s = 0xC8,
    f32x4_trunc = 0x69,
    i16x8_extend_low_i8x16_u = 0x89,
    i32x4_extend_low_i16x8_u = 0xA9,
    i64x2_extend_low_i32x4_u = 0xC9,
    f32x4_nearest = 0x6A,
    i16x8_extend_high_i8x16_u = 0x8A,
    i32x4_extend_high_i16x8_u = 0xAA,
    i64x2_extend_high_i32x4_u = 0xCA,
    i8x16_shl = 0x6B,
    i16x8_shl = 0x8B,
    i32x4_shl = 0xAB,
    i64x2_shl = 0xCB,
    i8x16_shr_s = 0x6C,
    i16x8_shr_s = 0x8C,
    i32x4_shr_s = 0xAC,
    i64x2_shr_s = 0xCC,
    i8x16_shr_u = 0x6D,
    i16x8_shr_u = 0x8D,
    i32x4_shr_u = 0xAD,
    i64x2_shr_u = 0xCD,
    i8x16_add = 0x6E,
    i16x8_add = 0x8E,
    i32x4_add = 0xAE,
    i64x2_add = 0xCE,
    i8x16_add_sat_s = 0x6F,
    i16x8_add_sat_s = 0x8F,
    i8x16_add_sat_u = 0x70,
    i16x8_add_sat_u = 0x90,
    i8x16_sub = 0x71,
    i16x8_sub = 0x91,
    i32x4_sub = 0xB1,
    i64x2_sub = 0xD1,
    i8x16_sub_sat_s = 0x72,
    i16x8_sub_sat_s = 0x92,
    i8x16_sub_sat_u = 0x73,
    i16x8_sub_sat_u = 0x93,
    f64x2_ceil = 0x74,
    f64x2_nearest = 0x94,
    f64x2_floor = 0x75,
    i16x8_mul = 0x95,
    i32x4_mul = 0xB5,
    i64x2_mul = 0xD5,
    i8x16_min_s = 0x76,
    i16x8_min_s = 0x96,
    i32x4_min_s = 0xB6,
    i64x2_eq = 0xD6,
    i8x16_min_u = 0x77,
    i16x8_min_u = 0x97,
    i32x4_min_u = 0xB7,
    i64x2_ne = 0xD7,
    i8x16_max_s = 0x78,
    i16x8_max_s = 0x98,
    i32x4_max_s = 0xB8,
    i64x2_lt_s = 0xD8,
    i8x16_max_u = 0x79,
    i16x8_max_u = 0x99,
    i32x4_max_u = 0xB9,
    i64x2_gt_s = 0xD9,
    f64x2_trunc = 0x7A,
    i32x4_dot_i16x8_s = 0xBA,
    i64x2_le_s = 0xDA,
    i8x16_avgr_u = 0x7B,
    i16x8_avgr_u = 0x9B,
    i64x2_ge_s = 0xDB,
    i16x8_extadd_pairwise_i8x16_s = 0x7C,
    i16x8_extmul_low_i8x16_s = 0x9C,
    i32x4_extmul_low_i16x8_s = 0xBC,
    i64x2_extmul_low_i32x4_s = 0xDC,
    i16x8_extadd_pairwise_i8x16_u = 0x7D,
    i16x8_extmul_high_i8x16_s = 0x9D,
    i32x4_extmul_high_i16x8_s = 0xBD,
    i64x2_extmul_high_i32x4_s = 0xDD,
    i32x4_extadd_pairwise_i16x8_s = 0x7E,
    i16x8_extmul_low_i8x16_u = 0x9E,
    i32x4_extmul_low_i16x8_u = 0xBE,
    i64x2_extmul_low_i32x4_u = 0xDE,
    i32x4_extadd_pairwise_i16x8_u = 0x7F,
    i16x8_extmul_high_i8x16_u = 0x9F,
    i32x4_extmul_high_i16x8_u = 0xBF,
    i64x2_extmul_high_i32x4_u = 0xDF,
    f32x4_abs = 0xE0,
    f64x2_abs = 0xEC,
    f32x4_neg = 0xE1,
    f64x2_neg = 0xED,
    f32x4_sqrt = 0xE3,
    f64x2_sqrt = 0xEF,
    f32x4_add = 0xE4,
    f64x2_add = 0xF0,
    f32x4_sub = 0xE5,
    f64x2_sub = 0xF1,
    f32x4_mul = 0xE6,
    f64x2_mul = 0xF2,
    f32x4_div = 0xE7,
    f64x2_div = 0xF3,
    f32x4_min = 0xE8,
    f64x2_min = 0xF4,
    f32x4_max = 0xE9,
    f64x2_max = 0xF5,
    f32x4_pmin = 0xEA,
    f64x2_pmin = 0xF6,
    f32x4_pmax = 0xEB,
    f64x2_pmax = 0xF7,
    i32x4_trunc_sat_f32x4_s = 0xF8,
    i32x4_trunc_sat_f32x4_u = 0xF9,
    f32x4_convert_i32x4_s = 0xFA,
    f32x4_convert_i32x4_u = 0xFB,
    i32x4_trunc_sat_f64x2_s_zero = 0xFC,
    i32x4_trunc_sat_f64x2_u_zero = 0xFD,
    f64x2_convert_low_i32x4_s = 0xFE,
    f64x2_convert_low_i32x4_u = 0xFF,

    // relaxed-simd opcodes
    i8x16_relaxed_swizzle = 0x100,
    i32x4_relaxed_trunc_f32x4_s = 0x101,
    i32x4_relaxed_trunc_f32x4_u = 0x102,
    i32x4_relaxed_trunc_f64x2_s_zero = 0x103,
    i32x4_relaxed_trunc_f64x2_u_zero = 0x104,
    f32x4_relaxed_madd = 0x105,
    f32x4_relaxed_nmadd = 0x106,
    f64x2_relaxed_madd = 0x107,
    f64x2_relaxed_nmadd = 0x108,
    i8x16_relaxed_laneselect = 0x109,
    i16x8_relaxed_laneselect = 0x10a,
    i32x4_relaxed_laneselect = 0x10b,
    i64x2_relaxed_laneselect = 0x10c,
    f32x4_relaxed_min = 0x10d,
    f32x4_relaxed_max = 0x10e,
    f64x2_relaxed_min = 0x10f,
    f64x2_relaxed_max = 0x110,
    i16x8_relaxed_q15mulr_s = 0x111,
    i16x8_relaxed_dot_i8x16_i7x16_s = 0x112,
    i32x4_relaxed_dot_i8x16_i7x16_add_s = 0x113,
    f32x4_relaxed_dot_bf16x8_add_f32x4 = 0x114,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `v128_load` |  |
| `v128_load8x8_s` |  |
| `v128_load8x8_u` |  |
| `v128_load16x4_s` |  |
| `v128_load16x4_u` |  |
| `v128_load32x2_s` |  |
| `v128_load32x2_u` |  |
| `v128_load8_splat` |  |
| `v128_load16_splat` |  |
| `v128_load32_splat` |  |
| `v128_load64_splat` |  |
| `v128_store` |  |
| `v128_const` |  |
| `i8x16_shuffle` |  |
| `i8x16_swizzle` |  |
| `i8x16_splat` |  |
| `i16x8_splat` |  |
| `i32x4_splat` |  |
| `i64x2_splat` |  |
| `f32x4_splat` |  |
| `f64x2_splat` |  |
| `i8x16_extract_lane_s` |  |
| `i8x16_extract_lane_u` |  |
| `i8x16_replace_lane` |  |
| `i16x8_extract_lane_s` |  |
| `i16x8_extract_lane_u` |  |
| `i16x8_replace_lane` |  |
| `i32x4_extract_lane` |  |
| `i32x4_replace_lane` |  |
| `i64x2_extract_lane` |  |
| `i64x2_replace_lane` |  |
| `f32x4_extract_lane` |  |
| `f32x4_replace_lane` |  |
| `f64x2_extract_lane` |  |
| `f64x2_replace_lane` |  |
| `i8x16_eq` |  |
| `i16x8_eq` |  |
| `i32x4_eq` |  |
| `i8x16_ne` |  |
| `i16x8_ne` |  |
| `i32x4_ne` |  |
| `i8x16_lt_s` |  |
| `i16x8_lt_s` |  |
| `i32x4_lt_s` |  |
| `i8x16_lt_u` |  |
| `i16x8_lt_u` |  |
| `i32x4_lt_u` |  |
| `i8x16_gt_s` |  |
| `i16x8_gt_s` |  |
| `i32x4_gt_s` |  |
| `i8x16_gt_u` |  |
| `i16x8_gt_u` |  |
| `i32x4_gt_u` |  |
| `i8x16_le_s` |  |
| `i16x8_le_s` |  |
| `i32x4_le_s` |  |
| `i8x16_le_u` |  |
| `i16x8_le_u` |  |
| `i32x4_le_u` |  |
| `i8x16_ge_s` |  |
| `i16x8_ge_s` |  |
| `i32x4_ge_s` |  |
| `i8x16_ge_u` |  |
| `i16x8_ge_u` |  |
| `i32x4_ge_u` |  |
| `f32x4_eq` |  |
| `f64x2_eq` |  |
| `f32x4_ne` |  |
| `f64x2_ne` |  |
| `f32x4_lt` |  |
| `f64x2_lt` |  |
| `f32x4_gt` |  |
| `f64x2_gt` |  |
| `f32x4_le` |  |
| `f64x2_le` |  |
| `f32x4_ge` |  |
| `f64x2_ge` |  |
| `v128_not` |  |
| `v128_and` |  |
| `v128_andnot` |  |
| `v128_or` |  |
| `v128_xor` |  |
| `v128_bitselect` |  |
| `v128_any_true` |  |
| `v128_load8_lane` |  |
| `v128_load16_lane` |  |
| `v128_load32_lane` |  |
| `v128_load64_lane` |  |
| `v128_store8_lane` |  |
| `v128_store16_lane` |  |
| `v128_store32_lane` |  |
| `v128_store64_lane` |  |
| `v128_load32_zero` |  |
| `v128_load64_zero` |  |
| `f32x4_demote_f64x2_zero` |  |
| `f64x2_promote_low_f32x4` |  |
| `i8x16_abs` |  |
| `i16x8_abs` |  |
| `i32x4_abs` |  |
| `i64x2_abs` |  |
| `i8x16_neg` |  |
| `i16x8_neg` |  |
| `i32x4_neg` |  |
| `i64x2_neg` |  |
| `i8x16_popcnt` |  |
| `i16x8_q15mulr_sat_s` |  |
| `i8x16_all_true` |  |
| `i16x8_all_true` |  |
| `i32x4_all_true` |  |
| `i64x2_all_true` |  |
| `i8x16_bitmask` |  |
| `i16x8_bitmask` |  |
| `i32x4_bitmask` |  |
| `i64x2_bitmask` |  |
| `i8x16_narrow_i16x8_s` |  |
| `i16x8_narrow_i32x4_s` |  |
| `i8x16_narrow_i16x8_u` |  |
| `i16x8_narrow_i32x4_u` |  |
| `f32x4_ceil` |  |
| `i16x8_extend_low_i8x16_s` |  |
| `i32x4_extend_low_i16x8_s` |  |
| `i64x2_extend_low_i32x4_s` |  |
| `f32x4_floor` |  |
| `i16x8_extend_high_i8x16_s` |  |
| `i32x4_extend_high_i16x8_s` |  |
| `i64x2_extend_high_i32x4_s` |  |
| `f32x4_trunc` |  |
| `i16x8_extend_low_i8x16_u` |  |
| `i32x4_extend_low_i16x8_u` |  |
| `i64x2_extend_low_i32x4_u` |  |
| `f32x4_nearest` |  |
| `i16x8_extend_high_i8x16_u` |  |
| `i32x4_extend_high_i16x8_u` |  |
| `i64x2_extend_high_i32x4_u` |  |
| `i8x16_shl` |  |
| `i16x8_shl` |  |
| `i32x4_shl` |  |
| `i64x2_shl` |  |
| `i8x16_shr_s` |  |
| `i16x8_shr_s` |  |
| `i32x4_shr_s` |  |
| `i64x2_shr_s` |  |
| `i8x16_shr_u` |  |
| `i16x8_shr_u` |  |
| `i32x4_shr_u` |  |
| `i64x2_shr_u` |  |
| `i8x16_add` |  |
| `i16x8_add` |  |
| `i32x4_add` |  |
| `i64x2_add` |  |
| `i8x16_add_sat_s` |  |
| `i16x8_add_sat_s` |  |
| `i8x16_add_sat_u` |  |
| `i16x8_add_sat_u` |  |
| `i8x16_sub` |  |
| `i16x8_sub` |  |
| `i32x4_sub` |  |
| `i64x2_sub` |  |
| `i8x16_sub_sat_s` |  |
| `i16x8_sub_sat_s` |  |
| `i8x16_sub_sat_u` |  |
| `i16x8_sub_sat_u` |  |
| `f64x2_ceil` |  |
| `f64x2_nearest` |  |
| `f64x2_floor` |  |
| `i16x8_mul` |  |
| `i32x4_mul` |  |
| `i64x2_mul` |  |
| `i8x16_min_s` |  |
| `i16x8_min_s` |  |
| `i32x4_min_s` |  |
| `i64x2_eq` |  |
| `i8x16_min_u` |  |
| `i16x8_min_u` |  |
| `i32x4_min_u` |  |
| `i64x2_ne` |  |
| `i8x16_max_s` |  |
| `i16x8_max_s` |  |
| `i32x4_max_s` |  |
| `i64x2_lt_s` |  |
| `i8x16_max_u` |  |
| `i16x8_max_u` |  |
| `i32x4_max_u` |  |
| `i64x2_gt_s` |  |
| `f64x2_trunc` |  |
| `i32x4_dot_i16x8_s` |  |
| `i64x2_le_s` |  |
| `i8x16_avgr_u` |  |
| `i16x8_avgr_u` |  |
| `i64x2_ge_s` |  |
| `i16x8_extadd_pairwise_i8x16_s` |  |
| `i16x8_extmul_low_i8x16_s` |  |
| `i32x4_extmul_low_i16x8_s` |  |
| `i64x2_extmul_low_i32x4_s` |  |
| `i16x8_extadd_pairwise_i8x16_u` |  |
| `i16x8_extmul_high_i8x16_s` |  |
| `i32x4_extmul_high_i16x8_s` |  |
| `i64x2_extmul_high_i32x4_s` |  |
| `i32x4_extadd_pairwise_i16x8_s` |  |
| `i16x8_extmul_low_i8x16_u` |  |
| `i32x4_extmul_low_i16x8_u` |  |
| `i64x2_extmul_low_i32x4_u` |  |
| `i32x4_extadd_pairwise_i16x8_u` |  |
| `i16x8_extmul_high_i8x16_u` |  |
| `i32x4_extmul_high_i16x8_u` |  |
| `i64x2_extmul_high_i32x4_u` |  |
| `f32x4_abs` |  |
| `f64x2_abs` |  |
| `f32x4_neg` |  |
| `f64x2_neg` |  |
| `f32x4_sqrt` |  |
| `f64x2_sqrt` |  |
| `f32x4_add` |  |
| `f64x2_add` |  |
| `f32x4_sub` |  |
| `f64x2_sub` |  |
| `f32x4_mul` |  |
| `f64x2_mul` |  |
| `f32x4_div` |  |
| `f64x2_div` |  |
| `f32x4_min` |  |
| `f64x2_min` |  |
| `f32x4_max` |  |
| `f64x2_max` |  |
| `f32x4_pmin` |  |
| `f64x2_pmin` |  |
| `f32x4_pmax` |  |
| `f64x2_pmax` |  |
| `i32x4_trunc_sat_f32x4_s` |  |
| `i32x4_trunc_sat_f32x4_u` |  |
| `f32x4_convert_i32x4_s` |  |
| `f32x4_convert_i32x4_u` |  |
| `i32x4_trunc_sat_f64x2_s_zero` |  |
| `i32x4_trunc_sat_f64x2_u_zero` |  |
| `f64x2_convert_low_i32x4_s` |  |
| `f64x2_convert_low_i32x4_u` |  |
| `i8x16_relaxed_swizzle` |  |
| `i32x4_relaxed_trunc_f32x4_s` |  |
| `i32x4_relaxed_trunc_f32x4_u` |  |
| `i32x4_relaxed_trunc_f64x2_s_zero` |  |
| `i32x4_relaxed_trunc_f64x2_u_zero` |  |
| `f32x4_relaxed_madd` |  |
| `f32x4_relaxed_nmadd` |  |
| `f64x2_relaxed_madd` |  |
| `f64x2_relaxed_nmadd` |  |
| `i8x16_relaxed_laneselect` |  |
| `i16x8_relaxed_laneselect` |  |
| `i32x4_relaxed_laneselect` |  |
| `i64x2_relaxed_laneselect` |  |
| `f32x4_relaxed_min` |  |
| `f32x4_relaxed_max` |  |
| `f64x2_relaxed_min` |  |
| `f64x2_relaxed_max` |  |
| `i16x8_relaxed_q15mulr_s` |  |
| `i16x8_relaxed_dot_i8x16_i7x16_s` |  |
| `i32x4_relaxed_dot_i8x16_i7x16_add_s` |  |
| `f32x4_relaxed_dot_bf16x8_add_f32x4` |  |

</details>

---

### <a id="type-atomicsopcode"></a>`AtomicsOpcode`

<details class="declaration-card" open>
<summary>Container – Atomic opcodes that require a prefix `0xFE`</summary>

Atomic opcodes that require a prefix `0xFE`.
Each opcode represents a varuint32, meaning
they are encoded as leb128 in binary.

\`\`\`zig
pub const AtomicsOpcode = enum(u32) {
    memory_atomic_notify = 0x00,
    memory_atomic_wait32 = 0x01,
    memory_atomic_wait64 = 0x02,
    atomic_fence = 0x03,
    i32_atomic_load = 0x10,
    i64_atomic_load = 0x11,
    i32_atomic_load8_u = 0x12,
    i32_atomic_load16_u = 0x13,
    i64_atomic_load8_u = 0x14,
    i64_atomic_load16_u = 0x15,
    i64_atomic_load32_u = 0x16,
    i32_atomic_store = 0x17,
    i64_atomic_store = 0x18,
    i32_atomic_store8 = 0x19,
    i32_atomic_store16 = 0x1A,
    i64_atomic_store8 = 0x1B,
    i64_atomic_store16 = 0x1C,
    i64_atomic_store32 = 0x1D,
    i32_atomic_rmw_add = 0x1E,
    i64_atomic_rmw_add = 0x1F,
    i32_atomic_rmw8_add_u = 0x20,
    i32_atomic_rmw16_add_u = 0x21,
    i64_atomic_rmw8_add_u = 0x22,
    i64_atomic_rmw16_add_u = 0x23,
    i64_atomic_rmw32_add_u = 0x24,
    i32_atomic_rmw_sub = 0x25,
    i64_atomic_rmw_sub = 0x26,
    i32_atomic_rmw8_sub_u = 0x27A,
    i32_atomic_rmw16_sub_u = 0x28A,
    i64_atomic_rmw8_sub_u = 0x29A,
    i64_atomic_rmw16_sub_u = 0x2A,
    i64_atomic_rmw32_sub_u = 0x2B,
    i32_atomic_rmw_and = 0x2C,
    i64_atomic_rmw_and = 0x2D,
    i32_atomic_rmw8_and_u = 0x2E,
    i32_atomic_rmw16_and_u = 0x2F,
    i64_atomic_rmw8_and_u = 0x30,
    i64_atomic_rmw16_and_u = 0x31,
    i64_atomic_rmw32_and_u = 0x32,
    i32_atomic_rmw_or = 0x33,
    i64_atomic_rmw_or = 0x34,
    i32_atomic_rmw8_or_u = 0x35,
    i32_atomic_rmw16_or_u = 0x36,
    i64_atomic_rmw8_or_u = 0x37,
    i64_atomic_rmw16_or_u = 0x38,
    i64_atomic_rmw32_or_u = 0x39,
    i32_atomic_rmw_xor = 0x3A,
    i64_atomic_rmw_xor = 0x3B,
    i32_atomic_rmw8_xor_u = 0x3C,
    i32_atomic_rmw16_xor_u = 0x3D,
    i64_atomic_rmw8_xor_u = 0x3E,
    i64_atomic_rmw16_xor_u = 0x3F,
    i64_atomic_rmw32_xor_u = 0x40,
    i32_atomic_rmw_xchg = 0x41,
    i64_atomic_rmw_xchg = 0x42,
    i32_atomic_rmw8_xchg_u = 0x43,
    i32_atomic_rmw16_xchg_u = 0x44,
    i64_atomic_rmw8_xchg_u = 0x45,
    i64_atomic_rmw16_xchg_u = 0x46,
    i64_atomic_rmw32_xchg_u = 0x47,

    i32_atomic_rmw_cmpxchg = 0x48,
    i64_atomic_rmw_cmpxchg = 0x49,
    i32_atomic_rmw8_cmpxchg_u = 0x4A,
    i32_atomic_rmw16_cmpxchg_u = 0x4B,
    i64_atomic_rmw8_cmpxchg_u = 0x4C,
    i64_atomic_rmw16_cmpxchg_u = 0x4D,
    i64_atomic_rmw32_cmpxchg_u = 0x4E,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `memory_atomic_notify` |  |
| `memory_atomic_wait32` |  |
| `memory_atomic_wait64` |  |
| `atomic_fence` |  |
| `i32_atomic_load` |  |
| `i64_atomic_load` |  |
| `i32_atomic_load8_u` |  |
| `i32_atomic_load16_u` |  |
| `i64_atomic_load8_u` |  |
| `i64_atomic_load16_u` |  |
| `i64_atomic_load32_u` |  |
| `i32_atomic_store` |  |
| `i64_atomic_store` |  |
| `i32_atomic_store8` |  |
| `i32_atomic_store16` |  |
| `i64_atomic_store8` |  |
| `i64_atomic_store16` |  |
| `i64_atomic_store32` |  |
| `i32_atomic_rmw_add` |  |
| `i64_atomic_rmw_add` |  |
| `i32_atomic_rmw8_add_u` |  |
| `i32_atomic_rmw16_add_u` |  |
| `i64_atomic_rmw8_add_u` |  |
| `i64_atomic_rmw16_add_u` |  |
| `i64_atomic_rmw32_add_u` |  |
| `i32_atomic_rmw_sub` |  |
| `i64_atomic_rmw_sub` |  |
| `i32_atomic_rmw8_sub_u` |  |
| `i32_atomic_rmw16_sub_u` |  |
| `i64_atomic_rmw8_sub_u` |  |
| `i64_atomic_rmw16_sub_u` |  |
| `i64_atomic_rmw32_sub_u` |  |
| `i32_atomic_rmw_and` |  |
| `i64_atomic_rmw_and` |  |
| `i32_atomic_rmw8_and_u` |  |
| `i32_atomic_rmw16_and_u` |  |
| `i64_atomic_rmw8_and_u` |  |
| `i64_atomic_rmw16_and_u` |  |
| `i64_atomic_rmw32_and_u` |  |
| `i32_atomic_rmw_or` |  |
| `i64_atomic_rmw_or` |  |
| `i32_atomic_rmw8_or_u` |  |
| `i32_atomic_rmw16_or_u` |  |
| `i64_atomic_rmw8_or_u` |  |
| `i64_atomic_rmw16_or_u` |  |
| `i64_atomic_rmw32_or_u` |  |
| `i32_atomic_rmw_xor` |  |
| `i64_atomic_rmw_xor` |  |
| `i32_atomic_rmw8_xor_u` |  |
| `i32_atomic_rmw16_xor_u` |  |
| `i64_atomic_rmw8_xor_u` |  |
| `i64_atomic_rmw16_xor_u` |  |
| `i64_atomic_rmw32_xor_u` |  |
| `i32_atomic_rmw_xchg` |  |
| `i64_atomic_rmw_xchg` |  |
| `i32_atomic_rmw8_xchg_u` |  |
| `i32_atomic_rmw16_xchg_u` |  |
| `i64_atomic_rmw8_xchg_u` |  |
| `i64_atomic_rmw16_xchg_u` |  |
| `i64_atomic_rmw32_xchg_u` |  |
| `i32_atomic_rmw_cmpxchg` |  |
| `i64_atomic_rmw_cmpxchg` |  |
| `i32_atomic_rmw8_cmpxchg_u` |  |
| `i32_atomic_rmw16_cmpxchg_u` |  |
| `i64_atomic_rmw8_cmpxchg_u` |  |
| `i64_atomic_rmw16_cmpxchg_u` |  |
| `i64_atomic_rmw32_cmpxchg_u` |  |

</details>

---

### <a id="type-valtype"></a>`Valtype`

<details class="declaration-card" open>
<summary>Container – Enum representing all Wasm value types as per spec:</summary>

Enum representing all Wasm value types as per spec:
https://webassembly.github.io/spec/core/binary/types.html

\`\`\`zig
pub const Valtype = enum(u8) {
    i32 = 0x7F,
    i64 = 0x7E,
    f32 = 0x7D,
    f64 = 0x7C,
    v128 = 0x7B,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `i32` |  |
| `i64` |  |
| `f32` |  |
| `f64` |  |
| `v128` |  |

</details>

---

### <a id="type-reftype"></a>`RefType`

<details class="declaration-card" open>
<summary>Container – Reference types, where the funcref references to a function regardless of its type</summary>

Reference types, where the funcref references to a function regardless of its type
and ref references an object from the embedder.

\`\`\`zig
pub const RefType = enum(u8) {
    funcref = 0x70,
    externref = 0x6F,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `funcref` |  |
| `externref` |  |

</details>

---

### <a id="type-limits"></a>`Limits`

<details class="declaration-card" open>
<summary>Container – Limits classify the size range of resizeable storage associated with memory types and table types</summary>

Limits classify the size range of resizeable storage associated with memory types and table types.

\`\`\`zig
pub const Limits = struct {
    flags: Flags,
    min: u32,
    max: u32,

    pub const Flags = packed struct(u8) {
        has_max: bool,
        is_shared: bool,
        reserved: u6 = 0,
    };
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `flags` | `Flags` | – | |
| `min` | `u32` | – | |
| `max` | `u32` | – | |

</details>

---

### <a id="type-memory"></a>`Memory`

<details class="declaration-card" open>
<summary>Container – Describes the layout of the memory where `min` represents</summary>

Describes the layout of the memory where `min` represents
the minimal amount of pages, and the optional `max` represents
the max pages. When `null` will allow the host to determine the
amount of pages.

\`\`\`zig
pub const Memory = struct {
    limits: Limits,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `limits` | [`Limits`](#type-limits) | – | |

</details>

---

### <a id="type-section"></a>`Section`

<details class="declaration-card" open>
<summary>Container – Wasm module sections as per spec:</summary>

Wasm module sections as per spec:
https://webassembly.github.io/spec/core/binary/modules.html

\`\`\`zig
pub const Section = enum(u8) {
    custom,
    type,
    import,
    function,
    table,
    memory,
    global,
    @"export",
    start,
    element,
    code,
    data,
    data_count,
    _,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `custom` |  |
| `type` |  |
| `import` |  |
| `function` |  |
| `table` |  |
| `memory` |  |
| `global` |  |
| `@"export"` |  |
| `start` |  |
| `element` |  |
| `code` |  |
| `data` |  |
| `data_count` |  |
| `_` |  |

</details>

---

### <a id="type-externalkind"></a>`ExternalKind`

<details class="declaration-card" open>
<summary>Container – The kind of the type when importing or exporting to/from the host environment</summary>

The kind of the type when importing or exporting to/from the host environment.
https://webassembly.github.io/spec/core/syntax/modules.html

\`\`\`zig
pub const ExternalKind = enum(u8) {
    function,
    table,
    memory,
    global,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `function` |  |
| `table` |  |
| `memory` |  |
| `global` |  |

</details>

---

### <a id="type-namesubsection"></a>`NameSubsection`

<details class="declaration-card" open>
<summary>Container – Defines the enum values for each subsection id for the &quot;Names&quot; custom section</summary>

Defines the enum values for each subsection id for the "Names" custom section
as described by:
https://webassembly.github.io/spec/core/appendix/custom.html?highlight=name#name-section

\`\`\`zig
pub const NameSubsection = enum(u8) {
    module,
    function,
    local,
    label,
    type,
    table,
    memory,
    global,
    elem_segment,
    data_segment,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `module` |  |
| `function` |  |
| `local` |  |
| `label` |  |
| `type` |  |
| `table` |  |
| `memory` |  |
| `global` |  |
| `elem_segment` |  |
| `data_segment` |  |

</details>

---

### <a id="type-blocktype"></a>`BlockType`

<details class="declaration-card" open>
<summary>Container – Represents a block which will not return a value</summary>

Represents a block which will not return a value

\`\`\`zig
pub const BlockType = enum(u8) {
    empty = 0x40,
    i32 = 0x7F,
    i64 = 0x7E,
    f32 = 0x7D,
    f64 = 0x7C,
    v128 = 0x7B,

    pub fn fromValtype(valtype: Valtype) BlockType {
        return @enumFromInt(@intFromEnum(valtype));
    }
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `empty` |  |
| `i32` |  |
| `i64` |  |
| `f32` |  |
| `f64` |  |
| `v128` |  |

</details>

---

## Constants (7)

### <a id="const-initexpression"></a>`InitExpression`

<details class="declaration-card" open>
<summary>Constant – Initialization expressions are used to set the initial value on an object</summary>

Initialization expressions are used to set the initial value on an object
when a wasm module is being loaded.

\`\`\`zig
pub const InitExpression = union(enum) {
    i32_const: i32,
    i64_const: i64,
    f32_const: f32,
    f64_const: f64,
    global_get: u32,
}
\`\`\`

</details>

---

### <a id="const-element-type"></a>`element_type`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const element_type: u8 = 0x70
\`\`\`

</details>

---

### <a id="const-function-type"></a>`function_type`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const function_type: u8 = 0x60
\`\`\`

</details>

---

### <a id="const-result-type"></a>`result_type`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const result_type: u8 = 0x40
\`\`\`

</details>

---

### <a id="const-magic"></a>`magic`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const magic = [_]u8{ 0x00, 0x61, 0x73, 0x6D }
\`\`\`

</details>

---

### <a id="const-version"></a>`version`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const version = [_]u8{ 0x01, 0x00, 0x00, 0x00 }
\`\`\`

</details>

---

### <a id="const-page-size"></a>`page_size`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const page_size = 64 * 1024
\`\`\`

</details>

---
