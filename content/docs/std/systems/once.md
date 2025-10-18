---
title: "std.once"
description: "Comprehensive reference for Zig's std.once module covering low-level systems primitives and metaprogramming utilities."
navigation:
  title: "Once"
  icon: i-lucide-cpu
  badge: "Systems"
badge: "Systems"
category: "systems"
tags:
  - "zig"
  - "standard-library"
  - "systems"
source: "std/once.md"
githubPath: "std/once.md"
lastUpdated: "2025-10-11T02:43:50.347Z"
seo:
  title: "std.once · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.once module covering low-level systems primitives and metaprogramming utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/once.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.once` |
| Declarations | 2 |
| Breakdown | 2 functions |
| Generated (unix epoch) | 1760148108 |

---

## Table of Contents

- [Functions](#functions)
  - [`once`](#fn-once)
  - [`Once`](#fn-once-1)

---

## Functions (2)

### <a id="fn-once"></a>`once`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn once(comptime f: fn () void) Once(f) {
    return Once(f){};
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `f` | `fn () void` | – | – |
| Return | `Once(f)` | – | – |

</details>

---

### <a id="fn-once-1"></a>`Once`

<details class="declaration-card" open>
<summary>Function – An object that executes the function `f` just once</summary>

An object that executes the function `f` just once.
It is undefined behavior if `f` re-enters the same Once instance.

```zig
pub fn Once(comptime f: fn () void) type {
    return struct {
        done: bool = false,
        mutex: std.Thread.Mutex = std.Thread.Mutex{},

        /// Call the function `f`.
        /// If `call` is invoked multiple times `f` will be executed only the
        /// first time.
        /// The invocations are thread-safe.
        pub fn call(self: *@This()) void {
            if (@atomicLoad(bool, &self.done, .acquire))
                return;

            return self.callSlow();
        }

        fn callSlow(self: *@This()) void {
            @branchHint(.cold);

            self.mutex.lock();
            defer self.mutex.unlock();

            // The first thread to acquire the mutex gets to run the initializer
            if (!self.done) {
                f();
                @atomicStore(bool, &self.done, true, .release);
            }
        }
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `f` | `fn () void` | – | – |
| Return | `type` | – | – |

</details>

---


