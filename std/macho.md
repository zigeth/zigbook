# std.macho

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.macho` |
| Declarations | 312 |
| Breakdown | 51 types · 261 constants |
| Generated (unix epoch) | 1760148107 |

---

## Table of Contents

- [Types](#types)
  - [`mach\_header`](#type-mach-header)
  - [`mach\_header\_64`](#type-mach-header-64)
  - [`fat\_header`](#type-fat-header)
  - [`fat\_arch`](#type-fat-arch)
  - [`load\_command`](#type-load-command)
  - [`uuid\_command`](#type-uuid-command)
  - [`version\_min\_command`](#type-version-min-command)
  - [`source\_version\_command`](#type-source-version-command)
  - [`build\_version\_command`](#type-build-version-command)
  - [`build\_tool\_version`](#type-build-tool-version)
  - [`PLATFORM`](#type-platform)
  - [`TOOL`](#type-tool)
  - [`entry\_point\_command`](#type-entry-point-command)
  - [`symtab\_command`](#type-symtab-command)
  - [`dysymtab\_command`](#type-dysymtab-command)
  - [`linkedit\_data\_command`](#type-linkedit-data-command)
  - [`dyld\_info\_command`](#type-dyld-info-command)
  - [`dylinker\_command`](#type-dylinker-command)
  - [`dylib\_command`](#type-dylib-command)
  - [`dylib`](#type-dylib)
  - [`rpath\_command`](#type-rpath-command)
  - [`segment\_command`](#type-segment-command)
  - [`segment\_command\_64`](#type-segment-command-64)
  - [`PROT`](#type-prot)
  - [`section`](#type-section)
  - [`section\_64`](#type-section-64)
  - [`nlist`](#type-nlist)
  - [`nlist\_64`](#type-nlist-64)
  - [`relocation\_info`](#type-relocation-info)
  - [`LC`](#type-lc)
  - [`reloc\_type\_x86\_64`](#type-reloc-type-x86-64)
  - [`reloc\_type\_arm64`](#type-reloc-type-arm64)
  - [`CodeDirectory`](#type-codedirectory)
  - [`BlobIndex`](#type-blobindex)
  - [`SuperBlob`](#type-superblob)
  - [`GenericBlob`](#type-genericblob)
  - [`data\_in\_code\_entry`](#type-data-in-code-entry)
  - [`LoadCommandIterator`](#type-loadcommanditerator)
  - [`compact\_unwind\_entry`](#type-compact-unwind-entry)
  - [`unwind\_info\_section\_header`](#type-unwind-info-section-header)
  - [`unwind\_info\_section\_header\_index\_entry`](#type-unwind-info-section-header-index-entry)
  - [`unwind\_info\_section\_header\_lsda\_index\_entry`](#type-unwind-info-section-header-lsda-index-entry)
  - [`unwind\_info\_regular\_second\_level\_entry`](#type-unwind-info-regular-second-level-entry)
  - [`UNWIND\_SECOND\_LEVEL`](#type-unwind-second-level)
  - [`unwind\_info\_regular\_second\_level\_page\_header`](#type-unwind-info-regular-second-level-page-header)
  - [`unwind\_info\_compressed\_second\_level\_page\_header`](#type-unwind-info-compressed-second-level-page-header)
  - [`UnwindInfoCompressedEntry`](#type-unwindinfocompressedentry)
  - [`UNWIND\_X86\_64\_MODE`](#type-unwind-x86-64-mode)
  - [`UNWIND\_X86\_64\_REG`](#type-unwind-x86-64-reg)
  - [`UNWIND\_ARM64\_MODE`](#type-unwind-arm64-mode)
  - [`CompactUnwindEncoding`](#type-compactunwindencoding)

- [Constants](#constants)
  - [`cpu\_type\_t`](#const-cpu-type-t)
  - [`cpu\_subtype\_t`](#const-cpu-subtype-t)
  - [`vm\_prot\_t`](#const-vm-prot-t)
  - [`LC\_REQ\_DYLD`](#const-lc-req-dyld)
  - [`MH\_MAGIC`](#const-mh-magic)
  - [`MH\_CIGAM`](#const-mh-cigam)
  - [`MH\_MAGIC\_64`](#const-mh-magic-64)
  - [`MH\_CIGAM\_64`](#const-mh-cigam-64)
  - [`MH\_OBJECT`](#const-mh-object)
  - [`MH\_EXECUTE`](#const-mh-execute)
  - [`MH\_FVMLIB`](#const-mh-fvmlib)
  - [`MH\_CORE`](#const-mh-core)
  - [`MH\_PRELOAD`](#const-mh-preload)
  - [`MH\_DYLIB`](#const-mh-dylib)
  - [`MH\_DYLINKER`](#const-mh-dylinker)
  - [`MH\_BUNDLE`](#const-mh-bundle)
  - [`MH\_DYLIB\_STUB`](#const-mh-dylib-stub)
  - [`MH\_DSYM`](#const-mh-dsym)
  - [`MH\_KEXT\_BUNDLE`](#const-mh-kext-bundle)
  - [`MH\_NOUNDEFS`](#const-mh-noundefs)
  - [`MH\_INCRLINK`](#const-mh-incrlink)
  - [`MH\_DYLDLINK`](#const-mh-dyldlink)
  - [`MH\_BINDATLOAD`](#const-mh-bindatload)
  - [`MH\_PREBOUND`](#const-mh-prebound)
  - [`MH\_SPLIT\_SEGS`](#const-mh-split-segs)
  - [`MH\_LAZY\_INIT`](#const-mh-lazy-init)
  - [`MH\_TWOLEVEL`](#const-mh-twolevel)
  - [`MH\_FORCE\_FLAT`](#const-mh-force-flat)
  - [`MH\_NOMULTIDEFS`](#const-mh-nomultidefs)
  - [`MH\_NOFIXPREBINDING`](#const-mh-nofixprebinding)
  - [`MH\_PREBINDABLE`](#const-mh-prebindable)
  - [`MH\_ALLMODSBOUND`](#const-mh-allmodsbound)
  - [`MH\_SUBSECTIONS\_VIA\_SYMBOLS`](#const-mh-subsections-via-symbols)
  - [`MH\_CANONICAL`](#const-mh-canonical)
  - [`MH\_WEAK\_DEFINES`](#const-mh-weak-defines)
  - [`MH\_BINDS\_TO\_WEAK`](#const-mh-binds-to-weak)
  - [`MH\_ALLOW\_STACK\_EXECUTION`](#const-mh-allow-stack-execution)
  - [`MH\_ROOT\_SAFE`](#const-mh-root-safe)
  - [`MH\_SETUID\_SAFE`](#const-mh-setuid-safe)
  - [`MH\_NO\_REEXPORTED\_DYLIBS`](#const-mh-no-reexported-dylibs)
  - [`MH\_PIE`](#const-mh-pie)
  - [`MH\_DEAD\_STRIPPABLE\_DYLIB`](#const-mh-dead-strippable-dylib)
  - [`MH\_HAS\_TLV\_DESCRIPTORS`](#const-mh-has-tlv-descriptors)
  - [`MH\_NO\_HEAP\_EXECUTION`](#const-mh-no-heap-execution)
  - [`MH\_APP\_EXTENSION\_SAFE`](#const-mh-app-extension-safe)
  - [`MH\_NLIST\_OUTOFSYNC\_WITH\_DYLDINFO`](#const-mh-nlist-outofsync-with-dyldinfo)
  - [`MH\_SIM\_SUPPORT`](#const-mh-sim-support)
  - [`MH\_DYLIB\_IN\_CACHE`](#const-mh-dylib-in-cache)
  - [`FAT\_MAGIC`](#const-fat-magic)
  - [`FAT\_CIGAM`](#const-fat-cigam)
  - [`FAT\_MAGIC\_64`](#const-fat-magic-64)
  - [`FAT\_CIGAM\_64`](#const-fat-cigam-64)
  - [`SG\_HIGHVM`](#const-sg-highvm)
  - [`SG\_FVMLIB`](#const-sg-fvmlib)
  - [`SG\_NORELOC`](#const-sg-noreloc)
  - [`SG\_PROTECTED\_VERSION\_1`](#const-sg-protected-version-1)
  - [`SG\_READ\_ONLY`](#const-sg-read-only)
  - [`SECTION\_TYPE`](#const-section-type)
  - [`SECTION\_ATTRIBUTES`](#const-section-attributes)
  - [`S\_REGULAR`](#const-s-regular)
  - [`S\_ZEROFILL`](#const-s-zerofill)
  - [`S\_CSTRING\_LITERALS`](#const-s-cstring-literals)
  - [`S\_4BYTE\_LITERALS`](#const-s-4byte-literals)
  - [`S\_8BYTE\_LITERALS`](#const-s-8byte-literals)
  - [`S\_LITERAL\_POINTERS`](#const-s-literal-pointers)
  - [`N\_STAB`](#const-n-stab)
  - [`N\_PEXT`](#const-n-pext)
  - [`N\_TYPE`](#const-n-type)
  - [`N\_EXT`](#const-n-ext)
  - [`N\_UNDF`](#const-n-undf)
  - [`N\_ABS`](#const-n-abs)
  - [`N\_SECT`](#const-n-sect)
  - [`N\_PBUD`](#const-n-pbud)
  - [`N\_INDR`](#const-n-indr)
  - [`N\_GSYM`](#const-n-gsym)
  - [`N\_FNAME`](#const-n-fname)
  - [`N\_FUN`](#const-n-fun)
  - [`N\_STSYM`](#const-n-stsym)
  - [`N\_LCSYM`](#const-n-lcsym)
  - [`N\_BNSYM`](#const-n-bnsym)
  - [`N\_AST`](#const-n-ast)
  - [`N\_OPT`](#const-n-opt)
  - [`N\_RSYM`](#const-n-rsym)
  - [`N\_SLINE`](#const-n-sline)
  - [`N\_ENSYM`](#const-n-ensym)
  - [`N\_SSYM`](#const-n-ssym)
  - [`N\_SO`](#const-n-so)
  - [`N\_OSO`](#const-n-oso)
  - [`N\_LSYM`](#const-n-lsym)
  - [`N\_BINCL`](#const-n-bincl)
  - [`N\_SOL`](#const-n-sol)
  - [`N\_PARAMS`](#const-n-params)
  - [`N\_VERSION`](#const-n-version)
  - [`N\_OLEVEL`](#const-n-olevel)
  - [`N\_PSYM`](#const-n-psym)
  - [`N\_EINCL`](#const-n-eincl)
  - [`N\_ENTRY`](#const-n-entry)
  - [`N\_LBRAC`](#const-n-lbrac)
  - [`N\_EXCL`](#const-n-excl)
  - [`N\_RBRAC`](#const-n-rbrac)
  - [`N\_BCOMM`](#const-n-bcomm)
  - [`N\_ECOMM`](#const-n-ecomm)
  - [`N\_ECOML`](#const-n-ecoml)
  - [`N\_LENG`](#const-n-leng)
  - [`S\_NON\_LAZY\_SYMBOL\_POINTERS`](#const-s-non-lazy-symbol-pointers)
  - [`S\_LAZY\_SYMBOL\_POINTERS`](#const-s-lazy-symbol-pointers)
  - [`S\_SYMBOL\_STUBS`](#const-s-symbol-stubs)
  - [`S\_MOD\_INIT\_FUNC\_POINTERS`](#const-s-mod-init-func-pointers)
  - [`S\_MOD\_TERM\_FUNC\_POINTERS`](#const-s-mod-term-func-pointers)
  - [`S\_COALESCED`](#const-s-coalesced)
  - [`S\_GB\_ZEROFILL`](#const-s-gb-zerofill)
  - [`S\_INTERPOSING`](#const-s-interposing)
  - [`S\_16BYTE\_LITERALS`](#const-s-16byte-literals)
  - [`S\_DTRACE\_DOF`](#const-s-dtrace-dof)
  - [`S\_LAZY\_DYLIB\_SYMBOL\_POINTERS`](#const-s-lazy-dylib-symbol-pointers)
  - [`S\_ATTR\_DEBUG`](#const-s-attr-debug)
  - [`S\_ATTR\_PURE\_INSTRUCTIONS`](#const-s-attr-pure-instructions)
  - [`S\_ATTR\_NO\_TOC`](#const-s-attr-no-toc)
  - [`S\_ATTR\_STRIP\_STATIC\_SYMS`](#const-s-attr-strip-static-syms)
  - [`S\_ATTR\_NO\_DEAD\_STRIP`](#const-s-attr-no-dead-strip)
  - [`S\_ATTR\_LIVE\_SUPPORT`](#const-s-attr-live-support)
  - [`S\_ATTR\_SELF\_MODIFYING\_CODE`](#const-s-attr-self-modifying-code)
  - [`S\_ATTR\_SOME\_INSTRUCTIONS`](#const-s-attr-some-instructions)
  - [`S\_ATTR\_EXT\_RELOC`](#const-s-attr-ext-reloc)
  - [`S\_ATTR\_LOC\_RELOC`](#const-s-attr-loc-reloc)
  - [`S\_THREAD\_LOCAL\_REGULAR`](#const-s-thread-local-regular)
  - [`S\_THREAD\_LOCAL\_ZEROFILL`](#const-s-thread-local-zerofill)
  - [`S\_THREAD\_LOCAL\_VARIABLES`](#const-s-thread-local-variables)
  - [`S\_THREAD\_LOCAL\_VARIABLE\_POINTERS`](#const-s-thread-local-variable-pointers)
  - [`S\_THREAD\_LOCAL\_INIT\_FUNCTION\_POINTERS`](#const-s-thread-local-init-function-pointers)
  - [`S\_INIT\_FUNC\_OFFSETS`](#const-s-init-func-offsets)
  - [`CPU\_TYPE\_X86\_64`](#const-cpu-type-x86-64)
  - [`CPU\_TYPE\_ARM64`](#const-cpu-type-arm64)
  - [`CPU\_SUBTYPE\_X86\_64\_ALL`](#const-cpu-subtype-x86-64-all)
  - [`CPU\_SUBTYPE\_ARM\_ALL`](#const-cpu-subtype-arm-all)
  - [`REBASE\_TYPE\_POINTER`](#const-rebase-type-pointer)
  - [`REBASE\_TYPE\_TEXT\_ABSOLUTE32`](#const-rebase-type-text-absolute32)
  - [`REBASE\_TYPE\_TEXT\_PCREL32`](#const-rebase-type-text-pcrel32)
  - [`REBASE\_OPCODE\_MASK`](#const-rebase-opcode-mask)
  - [`REBASE\_IMMEDIATE\_MASK`](#const-rebase-immediate-mask)
  - [`REBASE\_OPCODE\_DONE`](#const-rebase-opcode-done)
  - [`REBASE\_OPCODE\_SET\_TYPE\_IMM`](#const-rebase-opcode-set-type-imm)
  - [`REBASE\_OPCODE\_SET\_SEGMENT\_AND\_OFFSET\_ULEB`](#const-rebase-opcode-set-segment-and-offset-uleb)
  - [`REBASE\_OPCODE\_ADD\_ADDR\_ULEB`](#const-rebase-opcode-add-addr-uleb)
  - [`REBASE\_OPCODE\_ADD\_ADDR\_IMM\_SCALED`](#const-rebase-opcode-add-addr-imm-scaled)
  - [`REBASE\_OPCODE\_DO\_REBASE\_IMM\_TIMES`](#const-rebase-opcode-do-rebase-imm-times)
  - [`REBASE\_OPCODE\_DO\_REBASE\_ULEB\_TIMES`](#const-rebase-opcode-do-rebase-uleb-times)
  - [`REBASE\_OPCODE\_DO\_REBASE\_ADD\_ADDR\_ULEB`](#const-rebase-opcode-do-rebase-add-addr-uleb)
  - [`REBASE\_OPCODE\_DO\_REBASE\_ULEB\_TIMES\_SKIPPING\_ULEB`](#const-rebase-opcode-do-rebase-uleb-times-skipping-uleb)
  - [`BIND\_TYPE\_POINTER`](#const-bind-type-pointer)
  - [`BIND\_TYPE\_TEXT\_ABSOLUTE32`](#const-bind-type-text-absolute32)
  - [`BIND\_TYPE\_TEXT\_PCREL32`](#const-bind-type-text-pcrel32)
  - [`BIND\_SPECIAL\_DYLIB\_SELF`](#const-bind-special-dylib-self)
  - [`BIND\_SPECIAL\_DYLIB\_MAIN\_EXECUTABLE`](#const-bind-special-dylib-main-executable)
  - [`BIND\_SPECIAL\_DYLIB\_FLAT\_LOOKUP`](#const-bind-special-dylib-flat-lookup)
  - [`BIND\_SYMBOL\_FLAGS\_WEAK\_IMPORT`](#const-bind-symbol-flags-weak-import)
  - [`BIND\_SYMBOL\_FLAGS\_NON\_WEAK\_DEFINITION`](#const-bind-symbol-flags-non-weak-definition)
  - [`BIND\_OPCODE\_MASK`](#const-bind-opcode-mask)
  - [`BIND\_IMMEDIATE\_MASK`](#const-bind-immediate-mask)
  - [`BIND\_OPCODE\_DONE`](#const-bind-opcode-done)
  - [`BIND\_OPCODE\_SET\_DYLIB\_ORDINAL\_IMM`](#const-bind-opcode-set-dylib-ordinal-imm)
  - [`BIND\_OPCODE\_SET\_DYLIB\_ORDINAL\_ULEB`](#const-bind-opcode-set-dylib-ordinal-uleb)
  - [`BIND\_OPCODE\_SET\_DYLIB\_SPECIAL\_IMM`](#const-bind-opcode-set-dylib-special-imm)
  - [`BIND\_OPCODE\_SET\_SYMBOL\_TRAILING\_FLAGS\_IMM`](#const-bind-opcode-set-symbol-trailing-flags-imm)
  - [`BIND\_OPCODE\_SET\_TYPE\_IMM`](#const-bind-opcode-set-type-imm)
  - [`BIND\_OPCODE\_SET\_ADDEND\_SLEB`](#const-bind-opcode-set-addend-sleb)
  - [`BIND\_OPCODE\_SET\_SEGMENT\_AND\_OFFSET\_ULEB`](#const-bind-opcode-set-segment-and-offset-uleb)
  - [`BIND\_OPCODE\_ADD\_ADDR\_ULEB`](#const-bind-opcode-add-addr-uleb)
  - [`BIND\_OPCODE\_DO\_BIND`](#const-bind-opcode-do-bind)
  - [`BIND\_OPCODE\_DO\_BIND\_ADD\_ADDR\_ULEB`](#const-bind-opcode-do-bind-add-addr-uleb)
  - [`BIND\_OPCODE\_DO\_BIND\_ADD\_ADDR\_IMM\_SCALED`](#const-bind-opcode-do-bind-add-addr-imm-scaled)
  - [`BIND\_OPCODE\_DO\_BIND\_ULEB\_TIMES\_SKIPPING\_ULEB`](#const-bind-opcode-do-bind-uleb-times-skipping-uleb)
  - [`REFERENCE\_FLAG\_UNDEFINED\_NON\_LAZY`](#const-reference-flag-undefined-non-lazy)
  - [`REFERENCE\_FLAG\_UNDEFINED\_LAZY`](#const-reference-flag-undefined-lazy)
  - [`REFERENCE\_FLAG\_DEFINED`](#const-reference-flag-defined)
  - [`REFERENCE\_FLAG\_PRIVATE\_DEFINED`](#const-reference-flag-private-defined)
  - [`REFERENCE\_FLAG\_PRIVATE\_UNDEFINED\_NON\_LAZY`](#const-reference-flag-private-undefined-non-lazy)
  - [`REFERENCE\_FLAG\_PRIVATE\_UNDEFINED\_LAZY`](#const-reference-flag-private-undefined-lazy)
  - [`REFERENCED\_DYNAMICALLY`](#const-referenced-dynamically)
  - [`N\_NO\_DEAD\_STRIP`](#const-n-no-dead-strip)
  - [`N\_DESC\_DISCARDED`](#const-n-desc-discarded)
  - [`N\_WEAK\_REF`](#const-n-weak-ref)
  - [`N\_WEAK\_DEF`](#const-n-weak-def)
  - [`N\_SYMBOL\_RESOLVER`](#const-n-symbol-resolver)
  - [`EXPORT\_SYMBOL\_FLAGS\_KIND\_MASK`](#const-export-symbol-flags-kind-mask)
  - [`EXPORT\_SYMBOL\_FLAGS\_KIND\_REGULAR`](#const-export-symbol-flags-kind-regular)
  - [`EXPORT\_SYMBOL\_FLAGS\_KIND\_THREAD\_LOCAL`](#const-export-symbol-flags-kind-thread-local)
  - [`EXPORT\_SYMBOL\_FLAGS\_KIND\_ABSOLUTE`](#const-export-symbol-flags-kind-absolute)
  - [`EXPORT\_SYMBOL\_FLAGS\_WEAK\_DEFINITION`](#const-export-symbol-flags-weak-definition)
  - [`EXPORT\_SYMBOL\_FLAGS\_REEXPORT`](#const-export-symbol-flags-reexport)
  - [`EXPORT\_SYMBOL\_FLAGS\_STUB\_AND\_RESOLVER`](#const-export-symbol-flags-stub-and-resolver)
  - [`INDIRECT\_SYMBOL\_LOCAL`](#const-indirect-symbol-local)
  - [`INDIRECT\_SYMBOL\_ABS`](#const-indirect-symbol-abs)
  - [`CSMAGIC\_REQUIREMENT`](#const-csmagic-requirement)
  - [`CSMAGIC\_REQUIREMENTS`](#const-csmagic-requirements)
  - [`CSMAGIC\_CODEDIRECTORY`](#const-csmagic-codedirectory)
  - [`CSMAGIC\_EMBEDDED\_SIGNATURE`](#const-csmagic-embedded-signature)
  - [`CSMAGIC\_EMBEDDED\_SIGNATURE\_OLD`](#const-csmagic-embedded-signature-old)
  - [`CSMAGIC\_EMBEDDED\_ENTITLEMENTS`](#const-csmagic-embedded-entitlements)
  - [`CSMAGIC\_EMBEDDED\_DER\_ENTITLEMENTS`](#const-csmagic-embedded-der-entitlements)
  - [`CSMAGIC\_DETACHED\_SIGNATURE`](#const-csmagic-detached-signature)
  - [`CSMAGIC\_BLOBWRAPPER`](#const-csmagic-blobwrapper)
  - [`CS\_SUPPORTSSCATTER`](#const-cs-supportsscatter)
  - [`CS\_SUPPORTSTEAMID`](#const-cs-supportsteamid)
  - [`CS\_SUPPORTSCODELIMIT64`](#const-cs-supportscodelimit64)
  - [`CS\_SUPPORTSEXECSEG`](#const-cs-supportsexecseg)
  - [`CSSLOT\_CODEDIRECTORY`](#const-csslot-codedirectory)
  - [`CSSLOT\_INFOSLOT`](#const-csslot-infoslot)
  - [`CSSLOT\_REQUIREMENTS`](#const-csslot-requirements)
  - [`CSSLOT\_RESOURCEDIR`](#const-csslot-resourcedir)
  - [`CSSLOT\_APPLICATION`](#const-csslot-application)
  - [`CSSLOT\_ENTITLEMENTS`](#const-csslot-entitlements)
  - [`CSSLOT\_DER\_ENTITLEMENTS`](#const-csslot-der-entitlements)
  - [`CSSLOT\_ALTERNATE\_CODEDIRECTORIES`](#const-csslot-alternate-codedirectories)
  - [`CSSLOT\_ALTERNATE\_CODEDIRECTORY\_MAX`](#const-csslot-alternate-codedirectory-max)
  - [`CSSLOT\_ALTERNATE\_CODEDIRECTORY\_LIMIT`](#const-csslot-alternate-codedirectory-limit)
  - [`CSSLOT\_SIGNATURESLOT`](#const-csslot-signatureslot)
  - [`CSSLOT\_IDENTIFICATIONSLOT`](#const-csslot-identificationslot)
  - [`CSSLOT\_TICKETSLOT`](#const-csslot-ticketslot)
  - [`CSTYPE\_INDEX\_REQUIREMENTS`](#const-cstype-index-requirements)
  - [`CSTYPE\_INDEX\_ENTITLEMENTS`](#const-cstype-index-entitlements)
  - [`CS\_HASHTYPE\_SHA1`](#const-cs-hashtype-sha1)
  - [`CS\_HASHTYPE\_SHA256`](#const-cs-hashtype-sha256)
  - [`CS\_HASHTYPE\_SHA256\_TRUNCATED`](#const-cs-hashtype-sha256-truncated)
  - [`CS\_HASHTYPE\_SHA384`](#const-cs-hashtype-sha384)
  - [`CS\_SHA1\_LEN`](#const-cs-sha1-len)
  - [`CS\_SHA256\_LEN`](#const-cs-sha256-len)
  - [`CS\_SHA256\_TRUNCATED\_LEN`](#const-cs-sha256-truncated-len)
  - [`CS\_CDHASH\_LEN`](#const-cs-cdhash-len)
  - [`CS\_HASH\_MAX\_SIZE`](#const-cs-hash-max-size)
  - [`CS\_SIGNER\_TYPE\_UNKNOWN`](#const-cs-signer-type-unknown)
  - [`CS\_SIGNER\_TYPE\_LEGACYVPN`](#const-cs-signer-type-legacyvpn)
  - [`CS\_SIGNER\_TYPE\_MAC\_APP\_STORE`](#const-cs-signer-type-mac-app-store)
  - [`CS\_ADHOC`](#const-cs-adhoc)
  - [`CS\_LINKER\_SIGNED`](#const-cs-linker-signed)
  - [`CS\_EXECSEG\_MAIN\_BINARY`](#const-cs-execseg-main-binary)
  - [`compact\_unwind\_encoding\_t`](#const-compact-unwind-encoding-t)
  - [`UNWIND\_SECTION\_VERSION`](#const-unwind-section-version)
  - [`UNWIND\_IS\_NOT\_FUNCTION\_START`](#const-unwind-is-not-function-start)
  - [`UNWIND\_HAS\_LSDA`](#const-unwind-has-lsda)
  - [`UNWIND\_PERSONALITY\_MASK`](#const-unwind-personality-mask)
  - [`UNWIND\_X86\_64\_MODE\_MASK`](#const-unwind-x86-64-mode-mask)
  - [`UNWIND\_X86\_64\_RBP\_FRAME\_REGISTERS`](#const-unwind-x86-64-rbp-frame-registers)
  - [`UNWIND\_X86\_64\_RBP\_FRAME\_OFFSET`](#const-unwind-x86-64-rbp-frame-offset)
  - [`UNWIND\_X86\_64\_FRAMELESS\_STACK\_SIZE`](#const-unwind-x86-64-frameless-stack-size)
  - [`UNWIND\_X86\_64\_FRAMELESS\_STACK\_ADJUST`](#const-unwind-x86-64-frameless-stack-adjust)
  - [`UNWIND\_X86\_64\_FRAMELESS\_STACK\_REG\_COUNT`](#const-unwind-x86-64-frameless-stack-reg-count)
  - [`UNWIND\_X86\_64\_FRAMELESS\_STACK\_REG\_PERMUTATION`](#const-unwind-x86-64-frameless-stack-reg-permutation)
  - [`UNWIND\_X86\_64\_DWARF\_SECTION\_OFFSET`](#const-unwind-x86-64-dwarf-section-offset)
  - [`UNWIND\_ARM64\_MODE\_MASK`](#const-unwind-arm64-mode-mask)
  - [`UNWIND\_ARM64\_FRAME\_X19\_X20\_PAIR`](#const-unwind-arm64-frame-x19-x20-pair)
  - [`UNWIND\_ARM64\_FRAME\_X21\_X22\_PAIR`](#const-unwind-arm64-frame-x21-x22-pair)
  - [`UNWIND\_ARM64\_FRAME\_X23\_X24\_PAIR`](#const-unwind-arm64-frame-x23-x24-pair)
  - [`UNWIND\_ARM64\_FRAME\_X25\_X26\_PAIR`](#const-unwind-arm64-frame-x25-x26-pair)
  - [`UNWIND\_ARM64\_FRAME\_X27\_X28\_PAIR`](#const-unwind-arm64-frame-x27-x28-pair)
  - [`UNWIND\_ARM64\_FRAME\_D8\_D9\_PAIR`](#const-unwind-arm64-frame-d8-d9-pair)
  - [`UNWIND\_ARM64\_FRAME\_D10\_D11\_PAIR`](#const-unwind-arm64-frame-d10-d11-pair)
  - [`UNWIND\_ARM64\_FRAME\_D12\_D13\_PAIR`](#const-unwind-arm64-frame-d12-d13-pair)
  - [`UNWIND\_ARM64\_FRAME\_D14\_D15\_PAIR`](#const-unwind-arm64-frame-d14-d15-pair)
  - [`UNWIND\_ARM64\_FRAMELESS\_STACK\_SIZE\_MASK`](#const-unwind-arm64-frameless-stack-size-mask)
  - [`UNWIND\_ARM64\_DWARF\_SECTION\_OFFSET`](#const-unwind-arm64-dwarf-section-offset)

---

## Types (51)

### <a id="type-mach-header"></a>`mach_header`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const mach_header = extern struct {
    magic: u32,
    cputype: cpu_type_t,
    cpusubtype: cpu_subtype_t,
    filetype: u32,
    ncmds: u32,
    sizeofcmds: u32,
    flags: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `magic` | `u32` | – | |
| `cputype` | `cpu_type_t` | – | |
| `cpusubtype` | `cpu_subtype_t` | – | |
| `filetype` | `u32` | – | |
| `ncmds` | `u32` | – | |
| `sizeofcmds` | `u32` | – | |
| `flags` | `u32` | – | |

</details>

---

### <a id="type-mach-header-64"></a>`mach_header_64`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const mach_header_64 = extern struct {
    magic: u32 = MH_MAGIC_64,
    cputype: cpu_type_t = 0,
    cpusubtype: cpu_subtype_t = 0,
    filetype: u32 = 0,
    ncmds: u32 = 0,
    sizeofcmds: u32 = 0,
    flags: u32 = 0,
    reserved: u32 = 0,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `magic` | `u32` | `MH\_MAGIC\_64` | |
| `cputype` | `cpu_type_t` | `0` | |
| `cpusubtype` | `cpu_subtype_t` | `0` | |
| `filetype` | `u32` | `0` | |
| `ncmds` | `u32` | `0` | |
| `sizeofcmds` | `u32` | `0` | |
| `flags` | `u32` | `0` | |
| `reserved` | `u32` | `0` | |

</details>

---

### <a id="type-fat-header"></a>`fat_header`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const fat_header = extern struct {
    magic: u32,
    nfat_arch: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `magic` | `u32` | – | |
| `nfat_arch` | `u32` | – | |

</details>

---

### <a id="type-fat-arch"></a>`fat_arch`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const fat_arch = extern struct {
    cputype: cpu_type_t,
    cpusubtype: cpu_subtype_t,
    offset: u32,
    size: u32,
    @"align": u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cputype` | `cpu_type_t` | – | |
