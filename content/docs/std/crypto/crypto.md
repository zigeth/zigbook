---
title: "std.crypto"
description: "Comprehensive reference for Zig's std.crypto module covering cryptographic primitives and hashing utilities."
navigation:
  title: "Crypto"
  icon: i-lucide-shield-check
  badge: "Crypto"
badge: "Crypto"
category: "crypto"
tags:
  - "zig"
  - "standard-library"
  - "crypto"
source: "std/crypto.md"
githubPath: "std/crypto.md"
lastUpdated: "2025-10-11T02:43:50.342Z"
seo:
  title: "std.crypto · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.crypto module covering cryptographic primitives and hashing utilities."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from `std/crypto.md` in the repository. Edit the source file to update this reference.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.crypto` |
| Declarations | 23 |
| Breakdown | 1 function · 14 types · 2 constants · 6 modules |
| Generated (unix epoch) | 1760148103 |

## Overview

Cryptography.

---

## Table of Contents

- [Functions](#functions)
  - [`secureZero`](#fn-securezero)

- [Types](#types)
  - [`aead`](#type-aead)
  - [`auth`](#type-auth)
  - [`core`](#type-core)
  - [`dh`](#type-dh)
  - [`kem`](#type-kem)
  - [`ecc`](#type-ecc)
  - [`hash`](#type-hash)
  - [`kdf`](#type-kdf)
  - [`onetimeauth`](#type-onetimeauth)
  - [`pwhash`](#type-pwhash)
  - [`sign`](#type-sign)
  - [`stream`](#type-stream)
  - [`nacl`](#type-nacl)
  - [`SideChannelsMitigations`](#type-sidechannelsmitigations)

- [Modules](#modules)
  - [`timing\_safe`](#module-timing-safe)
  - [`ff`](#module-ff)
  - [`codecs`](#module-codecs)
  - [`errors`](#module-errors)
  - [`tls`](#module-tls)
  - [`Certificate`](#module-certificate)

- [Constants](#constants)
  - [`random`](#const-random)
  - [`default\_side\_channels\_mitigations`](#const-default-side-channels-mitigations)

---

## Types (14)

### <a id="type-aead"></a>`aead`

<details class="declaration-card" open>
<summary>Type Alias – Authenticated Encryption with Associated Data</summary>

Authenticated Encryption with Associated Data

\`\`\`zig
pub const aead = struct {
    pub const aegis = struct {
        const variants = @import("crypto/aegis.zig");

        pub const Aegis128X4 = variants.Aegis128X4;
        pub const Aegis128X2 = variants.Aegis128X2;
        pub const Aegis128L = variants.Aegis128L;

        pub const Aegis256X4 = variants.Aegis256X4;
        pub const Aegis256X2 = variants.Aegis256X2;
        pub const Aegis256 = variants.Aegis256;

        pub const Aegis128X4_256 = variants.Aegis128X4_256;
        pub const Aegis128X2_256 = variants.Aegis128X2_256;
        pub const Aegis128L_256 = variants.Aegis128L_256;

        pub const Aegis256X4_256 = variants.Aegis256X4_256;
        pub const Aegis256X2_256 = variants.Aegis256X2_256;
        pub const Aegis256_256 = variants.Aegis256_256;
    };

    pub const aes_gcm = struct {
        pub const Aes128Gcm = @import("crypto/aes_gcm.zig").Aes128Gcm;
        pub const Aes256Gcm = @import("crypto/aes_gcm.zig").Aes256Gcm;
    };

    pub const aes_ocb = struct {
        pub const Aes128Ocb = @import("crypto/aes_ocb.zig").Aes128Ocb;
        pub const Aes256Ocb = @import("crypto/aes_ocb.zig").Aes256Ocb;
    };

    pub const chacha_poly = struct {
        pub const ChaCha20Poly1305 = @import("crypto/chacha20.zig").ChaCha20Poly1305;
        pub const ChaCha12Poly1305 = @import("crypto/chacha20.zig").ChaCha12Poly1305;
        pub const ChaCha8Poly1305 = @import("crypto/chacha20.zig").ChaCha8Poly1305;
        pub const XChaCha20Poly1305 = @import("crypto/chacha20.zig").XChaCha20Poly1305;
        pub const XChaCha12Poly1305 = @import("crypto/chacha20.zig").XChaCha12Poly1305;
        pub const XChaCha8Poly1305 = @import("crypto/chacha20.zig").XChaCha8Poly1305;
    };

    pub const isap = @import("crypto/isap.zig");

    pub const salsa_poly = struct {
        pub const XSalsa20Poly1305 = @import("crypto/salsa20.zig").XSalsa20Poly1305;
    };
}
\`\`\`

</details>

---

### <a id="type-auth"></a>`auth`

<details class="declaration-card" open>
<summary>Type Alias – Authentication (MAC) functions</summary>

Authentication (MAC) functions.

\`\`\`zig
pub const auth = struct {
    pub const hmac = @import("crypto/hmac.zig");
    pub const siphash = @import("crypto/siphash.zig");
    pub const aegis = struct {
        const variants = @import("crypto/aegis.zig");
        pub const Aegis128X4Mac = variants.Aegis128X4Mac;
        pub const Aegis128X2Mac = variants.Aegis128X2Mac;
        pub const Aegis128LMac = variants.Aegis128LMac;

        pub const Aegis256X4Mac = variants.Aegis256X4Mac;
        pub const Aegis256X2Mac = variants.Aegis256X2Mac;
        pub const Aegis256Mac = variants.Aegis256Mac;

        pub const Aegis128X4Mac_128 = variants.Aegis128X4Mac_128;
        pub const Aegis128X2Mac_128 = variants.Aegis128X2Mac_128;
        pub const Aegis128LMac_128 = variants.Aegis128LMac_128;

        pub const Aegis256X4Mac_128 = variants.Aegis256X4Mac_128;
        pub const Aegis256X2Mac_128 = variants.Aegis256X2Mac_128;
        pub const Aegis256Mac_128 = variants.Aegis256Mac_128;
    };
    pub const cmac = @import("crypto/cmac.zig");
}
\`\`\`

</details>

---

### <a id="type-core"></a>`core`

<details class="declaration-card" open>
<summary>Type Alias – Core functions, that should rarely be used directly by applications</summary>

Core functions, that should rarely be used directly by applications.

\`\`\`zig
pub const core = struct {
    pub const aes = @import("crypto/aes.zig");
    pub const keccak = @import("crypto/keccak_p.zig");

    pub const Ascon = @import("crypto/ascon.zig").State;

    /// Modes are generic compositions to construct encryption/decryption functions from block ciphers and permutations.
    ///
    /// These modes are designed to be building blocks for higher-level constructions, and should generally not be used directly by applications, as they may not provide the expected properties and security guarantees.
    ///
    /// Most applications may want to use AEADs instead.
    pub const modes = @import("crypto/modes.zig");
}
\`\`\`

</details>

---

### <a id="type-dh"></a>`dh`

<details class="declaration-card" open>
<summary>Type Alias – Diffie-Hellman key exchange functions</summary>

Diffie-Hellman key exchange functions.

\`\`\`zig
pub const dh = struct {
    pub const X25519 = @import("crypto/25519/x25519.zig").X25519;
}
\`\`\`

</details>

---

### <a id="type-kem"></a>`kem`

<details class="declaration-card" open>
<summary>Type Alias – Key Encapsulation Mechanisms</summary>

Key Encapsulation Mechanisms.

\`\`\`zig
pub const kem = struct {
    pub const kyber_d00 = @import("crypto/ml_kem.zig").d00;
    pub const ml_kem = @import("crypto/ml_kem.zig").nist;
}
\`\`\`

</details>

---

### <a id="type-ecc"></a>`ecc`

<details class="declaration-card" open>
<summary>Type Alias – Elliptic-curve arithmetic</summary>

Elliptic-curve arithmetic.

\`\`\`zig
pub const ecc = struct {
    pub const Curve25519 = @import("crypto/25519/curve25519.zig").Curve25519;
    pub const Edwards25519 = @import("crypto/25519/edwards25519.zig").Edwards25519;
    pub const P256 = @import("crypto/pcurves/p256.zig").P256;
    pub const P384 = @import("crypto/pcurves/p384.zig").P384;
    pub const Ristretto255 = @import("crypto/25519/ristretto255.zig").Ristretto255;
    pub const Secp256k1 = @import("crypto/pcurves/secp256k1.zig").Secp256k1;
}
\`\`\`

</details>

---

### <a id="type-hash"></a>`hash`

<details class="declaration-card" open>
<summary>Type Alias – Hash functions</summary>

Hash functions.

\`\`\`zig
pub const hash = struct {
    pub const blake2 = @import("crypto/blake2.zig");
    pub const Blake3 = @import("crypto/blake3.zig").Blake3;
    pub const Md5 = @import("crypto/md5.zig").Md5;
    pub const Sha1 = @import("crypto/Sha1.zig");
    pub const sha2 = @import("crypto/sha2.zig");
    pub const sha3 = @import("crypto/sha3.zig");
    pub const composition = @import("crypto/hash_composition.zig");
}
\`\`\`

</details>

---

### <a id="type-kdf"></a>`kdf`

<details class="declaration-card" open>
<summary>Type Alias – Key derivation functions</summary>

Key derivation functions.

\`\`\`zig
pub const kdf = struct {
    pub const hkdf = @import("crypto/hkdf.zig");
}
\`\`\`

</details>

---

### <a id="type-onetimeauth"></a>`onetimeauth`

<details class="declaration-card" open>
<summary>Type Alias – MAC functions requiring single-use secret keys</summary>

MAC functions requiring single-use secret keys.

\`\`\`zig
pub const onetimeauth = struct {
    pub const Ghash = @import("crypto/ghash_polyval.zig").Ghash;
    pub const Polyval = @import("crypto/ghash_polyval.zig").Polyval;
    pub const Poly1305 = @import("crypto/poly1305.zig").Poly1305;
}
\`\`\`

</details>

---

### <a id="type-pwhash"></a>`pwhash`

<details class="declaration-card" open>
<summary>Type Alias – A password hashing function derives a uniform key from low-entropy input material such as passwords</summary>

A password hashing function derives a uniform key from low-entropy input material such as passwords.
It is intentionally slow or expensive.

With the standard definition of a key derivation function, if a key space is small, an exhaustive search may be practical.
Password hashing functions make exhaustive searches way slower or way more expensive, even when implemented on GPUs and ASICs, by using different, optionally combined strategies:

- Requiring a lot of computation cycles to complete
- Requiring a lot of memory to complete
- Requiring multiple CPU cores to complete
- Requiring cache-local data to complete in reasonable time
- Requiring large static tables
- Avoiding precomputations and time/memory tradeoffs
- Requiring multi-party computations
- Combining the input material with random per-entry data (salts), application-specific contexts and keys

Password hashing functions must be used whenever sensitive data has to be directly derived from a password.

\`\`\`zig
pub const pwhash = struct {
    pub const Encoding = enum {
        phc,
        crypt,
    };

    pub const Error = HasherError || error{AllocatorRequired};
    pub const HasherError = KdfError || phc_format.Error;
    pub const KdfError = errors.Error || std.mem.Allocator.Error || std.Thread.SpawnError;

    pub const argon2 = @import("crypto/argon2.zig");
    pub const bcrypt = @import("crypto/bcrypt.zig");
    pub const scrypt = @import("crypto/scrypt.zig");
    pub const pbkdf2 = @import("crypto/pbkdf2.zig").pbkdf2;

    pub const phc_format = @import("crypto/phc_encoding.zig");
}
\`\`\`

</details>

---

### <a id="type-sign"></a>`sign`

<details class="declaration-card" open>
<summary>Type Alias – Digital signature functions</summary>

Digital signature functions.

\`\`\`zig
pub const sign = struct {
    pub const Ed25519 = @import("crypto/25519/ed25519.zig").Ed25519;
    pub const ecdsa = @import("crypto/ecdsa.zig");
}
\`\`\`

</details>

---

### <a id="type-stream"></a>`stream`

<details class="declaration-card" open>
<summary>Type Alias – Stream ciphers</summary>

Stream ciphers. These do not provide any kind of authentication.
Most applications should be using AEAD constructions instead of stream ciphers directly.

\`\`\`zig
pub const stream = struct {
    pub const chacha = struct {
        pub const ChaCha20IETF = @import("crypto/chacha20.zig").ChaCha20IETF;
        pub const ChaCha12IETF = @import("crypto/chacha20.zig").ChaCha12IETF;
        pub const ChaCha8IETF = @import("crypto/chacha20.zig").ChaCha8IETF;
        pub const ChaCha20With64BitNonce = @import("crypto/chacha20.zig").ChaCha20With64BitNonce;
        pub const ChaCha12With64BitNonce = @import("crypto/chacha20.zig").ChaCha12With64BitNonce;
        pub const ChaCha8With64BitNonce = @import("crypto/chacha20.zig").ChaCha8With64BitNonce;
        pub const XChaCha20IETF = @import("crypto/chacha20.zig").XChaCha20IETF;
        pub const XChaCha12IETF = @import("crypto/chacha20.zig").XChaCha12IETF;
        pub const XChaCha8IETF = @import("crypto/chacha20.zig").XChaCha8IETF;
    };

    pub const salsa = struct {
        pub const Salsa = @import("crypto/salsa20.zig").Salsa;
        pub const XSalsa = @import("crypto/salsa20.zig").XSalsa;
        pub const Salsa20 = @import("crypto/salsa20.zig").Salsa20;
        pub const XSalsa20 = @import("crypto/salsa20.zig").XSalsa20;
    };
}
\`\`\`

</details>

---

### <a id="type-nacl"></a>`nacl`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

\`\`\`zig
pub const nacl = struct {
    const salsa20 = @import("crypto/salsa20.zig");

    pub const Box = salsa20.Box;
    pub const SecretBox = salsa20.SecretBox;
    pub const SealedBox = salsa20.SealedBox;
}
\`\`\`

</details>

---

### <a id="type-sidechannelsmitigations"></a>`SideChannelsMitigations`

<details class="declaration-card" open>
<summary>Container – Side-channels mitigations</summary>

Side-channels mitigations.

\`\`\`zig
pub const SideChannelsMitigations = enum {
    /// No additional side-channel mitigations are applied.
    /// This is the fastest mode.
    none,
    /// The `basic` mode protects against most practical attacks, provided that the
    /// application or implements proper defenses against brute-force attacks.
    /// It offers a good balance between performance and security.
    basic,
    /// The `medium` mode offers increased resilience against side-channel attacks,
    /// making most attacks unpractical even on shared/low latency environements.
    /// This is the default mode.
    medium,
    /// The `full` mode offers the highest level of protection against side-channel attacks.
    /// Note that this doesn't cover all possible attacks (especially power analysis or
    /// thread-local attacks such as cachebleed), and that the performance impact is significant.
    full,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `none` | No additional side-channel mitigations are applied. This is the fastest mode. |
| `basic` | The \`basic\` mode protects against most practical attacks, provided that the application or implements proper defenses against brute-force attacks. It offers a good balance between performance and security. |
| `medium` | The \`medium\` mode offers increased resilience against side-channel attacks, making most attacks unpractical even on shared/low latency environements. This is the default mode. |
| `full` | The \`full\` mode offers the highest level of protection against side-channel attacks. Note that this doesn't cover all possible attacks (especially power analysis or thread-local attacks such as cachebleed), and that the performance impact is significant. |

</details>

---

## Modules (6)

### <a id="module-timing-safe"></a>`timing_safe`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const timing_safe = @import("crypto/timing_safe.zig")
\`\`\`

> **Module:** `crypto/timing_safe.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/crypto/timing_safe.zig)

