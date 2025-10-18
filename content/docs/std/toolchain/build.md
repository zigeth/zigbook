---
title: "std.Build"
description: "Comprehensive reference for Zig's std.Build module covering build coordination, targets, and binary tooling."
navigation:
  title: "Build"
  icon: i-lucide-hammer
  badge: "Toolchain"
badge: "Toolchain"
category: "toolchain"
tags:
  - "zig"
  - "standard-library"
  - "toolchain"
source: "std/Build.md"
githubPath: "std/Build.md"
lastUpdated: "2025-10-11T02:43:50.337Z"
seo:
  title: "std.Build · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.Build module covering build coordination, targets, and binary tooling."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/Build.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.Build` |
| Declarations | 97 |
| Breakdown | 71 functions · 15 types · 2 constants · 2 error sets · 7 modules |
| Generated (unix epoch) | 1760148098 |

---

## Table of Contents

- [Functions](#functions)
  - [`create`](#fn-create)
  - [`resolveInstallPrefix`](#fn-resolveinstallprefix)
  - [`addOptions`](#fn-addoptions)
  - [`addExecutable`](#fn-addexecutable)
  - [`addObject`](#fn-addobject)
  - [`addLibrary`](#fn-addlibrary)
  - [`addTest`](#fn-addtest)
  - [`addModule`](#fn-addmodule)
  - [`createModule`](#fn-createmodule)
  - [`addSystemCommand`](#fn-addsystemcommand)
  - [`addRunArtifact`](#fn-addrunartifact)
  - [`addConfigHeader`](#fn-addconfigheader)
  - [`dupe`](#fn-dupe)
  - [`dupeInner`](#fn-dupeinner)
  - [`dupeStrings`](#fn-dupestrings)
  - [`dupePath`](#fn-dupepath)
  - [`addWriteFile`](#fn-addwritefile)
  - [`addNamedWriteFiles`](#fn-addnamedwritefiles)
  - [`addNamedLazyPath`](#fn-addnamedlazypath)
  - [`addWriteFiles`](#fn-addwritefiles)
  - [`addUpdateSourceFiles`](#fn-addupdatesourcefiles)
  - [`addRemoveDirTree`](#fn-addremovedirtree)
  - [`addFail`](#fn-addfail)
  - [`addFmt`](#fn-addfmt)
  - [`addTranslateC`](#fn-addtranslatec)
  - [`getInstallStep`](#fn-getinstallstep)
  - [`getUninstallStep`](#fn-getuninstallstep)
  - [`option`](#fn-option)
  - [`step`](#fn-step)
  - [`standardOptimizeOption`](#fn-standardoptimizeoption)
  - [`standardTargetOptions`](#fn-standardtargetoptions)
  - [`parseTargetQuery`](#fn-parsetargetquery)
  - [`standardTargetOptionsQueryOnly`](#fn-standardtargetoptionsqueryonly)
  - [`addUserInputOption`](#fn-adduserinputoption)
  - [`addUserInputFlag`](#fn-adduserinputflag)
  - [`validateUserInputDidItFail`](#fn-validateuserinputdiditfail)
  - [`installArtifact`](#fn-installartifact)
  - [`addInstallArtifact`](#fn-addinstallartifact)
  - [`installFile`](#fn-installfile)
  - [`installDirectory`](#fn-installdirectory)
  - [`installBinFile`](#fn-installbinfile)
  - [`installLibFile`](#fn-installlibfile)
  - [`addObjCopy`](#fn-addobjcopy)
  - [`addInstallFile`](#fn-addinstallfile)
  - [`addInstallBinFile`](#fn-addinstallbinfile)
  - [`addInstallLibFile`](#fn-addinstalllibfile)
  - [`addInstallHeaderFile`](#fn-addinstallheaderfile)
  - [`addInstallFileWithDir`](#fn-addinstallfilewithdir)
  - [`addInstallDirectory`](#fn-addinstalldirectory)
  - [`addCheckFile`](#fn-addcheckfile)
  - [`truncateFile`](#fn-truncatefile)
  - [`path`](#fn-path)
  - [`pathFromRoot`](#fn-pathfromroot)
  - [`pathJoin`](#fn-pathjoin)
  - [`pathResolve`](#fn-pathresolve)
  - [`fmt`](#fn-fmt)
  - [`findProgram`](#fn-findprogram)
  - [`runAllowFail`](#fn-runallowfail)
  - [`run`](#fn-run)
  - [`addSearchPrefix`](#fn-addsearchprefix)
  - [`getInstallPath`](#fn-getinstallpath)
  - [`lazyDependency`](#fn-lazydependency)
  - [`dependency`](#fn-dependency)
  - [`lazyImport`](#fn-lazyimport)
  - [`dependencyFromBuildZig`](#fn-dependencyfrombuildzig)
  - [`runBuild`](#fn-runbuild)
  - [`dumpBadGetPathHelp`](#fn-dumpbadgetpathhelp)
  - [`makeTempPath`](#fn-maketemppath)
  - [`resolveTargetQuery`](#fn-resolvetargetquery)
  - [`wantSharedLibSymLinks`](#fn-wantsharedlibsymlinks)
  - [`systemIntegrationOption`](#fn-systemintegrationoption)

- [Types](#types)
  - [`ReleaseMode`](#type-releasemode)
  - [`Graph`](#type-graph)
  - [`PkgConfigPkg`](#type-pkgconfigpkg)
  - [`DirList`](#type-dirlist)
  - [`ExecutableOptions`](#type-executableoptions)
  - [`ObjectOptions`](#type-objectoptions)
  - [`LibraryOptions`](#type-libraryoptions)
  - [`TestOptions`](#type-testoptions)
  - [`AssemblyOptions`](#type-assemblyoptions)
  - [`StandardOptimizeOptionOptions`](#type-standardoptimizeoptionoptions)
  - [`StandardTargetOptionsArgs`](#type-standardtargetoptionsargs)
  - [`Dependency`](#type-dependency)
  - [`GeneratedFile`](#type-generatedfile)
  - [`ResolvedTarget`](#type-resolvedtarget)
  - [`SystemIntegrationOptionConfig`](#type-systemintegrationoptionconfig)

- [Modules](#modules)
  - [`Cache`](#module-cache)
  - [`Step`](#module-step)
  - [`Module`](#module-module)
  - [`Watch`](#module-watch)
  - [`Fuzz`](#module-fuzz)
  - [`WebServer`](#module-webserver)
  - [`abi`](#module-abi)

- [Constants](#constants)
  - [`LazyPath`](#const-lazypath)
  - [`InstallDir`](#const-installdir)

- [Error Sets](#error-sets)
  - [`RunError`](#error-runerror)
  - [`PkgConfigError`](#error-pkgconfigerror)

---

## Types (15)

### <a id="type-releasemode"></a>`ReleaseMode`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ReleaseMode = enum {
    off,
    any,
    fast,
    safe,
    small,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `off` |  |
| `any` |  |
| `fast` |  |
| `safe` |  |
| `small` |  |

</details>

---

### <a id="type-graph"></a>`Graph`

<details class="declaration-card" open>
<summary>Container – Shared state among all Build instances</summary>

Shared state among all Build instances.
Settings that are here rather than in Build are not configurable per-package.

\`\`\`zig
pub const Graph = struct {
    arena: Allocator,
    system_library_options: std.StringArrayHashMapUnmanaged(SystemLibraryMode) = .empty,
    system_package_mode: bool = false,
    debug_compiler_runtime_libs: bool = false,
    cache: Cache,
    zig_exe: [:0]const u8,
    env_map: EnvMap,
    global_cache_root: Cache.Directory,
    zig_lib_directory: Cache.Directory,
    needed_lazy_dependencies: std.StringArrayHashMapUnmanaged(void) = .empty,
    /// Information about the native target. Computed before build() is invoked.
    host: ResolvedTarget,
    incremental: ?bool = null,
    random_seed: u32 = 0,
    dependency_cache: InitializedDepMap = .empty,
    allow_so_scripts: ?bool = null,
    time_report: bool,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `arena` | `Allocator` | – | |
| `system_library_options` | `std.StringArrayHashMapUnmanaged(SystemLibraryMode)` | `.empty` | |
| `system_package_mode` | `bool` | `false` | |
| `debug_compiler_runtime_libs` | `bool` | `false` | |
| `cache` | `Cache` | – | |
| `zig_exe` | `[:0]const u8` | – | |
| `env_map` | `EnvMap` | – | |
| `global_cache_root` | `Cache.Directory` | – | |
| `zig_lib_directory` | `Cache.Directory` | – | |
| `needed_lazy_dependencies` | `std.StringArrayHashMapUnmanaged(void)` | `.empty` | |
| `host` | [`ResolvedTarget`](#type-resolvedtarget) | – | Information about the native target. Computed before build() is invoked. |
| `incremental` | `?bool` | `null` | |
| `random_seed` | `u32` | `0` | |
| `dependency_cache` | `InitializedDepMap` | `.empty` | |
| `allow_so_scripts` | `?bool` | `null` | |
| `time_report` | `bool` | – | |

</details>

---

### <a id="type-pkgconfigpkg"></a>`PkgConfigPkg`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const PkgConfigPkg = struct {
    name: []const u8,
    desc: []const u8,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `[]const u8` | – | |
| `desc` | `[]const u8` | – | |

</details>

---

### <a id="type-dirlist"></a>`DirList`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const DirList = struct {
    lib_dir: ?[]const u8 = null,
    exe_dir: ?[]const u8 = null,
    include_dir: ?[]const u8 = null,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `lib_dir` | `?[]const u8` | `null` | |
| `exe_dir` | `?[]const u8` | `null` | |
| `include_dir` | `?[]const u8` | `null` | |

</details>

---

### <a id="type-executableoptions"></a>`ExecutableOptions`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ExecutableOptions = struct {
    name: []const u8,
    root_module: *Module,
    version: ?std.SemanticVersion = null,
    linkage: ?std.builtin.LinkMode = null,
    max_rss: usize = 0,
    use_llvm: ?bool = null,
    use_lld: ?bool = null,
    zig_lib_dir: ?LazyPath = null,
    /// Embed a `.manifest` file in the compilation if the object format supports it.
    /// https://learn.microsoft.com/en-us/windows/win32/sbscs/manifest-files-reference
    /// Manifest files must have the extension `.manifest`.
    /// Can be set regardless of target. The `.manifest` file will be ignored
    /// if the target object format does not support embedded manifests.
    win32_manifest: ?LazyPath = null,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `[]const u8` | – | |
| `root_module` | `*Module` | – | |
| `version` | `?std.SemanticVersion` | `null` | |
| `linkage` | `?std.builtin.LinkMode` | `null` | |
| `max_rss` | `usize` | `0` | |
| `use_llvm` | `?bool` | `null` | |
| `use_lld` | `?bool` | `null` | |
| `zig_lib_dir` | [`?LazyPath`](#const-lazypath) | `null` | |
| `win32_manifest` | [`?LazyPath`](#const-lazypath) | `null` | Embed a \`.manifest\` file in the compilation if the object format supports it. https://learn.microsoft.com/en-us/windows/win32/sbscs/manifest-files-reference Manifest files must have the extension \`.manifest\`. Can be set regardless of target. The \`.manifest\` file will be ignored if the target object format does not support embedded manifests. |

</details>

---

### <a id="type-objectoptions"></a>`ObjectOptions`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const ObjectOptions = struct {
    name: []const u8,
    root_module: *Module,
    max_rss: usize = 0,
    use_llvm: ?bool = null,
    use_lld: ?bool = null,
    zig_lib_dir: ?LazyPath = null,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `[]const u8` | – | |
| `root_module` | `*Module` | – | |
| `max_rss` | `usize` | `0` | |
| `use_llvm` | `?bool` | `null` | |
| `use_lld` | `?bool` | `null` | |
| `zig_lib_dir` | [`?LazyPath`](#const-lazypath) | `null` | |

</details>

---

### <a id="type-libraryoptions"></a>`LibraryOptions`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const LibraryOptions = struct {
    linkage: std.builtin.LinkMode = .static,
    name: []const u8,
    root_module: *Module,
    version: ?std.SemanticVersion = null,
    max_rss: usize = 0,
    use_llvm: ?bool = null,
    use_lld: ?bool = null,
    zig_lib_dir: ?LazyPath = null,
    /// Embed a `.manifest` file in the compilation if the object format supports it.
    /// https://learn.microsoft.com/en-us/windows/win32/sbscs/manifest-files-reference
    /// Manifest files must have the extension `.manifest`.
    /// Can be set regardless of target. The `.manifest` file will be ignored
    /// if the target object format does not support embedded manifests.
    win32_manifest: ?LazyPath = null,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `linkage` | `std.builtin.LinkMode` | `.static` | |
| `name` | `[]const u8` | – | |
| `root_module` | `*Module` | – | |
| `version` | `?std.SemanticVersion` | `null` | |
| `max_rss` | `usize` | `0` | |
| `use_llvm` | `?bool` | `null` | |
| `use_lld` | `?bool` | `null` | |
| `zig_lib_dir` | [`?LazyPath`](#const-lazypath) | `null` | |
| `win32_manifest` | [`?LazyPath`](#const-lazypath) | `null` | Embed a \`.manifest\` file in the compilation if the object format supports it. https://learn.microsoft.com/en-us/windows/win32/sbscs/manifest-files-reference Manifest files must have the extension \`.manifest\`. Can be set regardless of target. The \`.manifest\` file will be ignored if the target object format does not support embedded manifests. |

</details>

---

### <a id="type-testoptions"></a>`TestOptions`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const TestOptions = struct {
    name: []const u8 = "test",
    root_module: *Module,
    max_rss: usize = 0,
    filters: []const []const u8 = &.{},
    test_runner: ?Step.Compile.TestRunner = null,
    use_llvm: ?bool = null,
    use_lld: ?bool = null,
    zig_lib_dir: ?LazyPath = null,
    /// Emits an object file instead of a test binary.
    /// The object must be linked separately.
    /// Usually used in conjunction with a custom `test_runner`.
    emit_object: bool = false,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `[]const u8` | `"test"` | |
| `root_module` | `*Module` | – | |
| `max_rss` | `usize` | `0` | |
| `filters` | `[]const []const u8` | `&.{}` | |
| `test_runner` | `?Step.Compile.TestRunner` | `null` | |
| `use_llvm` | `?bool` | `null` | |
| `use_lld` | `?bool` | `null` | |
| `zig_lib_dir` | [`?LazyPath`](#const-lazypath) | `null` | |
| `emit_object` | `bool` | `false` | Emits an object file instead of a test binary. The object must be linked separately. Usually used in conjunction with a custom \`test\_runner\`. |

</details>

---

### <a id="type-assemblyoptions"></a>`AssemblyOptions`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const AssemblyOptions = struct {
    name: []const u8,
    source_file: LazyPath,
    /// To choose the same computer as the one building the package, pass the
    /// `host` field of the package's `Build` instance.
    target: ResolvedTarget,
    optimize: std.builtin.OptimizeMode,
    max_rss: usize = 0,
    zig_lib_dir: ?LazyPath = null,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | `[]const u8` | – | |
| `source_file` | [`LazyPath`](#const-lazypath) | – | |
| `target` | [`ResolvedTarget`](#type-resolvedtarget) | – | To choose the same computer as the one building the package, pass the \`host\` field of the package's \`Build\` instance. |
| `optimize` | `std.builtin.OptimizeMode` | – | |
| `max_rss` | `usize` | `0` | |
| `zig_lib_dir` | [`?LazyPath`](#const-lazypath) | `null` | |

</details>

---

### <a id="type-standardoptimizeoptionoptions"></a>`StandardOptimizeOptionOptions`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const StandardOptimizeOptionOptions = struct {
    preferred_optimize_mode: ?std.builtin.OptimizeMode = null,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `preferred_optimize_mode` | `?std.builtin.OptimizeMode` | `null` | |

</details>

---

### <a id="type-standardtargetoptionsargs"></a>`StandardTargetOptionsArgs`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const StandardTargetOptionsArgs = struct {
    whitelist: ?[]const Target.Query = null,
    default_target: Target.Query = .{},
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `whitelist` | `?[]const Target.Query` | `null` | |
| `default_target` | `Target.Query` | `.{}` | |

</details>

---

### <a id="type-dependency"></a>`Dependency`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const Dependency = struct {
    builder: *Build,

    pub fn artifact(d: *Dependency, name: []const u8) *Step.Compile {
        var found: ?*Step.Compile = null;
        for (d.builder.install_tls.step.dependencies.items) |dep_step| {
            const inst = dep_step.cast(Step.InstallArtifact) orelse continue;
            if (mem.eql(u8, inst.artifact.name, name)) {
                if (found != null) panic("artifact name '{s}' is ambiguous", .{name});
                found = inst.artifact;
            }
        }
        return found orelse {
            for (d.builder.install_tls.step.dependencies.items) |dep_step| {
                const inst = dep_step.cast(Step.InstallArtifact) orelse continue;
                log.info("available artifact: '{s}'", .{inst.artifact.name});
            }
            panic("unable to find artifact '{s}'", .{name});
        };
    }

    pub fn module(d: *Dependency, name: []const u8) *Module {
        return d.builder.modules.get(name) orelse {
            panic("unable to find module '{s}'", .{name});
        };
    }

    pub fn namedWriteFiles(d: *Dependency, name: []const u8) *Step.WriteFile {
        return d.builder.named_writefiles.get(name) orelse {
            panic("unable to find named writefiles '{s}'", .{name});
        };
    }

    pub fn namedLazyPath(d: *Dependency, name: []const u8) LazyPath {
        return d.builder.named_lazy_paths.get(name) orelse {
            panic("unable to find named lazypath '{s}'", .{name});
        };
    }

    pub fn path(d: *Dependency, sub_path: []const u8) LazyPath {
        return .{
            .dependency = .{
                .dependency = d,
                .sub_path = sub_path,
            },
        };
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `builder` | `*Build` | – | |

</details>

---

### <a id="type-generatedfile"></a>`GeneratedFile`

<details class="declaration-card" open>
<summary>Container – A file that is generated by a build step</summary>

A file that is generated by a build step.
This struct is an interface that is meant to be used with `@fieldParentPtr` to implement the actual path logic.

\`\`\`zig
pub const GeneratedFile = struct {
    /// The step that generates the file
    step: *Step,

    /// The path to the generated file. Must be either absolute or relative to the build runner cwd.
    /// This value must be set in the `fn make()` of the `step` and must not be `null` afterwards.
    path: ?[]const u8 = null,

    /// Deprecated, see `getPath2`.
    pub fn getPath(gen: GeneratedFile) []const u8 {
        return gen.step.owner.pathFromCwd(gen.path orelse std.debug.panic(
            "getPath() was called on a GeneratedFile that wasn't built yet. Is there a missing Step dependency on step '{s}'?",
            .{gen.step.name},
        ));
    }

    pub fn getPath2(gen: GeneratedFile, src_builder: *Build, asking_step: ?*Step) []const u8 {
        return gen.path orelse {
            const w = debug.lockStderrWriter(&.{});
            dumpBadGetPathHelp(gen.step, w, .detect(.stderr()), src_builder, asking_step) catch {};
            debug.unlockStderrWriter();
            @panic("misconfigured build script");
        };
    }
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `step` | `*Step` | – | The step that generates the file |
| `path` | `?[]const u8` | `null` | The path to the generated file. Must be either absolute or relative to the build runner cwd. This value must be set in the \`fn make()\` of the \`step\` and must not be \`null\` afterwards. |

</details>

---

### <a id="type-resolvedtarget"></a>`ResolvedTarget`

<details class="declaration-card" open>
<summary>Container – A pair of target query and fully resolved target</summary>

A pair of target query and fully resolved target.
This type is generally required by build system API that need to be given a
target. The query is kept because the Zig toolchain needs to know which parts
of the target are "native". This can apply to the CPU, the OS, or even the ABI.

\`\`\`zig
pub const ResolvedTarget = struct {
    query: Target.Query,
    result: Target,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `query` | `Target.Query` | – | |
| `result` | `Target` | – | |

</details>

---

### <a id="type-systemintegrationoptionconfig"></a>`SystemIntegrationOptionConfig`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

\`\`\`zig
pub const SystemIntegrationOptionConfig = struct {
    /// If left as null, then the default will depend on system_package_mode.
    default: ?bool = null,
}
\`\`\`

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `default` | `?bool` | `null` | If left as null, then the default will depend on system\_package\_mode. |

</details>

---

## Modules (7)

### <a id="module-cache"></a>`Cache`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const Cache = @import("Build/Cache.zig")
\`\`\`

> **Module:** `Build/Cache.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Build/Cache.zig)