| `cpusubtype` | `cpu_subtype_t` | – | |
| `offset` | `u32` | – | |
| `size` | `u32` | – | |
| `@"align"` | `u32` | – | |

</details>

---

### <a id="type-load-command"></a>`load_command`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const load_command = extern struct {
    cmd: LC,
    cmdsize: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | – | |
| `cmdsize` | `u32` | – | |

</details>

---

### <a id="type-uuid-command"></a>`uuid_command`

<details class="declaration-card" open>
<summary>Container – The uuid load command contains a single 128-bit unique random number that</summary>

The uuid load command contains a single 128-bit unique random number that
identifies an object produced by the static link editor.

```zig
pub const uuid_command = extern struct {
    /// LC_UUID
    cmd: LC = .UUID,

    /// sizeof(struct uuid_command)
    cmdsize: u32 = @sizeOf(uuid_command),

    /// the 128-bit uuid
    uuid: [16]u8 = undefined,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.UUID` | LC\_UUID |
| `cmdsize` | `u32` | `@sizeOf(uuid\_command)` | sizeof(struct uuid\_command) |
| `uuid` | `[16]u8` | `undefined` | the 128-bit uuid |

</details>

---

### <a id="type-version-min-command"></a>`version_min_command`

<details class="declaration-card" open>
<summary>Container – The version_min_command contains the min OS version on which this</summary>

The version_min_command contains the min OS version on which this
binary was built to run.

