# std.elf

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.elf` |
| Declarations | 448 |
| Breakdown | 54 types · 394 constants |
| Generated (unix epoch) | 1760148104 |

## Overview

Executable and Linkable Format.

---

## Table of Contents

- [Types](#types)
  - [`Versym`](#type-versym)
  - [`VER\_NDX`](#type-ver-ndx)
  - [`ET`](#type-et)
  - [`Header`](#type-header)
  - [`ProgramHeaderIterator`](#type-programheaderiterator)
  - [`ProgramHeaderBufferIterator`](#type-programheaderbufferiterator)
  - [`SectionHeaderIterator`](#type-sectionheaderiterator)
  - [`SectionHeaderBufferIterator`](#type-sectionheaderbufferiterator)
  - [`Elf32\_Ehdr`](#type-elf32-ehdr)
  - [`Elf64\_Ehdr`](#type-elf64-ehdr)
  - [`Elf32\_Phdr`](#type-elf32-phdr)
  - [`Elf64\_Phdr`](#type-elf64-phdr)
  - [`Elf32\_Shdr`](#type-elf32-shdr)
  - [`Elf64\_Shdr`](#type-elf64-shdr)
  - [`Elf32\_Chdr`](#type-elf32-chdr)
  - [`Elf64\_Chdr`](#type-elf64-chdr)
  - [`Elf32\_Sym`](#type-elf32-sym)
  - [`Elf64\_Sym`](#type-elf64-sym)
  - [`Elf32\_Syminfo`](#type-elf32-syminfo)
  - [`Elf64\_Syminfo`](#type-elf64-syminfo)
  - [`Elf32\_Rel`](#type-elf32-rel)
  - [`Elf64\_Rel`](#type-elf64-rel)
  - [`Elf32\_Rela`](#type-elf32-rela)
  - [`Elf64\_Rela`](#type-elf64-rela)
  - [`Elf32\_Dyn`](#type-elf32-dyn)
  - [`Elf64\_Dyn`](#type-elf64-dyn)
  - [`Verdef`](#type-verdef)
  - [`Verdaux`](#type-verdaux)
  - [`Elf32\_Verneed`](#type-elf32-verneed)
  - [`Elf64\_Verneed`](#type-elf64-verneed)
  - [`Vernaux`](#type-vernaux)
  - [`Elf32\_auxv\_t`](#type-elf32-auxv-t)
  - [`Elf64\_auxv\_t`](#type-elf64-auxv-t)
  - [`Elf32\_Nhdr`](#type-elf32-nhdr)
  - [`Elf64\_Nhdr`](#type-elf64-nhdr)
  - [`Elf32\_Move`](#type-elf32-move)
  - [`Elf64\_Move`](#type-elf64-move)
  - [`Elf32\_gptab`](#type-elf32-gptab)
  - [`Elf32\_RegInfo`](#type-elf32-reginfo)
  - [`Elf\_Options`](#type-elf-options)
  - [`Elf\_Options\_Hw`](#type-elf-options-hw)
  - [`Elf32\_Lib`](#type-elf32-lib)
  - [`Elf64\_Lib`](#type-elf64-lib)
  - [`Elf\_MIPS\_ABIFlags\_v0`](#type-elf-mips-abiflags-v0)
  - [`OSABI`](#type-osabi)
  - [`EM`](#type-em)
  - [`COMPRESS`](#type-compress)
  - [`R\_X86\_64`](#type-r-x86-64)
  - [`R\_AARCH64`](#type-r-aarch64)
  - [`R\_RISCV`](#type-r-riscv)
  - [`R\_PPC64`](#type-r-ppc64)
  - [`STV`](#type-stv)
  - [`ar\_hdr`](#type-ar-hdr)
  - [`gnu\_hash`](#type-gnu-hash)

- [Constants](#constants)
  - [`AT\_NULL`](#const-at-null)
  - [`AT\_IGNORE`](#const-at-ignore)
  - [`AT\_EXECFD`](#const-at-execfd)
  - [`AT\_PHDR`](#const-at-phdr)
  - [`AT\_PHENT`](#const-at-phent)
  - [`AT\_PHNUM`](#const-at-phnum)
  - [`AT\_PAGESZ`](#const-at-pagesz)
  - [`AT\_BASE`](#const-at-base)
  - [`AT\_FLAGS`](#const-at-flags)
  - [`AT\_ENTRY`](#const-at-entry)
  - [`AT\_NOTELF`](#const-at-notelf)
  - [`AT\_UID`](#const-at-uid)
  - [`AT\_EUID`](#const-at-euid)
  - [`AT\_GID`](#const-at-gid)
  - [`AT\_EGID`](#const-at-egid)
  - [`AT\_CLKTCK`](#const-at-clktck)
  - [`AT\_PLATFORM`](#const-at-platform)
  - [`AT\_HWCAP`](#const-at-hwcap)
  - [`AT\_FPUCW`](#const-at-fpucw)
  - [`AT\_DCACHEBSIZE`](#const-at-dcachebsize)
  - [`AT\_ICACHEBSIZE`](#const-at-icachebsize)
  - [`AT\_UCACHEBSIZE`](#const-at-ucachebsize)
  - [`AT\_IGNOREPPC`](#const-at-ignoreppc)
  - [`AT\_SECURE`](#const-at-secure)
  - [`AT\_BASE\_PLATFORM`](#const-at-base-platform)
  - [`AT\_RANDOM`](#const-at-random)
  - [`AT\_HWCAP2`](#const-at-hwcap2)
  - [`AT\_EXECFN`](#const-at-execfn)
  - [`AT\_SYSINFO`](#const-at-sysinfo)
  - [`AT\_SYSINFO\_EHDR`](#const-at-sysinfo-ehdr)
  - [`AT\_L1I\_CACHESHAPE`](#const-at-l1i-cacheshape)
  - [`AT\_L1D\_CACHESHAPE`](#const-at-l1d-cacheshape)
  - [`AT\_L2\_CACHESHAPE`](#const-at-l2-cacheshape)
  - [`AT\_L3\_CACHESHAPE`](#const-at-l3-cacheshape)
  - [`AT\_L1I\_CACHESIZE`](#const-at-l1i-cachesize)
  - [`AT\_L1I\_CACHEGEOMETRY`](#const-at-l1i-cachegeometry)
  - [`AT\_L1D\_CACHESIZE`](#const-at-l1d-cachesize)
  - [`AT\_L1D\_CACHEGEOMETRY`](#const-at-l1d-cachegeometry)
  - [`AT\_L2\_CACHESIZE`](#const-at-l2-cachesize)
  - [`AT\_L2\_CACHEGEOMETRY`](#const-at-l2-cachegeometry)
  - [`AT\_L3\_CACHESIZE`](#const-at-l3-cachesize)
  - [`AT\_L3\_CACHEGEOMETRY`](#const-at-l3-cachegeometry)
  - [`DT\_NULL`](#const-dt-null)
  - [`DT\_NEEDED`](#const-dt-needed)
  - [`DT\_PLTRELSZ`](#const-dt-pltrelsz)
  - [`DT\_PLTGOT`](#const-dt-pltgot)
  - [`DT\_HASH`](#const-dt-hash)
  - [`DT\_STRTAB`](#const-dt-strtab)
  - [`DT\_SYMTAB`](#const-dt-symtab)
  - [`DT\_RELA`](#const-dt-rela)
  - [`DT\_RELASZ`](#const-dt-relasz)
  - [`DT\_RELAENT`](#const-dt-relaent)
  - [`DT\_STRSZ`](#const-dt-strsz)
  - [`DT\_SYMENT`](#const-dt-syment)
  - [`DT\_INIT`](#const-dt-init)
  - [`DT\_FINI`](#const-dt-fini)
  - [`DT\_SONAME`](#const-dt-soname)
  - [`DT\_RPATH`](#const-dt-rpath)
  - [`DT\_SYMBOLIC`](#const-dt-symbolic)
  - [`DT\_REL`](#const-dt-rel)
  - [`DT\_RELSZ`](#const-dt-relsz)
  - [`DT\_RELENT`](#const-dt-relent)
  - [`DT\_PLTREL`](#const-dt-pltrel)
  - [`DT\_DEBUG`](#const-dt-debug)
  - [`DT\_TEXTREL`](#const-dt-textrel)
  - [`DT\_JMPREL`](#const-dt-jmprel)
  - [`DT\_BIND\_NOW`](#const-dt-bind-now)
  - [`DT\_INIT\_ARRAY`](#const-dt-init-array)
  - [`DT\_FINI\_ARRAY`](#const-dt-fini-array)
  - [`DT\_INIT\_ARRAYSZ`](#const-dt-init-arraysz)
  - [`DT\_FINI\_ARRAYSZ`](#const-dt-fini-arraysz)
  - [`DT\_RUNPATH`](#const-dt-runpath)
  - [`DT\_FLAGS`](#const-dt-flags)
  - [`DT\_ENCODING`](#const-dt-encoding)
  - [`DT\_PREINIT\_ARRAY`](#const-dt-preinit-array)
  - [`DT\_PREINIT\_ARRAYSZ`](#const-dt-preinit-arraysz)
  - [`DT\_SYMTAB\_SHNDX`](#const-dt-symtab-shndx)
  - [`DT\_RELRSZ`](#const-dt-relrsz)
  - [`DT\_RELR`](#const-dt-relr)
  - [`DT\_RELRENT`](#const-dt-relrent)
  - [`DT\_NUM`](#const-dt-num)
  - [`DT\_LOOS`](#const-dt-loos)
  - [`DT\_HIOS`](#const-dt-hios)
  - [`DT\_LOPROC`](#const-dt-loproc)
  - [`DT\_HIPROC`](#const-dt-hiproc)
  - [`DT\_PROCNUM`](#const-dt-procnum)
  - [`DT\_VALRNGLO`](#const-dt-valrnglo)
  - [`DT\_GNU\_PRELINKED`](#const-dt-gnu-prelinked)
  - [`DT\_GNU\_CONFLICTSZ`](#const-dt-gnu-conflictsz)
  - [`DT\_GNU\_LIBLISTSZ`](#const-dt-gnu-liblistsz)
  - [`DT\_CHECKSUM`](#const-dt-checksum)
  - [`DT\_PLTPADSZ`](#const-dt-pltpadsz)
  - [`DT\_MOVEENT`](#const-dt-moveent)
  - [`DT\_MOVESZ`](#const-dt-movesz)
  - [`DT\_FEATURE\_1`](#const-dt-feature-1)
  - [`DT\_POSFLAG\_1`](#const-dt-posflag-1)
  - [`DT\_SYMINSZ`](#const-dt-syminsz)
  - [`DT\_SYMINENT`](#const-dt-syminent)
  - [`DT\_VALRNGHI`](#const-dt-valrnghi)
  - [`DT\_VALNUM`](#const-dt-valnum)
  - [`DT\_ADDRRNGLO`](#const-dt-addrrnglo)
  - [`DT\_GNU\_HASH`](#const-dt-gnu-hash)
  - [`DT\_TLSDESC\_PLT`](#const-dt-tlsdesc-plt)
  - [`DT\_TLSDESC\_GOT`](#const-dt-tlsdesc-got)
  - [`DT\_GNU\_CONFLICT`](#const-dt-gnu-conflict)
  - [`DT\_GNU\_LIBLIST`](#const-dt-gnu-liblist)
  - [`DT\_CONFIG`](#const-dt-config)
  - [`DT\_DEPAUDIT`](#const-dt-depaudit)
  - [`DT\_AUDIT`](#const-dt-audit)
  - [`DT\_PLTPAD`](#const-dt-pltpad)
  - [`DT\_MOVETAB`](#const-dt-movetab)
  - [`DT\_SYMINFO`](#const-dt-syminfo)
  - [`DT\_ADDRRNGHI`](#const-dt-addrrnghi)
  - [`DT\_ADDRNUM`](#const-dt-addrnum)
  - [`DT\_VERSYM`](#const-dt-versym)
  - [`DT\_RELACOUNT`](#const-dt-relacount)
  - [`DT\_RELCOUNT`](#const-dt-relcount)
  - [`DT\_FLAGS\_1`](#const-dt-flags-1)
  - [`DT\_VERDEF`](#const-dt-verdef)
  - [`DT\_VERDEFNUM`](#const-dt-verdefnum)
  - [`DT\_VERNEED`](#const-dt-verneed)
  - [`DT\_VERNEEDNUM`](#const-dt-verneednum)
  - [`DT\_VERSIONTAGNUM`](#const-dt-versiontagnum)
  - [`DT\_AUXILIARY`](#const-dt-auxiliary)
  - [`DT\_FILTER`](#const-dt-filter)
  - [`DT\_EXTRANUM`](#const-dt-extranum)
  - [`DT\_SPARC\_REGISTER`](#const-dt-sparc-register)
  - [`DT\_SPARC\_NUM`](#const-dt-sparc-num)
  - [`DT\_MIPS\_RLD\_VERSION`](#const-dt-mips-rld-version)
  - [`DT\_MIPS\_TIME\_STAMP`](#const-dt-mips-time-stamp)
  - [`DT\_MIPS\_ICHECKSUM`](#const-dt-mips-ichecksum)
  - [`DT\_MIPS\_IVERSION`](#const-dt-mips-iversion)
  - [`DT\_MIPS\_FLAGS`](#const-dt-mips-flags)
  - [`DT\_MIPS\_BASE\_ADDRESS`](#const-dt-mips-base-address)
  - [`DT\_MIPS\_MSYM`](#const-dt-mips-msym)
  - [`DT\_MIPS\_CONFLICT`](#const-dt-mips-conflict)
  - [`DT\_MIPS\_LIBLIST`](#const-dt-mips-liblist)
  - [`DT\_MIPS\_LOCAL\_GOTNO`](#const-dt-mips-local-gotno)
  - [`DT\_MIPS\_CONFLICTNO`](#const-dt-mips-conflictno)
  - [`DT\_MIPS\_LIBLISTNO`](#const-dt-mips-liblistno)
  - [`DT\_MIPS\_SYMTABNO`](#const-dt-mips-symtabno)
  - [`DT\_MIPS\_UNREFEXTNO`](#const-dt-mips-unrefextno)
  - [`DT\_MIPS\_GOTSYM`](#const-dt-mips-gotsym)
  - [`DT\_MIPS\_HIPAGENO`](#const-dt-mips-hipageno)
  - [`DT\_MIPS\_RLD\_MAP`](#const-dt-mips-rld-map)
  - [`DT\_MIPS\_DELTA\_CLASS`](#const-dt-mips-delta-class)
  - [`DT\_MIPS\_DELTA\_CLASS\_NO`](#const-dt-mips-delta-class-no)
  - [`DT\_MIPS\_DELTA\_INSTANCE`](#const-dt-mips-delta-instance)
  - [`DT\_MIPS\_DELTA\_INSTANCE\_NO`](#const-dt-mips-delta-instance-no)
  - [`DT\_MIPS\_DELTA\_RELOC`](#const-dt-mips-delta-reloc)
  - [`DT\_MIPS\_DELTA\_RELOC\_NO`](#const-dt-mips-delta-reloc-no)
  - [`DT\_MIPS\_DELTA\_SYM`](#const-dt-mips-delta-sym)
  - [`DT\_MIPS\_DELTA\_SYM\_NO`](#const-dt-mips-delta-sym-no)
  - [`DT\_MIPS\_DELTA\_CLASSSYM`](#const-dt-mips-delta-classsym)
  - [`DT\_MIPS\_DELTA\_CLASSSYM\_NO`](#const-dt-mips-delta-classsym-no)
  - [`DT\_MIPS\_CXX\_FLAGS`](#const-dt-mips-cxx-flags)
  - [`DT\_MIPS\_PIXIE\_INIT`](#const-dt-mips-pixie-init)
  - [`DT\_MIPS\_SYMBOL\_LIB`](#const-dt-mips-symbol-lib)
  - [`DT\_MIPS\_LOCALPAGE\_GOTIDX`](#const-dt-mips-localpage-gotidx)
  - [`DT\_MIPS\_LOCAL\_GOTIDX`](#const-dt-mips-local-gotidx)
  - [`DT\_MIPS\_HIDDEN\_GOTIDX`](#const-dt-mips-hidden-gotidx)
  - [`DT\_MIPS\_PROTECTED\_GOTIDX`](#const-dt-mips-protected-gotidx)
  - [`DT\_MIPS\_OPTIONS`](#const-dt-mips-options)
  - [`DT\_MIPS\_INTERFACE`](#const-dt-mips-interface)
  - [`DT\_MIPS\_DYNSTR\_ALIGN`](#const-dt-mips-dynstr-align)
  - [`DT\_MIPS\_INTERFACE\_SIZE`](#const-dt-mips-interface-size)
  - [`DT\_MIPS\_RLD\_TEXT\_RESOLVE\_ADDR`](#const-dt-mips-rld-text-resolve-addr)
  - [`DT\_MIPS\_PERF\_SUFFIX`](#const-dt-mips-perf-suffix)
  - [`DT\_MIPS\_COMPACT\_SIZE`](#const-dt-mips-compact-size)
  - [`DT\_MIPS\_GP\_VALUE`](#const-dt-mips-gp-value)
  - [`DT\_MIPS\_AUX\_DYNAMIC`](#const-dt-mips-aux-dynamic)
  - [`DT\_MIPS\_PLTGOT`](#const-dt-mips-pltgot)
  - [`DT\_MIPS\_RWPLT`](#const-dt-mips-rwplt)
  - [`DT\_MIPS\_RLD\_MAP\_REL`](#const-dt-mips-rld-map-rel)
  - [`DT\_MIPS\_NUM`](#const-dt-mips-num)
  - [`DT\_ALPHA\_PLTRO`](#const-dt-alpha-pltro)
  - [`DT\_ALPHA\_NUM`](#const-dt-alpha-num)
  - [`DT\_PPC\_GOT`](#const-dt-ppc-got)
  - [`DT\_PPC\_OPT`](#const-dt-ppc-opt)
  - [`DT\_PPC\_NUM`](#const-dt-ppc-num)
  - [`DT\_PPC64\_GLINK`](#const-dt-ppc64-glink)
  - [`DT\_PPC64\_OPD`](#const-dt-ppc64-opd)
  - [`DT\_PPC64\_OPDSZ`](#const-dt-ppc64-opdsz)
  - [`DT\_PPC64\_OPT`](#const-dt-ppc64-opt)
  - [`DT\_PPC64\_NUM`](#const-dt-ppc64-num)
  - [`DT\_IA\_64\_PLT\_RESERVE`](#const-dt-ia-64-plt-reserve)
  - [`DT\_IA\_64\_NUM`](#const-dt-ia-64-num)
  - [`DT\_NIOS2\_GP`](#const-dt-nios2-gp)
  - [`DF\_ORIGIN`](#const-df-origin)
  - [`DF\_SYMBOLIC`](#const-df-symbolic)
  - [`DF\_TEXTREL`](#const-df-textrel)
  - [`DF\_BIND\_NOW`](#const-df-bind-now)
  - [`DF\_STATIC\_TLS`](#const-df-static-tls)
  - [`DF\_1\_NOW`](#const-df-1-now)
  - [`DF\_1\_GLOBAL`](#const-df-1-global)
  - [`DF\_1\_GROUP`](#const-df-1-group)
  - [`DF\_1\_NODELETE`](#const-df-1-nodelete)
  - [`DF\_1\_LOADFLTR`](#const-df-1-loadfltr)
  - [`DF\_1\_INITFIRST`](#const-df-1-initfirst)
  - [`DF\_1\_NOOPEN`](#const-df-1-noopen)
  - [`DF\_1\_ORIGIN`](#const-df-1-origin)
  - [`DF\_1\_DIRECT`](#const-df-1-direct)
  - [`DF\_1\_TRANS`](#const-df-1-trans)
  - [`DF\_1\_INTERPOSE`](#const-df-1-interpose)
  - [`DF\_1\_NODEFLIB`](#const-df-1-nodeflib)
  - [`DF\_1\_NODUMP`](#const-df-1-nodump)
  - [`DF\_1\_CONFALT`](#const-df-1-confalt)
  - [`DF\_1\_ENDFILTEE`](#const-df-1-endfiltee)
  - [`DF\_1\_DISPRELDNE`](#const-df-1-dispreldne)
  - [`DF\_1\_DISPRELPND`](#const-df-1-disprelpnd)
  - [`DF\_1\_NODIRECT`](#const-df-1-nodirect)
  - [`DF\_1\_IGNMULDEF`](#const-df-1-ignmuldef)
  - [`DF\_1\_NOKSYMS`](#const-df-1-noksyms)
  - [`DF\_1\_NOHDR`](#const-df-1-nohdr)
  - [`DF\_1\_EDITED`](#const-df-1-edited)
  - [`DF\_1\_NORELOC`](#const-df-1-noreloc)
  - [`DF\_1\_SYMINTPOSE`](#const-df-1-symintpose)
  - [`DF\_1\_GLOBAUDIT`](#const-df-1-globaudit)
  - [`DF\_1\_SINGLETON`](#const-df-1-singleton)
  - [`DF\_1\_STUB`](#const-df-1-stub)
  - [`DF\_1\_PIE`](#const-df-1-pie)
  - [`VER\_FLG\_BASE`](#const-ver-flg-base)
  - [`VER\_FLG\_WEAK`](#const-ver-flg-weak)
  - [`PT\_NULL`](#const-pt-null)
  - [`PT\_LOAD`](#const-pt-load)
  - [`PT\_DYNAMIC`](#const-pt-dynamic)
  - [`PT\_INTERP`](#const-pt-interp)
  - [`PT\_NOTE`](#const-pt-note)
  - [`PT\_SHLIB`](#const-pt-shlib)
  - [`PT\_PHDR`](#const-pt-phdr)
  - [`PT\_TLS`](#const-pt-tls)
  - [`PT\_NUM`](#const-pt-num)
  - [`PT\_LOOS`](#const-pt-loos)
  - [`PT\_GNU\_EH\_FRAME`](#const-pt-gnu-eh-frame)
  - [`PT\_GNU\_STACK`](#const-pt-gnu-stack)
  - [`PT\_GNU\_RELRO`](#const-pt-gnu-relro)
  - [`PT\_LOSUNW`](#const-pt-losunw)
  - [`PT\_SUNWBSS`](#const-pt-sunwbss)
  - [`PT\_SUNWSTACK`](#const-pt-sunwstack)
  - [`PT\_HISUNW`](#const-pt-hisunw)
  - [`PT\_HIOS`](#const-pt-hios)
  - [`PT\_LOPROC`](#const-pt-loproc)
  - [`PT\_HIPROC`](#const-pt-hiproc)
  - [`SHT\_NULL`](#const-sht-null)
  - [`SHT\_PROGBITS`](#const-sht-progbits)
  - [`SHT\_SYMTAB`](#const-sht-symtab)
  - [`SHT\_STRTAB`](#const-sht-strtab)
  - [`SHT\_RELA`](#const-sht-rela)
  - [`SHT\_HASH`](#const-sht-hash)
  - [`SHT\_DYNAMIC`](#const-sht-dynamic)
  - [`SHT\_NOTE`](#const-sht-note)
  - [`SHT\_NOBITS`](#const-sht-nobits)
  - [`SHT\_REL`](#const-sht-rel)
  - [`SHT\_SHLIB`](#const-sht-shlib)
  - [`SHT\_DYNSYM`](#const-sht-dynsym)
  - [`SHT\_INIT\_ARRAY`](#const-sht-init-array)
  - [`SHT\_FINI\_ARRAY`](#const-sht-fini-array)
  - [`SHT\_PREINIT\_ARRAY`](#const-sht-preinit-array)
  - [`SHT\_GROUP`](#const-sht-group)
  - [`SHT\_SYMTAB\_SHNDX`](#const-sht-symtab-shndx)
  - [`SHT\_LOOS`](#const-sht-loos)
  - [`SHT\_LLVM\_ADDRSIG`](#const-sht-llvm-addrsig)
  - [`SHT\_GNU\_HASH`](#const-sht-gnu-hash)
  - [`SHT\_GNU\_VERDEF`](#const-sht-gnu-verdef)
  - [`SHT\_GNU\_VERNEED`](#const-sht-gnu-verneed)
  - [`SHT\_GNU\_VERSYM`](#const-sht-gnu-versym)
  - [`SHT\_HIOS`](#const-sht-hios)
  - [`SHT\_LOPROC`](#const-sht-loproc)
  - [`SHT\_X86\_64\_UNWIND`](#const-sht-x86-64-unwind)
  - [`SHT\_HIPROC`](#const-sht-hiproc)
  - [`SHT\_LOUSER`](#const-sht-louser)
  - [`SHT\_HIUSER`](#const-sht-hiuser)
  - [`NT\_GNU\_BUILD\_ID`](#const-nt-gnu-build-id)
  - [`STB\_LOCAL`](#const-stb-local)
  - [`STB\_GLOBAL`](#const-stb-global)
  - [`STB\_WEAK`](#const-stb-weak)
  - [`STB\_NUM`](#const-stb-num)
  - [`STB\_LOOS`](#const-stb-loos)
  - [`STB\_GNU\_UNIQUE`](#const-stb-gnu-unique)
  - [`STB\_HIOS`](#const-stb-hios)
  - [`STB\_LOPROC`](#const-stb-loproc)
  - [`STB\_HIPROC`](#const-stb-hiproc)
  - [`STB\_MIPS\_SPLIT\_COMMON`](#const-stb-mips-split-common)
  - [`STT\_NOTYPE`](#const-stt-notype)
  - [`STT\_OBJECT`](#const-stt-object)
  - [`STT\_FUNC`](#const-stt-func)
  - [`STT\_SECTION`](#const-stt-section)
  - [`STT\_FILE`](#const-stt-file)
  - [`STT\_COMMON`](#const-stt-common)
  - [`STT\_TLS`](#const-stt-tls)
  - [`STT\_NUM`](#const-stt-num)
  - [`STT\_LOOS`](#const-stt-loos)
  - [`STT\_GNU\_IFUNC`](#const-stt-gnu-ifunc)
  - [`STT\_HIOS`](#const-stt-hios)
  - [`STT\_LOPROC`](#const-stt-loproc)
  - [`STT\_HIPROC`](#const-stt-hiproc)
  - [`STT\_SPARC\_REGISTER`](#const-stt-sparc-register)
  - [`STT\_PARISC\_MILLICODE`](#const-stt-parisc-millicode)
  - [`STT\_HP\_OPAQUE`](#const-stt-hp-opaque)
  - [`STT\_HP\_STUB`](#const-stt-hp-stub)
  - [`STT\_ARM\_TFUNC`](#const-stt-arm-tfunc)
  - [`STT\_ARM\_16BIT`](#const-stt-arm-16bit)
  - [`MAGIC`](#const-magic)
  - [`ELFCLASSNONE`](#const-elfclassnone)
  - [`ELFCLASS32`](#const-elfclass32)
  - [`ELFCLASS64`](#const-elfclass64)
  - [`ELFCLASSNUM`](#const-elfclassnum)
  - [`ELFDATANONE`](#const-elfdatanone)
  - [`ELFDATA2LSB`](#const-elfdata2lsb)
  - [`ELFDATA2MSB`](#const-elfdata2msb)
  - [`ELFDATANUM`](#const-elfdatanum)
  - [`EI\_CLASS`](#const-ei-class)
  - [`EI\_DATA`](#const-ei-data)
  - [`EI\_VERSION`](#const-ei-version)
  - [`EI\_OSABI`](#const-ei-osabi)
  - [`EI\_ABIVERSION`](#const-ei-abiversion)
  - [`EI\_PAD`](#const-ei-pad)
  - [`EI\_NIDENT`](#const-ei-nident)
  - [`Half`](#const-half)
  - [`Word`](#const-word)
  - [`Sword`](#const-sword)
  - [`Elf32\_Xword`](#const-elf32-xword)
  - [`Elf32\_Sxword`](#const-elf32-sxword)
  - [`Elf64\_Xword`](#const-elf64-xword)
  - [`Elf64\_Sxword`](#const-elf64-sxword)
  - [`Elf32\_Addr`](#const-elf32-addr)
  - [`Elf64\_Addr`](#const-elf64-addr)
  - [`Elf32\_Off`](#const-elf32-off)
  - [`Elf64\_Off`](#const-elf64-off)
  - [`Elf32\_Section`](#const-elf32-section)
  - [`Elf64\_Section`](#const-elf64-section)
  - [`Elf32\_Relr`](#const-elf32-relr)
  - [`Elf64\_Relr`](#const-elf64-relr)
  - [`Elf32\_Conflict`](#const-elf32-conflict)
  - [`Auxv`](#const-auxv)
  - [`Ehdr`](#const-ehdr)
  - [`Phdr`](#const-phdr)
  - [`Dyn`](#const-dyn)
  - [`Rel`](#const-rel)
  - [`Rela`](#const-rela)
  - [`Relr`](#const-relr)
  - [`Shdr`](#const-shdr)
  - [`Chdr`](#const-chdr)
  - [`Sym`](#const-sym)
  - [`Addr`](#const-addr)
  - [`GRP\_COMDAT`](#const-grp-comdat)
  - [`SHF\_WRITE`](#const-shf-write)
  - [`SHF\_ALLOC`](#const-shf-alloc)
  - [`SHF\_EXECINSTR`](#const-shf-execinstr)
  - [`SHF\_MERGE`](#const-shf-merge)
  - [`SHF\_STRINGS`](#const-shf-strings)
  - [`SHF\_INFO\_LINK`](#const-shf-info-link)
  - [`SHF\_LINK\_ORDER`](#const-shf-link-order)
  - [`SHF\_OS\_NONCONFORMING`](#const-shf-os-nonconforming)
  - [`SHF\_GROUP`](#const-shf-group)
  - [`SHF\_TLS`](#const-shf-tls)
  - [`SHF\_COMPRESSED`](#const-shf-compressed)
  - [`SHF\_GNU\_RETAIN`](#const-shf-gnu-retain)
  - [`SHF\_EXCLUDE`](#const-shf-exclude)
  - [`SHF\_MASKOS`](#const-shf-maskos)
  - [`SHF\_MASKPROC`](#const-shf-maskproc)
  - [`XCORE\_SHF\_DP\_SECTION`](#const-xcore-shf-dp-section)
  - [`XCORE\_SHF\_CP\_SECTION`](#const-xcore-shf-cp-section)
  - [`SHF\_X86\_64\_LARGE`](#const-shf-x86-64-large)
  - [`SHF\_HEX\_GPREL`](#const-shf-hex-gprel)
  - [`SHF\_MIPS\_NODUPES`](#const-shf-mips-nodupes)
  - [`SHF\_MIPS\_NAMES`](#const-shf-mips-names)
  - [`SHF\_MIPS\_LOCAL`](#const-shf-mips-local)
  - [`SHF\_MIPS\_NOSTRIP`](#const-shf-mips-nostrip)
  - [`SHF\_MIPS\_GPREL`](#const-shf-mips-gprel)
  - [`SHF\_MIPS\_MERGE`](#const-shf-mips-merge)
  - [`SHF\_MIPS\_ADDR`](#const-shf-mips-addr)
  - [`SHF\_MIPS\_STRING`](#const-shf-mips-string)
  - [`SHF\_ARM\_PURECODE`](#const-shf-arm-purecode)
  - [`PF\_X`](#const-pf-x)
  - [`PF\_W`](#const-pf-w)
  - [`PF\_R`](#const-pf-r)
  - [`PF\_MASKOS`](#const-pf-maskos)
  - [`PF\_MASKPROC`](#const-pf-maskproc)
  - [`SHN\_UNDEF`](#const-shn-undef)
  - [`SHN\_LORESERVE`](#const-shn-loreserve)
  - [`SHN\_LOPROC`](#const-shn-loproc)
  - [`SHN\_HIPROC`](#const-shn-hiproc)
  - [`SHN\_LIVEPATCH`](#const-shn-livepatch)
  - [`SHN\_ABS`](#const-shn-abs)
  - [`SHN\_COMMON`](#const-shn-common)
  - [`SHN\_HIRESERVE`](#const-shn-hireserve)
  - [`ARMAG`](#const-armag)
  - [`ARFMAG`](#const-arfmag)
  - [`SYMNAME`](#const-symname)
  - [`STRNAME`](#const-strname)
  - [`SYM64NAME`](#const-sym64name)
  - [`SYMDEFNAME`](#const-symdefname)
  - [`SYMDEFSORTEDNAME`](#const-symdefsortedname)

---

## Types (54)

### <a id="type-versym"></a>`Versym`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Versym = packed struct(u16) {
    VERSION: u15,
    HIDDEN: bool,

    pub const LOCAL: Versym = @bitCast(@intFromEnum(VER_NDX.LOCAL));
    pub const GLOBAL: Versym = @bitCast(@intFromEnum(VER_NDX.GLOBAL));
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `VERSION` | `u15` | – | |
| `HIDDEN` | `bool` | – | |

</details>

---

### <a id="type-ver-ndx"></a>`VER_NDX`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const VER_NDX = enum(u16) {
    /// Symbol is local
    LOCAL = 0,
    /// Symbol is global
    GLOBAL = 1,
    /// Beginning of reserved entries
    LORESERVE = 0xff00,
    /// Symbol is to be eliminated
    ELIMINATE = 0xff01,
    UNSPECIFIED = 0xffff,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `LOCAL` | Symbol is local |
| `GLOBAL` | Symbol is global |
| `LORESERVE` | Beginning of reserved entries |
| `ELIMINATE` | Symbol is to be eliminated |
| `UNSPECIFIED` |  |
| `_` |  |

</details>

---

### <a id="type-et"></a>`ET`

<details class="declaration-card" open>
<summary>Container – File types</summary>

File types

```zig
pub const ET = enum(u16) {
    /// No file type
    NONE = 0,

    /// Relocatable file
    REL = 1,

    /// Executable file
    EXEC = 2,

    /// Shared object file
    DYN = 3,

    /// Core file
    CORE = 4,

    _,

    /// Beginning of OS-specific codes
    pub const LOOS = 0xfe00;

    /// End of OS-specific codes
    pub const HIOS = 0xfeff;

    /// Beginning of processor-specific codes
    pub const LOPROC = 0xff00;

    /// End of processor-specific codes
    pub const HIPROC = 0xffff;
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` | No file type |
| `REL` | Relocatable file |
| `EXEC` | Executable file |
| `DYN` | Shared object file |
| `CORE` | Core file |
| `_` |  |

</details>

---

### <a id="type-header"></a>`Header`

<details class="declaration-card" open>
<summary>Container – All integers are native endian</summary>

All integers are native endian.

```zig
pub const Header = struct {
    is_64: bool,
    endian: std.builtin.Endian,
    os_abi: OSABI,
    /// The meaning of this value depends on `os_abi`.
    abi_version: u8,
    type: ET,
    machine: EM,
    entry: u64,
    phoff: u64,
    shoff: u64,
    phentsize: u16,
    phnum: u16,
    shentsize: u16,
    shnum: u16,
    shstrndx: u16,

    pub fn iterateProgramHeaders(h: Header, file_reader: *std.fs.File.Reader) ProgramHeaderIterator {
        return .{
            .elf_header = h,
            .file_reader = file_reader,
        };
    }

    pub fn iterateProgramHeadersBuffer(h: Header, buf: []const u8) ProgramHeaderBufferIterator {
        return .{
            .elf_header = h,
            .buf = buf,
        };
    }

    pub fn iterateSectionHeaders(h: Header, file_reader: *std.fs.File.Reader) SectionHeaderIterator {
        return .{
            .elf_header = h,
            .file_reader = file_reader,
        };
    }

    pub fn iterateSectionHeadersBuffer(h: Header, buf: []const u8) SectionHeaderBufferIterator {
        return .{
            .elf_header = h,
            .buf = buf,
        };
    }

    pub const ReadError = std.Io.Reader.Error || error{
        InvalidElfMagic,
        InvalidElfVersion,
        InvalidElfClass,
        InvalidElfEndian,
    };

    pub fn read(r: *std.Io.Reader) ReadError!Header {
        const buf = try r.peek(@sizeOf(Elf64_Ehdr));

        if (!mem.eql(u8, buf[0..4], MAGIC)) return error.InvalidElfMagic;
        if (buf[EI_VERSION] != 1) return error.InvalidElfVersion;

        const endian: std.builtin.Endian = switch (buf[EI_DATA]) {
            ELFDATA2LSB => .little,
            ELFDATA2MSB => .big,
            else => return error.InvalidElfEndian,
        };

        return switch (buf[EI_CLASS]) {
            ELFCLASS32 => .init(try r.takeStruct(Elf32_Ehdr, endian), endian),
            ELFCLASS64 => .init(try r.takeStruct(Elf64_Ehdr, endian), endian),
            else => return error.InvalidElfClass,
        };
    }

    pub fn init(hdr: anytype, endian: std.builtin.Endian) Header {
        // Converting integers to exhaustive enums using `@enumFromInt` could cause a panic.
        comptime assert(!@typeInfo(OSABI).@"enum".is_exhaustive);
        return .{
            .is_64 = switch (@TypeOf(hdr)) {
                Elf32_Ehdr => false,
                Elf64_Ehdr => true,
                else => @compileError("bad type"),
            },
            .endian = endian,
            .os_abi = @enumFromInt(hdr.e_ident[EI_OSABI]),
            .abi_version = hdr.e_ident[EI_ABIVERSION],
            .type = hdr.e_type,
            .machine = hdr.e_machine,
            .entry = hdr.e_entry,
            .phoff = hdr.e_phoff,
            .shoff = hdr.e_shoff,
            .phentsize = hdr.e_phentsize,
            .phnum = hdr.e_phnum,
            .shentsize = hdr.e_shentsize,
            .shnum = hdr.e_shnum,
            .shstrndx = hdr.e_shstrndx,
        };
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `is_64` | `bool` | – | |
| `endian` | `std.builtin.Endian` | – | |
| `os_abi` | [`OSABI`](#type-osabi) | – | |
| `abi_version` | `u8` | – | The meaning of this value depends on \`os\_abi\`. |
| `type` | [`ET`](#type-et) | – | |
| `machine` | [`EM`](#type-em) | – | |
| `entry` | `u64` | – | |
| `phoff` | `u64` | – | |
| `shoff` | `u64` | – | |
| `phentsize` | `u16` | – | |
| `phnum` | `u16` | – | |
| `shentsize` | `u16` | – | |
| `shnum` | `u16` | – | |
| `shstrndx` | `u16` | – | |

</details>

---

### <a id="type-programheaderiterator"></a>`ProgramHeaderIterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const ProgramHeaderIterator = struct {
    elf_header: Header,
    file_reader: *std.fs.File.Reader,
    index: usize = 0,

    pub fn next(it: *ProgramHeaderIterator) !?Elf64_Phdr {
        if (it.index >= it.elf_header.phnum) return null;
        defer it.index += 1;

        const size: u64 = if (it.elf_header.is_64) @sizeOf(Elf64_Phdr) else @sizeOf(Elf32_Phdr);
        const offset = it.elf_header.phoff + size * it.index;
        try it.file_reader.seekTo(offset);

        return takePhdr(&it.file_reader.interface, it.elf_header);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `elf_header` | [`Header`](#type-header) | – | |
| `file_reader` | `*std.fs.File.Reader` | – | |
| `index` | `usize` | `0` | |

</details>

---

### <a id="type-programheaderbufferiterator"></a>`ProgramHeaderBufferIterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const ProgramHeaderBufferIterator = struct {
    elf_header: Header,
    buf: []const u8,
    index: usize = 0,

    pub fn next(it: *ProgramHeaderBufferIterator) !?Elf64_Phdr {
        if (it.index >= it.elf_header.phnum) return null;
        defer it.index += 1;

        const size: u64 = if (it.elf_header.is_64) @sizeOf(Elf64_Phdr) else @sizeOf(Elf32_Phdr);
        const offset = it.elf_header.phoff + size * it.index;
        var reader = std.Io.Reader.fixed(it.buf[offset..]);

        return takePhdr(&reader, it.elf_header);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `elf_header` | [`Header`](#type-header) | – | |
| `buf` | `[]const u8` | – | |
| `index` | `usize` | `0` | |

</details>

---

### <a id="type-sectionheaderiterator"></a>`SectionHeaderIterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const SectionHeaderIterator = struct {
    elf_header: Header,
    file_reader: *std.fs.File.Reader,
    index: usize = 0,

    pub fn next(it: *SectionHeaderIterator) !?Elf64_Shdr {
        if (it.index >= it.elf_header.shnum) return null;
        defer it.index += 1;

        const size: u64 = if (it.elf_header.is_64) @sizeOf(Elf64_Shdr) else @sizeOf(Elf32_Shdr);
        const offset = it.elf_header.shoff + size * it.index;
        try it.file_reader.seekTo(offset);

        return takeShdr(&it.file_reader.interface, it.elf_header);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `elf_header` | [`Header`](#type-header) | – | |
| `file_reader` | `*std.fs.File.Reader` | – | |
| `index` | `usize` | `0` | |

</details>

---

### <a id="type-sectionheaderbufferiterator"></a>`SectionHeaderBufferIterator`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const SectionHeaderBufferIterator = struct {
    elf_header: Header,
    buf: []const u8,
    index: usize = 0,

    pub fn next(it: *SectionHeaderBufferIterator) !?Elf64_Shdr {
        if (it.index >= it.elf_header.shnum) return null;
        defer it.index += 1;

        const size: u64 = if (it.elf_header.is_64) @sizeOf(Elf64_Shdr) else @sizeOf(Elf32_Shdr);
        const offset = it.elf_header.shoff + size * it.index;
        var reader = std.Io.Reader.fixed(it.buf[offset..]);

        return takeShdr(&reader, it.elf_header);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `elf_header` | [`Header`](#type-header) | – | |
| `buf` | `[]const u8` | – | |
| `index` | `usize` | `0` | |

</details>

---

### <a id="type-elf32-ehdr"></a>`Elf32_Ehdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Ehdr = extern struct {
    e_ident: [EI_NIDENT]u8,
    e_type: ET,
    e_machine: EM,
    e_version: Word,
    e_entry: Elf32_Addr,
    e_phoff: Elf32_Off,
    e_shoff: Elf32_Off,
    e_flags: Word,
    e_ehsize: Half,
    e_phentsize: Half,
    e_phnum: Half,
    e_shentsize: Half,
    e_shnum: Half,
    e_shstrndx: Half,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `e_ident` | `[EI_NIDENT]u8` | – | |
| `e_type` | [`ET`](#type-et) | – | |
| `e_machine` | [`EM`](#type-em) | – | |
| `e_version` | [`Word`](#const-word) | – | |
| `e_entry` | [`Elf32_Addr`](#const-elf32-addr) | – | |
| `e_phoff` | [`Elf32_Off`](#const-elf32-off) | – | |
| `e_shoff` | [`Elf32_Off`](#const-elf32-off) | – | |
| `e_flags` | [`Word`](#const-word) | – | |
| `e_ehsize` | [`Half`](#const-half) | – | |
| `e_phentsize` | [`Half`](#const-half) | – | |
| `e_phnum` | [`Half`](#const-half) | – | |
| `e_shentsize` | [`Half`](#const-half) | – | |
| `e_shnum` | [`Half`](#const-half) | – | |
| `e_shstrndx` | [`Half`](#const-half) | – | |

</details>

---

### <a id="type-elf64-ehdr"></a>`Elf64_Ehdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Ehdr = extern struct {
    e_ident: [EI_NIDENT]u8,
    e_type: ET,
    e_machine: EM,
    e_version: Word,
    e_entry: Elf64_Addr,
    e_phoff: Elf64_Off,
    e_shoff: Elf64_Off,
    e_flags: Word,
    e_ehsize: Half,
    e_phentsize: Half,
    e_phnum: Half,
    e_shentsize: Half,
    e_shnum: Half,
    e_shstrndx: Half,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `e_ident` | `[EI_NIDENT]u8` | – | |
| `e_type` | [`ET`](#type-et) | – | |
| `e_machine` | [`EM`](#type-em) | – | |
| `e_version` | [`Word`](#const-word) | – | |
| `e_entry` | [`Elf64_Addr`](#const-elf64-addr) | – | |
| `e_phoff` | [`Elf64_Off`](#const-elf64-off) | – | |
| `e_shoff` | [`Elf64_Off`](#const-elf64-off) | – | |
| `e_flags` | [`Word`](#const-word) | – | |
| `e_ehsize` | [`Half`](#const-half) | – | |
| `e_phentsize` | [`Half`](#const-half) | – | |
| `e_phnum` | [`Half`](#const-half) | – | |
| `e_shentsize` | [`Half`](#const-half) | – | |
| `e_shnum` | [`Half`](#const-half) | – | |
| `e_shstrndx` | [`Half`](#const-half) | – | |

</details>

---

### <a id="type-elf32-phdr"></a>`Elf32_Phdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Phdr = extern struct {
    p_type: Word,
    p_offset: Elf32_Off,
    p_vaddr: Elf32_Addr,
    p_paddr: Elf32_Addr,
    p_filesz: Word,
    p_memsz: Word,
    p_flags: Word,
    p_align: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `p_type` | [`Word`](#const-word) | – | |
| `p_offset` | [`Elf32_Off`](#const-elf32-off) | – | |
| `p_vaddr` | [`Elf32_Addr`](#const-elf32-addr) | – | |
| `p_paddr` | [`Elf32_Addr`](#const-elf32-addr) | – | |
| `p_filesz` | [`Word`](#const-word) | – | |
| `p_memsz` | [`Word`](#const-word) | – | |
| `p_flags` | [`Word`](#const-word) | – | |
| `p_align` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf64-phdr"></a>`Elf64_Phdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Phdr = extern struct {
    p_type: Word,
    p_flags: Word,
    p_offset: Elf64_Off,
    p_vaddr: Elf64_Addr,
    p_paddr: Elf64_Addr,
    p_filesz: Elf64_Xword,
    p_memsz: Elf64_Xword,
    p_align: Elf64_Xword,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `p_type` | [`Word`](#const-word) | – | |
| `p_flags` | [`Word`](#const-word) | – | |
| `p_offset` | [`Elf64_Off`](#const-elf64-off) | – | |
| `p_vaddr` | [`Elf64_Addr`](#const-elf64-addr) | – | |
| `p_paddr` | [`Elf64_Addr`](#const-elf64-addr) | – | |
| `p_filesz` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `p_memsz` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `p_align` | [`Elf64_Xword`](#const-elf64-xword) | – | |

</details>

---

### <a id="type-elf32-shdr"></a>`Elf32_Shdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Shdr = extern struct {
    sh_name: Word,
    sh_type: Word,
    sh_flags: Word,
    sh_addr: Elf32_Addr,
    sh_offset: Elf32_Off,
    sh_size: Word,
    sh_link: Word,
    sh_info: Word,
    sh_addralign: Word,
    sh_entsize: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `sh_name` | [`Word`](#const-word) | – | |
| `sh_type` | [`Word`](#const-word) | – | |
| `sh_flags` | [`Word`](#const-word) | – | |
| `sh_addr` | [`Elf32_Addr`](#const-elf32-addr) | – | |
| `sh_offset` | [`Elf32_Off`](#const-elf32-off) | – | |
| `sh_size` | [`Word`](#const-word) | – | |
| `sh_link` | [`Word`](#const-word) | – | |
| `sh_info` | [`Word`](#const-word) | – | |
| `sh_addralign` | [`Word`](#const-word) | – | |
| `sh_entsize` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf64-shdr"></a>`Elf64_Shdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Shdr = extern struct {
    sh_name: Word,
    sh_type: Word,
    sh_flags: Elf64_Xword,
    sh_addr: Elf64_Addr,
    sh_offset: Elf64_Off,
    sh_size: Elf64_Xword,
    sh_link: Word,
    sh_info: Word,
    sh_addralign: Elf64_Xword,
    sh_entsize: Elf64_Xword,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `sh_name` | [`Word`](#const-word) | – | |
| `sh_type` | [`Word`](#const-word) | – | |
| `sh_flags` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `sh_addr` | [`Elf64_Addr`](#const-elf64-addr) | – | |
| `sh_offset` | [`Elf64_Off`](#const-elf64-off) | – | |
| `sh_size` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `sh_link` | [`Word`](#const-word) | – | |
| `sh_info` | [`Word`](#const-word) | – | |
| `sh_addralign` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `sh_entsize` | [`Elf64_Xword`](#const-elf64-xword) | – | |

</details>

---

### <a id="type-elf32-chdr"></a>`Elf32_Chdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Chdr = extern struct {
    ch_type: COMPRESS,
    ch_size: Word,
    ch_addralign: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ch_type` | [`COMPRESS`](#type-compress) | – | |
| `ch_size` | [`Word`](#const-word) | – | |
| `ch_addralign` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf64-chdr"></a>`Elf64_Chdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Chdr = extern struct {
    ch_type: COMPRESS,
    ch_reserved: Word = 0,
    ch_size: Elf64_Xword,
    ch_addralign: Elf64_Xword,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ch_type` | [`COMPRESS`](#type-compress) | – | |
| `ch_reserved` | [`Word`](#const-word) | `0` | |
| `ch_size` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `ch_addralign` | [`Elf64_Xword`](#const-elf64-xword) | – | |

</details>

---

### <a id="type-elf32-sym"></a>`Elf32_Sym`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Sym = extern struct {
    st_name: Word,
    st_value: Elf32_Addr,
    st_size: Word,
    st_info: u8,
    st_other: u8,
    st_shndx: Elf32_Section,

    pub inline fn st_type(self: @This()) u4 {
        return @truncate(self.st_info);
    }
    pub inline fn st_bind(self: @This()) u4 {
        return @truncate(self.st_info >> 4);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `st_name` | [`Word`](#const-word) | – | |
| `st_value` | [`Elf32_Addr`](#const-elf32-addr) | – | |
| `st_size` | [`Word`](#const-word) | – | |
| `st_info` | `u8` | – | |
| `st_other` | `u8` | – | |
| `st_shndx` | [`Elf32_Section`](#const-elf32-section) | – | |

</details>

---

### <a id="type-elf64-sym"></a>`Elf64_Sym`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Sym = extern struct {
    st_name: Word,
    st_info: u8,
    st_other: u8,
    st_shndx: Elf64_Section,
    st_value: Elf64_Addr,
    st_size: Elf64_Xword,

    pub inline fn st_type(self: @This()) u4 {
        return @truncate(self.st_info);
    }
    pub inline fn st_bind(self: @This()) u4 {
        return @truncate(self.st_info >> 4);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `st_name` | [`Word`](#const-word) | – | |
| `st_info` | `u8` | – | |
| `st_other` | `u8` | – | |
| `st_shndx` | [`Elf64_Section`](#const-elf64-section) | – | |
| `st_value` | [`Elf64_Addr`](#const-elf64-addr) | – | |
| `st_size` | [`Elf64_Xword`](#const-elf64-xword) | – | |

</details>

---

### <a id="type-elf32-syminfo"></a>`Elf32_Syminfo`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Syminfo = extern struct {
    si_boundto: Half,
    si_flags: Half,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `si_boundto` | [`Half`](#const-half) | – | |
| `si_flags` | [`Half`](#const-half) | – | |

</details>

---

### <a id="type-elf64-syminfo"></a>`Elf64_Syminfo`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Syminfo = extern struct {
    si_boundto: Half,
    si_flags: Half,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `si_boundto` | [`Half`](#const-half) | – | |
| `si_flags` | [`Half`](#const-half) | – | |

</details>

---

### <a id="type-elf32-rel"></a>`Elf32_Rel`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Rel = extern struct {
    r_offset: Elf32_Addr,
    r_info: Word,

    pub inline fn r_sym(self: @This()) u24 {
        return @truncate(self.r_info >> 8);
    }
    pub inline fn r_type(self: @This()) u8 {
        return @truncate(self.r_info);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `r_offset` | [`Elf32_Addr`](#const-elf32-addr) | – | |
| `r_info` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf64-rel"></a>`Elf64_Rel`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Rel = extern struct {
    r_offset: Elf64_Addr,
    r_info: Elf64_Xword,

    pub inline fn r_sym(self: @This()) u32 {
        return @truncate(self.r_info >> 32);
    }
    pub inline fn r_type(self: @This()) u32 {
        return @truncate(self.r_info);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `r_offset` | [`Elf64_Addr`](#const-elf64-addr) | – | |
| `r_info` | [`Elf64_Xword`](#const-elf64-xword) | – | |

</details>

---

### <a id="type-elf32-rela"></a>`Elf32_Rela`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Rela = extern struct {
    r_offset: Elf32_Addr,
    r_info: Word,
    r_addend: Sword,

    pub inline fn r_sym(self: @This()) u24 {
        return @truncate(self.r_info >> 8);
    }
    pub inline fn r_type(self: @This()) u8 {
        return @truncate(self.r_info);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `r_offset` | [`Elf32_Addr`](#const-elf32-addr) | – | |
| `r_info` | [`Word`](#const-word) | – | |
| `r_addend` | [`Sword`](#const-sword) | – | |

</details>

---

### <a id="type-elf64-rela"></a>`Elf64_Rela`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Rela = extern struct {
    r_offset: Elf64_Addr,
    r_info: Elf64_Xword,
    r_addend: Elf64_Sxword,

    pub inline fn r_sym(self: @This()) u32 {
        return @truncate(self.r_info >> 32);
    }
    pub inline fn r_type(self: @This()) u32 {
        return @truncate(self.r_info);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `r_offset` | [`Elf64_Addr`](#const-elf64-addr) | – | |
| `r_info` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `r_addend` | [`Elf64_Sxword`](#const-elf64-sxword) | – | |

</details>

---

### <a id="type-elf32-dyn"></a>`Elf32_Dyn`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Dyn = extern struct {
    d_tag: Sword,
    d_val: Elf32_Addr,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `d_tag` | [`Sword`](#const-sword) | – | |
| `d_val` | [`Elf32_Addr`](#const-elf32-addr) | – | |

</details>

---

### <a id="type-elf64-dyn"></a>`Elf64_Dyn`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Dyn = extern struct {
    d_tag: Elf64_Sxword,
    d_val: Elf64_Addr,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `d_tag` | [`Elf64_Sxword`](#const-elf64-sxword) | – | |
| `d_val` | [`Elf64_Addr`](#const-elf64-addr) | – | |

</details>

---

### <a id="type-verdef"></a>`Verdef`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Verdef = extern struct {
    version: Half,
    flags: Half,
    ndx: VER_NDX,
    cnt: Half,
    hash: Word,
    aux: Word,
    next: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `version` | [`Half`](#const-half) | – | |
| `flags` | [`Half`](#const-half) | – | |
| `ndx` | [`VER_NDX`](#type-ver-ndx) | – | |
| `cnt` | [`Half`](#const-half) | – | |
| `hash` | [`Word`](#const-word) | – | |
| `aux` | [`Word`](#const-word) | – | |
| `next` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-verdaux"></a>`Verdaux`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Verdaux = extern struct {
    name: Word,
    next: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | [`Word`](#const-word) | – | |
| `next` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf32-verneed"></a>`Elf32_Verneed`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Verneed = extern struct {
    vn_version: Half,
    vn_cnt: Half,
    vn_file: Word,
    vn_aux: Word,
    vn_next: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `vn_version` | [`Half`](#const-half) | – | |
| `vn_cnt` | [`Half`](#const-half) | – | |
| `vn_file` | [`Word`](#const-word) | – | |
| `vn_aux` | [`Word`](#const-word) | – | |
| `vn_next` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf64-verneed"></a>`Elf64_Verneed`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Verneed = extern struct {
    vn_version: Half,
    vn_cnt: Half,
    vn_file: Word,
    vn_aux: Word,
    vn_next: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `vn_version` | [`Half`](#const-half) | – | |
| `vn_cnt` | [`Half`](#const-half) | – | |
| `vn_file` | [`Word`](#const-word) | – | |
| `vn_aux` | [`Word`](#const-word) | – | |
| `vn_next` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-vernaux"></a>`Vernaux`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Vernaux = extern struct {
    hash: Word,
    flags: Half,
    other: Half,
    name: Word,
    next: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `hash` | [`Word`](#const-word) | – | |
| `flags` | [`Half`](#const-half) | – | |
| `other` | [`Half`](#const-half) | – | |
| `name` | [`Word`](#const-word) | – | |
| `next` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf32-auxv-t"></a>`Elf32_auxv_t`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_auxv_t = extern struct {
    a_type: u32,
    a_un: extern union {
        a_val: u32,
    },
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `a_type` | `u32` | – | |
| `a_un` | See note[^type-elf32-auxv-t-a-un-type-0] | – | |


[^type-elf32-auxv-t-a-un-type-0]:
    Type for field `a_un` of `Elf32_auxv_t`:

    ```zig
    extern union {
            a_val: u32,
        }
    ```

</details>

---

### <a id="type-elf64-auxv-t"></a>`Elf64_auxv_t`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_auxv_t = extern struct {
    a_type: u64,
    a_un: extern union {
        a_val: u64,
    },
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `a_type` | `u64` | – | |
| `a_un` | See note[^type-elf64-auxv-t-a-un-type-0] | – | |


[^type-elf64-auxv-t-a-un-type-0]:
    Type for field `a_un` of `Elf64_auxv_t`:

    ```zig
    extern union {
            a_val: u64,
        }
    ```

</details>

---

### <a id="type-elf32-nhdr"></a>`Elf32_Nhdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Nhdr = extern struct {
    n_namesz: Word,
    n_descsz: Word,
    n_type: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `n_namesz` | [`Word`](#const-word) | – | |
| `n_descsz` | [`Word`](#const-word) | – | |
| `n_type` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf64-nhdr"></a>`Elf64_Nhdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Nhdr = extern struct {
    n_namesz: Word,
    n_descsz: Word,
    n_type: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `n_namesz` | [`Word`](#const-word) | – | |
| `n_descsz` | [`Word`](#const-word) | – | |
| `n_type` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf32-move"></a>`Elf32_Move`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Move = extern struct {
    m_value: Elf32_Xword,
    m_info: Word,
    m_poffset: Word,
    m_repeat: Half,
    m_stride: Half,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `m_value` | [`Elf32_Xword`](#const-elf32-xword) | – | |
| `m_info` | [`Word`](#const-word) | – | |
| `m_poffset` | [`Word`](#const-word) | – | |
| `m_repeat` | [`Half`](#const-half) | – | |
| `m_stride` | [`Half`](#const-half) | – | |

</details>

---

### <a id="type-elf64-move"></a>`Elf64_Move`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Move = extern struct {
    m_value: Elf64_Xword,
    m_info: Elf64_Xword,
    m_poffset: Elf64_Xword,
    m_repeat: Half,
    m_stride: Half,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `m_value` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `m_info` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `m_poffset` | [`Elf64_Xword`](#const-elf64-xword) | – | |
| `m_repeat` | [`Half`](#const-half) | – | |
| `m_stride` | [`Half`](#const-half) | – | |

</details>

---

### <a id="type-elf32-gptab"></a>`Elf32_gptab`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_gptab = extern union {
    gt_header: extern struct {
        gt_current_g_value: Word,
        gt_unused: Word,
    },
    gt_entry: extern struct {
        gt_g_value: Word,
        gt_bytes: Word,
    },
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `gt_header` | See note[^type-elf32-gptab-gt-header-type-0] | – | |
| `gt_entry` | See note[^type-elf32-gptab-gt-entry-type-1] | – | |


[^type-elf32-gptab-gt-header-type-0]:
    Type for field `gt_header` of `Elf32_gptab`:

    ```zig
    extern struct {
            gt_current_g_value: Word,
            gt_unused: Word,
        }
    ```

[^type-elf32-gptab-gt-entry-type-1]:
    Type for field `gt_entry` of `Elf32_gptab`:

    ```zig
    extern struct {
            gt_g_value: Word,
            gt_bytes: Word,
        }
    ```

</details>

---

### <a id="type-elf32-reginfo"></a>`Elf32_RegInfo`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_RegInfo = extern struct {
    ri_gprmask: Word,
    ri_cprmask: [4]Word,
    ri_gp_value: Sword,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ri_gprmask` | [`Word`](#const-word) | – | |
| `ri_cprmask` | [`[4]Word`](#const-word) | – | |
| `ri_gp_value` | [`Sword`](#const-sword) | – | |

</details>

---

### <a id="type-elf-options"></a>`Elf_Options`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf_Options = extern struct {
    kind: u8,
    size: u8,
    section: Elf32_Section,
    info: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `kind` | `u8` | – | |
| `size` | `u8` | – | |
| `section` | [`Elf32_Section`](#const-elf32-section) | – | |
| `info` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf-options-hw"></a>`Elf_Options_Hw`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf_Options_Hw = extern struct {
    hwp_flags1: Word,
    hwp_flags2: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `hwp_flags1` | [`Word`](#const-word) | – | |
| `hwp_flags2` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf32-lib"></a>`Elf32_Lib`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf32_Lib = extern struct {
    l_name: Word,
    l_time_stamp: Word,
    l_checksum: Word,
    l_version: Word,
    l_flags: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `l_name` | [`Word`](#const-word) | – | |
| `l_time_stamp` | [`Word`](#const-word) | – | |
| `l_checksum` | [`Word`](#const-word) | – | |
| `l_version` | [`Word`](#const-word) | – | |
| `l_flags` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf64-lib"></a>`Elf64_Lib`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf64_Lib = extern struct {
    l_name: Word,
    l_time_stamp: Word,
    l_checksum: Word,
    l_version: Word,
    l_flags: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `l_name` | [`Word`](#const-word) | – | |
| `l_time_stamp` | [`Word`](#const-word) | – | |
| `l_checksum` | [`Word`](#const-word) | – | |
| `l_version` | [`Word`](#const-word) | – | |
| `l_flags` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-elf-mips-abiflags-v0"></a>`Elf_MIPS_ABIFlags_v0`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Elf_MIPS_ABIFlags_v0 = extern struct {
    version: Half,
    isa_level: u8,
    isa_rev: u8,
    gpr_size: u8,
    cpr1_size: u8,
    cpr2_size: u8,
    fp_abi: u8,
    isa_ext: Word,
    ases: Word,
    flags1: Word,
    flags2: Word,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `version` | [`Half`](#const-half) | – | |
| `isa_level` | `u8` | – | |
| `isa_rev` | `u8` | – | |
| `gpr_size` | `u8` | – | |
| `cpr1_size` | `u8` | – | |
| `cpr2_size` | `u8` | – | |
| `fp_abi` | `u8` | – | |
| `isa_ext` | [`Word`](#const-word) | – | |
| `ases` | [`Word`](#const-word) | – | |
| `flags1` | [`Word`](#const-word) | – | |
| `flags2` | [`Word`](#const-word) | – | |

</details>

---

### <a id="type-osabi"></a>`OSABI`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const OSABI = enum(u8) {
    /// UNIX System V ABI
    NONE = 0,
    /// HP-UX operating system
    HPUX = 1,
    /// NetBSD
    NETBSD = 2,
    /// GNU (Hurd/Linux)
    GNU = 3,
    /// Solaris
    SOLARIS = 6,
    /// AIX
    AIX = 7,
    /// IRIX
    IRIX = 8,
    /// FreeBSD
    FREEBSD = 9,
    /// TRU64 UNIX
    TRU64 = 10,
    /// Novell Modesto
    MODESTO = 11,
    /// OpenBSD
    OPENBSD = 12,
    /// OpenVMS
    OPENVMS = 13,
    /// Hewlett-Packard Non-Stop Kernel
    NSK = 14,
    /// AROS
    AROS = 15,
    /// FenixOS
    FENIXOS = 16,
    /// Nuxi CloudABI
    CLOUDABI = 17,
    /// Stratus Technologies OpenVOS
    OPENVOS = 18,
    /// NVIDIA CUDA architecture
    CUDA = 51,
    /// AMD HSA Runtime
    AMDGPU_HSA = 64,
    /// AMD PAL Runtime
    AMDGPU_PAL = 65,
    /// AMD Mesa3D Runtime
    AMDGPU_MESA3D = 66,
    /// ARM
    ARM = 97,
    /// Standalone (embedded) application
    STANDALONE = 255,

    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` | UNIX System V ABI |
| `HPUX` | HP-UX operating system |
| `NETBSD` | NetBSD |
| `GNU` | GNU (Hurd/Linux) |
| `SOLARIS` | Solaris |
| `AIX` | AIX |
| `IRIX` | IRIX |
| `FREEBSD` | FreeBSD |
| `TRU64` | TRU64 UNIX |
| `MODESTO` | Novell Modesto |
| `OPENBSD` | OpenBSD |
| `OPENVMS` | OpenVMS |
| `NSK` | Hewlett-Packard Non-Stop Kernel |
| `AROS` | AROS |
| `FENIXOS` | FenixOS |
| `CLOUDABI` | Nuxi CloudABI |
| `OPENVOS` | Stratus Technologies OpenVOS |
| `CUDA` | NVIDIA CUDA architecture |
| `AMDGPU_HSA` | AMD HSA Runtime |
| `AMDGPU_PAL` | AMD PAL Runtime |
| `AMDGPU_MESA3D` | AMD Mesa3D Runtime |
| `ARM` | ARM |
| `STANDALONE` | Standalone (embedded) application |
| `_` |  |

</details>

---

### <a id="type-em"></a>`EM`

<details class="declaration-card" open>
<summary>Container – Machine architectures</summary>

Machine architectures.

See current registered ELF machine architectures at:
http://www.sco.com/developers/gabi/latest/ch4.eheader.html

```zig
pub const EM = enum(u16) {
    /// No machine
    NONE = 0,
    /// AT&T WE 32100
    M32 = 1,
    /// SUN SPARC
    SPARC = 2,
    /// Intel 80386
    @"386" = 3,
    /// Motorola m68k family
    @"68K" = 4,
    /// Motorola m88k family
    @"88K" = 5,
    /// Intel MCU
    IAMCU = 6,
    /// Intel 80860
    @"860" = 7,
    /// MIPS R3000 (officially, big-endian only)
    MIPS = 8,
    /// IBM System/370
    S370 = 9,
    /// MIPS R3000 (and R4000) little-endian, Oct 4 1993 Draft (deprecated)
    MIPS_RS3_LE = 10,
    /// Old version of Sparc v9, from before the ABI (deprecated)
    OLD_SPARCV9 = 11,
    /// HPPA
    PARISC = 15,
    /// Fujitsu VPP500 (also old version of PowerPC; deprecated)
    VPP500 = 17,
    /// Sun's "v8plus"
    SPARC32PLUS = 18,
    /// Intel 80960
    @"960" = 19,
    /// PowerPC
    PPC = 20,
    /// 64-bit PowerPC
    PPC64 = 21,
    /// IBM S/390
    S390 = 22,
    /// Sony/Toshiba/IBM SPU
    SPU = 23,
    /// NEC V800 series
    V800 = 36,
    /// Fujitsu FR20
    FR20 = 37,
    /// TRW RH32
    RH32 = 38,
    /// Motorola M*Core, aka RCE (also Fujitsu MMA)
    MCORE = 39,
    /// ARM
    ARM = 40,
    /// Digital Alpha
    OLD_ALPHA = 41,
    /// Renesas (formerly Hitachi) / SuperH SH
    SH = 42,
    /// SPARC v9 64-bit
    SPARCV9 = 43,
    /// Siemens Tricore embedded processor
    TRICORE = 44,
    /// ARC Cores
    ARC = 45,
    /// Renesas (formerly Hitachi) H8/300
    H8_300 = 46,
    /// Renesas (formerly Hitachi) H8/300H
    H8_300H = 47,
    /// Renesas (formerly Hitachi) H8S
    H8S = 48,
    /// Renesas (formerly Hitachi) H8/500
    H8_500 = 49,
    /// Intel IA-64 Processor
    IA_64 = 50,
    /// Stanford MIPS-X
    MIPS_X = 51,
    /// Motorola Coldfire
    COLDFIRE = 52,
    /// Motorola M68HC12
    @"68HC12" = 53,
    /// Fujitsu Multimedia Accelerator
    MMA = 54,
    /// Siemens PCP
    PCP = 55,
    /// Sony nCPU embedded RISC processor
    NCPU = 56,
    /// Denso NDR1 microprocessor
    NDR1 = 57,
    /// Motorola Star*Core processor
    STARCORE = 58,
    /// Toyota ME16 processor
    ME16 = 59,
    /// STMicroelectronics ST100 processor
    ST100 = 60,
    /// Advanced Logic Corp. TinyJ embedded processor
    TINYJ = 61,
    /// Advanced Micro Devices X86-64 processor
    X86_64 = 62,
    /// Sony DSP Processor
    PDSP = 63,
    /// Digital Equipment Corp. PDP-10
    PDP10 = 64,
    /// Digital Equipment Corp. PDP-11
    PDP11 = 65,
    /// Siemens FX66 microcontroller
    FX66 = 66,
    /// STMicroelectronics ST9+ 8/16 bit microcontroller
    ST9PLUS = 67,
    /// STMicroelectronics ST7 8-bit microcontroller
    ST7 = 68,
    /// Motorola MC68HC16 Microcontroller
    @"68HC16" = 69,
    /// Motorola MC68HC11 Microcontroller
    @"68HC11" = 70,
    /// Motorola MC68HC08 Microcontroller
    @"68HC08" = 71,
    /// Motorola MC68HC05 Microcontroller
    @"68HC05" = 72,
    /// Silicon Graphics SVx
    SVX = 73,
    /// STMicroelectronics ST19 8-bit cpu
    ST19 = 74,
    /// Digital VAX
    VAX = 75,
    /// Axis Communications 32-bit embedded processor
    CRIS = 76,
    /// Infineon Technologies 32-bit embedded cpu
    JAVELIN = 77,
    /// Element 14 64-bit DSP processor
    FIREPATH = 78,
    /// LSI Logic's 16-bit DSP processor
    ZSP = 79,
    /// Donald Knuth's educational 64-bit processor
    MMIX = 80,
    /// Harvard's machine-independent format
    HUANY = 81,
    /// SiTera Prism
    PRISM = 82,
    /// Atmel AVR 8-bit microcontroller
    AVR = 83,
    /// Fujitsu FR30
    FR30 = 84,
    /// Mitsubishi D10V
    D10V = 85,
    /// Mitsubishi D30V
    D30V = 86,
    /// Renesas V850 (formerly NEC V850)
    V850 = 87,
    /// Renesas M32R (formerly Mitsubishi M32R)
    M32R = 88,
    /// Matsushita MN10300
    MN10300 = 89,
    /// Matsushita MN10200
    MN10200 = 90,
    /// picoJava
    PJ = 91,
    /// OpenRISC 1000 32-bit embedded processor
    OR1K = 92,
    /// ARC International ARCompact processor
    ARC_COMPACT = 93,
    /// Tensilica Xtensa Architecture
    XTENSA = 94,
    /// Alphamosaic VideoCore processor (also old Sunplus S+core7 backend magic number)
    VIDEOCORE = 95,
    /// Thompson Multimedia General Purpose Processor
    TMM_GPP = 96,
    /// National Semiconductor 32000 series
    NS32K = 97,
    /// Tenor Network TPC processor
    TPC = 98,
    /// Trebia SNP 1000 processor (also old value for picoJava; deprecated)
    SNP1K = 99,
    /// STMicroelectronics ST200 microcontroller
    ST200 = 100,
    /// Ubicom IP2022 micro controller
    IP2K = 101,
    /// MAX Processor
    MAX = 102,
    /// National Semiconductor CompactRISC
    CR = 103,
    /// Fujitsu F2MC16
    F2MC16 = 104,
    /// TI msp430 micro controller
    MSP430 = 105,
    /// ADI Blackfin
    BLACKFIN = 106,
    /// S1C33 Family of Seiko Epson processors
    SE_C33 = 107,
    /// Sharp embedded microprocessor
    SEP = 108,
    /// Arca RISC Microprocessor
    ARCA = 109,
    /// Microprocessor series from PKU-Unity Ltd. and MPRC of Peking University
    UNICORE = 110,
    /// eXcess: 16/32/64-bit configurable embedded CPU
    EXCESS = 111,
    /// Icera Semiconductor Inc. Deep Execution Processor
    DXP = 112,
    /// Altera Nios II soft-core processor
    ALTERA_NIOS2 = 113,
    /// National Semiconductor CRX
    CRX = 114,
    /// Motorola XGATE embedded processor (also old value for National Semiconductor CompactRISC; deprecated)
    XGATE = 115,
    /// Infineon C16x/XC16x processor
    C166 = 116,
    /// Renesas M16C series microprocessors
    M16C = 117,
    /// Microchip Technology dsPIC30F Digital Signal Controller
    DSPIC30F = 118,
    /// Freescale Communication Engine RISC core
    CE = 119,
    /// Renesas M32C series microprocessors
    M32C = 120,
    /// Altium TSK3000 core
    TSK3000 = 131,
    /// Freescale RS08 embedded processor
    RS08 = 132,
    /// Analog Devices SHARC family of 32-bit DSP processors
    SHARC = 133,
    /// Cyan Technology eCOG2 microprocessor
    ECOG2 = 134,
    /// Sunplus S+core (and S+core7) RISC processor
    SCORE = 135,
    /// New Japan Radio (NJR) 24-bit DSP Processor
    DSP24 = 136,
    /// Broadcom VideoCore III processor
    VIDEOCORE3 = 137,
    /// RISC processor for Lattice FPGA architecture
    LATTICEMICO32 = 138,
    /// Seiko Epson C17 family
    SE_C17 = 139,
    /// Texas Instruments TMS320C6000 DSP family
    TI_C6000 = 140,
    /// Texas Instruments TMS320C2000 DSP family
    TI_C2000 = 141,
    /// Texas Instruments TMS320C55x DSP family
    TI_C5500 = 142,
    /// Texas Instruments Programmable Realtime Unit
    TI_PRU = 144,
    /// STMicroelectronics 64bit VLIW Data Signal Processor
    MMDSP_PLUS = 160,
    /// Cypress M8C microprocessor
    CYPRESS_M8C = 161,
    /// Renesas R32C series microprocessors
    R32C = 162,
    /// NXP Semiconductors TriMedia architecture family
    TRIMEDIA = 163,
    /// QUALCOMM DSP6 Processor
    QDSP6 = 164,
    /// Intel 8051 and variants
    @"8051" = 165,
    /// STMicroelectronics STxP7x family
    STXP7X = 166,
    /// Andes Technology compact code size embedded RISC processor family
    NDS32 = 167,
    /// Cyan Technology eCOG1X family
    ECOG1X = 168,
    /// Dallas Semiconductor MAXQ30 Core Micro-controllers
    MAXQ30 = 169,
    /// New Japan Radio (NJR) 16-bit DSP Processor
    XIMO16 = 170,
    /// M2000 Reconfigurable RISC Microprocessor
    MANIK = 171,
    /// Cray Inc. NV2 vector architecture
    CRAYNV2 = 172,
    /// Renesas RX family
    RX = 173,
    /// Imagination Technologies Meta processor architecture
    METAG = 174,
    /// MCST Elbrus general purpose hardware architecture
    MCST_ELBRUS = 175,
    /// Cyan Technology eCOG16 family
    ECOG16 = 176,
    /// National Semiconductor CompactRISC 16-bit processor
    CR16 = 177,
    /// Freescale Extended Time Processing Unit
    ETPU = 178,
    /// Infineon Technologies SLE9X core
    SLE9X = 179,
    /// Intel L10M
    L10M = 180,
    /// Intel K10M
    K10M = 181,
    /// ARM 64-bit architecture
    AARCH64 = 183,
    /// Atmel Corporation 32-bit microprocessor family
    AVR32 = 185,
    /// STMicroeletronics STM8 8-bit microcontroller
    STM8 = 186,
    /// Tilera TILE64 multicore architecture family
    TILE64 = 187,
    /// Tilera TILEPro multicore architecture family
    TILEPRO = 188,
    /// Xilinx MicroBlaze 32-bit RISC soft processor core
    MICROBLAZE = 189,
    /// NVIDIA CUDA architecture
    CUDA = 190,
    /// Tilera TILE-Gx multicore architecture family
    TILEGX = 191,
    /// CloudShield architecture family
    CLOUDSHIELD = 192,
    /// KIPO-KAIST Core-A 1st generation processor family
    COREA_1ST = 193,
    /// KIPO-KAIST Core-A 2nd generation processor family
    COREA_2ND = 194,
    /// Synopsys ARCompact V2
    ARC_COMPACT2 = 195,
    /// Open8 8-bit RISC soft processor core
    OPEN8 = 196,
    /// Renesas RL78 family
    RL78 = 197,
    /// Broadcom VideoCore V processor
    VIDEOCORE5 = 198,
    /// Renesas 78K0R
    @"78K0R" = 199,
    /// Freescale 56800EX Digital Signal Controller (DSC)
    @"56800EX" = 200,
    /// Beyond BA1 CPU architecture
    BA1 = 201,
    /// Beyond BA2 CPU architecture
    BA2 = 202,
    /// XMOS xCORE processor family
    XCORE = 203,
    /// Microchip 8-bit PIC(r) family
    MCHP_PIC = 204,
    /// Intel Graphics Technology
    INTELGT = 205,
    /// KM211 KM32 32-bit processor
    KM32 = 210,
    /// KM211 KMX32 32-bit processor
    KMX32 = 211,
    /// KM211 KMX16 16-bit processor
    KMX16 = 212,
    /// KM211 KMX8 8-bit processor
    KMX8 = 213,
    /// KM211 KVARC processor
    KVARC = 214,
    /// Paneve CDP architecture family
    CDP = 215,
    /// Cognitive Smart Memory Processor
    COGE = 216,
    /// Bluechip Systems CoolEngine
    COOL = 217,
    /// Nanoradio Optimized RISC
    NORC = 218,
    /// CSR Kalimba architecture family
    CSR_KALIMBA = 219,
    /// Zilog Z80
    Z80 = 220,
    /// Controls and Data Services VISIUMcore processor
    VISIUM = 221,
    /// FTDI Chip FT32 high performance 32-bit RISC architecture
    FT32 = 222,
    /// Moxie processor family
    MOXIE = 223,
    /// AMD GPU architecture
    AMDGPU = 224,
    /// RISC-V
    RISCV = 243,
    /// Lanai 32-bit processor
    LANAI = 244,
    /// CEVA Processor Architecture Family
    CEVA = 245,
    /// CEVA X2 Processor Family
    CEVA_X2 = 246,
    /// Linux BPF - in-kernel virtual machine
    BPF = 247,
    /// Graphcore Intelligent Processing Unit
    GRAPHCORE_IPU = 248,
    /// Imagination Technologies
    IMG1 = 249,
    /// Netronome Flow Processor
    NFP = 250,
    /// NEC Vector Engine
    VE = 251,
    /// C-SKY processor family
    CSKY = 252,
    /// Synopsys ARCv2.3 64-bit
    ARC_COMPACT3_64 = 253,
    /// MOS Technology MCS 6502 processor
    MCS6502 = 254,
    /// Synopsys ARCv2.3 32-bit
    ARC_COMPACT3 = 255,
    /// Kalray VLIW core of the MPPA processor family
    KVX = 256,
    /// WDC 65816/65C816
    @"65816" = 257,
    /// LoongArch
    LOONGARCH = 258,
    /// ChipON KungFu32
    KF32 = 259,
    /// LAPIS nX-U16/U8
    U16_U8CORE = 260,
    /// Tachyum
    TACHYUM = 261,
    /// NXP 56800EF Digital Signal Controller (DSC)
    @"56800EF" = 262,
    /// AVR
    AVR_OLD = 0x1057,
    /// MSP430
    MSP430_OLD = 0x1059,
    /// Morpho MT
    MT = 0x2530,
    /// FR30
    CYGNUS_FR30 = 0x3330,
    /// WebAssembly (as used by LLVM)
    WEBASSEMBLY = 0x4157,
    /// Infineon Technologies 16-bit microcontroller with C166-V2 core
    XC16X = 0x4688,
    /// Freescale S12Z
    S12Z = 0x4def,
    /// DLX
    DLX = 0x5aa5,
    /// FRV
    CYGNUS_FRV = 0x5441,
    /// D10V
    CYGNUS_D10V = 0x7650,
    /// D30V
    CYGNUS_D30V = 0x7676,
    /// Ubicom IP2xxx
    IP2K_OLD = 0x8217,
    /// Cygnus PowerPC ELF
    CYGNUS_POWERPC = 0x9025,
    /// Alpha
    ALPHA = 0x9026,
    /// Cygnus M32R ELF
    CYGNUS_M32R = 0x9041,
    /// V850
    CYGNUS_V850 = 0x9080,
    /// Old S/390
    S390_OLD = 0xa390,
    /// Old unofficial value for Xtensa
    XTENSA_OLD = 0xabc7,
    /// Xstormy16
    XSTORMY16 = 0xad45,
    /// MN10300
    CYGNUS_MN10300 = 0xbeef,
    /// MN10200
    CYGNUS_MN10200 = 0xdead,
    /// Renesas M32C and M16C
    M32C_OLD = 0xfeb0,
    /// Vitesse IQ2000
    IQ2000 = 0xfeba,
    /// NIOS
    NIOS32 = 0xfebb,
    /// Toshiba MeP
    CYGNUS_MEP = 0xf00d,
    /// Old unofficial value for Moxie
    MOXIE_OLD = 0xfeed,
    /// Old MicroBlaze
    MICROBLAZE_OLD = 0xbaab,
    /// Adapteva's Epiphany architecture
    ADAPTEVA_EPIPHANY = 0x1223,

    /// Parallax Propeller (P1)
    /// This value is an unofficial ELF value used in: https://github.com/parallaxinc/propgcc
    PROPELLER = 0x5072,

    /// Parallax Propeller 2 (P2)
    /// This value is an unofficial ELF value used in: https://github.com/ne75/llvm-project
    PROPELLER2 = 300,

    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` | No machine |
| `M32` | AT&T WE 32100 |
| `SPARC` | SUN SPARC |
| `@"386"` | Intel 80386 |
| `@"68K"` | Motorola m68k family |
| `@"88K"` | Motorola m88k family |
| `IAMCU` | Intel MCU |
| `@"860"` | Intel 80860 |
| `MIPS` | MIPS R3000 (officially, big-endian only) |
| `S370` | IBM System/370 |
| `MIPS_RS3_LE` | MIPS R3000 (and R4000) little-endian, Oct 4 1993 Draft (deprecated) |
| `OLD_SPARCV9` | Old version of Sparc v9, from before the ABI (deprecated) |
| `PARISC` | HPPA |
| `VPP500` | Fujitsu VPP500 (also old version of PowerPC; deprecated) |
| `SPARC32PLUS` | Sun's "v8plus" |
| `@"960"` | Intel 80960 |
| `PPC` | PowerPC |
| `PPC64` | 64-bit PowerPC |
| `S390` | IBM S/390 |
| `SPU` | Sony/Toshiba/IBM SPU |
| `V800` | NEC V800 series |
| `FR20` | Fujitsu FR20 |
| `RH32` | TRW RH32 |
| `MCORE` | Motorola M\*Core, aka RCE (also Fujitsu MMA) |
| `ARM` | ARM |
| `OLD_ALPHA` | Digital Alpha |
| `SH` | Renesas (formerly Hitachi) / SuperH SH |
| `SPARCV9` | SPARC v9 64-bit |
| `TRICORE` | Siemens Tricore embedded processor |
| `ARC` | ARC Cores |
| `H8_300` | Renesas (formerly Hitachi) H8/300 |
| `H8_300H` | Renesas (formerly Hitachi) H8/300H |
| `H8S` | Renesas (formerly Hitachi) H8S |
| `H8_500` | Renesas (formerly Hitachi) H8/500 |
| `IA_64` | Intel IA-64 Processor |
| `MIPS_X` | Stanford MIPS-X |
| `COLDFIRE` | Motorola Coldfire |
| `@"68HC12"` | Motorola M68HC12 |
| `MMA` | Fujitsu Multimedia Accelerator |
| `PCP` | Siemens PCP |
| `NCPU` | Sony nCPU embedded RISC processor |
| `NDR1` | Denso NDR1 microprocessor |
| `STARCORE` | Motorola Star\*Core processor |
| `ME16` | Toyota ME16 processor |
| `ST100` | STMicroelectronics ST100 processor |
| `TINYJ` | Advanced Logic Corp. TinyJ embedded processor |
| `X86_64` | Advanced Micro Devices X86-64 processor |
| `PDSP` | Sony DSP Processor |
| `PDP10` | Digital Equipment Corp. PDP-10 |
| `PDP11` | Digital Equipment Corp. PDP-11 |
| `FX66` | Siemens FX66 microcontroller |
| `ST9PLUS` | STMicroelectronics ST9+ 8/16 bit microcontroller |
| `ST7` | STMicroelectronics ST7 8-bit microcontroller |
| `@"68HC16"` | Motorola MC68HC16 Microcontroller |
| `@"68HC11"` | Motorola MC68HC11 Microcontroller |
| `@"68HC08"` | Motorola MC68HC08 Microcontroller |
| `@"68HC05"` | Motorola MC68HC05 Microcontroller |
| `SVX` | Silicon Graphics SVx |
| `ST19` | STMicroelectronics ST19 8-bit cpu |
| `VAX` | Digital VAX |
| `CRIS` | Axis Communications 32-bit embedded processor |
| `JAVELIN` | Infineon Technologies 32-bit embedded cpu |
| `FIREPATH` | Element 14 64-bit DSP processor |
| `ZSP` | LSI Logic's 16-bit DSP processor |
| `MMIX` | Donald Knuth's educational 64-bit processor |
| `HUANY` | Harvard's machine-independent format |
| `PRISM` | SiTera Prism |
| `AVR` | Atmel AVR 8-bit microcontroller |
| `FR30` | Fujitsu FR30 |
| `D10V` | Mitsubishi D10V |
| `D30V` | Mitsubishi D30V |
| `V850` | Renesas V850 (formerly NEC V850) |
| `M32R` | Renesas M32R (formerly Mitsubishi M32R) |
| `MN10300` | Matsushita MN10300 |
| `MN10200` | Matsushita MN10200 |
| `PJ` | picoJava |
| `OR1K` | OpenRISC 1000 32-bit embedded processor |
| `ARC_COMPACT` | ARC International ARCompact processor |
| `XTENSA` | Tensilica Xtensa Architecture |
| `VIDEOCORE` | Alphamosaic VideoCore processor (also old Sunplus S+core7 backend magic number) |
| `TMM_GPP` | Thompson Multimedia General Purpose Processor |
| `NS32K` | National Semiconductor 32000 series |
| `TPC` | Tenor Network TPC processor |
| `SNP1K` | Trebia SNP 1000 processor (also old value for picoJava; deprecated) |
| `ST200` | STMicroelectronics ST200 microcontroller |
| `IP2K` | Ubicom IP2022 micro controller |
| `MAX` | MAX Processor |
| `CR` | National Semiconductor CompactRISC |
| `F2MC16` | Fujitsu F2MC16 |
| `MSP430` | TI msp430 micro controller |
| `BLACKFIN` | ADI Blackfin |
| `SE_C33` | S1C33 Family of Seiko Epson processors |
| `SEP` | Sharp embedded microprocessor |
| `ARCA` | Arca RISC Microprocessor |
| `UNICORE` | Microprocessor series from PKU-Unity Ltd. and MPRC of Peking University |
| `EXCESS` | eXcess: 16/32/64-bit configurable embedded CPU |
| `DXP` | Icera Semiconductor Inc. Deep Execution Processor |
| `ALTERA_NIOS2` | Altera Nios II soft-core processor |
| `CRX` | National Semiconductor CRX |
| `XGATE` | Motorola XGATE embedded processor (also old value for National Semiconductor CompactRISC; deprecated) |
| `C166` | Infineon C16x/XC16x processor |
| `M16C` | Renesas M16C series microprocessors |
| `DSPIC30F` | Microchip Technology dsPIC30F Digital Signal Controller |
| `CE` | Freescale Communication Engine RISC core |
| `M32C` | Renesas M32C series microprocessors |
| `TSK3000` | Altium TSK3000 core |
| `RS08` | Freescale RS08 embedded processor |
| `SHARC` | Analog Devices SHARC family of 32-bit DSP processors |
| `ECOG2` | Cyan Technology eCOG2 microprocessor |
| `SCORE` | Sunplus S+core (and S+core7) RISC processor |
| `DSP24` | New Japan Radio (NJR) 24-bit DSP Processor |
| `VIDEOCORE3` | Broadcom VideoCore III processor |
| `LATTICEMICO32` | RISC processor for Lattice FPGA architecture |
| `SE_C17` | Seiko Epson C17 family |
| `TI_C6000` | Texas Instruments TMS320C6000 DSP family |
| `TI_C2000` | Texas Instruments TMS320C2000 DSP family |
| `TI_C5500` | Texas Instruments TMS320C55x DSP family |
| `TI_PRU` | Texas Instruments Programmable Realtime Unit |
| `MMDSP_PLUS` | STMicroelectronics 64bit VLIW Data Signal Processor |
| `CYPRESS_M8C` | Cypress M8C microprocessor |
| `R32C` | Renesas R32C series microprocessors |
| `TRIMEDIA` | NXP Semiconductors TriMedia architecture family |
| `QDSP6` | QUALCOMM DSP6 Processor |
| `@"8051"` | Intel 8051 and variants |
| `STXP7X` | STMicroelectronics STxP7x family |
| `NDS32` | Andes Technology compact code size embedded RISC processor family |
| `ECOG1X` | Cyan Technology eCOG1X family |
| `MAXQ30` | Dallas Semiconductor MAXQ30 Core Micro-controllers |
| `XIMO16` | New Japan Radio (NJR) 16-bit DSP Processor |
| `MANIK` | M2000 Reconfigurable RISC Microprocessor |
| `CRAYNV2` | Cray Inc. NV2 vector architecture |
| `RX` | Renesas RX family |
| `METAG` | Imagination Technologies Meta processor architecture |
| `MCST_ELBRUS` | MCST Elbrus general purpose hardware architecture |
| `ECOG16` | Cyan Technology eCOG16 family |
| `CR16` | National Semiconductor CompactRISC 16-bit processor |
| `ETPU` | Freescale Extended Time Processing Unit |
| `SLE9X` | Infineon Technologies SLE9X core |
| `L10M` | Intel L10M |
| `K10M` | Intel K10M |
| `AARCH64` | ARM 64-bit architecture |
| `AVR32` | Atmel Corporation 32-bit microprocessor family |
| `STM8` | STMicroeletronics STM8 8-bit microcontroller |
| `TILE64` | Tilera TILE64 multicore architecture family |
| `TILEPRO` | Tilera TILEPro multicore architecture family |
| `MICROBLAZE` | Xilinx MicroBlaze 32-bit RISC soft processor core |
| `CUDA` | NVIDIA CUDA architecture |
| `TILEGX` | Tilera TILE-Gx multicore architecture family |
| `CLOUDSHIELD` | CloudShield architecture family |
| `COREA_1ST` | KIPO-KAIST Core-A 1st generation processor family |
| `COREA_2ND` | KIPO-KAIST Core-A 2nd generation processor family |
| `ARC_COMPACT2` | Synopsys ARCompact V2 |
| `OPEN8` | Open8 8-bit RISC soft processor core |
| `RL78` | Renesas RL78 family |
| `VIDEOCORE5` | Broadcom VideoCore V processor |
| `@"78K0R"` | Renesas 78K0R |
| `@"56800EX"` | Freescale 56800EX Digital Signal Controller (DSC) |
| `BA1` | Beyond BA1 CPU architecture |
| `BA2` | Beyond BA2 CPU architecture |
| `XCORE` | XMOS xCORE processor family |
| `MCHP_PIC` | Microchip 8-bit PIC(r) family |
| `INTELGT` | Intel Graphics Technology |
| `KM32` | KM211 KM32 32-bit processor |
| `KMX32` | KM211 KMX32 32-bit processor |
| `KMX16` | KM211 KMX16 16-bit processor |
| `KMX8` | KM211 KMX8 8-bit processor |
| `KVARC` | KM211 KVARC processor |
| `CDP` | Paneve CDP architecture family |
| `COGE` | Cognitive Smart Memory Processor |
| `COOL` | Bluechip Systems CoolEngine |
| `NORC` | Nanoradio Optimized RISC |
| `CSR_KALIMBA` | CSR Kalimba architecture family |
| `Z80` | Zilog Z80 |
| `VISIUM` | Controls and Data Services VISIUMcore processor |
| `FT32` | FTDI Chip FT32 high performance 32-bit RISC architecture |
| `MOXIE` | Moxie processor family |
| `AMDGPU` | AMD GPU architecture |
| `RISCV` | RISC-V |
| `LANAI` | Lanai 32-bit processor |
| `CEVA` | CEVA Processor Architecture Family |
| `CEVA_X2` | CEVA X2 Processor Family |
| `BPF` | Linux BPF - in-kernel virtual machine |
| `GRAPHCORE_IPU` | Graphcore Intelligent Processing Unit |
| `IMG1` | Imagination Technologies |
| `NFP` | Netronome Flow Processor |
| `VE` | NEC Vector Engine |
| `CSKY` | C-SKY processor family |
| `ARC_COMPACT3_64` | Synopsys ARCv2.3 64-bit |
| `MCS6502` | MOS Technology MCS 6502 processor |
| `ARC_COMPACT3` | Synopsys ARCv2.3 32-bit |
| `KVX` | Kalray VLIW core of the MPPA processor family |
| `@"65816"` | WDC 65816/65C816 |
| `LOONGARCH` | LoongArch |
| `KF32` | ChipON KungFu32 |
| `U16_U8CORE` | LAPIS nX-U16/U8 |
| `TACHYUM` | Tachyum |
| `@"56800EF"` | NXP 56800EF Digital Signal Controller (DSC) |
| `AVR_OLD` | AVR |
| `MSP430_OLD` | MSP430 |
| `MT` | Morpho MT |
| `CYGNUS_FR30` | FR30 |
| `WEBASSEMBLY` | WebAssembly (as used by LLVM) |
| `XC16X` | Infineon Technologies 16-bit microcontroller with C166-V2 core |
| `S12Z` | Freescale S12Z |
| `DLX` | DLX |
| `CYGNUS_FRV` | FRV |
| `CYGNUS_D10V` | D10V |
| `CYGNUS_D30V` | D30V |
| `IP2K_OLD` | Ubicom IP2xxx |
| `CYGNUS_POWERPC` | Cygnus PowerPC ELF |
| `ALPHA` | Alpha |
| `CYGNUS_M32R` | Cygnus M32R ELF |
| `CYGNUS_V850` | V850 |
| `S390_OLD` | Old S/390 |
| `XTENSA_OLD` | Old unofficial value for Xtensa |
| `XSTORMY16` | Xstormy16 |
| `CYGNUS_MN10300` | MN10300 |
| `CYGNUS_MN10200` | MN10200 |
| `M32C_OLD` | Renesas M32C and M16C |
| `IQ2000` | Vitesse IQ2000 |
| `NIOS32` | NIOS |
| `CYGNUS_MEP` | Toshiba MeP |
| `MOXIE_OLD` | Old unofficial value for Moxie |
| `MICROBLAZE_OLD` | Old MicroBlaze |
| `ADAPTEVA_EPIPHANY` | Adapteva's Epiphany architecture |
| `PROPELLER` | Parallax Propeller (P1) This value is an unofficial ELF value used in: https://github.com/parallaxinc/propgcc |
| `PROPELLER2` | Parallax Propeller 2 (P2) This value is an unofficial ELF value used in: https://github.com/ne75/llvm-project |
| `_` |  |

</details>

---

### <a id="type-compress"></a>`COMPRESS`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const COMPRESS = enum(u32) {
    ZLIB = 1,
    ZSTD = 2,
    LOOS = 0x60000000,
    HIOS = 0x6fffffff,
    LOPROC = 0x70000000,
    HIPROC = 0x7fffffff,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `ZLIB` |  |
| `ZSTD` |  |
| `LOOS` |  |
| `HIOS` |  |
| `LOPROC` |  |
| `HIPROC` |  |
| `_` |  |

</details>

---

### <a id="type-r-x86-64"></a>`R_X86_64`

<details class="declaration-card" open>
<summary>Container – AMD x86-64 relocations</summary>

AMD x86-64 relocations.

```zig
pub const R_X86_64 = enum(u32) {
    /// No reloc
    NONE = 0,
    /// Direct 64 bit
    @"64" = 1,
    /// PC relative 32 bit signed
    PC32 = 2,
    /// 32 bit GOT entry
    GOT32 = 3,
    /// 32 bit PLT address
    PLT32 = 4,
    /// Copy symbol at runtime
    COPY = 5,
    /// Create GOT entry
    GLOB_DAT = 6,
    /// Create PLT entry
    JUMP_SLOT = 7,
    /// Adjust by program base
    RELATIVE = 8,
    /// 32 bit signed PC relative offset to GOT
    GOTPCREL = 9,
    /// Direct 32 bit zero extended
    @"32" = 10,
    /// Direct 32 bit sign extended
    @"32S" = 11,
    /// Direct 16 bit zero extended
    @"16" = 12,
    /// 16 bit sign extended pc relative
    PC16 = 13,
    /// Direct 8 bit sign extended
    @"8" = 14,
    /// 8 bit sign extended pc relative
    PC8 = 15,
    /// ID of module containing symbol
    DTPMOD64 = 16,
    /// Offset in module's TLS block
    DTPOFF64 = 17,
    /// Offset in initial TLS block
    TPOFF64 = 18,
    /// 32 bit signed PC relative offset to two GOT entries for GD symbol
    TLSGD = 19,
    /// 32 bit signed PC relative offset to two GOT entries for LD symbol
    TLSLD = 20,
    /// Offset in TLS block
    DTPOFF32 = 21,
    /// 32 bit signed PC relative offset to GOT entry for IE symbol
    GOTTPOFF = 22,
    /// Offset in initial TLS block
    TPOFF32 = 23,
    /// PC relative 64 bit
    PC64 = 24,
    /// 64 bit offset to GOT
    GOTOFF64 = 25,
    /// 32 bit signed pc relative offset to GOT
    GOTPC32 = 26,
    /// 64 bit GOT entry offset
    GOT64 = 27,
    /// 64 bit PC relative offset to GOT entry
    GOTPCREL64 = 28,
    /// 64 bit PC relative offset to GOT
    GOTPC64 = 29,
    /// Like GOT64, says PLT entry needed
    GOTPLT64 = 30,
    /// 64-bit GOT relative offset to PLT entry
    PLTOFF64 = 31,
    /// Size of symbol plus 32-bit addend
    SIZE32 = 32,
    /// Size of symbol plus 64-bit addend
    SIZE64 = 33,
    /// GOT offset for TLS descriptor
    GOTPC32_TLSDESC = 34,
    /// Marker for call through TLS descriptor
    TLSDESC_CALL = 35,
    /// TLS descriptor
    TLSDESC = 36,
    /// Adjust indirectly by program base
    IRELATIVE = 37,
    /// 64-bit adjust by program base
    RELATIVE64 = 38,
    /// 39 Reserved was PC32_BND
    /// 40 Reserved was PLT32_BND
    /// Load from 32 bit signed pc relative offset to GOT entry without REX prefix, relaxable
    GOTPCRELX = 41,
    /// Load from 32 bit signed PC relative offset to GOT entry with REX prefix, relaxable
    REX_GOTPCRELX = 42,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` | No reloc |
| `@"64"` | Direct 64 bit |
| `PC32` | PC relative 32 bit signed |
| `GOT32` | 32 bit GOT entry |
| `PLT32` | 32 bit PLT address |
| `COPY` | Copy symbol at runtime |
| `GLOB_DAT` | Create GOT entry |
| `JUMP_SLOT` | Create PLT entry |
| `RELATIVE` | Adjust by program base |
| `GOTPCREL` | 32 bit signed PC relative offset to GOT |
| `@"32"` | Direct 32 bit zero extended |
| `@"32S"` | Direct 32 bit sign extended |
| `@"16"` | Direct 16 bit zero extended |
| `PC16` | 16 bit sign extended pc relative |
| `@"8"` | Direct 8 bit sign extended |
| `PC8` | 8 bit sign extended pc relative |
| `DTPMOD64` | ID of module containing symbol |
| `DTPOFF64` | Offset in module's TLS block |
| `TPOFF64` | Offset in initial TLS block |
| `TLSGD` | 32 bit signed PC relative offset to two GOT entries for GD symbol |
| `TLSLD` | 32 bit signed PC relative offset to two GOT entries for LD symbol |
| `DTPOFF32` | Offset in TLS block |
| `GOTTPOFF` | 32 bit signed PC relative offset to GOT entry for IE symbol |
| `TPOFF32` | Offset in initial TLS block |
| `PC64` | PC relative 64 bit |
| `GOTOFF64` | 64 bit offset to GOT |
| `GOTPC32` | 32 bit signed pc relative offset to GOT |
| `GOT64` | 64 bit GOT entry offset |
| `GOTPCREL64` | 64 bit PC relative offset to GOT entry |
| `GOTPC64` | 64 bit PC relative offset to GOT |
| `GOTPLT64` | Like GOT64, says PLT entry needed |
| `PLTOFF64` | 64-bit GOT relative offset to PLT entry |
| `SIZE32` | Size of symbol plus 32-bit addend |
| `SIZE64` | Size of symbol plus 64-bit addend |
| `GOTPC32_TLSDESC` | GOT offset for TLS descriptor |
| `TLSDESC_CALL` | Marker for call through TLS descriptor |
| `TLSDESC` | TLS descriptor |
| `IRELATIVE` | Adjust indirectly by program base |
| `RELATIVE64` | 64-bit adjust by program base |
| `GOTPCRELX` | 39 Reserved was PC32\_BND 40 Reserved was PLT32\_BND Load from 32 bit signed pc relative offset to GOT entry without REX prefix, relaxable |
| `REX_GOTPCRELX` | Load from 32 bit signed PC relative offset to GOT entry with REX prefix, relaxable |
| `_` |  |

</details>

---

### <a id="type-r-aarch64"></a>`R_AARCH64`

<details class="declaration-card" open>
<summary>Container – AArch64 relocations</summary>

AArch64 relocations.

```zig
pub const R_AARCH64 = enum(u32) {
    /// No relocation.
    NONE = 0,
    /// ILP32 AArch64 relocs.
    /// Direct 32 bit.
    P32_ABS32 = 1,
    /// Copy symbol at runtime.
    P32_COPY = 180,
    /// Create GOT entry.
    P32_GLOB_DAT = 181,
    /// Create PLT entry.
    P32_JUMP_SLOT = 182,
    /// Adjust by program base.
    P32_RELATIVE = 183,
    /// Module number, 32 bit.
    P32_TLS_DTPMOD = 184,
    /// Module-relative offset, 32 bit.
    P32_TLS_DTPREL = 185,
    /// TP-relative offset, 32 bit.
    P32_TLS_TPREL = 186,
    /// TLS Descriptor.
    P32_TLSDESC = 187,
    /// STT_GNU_IFUNC relocation.
    P32_IRELATIVE = 188,
    /// LP64 AArch64 relocs.
    /// Direct 64 bit.
    ABS64 = 257,
    /// Direct 32 bit.
    ABS32 = 258,
    /// Direct 16-bit.
    ABS16 = 259,
    /// PC-relative 64-bit.
    PREL64 = 260,
    /// PC-relative 32-bit.
    PREL32 = 261,
    /// PC-relative 16-bit.
    PREL16 = 262,
    /// Dir. MOVZ imm. from bits 15:0.
    MOVW_UABS_G0 = 263,
    /// Likewise for MOVK; no check.
    MOVW_UABS_G0_NC = 264,
    /// Dir. MOVZ imm. from bits 31:16.
    MOVW_UABS_G1 = 265,
    /// Likewise for MOVK; no check.
    MOVW_UABS_G1_NC = 266,
    /// Dir. MOVZ imm. from bits 47:32.
    MOVW_UABS_G2 = 267,
    /// Likewise for MOVK; no check.
    MOVW_UABS_G2_NC = 268,
    /// Dir. MOV{K,Z} imm. from 63:48.
    MOVW_UABS_G3 = 269,
    /// Dir. MOV{N,Z} imm. from 15:0.
    MOVW_SABS_G0 = 270,
    /// Dir. MOV{N,Z} imm. from 31:16.
    MOVW_SABS_G1 = 271,
    /// Dir. MOV{N,Z} imm. from 47:32.
    MOVW_SABS_G2 = 272,
    /// PC-rel. LD imm. from bits 20:2.
    LD_PREL_LO19 = 273,
    /// PC-rel. ADR imm. from bits 20:0.
    ADR_PREL_LO21 = 274,
    /// Page-rel. ADRP imm. from 32:12.
    ADR_PREL_PG_HI21 = 275,
    /// Likewise; no overflow check.
    ADR_PREL_PG_HI21_NC = 276,
    /// Dir. ADD imm. from bits 11:0.
    ADD_ABS_LO12_NC = 277,
    /// Likewise for LD/ST; no check.
    LDST8_ABS_LO12_NC = 278,
    /// PC-rel. TBZ/TBNZ imm. from 15:2.
    TSTBR14 = 279,
    /// PC-rel. cond. br. imm. from 20:2.
    CONDBR19 = 280,
    /// PC-rel. B imm. from bits 27:2.
    JUMP26 = 282,
    /// Likewise for CALL.
    CALL26 = 283,
    /// Dir. ADD imm. from bits 11:1.
    LDST16_ABS_LO12_NC = 284,
    /// Likewise for bits 11:2.
    LDST32_ABS_LO12_NC = 285,
    /// Likewise for bits 11:3.
    LDST64_ABS_LO12_NC = 286,
    /// PC-rel. MOV{N,Z} imm. from 15:0.
    MOVW_PREL_G0 = 287,
    /// Likewise for MOVK; no check.
    MOVW_PREL_G0_NC = 288,
    /// PC-rel. MOV{N,Z} imm. from 31:16.
    MOVW_PREL_G1 = 289,
    /// Likewise for MOVK; no check.
    MOVW_PREL_G1_NC = 290,
    /// PC-rel. MOV{N,Z} imm. from 47:32.
    MOVW_PREL_G2 = 291,
    /// Likewise for MOVK; no check.
    MOVW_PREL_G2_NC = 292,
    /// PC-rel. MOV{N,Z} imm. from 63:48.
    MOVW_PREL_G3 = 293,
    /// Dir. ADD imm. from bits 11:4.
    LDST128_ABS_LO12_NC = 299,
    /// GOT-rel. off. MOV{N,Z} imm. 15:0.
    MOVW_GOTOFF_G0 = 300,
    /// Likewise for MOVK; no check.
    MOVW_GOTOFF_G0_NC = 301,
    /// GOT-rel. o. MOV{N,Z} imm. 31:16.
    MOVW_GOTOFF_G1 = 302,
    /// Likewise for MOVK; no check.
    MOVW_GOTOFF_G1_NC = 303,
    /// GOT-rel. o. MOV{N,Z} imm. 47:32.
    MOVW_GOTOFF_G2 = 304,
    /// Likewise for MOVK; no check.
    MOVW_GOTOFF_G2_NC = 305,
    /// GOT-rel. o. MOV{N,Z} imm. 63:48.
    MOVW_GOTOFF_G3 = 306,
    /// GOT-relative 64-bit.
    GOTREL64 = 307,
    /// GOT-relative 32-bit.
    GOTREL32 = 308,
    /// PC-rel. GOT off. load imm. 20:2.
    GOT_LD_PREL19 = 309,
    /// GOT-rel. off. LD/ST imm. 14:3.
    LD64_GOTOFF_LO15 = 310,
    /// P-page-rel. GOT off. ADRP 32:12.
    ADR_GOT_PAGE = 311,
    /// Dir. GOT off. LD/ST imm. 11:3.
    LD64_GOT_LO12_NC = 312,
    /// GOT-page-rel. GOT off. LD/ST 14:3
    LD64_GOTPAGE_LO15 = 313,
    /// PC-relative ADR imm. 20:0.
    TLSGD_ADR_PREL21 = 512,
    /// page-rel. ADRP imm. 32:12.
    TLSGD_ADR_PAGE21 = 513,
    /// direct ADD imm. from 11:0.
    TLSGD_ADD_LO12_NC = 514,
    /// GOT-rel. MOV{N,Z} 31:16.
    TLSGD_MOVW_G1 = 515,
    /// GOT-rel. MOVK imm. 15:0.
    TLSGD_MOVW_G0_NC = 516,
    /// Like 512; local dynamic model.
    TLSLD_ADR_PREL21 = 517,
    /// Like 513; local dynamic model.
    TLSLD_ADR_PAGE21 = 518,
    /// Like 514; local dynamic model.
    TLSLD_ADD_LO12_NC = 519,
    /// Like 515; local dynamic model.
    TLSLD_MOVW_G1 = 520,
    /// Like 516; local dynamic model.
    TLSLD_MOVW_G0_NC = 521,
    /// TLS PC-rel. load imm. 20:2.
    TLSLD_LD_PREL19 = 522,
    /// TLS DTP-rel. MOV{N,Z} 47:32.
    TLSLD_MOVW_DTPREL_G2 = 523,
    /// TLS DTP-rel. MOV{N,Z} 31:16.
    TLSLD_MOVW_DTPREL_G1 = 524,
    /// Likewise; MOVK; no check.
    TLSLD_MOVW_DTPREL_G1_NC = 525,
    /// TLS DTP-rel. MOV{N,Z} 15:0.
    TLSLD_MOVW_DTPREL_G0 = 526,
    /// Likewise; MOVK; no check.
    TLSLD_MOVW_DTPREL_G0_NC = 527,
    /// DTP-rel. ADD imm. from 23:12.
    TLSLD_ADD_DTPREL_HI12 = 528,
    /// DTP-rel. ADD imm. from 11:0.
    TLSLD_ADD_DTPREL_LO12 = 529,
    /// Likewise; no ovfl. check.
    TLSLD_ADD_DTPREL_LO12_NC = 530,
    /// DTP-rel. LD/ST imm. 11:0.
    TLSLD_LDST8_DTPREL_LO12 = 531,
    /// Likewise; no check.
    TLSLD_LDST8_DTPREL_LO12_NC = 532,
    /// DTP-rel. LD/ST imm. 11:1.
    TLSLD_LDST16_DTPREL_LO12 = 533,
    /// Likewise; no check.
    TLSLD_LDST16_DTPREL_LO12_NC = 534,
    /// DTP-rel. LD/ST imm. 11:2.
    TLSLD_LDST32_DTPREL_LO12 = 535,
    /// Likewise; no check.
    TLSLD_LDST32_DTPREL_LO12_NC = 536,
    /// DTP-rel. LD/ST imm. 11:3.
    TLSLD_LDST64_DTPREL_LO12 = 537,
    /// Likewise; no check.
    TLSLD_LDST64_DTPREL_LO12_NC = 538,
    /// GOT-rel. MOV{N,Z} 31:16.
    TLSIE_MOVW_GOTTPREL_G1 = 539,
    /// GOT-rel. MOVK 15:0.
    TLSIE_MOVW_GOTTPREL_G0_NC = 540,
    /// Page-rel. ADRP 32:12.
    TLSIE_ADR_GOTTPREL_PAGE21 = 541,
    /// Direct LD off. 11:3.
    TLSIE_LD64_GOTTPREL_LO12_NC = 542,
    /// PC-rel. load imm. 20:2.
    TLSIE_LD_GOTTPREL_PREL19 = 543,
    /// TLS TP-rel. MOV{N,Z} 47:32.
    TLSLE_MOVW_TPREL_G2 = 544,
    /// TLS TP-rel. MOV{N,Z} 31:16.
    TLSLE_MOVW_TPREL_G1 = 545,
    /// Likewise; MOVK; no check.
    TLSLE_MOVW_TPREL_G1_NC = 546,
    /// TLS TP-rel. MOV{N,Z} 15:0.
    TLSLE_MOVW_TPREL_G0 = 547,
    /// Likewise; MOVK; no check.
    TLSLE_MOVW_TPREL_G0_NC = 548,
    /// TP-rel. ADD imm. 23:12.
    TLSLE_ADD_TPREL_HI12 = 549,
    /// TP-rel. ADD imm. 11:0.
    TLSLE_ADD_TPREL_LO12 = 550,
    /// Likewise; no ovfl. check.
    TLSLE_ADD_TPREL_LO12_NC = 551,
    /// TP-rel. LD/ST off. 11:0.
    TLSLE_LDST8_TPREL_LO12 = 552,
    /// Likewise; no ovfl. check.
    TLSLE_LDST8_TPREL_LO12_NC = 553,
    /// TP-rel. LD/ST off. 11:1.
    TLSLE_LDST16_TPREL_LO12 = 554,
    /// Likewise; no check.
    TLSLE_LDST16_TPREL_LO12_NC = 555,
    /// TP-rel. LD/ST off. 11:2.
    TLSLE_LDST32_TPREL_LO12 = 556,
    /// Likewise; no check.
    TLSLE_LDST32_TPREL_LO12_NC = 557,
    /// TP-rel. LD/ST off. 11:3.
    TLSLE_LDST64_TPREL_LO12 = 558,
    /// Likewise; no check.
    TLSLE_LDST64_TPREL_LO12_NC = 559,
    /// PC-rel. load immediate 20:2.
    TLSDESC_LD_PREL19 = 560,
    /// PC-rel. ADR immediate 20:0.
    TLSDESC_ADR_PREL21 = 561,
    /// Page-rel. ADRP imm. 32:12.
    TLSDESC_ADR_PAGE21 = 562,
    /// Direct LD off. from 11:3.
    TLSDESC_LD64_LO12 = 563,
    /// Direct ADD imm. from 11:0.
    TLSDESC_ADD_LO12 = 564,
    /// GOT-rel. MOV{N,Z} imm. 31:16.
    TLSDESC_OFF_G1 = 565,
    /// GOT-rel. MOVK imm. 15:0; no ck.
    TLSDESC_OFF_G0_NC = 566,
    /// Relax LDR.
    TLSDESC_LDR = 567,
    /// Relax ADD.
    TLSDESC_ADD = 568,
    /// Relax BLR.
    TLSDESC_CALL = 569,
    /// TP-rel. LD/ST off. 11:4.
    TLSLE_LDST128_TPREL_LO12 = 570,
    /// Likewise; no check.
    TLSLE_LDST128_TPREL_LO12_NC = 571,
    /// DTP-rel. LD/ST imm. 11:4.
    TLSLD_LDST128_DTPREL_LO12 = 572,
    /// Likewise; no check.
    TLSLD_LDST128_DTPREL_LO12_NC = 573,
    /// Copy symbol at runtime.
    COPY = 1024,
    /// Create GOT entry.
    GLOB_DAT = 1025,
    /// Create PLT entry.
    JUMP_SLOT = 1026,
    /// Adjust by program base.
    RELATIVE = 1027,
    /// Module number, 64 bit.
    TLS_DTPMOD = 1028,
    /// Module-relative offset, 64 bit.
    TLS_DTPREL = 1029,
    /// TP-relative offset, 64 bit.
    TLS_TPREL = 1030,
    /// TLS Descriptor.
    TLSDESC = 1031,
    /// STT_GNU_IFUNC relocation.
    IRELATIVE = 1032,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` | No relocation. |
| `P32_ABS32` | ILP32 AArch64 relocs. Direct 32 bit. |
| `P32_COPY` | Copy symbol at runtime. |
| `P32_GLOB_DAT` | Create GOT entry. |
| `P32_JUMP_SLOT` | Create PLT entry. |
| `P32_RELATIVE` | Adjust by program base. |
| `P32_TLS_DTPMOD` | Module number, 32 bit. |
| `P32_TLS_DTPREL` | Module-relative offset, 32 bit. |
| `P32_TLS_TPREL` | TP-relative offset, 32 bit. |
| `P32_TLSDESC` | TLS Descriptor. |
| `P32_IRELATIVE` | STT\_GNU\_IFUNC relocation. |
| `ABS64` | LP64 AArch64 relocs. Direct 64 bit. |
| `ABS32` | Direct 32 bit. |
| `ABS16` | Direct 16-bit. |
| `PREL64` | PC-relative 64-bit. |
| `PREL32` | PC-relative 32-bit. |
| `PREL16` | PC-relative 16-bit. |
| `MOVW_UABS_G0` | Dir. MOVZ imm. from bits 15:0. |
| `MOVW_UABS_G0_NC` | Likewise for MOVK; no check. |
| `MOVW_UABS_G1` | Dir. MOVZ imm. from bits 31:16. |
| `MOVW_UABS_G1_NC` | Likewise for MOVK; no check. |
| `MOVW_UABS_G2` | Dir. MOVZ imm. from bits 47:32. |
| `MOVW_UABS_G2_NC` | Likewise for MOVK; no check. |
| `MOVW_UABS_G3` | Dir. MOV{K,Z} imm. from 63:48. |
| `MOVW_SABS_G0` | Dir. MOV{N,Z} imm. from 15:0. |
| `MOVW_SABS_G1` | Dir. MOV{N,Z} imm. from 31:16. |
| `MOVW_SABS_G2` | Dir. MOV{N,Z} imm. from 47:32. |
| `LD_PREL_LO19` | PC-rel. LD imm. from bits 20:2. |
| `ADR_PREL_LO21` | PC-rel. ADR imm. from bits 20:0. |
| `ADR_PREL_PG_HI21` | Page-rel. ADRP imm. from 32:12. |
| `ADR_PREL_PG_HI21_NC` | Likewise; no overflow check. |
| `ADD_ABS_LO12_NC` | Dir. ADD imm. from bits 11:0. |
| `LDST8_ABS_LO12_NC` | Likewise for LD/ST; no check. |
| `TSTBR14` | PC-rel. TBZ/TBNZ imm. from 15:2. |
| `CONDBR19` | PC-rel. cond. br. imm. from 20:2. |
| `JUMP26` | PC-rel. B imm. from bits 27:2. |
| `CALL26` | Likewise for CALL. |
| `LDST16_ABS_LO12_NC` | Dir. ADD imm. from bits 11:1. |
| `LDST32_ABS_LO12_NC` | Likewise for bits 11:2. |
| `LDST64_ABS_LO12_NC` | Likewise for bits 11:3. |
| `MOVW_PREL_G0` | PC-rel. MOV{N,Z} imm. from 15:0. |
| `MOVW_PREL_G0_NC` | Likewise for MOVK; no check. |
| `MOVW_PREL_G1` | PC-rel. MOV{N,Z} imm. from 31:16. |
| `MOVW_PREL_G1_NC` | Likewise for MOVK; no check. |
| `MOVW_PREL_G2` | PC-rel. MOV{N,Z} imm. from 47:32. |
| `MOVW_PREL_G2_NC` | Likewise for MOVK; no check. |
| `MOVW_PREL_G3` | PC-rel. MOV{N,Z} imm. from 63:48. |
| `LDST128_ABS_LO12_NC` | Dir. ADD imm. from bits 11:4. |
| `MOVW_GOTOFF_G0` | GOT-rel. off. MOV{N,Z} imm. 15:0. |
| `MOVW_GOTOFF_G0_NC` | Likewise for MOVK; no check. |
| `MOVW_GOTOFF_G1` | GOT-rel. o. MOV{N,Z} imm. 31:16. |
| `MOVW_GOTOFF_G1_NC` | Likewise for MOVK; no check. |
| `MOVW_GOTOFF_G2` | GOT-rel. o. MOV{N,Z} imm. 47:32. |
| `MOVW_GOTOFF_G2_NC` | Likewise for MOVK; no check. |
| `MOVW_GOTOFF_G3` | GOT-rel. o. MOV{N,Z} imm. 63:48. |
| `GOTREL64` | GOT-relative 64-bit. |
| `GOTREL32` | GOT-relative 32-bit. |
| `GOT_LD_PREL19` | PC-rel. GOT off. load imm. 20:2. |
| `LD64_GOTOFF_LO15` | GOT-rel. off. LD/ST imm. 14:3. |
| `ADR_GOT_PAGE` | P-page-rel. GOT off. ADRP 32:12. |
| `LD64_GOT_LO12_NC` | Dir. GOT off. LD/ST imm. 11:3. |
| `LD64_GOTPAGE_LO15` | GOT-page-rel. GOT off. LD/ST 14:3 |
| `TLSGD_ADR_PREL21` | PC-relative ADR imm. 20:0. |
| `TLSGD_ADR_PAGE21` | page-rel. ADRP imm. 32:12. |
| `TLSGD_ADD_LO12_NC` | direct ADD imm. from 11:0. |
| `TLSGD_MOVW_G1` | GOT-rel. MOV{N,Z} 31:16. |
| `TLSGD_MOVW_G0_NC` | GOT-rel. MOVK imm. 15:0. |
| `TLSLD_ADR_PREL21` | Like 512; local dynamic model. |
| `TLSLD_ADR_PAGE21` | Like 513; local dynamic model. |
| `TLSLD_ADD_LO12_NC` | Like 514; local dynamic model. |
| `TLSLD_MOVW_G1` | Like 515; local dynamic model. |
| `TLSLD_MOVW_G0_NC` | Like 516; local dynamic model. |
| `TLSLD_LD_PREL19` | TLS PC-rel. load imm. 20:2. |
| `TLSLD_MOVW_DTPREL_G2` | TLS DTP-rel. MOV{N,Z} 47:32. |
| `TLSLD_MOVW_DTPREL_G1` | TLS DTP-rel. MOV{N,Z} 31:16. |
| `TLSLD_MOVW_DTPREL_G1_NC` | Likewise; MOVK; no check. |
| `TLSLD_MOVW_DTPREL_G0` | TLS DTP-rel. MOV{N,Z} 15:0. |
| `TLSLD_MOVW_DTPREL_G0_NC` | Likewise; MOVK; no check. |
| `TLSLD_ADD_DTPREL_HI12` | DTP-rel. ADD imm. from 23:12. |
| `TLSLD_ADD_DTPREL_LO12` | DTP-rel. ADD imm. from 11:0. |
| `TLSLD_ADD_DTPREL_LO12_NC` | Likewise; no ovfl. check. |
| `TLSLD_LDST8_DTPREL_LO12` | DTP-rel. LD/ST imm. 11:0. |
| `TLSLD_LDST8_DTPREL_LO12_NC` | Likewise; no check. |
| `TLSLD_LDST16_DTPREL_LO12` | DTP-rel. LD/ST imm. 11:1. |
| `TLSLD_LDST16_DTPREL_LO12_NC` | Likewise; no check. |
| `TLSLD_LDST32_DTPREL_LO12` | DTP-rel. LD/ST imm. 11:2. |
| `TLSLD_LDST32_DTPREL_LO12_NC` | Likewise; no check. |
| `TLSLD_LDST64_DTPREL_LO12` | DTP-rel. LD/ST imm. 11:3. |
| `TLSLD_LDST64_DTPREL_LO12_NC` | Likewise; no check. |
| `TLSIE_MOVW_GOTTPREL_G1` | GOT-rel. MOV{N,Z} 31:16. |
| `TLSIE_MOVW_GOTTPREL_G0_NC` | GOT-rel. MOVK 15:0. |
| `TLSIE_ADR_GOTTPREL_PAGE21` | Page-rel. ADRP 32:12. |
| `TLSIE_LD64_GOTTPREL_LO12_NC` | Direct LD off. 11:3. |
| `TLSIE_LD_GOTTPREL_PREL19` | PC-rel. load imm. 20:2. |
| `TLSLE_MOVW_TPREL_G2` | TLS TP-rel. MOV{N,Z} 47:32. |
| `TLSLE_MOVW_TPREL_G1` | TLS TP-rel. MOV{N,Z} 31:16. |
| `TLSLE_MOVW_TPREL_G1_NC` | Likewise; MOVK; no check. |
| `TLSLE_MOVW_TPREL_G0` | TLS TP-rel. MOV{N,Z} 15:0. |
| `TLSLE_MOVW_TPREL_G0_NC` | Likewise; MOVK; no check. |
| `TLSLE_ADD_TPREL_HI12` | TP-rel. ADD imm. 23:12. |
| `TLSLE_ADD_TPREL_LO12` | TP-rel. ADD imm. 11:0. |
| `TLSLE_ADD_TPREL_LO12_NC` | Likewise; no ovfl. check. |
| `TLSLE_LDST8_TPREL_LO12` | TP-rel. LD/ST off. 11:0. |
| `TLSLE_LDST8_TPREL_LO12_NC` | Likewise; no ovfl. check. |
| `TLSLE_LDST16_TPREL_LO12` | TP-rel. LD/ST off. 11:1. |
| `TLSLE_LDST16_TPREL_LO12_NC` | Likewise; no check. |
| `TLSLE_LDST32_TPREL_LO12` | TP-rel. LD/ST off. 11:2. |
| `TLSLE_LDST32_TPREL_LO12_NC` | Likewise; no check. |
| `TLSLE_LDST64_TPREL_LO12` | TP-rel. LD/ST off. 11:3. |
| `TLSLE_LDST64_TPREL_LO12_NC` | Likewise; no check. |
| `TLSDESC_LD_PREL19` | PC-rel. load immediate 20:2. |
| `TLSDESC_ADR_PREL21` | PC-rel. ADR immediate 20:0. |
| `TLSDESC_ADR_PAGE21` | Page-rel. ADRP imm. 32:12. |
| `TLSDESC_LD64_LO12` | Direct LD off. from 11:3. |
| `TLSDESC_ADD_LO12` | Direct ADD imm. from 11:0. |
| `TLSDESC_OFF_G1` | GOT-rel. MOV{N,Z} imm. 31:16. |
| `TLSDESC_OFF_G0_NC` | GOT-rel. MOVK imm. 15:0; no ck. |
| `TLSDESC_LDR` | Relax LDR. |
| `TLSDESC_ADD` | Relax ADD. |
| `TLSDESC_CALL` | Relax BLR. |
| `TLSLE_LDST128_TPREL_LO12` | TP-rel. LD/ST off. 11:4. |
| `TLSLE_LDST128_TPREL_LO12_NC` | Likewise; no check. |
| `TLSLD_LDST128_DTPREL_LO12` | DTP-rel. LD/ST imm. 11:4. |
| `TLSLD_LDST128_DTPREL_LO12_NC` | Likewise; no check. |
| `COPY` | Copy symbol at runtime. |
| `GLOB_DAT` | Create GOT entry. |
| `JUMP_SLOT` | Create PLT entry. |
| `RELATIVE` | Adjust by program base. |
| `TLS_DTPMOD` | Module number, 64 bit. |
| `TLS_DTPREL` | Module-relative offset, 64 bit. |
| `TLS_TPREL` | TP-relative offset, 64 bit. |
| `TLSDESC` | TLS Descriptor. |
| `IRELATIVE` | STT\_GNU\_IFUNC relocation. |
| `_` |  |

</details>

---

### <a id="type-r-riscv"></a>`R_RISCV`

<details class="declaration-card" open>
<summary>Container – RISC-V relocations</summary>

RISC-V relocations.

```zig
pub const R_RISCV = enum(u32) {
    NONE = 0,
    @"32" = 1,
    @"64" = 2,
    RELATIVE = 3,
    COPY = 4,
    JUMP_SLOT = 5,
    TLS_DTPMOD32 = 6,
    TLS_DTPMOD64 = 7,
    TLS_DTPREL32 = 8,
    TLS_DTPREL64 = 9,
    TLS_TPREL32 = 10,
    TLS_TPREL64 = 11,
    TLSDESC = 12,
    BRANCH = 16,
    JAL = 17,
    CALL = 18,
    CALL_PLT = 19,
    GOT_HI20 = 20,
    TLS_GOT_HI20 = 21,
    TLS_GD_HI20 = 22,
    PCREL_HI20 = 23,
    PCREL_LO12_I = 24,
    PCREL_LO12_S = 25,
    HI20 = 26,
    LO12_I = 27,
    LO12_S = 28,
    TPREL_HI20 = 29,
    TPREL_LO12_I = 30,
    TPREL_LO12_S = 31,
    TPREL_ADD = 32,
    ADD8 = 33,
    ADD16 = 34,
    ADD32 = 35,
    ADD64 = 36,
    SUB8 = 37,
    SUB16 = 38,
    SUB32 = 39,
    SUB64 = 40,
    GNU_VTINHERIT = 41,
    GNU_VTENTRY = 42,
    ALIGN = 43,
    RVC_BRANCH = 44,
    RVC_JUMP = 45,
    RVC_LUI = 46,
    GPREL_I = 47,
    GPREL_S = 48,
    TPREL_I = 49,
    TPREL_S = 50,
    RELAX = 51,
    SUB6 = 52,
    SET6 = 53,
    SET8 = 54,
    SET16 = 55,
    SET32 = 56,
    @"32_PCREL" = 57,
    IRELATIVE = 58,
    PLT32 = 59,
    SET_ULEB128 = 60,
    SUB_ULEB128 = 61,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` |  |
| `@"32"` |  |
| `@"64"` |  |
| `RELATIVE` |  |
| `COPY` |  |
| `JUMP_SLOT` |  |
| `TLS_DTPMOD32` |  |
| `TLS_DTPMOD64` |  |
| `TLS_DTPREL32` |  |
| `TLS_DTPREL64` |  |
| `TLS_TPREL32` |  |
| `TLS_TPREL64` |  |
| `TLSDESC` |  |
| `BRANCH` |  |
| `JAL` |  |
| `CALL` |  |
| `CALL_PLT` |  |
| `GOT_HI20` |  |
| `TLS_GOT_HI20` |  |
| `TLS_GD_HI20` |  |
| `PCREL_HI20` |  |
| `PCREL_LO12_I` |  |
| `PCREL_LO12_S` |  |
| `HI20` |  |
| `LO12_I` |  |
| `LO12_S` |  |
| `TPREL_HI20` |  |
| `TPREL_LO12_I` |  |
| `TPREL_LO12_S` |  |
| `TPREL_ADD` |  |
| `ADD8` |  |
| `ADD16` |  |
| `ADD32` |  |
| `ADD64` |  |
| `SUB8` |  |
| `SUB16` |  |
| `SUB32` |  |
| `SUB64` |  |
| `GNU_VTINHERIT` |  |
| `GNU_VTENTRY` |  |
| `ALIGN` |  |
| `RVC_BRANCH` |  |
| `RVC_JUMP` |  |
| `RVC_LUI` |  |
| `GPREL_I` |  |
| `GPREL_S` |  |
| `TPREL_I` |  |
| `TPREL_S` |  |
| `RELAX` |  |
| `SUB6` |  |
| `SET6` |  |
| `SET8` |  |
| `SET16` |  |
| `SET32` |  |
| `@"32_PCREL"` |  |
| `IRELATIVE` |  |
| `PLT32` |  |
| `SET_ULEB128` |  |
| `SUB_ULEB128` |  |
| `_` |  |

</details>

---

### <a id="type-r-ppc64"></a>`R_PPC64`

<details class="declaration-card" open>
<summary>Container – PowerPC64 relocations</summary>

PowerPC64 relocations.

```zig
pub const R_PPC64 = enum(u32) {
    NONE = 0,
    ADDR32 = 1,
    ADDR24 = 2,
    ADDR16 = 3,
    ADDR16_LO = 4,
    ADDR16_HI = 5,
    ADDR16_HA = 6,
    ADDR14 = 7,
    ADDR14_BRTAKEN = 8,
    ADDR14_BRNTAKEN = 9,
    REL24 = 10,
    REL14 = 11,
    REL14_BRTAKEN = 12,
    REL14_BRNTAKEN = 13,
    GOT16 = 14,
    GOT16_LO = 15,
    GOT16_HI = 16,
    GOT16_HA = 17,
    COPY = 19,
    GLOB_DAT = 20,
    JMP_SLOT = 21,
    RELATIVE = 22,
    REL32 = 26,
    PLT16_LO = 29,
    PLT16_HI = 30,
    PLT16_HA = 31,
    ADDR64 = 38,
    ADDR16_HIGHER = 39,
    ADDR16_HIGHERA = 40,
    ADDR16_HIGHEST = 41,
    ADDR16_HIGHESTA = 42,
    REL64 = 44,
    TOC16 = 47,
    TOC16_LO = 48,
    TOC16_HI = 49,
    TOC16_HA = 50,
    TOC = 51,
    ADDR16_DS = 56,
    ADDR16_LO_DS = 57,
    GOT16_DS = 58,
    GOT16_LO_DS = 59,
    PLT16_LO_DS = 60,
    TOC16_DS = 63,
    TOC16_LO_DS = 64,
    TLS = 67,
    DTPMOD64 = 68,
    TPREL16 = 69,
    TPREL16_LO = 70,
    TPREL16_HI = 71,
    TPREL16_HA = 72,
    TPREL64 = 73,
    DTPREL16 = 74,
    DTPREL16_LO = 75,
    DTPREL16_HI = 76,
    DTPREL16_HA = 77,
    DTPREL64 = 78,
    GOT_TLSGD16 = 79,
    GOT_TLSGD16_LO = 80,
    GOT_TLSGD16_HI = 81,
    GOT_TLSGD16_HA = 82,
    GOT_TLSLD16 = 83,
    GOT_TLSLD16_LO = 84,
    GOT_TLSLD16_HI = 85,
    GOT_TLSLD16_HA = 86,
    GOT_TPREL16_DS = 87,
    GOT_TPREL16_LO_DS = 88,
    GOT_TPREL16_HI = 89,
    GOT_TPREL16_HA = 90,
    GOT_DTPREL16_DS = 91,
    GOT_DTPREL16_LO_DS = 92,
    GOT_DTPREL16_HI = 93,
    GOT_DTPREL16_HA = 94,
    TPREL16_DS = 95,
    TPREL16_LO_DS = 96,
    TPREL16_HIGHER = 97,
    TPREL16_HIGHERA = 98,
    TPREL16_HIGHEST = 99,
    TPREL16_HIGHESTA = 100,
    DTPREL16_DS = 101,
    DTPREL16_LO_DS = 102,
    DTPREL16_HIGHER = 103,
    DTPREL16_HIGHERA = 104,
    DTPREL16_HIGHEST = 105,
    DTPREL16_HIGHESTA = 106,
    TLSGD = 107,
    TLSLD = 108,
    ADDR16_HIGH = 110,
    ADDR16_HIGHA = 111,
    TPREL16_HIGH = 112,
    TPREL16_HIGHA = 113,
    DTPREL16_HIGH = 114,
    DTPREL16_HIGHA = 115,
    REL24_NOTOC = 116,
    PLTSEQ = 119,
    PLTCALL = 120,
    PLTSEQ_NOTOC = 121,
    PLTCALL_NOTOC = 122,
    PCREL_OPT = 123,
    PCREL34 = 132,
    GOT_PCREL34 = 133,
    PLT_PCREL34 = 134,
    PLT_PCREL34_NOTOC = 135,
    TPREL34 = 146,
    DTPREL34 = 147,
    GOT_TLSGD_PCREL34 = 148,
    GOT_TLSLD_PCREL34 = 149,
    GOT_TPREL_PCREL34 = 150,
    IRELATIVE = 248,
    REL16 = 249,
    REL16_LO = 250,
    REL16_HI = 251,
    REL16_HA = 252,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NONE` |  |
| `ADDR32` |  |
| `ADDR24` |  |
| `ADDR16` |  |
| `ADDR16_LO` |  |
| `ADDR16_HI` |  |
| `ADDR16_HA` |  |
| `ADDR14` |  |
| `ADDR14_BRTAKEN` |  |
| `ADDR14_BRNTAKEN` |  |
| `REL24` |  |
| `REL14` |  |
| `REL14_BRTAKEN` |  |
| `REL14_BRNTAKEN` |  |
| `GOT16` |  |
| `GOT16_LO` |  |
| `GOT16_HI` |  |
| `GOT16_HA` |  |
| `COPY` |  |
| `GLOB_DAT` |  |
| `JMP_SLOT` |  |
| `RELATIVE` |  |
| `REL32` |  |
| `PLT16_LO` |  |
| `PLT16_HI` |  |
| `PLT16_HA` |  |
| `ADDR64` |  |
| `ADDR16_HIGHER` |  |
| `ADDR16_HIGHERA` |  |
| `ADDR16_HIGHEST` |  |
| `ADDR16_HIGHESTA` |  |
| `REL64` |  |
| `TOC16` |  |
| `TOC16_LO` |  |
| `TOC16_HI` |  |
| `TOC16_HA` |  |
| `TOC` |  |
| `ADDR16_DS` |  |
| `ADDR16_LO_DS` |  |
| `GOT16_DS` |  |
| `GOT16_LO_DS` |  |
| `PLT16_LO_DS` |  |
| `TOC16_DS` |  |
| `TOC16_LO_DS` |  |
| `TLS` |  |
| `DTPMOD64` |  |
| `TPREL16` |  |
| `TPREL16_LO` |  |
| `TPREL16_HI` |  |
| `TPREL16_HA` |  |
| `TPREL64` |  |
| `DTPREL16` |  |
| `DTPREL16_LO` |  |
| `DTPREL16_HI` |  |
| `DTPREL16_HA` |  |
| `DTPREL64` |  |
| `GOT_TLSGD16` |  |
| `GOT_TLSGD16_LO` |  |
| `GOT_TLSGD16_HI` |  |
| `GOT_TLSGD16_HA` |  |
| `GOT_TLSLD16` |  |
| `GOT_TLSLD16_LO` |  |
| `GOT_TLSLD16_HI` |  |
| `GOT_TLSLD16_HA` |  |
| `GOT_TPREL16_DS` |  |
| `GOT_TPREL16_LO_DS` |  |
| `GOT_TPREL16_HI` |  |
| `GOT_TPREL16_HA` |  |
| `GOT_DTPREL16_DS` |  |
| `GOT_DTPREL16_LO_DS` |  |
| `GOT_DTPREL16_HI` |  |
| `GOT_DTPREL16_HA` |  |
| `TPREL16_DS` |  |
| `TPREL16_LO_DS` |  |
| `TPREL16_HIGHER` |  |
| `TPREL16_HIGHERA` |  |
| `TPREL16_HIGHEST` |  |
| `TPREL16_HIGHESTA` |  |
| `DTPREL16_DS` |  |
| `DTPREL16_LO_DS` |  |
| `DTPREL16_HIGHER` |  |
| `DTPREL16_HIGHERA` |  |
| `DTPREL16_HIGHEST` |  |
| `DTPREL16_HIGHESTA` |  |
| `TLSGD` |  |
| `TLSLD` |  |
| `ADDR16_HIGH` |  |
| `ADDR16_HIGHA` |  |
| `TPREL16_HIGH` |  |
| `TPREL16_HIGHA` |  |
| `DTPREL16_HIGH` |  |
| `DTPREL16_HIGHA` |  |
| `REL24_NOTOC` |  |
| `PLTSEQ` |  |
| `PLTCALL` |  |
| `PLTSEQ_NOTOC` |  |
| `PLTCALL_NOTOC` |  |
| `PCREL_OPT` |  |
| `PCREL34` |  |
| `GOT_PCREL34` |  |
| `PLT_PCREL34` |  |
| `PLT_PCREL34_NOTOC` |  |
| `TPREL34` |  |
| `DTPREL34` |  |
| `GOT_TLSGD_PCREL34` |  |
| `GOT_TLSLD_PCREL34` |  |
| `GOT_TPREL_PCREL34` |  |
| `IRELATIVE` |  |
| `REL16` |  |
| `REL16_LO` |  |
| `REL16_HI` |  |
| `REL16_HA` |  |
| `_` |  |

</details>

---

### <a id="type-stv"></a>`STV`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const STV = enum(u2) {
    DEFAULT = 0,
    INTERNAL = 1,
    HIDDEN = 2,
    PROTECTED = 3,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `DEFAULT` |  |
| `INTERNAL` |  |
| `HIDDEN` |  |
| `PROTECTED` |  |

</details>

---

### <a id="type-ar-hdr"></a>`ar_hdr`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const ar_hdr = extern struct {
    /// Member file name, sometimes / terminated.
    ar_name: [16]u8,

    /// File date, decimal seconds since Epoch.
    ar_date: [12]u8,

    /// User ID, in ASCII format.
    ar_uid: [6]u8,

    /// Group ID, in ASCII format.
    ar_gid: [6]u8,

    /// File mode, in ASCII octal.
    ar_mode: [8]u8,

    /// File size, in ASCII decimal.
    ar_size: [10]u8,

    /// Always contains ARFMAG.
    ar_fmag: [2]u8,

    pub fn date(self: ar_hdr) std.fmt.ParseIntError!u64 {
        const value = mem.trimEnd(u8, &self.ar_date, &[_]u8{0x20});
        return std.fmt.parseInt(u64, value, 10);
    }

    pub fn size(self: ar_hdr) std.fmt.ParseIntError!u32 {
        const value = mem.trimEnd(u8, &self.ar_size, &[_]u8{0x20});
        return std.fmt.parseInt(u32, value, 10);
    }

    pub fn isStrtab(self: ar_hdr) bool {
        return mem.eql(u8, &self.ar_name, STRNAME);
    }

    pub fn isSymtab(self: ar_hdr) bool {
        return mem.eql(u8, &self.ar_name, SYMNAME);
    }

    pub fn isSymtab64(self: ar_hdr) bool {
        return mem.eql(u8, &self.ar_name, SYM64NAME);
    }

    pub fn isSymdef(self: ar_hdr) bool {
        return mem.eql(u8, &self.ar_name, SYMDEFNAME);
    }

    pub fn isSymdefSorted(self: ar_hdr) bool {
        return mem.eql(u8, &self.ar_name, SYMDEFSORTEDNAME);
    }

    pub fn name(self: *const ar_hdr) ?[]const u8 {
        const value = &self.ar_name;
        if (value[0] == '/') return null;
        const sentinel = mem.indexOfScalar(u8, value, '/') orelse value.len;
        return value[0..sentinel];
    }

    pub fn nameOffset(self: ar_hdr) std.fmt.ParseIntError!?u32 {
        const value = &self.ar_name;
        if (value[0] != '/') return null;
        const trimmed = mem.trimEnd(u8, value, &[_]u8{0x20});
        return try std.fmt.parseInt(u32, trimmed[1..], 10);
    }
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `ar_name` | `[16]u8` | – | Member file name, sometimes / terminated. |
| `ar_date` | `[12]u8` | – | File date, decimal seconds since Epoch. |
| `ar_uid` | `[6]u8` | – | User ID, in ASCII format. |
| `ar_gid` | `[6]u8` | – | Group ID, in ASCII format. |
| `ar_mode` | `[8]u8` | – | File mode, in ASCII octal. |
| `ar_size` | `[10]u8` | – | File size, in ASCII decimal. |
| `ar_fmag` | `[2]u8` | – | Always contains ARFMAG. |

</details>

---

### <a id="type-gnu-hash"></a>`gnu_hash`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const gnu_hash = struct {

    // See https://flapenguin.me/elf-dt-gnu-hash

    pub const Header = extern struct {
        nbuckets: u32,
        symoffset: u32,
        bloom_size: u32,
        bloom_shift: u32,
    };

    pub const ChainEntry = packed struct(u32) {
        end_of_chain: bool,
        /// Contains the top bits of the hash value.
        hash: u31,
    };

    /// Calculate the hash value for a name
    pub fn calculate(name: []const u8) u32 {
        var hash: u32 = 5381;

        for (name) |char| {
            hash = (hash << 5) +% hash +% char;
        }

        return hash;
    }

    test calculate {
        try std.testing.expectEqual(0x00001505, calculate(""));
        try std.testing.expectEqual(0x156b2bb8, calculate("printf"));
        try std.testing.expectEqual(0x7c967e3f, calculate("exit"));
        try std.testing.expectEqual(0xbac212a0, calculate("syscall"));
        try std.testing.expectEqual(0x8ae9f18e, calculate("flapenguin.me"));
    }
}
```

</details>

---

## Constants (394)

### <a id="const-at-null"></a>`AT_NULL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_NULL = 0
```

</details>

---

### <a id="const-at-ignore"></a>`AT_IGNORE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_IGNORE = 1
```

</details>

---

### <a id="const-at-execfd"></a>`AT_EXECFD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_EXECFD = 2
```

</details>

---

### <a id="const-at-phdr"></a>`AT_PHDR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_PHDR = 3
```

</details>

---

### <a id="const-at-phent"></a>`AT_PHENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_PHENT = 4
```

</details>

---

### <a id="const-at-phnum"></a>`AT_PHNUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_PHNUM = 5
```

</details>

---

### <a id="const-at-pagesz"></a>`AT_PAGESZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_PAGESZ = 6
```

</details>

---

### <a id="const-at-base"></a>`AT_BASE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_BASE = 7
```

</details>

---

### <a id="const-at-flags"></a>`AT_FLAGS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_FLAGS = 8
```

</details>

---

### <a id="const-at-entry"></a>`AT_ENTRY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_ENTRY = 9
```

</details>

---

### <a id="const-at-notelf"></a>`AT_NOTELF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_NOTELF = 10
```

</details>

---

### <a id="const-at-uid"></a>`AT_UID`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_UID = 11
```

</details>

---

### <a id="const-at-euid"></a>`AT_EUID`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_EUID = 12
```

</details>

---

### <a id="const-at-gid"></a>`AT_GID`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_GID = 13
```

</details>

---

### <a id="const-at-egid"></a>`AT_EGID`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_EGID = 14
```

</details>

---

### <a id="const-at-clktck"></a>`AT_CLKTCK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_CLKTCK = 17
```

</details>

---

### <a id="const-at-platform"></a>`AT_PLATFORM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_PLATFORM = 15
```

</details>

---

### <a id="const-at-hwcap"></a>`AT_HWCAP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_HWCAP = 16
```

</details>

---

### <a id="const-at-fpucw"></a>`AT_FPUCW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_FPUCW = 18
```

</details>

---

### <a id="const-at-dcachebsize"></a>`AT_DCACHEBSIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_DCACHEBSIZE = 19
```

</details>

---

### <a id="const-at-icachebsize"></a>`AT_ICACHEBSIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_ICACHEBSIZE = 20
```

</details>

---

### <a id="const-at-ucachebsize"></a>`AT_UCACHEBSIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_UCACHEBSIZE = 21
```

</details>

---

### <a id="const-at-ignoreppc"></a>`AT_IGNOREPPC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_IGNOREPPC = 22
```

</details>

---

### <a id="const-at-secure"></a>`AT_SECURE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_SECURE = 23
```

</details>

---

### <a id="const-at-base-platform"></a>`AT_BASE_PLATFORM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_BASE_PLATFORM = 24
```

</details>

---

### <a id="const-at-random"></a>`AT_RANDOM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_RANDOM = 25
```

</details>

---

### <a id="const-at-hwcap2"></a>`AT_HWCAP2`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_HWCAP2 = 26
```

</details>

---

### <a id="const-at-execfn"></a>`AT_EXECFN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_EXECFN = 31
```

</details>

---

### <a id="const-at-sysinfo"></a>`AT_SYSINFO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_SYSINFO = 32
```

</details>

---

### <a id="const-at-sysinfo-ehdr"></a>`AT_SYSINFO_EHDR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_SYSINFO_EHDR = 33
```

</details>

---

### <a id="const-at-l1i-cacheshape"></a>`AT_L1I_CACHESHAPE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L1I_CACHESHAPE = 34
```

</details>

---

### <a id="const-at-l1d-cacheshape"></a>`AT_L1D_CACHESHAPE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L1D_CACHESHAPE = 35
```

</details>

---

### <a id="const-at-l2-cacheshape"></a>`AT_L2_CACHESHAPE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L2_CACHESHAPE = 36
```

</details>

---

### <a id="const-at-l3-cacheshape"></a>`AT_L3_CACHESHAPE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L3_CACHESHAPE = 37
```

</details>

---

### <a id="const-at-l1i-cachesize"></a>`AT_L1I_CACHESIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L1I_CACHESIZE = 40
```

</details>

---

### <a id="const-at-l1i-cachegeometry"></a>`AT_L1I_CACHEGEOMETRY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L1I_CACHEGEOMETRY = 41
```

</details>

---

### <a id="const-at-l1d-cachesize"></a>`AT_L1D_CACHESIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L1D_CACHESIZE = 42
```

</details>

---

### <a id="const-at-l1d-cachegeometry"></a>`AT_L1D_CACHEGEOMETRY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L1D_CACHEGEOMETRY = 43
```

</details>

---

### <a id="const-at-l2-cachesize"></a>`AT_L2_CACHESIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L2_CACHESIZE = 44
```

</details>

---

### <a id="const-at-l2-cachegeometry"></a>`AT_L2_CACHEGEOMETRY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L2_CACHEGEOMETRY = 45
```

</details>

---

### <a id="const-at-l3-cachesize"></a>`AT_L3_CACHESIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L3_CACHESIZE = 46
```

</details>

---

### <a id="const-at-l3-cachegeometry"></a>`AT_L3_CACHEGEOMETRY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_L3_CACHEGEOMETRY = 47
```

</details>

---

### <a id="const-dt-null"></a>`DT_NULL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_NULL = 0
```

</details>

---

### <a id="const-dt-needed"></a>`DT_NEEDED`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_NEEDED = 1
```

</details>

---

### <a id="const-dt-pltrelsz"></a>`DT_PLTRELSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PLTRELSZ = 2
```

</details>

---

### <a id="const-dt-pltgot"></a>`DT_PLTGOT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PLTGOT = 3
```

</details>

---

### <a id="const-dt-hash"></a>`DT_HASH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_HASH = 4
```

</details>

---

### <a id="const-dt-strtab"></a>`DT_STRTAB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_STRTAB = 5
```

</details>

---

### <a id="const-dt-symtab"></a>`DT_SYMTAB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SYMTAB = 6
```

</details>

---

### <a id="const-dt-rela"></a>`DT_RELA`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELA = 7
```

</details>

---

### <a id="const-dt-relasz"></a>`DT_RELASZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELASZ = 8
```

</details>

---

### <a id="const-dt-relaent"></a>`DT_RELAENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELAENT = 9
```

</details>

---

### <a id="const-dt-strsz"></a>`DT_STRSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_STRSZ = 10
```

</details>

---

### <a id="const-dt-syment"></a>`DT_SYMENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SYMENT = 11
```

</details>

---

### <a id="const-dt-init"></a>`DT_INIT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_INIT = 12
```

</details>

---

### <a id="const-dt-fini"></a>`DT_FINI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_FINI = 13
```

</details>

---

### <a id="const-dt-soname"></a>`DT_SONAME`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SONAME = 14
```

</details>

---

### <a id="const-dt-rpath"></a>`DT_RPATH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RPATH = 15
```

</details>

---

### <a id="const-dt-symbolic"></a>`DT_SYMBOLIC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SYMBOLIC = 16
```

</details>

---

### <a id="const-dt-rel"></a>`DT_REL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_REL = 17
```

</details>

---

### <a id="const-dt-relsz"></a>`DT_RELSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELSZ = 18
```

</details>

---

### <a id="const-dt-relent"></a>`DT_RELENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELENT = 19
```

</details>

---

### <a id="const-dt-pltrel"></a>`DT_PLTREL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PLTREL = 20
```

</details>

---

### <a id="const-dt-debug"></a>`DT_DEBUG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_DEBUG = 21
```

</details>

---

### <a id="const-dt-textrel"></a>`DT_TEXTREL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_TEXTREL = 22
```

</details>

---

### <a id="const-dt-jmprel"></a>`DT_JMPREL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_JMPREL = 23
```

</details>

---

### <a id="const-dt-bind-now"></a>`DT_BIND_NOW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_BIND_NOW = 24
```

</details>

---

### <a id="const-dt-init-array"></a>`DT_INIT_ARRAY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_INIT_ARRAY = 25
```

</details>

---

### <a id="const-dt-fini-array"></a>`DT_FINI_ARRAY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_FINI_ARRAY = 26
```

</details>

---

### <a id="const-dt-init-arraysz"></a>`DT_INIT_ARRAYSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_INIT_ARRAYSZ = 27
```

</details>

---

### <a id="const-dt-fini-arraysz"></a>`DT_FINI_ARRAYSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_FINI_ARRAYSZ = 28
```

</details>

---

### <a id="const-dt-runpath"></a>`DT_RUNPATH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RUNPATH = 29
```

</details>

---

### <a id="const-dt-flags"></a>`DT_FLAGS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_FLAGS = 30
```

</details>

---

### <a id="const-dt-encoding"></a>`DT_ENCODING`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_ENCODING = 32
```

</details>

---

### <a id="const-dt-preinit-array"></a>`DT_PREINIT_ARRAY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PREINIT_ARRAY = 32
```

</details>

---

### <a id="const-dt-preinit-arraysz"></a>`DT_PREINIT_ARRAYSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PREINIT_ARRAYSZ = 33
```

</details>

---

### <a id="const-dt-symtab-shndx"></a>`DT_SYMTAB_SHNDX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SYMTAB_SHNDX = 34
```

</details>

---

### <a id="const-dt-relrsz"></a>`DT_RELRSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELRSZ = 35
```

</details>

---

### <a id="const-dt-relr"></a>`DT_RELR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELR = 36
```

</details>

---

### <a id="const-dt-relrent"></a>`DT_RELRENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELRENT = 37
```

</details>

---

### <a id="const-dt-num"></a>`DT_NUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_NUM = 38
```

</details>

---

### <a id="const-dt-loos"></a>`DT_LOOS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_LOOS = 0x6000000d
```

</details>

---

### <a id="const-dt-hios"></a>`DT_HIOS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_HIOS = 0x6ffff000
```

</details>

---

### <a id="const-dt-loproc"></a>`DT_LOPROC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_LOPROC = 0x70000000
```

</details>

---

### <a id="const-dt-hiproc"></a>`DT_HIPROC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_HIPROC = 0x7fffffff
```

</details>

---

### <a id="const-dt-procnum"></a>`DT_PROCNUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PROCNUM = DT_MIPS_NUM
```

</details>

---

### <a id="const-dt-valrnglo"></a>`DT_VALRNGLO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VALRNGLO = 0x6ffffd00
```

</details>

---

### <a id="const-dt-gnu-prelinked"></a>`DT_GNU_PRELINKED`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_GNU_PRELINKED = 0x6ffffdf5
```

</details>

---

### <a id="const-dt-gnu-conflictsz"></a>`DT_GNU_CONFLICTSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_GNU_CONFLICTSZ = 0x6ffffdf6
```

</details>

---

### <a id="const-dt-gnu-liblistsz"></a>`DT_GNU_LIBLISTSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_GNU_LIBLISTSZ = 0x6ffffdf7
```

</details>

---

### <a id="const-dt-checksum"></a>`DT_CHECKSUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_CHECKSUM = 0x6ffffdf8
```

</details>

---

### <a id="const-dt-pltpadsz"></a>`DT_PLTPADSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PLTPADSZ = 0x6ffffdf9
```

</details>

---

### <a id="const-dt-moveent"></a>`DT_MOVEENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MOVEENT = 0x6ffffdfa
```

</details>

---

### <a id="const-dt-movesz"></a>`DT_MOVESZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MOVESZ = 0x6ffffdfb
```

</details>

---

### <a id="const-dt-feature-1"></a>`DT_FEATURE_1`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_FEATURE_1 = 0x6ffffdfc
```

</details>

---

### <a id="const-dt-posflag-1"></a>`DT_POSFLAG_1`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_POSFLAG_1 = 0x6ffffdfd
```

</details>

---

### <a id="const-dt-syminsz"></a>`DT_SYMINSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SYMINSZ = 0x6ffffdfe
```

</details>

---

### <a id="const-dt-syminent"></a>`DT_SYMINENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SYMINENT = 0x6ffffdff
```

</details>

---

### <a id="const-dt-valrnghi"></a>`DT_VALRNGHI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VALRNGHI = 0x6ffffdff
```

</details>

---

### <a id="const-dt-valnum"></a>`DT_VALNUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VALNUM = 12
```

</details>

---

### <a id="const-dt-addrrnglo"></a>`DT_ADDRRNGLO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_ADDRRNGLO = 0x6ffffe00
```

</details>

---

### <a id="const-dt-gnu-hash"></a>`DT_GNU_HASH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_GNU_HASH = 0x6ffffef5
```

</details>

---

### <a id="const-dt-tlsdesc-plt"></a>`DT_TLSDESC_PLT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_TLSDESC_PLT = 0x6ffffef6
```

</details>

---

### <a id="const-dt-tlsdesc-got"></a>`DT_TLSDESC_GOT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_TLSDESC_GOT = 0x6ffffef7
```

</details>

---

### <a id="const-dt-gnu-conflict"></a>`DT_GNU_CONFLICT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_GNU_CONFLICT = 0x6ffffef8
```

</details>

---

### <a id="const-dt-gnu-liblist"></a>`DT_GNU_LIBLIST`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_GNU_LIBLIST = 0x6ffffef9
```

</details>

---

### <a id="const-dt-config"></a>`DT_CONFIG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_CONFIG = 0x6ffffefa
```

</details>

---

### <a id="const-dt-depaudit"></a>`DT_DEPAUDIT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_DEPAUDIT = 0x6ffffefb
```

</details>

---

### <a id="const-dt-audit"></a>`DT_AUDIT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_AUDIT = 0x6ffffefc
```

</details>

---

### <a id="const-dt-pltpad"></a>`DT_PLTPAD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PLTPAD = 0x6ffffefd
```

</details>

---

### <a id="const-dt-movetab"></a>`DT_MOVETAB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MOVETAB = 0x6ffffefe
```

</details>

---

### <a id="const-dt-syminfo"></a>`DT_SYMINFO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SYMINFO = 0x6ffffeff
```

</details>

---

### <a id="const-dt-addrrnghi"></a>`DT_ADDRRNGHI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_ADDRRNGHI = 0x6ffffeff
```

</details>

---

### <a id="const-dt-addrnum"></a>`DT_ADDRNUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_ADDRNUM = 11
```

</details>

---

### <a id="const-dt-versym"></a>`DT_VERSYM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VERSYM = 0x6ffffff0
```

</details>

---

### <a id="const-dt-relacount"></a>`DT_RELACOUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELACOUNT = 0x6ffffff9
```

</details>

---

### <a id="const-dt-relcount"></a>`DT_RELCOUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_RELCOUNT = 0x6ffffffa
```

</details>

---

### <a id="const-dt-flags-1"></a>`DT_FLAGS_1`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_FLAGS_1 = 0x6ffffffb
```

</details>

---

### <a id="const-dt-verdef"></a>`DT_VERDEF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VERDEF = 0x6ffffffc
```

</details>

---

### <a id="const-dt-verdefnum"></a>`DT_VERDEFNUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VERDEFNUM = 0x6ffffffd
```

</details>

---

### <a id="const-dt-verneed"></a>`DT_VERNEED`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VERNEED = 0x6ffffffe
```

</details>

---

### <a id="const-dt-verneednum"></a>`DT_VERNEEDNUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VERNEEDNUM = 0x6fffffff
```

</details>

---

### <a id="const-dt-versiontagnum"></a>`DT_VERSIONTAGNUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_VERSIONTAGNUM = 16
```

</details>

---

### <a id="const-dt-auxiliary"></a>`DT_AUXILIARY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_AUXILIARY = 0x7ffffffd
```

</details>

---

### <a id="const-dt-filter"></a>`DT_FILTER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_FILTER = 0x7fffffff
```

</details>

---

### <a id="const-dt-extranum"></a>`DT_EXTRANUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_EXTRANUM = 3
```

</details>

---

### <a id="const-dt-sparc-register"></a>`DT_SPARC_REGISTER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SPARC_REGISTER = 0x70000001
```

</details>

---

### <a id="const-dt-sparc-num"></a>`DT_SPARC_NUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_SPARC_NUM = 2
```

</details>

---

### <a id="const-dt-mips-rld-version"></a>`DT_MIPS_RLD_VERSION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_RLD_VERSION = 0x70000001
```

</details>

---

### <a id="const-dt-mips-time-stamp"></a>`DT_MIPS_TIME_STAMP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_TIME_STAMP = 0x70000002
```

</details>

---

### <a id="const-dt-mips-ichecksum"></a>`DT_MIPS_ICHECKSUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_ICHECKSUM = 0x70000003
```

</details>

---

### <a id="const-dt-mips-iversion"></a>`DT_MIPS_IVERSION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_IVERSION = 0x70000004
```

</details>

---

### <a id="const-dt-mips-flags"></a>`DT_MIPS_FLAGS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_FLAGS = 0x70000005
```

</details>

---

### <a id="const-dt-mips-base-address"></a>`DT_MIPS_BASE_ADDRESS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_BASE_ADDRESS = 0x70000006
```

</details>

---

### <a id="const-dt-mips-msym"></a>`DT_MIPS_MSYM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_MSYM = 0x70000007
```

</details>

---

### <a id="const-dt-mips-conflict"></a>`DT_MIPS_CONFLICT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_CONFLICT = 0x70000008
```

</details>

---

### <a id="const-dt-mips-liblist"></a>`DT_MIPS_LIBLIST`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_LIBLIST = 0x70000009
```

</details>

---

### <a id="const-dt-mips-local-gotno"></a>`DT_MIPS_LOCAL_GOTNO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_LOCAL_GOTNO = 0x7000000a
```

</details>

---

### <a id="const-dt-mips-conflictno"></a>`DT_MIPS_CONFLICTNO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_CONFLICTNO = 0x7000000b
```

</details>

---

### <a id="const-dt-mips-liblistno"></a>`DT_MIPS_LIBLISTNO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_LIBLISTNO = 0x70000010
```

</details>

---

### <a id="const-dt-mips-symtabno"></a>`DT_MIPS_SYMTABNO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_SYMTABNO = 0x70000011
```

</details>

---

### <a id="const-dt-mips-unrefextno"></a>`DT_MIPS_UNREFEXTNO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_UNREFEXTNO = 0x70000012
```

</details>

---

### <a id="const-dt-mips-gotsym"></a>`DT_MIPS_GOTSYM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_GOTSYM = 0x70000013
```

</details>

---

### <a id="const-dt-mips-hipageno"></a>`DT_MIPS_HIPAGENO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_HIPAGENO = 0x70000014
```

</details>

---

### <a id="const-dt-mips-rld-map"></a>`DT_MIPS_RLD_MAP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_RLD_MAP = 0x70000016
```

</details>

---

### <a id="const-dt-mips-delta-class"></a>`DT_MIPS_DELTA_CLASS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_CLASS = 0x70000017
```

</details>

---

### <a id="const-dt-mips-delta-class-no"></a>`DT_MIPS_DELTA_CLASS_NO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_CLASS_NO = 0x70000018
```

</details>

---

### <a id="const-dt-mips-delta-instance"></a>`DT_MIPS_DELTA_INSTANCE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_INSTANCE = 0x70000019
```

</details>

---

### <a id="const-dt-mips-delta-instance-no"></a>`DT_MIPS_DELTA_INSTANCE_NO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_INSTANCE_NO = 0x7000001a
```

</details>

---

### <a id="const-dt-mips-delta-reloc"></a>`DT_MIPS_DELTA_RELOC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_RELOC = 0x7000001b
```

</details>

---

### <a id="const-dt-mips-delta-reloc-no"></a>`DT_MIPS_DELTA_RELOC_NO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_RELOC_NO = 0x7000001c
```

</details>

---

### <a id="const-dt-mips-delta-sym"></a>`DT_MIPS_DELTA_SYM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_SYM = 0x7000001d
```

</details>

---

### <a id="const-dt-mips-delta-sym-no"></a>`DT_MIPS_DELTA_SYM_NO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_SYM_NO = 0x7000001e
```

</details>

---

### <a id="const-dt-mips-delta-classsym"></a>`DT_MIPS_DELTA_CLASSSYM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_CLASSSYM = 0x70000020
```

</details>

---

### <a id="const-dt-mips-delta-classsym-no"></a>`DT_MIPS_DELTA_CLASSSYM_NO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DELTA_CLASSSYM_NO = 0x70000021
```

</details>

---

### <a id="const-dt-mips-cxx-flags"></a>`DT_MIPS_CXX_FLAGS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_CXX_FLAGS = 0x70000022
```

</details>

---

### <a id="const-dt-mips-pixie-init"></a>`DT_MIPS_PIXIE_INIT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_PIXIE_INIT = 0x70000023
```

</details>

---

### <a id="const-dt-mips-symbol-lib"></a>`DT_MIPS_SYMBOL_LIB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_SYMBOL_LIB = 0x70000024
```

</details>

---

### <a id="const-dt-mips-localpage-gotidx"></a>`DT_MIPS_LOCALPAGE_GOTIDX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_LOCALPAGE_GOTIDX = 0x70000025
```

</details>

---

### <a id="const-dt-mips-local-gotidx"></a>`DT_MIPS_LOCAL_GOTIDX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_LOCAL_GOTIDX = 0x70000026
```

</details>

---

### <a id="const-dt-mips-hidden-gotidx"></a>`DT_MIPS_HIDDEN_GOTIDX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_HIDDEN_GOTIDX = 0x70000027
```

</details>

---

### <a id="const-dt-mips-protected-gotidx"></a>`DT_MIPS_PROTECTED_GOTIDX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_PROTECTED_GOTIDX = 0x70000028
```

</details>

---

### <a id="const-dt-mips-options"></a>`DT_MIPS_OPTIONS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_OPTIONS = 0x70000029
```

</details>

---

### <a id="const-dt-mips-interface"></a>`DT_MIPS_INTERFACE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_INTERFACE = 0x7000002a
```

</details>

---

### <a id="const-dt-mips-dynstr-align"></a>`DT_MIPS_DYNSTR_ALIGN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_DYNSTR_ALIGN = 0x7000002b
```

</details>

---

### <a id="const-dt-mips-interface-size"></a>`DT_MIPS_INTERFACE_SIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_INTERFACE_SIZE = 0x7000002c
```

</details>

---

### <a id="const-dt-mips-rld-text-resolve-addr"></a>`DT_MIPS_RLD_TEXT_RESOLVE_ADDR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_RLD_TEXT_RESOLVE_ADDR = 0x7000002d
```

</details>

---

### <a id="const-dt-mips-perf-suffix"></a>`DT_MIPS_PERF_SUFFIX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_PERF_SUFFIX = 0x7000002e
```

</details>

---

### <a id="const-dt-mips-compact-size"></a>`DT_MIPS_COMPACT_SIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_COMPACT_SIZE = 0x7000002f
```

</details>

---

### <a id="const-dt-mips-gp-value"></a>`DT_MIPS_GP_VALUE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_GP_VALUE = 0x70000030
```

</details>

---

### <a id="const-dt-mips-aux-dynamic"></a>`DT_MIPS_AUX_DYNAMIC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_AUX_DYNAMIC = 0x70000031
```

</details>

---

### <a id="const-dt-mips-pltgot"></a>`DT_MIPS_PLTGOT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_PLTGOT = 0x70000032
```

</details>

---

### <a id="const-dt-mips-rwplt"></a>`DT_MIPS_RWPLT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_RWPLT = 0x70000034
```

</details>

---

### <a id="const-dt-mips-rld-map-rel"></a>`DT_MIPS_RLD_MAP_REL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_RLD_MAP_REL = 0x70000035
```

</details>

---

### <a id="const-dt-mips-num"></a>`DT_MIPS_NUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_MIPS_NUM = 0x36
```

</details>

---

### <a id="const-dt-alpha-pltro"></a>`DT_ALPHA_PLTRO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_ALPHA_PLTRO = (DT_LOPROC + 0)
```

</details>

---

### <a id="const-dt-alpha-num"></a>`DT_ALPHA_NUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_ALPHA_NUM = 1
```

</details>

---

### <a id="const-dt-ppc-got"></a>`DT_PPC_GOT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PPC_GOT = (DT_LOPROC + 0)
```

</details>

---

### <a id="const-dt-ppc-opt"></a>`DT_PPC_OPT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PPC_OPT = (DT_LOPROC + 1)
```

</details>

---

### <a id="const-dt-ppc-num"></a>`DT_PPC_NUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PPC_NUM = 2
```

</details>

---

### <a id="const-dt-ppc64-glink"></a>`DT_PPC64_GLINK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PPC64_GLINK = (DT_LOPROC + 0)
```

</details>

---

### <a id="const-dt-ppc64-opd"></a>`DT_PPC64_OPD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PPC64_OPD = (DT_LOPROC + 1)
```

</details>

---

### <a id="const-dt-ppc64-opdsz"></a>`DT_PPC64_OPDSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PPC64_OPDSZ = (DT_LOPROC + 2)
```

</details>

---

### <a id="const-dt-ppc64-opt"></a>`DT_PPC64_OPT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PPC64_OPT = (DT_LOPROC + 3)
```

</details>

---

### <a id="const-dt-ppc64-num"></a>`DT_PPC64_NUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_PPC64_NUM = 4
```

</details>

---

### <a id="const-dt-ia-64-plt-reserve"></a>`DT_IA_64_PLT_RESERVE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_IA_64_PLT_RESERVE = (DT_LOPROC + 0)
```

</details>

---

### <a id="const-dt-ia-64-num"></a>`DT_IA_64_NUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_IA_64_NUM = 1
```

</details>

---

### <a id="const-dt-nios2-gp"></a>`DT_NIOS2_GP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT_NIOS2_GP = 0x70000002
```

</details>

---

### <a id="const-df-origin"></a>`DF_ORIGIN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_ORIGIN = 0x00000001
```

</details>

---

### <a id="const-df-symbolic"></a>`DF_SYMBOLIC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_SYMBOLIC = 0x00000002
```

</details>

---

### <a id="const-df-textrel"></a>`DF_TEXTREL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_TEXTREL = 0x00000004
```

</details>

---

### <a id="const-df-bind-now"></a>`DF_BIND_NOW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_BIND_NOW = 0x00000008
```

</details>

---

### <a id="const-df-static-tls"></a>`DF_STATIC_TLS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_STATIC_TLS = 0x00000010
```

</details>

---

### <a id="const-df-1-now"></a>`DF_1_NOW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NOW = 0x00000001
```

</details>

---

### <a id="const-df-1-global"></a>`DF_1_GLOBAL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_GLOBAL = 0x00000002
```

</details>

---

### <a id="const-df-1-group"></a>`DF_1_GROUP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_GROUP = 0x00000004
```

</details>

---

### <a id="const-df-1-nodelete"></a>`DF_1_NODELETE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NODELETE = 0x00000008
```

</details>

---

### <a id="const-df-1-loadfltr"></a>`DF_1_LOADFLTR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_LOADFLTR = 0x00000010
```

</details>

---

### <a id="const-df-1-initfirst"></a>`DF_1_INITFIRST`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_INITFIRST = 0x00000020
```

</details>

---

### <a id="const-df-1-noopen"></a>`DF_1_NOOPEN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NOOPEN = 0x00000040
```

</details>

---

### <a id="const-df-1-origin"></a>`DF_1_ORIGIN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_ORIGIN = 0x00000080
```

</details>

---

### <a id="const-df-1-direct"></a>`DF_1_DIRECT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_DIRECT = 0x00000100
```

</details>

---

### <a id="const-df-1-trans"></a>`DF_1_TRANS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_TRANS = 0x00000200
```

</details>

---

### <a id="const-df-1-interpose"></a>`DF_1_INTERPOSE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_INTERPOSE = 0x00000400
```

</details>

---

### <a id="const-df-1-nodeflib"></a>`DF_1_NODEFLIB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NODEFLIB = 0x00000800
```

</details>

---

### <a id="const-df-1-nodump"></a>`DF_1_NODUMP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NODUMP = 0x00001000
```

</details>

---

### <a id="const-df-1-confalt"></a>`DF_1_CONFALT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_CONFALT = 0x00002000
```

</details>

---

### <a id="const-df-1-endfiltee"></a>`DF_1_ENDFILTEE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_ENDFILTEE = 0x00004000
```

</details>

---

### <a id="const-df-1-dispreldne"></a>`DF_1_DISPRELDNE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_DISPRELDNE = 0x00008000
```

</details>

---

### <a id="const-df-1-disprelpnd"></a>`DF_1_DISPRELPND`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_DISPRELPND = 0x00010000
```

</details>

---

### <a id="const-df-1-nodirect"></a>`DF_1_NODIRECT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NODIRECT = 0x00020000
```

</details>

---

### <a id="const-df-1-ignmuldef"></a>`DF_1_IGNMULDEF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_IGNMULDEF = 0x00040000
```

</details>

---

### <a id="const-df-1-noksyms"></a>`DF_1_NOKSYMS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NOKSYMS = 0x00080000
```

</details>

---

### <a id="const-df-1-nohdr"></a>`DF_1_NOHDR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NOHDR = 0x00100000
```

</details>

---

### <a id="const-df-1-edited"></a>`DF_1_EDITED`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_EDITED = 0x00200000
```

</details>

---

### <a id="const-df-1-noreloc"></a>`DF_1_NORELOC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_NORELOC = 0x00400000
```

</details>

---

### <a id="const-df-1-symintpose"></a>`DF_1_SYMINTPOSE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_SYMINTPOSE = 0x00800000
```

</details>

---

### <a id="const-df-1-globaudit"></a>`DF_1_GLOBAUDIT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_GLOBAUDIT = 0x01000000
```

</details>

---

### <a id="const-df-1-singleton"></a>`DF_1_SINGLETON`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_SINGLETON = 0x02000000
```

</details>

---

### <a id="const-df-1-stub"></a>`DF_1_STUB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_STUB = 0x04000000
```

</details>

---

### <a id="const-df-1-pie"></a>`DF_1_PIE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DF_1_PIE = 0x08000000
```

</details>

---

### <a id="const-ver-flg-base"></a>`VER_FLG_BASE`

<details class="declaration-card" open>
<summary>Constant – Version definition of the file itself</summary>

Version definition of the file itself

```zig
pub const VER_FLG_BASE = 1
```

</details>

---

### <a id="const-ver-flg-weak"></a>`VER_FLG_WEAK`

<details class="declaration-card" open>
<summary>Constant – Weak version identifier</summary>

Weak version identifier

```zig
pub const VER_FLG_WEAK = 2
```

</details>

---

### <a id="const-pt-null"></a>`PT_NULL`

<details class="declaration-card" open>
<summary>Constant – Program header table entry unused</summary>

Program header table entry unused

```zig
pub const PT_NULL = 0
```

</details>

---

### <a id="const-pt-load"></a>`PT_LOAD`

<details class="declaration-card" open>
<summary>Constant – Loadable program segment</summary>

Loadable program segment

```zig
pub const PT_LOAD = 1
```

</details>

---

### <a id="const-pt-dynamic"></a>`PT_DYNAMIC`

<details class="declaration-card" open>
<summary>Constant – Dynamic linking information</summary>

Dynamic linking information

```zig
pub const PT_DYNAMIC = 2
```

</details>

---

### <a id="const-pt-interp"></a>`PT_INTERP`

<details class="declaration-card" open>
<summary>Constant – Program interpreter</summary>

Program interpreter

```zig
pub const PT_INTERP = 3
```

</details>

---

### <a id="const-pt-note"></a>`PT_NOTE`

<details class="declaration-card" open>
<summary>Constant – Auxiliary information</summary>

Auxiliary information

```zig
pub const PT_NOTE = 4
```

</details>

---

### <a id="const-pt-shlib"></a>`PT_SHLIB`

<details class="declaration-card" open>
<summary>Constant – Reserved</summary>

Reserved

```zig
pub const PT_SHLIB = 5
```

</details>

---

### <a id="const-pt-phdr"></a>`PT_PHDR`

<details class="declaration-card" open>
<summary>Constant – Entry for header table itself</summary>

Entry for header table itself

```zig
pub const PT_PHDR = 6
```

</details>

---

### <a id="const-pt-tls"></a>`PT_TLS`

<details class="declaration-card" open>
<summary>Constant – Thread-local storage segment</summary>

Thread-local storage segment

```zig
pub const PT_TLS = 7
```

</details>

---

### <a id="const-pt-num"></a>`PT_NUM`

<details class="declaration-card" open>
<summary>Constant – Number of defined types</summary>

Number of defined types

```zig
pub const PT_NUM = 8
```

</details>

---

### <a id="const-pt-loos"></a>`PT_LOOS`

<details class="declaration-card" open>
<summary>Constant – Start of OS-specific</summary>

Start of OS-specific

```zig
pub const PT_LOOS = 0x60000000
```

</details>

---

### <a id="const-pt-gnu-eh-frame"></a>`PT_GNU_EH_FRAME`

<details class="declaration-card" open>
<summary>Constant – GCC</summary>

GCC .eh_frame_hdr segment

```zig
pub const PT_GNU_EH_FRAME = 0x6474e550
```

</details>

---

### <a id="const-pt-gnu-stack"></a>`PT_GNU_STACK`

<details class="declaration-card" open>
<summary>Constant – Indicates stack executability</summary>

Indicates stack executability

```zig
pub const PT_GNU_STACK = 0x6474e551
```

</details>

---

### <a id="const-pt-gnu-relro"></a>`PT_GNU_RELRO`

<details class="declaration-card" open>
<summary>Constant – Read-only after relocation</summary>

Read-only after relocation

```zig
pub const PT_GNU_RELRO = 0x6474e552
```

</details>

---

### <a id="const-pt-losunw"></a>`PT_LOSUNW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const PT_LOSUNW = 0x6ffffffa
```

</details>

---

### <a id="const-pt-sunwbss"></a>`PT_SUNWBSS`

<details class="declaration-card" open>
<summary>Constant – Sun specific segment</summary>

Sun specific segment

```zig
pub const PT_SUNWBSS = 0x6ffffffa
```

</details>

---

### <a id="const-pt-sunwstack"></a>`PT_SUNWSTACK`

<details class="declaration-card" open>
<summary>Constant – Stack segment</summary>

Stack segment

```zig
pub const PT_SUNWSTACK = 0x6ffffffb
```

</details>

---

### <a id="const-pt-hisunw"></a>`PT_HISUNW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const PT_HISUNW = 0x6fffffff
```

</details>

---

### <a id="const-pt-hios"></a>`PT_HIOS`

<details class="declaration-card" open>
<summary>Constant – End of OS-specific</summary>

End of OS-specific

```zig
pub const PT_HIOS = 0x6fffffff
```

</details>

---

### <a id="const-pt-loproc"></a>`PT_LOPROC`

<details class="declaration-card" open>
<summary>Constant – Start of processor-specific</summary>

Start of processor-specific

```zig
pub const PT_LOPROC = 0x70000000
```

</details>

---

### <a id="const-pt-hiproc"></a>`PT_HIPROC`

<details class="declaration-card" open>
<summary>Constant – End of processor-specific</summary>

End of processor-specific

```zig
pub const PT_HIPROC = 0x7fffffff
```

</details>

---

### <a id="const-sht-null"></a>`SHT_NULL`

<details class="declaration-card" open>
<summary>Constant – Section header table entry unused</summary>

Section header table entry unused

```zig
pub const SHT_NULL = 0
```

</details>

---

### <a id="const-sht-progbits"></a>`SHT_PROGBITS`

<details class="declaration-card" open>
<summary>Constant – Program data</summary>

Program data

```zig
pub const SHT_PROGBITS = 1
```

</details>

---

### <a id="const-sht-symtab"></a>`SHT_SYMTAB`

<details class="declaration-card" open>
<summary>Constant – Symbol table</summary>

Symbol table

```zig
pub const SHT_SYMTAB = 2
```

</details>

---

### <a id="const-sht-strtab"></a>`SHT_STRTAB`

<details class="declaration-card" open>
<summary>Constant – String table</summary>

String table

```zig
pub const SHT_STRTAB = 3
```

</details>

---

### <a id="const-sht-rela"></a>`SHT_RELA`

<details class="declaration-card" open>
<summary>Constant – Relocation entries with addends</summary>

Relocation entries with addends

```zig
pub const SHT_RELA = 4
```

</details>

---

### <a id="const-sht-hash"></a>`SHT_HASH`

<details class="declaration-card" open>
<summary>Constant – Symbol hash table</summary>

Symbol hash table

```zig
pub const SHT_HASH = 5
```

</details>

---

### <a id="const-sht-dynamic"></a>`SHT_DYNAMIC`

<details class="declaration-card" open>
<summary>Constant – Dynamic linking information</summary>

Dynamic linking information

```zig
pub const SHT_DYNAMIC = 6
```

</details>

---

### <a id="const-sht-note"></a>`SHT_NOTE`

<details class="declaration-card" open>
<summary>Constant – Notes</summary>

Notes

```zig
pub const SHT_NOTE = 7
```

</details>

---

### <a id="const-sht-nobits"></a>`SHT_NOBITS`

<details class="declaration-card" open>
<summary>Constant – Program space with no data (bss)</summary>

Program space with no data (bss)

```zig
pub const SHT_NOBITS = 8
```

</details>

---

### <a id="const-sht-rel"></a>`SHT_REL`

<details class="declaration-card" open>
<summary>Constant – Relocation entries, no addends</summary>

Relocation entries, no addends

```zig
pub const SHT_REL = 9
```

</details>

---

### <a id="const-sht-shlib"></a>`SHT_SHLIB`

<details class="declaration-card" open>
<summary>Constant – Reserved</summary>

Reserved

```zig
pub const SHT_SHLIB = 10
```

</details>

---

### <a id="const-sht-dynsym"></a>`SHT_DYNSYM`

<details class="declaration-card" open>
<summary>Constant – Dynamic linker symbol table</summary>

Dynamic linker symbol table

```zig
pub const SHT_DYNSYM = 11
```

</details>

---

### <a id="const-sht-init-array"></a>`SHT_INIT_ARRAY`

<details class="declaration-card" open>
<summary>Constant – Array of constructors</summary>

Array of constructors

```zig
pub const SHT_INIT_ARRAY = 14
```

</details>

---

### <a id="const-sht-fini-array"></a>`SHT_FINI_ARRAY`

<details class="declaration-card" open>
<summary>Constant – Array of destructors</summary>

Array of destructors

```zig
pub const SHT_FINI_ARRAY = 15
```

</details>

---

### <a id="const-sht-preinit-array"></a>`SHT_PREINIT_ARRAY`

<details class="declaration-card" open>
<summary>Constant – Array of pre-constructors</summary>

Array of pre-constructors

```zig
pub const SHT_PREINIT_ARRAY = 16
```

</details>

---

### <a id="const-sht-group"></a>`SHT_GROUP`

<details class="declaration-card" open>
<summary>Constant – Section group</summary>

Section group

```zig
pub const SHT_GROUP = 17
```

</details>

---

### <a id="const-sht-symtab-shndx"></a>`SHT_SYMTAB_SHNDX`

<details class="declaration-card" open>
<summary>Constant – Extended section indices</summary>

Extended section indices

```zig
pub const SHT_SYMTAB_SHNDX = 18
```

</details>

---

### <a id="const-sht-loos"></a>`SHT_LOOS`

<details class="declaration-card" open>
<summary>Constant – Start of OS-specific</summary>

Start of OS-specific

```zig
pub const SHT_LOOS = 0x60000000
```

</details>

---

### <a id="const-sht-llvm-addrsig"></a>`SHT_LLVM_ADDRSIG`

<details class="declaration-card" open>
<summary>Constant – LLVM address-significance table</summary>

LLVM address-significance table

```zig
pub const SHT_LLVM_ADDRSIG = 0x6fff4c03
```

</details>

---

### <a id="const-sht-gnu-hash"></a>`SHT_GNU_HASH`

<details class="declaration-card" open>
<summary>Constant – GNU hash table</summary>

GNU hash table

```zig
pub const SHT_GNU_HASH = 0x6ffffff6
```

</details>

---

### <a id="const-sht-gnu-verdef"></a>`SHT_GNU_VERDEF`

<details class="declaration-card" open>
<summary>Constant – GNU version definition table</summary>

GNU version definition table

```zig
pub const SHT_GNU_VERDEF = 0x6ffffffd
```

</details>

---

### <a id="const-sht-gnu-verneed"></a>`SHT_GNU_VERNEED`

<details class="declaration-card" open>
<summary>Constant – GNU needed versions table</summary>

GNU needed versions table

```zig
pub const SHT_GNU_VERNEED = 0x6ffffffe
```

</details>

---

### <a id="const-sht-gnu-versym"></a>`SHT_GNU_VERSYM`

<details class="declaration-card" open>
<summary>Constant – GNU symbol version table</summary>

GNU symbol version table

```zig
pub const SHT_GNU_VERSYM = 0x6fffffff
```

</details>

---

### <a id="const-sht-hios"></a>`SHT_HIOS`

<details class="declaration-card" open>
<summary>Constant – End of OS-specific</summary>

End of OS-specific

```zig
pub const SHT_HIOS = 0x6fffffff
```

</details>

---

### <a id="const-sht-loproc"></a>`SHT_LOPROC`

<details class="declaration-card" open>
<summary>Constant – Start of processor-specific</summary>

Start of processor-specific

```zig
pub const SHT_LOPROC = 0x70000000
```

</details>

---

### <a id="const-sht-x86-64-unwind"></a>`SHT_X86_64_UNWIND`

<details class="declaration-card" open>
<summary>Constant – Unwind information</summary>

Unwind information

```zig
pub const SHT_X86_64_UNWIND = 0x70000001
```

</details>

---

### <a id="const-sht-hiproc"></a>`SHT_HIPROC`

<details class="declaration-card" open>
<summary>Constant – End of processor-specific</summary>

End of processor-specific

```zig
pub const SHT_HIPROC = 0x7fffffff
```

</details>

---

### <a id="const-sht-louser"></a>`SHT_LOUSER`

<details class="declaration-card" open>
<summary>Constant – Start of application-specific</summary>

Start of application-specific

```zig
pub const SHT_LOUSER = 0x80000000
```

</details>

---

### <a id="const-sht-hiuser"></a>`SHT_HIUSER`

<details class="declaration-card" open>
<summary>Constant – End of application-specific</summary>

End of application-specific

```zig
pub const SHT_HIUSER = 0xffffffff
```

</details>

---

### <a id="const-nt-gnu-build-id"></a>`NT_GNU_BUILD_ID`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const NT_GNU_BUILD_ID = 3
```

</details>

---

### <a id="const-stb-local"></a>`STB_LOCAL`

<details class="declaration-card" open>
<summary>Constant – Local symbol</summary>

Local symbol

```zig
pub const STB_LOCAL = 0
```

</details>

---

### <a id="const-stb-global"></a>`STB_GLOBAL`

<details class="declaration-card" open>
<summary>Constant – Global symbol</summary>

Global symbol

```zig
pub const STB_GLOBAL = 1
```

</details>

---

### <a id="const-stb-weak"></a>`STB_WEAK`

<details class="declaration-card" open>
<summary>Constant – Weak symbol</summary>

Weak symbol

```zig
pub const STB_WEAK = 2
```

</details>

---

### <a id="const-stb-num"></a>`STB_NUM`

<details class="declaration-card" open>
<summary>Constant – Number of defined types</summary>

Number of defined types

```zig
pub const STB_NUM = 3
```

</details>

---

### <a id="const-stb-loos"></a>`STB_LOOS`

<details class="declaration-card" open>
<summary>Constant – Start of OS-specific</summary>

Start of OS-specific

```zig
pub const STB_LOOS = 10
```

</details>

---

### <a id="const-stb-gnu-unique"></a>`STB_GNU_UNIQUE`

<details class="declaration-card" open>
<summary>Constant – Unique symbol</summary>

Unique symbol

```zig
pub const STB_GNU_UNIQUE = 10
```

</details>

---

### <a id="const-stb-hios"></a>`STB_HIOS`

<details class="declaration-card" open>
<summary>Constant – End of OS-specific</summary>

End of OS-specific

```zig
pub const STB_HIOS = 12
```

</details>

---

### <a id="const-stb-loproc"></a>`STB_LOPROC`

<details class="declaration-card" open>
<summary>Constant – Start of processor-specific</summary>

Start of processor-specific

```zig
pub const STB_LOPROC = 13
```

</details>

---

### <a id="const-stb-hiproc"></a>`STB_HIPROC`

<details class="declaration-card" open>
<summary>Constant – End of processor-specific</summary>

End of processor-specific

```zig
pub const STB_HIPROC = 15
```

</details>

---

### <a id="const-stb-mips-split-common"></a>`STB_MIPS_SPLIT_COMMON`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STB_MIPS_SPLIT_COMMON = 13
```

</details>

---

### <a id="const-stt-notype"></a>`STT_NOTYPE`

<details class="declaration-card" open>
<summary>Constant – Symbol type is unspecified</summary>

Symbol type is unspecified

```zig
pub const STT_NOTYPE = 0
```

</details>

---

### <a id="const-stt-object"></a>`STT_OBJECT`

<details class="declaration-card" open>
<summary>Constant – Symbol is a data object</summary>

Symbol is a data object

```zig
pub const STT_OBJECT = 1
```

</details>

---

### <a id="const-stt-func"></a>`STT_FUNC`

<details class="declaration-card" open>
<summary>Constant – Symbol is a code object</summary>

Symbol is a code object

```zig
pub const STT_FUNC = 2
```

</details>

---

### <a id="const-stt-section"></a>`STT_SECTION`

<details class="declaration-card" open>
<summary>Constant – Symbol associated with a section</summary>

Symbol associated with a section

```zig
pub const STT_SECTION = 3
```

</details>

---

### <a id="const-stt-file"></a>`STT_FILE`

<details class="declaration-card" open>
<summary>Constant – Symbol&#39;s name is file name</summary>

Symbol's name is file name

```zig
pub const STT_FILE = 4
```

</details>

---

### <a id="const-stt-common"></a>`STT_COMMON`

<details class="declaration-card" open>
<summary>Constant – Symbol is a common data object</summary>

Symbol is a common data object

```zig
pub const STT_COMMON = 5
```

</details>

---

### <a id="const-stt-tls"></a>`STT_TLS`

<details class="declaration-card" open>
<summary>Constant – Symbol is thread-local data object</summary>

Symbol is thread-local data object

```zig
pub const STT_TLS = 6
```

</details>

---

### <a id="const-stt-num"></a>`STT_NUM`

<details class="declaration-card" open>
<summary>Constant – Number of defined types</summary>

Number of defined types

```zig
pub const STT_NUM = 7
```

</details>

---

### <a id="const-stt-loos"></a>`STT_LOOS`

<details class="declaration-card" open>
<summary>Constant – Start of OS-specific</summary>

Start of OS-specific

```zig
pub const STT_LOOS = 10
```

</details>

---

### <a id="const-stt-gnu-ifunc"></a>`STT_GNU_IFUNC`

<details class="declaration-card" open>
<summary>Constant – Symbol is indirect code object</summary>

Symbol is indirect code object

```zig
pub const STT_GNU_IFUNC = 10
```

</details>

---

### <a id="const-stt-hios"></a>`STT_HIOS`

<details class="declaration-card" open>
<summary>Constant – End of OS-specific</summary>

End of OS-specific

```zig
pub const STT_HIOS = 12
```

</details>

---

### <a id="const-stt-loproc"></a>`STT_LOPROC`

<details class="declaration-card" open>
<summary>Constant – Start of processor-specific</summary>

Start of processor-specific

```zig
pub const STT_LOPROC = 13
```

</details>

---

### <a id="const-stt-hiproc"></a>`STT_HIPROC`

<details class="declaration-card" open>
<summary>Constant – End of processor-specific</summary>

End of processor-specific

```zig
pub const STT_HIPROC = 15
```

</details>

---

### <a id="const-stt-sparc-register"></a>`STT_SPARC_REGISTER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STT_SPARC_REGISTER = 13
```

</details>

---

### <a id="const-stt-parisc-millicode"></a>`STT_PARISC_MILLICODE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STT_PARISC_MILLICODE = 13
```

</details>

---

### <a id="const-stt-hp-opaque"></a>`STT_HP_OPAQUE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STT_HP_OPAQUE = (STT_LOOS + 0x1)
```

</details>

---

### <a id="const-stt-hp-stub"></a>`STT_HP_STUB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STT_HP_STUB = (STT_LOOS + 0x2)
```

</details>

---

### <a id="const-stt-arm-tfunc"></a>`STT_ARM_TFUNC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STT_ARM_TFUNC = STT_LOPROC
```

</details>

---

### <a id="const-stt-arm-16bit"></a>`STT_ARM_16BIT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STT_ARM_16BIT = STT_HIPROC
```

</details>

---

### <a id="const-magic"></a>`MAGIC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MAGIC = "\x7fELF"
```

</details>

---

### <a id="const-elfclassnone"></a>`ELFCLASSNONE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ELFCLASSNONE = 0
```

</details>

---

### <a id="const-elfclass32"></a>`ELFCLASS32`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ELFCLASS32 = 1
```

</details>

---

### <a id="const-elfclass64"></a>`ELFCLASS64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ELFCLASS64 = 2
```

</details>

---

### <a id="const-elfclassnum"></a>`ELFCLASSNUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ELFCLASSNUM = 3
```

</details>

---

### <a id="const-elfdatanone"></a>`ELFDATANONE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ELFDATANONE = 0
```

</details>

---

### <a id="const-elfdata2lsb"></a>`ELFDATA2LSB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ELFDATA2LSB = 1
```

</details>

---

### <a id="const-elfdata2msb"></a>`ELFDATA2MSB`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ELFDATA2MSB = 2
```

</details>

---

### <a id="const-elfdatanum"></a>`ELFDATANUM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ELFDATANUM = 3
```

</details>

---

### <a id="const-ei-class"></a>`EI_CLASS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EI_CLASS = 4
```

</details>

---

### <a id="const-ei-data"></a>`EI_DATA`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EI_DATA = 5
```

</details>

---

### <a id="const-ei-version"></a>`EI_VERSION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EI_VERSION = 6
```

</details>

---

### <a id="const-ei-osabi"></a>`EI_OSABI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EI_OSABI = 7
```

</details>

---

### <a id="const-ei-abiversion"></a>`EI_ABIVERSION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EI_ABIVERSION = 8
```

</details>

---

### <a id="const-ei-pad"></a>`EI_PAD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EI_PAD = 9
```

</details>

---

### <a id="const-ei-nident"></a>`EI_NIDENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const EI_NIDENT = 16
```

</details>

---

### <a id="const-half"></a>`Half`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Half = u16
```

</details>

---

### <a id="const-word"></a>`Word`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Word = u32
```

</details>

---

### <a id="const-sword"></a>`Sword`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Sword = i32
```

</details>

---

### <a id="const-elf32-xword"></a>`Elf32_Xword`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf32_Xword = u64
```

</details>

---

### <a id="const-elf32-sxword"></a>`Elf32_Sxword`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf32_Sxword = i64
```

</details>

---

### <a id="const-elf64-xword"></a>`Elf64_Xword`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf64_Xword = u64
```

</details>

---

### <a id="const-elf64-sxword"></a>`Elf64_Sxword`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf64_Sxword = i64
```

</details>

---

### <a id="const-elf32-addr"></a>`Elf32_Addr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf32_Addr = u32
```

</details>

---

### <a id="const-elf64-addr"></a>`Elf64_Addr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf64_Addr = u64
```

</details>

---

### <a id="const-elf32-off"></a>`Elf32_Off`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf32_Off = u32
```

</details>

---

### <a id="const-elf64-off"></a>`Elf64_Off`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf64_Off = u64
```

</details>

---

### <a id="const-elf32-section"></a>`Elf32_Section`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf32_Section = u16
```

</details>

---

### <a id="const-elf64-section"></a>`Elf64_Section`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf64_Section = u16
```

</details>

---

### <a id="const-elf32-relr"></a>`Elf32_Relr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf32_Relr = Word
```

</details>

---

### <a id="const-elf64-relr"></a>`Elf64_Relr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf64_Relr = Elf64_Xword
```

</details>

---

### <a id="const-elf32-conflict"></a>`Elf32_Conflict`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf32_Conflict = Elf32_Addr
```

</details>

---

### <a id="const-auxv"></a>`Auxv`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Auxv = switch (@sizeOf(usize)) {
    4 => Elf32_auxv_t,
    8 => Elf64_auxv_t,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-ehdr"></a>`Ehdr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Ehdr = switch (@sizeOf(usize)) {
    4 => Elf32_Ehdr,
    8 => Elf64_Ehdr,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-phdr"></a>`Phdr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Phdr = switch (@sizeOf(usize)) {
    4 => Elf32_Phdr,
    8 => Elf64_Phdr,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-dyn"></a>`Dyn`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Dyn = switch (@sizeOf(usize)) {
    4 => Elf32_Dyn,
    8 => Elf64_Dyn,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-rel"></a>`Rel`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Rel = switch (@sizeOf(usize)) {
    4 => Elf32_Rel,
    8 => Elf64_Rel,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-rela"></a>`Rela`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Rela = switch (@sizeOf(usize)) {
    4 => Elf32_Rela,
    8 => Elf64_Rela,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-relr"></a>`Relr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Relr = switch (@sizeOf(usize)) {
    4 => Elf32_Relr,
    8 => Elf64_Relr,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-shdr"></a>`Shdr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Shdr = switch (@sizeOf(usize)) {
    4 => Elf32_Shdr,
    8 => Elf64_Shdr,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-chdr"></a>`Chdr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Chdr = switch (@sizeOf(usize)) {
    4 => Elf32_Chdr,
    8 => Elf64_Chdr,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-sym"></a>`Sym`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Sym = switch (@sizeOf(usize)) {
    4 => Elf32_Sym,
    8 => Elf64_Sym,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-addr"></a>`Addr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Addr = switch (@sizeOf(usize)) {
    4 => Elf32_Addr,
    8 => Elf64_Addr,
    else => @compileError("expected pointer size of 32 or 64"),
}
```

</details>

---

### <a id="const-grp-comdat"></a>`GRP_COMDAT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const GRP_COMDAT = 1
```

</details>

---

### <a id="const-shf-write"></a>`SHF_WRITE`

<details class="declaration-card" open>
<summary>Constant – Section data should be writable during execution</summary>

Section data should be writable during execution.

```zig
pub const SHF_WRITE = 0x1
```

</details>

---

### <a id="const-shf-alloc"></a>`SHF_ALLOC`

<details class="declaration-card" open>
<summary>Constant – Section occupies memory during program execution</summary>

Section occupies memory during program execution.

```zig
pub const SHF_ALLOC = 0x2
```

</details>

---

### <a id="const-shf-execinstr"></a>`SHF_EXECINSTR`

<details class="declaration-card" open>
<summary>Constant – Section contains executable machine instructions</summary>

Section contains executable machine instructions.

```zig
pub const SHF_EXECINSTR = 0x4
```

</details>

---

### <a id="const-shf-merge"></a>`SHF_MERGE`

<details class="declaration-card" open>
<summary>Constant – The data in this section may be merged</summary>

The data in this section may be merged.

```zig
pub const SHF_MERGE = 0x10
```

</details>

---

### <a id="const-shf-strings"></a>`SHF_STRINGS`

<details class="declaration-card" open>
<summary>Constant – The data in this section is null-terminated strings</summary>

The data in this section is null-terminated strings.

```zig
pub const SHF_STRINGS = 0x20
```

</details>

---

### <a id="const-shf-info-link"></a>`SHF_INFO_LINK`

<details class="declaration-card" open>
<summary>Constant – A field in this section holds a section header table index</summary>

A field in this section holds a section header table index.

```zig
pub const SHF_INFO_LINK = 0x40
```

</details>

---

### <a id="const-shf-link-order"></a>`SHF_LINK_ORDER`

<details class="declaration-card" open>
<summary>Constant – Adds special ordering requirements for link editors</summary>

Adds special ordering requirements for link editors.

```zig
pub const SHF_LINK_ORDER = 0x80
```

</details>

---

### <a id="const-shf-os-nonconforming"></a>`SHF_OS_NONCONFORMING`

<details class="declaration-card" open>
<summary>Constant – This section requires special OS-specific processing to avoid incorrect</summary>

This section requires special OS-specific processing to avoid incorrect
behavior.

```zig
pub const SHF_OS_NONCONFORMING = 0x100
```

</details>

---

### <a id="const-shf-group"></a>`SHF_GROUP`

<details class="declaration-card" open>
<summary>Constant – This section is a member of a section group</summary>

This section is a member of a section group.

```zig
pub const SHF_GROUP = 0x200
```

</details>

---

### <a id="const-shf-tls"></a>`SHF_TLS`

<details class="declaration-card" open>
<summary>Constant – This section holds Thread-Local Storage</summary>

This section holds Thread-Local Storage.

```zig
pub const SHF_TLS = 0x400
```

</details>

---

### <a id="const-shf-compressed"></a>`SHF_COMPRESSED`

<details class="declaration-card" open>
<summary>Constant – Identifies a section containing compressed data</summary>

Identifies a section containing compressed data.

```zig
pub const SHF_COMPRESSED = 0x800
```

</details>

---

### <a id="const-shf-gnu-retain"></a>`SHF_GNU_RETAIN`

<details class="declaration-card" open>
<summary>Constant – Not to be GCed by the linker</summary>

Not to be GCed by the linker

```zig
pub const SHF_GNU_RETAIN = 0x200000
```

</details>

---

### <a id="const-shf-exclude"></a>`SHF_EXCLUDE`

<details class="declaration-card" open>
<summary>Constant – This section is excluded from the final executable or shared library</summary>

This section is excluded from the final executable or shared library.

```zig
pub const SHF_EXCLUDE = 0x80000000
```

</details>

---

### <a id="const-shf-maskos"></a>`SHF_MASKOS`

<details class="declaration-card" open>
<summary>Constant – Start of target-specific flags</summary>

Start of target-specific flags.

```zig
pub const SHF_MASKOS = 0x0ff00000
```

</details>

---

### <a id="const-shf-maskproc"></a>`SHF_MASKPROC`

<details class="declaration-card" open>
<summary>Constant – Bits indicating processor-specific flags</summary>

Bits indicating processor-specific flags.

```zig
pub const SHF_MASKPROC = 0xf0000000
```

</details>

---

### <a id="const-xcore-shf-dp-section"></a>`XCORE_SHF_DP_SECTION`

<details class="declaration-card" open>
<summary>Constant – All sections with the &quot;d&quot; flag are grouped together by the linker to form</summary>

All sections with the "d" flag are grouped together by the linker to form
the data section and the dp register is set to the start of the section by
the boot code.

```zig
pub const XCORE_SHF_DP_SECTION = 0x10000000
```

</details>

---

### <a id="const-xcore-shf-cp-section"></a>`XCORE_SHF_CP_SECTION`

<details class="declaration-card" open>
<summary>Constant – All sections with the &quot;c&quot; flag are grouped together by the linker to form</summary>

All sections with the "c" flag are grouped together by the linker to form
the constant pool and the cp register is set to the start of the constant
pool by the boot code.

```zig
pub const XCORE_SHF_CP_SECTION = 0x20000000
```

</details>

---

### <a id="const-shf-x86-64-large"></a>`SHF_X86_64_LARGE`

<details class="declaration-card" open>
<summary>Constant – If an object file section does not have this flag set, then it may not hold</summary>

If an object file section does not have this flag set, then it may not hold
more than 2GB and can be freely referred to in objects using smaller code
models. Otherwise, only objects using larger code models can refer to them.
For example, a medium code model object can refer to data in a section that
sets this flag besides being able to refer to data in a section that does
not set it; likewise, a small code model object can refer only to code in a
section that does not set this flag.

```zig
pub const SHF_X86_64_LARGE = 0x10000000
```

</details>

---

### <a id="const-shf-hex-gprel"></a>`SHF_HEX_GPREL`

<details class="declaration-card" open>
<summary>Constant – All sections with the GPREL flag are grouped into a global data area</summary>

All sections with the GPREL flag are grouped into a global data area
for faster accesses

```zig
pub const SHF_HEX_GPREL = 0x10000000
```

</details>

---

### <a id="const-shf-mips-nodupes"></a>`SHF_MIPS_NODUPES`

<details class="declaration-card" open>
<summary>Constant – Section contains text/data which may be replicated in other sections</summary>

Section contains text/data which may be replicated in other sections.
Linker must retain only one copy.

```zig
pub const SHF_MIPS_NODUPES = 0x01000000
```

</details>

---

### <a id="const-shf-mips-names"></a>`SHF_MIPS_NAMES`

<details class="declaration-card" open>
<summary>Constant – Linker must generate implicit hidden weak names</summary>

Linker must generate implicit hidden weak names.

```zig
pub const SHF_MIPS_NAMES = 0x02000000
```

</details>

---

### <a id="const-shf-mips-local"></a>`SHF_MIPS_LOCAL`

<details class="declaration-card" open>
<summary>Constant – Section data local to process</summary>

Section data local to process.

```zig
pub const SHF_MIPS_LOCAL = 0x04000000
```

</details>

---

### <a id="const-shf-mips-nostrip"></a>`SHF_MIPS_NOSTRIP`

<details class="declaration-card" open>
<summary>Constant – Do not strip this section</summary>

Do not strip this section.

```zig
pub const SHF_MIPS_NOSTRIP = 0x08000000
```

</details>

---

### <a id="const-shf-mips-gprel"></a>`SHF_MIPS_GPREL`

<details class="declaration-card" open>
<summary>Constant – Section must be part of global data area</summary>

Section must be part of global data area.

```zig
pub const SHF_MIPS_GPREL = 0x10000000
```

</details>

---

### <a id="const-shf-mips-merge"></a>`SHF_MIPS_MERGE`

<details class="declaration-card" open>
<summary>Constant – This section should be merged</summary>

This section should be merged.

```zig
pub const SHF_MIPS_MERGE = 0x20000000
```

</details>

---

### <a id="const-shf-mips-addr"></a>`SHF_MIPS_ADDR`

<details class="declaration-card" open>
<summary>Constant – Address size to be inferred from section entry size</summary>

Address size to be inferred from section entry size.

```zig
pub const SHF_MIPS_ADDR = 0x40000000
```

</details>

---

### <a id="const-shf-mips-string"></a>`SHF_MIPS_STRING`

<details class="declaration-card" open>
<summary>Constant – Section data is string data by default</summary>

Section data is string data by default.

```zig
pub const SHF_MIPS_STRING = 0x80000000
```

</details>

---

### <a id="const-shf-arm-purecode"></a>`SHF_ARM_PURECODE`

<details class="declaration-card" open>
<summary>Constant – Make code section unreadable when in execute-only mode</summary>

Make code section unreadable when in execute-only mode

```zig
pub const SHF_ARM_PURECODE = 0x2000000
```

</details>

---

### <a id="const-pf-x"></a>`PF_X`

<details class="declaration-card" open>
<summary>Constant – Execute</summary>

Execute

```zig
pub const PF_X = 1
```

</details>

---

### <a id="const-pf-w"></a>`PF_W`

<details class="declaration-card" open>
<summary>Constant – Write</summary>

Write

```zig
pub const PF_W = 2
```

</details>

---

### <a id="const-pf-r"></a>`PF_R`

<details class="declaration-card" open>
<summary>Constant – Read</summary>

Read

```zig
pub const PF_R = 4
```

</details>

---

### <a id="const-pf-maskos"></a>`PF_MASKOS`

<details class="declaration-card" open>
<summary>Constant – Bits for operating system-specific semantics</summary>

Bits for operating system-specific semantics.

```zig
pub const PF_MASKOS = 0x0ff00000
```

</details>

---

### <a id="const-pf-maskproc"></a>`PF_MASKPROC`

<details class="declaration-card" open>
<summary>Constant – Bits for processor-specific semantics</summary>

Bits for processor-specific semantics.

```zig
pub const PF_MASKPROC = 0xf0000000
```

</details>

---

### <a id="const-shn-undef"></a>`SHN_UNDEF`

<details class="declaration-card" open>
<summary>Constant – Undefined section</summary>

Undefined section

```zig
pub const SHN_UNDEF = 0
```

</details>

---

### <a id="const-shn-loreserve"></a>`SHN_LORESERVE`

<details class="declaration-card" open>
<summary>Constant – Start of reserved indices</summary>

Start of reserved indices

```zig
pub const SHN_LORESERVE = 0xff00
```

</details>

---

### <a id="const-shn-loproc"></a>`SHN_LOPROC`

<details class="declaration-card" open>
<summary>Constant – Start of processor-specific</summary>

Start of processor-specific

```zig
pub const SHN_LOPROC = 0xff00
```

</details>

---

### <a id="const-shn-hiproc"></a>`SHN_HIPROC`

<details class="declaration-card" open>
<summary>Constant – End of processor-specific</summary>

End of processor-specific

```zig
pub const SHN_HIPROC = 0xff1f
```

</details>

---

### <a id="const-shn-livepatch"></a>`SHN_LIVEPATCH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SHN_LIVEPATCH = 0xff20
```

</details>

---

### <a id="const-shn-abs"></a>`SHN_ABS`

<details class="declaration-card" open>
<summary>Constant – Associated symbol is absolute</summary>

Associated symbol is absolute

```zig
pub const SHN_ABS = 0xfff1
```

</details>

---

### <a id="const-shn-common"></a>`SHN_COMMON`

<details class="declaration-card" open>
<summary>Constant – Associated symbol is common</summary>

Associated symbol is common

```zig
pub const SHN_COMMON = 0xfff2
```

</details>

---

### <a id="const-shn-hireserve"></a>`SHN_HIRESERVE`

<details class="declaration-card" open>
<summary>Constant – End of reserved indices</summary>

End of reserved indices

```zig
pub const SHN_HIRESERVE = 0xffff
```

</details>

---

### <a id="const-armag"></a>`ARMAG`

<details class="declaration-card" open>
<summary>Constant – String that begins an archive file</summary>

String that begins an archive file.

```zig
pub const ARMAG = "!<arch>\n"
```

</details>

---

### <a id="const-arfmag"></a>`ARFMAG`

<details class="declaration-card" open>
<summary>Constant – String in ar_fmag at the end of each header</summary>

String in ar_fmag at the end of each header.

```zig
pub const ARFMAG = "`\n"
```

</details>

---

### <a id="const-symname"></a>`SYMNAME`

<details class="declaration-card" open>
<summary>Constant – 32-bit symtab identifier</summary>

32-bit symtab identifier

```zig
pub const SYMNAME = genSpecialMemberName("/")
```

</details>

---

### <a id="const-strname"></a>`STRNAME`

<details class="declaration-card" open>
<summary>Constant – Strtab identifier</summary>

Strtab identifier

```zig
pub const STRNAME = genSpecialMemberName("//")
```

</details>

---

### <a id="const-sym64name"></a>`SYM64NAME`

<details class="declaration-card" open>
<summary>Constant – 64-bit symtab identifier</summary>

64-bit symtab identifier

```zig
pub const SYM64NAME = genSpecialMemberName("/SYM64/")
```

</details>

---

### <a id="const-symdefname"></a>`SYMDEFNAME`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SYMDEFNAME = genSpecialMemberName("__.SYMDEF")
```

</details>

---

### <a id="const-symdefsortedname"></a>`SYMDEFSORTEDNAME`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SYMDEFSORTEDNAME = genSpecialMemberName("__.SYMDEF SORTED")
```

</details>

---