</details>

---

### <a id="module-step"></a>`Step`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const Step = @import("Build/Step.zig")
\`\`\`

> **Module:** `Build/Step.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Build/Step.zig)

</details>

---

### <a id="module-module"></a>`Module`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const Module = @import("Build/Module.zig")
\`\`\`

> **Module:** `Build/Module.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Build/Module.zig)

</details>

---

### <a id="module-watch"></a>`Watch`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const Watch = @import("Build/Watch.zig")
\`\`\`

> **Module:** `Build/Watch.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Build/Watch.zig)

</details>

---

### <a id="module-fuzz"></a>`Fuzz`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const Fuzz = @import("Build/Fuzz.zig")
\`\`\`

> **Module:** `Build/Fuzz.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Build/Fuzz.zig)

</details>

---

### <a id="module-webserver"></a>`WebServer`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const WebServer = @import("Build/WebServer.zig")
\`\`\`

> **Module:** `Build/WebServer.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Build/WebServer.zig)

</details>

---

### <a id="module-abi"></a>`abi`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const abi = @import("Build/abi.zig")
\`\`\`

> **Module:** `Build/abi.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/Build/abi.zig)

</details>

---

## Constants (2)

### <a id="const-lazypath"></a>`LazyPath`

<details class="declaration-card" open>
<summary>Constant – A reference to an existing or future path</summary>

A reference to an existing or future path.