</details>

---

### <a id="module-ff"></a>`ff`

<details class="declaration-card" open>
<summary>Module – Finite-field arithmetic</summary>

Finite-field arithmetic.

\`\`\`zig
pub const ff = @import("crypto/ff.zig")
\`\`\`

> **Module:** `crypto/ff.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/crypto/ff.zig)

</details>

---

### <a id="module-codecs"></a>`codecs`

<details class="declaration-card" open>
<summary>Module – Encoding and decoding</summary>

Encoding and decoding

\`\`\`zig
pub const codecs = @import("crypto/codecs.zig")
\`\`\`

> **Module:** `crypto/codecs.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/crypto/codecs.zig)

</details>

---

### <a id="module-errors"></a>`errors`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const errors = @import("crypto/errors.zig")
\`\`\`

> **Module:** `crypto/errors.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/crypto/errors.zig)

</details>

---

### <a id="module-tls"></a>`tls`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const tls = @import("crypto/tls.zig")
\`\`\`

> **Module:** `crypto/tls.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/crypto/tls.zig)

</details>

---

### <a id="module-certificate"></a>`Certificate`

<details class="declaration-card" open>
<summary>Module – Expand to view import information and documentation.</summary>

\`\`\`zig
pub const Certificate = @import("crypto/Certificate.zig")
\`\`\`

> **Module:** `crypto/Certificate.zig` → See [source](https://raw.githubusercontent.com/ziglang/zig/refs/heads/master/lib/std/crypto/Certificate.zig)

</details>

---

## Constants (2)

### <a id="const-random"></a>`random`

<details class="declaration-card" open>
<summary>Constant – This is a thread-local, cryptographically secure pseudo random number generator</summary>

This is a thread-local, cryptographically secure pseudo random number generator.

\`\`\`zig
pub const random = @import("crypto/tlcsprng.zig").interface
\`\`\`

</details>

---

### <a id="const-default-side-channels-mitigations"></a>`default_side_channels_mitigations`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const default_side_channels_mitigations = .medium
\`\`\`

</details>

---

## Functions (1)

### <a id="fn-securezero"></a>`secureZero`

<details class="declaration-card" open>
<summary>Function – Sets a slice to zeroes</summary>

Sets a slice to zeroes.
Prevents the store from being optimized out.

\`\`\`zig
pub fn secureZero(comptime T: type, s: []volatile T) void {
    @memset(s, 0);
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `T` | `type` | – | – |
| `s` | `[]volatile T` | – | – |
| Return | `void` | – | – |

</details>

---
