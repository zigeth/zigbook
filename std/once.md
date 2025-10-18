# std.once

[← Back to index](index.md)

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

\`\`\`zig
pub fn once(comptime f: fn () void) Once(f) {
    return Once(f){};
}
\`\`\`

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

\`\`\`zig
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
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `f` | `fn () void` | – | – |
| Return | `type` | – | – |

</details>

---