\`\`\`zig
pub const LazyPath = union(enum) {
    /// A source file path relative to build root.
    src_path: struct {
        owner: *std.Build,
        sub_path: []const u8,
    },

    generated: struct {
        file: *const GeneratedFile,

        /// The number of parent directories to go up.
        /// 0 means the generated file itself.
        /// 1 means the directory of the generated file.
        /// 2 means the parent of that directory, and so on.
        up: usize = 0,

        /// Applied after `up`.
        sub_path: []const u8 = "",
    },

    /// An absolute path or a path relative to the current working directory of
    /// the build runner process.
    /// This is uncommon but used for system environment paths such as `--zig-lib-dir` which
    /// ignore the file system path of build.zig and instead are relative to the directory from
    /// which `zig build` was invoked.
    /// Use of this tag indicates a dependency on the host system.
    cwd_relative: []const u8,

    dependency: struct {
        dependency: *Dependency,
        sub_path: []const u8,
    },

    /// Returns a lazy path referring to the directory containing this path.
    ///
    /// The dirname is not allowed to escape the logical root for underlying path.
    /// For example, if the path is relative to the build root,
    /// the dirname is not allowed to traverse outside of the build root.
    /// Similarly, if the path is a generated file inside zig-cache,
    /// the dirname is not allowed to traverse outside of zig-cache.
    pub fn dirname(lazy_path: LazyPath) LazyPath {
        return switch (lazy_path) {
            .src_path => |sp| .{ .src_path = .{
                .owner = sp.owner,
                .sub_path = dirnameAllowEmpty(sp.sub_path) orelse {
                    dumpBadDirnameHelp(null, null, "dirname() attempted to traverse outside the build root\n", .{}) catch {};
                    @panic("misconfigured build script");
                },
            } },
            .generated => |generated| .{ .generated = if (dirnameAllowEmpty(generated.sub_path)) |sub_dirname| .{
                .file = generated.file,
                .up = generated.up,
                .sub_path = sub_dirname,
            } else .{
                .file = generated.file,
                .up = generated.up + 1,
                .sub_path = "",
            } },
            .cwd_relative => |rel_path| .{
                .cwd_relative = dirnameAllowEmpty(rel_path) orelse {
                    // If we get null, it means one of two things:
                    // - rel_path was absolute, and is now root
                    // - rel_path was relative, and is now ""
                    // In either case, the build script tried to go too far
                    // and we should panic.
                    if (fs.path.isAbsolute(rel_path)) {
                        dumpBadDirnameHelp(null, null,
                            \\dirname() attempted to traverse outside the root.
                            \\No more directories left to go up.
                            \\
                        , .{}) catch {};
                        @panic("misconfigured build script");
                    } else {
                        dumpBadDirnameHelp(null, null,
                            \\dirname() attempted to traverse outside the current working directory.
                            \\
                        , .{}) catch {};
                        @panic("misconfigured build script");
                    }
                },
            },
            .dependency => |dep| .{ .dependency = .{
                .dependency = dep.dependency,
                .sub_path = dirnameAllowEmpty(dep.sub_path) orelse {
                    dumpBadDirnameHelp(null, null,
                        \\dirname() attempted to traverse outside the dependency root.
                        \\
                    , .{}) catch {};
                    @panic("misconfigured build script");
                },
            } },
        };
    }

    pub fn path(lazy_path: LazyPath, b: *Build, sub_path: []const u8) LazyPath {
        return lazy_path.join(b.allocator, sub_path) catch @panic("OOM");
    }

    pub fn join(lazy_path: LazyPath, arena: Allocator, sub_path: []const u8) Allocator.Error!LazyPath {
        return switch (lazy_path) {
            .src_path => |src| .{ .src_path = .{
                .owner = src.owner,
                .sub_path = try fs.path.resolve(arena, &.{ src.sub_path, sub_path }),
            } },
            .generated => |gen| .{ .generated = .{
                .file = gen.file,
                .up = gen.up,
                .sub_path = try fs.path.resolve(arena, &.{ gen.sub_path, sub_path }),
            } },
            .cwd_relative => |cwd_relative| .{
                .cwd_relative = try fs.path.resolve(arena, &.{ cwd_relative, sub_path }),
            },
            .dependency => |dep| .{ .dependency = .{
                .dependency = dep.dependency,
                .sub_path = try fs.path.resolve(arena, &.{ dep.sub_path, sub_path }),
            } },
        };
    }

    /// Returns a string that can be shown to represent the file source.
    /// Either returns the path, `"generated"`, or `"dependency"`.
    pub fn getDisplayName(lazy_path: LazyPath) []const u8 {
        return switch (lazy_path) {
            .src_path => |sp| sp.sub_path,
            .cwd_relative => |p| p,
            .generated => "generated",
            .dependency => "dependency",
        };
    }

    /// Adds dependencies this file source implies to the given step.
    pub fn addStepDependencies(lazy_path: LazyPath, other_step: *Step) void {
        switch (lazy_path) {
            .src_path, .cwd_relative, .dependency => {},
            .generated => |gen| other_step.dependOn(gen.file.step),
        }
    }

    /// Deprecated, see `getPath3`.
    pub fn getPath(lazy_path: LazyPath, src_builder: *Build) []const u8 {
        return getPath2(lazy_path, src_builder, null);
    }

    /// Deprecated, see `getPath3`.
    pub fn getPath2(lazy_path: LazyPath, src_builder: *Build, asking_step: ?*Step) []const u8 {
        const p = getPath3(lazy_path, src_builder, asking_step);
        return src_builder.pathResolve(&.{ p.root_dir.path orelse ".", p.sub_path });
    }

    /// Intended to be used during the make phase only.
    ///
    /// `asking_step` is only used for debugging purposes; it's the step being
    /// run that is asking for the path.
    pub fn getPath3(lazy_path: LazyPath, src_builder: *Build, asking_step: ?*Step) Cache.Path {
        switch (lazy_path) {
            .src_path => |sp| return .{
                .root_dir = sp.owner.build_root,
                .sub_path = sp.sub_path,
            },
            .cwd_relative => |sub_path| return .{
                .root_dir = Cache.Directory.cwd(),
                .sub_path = sub_path,
            },
            .generated => |gen| {
                // TODO make gen.file.path not be absolute and use that as the
                // basis for not traversing up too many directories.

                var file_path: Cache.Path = .{
                    .root_dir = Cache.Directory.cwd(),
                    .sub_path = gen.file.path orelse {
                        const w = debug.lockStderrWriter(&.{});
                        dumpBadGetPathHelp(gen.file.step, w, .detect(.stderr()), src_builder, asking_step) catch {};
                        debug.unlockStderrWriter();
                        @panic("misconfigured build script");
                    },
                };

                if (gen.up > 0) {
                    const cache_root_path = src_builder.cache_root.path orelse
                        (src_builder.cache_root.join(src_builder.allocator, &.{"."}) catch @panic("OOM"));

                    for (0..gen.up) |_| {
                        if (mem.eql(u8, file_path.sub_path, cache_root_path)) {
                            // If we hit the cache root and there's still more to go,
                            // the script attempted to go too far.
                            dumpBadDirnameHelp(gen.file.step, asking_step,
                                \\dirname() attempted to traverse outside the cache root.
                                \\This is not allowed.
                                \\
                            , .{}) catch {};
                            @panic("misconfigured build script");
                        }

                        // path is absolute.
                        // dirname will return null only if we're at root.
                        // Typically, we'll stop well before that at the cache root.
                        file_path.sub_path = fs.path.dirname(file_path.sub_path) orelse {
                            dumpBadDirnameHelp(gen.file.step, asking_step,
                                \\dirname() reached root.
                                \\No more directories left to go up.
                                \\
                            , .{}) catch {};
                            @panic("misconfigured build script");
                        };
                    }
                }

                return file_path.join(src_builder.allocator, gen.sub_path) catch @panic("OOM");
            },
            .dependency => |dep| return .{
                .root_dir = dep.dependency.builder.build_root,
                .sub_path = dep.sub_path,
            },
        }
    }

    pub fn basename(lazy_path: LazyPath, src_builder: *Build, asking_step: ?*Step) []const u8 {
        return fs.path.basename(switch (lazy_path) {
            .src_path => |sp| sp.sub_path,
            .cwd_relative => |sub_path| sub_path,
            .generated => |gen| if (gen.sub_path.len > 0)
                gen.sub_path
            else
                gen.file.getPath2(src_builder, asking_step),
            .dependency => |dep| dep.sub_path,
        });
    }

    /// Copies the internal strings.
    ///
    /// The `b` parameter is only used for its allocator. All *Build instances
    /// share the same allocator.
    pub fn dupe(lazy_path: LazyPath, b: *Build) LazyPath {
        return lazy_path.dupeInner(b.allocator);
    }

    fn dupeInner(lazy_path: LazyPath, allocator: std.mem.Allocator) LazyPath {
        return switch (lazy_path) {
            .src_path => |sp| .{ .src_path = .{
                .owner = sp.owner,
                .sub_path = sp.owner.dupePath(sp.sub_path),
            } },
            .cwd_relative => |p| .{ .cwd_relative = dupePathInner(allocator, p) },
            .generated => |gen| .{ .generated = .{
                .file = gen.file,
                .up = gen.up,
                .sub_path = dupePathInner(allocator, gen.sub_path),
            } },
            .dependency => |dep| .{ .dependency = dep },
        };
    }
}
\`\`\`

</details>

---

### <a id="const-installdir"></a>`InstallDir`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const InstallDir = union(enum) {
    prefix: void,
    lib: void,
    bin: void,
    header: void,
    /// A path relative to the prefix
    custom: []const u8,

    /// Duplicates the install directory including the path if set to custom.
    pub fn dupe(dir: InstallDir, builder: *Build) InstallDir {
        if (dir == .custom) {
            return .{ .custom = builder.dupe(dir.custom) };
        } else {
            return dir;
        }
    }
}
\`\`\`

</details>

---

## Functions (71)

### <a id="fn-create"></a>`create`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn create(
    graph: *Graph,
    build_root: Cache.Directory,
    cache_root: Cache.Directory,
    available_deps: AvailableDeps,
) error{OutOfMemory}!*Build {
    const arena = graph.arena;

    const b = try arena.create(Build);
    b.* = .{
        .graph = graph,
        .build_root = build_root,
        .cache_root = cache_root,
        .verbose = false,
        .verbose_link = false,
        .verbose_cc = false,
        .verbose_air = false,
        .verbose_llvm_ir = null,
        .verbose_llvm_bc = null,
        .verbose_cimport = false,
        .verbose_llvm_cpu_features = false,
        .invalid_user_input = false,
        .allocator = arena,
        .user_input_options = UserInputOptionsMap.init(arena),
        .available_options_map = AvailableOptionsMap.init(arena),
        .available_options_list = std.array_list.Managed(AvailableOption).init(arena),
        .top_level_steps = .{},
        .default_step = undefined,
        .search_prefixes = .empty,
        .install_prefix = undefined,
        .lib_dir = undefined,
        .exe_dir = undefined,
        .h_dir = undefined,
        .dest_dir = graph.env_map.get("DESTDIR"),
        .install_tls = .{
            .step = .init(.{
                .id = TopLevelStep.base_id,
                .name = "install",
                .owner = b,
            }),
            .description = "Copy build artifacts to prefix path",
        },
        .uninstall_tls = .{
            .step = .init(.{
                .id = TopLevelStep.base_id,
                .name = "uninstall",
                .owner = b,
                .makeFn = makeUninstall,
            }),
            .description = "Remove build artifacts from prefix path",
        },
        .install_path = undefined,
        .args = null,
        .modules = .init(arena),
        .named_writefiles = .init(arena),
        .named_lazy_paths = .init(arena),
        .pkg_hash = "",
        .available_deps = available_deps,
        .release_mode = .off,
    };
    try b.top_level_steps.put(arena, b.install_tls.step.name, &b.install_tls);
    try b.top_level_steps.put(arena, b.uninstall_tls.step.name, &b.uninstall_tls);
    b.default_step = &b.install_tls.step;
    return b;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `graph` | [`*Graph`](#type-graph) | – | – |
| `build\_root` | `Cache.Directory` | – | – |
| `cache\_root` | `Cache.Directory` | – | – |
| `available\_deps` | `AvailableDeps` | – | – |
| Return | `error{OutOfMemory}!*Build` | – | – |

**Possible Errors:**

- `error.OutOfMemory`

</details>

---

### <a id="fn-resolveinstallprefix"></a>`resolveInstallPrefix`

<details class="declaration-card" open>
<summary>Function – This function is intended to be called by lib/build_runner</summary>

This function is intended to be called by lib/build_runner.zig, not a build.zig file.

\`\`\`zig
pub fn resolveInstallPrefix(b: *Build, install_prefix: ?[]const u8, dir_list: DirList) void {
    if (b.dest_dir) |dest_dir| {
        b.install_prefix = install_prefix orelse "/usr";
        b.install_path = b.pathJoin(&.{ dest_dir, b.install_prefix });
    } else {
        b.install_prefix = install_prefix orelse
            (b.build_root.join(b.allocator, &.{"zig-out"}) catch @panic("unhandled error"));
        b.install_path = b.install_prefix;
    }

    var lib_list = [_][]const u8{ b.install_path, "lib" };
    var exe_list = [_][]const u8{ b.install_path, "bin" };
    var h_list = [_][]const u8{ b.install_path, "include" };

    if (dir_list.lib_dir) |dir| {
        if (fs.path.isAbsolute(dir)) lib_list[0] = b.dest_dir orelse "";
        lib_list[1] = dir;
    }

    if (dir_list.exe_dir) |dir| {
        if (fs.path.isAbsolute(dir)) exe_list[0] = b.dest_dir orelse "";
        exe_list[1] = dir;
    }

    if (dir_list.include_dir) |dir| {
        if (fs.path.isAbsolute(dir)) h_list[0] = b.dest_dir orelse "";
        h_list[1] = dir;
    }

    b.lib_dir = b.pathJoin(&lib_list);
    b.exe_dir = b.pathJoin(&exe_list);
    b.h_dir = b.pathJoin(&h_list);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `install\_prefix` | `?[]const u8` | – | – |
| `dir\_list` | [`DirList`](#type-dirlist) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-addoptions"></a>`addOptions`

<details class="declaration-card" open>
<summary>Function – Create a set of key-value pairs that can be converted into a Zig source</summary>

Create a set of key-value pairs that can be converted into a Zig source
file and then inserted into a Zig compilation's module table for importing.
In other words, this provides a way to expose build.zig values to Zig
source code with `@import`.
Related: `Module.addOptions`.

\`\`\`zig
pub fn addOptions(b: *Build) *Step.Options {
    return Step.Options.create(b);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| Return | `*Step.Options` | – | – |

</details>

---

### <a id="fn-addexecutable"></a>`addExecutable`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addExecutable(b: *Build, options: ExecutableOptions) *Step.Compile {
    return .create(b, .{
        .name = options.name,
        .root_module = options.root_module,
        .version = options.version,
        .kind = .exe,
        .linkage = options.linkage,
        .max_rss = options.max_rss,
        .use_llvm = options.use_llvm,
        .use_lld = options.use_lld,
        .zig_lib_dir = options.zig_lib_dir,
        .win32_manifest = options.win32_manifest,
    });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | [`ExecutableOptions`](#type-executableoptions) | – | – |
| Return | `*Step.Compile` | – | – |

</details>

---

### <a id="fn-addobject"></a>`addObject`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addObject(b: *Build, options: ObjectOptions) *Step.Compile {
    return .create(b, .{
        .name = options.name,
        .root_module = options.root_module,
        .kind = .obj,
        .max_rss = options.max_rss,
        .use_llvm = options.use_llvm,
        .use_lld = options.use_lld,
        .zig_lib_dir = options.zig_lib_dir,
    });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | [`ObjectOptions`](#type-objectoptions) | – | – |
| Return | `*Step.Compile` | – | – |

</details>

---

### <a id="fn-addlibrary"></a>`addLibrary`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addLibrary(b: *Build, options: LibraryOptions) *Step.Compile {
    return .create(b, .{
        .name = options.name,
        .root_module = options.root_module,
        .kind = .lib,
        .linkage = options.linkage,
        .version = options.version,
        .max_rss = options.max_rss,
        .use_llvm = options.use_llvm,
        .use_lld = options.use_lld,
        .zig_lib_dir = options.zig_lib_dir,
        .win32_manifest = options.win32_manifest,
    });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | [`LibraryOptions`](#type-libraryoptions) | – | – |
| Return | `*Step.Compile` | – | – |

</details>

---

### <a id="fn-addtest"></a>`addTest`

<details class="declaration-card" open>
<summary>Function – Creates an executable containing unit tests</summary>

Creates an executable containing unit tests.

Equivalent to running the command `zig test --test-no-exec ...`.

**This step does not run the unit tests**. Typically, the result of this
function will be passed to `addRunArtifact`, creating a `Step.Run`. These
two steps are separated because they are independently configured and
cached.

\`\`\`zig
pub fn addTest(b: *Build, options: TestOptions) *Step.Compile {
    return .create(b, .{
        .name = options.name,
        .kind = if (options.emit_object) .test_obj else .@"test",
        .root_module = options.root_module,
        .max_rss = options.max_rss,
        .filters = b.dupeStrings(options.filters),
        .test_runner = options.test_runner,
        .use_llvm = options.use_llvm,
        .use_lld = options.use_lld,
        .zig_lib_dir = options.zig_lib_dir,
    });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | [`TestOptions`](#type-testoptions) | – | – |
| Return | `*Step.Compile` | – | – |

</details>

---

### <a id="fn-addmodule"></a>`addModule`

<details class="declaration-card" open>
<summary>Function – This function creates a module and adds it to the package&#39;s module set, making</summary>

This function creates a module and adds it to the package's module set, making
it available to other packages which depend on this one.
`createModule` can be used instead to create a private module.

\`\`\`zig
pub fn addModule(b: *Build, name: []const u8, options: Module.CreateOptions) *Module {
    const module = Module.create(b, options);
    b.modules.put(b.dupe(name), module) catch @panic("OOM");
    return module;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name` | `[]const u8` | – | – |