```zig
pub const version_min_command = extern struct {
    /// LC_VERSION_MIN_MACOSX or LC_VERSION_MIN_IPHONEOS or LC_VERSION_MIN_WATCHOS or LC_VERSION_MIN_TVOS
    cmd: LC,

    /// sizeof(struct version_min_command)
    cmdsize: u32 = @sizeOf(version_min_command),

    /// X.Y.Z is encoded in nibbles xxxx.yy.zz
    version: u32,

    /// X.Y.Z is encoded in nibbles xxxx.yy.zz
    sdk: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | – | LC\_VERSION\_MIN\_MACOSX or LC\_VERSION\_MIN\_IPHONEOS or LC\_VERSION\_MIN\_WATCHOS or LC\_VERSION\_MIN\_TVOS |
| `cmdsize` | `u32` | `@sizeOf(version\_min\_command)` | sizeof(struct version\_min\_command) |
| `version` | `u32` | – | X.Y.Z is encoded in nibbles xxxx.yy.zz |
| `sdk` | `u32` | – | X.Y.Z is encoded in nibbles xxxx.yy.zz |

</details>

---

### <a id="type-source-version-command"></a>`source_version_command`

<details class="declaration-card" open>
<summary>Container – The source_version_command is an optional load command containing</summary>

The source_version_command is an optional load command containing
the version of the sources used to build the binary.

```zig
pub const source_version_command = extern struct {
    /// LC_SOURCE_VERSION
    cmd: LC = .SOURCE_VERSION,

    /// sizeof(source_version_command)
    cmdsize: u32 = @sizeOf(source_version_command),

    /// A.B.C.D.E packed as a24.b10.c10.d10.e10
    version: u64,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.SOURCE\_VERSION` | LC\_SOURCE\_VERSION |
| `cmdsize` | `u32` | `@sizeOf(source\_version\_command)` | sizeof(source\_version\_command) |
| `version` | `u64` | – | A.B.C.D.E packed as a24.b10.c10.d10.e10 |

</details>

---

### <a id="type-build-version-command"></a>`build_version_command`

<details class="declaration-card" open>
<summary>Container – The build_version_command contains the min OS version on which this</summary>

The build_version_command contains the min OS version on which this
binary was built to run for its platform. The list of known platforms and
tool values following it.

```zig
pub const build_version_command = extern struct {
    /// LC_BUILD_VERSION
    cmd: LC = .BUILD_VERSION,

    /// sizeof(struct build_version_command) plus
    /// ntools * sizeof(struct build_version_command)
    cmdsize: u32,

    /// platform
    platform: PLATFORM,

    /// X.Y.Z is encoded in nibbles xxxx.yy.zz
    minos: u32,

    /// X.Y.Z is encoded in nibbles xxxx.yy.zz
    sdk: u32,

    /// number of tool entries following this
    ntools: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.BUILD\_VERSION` | LC\_BUILD\_VERSION |
| `cmdsize` | `u32` | – | sizeof(struct build\_version\_command) plus ntools \* sizeof(struct build\_version\_command) |
| `platform` | [`PLATFORM`](#type-platform) | – | platform |
| `minos` | `u32` | – | X.Y.Z is encoded in nibbles xxxx.yy.zz |
| `sdk` | `u32` | – | X.Y.Z is encoded in nibbles xxxx.yy.zz |
| `ntools` | `u32` | – | number of tool entries following this |

</details>

---

### <a id="type-build-tool-version"></a>`build_tool_version`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const build_tool_version = extern struct {
    /// enum for the tool
    tool: TOOL,

    /// version number of the tool
    version: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `tool` | [`TOOL`](#type-tool) | – | enum for the tool |
| `version` | `u32` | – | version number of the tool |

</details>

---

### <a id="type-platform"></a>`PLATFORM`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const PLATFORM = enum(u32) {
    UNKNOWN = 0,
    ANY = 0xffffffff,
    MACOS = 1,
    IOS = 2,
    TVOS = 3,
    WATCHOS = 4,
    BRIDGEOS = 5,
    MACCATALYST = 6,
    IOSSIMULATOR = 7,
    TVOSSIMULATOR = 8,
    WATCHOSSIMULATOR = 9,
    DRIVERKIT = 10,
    VISIONOS = 11,
    VISIONOSSIMULATOR = 12,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `UNKNOWN` |  |
| `ANY` |  |
| `MACOS` |  |
| `IOS` |  |
| `TVOS` |  |
| `WATCHOS` |  |
| `BRIDGEOS` |  |
| `MACCATALYST` |  |
| `IOSSIMULATOR` |  |
| `TVOSSIMULATOR` |  |
| `WATCHOSSIMULATOR` |  |
| `DRIVERKIT` |  |
| `VISIONOS` |  |
| `VISIONOSSIMULATOR` |  |
| `_` |  |

</details>

---

### <a id="type-tool"></a>`TOOL`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const TOOL = enum(u32) {
    CLANG = 0x1,
    SWIFT = 0x2,
    LD = 0x3,
    LLD = 0x4, // LLVM's stock LLD linker
    ZIG = 0x5, // Unofficially Zig
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `CLANG` |  |
| `SWIFT` |  |
| `LD` |  |
| `LLD` |  |
| `ZIG` |  |
| `_` |  |

</details>

---

### <a id="type-entry-point-command"></a>`entry_point_command`

<details class="declaration-card" open>
<summary>Container – The entry_point_command is a replacement for thread_command</summary>

The entry_point_command is a replacement for thread_command.
It is used for main executables to specify the location (file offset)
of main(). If -stack_size was used at link time, the stacksize
field will contain the stack size needed for the main thread.

```zig
pub const entry_point_command = extern struct {
    /// LC_MAIN only used in MH_EXECUTE filetypes
    cmd: LC = .MAIN,

    /// sizeof(struct entry_point_command)
    cmdsize: u32 = @sizeOf(entry_point_command),

    /// file (__TEXT) offset of main()
    entryoff: u64 = 0,

    /// if not zero, initial stack size
    stacksize: u64 = 0,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.MAIN` | LC\_MAIN only used in MH\_EXECUTE filetypes |
| `cmdsize` | `u32` | `@sizeOf(entry\_point\_command)` | sizeof(struct entry\_point\_command) |
| `entryoff` | `u64` | `0` | file (\_\_TEXT) offset of main() |
| `stacksize` | `u64` | `0` | if not zero, initial stack size |

</details>

---

### <a id="type-symtab-command"></a>`symtab_command`

<details class="declaration-card" open>
<summary>Container – The symtab_command contains the offsets and sizes of the link-edit 4</summary>

The symtab_command contains the offsets and sizes of the link-edit 4.3BSD
"stab" style symbol table information as described in the header files
<nlist.h> and <stab.h>.

```zig
pub const symtab_command = extern struct {
    /// LC_SYMTAB
    cmd: LC = .SYMTAB,

    /// sizeof(struct symtab_command)
    cmdsize: u32 = @sizeOf(symtab_command),

    /// symbol table offset
    symoff: u32 = 0,

    /// number of symbol table entries
    nsyms: u32 = 0,

    /// string table offset
    stroff: u32 = 0,

    /// string table size in bytes
    strsize: u32 = 0,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.SYMTAB` | LC\_SYMTAB |
| `cmdsize` | `u32` | `@sizeOf(symtab\_command)` | sizeof(struct symtab\_command) |
| `symoff` | `u32` | `0` | symbol table offset |
| `nsyms` | `u32` | `0` | number of symbol table entries |
| `stroff` | `u32` | `0` | string table offset |
| `strsize` | `u32` | `0` | string table size in bytes |

</details>

---

### <a id="type-dysymtab-command"></a>`dysymtab_command`

<details class="declaration-card" open>
<summary>Container – This is the second set of the symbolic information which is used to support</summary>

This is the second set of the symbolic information which is used to support
the data structures for the dynamically link editor.

The original set of symbolic information in the symtab_command which contains
the symbol and string tables must also be present when this load command is
present.  When this load command is present the symbol table is organized
into three groups of symbols:
 local symbols (static and debugging symbols) - grouped by module
 defined external symbols - grouped by module (sorted by name if not lib)
 undefined external symbols (sorted by name if MH_BINDATLOAD is not set,
 and in order the were seen by the static linker if MH_BINDATLOAD is set)
In this load command there are offsets and counts to each of the three groups
of symbols.

This load command contains a the offsets and sizes of the following new
symbolic information tables:
 table of contents
 module table
 reference symbol table
 indirect symbol table
The first three tables above (the table of contents, module table and
reference symbol table) are only present if the file is a dynamically linked
shared library.  For executable and object modules, which are files
containing only one module, the information that would be in these three
tables is determined as follows:
 table of contents - the defined external symbols are sorted by name
 module table - the file contains only one module so everything in the file
 is part of the module.
 reference symbol table - is the defined and undefined external symbols

For dynamically linked shared library files this load command also contains
offsets and sizes to the pool of relocation entries for all sections
separated into two groups:
 external relocation entries
 local relocation entries
For executable and object modules the relocation entries continue to hang
off the section structures.

```zig
pub const dysymtab_command = extern struct {
    /// LC_DYSYMTAB
    cmd: LC = .DYSYMTAB,

    /// sizeof(struct dysymtab_command)
    cmdsize: u32 = @sizeOf(dysymtab_command),

    // The symbols indicated by symoff and nsyms of the LC_SYMTAB load command
    // are grouped into the following three groups:
    //    local symbols (further grouped by the module they are from)
    //    defined external symbols (further grouped by the module they are from)
    //    undefined symbols
    //
    // The local symbols are used only for debugging.  The dynamic binding
    // process may have to use them to indicate to the debugger the local
    // symbols for a module that is being bound.
    //
    // The last two groups are used by the dynamic binding process to do the
    // binding (indirectly through the module table and the reference symbol
    // table when this is a dynamically linked shared library file).

    /// index of local symbols
    ilocalsym: u32 = 0,

    /// number of local symbols
    nlocalsym: u32 = 0,

    /// index to externally defined symbols
    iextdefsym: u32 = 0,

    /// number of externally defined symbols
    nextdefsym: u32 = 0,

    /// index to undefined symbols
    iundefsym: u32 = 0,

    /// number of undefined symbols
    nundefsym: u32 = 0,

    // For the for the dynamic binding process to find which module a symbol
    // is defined in the table of contents is used (analogous to the ranlib
    // structure in an archive) which maps defined external symbols to modules
    // they are defined in.  This exists only in a dynamically linked shared
    // library file.  For executable and object modules the defined external
    // symbols are sorted by name and is use as the table of contents.

    /// file offset to table of contents
    tocoff: u32 = 0,

    /// number of entries in table of contents
    ntoc: u32 = 0,

    // To support dynamic binding of "modules" (whole object files) the symbol
    // table must reflect the modules that the file was created from.  This is
    // done by having a module table that has indexes and counts into the merged
    // tables for each module.  The module structure that these two entries
    // refer to is described below.  This exists only in a dynamically linked
    // shared library file.  For executable and object modules the file only
    // contains one module so everything in the file belongs to the module.

    /// file offset to module table
    modtaboff: u32 = 0,

    /// number of module table entries
    nmodtab: u32 = 0,

    // To support dynamic module binding the module structure for each module
    // indicates the external references (defined and undefined) each module
    // makes.  For each module there is an offset and a count into the
    // reference symbol table for the symbols that the module references.
    // This exists only in a dynamically linked shared library file.  For
    // executable and object modules the defined external symbols and the
    // undefined external symbols indicates the external references.

    /// offset to referenced symbol table
    extrefsymoff: u32 = 0,

    /// number of referenced symbol table entries
    nextrefsyms: u32 = 0,

    // The sections that contain "symbol pointers" and "routine stubs" have
    // indexes and (implied counts based on the size of the section and fixed
    // size of the entry) into the "indirect symbol" table for each pointer
    // and stub.  For every section of these two types the index into the
    // indirect symbol table is stored in the section header in the field
    // reserved1.  An indirect symbol table entry is simply a 32bit index into
    // the symbol table to the symbol that the pointer or stub is referring to.
    // The indirect symbol table is ordered to match the entries in the section.

    /// file offset to the indirect symbol table
    indirectsymoff: u32 = 0,

    /// number of indirect symbol table entries
    nindirectsyms: u32 = 0,

    // To support relocating an individual module in a library file quickly the
    // external relocation entries for each module in the library need to be
    // accessed efficiently.  Since the relocation entries can't be accessed
    // through the section headers for a library file they are separated into
    // groups of local and external entries further grouped by module.  In this
    // case the presents of this load command who's extreloff, nextrel,
    // locreloff and nlocrel fields are non-zero indicates that the relocation
    // entries of non-merged sections are not referenced through the section
    // structures (and the reloff and nreloc fields in the section headers are
    // set to zero).
    //
    // Since the relocation entries are not accessed through the section headers
    // this requires the r_address field to be something other than a section
    // offset to identify the item to be relocated.  In this case r_address is
    // set to the offset from the vmaddr of the first LC_SEGMENT command.
    // For MH_SPLIT_SEGS images r_address is set to the the offset from the
    // vmaddr of the first read-write LC_SEGMENT command.
    //
    // The relocation entries are grouped by module and the module table
    // entries have indexes and counts into them for the group of external
    // relocation entries for that the module.
    //
    // For sections that are merged across modules there must not be any
    // remaining external relocation entries for them (for merged sections
    // remaining relocation entries must be local).

    /// offset to external relocation entries
    extreloff: u32 = 0,

    /// number of external relocation entries
    nextrel: u32 = 0,

    // All the local relocation entries are grouped together (they are not
    // grouped by their module since they are only used if the object is moved
    // from its statically link edited address).

    /// offset to local relocation entries
    locreloff: u32 = 0,

    /// number of local relocation entries
    nlocrel: u32 = 0,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.DYSYMTAB` | LC\_DYSYMTAB |
| `cmdsize` | `u32` | `@sizeOf(dysymtab\_command)` | sizeof(struct dysymtab\_command) |
| `ilocalsym` | `u32` | `0` | index of local symbols |
| `nlocalsym` | `u32` | `0` | number of local symbols |
| `iextdefsym` | `u32` | `0` | index to externally defined symbols |
| `nextdefsym` | `u32` | `0` | number of externally defined symbols |
| `iundefsym` | `u32` | `0` | index to undefined symbols |
| `nundefsym` | `u32` | `0` | number of undefined symbols |
| `tocoff` | `u32` | `0` | file offset to table of contents |
| `ntoc` | `u32` | `0` | number of entries in table of contents |
| `modtaboff` | `u32` | `0` | file offset to module table |
| `nmodtab` | `u32` | `0` | number of module table entries |
| `extrefsymoff` | `u32` | `0` | offset to referenced symbol table |
| `nextrefsyms` | `u32` | `0` | number of referenced symbol table entries |
| `indirectsymoff` | `u32` | `0` | file offset to the indirect symbol table |
| `nindirectsyms` | `u32` | `0` | number of indirect symbol table entries |
| `extreloff` | `u32` | `0` | offset to external relocation entries |
| `nextrel` | `u32` | `0` | number of external relocation entries |
| `locreloff` | `u32` | `0` | offset to local relocation entries |
| `nlocrel` | `u32` | `0` | number of local relocation entries |

</details>

---

### <a id="type-linkedit-data-command"></a>`linkedit_data_command`

<details class="declaration-card" open>
<summary>Container – The linkedit_data_command contains the offsets and sizes of a blob</summary>

The linkedit_data_command contains the offsets and sizes of a blob
of data in the __LINKEDIT segment.

```zig
pub const linkedit_data_command = extern struct {
    /// LC_CODE_SIGNATURE, LC_SEGMENT_SPLIT_INFO, LC_FUNCTION_STARTS, LC_DATA_IN_CODE, LC_DYLIB_CODE_SIGN_DRS or LC_LINKER_OPTIMIZATION_HINT.
    cmd: LC,

    /// sizeof(struct linkedit_data_command)
    cmdsize: u32 = @sizeOf(linkedit_data_command),

    /// file offset of data in __LINKEDIT segment
    dataoff: u32 = 0,

    /// file size of data in __LINKEDIT segment
    datasize: u32 = 0,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | – | LC\_CODE\_SIGNATURE, LC\_SEGMENT\_SPLIT\_INFO, LC\_FUNCTION\_STARTS, LC\_DATA\_IN\_CODE, LC\_DYLIB\_CODE\_SIGN\_DRS or LC\_LINKER\_OPTIMIZATION\_HINT. |
| `cmdsize` | `u32` | `@sizeOf(linkedit\_data\_command)` | sizeof(struct linkedit\_data\_command) |
| `dataoff` | `u32` | `0` | file offset of data in \_\_LINKEDIT segment |
| `datasize` | `u32` | `0` | file size of data in \_\_LINKEDIT segment |

</details>

---

### <a id="type-dyld-info-command"></a>`dyld_info_command`

<details class="declaration-card" open>
<summary>Container – The dyld_info_command contains the file offsets and sizes of</summary>

The dyld_info_command contains the file offsets and sizes of
the new compressed form of the information dyld needs to
load the image.  This information is used by dyld on Mac OS X
10.6 and later.  All information pointed to by this command
is encoded using byte streams, so no endian swapping is needed
to interpret it.

```zig
pub const dyld_info_command = extern struct {
    /// LC_DYLD_INFO or LC_DYLD_INFO_ONLY
    cmd: LC = .DYLD_INFO_ONLY,

    /// sizeof(struct dyld_info_command)
    cmdsize: u32 = @sizeOf(dyld_info_command),

    // Dyld rebases an image whenever dyld loads it at an address different
    // from its preferred address.  The rebase information is a stream
    // of byte sized opcodes whose symbolic names start with REBASE_OPCODE_.
    // Conceptually the rebase information is a table of tuples:
    //    <seg-index, seg-offset, type>
    // The opcodes are a compressed way to encode the table by only
    // encoding when a column changes.  In addition simple patterns
    // like "every n'th offset for m times" can be encoded in a few
    // bytes.

    /// file offset to rebase info
    rebase_off: u32 = 0,

    /// size of rebase info
    rebase_size: u32 = 0,

    // Dyld binds an image during the loading process, if the image
    // requires any pointers to be initialized to symbols in other images.
    // The bind information is a stream of byte sized
    // opcodes whose symbolic names start with BIND_OPCODE_.
    // Conceptually the bind information is a table of tuples:
    //    <seg-index, seg-offset, type, symbol-library-ordinal, symbol-name, addend>
    // The opcodes are a compressed way to encode the table by only
    // encoding when a column changes.  In addition simple patterns
    // like for runs of pointers initialized to the same value can be
    // encoded in a few bytes.

    /// file offset to binding info
    bind_off: u32 = 0,

    /// size of binding info
    bind_size: u32 = 0,

    // Some C++ programs require dyld to unique symbols so that all
    // images in the process use the same copy of some code/data.
    // This step is done after binding. The content of the weak_bind
    // info is an opcode stream like the bind_info.  But it is sorted
    // alphabetically by symbol name.  This enable dyld to walk
    // all images with weak binding information in order and look
    // for collisions.  If there are no collisions, dyld does
    // no updating.  That means that some fixups are also encoded
    // in the bind_info.  For instance, all calls to "operator new"
    // are first bound to libstdc++.dylib using the information
    // in bind_info.  Then if some image overrides operator new
    // that is detected when the weak_bind information is processed
    // and the call to operator new is then rebound.

    /// file offset to weak binding info
    weak_bind_off: u32 = 0,

    /// size of weak binding info
    weak_bind_size: u32 = 0,

    // Some uses of external symbols do not need to be bound immediately.
    // Instead they can be lazily bound on first use.  The lazy_bind
    // are contains a stream of BIND opcodes to bind all lazy symbols.
    // Normal use is that dyld ignores the lazy_bind section when
    // loading an image.  Instead the static linker arranged for the
    // lazy pointer to initially point to a helper function which
    // pushes the offset into the lazy_bind area for the symbol
    // needing to be bound, then jumps to dyld which simply adds
    // the offset to lazy_bind_off to get the information on what
    // to bind.

    /// file offset to lazy binding info
    lazy_bind_off: u32 = 0,

    /// size of lazy binding info
    lazy_bind_size: u32 = 0,

    // The symbols exported by a dylib are encoded in a trie.  This
    // is a compact representation that factors out common prefixes.
    // It also reduces LINKEDIT pages in RAM because it encodes all
    // information (name, address, flags) in one small, contiguous range.
    // The export area is a stream of nodes.  The first node sequentially
    // is the start node for the trie.
    //
    // Nodes for a symbol start with a uleb128 that is the length of
    // the exported symbol information for the string so far.
    // If there is no exported symbol, the node starts with a zero byte.
    // If there is exported info, it follows the length.
    //
    // First is a uleb128 containing flags. Normally, it is followed by
    // a uleb128 encoded offset which is location of the content named
    // by the symbol from the mach_header for the image.  If the flags
    // is EXPORT_SYMBOL_FLAGS_REEXPORT, then following the flags is
    // a uleb128 encoded library ordinal, then a zero terminated
    // UTF8 string.  If the string is zero length, then the symbol
    // is re-export from the specified dylib with the same name.
    // If the flags is EXPORT_SYMBOL_FLAGS_STUB_AND_RESOLVER, then following
    // the flags is two uleb128s: the stub offset and the resolver offset.
    // The stub is used by non-lazy pointers.  The resolver is used
    // by lazy pointers and must be called to get the actual address to use.
    //
    // After the optional exported symbol information is a byte of
    // how many edges (0-255) that this node has leaving it,
    // followed by each edge.
    // Each edge is a zero terminated UTF8 of the addition chars
    // in the symbol, followed by a uleb128 offset for the node that
    // edge points to.

    /// file offset to lazy binding info
    export_off: u32 = 0,

    /// size of lazy binding info
    export_size: u32 = 0,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.DYLD\_INFO\_ONLY` | LC\_DYLD\_INFO or LC\_DYLD\_INFO\_ONLY |
| `cmdsize` | `u32` | `@sizeOf(dyld\_info\_command)` | sizeof(struct dyld\_info\_command) |
| `rebase_off` | `u32` | `0` | file offset to rebase info |
| `rebase_size` | `u32` | `0` | size of rebase info |
| `bind_off` | `u32` | `0` | file offset to binding info |
| `bind_size` | `u32` | `0` | size of binding info |
| `weak_bind_off` | `u32` | `0` | file offset to weak binding info |
| `weak_bind_size` | `u32` | `0` | size of weak binding info |
| `lazy_bind_off` | `u32` | `0` | file offset to lazy binding info |
| `lazy_bind_size` | `u32` | `0` | size of lazy binding info |
| `export_off` | `u32` | `0` | file offset to lazy binding info |
| `export_size` | `u32` | `0` | size of lazy binding info |

</details>

---

### <a id="type-dylinker-command"></a>`dylinker_command`

<details class="declaration-card" open>
<summary>Container – A program that uses a dynamic linker contains a dylinker_command to identify</summary>

A program that uses a dynamic linker contains a dylinker_command to identify
the name of the dynamic linker (LC_LOAD_DYLINKER). And a dynamic linker
contains a dylinker_command to identify the dynamic linker (LC_ID_DYLINKER).
A file can have at most one of these.
This struct is also used for the LC_DYLD_ENVIRONMENT load command and contains
string for dyld to treat like an environment variable.

```zig
pub const dylinker_command = extern struct {
    /// LC_ID_DYLINKER, LC_LOAD_DYLINKER, or LC_DYLD_ENVIRONMENT
    cmd: LC,

    /// includes pathname string
    cmdsize: u32,

    /// A variable length string in a load command is represented by an lc_str
    /// union.  The strings are stored just after the load command structure and
    /// the offset is from the start of the load command structure.  The size
    /// of the string is reflected in the cmdsize field of the load command.
    /// Once again any padded bytes to bring the cmdsize field to a multiple
    /// of 4 bytes must be zero.
    name: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | – | LC\_ID\_DYLINKER, LC\_LOAD\_DYLINKER, or LC\_DYLD\_ENVIRONMENT |
| `cmdsize` | `u32` | – | includes pathname string |
| `name` | `u32` | – | A variable length string in a load command is represented by an lc\_str union.  The strings are stored just after the load command structure and the offset is from the start of the load command structure.  The size of the string is reflected in the cmdsize field of the load command. Once again any padded bytes to bring the cmdsize field to a multiple of 4 bytes must be zero. |

</details>

---

### <a id="type-dylib-command"></a>`dylib_command`

<details class="declaration-card" open>
<summary>Container – A dynamically linked shared library (filetype == MH_DYLIB in the mach header)</summary>

A dynamically linked shared library (filetype == MH_DYLIB in the mach header)
contains a dylib_command (cmd == LC_ID_DYLIB) to identify the library.
An object that uses a dynamically linked shared library also contains a
dylib_command (cmd == LC_LOAD_DYLIB, LC_LOAD_WEAK_DYLIB, or
LC_REEXPORT_DYLIB) for each library it uses.

```zig
pub const dylib_command = extern struct {
    /// LC_ID_DYLIB, LC_LOAD_WEAK_DYLIB, LC_LOAD_DYLIB, LC_REEXPORT_DYLIB
    cmd: LC,

    /// includes pathname string
    cmdsize: u32,

    /// the library identification
    dylib: dylib,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | – | LC\_ID\_DYLIB, LC\_LOAD\_WEAK\_DYLIB, LC\_LOAD\_DYLIB, LC\_REEXPORT\_DYLIB |
| `cmdsize` | `u32` | – | includes pathname string |
| `dylib` | [`dylib`](#type-dylib) | – | the library identification |

</details>

---

### <a id="type-dylib"></a>`dylib`

<details class="declaration-card" open>
<summary>Container – Dynamically linked shared libraries are identified by two things</summary>

Dynamically linked shared libraries are identified by two things.  The
pathname (the name of the library as found for execution), and the
compatibility version number.  The pathname must match and the compatibility
number in the user of the library must be greater than or equal to the
library being used.  The time stamp is used to record the time a library was
built and copied into user so it can be use to determined if the library used
at runtime is exactly the same as used to build the program.

```zig
pub const dylib = extern struct {
    /// library's pathname (offset pointing at the end of dylib_command)
    name: u32,

    /// library's build timestamp
    timestamp: u32,

    /// library's current version number
    current_version: u32,

    /// library's compatibility version number
    compatibility_version: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `u32` | – | library's pathname (offset pointing at the end of dylib\_command) |
| `timestamp` | `u32` | – | library's build timestamp |
| `current_version` | `u32` | – | library's current version number |
| `compatibility_version` | `u32` | – | library's compatibility version number |

</details>

---

### <a id="type-rpath-command"></a>`rpath_command`

<details class="declaration-card" open>
<summary>Container – The rpath_command contains a path which at runtime should be added to the current</summary>

The rpath_command contains a path which at runtime should be added to the current
run path used to find @rpath prefixed dylibs.

```zig
pub const rpath_command = extern struct {
    /// LC_RPATH
    cmd: LC = .RPATH,

    /// includes string
    cmdsize: u32,

    /// path to add to run path
    path: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.RPATH` | LC\_RPATH |
| `cmdsize` | `u32` | – | includes string |
| `path` | `u32` | – | path to add to run path |

</details>

---

### <a id="type-segment-command"></a>`segment_command`

<details class="declaration-card" open>
<summary>Container – The segment load command indicates that a part of this file is to be</summary>

The segment load command indicates that a part of this file is to be
mapped into the task's address space.  The size of this segment in memory,
vmsize, maybe equal to or larger than the amount to map from this file,
filesize.  The file is mapped starting at fileoff to the beginning of
the segment in memory, vmaddr.  The rest of the memory of the segment,
if any, is allocated zero fill on demand.  The segment's maximum virtual
memory protection and initial virtual memory protection are specified
by the maxprot and initprot fields.  If the segment has sections then the
section structures directly follow the segment command and their size is
reflected in cmdsize.

```zig
pub const segment_command = extern struct {
    /// LC_SEGMENT
    cmd: LC = .SEGMENT,

    /// includes sizeof section structs
    cmdsize: u32,

    /// segment name
    segname: [16]u8,

    /// memory address of this segment
    vmaddr: u32,

    /// memory size of this segment
    vmsize: u32,

    /// file offset of this segment
    fileoff: u32,

    /// amount to map from the file
    filesize: u32,

    /// maximum VM protection
    maxprot: vm_prot_t,

    /// initial VM protection
    initprot: vm_prot_t,

    /// number of sections in segment
    nsects: u32,
    flags: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.SEGMENT` | LC\_SEGMENT |
| `cmdsize` | `u32` | – | includes sizeof section structs |
| `segname` | `[16]u8` | – | segment name |
| `vmaddr` | `u32` | – | memory address of this segment |
| `vmsize` | `u32` | – | memory size of this segment |
| `fileoff` | `u32` | – | file offset of this segment |
| `filesize` | `u32` | – | amount to map from the file |
| `maxprot` | `vm_prot_t` | – | maximum VM protection |
| `initprot` | `vm_prot_t` | – | initial VM protection |
| `nsects` | `u32` | – | number of sections in segment |
| `flags` | `u32` | – | |

</details>

---

### <a id="type-segment-command-64"></a>`segment_command_64`

<details class="declaration-card" open>
<summary>Container – The 64-bit segment load command indicates that a part of this file is to be</summary>

The 64-bit segment load command indicates that a part of this file is to be
mapped into a 64-bit task's address space.  If the 64-bit segment has
sections then section_64 structures directly follow the 64-bit segment
command and their size is reflected in cmdsize.

```zig
pub const segment_command_64 = extern struct {
    /// LC_SEGMENT_64
    cmd: LC = .SEGMENT_64,

    /// includes sizeof section_64 structs
    cmdsize: u32,
    // TODO lazy values in stage2
    // cmdsize: u32 = @sizeOf(segment_command_64),

    /// segment name
    segname: [16]u8,

    /// memory address of this segment
    vmaddr: u64 = 0,

    /// memory size of this segment
    vmsize: u64 = 0,

    /// file offset of this segment
    fileoff: u64 = 0,

    /// amount to map from the file
    filesize: u64 = 0,

    /// maximum VM protection
    maxprot: vm_prot_t = PROT.NONE,

    /// initial VM protection
    initprot: vm_prot_t = PROT.NONE,

    /// number of sections in segment
    nsects: u32 = 0,
    flags: u32 = 0,

    pub fn segName(seg: *const segment_command_64) []const u8 {
        return parseName(&seg.segname);
    }

    pub fn isWriteable(seg: segment_command_64) bool {
        return seg.initprot & PROT.WRITE != 0;
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `cmd` | [`LC`](#type-lc) | `.SEGMENT\_64` | LC\_SEGMENT\_64 |
| `cmdsize` | `u32` | – | includes sizeof section\_64 structs |
| `segname` | `[16]u8` | – | segment name |
| `vmaddr` | `u64` | `0` | memory address of this segment |
| `vmsize` | `u64` | `0` | memory size of this segment |
| `fileoff` | `u64` | `0` | file offset of this segment |
| `filesize` | `u64` | `0` | amount to map from the file |
| `maxprot` | `vm_prot_t` | `PROT.NONE` | maximum VM protection |
| `initprot` | `vm_prot_t` | `PROT.NONE` | initial VM protection |
| `nsects` | `u32` | `0` | number of sections in segment |
| `flags` | `u32` | `0` | |

</details>

---

### <a id="type-prot"></a>`PROT`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const PROT = struct {
    /// [MC2] no permissions
    pub const NONE: vm_prot_t = 0x00;
    /// [MC2] pages can be read
    pub const READ: vm_prot_t = 0x01;
    /// [MC2] pages can be written
    pub const WRITE: vm_prot_t = 0x02;
    /// [MC2] pages can be executed
    pub const EXEC: vm_prot_t = 0x04;
    /// When a caller finds that they cannot obtain write permission on a
    /// mapped entry, the following flag can be used. The entry will be
    /// made "needs copy" effectively copying the object (using COW),
    /// and write permission will be added to the maximum protections for
    /// the associated entry.
    pub const COPY: vm_prot_t = 0x10;
}
```

</details>

---

### <a id="type-section"></a>`section`

<details class="declaration-card" open>
<summary>Container – A segment is made up of zero or more sections</summary>

A segment is made up of zero or more sections.  Non-MH_OBJECT files have
all of their segments with the proper sections in each, and padded to the
specified segment alignment when produced by the link editor.  The first
segment of a MH_EXECUTE and MH_FVMLIB format file contains the mach_header
and load commands of the object file before its first section.  The zero
fill sections are always last in their segment (in all formats).  This
allows the zeroed segment padding to be mapped into memory where zero fill
sections might be. The gigabyte zero fill sections, those with the section
type S_GB_ZEROFILL, can only be in a segment with sections of this type.
These segments are then placed after all other segments.

The MH_OBJECT format has all of its sections in one segment for
compactness.  There is no padding to a specified segment boundary and the
mach_header and load commands are not part of the segment.

Sections with the same section name, sectname, going into the same segment,
segname, are combined by the link editor.  The resulting section is aligned
to the maximum alignment of the combined sections and is the new section's
alignment.  The combined sections are aligned to their original alignment in
the combined section.  Any padded bytes to get the specified alignment are
zeroed.

The format of the relocation entries referenced by the reloff and nreloc
fields of the section structure for mach object files is described in the
header file <reloc.h>.

```zig
pub const section = extern struct {
    /// name of this section
    sectname: [16]u8,

    /// segment this section goes in
    segname: [16]u8,

    /// memory address of this section
    addr: u32,

    /// size in bytes of this section
    size: u32,

    /// file offset of this section
    offset: u32,

    /// section alignment (power of 2)
    @"align": u32,

    /// file offset of relocation entries
    reloff: u32,

    /// number of relocation entries
    nreloc: u32,

    /// flags (section type and attributes
    flags: u32,

    /// reserved (for offset or index)
    reserved1: u32,

    /// reserved (for count or sizeof)
    reserved2: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `sectname` | `[16]u8` | – | name of this section |
| `segname` | `[16]u8` | – | segment this section goes in |
| `addr` | `u32` | – | memory address of this section |
| `size` | `u32` | – | size in bytes of this section |
| `offset` | `u32` | – | file offset of this section |
| `@"align"` | `u32` | – | section alignment (power of 2) |
| `reloff` | `u32` | – | file offset of relocation entries |
| `nreloc` | `u32` | – | number of relocation entries |
| `flags` | `u32` | – | flags (section type and attributes |
| `reserved1` | `u32` | – | reserved (for offset or index) |
| `reserved2` | `u32` | – | reserved (for count or sizeof) |

</details>

---

### <a id="type-section-64"></a>`section_64`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const section_64 = extern struct {
    /// name of this section
    sectname: [16]u8,

    /// segment this section goes in
    segname: [16]u8,

    /// memory address of this section
    addr: u64 = 0,

    /// size in bytes of this section
    size: u64 = 0,

    /// file offset of this section
    offset: u32 = 0,

    /// section alignment (power of 2)
    @"align": u32 = 0,

    /// file offset of relocation entries
    reloff: u32 = 0,

    /// number of relocation entries
    nreloc: u32 = 0,

    /// flags (section type and attributes
    flags: u32 = S_REGULAR,

    /// reserved (for offset or index)
    reserved1: u32 = 0,

    /// reserved (for count or sizeof)
    reserved2: u32 = 0,

    /// reserved
    reserved3: u32 = 0,

    pub fn sectName(sect: *const section_64) []const u8 {
        return parseName(&sect.sectname);
    }

    pub fn segName(sect: *const section_64) []const u8 {
        return parseName(&sect.segname);
    }

    pub fn @"type"(sect: section_64) u8 {
        return @as(u8, @truncate(sect.flags & 0xff));
    }

    pub fn attrs(sect: section_64) u32 {
        return sect.flags & 0xffffff00;
    }

    pub fn isCode(sect: section_64) bool {
        const attr = sect.attrs();
        return attr & S_ATTR_PURE_INSTRUCTIONS != 0 or attr & S_ATTR_SOME_INSTRUCTIONS != 0;
    }

    pub fn isZerofill(sect: section_64) bool {
        const tt = sect.type();
        return tt == S_ZEROFILL or tt == S_GB_ZEROFILL or tt == S_THREAD_LOCAL_ZEROFILL;
    }

    pub fn isSymbolStubs(sect: section_64) bool {
        const tt = sect.type();
        return tt == S_SYMBOL_STUBS;
    }

    pub fn isDebug(sect: section_64) bool {
        return sect.attrs() & S_ATTR_DEBUG != 0;
    }

    pub fn isDontDeadStrip(sect: section_64) bool {
        return sect.attrs() & S_ATTR_NO_DEAD_STRIP != 0;
    }

    pub fn isDontDeadStripIfReferencesLive(sect: section_64) bool {
        return sect.attrs() & S_ATTR_LIVE_SUPPORT != 0;
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `sectname` | `[16]u8` | – | name of this section |
| `segname` | `[16]u8` | – | segment this section goes in |
| `addr` | `u64` | `0` | memory address of this section |
| `size` | `u64` | `0` | size in bytes of this section |
| `offset` | `u32` | `0` | file offset of this section |
| `@"align"` | `u32` | `0` | section alignment (power of 2) |
| `reloff` | `u32` | `0` | file offset of relocation entries |
| `nreloc` | `u32` | `0` | number of relocation entries |
| `flags` | `u32` | `S\_REGULAR` | flags (section type and attributes |
| `reserved1` | `u32` | `0` | reserved (for offset or index) |
| `reserved2` | `u32` | `0` | reserved (for count or sizeof) |
| `reserved3` | `u32` | `0` | reserved |

</details>

---

### <a id="type-nlist"></a>`nlist`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const nlist = extern struct {
    n_strx: u32,
    n_type: u8,
    n_sect: u8,
    n_desc: i16,
    n_value: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `n_strx` | `u32` | – | |
| `n_type` | `u8` | – | |
| `n_sect` | `u8` | – | |
| `n_desc` | `i16` | – | |
| `n_value` | `u32` | – | |

</details>

---

### <a id="type-nlist-64"></a>`nlist_64`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const nlist_64 = extern struct {
    n_strx: u32,
    n_type: u8,
    n_sect: u8,
    n_desc: u16,
    n_value: u64,

    pub fn stab(sym: nlist_64) bool {
        return N_STAB & sym.n_type != 0;
    }

    pub fn pext(sym: nlist_64) bool {
        return N_PEXT & sym.n_type != 0;
    }

    pub fn ext(sym: nlist_64) bool {
        return N_EXT & sym.n_type != 0;
    }

    pub fn sect(sym: nlist_64) bool {
        const type_ = N_TYPE & sym.n_type;
        return type_ == N_SECT;
    }

    pub fn undf(sym: nlist_64) bool {
        const type_ = N_TYPE & sym.n_type;
        return type_ == N_UNDF;
    }

    pub fn indr(sym: nlist_64) bool {
        const type_ = N_TYPE & sym.n_type;
        return type_ == N_INDR;
    }

    pub fn abs(sym: nlist_64) bool {
        const type_ = N_TYPE & sym.n_type;
        return type_ == N_ABS;
    }

    pub fn weakDef(sym: nlist_64) bool {
        return sym.n_desc & N_WEAK_DEF != 0;
    }

    pub fn weakRef(sym: nlist_64) bool {
        return sym.n_desc & N_WEAK_REF != 0;
    }

    pub fn discarded(sym: nlist_64) bool {
        return sym.n_desc & N_DESC_DISCARDED != 0;
    }

    pub fn noDeadStrip(sym: nlist_64) bool {
        return sym.n_desc & N_NO_DEAD_STRIP != 0;
    }

    pub fn tentative(sym: nlist_64) bool {
        if (!sym.undf()) return false;
        return sym.n_value != 0;
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `n_strx` | `u32` | – | |
| `n_type` | `u8` | – | |
| `n_sect` | `u8` | – | |
| `n_desc` | `u16` | – | |
| `n_value` | `u64` | – | |

</details>

---

### <a id="type-relocation-info"></a>`relocation_info`

<details class="declaration-card" open>
<summary>Container – Format of a relocation entry of a Mach-O file</summary>

Format of a relocation entry of a Mach-O file.  Modified from the 4.3BSD
format.  The modifications from the original format were changing the value
of the r_symbolnum field for "local" (r_extern == 0) relocation entries.
This modification is required to support symbols in an arbitrary number of
sections not just the three sections (text, data and bss) in a 4.3BSD file.
Also the last 4 bits have had the r_type tag added to them.

```zig
pub const relocation_info = packed struct {
    /// offset in the section to what is being relocated
    r_address: i32,

    /// symbol index if r_extern == 1 or section ordinal if r_extern == 0
    r_symbolnum: u24,

    /// was relocated pc relative already
    r_pcrel: u1,

    /// 0=byte, 1=word, 2=long, 3=quad
    r_length: u2,

    /// does not include value of sym referenced
    r_extern: u1,

    /// if not 0, machine specific relocation type
    r_type: u4,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `r_address` | `i32` | – | offset in the section to what is being relocated |
| `r_symbolnum` | `u24` | – | symbol index if r\_extern == 1 or section ordinal if r\_extern == 0 |
| `r_pcrel` | `u1` | – | was relocated pc relative already |
| `r_length` | `u2` | – | 0=byte, 1=word, 2=long, 3=quad |
| `r_extern` | `u1` | – | does not include value of sym referenced |
| `r_type` | `u4` | – | if not 0, machine specific relocation type |

</details>

---

### <a id="type-lc"></a>`LC`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const LC = enum(u32) {
    /// No load command - invalid
    NONE = 0x0,

    /// segment of this file to be mapped
    SEGMENT = 0x1,

    /// link-edit stab symbol table info
    SYMTAB = 0x2,

    /// link-edit gdb symbol table info (obsolete)
    SYMSEG = 0x3,

    /// thread
    THREAD = 0x4,

    /// unix thread (includes a stack)
    UNIXTHREAD = 0x5,

    /// load a specified fixed VM shared library
    LOADFVMLIB = 0x6,

    /// fixed VM shared library identification
    IDFVMLIB = 0x7,

    /// object identification info (obsolete)
    IDENT = 0x8,

    /// fixed VM file inclusion (internal use)
    FVMFILE = 0x9,

    /// prepage command (internal use)
    PREPAGE = 0xa,

    /// dynamic link-edit symbol table info
    DYSYMTAB = 0xb,

    /// load a dynamically linked shared library
    LOAD_DYLIB = 0xc,

    /// dynamically linked shared lib ident
    ID_DYLIB = 0xd,

    /// load a dynamic linker
    LOAD_DYLINKER = 0xe,

    /// dynamic linker identification
    ID_DYLINKER = 0xf,

    /// modules prebound for a dynamically
    PREBOUND_DYLIB = 0x10,

    /// image routines
    ROUTINES = 0x11,

    /// sub framework
    SUB_FRAMEWORK = 0x12,

    /// sub umbrella
    SUB_UMBRELLA = 0x13,

    /// sub client
    SUB_CLIENT = 0x14,

    /// sub library
    SUB_LIBRARY = 0x15,

    /// two-level namespace lookup hints
    TWOLEVEL_HINTS = 0x16,

    /// prebind checksum
    PREBIND_CKSUM = 0x17,

    /// load a dynamically linked shared library that is allowed to be missing
    /// (all symbols are weak imported).
    LOAD_WEAK_DYLIB = 0x18 | LC_REQ_DYLD,

    /// 64-bit segment of this file to be mapped
    SEGMENT_64 = 0x19,

    /// 64-bit image routines
    ROUTINES_64 = 0x1a,

    /// the uuid
    UUID = 0x1b,

    /// runpath additions
    RPATH = 0x1c | LC_REQ_DYLD,

    /// local of code signature
    CODE_SIGNATURE = 0x1d,

    /// local of info to split segments
    SEGMENT_SPLIT_INFO = 0x1e,

    /// load and re-export dylib
    REEXPORT_DYLIB = 0x1f | LC_REQ_DYLD,

    /// delay load of dylib until first use
    LAZY_LOAD_DYLIB = 0x20,

    /// encrypted segment information
    ENCRYPTION_INFO = 0x21,

    /// compressed dyld information
    DYLD_INFO = 0x22,

    /// compressed dyld information only
    DYLD_INFO_ONLY = 0x22 | LC_REQ_DYLD,

    /// load upward dylib
    LOAD_UPWARD_DYLIB = 0x23 | LC_REQ_DYLD,

    /// build for MacOSX min OS version
    VERSION_MIN_MACOSX = 0x24,

    /// build for iPhoneOS min OS version
    VERSION_MIN_IPHONEOS = 0x25,

    /// compressed table of function start addresses
    FUNCTION_STARTS = 0x26,

    /// string for dyld to treat like environment variable
    DYLD_ENVIRONMENT = 0x27,

    /// replacement for LC_UNIXTHREAD
    MAIN = 0x28 | LC_REQ_DYLD,

    /// table of non-instructions in __text
    DATA_IN_CODE = 0x29,

    /// source version used to build binary
    SOURCE_VERSION = 0x2A,

    /// Code signing DRs copied from linked dylibs
    DYLIB_CODE_SIGN_DRS = 0x2B,

    /// 64-bit encrypted segment information
    ENCRYPTION_INFO_64 = 0x2C,

    /// linker options in MH_OBJECT files
    LINKER_OPTION = 0x2D,

    /// optimization hints in MH_OBJECT files
    LINKER_OPTIMIZATION_HINT = 0x2E,

    /// build for AppleTV min OS version
    VERSION_MIN_TVOS = 0x2F,

    /// build for Watch min OS version
    VERSION_MIN_WATCHOS = 0x30,

    /// arbitrary data included within a Mach-O file
    NOTE = 0x31,

    /// build for platform min OS version
    BUILD_VERSION = 0x32,

    /// used with linkedit_data_command, payload is trie
    DYLD_EXPORTS_TRIE = 0x33 | LC_REQ_DYLD,

    /// used with linkedit_data_command
    DYLD_CHAINED_FIXUPS = 0x34 | LC_REQ_DYLD,

    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` | No load command - invalid |
| `SEGMENT` | segment of this file to be mapped |
| `SYMTAB` | link-edit stab symbol table info |
| `SYMSEG` | link-edit gdb symbol table info (obsolete) |
| `THREAD` | thread |
| `UNIXTHREAD` | unix thread (includes a stack) |
| `LOADFVMLIB` | load a specified fixed VM shared library |
| `IDFVMLIB` | fixed VM shared library identification |
| `IDENT` | object identification info (obsolete) |
| `FVMFILE` | fixed VM file inclusion (internal use) |
| `PREPAGE` | prepage command (internal use) |
| `DYSYMTAB` | dynamic link-edit symbol table info |
| `LOAD_DYLIB` | load a dynamically linked shared library |
| `ID_DYLIB` | dynamically linked shared lib ident |
| `LOAD_DYLINKER` | load a dynamic linker |
| `ID_DYLINKER` | dynamic linker identification |
| `PREBOUND_DYLIB` | modules prebound for a dynamically |
| `ROUTINES` | image routines |
| `SUB_FRAMEWORK` | sub framework |
| `SUB_UMBRELLA` | sub umbrella |
| `SUB_CLIENT` | sub client |
| `SUB_LIBRARY` | sub library |
| `TWOLEVEL_HINTS` | two-level namespace lookup hints |
| `PREBIND_CKSUM` | prebind checksum |
| `LOAD_WEAK_DYLIB` | load a dynamically linked shared library that is allowed to be missing (all symbols are weak imported). |
| `SEGMENT_64` | 64-bit segment of this file to be mapped |
| `ROUTINES_64` | 64-bit image routines |
| `UUID` | the uuid |
| `RPATH` | runpath additions |
| `CODE_SIGNATURE` | local of code signature |
| `SEGMENT_SPLIT_INFO` | local of info to split segments |
| `REEXPORT_DYLIB` | load and re-export dylib |
| `LAZY_LOAD_DYLIB` | delay load of dylib until first use |
| `ENCRYPTION_INFO` | encrypted segment information |
| `DYLD_INFO` | compressed dyld information |
| `DYLD_INFO_ONLY` | compressed dyld information only |
| `LOAD_UPWARD_DYLIB` | load upward dylib |
| `VERSION_MIN_MACOSX` | build for MacOSX min OS version |
| `VERSION_MIN_IPHONEOS` | build for iPhoneOS min OS version |
| `FUNCTION_STARTS` | compressed table of function start addresses |
| `DYLD_ENVIRONMENT` | string for dyld to treat like environment variable |
| `MAIN` | replacement for LC\_UNIXTHREAD |
| `DATA_IN_CODE` | table of non-instructions in \_\_text |
| `SOURCE_VERSION` | source version used to build binary |
| `DYLIB_CODE_SIGN_DRS` | Code signing DRs copied from linked dylibs |
| `ENCRYPTION_INFO_64` | 64-bit encrypted segment information |
| `LINKER_OPTION` | linker options in MH\_OBJECT files |
| `LINKER_OPTIMIZATION_HINT` | optimization hints in MH\_OBJECT files |
| `VERSION_MIN_TVOS` | build for AppleTV min OS version |
| `VERSION_MIN_WATCHOS` | build for Watch min OS version |
| `NOTE` | arbitrary data included within a Mach-O file |
| `BUILD_VERSION` | build for platform min OS version |
| `DYLD_EXPORTS_TRIE` | used with linkedit\_data\_command, payload is trie |
| `DYLD_CHAINED_FIXUPS` | used with linkedit\_data\_command |
| `_` |  |

</details>

---

### <a id="type-reloc-type-x86-64"></a>`reloc_type_x86_64`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const reloc_type_x86_64 = enum(u4) {
    /// for absolute addresses
    X86_64_RELOC_UNSIGNED = 0,

    /// for signed 32-bit displacement
    X86_64_RELOC_SIGNED,

    /// a CALL/JMP instruction with 32-bit displacement
    X86_64_RELOC_BRANCH,

    /// a MOVQ load of a GOT entry
    X86_64_RELOC_GOT_LOAD,

    /// other GOT references
    X86_64_RELOC_GOT,

    /// must be followed by a X86_64_RELOC_UNSIGNED
    X86_64_RELOC_SUBTRACTOR,

    /// for signed 32-bit displacement with a -1 addend
    X86_64_RELOC_SIGNED_1,

    /// for signed 32-bit displacement with a -2 addend
    X86_64_RELOC_SIGNED_2,

    /// for signed 32-bit displacement with a -4 addend
    X86_64_RELOC_SIGNED_4,

    /// for thread local variables
    X86_64_RELOC_TLV,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `X86_64_RELOC_UNSIGNED` | for absolute addresses |
| `X86_64_RELOC_SIGNED` | for signed 32-bit displacement |
| `X86_64_RELOC_BRANCH` | a CALL/JMP instruction with 32-bit displacement |
| `X86_64_RELOC_GOT_LOAD` | a MOVQ load of a GOT entry |
| `X86_64_RELOC_GOT` | other GOT references |
| `X86_64_RELOC_SUBTRACTOR` | must be followed by a X86\_64\_RELOC\_UNSIGNED |
| `X86_64_RELOC_SIGNED_1` | for signed 32-bit displacement with a -1 addend |
| `X86_64_RELOC_SIGNED_2` | for signed 32-bit displacement with a -2 addend |
| `X86_64_RELOC_SIGNED_4` | for signed 32-bit displacement with a -4 addend |
| `X86_64_RELOC_TLV` | for thread local variables |

</details>

---

### <a id="type-reloc-type-arm64"></a>`reloc_type_arm64`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const reloc_type_arm64 = enum(u4) {
    /// For pointers.
    ARM64_RELOC_UNSIGNED = 0,

    /// Must be followed by a ARM64_RELOC_UNSIGNED.
    ARM64_RELOC_SUBTRACTOR,

    /// A B/BL instruction with 26-bit displacement.
    ARM64_RELOC_BRANCH26,

    /// Pc-rel distance to page of target.
    ARM64_RELOC_PAGE21,

    /// Offset within page, scaled by r_length.
    ARM64_RELOC_PAGEOFF12,

    /// Pc-rel distance to page of GOT slot.
    ARM64_RELOC_GOT_LOAD_PAGE21,

    /// Offset within page of GOT slot, scaled by r_length.
    ARM64_RELOC_GOT_LOAD_PAGEOFF12,

    /// For pointers to GOT slots.
    ARM64_RELOC_POINTER_TO_GOT,

    /// Pc-rel distance to page of TLVP slot.
    ARM64_RELOC_TLVP_LOAD_PAGE21,

    /// Offset within page of TLVP slot, scaled by r_length.
    ARM64_RELOC_TLVP_LOAD_PAGEOFF12,

    /// Must be followed by PAGE21 or PAGEOFF12.
    ARM64_RELOC_ADDEND,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `ARM64_RELOC_UNSIGNED` | For pointers. |
| `ARM64_RELOC_SUBTRACTOR` | Must be followed by a ARM64\_RELOC\_UNSIGNED. |
| `ARM64_RELOC_BRANCH26` | A B/BL instruction with 26-bit displacement. |
| `ARM64_RELOC_PAGE21` | Pc-rel distance to page of target. |
| `ARM64_RELOC_PAGEOFF12` | Offset within page, scaled by r\_length. |
| `ARM64_RELOC_GOT_LOAD_PAGE21` | Pc-rel distance to page of GOT slot. |
| `ARM64_RELOC_GOT_LOAD_PAGEOFF12` | Offset within page of GOT slot, scaled by r\_length. |
| `ARM64_RELOC_POINTER_TO_GOT` | For pointers to GOT slots. |
| `ARM64_RELOC_TLVP_LOAD_PAGE21` | Pc-rel distance to page of TLVP slot. |
| `ARM64_RELOC_TLVP_LOAD_PAGEOFF12` | Offset within page of TLVP slot, scaled by r\_length. |
| `ARM64_RELOC_ADDEND` | Must be followed by PAGE21 or PAGEOFF12. |

</details>

---

### <a id="type-codedirectory"></a>`CodeDirectory`

<details class="declaration-card" open>
<summary>Container – This CodeDirectory is tailored specifically at version 0x20400</summary>

This CodeDirectory is tailored specifically at version 0x20400.

```zig
pub const CodeDirectory = extern struct {
    /// Magic number (CSMAGIC_CODEDIRECTORY)
    magic: u32,

    /// Total length of CodeDirectory blob
    length: u32,

    /// Compatibility version
    version: u32,

    /// Setup and mode flags
    flags: u32,

    /// Offset of hash slot element at index zero
    hashOffset: u32,

    /// Offset of identifier string
    identOffset: u32,

    /// Number of special hash slots
    nSpecialSlots: u32,

    /// Number of ordinary (code) hash slots
    nCodeSlots: u32,

    /// Limit to main image signature range
    codeLimit: u32,

    /// Size of each hash in bytes
    hashSize: u8,

    /// Type of hash (cdHashType* constants)
    hashType: u8,

    /// Platform identifier; zero if not platform binary
    platform: u8,

    /// log2(page size in bytes); 0 => infinite
    pageSize: u8,

    /// Unused (must be zero)
    spare2: u32,

    ///
    scatterOffset: u32,

    ///
    teamOffset: u32,

    ///
    spare3: u32,

    ///
    codeLimit64: u64,

    /// Offset of executable segment
    execSegBase: u64,

    /// Limit of executable segment
    execSegLimit: u64,

    /// Executable segment flags
    execSegFlags: u64,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `magic` | `u32` | – | Magic number (CSMAGIC\_CODEDIRECTORY) |
| `length` | `u32` | – | Total length of CodeDirectory blob |
| `version` | `u32` | – | Compatibility version |
| `flags` | `u32` | – | Setup and mode flags |
| `hashOffset` | `u32` | – | Offset of hash slot element at index zero |
| `identOffset` | `u32` | – | Offset of identifier string |
| `nSpecialSlots` | `u32` | – | Number of special hash slots |
| `nCodeSlots` | `u32` | – | Number of ordinary (code) hash slots |
| `codeLimit` | `u32` | – | Limit to main image signature range |
| `hashSize` | `u8` | – | Size of each hash in bytes |
| `hashType` | `u8` | – | Type of hash (cdHashType\* constants) |
| `platform` | `u8` | – | Platform identifier; zero if not platform binary |
| `pageSize` | `u8` | – | log2(page size in bytes); 0 =\> infinite |
| `spare2` | `u32` | – | Unused (must be zero) |
| `scatterOffset` | `u32` | – |  |
| `teamOffset` | `u32` | – |  |
| `spare3` | `u32` | – |  |
| `codeLimit64` | `u64` | – |  |
| `execSegBase` | `u64` | – | Offset of executable segment |
| `execSegLimit` | `u64` | – | Limit of executable segment |
| `execSegFlags` | `u64` | – | Executable segment flags |

</details>

---

### <a id="type-blobindex"></a>`BlobIndex`

<details class="declaration-card" open>
<summary>Container – Structure of an embedded-signature SuperBlob</summary>

Structure of an embedded-signature SuperBlob

```zig
pub const BlobIndex = extern struct {
    /// Type of entry
    type: u32,

    /// Offset of entry
    offset: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `type` | `u32` | – | Type of entry |
| `offset` | `u32` | – | Offset of entry |

</details>

---

### <a id="type-superblob"></a>`SuperBlob`

<details class="declaration-card" open>
<summary>Container – This structure is followed by GenericBlobs in no particular</summary>

This structure is followed by GenericBlobs in no particular
order as indicated by offsets in index

```zig
pub const SuperBlob = extern struct {
    /// Magic number
    magic: u32,

    /// Total length of SuperBlob
    length: u32,

    /// Number of index BlobIndex entries following this struct
    count: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `magic` | `u32` | – | Magic number |
| `length` | `u32` | – | Total length of SuperBlob |
| `count` | `u32` | – | Number of index BlobIndex entries following this struct |

</details>

---

### <a id="type-genericblob"></a>`GenericBlob`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const GenericBlob = extern struct {
    /// Magic number
    magic: u32,

    /// Total length of blob
    length: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `magic` | `u32` | – | Magic number |
| `length` | `u32` | – | Total length of blob |

</details>

---

### <a id="type-data-in-code-entry"></a>`data_in_code_entry`

<details class="declaration-card" open>
<summary>Container – The LC_DATA_IN_CODE load commands uses a linkedit_data_command</summary>

The LC_DATA_IN_CODE load commands uses a linkedit_data_command
to point to an array of data_in_code_entry entries. Each entry
describes a range of data in a code section.

```zig
pub const data_in_code_entry = extern struct {
    /// From mach_header to start of data range.
    offset: u32,

    /// Number of bytes in data range.
    length: u16,

    /// A DICE_KIND value.
    kind: u16,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `offset` | `u32` | – | From mach\_header to start of data range. |
| `length` | `u16` | – | Number of bytes in data range. |
| `kind` | `u16` | – | A DICE\_KIND value. |

</details>

---

### <a id="type-loadcommanditerator"></a>`LoadCommandIterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const LoadCommandIterator = struct {
    ncmds: usize,
    buffer: []const u8,
    index: usize = 0,

    pub const LoadCommand = struct {
        hdr: load_command,
        data: []const u8,

        pub fn cmd(lc: LoadCommand) LC {
            return lc.hdr.cmd;
        }

        pub fn cmdsize(lc: LoadCommand) u32 {
            return lc.hdr.cmdsize;
        }

        pub fn cast(lc: LoadCommand, comptime Cmd: type) ?Cmd {
            if (lc.data.len < @sizeOf(Cmd)) return null;
            return @as(*align(1) const Cmd, @ptrCast(lc.data.ptr)).*;
        }

        /// Asserts LoadCommand is of type segment_command_64.
        pub fn getSections(lc: LoadCommand) []align(1) const section_64 {
            const segment_lc = lc.cast(segment_command_64).?;
            if (segment_lc.nsects == 0) return &[0]section_64{};
            const data = lc.data[@sizeOf(segment_command_64)..];
            const sections = @as([*]align(1) const section_64, @ptrCast(data.ptr))[0..segment_lc.nsects];
            return sections;
        }

        /// Asserts LoadCommand is of type dylib_command.
        pub fn getDylibPathName(lc: LoadCommand) []const u8 {
            const dylib_lc = lc.cast(dylib_command).?;
            const data = lc.data[dylib_lc.dylib.name..];
            return mem.sliceTo(data, 0);
        }

        /// Asserts LoadCommand is of type rpath_command.
        pub fn getRpathPathName(lc: LoadCommand) []const u8 {
            const rpath_lc = lc.cast(rpath_command).?;
            const data = lc.data[rpath_lc.path..];
            return mem.sliceTo(data, 0);
        }

        /// Asserts LoadCommand is of type build_version_command.
        pub fn getBuildVersionTools(lc: LoadCommand) []align(1) const build_tool_version {
            const build_lc = lc.cast(build_version_command).?;
            const ntools = build_lc.ntools;
            if (ntools == 0) return &[0]build_tool_version{};
            const data = lc.data[@sizeOf(build_version_command)..];
            const tools = @as([*]align(1) const build_tool_version, @ptrCast(data.ptr))[0..ntools];
            return tools;
        }
    };

    pub fn next(it: *LoadCommandIterator) ?LoadCommand {
        if (it.index >= it.ncmds) return null;

        const hdr = @as(*align(1) const load_command, @ptrCast(it.buffer.ptr)).*;
        const cmd = LoadCommand{
            .hdr = hdr,
            .data = it.buffer[0..hdr.cmdsize],
        };

        it.buffer = it.buffer[hdr.cmdsize..];
        it.index += 1;

        return cmd;
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ncmds` | `usize` | – | |
| `buffer` | `[]const u8` | – | |
| `index` | `usize` | `0` | |

</details>

---

### <a id="type-compact-unwind-entry"></a>`compact_unwind_entry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const compact_unwind_entry = extern struct {
    rangeStart: u64,
    rangeLength: u32,
    compactUnwindEncoding: u32,
    personalityFunction: u64,
    lsda: u64,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `rangeStart` | `u64` | – | |
| `rangeLength` | `u32` | – | |
| `compactUnwindEncoding` | `u32` | – | |
| `personalityFunction` | `u64` | – | |
| `lsda` | `u64` | – | |

</details>

---

### <a id="type-unwind-info-section-header"></a>`unwind_info_section_header`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const unwind_info_section_header = extern struct {
    /// UNWIND_SECTION_VERSION
    version: u32 = UNWIND_SECTION_VERSION,
    commonEncodingsArraySectionOffset: u32,
    commonEncodingsArrayCount: u32,
    personalityArraySectionOffset: u32,
    personalityArrayCount: u32,
    indexSectionOffset: u32,
    indexCount: u32,
    // compact_unwind_encoding_t[]
    // uint32_t personalities[]
    // unwind_info_section_header_index_entry[]
    // unwind_info_section_header_lsda_index_entry[]
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `version` | `u32` | `UNWIND\_SECTION\_VERSION` | UNWIND\_SECTION\_VERSION |
| `commonEncodingsArraySectionOffset` | `u32` | – | |
| `commonEncodingsArrayCount` | `u32` | – | |
| `personalityArraySectionOffset` | `u32` | – | |
| `personalityArrayCount` | `u32` | – | |
| `indexSectionOffset` | `u32` | – | |
| `indexCount` | `u32` | – | |

</details>

---

### <a id="type-unwind-info-section-header-index-entry"></a>`unwind_info_section_header_index_entry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const unwind_info_section_header_index_entry = extern struct {
    functionOffset: u32,

    /// section offset to start of regular or compress page
    secondLevelPagesSectionOffset: u32,

    /// section offset to start of lsda_index array for this range
    lsdaIndexArraySectionOffset: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `functionOffset` | `u32` | – | |
| `secondLevelPagesSectionOffset` | `u32` | – | section offset to start of regular or compress page |
| `lsdaIndexArraySectionOffset` | `u32` | – | section offset to start of lsda\_index array for this range |

</details>

---

### <a id="type-unwind-info-section-header-lsda-index-entry"></a>`unwind_info_section_header_lsda_index_entry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const unwind_info_section_header_lsda_index_entry = extern struct {
    functionOffset: u32,
    lsdaOffset: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `functionOffset` | `u32` | – | |
| `lsdaOffset` | `u32` | – | |

</details>

---

### <a id="type-unwind-info-regular-second-level-entry"></a>`unwind_info_regular_second_level_entry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const unwind_info_regular_second_level_entry = extern struct {
    functionOffset: u32,
    encoding: compact_unwind_encoding_t,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `functionOffset` | `u32` | – | |
| `encoding` | `compact_unwind_encoding_t` | – | |

</details>

---

### <a id="type-unwind-second-level"></a>`UNWIND_SECOND_LEVEL`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const UNWIND_SECOND_LEVEL = enum(u32) {
    REGULAR = 2,
    COMPRESSED = 3,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `REGULAR` |  |
| `COMPRESSED` |  |
| `_` |  |

</details>

---

### <a id="type-unwind-info-regular-second-level-page-header"></a>`unwind_info_regular_second_level_page_header`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const unwind_info_regular_second_level_page_header = extern struct {
    /// UNWIND_SECOND_LEVEL_REGULAR
    kind: UNWIND_SECOND_LEVEL = .REGULAR,

    entryPageOffset: u16,
    entryCount: u16,
    // entry array
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `kind` | [`UNWIND_SECOND_LEVEL`](#type-unwind-second-level) | `.REGULAR` | UNWIND\_SECOND\_LEVEL\_REGULAR |
| `entryPageOffset` | `u16` | – | |
| `entryCount` | `u16` | – | |

</details>

---

### <a id="type-unwind-info-compressed-second-level-page-header"></a>`unwind_info_compressed_second_level_page_header`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const unwind_info_compressed_second_level_page_header = extern struct {
    /// UNWIND_SECOND_LEVEL_COMPRESSED
    kind: UNWIND_SECOND_LEVEL = .COMPRESSED,

    entryPageOffset: u16,
    entryCount: u16,
    encodingsPageOffset: u16,
    encodingsCount: u16,
    // 32bit entry array
    // encodings array
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `kind` | [`UNWIND_SECOND_LEVEL`](#type-unwind-second-level) | `.COMPRESSED` | UNWIND\_SECOND\_LEVEL\_COMPRESSED |
| `entryPageOffset` | `u16` | – | |
| `entryCount` | `u16` | – | |
| `encodingsPageOffset` | `u16` | – | |
| `encodingsCount` | `u16` | – | |

</details>

---

### <a id="type-unwindinfocompressedentry"></a>`UnwindInfoCompressedEntry`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const UnwindInfoCompressedEntry = packed struct {
    funcOffset: u24,
    encodingIndex: u8,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `funcOffset` | `u24` | – | |
| `encodingIndex` | `u8` | – | |

</details>

---

### <a id="type-unwind-x86-64-mode"></a>`UNWIND_X86_64_MODE`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const UNWIND_X86_64_MODE = enum(u4) {
    OLD = 0,
    RBP_FRAME = 1,
    STACK_IMMD = 2,
    STACK_IND = 3,
    DWARF = 4,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `OLD` |  |
| `RBP_FRAME` |  |
| `STACK_IMMD` |  |
| `STACK_IND` |  |
| `DWARF` |  |

</details>

---

### <a id="type-unwind-x86-64-reg"></a>`UNWIND_X86_64_REG`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const UNWIND_X86_64_REG = enum(u3) {
    NONE = 0,
    RBX = 1,
    R12 = 2,
    R13 = 3,
    R14 = 4,
    R15 = 5,
    RBP = 6,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` |  |
| `RBX` |  |
| `R12` |  |
| `R13` |  |
| `R14` |  |
| `R15` |  |
| `RBP` |  |

</details>

---

### <a id="type-unwind-arm64-mode"></a>`UNWIND_ARM64_MODE`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const UNWIND_ARM64_MODE = enum(u4) {
    OLD = 0,
    FRAMELESS = 2,
    DWARF = 3,
    FRAME = 4,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `OLD` |  |
| `FRAMELESS` |  |
| `DWARF` |  |
| `FRAME` |  |

</details>

---

### <a id="type-compactunwindencoding"></a>`CompactUnwindEncoding`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const CompactUnwindEncoding = packed struct(u32) {
    value: packed union {
        x86_64: packed union {
            frame: packed struct(u24) {
                reg4: u3,
                reg3: u3,
                reg2: u3,
                reg1: u3,
                reg0: u3,
                unused: u1 = 0,
                frame_offset: u8,
            },
            frameless: packed struct(u24) {
                stack_reg_permutation: u10,
                stack_reg_count: u3,
                stack: packed union {
                    direct: packed struct(u11) {
                        _: u3,
                        stack_size: u8,
                    },
                    indirect: packed struct(u11) {
                        stack_adjust: u3,
                        sub_offset: u8,
                    },
                },
            },
            dwarf: u24,
        },
        arm64: packed union {
            frame: packed struct(u24) {
                x_reg_pairs: packed struct(u5) {
                    x19_x20: u1,
                    x21_x22: u1,
                    x23_x24: u1,
                    x25_x26: u1,
                    x27_x28: u1,
                },
                d_reg_pairs: packed struct(u4) {
                    d8_d9: u1,
                    d10_d11: u1,
                    d12_d13: u1,
                    d14_d15: u1,
                },
                _: u15,
            },
            frameless: packed struct(u24) {
                _: u12 = 0,
                stack_size: u12,
            },
            dwarf: u24,
        },
    },
    mode: packed union {
        x86_64: UNWIND_X86_64_MODE,
        arm64: UNWIND_ARM64_MODE,
    },
    personality_index: u2,
    has_lsda: u1,
    start: u1,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `value` | See note[^type-compactunwindencoding-value-type-0] | – | |
| `mode` | See note[^type-compactunwindencoding-mode-type-1] | – | |
| `personality_index` | `u2` | – | |
| `has_lsda` | `u1` | – | |
| `start` | `u1` | – | |


[^type-compactunwindencoding-value-type-0]:
    Type for field `value` of `CompactUnwindEncoding`:

    ```zig
    packed union {
            x86_64: packed union {
                frame: packed struct(u24) {
                    reg4: u3,
                    reg3: u3,
                    reg2: u3,
                    reg1: u3,
                    reg0: u3,
                    unused: u1 = 0,
                    frame_offset: u8,
                },
                frameless: packed struct(u24) {
                    stack_reg_permutation: u10,
                    stack_reg_count: u3,
                    stack: packed union {
                        direct: packed struct(u11) {
                            _: u3,
                            stack_size: u8,
                        },
                        indirect: packed struct(u11) {
                            stack_adjust: u3,
                            sub_offset: u8,
                        },
                    },
                },
                dwarf: u24,
            },
            arm64: packed union {
                frame: packed struct(u24) {
                    x_reg_pairs: packed struct(u5) {
                        x19_x20: u1,
                        x21_x22: u1,
                        x23_x24: u1,
                        x25_x26: u1,
                        x27_x28: u1,
                    },
                    d_reg_pairs: packed struct(u4) {
                        d8_d9: u1,
                        d10_d11: u1,
                        d12_d13: u1,
                        d14_d15: u1,
                    },
                    _: u15,
                },
                frameless: packed struct(u24) {
                    _: u12 = 0,
                    stack_size: u12,
                },
                dwarf: u24,
            },
        }
    ```

[^type-compactunwindencoding-mode-type-1]:
    Type for field `mode` of `CompactUnwindEncoding`:

    ```zig
    packed union {
            x86_64: UNWIND_X86_64_MODE,
            arm64: UNWIND_ARM64_MODE,
        }
    ```

</details>

---

## Constants (261)

### <a id="const-cpu-type-t"></a>`cpu_type_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const cpu_type_t = c_int
```

</details>

---

### <a id="const-cpu-subtype-t"></a>`cpu_subtype_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const cpu_subtype_t = c_int
```

</details>

---

### <a id="const-vm-prot-t"></a>`vm_prot_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const vm_prot_t = c_int
```

</details>

---

### <a id="const-lc-req-dyld"></a>`LC_REQ_DYLD`

<details class="declaration-card" open>
<summary>Constant – After MacOS X 10</summary>

After MacOS X 10.1 when a new load command is added that is required to be
understood by the dynamic linker for the image to execute properly the
LC_REQ_DYLD bit will be or'ed into the load command constant.  If the dynamic
linker sees such a load command it it does not understand will issue a
"unknown load command required for execution" error and refuse to use the
image.  Other load commands without this bit that are not understood will
simply be ignored.

```zig
pub const LC_REQ_DYLD = 0x80000000
```

</details>

---

### <a id="const-mh-magic"></a>`MH_MAGIC`

<details class="declaration-card" open>
<summary>Constant – the mach magic number</summary>

the mach magic number

```zig
pub const MH_MAGIC = 0xfeedface
```

</details>

---

### <a id="const-mh-cigam"></a>`MH_CIGAM`

<details class="declaration-card" open>
<summary>Constant – NXSwapInt(MH_MAGIC)</summary>

NXSwapInt(MH_MAGIC)

```zig
pub const MH_CIGAM = 0xcefaedfe
```

</details>

---

### <a id="const-mh-magic-64"></a>`MH_MAGIC_64`

<details class="declaration-card" open>
<summary>Constant – the 64-bit mach magic number</summary>

the 64-bit mach magic number

```zig
pub const MH_MAGIC_64 = 0xfeedfacf
```

</details>

---

### <a id="const-mh-cigam-64"></a>`MH_CIGAM_64`

<details class="declaration-card" open>
<summary>Constant – NXSwapInt(MH_MAGIC_64)</summary>

NXSwapInt(MH_MAGIC_64)

```zig
pub const MH_CIGAM_64 = 0xcffaedfe
```

</details>

---

### <a id="const-mh-object"></a>`MH_OBJECT`

<details class="declaration-card" open>
<summary>Constant – relocatable object file</summary>

relocatable object file

```zig
pub const MH_OBJECT = 0x1
```

</details>

---

### <a id="const-mh-execute"></a>`MH_EXECUTE`

<details class="declaration-card" open>
<summary>Constant – demand paged executable file</summary>

demand paged executable file

```zig
pub const MH_EXECUTE = 0x2
```

</details>

---

### <a id="const-mh-fvmlib"></a>`MH_FVMLIB`

<details class="declaration-card" open>
<summary>Constant – fixed VM shared library file</summary>

fixed VM shared library file

```zig
pub const MH_FVMLIB = 0x3
```

</details>

---

### <a id="const-mh-core"></a>`MH_CORE`

<details class="declaration-card" open>
<summary>Constant – core file</summary>

core file

```zig
pub const MH_CORE = 0x4
```

</details>

---

### <a id="const-mh-preload"></a>`MH_PRELOAD`

<details class="declaration-card" open>
<summary>Constant – preloaded executable file</summary>

preloaded executable file

```zig
pub const MH_PRELOAD = 0x5
```

</details>

---

### <a id="const-mh-dylib"></a>`MH_DYLIB`

<details class="declaration-card" open>
<summary>Constant – dynamically bound shared library</summary>

dynamically bound shared library

```zig
pub const MH_DYLIB = 0x6
```

</details>

---

### <a id="const-mh-dylinker"></a>`MH_DYLINKER`

<details class="declaration-card" open>
<summary>Constant – dynamic link editor</summary>

dynamic link editor

```zig
pub const MH_DYLINKER = 0x7
```

</details>

---

### <a id="const-mh-bundle"></a>`MH_BUNDLE`

<details class="declaration-card" open>
<summary>Constant – dynamically bound bundle file</summary>

dynamically bound bundle file

```zig
pub const MH_BUNDLE = 0x8
```

</details>

---

### <a id="const-mh-dylib-stub"></a>`MH_DYLIB_STUB`

<details class="declaration-card" open>
<summary>Constant – shared library stub for static linking only, no section contents</summary>

shared library stub for static linking only, no section contents

```zig
pub const MH_DYLIB_STUB = 0x9
```

</details>

---

### <a id="const-mh-dsym"></a>`MH_DSYM`

<details class="declaration-card" open>
<summary>Constant – companion file with only debug sections</summary>

companion file with only debug sections

```zig
pub const MH_DSYM = 0xa
```

</details>

---

### <a id="const-mh-kext-bundle"></a>`MH_KEXT_BUNDLE`

<details class="declaration-card" open>
<summary>Constant – x86_64 kexts</summary>

x86_64 kexts

```zig
pub const MH_KEXT_BUNDLE = 0xb
```

</details>

---

### <a id="const-mh-noundefs"></a>`MH_NOUNDEFS`

<details class="declaration-card" open>
<summary>Constant – the object file has no undefined references</summary>

the object file has no undefined references

```zig
pub const MH_NOUNDEFS = 0x1
```

</details>

---

### <a id="const-mh-incrlink"></a>`MH_INCRLINK`

<details class="declaration-card" open>
<summary>Constant – the object file is the output of an incremental link against a base file and can&#39;t be link edited again</summary>

the object file is the output of an incremental link against a base file and can't be link edited again

```zig
pub const MH_INCRLINK = 0x2
```

</details>

---

### <a id="const-mh-dyldlink"></a>`MH_DYLDLINK`

<details class="declaration-card" open>
<summary>Constant – the object file is input for the dynamic linker and can&#39;t be statically link edited again</summary>

the object file is input for the dynamic linker and can't be statically link edited again

```zig
pub const MH_DYLDLINK = 0x4
```

</details>

---

### <a id="const-mh-bindatload"></a>`MH_BINDATLOAD`

<details class="declaration-card" open>
<summary>Constant – the object file&#39;s undefined references are bound by the dynamic linker when loaded</summary>

the object file's undefined references are bound by the dynamic linker when loaded.

```zig
pub const MH_BINDATLOAD = 0x8
```

</details>

---

### <a id="const-mh-prebound"></a>`MH_PREBOUND`

<details class="declaration-card" open>
<summary>Constant – the file has its dynamic undefined references prebound</summary>

the file has its dynamic undefined references prebound.

```zig
pub const MH_PREBOUND = 0x10
```

</details>

---

### <a id="const-mh-split-segs"></a>`MH_SPLIT_SEGS`

<details class="declaration-card" open>
<summary>Constant – the file has its read-only and read-write segments split</summary>

the file has its read-only and read-write segments split

```zig
pub const MH_SPLIT_SEGS = 0x20
```

</details>

---

### <a id="const-mh-lazy-init"></a>`MH_LAZY_INIT`

<details class="declaration-card" open>
<summary>Constant – the shared library init routine is to be run lazily via catching memory faults to its writeable segments (obsolete)</summary>

the shared library init routine is to be run lazily via catching memory faults to its writeable segments (obsolete)

```zig
pub const MH_LAZY_INIT = 0x40
```

</details>

---

### <a id="const-mh-twolevel"></a>`MH_TWOLEVEL`

<details class="declaration-card" open>
<summary>Constant – the image is using two-level name space bindings</summary>

the image is using two-level name space bindings

```zig
pub const MH_TWOLEVEL = 0x80
```

</details>

---

### <a id="const-mh-force-flat"></a>`MH_FORCE_FLAT`

<details class="declaration-card" open>
<summary>Constant – the executable is forcing all images to use flat name space bindings</summary>

the executable is forcing all images to use flat name space bindings

```zig
pub const MH_FORCE_FLAT = 0x100
```

</details>

---

### <a id="const-mh-nomultidefs"></a>`MH_NOMULTIDEFS`

<details class="declaration-card" open>
<summary>Constant – this umbrella guarantees no multiple definitions of symbols in its sub-images so the two-level namespace hints can always be used</summary>

this umbrella guarantees no multiple definitions of symbols in its sub-images so the two-level namespace hints can always be used.

```zig
pub const MH_NOMULTIDEFS = 0x200
```

</details>

---

### <a id="const-mh-nofixprebinding"></a>`MH_NOFIXPREBINDING`

<details class="declaration-card" open>
<summary>Constant – do not have dyld notify the prebinding agent about this executable</summary>

do not have dyld notify the prebinding agent about this executable

```zig
pub const MH_NOFIXPREBINDING = 0x400
```

</details>

---

### <a id="const-mh-prebindable"></a>`MH_PREBINDABLE`

<details class="declaration-card" open>
<summary>Constant – the binary is not prebound but can have its prebinding redone</summary>

the binary is not prebound but can have its prebinding redone. only used when MH_PREBOUND is not set.

```zig
pub const MH_PREBINDABLE = 0x800
```

</details>

---

### <a id="const-mh-allmodsbound"></a>`MH_ALLMODSBOUND`

<details class="declaration-card" open>
<summary>Constant – indicates that this binary binds to all two-level namespace modules of its dependent libraries</summary>

indicates that this binary binds to all two-level namespace modules of its dependent libraries. only used when MH_PREBINDABLE and MH_TWOLEVEL are both set.

```zig
pub const MH_ALLMODSBOUND = 0x1000
```

</details>

---

### <a id="const-mh-subsections-via-symbols"></a>`MH_SUBSECTIONS_VIA_SYMBOLS`

<details class="declaration-card" open>
<summary>Constant – safe to divide up the sections into sub-sections via symbols for dead code stripping</summary>

safe to divide up the sections into sub-sections via symbols for dead code stripping

```zig
pub const MH_SUBSECTIONS_VIA_SYMBOLS = 0x2000
```

</details>

---

### <a id="const-mh-canonical"></a>`MH_CANONICAL`

<details class="declaration-card" open>
<summary>Constant – the binary has been canonicalized via the unprebind operation</summary>

the binary has been canonicalized via the unprebind operation

```zig
pub const MH_CANONICAL = 0x4000
```

</details>

---

### <a id="const-mh-weak-defines"></a>`MH_WEAK_DEFINES`

<details class="declaration-card" open>
<summary>Constant – the final linked image contains external weak symbols</summary>

the final linked image contains external weak symbols

```zig
pub const MH_WEAK_DEFINES = 0x8000
```

</details>

---

### <a id="const-mh-binds-to-weak"></a>`MH_BINDS_TO_WEAK`

<details class="declaration-card" open>
<summary>Constant – the final linked image uses weak symbols</summary>

the final linked image uses weak symbols

```zig
pub const MH_BINDS_TO_WEAK = 0x10000
```

</details>

---

### <a id="const-mh-allow-stack-execution"></a>`MH_ALLOW_STACK_EXECUTION`

<details class="declaration-card" open>
<summary>Constant – When this bit is set, all stacks in the task will be given stack execution privilege</summary>

When this bit is set, all stacks in the task will be given stack execution privilege.  Only used in MH_EXECUTE filetypes.

```zig
pub const MH_ALLOW_STACK_EXECUTION = 0x20000
```

</details>

---

### <a id="const-mh-root-safe"></a>`MH_ROOT_SAFE`

<details class="declaration-card" open>
<summary>Constant – When this bit is set, the binary declares it is safe for use in processes with uid zero</summary>

When this bit is set, the binary declares it is safe for use in processes with uid zero

```zig
pub const MH_ROOT_SAFE = 0x40000
```

</details>

---

### <a id="const-mh-setuid-safe"></a>`MH_SETUID_SAFE`

<details class="declaration-card" open>
<summary>Constant – When this bit is set, the binary declares it is safe for use in processes when issetugid() is true</summary>

When this bit is set, the binary declares it is safe for use in processes when issetugid() is true

```zig
pub const MH_SETUID_SAFE = 0x80000
```

</details>

---

### <a id="const-mh-no-reexported-dylibs"></a>`MH_NO_REEXPORTED_DYLIBS`

<details class="declaration-card" open>
<summary>Constant – When this bit is set on a dylib, the static linker does not need to examine dependent dylibs to see if any are re-exported</summary>

When this bit is set on a dylib, the static linker does not need to examine dependent dylibs to see if any are re-exported

```zig
pub const MH_NO_REEXPORTED_DYLIBS = 0x100000
```

</details>

---

### <a id="const-mh-pie"></a>`MH_PIE`

<details class="declaration-card" open>
<summary>Constant – When this bit is set, the OS will load the main executable at a random address</summary>

When this bit is set, the OS will load the main executable at a random address.  Only used in MH_EXECUTE filetypes.

```zig
pub const MH_PIE = 0x200000
```

</details>

---

### <a id="const-mh-dead-strippable-dylib"></a>`MH_DEAD_STRIPPABLE_DYLIB`

<details class="declaration-card" open>
<summary>Constant – Only for use on dylibs</summary>

Only for use on dylibs.  When linking against a dylib that has this bit set, the static linker will automatically not create a LC_LOAD_DYLIB load command to the dylib if no symbols are being referenced from the dylib.

```zig
pub const MH_DEAD_STRIPPABLE_DYLIB = 0x400000
```

</details>

---

### <a id="const-mh-has-tlv-descriptors"></a>`MH_HAS_TLV_DESCRIPTORS`

<details class="declaration-card" open>
<summary>Constant – Contains a section of type S_THREAD_LOCAL_VARIABLES</summary>

Contains a section of type S_THREAD_LOCAL_VARIABLES

```zig
pub const MH_HAS_TLV_DESCRIPTORS = 0x800000
```

</details>

---

### <a id="const-mh-no-heap-execution"></a>`MH_NO_HEAP_EXECUTION`

<details class="declaration-card" open>
<summary>Constant – When this bit is set, the OS will run the main executable with a non-executable heap even on platforms (e</summary>

When this bit is set, the OS will run the main executable with a non-executable heap even on platforms (e.g. x86) that don't require it. Only used in MH_EXECUTE filetypes.

```zig
pub const MH_NO_HEAP_EXECUTION = 0x1000000
```

</details>

---

### <a id="const-mh-app-extension-safe"></a>`MH_APP_EXTENSION_SAFE`

<details class="declaration-card" open>
<summary>Constant – The code was linked for use in an application extension</summary>

The code was linked for use in an application extension.

```zig
pub const MH_APP_EXTENSION_SAFE = 0x02000000
```

</details>

---

### <a id="const-mh-nlist-outofsync-with-dyldinfo"></a>`MH_NLIST_OUTOFSYNC_WITH_DYLDINFO`

<details class="declaration-card" open>
<summary>Constant – The external symbols listed in the nlist symbol table do not include all the symbols listed in the dyld info</summary>

The external symbols listed in the nlist symbol table do not include all the symbols listed in the dyld info.

```zig
pub const MH_NLIST_OUTOFSYNC_WITH_DYLDINFO = 0x04000000
```

</details>

---

### <a id="const-mh-sim-support"></a>`MH_SIM_SUPPORT`

<details class="declaration-card" open>
<summary>Constant – Allow LC_MIN_VERSION_MACOS and LC_BUILD_VERSION load commands with the platforms macOS, iOSMac, iOSSimulator, tvOSSimulator and watchOSSimulator</summary>

Allow LC_MIN_VERSION_MACOS and LC_BUILD_VERSION load commands with the platforms macOS, iOSMac, iOSSimulator, tvOSSimulator and watchOSSimulator.

```zig
pub const MH_SIM_SUPPORT = 0x08000000
```

</details>

---

### <a id="const-mh-dylib-in-cache"></a>`MH_DYLIB_IN_CACHE`

<details class="declaration-card" open>
<summary>Constant – Only for use on dylibs</summary>

Only for use on dylibs. When this bit is set, the dylib is part of the dyld shared cache, rather than loose in the filesystem.

```zig
pub const MH_DYLIB_IN_CACHE = 0x80000000
```

</details>

---

### <a id="const-fat-magic"></a>`FAT_MAGIC`

<details class="declaration-card" open>
<summary>Constant – the fat magic number</summary>

the fat magic number

```zig
pub const FAT_MAGIC = 0xcafebabe
```

</details>

---

### <a id="const-fat-cigam"></a>`FAT_CIGAM`

<details class="declaration-card" open>
<summary>Constant – NXSwapLong(FAT_MAGIC)</summary>

NXSwapLong(FAT_MAGIC)

```zig
pub const FAT_CIGAM = 0xbebafeca
```

</details>

---

### <a id="const-fat-magic-64"></a>`FAT_MAGIC_64`

<details class="declaration-card" open>
<summary>Constant – the 64-bit fat magic number</summary>

the 64-bit fat magic number

```zig
pub const FAT_MAGIC_64 = 0xcafebabf
```

</details>

---

### <a id="const-fat-cigam-64"></a>`FAT_CIGAM_64`

<details class="declaration-card" open>
<summary>Constant – NXSwapLong(FAT_MAGIC_64)</summary>

NXSwapLong(FAT_MAGIC_64)

```zig
pub const FAT_CIGAM_64 = 0xbfbafeca
```

</details>

---

### <a id="const-sg-highvm"></a>`SG_HIGHVM`

<details class="declaration-card" open>
<summary>Constant – Segment flags</summary>

Segment flags
The file contents for this segment is for the high part of the VM space, the low part
is zero filled (for stacks in core files).

```zig
pub const SG_HIGHVM = 0x1
```

</details>

---

### <a id="const-sg-fvmlib"></a>`SG_FVMLIB`

<details class="declaration-card" open>
<summary>Constant – This segment is the VM that is allocated by a fixed VM library, for overlap checking in</summary>

This segment is the VM that is allocated by a fixed VM library, for overlap checking in
the link editor.

```zig
pub const SG_FVMLIB = 0x2
```

</details>

---

### <a id="const-sg-noreloc"></a>`SG_NORELOC`

<details class="declaration-card" open>
<summary>Constant – This segment has nothing that was relocated in it and nothing relocated to it, that is</summary>

This segment has nothing that was relocated in it and nothing relocated to it, that is
it maybe safely replaced without relocation.

```zig
pub const SG_NORELOC = 0x4
```

</details>

---

### <a id="const-sg-protected-version-1"></a>`SG_PROTECTED_VERSION_1`

<details class="declaration-card" open>
<summary>Constant – This segment is protected</summary>

This segment is protected.  If the segment starts at file offset 0, the
first page of the segment is not protected.  All other pages of the segment are protected.

```zig
pub const SG_PROTECTED_VERSION_1 = 0x8
```

</details>

---

### <a id="const-sg-read-only"></a>`SG_READ_ONLY`

<details class="declaration-card" open>
<summary>Constant – This segment is made read-only after fixups</summary>

This segment is made read-only after fixups

```zig
pub const SG_READ_ONLY = 0x10
```

</details>

---

### <a id="const-section-type"></a>`SECTION_TYPE`

<details class="declaration-card" open>
<summary>Constant – The flags field of a section structure is separated into two parts a section</summary>

The flags field of a section structure is separated into two parts a section
type and section attributes.  The section types are mutually exclusive (it
can only have one type) but the section attributes are not (it may have more
than one attribute).
256 section types

```zig
pub const SECTION_TYPE = 0x000000ff
```

</details>

---

### <a id="const-section-attributes"></a>`SECTION_ATTRIBUTES`

<details class="declaration-card" open>
<summary>Constant – 24 section attributes</summary>

 24 section attributes

```zig
pub const SECTION_ATTRIBUTES = 0xffffff00
```

</details>

---

### <a id="const-s-regular"></a>`S_REGULAR`

<details class="declaration-card" open>
<summary>Constant – regular section</summary>

regular section

```zig
pub const S_REGULAR = 0x0
```

</details>

---

### <a id="const-s-zerofill"></a>`S_ZEROFILL`

<details class="declaration-card" open>
<summary>Constant – zero fill on demand section</summary>

zero fill on demand section

```zig
pub const S_ZEROFILL = 0x1
```

</details>

---

### <a id="const-s-cstring-literals"></a>`S_CSTRING_LITERALS`

<details class="declaration-card" open>
<summary>Constant – section with only literal C string</summary>

section with only literal C string

```zig
pub const S_CSTRING_LITERALS = 0x2
```

</details>

---

### <a id="const-s-4byte-literals"></a>`S_4BYTE_LITERALS`

<details class="declaration-card" open>
<summary>Constant – section with only 4 byte literals</summary>

section with only 4 byte literals

```zig
pub const S_4BYTE_LITERALS = 0x3
```

</details>

---

### <a id="const-s-8byte-literals"></a>`S_8BYTE_LITERALS`

<details class="declaration-card" open>
<summary>Constant – section with only 8 byte literals</summary>

section with only 8 byte literals

```zig
pub const S_8BYTE_LITERALS = 0x4
```

</details>

---

### <a id="const-s-literal-pointers"></a>`S_LITERAL_POINTERS`

<details class="declaration-card" open>
<summary>Constant – section with only pointers to</summary>

section with only pointers to

```zig
pub const S_LITERAL_POINTERS = 0x5
```

</details>

---

### <a id="const-n-stab"></a>`N_STAB`

<details class="declaration-card" open>
<summary>Constant – if any of these bits set, a symbolic debugging entry</summary>

if any of these bits set, a symbolic debugging entry

```zig
pub const N_STAB = 0xe0
```

</details>

---

### <a id="const-n-pext"></a>`N_PEXT`

<details class="declaration-card" open>
<summary>Constant – private external symbol bit</summary>

private external symbol bit

```zig
pub const N_PEXT = 0x10
```

</details>

---

### <a id="const-n-type"></a>`N_TYPE`

<details class="declaration-card" open>
<summary>Constant – mask for the type bits</summary>

mask for the type bits

```zig
pub const N_TYPE = 0x0e
```

</details>

---

### <a id="const-n-ext"></a>`N_EXT`

<details class="declaration-card" open>
<summary>Constant – external symbol bit, set for external symbols</summary>

external symbol bit, set for external symbols

```zig
pub const N_EXT = 0x01
```

</details>

---

### <a id="const-n-undf"></a>`N_UNDF`

<details class="declaration-card" open>
<summary>Constant – symbol is undefined</summary>

symbol is undefined

```zig
pub const N_UNDF = 0x0
```

</details>

---

### <a id="const-n-abs"></a>`N_ABS`

<details class="declaration-card" open>
<summary>Constant – symbol is absolute</summary>

symbol is absolute

```zig
pub const N_ABS = 0x2
```

</details>

---

### <a id="const-n-sect"></a>`N_SECT`

<details class="declaration-card" open>
<summary>Constant – symbol is defined in the section number given in n_sect</summary>

symbol is defined in the section number given in n_sect

```zig
pub const N_SECT = 0xe
```

</details>

---

### <a id="const-n-pbud"></a>`N_PBUD`

<details class="declaration-card" open>
<summary>Constant – symbol is undefined  and the image is using a prebound</summary>

symbol is undefined  and the image is using a prebound
value  for the symbol

```zig
pub const N_PBUD = 0xc
```

</details>

---

### <a id="const-n-indr"></a>`N_INDR`

<details class="declaration-card" open>
<summary>Constant – symbol is defined to be the same as another symbol; the n_value</summary>

symbol is defined to be the same as another symbol; the n_value
field is an index into the string table specifying the name of the
other symbol

```zig
pub const N_INDR = 0xa
```

</details>

---

### <a id="const-n-gsym"></a>`N_GSYM`

<details class="declaration-card" open>
<summary>Constant – global symbol: name,,NO_SECT,type,0</summary>

global symbol: name,,NO_SECT,type,0

```zig
pub const N_GSYM = 0x20
```

</details>

---

### <a id="const-n-fname"></a>`N_FNAME`

<details class="declaration-card" open>
<summary>Constant – procedure name (f77 kludge): name,,NO_SECT,0,0</summary>

procedure name (f77 kludge): name,,NO_SECT,0,0

```zig
pub const N_FNAME = 0x22
```

</details>

---

### <a id="const-n-fun"></a>`N_FUN`

<details class="declaration-card" open>
<summary>Constant – procedure: name,,n_sect,linenumber,address</summary>

procedure: name,,n_sect,linenumber,address

```zig
pub const N_FUN = 0x24
```

</details>

---

### <a id="const-n-stsym"></a>`N_STSYM`

<details class="declaration-card" open>
<summary>Constant – static symbol: name,,n_sect,type,address</summary>

static symbol: name,,n_sect,type,address

```zig
pub const N_STSYM = 0x26
```

</details>

---

### <a id="const-n-lcsym"></a>`N_LCSYM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

.lcomm symbol: name,,n_sect,type,address

```zig
pub const N_LCSYM = 0x28
```

</details>

---

### <a id="const-n-bnsym"></a>`N_BNSYM`

<details class="declaration-card" open>
<summary>Constant – begin nsect sym: 0,,n_sect,0,address</summary>

begin nsect sym: 0,,n_sect,0,address

```zig
pub const N_BNSYM = 0x2e
```

</details>

---

### <a id="const-n-ast"></a>`N_AST`

<details class="declaration-card" open>
<summary>Constant – AST file path: name,,NO_SECT,0,0</summary>

AST file path: name,,NO_SECT,0,0

```zig
pub const N_AST = 0x32
```

</details>

---

### <a id="const-n-opt"></a>`N_OPT`

<details class="declaration-card" open>
<summary>Constant – emitted with gcc2_compiled and in gcc source</summary>

emitted with gcc2_compiled and in gcc source

```zig
pub const N_OPT = 0x3c
```

</details>

---

### <a id="const-n-rsym"></a>`N_RSYM`

<details class="declaration-card" open>
<summary>Constant – register sym: name,,NO_SECT,type,register</summary>

register sym: name,,NO_SECT,type,register

```zig
pub const N_RSYM = 0x40
```

</details>

---

### <a id="const-n-sline"></a>`N_SLINE`

<details class="declaration-card" open>
<summary>Constant – src line: 0,,n_sect,linenumber,address</summary>

src line: 0,,n_sect,linenumber,address

```zig
pub const N_SLINE = 0x44
```

</details>

---

### <a id="const-n-ensym"></a>`N_ENSYM`

<details class="declaration-card" open>
<summary>Constant – end nsect sym: 0,,n_sect,0,address</summary>

end nsect sym: 0,,n_sect,0,address

```zig
pub const N_ENSYM = 0x4e
```

</details>

---

### <a id="const-n-ssym"></a>`N_SSYM`

<details class="declaration-card" open>
<summary>Constant – structure elt: name,,NO_SECT,type,struct_offset</summary>

structure elt: name,,NO_SECT,type,struct_offset

```zig
pub const N_SSYM = 0x60
```

</details>

---

### <a id="const-n-so"></a>`N_SO`

<details class="declaration-card" open>
<summary>Constant – source file name: name,,n_sect,0,address</summary>

source file name: name,,n_sect,0,address

```zig
pub const N_SO = 0x64
```

</details>

---

### <a id="const-n-oso"></a>`N_OSO`

<details class="declaration-card" open>
<summary>Constant – object file name: name,,0,0,st_mtime</summary>

object file name: name,,0,0,st_mtime

```zig
pub const N_OSO = 0x66
```

</details>

---

### <a id="const-n-lsym"></a>`N_LSYM`

<details class="declaration-card" open>
<summary>Constant – local sym: name,,NO_SECT,type,offset</summary>

local sym: name,,NO_SECT,type,offset

```zig
pub const N_LSYM = 0x80
```

</details>

---

### <a id="const-n-bincl"></a>`N_BINCL`

<details class="declaration-card" open>
<summary>Constant – include file beginning: name,,NO_SECT,0,sum</summary>

include file beginning: name,,NO_SECT,0,sum

```zig
pub const N_BINCL = 0x82
```

</details>

---

### <a id="const-n-sol"></a>`N_SOL`

<details class="declaration-card" open>
<summary>Constant – #included file name: name,,n_sect,0,address</summary>

#included file name: name,,n_sect,0,address

```zig
pub const N_SOL = 0x84
```

</details>

---

### <a id="const-n-params"></a>`N_PARAMS`

<details class="declaration-card" open>
<summary>Constant – compiler parameters: name,,NO_SECT,0,0</summary>

compiler parameters: name,,NO_SECT,0,0

```zig
pub const N_PARAMS = 0x86
```

</details>

---

### <a id="const-n-version"></a>`N_VERSION`

<details class="declaration-card" open>
<summary>Constant – compiler version: name,,NO_SECT,0,0</summary>

compiler version: name,,NO_SECT,0,0

```zig
pub const N_VERSION = 0x88
```

</details>

---

### <a id="const-n-olevel"></a>`N_OLEVEL`

<details class="declaration-card" open>
<summary>Constant – compiler -O level: name,,NO_SECT,0,0</summary>

compiler -O level: name,,NO_SECT,0,0

```zig
pub const N_OLEVEL = 0x8A
```

</details>

---

### <a id="const-n-psym"></a>`N_PSYM`

<details class="declaration-card" open>
<summary>Constant – parameter: name,,NO_SECT,type,offset</summary>

parameter: name,,NO_SECT,type,offset

```zig
pub const N_PSYM = 0xa0
```

</details>

---

### <a id="const-n-eincl"></a>`N_EINCL`

<details class="declaration-card" open>
<summary>Constant – include file end: name,,NO_SECT,0,0</summary>

include file end: name,,NO_SECT,0,0

```zig
pub const N_EINCL = 0xa2
```

</details>

---

### <a id="const-n-entry"></a>`N_ENTRY`

<details class="declaration-card" open>
<summary>Constant – alternate entry: name,,n_sect,linenumber,address</summary>

alternate entry: name,,n_sect,linenumber,address

```zig
pub const N_ENTRY = 0xa4
```

</details>

---

### <a id="const-n-lbrac"></a>`N_LBRAC`

<details class="declaration-card" open>
<summary>Constant – left bracket: 0,,NO_SECT,nesting level,address</summary>

left bracket: 0,,NO_SECT,nesting level,address

```zig
pub const N_LBRAC = 0xc0
```

</details>

---

### <a id="const-n-excl"></a>`N_EXCL`

<details class="declaration-card" open>
<summary>Constant – deleted include file: name,,NO_SECT,0,sum</summary>

deleted include file: name,,NO_SECT,0,sum

```zig
pub const N_EXCL = 0xc2
```

</details>

---

### <a id="const-n-rbrac"></a>`N_RBRAC`

<details class="declaration-card" open>
<summary>Constant – right bracket: 0,,NO_SECT,nesting level,address</summary>

right bracket: 0,,NO_SECT,nesting level,address

```zig
pub const N_RBRAC = 0xe0
```

</details>

---

### <a id="const-n-bcomm"></a>`N_BCOMM`

<details class="declaration-card" open>
<summary>Constant – begin common: name,,NO_SECT,0,0</summary>

begin common: name,,NO_SECT,0,0

```zig
pub const N_BCOMM = 0xe2
```

</details>

---

### <a id="const-n-ecomm"></a>`N_ECOMM`

<details class="declaration-card" open>
<summary>Constant – end common: name,,n_sect,0,0</summary>

end common: name,,n_sect,0,0

```zig
pub const N_ECOMM = 0xe4
```

</details>

---

### <a id="const-n-ecoml"></a>`N_ECOML`

<details class="declaration-card" open>
<summary>Constant – end common (local name): 0,,n_sect,0,address</summary>

end common (local name): 0,,n_sect,0,address

```zig
pub const N_ECOML = 0xe8
```

</details>

---

### <a id="const-n-leng"></a>`N_LENG`

<details class="declaration-card" open>
<summary>Constant – second stab entry with length information</summary>

second stab entry with length information

```zig
pub const N_LENG = 0xfe
```

</details>

---

### <a id="const-s-non-lazy-symbol-pointers"></a>`S_NON_LAZY_SYMBOL_POINTERS`

<details class="declaration-card" open>
<summary>Constant – section with only non-lazy symbol pointers</summary>

section with only non-lazy symbol pointers

```zig
pub const S_NON_LAZY_SYMBOL_POINTERS = 0x6
```

</details>

---

### <a id="const-s-lazy-symbol-pointers"></a>`S_LAZY_SYMBOL_POINTERS`

<details class="declaration-card" open>
<summary>Constant – section with only lazy symbol pointers</summary>

section with only lazy symbol pointers

```zig
pub const S_LAZY_SYMBOL_POINTERS = 0x7
```

</details>

---

### <a id="const-s-symbol-stubs"></a>`S_SYMBOL_STUBS`

<details class="declaration-card" open>
<summary>Constant – section with only symbol stubs, byte size of stub in the reserved2 field</summary>

section with only symbol stubs, byte size of stub in the reserved2 field

```zig
pub const S_SYMBOL_STUBS = 0x8
```

</details>

---

### <a id="const-s-mod-init-func-pointers"></a>`S_MOD_INIT_FUNC_POINTERS`

<details class="declaration-card" open>
<summary>Constant – section with only function pointers for initialization</summary>

section with only function pointers for initialization

```zig
pub const S_MOD_INIT_FUNC_POINTERS = 0x9
```

</details>

---

### <a id="const-s-mod-term-func-pointers"></a>`S_MOD_TERM_FUNC_POINTERS`

<details class="declaration-card" open>
<summary>Constant – section with only function pointers for termination</summary>

section with only function pointers for termination

```zig
pub const S_MOD_TERM_FUNC_POINTERS = 0xa
```

</details>

---

### <a id="const-s-coalesced"></a>`S_COALESCED`

<details class="declaration-card" open>
<summary>Constant – section contains symbols that are to be coalesced</summary>

section contains symbols that are to be coalesced

```zig
pub const S_COALESCED = 0xb
```

</details>

---

### <a id="const-s-gb-zerofill"></a>`S_GB_ZEROFILL`

<details class="declaration-card" open>
<summary>Constant – zero fill on demand section (that can be larger than 4 gigabytes)</summary>

zero fill on demand section (that can be larger than 4 gigabytes)

```zig
pub const S_GB_ZEROFILL = 0xc
```

</details>

---

### <a id="const-s-interposing"></a>`S_INTERPOSING`

<details class="declaration-card" open>
<summary>Constant – section with only pairs of function pointers for interposing</summary>

section with only pairs of function pointers for interposing

```zig
pub const S_INTERPOSING = 0xd
```

</details>

---

### <a id="const-s-16byte-literals"></a>`S_16BYTE_LITERALS`

<details class="declaration-card" open>
<summary>Constant – section with only 16 byte literals</summary>

section with only 16 byte literals

```zig
pub const S_16BYTE_LITERALS = 0xe
```

</details>

---

### <a id="const-s-dtrace-dof"></a>`S_DTRACE_DOF`

<details class="declaration-card" open>
<summary>Constant – section contains DTrace Object Format</summary>

section contains DTrace Object Format

```zig
pub const S_DTRACE_DOF = 0xf
```

</details>

---

### <a id="const-s-lazy-dylib-symbol-pointers"></a>`S_LAZY_DYLIB_SYMBOL_POINTERS`

<details class="declaration-card" open>
<summary>Constant – section with only lazy symbol pointers to lazy loaded dylibs</summary>

section with only lazy symbol pointers to lazy loaded dylibs

```zig
pub const S_LAZY_DYLIB_SYMBOL_POINTERS = 0x10
```

</details>

---

### <a id="const-s-attr-debug"></a>`S_ATTR_DEBUG`

<details class="declaration-card" open>
<summary>Constant – a debug section</summary>

a debug section

```zig
pub const S_ATTR_DEBUG = 0x02000000
```

</details>

---

### <a id="const-s-attr-pure-instructions"></a>`S_ATTR_PURE_INSTRUCTIONS`

<details class="declaration-card" open>
<summary>Constant – section contains only true machine instructions</summary>

section contains only true machine instructions

```zig
pub const S_ATTR_PURE_INSTRUCTIONS = 0x80000000
```

</details>

---

### <a id="const-s-attr-no-toc"></a>`S_ATTR_NO_TOC`

<details class="declaration-card" open>
<summary>Constant – section contains coalesced symbols that are not to be in a ranlib</summary>

section contains coalesced symbols that are not to be in a ranlib
table of contents

```zig
pub const S_ATTR_NO_TOC = 0x40000000
```

</details>

---

### <a id="const-s-attr-strip-static-syms"></a>`S_ATTR_STRIP_STATIC_SYMS`

<details class="declaration-card" open>
<summary>Constant – ok to strip static symbols in this section in files with the</summary>

ok to strip static symbols in this section in files with the
MH_DYLDLINK flag

```zig
pub const S_ATTR_STRIP_STATIC_SYMS = 0x20000000
```

</details>

---

### <a id="const-s-attr-no-dead-strip"></a>`S_ATTR_NO_DEAD_STRIP`

<details class="declaration-card" open>
<summary>Constant – no dead stripping</summary>

no dead stripping

```zig
pub const S_ATTR_NO_DEAD_STRIP = 0x10000000
```

</details>

---

### <a id="const-s-attr-live-support"></a>`S_ATTR_LIVE_SUPPORT`

<details class="declaration-card" open>
<summary>Constant – blocks are live if they reference live blocks</summary>

blocks are live if they reference live blocks

```zig
pub const S_ATTR_LIVE_SUPPORT = 0x8000000
```

</details>

---

### <a id="const-s-attr-self-modifying-code"></a>`S_ATTR_SELF_MODIFYING_CODE`

<details class="declaration-card" open>
<summary>Constant – used with x86 code stubs written on by dyld</summary>

used with x86 code stubs written on by dyld

```zig
pub const S_ATTR_SELF_MODIFYING_CODE = 0x4000000
```

</details>

---

### <a id="const-s-attr-some-instructions"></a>`S_ATTR_SOME_INSTRUCTIONS`

<details class="declaration-card" open>
<summary>Constant – section contains some machine instructions</summary>

section contains some machine instructions

```zig
pub const S_ATTR_SOME_INSTRUCTIONS = 0x400
```

</details>

---

### <a id="const-s-attr-ext-reloc"></a>`S_ATTR_EXT_RELOC`

<details class="declaration-card" open>
<summary>Constant – section has external relocation entries</summary>

section has external relocation entries

```zig
pub const S_ATTR_EXT_RELOC = 0x200
```

</details>

---

### <a id="const-s-attr-loc-reloc"></a>`S_ATTR_LOC_RELOC`

<details class="declaration-card" open>
<summary>Constant – section has local relocation entries</summary>

section has local relocation entries

```zig
pub const S_ATTR_LOC_RELOC = 0x100
```

</details>

---

### <a id="const-s-thread-local-regular"></a>`S_THREAD_LOCAL_REGULAR`

<details class="declaration-card" open>
<summary>Constant – template of initial values for TLVs</summary>

template of initial values for TLVs

```zig
pub const S_THREAD_LOCAL_REGULAR = 0x11
```

</details>

---

### <a id="const-s-thread-local-zerofill"></a>`S_THREAD_LOCAL_ZEROFILL`

<details class="declaration-card" open>
<summary>Constant – template of initial values for TLVs</summary>

template of initial values for TLVs

```zig
pub const S_THREAD_LOCAL_ZEROFILL = 0x12
```

</details>

---

### <a id="const-s-thread-local-variables"></a>`S_THREAD_LOCAL_VARIABLES`

<details class="declaration-card" open>
<summary>Constant – TLV descriptors</summary>

TLV descriptors

```zig
pub const S_THREAD_LOCAL_VARIABLES = 0x13
```

</details>

---

### <a id="const-s-thread-local-variable-pointers"></a>`S_THREAD_LOCAL_VARIABLE_POINTERS`

<details class="declaration-card" open>
<summary>Constant – pointers to TLV descriptors</summary>

pointers to TLV descriptors

```zig
pub const S_THREAD_LOCAL_VARIABLE_POINTERS = 0x14
```

</details>

---

### <a id="const-s-thread-local-init-function-pointers"></a>`S_THREAD_LOCAL_INIT_FUNCTION_POINTERS`

<details class="declaration-card" open>
<summary>Constant – functions to call to initialize TLV values</summary>

functions to call to initialize TLV values

```zig
pub const S_THREAD_LOCAL_INIT_FUNCTION_POINTERS = 0x15
```

</details>

---

### <a id="const-s-init-func-offsets"></a>`S_INIT_FUNC_OFFSETS`

<details class="declaration-card" open>
<summary>Constant – 32-bit offsets to initializers</summary>

32-bit offsets to initializers

```zig
pub const S_INIT_FUNC_OFFSETS = 0x16
```

</details>

---

### <a id="const-cpu-type-x86-64"></a>`CPU_TYPE_X86_64`

<details class="declaration-card" open>
<summary>Constant – CPU type targeting 64-bit Intel-based Macs</summary>

CPU type targeting 64-bit Intel-based Macs

```zig
pub const CPU_TYPE_X86_64: cpu_type_t = 0x01000007
```

</details>

---

### <a id="const-cpu-type-arm64"></a>`CPU_TYPE_ARM64`

<details class="declaration-card" open>
<summary>Constant – CPU type targeting 64-bit ARM-based Macs</summary>

CPU type targeting 64-bit ARM-based Macs

```zig
pub const CPU_TYPE_ARM64: cpu_type_t = 0x0100000C
```

</details>

---

### <a id="const-cpu-subtype-x86-64-all"></a>`CPU_SUBTYPE_X86_64_ALL`

<details class="declaration-card" open>
<summary>Constant – All Intel-based Macs</summary>

All Intel-based Macs

```zig
pub const CPU_SUBTYPE_X86_64_ALL: cpu_subtype_t = 0x3
```

</details>

---

### <a id="const-cpu-subtype-arm-all"></a>`CPU_SUBTYPE_ARM_ALL`

<details class="declaration-card" open>
<summary>Constant – All ARM-based Macs</summary>

All ARM-based Macs

```zig
pub const CPU_SUBTYPE_ARM_ALL: cpu_subtype_t = 0x0
```

</details>

---

### <a id="const-rebase-type-pointer"></a>`REBASE_TYPE_POINTER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_TYPE_POINTER: u8 = 1
```

</details>

---

### <a id="const-rebase-type-text-absolute32"></a>`REBASE_TYPE_TEXT_ABSOLUTE32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_TYPE_TEXT_ABSOLUTE32: u8 = 2
```

</details>

---

### <a id="const-rebase-type-text-pcrel32"></a>`REBASE_TYPE_TEXT_PCREL32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_TYPE_TEXT_PCREL32: u8 = 3
```

</details>

---

### <a id="const-rebase-opcode-mask"></a>`REBASE_OPCODE_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_MASK: u8 = 0xF0
```

</details>

---

### <a id="const-rebase-immediate-mask"></a>`REBASE_IMMEDIATE_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_IMMEDIATE_MASK: u8 = 0x0F
```

</details>

---

### <a id="const-rebase-opcode-done"></a>`REBASE_OPCODE_DONE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_DONE: u8 = 0x00
```

</details>

---

### <a id="const-rebase-opcode-set-type-imm"></a>`REBASE_OPCODE_SET_TYPE_IMM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_SET_TYPE_IMM: u8 = 0x10
```

</details>

---

### <a id="const-rebase-opcode-set-segment-and-offset-uleb"></a>`REBASE_OPCODE_SET_SEGMENT_AND_OFFSET_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_SET_SEGMENT_AND_OFFSET_ULEB: u8 = 0x20
```

</details>

---

### <a id="const-rebase-opcode-add-addr-uleb"></a>`REBASE_OPCODE_ADD_ADDR_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_ADD_ADDR_ULEB: u8 = 0x30
```

</details>

---

### <a id="const-rebase-opcode-add-addr-imm-scaled"></a>`REBASE_OPCODE_ADD_ADDR_IMM_SCALED`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_ADD_ADDR_IMM_SCALED: u8 = 0x40
```

</details>

---

### <a id="const-rebase-opcode-do-rebase-imm-times"></a>`REBASE_OPCODE_DO_REBASE_IMM_TIMES`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_DO_REBASE_IMM_TIMES: u8 = 0x50
```

</details>

---

### <a id="const-rebase-opcode-do-rebase-uleb-times"></a>`REBASE_OPCODE_DO_REBASE_ULEB_TIMES`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_DO_REBASE_ULEB_TIMES: u8 = 0x60
```

</details>

---

### <a id="const-rebase-opcode-do-rebase-add-addr-uleb"></a>`REBASE_OPCODE_DO_REBASE_ADD_ADDR_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_DO_REBASE_ADD_ADDR_ULEB: u8 = 0x70
```

</details>

---

### <a id="const-rebase-opcode-do-rebase-uleb-times-skipping-uleb"></a>`REBASE_OPCODE_DO_REBASE_ULEB_TIMES_SKIPPING_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REBASE_OPCODE_DO_REBASE_ULEB_TIMES_SKIPPING_ULEB: u8 = 0x80
```

</details>

---

### <a id="const-bind-type-pointer"></a>`BIND_TYPE_POINTER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_TYPE_POINTER: u8 = 1
```

</details>

---

### <a id="const-bind-type-text-absolute32"></a>`BIND_TYPE_TEXT_ABSOLUTE32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_TYPE_TEXT_ABSOLUTE32: u8 = 2
```

</details>

---

### <a id="const-bind-type-text-pcrel32"></a>`BIND_TYPE_TEXT_PCREL32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_TYPE_TEXT_PCREL32: u8 = 3
```

</details>

---

### <a id="const-bind-special-dylib-self"></a>`BIND_SPECIAL_DYLIB_SELF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_SPECIAL_DYLIB_SELF: i8 = 0
```

</details>

---

### <a id="const-bind-special-dylib-main-executable"></a>`BIND_SPECIAL_DYLIB_MAIN_EXECUTABLE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_SPECIAL_DYLIB_MAIN_EXECUTABLE: i8 = -1
```

</details>

---

### <a id="const-bind-special-dylib-flat-lookup"></a>`BIND_SPECIAL_DYLIB_FLAT_LOOKUP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_SPECIAL_DYLIB_FLAT_LOOKUP: i8 = -2
```

</details>

---

### <a id="const-bind-symbol-flags-weak-import"></a>`BIND_SYMBOL_FLAGS_WEAK_IMPORT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_SYMBOL_FLAGS_WEAK_IMPORT: u8 = 0x1
```

</details>

---

### <a id="const-bind-symbol-flags-non-weak-definition"></a>`BIND_SYMBOL_FLAGS_NON_WEAK_DEFINITION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_SYMBOL_FLAGS_NON_WEAK_DEFINITION: u8 = 0x8
```

</details>

---

### <a id="const-bind-opcode-mask"></a>`BIND_OPCODE_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_MASK: u8 = 0xf0
```

</details>

---

### <a id="const-bind-immediate-mask"></a>`BIND_IMMEDIATE_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_IMMEDIATE_MASK: u8 = 0x0f
```

</details>

---

### <a id="const-bind-opcode-done"></a>`BIND_OPCODE_DONE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_DONE: u8 = 0x00
```

</details>

---

### <a id="const-bind-opcode-set-dylib-ordinal-imm"></a>`BIND_OPCODE_SET_DYLIB_ORDINAL_IMM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_SET_DYLIB_ORDINAL_IMM: u8 = 0x10
```

</details>

---

### <a id="const-bind-opcode-set-dylib-ordinal-uleb"></a>`BIND_OPCODE_SET_DYLIB_ORDINAL_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_SET_DYLIB_ORDINAL_ULEB: u8 = 0x20
```

</details>

---

### <a id="const-bind-opcode-set-dylib-special-imm"></a>`BIND_OPCODE_SET_DYLIB_SPECIAL_IMM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_SET_DYLIB_SPECIAL_IMM: u8 = 0x30
```

</details>

---

### <a id="const-bind-opcode-set-symbol-trailing-flags-imm"></a>`BIND_OPCODE_SET_SYMBOL_TRAILING_FLAGS_IMM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_SET_SYMBOL_TRAILING_FLAGS_IMM: u8 = 0x40
```

</details>

---

### <a id="const-bind-opcode-set-type-imm"></a>`BIND_OPCODE_SET_TYPE_IMM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_SET_TYPE_IMM: u8 = 0x50
```

</details>

---

### <a id="const-bind-opcode-set-addend-sleb"></a>`BIND_OPCODE_SET_ADDEND_SLEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_SET_ADDEND_SLEB: u8 = 0x60
```

</details>

---

### <a id="const-bind-opcode-set-segment-and-offset-uleb"></a>`BIND_OPCODE_SET_SEGMENT_AND_OFFSET_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_SET_SEGMENT_AND_OFFSET_ULEB: u8 = 0x70
```

</details>

---

### <a id="const-bind-opcode-add-addr-uleb"></a>`BIND_OPCODE_ADD_ADDR_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_ADD_ADDR_ULEB: u8 = 0x80
```

</details>

---

### <a id="const-bind-opcode-do-bind"></a>`BIND_OPCODE_DO_BIND`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_DO_BIND: u8 = 0x90
```

</details>

---

### <a id="const-bind-opcode-do-bind-add-addr-uleb"></a>`BIND_OPCODE_DO_BIND_ADD_ADDR_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_DO_BIND_ADD_ADDR_ULEB: u8 = 0xa0
```

</details>

---

### <a id="const-bind-opcode-do-bind-add-addr-imm-scaled"></a>`BIND_OPCODE_DO_BIND_ADD_ADDR_IMM_SCALED`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_DO_BIND_ADD_ADDR_IMM_SCALED: u8 = 0xb0
```

</details>

---

### <a id="const-bind-opcode-do-bind-uleb-times-skipping-uleb"></a>`BIND_OPCODE_DO_BIND_ULEB_TIMES_SKIPPING_ULEB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const BIND_OPCODE_DO_BIND_ULEB_TIMES_SKIPPING_ULEB: u8 = 0xc0
```

</details>

---

### <a id="const-reference-flag-undefined-non-lazy"></a>`REFERENCE_FLAG_UNDEFINED_NON_LAZY`

<details class="declaration-card" open>
<summary>Constant – This symbol is a reference to an external non-lazy (data) symbol</summary>

This symbol is a reference to an external non-lazy (data) symbol.

```zig
pub const REFERENCE_FLAG_UNDEFINED_NON_LAZY: u16 = 0x0
```

</details>

---

### <a id="const-reference-flag-undefined-lazy"></a>`REFERENCE_FLAG_UNDEFINED_LAZY`

<details class="declaration-card" open>
<summary>Constant – This symbol is a reference to an external lazy symbol—that is, to a function call</summary>

This symbol is a reference to an external lazy symbol—that is, to a function call.

```zig
pub const REFERENCE_FLAG_UNDEFINED_LAZY: u16 = 0x1
```

</details>

---

### <a id="const-reference-flag-defined"></a>`REFERENCE_FLAG_DEFINED`

<details class="declaration-card" open>
<summary>Constant – This symbol is defined in this module</summary>

This symbol is defined in this module.

```zig
pub const REFERENCE_FLAG_DEFINED: u16 = 0x2
```

</details>

---

### <a id="const-reference-flag-private-defined"></a>`REFERENCE_FLAG_PRIVATE_DEFINED`

<details class="declaration-card" open>
<summary>Constant – This symbol is defined in this module and is visible only to modules within this shared library</summary>

This symbol is defined in this module and is visible only to modules within this shared library.

```zig
pub const REFERENCE_FLAG_PRIVATE_DEFINED: u16 = 3
```

</details>

---

### <a id="const-reference-flag-private-undefined-non-lazy"></a>`REFERENCE_FLAG_PRIVATE_UNDEFINED_NON_LAZY`

<details class="declaration-card" open>
<summary>Constant – This symbol is defined in another module in this file, is a non-lazy (data) symbol, and is visible</summary>

This symbol is defined in another module in this file, is a non-lazy (data) symbol, and is visible
only to modules within this shared library.

```zig
pub const REFERENCE_FLAG_PRIVATE_UNDEFINED_NON_LAZY: u16 = 4
```

</details>

---

### <a id="const-reference-flag-private-undefined-lazy"></a>`REFERENCE_FLAG_PRIVATE_UNDEFINED_LAZY`

<details class="declaration-card" open>
<summary>Constant – This symbol is defined in another module in this file, is a lazy (function) symbol, and is visible</summary>

This symbol is defined in another module in this file, is a lazy (function) symbol, and is visible
only to modules within this shared library.

```zig
pub const REFERENCE_FLAG_PRIVATE_UNDEFINED_LAZY: u16 = 5
```

</details>

---

### <a id="const-referenced-dynamically"></a>`REFERENCED_DYNAMICALLY`

<details class="declaration-card" open>
<summary>Constant – Must be set for any defined symbol that is referenced by dynamic-loader APIs (such as dlsym and</summary>

Must be set for any defined symbol that is referenced by dynamic-loader APIs (such as dlsym and
NSLookupSymbolInImage) and not ordinary undefined symbol references. The strip tool uses this bit
to avoid removing symbols that must exist: If the symbol has this bit set, strip does not strip it.

```zig
pub const REFERENCED_DYNAMICALLY: u16 = 0x10
```

</details>

---

### <a id="const-n-no-dead-strip"></a>`N_NO_DEAD_STRIP`

<details class="declaration-card" open>
<summary>Constant – The N_NO_DEAD_STRIP bit of the n_desc field only ever appears in a</summary>

The N_NO_DEAD_STRIP bit of the n_desc field only ever appears in a
relocatable .o file (MH_OBJECT filetype). And is used to indicate to the
static link editor it is never to dead strip the symbol.

```zig
pub const N_NO_DEAD_STRIP: u16 = 0x20
```

</details>

---

### <a id="const-n-desc-discarded"></a>`N_DESC_DISCARDED`

<details class="declaration-card" open>
<summary>Constant – Used by the dynamic linker at runtime</summary>

Used by the dynamic linker at runtime. Do not set this bit.

```zig
pub const N_DESC_DISCARDED: u16 = 0x20
```

</details>

---

### <a id="const-n-weak-ref"></a>`N_WEAK_REF`

<details class="declaration-card" open>
<summary>Constant – Indicates that this symbol is a weak reference</summary>

Indicates that this symbol is a weak reference. If the dynamic linker cannot find a definition
for this symbol, it sets the address of this symbol to 0. The static linker sets this symbol given
the appropriate weak-linking flags.

```zig
pub const N_WEAK_REF: u16 = 0x40
```

</details>

---

### <a id="const-n-weak-def"></a>`N_WEAK_DEF`

<details class="declaration-card" open>
<summary>Constant – Indicates that this symbol is a weak definition</summary>

Indicates that this symbol is a weak definition. If the static linker or the dynamic linker finds
another (non-weak) definition for this symbol, the weak definition is ignored. Only symbols in a
coalesced section (page 23) can be marked as a weak definition.

```zig
pub const N_WEAK_DEF: u16 = 0x80
```

</details>

---

### <a id="const-n-symbol-resolver"></a>`N_SYMBOL_RESOLVER`

<details class="declaration-card" open>
<summary>Constant – The N_SYMBOL_RESOLVER bit of the n_desc field indicates that the</summary>

The N_SYMBOL_RESOLVER bit of the n_desc field indicates that the
that the function is actually a resolver function and should
be called to get the address of the real function to use.
This bit is only available in .o files (MH_OBJECT filetype)

```zig
pub const N_SYMBOL_RESOLVER: u16 = 0x100
```

</details>

---

### <a id="const-export-symbol-flags-kind-mask"></a>`EXPORT_SYMBOL_FLAGS_KIND_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EXPORT_SYMBOL_FLAGS_KIND_MASK: u8 = 0x03
```

</details>

---

### <a id="const-export-symbol-flags-kind-regular"></a>`EXPORT_SYMBOL_FLAGS_KIND_REGULAR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EXPORT_SYMBOL_FLAGS_KIND_REGULAR: u8 = 0x00
```

</details>

---

### <a id="const-export-symbol-flags-kind-thread-local"></a>`EXPORT_SYMBOL_FLAGS_KIND_THREAD_LOCAL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EXPORT_SYMBOL_FLAGS_KIND_THREAD_LOCAL: u8 = 0x01
```

</details>

---

### <a id="const-export-symbol-flags-kind-absolute"></a>`EXPORT_SYMBOL_FLAGS_KIND_ABSOLUTE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EXPORT_SYMBOL_FLAGS_KIND_ABSOLUTE: u8 = 0x02
```

</details>

---

### <a id="const-export-symbol-flags-weak-definition"></a>`EXPORT_SYMBOL_FLAGS_WEAK_DEFINITION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EXPORT_SYMBOL_FLAGS_WEAK_DEFINITION: u8 = 0x04
```

</details>

---

### <a id="const-export-symbol-flags-reexport"></a>`EXPORT_SYMBOL_FLAGS_REEXPORT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EXPORT_SYMBOL_FLAGS_REEXPORT: u8 = 0x08
```

</details>

---

### <a id="const-export-symbol-flags-stub-and-resolver"></a>`EXPORT_SYMBOL_FLAGS_STUB_AND_RESOLVER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EXPORT_SYMBOL_FLAGS_STUB_AND_RESOLVER: u8 = 0x10
```

</details>

---

### <a id="const-indirect-symbol-local"></a>`INDIRECT_SYMBOL_LOCAL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const INDIRECT_SYMBOL_LOCAL: u32 = 0x80000000
```

</details>

---

### <a id="const-indirect-symbol-abs"></a>`INDIRECT_SYMBOL_ABS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const INDIRECT_SYMBOL_ABS: u32 = 0x40000000
```

</details>

---

### <a id="const-csmagic-requirement"></a>`CSMAGIC_REQUIREMENT`

<details class="declaration-card" open>
<summary>Constant – Single Requirement blob</summary>

Single Requirement blob

```zig
pub const CSMAGIC_REQUIREMENT: u32 = 0xfade0c00
```

</details>

---

### <a id="const-csmagic-requirements"></a>`CSMAGIC_REQUIREMENTS`

<details class="declaration-card" open>
<summary>Constant – Requirements vector (internal requirements)</summary>

Requirements vector (internal requirements)

```zig
pub const CSMAGIC_REQUIREMENTS: u32 = 0xfade0c01
```

</details>

---

### <a id="const-csmagic-codedirectory"></a>`CSMAGIC_CODEDIRECTORY`

<details class="declaration-card" open>
<summary>Constant – CodeDirectory blob</summary>

CodeDirectory blob

```zig
pub const CSMAGIC_CODEDIRECTORY: u32 = 0xfade0c02
```

</details>

---

### <a id="const-csmagic-embedded-signature"></a>`CSMAGIC_EMBEDDED_SIGNATURE`

<details class="declaration-card" open>
<summary>Constant – embedded form of signature data</summary>

embedded form of signature data

```zig
pub const CSMAGIC_EMBEDDED_SIGNATURE: u32 = 0xfade0cc0
```

</details>

---

### <a id="const-csmagic-embedded-signature-old"></a>`CSMAGIC_EMBEDDED_SIGNATURE_OLD`

<details class="declaration-card" open>
<summary>Constant – XXX</summary>

XXX

```zig
pub const CSMAGIC_EMBEDDED_SIGNATURE_OLD: u32 = 0xfade0b02
```

</details>

---

### <a id="const-csmagic-embedded-entitlements"></a>`CSMAGIC_EMBEDDED_ENTITLEMENTS`

<details class="declaration-card" open>
<summary>Constant – Embedded entitlements</summary>

Embedded entitlements

```zig
pub const CSMAGIC_EMBEDDED_ENTITLEMENTS: u32 = 0xfade7171
```

</details>

---

### <a id="const-csmagic-embedded-der-entitlements"></a>`CSMAGIC_EMBEDDED_DER_ENTITLEMENTS`

<details class="declaration-card" open>
<summary>Constant – Embedded DER encoded entitlements</summary>

Embedded DER encoded entitlements

```zig
pub const CSMAGIC_EMBEDDED_DER_ENTITLEMENTS: u32 = 0xfade7172
```

</details>

---

### <a id="const-csmagic-detached-signature"></a>`CSMAGIC_DETACHED_SIGNATURE`

<details class="declaration-card" open>
<summary>Constant – Multi-arch collection of embedded signatures</summary>

Multi-arch collection of embedded signatures

```zig
pub const CSMAGIC_DETACHED_SIGNATURE: u32 = 0xfade0cc1
```

</details>

---

### <a id="const-csmagic-blobwrapper"></a>`CSMAGIC_BLOBWRAPPER`

<details class="declaration-card" open>
<summary>Constant – CMS Signature, among other things</summary>

CMS Signature, among other things

```zig
pub const CSMAGIC_BLOBWRAPPER: u32 = 0xfade0b01
```

</details>

---

### <a id="const-cs-supportsscatter"></a>`CS_SUPPORTSSCATTER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SUPPORTSSCATTER: u32 = 0x20100
```

</details>

---

### <a id="const-cs-supportsteamid"></a>`CS_SUPPORTSTEAMID`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SUPPORTSTEAMID: u32 = 0x20200
```

</details>

---

### <a id="const-cs-supportscodelimit64"></a>`CS_SUPPORTSCODELIMIT64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SUPPORTSCODELIMIT64: u32 = 0x20300
```

</details>

---

### <a id="const-cs-supportsexecseg"></a>`CS_SUPPORTSEXECSEG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SUPPORTSEXECSEG: u32 = 0x20400
```

</details>

---

### <a id="const-csslot-codedirectory"></a>`CSSLOT_CODEDIRECTORY`

<details class="declaration-card" open>
<summary>Constant – Slot index for CodeDirectory</summary>

Slot index for CodeDirectory

```zig
pub const CSSLOT_CODEDIRECTORY: u32 = 0
```

</details>

---

### <a id="const-csslot-infoslot"></a>`CSSLOT_INFOSLOT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSSLOT_INFOSLOT: u32 = 1
```

</details>

---

### <a id="const-csslot-requirements"></a>`CSSLOT_REQUIREMENTS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSSLOT_REQUIREMENTS: u32 = 2
```

</details>

---

### <a id="const-csslot-resourcedir"></a>`CSSLOT_RESOURCEDIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSSLOT_RESOURCEDIR: u32 = 3
```

</details>

---

### <a id="const-csslot-application"></a>`CSSLOT_APPLICATION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSSLOT_APPLICATION: u32 = 4
```

</details>

---

### <a id="const-csslot-entitlements"></a>`CSSLOT_ENTITLEMENTS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSSLOT_ENTITLEMENTS: u32 = 5
```

</details>

---

### <a id="const-csslot-der-entitlements"></a>`CSSLOT_DER_ENTITLEMENTS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSSLOT_DER_ENTITLEMENTS: u32 = 7
```

</details>

---

### <a id="const-csslot-alternate-codedirectories"></a>`CSSLOT_ALTERNATE_CODEDIRECTORIES`

<details class="declaration-card" open>
<summary>Constant – first alternate CodeDirectory, if any</summary>

first alternate CodeDirectory, if any

```zig
pub const CSSLOT_ALTERNATE_CODEDIRECTORIES: u32 = 0x1000
```

</details>

---

### <a id="const-csslot-alternate-codedirectory-max"></a>`CSSLOT_ALTERNATE_CODEDIRECTORY_MAX`

<details class="declaration-card" open>
<summary>Constant – Max number of alternate CD slots</summary>

Max number of alternate CD slots

```zig
pub const CSSLOT_ALTERNATE_CODEDIRECTORY_MAX: u32 = 5
```

</details>

---

### <a id="const-csslot-alternate-codedirectory-limit"></a>`CSSLOT_ALTERNATE_CODEDIRECTORY_LIMIT`

<details class="declaration-card" open>
<summary>Constant – One past the last</summary>

One past the last

```zig
pub const CSSLOT_ALTERNATE_CODEDIRECTORY_LIMIT: u32 = CSSLOT_ALTERNATE_CODEDIRECTORIES + CSSLOT_ALTERNATE_CODEDIRECTORY_MAX
```

</details>

---

### <a id="const-csslot-signatureslot"></a>`CSSLOT_SIGNATURESLOT`

<details class="declaration-card" open>
<summary>Constant – CMS Signature</summary>

CMS Signature

```zig
pub const CSSLOT_SIGNATURESLOT: u32 = 0x10000
```

</details>

---

### <a id="const-csslot-identificationslot"></a>`CSSLOT_IDENTIFICATIONSLOT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSSLOT_IDENTIFICATIONSLOT: u32 = 0x10001
```

</details>

---

### <a id="const-csslot-ticketslot"></a>`CSSLOT_TICKETSLOT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSSLOT_TICKETSLOT: u32 = 0x10002
```

</details>

---

### <a id="const-cstype-index-requirements"></a>`CSTYPE_INDEX_REQUIREMENTS`

<details class="declaration-card" open>
<summary>Constant – Compat with amfi</summary>

Compat with amfi

```zig
pub const CSTYPE_INDEX_REQUIREMENTS: u32 = 0x00000002
```

</details>

---

### <a id="const-cstype-index-entitlements"></a>`CSTYPE_INDEX_ENTITLEMENTS`

<details class="declaration-card" open>
<summary>Constant – Compat with amfi</summary>

Compat with amfi

```zig
pub const CSTYPE_INDEX_ENTITLEMENTS: u32 = 0x00000005
```

</details>

---

### <a id="const-cs-hashtype-sha1"></a>`CS_HASHTYPE_SHA1`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_HASHTYPE_SHA1: u8 = 1
```

</details>

---

### <a id="const-cs-hashtype-sha256"></a>`CS_HASHTYPE_SHA256`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_HASHTYPE_SHA256: u8 = 2
```

</details>

---

### <a id="const-cs-hashtype-sha256-truncated"></a>`CS_HASHTYPE_SHA256_TRUNCATED`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_HASHTYPE_SHA256_TRUNCATED: u8 = 3
```

</details>

---

### <a id="const-cs-hashtype-sha384"></a>`CS_HASHTYPE_SHA384`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_HASHTYPE_SHA384: u8 = 4
```

</details>

---

### <a id="const-cs-sha1-len"></a>`CS_SHA1_LEN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SHA1_LEN: u32 = 20
```

</details>

---

### <a id="const-cs-sha256-len"></a>`CS_SHA256_LEN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SHA256_LEN: u32 = 32
```

</details>

---

### <a id="const-cs-sha256-truncated-len"></a>`CS_SHA256_TRUNCATED_LEN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SHA256_TRUNCATED_LEN: u32 = 20
```

</details>

---

### <a id="const-cs-cdhash-len"></a>`CS_CDHASH_LEN`

<details class="declaration-card" open>
<summary>Constant – Always - larger hashes are truncated</summary>

Always - larger hashes are truncated

```zig
pub const CS_CDHASH_LEN: u32 = 20
```

</details>

---

### <a id="const-cs-hash-max-size"></a>`CS_HASH_MAX_SIZE`

<details class="declaration-card" open>
<summary>Constant – Max size of the hash we&#39;ll support</summary>

Max size of the hash we'll support

```zig
pub const CS_HASH_MAX_SIZE: u32 = 48
```

</details>

---

### <a id="const-cs-signer-type-unknown"></a>`CS_SIGNER_TYPE_UNKNOWN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SIGNER_TYPE_UNKNOWN: u32 = 0
```

</details>

---

### <a id="const-cs-signer-type-legacyvpn"></a>`CS_SIGNER_TYPE_LEGACYVPN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SIGNER_TYPE_LEGACYVPN: u32 = 5
```

</details>

---

### <a id="const-cs-signer-type-mac-app-store"></a>`CS_SIGNER_TYPE_MAC_APP_STORE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_SIGNER_TYPE_MAC_APP_STORE: u32 = 6
```

</details>

---

### <a id="const-cs-adhoc"></a>`CS_ADHOC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_ADHOC: u32 = 0x2
```

</details>

---

### <a id="const-cs-linker-signed"></a>`CS_LINKER_SIGNED`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_LINKER_SIGNED: u32 = 0x20000
```

</details>

---

### <a id="const-cs-execseg-main-binary"></a>`CS_EXECSEG_MAIN_BINARY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CS_EXECSEG_MAIN_BINARY: u32 = 0x1
```

</details>

---

### <a id="const-compact-unwind-encoding-t"></a>`compact_unwind_encoding_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const compact_unwind_encoding_t = u32
```

</details>

---

### <a id="const-unwind-section-version"></a>`UNWIND_SECTION_VERSION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_SECTION_VERSION = 1
```

</details>

---

### <a id="const-unwind-is-not-function-start"></a>`UNWIND_IS_NOT_FUNCTION_START`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_IS_NOT_FUNCTION_START: u32 = 0x80000000
```

</details>

---

### <a id="const-unwind-has-lsda"></a>`UNWIND_HAS_LSDA`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_HAS_LSDA: u32 = 0x40000000
```

</details>

---

### <a id="const-unwind-personality-mask"></a>`UNWIND_PERSONALITY_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_PERSONALITY_MASK: u32 = 0x30000000
```

</details>

---

### <a id="const-unwind-x86-64-mode-mask"></a>`UNWIND_X86_64_MODE_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_X86_64_MODE_MASK: u32 = 0x0F000000
```

</details>

---

### <a id="const-unwind-x86-64-rbp-frame-registers"></a>`UNWIND_X86_64_RBP_FRAME_REGISTERS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_X86_64_RBP_FRAME_REGISTERS: u32 = 0x00007FFF
```

</details>

---

### <a id="const-unwind-x86-64-rbp-frame-offset"></a>`UNWIND_X86_64_RBP_FRAME_OFFSET`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_X86_64_RBP_FRAME_OFFSET: u32 = 0x00FF0000
```

</details>

---

### <a id="const-unwind-x86-64-frameless-stack-size"></a>`UNWIND_X86_64_FRAMELESS_STACK_SIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_X86_64_FRAMELESS_STACK_SIZE: u32 = 0x00FF0000
```

</details>

---

### <a id="const-unwind-x86-64-frameless-stack-adjust"></a>`UNWIND_X86_64_FRAMELESS_STACK_ADJUST`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_X86_64_FRAMELESS_STACK_ADJUST: u32 = 0x0000E000
```

</details>

---

### <a id="const-unwind-x86-64-frameless-stack-reg-count"></a>`UNWIND_X86_64_FRAMELESS_STACK_REG_COUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_X86_64_FRAMELESS_STACK_REG_COUNT: u32 = 0x00001C00
```

</details>

---

### <a id="const-unwind-x86-64-frameless-stack-reg-permutation"></a>`UNWIND_X86_64_FRAMELESS_STACK_REG_PERMUTATION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_X86_64_FRAMELESS_STACK_REG_PERMUTATION: u32 = 0x000003FF
```

</details>

---

### <a id="const-unwind-x86-64-dwarf-section-offset"></a>`UNWIND_X86_64_DWARF_SECTION_OFFSET`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_X86_64_DWARF_SECTION_OFFSET: u32 = 0x00FFFFFF
```

</details>

---

### <a id="const-unwind-arm64-mode-mask"></a>`UNWIND_ARM64_MODE_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_MODE_MASK: u32 = 0x0F000000
```

</details>

---

### <a id="const-unwind-arm64-frame-x19-x20-pair"></a>`UNWIND_ARM64_FRAME_X19_X20_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_X19_X20_PAIR: u32 = 0x00000001
```

</details>

---

### <a id="const-unwind-arm64-frame-x21-x22-pair"></a>`UNWIND_ARM64_FRAME_X21_X22_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_X21_X22_PAIR: u32 = 0x00000002
```

</details>

---

### <a id="const-unwind-arm64-frame-x23-x24-pair"></a>`UNWIND_ARM64_FRAME_X23_X24_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_X23_X24_PAIR: u32 = 0x00000004
```

</details>

---

### <a id="const-unwind-arm64-frame-x25-x26-pair"></a>`UNWIND_ARM64_FRAME_X25_X26_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_X25_X26_PAIR: u32 = 0x00000008
```

</details>

---

### <a id="const-unwind-arm64-frame-x27-x28-pair"></a>`UNWIND_ARM64_FRAME_X27_X28_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_X27_X28_PAIR: u32 = 0x00000010
```

</details>

---

### <a id="const-unwind-arm64-frame-d8-d9-pair"></a>`UNWIND_ARM64_FRAME_D8_D9_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_D8_D9_PAIR: u32 = 0x00000100
```

</details>

---

### <a id="const-unwind-arm64-frame-d10-d11-pair"></a>`UNWIND_ARM64_FRAME_D10_D11_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_D10_D11_PAIR: u32 = 0x00000200
```

</details>

---

### <a id="const-unwind-arm64-frame-d12-d13-pair"></a>`UNWIND_ARM64_FRAME_D12_D13_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_D12_D13_PAIR: u32 = 0x00000400
```

</details>

---

### <a id="const-unwind-arm64-frame-d14-d15-pair"></a>`UNWIND_ARM64_FRAME_D14_D15_PAIR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAME_D14_D15_PAIR: u32 = 0x00000800
```

</details>

---

### <a id="const-unwind-arm64-frameless-stack-size-mask"></a>`UNWIND_ARM64_FRAMELESS_STACK_SIZE_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_FRAMELESS_STACK_SIZE_MASK: u32 = 0x00FFF000
```

</details>

---

### <a id="const-unwind-arm64-dwarf-section-offset"></a>`UNWIND_ARM64_DWARF_SECTION_OFFSET`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const UNWIND_ARM64_DWARF_SECTION_OFFSET: u32 = 0x00FFFFFF
```

</details>

---

