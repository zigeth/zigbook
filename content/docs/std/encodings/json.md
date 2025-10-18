---
title: "std.json"
description: "Comprehensive reference for Zig's std.json module covering formatting, serialization, and text-processing helpers."
navigation:
  title: "Json"
  icon: i-lucide-binary
  badge: "Encoding"
badge: "Encoding"
category: "encodings"
tags:
  - "zig"
  - "standard-library"
  - "encodings"
source: "std/json.md"
githubPath: "std/json.md"
lastUpdated: "2025-10-18T12:44:21.943Z"
seo:
  title: "std.json · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.json module covering formatting, serialization, and text-processing helpers."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/json.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.json` |
| Declarations | 30 |
| Breakdown | 2 functions · 26 constants · 2 modules |
| Generated (unix epoch) | 1760148106 |

## Overview

JSON parsing and stringification conforming to RFC 8259. https://datatracker.ietf.org/doc/html/rfc8259

The low-level `Scanner` API produces `Token`s from an input slice or successive slices of inputs,
The `Reader` API connects a `std.io.GenericReader` to a `Scanner`.

The high-level `parseFromSlice` and `parseFromTokenSource` deserialize a JSON document into a Zig type.
Parse into a dynamically-typed `Value` to load any JSON value for runtime inspection.

The low-level `writeStream` emits syntax-conformant JSON tokens to a `std.io.GenericWriter`.
The high-level `stringify` serializes a Zig or `Value` type into JSON.

---

## Table of Contents

- [Functions](#functions)
  - [`fmt`](#fn-fmt)
  - [`Formatter`](#fn-formatter)

- [Modules](#modules)
  - [`Scanner`](#module-scanner)
  - [`Stringify`](#module-stringify)

- [Constants](#constants)
  - [`ObjectMap`](#const-objectmap)
  - [`Array`](#const-array)
  - [`Value`](#const-value)
  - [`ArrayHashMap`](#const-arrayhashmap)
  - [`validate`](#const-validate)
  - [`Error`](#const-error)
  - [`default\_buffer\_size`](#const-default-buffer-size)
  - [`Token`](#const-token)
  - [`TokenType`](#const-tokentype)
  - [`Diagnostics`](#const-diagnostics)
  - [`AllocWhen`](#const-allocwhen)
  - [`default\_max\_value\_len`](#const-default-max-value-len)
  - [`Reader`](#const-reader)
  - [`isNumberFormattedLikeAnInteger`](#const-isnumberformattedlikeaninteger)
  - [`ParseOptions`](#const-parseoptions)
  - [`Parsed`](#const-parsed)
  - [`parseFromSlice`](#const-parsefromslice)
  - [`parseFromSliceLeaky`](#const-parsefromsliceleaky)
  - [`parseFromTokenSource`](#const-parsefromtokensource)
  - [`parseFromTokenSourceLeaky`](#const-parsefromtokensourceleaky)
  - [`innerParse`](#const-innerparse)
  - [`parseFromValue`](#const-parsefromvalue)
  - [`parseFromValueLeaky`](#const-parsefromvalueleaky)
  - [`innerParseFromValue`](#const-innerparsefromvalue)
  - [`ParseError`](#const-parseerror)
  - [`ParseFromValueError`](#const-parsefromvalueerror)

---

## Modules (2)

### <a id="module-scanner"></a>`Scanner`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Scanner = @import("json/Scanner.zig")
```

> **Module:** `json/Scanner.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/json/Scanner.zig)

</details>

---

### <a id="module-stringify"></a>`Stringify`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

```zig
pub const Stringify = @import("json/Stringify.zig")
```

> **Module:** `json/Stringify.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/json/Stringify.zig)

</details>

---

## Constants (26)

### <a id="const-objectmap"></a>`ObjectMap`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ObjectMap = @import("json/dynamic.zig").ObjectMap
```

</details>

---

### <a id="const-array"></a>`Array`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Array = @import("json/dynamic.zig").Array
```

</details>

---

### <a id="const-value"></a>`Value`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Value = @import("json/dynamic.zig").Value
```

</details>

---

### <a id="const-arrayhashmap"></a>`ArrayHashMap`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ArrayHashMap = @import("json/hashmap.zig").ArrayHashMap
```