| `options` | `Module.CreateOptions` | – | – |
| Return | `*Module` | – | – |

</details>

---

### <a id="fn-createmodule"></a>`createModule`

<details class="declaration-card" open>
<summary>Function – This function creates a private module, to be used by the current package,</summary>

This function creates a private module, to be used by the current package,
but not exposed to other packages depending on this one.
`addModule` can be used instead to create a public module.

\`\`\`zig
pub fn createModule(b: *Build, options: Module.CreateOptions) *Module {
    return Module.create(b, options);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | `Module.CreateOptions` | – | – |
| Return | `*Module` | – | – |

</details>

---

### <a id="fn-addsystemcommand"></a>`addSystemCommand`

<details class="declaration-card" open>
<summary>Function – Initializes a `Step</summary>

Initializes a `Step.Run` with argv, which must at least have the path to the
executable. More command line arguments can be added with `addArg`,
`addArgs`, and `addArtifactArg`.
Be careful using this function, as it introduces a system dependency.
To run an executable built with zig build, see `Step.Compile.run`.

\`\`\`zig
pub fn addSystemCommand(b: *Build, argv: []const []const u8) *Step.Run {
    assert(argv.len >= 1);
    const run_step = Step.Run.create(b, b.fmt("run {s}", .{argv[0]}));
    run_step.addArgs(argv);
    return run_step;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `argv` | `[]const []const u8` | – | – |
| Return | `*Step.Run` | – | – |

</details>

---

### <a id="fn-addrunartifact"></a>`addRunArtifact`

<details class="declaration-card" open>
<summary>Function – Creates a `Step</summary>

Creates a `Step.Run` with an executable built with `addExecutable`.
Add command line arguments with methods of `Step.Run`.

\`\`\`zig
pub fn addRunArtifact(b: *Build, exe: *Step.Compile) *Step.Run {
    // It doesn't have to be native. We catch that if you actually try to run it.
    // Consider that this is declarative; the run step may not be run unless a user
    // option is supplied.

    // Avoid the common case of the step name looking like "run test test".
    const step_name = if (exe.kind.isTest() and mem.eql(u8, exe.name, "test"))
        b.fmt("run {s}", .{@tagName(exe.kind)})
    else
        b.fmt("run {s} {s}", .{ @tagName(exe.kind), exe.name });

    const run_step = Step.Run.create(b, step_name);
    run_step.producer = exe;
    if (exe.kind == .@"test") {
        if (exe.exec_cmd_args) |exec_cmd_args| {
            for (exec_cmd_args) |cmd_arg| {
                if (cmd_arg) |arg| {
                    run_step.addArg(arg);
                } else {
                    run_step.addArtifactArg(exe);
                }
            }
        } else {
            run_step.addArtifactArg(exe);
        }

        const test_server_mode = if (exe.test_runner) |r| r.mode == .server else true;
        if (test_server_mode) run_step.enableTestRunnerMode();
    } else {
        run_step.addArtifactArg(exe);
    }

    return run_step;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `exe` | `*Step.Compile` | – | – |
| Return | `*Step.Run` | – | – |

</details>

---

### <a id="fn-addconfigheader"></a>`addConfigHeader`

<details class="declaration-card" open>
<summary>Function – Using the `values` provided, produces a C header file, possibly based on a</summary>

Using the `values` provided, produces a C header file, possibly based on a
template input file (e.g. config.h.in).
When an input template file is provided, this function will fail the build
when an option not found in the input file is provided in `values`, and
when an option found in the input file is missing from `values`.

\`\`\`zig
pub fn addConfigHeader(
    b: *Build,
    options: Step.ConfigHeader.Options,
    values: anytype,
) *Step.ConfigHeader {
    var options_copy = options;
    if (options_copy.first_ret_addr == null)
        options_copy.first_ret_addr = @returnAddress();

    const config_header_step = Step.ConfigHeader.create(b, options_copy);
    config_header_step.addValues(values);
    return config_header_step;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | `Step.ConfigHeader.Options` | – | – |
| `values` | `` | – | – |
| Return | `*Step.ConfigHeader` | – | – |

</details>

---

### <a id="fn-dupe"></a>`dupe`

<details class="declaration-card" open>
<summary>Function – Allocator</summary>

Allocator.dupe without the need to handle out of memory.

\`\`\`zig
pub fn dupe(b: *Build, bytes: []const u8) []u8 {
    return dupeInner(b.allocator, bytes);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `bytes` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-dupeinner"></a>`dupeInner`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn dupeInner(allocator: std.mem.Allocator, bytes: []const u8) []u8 {
    return allocator.dupe(u8, bytes) catch @panic("OOM");
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `allocator` | `std.mem.Allocator` | – | – |
| `bytes` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-dupestrings"></a>`dupeStrings`

<details class="declaration-card" open>
<summary>Function – Duplicates an array of strings without the need to handle out of memory</summary>

Duplicates an array of strings without the need to handle out of memory.

\`\`\`zig
pub fn dupeStrings(b: *Build, strings: []const []const u8) [][]u8 {
    const array = b.allocator.alloc([]u8, strings.len) catch @panic("OOM");
    for (array, strings) |*dest, source| dest.* = b.dupe(source);
    return array;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `strings` | `[]const []const u8` | – | – |
| Return | `[][]u8` | – | – |

</details>

---

### <a id="fn-dupepath"></a>`dupePath`

<details class="declaration-card" open>
<summary>Function – Duplicates a path and converts all slashes to the OS&#39;s canonical path separator</summary>

Duplicates a path and converts all slashes to the OS's canonical path separator.

\`\`\`zig
pub fn dupePath(b: *Build, bytes: []const u8) []u8 {
    return dupePathInner(b.allocator, bytes);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `bytes` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-addwritefile"></a>`addWriteFile`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addWriteFile(b: *Build, file_path: []const u8, data: []const u8) *Step.WriteFile {
    const write_file_step = b.addWriteFiles();
    _ = write_file_step.add(file_path, data);
    return write_file_step;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `file\_path` | `[]const u8` | – | – |
| `data` | `[]const u8` | – | – |
| Return | `*Step.WriteFile` | – | – |

</details>

---

### <a id="fn-addnamedwritefiles"></a>`addNamedWriteFiles`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addNamedWriteFiles(b: *Build, name: []const u8) *Step.WriteFile {
    const wf = Step.WriteFile.create(b);
    b.named_writefiles.put(b.dupe(name), wf) catch @panic("OOM");
    return wf;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name` | `[]const u8` | – | – |
| Return | `*Step.WriteFile` | – | – |

</details>

---

