# std.pdb

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.pdb` |
| Declarations | 22 |
| Breakdown | 21 types · 1 constant |
| Generated (unix epoch) | 1760148109 |

## Overview

Program Data Base debugging information format.

This namespace contains unopinionated types and data definitions only. For
an implementation of parsing and caching PDB information, see
`std.debug.Pdb`.

Most of this is based on information gathered from LLVM source code,
documentation and/or contributors.

---

## Table of Contents

- [Types](#types)
  - [`DbiStreamHeader`](#type-dbistreamheader)
  - [`SectionContribEntry`](#type-sectioncontribentry)
  - [`ModInfo`](#type-modinfo)
  - [`SectionMapHeader`](#type-sectionmapheader)
  - [`SectionMapEntry`](#type-sectionmapentry)
  - [`StreamType`](#type-streamtype)
  - [`SymbolKind`](#type-symbolkind)
  - [`ProcSym`](#type-procsym)
  - [`ProcSymFlags`](#type-procsymflags)
  - [`SectionContrSubstreamVersion`](#type-sectioncontrsubstreamversion)
  - [`RecordPrefix`](#type-recordprefix)
  - [`LineFragmentHeader`](#type-linefragmentheader)
  - [`LineFlags`](#type-lineflags)
  - [`LineBlockFragmentHeader`](#type-lineblockfragmentheader)
  - [`LineNumberEntry`](#type-linenumberentry)
  - [`ColumnNumberEntry`](#type-columnnumberentry)
  - [`FileChecksumEntryHeader`](#type-filechecksumentryheader)
  - [`DebugSubsectionKind`](#type-debugsubsectionkind)
  - [`DebugSubsectionHeader`](#type-debugsubsectionheader)
  - [`StringTableHeader`](#type-stringtableheader)
  - [`SuperBlock`](#type-superblock)

- [Constants](#constants)
  - [`TypeIndex`](#const-typeindex)

---

## Types (21)

### <a id="type-dbistreamheader"></a>`DbiStreamHeader`

<details class="declaration-card" open>
<summary>Container – https://llvm</summary>

https://llvm.org/docs/PDB/DbiStream.html#stream-header

\`\`\`zig
pub const DbiStreamHeader = extern struct {
    version_signature: i32,
    version_header: u32,
    age: u32,
    global_stream_index: u16,
    build_number: u16,
    public_stream_index: u16,
    pdb_dll_version: u16,
    sym_record_stream: u16,
    pdb_dll_rbld: u16,
    mod_info_size: u32,
    section_contribution_size: u32,
    section_map_size: u32,
    source_info_size: i32,
    type_server_size: i32,
    mfc_type_server_index: u32,
    optional_dbg_header_size: i32,
    ec_substream_size: i32,
    flags: u16,
    machine: u16,
    padding: u32,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `version_signature` | `i32` | – | |
| `version_header` | `u32` | – | |
| `age` | `u32` | – | |
| `global_stream_index` | `u16` | – | |
| `build_number` | `u16` | – | |
| `public_stream_index` | `u16` | – | |
| `pdb_dll_version` | `u16` | – | |
| `sym_record_stream` | `u16` | – | |
| `pdb_dll_rbld` | `u16` | – | |
| `mod_info_size` | `u32` | – | |
| `section_contribution_size` | `u32` | – | |
| `section_map_size` | `u32` | – | |
| `source_info_size` | `i32` | – | |
| `type_server_size` | `i32` | – | |
| `mfc_type_server_index` | `u32` | – | |
| `optional_dbg_header_size` | `i32` | – | |
| `ec_substream_size` | `i32` | – | |
| `flags` | `u16` | – | |
| `machine` | `u16` | – | |
| `padding` | `u32` | – | |

</details>

---

### <a id="type-sectioncontribentry"></a>`SectionContribEntry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const SectionContribEntry = extern struct {
    /// COFF Section index, 1-based
    section: u16,
    padding1: [2]u8,
    offset: u32,
    size: u32,
    characteristics: u32,
    module_index: u16,
    padding2: [2]u8,
    data_crc: u32,
    reloc_crc: u32,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `section` | `u16` | – | COFF Section index, 1-based |
| `padding1` | `[2]u8` | – | |
| `offset` | `u32` | – | |
| `size` | `u32` | – | |
| `characteristics` | `u32` | – | |
| `module_index` | `u16` | – | |
| `padding2` | `[2]u8` | – | |
| `data_crc` | `u32` | – | |
| `reloc_crc` | `u32` | – | |

</details>

---

### <a id="type-modinfo"></a>`ModInfo`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ModInfo = extern struct {
    unused1: u32,
    section_contr: SectionContribEntry,
    flags: u16,
    module_sym_stream: u16,
    sym_byte_size: u32,
    c11_byte_size: u32,
    c13_byte_size: u32,
    source_file_count: u16,
    padding: [2]u8,
    unused2: u32,
    source_file_name_index: u32,
    pdb_file_path_name_index: u32,
    // These fields are variable length
    //module_name: char[],
    //obj_file_name: char[],
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `unused1` | `u32` | – | |
| `section_contr` | [`SectionContribEntry`](#type-sectioncontribentry) | – | |
| `flags` | `u16` | – | |
| `module_sym_stream` | `u16` | – | |
| `sym_byte_size` | `u32` | – | |
| `c11_byte_size` | `u32` | – | |
| `c13_byte_size` | `u32` | – | |
| `source_file_count` | `u16` | – | |
| `padding` | `[2]u8` | – | |
| `unused2` | `u32` | – | |
| `source_file_name_index` | `u32` | – | |
| `pdb_file_path_name_index` | `u32` | – | |

</details>

---

### <a id="type-sectionmapheader"></a>`SectionMapHeader`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const SectionMapHeader = extern struct {
    /// Number of segment descriptors
    count: u16,

    /// Number of logical segment descriptors
    log_count: u16,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `count` | `u16` | – | Number of segment descriptors |
| `log_count` | `u16` | – | Number of logical segment descriptors |

</details>

---

### <a id="type-sectionmapentry"></a>`SectionMapEntry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const SectionMapEntry = extern struct {
    /// See the SectionMapEntryFlags enum below.
    flags: u16,

    /// Logical overlay number
    ovl: u16,

    /// Group index into descriptor array.
    group: u16,
    frame: u16,

    /// Byte index of segment / group name in string table, or 0xFFFF.
    section_name: u16,

    /// Byte index of class in string table, or 0xFFFF.
    class_name: u16,

    /// Byte offset of the logical segment within physical segment.  If group is set in flags, this is the offset of the group.
    offset: u32,

    /// Byte count of the segment or group.
    section_length: u32,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `flags` | `u16` | – | See the SectionMapEntryFlags enum below. |
| `ovl` | `u16` | – | Logical overlay number |
| `group` | `u16` | – | Group index into descriptor array. |
| `frame` | `u16` | – | |
| `section_name` | `u16` | – | Byte index of segment / group name in string table, or 0xFFFF. |
| `class_name` | `u16` | – | Byte index of class in string table, or 0xFFFF. |
| `offset` | `u32` | – | Byte offset of the logical segment within physical segment.  If group is set in flags, this is the offset of the group. |
| `section_length` | `u32` | – | Byte count of the segment or group. |

</details>

---

### <a id="type-streamtype"></a>`StreamType`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const StreamType = enum(u16) {
    pdb = 1,
    tpi = 2,
    dbi = 3,
    ipi = 4,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `pdb` |  |
| `tpi` |  |
| `dbi` |  |
| `ipi` |  |

</details>

---

### <a id="type-symbolkind"></a>`SymbolKind`

<details class="declaration-card" open>
<summary>Container – Duplicate copy of SymbolRecordKind, but using the official CV names</summary>

Duplicate copy of SymbolRecordKind, but using the official CV names. Useful
for reference purposes and when dealing with unknown record types.

\`\`\`zig
pub const SymbolKind = enum(u16) {
    compile = 1,
    register_16t = 2,
    constant_16t = 3,
    udt_16t = 4,
    ssearch = 5,
    skip = 7,
    cvreserve = 8,
    objname_st = 9,
    endarg = 10,
    coboludt_16t = 11,
    manyreg_16t = 12,
    @"return" = 13,
    entrythis = 14,
    bprel16 = 256,
    ldata16 = 257,
    gdata16 = 258,
    pub16 = 259,
    lproc16 = 260,
    gproc16 = 261,
    thunk16 = 262,
    block16 = 263,
    with16 = 264,
    label16 = 265,
    cexmodel16 = 266,
    vftable16 = 267,
    regrel16 = 268,
    bprel32_16t = 512,
    ldata32_16t = 513,
    gdata32_16t = 514,
    pub32_16t = 515,
    lproc32_16t = 516,
    gproc32_16t = 517,
    thunk32_st = 518,
    block32_st = 519,
    with32_st = 520,
    label32_st = 521,
    cexmodel32 = 522,
    vftable32_16t = 523,
    regrel32_16t = 524,
    lthread32_16t = 525,
    gthread32_16t = 526,
    slink32 = 527,
    lprocmips_16t = 768,
    gprocmips_16t = 769,
    procref_st = 1024,
    dataref_st = 1025,
    @"align" = 1026,
    lprocref_st = 1027,
    oem = 1028,
    ti16_max = 4096,
    register_st = 4097,
    constant_st = 4098,
    udt_st = 4099,
    coboludt_st = 4100,
    manyreg_st = 4101,
    bprel32_st = 4102,
    ldata32_st = 4103,
    gdata32_st = 4104,
    pub32_st = 4105,
    lproc32_st = 4106,
    gproc32_st = 4107,
    vftable32 = 4108,
    regrel32_st = 4109,
    lthread32_st = 4110,
    gthread32_st = 4111,
    lprocmips_st = 4112,
    gprocmips_st = 4113,
    compile2_st = 4115,
    manyreg2_st = 4116,
    lprocia64_st = 4117,
    gprocia64_st = 4118,
    localslot_st = 4119,
    paramslot_st = 4120,
    annotation = 4121,
    gmanproc_st = 4122,
    lmanproc_st = 4123,
    reserved1 = 4124,
    reserved2 = 4125,
    reserved3 = 4126,
    reserved4 = 4127,
    lmandata_st = 4128,
    gmandata_st = 4129,
    manframerel_st = 4130,
    manregister_st = 4131,
    manslot_st = 4132,
    manmanyreg_st = 4133,
    manregrel_st = 4134,
    manmanyreg2_st = 4135,
    mantypref = 4136,
    unamespace_st = 4137,
    st_max = 4352,
    with32 = 4356,
    manyreg = 4362,
    lprocmips = 4372,
    gprocmips = 4373,
    manyreg2 = 4375,
    lprocia64 = 4376,
    gprocia64 = 4377,
    localslot = 4378,
    paramslot = 4379,
    manframerel = 4382,
    manregister = 4383,
    manslot = 4384,
    manmanyreg = 4385,
    manregrel = 4386,
    manmanyreg2 = 4387,
    unamespace = 4388,
    dataref = 4390,
    annotationref = 4392,
    tokenref = 4393,
    gmanproc = 4394,
    lmanproc = 4395,
    attr_framerel = 4398,
    attr_register = 4399,
    attr_regrel = 4400,
    attr_manyreg = 4401,
    sepcode = 4402,
    local_2005 = 4403,
    defrange_2005 = 4404,
    defrange2_2005 = 4405,
    discarded = 4411,
    lprocmips_id = 4424,
    gprocmips_id = 4425,
    lprocia64_id = 4426,
    gprocia64_id = 4427,
    defrange_hlsl = 4432,
    gdata_hlsl = 4433,
    ldata_hlsl = 4434,
    local_dpc_groupshared = 4436,
    defrange_dpc_ptr_tag = 4439,
    dpc_sym_tag_map = 4440,
    armswitchtable = 4441,
    pogodata = 4444,
    inlinesite2 = 4445,
    mod_typeref = 4447,
    ref_minipdb = 4448,
    pdbmap = 4449,
    gdata_hlsl32 = 4450,
    ldata_hlsl32 = 4451,
    gdata_hlsl32_ex = 4452,
    ldata_hlsl32_ex = 4453,
    fastlink = 4455,
    inlinees = 4456,
    end = 6,
    inlinesite_end = 4430,
    proc_id_end = 4431,
    thunk32 = 4354,
    trampoline = 4396,
    section = 4406,
    coffgroup = 4407,
    @"export" = 4408,
    lproc32 = 4367,
    gproc32 = 4368,
    lproc32_id = 4422,
    gproc32_id = 4423,
    lproc32_dpc = 4437,
    lproc32_dpc_id = 4438,
    register = 4358,
    pub32 = 4366,
    procref = 4389,
    lprocref = 4391,
    envblock = 4413,
    inlinesite = 4429,
    local = 4414,
    defrange = 4415,
    defrange_subfield = 4416,
    defrange_register = 4417,
    defrange_framepointer_rel = 4418,
    defrange_subfield_register = 4419,
    defrange_framepointer_rel_full_scope = 4420,
    defrange_register_rel = 4421,
    block32 = 4355,
    label32 = 4357,
    objname = 4353,
    compile2 = 4374,
    compile3 = 4412,
    frameproc = 4114,
    callsiteinfo = 4409,
    filestatic = 4435,
    heapallocsite = 4446,
    framecookie = 4410,
    callees = 4442,
    callers = 4443,
    udt = 4360,
    coboludt = 4361,
    buildinfo = 4428,
    bprel32 = 4363,
    regrel32 = 4369,
    constant = 4359,
    manconstant = 4397,
    ldata32 = 4364,
    gdata32 = 4365,
    lmandata = 4380,
    gmandata = 4381,
    lthread32 = 4370,
    gthread32 = 4371,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `compile` |  |
| `register_16t` |  |
| `constant_16t` |  |
| `udt_16t` |  |
| `ssearch` |  |
| `skip` |  |
| `cvreserve` |  |
| `objname_st` |  |
| `endarg` |  |
| `coboludt_16t` |  |
| `manyreg_16t` |  |
| `@"return"` |  |
| `entrythis` |  |
| `bprel16` |  |
| `ldata16` |  |
| `gdata16` |  |
| `pub16` |  |
| `lproc16` |  |
| `gproc16` |  |
| `thunk16` |  |
| `block16` |  |
| `with16` |  |
| `label16` |  |
| `cexmodel16` |  |
| `vftable16` |  |
| `regrel16` |  |
| `bprel32_16t` |  |
| `ldata32_16t` |  |
| `gdata32_16t` |  |
| `pub32_16t` |  |
| `lproc32_16t` |  |
| `gproc32_16t` |  |
| `thunk32_st` |  |
| `block32_st` |  |
| `with32_st` |  |
| `label32_st` |  |
| `cexmodel32` |  |
| `vftable32_16t` |  |
| `regrel32_16t` |  |
| `lthread32_16t` |  |
| `gthread32_16t` |  |
| `slink32` |  |
| `lprocmips_16t` |  |
| `gprocmips_16t` |  |
| `procref_st` |  |
| `dataref_st` |  |
| `@"align"` |  |
| `lprocref_st` |  |
| `oem` |  |
| `ti16_max` |  |
| `register_st` |  |
| `constant_st` |  |
| `udt_st` |  |
| `coboludt_st` |  |
| `manyreg_st` |  |
| `bprel32_st` |  |
| `ldata32_st` |  |
| `gdata32_st` |  |
| `pub32_st` |  |
| `lproc32_st` |  |
| `gproc32_st` |  |
| `vftable32` |  |
| `regrel32_st` |  |
| `lthread32_st` |  |
| `gthread32_st` |  |
| `lprocmips_st` |  |
| `gprocmips_st` |  |
| `compile2_st` |  |
| `manyreg2_st` |  |
| `lprocia64_st` |  |
| `gprocia64_st` |  |
| `localslot_st` |  |
| `paramslot_st` |  |
| `annotation` |  |
| `gmanproc_st` |  |
| `lmanproc_st` |  |
| `reserved1` |  |
| `reserved2` |  |
| `reserved3` |  |
| `reserved4` |  |
| `lmandata_st` |  |
| `gmandata_st` |  |
| `manframerel_st` |  |
| `manregister_st` |  |
| `manslot_st` |  |
| `manmanyreg_st` |  |
| `manregrel_st` |  |
| `manmanyreg2_st` |  |
| `mantypref` |  |
| `unamespace_st` |  |
| `st_max` |  |
| `with32` |  |
| `manyreg` |  |
| `lprocmips` |  |
| `gprocmips` |  |
| `manyreg2` |  |
| `lprocia64` |  |
| `gprocia64` |  |
| `localslot` |  |
| `paramslot` |  |
| `manframerel` |  |
| `manregister` |  |
| `manslot` |  |
| `manmanyreg` |  |
| `manregrel` |  |
| `manmanyreg2` |  |
| `unamespace` |  |
| `dataref` |  |
| `annotationref` |  |
| `tokenref` |  |
| `gmanproc` |  |
| `lmanproc` |  |
| `attr_framerel` |  |
| `attr_register` |  |
| `attr_regrel` |  |
| `attr_manyreg` |  |
| `sepcode` |  |
| `local_2005` |  |
| `defrange_2005` |  |
| `defrange2_2005` |  |
| `discarded` |  |
| `lprocmips_id` |  |
| `gprocmips_id` |  |
| `lprocia64_id` |  |
| `gprocia64_id` |  |
| `defrange_hlsl` |  |
| `gdata_hlsl` |  |
| `ldata_hlsl` |  |
| `local_dpc_groupshared` |  |
| `defrange_dpc_ptr_tag` |  |
| `dpc_sym_tag_map` |  |
| `armswitchtable` |  |
| `pogodata` |  |
| `inlinesite2` |  |
| `mod_typeref` |  |
| `ref_minipdb` |  |
| `pdbmap` |  |
| `gdata_hlsl32` |  |
| `ldata_hlsl32` |  |
| `gdata_hlsl32_ex` |  |
| `ldata_hlsl32_ex` |  |
| `fastlink` |  |
| `inlinees` |  |
| `end` |  |
| `inlinesite_end` |  |
| `proc_id_end` |  |
| `thunk32` |  |
| `trampoline` |  |
| `section` |  |
| `coffgroup` |  |
| `@"export"` |  |
| `lproc32` |  |
| `gproc32` |  |
| `lproc32_id` |  |
| `gproc32_id` |  |
| `lproc32_dpc` |  |
| `lproc32_dpc_id` |  |
| `register` |  |
| `pub32` |  |
| `procref` |  |
| `lprocref` |  |
| `envblock` |  |
| `inlinesite` |  |
| `local` |  |
| `defrange` |  |
| `defrange_subfield` |  |
| `defrange_register` |  |
| `defrange_framepointer_rel` |  |
| `defrange_subfield_register` |  |
| `defrange_framepointer_rel_full_scope` |  |
| `defrange_register_rel` |  |
| `block32` |  |
| `label32` |  |
| `objname` |  |
| `compile2` |  |
| `compile3` |  |
| `frameproc` |  |
| `callsiteinfo` |  |
| `filestatic` |  |
| `heapallocsite` |  |
| `framecookie` |  |
| `callees` |  |
| `callers` |  |
| `udt` |  |
| `coboludt` |  |
| `buildinfo` |  |
| `bprel32` |  |
| `regrel32` |  |
| `constant` |  |
| `manconstant` |  |
| `ldata32` |  |
| `gdata32` |  |
| `lmandata` |  |
| `gmandata` |  |
| `lthread32` |  |
| `gthread32` |  |

</details>

---

### <a id="type-procsym"></a>`ProcSym`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ProcSym = extern struct {
    parent: u32,
    end: u32,
    next: u32,
    code_size: u32,
    dbg_start: u32,
    dbg_end: u32,
    function_type: TypeIndex,
    code_offset: u32,
    segment: u16,
    flags: ProcSymFlags,
    name: [1]u8, // null-terminated
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `parent` | `u32` | – | |
| `end` | `u32` | – | |
| `next` | `u32` | – | |
| `code_size` | `u32` | – | |
| `dbg_start` | `u32` | – | |
| `dbg_end` | `u32` | – | |
| `function_type` | [`TypeIndex`](#const-typeindex) | – | |
| `code_offset` | `u32` | – | |
| `segment` | `u16` | – | |
| `flags` | [`ProcSymFlags`](#type-procsymflags) | – | |
| `name` | `[1]u8` | – | |

</details>

---

### <a id="type-procsymflags"></a>`ProcSymFlags`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ProcSymFlags = packed struct {
    has_fp: bool,
    has_iret: bool,
    has_fret: bool,
    is_no_return: bool,
    is_unreachable: bool,
    has_custom_calling_conv: bool,
    is_no_inline: bool,
    has_optimized_debug_info: bool,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `has_fp` | `bool` | – | |
| `has_iret` | `bool` | – | |
| `has_fret` | `bool` | – | |
| `is_no_return` | `bool` | – | |
| `is_unreachable` | `bool` | – | |
| `has_custom_calling_conv` | `bool` | – | |
| `is_no_inline` | `bool` | – | |
| `has_optimized_debug_info` | `bool` | – | |

</details>

---

### <a id="type-sectioncontrsubstreamversion"></a>`SectionContrSubstreamVersion`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const SectionContrSubstreamVersion = enum(u32) {
    Ver60 = 0xeffe0000 + 19970605,
    V2 = 0xeffe0000 + 20140516,
    _,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `Ver60` |  |
| `V2` |  |
| `_` |  |

</details>

---

### <a id="type-recordprefix"></a>`RecordPrefix`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const RecordPrefix = extern struct {
    /// Record length, starting from &record_kind.
    record_len: u16,

    /// Record kind enum (SymRecordKind or TypeRecordKind)
    record_kind: SymbolKind,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `record_len` | `u16` | – | Record length, starting from &record\_kind. |
| `record_kind` | [`SymbolKind`](#type-symbolkind) | – | Record kind enum (SymRecordKind or TypeRecordKind) |

</details>

---

### <a id="type-linefragmentheader"></a>`LineFragmentHeader`

<details class="declaration-card" open>
<summary>Container – The following variable length array appears immediately after the header</summary>

The following variable length array appears immediately after the header.
The structure definition follows.
LineBlockFragmentHeader Blocks[]
Each `LineBlockFragmentHeader` as specified below.

\`\`\`zig
pub const LineFragmentHeader = extern struct {
    /// Code offset of line contribution.
    reloc_offset: u32,

    /// Code segment of line contribution.
    reloc_segment: u16,
    flags: LineFlags,

    /// Code size of this line contribution.
    code_size: u32,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `reloc_offset` | `u32` | – | Code offset of line contribution. |
| `reloc_segment` | `u16` | – | Code segment of line contribution. |
| `flags` | [`LineFlags`](#type-lineflags) | – | |
| `code_size` | `u32` | – | Code size of this line contribution. |

</details>

---

### <a id="type-lineflags"></a>`LineFlags`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const LineFlags = packed struct {
    /// CV_LINES_HAVE_COLUMNS
    have_columns: bool,
    unused: u15,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `have_columns` | `bool` | – | CV\_LINES\_HAVE\_COLUMNS |
| `unused` | `u15` | – | |

</details>

---

### <a id="type-lineblockfragmentheader"></a>`LineBlockFragmentHeader`

<details class="declaration-card" open>
<summary>Container – The following two variable length arrays appear immediately after the</summary>

The following two variable length arrays appear immediately after the
header.  The structure definitions follow.
LineNumberEntry   Lines[NumLines];
ColumnNumberEntry Columns[NumLines];

\`\`\`zig
pub const LineBlockFragmentHeader = extern struct {
    /// Offset of FileChecksum entry in File
    /// checksums buffer.  The checksum entry then
    /// contains another offset into the string
    /// table of the actual name.
    name_index: u32,
    num_lines: u32,

    /// code size of block, in bytes
    block_size: u32,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name_index` | `u32` | – | Offset of FileChecksum entry in File checksums buffer.  The checksum entry then contains another offset into the string table of the actual name. |
| `num_lines` | `u32` | – | |
| `block_size` | `u32` | – | code size of block, in bytes |

</details>

---

### <a id="type-linenumberentry"></a>`LineNumberEntry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const LineNumberEntry = extern struct {
    /// Offset to start of code bytes for line number
    offset: u32,
    flags: Flags,

    pub const Flags = packed struct(u32) {
        /// Start line number
        start: u24,
        /// Delta of lines to the end of the expression. Still unclear.
        // TODO figure out the point of this field.
        end: u7,
        is_statement: bool,
    };
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `offset` | `u32` | – | Offset to start of code bytes for line number |
| `flags` | `Flags` | – | |

</details>

---

### <a id="type-columnnumberentry"></a>`ColumnNumberEntry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ColumnNumberEntry = extern struct {
    start_column: u16,
    end_column: u16,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `start_column` | `u16` | – | |
| `end_column` | `u16` | – | |

</details>

---

### <a id="type-filechecksumentryheader"></a>`FileChecksumEntryHeader`

<details class="declaration-card" open>
<summary>Container – Checksum bytes follow</summary>

Checksum bytes follow.

\`\`\`zig
pub const FileChecksumEntryHeader = extern struct {
    /// Byte offset of filename in global string table.
    file_name_offset: u32,
    /// Number of bytes of checksum.
    checksum_size: u8,
    /// FileChecksumKind
    checksum_kind: u8,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `file_name_offset` | `u32` | – | Byte offset of filename in global string table. |
| `checksum_size` | `u8` | – | Number of bytes of checksum. |
| `checksum_kind` | `u8` | – | FileChecksumKind |

</details>

---

### <a id="type-debugsubsectionkind"></a>`DebugSubsectionKind`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const DebugSubsectionKind = enum(u32) {
    none = 0,
    symbols = 0xf1,
    lines = 0xf2,
    string_table = 0xf3,
    file_checksums = 0xf4,
    frame_data = 0xf5,
    inlinee_lines = 0xf6,
    cross_scope_imports = 0xf7,
    cross_scope_exports = 0xf8,

    // These appear to relate to .Net assembly info.
    il_lines = 0xf9,
    func_md_token_map = 0xfa,
    type_md_token_map = 0xfb,
    merged_assembly_input = 0xfc,

    coff_symbol_rva = 0xfd,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `none` |  |
| `symbols` |  |
| `lines` |  |
| `string_table` |  |
| `file_checksums` |  |
| `frame_data` |  |
| `inlinee_lines` |  |
| `cross_scope_imports` |  |
| `cross_scope_exports` |  |
| `il_lines` |  |
| `func_md_token_map` |  |
| `type_md_token_map` |  |
| `merged_assembly_input` |  |
| `coff_symbol_rva` |  |

</details>

---

### <a id="type-debugsubsectionheader"></a>`DebugSubsectionHeader`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const DebugSubsectionHeader = extern struct {
    /// codeview::DebugSubsectionKind enum
    kind: DebugSubsectionKind,

    /// number of bytes occupied by this record.
    length: u32,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `kind` | [`DebugSubsectionKind`](#type-debugsubsectionkind) | – | codeview::DebugSubsectionKind enum |
| `length` | `u32` | – | number of bytes occupied by this record. |

</details>

---

### <a id="type-stringtableheader"></a>`StringTableHeader`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const StringTableHeader = extern struct {
    /// PDBStringTableSignature
    signature: u32,
    /// 1 or 2
    hash_version: u32,
    /// Number of bytes of names buffer.
    byte_size: u32,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `signature` | `u32` | – | PDBStringTableSignature |
| `hash_version` | `u32` | – | 1 or 2 |
| `byte_size` | `u32` | – | Number of bytes of names buffer. |

</details>

---

### <a id="type-superblock"></a>`SuperBlock`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const SuperBlock = extern struct {
    /// The LLVM docs list a space between C / C++ but empirically this is not the case.
    pub const expect_magic = "Microsoft C/C++ MSF 7.00\r\n\x1a\x44\x53\x00\x00\x00";

    file_magic: [expect_magic.len]u8,

    /// The block size of the internal file system. Valid values are 512, 1024,
    /// 2048, and 4096 bytes. Certain aspects of the MSF file layout vary depending
    /// on the block sizes. For the purposes of LLVM, we handle only block sizes of
    /// 4KiB, and all further discussion assumes a block size of 4KiB.
    block_size: u32,

    /// The index of a block within the file, at which begins a bitfield representing
    /// the set of all blocks within the file which are “free” (i.e. the data within
    /// that block is not used). See The Free Block Map for more information. Important:
    /// FreeBlockMapBlock can only be 1 or 2!
    free_block_map_block: u32,

    /// The total number of blocks in the file. NumBlocks * BlockSize should equal the
    /// size of the file on disk.
    num_blocks: u32,

    /// The size of the stream directory, in bytes. The stream directory contains
    /// information about each stream’s size and the set of blocks that it occupies.
    /// It will be described in more detail later.
    num_directory_bytes: u32,

    unknown: u32,
    /// The index of a block within the MSF file. At this block is an array of
    /// ulittle32_t’s listing the blocks that the stream directory resides on.
    /// For large MSF files, the stream directory (which describes the block
    /// layout of each stream) may not fit entirely on a single block. As a
    /// result, this extra layer of indirection is introduced, whereby this
    /// block contains the list of blocks that the stream directory occupies,
    /// and the stream directory itself can be stitched together accordingly.
    /// The number of ulittle32_t’s in this array is given by
    /// ceil(NumDirectoryBytes / BlockSize).
    // Note: microsoft-pdb code actually suggests this is a variable-length
    // array. If the indices of blocks occupied by the Stream Directory didn't
    // fit in one page, there would be other u32 following it.
    // This would mean the Stream Directory is bigger than BlockSize / sizeof(u32)
    // blocks. We're not even close to this with a 1GB pdb file, and LLVM didn't
    // implement it so we're kind of safe making this assumption for now.
    block_map_addr: u32,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `file_magic` | `[expect_magic.len]u8` | – | |
| `block_size` | `u32` | – | The block size of the internal file system. Valid values are 512, 1024, 2048, and 4096 bytes. Certain aspects of the MSF file layout vary depending on the block sizes. For the purposes of LLVM, we handle only block sizes of 4KiB, and all further discussion assumes a block size of 4KiB. |
| `free_block_map_block` | `u32` | – | The index of a block within the file, at which begins a bitfield representing the set of all blocks within the file which are “free” (i.e. the data within that block is not used). See The Free Block Map for more information. Important: FreeBlockMapBlock can only be 1 or 2! |
| `num_blocks` | `u32` | – | The total number of blocks in the file. NumBlocks \* BlockSize should equal the size of the file on disk. |
| `num_directory_bytes` | `u32` | – | The size of the stream directory, in bytes. The stream directory contains information about each stream’s size and the set of blocks that it occupies. It will be described in more detail later. |
| `unknown` | `u32` | – | |
| `block_map_addr` | `u32` | – | The index of a block within the MSF file. At this block is an array of ulittle32\_t’s listing the blocks that the stream directory resides on. For large MSF files, the stream directory (which describes the block layout of each stream) may not fit entirely on a single block. As a result, this extra layer of indirection is introduced, whereby this block contains the list of blocks that the stream directory occupies, and the stream directory itself can be stitched together accordingly. The number of ulittle32\_t’s in this array is given by ceil(NumDirectoryBytes / BlockSize). |

</details>

---

## Constants (1)

### <a id="const-typeindex"></a>`TypeIndex`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TypeIndex = u32
\`\`\`

</details>

---
