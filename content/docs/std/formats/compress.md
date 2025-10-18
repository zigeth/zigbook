---
title: "std.compress"
description: "Comprehensive reference for Zig's std.compress module covering binary parsing, archive handling, and structured formats."
navigation:
  title: "Compress"
  icon: i-lucide-package
  badge: "Formats"
badge: "Formats"
category: "formats"
tags:
  - "zig"
  - "standard-library"
  - "formats"
source: "std/compress.md"
githubPath: "std/compress.md"
lastUpdated: "2025-10-11T02:43:50.342Z"
seo:
  title: "std.compress · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.compress module covering binary parsing, archive handling, and structured formats."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/compress.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.compress` |
| Declarations | 5 |
| Breakdown | 5 modules |
| Generated (unix epoch) | 1760148103 |

## Overview

Compression algorithms.

---

## Table of Contents

- [Modules](#modules)
  - [`flate`](#module-flate)
  - [`lzma`](#module-lzma)
  - [`lzma2`](#module-lzma2)
  - [`xz`](#module-xz)
  - [`zstd`](#module-zstd)

---

## Modules (5)

### <a id="module-flate"></a>`flate`

<details class="declaration-card" open>
<summary>Module – gzip and zlib are here</summary>

gzip and zlib are here.

```zig
pub const flate = @import("compress/flate.zig")
```

> **Module:** `compress/flate.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/compress/flate.zig)

</details>

---

### <a id="module-lzma"></a>`lzma`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const lzma = @import("compress/lzma.zig")
```

> **Module:** `compress/lzma.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/compress/lzma.zig)

</details>

---

### <a id="module-lzma2"></a>`lzma2`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const lzma2 = @import("compress/lzma2.zig")
```

> **Module:** `compress/lzma2.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/compress/lzma2.zig)

</details>

---

### <a id="module-xz"></a>`xz`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const xz = @import("compress/xz.zig")
```

> **Module:** `compress/xz.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/compress/xz.zig)

</details>

---

### <a id="module-zstd"></a>`zstd`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const zstd = @import("compress/zstd.zig")
```

> **Module:** `compress/zstd.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/compress/zstd.zig)

</details>

---