### <a id="fn-addnamedlazypath"></a>`addNamedLazyPath`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addNamedLazyPath(b: *Build, name: []const u8, lp: LazyPath) void {
    b.named_lazy_paths.put(b.dupe(name), lp.dupe(b)) catch @panic("OOM");
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name` | `[]const u8` | – | – |
| `lp` | [`LazyPath`](#const-lazypath) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-addwritefiles"></a>`addWriteFiles`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addWriteFiles(b: *Build) *Step.WriteFile {
    return Step.WriteFile.create(b);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| Return | `*Step.WriteFile` | – | – |

</details>

---

### <a id="fn-addupdatesourcefiles"></a>`addUpdateSourceFiles`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addUpdateSourceFiles(b: *Build) *Step.UpdateSourceFiles {
    return Step.UpdateSourceFiles.create(b);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| Return | `*Step.UpdateSourceFiles` | – | – |

</details>

---

### <a id="fn-addremovedirtree"></a>`addRemoveDirTree`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addRemoveDirTree(b: *Build, dir_path: LazyPath) *Step.RemoveDir {
    return Step.RemoveDir.create(b, dir_path);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `dir\_path` | [`LazyPath`](#const-lazypath) | – | – |
| Return | `*Step.RemoveDir` | – | – |

</details>

---

### <a id="fn-addfail"></a>`addFail`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addFail(b: *Build, error_msg: []const u8) *Step.Fail {
    return Step.Fail.create(b, error_msg);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `error\_msg` | `[]const u8` | – | – |
| Return | `*Step.Fail` | – | – |

</details>

---

### <a id="fn-addfmt"></a>`addFmt`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addFmt(b: *Build, options: Step.Fmt.Options) *Step.Fmt {
    return Step.Fmt.create(b, options);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | `Step.Fmt.Options` | – | – |
| Return | `*Step.Fmt` | – | – |

</details>

---

### <a id="fn-addtranslatec"></a>`addTranslateC`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addTranslateC(b: *Build, options: Step.TranslateC.Options) *Step.TranslateC {
    return Step.TranslateC.create(b, options);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | `Step.TranslateC.Options` | – | – |
| Return | `*Step.TranslateC` | – | – |

</details>

---

### <a id="fn-getinstallstep"></a>`getInstallStep`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn getInstallStep(b: *Build) *Step {
    return &b.install_tls.step;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| Return | `*Step` | – | – |

</details>

---

### <a id="fn-getuninstallstep"></a>`getUninstallStep`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn getUninstallStep(b: *Build) *Step {
    return &b.uninstall_tls.step;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| Return | `*Step` | – | – |

</details>

---

### <a id="fn-option"></a>`option`

<details class="declaration-card" open>
<summary>Function – Creates a configuration option to be passed to the build</summary>

Creates a configuration option to be passed to the build.zig script.
When a user directly runs `zig build`, they can set these options with `-D` arguments.
When a project depends on a Zig package as a dependency, it programmatically sets
these options when calling the dependency's build.zig script as a function.
`null` is returned when an option is left to default.

\`\`\`zig
pub fn option(b: *Build, comptime T: type, name_raw: []const u8, description_raw: []const u8) ?T {
    const name = b.dupe(name_raw);
    const description = b.dupe(description_raw);
    const type_id = comptime typeToEnum(T);
    const enum_options = if (type_id == .@"enum" or type_id == .enum_list) blk: {
        const EnumType = if (type_id == .enum_list) @typeInfo(T).pointer.child else T;
        const fields = comptime std.meta.fields(EnumType);
        var options = std.array_list.Managed([]const u8).initCapacity(b.allocator, fields.len) catch @panic("OOM");

        inline for (fields) |field| {
            options.appendAssumeCapacity(field.name);
        }

        break :blk options.toOwnedSlice() catch @panic("OOM");
    } else null;
    const available_option = AvailableOption{
        .name = name,
        .type_id = type_id,
        .description = description,
        .enum_options = enum_options,
    };
    if ((b.available_options_map.fetchPut(name, available_option) catch @panic("OOM")) != null) {
        panic("Option '{s}' declared twice", .{name});
    }
    b.available_options_list.append(available_option) catch @panic("OOM");

    const option_ptr = b.user_input_options.getPtr(name) orelse return null;
    option_ptr.used = true;
    switch (type_id) {
        .bool => switch (option_ptr.value) {
            .flag => return true,
            .scalar => |s| {
                if (mem.eql(u8, s, "true")) {
                    return true;
                } else if (mem.eql(u8, s, "false")) {
                    return false;
                } else {
                    log.err("Expected -D{s} to be a boolean, but received '{s}'", .{ name, s });
                    b.markInvalidUserInput();
                    return null;
                }
            },
            .list, .map, .lazy_path, .lazy_path_list => {
                log.err("Expected -D{s} to be a boolean, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
        },
        .int => switch (option_ptr.value) {
            .flag, .list, .map, .lazy_path, .lazy_path_list => {
                log.err("Expected -D{s} to be an integer, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
            .scalar => |s| {
                const n = std.fmt.parseInt(T, s, 10) catch |err| switch (err) {
                    error.Overflow => {
                        log.err("-D{s} value {s} cannot fit into type {s}.", .{ name, s, @typeName(T) });
                        b.markInvalidUserInput();
                        return null;
                    },
                    else => {
                        log.err("Expected -D{s} to be an integer of type {s}.", .{ name, @typeName(T) });
                        b.markInvalidUserInput();
                        return null;
                    },
                };
                return n;
            },
        },
        .float => switch (option_ptr.value) {
            .flag, .map, .list, .lazy_path, .lazy_path_list => {
                log.err("Expected -D{s} to be a float, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
            .scalar => |s| {
                const n = std.fmt.parseFloat(T, s) catch {
                    log.err("Expected -D{s} to be a float of type {s}.", .{ name, @typeName(T) });
                    b.markInvalidUserInput();
                    return null;
                };
                return n;
            },
        },
        .@"enum" => switch (option_ptr.value) {
            .flag, .map, .list, .lazy_path, .lazy_path_list => {
                log.err("Expected -D{s} to be an enum, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
            .scalar => |s| {
                if (std.meta.stringToEnum(T, s)) |enum_lit| {
                    return enum_lit;
                } else {
                    log.err("Expected -D{s} to be of type {s}.", .{ name, @typeName(T) });
                    b.markInvalidUserInput();
                    return null;
                }
            },
        },
        .string => switch (option_ptr.value) {
            .flag, .list, .map, .lazy_path, .lazy_path_list => {
                log.err("Expected -D{s} to be a string, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
            .scalar => |s| return s,
        },
        .build_id => switch (option_ptr.value) {
            .flag, .map, .list, .lazy_path, .lazy_path_list => {
                log.err("Expected -D{s} to be an enum, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
            .scalar => |s| {
                if (std.zig.BuildId.parse(s)) |build_id| {
                    return build_id;
                } else |err| {
                    log.err("unable to parse option '-D{s}': {s}", .{ name, @errorName(err) });
                    b.markInvalidUserInput();
                    return null;
                }
            },
        },
        .list => switch (option_ptr.value) {
            .flag, .map, .lazy_path, .lazy_path_list => {
                log.err("Expected -D{s} to be a list, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
            .scalar => |s| {
                return b.allocator.dupe([]const u8, &[_][]const u8{s}) catch @panic("OOM");
            },
            .list => |lst| return lst.items,
        },
        .enum_list => switch (option_ptr.value) {
            .flag, .map, .lazy_path, .lazy_path_list => {
                log.err("Expected -D{s} to be a list, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
            .scalar => |s| {
                const Child = @typeInfo(T).pointer.child;
                const value = std.meta.stringToEnum(Child, s) orelse {
                    log.err("Expected -D{s} to be of type {s}.", .{ name, @typeName(Child) });
                    b.markInvalidUserInput();
                    return null;
                };
                return b.allocator.dupe(Child, &[_]Child{value}) catch @panic("OOM");
            },
            .list => |lst| {
                const Child = @typeInfo(T).pointer.child;
                const new_list = b.allocator.alloc(Child, lst.items.len) catch @panic("OOM");
                for (new_list, lst.items) |*new_item, str| {
                    new_item.* = std.meta.stringToEnum(Child, str) orelse {
                        log.err("Expected -D{s} to be of type {s}.", .{ name, @typeName(Child) });
                        b.markInvalidUserInput();
                        b.allocator.free(new_list);
                        return null;
                    };
                }
                return new_list;
            },
        },
        .lazy_path => switch (option_ptr.value) {
            .scalar => |s| return .{ .cwd_relative = s },
            .lazy_path => |lp| return lp,
            .flag, .map, .list, .lazy_path_list => {
                log.err("Expected -D{s} to be a path, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
        },
        .lazy_path_list => switch (option_ptr.value) {
            .scalar => |s| return b.allocator.dupe(LazyPath, &[_]LazyPath{.{ .cwd_relative = s }}) catch @panic("OOM"),
            .lazy_path => |lp| return b.allocator.dupe(LazyPath, &[_]LazyPath{lp}) catch @panic("OOM"),
            .list => |lst| {
                const new_list = b.allocator.alloc(LazyPath, lst.items.len) catch @panic("OOM");
                for (new_list, lst.items) |*new_item, str| {
                    new_item.* = .{ .cwd_relative = str };
                }
                return new_list;
            },
            .lazy_path_list => |lp_list| return lp_list.items,
            .flag, .map => {
                log.err("Expected -D{s} to be a path, but received a {s}.", .{
                    name, @tagName(option_ptr.value),
                });
                b.markInvalidUserInput();
                return null;
            },
        },
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `T` | `type` | – | – |
| `name\_raw` | `[]const u8` | – | – |
| `description\_raw` | `[]const u8` | – | – |
| Return | `?T` | – | – |

</details>

---

### <a id="fn-step"></a>`step`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn step(b: *Build, name: []const u8, description: []const u8) *Step {
    const step_info = b.allocator.create(TopLevelStep) catch @panic("OOM");
    step_info.* = .{
        .step = .init(.{
            .id = TopLevelStep.base_id,
            .name = name,
            .owner = b,
        }),
        .description = b.dupe(description),
    };
    const gop = b.top_level_steps.getOrPut(b.allocator, name) catch @panic("OOM");
    if (gop.found_existing) std.debug.panic("A top-level step with name \"{s}\" already exists", .{name});

    gop.key_ptr.* = step_info.step.name;
    gop.value_ptr.* = step_info;

    return &step_info.step;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name` | `[]const u8` | – | – |
| `description` | `[]const u8` | – | – |
| Return | `*Step` | – | – |

</details>

---