</details>

---

### <a id="const-validate"></a>`validate`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const validate = Scanner.validate
```

</details>

---

### <a id="const-error"></a>`Error`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Error = Scanner.Error
```

</details>

---

### <a id="const-default-buffer-size"></a>`default_buffer_size`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const default_buffer_size = Scanner.default_buffer_size
```

</details>

---

### <a id="const-token"></a>`Token`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Token = Scanner.Token
```

</details>

---

### <a id="const-tokentype"></a>`TokenType`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const TokenType = Scanner.TokenType
```

</details>

---

### <a id="const-diagnostics"></a>`Diagnostics`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Diagnostics = Scanner.Diagnostics
```

</details>

---

### <a id="const-allocwhen"></a>`AllocWhen`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AllocWhen = Scanner.AllocWhen
```

</details>

---

### <a id="const-default-max-value-len"></a>`default_max_value_len`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const default_max_value_len = Scanner.default_max_value_len
```

</details>

---

### <a id="const-reader"></a>`Reader`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Reader = Scanner.Reader
```

</details>

---

### <a id="const-isnumberformattedlikeaninteger"></a>`isNumberFormattedLikeAnInteger`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const isNumberFormattedLikeAnInteger = Scanner.isNumberFormattedLikeAnInteger
```

</details>

---

### <a id="const-parseoptions"></a>`ParseOptions`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ParseOptions = @import("json/static.zig").ParseOptions
```

</details>

---

### <a id="const-parsed"></a>`Parsed`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Parsed = @import("json/static.zig").Parsed
```

</details>

---

### <a id="const-parsefromslice"></a>`parseFromSlice`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseFromSlice = @import("json/static.zig").parseFromSlice
```

</details>

---

### <a id="const-parsefromsliceleaky"></a>`parseFromSliceLeaky`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseFromSliceLeaky = @import("json/static.zig").parseFromSliceLeaky
```

</details>

---

### <a id="const-parsefromtokensource"></a>`parseFromTokenSource`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseFromTokenSource = @import("json/static.zig").parseFromTokenSource
```

</details>

---

### <a id="const-parsefromtokensourceleaky"></a>`parseFromTokenSourceLeaky`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseFromTokenSourceLeaky = @import("json/static.zig").parseFromTokenSourceLeaky
```

</details>

---

### <a id="const-innerparse"></a>`innerParse`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const innerParse = @import("json/static.zig").innerParse
```

</details>

---

### <a id="const-parsefromvalue"></a>`parseFromValue`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseFromValue = @import("json/static.zig").parseFromValue
```

</details>

---

### <a id="const-parsefromvalueleaky"></a>`parseFromValueLeaky`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const parseFromValueLeaky = @import("json/static.zig").parseFromValueLeaky
```

</details>

---

### <a id="const-innerparsefromvalue"></a>`innerParseFromValue`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const innerParseFromValue = @import("json/static.zig").innerParseFromValue
```

</details>

---

### <a id="const-parseerror"></a>`ParseError`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ParseError = @import("json/static.zig").ParseError
```

</details>

---

### <a id="const-parsefromvalueerror"></a>`ParseFromValueError`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ParseFromValueError = @import("json/static.zig").ParseFromValueError
```

</details>

---

## Functions (2)

### <a id="fn-fmt"></a>`fmt`

<details class="declaration-card" open>
<summary>Function – Returns a formatter that formats the given value using stringify</summary>

Returns a formatter that formats the given value using stringify.

```zig
pub fn fmt(value: anytype, options: Stringify.Options) Formatter(@TypeOf(value)) {
    return Formatter(@TypeOf(value)){ .value = value, .options = options };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `value` | `` | – | – |
| `options` | `Stringify.Options` | – | – |
| Return | `Formatter(@TypeOf(value))` | – | – |

</details>

---

### <a id="fn-formatter"></a>`Formatter`

<details class="declaration-card" open>
<summary>Function – Formats the given value using stringify</summary>

Formats the given value using stringify.

```zig
pub fn Formatter(comptime T: type) type {
    return struct {
        value: T,
        options: Stringify.Options,

        pub fn format(self: @This(), writer: *std.Io.Writer) std.Io.Writer.Error!void {
            try Stringify.value(self.value, self.options, writer);
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