### <a id="fn-standardoptimizeoption"></a>`standardOptimizeOption`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn standardOptimizeOption(b: *Build, options: StandardOptimizeOptionOptions) std.builtin.OptimizeMode {
    if (options.preferred_optimize_mode) |mode| {
        if (b.option(bool, "release", "optimize for end users") orelse (b.release_mode != .off)) {
            return mode;
        } else {
            return .Debug;
        }
    }

    if (b.option(
        std.builtin.OptimizeMode,
        "optimize",
        "Prioritize performance, safety, or binary size",
    )) |mode| {
        return mode;
    }

    return switch (b.release_mode) {
        .off => .Debug,
        .any => {
            std.debug.print("the project does not declare a preferred optimization mode. choose: --release=fast, --release=safe, or --release=small\n", .{});
            process.exit(1);
        },
        .fast => .ReleaseFast,
        .safe => .ReleaseSafe,
        .small => .ReleaseSmall,
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | [`StandardOptimizeOptionOptions`](#type-standardoptimizeoptionoptions) | – | – |
| Return | `std.builtin.OptimizeMode` | – | – |

</details>

---

### <a id="fn-standardtargetoptions"></a>`standardTargetOptions`

<details class="declaration-card" open>
<summary>Function – Exposes standard `zig build` options for choosing a target and additionally</summary>

Exposes standard `zig build` options for choosing a target and additionally
resolves the target query.

\`\`\`zig
pub fn standardTargetOptions(b: *Build, args: StandardTargetOptionsArgs) ResolvedTarget {
    const query = b.standardTargetOptionsQueryOnly(args);
    return b.resolveTargetQuery(query);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `args` | [`StandardTargetOptionsArgs`](#type-standardtargetoptionsargs) | – | – |
| Return | [`ResolvedTarget`](#type-resolvedtarget) | – | – |

</details>

---

### <a id="fn-parsetargetquery"></a>`parseTargetQuery`

<details class="declaration-card" open>
<summary>Function – Obtain a target query from a string, reporting diagnostics to stderr if the</summary>

Obtain a target query from a string, reporting diagnostics to stderr if the
parsing failed.
Asserts that the `diagnostics` field of `options` is `null`. This use case
is handled instead by calling `std.Target.Query.parse` directly.

\`\`\`zig
pub fn parseTargetQuery(options: std.Target.Query.ParseOptions) error{ParseFailed}!std.Target.Query {
    assert(options.diagnostics == null);
    var diags: Target.Query.ParseOptions.Diagnostics = .{};
    var opts_copy = options;
    opts_copy.diagnostics = &diags;
    return std.Target.Query.parse(opts_copy) catch |err| switch (err) {
        error.UnknownCpuModel => {
            std.debug.print("unknown CPU: '{s}'\navailable CPUs for architecture '{s}':\n", .{
                diags.cpu_name.?, @tagName(diags.arch.?),
            });
            for (diags.arch.?.allCpuModels()) |cpu| {
                std.debug.print(" {s}\n", .{cpu.name});
            }
            return error.ParseFailed;
        },
        error.UnknownCpuFeature => {
            std.debug.print(
                \\unknown CPU feature: '{s}'
                \\available CPU features for architecture '{s}':
                \\
            , .{
                diags.unknown_feature_name.?,
                @tagName(diags.arch.?),
            });
            for (diags.arch.?.allFeaturesList()) |feature| {
                std.debug.print(" {s}: {s}\n", .{ feature.name, feature.description });
            }
            return error.ParseFailed;
        },
        error.UnknownOperatingSystem => {
            std.debug.print(
                \\unknown OS: '{s}'
                \\available operating systems:
                \\
            , .{diags.os_name.?});
            inline for (std.meta.fields(Target.Os.Tag)) |field| {
                std.debug.print(" {s}\n", .{field.name});
            }
            return error.ParseFailed;
        },
        else => |e| {
            std.debug.print("unable to parse target '{s}': {s}\n", .{
                options.arch_os_abi, @errorName(e),
            });
            return error.ParseFailed;
        },
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `options` | `std.Target.Query.ParseOptions` | – | – |
| Return | `error{ParseFailed}!std.Target.Query` | – | – |

**Possible Errors:**

- `error.ParseFailed`

</details>

---

### <a id="fn-standardtargetoptionsqueryonly"></a>`standardTargetOptionsQueryOnly`

<details class="declaration-card" open>
<summary>Function – Exposes standard `zig build` options for choosing a target</summary>

Exposes standard `zig build` options for choosing a target.

\`\`\`zig
pub fn standardTargetOptionsQueryOnly(b: *Build, args: StandardTargetOptionsArgs) Target.Query {
    const maybe_triple = b.option(
        []const u8,
        "target",
        "The CPU architecture, OS, and ABI to build for",
    );
    const mcpu = b.option(
        []const u8,
        "cpu",
        "Target CPU features to add or subtract",
    );
    const ofmt = b.option(
        []const u8,
        "ofmt",
        "Target object format",
    );
    const dynamic_linker = b.option(
        []const u8,
        "dynamic-linker",
        "Path to interpreter on the target system",
    );

    if (maybe_triple == null and mcpu == null and ofmt == null and dynamic_linker == null)
        return args.default_target;

    const triple = maybe_triple orelse "native";

    const selected_target = parseTargetQuery(.{
        .arch_os_abi = triple,
        .cpu_features = mcpu,
        .object_format = ofmt,
        .dynamic_linker = dynamic_linker,
    }) catch |err| switch (err) {
        error.ParseFailed => {
            b.markInvalidUserInput();
            return args.default_target;
        },
    };

    const whitelist = args.whitelist orelse return selected_target;

    // Make sure it's a match of one of the list.
    for (whitelist) |q| {
        if (q.eql(selected_target))
            return selected_target;
    }

    for (whitelist) |q| {
        log.info("allowed target: -Dtarget={s} -Dcpu={s}", .{
            q.zigTriple(b.allocator) catch @panic("OOM"),
            q.serializeCpuAlloc(b.allocator) catch @panic("OOM"),
        });
    }
    log.err("chosen target '{s}' does not match one of the allowed targets", .{
        selected_target.zigTriple(b.allocator) catch @panic("OOM"),
    });
    b.markInvalidUserInput();
    return args.default_target;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `args` | [`StandardTargetOptionsArgs`](#type-standardtargetoptionsargs) | – | – |
| Return | `Target.Query` | – | – |

</details>

---

### <a id="fn-adduserinputoption"></a>`addUserInputOption`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addUserInputOption(b: *Build, name_raw: []const u8, value_raw: []const u8) error{OutOfMemory}!bool {
    const name = b.dupe(name_raw);
    const value = b.dupe(value_raw);
    const gop = try b.user_input_options.getOrPut(name);
    if (!gop.found_existing) {
        gop.value_ptr.* = UserInputOption{
            .name = name,
            .value = .{ .scalar = value },
            .used = false,
        };
        return false;
    }

    // option already exists
    switch (gop.value_ptr.value) {
        .scalar => |s| {
            // turn it into a list
            var list = std.array_list.Managed([]const u8).init(b.allocator);
            try list.append(s);
            try list.append(value);
            try b.user_input_options.put(name, .{
                .name = name,
                .value = .{ .list = list },
                .used = false,
            });
        },
        .list => |*list| {
            // append to the list
            try list.append(value);
            try b.user_input_options.put(name, .{
                .name = name,
                .value = .{ .list = list.* },
                .used = false,
            });
        },
        .flag => {
            log.warn("option '-D{s}={s}' conflicts with flag '-D{s}'.", .{ name, value, name });
            return true;
        },
        .map => |*map| {
            _ = map;
            log.warn("TODO maps as command line arguments is not implemented yet.", .{});
            return true;
        },
        .lazy_path, .lazy_path_list => {
            log.warn("the lazy path value type isn't added from the CLI, but somehow '{s}' is a .{f}", .{ name, std.zig.fmtId(@tagName(gop.value_ptr.value)) });
            return true;
        },
    }
    return false;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name\_raw` | `[]const u8` | – | – |
| `value\_raw` | `[]const u8` | – | – |
| Return | `error{OutOfMemory}!bool` | – | – |

**Possible Errors:**

- `error.OutOfMemory`

</details>

---

### <a id="fn-adduserinputflag"></a>`addUserInputFlag`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addUserInputFlag(b: *Build, name_raw: []const u8) error{OutOfMemory}!bool {
    const name = b.dupe(name_raw);
    const gop = try b.user_input_options.getOrPut(name);
    if (!gop.found_existing) {
        gop.value_ptr.* = .{
            .name = name,
            .value = .{ .flag = {} },
            .used = false,
        };
        return false;
    }

    // option already exists
    switch (gop.value_ptr.value) {
        .scalar => |s| {
            log.err("Flag '-D{s}' conflicts with option '-D{s}={s}'.", .{ name, name, s });
            return true;
        },
        .list, .map, .lazy_path_list => {
            log.err("Flag '-D{s}' conflicts with multiple options of the same name.", .{name});
            return true;
        },
        .lazy_path => |lp| {
            log.err("Flag '-D{s}' conflicts with option '-D{s}={s}'.", .{ name, name, lp.getDisplayName() });
            return true;
        },

        .flag => {},
    }
    return false;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name\_raw` | `[]const u8` | – | – |
| Return | `error{OutOfMemory}!bool` | – | – |

**Possible Errors:**

- `error.OutOfMemory`

</details>

---

### <a id="fn-validateuserinputdiditfail"></a>`validateUserInputDidItFail`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn validateUserInputDidItFail(b: *Build) bool {
    // Make sure all args are used.
    var it = b.user_input_options.iterator();
    while (it.next()) |entry| {
        if (!entry.value_ptr.used) {
            log.err("invalid option: -D{s}", .{entry.key_ptr.*});
            b.markInvalidUserInput();
        }
    }

    return b.invalid_user_input;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-installartifact"></a>`installArtifact`

<details class="declaration-card" open>
<summary>Function – This creates the install step and adds it to the dependencies of the</summary>

This creates the install step and adds it to the dependencies of the
top-level install step, using all the default options.
See `addInstallArtifact` for a more flexible function.

\`\`\`zig
pub fn installArtifact(b: *Build, artifact: *Step.Compile) void {
    b.getInstallStep().dependOn(&b.addInstallArtifact(artifact, .{}).step);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `artifact` | `*Step.Compile` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-addinstallartifact"></a>`addInstallArtifact`

<details class="declaration-card" open>
<summary>Function – This merely creates the step; it does not add it to the dependencies of the</summary>

This merely creates the step; it does not add it to the dependencies of the
top-level install step.

\`\`\`zig
pub fn addInstallArtifact(
    b: *Build,
    artifact: *Step.Compile,
    options: Step.InstallArtifact.Options,
) *Step.InstallArtifact {
    return Step.InstallArtifact.create(b, artifact, options);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `artifact` | `*Step.Compile` | – | – |
| `options` | `Step.InstallArtifact.Options` | – | – |
| Return | `*Step.InstallArtifact` | – | – |

</details>

---

### <a id="fn-installfile"></a>`installFile`

<details class="declaration-card" open>
<summary>Function – `dest_rel_path` is relative to prefix path</summary>

`dest_rel_path` is relative to prefix path

\`\`\`zig
pub fn installFile(b: *Build, src_path: []const u8, dest_rel_path: []const u8) void {
    b.getInstallStep().dependOn(&b.addInstallFileWithDir(b.path(src_path), .prefix, dest_rel_path).step);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `src\_path` | `[]const u8` | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-installdirectory"></a>`installDirectory`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn installDirectory(b: *Build, options: Step.InstallDir.Options) void {
    b.getInstallStep().dependOn(&b.addInstallDirectory(options).step);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | `Step.InstallDir.Options` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-installbinfile"></a>`installBinFile`

<details class="declaration-card" open>
<summary>Function – `dest_rel_path` is relative to bin path</summary>

`dest_rel_path` is relative to bin path

\`\`\`zig
pub fn installBinFile(b: *Build, src_path: []const u8, dest_rel_path: []const u8) void {
    b.getInstallStep().dependOn(&b.addInstallFileWithDir(b.path(src_path), .bin, dest_rel_path).step);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `src\_path` | `[]const u8` | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-installlibfile"></a>`installLibFile`

<details class="declaration-card" open>
<summary>Function – `dest_rel_path` is relative to lib path</summary>

`dest_rel_path` is relative to lib path

\`\`\`zig
pub fn installLibFile(b: *Build, src_path: []const u8, dest_rel_path: []const u8) void {
    b.getInstallStep().dependOn(&b.addInstallFileWithDir(b.path(src_path), .lib, dest_rel_path).step);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `src\_path` | `[]const u8` | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-addobjcopy"></a>`addObjCopy`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addObjCopy(b: *Build, source: LazyPath, options: Step.ObjCopy.Options) *Step.ObjCopy {
    return Step.ObjCopy.create(b, source, options);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `source` | [`LazyPath`](#const-lazypath) | – | – |
| `options` | `Step.ObjCopy.Options` | – | – |
| Return | `*Step.ObjCopy` | – | – |

</details>

---

### <a id="fn-addinstallfile"></a>`addInstallFile`

<details class="declaration-card" open>
<summary>Function – `dest_rel_path` is relative to install prefix path</summary>

`dest_rel_path` is relative to install prefix path

\`\`\`zig
pub fn addInstallFile(b: *Build, source: LazyPath, dest_rel_path: []const u8) *Step.InstallFile {
    return b.addInstallFileWithDir(source, .prefix, dest_rel_path);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `source` | [`LazyPath`](#const-lazypath) | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `*Step.InstallFile` | – | – |

</details>

---

### <a id="fn-addinstallbinfile"></a>`addInstallBinFile`

<details class="declaration-card" open>
<summary>Function – `dest_rel_path` is relative to bin path</summary>

`dest_rel_path` is relative to bin path

\`\`\`zig
pub fn addInstallBinFile(b: *Build, source: LazyPath, dest_rel_path: []const u8) *Step.InstallFile {
    return b.addInstallFileWithDir(source, .bin, dest_rel_path);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `source` | [`LazyPath`](#const-lazypath) | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `*Step.InstallFile` | – | – |

</details>

---

### <a id="fn-addinstalllibfile"></a>`addInstallLibFile`

<details class="declaration-card" open>
<summary>Function – `dest_rel_path` is relative to lib path</summary>

`dest_rel_path` is relative to lib path

\`\`\`zig
pub fn addInstallLibFile(b: *Build, source: LazyPath, dest_rel_path: []const u8) *Step.InstallFile {
    return b.addInstallFileWithDir(source, .lib, dest_rel_path);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `source` | [`LazyPath`](#const-lazypath) | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `*Step.InstallFile` | – | – |

</details>

---

### <a id="fn-addinstallheaderfile"></a>`addInstallHeaderFile`

<details class="declaration-card" open>
<summary>Function – `dest_rel_path` is relative to header path</summary>

`dest_rel_path` is relative to header path

\`\`\`zig
pub fn addInstallHeaderFile(b: *Build, source: LazyPath, dest_rel_path: []const u8) *Step.InstallFile {
    return b.addInstallFileWithDir(source, .header, dest_rel_path);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `source` | [`LazyPath`](#const-lazypath) | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `*Step.InstallFile` | – | – |

</details>

---

### <a id="fn-addinstallfilewithdir"></a>`addInstallFileWithDir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addInstallFileWithDir(
    b: *Build,
    source: LazyPath,
    install_dir: InstallDir,
    dest_rel_path: []const u8,
) *Step.InstallFile {
    return Step.InstallFile.create(b, source, install_dir, dest_rel_path);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `source` | [`LazyPath`](#const-lazypath) | – | – |
| `install\_dir` | [`InstallDir`](#const-installdir) | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `*Step.InstallFile` | – | – |

</details>

---

### <a id="fn-addinstalldirectory"></a>`addInstallDirectory`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addInstallDirectory(b: *Build, options: Step.InstallDir.Options) *Step.InstallDir {
    return Step.InstallDir.create(b, options);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `options` | `Step.InstallDir.Options` | – | – |
| Return | [`*Step.InstallDir`](#const-installdir) | – | – |

</details>

---

### <a id="fn-addcheckfile"></a>`addCheckFile`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addCheckFile(
    b: *Build,
    file_source: LazyPath,
    options: Step.CheckFile.Options,
) *Step.CheckFile {
    return Step.CheckFile.create(b, file_source, options);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `file\_source` | [`LazyPath`](#const-lazypath) | – | – |
| `options` | `Step.CheckFile.Options` | – | – |
| Return | `*Step.CheckFile` | – | – |

</details>

---

### <a id="fn-truncatefile"></a>`truncateFile`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn truncateFile(b: *Build, dest_path: []const u8) (fs.Dir.MakeError || fs.Dir.StatFileError)!void {
    if (b.verbose) {
        log.info("truncate {s}", .{dest_path});
    }
    const cwd = fs.cwd();
    var src_file = cwd.createFile(dest_path, .{}) catch |err| switch (err) {
        error.FileNotFound => blk: {
            if (fs.path.dirname(dest_path)) |dirname| {
                try cwd.makePath(dirname);
            }
            break :blk try cwd.createFile(dest_path, .{});
        },
        else => |e| return e,
    };
    src_file.close();
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `dest\_path` | `[]const u8` | – | – |
| Return | `(fs.Dir.MakeError \|\| fs.Dir.StatFileError)!void` | – | – |

</details>

---

### <a id="fn-path"></a>`path`

<details class="declaration-card" open>
<summary>Function – References a file or directory relative to the source root</summary>

References a file or directory relative to the source root.

\`\`\`zig
pub fn path(b: *Build, sub_path: []const u8) LazyPath {
    if (fs.path.isAbsolute(sub_path)) {
        std.debug.panic("sub_path is expected to be relative to the build root, but was this absolute path: '{s}'. It is best avoid absolute paths, but if you must, it is supported by LazyPath.cwd_relative", .{
            sub_path,
        });
    }
    return .{ .src_path = .{
        .owner = b,
        .sub_path = sub_path,
    } };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `sub\_path` | `[]const u8` | – | – |
| Return | [`LazyPath`](#const-lazypath) | – | – |

</details>

---

### <a id="fn-pathfromroot"></a>`pathFromRoot`

<details class="declaration-card" open>
<summary>Function – This is low-level implementation details of the build system, not meant to</summary>

This is low-level implementation details of the build system, not meant to
be called by users' build scripts. Even in the build system itself it is a
code smell to call this function.

\`\`\`zig
pub fn pathFromRoot(b: *Build, sub_path: []const u8) []u8 {
    return b.pathResolve(&.{ b.build_root.path orelse ".", sub_path });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `sub\_path` | `[]const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-pathjoin"></a>`pathJoin`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn pathJoin(b: *Build, paths: []const []const u8) []u8 {
    return fs.path.join(b.allocator, paths) catch @panic("OOM");
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `paths` | `[]const []const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-pathresolve"></a>`pathResolve`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn pathResolve(b: *Build, paths: []const []const u8) []u8 {
    return fs.path.resolve(b.allocator, paths) catch @panic("OOM");
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `paths` | `[]const []const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-fmt"></a>`fmt`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn fmt(b: *Build, comptime format: []const u8, args: anytype) []u8 {
    return std.fmt.allocPrint(b.allocator, format, args) catch @panic("OOM");
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `format` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-findprogram"></a>`findProgram`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn findProgram(b: *Build, names: []const []const u8, paths: []const []const u8) error{FileNotFound}![]const u8 {
    // TODO report error for ambiguous situations
    for (b.search_prefixes.items) |search_prefix| {
        for (names) |name| {
            if (fs.path.isAbsolute(name)) {
                return name;
            }
            return tryFindProgram(b, b.pathJoin(&.{ search_prefix, "bin", name })) orelse continue;
        }
    }
    if (b.graph.env_map.get("PATH")) |PATH| {
        for (names) |name| {
            if (fs.path.isAbsolute(name)) {
                return name;
            }
            var it = mem.tokenizeScalar(u8, PATH, fs.path.delimiter);
            while (it.next()) |p| {
                return tryFindProgram(b, b.pathJoin(&.{ p, name })) orelse continue;
            }
        }
    }
    for (names) |name| {
        if (fs.path.isAbsolute(name)) {
            return name;
        }
        for (paths) |p| {
            return tryFindProgram(b, b.pathJoin(&.{ p, name })) orelse continue;
        }
    }
    return error.FileNotFound;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `names` | `[]const []const u8` | – | – |
| `paths` | `[]const []const u8` | – | – |
| Return | `error{FileNotFound}![]const u8` | – | – |

**Possible Errors:**

- `error.FileNotFound`

</details>

---

### <a id="fn-runallowfail"></a>`runAllowFail`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn runAllowFail(
    b: *Build,
    argv: []const []const u8,
    out_code: *u8,
    stderr_behavior: std.process.Child.StdIo,
) RunError![]u8 {
    assert(argv.len != 0);

    if (!process.can_spawn)
        return error.ExecNotSupported;

    const max_output_size = 400 * 1024;
    var child = std.process.Child.init(argv, b.allocator);
    child.stdin_behavior = .Ignore;
    child.stdout_behavior = .Pipe;
    child.stderr_behavior = stderr_behavior;
    child.env_map = &b.graph.env_map;

    try Step.handleVerbose2(b, null, child.env_map, argv);
    try child.spawn();

    const stdout = child.stdout.?.deprecatedReader().readAllAlloc(b.allocator, max_output_size) catch {
        return error.ReadFailure;
    };
    errdefer b.allocator.free(stdout);

    const term = try child.wait();
    switch (term) {
        .Exited => |code| {
            if (code != 0) {
                out_code.* = @as(u8, @truncate(code));
                return error.ExitCodeFailure;
            }
            return stdout;
        },
        .Signal, .Stopped, .Unknown => |code| {
            out_code.* = @as(u8, @truncate(code));
            return error.ProcessTerminated;
        },
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `argv` | `[]const []const u8` | – | – |
| `out\_code` | `*u8` | – | – |
| `stderr\_behavior` | `std.process.Child.StdIo` | – | – |
| Return | [`RunError![]u8`](#error-runerror) | – | – |

</details>

---

### <a id="fn-run"></a>`run`

<details class="declaration-card" open>
<summary>Function – This is a helper function to be called from build</summary>

This is a helper function to be called from build.zig scripts, *not* from
inside step make() functions. If any errors occur, it fails the build with
a helpful message.

\`\`\`zig
pub fn run(b: *Build, argv: []const []const u8) []u8 {
    if (!process.can_spawn) {
        std.debug.print("unable to spawn the following command: cannot spawn child process\n{s}\n", .{
            try allocPrintCmd(b.allocator, null, argv),
        });
        process.exit(1);
    }

    var code: u8 = undefined;
    return b.runAllowFail(argv, &code, .Inherit) catch |err| {
        const printed_cmd = allocPrintCmd(b.allocator, null, argv) catch @panic("OOM");
        std.debug.print("unable to spawn the following command: {s}\n{s}\n", .{
            @errorName(err), printed_cmd,
        });
        process.exit(1);
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `argv` | `[]const []const u8` | – | – |
| Return | `[]u8` | – | – |

</details>

---

### <a id="fn-addsearchprefix"></a>`addSearchPrefix`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn addSearchPrefix(b: *Build, search_prefix: []const u8) void {
    b.search_prefixes.append(b.allocator, b.dupePath(search_prefix)) catch @panic("OOM");
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `search\_prefix` | `[]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-getinstallpath"></a>`getInstallPath`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn getInstallPath(b: *Build, dir: InstallDir, dest_rel_path: []const u8) []const u8 {
    assert(!fs.path.isAbsolute(dest_rel_path)); // Install paths must be relative to the prefix
    const base_dir = switch (dir) {
        .prefix => b.install_path,
        .bin => b.exe_dir,
        .lib => b.lib_dir,
        .header => b.h_dir,
        .custom => |p| b.pathJoin(&.{ b.install_path, p }),
    };
    return b.pathResolve(&.{ base_dir, dest_rel_path });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `dir` | [`InstallDir`](#const-installdir) | – | – |
| `dest\_rel\_path` | `[]const u8` | – | – |
| Return | `[]const u8` | – | – |

</details>

---

### <a id="fn-lazydependency"></a>`lazyDependency`

<details class="declaration-card" open>
<summary>Function – When this function is called, it means that the current build does, in</summary>

When this function is called, it means that the current build does, in
fact, require this dependency. If the dependency is already fetched, it
proceeds in the same manner as `dependency`. However if the dependency was
not fetched, then when the build script is finished running, the build will
not proceed to the make phase. Instead, the parent process will
additionally fetch all the lazy dependencies that were actually required by
running the build script, rebuild the build script, and then run it again.
In other words, if this function returns `null` it means that the only
purpose of completing the configure phase is to find out all the other lazy
dependencies that are also required.
It is allowed to use this function for non-lazy dependencies, in which case
it will never return `null`. This allows toggling laziness via
build.zig.zon without changing build.zig logic.

\`\`\`zig
pub fn lazyDependency(b: *Build, name: []const u8, args: anytype) ?*Dependency {
    const build_runner = @import("root");
    const deps = build_runner.dependencies;
    const pkg_hash = findPkgHashOrFatal(b, name);

    inline for (@typeInfo(deps.packages).@"struct".decls) |decl| {
        if (mem.eql(u8, decl.name, pkg_hash)) {
            const pkg = @field(deps.packages, decl.name);
            const available = !@hasDecl(pkg, "available") or pkg.available;
            if (!available) {
                markNeededLazyDep(b, pkg_hash);
                return null;
            }
            return dependencyInner(b, name, pkg.build_root, if (@hasDecl(pkg, "build_zig")) pkg.build_zig else null, pkg_hash, pkg.deps, args);
        }
    }

    unreachable; // Bad @dependencies source
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | [`?*Dependency`](#fn-dependency) | – | – |

</details>

---

### <a id="fn-dependency"></a>`dependency`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn dependency(b: *Build, name: []const u8, args: anytype) *Dependency {
    const build_runner = @import("root");
    const deps = build_runner.dependencies;
    const pkg_hash = findPkgHashOrFatal(b, name);

    inline for (@typeInfo(deps.packages).@"struct".decls) |decl| {
        if (mem.eql(u8, decl.name, pkg_hash)) {
            const pkg = @field(deps.packages, decl.name);
            if (@hasDecl(pkg, "available")) {
                std.debug.panic("dependency '{s}{s}' is marked as lazy in build.zig.zon which means it must use the lazyDependency function instead", .{ b.dep_prefix, name });
            }
            return dependencyInner(b, name, pkg.build_root, if (@hasDecl(pkg, "build_zig")) pkg.build_zig else null, pkg_hash, pkg.deps, args);
        }
    }

    unreachable; // Bad @dependencies source
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name` | `[]const u8` | – | – |
| `args` | `` | – | – |
| Return | [`*Dependency`](#fn-dependency) | – | – |

</details>

---

### <a id="fn-lazyimport"></a>`lazyImport`

<details class="declaration-card" open>
<summary>Function – In a build</summary>

In a build.zig file, this function is to `@import` what `lazyDependency` is to `dependency`.
If the dependency is lazy and has not yet been fetched, it instructs the parent process to fetch
that dependency after the build script has finished running, then returns `null`.
If the dependency is lazy but has already been fetched, or if it is eager, it returns
the build.zig struct of that dependency, just like a regular `@import`.

\`\`\`zig
pub inline fn lazyImport(
    b: *Build,
    /// The build.zig struct of the package importing the dependency.
    /// When calling this function from the `build` function of a build.zig file's, you normally
    /// pass `@This()`.
    comptime asking_build_zig: type,
    comptime dep_name: []const u8,
) ?type {
    const build_runner = @import("root");
    const deps = build_runner.dependencies;
    const pkg_hash = findImportPkgHashOrFatal(b, asking_build_zig, dep_name);

    inline for (@typeInfo(deps.packages).@"struct".decls) |decl| {
        if (comptime mem.eql(u8, decl.name, pkg_hash)) {
            const pkg = @field(deps.packages, decl.name);
            const available = !@hasDecl(pkg, "available") or pkg.available;
            if (!available) {
                markNeededLazyDep(b, pkg_hash);
                return null;
            }
            return if (@hasDecl(pkg, "build_zig"))
                pkg.build_zig
            else
                @compileError("dependency '" ++ dep_name ++ "' does not have a build.zig");
        }
    }

    comptime unreachable; // Bad @dependencies source
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `asking\_build\_zig` | `type` | – | – |
| `dep\_name` | `[]const u8` | – | – |
| Return | `?type` | – | – |

</details>

---

### <a id="fn-dependencyfrombuildzig"></a>`dependencyFromBuildZig`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn dependencyFromBuildZig(
    b: *Build,
    /// The build.zig struct of the dependency, normally obtained by `@import` of the dependency.
    /// If called from the build.zig file itself, use `@This` to obtain a reference to the struct.
    comptime build_zig: type,
    args: anytype,
) *Dependency {
    const build_runner = @import("root");
    const deps = build_runner.dependencies;

    find_dep: {
        const pkg, const pkg_hash = inline for (@typeInfo(deps.packages).@"struct".decls) |decl| {
            const pkg_hash = decl.name;
            const pkg = @field(deps.packages, pkg_hash);
            if (@hasDecl(pkg, "build_zig") and pkg.build_zig == build_zig) break .{ pkg, pkg_hash };
        } else break :find_dep;
        const dep_name = for (b.available_deps) |dep| {
            if (mem.eql(u8, dep[1], pkg_hash)) break dep[1];
        } else break :find_dep;
        return dependencyInner(b, dep_name, pkg.build_root, pkg.build_zig, pkg_hash, pkg.deps, args);
    }

    const full_path = b.pathFromRoot("build.zig.zon");
    debug.panic("'{}' is not a build.zig struct of a dependency in '{s}'", .{ build_zig, full_path });
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `build\_zig` | `type` | – | – |
| `args` | `` | – | – |
| Return | [`*Dependency`](#fn-dependency) | – | – |

</details>

---

### <a id="fn-runbuild"></a>`runBuild`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn runBuild(b: *Build, build_zig: anytype) anyerror!void {
    switch (@typeInfo(@typeInfo(@TypeOf(build_zig.build)).@"fn".return_type.?)) {
        .void => build_zig.build(b),
        .error_union => try build_zig.build(b),
        else => @compileError("expected return type of build to be 'void' or '!void'"),
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `build\_zig` | `` | – | – |
| Return | `anyerror!void` | – | – |

</details>

---

### <a id="fn-dumpbadgetpathhelp"></a>`dumpBadGetPathHelp`

<details class="declaration-card" open>
<summary>Function – In this function the stderr mutex has already been locked</summary>

In this function the stderr mutex has already been locked.

\`\`\`zig
pub fn dumpBadGetPathHelp(
    s: *Step,
    w: *std.io.Writer,
    tty_config: std.io.tty.Config,
    src_builder: *Build,
    asking_step: ?*Step,
) anyerror!void {
    try w.print(
        \\getPath() was called on a GeneratedFile that wasn't built yet.
        \\  source package path: {s}
        \\  Is there a missing Step dependency on step '{s}'?
        \\
    , .{
        src_builder.build_root.path orelse ".",
        s.name,
    });

    tty_config.setColor(w, .red) catch {};
    try w.writeAll("    The step was created by this stack trace:\n");
    tty_config.setColor(w, .reset) catch {};

    s.dump(w, tty_config);
    if (asking_step) |as| {
        tty_config.setColor(w, .red) catch {};
        try w.print("    The step '{s}' that is missing a dependency on the above step was created by this stack trace:\n", .{as.name});
        tty_config.setColor(w, .reset) catch {};

        as.dump(w, tty_config);
    }
    tty_config.setColor(w, .red) catch {};
    try w.writeAll("    Hope that helps. Proceeding to panic.\n");
    tty_config.setColor(w, .reset) catch {};
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `s` | `*Step` | – | – |
| `w` | `*std.io.Writer` | – | – |
| `tty\_config` | `std.io.tty.Config` | – | – |
| `src\_builder` | `*Build` | – | – |
| `asking\_step` | `?*Step` | – | – |
| Return | `anyerror!void` | – | – |

</details>

---

### <a id="fn-maketemppath"></a>`makeTempPath`

<details class="declaration-card" open>
<summary>Function – This function is intended to be called in the `configure` phase only</summary>

This function is intended to be called in the `configure` phase only.
It returns an absolute directory path, which is potentially going to be a
source of API breakage in the future, so keep that in mind when using this
function.

\`\`\`zig
pub fn makeTempPath(b: *Build) []const u8 {
    const rand_int = std.crypto.random.int(u64);
    const tmp_dir_sub_path = "tmp" ++ fs.path.sep_str ++ std.fmt.hex(rand_int);
    const result_path = b.cache_root.join(b.allocator, &.{tmp_dir_sub_path}) catch @panic("OOM");
    b.cache_root.handle.makePath(tmp_dir_sub_path) catch |err| {
        std.debug.print("unable to make tmp path '{s}': {s}\n", .{
            result_path, @errorName(err),
        });
    };
    return result_path;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| Return | `[]const u8` | – | – |

</details>

---

### <a id="fn-resolvetargetquery"></a>`resolveTargetQuery`

<details class="declaration-card" open>
<summary>Function – Converts a target query into a fully resolved target that can be passed to</summary>

Converts a target query into a fully resolved target that can be passed to
various parts of the API.

\`\`\`zig
pub fn resolveTargetQuery(b: *Build, query: Target.Query) ResolvedTarget {
    if (query.isNative()) {
        // Hot path. This is faster than querying the native CPU and OS again.
        return b.graph.host;
    }
    return .{
        .query = query,
        .result = std.zig.system.resolveTargetQuery(query) catch
            @panic("unable to resolve target query"),
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `query` | `Target.Query` | – | – |
| Return | [`ResolvedTarget`](#type-resolvedtarget) | – | – |

</details>

---

### <a id="fn-wantsharedlibsymlinks"></a>`wantSharedLibSymLinks`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn wantSharedLibSymLinks(target: Target) bool {
    return target.os.tag != .windows;
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target` | `Target` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-systemintegrationoption"></a>`systemIntegrationOption`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub fn systemIntegrationOption(
    b: *Build,
    name: []const u8,
    config: SystemIntegrationOptionConfig,
) bool {
    const gop = b.graph.system_library_options.getOrPut(b.allocator, name) catch @panic("OOM");
    if (gop.found_existing) switch (gop.value_ptr.*) {
        .user_disabled => {
            gop.value_ptr.* = .declared_disabled;
            return false;
        },
        .user_enabled => {
            gop.value_ptr.* = .declared_enabled;
            return true;
        },
        .declared_disabled => return false,
        .declared_enabled => return true,
    } else {
        gop.key_ptr.* = b.dupe(name);
        if (config.default orelse b.graph.system_package_mode) {
            gop.value_ptr.* = .declared_enabled;
            return true;
        } else {
            gop.value_ptr.* = .declared_disabled;
            return false;
        }
    }
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `b` | `*Build` | – | – |
| `name` | `[]const u8` | – | – |
| `config` | [`SystemIntegrationOptionConfig`](#type-systemintegrationoptionconfig) | – | – |
| Return | `bool` | – | – |

</details>

---

## Error Sets (2)

### <a id="error-runerror"></a>`RunError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

\`\`\`zig
pub const RunError = error{
    ReadFailure,
    ExitCodeFailure,
    ProcessTerminated,
    ExecNotSupported,
} || std.process.Child.SpawnError
\`\`\`

**Errors:**

- `error.ReadFailure`
- `error.ExitCodeFailure`
- `error.ProcessTerminated`
- `error.ExecNotSupported`

</details>

---

### <a id="error-pkgconfigerror"></a>`PkgConfigError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

\`\`\`zig
pub const PkgConfigError = error{
    PkgConfigCrashed,
    PkgConfigFailed,
    PkgConfigNotInstalled,
    PkgConfigInvalidOutput,
}
\`\`\`

**Errors:**

- `error.PkgConfigCrashed`
- `error.PkgConfigFailed`
- `error.PkgConfigNotInstalled`
- `error.PkgConfigInvalidOutput`

</details>

---
