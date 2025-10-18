---
title: "std.posix"
description: "Comprehensive reference for Zig's std.posix module covering operating system, filesystem, and runtime services."
navigation:
  title: "Posix"
  icon: i-lucide-server-cog
  badge: "Platform"
badge: "Platform"
category: "platform"
tags:
  - "zig"
  - "standard-library"
  - "platform"
source: "std/posix.md"
githubPath: "std/posix.md"
lastUpdated: "2025-10-18T12:44:21.945Z"
seo:
  title: "std.posix · Zig 0.15.1 standard library reference"
  description: "Comprehensive reference for Zig's std.posix module covering operating system, filesystem, and runtime services."
---
::callout{type="info" icon="i-lucide-book-open-check"}
This page syncs automatically from Zig's source: `std/posix.md`.
::

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.posix` |
| Declarations | 426 |
| Breakdown | 194 functions · 9 types · 131 constants · 92 error sets |
| Generated (unix epoch) | 1760148109 |

## Overview

POSIX API layer.

This is more cross platform than using OS-specific APIs, however, it is
lower-level and less portable than other namespaces such as `std.fs` and
`std.process`.

These APIs are generally lowered to libc function calls if and only if libc
is linked. Most operating systems other than Windows, Linux, and WASI
require always linking libc because they use it as the stable syscall ABI.

Operating systems that are not POSIX-compliant are sometimes supported by
this API layer; sometimes not. Generally, an implementation will be
provided only if such implementation is straightforward on that operating
system. Otherwise, programmers are expected to use OS-specific logic to
deal with the exception.

---

## Table of Contents

- [Functions](#functions)
  - [`errno`](#fn-errno)
  - [`close`](#fn-close)
  - [`fchmod`](#fn-fchmod)
  - [`fchmodat`](#fn-fchmodat)
  - [`fchown`](#fn-fchown)
  - [`reboot`](#fn-reboot)
  - [`getrandom`](#fn-getrandom)
  - [`abort`](#fn-abort)
  - [`raise`](#fn-raise)
  - [`kill`](#fn-kill)
  - [`exit`](#fn-exit)
  - [`read`](#fn-read)
  - [`readv`](#fn-readv)
  - [`pread`](#fn-pread)
  - [`ftruncate`](#fn-ftruncate)
  - [`preadv`](#fn-preadv)
  - [`write`](#fn-write)
  - [`writev`](#fn-writev)
  - [`pwrite`](#fn-pwrite)
  - [`pwritev`](#fn-pwritev)
  - [`open`](#fn-open)
  - [`openZ`](#fn-openz)
  - [`openat`](#fn-openat)
  - [`openatWasi`](#fn-openatwasi)
  - [`openatZ`](#fn-openatz)
  - [`dup`](#fn-dup)
  - [`dup2`](#fn-dup2)
  - [`execveZ`](#fn-execvez)
  - [`execvpeZ\_expandArg0`](#fn-execvpez-expandarg0)
  - [`execvpeZ`](#fn-execvpez)
  - [`getenv`](#fn-getenv)
  - [`getenvZ`](#fn-getenvz)
  - [`getcwd`](#fn-getcwd)
  - [`symlink`](#fn-symlink)
  - [`symlinkZ`](#fn-symlinkz)
  - [`symlinkat`](#fn-symlinkat)
  - [`symlinkatWasi`](#fn-symlinkatwasi)
  - [`symlinkatZ`](#fn-symlinkatz)
  - [`linkZ`](#fn-linkz)
  - [`link`](#fn-link)
  - [`linkatZ`](#fn-linkatz)
  - [`linkat`](#fn-linkat)
  - [`unlink`](#fn-unlink)
  - [`unlinkZ`](#fn-unlinkz)
  - [`unlinkW`](#fn-unlinkw)
  - [`unlinkat`](#fn-unlinkat)
  - [`unlinkatWasi`](#fn-unlinkatwasi)
  - [`unlinkatZ`](#fn-unlinkatz)
  - [`unlinkatW`](#fn-unlinkatw)
  - [`rename`](#fn-rename)
  - [`renameZ`](#fn-renamez)
  - [`renameW`](#fn-renamew)
  - [`renameat`](#fn-renameat)
  - [`renameatZ`](#fn-renameatz)
  - [`renameatW`](#fn-renameatw)
  - [`mkdirat`](#fn-mkdirat)
  - [`mkdiratWasi`](#fn-mkdiratwasi)
  - [`mkdiratZ`](#fn-mkdiratz)
  - [`mkdiratW`](#fn-mkdiratw)
  - [`mkdir`](#fn-mkdir)
  - [`mkdirZ`](#fn-mkdirz)
  - [`mkdirW`](#fn-mkdirw)
  - [`rmdir`](#fn-rmdir)
  - [`rmdirZ`](#fn-rmdirz)
  - [`rmdirW`](#fn-rmdirw)
  - [`chdir`](#fn-chdir)
  - [`chdirZ`](#fn-chdirz)
  - [`chdirW`](#fn-chdirw)
  - [`fchdir`](#fn-fchdir)
  - [`readlink`](#fn-readlink)
  - [`readlinkW`](#fn-readlinkw)
  - [`readlinkZ`](#fn-readlinkz)
  - [`readlinkat`](#fn-readlinkat)
  - [`readlinkatWasi`](#fn-readlinkatwasi)
  - [`readlinkatW`](#fn-readlinkatw)
  - [`readlinkatZ`](#fn-readlinkatz)
  - [`setuid`](#fn-setuid)
  - [`seteuid`](#fn-seteuid)
  - [`setreuid`](#fn-setreuid)
  - [`setgid`](#fn-setgid)
  - [`setegid`](#fn-setegid)
  - [`setregid`](#fn-setregid)
  - [`setpgid`](#fn-setpgid)
  - [`getuid`](#fn-getuid)
  - [`geteuid`](#fn-geteuid)
  - [`isatty`](#fn-isatty)
  - [`socket`](#fn-socket)
  - [`shutdown`](#fn-shutdown)
  - [`bind`](#fn-bind)
  - [`listen`](#fn-listen)
  - [`accept`](#fn-accept)
  - [`epoll\_create1`](#fn-epoll-create1)
  - [`epoll\_ctl`](#fn-epoll-ctl)
  - [`epoll\_wait`](#fn-epoll-wait)
  - [`eventfd`](#fn-eventfd)
  - [`getsockname`](#fn-getsockname)
  - [`getpeername`](#fn-getpeername)
  - [`connect`](#fn-connect)
  - [`getsockopt`](#fn-getsockopt)
  - [`getsockoptError`](#fn-getsockopterror)
  - [`waitpid`](#fn-waitpid)
  - [`wait4`](#fn-wait4)
  - [`fstat`](#fn-fstat)
  - [`fstatat`](#fn-fstatat)
  - [`fstatatZ`](#fn-fstatatz)
  - [`kqueue`](#fn-kqueue)
  - [`kevent`](#fn-kevent)
  - [`inotify\_init1`](#fn-inotify-init1)
  - [`inotify\_add\_watch`](#fn-inotify-add-watch)
  - [`inotify\_add\_watchZ`](#fn-inotify-add-watchz)
  - [`inotify\_rm\_watch`](#fn-inotify-rm-watch)
  - [`fanotify\_init`](#fn-fanotify-init)
  - [`fanotify\_mark`](#fn-fanotify-mark)
  - [`fanotify\_markZ`](#fn-fanotify-markz)
  - [`mprotect`](#fn-mprotect)
  - [`fork`](#fn-fork)
  - [`mmap`](#fn-mmap)
  - [`munmap`](#fn-munmap)
  - [`mremap`](#fn-mremap)
  - [`msync`](#fn-msync)
  - [`access`](#fn-access)
  - [`accessZ`](#fn-accessz)
  - [`faccessat`](#fn-faccessat)
  - [`faccessatZ`](#fn-faccessatz)
  - [`faccessatW`](#fn-faccessatw)
  - [`pipe`](#fn-pipe)
  - [`pipe2`](#fn-pipe2)
  - [`sysctl`](#fn-sysctl)
  - [`sysctlbynameZ`](#fn-sysctlbynamez)
  - [`gettimeofday`](#fn-gettimeofday)
  - [`lseek\_SET`](#fn-lseek-set)
  - [`lseek\_CUR`](#fn-lseek-cur)
  - [`lseek\_END`](#fn-lseek-end)
  - [`lseek\_CUR\_get`](#fn-lseek-cur-get)
  - [`fcntl`](#fn-fcntl)
  - [`flock`](#fn-flock)
  - [`realpath`](#fn-realpath)
  - [`realpathZ`](#fn-realpathz)
  - [`realpathW`](#fn-realpathw)
  - [`nanosleep`](#fn-nanosleep)
  - [`dl\_iterate\_phdr`](#fn-dl-iterate-phdr)
  - [`clock\_gettime`](#fn-clock-gettime)
  - [`clock\_getres`](#fn-clock-getres)
  - [`sched\_getaffinity`](#fn-sched-getaffinity)
  - [`sigaltstack`](#fn-sigaltstack)
  - [`sigfillset`](#fn-sigfillset)
  - [`sigemptyset`](#fn-sigemptyset)
  - [`sigaddset`](#fn-sigaddset)
  - [`sigdelset`](#fn-sigdelset)
  - [`sigismember`](#fn-sigismember)
  - [`sigaction`](#fn-sigaction)
  - [`sigprocmask`](#fn-sigprocmask)
  - [`futimens`](#fn-futimens)
  - [`gethostname`](#fn-gethostname)
  - [`uname`](#fn-uname)
  - [`res\_mkquery`](#fn-res-mkquery)
  - [`sendmsg`](#fn-sendmsg)
  - [`sendto`](#fn-sendto)
  - [`send`](#fn-send)
  - [`copy\_file\_range`](#fn-copy-file-range)
  - [`poll`](#fn-poll)
  - [`ppoll`](#fn-ppoll)
  - [`recv`](#fn-recv)
  - [`recvfrom`](#fn-recvfrom)
  - [`dn\_expand`](#fn-dn-expand)
  - [`setsockopt`](#fn-setsockopt)
  - [`memfd\_createZ`](#fn-memfd-createz)
  - [`memfd\_create`](#fn-memfd-create)
  - [`getrusage`](#fn-getrusage)
  - [`tcgetattr`](#fn-tcgetattr)
  - [`tcsetattr`](#fn-tcsetattr)
  - [`tcgetpgrp`](#fn-tcgetpgrp)
  - [`tcsetpgrp`](#fn-tcsetpgrp)
  - [`setsid`](#fn-setsid)
  - [`signalfd`](#fn-signalfd)
  - [`sync`](#fn-sync)
  - [`syncfs`](#fn-syncfs)
  - [`fsync`](#fn-fsync)
  - [`fdatasync`](#fn-fdatasync)
  - [`prctl`](#fn-prctl)
  - [`getrlimit`](#fn-getrlimit)
  - [`setrlimit`](#fn-setrlimit)
  - [`mincore`](#fn-mincore)
  - [`madvise`](#fn-madvise)
  - [`perf\_event\_open`](#fn-perf-event-open)
  - [`timerfd\_create`](#fn-timerfd-create)
  - [`timerfd\_settime`](#fn-timerfd-settime)
  - [`timerfd\_gettime`](#fn-timerfd-gettime)
  - [`ptrace`](#fn-ptrace)
  - [`name\_to\_handle\_at`](#fn-name-to-handle-at)
  - [`name\_to\_handle\_atZ`](#fn-name-to-handle-atz)
  - [`ioctl\_SIOCGIFINDEX`](#fn-ioctl-siocgifindex)
  - [`unexpectedErrno`](#fn-unexpectederrno)
  - [`toPosixPath`](#fn-toposixpath)

- [Types](#types)
  - [`iovec`](#type-iovec)
  - [`iovec\_const`](#type-iovec-const)
  - [`TCSA`](#type-tcsa)
  - [`winsize`](#type-winsize)
  - [`LOCK`](#type-lock)
  - [`LOG`](#type-log)
  - [`Arg0Expand`](#type-arg0expand)
  - [`ShutdownHow`](#type-shutdownhow)
  - [`WaitPidResult`](#type-waitpidresult)

- [Constants](#constants)
  - [`system`](#const-system)
  - [`AF`](#const-af)
  - [`AF\_SUN`](#const-af-sun)
  - [`AI`](#const-ai)
  - [`ARCH`](#const-arch)
  - [`AT`](#const-at)
  - [`AT\_SUN`](#const-at-sun)
  - [`CLOCK`](#const-clock)
  - [`CPU\_COUNT`](#const-cpu-count)
  - [`CTL`](#const-ctl)
  - [`DT`](#const-dt)
  - [`E`](#const-e)
  - [`Elf\_Symndx`](#const-elf-symndx)
  - [`F`](#const-f)
  - [`FD\_CLOEXEC`](#const-fd-cloexec)
  - [`Flock`](#const-flock)
  - [`HOST\_NAME\_MAX`](#const-host-name-max)
  - [`HW`](#const-hw)
  - [`IFNAMESIZE`](#const-ifnamesize)
  - [`IOV\_MAX`](#const-iov-max)
  - [`IPPROTO`](#const-ipproto)
  - [`KERN`](#const-kern)
  - [`Kevent`](#const-kevent)
  - [`MADV`](#const-madv)
  - [`MAP`](#const-map)
  - [`MAX\_ADDR\_LEN`](#const-max-addr-len)
  - [`MFD`](#const-mfd)
  - [`MREMAP`](#const-mremap)
  - [`MSF`](#const-msf)
  - [`MSG`](#const-msg)
  - [`NAME\_MAX`](#const-name-max)
  - [`NSIG`](#const-nsig)
  - [`O`](#const-o)
  - [`PATH\_MAX`](#const-path-max)
  - [`POLL`](#const-poll)
  - [`POSIX\_FADV`](#const-posix-fadv)
  - [`PR`](#const-pr)
  - [`PROT`](#const-prot)
  - [`REG`](#const-reg)
  - [`RLIM`](#const-rlim)
  - [`RR`](#const-rr)
  - [`S`](#const-s)
  - [`SA`](#const-sa)
  - [`SC`](#const-sc)
  - [`SEEK`](#const-seek)
  - [`SHUT`](#const-shut)
  - [`SIG`](#const-sig)
  - [`SIOCGIFINDEX`](#const-siocgifindex)
  - [`SO`](#const-so)
  - [`SOCK`](#const-sock)
  - [`SOL`](#const-sol)
  - [`IFF`](#const-iff)
  - [`STDERR\_FILENO`](#const-stderr-fileno)
  - [`STDIN\_FILENO`](#const-stdin-fileno)
  - [`STDOUT\_FILENO`](#const-stdout-fileno)
  - [`SYS`](#const-sys)
  - [`Sigaction`](#const-sigaction)
  - [`Stat`](#const-stat)
  - [`T`](#const-t)
  - [`TCP`](#const-tcp)
  - [`VDSO`](#const-vdso)
  - [`W`](#const-w)
  - [`\_SC`](#const--sc)
  - [`addrinfo`](#const-addrinfo)
  - [`blkcnt\_t`](#const-blkcnt-t)
  - [`blksize\_t`](#const-blksize-t)
  - [`clock\_t`](#const-clock-t)
  - [`clockid\_t`](#const-clockid-t)
  - [`timerfd\_clockid\_t`](#const-timerfd-clockid-t)
  - [`cpu\_set\_t`](#const-cpu-set-t)
  - [`dev\_t`](#const-dev-t)
  - [`dl\_phdr\_info`](#const-dl-phdr-info)
  - [`fd\_t`](#const-fd-t)
  - [`file\_obj`](#const-file-obj)
  - [`gid\_t`](#const-gid-t)
  - [`ifreq`](#const-ifreq)
  - [`ino\_t`](#const-ino-t)
  - [`mcontext\_t`](#const-mcontext-t)
  - [`mode\_t`](#const-mode-t)
  - [`msghdr`](#const-msghdr)
  - [`msghdr\_const`](#const-msghdr-const)
  - [`nfds\_t`](#const-nfds-t)
  - [`nlink\_t`](#const-nlink-t)
  - [`off\_t`](#const-off-t)
  - [`pid\_t`](#const-pid-t)
  - [`pollfd`](#const-pollfd)
  - [`port\_event`](#const-port-event)
  - [`port\_notify`](#const-port-notify)
  - [`port\_t`](#const-port-t)
  - [`rlim\_t`](#const-rlim-t)
  - [`rlimit`](#const-rlimit)
  - [`rlimit\_resource`](#const-rlimit-resource)
  - [`rusage`](#const-rusage)
  - [`sa\_family\_t`](#const-sa-family-t)
  - [`siginfo\_t`](#const-siginfo-t)
  - [`sigset\_t`](#const-sigset-t)
  - [`sigrtmin`](#const-sigrtmin)
  - [`sigrtmax`](#const-sigrtmax)
  - [`sockaddr`](#const-sockaddr)
  - [`socklen\_t`](#const-socklen-t)
  - [`stack\_t`](#const-stack-t)
  - [`time\_t`](#const-time-t)
  - [`timespec`](#const-timespec)
  - [`timestamp\_t`](#const-timestamp-t)
  - [`timeval`](#const-timeval)
  - [`timezone`](#const-timezone)
  - [`ucontext\_t`](#const-ucontext-t)
  - [`uid\_t`](#const-uid-t)
  - [`user\_desc`](#const-user-desc)
  - [`utsname`](#const-utsname)
  - [`termios`](#const-termios)
  - [`CSIZE`](#const-csize)
  - [`NCCS`](#const-nccs)
  - [`cc\_t`](#const-cc-t)
  - [`V`](#const-v)
  - [`speed\_t`](#const-speed-t)
  - [`tc\_iflag\_t`](#const-tc-iflag-t)
  - [`tc\_oflag\_t`](#const-tc-oflag-t)
  - [`tc\_cflag\_t`](#const-tc-cflag-t)
  - [`tc\_lflag\_t`](#const-tc-lflag-t)
  - [`F\_OK`](#const-f-ok)
  - [`R\_OK`](#const-r-ok)
  - [`W\_OK`](#const-w-ok)
  - [`X\_OK`](#const-x-ok)
  - [`ACCMODE`](#const-accmode)
  - [`socket\_t`](#const-socket-t)
  - [`RebootCommand`](#const-rebootcommand)
  - [`GetRandomError`](#const-getrandomerror)
  - [`RaiseError`](#const-raiseerror)
  - [`GetrlimitError`](#const-getrlimiterror)
  - [`unexpected\_error\_tracing`](#const-unexpected-error-tracing)

- [Error Sets](#error-sets)
  - [`FChmodError`](#error-fchmoderror)
  - [`FChmodAtError`](#error-fchmodaterror)
  - [`FChownError`](#error-fchownerror)
  - [`RebootError`](#error-rebooterror)
  - [`KillError`](#error-killerror)
  - [`ReadError`](#error-readerror)
  - [`PReadError`](#error-preaderror)
  - [`TruncateError`](#error-truncateerror)
  - [`WriteError`](#error-writeerror)
  - [`PWriteError`](#error-pwriteerror)
  - [`OpenError`](#error-openerror)
  - [`ExecveError`](#error-execveerror)
  - [`GetCwdError`](#error-getcwderror)
  - [`SymLinkError`](#error-symlinkerror)
  - [`LinkError`](#error-linkerror)
  - [`LinkatError`](#error-linkaterror)
  - [`UnlinkError`](#error-unlinkerror)
  - [`UnlinkatError`](#error-unlinkaterror)
  - [`RenameError`](#error-renameerror)
  - [`MakeDirError`](#error-makedirerror)
  - [`DeleteDirError`](#error-deletedirerror)
  - [`ChangeCurDirError`](#error-changecurdirerror)
  - [`FchdirError`](#error-fchdirerror)
  - [`ReadLinkError`](#error-readlinkerror)
  - [`SetEidError`](#error-seteiderror)
  - [`SetIdError`](#error-setiderror)
  - [`SetPgidError`](#error-setpgiderror)
  - [`SocketError`](#error-socketerror)
  - [`ShutdownError`](#error-shutdownerror)
  - [`BindError`](#error-binderror)
  - [`ListenError`](#error-listenerror)
  - [`AcceptError`](#error-accepterror)
  - [`EpollCreateError`](#error-epollcreateerror)
  - [`EpollCtlError`](#error-epollctlerror)
  - [`EventFdError`](#error-eventfderror)
  - [`GetSockNameError`](#error-getsocknameerror)
  - [`ConnectError`](#error-connecterror)
  - [`GetSockOptError`](#error-getsockopterror)
  - [`FStatError`](#error-fstaterror)
  - [`FStatAtError`](#error-fstataterror)
  - [`KQueueError`](#error-kqueueerror)
  - [`KEventError`](#error-keventerror)
  - [`INotifyInitError`](#error-inotifyiniterror)
  - [`INotifyAddWatchError`](#error-inotifyaddwatcherror)
  - [`FanotifyInitError`](#error-fanotifyiniterror)
  - [`FanotifyMarkError`](#error-fanotifymarkerror)
  - [`MProtectError`](#error-mprotecterror)
  - [`ForkError`](#error-forkerror)
  - [`MMapError`](#error-mmaperror)
  - [`MRemapError`](#error-mremaperror)
  - [`MSyncError`](#error-msyncerror)
  - [`AccessError`](#error-accesserror)
  - [`PipeError`](#error-pipeerror)
  - [`SysCtlError`](#error-sysctlerror)
  - [`SeekError`](#error-seekerror)
  - [`FcntlError`](#error-fcntlerror)
  - [`FlockError`](#error-flockerror)
  - [`RealPathError`](#error-realpatherror)
  - [`ClockGetTimeError`](#error-clockgettimeerror)
  - [`SchedGetAffinityError`](#error-schedgetaffinityerror)
  - [`SigaltstackError`](#error-sigaltstackerror)
  - [`FutimensError`](#error-futimenserror)
  - [`GetHostNameError`](#error-gethostnameerror)
  - [`SendError`](#error-senderror)
  - [`SendMsgError`](#error-sendmsgerror)
  - [`SendToError`](#error-sendtoerror)
  - [`CopyFileRangeError`](#error-copyfilerangeerror)
  - [`PollError`](#error-pollerror)
  - [`PPollError`](#error-ppollerror)
  - [`RecvFromError`](#error-recvfromerror)
  - [`DnExpandError`](#error-dnexpanderror)
  - [`SetSockOptError`](#error-setsockopterror)
  - [`MemFdCreateError`](#error-memfdcreateerror)
  - [`TIOCError`](#error-tiocerror)
  - [`TermiosGetError`](#error-termiosgeterror)
  - [`TermiosSetError`](#error-termiosseterror)
  - [`TermioGetPgrpError`](#error-termiogetpgrperror)
  - [`TermioSetPgrpError`](#error-termiosetpgrperror)
  - [`SetSidError`](#error-setsiderror)
  - [`SyncError`](#error-syncerror)
  - [`PrctlError`](#error-prctlerror)
  - [`SetrlimitError`](#error-setrlimiterror)
  - [`MincoreError`](#error-mincoreerror)
  - [`MadviseError`](#error-madviseerror)
  - [`PerfEventOpenError`](#error-perfeventopenerror)
  - [`TimerFdCreateError`](#error-timerfdcreateerror)
  - [`TimerFdGetError`](#error-timerfdgeterror)
  - [`TimerFdSetError`](#error-timerfdseterror)
  - [`PtraceError`](#error-ptraceerror)
  - [`NameToFileHandleAtError`](#error-nametofilehandleaterror)
  - [`IoCtl\_SIOCGIFINDEX\_Error`](#error-ioctl-siocgifindex-error)
  - [`UnexpectedError`](#error-unexpectederror)

---

## Types (9)

### <a id="type-iovec"></a>`iovec`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const iovec = extern struct {
    base: [*]u8,
    len: usize,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `base` | `[*]u8` | – | |
| `len` | `usize` | – | |

</details>

---

### <a id="type-iovec-const"></a>`iovec_const`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const iovec_const = extern struct {
    base: [*]const u8,
    len: usize,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `base` | `[*]const u8` | – | |
| `len` | `usize` | – | |

</details>

---

### <a id="type-tcsa"></a>`TCSA`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const TCSA = enum(c_uint) {
    NOW,
    DRAIN,
    FLUSH,
    _,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `NOW` |  |
| `DRAIN` |  |
| `FLUSH` |  |
| `_` |  |

</details>

---

### <a id="type-winsize"></a>`winsize`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const winsize = extern struct {
    row: u16,
    col: u16,
    xpixel: u16,
    ypixel: u16,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `row` | `u16` | – | |
| `col` | `u16` | – | |
| `xpixel` | `u16` | – | |
| `ypixel` | `u16` | – | |

</details>

---

### <a id="type-lock"></a>`LOCK`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const LOCK = struct {
    pub const SH = 1;
    pub const EX = 2;
    pub const NB = 4;
    pub const UN = 8;
}
```

</details>

---

### <a id="type-log"></a>`LOG`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

```zig
pub const LOG = struct {
    /// system is unusable
    pub const EMERG = 0;
    /// action must be taken immediately
    pub const ALERT = 1;
    /// critical conditions
    pub const CRIT = 2;
    /// error conditions
    pub const ERR = 3;
    /// warning conditions
    pub const WARNING = 4;
    /// normal but significant condition
    pub const NOTICE = 5;
    /// informational
    pub const INFO = 6;
    /// debug-level messages
    pub const DEBUG = 7;
}
```

</details>

---

### <a id="type-arg0expand"></a>`Arg0Expand`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const Arg0Expand = enum {
    expand,
    no_expand,
}
```

**Fields:**

| Value | Description |
|-------|-------------|
| `expand` |  |
| `no_expand` |  |

</details>

---

### <a id="type-shutdownhow"></a>`ShutdownHow`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const ShutdownHow = enum { recv, send, both }
```

**Fields:**

| Value | Description |
|-------|-------------|
| `recv` |  |
| `send` |  |
| `both` |  |

</details>

---

### <a id="type-waitpidresult"></a>`WaitPidResult`

<details class="declaration-card" open>
<summary>Container – Expand to inspect fields and related documentation.</summary>

```zig
pub const WaitPidResult = struct {
    pid: pid_t,
    status: u32,
}
```

**Fields:**

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `pid` | `pid_t` | – | |
| `status` | `u32` | – | |

</details>

---

## Constants (131)

### <a id="const-system"></a>`system`

<details class="declaration-card" open>
<summary>Constant – A libc-compatible API layer</summary>

A libc-compatible API layer.

```zig
pub const system = if (use_libc)
    std.c
else switch (native_os) {
    .linux => linux,
    .plan9 => std.os.plan9,
    else => struct {
        pub const ucontext_t = void;
        pub const pid_t = void;
        pub const pollfd = void;
        pub const fd_t = void;
        pub const uid_t = void;
        pub const gid_t = void;
    },
}
```

</details>

---

### <a id="const-af"></a>`AF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AF = system.AF
```

</details>

---

### <a id="const-af-sun"></a>`AF_SUN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AF_SUN = system.AF_SUN
```

</details>

---

### <a id="const-ai"></a>`AI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AI = system.AI
```

</details>

---

### <a id="const-arch"></a>`ARCH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ARCH = system.ARCH
```

</details>

---

### <a id="const-at"></a>`AT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT = system.AT
```

</details>

---

### <a id="const-at-sun"></a>`AT_SUN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const AT_SUN = system.AT_SUN
```

</details>

---

### <a id="const-clock"></a>`CLOCK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CLOCK = system.CLOCK
```

</details>

---

### <a id="const-cpu-count"></a>`CPU_COUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CPU_COUNT = system.CPU_COUNT
```

</details>

---

### <a id="const-ctl"></a>`CTL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CTL = system.CTL
```

</details>

---

### <a id="const-dt"></a>`DT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const DT = system.DT
```

</details>

---

### <a id="const-e"></a>`E`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const E = system.E
```

</details>

---

### <a id="const-elf-symndx"></a>`Elf_Symndx`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Elf_Symndx = system.Elf_Symndx
```

</details>

---

### <a id="const-f"></a>`F`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const F = system.F
```

</details>

---

### <a id="const-fd-cloexec"></a>`FD_CLOEXEC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const FD_CLOEXEC = system.FD_CLOEXEC
```

</details>

---

### <a id="const-flock"></a>`Flock`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Flock = system.Flock
```

</details>

---

### <a id="const-host-name-max"></a>`HOST_NAME_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const HOST_NAME_MAX = system.HOST_NAME_MAX
```

</details>

---

### <a id="const-hw"></a>`HW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const HW = system.HW
```

</details>

---

### <a id="const-ifnamesize"></a>`IFNAMESIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const IFNAMESIZE = system.IFNAMESIZE
```

</details>

---

### <a id="const-iov-max"></a>`IOV_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const IOV_MAX = system.IOV_MAX
```

</details>

---

### <a id="const-ipproto"></a>`IPPROTO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const IPPROTO = system.IPPROTO
```

</details>

---

### <a id="const-kern"></a>`KERN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const KERN = system.KERN
```

</details>

---

### <a id="const-kevent"></a>`Kevent`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Kevent = system.Kevent
```

</details>

---

### <a id="const-madv"></a>`MADV`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MADV = system.MADV
```

</details>

---

### <a id="const-map"></a>`MAP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MAP = system.MAP
```

</details>

---

### <a id="const-max-addr-len"></a>`MAX_ADDR_LEN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MAX_ADDR_LEN = system.MAX_ADDR_LEN
```

</details>

---

### <a id="const-mfd"></a>`MFD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MFD = system.MFD
```

</details>

---

### <a id="const-mremap"></a>`MREMAP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MREMAP = system.MREMAP
```

</details>

---

### <a id="const-msf"></a>`MSF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MSF = system.MSF
```

</details>

---

### <a id="const-msg"></a>`MSG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const MSG = system.MSG
```

</details>

---

### <a id="const-name-max"></a>`NAME_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const NAME_MAX = system.NAME_MAX
```

</details>

---

### <a id="const-nsig"></a>`NSIG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const NSIG = system.NSIG
```

</details>

---

### <a id="const-o"></a>`O`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const O = system.O
```

</details>

---

### <a id="const-path-max"></a>`PATH_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const PATH_MAX = system.PATH_MAX
```

</details>

---

### <a id="const-poll"></a>`POLL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const POLL = system.POLL
```

</details>

---

### <a id="const-posix-fadv"></a>`POSIX_FADV`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const POSIX_FADV = system.POSIX_FADV
```

</details>

---

### <a id="const-pr"></a>`PR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const PR = system.PR
```

</details>

---

### <a id="const-prot"></a>`PROT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const PROT = system.PROT
```

</details>

---

### <a id="const-reg"></a>`REG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const REG = system.REG
```

</details>

---

### <a id="const-rlim"></a>`RLIM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const RLIM = system.RLIM
```

</details>

---

### <a id="const-rr"></a>`RR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const RR = system.RR
```

</details>

---

### <a id="const-s"></a>`S`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const S = system.S
```

</details>

---

### <a id="const-sa"></a>`SA`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SA = system.SA
```

</details>

---

### <a id="const-sc"></a>`SC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SC = system.SC
```

</details>

---

### <a id="const-seek"></a>`SEEK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SEEK = system.SEEK
```

</details>

---

### <a id="const-shut"></a>`SHUT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SHUT = system.SHUT
```

</details>

---

### <a id="const-sig"></a>`SIG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SIG = system.SIG
```

</details>

---

### <a id="const-siocgifindex"></a>`SIOCGIFINDEX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SIOCGIFINDEX = system.SIOCGIFINDEX
```

</details>

---

### <a id="const-so"></a>`SO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SO = system.SO
```

</details>

---

### <a id="const-sock"></a>`SOCK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SOCK = system.SOCK
```

</details>

---

### <a id="const-sol"></a>`SOL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SOL = system.SOL
```

</details>

---

### <a id="const-iff"></a>`IFF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const IFF = system.IFF
```

</details>

---

### <a id="const-stderr-fileno"></a>`STDERR_FILENO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STDERR_FILENO = system.STDERR_FILENO
```

</details>

---

### <a id="const-stdin-fileno"></a>`STDIN_FILENO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STDIN_FILENO = system.STDIN_FILENO
```

</details>

---

### <a id="const-stdout-fileno"></a>`STDOUT_FILENO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const STDOUT_FILENO = system.STDOUT_FILENO
```

</details>

---

### <a id="const-sys"></a>`SYS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const SYS = system.SYS
```

</details>

---

### <a id="const-sigaction"></a>`Sigaction`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Sigaction = system.Sigaction
```

</details>

---

### <a id="const-stat"></a>`Stat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const Stat = system.Stat
```

</details>

---

### <a id="const-t"></a>`T`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const T = system.T
```

</details>

---

### <a id="const-tcp"></a>`TCP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const TCP = system.TCP
```

</details>

---

### <a id="const-vdso"></a>`VDSO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const VDSO = system.VDSO
```

</details>

---

### <a id="const-w"></a>`W`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const W = system.W
```

</details>

---

### <a id="const--sc"></a>`_SC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const _SC = system._SC
```

</details>

---

### <a id="const-addrinfo"></a>`addrinfo`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const addrinfo = system.addrinfo
```

</details>

---

### <a id="const-blkcnt-t"></a>`blkcnt_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const blkcnt_t = system.blkcnt_t
```

</details>

---

### <a id="const-blksize-t"></a>`blksize_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const blksize_t = system.blksize_t
```

</details>

---

### <a id="const-clock-t"></a>`clock_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const clock_t = system.clock_t
```

</details>

---

### <a id="const-clockid-t"></a>`clockid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const clockid_t = system.clockid_t
```

</details>

---

### <a id="const-timerfd-clockid-t"></a>`timerfd_clockid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const timerfd_clockid_t = system.timerfd_clockid_t
```

</details>

---

### <a id="const-cpu-set-t"></a>`cpu_set_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const cpu_set_t = system.cpu_set_t
```

</details>

---

### <a id="const-dev-t"></a>`dev_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const dev_t = system.dev_t
```

</details>

---

### <a id="const-dl-phdr-info"></a>`dl_phdr_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const dl_phdr_info = system.dl_phdr_info
```

</details>

---

### <a id="const-fd-t"></a>`fd_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const fd_t = system.fd_t
```

</details>

---

### <a id="const-file-obj"></a>`file_obj`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const file_obj = system.file_obj
```

</details>

---

### <a id="const-gid-t"></a>`gid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const gid_t = system.gid_t
```

</details>

---

### <a id="const-ifreq"></a>`ifreq`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ifreq = system.ifreq
```

</details>

---

### <a id="const-ino-t"></a>`ino_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ino_t = system.ino_t
```

</details>

---

### <a id="const-mcontext-t"></a>`mcontext_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const mcontext_t = system.mcontext_t
```

</details>

---

### <a id="const-mode-t"></a>`mode_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const mode_t = system.mode_t
```

</details>

---

### <a id="const-msghdr"></a>`msghdr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const msghdr = system.msghdr
```

</details>

---

### <a id="const-msghdr-const"></a>`msghdr_const`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const msghdr_const = system.msghdr_const
```

</details>

---

### <a id="const-nfds-t"></a>`nfds_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const nfds_t = system.nfds_t
```

</details>

---

### <a id="const-nlink-t"></a>`nlink_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const nlink_t = system.nlink_t
```

</details>

---

### <a id="const-off-t"></a>`off_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const off_t = system.off_t
```

</details>

---

### <a id="const-pid-t"></a>`pid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const pid_t = system.pid_t
```

</details>

---

### <a id="const-pollfd"></a>`pollfd`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const pollfd = system.pollfd
```

</details>

---

### <a id="const-port-event"></a>`port_event`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const port_event = system.port_event
```

</details>

---

### <a id="const-port-notify"></a>`port_notify`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const port_notify = system.port_notify
```

</details>

---

### <a id="const-port-t"></a>`port_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const port_t = system.port_t
```

</details>

---

### <a id="const-rlim-t"></a>`rlim_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const rlim_t = system.rlim_t
```

</details>

---

### <a id="const-rlimit"></a>`rlimit`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const rlimit = system.rlimit
```

</details>

---

### <a id="const-rlimit-resource"></a>`rlimit_resource`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const rlimit_resource = system.rlimit_resource
```

</details>

---

### <a id="const-rusage"></a>`rusage`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const rusage = system.rusage
```

</details>

---

### <a id="const-sa-family-t"></a>`sa_family_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const sa_family_t = system.sa_family_t
```

</details>

---

### <a id="const-siginfo-t"></a>`siginfo_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const siginfo_t = system.siginfo_t
```

</details>

---

### <a id="const-sigset-t"></a>`sigset_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const sigset_t = system.sigset_t
```

</details>

---

### <a id="const-sigrtmin"></a>`sigrtmin`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const sigrtmin = system.sigrtmin
```

</details>

---

### <a id="const-sigrtmax"></a>`sigrtmax`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const sigrtmax = system.sigrtmax
```

</details>

---

### <a id="const-sockaddr"></a>`sockaddr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const sockaddr = system.sockaddr
```

</details>

---

### <a id="const-socklen-t"></a>`socklen_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const socklen_t = system.socklen_t
```

</details>

---

### <a id="const-stack-t"></a>`stack_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const stack_t = system.stack_t
```

</details>

---

### <a id="const-time-t"></a>`time_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const time_t = system.time_t
```

</details>

---

### <a id="const-timespec"></a>`timespec`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const timespec = system.timespec
```

</details>

---

### <a id="const-timestamp-t"></a>`timestamp_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const timestamp_t = system.timestamp_t
```

</details>

---

### <a id="const-timeval"></a>`timeval`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const timeval = system.timeval
```

</details>

---

### <a id="const-timezone"></a>`timezone`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const timezone = system.timezone
```

</details>

---

### <a id="const-ucontext-t"></a>`ucontext_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ucontext_t = system.ucontext_t
```

</details>

---

### <a id="const-uid-t"></a>`uid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const uid_t = system.uid_t
```

</details>

---

### <a id="const-user-desc"></a>`user_desc`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const user_desc = system.user_desc
```

</details>

---

### <a id="const-utsname"></a>`utsname`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const utsname = system.utsname
```

</details>

---

### <a id="const-termios"></a>`termios`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const termios = system.termios
```

</details>

---

### <a id="const-csize"></a>`CSIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const CSIZE = system.CSIZE
```

</details>

---

### <a id="const-nccs"></a>`NCCS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const NCCS = system.NCCS
```

</details>

---

### <a id="const-cc-t"></a>`cc_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const cc_t = system.cc_t
```

</details>

---

### <a id="const-v"></a>`V`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const V = system.V
```

</details>

---

### <a id="const-speed-t"></a>`speed_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const speed_t = system.speed_t
```

</details>

---

### <a id="const-tc-iflag-t"></a>`tc_iflag_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const tc_iflag_t = system.tc_iflag_t
```

</details>

---

### <a id="const-tc-oflag-t"></a>`tc_oflag_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const tc_oflag_t = system.tc_oflag_t
```

</details>

---

### <a id="const-tc-cflag-t"></a>`tc_cflag_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const tc_cflag_t = system.tc_cflag_t
```

</details>

---

### <a id="const-tc-lflag-t"></a>`tc_lflag_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const tc_lflag_t = system.tc_lflag_t
```

</details>

---

### <a id="const-f-ok"></a>`F_OK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const F_OK = system.F_OK
```

</details>

---

### <a id="const-r-ok"></a>`R_OK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const R_OK = system.R_OK
```

</details>

---

### <a id="const-w-ok"></a>`W_OK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const W_OK = system.W_OK
```

</details>

---

### <a id="const-x-ok"></a>`X_OK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const X_OK = system.X_OK
```

</details>

---

### <a id="const-accmode"></a>`ACCMODE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const ACCMODE = switch (native_os) {
    // POSIX has a note about the access mode values:
    //
    // In historical implementations the value of O_RDONLY is zero. Because of
    // that, it is not possible to detect the presence of O_RDONLY and another
    // option. Future implementations should encode O_RDONLY and O_WRONLY as
    // bit flags so that: O_RDONLY | O_WRONLY == O_RDWR
    //
    // In practice SerenityOS is the only system supported by Zig that
    // implements this suggestion.
    // https://github.com/SerenityOS/serenity/blob/4adc51fdf6af7d50679c48b39362e062f5a3b2cb/Kernel/API/POSIX/fcntl.h#L28-L30
    .serenity => enum(u2) {
        NONE = 0,
        RDONLY = 1,
        WRONLY = 2,
        RDWR = 3,
    },
    else => enum(u2) {
        RDONLY = 0,
        WRONLY = 1,
        RDWR = 2,
    },
}
```

</details>

---

### <a id="const-socket-t"></a>`socket_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const socket_t = if (native_os == .windows) windows.ws2_32.SOCKET else fd_t
```

</details>

---

### <a id="const-rebootcommand"></a>`RebootCommand`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const RebootCommand = switch (native_os) {
    .linux => union(linux.LINUX_REBOOT.CMD) {
        RESTART: void,
        HALT: void,
        CAD_ON: void,
        CAD_OFF: void,
        POWER_OFF: void,
        RESTART2: [*:0]const u8,
        SW_SUSPEND: void,
        KEXEC: void,
    },
    else => @compileError("Unsupported OS"),
}
```

</details>

---

### <a id="const-getrandomerror"></a>`GetRandomError`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const GetRandomError = OpenError
```

</details>

---

### <a id="const-raiseerror"></a>`RaiseError`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const RaiseError = UnexpectedError
```

</details>

---

### <a id="const-getrlimiterror"></a>`GetrlimitError`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

```zig
pub const GetrlimitError = UnexpectedError
```

</details>

---

### <a id="const-unexpected-error-tracing"></a>`unexpected_error_tracing`

<details class="declaration-card" open>
<summary>Constant – Whether or not `error</summary>

Whether or not `error.Unexpected` will print its value and a stack trace.

If this happens the fix is to add the error code to the corresponding
switch expression, possibly introduce a new error in the error set, and
send a patch to Zig.

```zig
pub const unexpected_error_tracing = builtin.mode == .Debug and switch (builtin.zig_backend) {
    .stage2_llvm, .stage2_x86_64 => true,
    else => false,
}
```

</details>

---

## Functions (194)

### <a id="fn-errno"></a>`errno`

<details class="declaration-card" open>
<summary>Function – Obtains errno from the return value of a system function call</summary>

Obtains errno from the return value of a system function call.

For some systems this will obtain the value directly from the syscall return value;
for others it will use a thread-local errno variable. Therefore, this
function only returns a well-defined value when it is called directly after
the system function call whose errno value is intended to be observed.

```zig
pub fn errno(rc: anytype) E {
    if (use_libc) {
        return if (rc == -1) @enumFromInt(std.c._errno().*) else .SUCCESS;
    }
    const signed: isize = @bitCast(rc);
    const int = if (signed > -4096 and signed < 0) -signed else 0;
    return @enumFromInt(int);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rc` | `` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-close"></a>`close`

<details class="declaration-card" open>
<summary>Function – Closes the file descriptor</summary>

Closes the file descriptor.

Asserts the file descriptor is open.

This function is not capable of returning any indication of failure. An
application which wants to ensure writes have succeeded before closing must
call `fsync` before `close`.

The Zig standard library does not support POSIX thread cancellation.

```zig
pub fn close(fd: fd_t) void {
    if (native_os == .windows) {
        return windows.CloseHandle(fd);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        _ = std.os.wasi.fd_close(fd);
        return;
    }
    switch (errno(system.close(fd))) {
        .BADF => unreachable, // Always a race condition.
        .INTR => return, // This is still a success. See https://github.com/ziglang/zig/issues/2425
        else => return,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-fchmod"></a>`fchmod`

<details class="declaration-card" open>
<summary>Function – Changes the mode of the file referred to by the file descriptor</summary>

Changes the mode of the file referred to by the file descriptor.

The process must have the correct privileges in order to do this
successfully, or must have the effective user ID matching the owner
of the file.

```zig
pub fn fchmod(fd: fd_t, mode: mode_t) FChmodError!void {
    if (!fs.has_executable_bit) @compileError("fchmod unsupported by target OS");

    while (true) {
        const res = system.fchmod(fd, mode);
        switch (errno(res)) {
            .SUCCESS => return,
            .INTR => continue,
            .BADF => unreachable,
            .FAULT => unreachable,
            .INVAL => unreachable,
            .ACCES => return error.AccessDenied,
            .IO => return error.InputOutput,
            .LOOP => return error.SymLinkLoop,
            .NOENT => return error.FileNotFound,
            .NOMEM => return error.SystemResources,
            .NOTDIR => return error.FileNotFound,
            .PERM => return error.PermissionDenied,
            .ROFS => return error.ReadOnlyFileSystem,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`FChmodError!void`](#error-fchmoderror) | – | – |

</details>

---

### <a id="fn-fchmodat"></a>`fchmodat`

<details class="declaration-card" open>
<summary>Function – Changes the `mode` of `path` relative to the directory referred to by</summary>

Changes the `mode` of `path` relative to the directory referred to by
`dirfd`. The process must have the correct privileges in order to do this
successfully, or must have the effective user ID matching the owner of the
file.

On Linux the `fchmodat2` syscall will be used if available, otherwise a
workaround using procfs will be employed. Changing the mode of a symbolic
link with `AT.SYMLINK_NOFOLLOW` set will also return
`OperationNotSupported`, as:

 1. Permissions on the link are ignored when resolving its target.
 2. This operation has been known to invoke undefined behaviour across
    different filesystems[1].

[1]: https://sourceware.org/legacy-ml/libc-alpha/2020-02/msg00467.html.

```zig
pub inline fn fchmodat(dirfd: fd_t, path: []const u8, mode: mode_t, flags: u32) FChmodAtError!void {
    if (!fs.has_executable_bit) @compileError("fchmodat unsupported by target OS");

    // No special handling for linux is needed if we can use the libc fallback
    // or `flags` is empty. Glibc only added the fallback in 2.32.
    const skip_fchmodat_fallback = native_os != .linux or
        (!builtin.abi.isAndroid() and std.c.versionCheck(.{ .major = 2, .minor = 32, .patch = 0 })) or
        flags == 0;

    // This function is marked inline so that when flags is comptime-known,
    // skip_fchmodat_fallback will be comptime-known true.
    if (skip_fchmodat_fallback)
        return fchmodat1(dirfd, path, mode, flags);

    return fchmodat2(dirfd, path, mode, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `path` | `[]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| `flags` | `u32` | – | – |
| Return | [`FChmodAtError!void`](#error-fchmodaterror) | – | – |

</details>

---

### <a id="fn-fchown"></a>`fchown`

<details class="declaration-card" open>
<summary>Function – Changes the owner and group of the file referred to by the file descriptor</summary>

Changes the owner and group of the file referred to by the file descriptor.
The process must have the correct privileges in order to do this
successfully. The group may be changed by the owner of the directory to
any group of which the owner is a member. If the owner or group is
specified as `null`, the ID is not changed.

```zig
pub fn fchown(fd: fd_t, owner: ?uid_t, group: ?gid_t) FChownError!void {
    switch (native_os) {
        .windows, .wasi => @compileError("Unsupported OS"),
        else => {},
    }

    while (true) {
        const res = system.fchown(fd, owner orelse ~@as(uid_t, 0), group orelse ~@as(gid_t, 0));

        switch (errno(res)) {
            .SUCCESS => return,
            .INTR => continue,
            .BADF => unreachable, // Can be reached if the fd refers to a directory opened without `Dir.OpenOptions{ .iterate = true }`

            .FAULT => unreachable,
            .INVAL => unreachable,
            .ACCES => return error.AccessDenied,
            .IO => return error.InputOutput,
            .LOOP => return error.SymLinkLoop,
            .NOENT => return error.FileNotFound,
            .NOMEM => return error.SystemResources,
            .NOTDIR => return error.FileNotFound,
            .PERM => return error.PermissionDenied,
            .ROFS => return error.ReadOnlyFileSystem,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `owner` | `?uid_t` | – | – |
| `group` | `?gid_t` | – | – |
| Return | [`FChownError!void`](#error-fchownerror) | – | – |

</details>

---

### <a id="fn-reboot"></a>`reboot`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn reboot(cmd: RebootCommand) RebootError!void {
    switch (native_os) {
        .linux => {
            switch (linux.E.init(linux.reboot(
                .MAGIC1,
                .MAGIC2,
                cmd,
                switch (cmd) {
                    .RESTART2 => |s| s,
                    else => null,
                },
            ))) {
                .SUCCESS => {},
                .PERM => return error.PermissionDenied,
                else => |err| return std.posix.unexpectedErrno(err),
            }
            switch (cmd) {
                .CAD_OFF => {},
                .CAD_ON => {},
                .SW_SUSPEND => {},

                .HALT => unreachable,
                .KEXEC => unreachable,
                .POWER_OFF => unreachable,
                .RESTART => unreachable,
                .RESTART2 => unreachable,
            }
        },
        else => @compileError("Unsupported OS"),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `cmd` | [`RebootCommand`](#const-rebootcommand) | – | – |
| Return | [`RebootError!void`](#error-rebooterror) | – | – |

</details>

---

### <a id="fn-getrandom"></a>`getrandom`

<details class="declaration-card" open>
<summary>Function – Obtain a series of random bytes</summary>

Obtain a series of random bytes. These bytes can be used to seed user-space
random number generators or for cryptographic purposes.
When linking against libc, this calls the
appropriate OS-specific library call. Otherwise it uses the zig standard
library implementation.

```zig
pub fn getrandom(buffer: []u8) GetRandomError!void {
    if (native_os == .windows) {
        return windows.RtlGenRandom(buffer);
    }
    if (builtin.link_libc and @TypeOf(system.arc4random_buf) != void) {
        system.arc4random_buf(buffer.ptr, buffer.len);
        return;
    }
    if (native_os == .wasi) switch (wasi.random_get(buffer.ptr, buffer.len)) {
        .SUCCESS => return,
        else => |err| return unexpectedErrno(err),
    };
    if (@TypeOf(system.getrandom) != void) {
        var buf = buffer;
        const use_c = native_os != .linux or
            std.c.versionCheck(if (builtin.abi.isAndroid()) .{ .major = 28, .minor = 0, .patch = 0 } else .{ .major = 2, .minor = 25, .patch = 0 });

        while (buf.len != 0) {
            const num_read: usize, const err = if (use_c) res: {
                const rc = std.c.getrandom(buf.ptr, buf.len, 0);
                break :res .{ @bitCast(rc), errno(rc) };
            } else res: {
                const rc = linux.getrandom(buf.ptr, buf.len, 0);
                break :res .{ rc, linux.E.init(rc) };
            };

            switch (err) {
                .SUCCESS => buf = buf[num_read..],
                .INVAL => unreachable,
                .FAULT => unreachable,
                .INTR => continue,
                else => return unexpectedErrno(err),
            }
        }
        return;
    }
    if (native_os == .emscripten) {
        const err = errno(std.c.getentropy(buffer.ptr, buffer.len));
        switch (err) {
            .SUCCESS => return,
            else => return unexpectedErrno(err),
        }
    }
    return getRandomBytesDevURandom(buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buffer` | `[]u8` | – | – |
| Return | [`GetRandomError!void`](#const-getrandomerror) | – | – |

</details>

---

### <a id="fn-abort"></a>`abort`

<details class="declaration-card" open>
<summary>Function – Causes abnormal process termination</summary>

Causes abnormal process termination.
If linking against libc, this calls the abort() libc function. Otherwise
it raises SIGABRT followed by SIGKILL and finally lo
Invokes the current signal handler for SIGABRT, if any.

```zig
pub fn abort() noreturn {
    @branchHint(.cold);
    // MSVCRT abort() sometimes opens a popup window which is undesirable, so
    // even when linking libc on Windows we use our own abort implementation.
    // See https://github.com/ziglang/zig/issues/2071 for more details.
    if (native_os == .windows) {
        if (builtin.mode == .Debug) {
            @breakpoint();
        }
        windows.kernel32.ExitProcess(3);
    }
    if (!builtin.link_libc and native_os == .linux) {
        // The Linux man page says that the libc abort() function
        // "first unblocks the SIGABRT signal", but this is a footgun
        // for user-defined signal handlers that want to restore some state in
        // some program sections and crash in others.
        // So, the user-installed SIGABRT handler is run, if present.
        raise(SIG.ABRT) catch {};

        // Disable all signal handlers.
        const filledset = linux.sigfillset();
        sigprocmask(SIG.BLOCK, &filledset, null);

        // Only one thread may proceed to the rest of abort().
        if (!builtin.single_threaded) {
            const global = struct {
                var abort_entered: bool = false;
            };
            while (@cmpxchgWeak(bool, &global.abort_entered, false, true, .seq_cst, .seq_cst)) |_| {}
        }

        // Install default handler so that the tkill below will terminate.
        const sigact = Sigaction{
            .handler = .{ .handler = SIG.DFL },
            .mask = sigemptyset(),
            .flags = 0,
        };
        sigaction(SIG.ABRT, &sigact, null);

        _ = linux.tkill(linux.gettid(), SIG.ABRT);

        var sigabrtmask = sigemptyset();
        sigaddset(&sigabrtmask, SIG.ABRT);
        sigprocmask(SIG.UNBLOCK, &sigabrtmask, null);

        // Beyond this point should be unreachable.
        @as(*allowzero volatile u8, @ptrFromInt(0)).* = 0;
        raise(SIG.KILL) catch {};
        exit(127); // Pid 1 might not be signalled in some containers.
    }
    switch (native_os) {
        .uefi, .wasi, .emscripten, .cuda, .amdhsa => @trap(),
        else => system.abort(),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `noreturn` | – | – |

</details>

---

### <a id="fn-raise"></a>`raise`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn raise(sig: u8) RaiseError!void {
    if (builtin.link_libc) {
        switch (errno(system.raise(sig))) {
            .SUCCESS => return,
            else => |err| return unexpectedErrno(err),
        }
    }

    if (native_os == .linux) {
        // Block all signals so a `fork` (from a signal handler) between the gettid() and kill() syscalls
        // cannot trigger an extra, unexpected, inter-process signal.  Signal paranoia inherited from Musl.
        const filled = linux.sigfillset();
        var orig: sigset_t = undefined;
        sigprocmask(SIG.BLOCK, &filled, &orig);
        const rc = linux.tkill(linux.gettid(), sig);
        sigprocmask(SIG.SETMASK, &orig, null);

        switch (errno(rc)) {
            .SUCCESS => return,
            else => |err| return unexpectedErrno(err),
        }
    }

    @compileError("std.posix.raise unimplemented for this target");
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sig` | `u8` | – | – |
| Return | [`RaiseError!void`](#const-raiseerror) | – | – |

</details>

---

### <a id="fn-kill"></a>`kill`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn kill(pid: pid_t, sig: u8) KillError!void {
    switch (errno(system.kill(pid, sig))) {
        .SUCCESS => return,
        .INVAL => unreachable, // invalid signal
        .PERM => return error.PermissionDenied,
        .SRCH => return error.ProcessNotFound,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `sig` | `u8` | – | – |
| Return | [`KillError!void`](#error-killerror) | – | – |

</details>

---

### <a id="fn-exit"></a>`exit`

<details class="declaration-card" open>
<summary>Function – Exits all threads of the program with the specified status code</summary>

Exits all threads of the program with the specified status code.

```zig
pub fn exit(status: u8) noreturn {
    if (builtin.link_libc) {
        std.c.exit(status);
    }
    if (native_os == .windows) {
        windows.kernel32.ExitProcess(status);
    }
    if (native_os == .wasi) {
        wasi.proc_exit(status);
    }
    if (native_os == .linux and !builtin.single_threaded) {
        linux.exit_group(status);
    }
    if (native_os == .uefi) {
        const uefi = std.os.uefi;
        // exit() is only available if exitBootServices() has not been called yet.
        // This call to exit should not fail, so we catch-ignore errors.
        if (uefi.system_table.boot_services) |bs| {
            bs.exit(uefi.handle, @enumFromInt(status), null) catch {};
        }
        // If we can't exit, reboot the system instead.
        uefi.system_table.runtime_services.resetSystem(.cold, @enumFromInt(status), null);
    }
    system.exit(status);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `status` | `u8` | – | – |
| Return | `noreturn` | – | – |

</details>

---

### <a id="fn-read"></a>`read`

<details class="declaration-card" open>
<summary>Function – Returns the number of bytes that were read, which can be less than</summary>

Returns the number of bytes that were read, which can be less than
buf.len. If 0 bytes were read, that means EOF.
If `fd` is opened in non blocking mode, the function will return error.WouldBlock
when EAGAIN is received.

Linux has a limit on how many bytes may be transferred in one `read` call, which is `0x7ffff000`
on both 64-bit and 32-bit systems. This is due to using a signed C int as the return value, as
well as stuffing the errno codes into the last `4096` values. This is noted on the `read` man page.
The limit on Darwin is `0x7fffffff`, trying to read more than that returns EINVAL.
The corresponding POSIX limit is `maxInt(isize)`.

```zig
pub fn read(fd: fd_t, buf: []u8) ReadError!usize {
    if (buf.len == 0) return 0;
    if (native_os == .windows) {
        return windows.ReadFile(fd, buf, null);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        const iovs = [1]iovec{iovec{
            .base = buf.ptr,
            .len = buf.len,
        }};

        var nread: usize = undefined;
        switch (wasi.fd_read(fd, &iovs, iovs.len, &nread)) {
            .SUCCESS => return nread,
            .INTR => unreachable,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .AGAIN => unreachable,
            .BADF => return error.NotOpenForReading, // Can be a race condition.
            .IO => return error.InputOutput,
            .ISDIR => return error.IsDir,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTCONN => return error.SocketNotConnected,
            .CONNRESET => return error.ConnectionResetByPeer,
            .TIMEDOUT => return error.ConnectionTimedOut,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    // Prevents EINVAL.
    const max_count = switch (native_os) {
        .linux => 0x7ffff000,
        .macos, .ios, .watchos, .tvos, .visionos => maxInt(i32),
        else => maxInt(isize),
    };
    while (true) {
        const rc = system.read(fd, buf.ptr, @min(buf.len, max_count));
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .SRCH => return error.ProcessNotFound,
            .AGAIN => return error.WouldBlock,
            .CANCELED => return error.Canceled,
            .BADF => return error.NotOpenForReading, // Can be a race condition.
            .IO => return error.InputOutput,
            .ISDIR => return error.IsDir,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTCONN => return error.SocketNotConnected,
            .CONNRESET => return error.ConnectionResetByPeer,
            .TIMEDOUT => return error.ConnectionTimedOut,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | `[]u8` | – | – |
| Return | [`ReadError!usize`](#error-readerror) | – | – |

</details>

---

### <a id="fn-readv"></a>`readv`

<details class="declaration-card" open>
<summary>Function – Number of bytes read is returned</summary>

Number of bytes read is returned. Upon reading end-of-file, zero is returned.

For POSIX systems, if `fd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.
On Windows, if the application has a global event loop enabled, I/O Completion Ports are
used to perform the I/O. `error.WouldBlock` is not possible on Windows.

This operation is non-atomic on the following systems:
* Windows
On these systems, the read races with concurrent writes to the same file descriptor.

This function assumes that all vectors, including zero-length vectors, have
a pointer within the address space of the application.

```zig
pub fn readv(fd: fd_t, iov: []const iovec) ReadError!usize {
    if (native_os == .windows) {
        // TODO improve this to use ReadFileScatter
        if (iov.len == 0) return 0;
        const first = iov[0];
        return read(fd, first.base[0..first.len]);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        var nread: usize = undefined;
        switch (wasi.fd_read(fd, iov.ptr, iov.len, &nread)) {
            .SUCCESS => return nread,
            .INTR => unreachable,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .AGAIN => unreachable, // currently not support in WASI
            .BADF => return error.NotOpenForReading, // can be a race condition
            .IO => return error.InputOutput,
            .ISDIR => return error.IsDir,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTCONN => return error.SocketNotConnected,
            .CONNRESET => return error.ConnectionResetByPeer,
            .TIMEDOUT => return error.ConnectionTimedOut,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    while (true) {
        const rc = system.readv(fd, iov.ptr, @min(iov.len, IOV_MAX));
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .SRCH => return error.ProcessNotFound,
            .AGAIN => return error.WouldBlock,
            .BADF => return error.NotOpenForReading, // can be a race condition
            .IO => return error.InputOutput,
            .ISDIR => return error.IsDir,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTCONN => return error.SocketNotConnected,
            .CONNRESET => return error.ConnectionResetByPeer,
            .TIMEDOUT => return error.ConnectionTimedOut,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `iov` | `[]const iovec` | – | – |
| Return | [`ReadError!usize`](#error-readerror) | – | – |

</details>

---

### <a id="fn-pread"></a>`pread`

<details class="declaration-card" open>
<summary>Function – Number of bytes read is returned</summary>

Number of bytes read is returned. Upon reading end-of-file, zero is returned.

Retries when interrupted by a signal.

For POSIX systems, if `fd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.
On Windows, if the application has a global event loop enabled, I/O Completion Ports are
used to perform the I/O. `error.WouldBlock` is not possible on Windows.

Linux has a limit on how many bytes may be transferred in one `pread` call, which is `0x7ffff000`
on both 64-bit and 32-bit systems. This is due to using a signed C int as the return value, as
well as stuffing the errno codes into the last `4096` values. This is noted on the `read` man page.
The limit on Darwin is `0x7fffffff`, trying to read more than that returns EINVAL.
The corresponding POSIX limit is `maxInt(isize)`.

```zig
pub fn pread(fd: fd_t, buf: []u8, offset: u64) PReadError!usize {
    if (buf.len == 0) return 0;
    if (native_os == .windows) {
        return windows.ReadFile(fd, buf, offset);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        const iovs = [1]iovec{iovec{
            .base = buf.ptr,
            .len = buf.len,
        }};

        var nread: usize = undefined;
        switch (wasi.fd_pread(fd, &iovs, iovs.len, offset, &nread)) {
            .SUCCESS => return nread,
            .INTR => unreachable,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .AGAIN => unreachable,
            .BADF => return error.NotOpenForReading, // Can be a race condition.
            .IO => return error.InputOutput,
            .ISDIR => return error.IsDir,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTCONN => return error.SocketNotConnected,
            .CONNRESET => return error.ConnectionResetByPeer,
            .TIMEDOUT => return error.ConnectionTimedOut,
            .NXIO => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    // Prevent EINVAL.
    const max_count = switch (native_os) {
        .linux => 0x7ffff000,
        .macos, .ios, .watchos, .tvos, .visionos => maxInt(i32),
        else => maxInt(isize),
    };

    const pread_sym = if (lfs64_abi) system.pread64 else system.pread;
    while (true) {
        const rc = pread_sym(fd, buf.ptr, @min(buf.len, max_count), @bitCast(offset));
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .SRCH => return error.ProcessNotFound,
            .AGAIN => return error.WouldBlock,
            .BADF => return error.NotOpenForReading, // Can be a race condition.
            .IO => return error.InputOutput,
            .ISDIR => return error.IsDir,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTCONN => return error.SocketNotConnected,
            .CONNRESET => return error.ConnectionResetByPeer,
            .TIMEDOUT => return error.ConnectionTimedOut,
            .NXIO => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | `[]u8` | – | – |
| `offset` | `u64` | – | – |
| Return | [`PReadError!usize`](#error-preaderror) | – | – |

</details>

---

### <a id="fn-ftruncate"></a>`ftruncate`

<details class="declaration-card" open>
<summary>Function – Length must be positive when treated as an i64</summary>

Length must be positive when treated as an i64.

```zig
pub fn ftruncate(fd: fd_t, length: u64) TruncateError!void {
    const signed_len: i64 = @bitCast(length);
    if (signed_len < 0) return error.FileTooBig; // avoid ambiguous EINVAL errors

    if (native_os == .windows) {
        var io_status_block: windows.IO_STATUS_BLOCK = undefined;
        var eof_info = windows.FILE_END_OF_FILE_INFORMATION{
            .EndOfFile = signed_len,
        };

        const rc = windows.ntdll.NtSetInformationFile(
            fd,
            &io_status_block,
            &eof_info,
            @sizeOf(windows.FILE_END_OF_FILE_INFORMATION),
            .FileEndOfFileInformation,
        );

        switch (rc) {
            .SUCCESS => return,
            .INVALID_HANDLE => unreachable, // Handle not open for writing
            .ACCESS_DENIED => return error.AccessDenied,
            .USER_MAPPED_FILE => return error.AccessDenied,
            .INVALID_PARAMETER => return error.FileTooBig,
            else => return windows.unexpectedStatus(rc),
        }
    }
    if (native_os == .wasi and !builtin.link_libc) {
        switch (wasi.fd_filestat_set_size(fd, length)) {
            .SUCCESS => return,
            .INTR => unreachable,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .PERM => return error.PermissionDenied,
            .TXTBSY => return error.FileBusy,
            .BADF => unreachable, // Handle not open for writing
            .INVAL => return error.NonResizable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    const ftruncate_sym = if (lfs64_abi) system.ftruncate64 else system.ftruncate;
    while (true) {
        switch (errno(ftruncate_sym(fd, signed_len))) {
            .SUCCESS => return,
            .INTR => continue,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .PERM => return error.PermissionDenied,
            .TXTBSY => return error.FileBusy,
            .BADF => unreachable, // Handle not open for writing
            .INVAL => return error.NonResizable, // This is returned for /dev/null for example.
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `length` | `u64` | – | – |
| Return | [`TruncateError!void`](#error-truncateerror) | – | – |

</details>

---

### <a id="fn-preadv"></a>`preadv`

<details class="declaration-card" open>
<summary>Function – Number of bytes read is returned</summary>

Number of bytes read is returned. Upon reading end-of-file, zero is returned.

Retries when interrupted by a signal.

For POSIX systems, if `fd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.
On Windows, if the application has a global event loop enabled, I/O Completion Ports are
used to perform the I/O. `error.WouldBlock` is not possible on Windows.

This operation is non-atomic on the following systems:
* Darwin
* Windows
On these systems, the read races with concurrent writes to the same file descriptor.

```zig
pub fn preadv(fd: fd_t, iov: []const iovec, offset: u64) PReadError!usize {
    // NOTE: serenity does not have preadv but it *does* have pwritev.
    const have_pread_but_not_preadv = switch (native_os) {
        .windows, .macos, .ios, .watchos, .tvos, .visionos, .haiku, .serenity => true,
        else => false,
    };
    if (have_pread_but_not_preadv) {
        // We could loop here; but proper usage of `preadv` must handle partial reads anyway.
        // So we simply read into the first vector only.
        if (iov.len == 0) return 0;
        const first = iov[0];
        return pread(fd, first.base[0..first.len], offset);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        var nread: usize = undefined;
        switch (wasi.fd_pread(fd, iov.ptr, iov.len, offset, &nread)) {
            .SUCCESS => return nread,
            .INTR => unreachable,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .AGAIN => unreachable,
            .BADF => return error.NotOpenForReading, // can be a race condition
            .IO => return error.InputOutput,
            .ISDIR => return error.IsDir,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTCONN => return error.SocketNotConnected,
            .CONNRESET => return error.ConnectionResetByPeer,
            .TIMEDOUT => return error.ConnectionTimedOut,
            .NXIO => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    const preadv_sym = if (lfs64_abi) system.preadv64 else system.preadv;
    while (true) {
        const rc = preadv_sym(fd, iov.ptr, @min(iov.len, IOV_MAX), @bitCast(offset));
        switch (errno(rc)) {
            .SUCCESS => return @bitCast(rc),
            .INTR => continue,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .SRCH => return error.ProcessNotFound,
            .AGAIN => return error.WouldBlock,
            .BADF => return error.NotOpenForReading, // can be a race condition
            .IO => return error.InputOutput,
            .ISDIR => return error.IsDir,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTCONN => return error.SocketNotConnected,
            .CONNRESET => return error.ConnectionResetByPeer,
            .TIMEDOUT => return error.ConnectionTimedOut,
            .NXIO => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `iov` | `[]const iovec` | – | – |
| `offset` | `u64` | – | – |
| Return | [`PReadError!usize`](#error-preaderror) | – | – |

</details>

---

### <a id="fn-write"></a>`write`

<details class="declaration-card" open>
<summary>Function – Write to a file descriptor</summary>

Write to a file descriptor.
Retries when interrupted by a signal.
Returns the number of bytes written. If nonzero bytes were supplied, this will be nonzero.

Note that a successful write() may transfer fewer than count bytes.  Such partial  writes  can
occur  for  various reasons; for example, because there was insufficient space on the disk
device to write all of the requested bytes, or because a blocked write() to a socket,  pipe,  or
similar  was  interrupted by a signal handler after it had transferred some, but before it had
transferred all of the requested bytes.  In the event of a partial write, the caller can  make
another  write() call to transfer the remaining bytes.  The subsequent call will either
transfer further bytes or may result in an error (e.g., if the disk is now full).

For POSIX systems, if `fd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.
On Windows, if the application has a global event loop enabled, I/O Completion Ports are
used to perform the I/O. `error.WouldBlock` is not possible on Windows.

Linux has a limit on how many bytes may be transferred in one `write` call, which is `0x7ffff000`
on both 64-bit and 32-bit systems. This is due to using a signed C int as the return value, as
well as stuffing the errno codes into the last `4096` values. This is noted on the `write` man page.
The limit on Darwin is `0x7fffffff`, trying to read more than that returns EINVAL.
The corresponding POSIX limit is `maxInt(isize)`.

```zig
pub fn write(fd: fd_t, bytes: []const u8) WriteError!usize {
    if (bytes.len == 0) return 0;
    if (native_os == .windows) {
        return windows.WriteFile(fd, bytes, null);
    }

    if (native_os == .wasi and !builtin.link_libc) {
        const ciovs = [_]iovec_const{iovec_const{
            .base = bytes.ptr,
            .len = bytes.len,
        }};
        var nwritten: usize = undefined;
        switch (wasi.fd_write(fd, &ciovs, ciovs.len, &nwritten)) {
            .SUCCESS => return nwritten,
            .INTR => unreachable,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .AGAIN => unreachable,
            .BADF => return error.NotOpenForWriting, // can be a race condition.
            .DESTADDRREQ => unreachable, // `connect` was never called.
            .DQUOT => return error.DiskQuota,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .NOSPC => return error.NoSpaceLeft,
            .PERM => return error.PermissionDenied,
            .PIPE => return error.BrokenPipe,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    const max_count = switch (native_os) {
        .linux => 0x7ffff000,
        .macos, .ios, .watchos, .tvos, .visionos => maxInt(i32),
        else => maxInt(isize),
    };
    while (true) {
        const rc = system.write(fd, bytes.ptr, @min(bytes.len, max_count));
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .INVAL => return error.InvalidArgument,
            .FAULT => unreachable,
            .SRCH => return error.ProcessNotFound,
            .AGAIN => return error.WouldBlock,
            .BADF => return error.NotOpenForWriting, // can be a race condition.
            .DESTADDRREQ => unreachable, // `connect` was never called.
            .DQUOT => return error.DiskQuota,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .NOSPC => return error.NoSpaceLeft,
            .ACCES => return error.AccessDenied,
            .PERM => return error.PermissionDenied,
            .PIPE => return error.BrokenPipe,
            .CONNRESET => return error.ConnectionResetByPeer,
            .BUSY => return error.DeviceBusy,
            .NXIO => return error.NoDevice,
            .MSGSIZE => return error.MessageTooBig,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `bytes` | `[]const u8` | – | – |
| Return | [`WriteError!usize`](#error-writeerror) | – | – |

</details>

---

### <a id="fn-writev"></a>`writev`

<details class="declaration-card" open>
<summary>Function – Write multiple buffers to a file descriptor</summary>

Write multiple buffers to a file descriptor.
Retries when interrupted by a signal.
Returns the number of bytes written. If nonzero bytes were supplied, this will be nonzero.

Note that a successful write() may transfer fewer bytes than supplied.  Such partial  writes  can
occur  for  various reasons; for example, because there was insufficient space on the disk
device to write all of the requested bytes, or because a blocked write() to a socket,  pipe,  or
similar  was  interrupted by a signal handler after it had transferred some, but before it had
transferred all of the requested bytes.  In the event of a partial write, the caller can  make
another  write() call to transfer the remaining bytes.  The subsequent call will either
transfer further bytes or may result in an error (e.g., if the disk is now full).

For POSIX systems, if `fd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.
On Windows, if the application has a global event loop enabled, I/O Completion Ports are
used to perform the I/O. `error.WouldBlock` is not possible on Windows.

If `iov.len` is larger than `IOV_MAX`, a partial write will occur.

This function assumes that all vectors, including zero-length vectors, have
a pointer within the address space of the application.

```zig
pub fn writev(fd: fd_t, iov: []const iovec_const) WriteError!usize {
    if (native_os == .windows) {
        // TODO improve this to use WriteFileScatter
        if (iov.len == 0) return 0;
        const first = iov[0];
        return write(fd, first.base[0..first.len]);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        var nwritten: usize = undefined;
        switch (wasi.fd_write(fd, iov.ptr, iov.len, &nwritten)) {
            .SUCCESS => return nwritten,
            .INTR => unreachable,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .AGAIN => unreachable,
            .BADF => return error.NotOpenForWriting, // can be a race condition.
            .DESTADDRREQ => unreachable, // `connect` was never called.
            .DQUOT => return error.DiskQuota,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .NOSPC => return error.NoSpaceLeft,
            .PERM => return error.PermissionDenied,
            .PIPE => return error.BrokenPipe,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    while (true) {
        const rc = system.writev(fd, iov.ptr, @min(iov.len, IOV_MAX));
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .INVAL => return error.InvalidArgument,
            .FAULT => unreachable,
            .SRCH => return error.ProcessNotFound,
            .AGAIN => return error.WouldBlock,
            .BADF => return error.NotOpenForWriting, // Can be a race condition.
            .DESTADDRREQ => unreachable, // `connect` was never called.
            .DQUOT => return error.DiskQuota,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .NOSPC => return error.NoSpaceLeft,
            .PERM => return error.PermissionDenied,
            .PIPE => return error.BrokenPipe,
            .CONNRESET => return error.ConnectionResetByPeer,
            .BUSY => return error.DeviceBusy,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `iov` | `[]const iovec_const` | – | – |
| Return | [`WriteError!usize`](#error-writeerror) | – | – |

</details>

---

### <a id="fn-pwrite"></a>`pwrite`

<details class="declaration-card" open>
<summary>Function – Write to a file descriptor, with a position offset</summary>

Write to a file descriptor, with a position offset.
Retries when interrupted by a signal.
Returns the number of bytes written. If nonzero bytes were supplied, this will be nonzero.

Note that a successful write() may transfer fewer bytes than supplied.  Such partial  writes  can
occur  for  various reasons; for example, because there was insufficient space on the disk
device to write all of the requested bytes, or because a blocked write() to a socket,  pipe,  or
similar  was  interrupted by a signal handler after it had transferred some, but before it had
transferred all of the requested bytes.  In the event of a partial write, the caller can  make
another  write() call to transfer the remaining bytes.  The subsequent call will either
transfer further bytes or may result in an error (e.g., if the disk is now full).

For POSIX systems, if `fd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.
On Windows, if the application has a global event loop enabled, I/O Completion Ports are
used to perform the I/O. `error.WouldBlock` is not possible on Windows.

Linux has a limit on how many bytes may be transferred in one `pwrite` call, which is `0x7ffff000`
on both 64-bit and 32-bit systems. This is due to using a signed C int as the return value, as
well as stuffing the errno codes into the last `4096` values. This is noted on the `write` man page.
The limit on Darwin is `0x7fffffff`, trying to write more than that returns EINVAL.
The corresponding POSIX limit is `maxInt(isize)`.

```zig
pub fn pwrite(fd: fd_t, bytes: []const u8, offset: u64) PWriteError!usize {
    if (bytes.len == 0) return 0;
    if (native_os == .windows) {
        return windows.WriteFile(fd, bytes, offset);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        const ciovs = [1]iovec_const{iovec_const{
            .base = bytes.ptr,
            .len = bytes.len,
        }};

        var nwritten: usize = undefined;
        switch (wasi.fd_pwrite(fd, &ciovs, ciovs.len, offset, &nwritten)) {
            .SUCCESS => return nwritten,
            .INTR => unreachable,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .AGAIN => unreachable,
            .BADF => return error.NotOpenForWriting, // can be a race condition.
            .DESTADDRREQ => unreachable, // `connect` was never called.
            .DQUOT => return error.DiskQuota,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .NOSPC => return error.NoSpaceLeft,
            .PERM => return error.PermissionDenied,
            .PIPE => return error.BrokenPipe,
            .NXIO => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    // Prevent EINVAL.
    const max_count = switch (native_os) {
        .linux => 0x7ffff000,
        .macos, .ios, .watchos, .tvos, .visionos => maxInt(i32),
        else => maxInt(isize),
    };

    const pwrite_sym = if (lfs64_abi) system.pwrite64 else system.pwrite;
    while (true) {
        const rc = pwrite_sym(fd, bytes.ptr, @min(bytes.len, max_count), @bitCast(offset));
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .INVAL => return error.InvalidArgument,
            .FAULT => unreachable,
            .SRCH => return error.ProcessNotFound,
            .AGAIN => return error.WouldBlock,
            .BADF => return error.NotOpenForWriting, // Can be a race condition.
            .DESTADDRREQ => unreachable, // `connect` was never called.
            .DQUOT => return error.DiskQuota,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .NOSPC => return error.NoSpaceLeft,
            .PERM => return error.PermissionDenied,
            .PIPE => return error.BrokenPipe,
            .NXIO => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .BUSY => return error.DeviceBusy,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `bytes` | `[]const u8` | – | – |
| `offset` | `u64` | – | – |
| Return | [`PWriteError!usize`](#error-pwriteerror) | – | – |

</details>

---

### <a id="fn-pwritev"></a>`pwritev`

<details class="declaration-card" open>
<summary>Function – Write multiple buffers to a file descriptor, with a position offset</summary>

Write multiple buffers to a file descriptor, with a position offset.
Retries when interrupted by a signal.
Returns the number of bytes written. If nonzero bytes were supplied, this will be nonzero.

Note that a successful write() may transfer fewer than count bytes.  Such partial  writes  can
occur  for  various reasons; for example, because there was insufficient space on the disk
device to write all of the requested bytes, or because a blocked write() to a socket,  pipe,  or
similar  was  interrupted by a signal handler after it had transferred some, but before it had
transferred all of the requested bytes.  In the event of a partial write, the caller can  make
another  write() call to transfer the remaining bytes.  The subsequent call will either
transfer further bytes or may result in an error (e.g., if the disk is now full).

If `fd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.

The following systems do not have this syscall, and will return partial writes if more than one
vector is provided:
* Darwin
* Windows

If `iov.len` is larger than `IOV_MAX`, a partial write will occur.

```zig
pub fn pwritev(fd: fd_t, iov: []const iovec_const, offset: u64) PWriteError!usize {
    const have_pwrite_but_not_pwritev = switch (native_os) {
        .windows, .macos, .ios, .watchos, .tvos, .visionos, .haiku => true,
        else => false,
    };

    if (have_pwrite_but_not_pwritev) {
        // We could loop here; but proper usage of `pwritev` must handle partial writes anyway.
        // So we simply write the first vector only.
        if (iov.len == 0) return 0;
        const first = iov[0];
        return pwrite(fd, first.base[0..first.len], offset);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        var nwritten: usize = undefined;
        switch (wasi.fd_pwrite(fd, iov.ptr, iov.len, offset, &nwritten)) {
            .SUCCESS => return nwritten,
            .INTR => unreachable,
            .INVAL => unreachable,
            .FAULT => unreachable,
            .AGAIN => unreachable,
            .BADF => return error.NotOpenForWriting, // Can be a race condition.
            .DESTADDRREQ => unreachable, // `connect` was never called.
            .DQUOT => return error.DiskQuota,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .NOSPC => return error.NoSpaceLeft,
            .PERM => return error.PermissionDenied,
            .PIPE => return error.BrokenPipe,
            .NXIO => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    const pwritev_sym = if (lfs64_abi) system.pwritev64 else system.pwritev;
    while (true) {
        const rc = pwritev_sym(fd, iov.ptr, @min(iov.len, IOV_MAX), @bitCast(offset));
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .INVAL => return error.InvalidArgument,
            .FAULT => unreachable,
            .SRCH => return error.ProcessNotFound,
            .AGAIN => return error.WouldBlock,
            .BADF => return error.NotOpenForWriting, // Can be a race condition.
            .DESTADDRREQ => unreachable, // `connect` was never called.
            .DQUOT => return error.DiskQuota,
            .FBIG => return error.FileTooBig,
            .IO => return error.InputOutput,
            .NOSPC => return error.NoSpaceLeft,
            .PERM => return error.PermissionDenied,
            .PIPE => return error.BrokenPipe,
            .NXIO => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .BUSY => return error.DeviceBusy,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `iov` | `[]const iovec_const` | – | – |
| `offset` | `u64` | – | – |
| Return | [`PWriteError!usize`](#error-pwriteerror) | – | – |

</details>

---

### <a id="fn-open"></a>`open`

<details class="declaration-card" open>
<summary>Function – Open and possibly create a file</summary>

Open and possibly create a file. Keeps trying if it gets interrupted.
On Windows, `file_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `file_path` should be encoded as valid UTF-8.
On other platforms, `file_path` is an opaque sequence of bytes with no particular encoding.
See also `openZ`.

```zig
pub fn open(file_path: []const u8, flags: O, perm: mode_t) OpenError!fd_t {
    if (native_os == .windows) {
        @compileError("Windows does not support POSIX; use Windows-specific API or cross-platform std.fs API");
    } else if (native_os == .wasi and !builtin.link_libc) {
        return openat(AT.FDCWD, file_path, flags, perm);
    }
    const file_path_c = try toPosixPath(file_path);
    return openZ(&file_path_c, flags, perm);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path` | `[]const u8` | – | – |
| `flags` | `O` | – | – |
| `perm` | `mode_t` | – | – |
| Return | [`OpenError!fd_t`](#error-openerror) | – | – |

</details>

---

### <a id="fn-openz"></a>`openZ`

<details class="declaration-card" open>
<summary>Function – Open and possibly create a file</summary>

Open and possibly create a file. Keeps trying if it gets interrupted.
On Windows, `file_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `file_path` should be encoded as valid UTF-8.
On other platforms, `file_path` is an opaque sequence of bytes with no particular encoding.
See also `open`.

```zig
pub fn openZ(file_path: [*:0]const u8, flags: O, perm: mode_t) OpenError!fd_t {
    if (native_os == .windows) {
        @compileError("Windows does not support POSIX; use Windows-specific API or cross-platform std.fs API");
    } else if (native_os == .wasi and !builtin.link_libc) {
        return open(mem.sliceTo(file_path, 0), flags, perm);
    }

    const open_sym = if (lfs64_abi) system.open64 else system.open;
    while (true) {
        const rc = open_sym(file_path, flags, perm);
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,

            .FAULT => unreachable,
            .INVAL => return error.BadPathName,
            .ACCES => return error.AccessDenied,
            .FBIG => return error.FileTooBig,
            .OVERFLOW => return error.FileTooBig,
            .ISDIR => return error.IsDir,
            .LOOP => return error.SymLinkLoop,
            .MFILE => return error.ProcessFdQuotaExceeded,
            .NAMETOOLONG => return error.NameTooLong,
            .NFILE => return error.SystemFdQuotaExceeded,
            .NODEV => return error.NoDevice,
            .NOENT => return error.FileNotFound,
            .SRCH => return error.ProcessNotFound,
            .NOMEM => return error.SystemResources,
            .NOSPC => return error.NoSpaceLeft,
            .NOTDIR => return error.NotDir,
            .PERM => return error.PermissionDenied,
            .EXIST => return error.PathAlreadyExists,
            .BUSY => return error.DeviceBusy,
            .ILSEQ => |err| if (native_os == .wasi)
                return error.InvalidUtf8
            else
                return unexpectedErrno(err),
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path` | `[*:0]const u8` | – | – |
| `flags` | `O` | – | – |
| `perm` | `mode_t` | – | – |
| Return | [`OpenError!fd_t`](#error-openerror) | – | – |

</details>

---

### <a id="fn-openat"></a>`openat`

<details class="declaration-card" open>
<summary>Function – Open and possibly create a file</summary>

Open and possibly create a file. Keeps trying if it gets interrupted.
`file_path` is relative to the open directory handle `dir_fd`.
On Windows, `file_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `file_path` should be encoded as valid UTF-8.
On other platforms, `file_path` is an opaque sequence of bytes with no particular encoding.
See also `openatZ`.

```zig
pub fn openat(dir_fd: fd_t, file_path: []const u8, flags: O, mode: mode_t) OpenError!fd_t {
    if (native_os == .windows) {
        @compileError("Windows does not support POSIX; use Windows-specific API or cross-platform std.fs API");
    } else if (native_os == .wasi and !builtin.link_libc) {
        // `mode` is ignored on WASI, which does not support unix-style file permissions
        const opts = try openOptionsFromFlagsWasi(flags);
        const fd = try openatWasi(
            dir_fd,
            file_path,
            opts.lookup_flags,
            opts.oflags,
            opts.fs_flags,
            opts.fs_rights_base,
            opts.fs_rights_inheriting,
        );
        errdefer close(fd);

        if (flags.write) {
            const info = try std.os.fstat_wasi(fd);
            if (info.filetype == .DIRECTORY)
                return error.IsDir;
        }

        return fd;
    }
    const file_path_c = try toPosixPath(file_path);
    return openatZ(dir_fd, &file_path_c, flags, mode);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_fd` | `fd_t` | – | – |
| `file\_path` | `[]const u8` | – | – |
| `flags` | `O` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`OpenError!fd_t`](#error-openerror) | – | – |

</details>

---

### <a id="fn-openatwasi"></a>`openatWasi`

<details class="declaration-card" open>
<summary>Function – Open and possibly create a file in WASI</summary>

Open and possibly create a file in WASI.

```zig
pub fn openatWasi(
    dir_fd: fd_t,
    file_path: []const u8,
    lookup_flags: wasi.lookupflags_t,
    oflags: wasi.oflags_t,
    fdflags: wasi.fdflags_t,
    base: wasi.rights_t,
    inheriting: wasi.rights_t,
) OpenError!fd_t {
    while (true) {
        var fd: fd_t = undefined;
        switch (wasi.path_open(dir_fd, lookup_flags, file_path.ptr, file_path.len, oflags, base, inheriting, fdflags, &fd)) {
            .SUCCESS => return fd,
            .INTR => continue,

            .FAULT => unreachable,
            // Provides INVAL with a linux host on a bad path name, but NOENT on Windows
            .INVAL => return error.BadPathName,
            .BADF => unreachable,
            .ACCES => return error.AccessDenied,
            .FBIG => return error.FileTooBig,
            .OVERFLOW => return error.FileTooBig,
            .ISDIR => return error.IsDir,
            .LOOP => return error.SymLinkLoop,
            .MFILE => return error.ProcessFdQuotaExceeded,
            .NAMETOOLONG => return error.NameTooLong,
            .NFILE => return error.SystemFdQuotaExceeded,
            .NODEV => return error.NoDevice,
            .NOENT => return error.FileNotFound,
            .NOMEM => return error.SystemResources,
            .NOSPC => return error.NoSpaceLeft,
            .NOTDIR => return error.NotDir,
            .PERM => return error.PermissionDenied,
            .EXIST => return error.PathAlreadyExists,
            .BUSY => return error.DeviceBusy,
            .NOTCAPABLE => return error.AccessDenied,
            .ILSEQ => return error.InvalidUtf8,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_fd` | `fd_t` | – | – |
| `file\_path` | `[]const u8` | – | – |
| `lookup\_flags` | `wasi.lookupflags_t` | – | – |
| `oflags` | `wasi.oflags_t` | – | – |
| `fdflags` | `wasi.fdflags_t` | – | – |
| `base` | `wasi.rights_t` | – | – |
| `inheriting` | `wasi.rights_t` | – | – |
| Return | [`OpenError!fd_t`](#error-openerror) | – | – |

</details>

---

### <a id="fn-openatz"></a>`openatZ`

<details class="declaration-card" open>
<summary>Function – Open and possibly create a file</summary>

Open and possibly create a file. Keeps trying if it gets interrupted.
`file_path` is relative to the open directory handle `dir_fd`.
On Windows, `file_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `file_path` should be encoded as valid UTF-8.
On other platforms, `file_path` is an opaque sequence of bytes with no particular encoding.
See also `openat`.

```zig
pub fn openatZ(dir_fd: fd_t, file_path: [*:0]const u8, flags: O, mode: mode_t) OpenError!fd_t {
    if (native_os == .windows) {
        @compileError("Windows does not support POSIX; use Windows-specific API or cross-platform std.fs API");
    } else if (native_os == .wasi and !builtin.link_libc) {
        return openat(dir_fd, mem.sliceTo(file_path, 0), flags, mode);
    }

    const openat_sym = if (lfs64_abi) system.openat64 else system.openat;
    while (true) {
        const rc = openat_sym(dir_fd, file_path, flags, mode);
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,

            .FAULT => unreachable,
            .INVAL => return error.BadPathName,
            .BADF => unreachable,
            .ACCES => return error.AccessDenied,
            .FBIG => return error.FileTooBig,
            .OVERFLOW => return error.FileTooBig,
            .ISDIR => return error.IsDir,
            .LOOP => return error.SymLinkLoop,
            .MFILE => return error.ProcessFdQuotaExceeded,
            .NAMETOOLONG => return error.NameTooLong,
            .NFILE => return error.SystemFdQuotaExceeded,
            .NODEV => return error.NoDevice,
            .NOENT => return error.FileNotFound,
            .SRCH => return error.ProcessNotFound,
            .NOMEM => return error.SystemResources,
            .NOSPC => return error.NoSpaceLeft,
            .NOTDIR => return error.NotDir,
            .PERM => return error.PermissionDenied,
            .EXIST => return error.PathAlreadyExists,
            .BUSY => return error.DeviceBusy,
            .OPNOTSUPP => return error.FileLocksNotSupported,
            .AGAIN => return error.WouldBlock,
            .TXTBSY => return error.FileBusy,
            .NXIO => return error.NoDevice,
            .ILSEQ => |err| if (native_os == .wasi)
                return error.InvalidUtf8
            else
                return unexpectedErrno(err),
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_fd` | `fd_t` | – | – |
| `file\_path` | `[*:0]const u8` | – | – |
| `flags` | `O` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`OpenError!fd_t`](#error-openerror) | – | – |

</details>

---

### <a id="fn-dup"></a>`dup`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn dup(old_fd: fd_t) !fd_t {
    const rc = system.dup(old_fd);
    return switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .MFILE => error.ProcessFdQuotaExceeded,
        .BADF => unreachable, // invalid file descriptor
        else => |err| return unexpectedErrno(err),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_fd` | `fd_t` | – | – |
| Return | `fd_t` | – | – |

</details>

---

### <a id="fn-dup2"></a>`dup2`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn dup2(old_fd: fd_t, new_fd: fd_t) !void {
    while (true) {
        switch (errno(system.dup2(old_fd, new_fd))) {
            .SUCCESS => return,
            .BUSY, .INTR => continue,
            .MFILE => return error.ProcessFdQuotaExceeded,
            .INVAL => unreachable, // invalid parameters passed to dup2
            .BADF => unreachable, // invalid file descriptor
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_fd` | `fd_t` | – | – |
| `new\_fd` | `fd_t` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-execvez"></a>`execveZ`

<details class="declaration-card" open>
<summary>Function – This function ignores PATH environment variable</summary>

This function ignores PATH environment variable. See `execvpeZ` for that.

```zig
pub fn execveZ(
    path: [*:0]const u8,
    child_argv: [*:null]const ?[*:0]const u8,
    envp: [*:null]const ?[*:0]const u8,
) ExecveError {
    switch (errno(system.execve(path, child_argv, envp))) {
        .SUCCESS => unreachable,
        .FAULT => unreachable,
        .@"2BIG" => return error.SystemResources,
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NAMETOOLONG => return error.NameTooLong,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NOMEM => return error.SystemResources,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .INVAL => return error.InvalidExe,
        .NOEXEC => return error.InvalidExe,
        .IO => return error.FileSystem,
        .LOOP => return error.FileSystem,
        .ISDIR => return error.IsDir,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .TXTBSY => return error.FileBusy,
        else => |err| switch (native_os) {
            .macos, .ios, .tvos, .watchos, .visionos => switch (err) {
                .BADEXEC => return error.InvalidExe,
                .BADARCH => return error.InvalidExe,
                else => return unexpectedErrno(err),
            },
            .linux => switch (err) {
                .LIBBAD => return error.InvalidExe,
                else => return unexpectedErrno(err),
            },
            else => return unexpectedErrno(err),
        },
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `child\_argv` | `[*:null]const ?[*:0]const u8` | – | – |
| `envp` | `[*:null]const ?[*:0]const u8` | – | – |
| Return | [`ExecveError`](#error-execveerror) | – | – |

</details>

---

### <a id="fn-execvpez-expandarg0"></a>`execvpeZ_expandArg0`

<details class="declaration-card" open>
<summary>Function – Like `execvpeZ` except if `arg0_expand` is `</summary>

Like `execvpeZ` except if `arg0_expand` is `.expand`, then `argv` is mutable,
and `argv[0]` is expanded to be the same absolute path that is passed to the execve syscall.
If this function returns with an error, `argv[0]` will be restored to the value it was when it was passed in.

```zig
pub fn execvpeZ_expandArg0(
    comptime arg0_expand: Arg0Expand,
    file: [*:0]const u8,
    child_argv: switch (arg0_expand) {
        .expand => [*:null]?[*:0]const u8,
        .no_expand => [*:null]const ?[*:0]const u8,
    },
    envp: [*:null]const ?[*:0]const u8,
) ExecveError {
    const file_slice = mem.sliceTo(file, 0);
    if (mem.indexOfScalar(u8, file_slice, '/') != null) return execveZ(file, child_argv, envp);

    const PATH = getenvZ("PATH") orelse "/usr/local/bin:/bin/:/usr/bin";
    // Use of PATH_MAX here is valid as the path_buf will be passed
    // directly to the operating system in execveZ.
    var path_buf: [PATH_MAX]u8 = undefined;
    var it = mem.tokenizeScalar(u8, PATH, ':');
    var seen_eacces = false;
    var err: ExecveError = error.FileNotFound;

    // In case of expanding arg0 we must put it back if we return with an error.
    const prev_arg0 = child_argv[0];
    defer switch (arg0_expand) {
        .expand => child_argv[0] = prev_arg0,
        .no_expand => {},
    };

    while (it.next()) |search_path| {
        const path_len = search_path.len + file_slice.len + 1;
        if (path_buf.len < path_len + 1) return error.NameTooLong;
        @memcpy(path_buf[0..search_path.len], search_path);
        path_buf[search_path.len] = '/';
        @memcpy(path_buf[search_path.len + 1 ..][0..file_slice.len], file_slice);
        path_buf[path_len] = 0;
        const full_path = path_buf[0..path_len :0].ptr;
        switch (arg0_expand) {
            .expand => child_argv[0] = full_path,
            .no_expand => {},
        }
        err = execveZ(full_path, child_argv, envp);
        switch (err) {
            error.AccessDenied => seen_eacces = true,
            error.FileNotFound, error.NotDir => {},
            else => |e| return e,
        }
    }
    if (seen_eacces) return error.AccessDenied;
    return err;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `arg0\_expand` | [`Arg0Expand`](#type-arg0expand) | – | – |
| `file` | `[*:0]const u8` | – | – |
| `child\_argv` | See note[^fn-execvpez-expandarg0-child-argv-type-0] | – | – |
| `envp` | `[*:null]const ?[*:0]const u8` | – | – |
| Return | [`ExecveError`](#error-execveerror) | – | – |


[^fn-execvpez-expandarg0-child-argv-type-0]:
    Type for parameter `child_argv` of `execvpeZ_expandArg0`:

    ```zig
    switch (arg0_expand) {
            .expand => [*:null]?[*:0]const u8,
            .no_expand => [*:null]const ?[*:0]const u8,
        }
    ```

</details>

---

### <a id="fn-execvpez"></a>`execvpeZ`

<details class="declaration-card" open>
<summary>Function – This function also uses the PATH environment variable to get the full path to the executable</summary>

This function also uses the PATH environment variable to get the full path to the executable.
If `file` is an absolute path, this is the same as `execveZ`.

```zig
pub fn execvpeZ(
    file: [*:0]const u8,
    argv_ptr: [*:null]const ?[*:0]const u8,
    envp: [*:null]const ?[*:0]const u8,
) ExecveError {
    return execvpeZ_expandArg0(.no_expand, file, argv_ptr, envp);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file` | `[*:0]const u8` | – | – |
| `argv\_ptr` | `[*:null]const ?[*:0]const u8` | – | – |
| `envp` | `[*:null]const ?[*:0]const u8` | – | – |
| Return | [`ExecveError`](#error-execveerror) | – | – |

</details>

---

### <a id="fn-getenv"></a>`getenv`

<details class="declaration-card" open>
<summary>Function – Get an environment variable</summary>

Get an environment variable.
See also `getenvZ`.

```zig
pub fn getenv(key: []const u8) ?[:0]const u8 {
    if (native_os == .windows) {
        @compileError("std.posix.getenv is unavailable for Windows because environment strings are in WTF-16 format. See std.process.getEnvVarOwned for a cross-platform API or std.process.getenvW for a Windows-specific API.");
    }
    if (mem.indexOfScalar(u8, key, '=') != null) {
        return null;
    }
    if (builtin.link_libc) {
        var ptr = std.c.environ;
        while (ptr[0]) |line| : (ptr += 1) {
            var line_i: usize = 0;
            while (line[line_i] != 0) : (line_i += 1) {
                if (line_i == key.len) break;
                if (line[line_i] != key[line_i]) break;
            }
            if ((line_i != key.len) or (line[line_i] != '=')) continue;

            return mem.sliceTo(line + line_i + 1, 0);
        }
        return null;
    }
    if (native_os == .wasi) {
        @compileError("std.posix.getenv is unavailable for WASI. See std.process.getEnvMap or std.process.getEnvVarOwned for a cross-platform API.");
    }
    // The simplified start logic doesn't populate environ.
    if (std.start.simplified_logic) return null;
    // TODO see https://github.com/ziglang/zig/issues/4524
    for (std.os.environ) |ptr| {
        var line_i: usize = 0;
        while (ptr[line_i] != 0) : (line_i += 1) {
            if (line_i == key.len) break;
            if (ptr[line_i] != key[line_i]) break;
        }
        if ((line_i != key.len) or (ptr[line_i] != '=')) continue;

        return mem.sliceTo(ptr + line_i + 1, 0);
    }
    return null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `key` | `[]const u8` | – | – |
| Return | `?[:0]const u8` | – | – |

</details>

---

### <a id="fn-getenvz"></a>`getenvZ`

<details class="declaration-card" open>
<summary>Function – Get an environment variable with a null-terminated name</summary>

Get an environment variable with a null-terminated name.
See also `getenv`.

```zig
pub fn getenvZ(key: [*:0]const u8) ?[:0]const u8 {
    if (builtin.link_libc) {
        const value = system.getenv(key) orelse return null;
        return mem.sliceTo(value, 0);
    }
    if (native_os == .windows) {
        @compileError("std.posix.getenvZ is unavailable for Windows because environment string is in WTF-16 format. See std.process.getEnvVarOwned for cross-platform API or std.process.getenvW for Windows-specific API.");
    }
    return getenv(mem.sliceTo(key, 0));
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `key` | `[*:0]const u8` | – | – |
| Return | `?[:0]const u8` | – | – |

</details>

---

### <a id="fn-getcwd"></a>`getcwd`

<details class="declaration-card" open>
<summary>Function – The result is a slice of out_buffer, indexed from 0</summary>

The result is a slice of out_buffer, indexed from 0.

```zig
pub fn getcwd(out_buffer: []u8) GetCwdError![]u8 {
    if (native_os == .windows) {
        return windows.GetCurrentDirectory(out_buffer);
    } else if (native_os == .wasi and !builtin.link_libc) {
        const path = ".";
        if (out_buffer.len < path.len) return error.NameTooLong;
        const result = out_buffer[0..path.len];
        @memcpy(result, path);
        return result;
    }

    const err: E = if (builtin.link_libc) err: {
        const c_err = if (std.c.getcwd(out_buffer.ptr, out_buffer.len)) |_| 0 else std.c._errno().*;
        break :err @enumFromInt(c_err);
    } else err: {
        break :err errno(system.getcwd(out_buffer.ptr, out_buffer.len));
    };
    switch (err) {
        .SUCCESS => return mem.sliceTo(out_buffer, 0),
        .FAULT => unreachable,
        .INVAL => unreachable,
        .NOENT => return error.CurrentWorkingDirectoryUnlinked,
        .RANGE => return error.NameTooLong,
        else => return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `out\_buffer` | `[]u8` | – | – |
| Return | [`GetCwdError![]u8`](#error-getcwderror) | – | – |

</details>

---

### <a id="fn-symlink"></a>`symlink`

<details class="declaration-card" open>
<summary>Function – Creates a symbolic link named `sym_link_path` which contains the string `target_path`</summary>

Creates a symbolic link named `sym_link_path` which contains the string `target_path`.
A symbolic link (also known as a soft link) may point to an existing file or to a nonexistent
one; the latter case is known as a dangling link.
On Windows, both paths should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.
If `sym_link_path` exists, it will not be overwritten.
See also `symlinkZ.

```zig
pub fn symlink(target_path: []const u8, sym_link_path: []const u8) SymLinkError!void {
    if (native_os == .windows) {
        @compileError("symlink is not supported on Windows; use std.os.windows.CreateSymbolicLink instead");
    } else if (native_os == .wasi and !builtin.link_libc) {
        return symlinkat(target_path, AT.FDCWD, sym_link_path);
    }
    const target_path_c = try toPosixPath(target_path);
    const sym_link_path_c = try toPosixPath(sym_link_path);
    return symlinkZ(&target_path_c, &sym_link_path_c);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_path` | `[]const u8` | – | – |
| `sym\_link\_path` | `[]const u8` | – | – |
| Return | [`SymLinkError!void`](#error-symlinkerror) | – | – |

</details>

---

### <a id="fn-symlinkz"></a>`symlinkZ`

<details class="declaration-card" open>
<summary>Function – This is the same as `symlink` except the parameters are null-terminated pointers</summary>

This is the same as `symlink` except the parameters are null-terminated pointers.
See also `symlink`.

```zig
pub fn symlinkZ(target_path: [*:0]const u8, sym_link_path: [*:0]const u8) SymLinkError!void {
    if (native_os == .windows) {
        @compileError("symlink is not supported on Windows; use std.os.windows.CreateSymbolicLink instead");
    } else if (native_os == .wasi and !builtin.link_libc) {
        return symlinkatZ(target_path, fs.cwd().fd, sym_link_path);
    }
    switch (errno(system.symlink(target_path, sym_link_path))) {
        .SUCCESS => return,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .DQUOT => return error.DiskQuota,
        .EXIST => return error.PathAlreadyExists,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .ROFS => return error.ReadOnlyFileSystem,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_path` | `[*:0]const u8` | – | – |
| `sym\_link\_path` | `[*:0]const u8` | – | – |
| Return | [`SymLinkError!void`](#error-symlinkerror) | – | – |

</details>

---

### <a id="fn-symlinkat"></a>`symlinkat`

<details class="declaration-card" open>
<summary>Function – Similar to `symlink`, however, creates a symbolic link named `sym_link_path` which contains the string</summary>

Similar to `symlink`, however, creates a symbolic link named `sym_link_path` which contains the string
`target_path` **relative** to `newdirfd` directory handle.
A symbolic link (also known as a soft link) may point to an existing file or to a nonexistent
one; the latter case is known as a dangling link.
On Windows, both paths should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.
If `sym_link_path` exists, it will not be overwritten.
See also `symlinkatWasi`, `symlinkatZ` and `symlinkatW`.

```zig
pub fn symlinkat(target_path: []const u8, newdirfd: fd_t, sym_link_path: []const u8) SymLinkError!void {
    if (native_os == .windows) {
        @compileError("symlinkat is not supported on Windows; use std.os.windows.CreateSymbolicLink instead");
    } else if (native_os == .wasi and !builtin.link_libc) {
        return symlinkatWasi(target_path, newdirfd, sym_link_path);
    }
    const target_path_c = try toPosixPath(target_path);
    const sym_link_path_c = try toPosixPath(sym_link_path);
    return symlinkatZ(&target_path_c, newdirfd, &sym_link_path_c);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_path` | `[]const u8` | – | – |
| `newdirfd` | `fd_t` | – | – |
| `sym\_link\_path` | `[]const u8` | – | – |
| Return | [`SymLinkError!void`](#error-symlinkerror) | – | – |

</details>

---

### <a id="fn-symlinkatwasi"></a>`symlinkatWasi`

<details class="declaration-card" open>
<summary>Function – WASI-only</summary>

WASI-only. The same as `symlinkat` but targeting WASI.
See also `symlinkat`.

```zig
pub fn symlinkatWasi(target_path: []const u8, newdirfd: fd_t, sym_link_path: []const u8) SymLinkError!void {
    switch (wasi.path_symlink(target_path.ptr, target_path.len, newdirfd, sym_link_path.ptr, sym_link_path.len)) {
        .SUCCESS => {},
        .FAULT => unreachable,
        .INVAL => unreachable,
        .BADF => unreachable,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .DQUOT => return error.DiskQuota,
        .EXIST => return error.PathAlreadyExists,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .ROFS => return error.ReadOnlyFileSystem,
        .NOTCAPABLE => return error.AccessDenied,
        .ILSEQ => return error.InvalidUtf8,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_path` | `[]const u8` | – | – |
| `newdirfd` | `fd_t` | – | – |
| `sym\_link\_path` | `[]const u8` | – | – |
| Return | [`SymLinkError!void`](#error-symlinkerror) | – | – |

</details>

---

### <a id="fn-symlinkatz"></a>`symlinkatZ`

<details class="declaration-card" open>
<summary>Function – The same as `symlinkat` except the parameters are null-terminated pointers</summary>

The same as `symlinkat` except the parameters are null-terminated pointers.
See also `symlinkat`.

```zig
pub fn symlinkatZ(target_path: [*:0]const u8, newdirfd: fd_t, sym_link_path: [*:0]const u8) SymLinkError!void {
    if (native_os == .windows) {
        @compileError("symlinkat is not supported on Windows; use std.os.windows.CreateSymbolicLink instead");
    } else if (native_os == .wasi and !builtin.link_libc) {
        return symlinkat(mem.sliceTo(target_path, 0), newdirfd, mem.sliceTo(sym_link_path, 0));
    }
    switch (errno(system.symlinkat(target_path, newdirfd, sym_link_path))) {
        .SUCCESS => return,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .DQUOT => return error.DiskQuota,
        .EXIST => return error.PathAlreadyExists,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .ROFS => return error.ReadOnlyFileSystem,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `target\_path` | `[*:0]const u8` | – | – |
| `newdirfd` | `fd_t` | – | – |
| `sym\_link\_path` | `[*:0]const u8` | – | – |
| Return | [`SymLinkError!void`](#error-symlinkerror) | – | – |

</details>

---

### <a id="fn-linkz"></a>`linkZ`

<details class="declaration-card" open>
<summary>Function – On WASI, both paths should be encoded as valid UTF-8</summary>

On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn linkZ(oldpath: [*:0]const u8, newpath: [*:0]const u8) LinkError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        return link(mem.sliceTo(oldpath, 0), mem.sliceTo(newpath, 0));
    }
    switch (errno(system.link(oldpath, newpath))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .DQUOT => return error.DiskQuota,
        .EXIST => return error.PathAlreadyExists,
        .FAULT => unreachable,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .MLINK => return error.LinkQuotaExceeded,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .PERM => return error.PermissionDenied,
        .ROFS => return error.ReadOnlyFileSystem,
        .XDEV => return error.NotSameFileSystem,
        .INVAL => unreachable,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `oldpath` | `[*:0]const u8` | – | – |
| `newpath` | `[*:0]const u8` | – | – |
| Return | [`LinkError!void`](#error-linkerror) | – | – |

</details>

---

### <a id="fn-link"></a>`link`

<details class="declaration-card" open>
<summary>Function – On WASI, both paths should be encoded as valid UTF-8</summary>

On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn link(oldpath: []const u8, newpath: []const u8) LinkError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        return linkat(AT.FDCWD, oldpath, AT.FDCWD, newpath, 0) catch |err| switch (err) {
            error.NotDir => unreachable, // link() does not support directories
            else => |e| return e,
        };
    }
    const old = try toPosixPath(oldpath);
    const new = try toPosixPath(newpath);
    return try linkZ(&old, &new);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `oldpath` | `[]const u8` | – | – |
| `newpath` | `[]const u8` | – | – |
| Return | [`LinkError!void`](#error-linkerror) | – | – |

</details>

---

### <a id="fn-linkatz"></a>`linkatZ`

<details class="declaration-card" open>
<summary>Function – On WASI, both paths should be encoded as valid UTF-8</summary>

On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn linkatZ(
    olddir: fd_t,
    oldpath: [*:0]const u8,
    newdir: fd_t,
    newpath: [*:0]const u8,
    flags: i32,
) LinkatError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        return linkat(olddir, mem.sliceTo(oldpath, 0), newdir, mem.sliceTo(newpath, 0), flags);
    }
    switch (errno(system.linkat(olddir, oldpath, newdir, newpath, flags))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .DQUOT => return error.DiskQuota,
        .EXIST => return error.PathAlreadyExists,
        .FAULT => unreachable,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .MLINK => return error.LinkQuotaExceeded,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .NOTDIR => return error.NotDir,
        .PERM => return error.PermissionDenied,
        .ROFS => return error.ReadOnlyFileSystem,
        .XDEV => return error.NotSameFileSystem,
        .INVAL => unreachable,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `olddir` | `fd_t` | – | – |
| `oldpath` | `[*:0]const u8` | – | – |
| `newdir` | `fd_t` | – | – |
| `newpath` | `[*:0]const u8` | – | – |
| `flags` | `i32` | – | – |
| Return | [`LinkatError!void`](#error-linkaterror) | – | – |

</details>

---

### <a id="fn-linkat"></a>`linkat`

<details class="declaration-card" open>
<summary>Function – On WASI, both paths should be encoded as valid UTF-8</summary>

On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn linkat(
    olddir: fd_t,
    oldpath: []const u8,
    newdir: fd_t,
    newpath: []const u8,
    flags: i32,
) LinkatError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        const old: RelativePathWasi = .{ .dir_fd = olddir, .relative_path = oldpath };
        const new: RelativePathWasi = .{ .dir_fd = newdir, .relative_path = newpath };
        const old_flags: wasi.lookupflags_t = .{
            .SYMLINK_FOLLOW = (flags & AT.SYMLINK_FOLLOW) != 0,
        };
        switch (wasi.path_link(
            old.dir_fd,
            old_flags,
            old.relative_path.ptr,
            old.relative_path.len,
            new.dir_fd,
            new.relative_path.ptr,
            new.relative_path.len,
        )) {
            .SUCCESS => return,
            .ACCES => return error.AccessDenied,
            .DQUOT => return error.DiskQuota,
            .EXIST => return error.PathAlreadyExists,
            .FAULT => unreachable,
            .IO => return error.FileSystem,
            .LOOP => return error.SymLinkLoop,
            .MLINK => return error.LinkQuotaExceeded,
            .NAMETOOLONG => return error.NameTooLong,
            .NOENT => return error.FileNotFound,
            .NOMEM => return error.SystemResources,
            .NOSPC => return error.NoSpaceLeft,
            .NOTDIR => return error.NotDir,
            .PERM => return error.PermissionDenied,
            .ROFS => return error.ReadOnlyFileSystem,
            .XDEV => return error.NotSameFileSystem,
            .INVAL => unreachable,
            .ILSEQ => return error.InvalidUtf8,
            else => |err| return unexpectedErrno(err),
        }
    }
    const old = try toPosixPath(oldpath);
    const new = try toPosixPath(newpath);
    return try linkatZ(olddir, &old, newdir, &new, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `olddir` | `fd_t` | – | – |
| `oldpath` | `[]const u8` | – | – |
| `newdir` | `fd_t` | – | – |
| `newpath` | `[]const u8` | – | – |
| `flags` | `i32` | – | – |
| Return | [`LinkatError!void`](#error-linkaterror) | – | – |

</details>

---

### <a id="fn-unlink"></a>`unlink`

<details class="declaration-card" open>
<summary>Function – Delete a name and possibly the file it refers to</summary>

Delete a name and possibly the file it refers to.
On Windows, `file_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `file_path` should be encoded as valid UTF-8.
On other platforms, `file_path` is an opaque sequence of bytes with no particular encoding.
See also `unlinkZ`.

```zig
pub fn unlink(file_path: []const u8) UnlinkError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        return unlinkat(AT.FDCWD, file_path, 0) catch |err| switch (err) {
            error.DirNotEmpty => unreachable, // only occurs when targeting directories
            else => |e| return e,
        };
    } else if (native_os == .windows) {
        const file_path_w = try windows.sliceToPrefixedFileW(null, file_path);
        return unlinkW(file_path_w.span());
    } else {
        const file_path_c = try toPosixPath(file_path);
        return unlinkZ(&file_path_c);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path` | `[]const u8` | – | – |
| Return | [`UnlinkError!void`](#error-unlinkerror) | – | – |

</details>

---

### <a id="fn-unlinkz"></a>`unlinkZ`

<details class="declaration-card" open>
<summary>Function – Same as `unlink` except the parameter is null terminated</summary>

Same as `unlink` except the parameter is null terminated.

```zig
pub fn unlinkZ(file_path: [*:0]const u8) UnlinkError!void {
    if (native_os == .windows) {
        const file_path_w = try windows.cStrToPrefixedFileW(null, file_path);
        return unlinkW(file_path_w.span());
    } else if (native_os == .wasi and !builtin.link_libc) {
        return unlink(mem.sliceTo(file_path, 0));
    }
    switch (errno(system.unlink(file_path))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .BUSY => return error.FileBusy,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .IO => return error.FileSystem,
        .ISDIR => return error.IsDir,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .NOMEM => return error.SystemResources,
        .ROFS => return error.ReadOnlyFileSystem,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path` | `[*:0]const u8` | – | – |
| Return | [`UnlinkError!void`](#error-unlinkerror) | – | – |

</details>

---

### <a id="fn-unlinkw"></a>`unlinkW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `unlink` except the parameter is null-terminated, WTF16 LE encoded.

```zig
pub fn unlinkW(file_path_w: []const u16) UnlinkError!void {
    windows.DeleteFile(file_path_w, .{ .dir = fs.cwd().fd }) catch |err| switch (err) {
        error.DirNotEmpty => unreachable, // we're not passing .remove_dir = true
        else => |e| return e,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path\_w` | `[]const u16` | – | – |
| Return | [`UnlinkError!void`](#error-unlinkerror) | – | – |

</details>

---

### <a id="fn-unlinkat"></a>`unlinkat`

<details class="declaration-card" open>
<summary>Function – Delete a file name and possibly the file it refers to, based on an open directory handle</summary>

Delete a file name and possibly the file it refers to, based on an open directory handle.
On Windows, `file_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `file_path` should be encoded as valid UTF-8.
On other platforms, `file_path` is an opaque sequence of bytes with no particular encoding.
Asserts that the path parameter has no null bytes.

```zig
pub fn unlinkat(dirfd: fd_t, file_path: []const u8, flags: u32) UnlinkatError!void {
    if (native_os == .windows) {
        const file_path_w = try windows.sliceToPrefixedFileW(dirfd, file_path);
        return unlinkatW(dirfd, file_path_w.span(), flags);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return unlinkatWasi(dirfd, file_path, flags);
    } else {
        const file_path_c = try toPosixPath(file_path);
        return unlinkatZ(dirfd, &file_path_c, flags);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `file\_path` | `[]const u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`UnlinkatError!void`](#error-unlinkaterror) | – | – |

</details>

---

### <a id="fn-unlinkatwasi"></a>`unlinkatWasi`

<details class="declaration-card" open>
<summary>Function – WASI-only</summary>

WASI-only. Same as `unlinkat` but targeting WASI.
See also `unlinkat`.

```zig
pub fn unlinkatWasi(dirfd: fd_t, file_path: []const u8, flags: u32) UnlinkatError!void {
    const remove_dir = (flags & AT.REMOVEDIR) != 0;
    const res = if (remove_dir)
        wasi.path_remove_directory(dirfd, file_path.ptr, file_path.len)
    else
        wasi.path_unlink_file(dirfd, file_path.ptr, file_path.len);
    switch (res) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .BUSY => return error.FileBusy,
        .FAULT => unreachable,
        .IO => return error.FileSystem,
        .ISDIR => return error.IsDir,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .NOMEM => return error.SystemResources,
        .ROFS => return error.ReadOnlyFileSystem,
        .NOTEMPTY => return error.DirNotEmpty,
        .NOTCAPABLE => return error.AccessDenied,
        .ILSEQ => return error.InvalidUtf8,

        .INVAL => unreachable, // invalid flags, or pathname has . as last component
        .BADF => unreachable, // always a race condition

        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `file\_path` | `[]const u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`UnlinkatError!void`](#error-unlinkaterror) | – | – |

</details>

---

### <a id="fn-unlinkatz"></a>`unlinkatZ`

<details class="declaration-card" open>
<summary>Function – Same as `unlinkat` but `file_path` is a null-terminated string</summary>

Same as `unlinkat` but `file_path` is a null-terminated string.

```zig
pub fn unlinkatZ(dirfd: fd_t, file_path_c: [*:0]const u8, flags: u32) UnlinkatError!void {
    if (native_os == .windows) {
        const file_path_w = try windows.cStrToPrefixedFileW(dirfd, file_path_c);
        return unlinkatW(dirfd, file_path_w.span(), flags);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return unlinkat(dirfd, mem.sliceTo(file_path_c, 0), flags);
    }
    switch (errno(system.unlinkat(dirfd, file_path_c, flags))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .BUSY => return error.FileBusy,
        .FAULT => unreachable,
        .IO => return error.FileSystem,
        .ISDIR => return error.IsDir,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .NOMEM => return error.SystemResources,
        .ROFS => return error.ReadOnlyFileSystem,
        .EXIST => return error.DirNotEmpty,
        .NOTEMPTY => return error.DirNotEmpty,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),

        .INVAL => unreachable, // invalid flags, or pathname has . as last component
        .BADF => unreachable, // always a race condition

        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `file\_path\_c` | `[*:0]const u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`UnlinkatError!void`](#error-unlinkaterror) | – | – |

</details>

---

### <a id="fn-unlinkatw"></a>`unlinkatW`

<details class="declaration-card" open>
<summary>Function – Same as `unlinkat` but `sub_path_w` is WTF16LE, NT prefixed</summary>

Same as `unlinkat` but `sub_path_w` is WTF16LE, NT prefixed. Windows only.

```zig
pub fn unlinkatW(dirfd: fd_t, sub_path_w: []const u16, flags: u32) UnlinkatError!void {
    const remove_dir = (flags & AT.REMOVEDIR) != 0;
    return windows.DeleteFile(sub_path_w, .{ .dir = dirfd, .remove_dir = remove_dir });
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `sub\_path\_w` | `[]const u16` | – | – |
| `flags` | `u32` | – | – |
| Return | [`UnlinkatError!void`](#error-unlinkaterror) | – | – |

</details>

---

### <a id="fn-rename"></a>`rename`

<details class="declaration-card" open>
<summary>Function – Change the name or location of a file</summary>

Change the name or location of a file.
On Windows, both paths should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn rename(old_path: []const u8, new_path: []const u8) RenameError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        return renameat(AT.FDCWD, old_path, AT.FDCWD, new_path);
    } else if (native_os == .windows) {
        const old_path_w = try windows.sliceToPrefixedFileW(null, old_path);
        const new_path_w = try windows.sliceToPrefixedFileW(null, new_path);
        return renameW(old_path_w.span().ptr, new_path_w.span().ptr);
    } else {
        const old_path_c = try toPosixPath(old_path);
        const new_path_c = try toPosixPath(new_path);
        return renameZ(&old_path_c, &new_path_c);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_path` | `[]const u8` | – | – |
| `new\_path` | `[]const u8` | – | – |
| Return | [`RenameError!void`](#error-renameerror) | – | – |

</details>

---

### <a id="fn-renamez"></a>`renameZ`

<details class="declaration-card" open>
<summary>Function – Same as `rename` except the parameters are null-terminated</summary>

Same as `rename` except the parameters are null-terminated.

```zig
pub fn renameZ(old_path: [*:0]const u8, new_path: [*:0]const u8) RenameError!void {
    if (native_os == .windows) {
        const old_path_w = try windows.cStrToPrefixedFileW(null, old_path);
        const new_path_w = try windows.cStrToPrefixedFileW(null, new_path);
        return renameW(old_path_w.span().ptr, new_path_w.span().ptr);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return rename(mem.sliceTo(old_path, 0), mem.sliceTo(new_path, 0));
    }
    switch (errno(system.rename(old_path, new_path))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .BUSY => return error.FileBusy,
        .DQUOT => return error.DiskQuota,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .ISDIR => return error.IsDir,
        .LOOP => return error.SymLinkLoop,
        .MLINK => return error.LinkQuotaExceeded,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .EXIST => return error.PathAlreadyExists,
        .NOTEMPTY => return error.PathAlreadyExists,
        .ROFS => return error.ReadOnlyFileSystem,
        .XDEV => return error.RenameAcrossMountPoints,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_path` | `[*:0]const u8` | – | – |
| `new\_path` | `[*:0]const u8` | – | – |
| Return | [`RenameError!void`](#error-renameerror) | – | – |

</details>

---

### <a id="fn-renamew"></a>`renameW`

<details class="declaration-card" open>
<summary>Function – Same as `rename` except the parameters are null-terminated and WTF16LE encoded</summary>

Same as `rename` except the parameters are null-terminated and WTF16LE encoded.
Assumes target is Windows.

```zig
pub fn renameW(old_path: [*:0]const u16, new_path: [*:0]const u16) RenameError!void {
    const flags = windows.MOVEFILE_REPLACE_EXISTING | windows.MOVEFILE_WRITE_THROUGH;
    return windows.MoveFileExW(old_path, new_path, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_path` | `[*:0]const u16` | – | – |
| `new\_path` | `[*:0]const u16` | – | – |
| Return | [`RenameError!void`](#error-renameerror) | – | – |

</details>

---

### <a id="fn-renameat"></a>`renameat`

<details class="declaration-card" open>
<summary>Function – Change the name or location of a file based on an open directory handle</summary>

Change the name or location of a file based on an open directory handle.
On Windows, both paths should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, both paths should be encoded as valid UTF-8.
On other platforms, both paths are an opaque sequence of bytes with no particular encoding.

```zig
pub fn renameat(
    old_dir_fd: fd_t,
    old_path: []const u8,
    new_dir_fd: fd_t,
    new_path: []const u8,
) RenameError!void {
    if (native_os == .windows) {
        const old_path_w = try windows.sliceToPrefixedFileW(old_dir_fd, old_path);
        const new_path_w = try windows.sliceToPrefixedFileW(new_dir_fd, new_path);
        return renameatW(old_dir_fd, old_path_w.span(), new_dir_fd, new_path_w.span(), windows.TRUE);
    } else if (native_os == .wasi and !builtin.link_libc) {
        const old: RelativePathWasi = .{ .dir_fd = old_dir_fd, .relative_path = old_path };
        const new: RelativePathWasi = .{ .dir_fd = new_dir_fd, .relative_path = new_path };
        return renameatWasi(old, new);
    } else {
        const old_path_c = try toPosixPath(old_path);
        const new_path_c = try toPosixPath(new_path);
        return renameatZ(old_dir_fd, &old_path_c, new_dir_fd, &new_path_c);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_dir\_fd` | `fd_t` | – | – |
| `old\_path` | `[]const u8` | – | – |
| `new\_dir\_fd` | `fd_t` | – | – |
| `new\_path` | `[]const u8` | – | – |
| Return | [`RenameError!void`](#error-renameerror) | – | – |

</details>

---

### <a id="fn-renameatz"></a>`renameatZ`

<details class="declaration-card" open>
<summary>Function – Same as `renameat` except the parameters are null-terminated</summary>

Same as `renameat` except the parameters are null-terminated.

```zig
pub fn renameatZ(
    old_dir_fd: fd_t,
    old_path: [*:0]const u8,
    new_dir_fd: fd_t,
    new_path: [*:0]const u8,
) RenameError!void {
    if (native_os == .windows) {
        const old_path_w = try windows.cStrToPrefixedFileW(old_dir_fd, old_path);
        const new_path_w = try windows.cStrToPrefixedFileW(new_dir_fd, new_path);
        return renameatW(old_dir_fd, old_path_w.span(), new_dir_fd, new_path_w.span(), windows.TRUE);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return renameat(old_dir_fd, mem.sliceTo(old_path, 0), new_dir_fd, mem.sliceTo(new_path, 0));
    }

    switch (errno(system.renameat(old_dir_fd, old_path, new_dir_fd, new_path))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .BUSY => return error.FileBusy,
        .DQUOT => return error.DiskQuota,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .ISDIR => return error.IsDir,
        .LOOP => return error.SymLinkLoop,
        .MLINK => return error.LinkQuotaExceeded,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .EXIST => return error.PathAlreadyExists,
        .NOTEMPTY => return error.PathAlreadyExists,
        .ROFS => return error.ReadOnlyFileSystem,
        .XDEV => return error.RenameAcrossMountPoints,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_dir\_fd` | `fd_t` | – | – |
| `old\_path` | `[*:0]const u8` | – | – |
| `new\_dir\_fd` | `fd_t` | – | – |
| `new\_path` | `[*:0]const u8` | – | – |
| Return | [`RenameError!void`](#error-renameerror) | – | – |

</details>

---

### <a id="fn-renameatw"></a>`renameatW`

<details class="declaration-card" open>
<summary>Function – Same as `renameat` but Windows-only and the path parameters are</summary>

Same as `renameat` but Windows-only and the path parameters are
[WTF-16](https://simonsapin.github.io/wtf-8/#potentially-ill-formed-utf-16) encoded.

```zig
pub fn renameatW(
    old_dir_fd: fd_t,
    old_path_w: []const u16,
    new_dir_fd: fd_t,
    new_path_w: []const u16,
    ReplaceIfExists: windows.BOOLEAN,
) RenameError!void {
    const src_fd = windows.OpenFile(old_path_w, .{
        .dir = old_dir_fd,
        .access_mask = windows.SYNCHRONIZE | windows.GENERIC_WRITE | windows.DELETE,
        .creation = windows.FILE_OPEN,
        .filter = .any, // This function is supposed to rename both files and directories.
        .follow_symlinks = false,
    }) catch |err| switch (err) {
        error.WouldBlock => unreachable, // Not possible without `.share_access_nonblocking = true`.
        else => |e| return e,
    };
    defer windows.CloseHandle(src_fd);

    var need_fallback = true;
    var rc: windows.NTSTATUS = undefined;
    // FILE_RENAME_INFORMATION_EX and FILE_RENAME_POSIX_SEMANTICS require >= win10_rs1,
    // but FILE_RENAME_IGNORE_READONLY_ATTRIBUTE requires >= win10_rs5. We check >= rs5 here
    // so that we only use POSIX_SEMANTICS when we know IGNORE_READONLY_ATTRIBUTE will also be
    // supported in order to avoid either (1) using a redundant call that we can know in advance will return
    // STATUS_NOT_SUPPORTED or (2) only setting IGNORE_READONLY_ATTRIBUTE when >= rs5
    // and therefore having different behavior when the Windows version is >= rs1 but < rs5.
    if (builtin.target.os.isAtLeast(.windows, .win10_rs5) orelse false) {
        const struct_buf_len = @sizeOf(windows.FILE_RENAME_INFORMATION_EX) + (max_path_bytes - 1);
        var rename_info_buf: [struct_buf_len]u8 align(@alignOf(windows.FILE_RENAME_INFORMATION_EX)) = undefined;
        const struct_len = @sizeOf(windows.FILE_RENAME_INFORMATION_EX) - 1 + new_path_w.len * 2;
        if (struct_len > struct_buf_len) return error.NameTooLong;

        const rename_info: *windows.FILE_RENAME_INFORMATION_EX = @ptrCast(&rename_info_buf);
        var io_status_block: windows.IO_STATUS_BLOCK = undefined;

        var flags: windows.ULONG = windows.FILE_RENAME_POSIX_SEMANTICS | windows.FILE_RENAME_IGNORE_READONLY_ATTRIBUTE;
        if (ReplaceIfExists == windows.TRUE) flags |= windows.FILE_RENAME_REPLACE_IF_EXISTS;
        rename_info.* = .{
            .Flags = flags,
            .RootDirectory = if (fs.path.isAbsoluteWindowsWTF16(new_path_w)) null else new_dir_fd,
            .FileNameLength = @intCast(new_path_w.len * 2), // already checked error.NameTooLong
            .FileName = undefined,
        };
        @memcpy((&rename_info.FileName).ptr, new_path_w);
        rc = windows.ntdll.NtSetInformationFile(
            src_fd,
            &io_status_block,
            rename_info,
            @intCast(struct_len), // already checked for error.NameTooLong
            .FileRenameInformationEx,
        );
        switch (rc) {
            .SUCCESS => return,
            // INVALID_PARAMETER here means that the filesystem does not support FileRenameInformationEx
            .INVALID_PARAMETER => {},
            // For all other statuses, fall down to the switch below to handle them.
            else => need_fallback = false,
        }
    }

    if (need_fallback) {
        const struct_buf_len = @sizeOf(windows.FILE_RENAME_INFORMATION) + (max_path_bytes - 1);
        var rename_info_buf: [struct_buf_len]u8 align(@alignOf(windows.FILE_RENAME_INFORMATION)) = undefined;
        const struct_len = @sizeOf(windows.FILE_RENAME_INFORMATION) - 1 + new_path_w.len * 2;
        if (struct_len > struct_buf_len) return error.NameTooLong;

        const rename_info: *windows.FILE_RENAME_INFORMATION = @ptrCast(&rename_info_buf);
        var io_status_block: windows.IO_STATUS_BLOCK = undefined;

        rename_info.* = .{
            .Flags = ReplaceIfExists,
            .RootDirectory = if (fs.path.isAbsoluteWindowsWTF16(new_path_w)) null else new_dir_fd,
            .FileNameLength = @intCast(new_path_w.len * 2), // already checked error.NameTooLong
            .FileName = undefined,
        };
        @memcpy((&rename_info.FileName).ptr, new_path_w);

        rc =
            windows.ntdll.NtSetInformationFile(
                src_fd,
                &io_status_block,
                rename_info,
                @intCast(struct_len), // already checked for error.NameTooLong
                .FileRenameInformation,
            );
    }

    switch (rc) {
        .SUCCESS => {},
        .INVALID_HANDLE => unreachable,
        .INVALID_PARAMETER => unreachable,
        .OBJECT_PATH_SYNTAX_BAD => unreachable,
        .ACCESS_DENIED => return error.AccessDenied,
        .OBJECT_NAME_NOT_FOUND => return error.FileNotFound,
        .OBJECT_PATH_NOT_FOUND => return error.FileNotFound,
        .NOT_SAME_DEVICE => return error.RenameAcrossMountPoints,
        .OBJECT_NAME_COLLISION => return error.PathAlreadyExists,
        .DIRECTORY_NOT_EMPTY => return error.PathAlreadyExists,
        .FILE_IS_A_DIRECTORY => return error.IsDir,
        .NOT_A_DIRECTORY => return error.NotDir,
        else => return windows.unexpectedStatus(rc),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_dir\_fd` | `fd_t` | – | – |
| `old\_path\_w` | `[]const u16` | – | – |
| `new\_dir\_fd` | `fd_t` | – | – |
| `new\_path\_w` | `[]const u16` | – | – |
| `ReplaceIfExists` | `windows.BOOLEAN` | – | – |
| Return | [`RenameError!void`](#error-renameerror) | – | – |

</details>

---

### <a id="fn-mkdirat"></a>`mkdirat`

<details class="declaration-card" open>
<summary>Function – On Windows, `sub_dir_path` should be encoded as [WTF-8](https://simonsapin</summary>

On Windows, `sub_dir_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `sub_dir_path` should be encoded as valid UTF-8.
On other platforms, `sub_dir_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn mkdirat(dir_fd: fd_t, sub_dir_path: []const u8, mode: mode_t) MakeDirError!void {
    if (native_os == .windows) {
        const sub_dir_path_w = try windows.sliceToPrefixedFileW(dir_fd, sub_dir_path);
        return mkdiratW(dir_fd, sub_dir_path_w.span(), mode);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return mkdiratWasi(dir_fd, sub_dir_path, mode);
    } else {
        const sub_dir_path_c = try toPosixPath(sub_dir_path);
        return mkdiratZ(dir_fd, &sub_dir_path_c, mode);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_fd` | `fd_t` | – | – |
| `sub\_dir\_path` | `[]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`MakeDirError!void`](#error-makedirerror) | – | – |

</details>

---

### <a id="fn-mkdiratwasi"></a>`mkdiratWasi`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn mkdiratWasi(dir_fd: fd_t, sub_dir_path: []const u8, mode: mode_t) MakeDirError!void {
    _ = mode;
    switch (wasi.path_create_directory(dir_fd, sub_dir_path.ptr, sub_dir_path.len)) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .BADF => unreachable,
        .PERM => return error.PermissionDenied,
        .DQUOT => return error.DiskQuota,
        .EXIST => return error.PathAlreadyExists,
        .FAULT => unreachable,
        .LOOP => return error.SymLinkLoop,
        .MLINK => return error.LinkQuotaExceeded,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .NOTDIR => return error.NotDir,
        .ROFS => return error.ReadOnlyFileSystem,
        .NOTCAPABLE => return error.AccessDenied,
        .ILSEQ => return error.InvalidUtf8,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_fd` | `fd_t` | – | – |
| `sub\_dir\_path` | `[]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`MakeDirError!void`](#error-makedirerror) | – | – |

</details>

---

### <a id="fn-mkdiratz"></a>`mkdiratZ`

<details class="declaration-card" open>
<summary>Function – Same as `mkdirat` except the parameters are null-terminated</summary>

Same as `mkdirat` except the parameters are null-terminated.

```zig
pub fn mkdiratZ(dir_fd: fd_t, sub_dir_path: [*:0]const u8, mode: mode_t) MakeDirError!void {
    if (native_os == .windows) {
        const sub_dir_path_w = try windows.cStrToPrefixedFileW(dir_fd, sub_dir_path);
        return mkdiratW(dir_fd, sub_dir_path_w.span(), mode);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return mkdirat(dir_fd, mem.sliceTo(sub_dir_path, 0), mode);
    }
    switch (errno(system.mkdirat(dir_fd, sub_dir_path, mode))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .BADF => unreachable,
        .PERM => return error.PermissionDenied,
        .DQUOT => return error.DiskQuota,
        .EXIST => return error.PathAlreadyExists,
        .FAULT => unreachable,
        .LOOP => return error.SymLinkLoop,
        .MLINK => return error.LinkQuotaExceeded,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .NOTDIR => return error.NotDir,
        .ROFS => return error.ReadOnlyFileSystem,
        // dragonfly: when dir_fd is unlinked from filesystem
        .NOTCONN => return error.FileNotFound,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_fd` | `fd_t` | – | – |
| `sub\_dir\_path` | `[*:0]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`MakeDirError!void`](#error-makedirerror) | – | – |

</details>

---

### <a id="fn-mkdiratw"></a>`mkdiratW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `mkdirat` except the parameter WTF16 LE encoded.

```zig
pub fn mkdiratW(dir_fd: fd_t, sub_path_w: []const u16, mode: mode_t) MakeDirError!void {
    _ = mode;
    const sub_dir_handle = windows.OpenFile(sub_path_w, .{
        .dir = dir_fd,
        .access_mask = windows.GENERIC_READ | windows.SYNCHRONIZE,
        .creation = windows.FILE_CREATE,
        .filter = .dir_only,
    }) catch |err| switch (err) {
        error.IsDir => return error.Unexpected,
        error.PipeBusy => return error.Unexpected,
        error.NoDevice => return error.Unexpected,
        error.WouldBlock => return error.Unexpected,
        error.AntivirusInterference => return error.Unexpected,
        else => |e| return e,
    };
    windows.CloseHandle(sub_dir_handle);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_fd` | `fd_t` | – | – |
| `sub\_path\_w` | `[]const u16` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`MakeDirError!void`](#error-makedirerror) | – | – |

</details>

---

### <a id="fn-mkdir"></a>`mkdir`

<details class="declaration-card" open>
<summary>Function – Create a directory</summary>

Create a directory.
`mode` is ignored on Windows and WASI.
On Windows, `dir_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `dir_path` should be encoded as valid UTF-8.
On other platforms, `dir_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn mkdir(dir_path: []const u8, mode: mode_t) MakeDirError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        return mkdirat(AT.FDCWD, dir_path, mode);
    } else if (native_os == .windows) {
        const dir_path_w = try windows.sliceToPrefixedFileW(null, dir_path);
        return mkdirW(dir_path_w.span(), mode);
    } else {
        const dir_path_c = try toPosixPath(dir_path);
        return mkdirZ(&dir_path_c, mode);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`MakeDirError!void`](#error-makedirerror) | – | – |

</details>

---

### <a id="fn-mkdirz"></a>`mkdirZ`

<details class="declaration-card" open>
<summary>Function – Same as `mkdir` but the parameter is null-terminated</summary>

Same as `mkdir` but the parameter is null-terminated.
On Windows, `dir_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `dir_path` should be encoded as valid UTF-8.
On other platforms, `dir_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn mkdirZ(dir_path: [*:0]const u8, mode: mode_t) MakeDirError!void {
    if (native_os == .windows) {
        const dir_path_w = try windows.cStrToPrefixedFileW(null, dir_path);
        return mkdirW(dir_path_w.span(), mode);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return mkdir(mem.sliceTo(dir_path, 0), mode);
    }
    switch (errno(system.mkdir(dir_path, mode))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .DQUOT => return error.DiskQuota,
        .EXIST => return error.PathAlreadyExists,
        .FAULT => unreachable,
        .LOOP => return error.SymLinkLoop,
        .MLINK => return error.LinkQuotaExceeded,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.NoSpaceLeft,
        .NOTDIR => return error.NotDir,
        .ROFS => return error.ReadOnlyFileSystem,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[*:0]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`MakeDirError!void`](#error-makedirerror) | – | – |

</details>

---

### <a id="fn-mkdirw"></a>`mkdirW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `mkdir` but the parameters is WTF16LE encoded.

```zig
pub fn mkdirW(dir_path_w: []const u16, mode: mode_t) MakeDirError!void {
    _ = mode;
    const sub_dir_handle = windows.OpenFile(dir_path_w, .{
        .dir = fs.cwd().fd,
        .access_mask = windows.GENERIC_READ | windows.SYNCHRONIZE,
        .creation = windows.FILE_CREATE,
        .filter = .dir_only,
    }) catch |err| switch (err) {
        error.IsDir => return error.Unexpected,
        error.PipeBusy => return error.Unexpected,
        error.NoDevice => return error.Unexpected,
        error.WouldBlock => return error.Unexpected,
        error.AntivirusInterference => return error.Unexpected,
        else => |e| return e,
    };
    windows.CloseHandle(sub_dir_handle);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path\_w` | `[]const u16` | – | – |
| `mode` | `mode_t` | – | – |
| Return | [`MakeDirError!void`](#error-makedirerror) | – | – |

</details>

---

### <a id="fn-rmdir"></a>`rmdir`

<details class="declaration-card" open>
<summary>Function – Deletes an empty directory</summary>

Deletes an empty directory.
On Windows, `dir_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `dir_path` should be encoded as valid UTF-8.
On other platforms, `dir_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn rmdir(dir_path: []const u8) DeleteDirError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        return unlinkat(AT.FDCWD, dir_path, AT.REMOVEDIR) catch |err| switch (err) {
            error.FileSystem => unreachable, // only occurs when targeting files
            error.IsDir => unreachable, // only occurs when targeting files
            else => |e| return e,
        };
    } else if (native_os == .windows) {
        const dir_path_w = try windows.sliceToPrefixedFileW(null, dir_path);
        return rmdirW(dir_path_w.span());
    } else {
        const dir_path_c = try toPosixPath(dir_path);
        return rmdirZ(&dir_path_c);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[]const u8` | – | – |
| Return | [`DeleteDirError!void`](#error-deletedirerror) | – | – |

</details>

---

### <a id="fn-rmdirz"></a>`rmdirZ`

<details class="declaration-card" open>
<summary>Function – Same as `rmdir` except the parameter is null-terminated</summary>

Same as `rmdir` except the parameter is null-terminated.
On Windows, `dir_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `dir_path` should be encoded as valid UTF-8.
On other platforms, `dir_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn rmdirZ(dir_path: [*:0]const u8) DeleteDirError!void {
    if (native_os == .windows) {
        const dir_path_w = try windows.cStrToPrefixedFileW(null, dir_path);
        return rmdirW(dir_path_w.span());
    } else if (native_os == .wasi and !builtin.link_libc) {
        return rmdir(mem.sliceTo(dir_path, 0));
    }
    switch (errno(system.rmdir(dir_path))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .BUSY => return error.FileBusy,
        .FAULT => unreachable,
        .INVAL => return error.BadPathName,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOTDIR => return error.NotDir,
        .EXIST => return error.DirNotEmpty,
        .NOTEMPTY => return error.DirNotEmpty,
        .ROFS => return error.ReadOnlyFileSystem,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[*:0]const u8` | – | – |
| Return | [`DeleteDirError!void`](#error-deletedirerror) | – | – |

</details>

---

### <a id="fn-rmdirw"></a>`rmdirW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `rmdir` except the parameter is WTF-16 LE encoded.

```zig
pub fn rmdirW(dir_path_w: []const u16) DeleteDirError!void {
    return windows.DeleteFile(dir_path_w, .{ .dir = fs.cwd().fd, .remove_dir = true }) catch |err| switch (err) {
        error.IsDir => unreachable,
        else => |e| return e,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path\_w` | `[]const u16` | – | – |
| Return | [`DeleteDirError!void`](#error-deletedirerror) | – | – |

</details>

---

### <a id="fn-chdir"></a>`chdir`

<details class="declaration-card" open>
<summary>Function – Changes the current working directory of the calling process</summary>

Changes the current working directory of the calling process.
On Windows, `dir_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `dir_path` should be encoded as valid UTF-8.
On other platforms, `dir_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn chdir(dir_path: []const u8) ChangeCurDirError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        @compileError("WASI does not support os.chdir");
    } else if (native_os == .windows) {
        var wtf16_dir_path: [windows.PATH_MAX_WIDE]u16 = undefined;
        if (try std.unicode.checkWtf8ToWtf16LeOverflow(dir_path, &wtf16_dir_path)) {
            return error.NameTooLong;
        }
        const len = try std.unicode.wtf8ToWtf16Le(&wtf16_dir_path, dir_path);
        return chdirW(wtf16_dir_path[0..len]);
    } else {
        const dir_path_c = try toPosixPath(dir_path);
        return chdirZ(&dir_path_c);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[]const u8` | – | – |
| Return | [`ChangeCurDirError!void`](#error-changecurdirerror) | – | – |

</details>

---

### <a id="fn-chdirz"></a>`chdirZ`

<details class="declaration-card" open>
<summary>Function – Same as `chdir` except the parameter is null-terminated</summary>

Same as `chdir` except the parameter is null-terminated.
On Windows, `dir_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `dir_path` should be encoded as valid UTF-8.
On other platforms, `dir_path` is an opaque sequence of bytes with no particular encoding.

```zig
pub fn chdirZ(dir_path: [*:0]const u8) ChangeCurDirError!void {
    if (native_os == .windows) {
        const dir_path_span = mem.span(dir_path);
        var wtf16_dir_path: [windows.PATH_MAX_WIDE]u16 = undefined;
        if (try std.unicode.checkWtf8ToWtf16LeOverflow(dir_path_span, &wtf16_dir_path)) {
            return error.NameTooLong;
        }
        const len = try std.unicode.wtf8ToWtf16Le(&wtf16_dir_path, dir_path_span);
        return chdirW(wtf16_dir_path[0..len]);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return chdir(mem.span(dir_path));
    }
    switch (errno(system.chdir(dir_path))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .FAULT => unreachable,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOTDIR => return error.NotDir,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[*:0]const u8` | – | – |
| Return | [`ChangeCurDirError!void`](#error-changecurdirerror) | – | – |

</details>

---

### <a id="fn-chdirw"></a>`chdirW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `chdir` except the parameter is WTF16 LE encoded.

```zig
pub fn chdirW(dir_path: []const u16) ChangeCurDirError!void {
    windows.SetCurrentDirectory(dir_path) catch |err| switch (err) {
        error.NoDevice => return error.FileSystem,
        else => |e| return e,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dir\_path` | `[]const u16` | – | – |
| Return | [`ChangeCurDirError!void`](#error-changecurdirerror) | – | – |

</details>

---

### <a id="fn-fchdir"></a>`fchdir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fchdir(dirfd: fd_t) FchdirError!void {
    if (dirfd == AT.FDCWD) return;
    while (true) {
        switch (errno(system.fchdir(dirfd))) {
            .SUCCESS => return,
            .ACCES => return error.AccessDenied,
            .BADF => unreachable,
            .NOTDIR => return error.NotDir,
            .INTR => continue,
            .IO => return error.FileSystem,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| Return | [`FchdirError!void`](#error-fchdirerror) | – | – |

</details>

---

### <a id="fn-readlink"></a>`readlink`

<details class="declaration-card" open>
<summary>Function – Read value of a symbolic link</summary>

Read value of a symbolic link.
On Windows, `file_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `file_path` should be encoded as valid UTF-8.
On other platforms, `file_path` is an opaque sequence of bytes with no particular encoding.
The return value is a slice of `out_buffer` from index 0.
On Windows, the result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, the result is encoded as UTF-8.
On other platforms, the result is an opaque sequence of bytes with no particular encoding.

```zig
pub fn readlink(file_path: []const u8, out_buffer: []u8) ReadLinkError![]u8 {
    if (native_os == .wasi and !builtin.link_libc) {
        return readlinkat(AT.FDCWD, file_path, out_buffer);
    } else if (native_os == .windows) {
        const file_path_w = try windows.sliceToPrefixedFileW(null, file_path);
        return readlinkW(file_path_w.span(), out_buffer);
    } else {
        const file_path_c = try toPosixPath(file_path);
        return readlinkZ(&file_path_c, out_buffer);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path` | `[]const u8` | – | – |
| `out\_buffer` | `[]u8` | – | – |
| Return | [`ReadLinkError![]u8`](#error-readlinkerror) | – | – |

</details>

---

### <a id="fn-readlinkw"></a>`readlinkW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `readlink` except `file_path` is WTF16 LE encoded.
The result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
See also `readlinkZ`.

```zig
pub fn readlinkW(file_path: []const u16, out_buffer: []u8) ReadLinkError![]u8 {
    return windows.ReadLink(fs.cwd().fd, file_path, out_buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path` | `[]const u16` | – | – |
| `out\_buffer` | `[]u8` | – | – |
| Return | [`ReadLinkError![]u8`](#error-readlinkerror) | – | – |

</details>

---

### <a id="fn-readlinkz"></a>`readlinkZ`

<details class="declaration-card" open>
<summary>Function – Same as `readlink` except `file_path` is null-terminated</summary>

Same as `readlink` except `file_path` is null-terminated.

```zig
pub fn readlinkZ(file_path: [*:0]const u8, out_buffer: []u8) ReadLinkError![]u8 {
    if (native_os == .windows) {
        const file_path_w = try windows.cStrToPrefixedFileW(null, file_path);
        return readlinkW(file_path_w.span(), out_buffer);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return readlink(mem.sliceTo(file_path, 0), out_buffer);
    }
    const rc = system.readlink(file_path, out_buffer.ptr, out_buffer.len);
    switch (errno(rc)) {
        .SUCCESS => return out_buffer[0..@bitCast(rc)],
        .ACCES => return error.AccessDenied,
        .FAULT => unreachable,
        .INVAL => return error.NotLink,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOTDIR => return error.NotDir,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path` | `[*:0]const u8` | – | – |
| `out\_buffer` | `[]u8` | – | – |
| Return | [`ReadLinkError![]u8`](#error-readlinkerror) | – | – |

</details>

---

### <a id="fn-readlinkat"></a>`readlinkat`

<details class="declaration-card" open>
<summary>Function – Similar to `readlink` except reads value of a symbolink link **relative** to `dirfd` directory handle</summary>

Similar to `readlink` except reads value of a symbolink link **relative** to `dirfd` directory handle.
On Windows, `file_path` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, `file_path` should be encoded as valid UTF-8.
On other platforms, `file_path` is an opaque sequence of bytes with no particular encoding.
The return value is a slice of `out_buffer` from index 0.
On Windows, the result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
On WASI, the result is encoded as UTF-8.
On other platforms, the result is an opaque sequence of bytes with no particular encoding.
See also `readlinkatWasi`, `realinkatZ` and `realinkatW`.

```zig
pub fn readlinkat(dirfd: fd_t, file_path: []const u8, out_buffer: []u8) ReadLinkError![]u8 {
    if (native_os == .wasi and !builtin.link_libc) {
        return readlinkatWasi(dirfd, file_path, out_buffer);
    }
    if (native_os == .windows) {
        const file_path_w = try windows.sliceToPrefixedFileW(dirfd, file_path);
        return readlinkatW(dirfd, file_path_w.span(), out_buffer);
    }
    const file_path_c = try toPosixPath(file_path);
    return readlinkatZ(dirfd, &file_path_c, out_buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `file\_path` | `[]const u8` | – | – |
| `out\_buffer` | `[]u8` | – | – |
| Return | [`ReadLinkError![]u8`](#error-readlinkerror) | – | – |

</details>

---

### <a id="fn-readlinkatwasi"></a>`readlinkatWasi`

<details class="declaration-card" open>
<summary>Function – WASI-only</summary>

WASI-only. Same as `readlinkat` but targets WASI.
See also `readlinkat`.

```zig
pub fn readlinkatWasi(dirfd: fd_t, file_path: []const u8, out_buffer: []u8) ReadLinkError![]u8 {
    var bufused: usize = undefined;
    switch (wasi.path_readlink(dirfd, file_path.ptr, file_path.len, out_buffer.ptr, out_buffer.len, &bufused)) {
        .SUCCESS => return out_buffer[0..bufused],
        .ACCES => return error.AccessDenied,
        .FAULT => unreachable,
        .INVAL => return error.NotLink,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOTDIR => return error.NotDir,
        .NOTCAPABLE => return error.AccessDenied,
        .ILSEQ => return error.InvalidUtf8,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `file\_path` | `[]const u8` | – | – |
| `out\_buffer` | `[]u8` | – | – |
| Return | [`ReadLinkError![]u8`](#error-readlinkerror) | – | – |

</details>

---

### <a id="fn-readlinkatw"></a>`readlinkatW`

<details class="declaration-card" open>
<summary>Function – Windows-only</summary>

Windows-only. Same as `readlinkat` except `file_path` is null-terminated, WTF16 LE encoded.
The result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
See also `readlinkat`.

```zig
pub fn readlinkatW(dirfd: fd_t, file_path: []const u16, out_buffer: []u8) ReadLinkError![]u8 {
    return windows.ReadLink(dirfd, file_path, out_buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `file\_path` | `[]const u16` | – | – |
| `out\_buffer` | `[]u8` | – | – |
| Return | [`ReadLinkError![]u8`](#error-readlinkerror) | – | – |

</details>

---

### <a id="fn-readlinkatz"></a>`readlinkatZ`

<details class="declaration-card" open>
<summary>Function – Same as `readlinkat` except `file_path` is null-terminated</summary>

Same as `readlinkat` except `file_path` is null-terminated.
See also `readlinkat`.

```zig
pub fn readlinkatZ(dirfd: fd_t, file_path: [*:0]const u8, out_buffer: []u8) ReadLinkError![]u8 {
    if (native_os == .windows) {
        const file_path_w = try windows.cStrToPrefixedFileW(dirfd, file_path);
        return readlinkatW(dirfd, file_path_w.span(), out_buffer);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return readlinkat(dirfd, mem.sliceTo(file_path, 0), out_buffer);
    }
    const rc = system.readlinkat(dirfd, file_path, out_buffer.ptr, out_buffer.len);
    switch (errno(rc)) {
        .SUCCESS => return out_buffer[0..@bitCast(rc)],
        .ACCES => return error.AccessDenied,
        .FAULT => unreachable,
        .INVAL => return error.NotLink,
        .IO => return error.FileSystem,
        .LOOP => return error.SymLinkLoop,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOTDIR => return error.NotDir,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `file\_path` | `[*:0]const u8` | – | – |
| `out\_buffer` | `[]u8` | – | – |
| Return | [`ReadLinkError![]u8`](#error-readlinkerror) | – | – |

</details>

---

### <a id="fn-setuid"></a>`setuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setuid(uid: uid_t) SetIdError!void {
    switch (errno(system.setuid(uid))) {
        .SUCCESS => return,
        .AGAIN => return error.ResourceLimitReached,
        .INVAL => return error.InvalidUserId,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uid` | `uid_t` | – | – |
| Return | [`SetIdError!void`](#error-setiderror) | – | – |

</details>

---

### <a id="fn-seteuid"></a>`seteuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn seteuid(uid: uid_t) SetEidError!void {
    switch (errno(system.seteuid(uid))) {
        .SUCCESS => return,
        .INVAL => return error.InvalidUserId,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uid` | `uid_t` | – | – |
| Return | [`SetEidError!void`](#error-seteiderror) | – | – |

</details>

---

### <a id="fn-setreuid"></a>`setreuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setreuid(ruid: uid_t, euid: uid_t) SetIdError!void {
    switch (errno(system.setreuid(ruid, euid))) {
        .SUCCESS => return,
        .AGAIN => return error.ResourceLimitReached,
        .INVAL => return error.InvalidUserId,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ruid` | `uid_t` | – | – |
| `euid` | `uid_t` | – | – |
| Return | [`SetIdError!void`](#error-setiderror) | – | – |

</details>

---

### <a id="fn-setgid"></a>`setgid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setgid(gid: gid_t) SetIdError!void {
    switch (errno(system.setgid(gid))) {
        .SUCCESS => return,
        .AGAIN => return error.ResourceLimitReached,
        .INVAL => return error.InvalidUserId,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gid` | `gid_t` | – | – |
| Return | [`SetIdError!void`](#error-setiderror) | – | – |

</details>

---

### <a id="fn-setegid"></a>`setegid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setegid(uid: uid_t) SetEidError!void {
    switch (errno(system.setegid(uid))) {
        .SUCCESS => return,
        .INVAL => return error.InvalidUserId,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uid` | `uid_t` | – | – |
| Return | [`SetEidError!void`](#error-seteiderror) | – | – |

</details>

---

### <a id="fn-setregid"></a>`setregid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setregid(rgid: gid_t, egid: gid_t) SetIdError!void {
    switch (errno(system.setregid(rgid, egid))) {
        .SUCCESS => return,
        .AGAIN => return error.ResourceLimitReached,
        .INVAL => return error.InvalidUserId,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rgid` | `gid_t` | – | – |
| `egid` | `gid_t` | – | – |
| Return | [`SetIdError!void`](#error-setiderror) | – | – |

</details>

---

### <a id="fn-setpgid"></a>`setpgid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setpgid(pid: pid_t, pgid: pid_t) SetPgidError!void {
    switch (errno(system.setpgid(pid, pgid))) {
        .SUCCESS => return,
        .ACCES => return error.ProcessAlreadyExec,
        .INVAL => return error.InvalidProcessGroupId,
        .PERM => return error.PermissionDenied,
        .SRCH => return error.ProcessNotFound,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `pgid` | `pid_t` | – | – |
| Return | [`SetPgidError!void`](#error-setpgiderror) | – | – |

</details>

---

### <a id="fn-getuid"></a>`getuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn getuid() uid_t {
    return system.getuid();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `uid_t` | – | – |

</details>

---

### <a id="fn-geteuid"></a>`geteuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn geteuid() uid_t {
    return system.geteuid();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `uid_t` | – | – |

</details>

---

### <a id="fn-isatty"></a>`isatty`

<details class="declaration-card" open>
<summary>Function – Test whether a file descriptor refers to a terminal</summary>

Test whether a file descriptor refers to a terminal.

```zig
pub fn isatty(handle: fd_t) bool {
    if (native_os == .windows) {
        if (fs.File.isCygwinPty(.{ .handle = handle }))
            return true;

        var out: windows.DWORD = undefined;
        return windows.kernel32.GetConsoleMode(handle, &out) != 0;
    }
    if (builtin.link_libc) {
        return system.isatty(handle) != 0;
    }
    if (native_os == .wasi) {
        var statbuf: wasi.fdstat_t = undefined;
        const err = wasi.fd_fdstat_get(handle, &statbuf);
        if (err != .SUCCESS)
            return false;

        // A tty is a character device that we can't seek or tell on.
        if (statbuf.fs_filetype != .CHARACTER_DEVICE)
            return false;
        if (statbuf.fs_rights_base.FD_SEEK or statbuf.fs_rights_base.FD_TELL)
            return false;

        return true;
    }
    if (native_os == .linux) {
        while (true) {
            var wsz: winsize = undefined;
            const fd: usize = @bitCast(@as(isize, handle));
            const rc = linux.syscall3(.ioctl, fd, linux.T.IOCGWINSZ, @intFromPtr(&wsz));
            switch (linux.E.init(rc)) {
                .SUCCESS => return true,
                .INTR => continue,
                else => return false,
            }
        }
    }
    return system.isatty(handle) != 0;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `handle` | `fd_t` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-socket"></a>`socket`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn socket(domain: u32, socket_type: u32, protocol: u32) SocketError!socket_t {
    if (native_os == .windows) {
        // These flags are not actually part of the Windows API, instead they are converted here for compatibility
        const filtered_sock_type = socket_type & ~@as(u32, SOCK.NONBLOCK | SOCK.CLOEXEC);
        var flags: u32 = windows.ws2_32.WSA_FLAG_OVERLAPPED;
        if ((socket_type & SOCK.CLOEXEC) != 0) flags |= windows.ws2_32.WSA_FLAG_NO_HANDLE_INHERIT;

        const rc = try windows.WSASocketW(
            @bitCast(domain),
            @bitCast(filtered_sock_type),
            @bitCast(protocol),
            null,
            0,
            flags,
        );
        errdefer windows.closesocket(rc) catch unreachable;
        if ((socket_type & SOCK.NONBLOCK) != 0) {
            var mode: c_ulong = 1; // nonblocking
            if (windows.ws2_32.SOCKET_ERROR == windows.ws2_32.ioctlsocket(rc, windows.ws2_32.FIONBIO, &mode)) {
                switch (windows.ws2_32.WSAGetLastError()) {
                    // have not identified any error codes that should be handled yet
                    else => unreachable,
                }
            }
        }
        return rc;
    }

    const have_sock_flags = !builtin.target.os.tag.isDarwin() and native_os != .haiku;
    const filtered_sock_type = if (!have_sock_flags)
        socket_type & ~@as(u32, SOCK.NONBLOCK | SOCK.CLOEXEC)
    else
        socket_type;
    const rc = system.socket(domain, filtered_sock_type, protocol);
    switch (errno(rc)) {
        .SUCCESS => {
            const fd: fd_t = @intCast(rc);
            errdefer close(fd);
            if (!have_sock_flags) {
                try setSockFlags(fd, socket_type);
            }
            return fd;
        },
        .ACCES => return error.AccessDenied,
        .AFNOSUPPORT => return error.AddressFamilyNotSupported,
        .INVAL => return error.ProtocolFamilyNotAvailable,
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NOBUFS => return error.SystemResources,
        .NOMEM => return error.SystemResources,
        .PROTONOSUPPORT => return error.ProtocolNotSupported,
        .PROTOTYPE => return error.SocketTypeNotSupported,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `domain` | `u32` | – | – |
| `socket\_type` | `u32` | – | – |
| `protocol` | `u32` | – | – |
| Return | [`SocketError!socket_t`](#error-socketerror) | – | – |

</details>

---

### <a id="fn-shutdown"></a>`shutdown`

<details class="declaration-card" open>
<summary>Function – Shutdown socket send/receive operations</summary>

Shutdown socket send/receive operations

```zig
pub fn shutdown(sock: socket_t, how: ShutdownHow) ShutdownError!void {
    if (native_os == .windows) {
        const result = windows.ws2_32.shutdown(sock, switch (how) {
            .recv => windows.ws2_32.SD_RECEIVE,
            .send => windows.ws2_32.SD_SEND,
            .both => windows.ws2_32.SD_BOTH,
        });
        if (0 != result) switch (windows.ws2_32.WSAGetLastError()) {
            .WSAECONNABORTED => return error.ConnectionAborted,
            .WSAECONNRESET => return error.ConnectionResetByPeer,
            .WSAEINPROGRESS => return error.BlockingOperationInProgress,
            .WSAEINVAL => unreachable,
            .WSAENETDOWN => return error.NetworkSubsystemFailed,
            .WSAENOTCONN => return error.SocketNotConnected,
            .WSAENOTSOCK => unreachable,
            .WSANOTINITIALISED => unreachable,
            else => |err| return windows.unexpectedWSAError(err),
        };
    } else {
        const rc = system.shutdown(sock, switch (how) {
            .recv => SHUT.RD,
            .send => SHUT.WR,
            .both => SHUT.RDWR,
        });
        switch (errno(rc)) {
            .SUCCESS => return,
            .BADF => unreachable,
            .INVAL => unreachable,
            .NOTCONN => return error.SocketNotConnected,
            .NOTSOCK => unreachable,
            .NOBUFS => return error.SystemResources,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sock` | `socket_t` | – | – |
| `how` | [`ShutdownHow`](#type-shutdownhow) | – | – |
| Return | [`ShutdownError!void`](#error-shutdownerror) | – | – |

</details>

---

### <a id="fn-bind"></a>`bind`

<details class="declaration-card" open>
<summary>Function – addr is `*const T` where T is one of the sockaddr</summary>

addr is `*const T` where T is one of the sockaddr

```zig
pub fn bind(sock: socket_t, addr: *const sockaddr, len: socklen_t) BindError!void {
    if (native_os == .windows) {
        const rc = windows.bind(sock, addr, len);
        if (rc == windows.ws2_32.SOCKET_ERROR) {
            switch (windows.ws2_32.WSAGetLastError()) {
                .WSANOTINITIALISED => unreachable, // not initialized WSA
                .WSAEACCES => return error.AccessDenied,
                .WSAEADDRINUSE => return error.AddressInUse,
                .WSAEADDRNOTAVAIL => return error.AddressNotAvailable,
                .WSAENOTSOCK => return error.FileDescriptorNotASocket,
                .WSAEFAULT => unreachable, // invalid pointers
                .WSAEINVAL => return error.AlreadyBound,
                .WSAENOBUFS => return error.SystemResources,
                .WSAENETDOWN => return error.NetworkSubsystemFailed,
                else => |err| return windows.unexpectedWSAError(err),
            }
            unreachable;
        }
        return;
    } else {
        const rc = system.bind(sock, addr, len);
        switch (errno(rc)) {
            .SUCCESS => return,
            .ACCES, .PERM => return error.AccessDenied,
            .ADDRINUSE => return error.AddressInUse,
            .BADF => unreachable, // always a race condition if this error is returned
            .INVAL => unreachable, // invalid parameters
            .NOTSOCK => unreachable, // invalid `sockfd`
            .AFNOSUPPORT => return error.AddressFamilyNotSupported,
            .ADDRNOTAVAIL => return error.AddressNotAvailable,
            .FAULT => unreachable, // invalid `addr` pointer
            .LOOP => return error.SymLinkLoop,
            .NAMETOOLONG => return error.NameTooLong,
            .NOENT => return error.FileNotFound,
            .NOMEM => return error.SystemResources,
            .NOTDIR => return error.NotDir,
            .ROFS => return error.ReadOnlyFileSystem,
            else => |err| return unexpectedErrno(err),
        }
    }
    unreachable;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sock` | `socket_t` | – | – |
| `addr` | `*const sockaddr` | – | – |
| `len` | `socklen_t` | – | – |
| Return | [`BindError!void`](#error-binderror) | – | – |

</details>

---

### <a id="fn-listen"></a>`listen`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn listen(sock: socket_t, backlog: u31) ListenError!void {
    if (native_os == .windows) {
        const rc = windows.listen(sock, backlog);
        if (rc == windows.ws2_32.SOCKET_ERROR) {
            switch (windows.ws2_32.WSAGetLastError()) {
                .WSANOTINITIALISED => unreachable, // not initialized WSA
                .WSAENETDOWN => return error.NetworkSubsystemFailed,
                .WSAEADDRINUSE => return error.AddressInUse,
                .WSAEISCONN => return error.AlreadyConnected,
                .WSAEINVAL => return error.SocketNotBound,
                .WSAEMFILE, .WSAENOBUFS => return error.SystemResources,
                .WSAENOTSOCK => return error.FileDescriptorNotASocket,
                .WSAEOPNOTSUPP => return error.OperationNotSupported,
                .WSAEINPROGRESS => unreachable,
                else => |err| return windows.unexpectedWSAError(err),
            }
        }
        return;
    } else {
        const rc = system.listen(sock, backlog);
        switch (errno(rc)) {
            .SUCCESS => return,
            .ADDRINUSE => return error.AddressInUse,
            .BADF => unreachable,
            .NOTSOCK => return error.FileDescriptorNotASocket,
            .OPNOTSUPP => return error.OperationNotSupported,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sock` | `socket_t` | – | – |
| `backlog` | `u31` | – | – |
| Return | [`ListenError!void`](#error-listenerror) | – | – |

</details>

---

### <a id="fn-accept"></a>`accept`

<details class="declaration-card" open>
<summary>Function – Accept a connection on a socket</summary>

Accept a connection on a socket.
If `sockfd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.

```zig
pub fn accept(
    /// This argument is a socket that has been created with `socket`, bound to a local address
    /// with `bind`, and is listening for connections after a `listen`.
    sock: socket_t,
    /// This argument is a pointer to a sockaddr structure.  This structure is filled in with  the
    /// address  of  the  peer  socket, as known to the communications layer.  The exact format of the
    /// address returned addr is determined by the socket's address  family  (see  `socket`  and  the
    /// respective  protocol  man  pages).
    addr: ?*sockaddr,
    /// This argument is a value-result argument: the caller must initialize it to contain  the
    /// size (in bytes) of the structure pointed to by addr; on return it will contain the actual size
    /// of the peer address.
    ///
    /// The returned address is truncated if the buffer provided is too small; in this  case,  `addr_size`
    /// will return a value greater than was supplied to the call.
    addr_size: ?*socklen_t,
    /// The following values can be bitwise ORed in flags to obtain different behavior:
    /// * `SOCK.NONBLOCK` - Set the `NONBLOCK` file status flag on the open file description (see `open`)
    ///   referred  to by the new file descriptor.  Using this flag saves extra calls to `fcntl` to achieve
    ///   the same result.
    /// * `SOCK.CLOEXEC`  - Set the close-on-exec (`FD_CLOEXEC`) flag on the new file descriptor.   See  the
    ///   description  of the `CLOEXEC` flag in `open` for reasons why this may be useful.
    flags: u32,
) AcceptError!socket_t {
    const have_accept4 = !(builtin.target.os.tag.isDarwin() or native_os == .windows or native_os == .haiku);
    assert(0 == (flags & ~@as(u32, SOCK.NONBLOCK | SOCK.CLOEXEC))); // Unsupported flag(s)

    const accepted_sock: socket_t = while (true) {
        const rc = if (have_accept4)
            system.accept4(sock, addr, addr_size, flags)
        else if (native_os == .windows)
            windows.accept(sock, addr, addr_size)
        else
            system.accept(sock, addr, addr_size);

        if (native_os == .windows) {
            if (rc == windows.ws2_32.INVALID_SOCKET) {
                switch (windows.ws2_32.WSAGetLastError()) {
                    .WSANOTINITIALISED => unreachable, // not initialized WSA
                    .WSAECONNRESET => return error.ConnectionResetByPeer,
                    .WSAEFAULT => unreachable,
                    .WSAENOTSOCK => return error.FileDescriptorNotASocket,
                    .WSAEINVAL => return error.SocketNotListening,
                    .WSAEMFILE => return error.ProcessFdQuotaExceeded,
                    .WSAENETDOWN => return error.NetworkSubsystemFailed,
                    .WSAENOBUFS => return error.FileDescriptorNotASocket,
                    .WSAEOPNOTSUPP => return error.OperationNotSupported,
                    .WSAEWOULDBLOCK => return error.WouldBlock,
                    else => |err| return windows.unexpectedWSAError(err),
                }
            } else {
                break rc;
            }
        } else {
            switch (errno(rc)) {
                .SUCCESS => break @intCast(rc),
                .INTR => continue,
                .AGAIN => return error.WouldBlock,
                .BADF => unreachable, // always a race condition
                .CONNABORTED => return error.ConnectionAborted,
                .FAULT => unreachable,
                .INVAL => return error.SocketNotListening,
                .NOTSOCK => unreachable,
                .MFILE => return error.ProcessFdQuotaExceeded,
                .NFILE => return error.SystemFdQuotaExceeded,
                .NOBUFS => return error.SystemResources,
                .NOMEM => return error.SystemResources,
                .OPNOTSUPP => unreachable,
                .PROTO => return error.ProtocolFailure,
                .PERM => return error.BlockedByFirewall,
                else => |err| return unexpectedErrno(err),
            }
        }
    };

    errdefer switch (native_os) {
        .windows => windows.closesocket(accepted_sock) catch unreachable,
        else => close(accepted_sock),
    };
    if (!have_accept4) {
        try setSockFlags(accepted_sock, flags);
    }
    return accepted_sock;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sock` | `socket_t` | – | – |
| `addr` | `?*sockaddr` | – | – |
| `addr\_size` | `?*socklen_t` | – | – |
| `flags` | `u32` | – | – |
| Return | [`AcceptError!socket_t`](#error-accepterror) | – | – |

</details>

---

### <a id="fn-epoll-create1"></a>`epoll_create1`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn epoll_create1(flags: u32) EpollCreateError!i32 {
    const rc = system.epoll_create1(flags);
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        else => |err| return unexpectedErrno(err),

        .INVAL => unreachable,
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NOMEM => return error.SystemResources,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `flags` | `u32` | – | – |
| Return | [`EpollCreateError!i32`](#error-epollcreateerror) | – | – |

</details>

---

### <a id="fn-epoll-ctl"></a>`epoll_ctl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn epoll_ctl(epfd: i32, op: u32, fd: i32, event: ?*system.epoll_event) EpollCtlError!void {
    const rc = system.epoll_ctl(epfd, op, fd, event);
    switch (errno(rc)) {
        .SUCCESS => return,
        else => |err| return unexpectedErrno(err),

        .BADF => unreachable, // always a race condition if this happens
        .EXIST => return error.FileDescriptorAlreadyPresentInSet,
        .INVAL => unreachable,
        .LOOP => return error.OperationCausesCircularLoop,
        .NOENT => return error.FileDescriptorNotRegistered,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.UserResourceLimitReached,
        .PERM => return error.FileDescriptorIncompatibleWithEpoll,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `epfd` | `i32` | – | – |
| `op` | `u32` | – | – |
| `fd` | `i32` | – | – |
| `event` | `?*system.epoll_event` | – | – |
| Return | [`EpollCtlError!void`](#error-epollctlerror) | – | – |

</details>

---

### <a id="fn-epoll-wait"></a>`epoll_wait`

<details class="declaration-card" open>
<summary>Function – Waits for an I/O event on an epoll file descriptor</summary>

Waits for an I/O event on an epoll file descriptor.
Returns the number of file descriptors ready for the requested I/O,
or zero if no file descriptor became ready during the requested timeout milliseconds.

```zig
pub fn epoll_wait(epfd: i32, events: []system.epoll_event, timeout: i32) usize {
    while (true) {
        // TODO get rid of the @intCast
        const rc = system.epoll_wait(epfd, events.ptr, @intCast(events.len), timeout);
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .BADF => unreachable,
            .FAULT => unreachable,
            .INVAL => unreachable,
            else => unreachable,
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `epfd` | `i32` | – | – |
| `events` | `[]system.epoll_event` | – | – |
| `timeout` | `i32` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-eventfd"></a>`eventfd`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn eventfd(initval: u32, flags: u32) EventFdError!i32 {
    const rc = system.eventfd(initval, flags);
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        else => |err| return unexpectedErrno(err),

        .INVAL => unreachable, // invalid parameters
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NODEV => return error.SystemResources,
        .NOMEM => return error.SystemResources,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `initval` | `u32` | – | – |
| `flags` | `u32` | – | – |
| Return | [`EventFdError!i32`](#error-eventfderror) | – | – |

</details>

---

### <a id="fn-getsockname"></a>`getsockname`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn getsockname(sock: socket_t, addr: *sockaddr, addrlen: *socklen_t) GetSockNameError!void {
    if (native_os == .windows) {
        const rc = windows.getsockname(sock, addr, addrlen);
        if (rc == windows.ws2_32.SOCKET_ERROR) {
            switch (windows.ws2_32.WSAGetLastError()) {
                .WSANOTINITIALISED => unreachable,
                .WSAENETDOWN => return error.NetworkSubsystemFailed,
                .WSAEFAULT => unreachable, // addr or addrlen have invalid pointers or addrlen points to an incorrect value
                .WSAENOTSOCK => return error.FileDescriptorNotASocket,
                .WSAEINVAL => return error.SocketNotBound,
                else => |err| return windows.unexpectedWSAError(err),
            }
        }
        return;
    } else {
        const rc = system.getsockname(sock, addr, addrlen);
        switch (errno(rc)) {
            .SUCCESS => return,
            else => |err| return unexpectedErrno(err),

            .BADF => unreachable, // always a race condition
            .FAULT => unreachable,
            .INVAL => unreachable, // invalid parameters
            .NOTSOCK => return error.FileDescriptorNotASocket,
            .NOBUFS => return error.SystemResources,
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sock` | `socket_t` | – | – |
| `addr` | `*sockaddr` | – | – |
| `addrlen` | `*socklen_t` | – | – |
| Return | [`GetSockNameError!void`](#error-getsocknameerror) | – | – |

</details>

---

### <a id="fn-getpeername"></a>`getpeername`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn getpeername(sock: socket_t, addr: *sockaddr, addrlen: *socklen_t) GetSockNameError!void {
    if (native_os == .windows) {
        const rc = windows.getpeername(sock, addr, addrlen);
        if (rc == windows.ws2_32.SOCKET_ERROR) {
            switch (windows.ws2_32.WSAGetLastError()) {
                .WSANOTINITIALISED => unreachable,
                .WSAENETDOWN => return error.NetworkSubsystemFailed,
                .WSAEFAULT => unreachable, // addr or addrlen have invalid pointers or addrlen points to an incorrect value
                .WSAENOTSOCK => return error.FileDescriptorNotASocket,
                .WSAEINVAL => return error.SocketNotBound,
                else => |err| return windows.unexpectedWSAError(err),
            }
        }
        return;
    } else {
        const rc = system.getpeername(sock, addr, addrlen);
        switch (errno(rc)) {
            .SUCCESS => return,
            else => |err| return unexpectedErrno(err),

            .BADF => unreachable, // always a race condition
            .FAULT => unreachable,
            .INVAL => unreachable, // invalid parameters
            .NOTSOCK => return error.FileDescriptorNotASocket,
            .NOBUFS => return error.SystemResources,
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sock` | `socket_t` | – | – |
| `addr` | `*sockaddr` | – | – |
| `addrlen` | `*socklen_t` | – | – |
| Return | [`GetSockNameError!void`](#error-getsocknameerror) | – | – |

</details>

---

### <a id="fn-connect"></a>`connect`

<details class="declaration-card" open>
<summary>Function – Initiate a connection on a socket</summary>

Initiate a connection on a socket.
If `sockfd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN or EINPROGRESS is received.

```zig
pub fn connect(sock: socket_t, sock_addr: *const sockaddr, len: socklen_t) ConnectError!void {
    if (native_os == .windows) {
        const rc = windows.ws2_32.connect(sock, sock_addr, @intCast(len));
        if (rc == 0) return;
        switch (windows.ws2_32.WSAGetLastError()) {
            .WSAEADDRINUSE => return error.AddressInUse,
            .WSAEADDRNOTAVAIL => return error.AddressNotAvailable,
            .WSAECONNREFUSED => return error.ConnectionRefused,
            .WSAECONNRESET => return error.ConnectionResetByPeer,
            .WSAETIMEDOUT => return error.ConnectionTimedOut,
            .WSAEHOSTUNREACH, // TODO: should we return NetworkUnreachable in this case as well?
            .WSAENETUNREACH,
            => return error.NetworkUnreachable,
            .WSAEFAULT => unreachable,
            .WSAEINVAL => unreachable,
            .WSAEISCONN => unreachable,
            .WSAENOTSOCK => unreachable,
            .WSAEWOULDBLOCK => return error.WouldBlock,
            .WSAEACCES => unreachable,
            .WSAENOBUFS => return error.SystemResources,
            .WSAEAFNOSUPPORT => return error.AddressFamilyNotSupported,
            else => |err| return windows.unexpectedWSAError(err),
        }
        return;
    }

    while (true) {
        switch (errno(system.connect(sock, sock_addr, len))) {
            .SUCCESS => return,
            .ACCES => return error.AccessDenied,
            .PERM => return error.PermissionDenied,
            .ADDRINUSE => return error.AddressInUse,
            .ADDRNOTAVAIL => return error.AddressNotAvailable,
            .AFNOSUPPORT => return error.AddressFamilyNotSupported,
            .AGAIN, .INPROGRESS => return error.WouldBlock,
            .ALREADY => return error.ConnectionPending,
            .BADF => unreachable, // sockfd is not a valid open file descriptor.
            .CONNREFUSED => return error.ConnectionRefused,
            .CONNRESET => return error.ConnectionResetByPeer,
            .FAULT => unreachable, // The socket structure address is outside the user's address space.
            .INTR => continue,
            .ISCONN => unreachable, // The socket is already connected.
            .HOSTUNREACH => return error.NetworkUnreachable,
            .NETUNREACH => return error.NetworkUnreachable,
            .NOTSOCK => unreachable, // The file descriptor sockfd does not refer to a socket.
            .PROTOTYPE => unreachable, // The socket type does not support the requested communications protocol.
            .TIMEDOUT => return error.ConnectionTimedOut,
            .NOENT => return error.FileNotFound, // Returned when socket is AF.UNIX and the given path does not exist.
            .CONNABORTED => unreachable, // Tried to reuse socket that previously received error.ConnectionRefused.
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sock` | `socket_t` | – | – |
| `sock\_addr` | `*const sockaddr` | – | – |
| `len` | `socklen_t` | – | – |
| Return | [`ConnectError!void`](#error-connecterror) | – | – |

</details>

---

### <a id="fn-getsockopt"></a>`getsockopt`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn getsockopt(fd: socket_t, level: i32, optname: u32, opt: []u8) GetSockOptError!void {
    var len: socklen_t = @intCast(opt.len);
    switch (errno(system.getsockopt(fd, level, optname, opt.ptr, &len))) {
        .SUCCESS => {
            std.debug.assert(len == opt.len);
        },
        .BADF => unreachable,
        .NOTSOCK => unreachable,
        .INVAL => unreachable,
        .FAULT => unreachable,
        .NOPROTOOPT => return error.InvalidProtocolOption,
        .NOMEM => return error.SystemResources,
        .NOBUFS => return error.SystemResources,
        .ACCES => return error.AccessDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `socket_t` | – | – |
| `level` | `i32` | – | – |
| `optname` | `u32` | – | – |
| `opt` | `[]u8` | – | – |
| Return | [`GetSockOptError!void`](#error-getsockopterror) | – | – |

</details>

---

### <a id="fn-getsockopterror"></a>`getsockoptError`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn getsockoptError(sockfd: fd_t) ConnectError!void {
    var err_code: i32 = undefined;
    var size: u32 = @sizeOf(u32);
    const rc = system.getsockopt(sockfd, SOL.SOCKET, SO.ERROR, @ptrCast(&err_code), &size);
    assert(size == 4);
    switch (errno(rc)) {
        .SUCCESS => switch (@as(E, @enumFromInt(err_code))) {
            .SUCCESS => return,
            .ACCES => return error.AccessDenied,
            .PERM => return error.PermissionDenied,
            .ADDRINUSE => return error.AddressInUse,
            .ADDRNOTAVAIL => return error.AddressNotAvailable,
            .AFNOSUPPORT => return error.AddressFamilyNotSupported,
            .AGAIN => return error.SystemResources,
            .ALREADY => return error.ConnectionPending,
            .BADF => unreachable, // sockfd is not a valid open file descriptor.
            .CONNREFUSED => return error.ConnectionRefused,
            .FAULT => unreachable, // The socket structure address is outside the user's address space.
            .ISCONN => unreachable, // The socket is already connected.
            .HOSTUNREACH => return error.NetworkUnreachable,
            .NETUNREACH => return error.NetworkUnreachable,
            .NOTSOCK => unreachable, // The file descriptor sockfd does not refer to a socket.
            .PROTOTYPE => unreachable, // The socket type does not support the requested communications protocol.
            .TIMEDOUT => return error.ConnectionTimedOut,
            .CONNRESET => return error.ConnectionResetByPeer,
            else => |err| return unexpectedErrno(err),
        },
        .BADF => unreachable, // The argument sockfd is not a valid file descriptor.
        .FAULT => unreachable, // The address pointed to by optval or optlen is not in a valid part of the process address space.
        .INVAL => unreachable,
        .NOPROTOOPT => unreachable, // The option is unknown at the level indicated.
        .NOTSOCK => unreachable, // The file descriptor sockfd does not refer to a socket.
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| Return | [`ConnectError!void`](#error-connecterror) | – | – |

</details>

---

### <a id="fn-waitpid"></a>`waitpid`

<details class="declaration-card" open>
<summary>Function – Use this version of the `waitpid` wrapper if you spawned your child process using explicit</summary>

Use this version of the `waitpid` wrapper if you spawned your child process using explicit
`fork` and `execve` method.

```zig
pub fn waitpid(pid: pid_t, flags: u32) WaitPidResult {
    var status: if (builtin.link_libc) c_int else u32 = undefined;
    while (true) {
        const rc = system.waitpid(pid, &status, @intCast(flags));
        switch (errno(rc)) {
            .SUCCESS => return .{
                .pid = @intCast(rc),
                .status = @bitCast(status),
            },
            .INTR => continue,
            .CHILD => unreachable, // The process specified does not exist. It would be a race condition to handle this error.
            .INVAL => unreachable, // Invalid flags.
            else => unreachable,
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `flags` | `u32` | – | – |
| Return | [`WaitPidResult`](#type-waitpidresult) | – | – |

</details>

---

### <a id="fn-wait4"></a>`wait4`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn wait4(pid: pid_t, flags: u32, ru: ?*rusage) WaitPidResult {
    var status: if (builtin.link_libc) c_int else u32 = undefined;
    while (true) {
        const rc = system.wait4(pid, &status, @intCast(flags), ru);
        switch (errno(rc)) {
            .SUCCESS => return .{
                .pid = @intCast(rc),
                .status = @bitCast(status),
            },
            .INTR => continue,
            .CHILD => unreachable, // The process specified does not exist. It would be a race condition to handle this error.
            .INVAL => unreachable, // Invalid flags.
            else => unreachable,
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `flags` | `u32` | – | – |
| `ru` | `?*rusage` | – | – |
| Return | [`WaitPidResult`](#type-waitpidresult) | – | – |

</details>

---

### <a id="fn-fstat"></a>`fstat`

<details class="declaration-card" open>
<summary>Function – Return information about a file descriptor</summary>

Return information about a file descriptor.

```zig
pub fn fstat(fd: fd_t) FStatError!Stat {
    if (native_os == .wasi and !builtin.link_libc) {
        return Stat.fromFilestat(try std.os.fstat_wasi(fd));
    }
    if (native_os == .windows) {
        @compileError("fstat is not yet implemented on Windows");
    }

    const fstat_sym = if (lfs64_abi) system.fstat64 else system.fstat;
    var stat = mem.zeroes(Stat);
    switch (errno(fstat_sym(fd, &stat))) {
        .SUCCESS => return stat,
        .INVAL => unreachable,
        .BADF => unreachable, // Always a race condition.
        .NOMEM => return error.SystemResources,
        .ACCES => return error.AccessDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | [`FStatError!Stat`](#error-fstaterror) | – | – |

</details>

---

### <a id="fn-fstatat"></a>`fstatat`

<details class="declaration-card" open>
<summary>Function – Similar to `fstat`, but returns stat of a resource pointed to by `pathname`</summary>

Similar to `fstat`, but returns stat of a resource pointed to by `pathname`
which is relative to `dirfd` handle.
On WASI, `pathname` should be encoded as valid UTF-8.
On other platforms, `pathname` is an opaque sequence of bytes with no particular encoding.
See also `fstatatZ` and `std.os.fstatat_wasi`.

```zig
pub fn fstatat(dirfd: fd_t, pathname: []const u8, flags: u32) FStatAtError!Stat {
    if (native_os == .wasi and !builtin.link_libc) {
        const filestat = try std.os.fstatat_wasi(dirfd, pathname, .{
            .SYMLINK_FOLLOW = (flags & AT.SYMLINK_NOFOLLOW) == 0,
        });
        return Stat.fromFilestat(filestat);
    } else if (native_os == .windows) {
        @compileError("fstatat is not yet implemented on Windows");
    } else {
        const pathname_c = try toPosixPath(pathname);
        return fstatatZ(dirfd, &pathname_c, flags);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `pathname` | `[]const u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`FStatAtError!Stat`](#error-fstataterror) | – | – |

</details>

---

### <a id="fn-fstatatz"></a>`fstatatZ`

<details class="declaration-card" open>
<summary>Function – Same as `fstatat` but `pathname` is null-terminated</summary>

Same as `fstatat` but `pathname` is null-terminated.
See also `fstatat`.

```zig
pub fn fstatatZ(dirfd: fd_t, pathname: [*:0]const u8, flags: u32) FStatAtError!Stat {
    if (native_os == .wasi and !builtin.link_libc) {
        const filestat = try std.os.fstatat_wasi(dirfd, mem.sliceTo(pathname, 0), .{
            .SYMLINK_FOLLOW = (flags & AT.SYMLINK_NOFOLLOW) == 0,
        });
        return Stat.fromFilestat(filestat);
    }

    const fstatat_sym = if (lfs64_abi) system.fstatat64 else system.fstatat;
    var stat = mem.zeroes(Stat);
    switch (errno(fstatat_sym(dirfd, pathname, &stat, flags))) {
        .SUCCESS => return stat,
        .INVAL => unreachable,
        .BADF => unreachable, // Always a race condition.
        .NOMEM => return error.SystemResources,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .FAULT => unreachable,
        .NAMETOOLONG => return error.NameTooLong,
        .LOOP => return error.SymLinkLoop,
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.FileNotFound,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `pathname` | `[*:0]const u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`FStatAtError!Stat`](#error-fstataterror) | – | – |

</details>

---

### <a id="fn-kqueue"></a>`kqueue`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn kqueue() KQueueError!i32 {
    const rc = system.kqueue();
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NFILE => return error.SystemFdQuotaExceeded,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | [`KQueueError!i32`](#error-kqueueerror) | – | – |

</details>

---

### <a id="fn-kevent"></a>`kevent`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn kevent(
    kq: i32,
    changelist: []const Kevent,
    eventlist: []Kevent,
    timeout: ?*const timespec,
) KEventError!usize {
    while (true) {
        const rc = system.kevent(
            kq,
            changelist.ptr,
            cast(c_int, changelist.len) orelse return error.Overflow,
            eventlist.ptr,
            cast(c_int, eventlist.len) orelse return error.Overflow,
            timeout,
        );
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .ACCES => return error.AccessDenied,
            .FAULT => unreachable,
            .BADF => unreachable, // Always a race condition.
            .INTR => continue,
            .INVAL => unreachable,
            .NOENT => return error.EventNotFound,
            .NOMEM => return error.SystemResources,
            .SRCH => return error.ProcessNotFound,
            else => unreachable,
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `kq` | `i32` | – | – |
| `changelist` | `[]const Kevent` | – | – |
| `eventlist` | [`[]Kevent`](#fn-kevent) | – | – |
| `timeout` | `?*const timespec` | – | – |
| Return | [`KEventError!usize`](#error-keventerror) | – | – |

</details>

---

### <a id="fn-inotify-init1"></a>`inotify_init1`

<details class="declaration-card" open>
<summary>Function – initialize an inotify instance</summary>

initialize an inotify instance

```zig
pub fn inotify_init1(flags: u32) INotifyInitError!i32 {
    const rc = system.inotify_init1(flags);
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .INVAL => unreachable,
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NOMEM => return error.SystemResources,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `flags` | `u32` | – | – |
| Return | [`INotifyInitError!i32`](#error-inotifyiniterror) | – | – |

</details>

---

### <a id="fn-inotify-add-watch"></a>`inotify_add_watch`

<details class="declaration-card" open>
<summary>Function – add a watch to an initialized inotify instance</summary>

add a watch to an initialized inotify instance

```zig
pub fn inotify_add_watch(inotify_fd: i32, pathname: []const u8, mask: u32) INotifyAddWatchError!i32 {
    const pathname_c = try toPosixPath(pathname);
    return inotify_add_watchZ(inotify_fd, &pathname_c, mask);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `inotify\_fd` | `i32` | – | – |
| `pathname` | `[]const u8` | – | – |
| `mask` | `u32` | – | – |
| Return | [`INotifyAddWatchError!i32`](#error-inotifyaddwatcherror) | – | – |

</details>

---

### <a id="fn-inotify-add-watchz"></a>`inotify_add_watchZ`

<details class="declaration-card" open>
<summary>Function – Same as `inotify_add_watch` except pathname is null-terminated</summary>

Same as `inotify_add_watch` except pathname is null-terminated.

```zig
pub fn inotify_add_watchZ(inotify_fd: i32, pathname: [*:0]const u8, mask: u32) INotifyAddWatchError!i32 {
    const rc = system.inotify_add_watch(inotify_fd, pathname, mask);
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .ACCES => return error.AccessDenied,
        .BADF => unreachable,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .NAMETOOLONG => return error.NameTooLong,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.UserResourceLimitReached,
        .NOTDIR => return error.NotDir,
        .EXIST => return error.WatchAlreadyExists,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `inotify\_fd` | `i32` | – | – |
| `pathname` | `[*:0]const u8` | – | – |
| `mask` | `u32` | – | – |
| Return | [`INotifyAddWatchError!i32`](#error-inotifyaddwatcherror) | – | – |

</details>

---

### <a id="fn-inotify-rm-watch"></a>`inotify_rm_watch`

<details class="declaration-card" open>
<summary>Function – remove an existing watch from an inotify instance</summary>

remove an existing watch from an inotify instance

```zig
pub fn inotify_rm_watch(inotify_fd: i32, wd: i32) void {
    switch (errno(system.inotify_rm_watch(inotify_fd, wd))) {
        .SUCCESS => return,
        .BADF => unreachable,
        .INVAL => unreachable,
        else => unreachable,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `inotify\_fd` | `i32` | – | – |
| `wd` | `i32` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-fanotify-init"></a>`fanotify_init`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fanotify_init(flags: std.os.linux.fanotify.InitFlags, event_f_flags: u32) FanotifyInitError!i32 {
    const rc = system.fanotify_init(flags, event_f_flags);
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .INVAL => return error.UnsupportedFlags,
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NOMEM => return error.SystemResources,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `flags` | `std.os.linux.fanotify.InitFlags` | – | – |
| `event\_f\_flags` | `u32` | – | – |
| Return | [`FanotifyInitError!i32`](#error-fanotifyiniterror) | – | – |

</details>

---

### <a id="fn-fanotify-mark"></a>`fanotify_mark`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fanotify_mark(
    fanotify_fd: fd_t,
    flags: std.os.linux.fanotify.MarkFlags,
    mask: std.os.linux.fanotify.MarkMask,
    dirfd: fd_t,
    pathname: ?[]const u8,
) FanotifyMarkError!void {
    if (pathname) |path| {
        const path_c = try toPosixPath(path);
        return fanotify_markZ(fanotify_fd, flags, mask, dirfd, &path_c);
    } else {
        return fanotify_markZ(fanotify_fd, flags, mask, dirfd, null);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fanotify\_fd` | `fd_t` | – | – |
| `flags` | `std.os.linux.fanotify.MarkFlags` | – | – |
| `mask` | `std.os.linux.fanotify.MarkMask` | – | – |
| `dirfd` | `fd_t` | – | – |
| `pathname` | `?[]const u8` | – | – |
| Return | [`FanotifyMarkError!void`](#error-fanotifymarkerror) | – | – |

</details>

---

### <a id="fn-fanotify-markz"></a>`fanotify_markZ`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fanotify_markZ(
    fanotify_fd: fd_t,
    flags: std.os.linux.fanotify.MarkFlags,
    mask: std.os.linux.fanotify.MarkMask,
    dirfd: fd_t,
    pathname: ?[*:0]const u8,
) FanotifyMarkError!void {
    const rc = system.fanotify_mark(fanotify_fd, flags, mask, dirfd, pathname);
    switch (errno(rc)) {
        .SUCCESS => return,
        .BADF => unreachable,
        .EXIST => return error.MarkAlreadyExists,
        .INVAL => unreachable,
        .ISDIR => return error.IsDir,
        .NODEV => return error.NotAssociatedWithFileSystem,
        .NOENT => return error.FileNotFound,
        .NOMEM => return error.SystemResources,
        .NOSPC => return error.UserMarkQuotaExceeded,
        .NOTDIR => return error.NotDir,
        .OPNOTSUPP => return error.OperationNotSupported,
        .PERM => return error.PermissionDenied,
        .XDEV => return error.NotSameFileSystem,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fanotify\_fd` | `fd_t` | – | – |
| `flags` | `std.os.linux.fanotify.MarkFlags` | – | – |
| `mask` | `std.os.linux.fanotify.MarkMask` | – | – |
| `dirfd` | `fd_t` | – | – |
| `pathname` | `?[*:0]const u8` | – | – |
| Return | [`FanotifyMarkError!void`](#error-fanotifymarkerror) | – | – |

</details>

---

### <a id="fn-mprotect"></a>`mprotect`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn mprotect(memory: []align(page_size_min) u8, protection: u32) MProtectError!void {
    if (native_os == .windows) {
        const win_prot: windows.DWORD = switch (@as(u3, @truncate(protection))) {
            0b000 => windows.PAGE_NOACCESS,
            0b001 => windows.PAGE_READONLY,
            0b010 => unreachable, // +w -r not allowed
            0b011 => windows.PAGE_READWRITE,
            0b100 => windows.PAGE_EXECUTE,
            0b101 => windows.PAGE_EXECUTE_READ,
            0b110 => unreachable, // +w -r not allowed
            0b111 => windows.PAGE_EXECUTE_READWRITE,
        };
        var old: windows.DWORD = undefined;
        windows.VirtualProtect(memory.ptr, memory.len, win_prot, &old) catch |err| switch (err) {
            error.InvalidAddress => return error.AccessDenied,
            error.Unexpected => return error.Unexpected,
        };
    } else {
        switch (errno(system.mprotect(memory.ptr, memory.len, protection))) {
            .SUCCESS => return,
            .INVAL => unreachable,
            .ACCES => return error.AccessDenied,
            .NOMEM => return error.OutOfMemory,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `memory` | `[]align(page_size_min) u8` | – | – |
| `protection` | `u32` | – | – |
| Return | [`MProtectError!void`](#error-mprotecterror) | – | – |

</details>

---

### <a id="fn-fork"></a>`fork`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fork() ForkError!pid_t {
    const rc = system.fork();
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .AGAIN => return error.SystemResources,
        .NOMEM => return error.SystemResources,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | [`ForkError!pid_t`](#error-forkerror) | – | – |

</details>

---

### <a id="fn-mmap"></a>`mmap`

<details class="declaration-card" open>
<summary>Function – Map files or devices into memory</summary>

Map files or devices into memory.
`length` does not need to be aligned.
Use of a mapped region can result in these signals:
* SIGSEGV - Attempted write into a region mapped as read-only.
* SIGBUS - Attempted  access to a portion of the buffer that does not correspond to the file

```zig
pub fn mmap(
    ptr: ?[*]align(page_size_min) u8,
    length: usize,
    prot: u32,
    flags: system.MAP,
    fd: fd_t,
    offset: u64,
) MMapError![]align(page_size_min) u8 {
    const mmap_sym = if (lfs64_abi) system.mmap64 else system.mmap;
    const rc = mmap_sym(ptr, length, prot, @bitCast(flags), fd, @bitCast(offset));
    const err: E = if (builtin.link_libc) blk: {
        if (rc != std.c.MAP_FAILED) return @as([*]align(page_size_min) u8, @ptrCast(@alignCast(rc)))[0..length];
        break :blk @enumFromInt(system._errno().*);
    } else blk: {
        const err = errno(rc);
        if (err == .SUCCESS) return @as([*]align(page_size_min) u8, @ptrFromInt(rc))[0..length];
        break :blk err;
    };
    switch (err) {
        .SUCCESS => unreachable,
        .TXTBSY => return error.AccessDenied,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .AGAIN => return error.LockedMemoryLimitExceeded,
        .BADF => unreachable, // Always a race condition.
        .OVERFLOW => unreachable, // The number of pages used for length + offset would overflow.
        .NODEV => return error.MemoryMappingNotSupported,
        .INVAL => unreachable, // Invalid parameters to mmap()
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NOMEM => return error.OutOfMemory,
        .EXIST => return error.MappingAlreadyExists,
        else => return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `?[*]align(page_size_min) u8` | – | – |
| `length` | `usize` | – | – |
| `prot` | `u32` | – | – |
| `flags` | [`system.MAP`](#const-map) | – | – |
| `fd` | `fd_t` | – | – |
| `offset` | `u64` | – | – |
| Return | [`MMapError![]align(page_size_min) u8`](#error-mmaperror) | – | – |

</details>

---

### <a id="fn-munmap"></a>`munmap`

<details class="declaration-card" open>
<summary>Function – Deletes the mappings for the specified address range, causing</summary>

Deletes the mappings for the specified address range, causing
further references to addresses within the range to generate invalid memory references.
Note that while POSIX allows unmapping a region in the middle of an existing mapping,
Zig's munmap function does not, for two reasons:
* It violates the Zig principle that resource deallocation must succeed.
* The Windows function, VirtualFree, has this restriction.

```zig
pub fn munmap(memory: []align(page_size_min) const u8) void {
    switch (errno(system.munmap(memory.ptr, memory.len))) {
        .SUCCESS => return,
        .INVAL => unreachable, // Invalid parameters.
        .NOMEM => unreachable, // Attempted to unmap a region in the middle of an existing mapping.
        else => unreachable,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `memory` | `[]align(page_size_min) const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-mremap"></a>`mremap`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn mremap(
    old_address: ?[*]align(page_size_min) u8,
    old_len: usize,
    new_len: usize,
    flags: system.MREMAP,
    new_address: ?[*]align(page_size_min) u8,
) MRemapError![]align(page_size_min) u8 {
    const rc = system.mremap(old_address, old_len, new_len, flags, new_address);
    const err: E = if (builtin.link_libc) blk: {
        if (rc != std.c.MAP_FAILED) return @as([*]align(page_size_min) u8, @ptrCast(@alignCast(rc)))[0..new_len];
        break :blk @enumFromInt(system._errno().*);
    } else blk: {
        const err = errno(rc);
        if (err == .SUCCESS) return @as([*]align(page_size_min) u8, @ptrFromInt(rc))[0..new_len];
        break :blk err;
    };
    switch (err) {
        .SUCCESS => unreachable,
        .AGAIN => return error.LockedMemoryLimitExceeded,
        .INVAL => return error.InvalidSyscallParameters,
        .NOMEM => return error.OutOfMemory,
        .FAULT => unreachable,
        else => return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_address` | `?[*]align(page_size_min) u8` | – | – |
| `old\_len` | `usize` | – | – |
| `new\_len` | `usize` | – | – |
| `flags` | [`system.MREMAP`](#fn-mremap) | – | – |
| `new\_address` | `?[*]align(page_size_min) u8` | – | – |
| Return | [`MRemapError![]align(page_size_min) u8`](#error-mremaperror) | – | – |

</details>

---

### <a id="fn-msync"></a>`msync`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn msync(memory: []align(page_size_min) u8, flags: i32) MSyncError!void {
    switch (errno(system.msync(memory.ptr, memory.len, flags))) {
        .SUCCESS => return,
        .PERM => return error.PermissionDenied,
        .NOMEM => return error.UnmappedMemory, // Unsuccessful, provided pointer does not point mapped memory
        .INVAL => unreachable, // Invalid parameters.
        else => unreachable,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `memory` | `[]align(page_size_min) u8` | – | – |
| `flags` | `i32` | – | – |
| Return | [`MSyncError!void`](#error-msyncerror) | – | – |

</details>

---

### <a id="fn-access"></a>`access`

<details class="declaration-card" open>
<summary>Function – check user&#39;s permissions for a file</summary>

check user's permissions for a file

* On Windows, asserts `path` is valid [WTF-8](https://simonsapin.github.io/wtf-8/).
* On WASI, invalid UTF-8 passed to `path` causes `error.InvalidUtf8`.
* On other platforms, `path` is an opaque sequence of bytes with no particular encoding.

On Windows, `mode` is ignored. This is a POSIX API that is only partially supported by
Windows. See `fs` for the cross-platform file system API.

```zig
pub fn access(path: []const u8, mode: u32) AccessError!void {
    if (native_os == .windows) {
        const path_w = try windows.sliceToPrefixedFileW(null, path);
        _ = try windows.GetFileAttributesW(path_w.span().ptr);
        return;
    } else if (native_os == .wasi and !builtin.link_libc) {
        return faccessat(AT.FDCWD, path, mode, 0);
    }
    const path_c = try toPosixPath(path);
    return accessZ(&path_c, mode);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[]const u8` | – | – |
| `mode` | `u32` | – | – |
| Return | [`AccessError!void`](#error-accesserror) | – | – |

</details>

---

### <a id="fn-accessz"></a>`accessZ`

<details class="declaration-card" open>
<summary>Function – Same as `access` except `path` is null-terminated</summary>

Same as `access` except `path` is null-terminated.

```zig
pub fn accessZ(path: [*:0]const u8, mode: u32) AccessError!void {
    if (native_os == .windows) {
        const path_w = try windows.cStrToPrefixedFileW(null, path);
        _ = try windows.GetFileAttributesW(path_w.span().ptr);
        return;
    } else if (native_os == .wasi and !builtin.link_libc) {
        return access(mem.sliceTo(path, 0), mode);
    }
    switch (errno(system.access(path, mode))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .ROFS => return error.ReadOnlyFileSystem,
        .LOOP => return error.SymLinkLoop,
        .TXTBSY => return error.FileBusy,
        .NOTDIR => return error.FileNotFound,
        .NOENT => return error.FileNotFound,
        .NAMETOOLONG => return error.NameTooLong,
        .INVAL => unreachable,
        .FAULT => unreachable,
        .IO => return error.InputOutput,
        .NOMEM => return error.SystemResources,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `mode` | `u32` | – | – |
| Return | [`AccessError!void`](#error-accesserror) | – | – |

</details>

---

### <a id="fn-faccessat"></a>`faccessat`

<details class="declaration-card" open>
<summary>Function – Check user&#39;s permissions for a file, based on an open directory handle</summary>

Check user's permissions for a file, based on an open directory handle.

* On Windows, asserts `path` is valid [WTF-8](https://simonsapin.github.io/wtf-8/).
* On WASI, invalid UTF-8 passed to `path` causes `error.InvalidUtf8`.
* On other platforms, `path` is an opaque sequence of bytes with no particular encoding.

On Windows, `mode` is ignored. This is a POSIX API that is only partially supported by
Windows. See `fs` for the cross-platform file system API.

```zig
pub fn faccessat(dirfd: fd_t, path: []const u8, mode: u32, flags: u32) AccessError!void {
    if (native_os == .windows) {
        const path_w = try windows.sliceToPrefixedFileW(dirfd, path);
        return faccessatW(dirfd, path_w.span().ptr);
    } else if (native_os == .wasi and !builtin.link_libc) {
        const resolved: RelativePathWasi = .{ .dir_fd = dirfd, .relative_path = path };

        const st = try std.os.fstatat_wasi(dirfd, path, .{
            .SYMLINK_FOLLOW = (flags & AT.SYMLINK_NOFOLLOW) == 0,
        });

        if (mode != F_OK) {
            var directory: wasi.fdstat_t = undefined;
            if (wasi.fd_fdstat_get(resolved.dir_fd, &directory) != .SUCCESS) {
                return error.AccessDenied;
            }

            var rights: wasi.rights_t = .{};
            if (mode & R_OK != 0) {
                if (st.filetype == .DIRECTORY) {
                    rights.FD_READDIR = true;
                } else {
                    rights.FD_READ = true;
                }
            }
            if (mode & W_OK != 0) {
                rights.FD_WRITE = true;
            }
            // No validation for X_OK

            // https://github.com/ziglang/zig/issues/18882
            const rights_int: u64 = @bitCast(rights);
            const inheriting_int: u64 = @bitCast(directory.fs_rights_inheriting);
            if ((rights_int & inheriting_int) != rights_int) {
                return error.AccessDenied;
            }
        }
        return;
    }
    const path_c = try toPosixPath(path);
    return faccessatZ(dirfd, &path_c, mode, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `path` | `[]const u8` | – | – |
| `mode` | `u32` | – | – |
| `flags` | `u32` | – | – |
| Return | [`AccessError!void`](#error-accesserror) | – | – |

</details>

---

### <a id="fn-faccessatz"></a>`faccessatZ`

<details class="declaration-card" open>
<summary>Function – Same as `faccessat` except the path parameter is null-terminated</summary>

Same as `faccessat` except the path parameter is null-terminated.

```zig
pub fn faccessatZ(dirfd: fd_t, path: [*:0]const u8, mode: u32, flags: u32) AccessError!void {
    if (native_os == .windows) {
        const path_w = try windows.cStrToPrefixedFileW(dirfd, path);
        return faccessatW(dirfd, path_w.span().ptr);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return faccessat(dirfd, mem.sliceTo(path, 0), mode, flags);
    }
    switch (errno(system.faccessat(dirfd, path, mode, flags))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .ROFS => return error.ReadOnlyFileSystem,
        .LOOP => return error.SymLinkLoop,
        .TXTBSY => return error.FileBusy,
        .NOTDIR => return error.FileNotFound,
        .NOENT => return error.FileNotFound,
        .NAMETOOLONG => return error.NameTooLong,
        .INVAL => unreachable,
        .FAULT => unreachable,
        .IO => return error.InputOutput,
        .NOMEM => return error.SystemResources,
        .ILSEQ => |err| if (native_os == .wasi)
            return error.InvalidUtf8
        else
            return unexpectedErrno(err),
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `mode` | `u32` | – | – |
| `flags` | `u32` | – | – |
| Return | [`AccessError!void`](#error-accesserror) | – | – |

</details>

---

### <a id="fn-faccessatw"></a>`faccessatW`

<details class="declaration-card" open>
<summary>Function – Same as `faccessat` except asserts the target is Windows and the path parameter</summary>

Same as `faccessat` except asserts the target is Windows and the path parameter
is NtDll-prefixed, null-terminated, WTF-16 encoded.

```zig
pub fn faccessatW(dirfd: fd_t, sub_path_w: [*:0]const u16) AccessError!void {
    if (sub_path_w[0] == '.' and sub_path_w[1] == 0) {
        return;
    }
    if (sub_path_w[0] == '.' and sub_path_w[1] == '.' and sub_path_w[2] == 0) {
        return;
    }

    const path_len_bytes = cast(u16, mem.sliceTo(sub_path_w, 0).len * 2) orelse return error.NameTooLong;
    var nt_name = windows.UNICODE_STRING{
        .Length = path_len_bytes,
        .MaximumLength = path_len_bytes,
        .Buffer = @constCast(sub_path_w),
    };
    var attr = windows.OBJECT_ATTRIBUTES{
        .Length = @sizeOf(windows.OBJECT_ATTRIBUTES),
        .RootDirectory = if (fs.path.isAbsoluteWindowsW(sub_path_w)) null else dirfd,
        .Attributes = 0, // Note we do not use OBJ_CASE_INSENSITIVE here.
        .ObjectName = &nt_name,
        .SecurityDescriptor = null,
        .SecurityQualityOfService = null,
    };
    var basic_info: windows.FILE_BASIC_INFORMATION = undefined;
    switch (windows.ntdll.NtQueryAttributesFile(&attr, &basic_info)) {
        .SUCCESS => return,
        .OBJECT_NAME_NOT_FOUND => return error.FileNotFound,
        .OBJECT_PATH_NOT_FOUND => return error.FileNotFound,
        .OBJECT_NAME_INVALID => unreachable,
        .INVALID_PARAMETER => unreachable,
        .ACCESS_DENIED => return error.AccessDenied,
        .OBJECT_PATH_SYNTAX_BAD => unreachable,
        else => |rc| return windows.unexpectedStatus(rc),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `sub\_path\_w` | `[*:0]const u16` | – | – |
| Return | [`AccessError!void`](#error-accesserror) | – | – |

</details>

---

### <a id="fn-pipe"></a>`pipe`

<details class="declaration-card" open>
<summary>Function – Creates a unidirectional data channel that can be used for interprocess communication</summary>

Creates a unidirectional data channel that can be used for interprocess communication.

```zig
pub fn pipe() PipeError![2]fd_t {
    var fds: [2]fd_t = undefined;
    switch (errno(system.pipe(&fds))) {
        .SUCCESS => return fds,
        .INVAL => unreachable, // Invalid parameters to pipe()
        .FAULT => unreachable, // Invalid fds pointer
        .NFILE => return error.SystemFdQuotaExceeded,
        .MFILE => return error.ProcessFdQuotaExceeded,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | [`PipeError![2]fd_t`](#error-pipeerror) | – | – |

</details>

---

### <a id="fn-pipe2"></a>`pipe2`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn pipe2(flags: O) PipeError![2]fd_t {
    if (@TypeOf(system.pipe2) != void) {
        var fds: [2]fd_t = undefined;
        switch (errno(system.pipe2(&fds, flags))) {
            .SUCCESS => return fds,
            .INVAL => unreachable, // Invalid flags
            .FAULT => unreachable, // Invalid fds pointer
            .NFILE => return error.SystemFdQuotaExceeded,
            .MFILE => return error.ProcessFdQuotaExceeded,
            else => |err| return unexpectedErrno(err),
        }
    }

    const fds: [2]fd_t = try pipe();
    errdefer {
        close(fds[0]);
        close(fds[1]);
    }

    // https://github.com/ziglang/zig/issues/18882
    if (@as(u32, @bitCast(flags)) == 0)
        return fds;

    // CLOEXEC is special, it's a file descriptor flag and must be set using
    // F.SETFD.
    if (flags.CLOEXEC) {
        for (fds) |fd| {
            switch (errno(system.fcntl(fd, F.SETFD, @as(u32, FD_CLOEXEC)))) {
                .SUCCESS => {},
                .INVAL => unreachable, // Invalid flags
                .BADF => unreachable, // Always a race condition
                else => |err| return unexpectedErrno(err),
            }
        }
    }

    const new_flags: u32 = f: {
        var new_flags = flags;
        new_flags.CLOEXEC = false;
        break :f @bitCast(new_flags);
    };
    // Set every other flag affecting the file status using F.SETFL.
    if (new_flags != 0) {
        for (fds) |fd| {
            switch (errno(system.fcntl(fd, F.SETFL, new_flags))) {
                .SUCCESS => {},
                .INVAL => unreachable, // Invalid flags
                .BADF => unreachable, // Always a race condition
                else => |err| return unexpectedErrno(err),
            }
        }
    }

    return fds;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `flags` | `O` | – | – |
| Return | [`PipeError![2]fd_t`](#error-pipeerror) | – | – |

</details>

---

### <a id="fn-sysctl"></a>`sysctl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sysctl(
    name: []const c_int,
    oldp: ?*anyopaque,
    oldlenp: ?*usize,
    newp: ?*anyopaque,
    newlen: usize,
) SysCtlError!void {
    if (native_os == .wasi) {
        @compileError("sysctl not supported on WASI");
    }
    if (native_os == .haiku) {
        @compileError("sysctl not supported on Haiku");
    }

    const name_len = cast(c_uint, name.len) orelse return error.NameTooLong;
    switch (errno(system.sysctl(name.ptr, name_len, oldp, oldlenp, newp, newlen))) {
        .SUCCESS => return,
        .FAULT => unreachable,
        .PERM => return error.PermissionDenied,
        .NOMEM => return error.SystemResources,
        .NOENT => return error.UnknownName,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[]const c_int` | – | – |
| `oldp` | `?*anyopaque` | – | – |
| `oldlenp` | `?*usize` | – | – |
| `newp` | `?*anyopaque` | – | – |
| `newlen` | `usize` | – | – |
| Return | [`SysCtlError!void`](#error-sysctlerror) | – | – |

</details>

---

### <a id="fn-sysctlbynamez"></a>`sysctlbynameZ`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sysctlbynameZ(
    name: [*:0]const u8,
    oldp: ?*anyopaque,
    oldlenp: ?*usize,
    newp: ?*anyopaque,
    newlen: usize,
) SysCtlError!void {
    if (native_os == .wasi) {
        @compileError("sysctl not supported on WASI");
    }
    if (native_os == .haiku) {
        @compileError("sysctl not supported on Haiku");
    }

    switch (errno(system.sysctlbyname(name, oldp, oldlenp, newp, newlen))) {
        .SUCCESS => return,
        .FAULT => unreachable,
        .PERM => return error.PermissionDenied,
        .NOMEM => return error.SystemResources,
        .NOENT => return error.UnknownName,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `oldp` | `?*anyopaque` | – | – |
| `oldlenp` | `?*usize` | – | – |
| `newp` | `?*anyopaque` | – | – |
| `newlen` | `usize` | – | – |
| Return | [`SysCtlError!void`](#error-sysctlerror) | – | – |

</details>

---

### <a id="fn-gettimeofday"></a>`gettimeofday`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn gettimeofday(tv: ?*timeval, tz: ?*timezone) void {
    switch (errno(system.gettimeofday(tv, tz))) {
        .SUCCESS => return,
        .INVAL => unreachable,
        else => unreachable,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `tv` | `?*timeval` | – | – |
| `tz` | `?*timezone` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-lseek-set"></a>`lseek_SET`

<details class="declaration-card" open>
<summary>Function – Repositions read/write file offset relative to the beginning</summary>

Repositions read/write file offset relative to the beginning.

```zig
pub fn lseek_SET(fd: fd_t, offset: u64) SeekError!void {
    if (native_os == .linux and !builtin.link_libc and @sizeOf(usize) == 4) {
        var result: u64 = undefined;
        switch (errno(system.llseek(fd, offset, &result, SEEK.SET))) {
            .SUCCESS => return,
            .BADF => unreachable, // always a race condition
            .INVAL => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .NXIO => return error.Unseekable,
            else => |err| return unexpectedErrno(err),
        }
    }
    if (native_os == .windows) {
        return windows.SetFilePointerEx_BEGIN(fd, offset);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        var new_offset: wasi.filesize_t = undefined;
        switch (wasi.fd_seek(fd, @bitCast(offset), .SET, &new_offset)) {
            .SUCCESS => return,
            .BADF => unreachable, // always a race condition
            .INVAL => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .NXIO => return error.Unseekable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }

    const lseek_sym = if (lfs64_abi) system.lseek64 else system.lseek;
    switch (errno(lseek_sym(fd, @bitCast(offset), SEEK.SET))) {
        .SUCCESS => return,
        .BADF => unreachable, // always a race condition
        .INVAL => return error.Unseekable,
        .OVERFLOW => return error.Unseekable,
        .SPIPE => return error.Unseekable,
        .NXIO => return error.Unseekable,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `offset` | `u64` | – | – |
| Return | [`SeekError!void`](#error-seekerror) | – | – |

</details>

---

### <a id="fn-lseek-cur"></a>`lseek_CUR`

<details class="declaration-card" open>
<summary>Function – Repositions read/write file offset relative to the current offset</summary>

Repositions read/write file offset relative to the current offset.

```zig
pub fn lseek_CUR(fd: fd_t, offset: i64) SeekError!void {
    if (native_os == .linux and !builtin.link_libc and @sizeOf(usize) == 4) {
        var result: u64 = undefined;
        switch (errno(system.llseek(fd, @bitCast(offset), &result, SEEK.CUR))) {
            .SUCCESS => return,
            .BADF => unreachable, // always a race condition
            .INVAL => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .NXIO => return error.Unseekable,
            else => |err| return unexpectedErrno(err),
        }
    }
    if (native_os == .windows) {
        return windows.SetFilePointerEx_CURRENT(fd, offset);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        var new_offset: wasi.filesize_t = undefined;
        switch (wasi.fd_seek(fd, offset, .CUR, &new_offset)) {
            .SUCCESS => return,
            .BADF => unreachable, // always a race condition
            .INVAL => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .NXIO => return error.Unseekable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }
    const lseek_sym = if (lfs64_abi) system.lseek64 else system.lseek;
    switch (errno(lseek_sym(fd, @bitCast(offset), SEEK.CUR))) {
        .SUCCESS => return,
        .BADF => unreachable, // always a race condition
        .INVAL => return error.Unseekable,
        .OVERFLOW => return error.Unseekable,
        .SPIPE => return error.Unseekable,
        .NXIO => return error.Unseekable,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `offset` | `i64` | – | – |
| Return | [`SeekError!void`](#error-seekerror) | – | – |

</details>

---

### <a id="fn-lseek-end"></a>`lseek_END`

<details class="declaration-card" open>
<summary>Function – Repositions read/write file offset relative to the end</summary>

Repositions read/write file offset relative to the end.

```zig
pub fn lseek_END(fd: fd_t, offset: i64) SeekError!void {
    if (native_os == .linux and !builtin.link_libc and @sizeOf(usize) == 4) {
        var result: u64 = undefined;
        switch (errno(system.llseek(fd, @bitCast(offset), &result, SEEK.END))) {
            .SUCCESS => return,
            .BADF => unreachable, // always a race condition
            .INVAL => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .NXIO => return error.Unseekable,
            else => |err| return unexpectedErrno(err),
        }
    }
    if (native_os == .windows) {
        return windows.SetFilePointerEx_END(fd, offset);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        var new_offset: wasi.filesize_t = undefined;
        switch (wasi.fd_seek(fd, offset, .END, &new_offset)) {
            .SUCCESS => return,
            .BADF => unreachable, // always a race condition
            .INVAL => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .NXIO => return error.Unseekable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }
    const lseek_sym = if (lfs64_abi) system.lseek64 else system.lseek;
    switch (errno(lseek_sym(fd, @bitCast(offset), SEEK.END))) {
        .SUCCESS => return,
        .BADF => unreachable, // always a race condition
        .INVAL => return error.Unseekable,
        .OVERFLOW => return error.Unseekable,
        .SPIPE => return error.Unseekable,
        .NXIO => return error.Unseekable,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `offset` | `i64` | – | – |
| Return | [`SeekError!void`](#error-seekerror) | – | – |

</details>

---

### <a id="fn-lseek-cur-get"></a>`lseek_CUR_get`

<details class="declaration-card" open>
<summary>Function – Returns the read/write file offset relative to the beginning</summary>

Returns the read/write file offset relative to the beginning.

```zig
pub fn lseek_CUR_get(fd: fd_t) SeekError!u64 {
    if (native_os == .linux and !builtin.link_libc and @sizeOf(usize) == 4) {
        var result: u64 = undefined;
        switch (errno(system.llseek(fd, 0, &result, SEEK.CUR))) {
            .SUCCESS => return result,
            .BADF => unreachable, // always a race condition
            .INVAL => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .NXIO => return error.Unseekable,
            else => |err| return unexpectedErrno(err),
        }
    }
    if (native_os == .windows) {
        return windows.SetFilePointerEx_CURRENT_get(fd);
    }
    if (native_os == .wasi and !builtin.link_libc) {
        var new_offset: wasi.filesize_t = undefined;
        switch (wasi.fd_seek(fd, 0, .CUR, &new_offset)) {
            .SUCCESS => return new_offset,
            .BADF => unreachable, // always a race condition
            .INVAL => return error.Unseekable,
            .OVERFLOW => return error.Unseekable,
            .SPIPE => return error.Unseekable,
            .NXIO => return error.Unseekable,
            .NOTCAPABLE => return error.AccessDenied,
            else => |err| return unexpectedErrno(err),
        }
    }
    const lseek_sym = if (lfs64_abi) system.lseek64 else system.lseek;
    const rc = lseek_sym(fd, 0, SEEK.CUR);
    switch (errno(rc)) {
        .SUCCESS => return @bitCast(rc),
        .BADF => unreachable, // always a race condition
        .INVAL => return error.Unseekable,
        .OVERFLOW => return error.Unseekable,
        .SPIPE => return error.Unseekable,
        .NXIO => return error.Unseekable,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | [`SeekError!u64`](#error-seekerror) | – | – |

</details>

---

### <a id="fn-fcntl"></a>`fcntl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn fcntl(fd: fd_t, cmd: i32, arg: usize) FcntlError!usize {
    while (true) {
        const rc = system.fcntl(fd, cmd, arg);
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .INTR => continue,
            .AGAIN, .ACCES => return error.Locked,
            .BADF => unreachable,
            .BUSY => return error.FileBusy,
            .INVAL => unreachable, // invalid parameters
            .PERM => return error.PermissionDenied,
            .MFILE => return error.ProcessFdQuotaExceeded,
            .NOTDIR => unreachable, // invalid parameter
            .DEADLK => return error.DeadLock,
            .NOLCK => return error.LockedRegionLimitExceeded,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `cmd` | `i32` | – | – |
| `arg` | `usize` | – | – |
| Return | [`FcntlError!usize`](#error-fcntlerror) | – | – |

</details>

---

### <a id="fn-flock"></a>`flock`

<details class="declaration-card" open>
<summary>Function – Depending on the operating system `flock` may or may not interact with</summary>

Depending on the operating system `flock` may or may not interact with
`fcntl` locks made by other processes.

```zig
pub fn flock(fd: fd_t, operation: i32) FlockError!void {
    while (true) {
        const rc = system.flock(fd, operation);
        switch (errno(rc)) {
            .SUCCESS => return,
            .BADF => unreachable,
            .INTR => continue,
            .INVAL => unreachable, // invalid parameters
            .NOLCK => return error.SystemResources,
            .AGAIN => return error.WouldBlock, // TODO: integrate with async instead of just returning an error
            .OPNOTSUPP => return error.FileLocksNotSupported,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `operation` | `i32` | – | – |
| Return | [`FlockError!void`](#error-flockerror) | – | – |

</details>

---

### <a id="fn-realpath"></a>`realpath`

<details class="declaration-card" open>
<summary>Function – Return the canonicalized absolute pathname</summary>

Return the canonicalized absolute pathname.

Expands all symbolic links and resolves references to `.`, `..`, and
extra `/` characters in `pathname`.

On Windows, `pathname` should be encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).

On other platforms, `pathname` is an opaque sequence of bytes with no particular encoding.

The return value is a slice of `out_buffer`, but not necessarily from the beginning.

See also `realpathZ` and `realpathW`.

* On Windows, the result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).
* On other platforms, the result is an opaque sequence of bytes with no particular encoding.

Calling this function is usually a bug.

```zig
pub fn realpath(pathname: []const u8, out_buffer: *[max_path_bytes]u8) RealPathError![]u8 {
    if (native_os == .windows) {
        const pathname_w = try windows.sliceToPrefixedFileW(null, pathname);
        return realpathW(pathname_w.span(), out_buffer);
    } else if (native_os == .wasi and !builtin.link_libc) {
        @compileError("WASI does not support os.realpath");
    }
    const pathname_c = try toPosixPath(pathname);
    return realpathZ(&pathname_c, out_buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pathname` | `[]const u8` | – | – |
| `out\_buffer` | `*[max_path_bytes]u8` | – | – |
| Return | [`RealPathError![]u8`](#error-realpatherror) | – | – |

</details>

---

### <a id="fn-realpathz"></a>`realpathZ`

<details class="declaration-card" open>
<summary>Function – Same as `realpath` except `pathname` is null-terminated</summary>

Same as `realpath` except `pathname` is null-terminated.

Calling this function is usually a bug.

```zig
pub fn realpathZ(pathname: [*:0]const u8, out_buffer: *[max_path_bytes]u8) RealPathError![]u8 {
    if (native_os == .windows) {
        const pathname_w = try windows.cStrToPrefixedFileW(null, pathname);
        return realpathW(pathname_w.span(), out_buffer);
    } else if (native_os == .wasi and !builtin.link_libc) {
        return realpath(mem.sliceTo(pathname, 0), out_buffer);
    }
    if (!builtin.link_libc) {
        const flags: O = switch (native_os) {
            .linux => .{
                .NONBLOCK = true,
                .CLOEXEC = true,
                .PATH = true,
            },
            else => .{
                .NONBLOCK = true,
                .CLOEXEC = true,
            },
        };
        const fd = openZ(pathname, flags, 0) catch |err| switch (err) {
            error.FileLocksNotSupported => unreachable,
            error.WouldBlock => unreachable,
            error.FileBusy => unreachable, // not asking for write permissions
            error.InvalidUtf8 => unreachable, // WASI-only
            else => |e| return e,
        };
        defer close(fd);

        return std.os.getFdPath(fd, out_buffer);
    }
    const result_path = std.c.realpath(pathname, out_buffer) orelse switch (@as(E, @enumFromInt(std.c._errno().*))) {
        .SUCCESS => unreachable,
        .INVAL => unreachable,
        .BADF => unreachable,
        .FAULT => unreachable,
        .ACCES => return error.AccessDenied,
        .NOENT => return error.FileNotFound,
        .OPNOTSUPP => return error.NotSupported,
        .NOTDIR => return error.NotDir,
        .NAMETOOLONG => return error.NameTooLong,
        .LOOP => return error.SymLinkLoop,
        .IO => return error.InputOutput,
        else => |err| return unexpectedErrno(err),
    };
    return mem.sliceTo(result_path, 0);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pathname` | `[*:0]const u8` | – | – |
| `out\_buffer` | `*[max_path_bytes]u8` | – | – |
| Return | [`RealPathError![]u8`](#error-realpatherror) | – | – |

</details>

---

### <a id="fn-realpathw"></a>`realpathW`

<details class="declaration-card" open>
<summary>Function – Same as `realpath` except `pathname` is WTF16LE-encoded</summary>

Same as `realpath` except `pathname` is WTF16LE-encoded.

The result is encoded as [WTF-8](https://simonsapin.github.io/wtf-8/).

Calling this function is usually a bug.

```zig
pub fn realpathW(pathname: []const u16, out_buffer: *[max_path_bytes]u8) RealPathError![]u8 {
    const w = windows;

    const dir = fs.cwd().fd;
    const access_mask = w.GENERIC_READ | w.SYNCHRONIZE;
    const share_access = w.FILE_SHARE_READ | w.FILE_SHARE_WRITE | w.FILE_SHARE_DELETE;
    const creation = w.FILE_OPEN;
    const h_file = blk: {
        const res = w.OpenFile(pathname, .{
            .dir = dir,
            .access_mask = access_mask,
            .share_access = share_access,
            .creation = creation,
            .filter = .any,
        }) catch |err| switch (err) {
            error.WouldBlock => unreachable,
            else => |e| return e,
        };
        break :blk res;
    };
    defer w.CloseHandle(h_file);

    return std.os.getFdPath(h_file, out_buffer);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pathname` | `[]const u16` | – | – |
| `out\_buffer` | `*[max_path_bytes]u8` | – | – |
| Return | [`RealPathError![]u8`](#error-realpatherror) | – | – |

</details>

---

### <a id="fn-nanosleep"></a>`nanosleep`

<details class="declaration-card" open>
<summary>Function – Spurious wakeups are possible and no precision of timing is guaranteed</summary>

Spurious wakeups are possible and no precision of timing is guaranteed.

```zig
pub fn nanosleep(seconds: u64, nanoseconds: u64) void {
    var req = timespec{
        .sec = cast(isize, seconds) orelse maxInt(isize),
        .nsec = cast(isize, nanoseconds) orelse maxInt(isize),
    };
    var rem: timespec = undefined;
    while (true) {
        switch (errno(system.nanosleep(&req, &rem))) {
            .FAULT => unreachable,
            .INVAL => {
                // Sometimes Darwin returns EINVAL for no reason.
                // We treat it as a spurious wakeup.
                return;
            },
            .INTR => {
                req = rem;
                continue;
            },
            // This prong handles success as well as unexpected errors.
            else => return,
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `seconds` | `u64` | – | – |
| `nanoseconds` | `u64` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-dl-iterate-phdr"></a>`dl_iterate_phdr`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn dl_iterate_phdr(
    context: anytype,
    comptime Error: type,
    comptime callback: fn (info: *dl_phdr_info, size: usize, context: @TypeOf(context)) Error!void,
) Error!void {
    const Context = @TypeOf(context);
    const elf = std.elf;
    const dl = @import("dynamic_library.zig");

    switch (builtin.object_format) {
        .elf, .c => {},
        else => @compileError("dl_iterate_phdr is not available for this target"),
    }

    if (builtin.link_libc) {
        switch (system.dl_iterate_phdr(struct {
            fn callbackC(info: *dl_phdr_info, size: usize, data: ?*anyopaque) callconv(.c) c_int {
                const context_ptr: *const Context = @ptrCast(@alignCast(data));
                callback(info, size, context_ptr.*) catch |err| return @intFromError(err);
                return 0;
            }
        }.callbackC, @ptrCast(@constCast(&context)))) {
            0 => return,
            else => |err| return @as(Error, @errorCast(@errorFromInt(@as(std.meta.Int(.unsigned, @bitSizeOf(anyerror)), @intCast(err))))),
        }
    }

    const elf_base = std.process.getBaseAddress();
    const ehdr: *elf.Ehdr = @ptrFromInt(elf_base);
    // Make sure the base address points to an ELF image.
    assert(mem.eql(u8, ehdr.e_ident[0..4], elf.MAGIC));
    const n_phdr = ehdr.e_phnum;
    const phdrs = (@as([*]elf.Phdr, @ptrFromInt(elf_base + ehdr.e_phoff)))[0..n_phdr];

    var it = dl.linkmap_iterator(phdrs) catch unreachable;

    // The executable has no dynamic link segment, create a single entry for
    // the whole ELF image.
    if (it.end()) {
        // Find the base address for the ELF image, if this is a PIE the value
        // is non-zero.
        const base_address = for (phdrs) |*phdr| {
            if (phdr.p_type == elf.PT_PHDR) {
                break @intFromPtr(phdrs.ptr) - phdr.p_vaddr;
                // We could try computing the difference between _DYNAMIC and
                // the p_vaddr of the PT_DYNAMIC section, but using the phdr is
                // good enough (Is it?).
            }
        } else unreachable;

        var info = dl_phdr_info{
            .addr = base_address,
            .name = "/proc/self/exe",
            .phdr = phdrs.ptr,
            .phnum = ehdr.e_phnum,
        };

        return callback(&info, @sizeOf(dl_phdr_info), context);
    }

    // Last return value from the callback function.
    while (it.next()) |entry| {
        var phdr: [*]elf.Phdr = undefined;
        var phnum: u16 = undefined;

        if (entry.l_addr != 0) {
            const elf_header: *elf.Ehdr = @ptrFromInt(entry.l_addr);
            phdr = @ptrFromInt(entry.l_addr + elf_header.e_phoff);
            phnum = elf_header.e_phnum;
        } else {
            // This is the running ELF image
            phdr = @ptrFromInt(elf_base + ehdr.e_phoff);
            phnum = ehdr.e_phnum;
        }

        var info = dl_phdr_info{
            .addr = entry.l_addr,
            .name = entry.l_name,
            .phdr = phdr,
            .phnum = phnum,
        };

        try callback(&info, @sizeOf(dl_phdr_info), context);
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `context` | `` | – | – |
| `Error` | `type` | – | – |
| `callback` | See note[^fn-dl-iterate-phdr-callback-type-0] | – | – |
| Return | `Error!void` | – | – |


[^fn-dl-iterate-phdr-callback-type-0]:
    Type for parameter `callback` of `dl_iterate_phdr`:

    ```zig
    fn (info: *dl_phdr_info, size: usize, context: @TypeOf(context)) Error!void
    ```

</details>

---

### <a id="fn-clock-gettime"></a>`clock_gettime`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn clock_gettime(clock_id: clockid_t) ClockGetTimeError!timespec {
    var tp: timespec = undefined;

    if (native_os == .windows) {
        @compileError("Windows does not support POSIX; use Windows-specific API or cross-platform std.time API");
    } else if (native_os == .wasi and !builtin.link_libc) {
        var ts: timestamp_t = undefined;
        switch (system.clock_time_get(clock_id, 1, &ts)) {
            .SUCCESS => {
                tp = .{
                    .sec = @intCast(ts / std.time.ns_per_s),
                    .nsec = @intCast(ts % std.time.ns_per_s),
                };
            },
            .INVAL => return error.UnsupportedClock,
            else => |err| return unexpectedErrno(err),
        }
        return tp;
    }

    switch (errno(system.clock_gettime(clock_id, &tp))) {
        .SUCCESS => return tp,
        .FAULT => unreachable,
        .INVAL => return error.UnsupportedClock,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `clock\_id` | `clockid_t` | – | – |
| Return | [`ClockGetTimeError!timespec`](#error-clockgettimeerror) | – | – |

</details>

---

### <a id="fn-clock-getres"></a>`clock_getres`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn clock_getres(clock_id: clockid_t, res: *timespec) ClockGetTimeError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        var ts: timestamp_t = undefined;
        switch (system.clock_res_get(@bitCast(clock_id), &ts)) {
            .SUCCESS => res.* = .{
                .sec = @intCast(ts / std.time.ns_per_s),
                .nsec = @intCast(ts % std.time.ns_per_s),
            },
            .INVAL => return error.UnsupportedClock,
            else => |err| return unexpectedErrno(err),
        }
        return;
    }

    switch (errno(system.clock_getres(clock_id, res))) {
        .SUCCESS => return,
        .FAULT => unreachable,
        .INVAL => return error.UnsupportedClock,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `clock\_id` | `clockid_t` | – | – |
| `res` | `*timespec` | – | – |
| Return | [`ClockGetTimeError!void`](#error-clockgettimeerror) | – | – |

</details>

---

### <a id="fn-sched-getaffinity"></a>`sched_getaffinity`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sched_getaffinity(pid: pid_t) SchedGetAffinityError!cpu_set_t {
    var set: cpu_set_t = undefined;
    switch (errno(system.sched_getaffinity(pid, @sizeOf(cpu_set_t), &set))) {
        .SUCCESS => return set,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .SRCH => unreachable,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| Return | [`SchedGetAffinityError!cpu_set_t`](#error-schedgetaffinityerror) | – | – |

</details>

---

### <a id="fn-sigaltstack"></a>`sigaltstack`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sigaltstack(ss: ?*stack_t, old_ss: ?*stack_t) SigaltstackError!void {
    switch (errno(system.sigaltstack(ss, old_ss))) {
        .SUCCESS => return,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .NOMEM => return error.SizeTooSmall,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ss` | `?*stack_t` | – | – |
| `old\_ss` | `?*stack_t` | – | – |
| Return | [`SigaltstackError!void`](#error-sigaltstackerror) | – | – |

</details>

---

### <a id="fn-sigfillset"></a>`sigfillset`

<details class="declaration-card" open>
<summary>Function – Return a filled sigset_t</summary>

Return a filled sigset_t.

```zig
pub fn sigfillset() sigset_t {
    if (builtin.link_libc) {
        var set: sigset_t = undefined;
        switch (errno(system.sigfillset(&set))) {
            .SUCCESS => return set,
            else => unreachable,
        }
    }
    return system.sigfillset();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `sigset_t` | – | – |

</details>

---

### <a id="fn-sigemptyset"></a>`sigemptyset`

<details class="declaration-card" open>
<summary>Function – Return an empty sigset_t</summary>

Return an empty sigset_t.

```zig
pub fn sigemptyset() sigset_t {
    if (builtin.link_libc) {
        var set: sigset_t = undefined;
        switch (errno(system.sigemptyset(&set))) {
            .SUCCESS => return set,
            else => unreachable,
        }
    }
    return system.sigemptyset();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `sigset_t` | – | – |

</details>

---

### <a id="fn-sigaddset"></a>`sigaddset`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sigaddset(set: *sigset_t, sig: u8) void {
    if (builtin.link_libc) {
        switch (errno(system.sigaddset(set, sig))) {
            .SUCCESS => return,
            else => unreachable,
        }
    }
    system.sigaddset(set, sig);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `set` | `*sigset_t` | – | – |
| `sig` | `u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-sigdelset"></a>`sigdelset`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sigdelset(set: *sigset_t, sig: u8) void {
    if (builtin.link_libc) {
        switch (errno(system.sigdelset(set, sig))) {
            .SUCCESS => return,
            else => unreachable,
        }
    }
    system.sigdelset(set, sig);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `set` | `*sigset_t` | – | – |
| `sig` | `u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-sigismember"></a>`sigismember`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sigismember(set: *const sigset_t, sig: u8) bool {
    if (builtin.link_libc) {
        const rc = system.sigismember(set, sig);
        switch (errno(rc)) {
            .SUCCESS => return rc == 1,
            else => unreachable,
        }
    }
    return system.sigismember(set, sig);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `set` | `*const sigset_t` | – | – |
| `sig` | `u8` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-sigaction"></a>`sigaction`

<details class="declaration-card" open>
<summary>Function – Examine and change a signal action</summary>

Examine and change a signal action.

```zig
pub fn sigaction(sig: u8, noalias act: ?*const Sigaction, noalias oact: ?*Sigaction) void {
    switch (errno(system.sigaction(sig, act, oact))) {
        .SUCCESS => return,
        // EINVAL means the signal is either invalid or some signal that cannot have its action
        // changed. For POSIX, this means SIGKILL/SIGSTOP. For e.g. Solaris, this also includes the
        // non-standard SIGWAITING, SIGCANCEL, and SIGLWP. Either way, programmer error.
        .INVAL => unreachable,
        else => unreachable,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sig` | `u8` | – | – |
| `act` | `?*const Sigaction` | – | – |
| `oact` | [`?*Sigaction`](#fn-sigaction) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-sigprocmask"></a>`sigprocmask`

<details class="declaration-card" open>
<summary>Function – Sets the thread signal mask</summary>

Sets the thread signal mask.

```zig
pub fn sigprocmask(flags: u32, noalias set: ?*const sigset_t, noalias oldset: ?*sigset_t) void {
    switch (errno(system.sigprocmask(@bitCast(flags), set, oldset))) {
        .SUCCESS => return,
        .FAULT => unreachable,
        .INVAL => unreachable,
        else => unreachable,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `flags` | `u32` | – | – |
| `set` | `?*const sigset_t` | – | – |
| `oldset` | `?*sigset_t` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-futimens"></a>`futimens`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn futimens(fd: fd_t, times: ?*const [2]timespec) FutimensError!void {
    if (native_os == .wasi and !builtin.link_libc) {
        // TODO WASI encodes `wasi.fstflags` to signify magic values
        // similar to UTIME_NOW and UTIME_OMIT. Currently, we ignore
        // this here, but we should really handle it somehow.
        const error_code = blk: {
            if (times) |times_arr| {
                const atim = times_arr[0].toTimestamp();
                const mtim = times_arr[1].toTimestamp();
                break :blk wasi.fd_filestat_set_times(fd, atim, mtim, .{
                    .ATIM = true,
                    .MTIM = true,
                });
            }

            break :blk wasi.fd_filestat_set_times(fd, 0, 0, .{
                .ATIM_NOW = true,
                .MTIM_NOW = true,
            });
        };
        switch (error_code) {
            .SUCCESS => return,
            .ACCES => return error.AccessDenied,
            .PERM => return error.PermissionDenied,
            .BADF => unreachable, // always a race condition
            .FAULT => unreachable,
            .INVAL => unreachable,
            .ROFS => return error.ReadOnlyFileSystem,
            else => |err| return unexpectedErrno(err),
        }
    }

    switch (errno(system.futimens(fd, times))) {
        .SUCCESS => return,
        .ACCES => return error.AccessDenied,
        .PERM => return error.PermissionDenied,
        .BADF => unreachable, // always a race condition
        .FAULT => unreachable,
        .INVAL => unreachable,
        .ROFS => return error.ReadOnlyFileSystem,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `times` | `?*const [2]timespec` | – | – |
| Return | [`FutimensError!void`](#error-futimenserror) | – | – |

</details>

---

### <a id="fn-gethostname"></a>`gethostname`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn gethostname(name_buffer: *[HOST_NAME_MAX]u8) GetHostNameError![]u8 {
    if (builtin.link_libc) {
        switch (errno(system.gethostname(name_buffer, name_buffer.len))) {
            .SUCCESS => return mem.sliceTo(name_buffer, 0),
            .FAULT => unreachable,
            .NAMETOOLONG => unreachable, // HOST_NAME_MAX prevents this
            .PERM => return error.PermissionDenied,
            else => |err| return unexpectedErrno(err),
        }
    }
    if (native_os == .linux) {
        const uts = uname();
        const hostname = mem.sliceTo(&uts.nodename, 0);
        const result = name_buffer[0..hostname.len];
        @memcpy(result, hostname);
        return result;
    }

    @compileError("TODO implement gethostname for this OS");
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name\_buffer` | `*[HOST_NAME_MAX]u8` | – | – |
| Return | [`GetHostNameError![]u8`](#error-gethostnameerror) | – | – |

</details>

---

### <a id="fn-uname"></a>`uname`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn uname() utsname {
    var uts: utsname = undefined;
    switch (errno(system.uname(&uts))) {
        .SUCCESS => return uts,
        .FAULT => unreachable,
        else => unreachable,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `utsname` | – | – |

</details>

---

### <a id="fn-res-mkquery"></a>`res_mkquery`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn res_mkquery(
    op: u4,
    dname: []const u8,
    class: u8,
    ty: u8,
    data: []const u8,
    newrr: ?[*]const u8,
    buf: []u8,
) usize {
    _ = data;
    _ = newrr;
    // This implementation is ported from musl libc.
    // A more idiomatic "ziggy" implementation would be welcome.
    var name = dname;
    if (mem.endsWith(u8, name, ".")) name.len -= 1;
    assert(name.len <= 253);
    const n = 17 + name.len + @intFromBool(name.len != 0);

    // Construct query template - ID will be filled later
    var q: [280]u8 = undefined;
    @memset(q[0..n], 0);
    q[2] = @as(u8, op) * 8 + 1;
    q[5] = 1;
    @memcpy(q[13..][0..name.len], name);
    var i: usize = 13;
    var j: usize = undefined;
    while (q[i] != 0) : (i = j + 1) {
        j = i;
        while (q[j] != 0 and q[j] != '.') : (j += 1) {}
        // TODO determine the circumstances for this and whether or
        // not this should be an error.
        if (j - i - 1 > 62) unreachable;
        q[i - 1] = @intCast(j - i);
    }
    q[i + 1] = ty;
    q[i + 3] = class;

    // Make a reasonably unpredictable id
    const ts = clock_gettime(.REALTIME) catch unreachable;
    const UInt = std.meta.Int(.unsigned, @bitSizeOf(@TypeOf(ts.nsec)));
    const unsec: UInt = @bitCast(ts.nsec);
    const id: u32 = @truncate(unsec + unsec / 65536);
    q[0] = @truncate(id / 256);
    q[1] = @truncate(id);

    @memcpy(buf[0..n], q[0..n]);
    return n;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `op` | `u4` | – | – |
| `dname` | `[]const u8` | – | – |
| `class` | `u8` | – | – |
| `ty` | `u8` | – | – |
| `data` | `[]const u8` | – | – |
| `newrr` | `?[*]const u8` | – | – |
| `buf` | `[]u8` | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-sendmsg"></a>`sendmsg`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn sendmsg(
    /// The file descriptor of the sending socket.
    sockfd: socket_t,
    /// Message header and iovecs
    msg: *const msghdr_const,
    flags: u32,
) SendMsgError!usize {
    while (true) {
        const rc = system.sendmsg(sockfd, msg, flags);
        if (native_os == .windows) {
            if (rc == windows.ws2_32.SOCKET_ERROR) {
                switch (windows.ws2_32.WSAGetLastError()) {
                    .WSAEACCES => return error.AccessDenied,
                    .WSAEADDRNOTAVAIL => return error.AddressNotAvailable,
                    .WSAECONNRESET => return error.ConnectionResetByPeer,
                    .WSAEMSGSIZE => return error.MessageTooBig,
                    .WSAENOBUFS => return error.SystemResources,
                    .WSAENOTSOCK => return error.FileDescriptorNotASocket,
                    .WSAEAFNOSUPPORT => return error.AddressFamilyNotSupported,
                    .WSAEDESTADDRREQ => unreachable, // A destination address is required.
                    .WSAEFAULT => unreachable, // The lpBuffers, lpTo, lpOverlapped, lpNumberOfBytesSent, or lpCompletionRoutine parameters are not part of the user address space, or the lpTo parameter is too small.
                    .WSAEHOSTUNREACH => return error.NetworkUnreachable,
                    // TODO: WSAEINPROGRESS, WSAEINTR
                    .WSAEINVAL => unreachable,
                    .WSAENETDOWN => return error.NetworkSubsystemFailed,
                    .WSAENETRESET => return error.ConnectionResetByPeer,
                    .WSAENETUNREACH => return error.NetworkUnreachable,
                    .WSAENOTCONN => return error.SocketNotConnected,
                    .WSAESHUTDOWN => unreachable, // The socket has been shut down; it is not possible to WSASendTo on a socket after shutdown has been invoked with how set to SD_SEND or SD_BOTH.
                    .WSAEWOULDBLOCK => return error.WouldBlock,
                    .WSANOTINITIALISED => unreachable, // A successful WSAStartup call must occur before using this function.
                    else => |err| return windows.unexpectedWSAError(err),
                }
            } else {
                return @intCast(rc);
            }
        } else {
            switch (errno(rc)) {
                .SUCCESS => return @intCast(rc),

                .ACCES => return error.AccessDenied,
                .AGAIN => return error.WouldBlock,
                .ALREADY => return error.FastOpenAlreadyInProgress,
                .BADF => unreachable, // always a race condition
                .CONNRESET => return error.ConnectionResetByPeer,
                .DESTADDRREQ => unreachable, // The socket is not connection-mode, and no peer address is set.
                .FAULT => unreachable, // An invalid user space address was specified for an argument.
                .INTR => continue,
                .INVAL => unreachable, // Invalid argument passed.
                .ISCONN => unreachable, // connection-mode socket was connected already but a recipient was specified
                .MSGSIZE => return error.MessageTooBig,
                .NOBUFS => return error.SystemResources,
                .NOMEM => return error.SystemResources,
                .NOTSOCK => unreachable, // The file descriptor sockfd does not refer to a socket.
                .OPNOTSUPP => unreachable, // Some bit in the flags argument is inappropriate for the socket type.
                .PIPE => return error.BrokenPipe,
                .AFNOSUPPORT => return error.AddressFamilyNotSupported,
                .LOOP => return error.SymLinkLoop,
                .NAMETOOLONG => return error.NameTooLong,
                .NOENT => return error.FileNotFound,
                .NOTDIR => return error.NotDir,
                .HOSTUNREACH => return error.NetworkUnreachable,
                .NETUNREACH => return error.NetworkUnreachable,
                .NOTCONN => return error.SocketNotConnected,
                .NETDOWN => return error.NetworkSubsystemFailed,
                else => |err| return unexpectedErrno(err),
            }
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `socket_t` | – | – |
| `msg` | `*const msghdr_const` | – | – |
| `flags` | `u32` | – | – |
| Return | [`SendMsgError!usize`](#error-sendmsgerror) | – | – |

</details>

---

### <a id="fn-sendto"></a>`sendto`

<details class="declaration-card" open>
<summary>Function – Transmit a message to another socket</summary>

Transmit a message to another socket.

The `sendto` call may be used only when the socket is in a connected state (so that the intended
recipient  is  known). The  following call

    send(sockfd, buf, len, flags);

is equivalent to

    sendto(sockfd, buf, len, flags, NULL, 0);

If  sendto()  is used on a connection-mode (`SOCK.STREAM`, `SOCK.SEQPACKET`) socket, the arguments
`dest_addr` and `addrlen` are asserted to be `null` and `0` respectively, and asserted
that the socket was actually connected.
Otherwise, the address of the target is given by `dest_addr` with `addrlen` specifying  its  size.

If the message is too long to pass atomically through the underlying protocol,
`SendError.MessageTooBig` is returned, and the message is not transmitted.

There is no  indication  of  failure  to  deliver.

When the message does not fit into the send buffer of  the  socket,  `sendto`  normally  blocks,
unless  the socket has been placed in nonblocking I/O mode.  In nonblocking mode it would fail
with `SendError.WouldBlock`.  The `select` call may be used  to  determine when it is
possible to send more data.

```zig
pub fn sendto(
    /// The file descriptor of the sending socket.
    sockfd: socket_t,
    /// Message to send.
    buf: []const u8,
    flags: u32,
    dest_addr: ?*const sockaddr,
    addrlen: socklen_t,
) SendToError!usize {
    if (native_os == .windows) {
        switch (windows.sendto(sockfd, buf.ptr, buf.len, flags, dest_addr, addrlen)) {
            windows.ws2_32.SOCKET_ERROR => switch (windows.ws2_32.WSAGetLastError()) {
                .WSAEACCES => return error.AccessDenied,
                .WSAEADDRNOTAVAIL => return error.AddressNotAvailable,
                .WSAECONNRESET => return error.ConnectionResetByPeer,
                .WSAEMSGSIZE => return error.MessageTooBig,
                .WSAENOBUFS => return error.SystemResources,
                .WSAENOTSOCK => return error.FileDescriptorNotASocket,
                .WSAEAFNOSUPPORT => return error.AddressFamilyNotSupported,
                .WSAEDESTADDRREQ => unreachable, // A destination address is required.
                .WSAEFAULT => unreachable, // The lpBuffers, lpTo, lpOverlapped, lpNumberOfBytesSent, or lpCompletionRoutine parameters are not part of the user address space, or the lpTo parameter is too small.
                .WSAEHOSTUNREACH => return error.NetworkUnreachable,
                // TODO: WSAEINPROGRESS, WSAEINTR
                .WSAEINVAL => unreachable,
                .WSAENETDOWN => return error.NetworkSubsystemFailed,
                .WSAENETRESET => return error.ConnectionResetByPeer,
                .WSAENETUNREACH => return error.NetworkUnreachable,
                .WSAENOTCONN => return error.SocketNotConnected,
                .WSAESHUTDOWN => unreachable, // The socket has been shut down; it is not possible to WSASendTo on a socket after shutdown has been invoked with how set to SD_SEND or SD_BOTH.
                .WSAEWOULDBLOCK => return error.WouldBlock,
                .WSANOTINITIALISED => unreachable, // A successful WSAStartup call must occur before using this function.
                else => |err| return windows.unexpectedWSAError(err),
            },
            else => |rc| return @intCast(rc),
        }
    }
    while (true) {
        const rc = system.sendto(sockfd, buf.ptr, buf.len, flags, dest_addr, addrlen);
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),

            .ACCES => return error.AccessDenied,
            .AGAIN => return error.WouldBlock,
            .ALREADY => return error.FastOpenAlreadyInProgress,
            .BADF => unreachable, // always a race condition
            .CONNREFUSED => return error.ConnectionRefused,
            .CONNRESET => return error.ConnectionResetByPeer,
            .DESTADDRREQ => unreachable, // The socket is not connection-mode, and no peer address is set.
            .FAULT => unreachable, // An invalid user space address was specified for an argument.
            .INTR => continue,
            .INVAL => return error.UnreachableAddress,
            .ISCONN => unreachable, // connection-mode socket was connected already but a recipient was specified
            .MSGSIZE => return error.MessageTooBig,
            .NOBUFS => return error.SystemResources,
            .NOMEM => return error.SystemResources,
            .NOTSOCK => unreachable, // The file descriptor sockfd does not refer to a socket.
            .OPNOTSUPP => unreachable, // Some bit in the flags argument is inappropriate for the socket type.
            .PIPE => return error.BrokenPipe,
            .AFNOSUPPORT => return error.AddressFamilyNotSupported,
            .LOOP => return error.SymLinkLoop,
            .NAMETOOLONG => return error.NameTooLong,
            .NOENT => return error.FileNotFound,
            .NOTDIR => return error.NotDir,
            .HOSTUNREACH => return error.NetworkUnreachable,
            .NETUNREACH => return error.NetworkUnreachable,
            .NOTCONN => return error.SocketNotConnected,
            .NETDOWN => return error.NetworkSubsystemFailed,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `socket_t` | – | – |
| `buf` | `[]const u8` | – | – |
| `flags` | `u32` | – | – |
| `dest\_addr` | `?*const sockaddr` | – | – |
| `addrlen` | `socklen_t` | – | – |
| Return | [`SendToError!usize`](#error-sendtoerror) | – | – |

</details>

---

### <a id="fn-send"></a>`send`

<details class="declaration-card" open>
<summary>Function – Transmit a message to another socket</summary>

Transmit a message to another socket.

The `send` call may be used only when the socket is in a connected state (so that the intended
recipient  is  known).   The  only  difference  between `send` and `write` is the presence of
flags.  With a zero flags argument, `send` is equivalent to  `write`.   Also,  the  following
call

    send(sockfd, buf, len, flags);

is equivalent to

    sendto(sockfd, buf, len, flags, NULL, 0);

There is no  indication  of  failure  to  deliver.

When the message does not fit into the send buffer of  the  socket,  `send`  normally  blocks,
unless  the socket has been placed in nonblocking I/O mode.  In nonblocking mode it would fail
with `SendError.WouldBlock`.  The `select` call may be used  to  determine when it is
possible to send more data.

```zig
pub fn send(
    /// The file descriptor of the sending socket.
    sockfd: socket_t,
    buf: []const u8,
    flags: u32,
) SendError!usize {
    return sendto(sockfd, buf, flags, null, 0) catch |err| switch (err) {
        error.AddressFamilyNotSupported => unreachable,
        error.SymLinkLoop => unreachable,
        error.NameTooLong => unreachable,
        error.FileNotFound => unreachable,
        error.NotDir => unreachable,
        error.NetworkUnreachable => unreachable,
        error.AddressNotAvailable => unreachable,
        error.SocketNotConnected => unreachable,
        error.UnreachableAddress => unreachable,
        else => |e| return e,
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `socket_t` | – | – |
| `buf` | `[]const u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`SendError!usize`](#error-senderror) | – | – |

</details>

---

### <a id="fn-copy-file-range"></a>`copy_file_range`

<details class="declaration-card" open>
<summary>Function – Transfer data between file descriptors at specified offsets</summary>

Transfer data between file descriptors at specified offsets.

Returns the number of bytes written, which can less than requested.

The `copy_file_range` call copies `len` bytes from one file descriptor to another. When possible,
this is done within the operating system kernel, which can provide better performance
characteristics than transferring data from kernel to user space and back, such as with
`pread` and `pwrite` calls.

`fd_in` must be a file descriptor opened for reading, and `fd_out` must be a file descriptor
opened for writing. They may be any kind of file descriptor; however, if `fd_in` is not a regular
file system file, it may cause this function to fall back to calling `pread` and `pwrite`, in which case
atomicity guarantees no longer apply.

If `fd_in` and `fd_out` are the same, source and target ranges must not overlap.
The file descriptor seek positions are ignored and not updated.
When `off_in` is past the end of the input file, it successfully reads 0 bytes.

`flags` has different meanings per operating system; refer to the respective man pages.

These systems support in-kernel data copying:
* Linux (cross-filesystem from version 5.3)
* FreeBSD 13.0

Other systems fall back to calling `pread` / `pwrite`.

Maximum offsets on Linux and FreeBSD are `maxInt(i64)`.

```zig
pub fn copy_file_range(fd_in: fd_t, off_in: u64, fd_out: fd_t, off_out: u64, len: usize, flags: u32) CopyFileRangeError!usize {
    if (builtin.os.tag == .freebsd or
        (comptime builtin.os.tag == .linux and std.c.versionCheck(if (builtin.abi.isAndroid()) .{ .major = 34, .minor = 0, .patch = 0 } else .{ .major = 2, .minor = 27, .patch = 0 })))
    {
        var off_in_copy: i64 = @bitCast(off_in);
        var off_out_copy: i64 = @bitCast(off_out);

        while (true) {
            const rc = system.copy_file_range(fd_in, &off_in_copy, fd_out, &off_out_copy, len, flags);
            if (native_os == .freebsd) {
                switch (errno(rc)) {
                    .SUCCESS => return @intCast(rc),
                    .BADF => return error.FilesOpenedWithWrongFlags,
                    .FBIG => return error.FileTooBig,
                    .IO => return error.InputOutput,
                    .ISDIR => return error.IsDir,
                    .NOSPC => return error.NoSpaceLeft,
                    .INVAL => break, // these may not be regular files, try fallback
                    .INTEGRITY => return error.CorruptedData,
                    .INTR => continue,
                    else => |err| return unexpectedErrno(err),
                }
            } else { // assume linux
                switch (errno(rc)) {
                    .SUCCESS => return @intCast(rc),
                    .BADF => return error.FilesOpenedWithWrongFlags,
                    .FBIG => return error.FileTooBig,
                    .IO => return error.InputOutput,
                    .ISDIR => return error.IsDir,
                    .NOSPC => return error.NoSpaceLeft,
                    .INVAL => break, // these may not be regular files, try fallback
                    .NOMEM => return error.OutOfMemory,
                    .OVERFLOW => return error.Unseekable,
                    .PERM => return error.PermissionDenied,
                    .TXTBSY => return error.SwapFile,
                    .XDEV => break, // support for cross-filesystem copy added in Linux 5.3, use fallback
                    else => |err| return unexpectedErrno(err),
                }
            }
        }
    }

    var buf: [8 * 4096]u8 = undefined;
    const amt_read = try pread(fd_in, buf[0..@min(buf.len, len)], off_in);
    if (amt_read == 0) return 0;
    return pwrite(fd_out, buf[0..amt_read], off_out);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd\_in` | `fd_t` | – | – |
| `off\_in` | `u64` | – | – |
| `fd\_out` | `fd_t` | – | – |
| `off\_out` | `u64` | – | – |
| `len` | `usize` | – | – |
| `flags` | `u32` | – | – |
| Return | [`CopyFileRangeError!usize`](#error-copyfilerangeerror) | – | – |

</details>

---

### <a id="fn-poll"></a>`poll`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn poll(fds: []pollfd, timeout: i32) PollError!usize {
    if (native_os == .windows) {
        switch (windows.poll(fds.ptr, @intCast(fds.len), timeout)) {
            windows.ws2_32.SOCKET_ERROR => switch (windows.ws2_32.WSAGetLastError()) {
                .WSANOTINITIALISED => unreachable,
                .WSAENETDOWN => return error.NetworkSubsystemFailed,
                .WSAENOBUFS => return error.SystemResources,
                // TODO: handle more errors
                else => |err| return windows.unexpectedWSAError(err),
            },
            else => |rc| return @intCast(rc),
        }
    }
    while (true) {
        const fds_count = cast(nfds_t, fds.len) orelse return error.SystemResources;
        const rc = system.poll(fds.ptr, fds_count, timeout);
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .FAULT => unreachable,
            .INTR => continue,
            .INVAL => unreachable,
            .NOMEM => return error.SystemResources,
            else => |err| return unexpectedErrno(err),
        }
    }
    unreachable;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fds` | `[]pollfd` | – | – |
| `timeout` | `i32` | – | – |
| Return | [`PollError!usize`](#error-pollerror) | – | – |

</details>

---

### <a id="fn-ppoll"></a>`ppoll`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn ppoll(fds: []pollfd, timeout: ?*const timespec, mask: ?*const sigset_t) PPollError!usize {
    var ts: timespec = undefined;
    var ts_ptr: ?*timespec = null;
    if (timeout) |timeout_ns| {
        ts_ptr = &ts;
        ts = timeout_ns.*;
    }
    const fds_count = cast(nfds_t, fds.len) orelse return error.SystemResources;
    const rc = system.ppoll(fds.ptr, fds_count, ts_ptr, mask);
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .FAULT => unreachable,
        .INTR => return error.SignalInterrupt,
        .INVAL => unreachable,
        .NOMEM => return error.SystemResources,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fds` | `[]pollfd` | – | – |
| `timeout` | `?*const timespec` | – | – |
| `mask` | `?*const sigset_t` | – | – |
| Return | [`PPollError!usize`](#error-ppollerror) | – | – |

</details>

---

### <a id="fn-recv"></a>`recv`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn recv(sock: socket_t, buf: []u8, flags: u32) RecvFromError!usize {
    return recvfrom(sock, buf, flags, null, null);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sock` | `socket_t` | – | – |
| `buf` | `[]u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`RecvFromError!usize`](#error-recvfromerror) | – | – |

</details>

---

### <a id="fn-recvfrom"></a>`recvfrom`

<details class="declaration-card" open>
<summary>Function – If `sockfd` is opened in non blocking mode, the function will</summary>

If `sockfd` is opened in non blocking mode, the function will
return error.WouldBlock when EAGAIN is received.

```zig
pub fn recvfrom(
    sockfd: socket_t,
    buf: []u8,
    flags: u32,
    src_addr: ?*sockaddr,
    addrlen: ?*socklen_t,
) RecvFromError!usize {
    while (true) {
        const rc = system.recvfrom(sockfd, buf.ptr, buf.len, flags, src_addr, addrlen);
        if (native_os == .windows) {
            if (rc == windows.ws2_32.SOCKET_ERROR) {
                switch (windows.ws2_32.WSAGetLastError()) {
                    .WSANOTINITIALISED => unreachable,
                    .WSAECONNRESET => return error.ConnectionResetByPeer,
                    .WSAEINVAL => return error.SocketNotBound,
                    .WSAEMSGSIZE => return error.MessageTooBig,
                    .WSAENETDOWN => return error.NetworkSubsystemFailed,
                    .WSAENOTCONN => return error.SocketNotConnected,
                    .WSAEWOULDBLOCK => return error.WouldBlock,
                    .WSAETIMEDOUT => return error.ConnectionTimedOut,
                    // TODO: handle more errors
                    else => |err| return windows.unexpectedWSAError(err),
                }
            } else {
                return @intCast(rc);
            }
        } else {
            switch (errno(rc)) {
                .SUCCESS => return @intCast(rc),
                .BADF => unreachable, // always a race condition
                .FAULT => unreachable,
                .INVAL => unreachable,
                .NOTCONN => return error.SocketNotConnected,
                .NOTSOCK => unreachable,
                .INTR => continue,
                .AGAIN => return error.WouldBlock,
                .NOMEM => return error.SystemResources,
                .CONNREFUSED => return error.ConnectionRefused,
                .CONNRESET => return error.ConnectionResetByPeer,
                .TIMEDOUT => return error.ConnectionTimedOut,
                else => |err| return unexpectedErrno(err),
            }
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `socket_t` | – | – |
| `buf` | `[]u8` | – | – |
| `flags` | `u32` | – | – |
| `src\_addr` | `?*sockaddr` | – | – |
| `addrlen` | `?*socklen_t` | – | – |
| Return | [`RecvFromError!usize`](#error-recvfromerror) | – | – |

</details>

---

### <a id="fn-dn-expand"></a>`dn_expand`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn dn_expand(
    msg: []const u8,
    comp_dn: []const u8,
    exp_dn: []u8,
) DnExpandError!usize {
    // This implementation is ported from musl libc.
    // A more idiomatic "ziggy" implementation would be welcome.
    var p = comp_dn.ptr;
    var len: usize = maxInt(usize);
    const end = msg.ptr + msg.len;
    if (p == end or exp_dn.len == 0) return error.InvalidDnsPacket;
    var dest = exp_dn.ptr;
    const dend = dest + @min(exp_dn.len, 254);
    // detect reference loop using an iteration counter
    var i: usize = 0;
    while (i < msg.len) : (i += 2) {
        // loop invariants: p<end, dest<dend
        if ((p[0] & 0xc0) != 0) {
            if (p + 1 == end) return error.InvalidDnsPacket;
            const j = @as(usize, p[0] & 0x3f) << 8 | p[1];
            if (len == maxInt(usize)) len = @intFromPtr(p) + 2 - @intFromPtr(comp_dn.ptr);
            if (j >= msg.len) return error.InvalidDnsPacket;
            p = msg.ptr + j;
        } else if (p[0] != 0) {
            if (dest != exp_dn.ptr) {
                dest[0] = '.';
                dest += 1;
            }
            var j = p[0];
            p += 1;
            if (j >= @intFromPtr(end) - @intFromPtr(p) or j >= @intFromPtr(dend) - @intFromPtr(dest)) {
                return error.InvalidDnsPacket;
            }
            while (j != 0) {
                j -= 1;
                dest[0] = p[0];
                dest += 1;
                p += 1;
            }
        } else {
            dest[0] = 0;
            if (len == maxInt(usize)) len = @intFromPtr(p) + 1 - @intFromPtr(comp_dn.ptr);
            return len;
        }
    }
    return error.InvalidDnsPacket;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `msg` | `[]const u8` | – | – |
| `comp\_dn` | `[]const u8` | – | – |
| `exp\_dn` | `[]u8` | – | – |
| Return | [`DnExpandError!usize`](#error-dnexpanderror) | – | – |

</details>

---

### <a id="fn-setsockopt"></a>`setsockopt`

<details class="declaration-card" open>
<summary>Function – Set a socket&#39;s options</summary>

Set a socket's options.

```zig
pub fn setsockopt(fd: socket_t, level: i32, optname: u32, opt: []const u8) SetSockOptError!void {
    if (native_os == .windows) {
        const rc = windows.ws2_32.setsockopt(fd, level, @intCast(optname), opt.ptr, @intCast(opt.len));
        if (rc == windows.ws2_32.SOCKET_ERROR) {
            switch (windows.ws2_32.WSAGetLastError()) {
                .WSANOTINITIALISED => unreachable,
                .WSAENETDOWN => return error.NetworkSubsystemFailed,
                .WSAEFAULT => unreachable,
                .WSAENOTSOCK => return error.FileDescriptorNotASocket,
                .WSAEINVAL => return error.SocketNotBound,
                else => |err| return windows.unexpectedWSAError(err),
            }
        }
        return;
    } else {
        switch (errno(system.setsockopt(fd, level, optname, opt.ptr, @intCast(opt.len)))) {
            .SUCCESS => {},
            .BADF => unreachable, // always a race condition
            .NOTSOCK => unreachable, // always a race condition
            .INVAL => unreachable,
            .FAULT => unreachable,
            .DOM => return error.TimeoutTooBig,
            .ISCONN => return error.AlreadyConnected,
            .NOPROTOOPT => return error.InvalidProtocolOption,
            .NOMEM => return error.SystemResources,
            .NOBUFS => return error.SystemResources,
            .PERM => return error.PermissionDenied,
            .NODEV => return error.NoDevice,
            .OPNOTSUPP => return error.OperationNotSupported,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `socket_t` | – | – |
| `level` | `i32` | – | – |
| `optname` | `u32` | – | – |
| `opt` | `[]const u8` | – | – |
| Return | [`SetSockOptError!void`](#error-setsockopterror) | – | – |

</details>

---

### <a id="fn-memfd-createz"></a>`memfd_createZ`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn memfd_createZ(name: [*:0]const u8, flags: u32) MemFdCreateError!fd_t {
    switch (native_os) {
        .linux => {
            // memfd_create is available only in glibc versions starting with 2.27 and bionic versions starting with 30.
            const use_c = std.c.versionCheck(if (builtin.abi.isAndroid()) .{ .major = 30, .minor = 0, .patch = 0 } else .{ .major = 2, .minor = 27, .patch = 0 });
            const sys = if (use_c) std.c else linux;
            const rc = sys.memfd_create(name, flags);
            switch (errno(rc)) {
                .SUCCESS => return @intCast(rc),
                .FAULT => unreachable, // name has invalid memory
                .INVAL => return error.NameTooLong, // or, program has a bug and flags are faulty
                .NFILE => return error.SystemFdQuotaExceeded,
                .MFILE => return error.ProcessFdQuotaExceeded,
                .NOMEM => return error.OutOfMemory,
                else => |err| return unexpectedErrno(err),
            }
        },
        .freebsd => {
            if (comptime builtin.os.version_range.semver.max.order(.{ .major = 13, .minor = 0, .patch = 0 }) == .lt)
                @compileError("memfd_create is unavailable on FreeBSD < 13.0");
            const rc = system.memfd_create(name, flags);
            switch (errno(rc)) {
                .SUCCESS => return rc,
                .BADF => unreachable, // name argument NULL
                .INVAL => unreachable, // name too long or invalid/unsupported flags.
                .MFILE => return error.ProcessFdQuotaExceeded,
                .NFILE => return error.SystemFdQuotaExceeded,
                .NOSYS => return error.SystemOutdated,
                else => |err| return unexpectedErrno(err),
            }
        },
        else => @compileError("target OS does not support memfd_create()"),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`MemFdCreateError!fd_t`](#error-memfdcreateerror) | – | – |

</details>

---

### <a id="fn-memfd-create"></a>`memfd_create`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn memfd_create(name: []const u8, flags: u32) MemFdCreateError!fd_t {
    var buffer: [NAME_MAX - "memfd:".len - 1:0]u8 = undefined;
    if (name.len > buffer.len) return error.NameTooLong;
    @memcpy(buffer[0..name.len], name);
    buffer[name.len] = 0;
    return memfd_createZ(&buffer, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[]const u8` | – | – |
| `flags` | `u32` | – | – |
| Return | [`MemFdCreateError!fd_t`](#error-memfdcreateerror) | – | – |

</details>

---

### <a id="fn-getrusage"></a>`getrusage`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn getrusage(who: i32) rusage {
    var result: rusage = undefined;
    const rc = system.getrusage(who, &result);
    switch (errno(rc)) {
        .SUCCESS => return result,
        .INVAL => unreachable,
        .FAULT => unreachable,
        else => unreachable,
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `who` | `i32` | – | – |
| Return | `rusage` | – | – |

</details>

---

### <a id="fn-tcgetattr"></a>`tcgetattr`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn tcgetattr(handle: fd_t) TermiosGetError!termios {
    while (true) {
        var term: termios = undefined;
        switch (errno(system.tcgetattr(handle, &term))) {
            .SUCCESS => return term,
            .INTR => continue,
            .BADF => unreachable,
            .NOTTY => return error.NotATerminal,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `handle` | `fd_t` | – | – |
| Return | [`TermiosGetError!termios`](#error-termiosgeterror) | – | – |

</details>

---

### <a id="fn-tcsetattr"></a>`tcsetattr`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn tcsetattr(handle: fd_t, optional_action: TCSA, termios_p: termios) TermiosSetError!void {
    while (true) {
        switch (errno(system.tcsetattr(handle, optional_action, &termios_p))) {
            .SUCCESS => return,
            .BADF => unreachable,
            .INTR => continue,
            .INVAL => unreachable,
            .NOTTY => return error.NotATerminal,
            .IO => return error.ProcessOrphaned,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `handle` | `fd_t` | – | – |
| `optional\_action` | [`TCSA`](#type-tcsa) | – | – |
| `termios\_p` | `termios` | – | – |
| Return | [`TermiosSetError!void`](#error-termiosseterror) | – | – |

</details>

---

### <a id="fn-tcgetpgrp"></a>`tcgetpgrp`

<details class="declaration-card" open>
<summary>Function – Returns the process group ID for the TTY associated with the given handle</summary>

Returns the process group ID for the TTY associated with the given handle.

```zig
pub fn tcgetpgrp(handle: fd_t) TermioGetPgrpError!pid_t {
    while (true) {
        var pgrp: pid_t = undefined;
        switch (errno(system.tcgetpgrp(handle, &pgrp))) {
            .SUCCESS => return pgrp,
            .BADF => unreachable,
            .INVAL => unreachable,
            .INTR => continue,
            .NOTTY => return error.NotATerminal,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `handle` | `fd_t` | – | – |
| Return | [`TermioGetPgrpError!pid_t`](#error-termiogetpgrperror) | – | – |

</details>

---

### <a id="fn-tcsetpgrp"></a>`tcsetpgrp`

<details class="declaration-card" open>
<summary>Function – Sets the controlling process group ID for given TTY</summary>

Sets the controlling process group ID for given TTY.
handle must be valid fd_t to a TTY associated with calling process.
pgrp must be a valid process group, and the calling process must be a member
of that group.

```zig
pub fn tcsetpgrp(handle: fd_t, pgrp: pid_t) TermioSetPgrpError!void {
    while (true) {
        switch (errno(system.tcsetpgrp(handle, &pgrp))) {
            .SUCCESS => return,
            .BADF => unreachable,
            .INVAL => unreachable,
            .INTR => continue,
            .NOTTY => return error.NotATerminal,
            .PERM => return TermioSetPgrpError.NotAPgrpMember,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `handle` | `fd_t` | – | – |
| `pgrp` | `pid_t` | – | – |
| Return | [`TermioSetPgrpError!void`](#error-termiosetpgrperror) | – | – |

</details>

---

### <a id="fn-setsid"></a>`setsid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setsid() SetSidError!pid_t {
    const rc = system.setsid();
    switch (errno(rc)) {
        .SUCCESS => return rc,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | [`SetSidError!pid_t`](#error-setsiderror) | – | – |

</details>

---

### <a id="fn-signalfd"></a>`signalfd`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn signalfd(fd: fd_t, mask: *const sigset_t, flags: u32) !fd_t {
    const rc = system.signalfd(fd, mask, flags);
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .BADF, .INVAL => unreachable,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NOMEM => return error.SystemResources,
        .MFILE => return error.ProcessResources,
        .NODEV => return error.InodeMountFail,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `mask` | `*const sigset_t` | – | – |
| `flags` | `u32` | – | – |
| Return | `fd_t` | – | – |

</details>

---

### <a id="fn-sync"></a>`sync`

<details class="declaration-card" open>
<summary>Function – Write all pending file contents and metadata modifications to all filesystems</summary>

Write all pending file contents and metadata modifications to all filesystems.

```zig
pub fn sync() void {
    system.sync();
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-syncfs"></a>`syncfs`

<details class="declaration-card" open>
<summary>Function – Write all pending file contents and metadata modifications to the filesystem which contains the specified file</summary>

Write all pending file contents and metadata modifications to the filesystem which contains the specified file.

```zig
pub fn syncfs(fd: fd_t) SyncError!void {
    const rc = system.syncfs(fd);
    switch (errno(rc)) {
        .SUCCESS => return,
        .BADF, .INVAL, .ROFS => unreachable,
        .IO => return error.InputOutput,
        .NOSPC => return error.NoSpaceLeft,
        .DQUOT => return error.DiskQuota,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | [`SyncError!void`](#error-syncerror) | – | – |

</details>

---

### <a id="fn-fsync"></a>`fsync`

<details class="declaration-card" open>
<summary>Function – Write all pending file contents and metadata modifications for the specified file descriptor to the underlying filesystem</summary>

Write all pending file contents and metadata modifications for the specified file descriptor to the underlying filesystem.

```zig
pub fn fsync(fd: fd_t) SyncError!void {
    if (native_os == .windows) {
        if (windows.kernel32.FlushFileBuffers(fd) != 0)
            return;
        switch (windows.GetLastError()) {
            .SUCCESS => return,
            .INVALID_HANDLE => unreachable,
            .ACCESS_DENIED => return error.AccessDenied, // a sync was performed but the system couldn't update the access time
            .UNEXP_NET_ERR => return error.InputOutput,
            else => return error.InputOutput,
        }
    }
    const rc = system.fsync(fd);
    switch (errno(rc)) {
        .SUCCESS => return,
        .BADF, .INVAL, .ROFS => unreachable,
        .IO => return error.InputOutput,
        .NOSPC => return error.NoSpaceLeft,
        .DQUOT => return error.DiskQuota,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | [`SyncError!void`](#error-syncerror) | – | – |

</details>

---

### <a id="fn-fdatasync"></a>`fdatasync`

<details class="declaration-card" open>
<summary>Function – Write all pending file contents for the specified file descriptor to the underlying filesystem, but not necessarily the metadata</summary>

Write all pending file contents for the specified file descriptor to the underlying filesystem, but not necessarily the metadata.

```zig
pub fn fdatasync(fd: fd_t) SyncError!void {
    if (native_os == .windows) {
        return fsync(fd) catch |err| switch (err) {
            SyncError.AccessDenied => return, // fdatasync doesn't promise that the access time was synced
            else => return err,
        };
    }
    const rc = system.fdatasync(fd);
    switch (errno(rc)) {
        .SUCCESS => return,
        .BADF, .INVAL, .ROFS => unreachable,
        .IO => return error.InputOutput,
        .NOSPC => return error.NoSpaceLeft,
        .DQUOT => return error.DiskQuota,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | [`SyncError!void`](#error-syncerror) | – | – |

</details>

---

### <a id="fn-prctl"></a>`prctl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn prctl(option: PR, args: anytype) PrctlError!u31 {
    if (@typeInfo(@TypeOf(args)) != .@"struct")
        @compileError("Expected tuple or struct argument, found " ++ @typeName(@TypeOf(args)));
    if (args.len > 4)
        @compileError("prctl takes a maximum of 4 optional arguments");

    var buf: [4]usize = undefined;
    {
        comptime var i = 0;
        inline while (i < args.len) : (i += 1) buf[i] = args[i];
    }

    const rc = system.prctl(@intFromEnum(option), buf[0], buf[1], buf[2], buf[3]);
    switch (errno(rc)) {
        .SUCCESS => return @intCast(rc),
        .ACCES => return error.AccessDenied,
        .BADF => return error.InvalidFileDescriptor,
        .FAULT => return error.InvalidAddress,
        .INVAL => unreachable,
        .NODEV, .NXIO => return error.UnsupportedFeature,
        .OPNOTSUPP => return error.OperationNotSupported,
        .PERM, .BUSY => return error.PermissionDenied,
        .RANGE => unreachable,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `option` | [`PR`](#const-pr) | – | – |
| `args` | `` | – | – |
| Return | [`PrctlError!u31`](#error-prctlerror) | – | – |

</details>

---

### <a id="fn-getrlimit"></a>`getrlimit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn getrlimit(resource: rlimit_resource) GetrlimitError!rlimit {
    const getrlimit_sym = if (lfs64_abi) system.getrlimit64 else system.getrlimit;

    var limits: rlimit = undefined;
    switch (errno(getrlimit_sym(resource, &limits))) {
        .SUCCESS => return limits,
        .FAULT => unreachable, // bogus pointer
        .INVAL => unreachable,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `resource` | `rlimit_resource` | – | – |
| Return | [`GetrlimitError!rlimit`](#const-getrlimiterror) | – | – |

</details>

---

### <a id="fn-setrlimit"></a>`setrlimit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn setrlimit(resource: rlimit_resource, limits: rlimit) SetrlimitError!void {
    const setrlimit_sym = if (lfs64_abi) system.setrlimit64 else system.setrlimit;

    switch (errno(setrlimit_sym(resource, &limits))) {
        .SUCCESS => return,
        .FAULT => unreachable, // bogus pointer
        .INVAL => return error.LimitTooBig, // this could also mean "invalid resource", but that would be unreachable
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `resource` | `rlimit_resource` | – | – |
| `limits` | `rlimit` | – | – |
| Return | [`SetrlimitError!void`](#error-setrlimiterror) | – | – |

</details>

---

### <a id="fn-mincore"></a>`mincore`

<details class="declaration-card" open>
<summary>Function – Determine whether pages are resident in memory</summary>

Determine whether pages are resident in memory.

```zig
pub fn mincore(ptr: [*]align(page_size_min) u8, length: usize, vec: [*]u8) MincoreError!void {
    return switch (errno(system.mincore(ptr, length, vec))) {
        .SUCCESS => {},
        .AGAIN => error.SystemResources,
        .FAULT => error.InvalidAddress,
        .INVAL => error.InvalidSyscall,
        .NOMEM => error.OutOfMemory,
        .NOSYS => error.MincoreUnavailable,
        else => |err| unexpectedErrno(err),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `[*]align(page_size_min) u8` | – | – |
| `length` | `usize` | – | – |
| `vec` | `[*]u8` | – | – |
| Return | [`MincoreError!void`](#error-mincoreerror) | – | – |

</details>

---

### <a id="fn-madvise"></a>`madvise`

<details class="declaration-card" open>
<summary>Function – Give advice about use of memory</summary>

Give advice about use of memory.
This syscall is optional and is sometimes configured to be disabled.

```zig
pub fn madvise(ptr: [*]align(page_size_min) u8, length: usize, advice: u32) MadviseError!void {
    switch (errno(system.madvise(ptr, length, advice))) {
        .SUCCESS => return,
        .PERM => return error.PermissionDenied,
        .ACCES => return error.AccessDenied,
        .AGAIN => return error.SystemResources,
        .BADF => unreachable, // The map exists, but the area maps something that isn't a file.
        .INVAL => return error.InvalidSyscall,
        .IO => return error.WouldExceedMaximumResidentSetSize,
        .NOMEM => return error.OutOfMemory,
        .NOSYS => return error.MadviseUnavailable,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `[*]align(page_size_min) u8` | – | – |
| `length` | `usize` | – | – |
| `advice` | `u32` | – | – |
| Return | [`MadviseError!void`](#error-madviseerror) | – | – |

</details>

---

### <a id="fn-perf-event-open"></a>`perf_event_open`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn perf_event_open(
    attr: *system.perf_event_attr,
    pid: pid_t,
    cpu: i32,
    group_fd: fd_t,
    flags: usize,
) PerfEventOpenError!fd_t {
    if (native_os == .linux) {
        // There is no syscall wrapper for this function exposed by libcs
        const rc = linux.perf_event_open(attr, pid, cpu, group_fd, flags);
        switch (errno(rc)) {
            .SUCCESS => return @intCast(rc),
            .@"2BIG" => return error.TooBig,
            .ACCES => return error.PermissionDenied,
            .BADF => unreachable, // group_fd file descriptor is not valid.
            .BUSY => return error.DeviceBusy,
            .FAULT => unreachable, // Segmentation fault.
            .INVAL => unreachable, // Bad attr settings.
            .INTR => unreachable, // Mixed perf and ftrace handling for a uprobe.
            .MFILE => return error.ProcessResources,
            .NODEV => return error.EventRequiresUnsupportedCpuFeature,
            .NOENT => unreachable, // Invalid type setting.
            .NOSPC => return error.TooManyBreakpoints,
            .NOSYS => return error.SampleStackNotSupported,
            .OPNOTSUPP => return error.EventNotSupported,
            .OVERFLOW => return error.SampleMaxStackOverflow,
            .PERM => return error.PermissionDenied,
            .SRCH => return error.ProcessNotFound,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `attr` | `*system.perf_event_attr` | – | – |
| `pid` | `pid_t` | – | – |
| `cpu` | `i32` | – | – |
| `group\_fd` | `fd_t` | – | – |
| `flags` | `usize` | – | – |
| Return | [`PerfEventOpenError!fd_t`](#error-perfeventopenerror) | – | – |

</details>

---

### <a id="fn-timerfd-create"></a>`timerfd_create`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn timerfd_create(clock_id: system.timerfd_clockid_t, flags: system.TFD) TimerFdCreateError!fd_t {
    const rc = system.timerfd_create(clock_id, @bitCast(flags));
    return switch (errno(rc)) {
        .SUCCESS => @intCast(rc),
        .INVAL => unreachable,
        .MFILE => return error.ProcessFdQuotaExceeded,
        .NFILE => return error.SystemFdQuotaExceeded,
        .NODEV => return error.NoDevice,
        .NOMEM => return error.SystemResources,
        .PERM => return error.PermissionDenied,
        else => |err| return unexpectedErrno(err),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `clock\_id` | `system.timerfd_clockid_t` | – | – |
| `flags` | `system.TFD` | – | – |
| Return | [`TimerFdCreateError!fd_t`](#error-timerfdcreateerror) | – | – |

</details>

---

### <a id="fn-timerfd-settime"></a>`timerfd_settime`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn timerfd_settime(
    fd: i32,
    flags: system.TFD.TIMER,
    new_value: *const system.itimerspec,
    old_value: ?*system.itimerspec,
) TimerFdSetError!void {
    const rc = system.timerfd_settime(fd, @bitCast(flags), new_value, old_value);
    return switch (errno(rc)) {
        .SUCCESS => {},
        .BADF => error.InvalidHandle,
        .FAULT => unreachable,
        .INVAL => unreachable,
        .CANCELED => error.Canceled,
        else => |err| return unexpectedErrno(err),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `i32` | – | – |
| `flags` | `system.TFD.TIMER` | – | – |
| `new\_value` | `*const system.itimerspec` | – | – |
| `old\_value` | `?*system.itimerspec` | – | – |
| Return | [`TimerFdSetError!void`](#error-timerfdseterror) | – | – |

</details>

---

### <a id="fn-timerfd-gettime"></a>`timerfd_gettime`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn timerfd_gettime(fd: i32) TimerFdGetError!system.itimerspec {
    var curr_value: system.itimerspec = undefined;
    const rc = system.timerfd_gettime(fd, &curr_value);
    return switch (errno(rc)) {
        .SUCCESS => return curr_value,
        .BADF => error.InvalidHandle,
        .FAULT => unreachable,
        .INVAL => unreachable,
        else => |err| return unexpectedErrno(err),
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `i32` | – | – |
| Return | [`TimerFdGetError!system.itimerspec`](#error-timerfdgeterror) | – | – |

</details>

---

### <a id="fn-ptrace"></a>`ptrace`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn ptrace(request: u32, pid: pid_t, addr: usize, signal: usize) PtraceError!void {
    if (native_os == .windows or native_os == .wasi)
        @compileError("Unsupported OS");

    return switch (native_os) {
        .linux => switch (errno(linux.ptrace(request, pid, addr, signal, 0))) {
            .SUCCESS => {},
            .SRCH => error.ProcessNotFound,
            .FAULT => unreachable,
            .INVAL => unreachable,
            .IO => return error.InputOutput,
            .PERM => error.PermissionDenied,
            .BUSY => error.DeviceBusy,
            else => |err| return unexpectedErrno(err),
        },

        .macos, .ios, .tvos, .watchos, .visionos => switch (errno(std.c.ptrace(
            @intCast(request),
            pid,
            @ptrFromInt(addr),
            @intCast(signal),
        ))) {
            .SUCCESS => {},
            .SRCH => error.ProcessNotFound,
            .INVAL => unreachable,
            .PERM => error.PermissionDenied,
            .BUSY => error.DeviceBusy,
            else => |err| return unexpectedErrno(err),
        },

        else => switch (errno(system.ptrace(request, pid, addr, signal))) {
            .SUCCESS => {},
            .SRCH => error.ProcessNotFound,
            .INVAL => unreachable,
            .PERM => error.PermissionDenied,
            .BUSY => error.DeviceBusy,
            else => |err| return unexpectedErrno(err),
        },
    };
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `request` | `u32` | – | – |
| `pid` | `pid_t` | – | – |
| `addr` | `usize` | – | – |
| `signal` | `usize` | – | – |
| Return | [`PtraceError!void`](#error-ptraceerror) | – | – |

</details>

---

### <a id="fn-name-to-handle-at"></a>`name_to_handle_at`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn name_to_handle_at(
    dirfd: fd_t,
    pathname: []const u8,
    handle: *std.os.linux.file_handle,
    mount_id: *i32,
    flags: u32,
) NameToFileHandleAtError!void {
    const pathname_c = try toPosixPath(pathname);
    return name_to_handle_atZ(dirfd, &pathname_c, handle, mount_id, flags);
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `pathname` | `[]const u8` | – | – |
| `handle` | `*std.os.linux.file_handle` | – | – |
| `mount\_id` | `*i32` | – | – |
| `flags` | `u32` | – | – |
| Return | [`NameToFileHandleAtError!void`](#error-nametofilehandleaterror) | – | – |

</details>

---

### <a id="fn-name-to-handle-atz"></a>`name_to_handle_atZ`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn name_to_handle_atZ(
    dirfd: fd_t,
    pathname_z: [*:0]const u8,
    handle: *std.os.linux.file_handle,
    mount_id: *i32,
    flags: u32,
) NameToFileHandleAtError!void {
    switch (errno(system.name_to_handle_at(dirfd, pathname_z, handle, mount_id, flags))) {
        .SUCCESS => {},
        .FAULT => unreachable, // pathname, mount_id, or handle outside accessible address space
        .INVAL => unreachable, // bad flags, or handle_bytes too big
        .NOENT => return error.FileNotFound,
        .NOTDIR => return error.NotDir,
        .OPNOTSUPP => return error.OperationNotSupported,
        .OVERFLOW => return error.NameTooLong,
        else => |err| return unexpectedErrno(err),
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `pathname\_z` | `[*:0]const u8` | – | – |
| `handle` | `*std.os.linux.file_handle` | – | – |
| `mount\_id` | `*i32` | – | – |
| `flags` | `u32` | – | – |
| Return | [`NameToFileHandleAtError!void`](#error-nametofilehandleaterror) | – | – |

</details>

---

### <a id="fn-ioctl-siocgifindex"></a>`ioctl_SIOCGIFINDEX`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

```zig
pub fn ioctl_SIOCGIFINDEX(fd: fd_t, ifr: *ifreq) IoCtl_SIOCGIFINDEX_Error!void {
    while (true) {
        switch (errno(system.ioctl(fd, SIOCGIFINDEX, @intFromPtr(ifr)))) {
            .SUCCESS => return,
            .INVAL => unreachable, // Bad parameters.
            .NOTTY => unreachable,
            .NXIO => unreachable,
            .BADF => unreachable, // Always a race condition.
            .FAULT => unreachable, // Bad pointer parameter.
            .INTR => continue,
            .IO => return error.FileSystem,
            .NODEV => return error.InterfaceNotFound,
            else => |err| return unexpectedErrno(err),
        }
    }
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `ifr` | `*ifreq` | – | – |
| Return | [`IoCtl_SIOCGIFINDEX_Error!void`](#error-ioctl-siocgifindex-error) | – | – |

</details>

---

### <a id="fn-unexpectederrno"></a>`unexpectedErrno`

<details class="declaration-card" open>
<summary>Function – Call this when you made a syscall or something that sets errno</summary>

Call this when you made a syscall or something that sets errno
and you get an unexpected error.

```zig
pub fn unexpectedErrno(err: E) UnexpectedError {
    if (unexpected_error_tracing) {
        std.debug.print("unexpected errno: {d}\n", .{@intFromEnum(err)});
        std.debug.dumpCurrentStackTrace(null);
    }
    return error.Unexpected;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `err` | `E` | – | – |
| Return | [`UnexpectedError`](#error-unexpectederror) | – | – |

</details>

---

### <a id="fn-toposixpath"></a>`toPosixPath`

<details class="declaration-card" open>
<summary>Function – Used to convert a slice to a null terminated slice on the stack</summary>

Used to convert a slice to a null terminated slice on the stack.

```zig
pub fn toPosixPath(file_path: []const u8) error{NameTooLong}![PATH_MAX - 1:0]u8 {
    if (std.debug.runtime_safety) assert(mem.indexOfScalar(u8, file_path, 0) == null);
    var path_with_null: [PATH_MAX - 1:0]u8 = undefined;
    // >= rather than > to make room for the null byte
    if (file_path.len >= PATH_MAX) return error.NameTooLong;
    @memcpy(path_with_null[0..file_path.len], file_path);
    path_with_null[file_path.len] = 0;
    return path_with_null;
}
```

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `file\_path` | `[]const u8` | – | – |
| Return | `error{NameTooLong}![PATH_MAX - 1:0]u8` | – | – |

**Possible Errors:**

- `error.NameTooLong`

</details>

---

## Error Sets (92)

### <a id="error-fchmoderror"></a>`FChmodError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FChmodError = error{
    AccessDenied,
    PermissionDenied,
    InputOutput,
    SymLinkLoop,
    FileNotFound,
    SystemResources,
    ReadOnlyFileSystem,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied`
- `error.PermissionDenied`
- `error.InputOutput`
- `error.SymLinkLoop`
- `error.FileNotFound`
- `error.SystemResources`
- `error.ReadOnlyFileSystem`

</details>

---

### <a id="error-fchmodaterror"></a>`FChmodAtError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FChmodAtError = FChmodError || error{
    /// A component of `path` exceeded `NAME_MAX`, or the entire path exceeded
    /// `PATH_MAX`.
    NameTooLong,
    /// `path` resolves to a symbolic link, and `AT.SYMLINK_NOFOLLOW` was set
    /// in `flags`. This error only occurs on Linux, where changing the mode of
    /// a symbolic link has no meaning and can cause undefined behaviour on
    /// certain filesystems.
    ///
    /// The procfs fallback was used but procfs was not mounted.
    OperationNotSupported,
    /// The procfs fallback was used but the process exceeded its open file
    /// limit.
    ProcessFdQuotaExceeded,
    /// The procfs fallback was used but the system exceeded it open file limit.
    SystemFdQuotaExceeded,
}
```

**Errors:**

- `error.NameTooLong` - A component of \`path\` exceeded \`NAME\_MAX\`, or the entire path exceeded \`PATH\_MAX\`.
- `error.OperationNotSupported` - \`path\` resolves to a symbolic link, and \`AT.SYMLINK\_NOFOLLOW\` was set in \`flags\`. This error only occurs on Linux, where changing the mode of a symbolic link has no meaning and can cause undefined behaviour on certain filesystems. The procfs fallback was used but procfs was not mounted.
- `error.ProcessFdQuotaExceeded` - The procfs fallback was used but the process exceeded its open file limit.
- `error.SystemFdQuotaExceeded` - The procfs fallback was used but the system exceeded it open file limit.

</details>

---

### <a id="error-fchownerror"></a>`FChownError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FChownError = error{
    AccessDenied,
    PermissionDenied,
    InputOutput,
    SymLinkLoop,
    FileNotFound,
    SystemResources,
    ReadOnlyFileSystem,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied`
- `error.PermissionDenied`
- `error.InputOutput`
- `error.SymLinkLoop`
- `error.FileNotFound`
- `error.SystemResources`
- `error.ReadOnlyFileSystem`

</details>

---

### <a id="error-rebooterror"></a>`RebootError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const RebootError = error{
    PermissionDenied,
} || UnexpectedError
```

**Errors:**

- `error.PermissionDenied`

</details>

---

### <a id="error-killerror"></a>`KillError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const KillError = error{ ProcessNotFound, PermissionDenied } || UnexpectedError
```

**Errors:**

- `error.ProcessNotFound`
- `error.PermissionDenied`

</details>

---

### <a id="error-readerror"></a>`ReadError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ReadError = error{
    InputOutput,
    SystemResources,
    IsDir,
    OperationAborted,
    BrokenPipe,
    ConnectionResetByPeer,
    ConnectionTimedOut,
    NotOpenForReading,
    SocketNotConnected,

    /// This error occurs when no global event loop is configured,
    /// and reading from the file descriptor would block.
    WouldBlock,

    /// reading a timerfd with CANCEL_ON_SET will lead to this error
    /// when the clock goes through a discontinuous change
    Canceled,

    /// In WASI, this error occurs when the file descriptor does
    /// not hold the required rights to read from it.
    AccessDenied,

    /// This error occurs in Linux if the process to be read from
    /// no longer exists.
    ProcessNotFound,

    /// Unable to read file due to lock.
    LockViolation,
} || UnexpectedError
```

**Errors:**

- `error.InputOutput`
- `error.SystemResources`
- `error.IsDir`
- `error.OperationAborted`
- `error.BrokenPipe`
- `error.ConnectionResetByPeer`
- `error.ConnectionTimedOut`
- `error.NotOpenForReading`
- `error.SocketNotConnected`
- `error.WouldBlock` - This error occurs when no global event loop is configured, and reading from the file descriptor would block.
- `error.Canceled` - reading a timerfd with CANCEL\_ON\_SET will lead to this error when the clock goes through a discontinuous change
- `error.AccessDenied` - In WASI, this error occurs when the file descriptor does not hold the required rights to read from it.
- `error.ProcessNotFound` - This error occurs in Linux if the process to be read from no longer exists.
- `error.LockViolation` - Unable to read file due to lock.

</details>

---

### <a id="error-preaderror"></a>`PReadError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const PReadError = ReadError || error{Unseekable}
```

**Errors:**

- `error.Unseekable`

</details>

---

### <a id="error-truncateerror"></a>`TruncateError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TruncateError = error{
    FileTooBig,
    InputOutput,
    FileBusy,
    AccessDenied,
    PermissionDenied,
    NonResizable,
} || UnexpectedError
```

**Errors:**

- `error.FileTooBig`
- `error.InputOutput`
- `error.FileBusy`
- `error.AccessDenied`
- `error.PermissionDenied`
- `error.NonResizable`

</details>

---

### <a id="error-writeerror"></a>`WriteError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const WriteError = error{
    DiskQuota,
    FileTooBig,
    InputOutput,
    NoSpaceLeft,
    DeviceBusy,
    InvalidArgument,

    /// File descriptor does not hold the required rights to write to it.
    AccessDenied,
    PermissionDenied,
    BrokenPipe,
    SystemResources,
    OperationAborted,
    NotOpenForWriting,

    /// The process cannot access the file because another process has locked
    /// a portion of the file. Windows-only.
    LockViolation,

    /// This error occurs when no global event loop is configured,
    /// and reading from the file descriptor would block.
    WouldBlock,

    /// Connection reset by peer.
    ConnectionResetByPeer,

    /// This error occurs in Linux if the process being written to
    /// no longer exists.
    ProcessNotFound,
    /// This error occurs when a device gets disconnected before or mid-flush
    /// while it's being written to - errno(6): No such device or address.
    NoDevice,

    /// The socket type requires that message be sent atomically, and the size of the message
    /// to be sent made this impossible. The message is not transmitted.
    MessageTooBig,
} || UnexpectedError
```

**Errors:**

- `error.DiskQuota`
- `error.FileTooBig`
- `error.InputOutput`
- `error.NoSpaceLeft`
- `error.DeviceBusy`
- `error.InvalidArgument`
- `error.AccessDenied` - File descriptor does not hold the required rights to write to it.
- `error.PermissionDenied`
- `error.BrokenPipe`
- `error.SystemResources`
- `error.OperationAborted`
- `error.NotOpenForWriting`
- `error.LockViolation` - The process cannot access the file because another process has locked a portion of the file. Windows-only.
- `error.WouldBlock` - This error occurs when no global event loop is configured, and reading from the file descriptor would block.
- `error.ConnectionResetByPeer` - Connection reset by peer.
- `error.ProcessNotFound` - This error occurs in Linux if the process being written to no longer exists.
- `error.NoDevice` - This error occurs when a device gets disconnected before or mid-flush while it's being written to - errno(6): No such device or address.
- `error.MessageTooBig` - The socket type requires that message be sent atomically, and the size of the message to be sent made this impossible. The message is not transmitted.

</details>

---

### <a id="error-pwriteerror"></a>`PWriteError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const PWriteError = WriteError || error{Unseekable}
```

**Errors:**

- `error.Unseekable`

</details>

---

### <a id="error-openerror"></a>`OpenError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const OpenError = error{
    /// In WASI, this error may occur when the file descriptor does
    /// not hold the required rights to open a new resource relative to it.
    AccessDenied,
    PermissionDenied,
    SymLinkLoop,
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
    NoDevice,
    /// Either:
    /// * One of the path components does not exist.
    /// * Cwd was used, but cwd has been deleted.
    /// * The path associated with the open directory handle has been deleted.
    /// * On macOS, multiple processes or threads raced to create the same file
    ///   with `O.EXCL` set to `false`.
    FileNotFound,

    /// The path exceeded `max_path_bytes` bytes.
    NameTooLong,

    /// Insufficient kernel memory was available, or
    /// the named file is a FIFO and per-user hard limit on
    /// memory allocation for pipes has been reached.
    SystemResources,

    /// The file is too large to be opened. This error is unreachable
    /// for 64-bit targets, as well as when opening directories.
    FileTooBig,

    /// The path refers to directory but the `DIRECTORY` flag was not provided.
    IsDir,

    /// A new path cannot be created because the device has no room for the new file.
    /// This error is only reachable when the `CREAT` flag is provided.
    NoSpaceLeft,

    /// A component used as a directory in the path was not, in fact, a directory, or
    /// `DIRECTORY` was specified and the path was not a directory.
    NotDir,

    /// The path already exists and the `CREAT` and `EXCL` flags were provided.
    PathAlreadyExists,
    DeviceBusy,

    /// The underlying filesystem does not support file locks
    FileLocksNotSupported,

    /// Path contains characters that are disallowed by the underlying filesystem.
    BadPathName,

    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,

    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,

    /// On Windows, `\\server` or `\\server\share` was not found.
    NetworkNotFound,

    /// This error occurs in Linux if the process to be open was not found.
    ProcessNotFound,

    /// One of these three things:
    /// * pathname  refers to an executable image which is currently being
    ///   executed and write access was requested.
    /// * pathname refers to a file that is currently in  use  as  a  swap
    ///   file, and the O_TRUNC flag was specified.
    /// * pathname  refers  to  a file that is currently being read by the
    ///   kernel (e.g., for module/firmware loading), and write access was
    ///   requested.
    FileBusy,

    WouldBlock,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - In WASI, this error may occur when the file descriptor does not hold the required rights to open a new resource relative to it.
- `error.PermissionDenied`
- `error.SymLinkLoop`
- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`
- `error.NoDevice`
- `error.FileNotFound` - Either: \* One of the path components does not exist. \* Cwd was used, but cwd has been deleted. \* The path associated with the open directory handle has been deleted. \* On macOS, multiple processes or threads raced to create the same file with \`O.EXCL\` set to \`false\`.
- `error.NameTooLong` - The path exceeded \`max\_path\_bytes\` bytes.
- `error.SystemResources` - Insufficient kernel memory was available, or the named file is a FIFO and per-user hard limit on memory allocation for pipes has been reached.
- `error.FileTooBig` - The file is too large to be opened. This error is unreachable for 64-bit targets, as well as when opening directories.
- `error.IsDir` - The path refers to directory but the \`DIRECTORY\` flag was not provided.
- `error.NoSpaceLeft` - A new path cannot be created because the device has no room for the new file. This error is only reachable when the \`CREAT\` flag is provided.
- `error.NotDir` - A component used as a directory in the path was not, in fact, a directory, or \`DIRECTORY\` was specified and the path was not a directory.
- `error.PathAlreadyExists` - The path already exists and the \`CREAT\` and \`EXCL\` flags were provided.
- `error.DeviceBusy`
- `error.FileLocksNotSupported` - The underlying filesystem does not support file locks
- `error.BadPathName` - Path contains characters that are disallowed by the underlying filesystem.
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/
- `error.NetworkNotFound` - On Windows, \`\\\\server\` or \`\\\\server\\share\` was not found.
- `error.ProcessNotFound` - This error occurs in Linux if the process to be open was not found.
- `error.FileBusy` - One of these three things: \* pathname  refers to an executable image which is currently being executed and write access was requested. \* pathname refers to a file that is currently in  use  as  a  swap file, and the O\_TRUNC flag was specified. \* pathname  refers  to  a file that is currently being read by the kernel (e.g., for module/firmware loading), and write access was requested.
- `error.WouldBlock`

</details>

---

### <a id="error-execveerror"></a>`ExecveError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ExecveError = error{
    SystemResources,
    AccessDenied,
    PermissionDenied,
    InvalidExe,
    FileSystem,
    IsDir,
    FileNotFound,
    NotDir,
    FileBusy,
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
    NameTooLong,
} || UnexpectedError
```

**Errors:**

- `error.SystemResources`
- `error.AccessDenied`
- `error.PermissionDenied`
- `error.InvalidExe`
- `error.FileSystem`
- `error.IsDir`
- `error.FileNotFound`
- `error.NotDir`
- `error.FileBusy`
- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`
- `error.NameTooLong`

</details>

---

### <a id="error-getcwderror"></a>`GetCwdError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const GetCwdError = error{
    NameTooLong,
    CurrentWorkingDirectoryUnlinked,
} || UnexpectedError
```

**Errors:**

- `error.NameTooLong`
- `error.CurrentWorkingDirectoryUnlinked`

</details>

---

### <a id="error-symlinkerror"></a>`SymLinkError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SymLinkError = error{
    /// In WASI, this error may occur when the file descriptor does
    /// not hold the required rights to create a new symbolic link relative to it.
    AccessDenied,
    PermissionDenied,
    DiskQuota,
    PathAlreadyExists,
    FileSystem,
    SymLinkLoop,
    FileNotFound,
    SystemResources,
    NoSpaceLeft,
    ReadOnlyFileSystem,
    NotDir,
    NameTooLong,

    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,

    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,

    BadPathName,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - In WASI, this error may occur when the file descriptor does not hold the required rights to create a new symbolic link relative to it.
- `error.PermissionDenied`
- `error.DiskQuota`
- `error.PathAlreadyExists`
- `error.FileSystem`
- `error.SymLinkLoop`
- `error.FileNotFound`
- `error.SystemResources`
- `error.NoSpaceLeft`
- `error.ReadOnlyFileSystem`
- `error.NotDir`
- `error.NameTooLong`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/
- `error.BadPathName`

</details>

---

### <a id="error-linkerror"></a>`LinkError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const LinkError = UnexpectedError || error{
    AccessDenied,
    PermissionDenied,
    DiskQuota,
    PathAlreadyExists,
    FileSystem,
    SymLinkLoop,
    LinkQuotaExceeded,
    NameTooLong,
    FileNotFound,
    SystemResources,
    NoSpaceLeft,
    ReadOnlyFileSystem,
    NotSameFileSystem,

    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,
}
```

**Errors:**

- `error.AccessDenied`
- `error.PermissionDenied`
- `error.DiskQuota`
- `error.PathAlreadyExists`
- `error.FileSystem`
- `error.SymLinkLoop`
- `error.LinkQuotaExceeded`
- `error.NameTooLong`
- `error.FileNotFound`
- `error.SystemResources`
- `error.NoSpaceLeft`
- `error.ReadOnlyFileSystem`
- `error.NotSameFileSystem`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.

</details>

---

### <a id="error-linkaterror"></a>`LinkatError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const LinkatError = LinkError || error{NotDir}
```

**Errors:**

- `error.NotDir`

</details>

---

### <a id="error-unlinkerror"></a>`UnlinkError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const UnlinkError = error{
    FileNotFound,

    /// In WASI, this error may occur when the file descriptor does
    /// not hold the required rights to unlink a resource by path relative to it.
    AccessDenied,
    PermissionDenied,
    FileBusy,
    FileSystem,
    IsDir,
    SymLinkLoop,
    NameTooLong,
    NotDir,
    SystemResources,
    ReadOnlyFileSystem,

    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,

    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,

    /// On Windows, file paths cannot contain these characters:
    /// '/', '*', '?', '"', '<', '>', '|'
    BadPathName,

    /// On Windows, `\\server` or `\\server\share` was not found.
    NetworkNotFound,
} || UnexpectedError
```

**Errors:**

- `error.FileNotFound`
- `error.AccessDenied` - In WASI, this error may occur when the file descriptor does not hold the required rights to unlink a resource by path relative to it.
- `error.PermissionDenied`
- `error.FileBusy`
- `error.FileSystem`
- `error.IsDir`
- `error.SymLinkLoop`
- `error.NameTooLong`
- `error.NotDir`
- `error.SystemResources`
- `error.ReadOnlyFileSystem`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/
- `error.BadPathName` - On Windows, file paths cannot contain these characters: '/', '\*', '?', '"', '\<', '\>', '|'
- `error.NetworkNotFound` - On Windows, \`\\\\server\` or \`\\\\server\\share\` was not found.

</details>

---

### <a id="error-unlinkaterror"></a>`UnlinkatError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const UnlinkatError = UnlinkError || error{
    /// When passing `AT.REMOVEDIR`, this error occurs when the named directory is not empty.
    DirNotEmpty,
}
```

**Errors:**

- `error.DirNotEmpty` - When passing \`AT.REMOVEDIR\`, this error occurs when the named directory is not empty.

</details>

---

### <a id="error-renameerror"></a>`RenameError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const RenameError = error{
    /// In WASI, this error may occur when the file descriptor does
    /// not hold the required rights to rename a resource by path relative to it.
    ///
    /// On Windows, this error may be returned instead of PathAlreadyExists when
    /// renaming a directory over an existing directory.
    AccessDenied,
    PermissionDenied,
    FileBusy,
    DiskQuota,
    IsDir,
    SymLinkLoop,
    LinkQuotaExceeded,
    NameTooLong,
    FileNotFound,
    NotDir,
    SystemResources,
    NoSpaceLeft,
    PathAlreadyExists,
    ReadOnlyFileSystem,
    RenameAcrossMountPoints,
    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,
    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,
    BadPathName,
    NoDevice,
    SharingViolation,
    PipeBusy,
    /// On Windows, `\\server` or `\\server\share` was not found.
    NetworkNotFound,
    /// On Windows, antivirus software is enabled by default. It can be
    /// disabled, but Windows Update sometimes ignores the user's preference
    /// and re-enables it. When enabled, antivirus software on Windows
    /// intercepts file system operations and makes them significantly slower
    /// in addition to possibly failing with this error code.
    AntivirusInterference,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - In WASI, this error may occur when the file descriptor does not hold the required rights to rename a resource by path relative to it. On Windows, this error may be returned instead of PathAlreadyExists when renaming a directory over an existing directory.
- `error.PermissionDenied`
- `error.FileBusy`
- `error.DiskQuota`
- `error.IsDir`
- `error.SymLinkLoop`
- `error.LinkQuotaExceeded`
- `error.NameTooLong`
- `error.FileNotFound`
- `error.NotDir`
- `error.SystemResources`
- `error.NoSpaceLeft`
- `error.PathAlreadyExists`
- `error.ReadOnlyFileSystem`
- `error.RenameAcrossMountPoints`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/
- `error.BadPathName`
- `error.NoDevice`
- `error.SharingViolation`
- `error.PipeBusy`
- `error.NetworkNotFound` - On Windows, \`\\\\server\` or \`\\\\server\\share\` was not found.
- `error.AntivirusInterference` - On Windows, antivirus software is enabled by default. It can be disabled, but Windows Update sometimes ignores the user's preference and re-enables it. When enabled, antivirus software on Windows intercepts file system operations and makes them significantly slower in addition to possibly failing with this error code.

</details>

---

### <a id="error-makedirerror"></a>`MakeDirError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const MakeDirError = error{
    /// In WASI, this error may occur when the file descriptor does
    /// not hold the required rights to create a new directory relative to it.
    AccessDenied,
    PermissionDenied,
    DiskQuota,
    PathAlreadyExists,
    SymLinkLoop,
    LinkQuotaExceeded,
    NameTooLong,
    FileNotFound,
    SystemResources,
    NoSpaceLeft,
    NotDir,
    ReadOnlyFileSystem,
    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,
    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,
    BadPathName,
    NoDevice,
    /// On Windows, `\\server` or `\\server\share` was not found.
    NetworkNotFound,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - In WASI, this error may occur when the file descriptor does not hold the required rights to create a new directory relative to it.
- `error.PermissionDenied`
- `error.DiskQuota`
- `error.PathAlreadyExists`
- `error.SymLinkLoop`
- `error.LinkQuotaExceeded`
- `error.NameTooLong`
- `error.FileNotFound`
- `error.SystemResources`
- `error.NoSpaceLeft`
- `error.NotDir`
- `error.ReadOnlyFileSystem`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/
- `error.BadPathName`
- `error.NoDevice`
- `error.NetworkNotFound` - On Windows, \`\\\\server\` or \`\\\\server\\share\` was not found.

</details>

---

### <a id="error-deletedirerror"></a>`DeleteDirError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const DeleteDirError = error{
    AccessDenied,
    PermissionDenied,
    FileBusy,
    SymLinkLoop,
    NameTooLong,
    FileNotFound,
    SystemResources,
    NotDir,
    DirNotEmpty,
    ReadOnlyFileSystem,
    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,
    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,
    BadPathName,
    /// On Windows, `\\server` or `\\server\share` was not found.
    NetworkNotFound,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied`
- `error.PermissionDenied`
- `error.FileBusy`
- `error.SymLinkLoop`
- `error.NameTooLong`
- `error.FileNotFound`
- `error.SystemResources`
- `error.NotDir`
- `error.DirNotEmpty`
- `error.ReadOnlyFileSystem`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/
- `error.BadPathName`
- `error.NetworkNotFound` - On Windows, \`\\\\server\` or \`\\\\server\\share\` was not found.

</details>

---

### <a id="error-changecurdirerror"></a>`ChangeCurDirError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ChangeCurDirError = error{
    AccessDenied,
    FileSystem,
    SymLinkLoop,
    NameTooLong,
    FileNotFound,
    SystemResources,
    NotDir,
    BadPathName,
    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,
    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied`
- `error.FileSystem`
- `error.SymLinkLoop`
- `error.NameTooLong`
- `error.FileNotFound`
- `error.SystemResources`
- `error.NotDir`
- `error.BadPathName`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/

</details>

---

### <a id="error-fchdirerror"></a>`FchdirError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FchdirError = error{
    AccessDenied,
    NotDir,
    FileSystem,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied`
- `error.NotDir`
- `error.FileSystem`

</details>

---

### <a id="error-readlinkerror"></a>`ReadLinkError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ReadLinkError = error{
    /// In WASI, this error may occur when the file descriptor does
    /// not hold the required rights to read value of a symbolic link relative to it.
    AccessDenied,
    PermissionDenied,
    FileSystem,
    SymLinkLoop,
    NameTooLong,
    FileNotFound,
    SystemResources,
    NotLink,
    NotDir,
    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,
    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,
    BadPathName,
    /// Windows-only. This error may occur if the opened reparse point is
    /// of unsupported type.
    UnsupportedReparsePointType,
    /// On Windows, `\\server` or `\\server\share` was not found.
    NetworkNotFound,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - In WASI, this error may occur when the file descriptor does not hold the required rights to read value of a symbolic link relative to it.
- `error.PermissionDenied`
- `error.FileSystem`
- `error.SymLinkLoop`
- `error.NameTooLong`
- `error.FileNotFound`
- `error.SystemResources`
- `error.NotLink`
- `error.NotDir`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/
- `error.BadPathName`
- `error.UnsupportedReparsePointType` - Windows-only. This error may occur if the opened reparse point is of unsupported type.
- `error.NetworkNotFound` - On Windows, \`\\\\server\` or \`\\\\server\\share\` was not found.

</details>

---

### <a id="error-seteiderror"></a>`SetEidError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SetEidError = error{
    InvalidUserId,
    PermissionDenied,
} || UnexpectedError
```

**Errors:**

- `error.InvalidUserId`
- `error.PermissionDenied`

</details>

---

### <a id="error-setiderror"></a>`SetIdError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SetIdError = error{ResourceLimitReached} || SetEidError
```

**Errors:**

- `error.ResourceLimitReached`

</details>

---

### <a id="error-setpgiderror"></a>`SetPgidError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SetPgidError = error{
    ProcessAlreadyExec,
    InvalidProcessGroupId,
    PermissionDenied,
    ProcessNotFound,
} || UnexpectedError
```

**Errors:**

- `error.ProcessAlreadyExec`
- `error.InvalidProcessGroupId`
- `error.PermissionDenied`
- `error.ProcessNotFound`

</details>

---

### <a id="error-socketerror"></a>`SocketError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SocketError = error{
    /// Permission to create a socket of the specified type and/or
    /// pro‐tocol is denied.
    AccessDenied,

    /// The implementation does not support the specified address family.
    AddressFamilyNotSupported,

    /// Unknown protocol, or protocol family not available.
    ProtocolFamilyNotAvailable,

    /// The per-process limit on the number of open file descriptors has been reached.
    ProcessFdQuotaExceeded,

    /// The system-wide limit on the total number of open files has been reached.
    SystemFdQuotaExceeded,

    /// Insufficient memory is available. The socket cannot be created until sufficient
    /// resources are freed.
    SystemResources,

    /// The protocol type or the specified protocol is not supported within this domain.
    ProtocolNotSupported,

    /// The socket type is not supported by the protocol.
    SocketTypeNotSupported,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - Permission to create a socket of the specified type and/or pro‐tocol is denied.
- `error.AddressFamilyNotSupported` - The implementation does not support the specified address family.
- `error.ProtocolFamilyNotAvailable` - Unknown protocol, or protocol family not available.
- `error.ProcessFdQuotaExceeded` - The per-process limit on the number of open file descriptors has been reached.
- `error.SystemFdQuotaExceeded` - The system-wide limit on the total number of open files has been reached.
- `error.SystemResources` - Insufficient memory is available. The socket cannot be created until sufficient resources are freed.
- `error.ProtocolNotSupported` - The protocol type or the specified protocol is not supported within this domain.
- `error.SocketTypeNotSupported` - The socket type is not supported by the protocol.

</details>

---

### <a id="error-shutdownerror"></a>`ShutdownError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ShutdownError = error{
    ConnectionAborted,

    /// Connection was reset by peer, application should close socket as it is no longer usable.
    ConnectionResetByPeer,
    BlockingOperationInProgress,

    /// The network subsystem has failed.
    NetworkSubsystemFailed,

    /// The socket is not connected (connection-oriented sockets only).
    SocketNotConnected,
    SystemResources,
} || UnexpectedError
```

**Errors:**

- `error.ConnectionAborted`
- `error.ConnectionResetByPeer` - Connection was reset by peer, application should close socket as it is no longer usable.
- `error.BlockingOperationInProgress`
- `error.NetworkSubsystemFailed` - The network subsystem has failed.
- `error.SocketNotConnected` - The socket is not connected (connection-oriented sockets only).
- `error.SystemResources`

</details>

---

### <a id="error-binderror"></a>`BindError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const BindError = error{
    /// The address is protected, and the user is not the superuser.
    /// For UNIX domain sockets: Search permission is denied on  a  component
    /// of  the  path  prefix.
    AccessDenied,

    /// The given address is already in use, or in the case of Internet domain sockets,
    /// The  port number was specified as zero in the socket
    /// address structure, but, upon attempting to bind to  an  ephemeral  port,  it  was
    /// determined  that  all  port  numbers in the ephemeral port range are currently in
    /// use.  See the discussion of /proc/sys/net/ipv4/ip_local_port_range ip(7).
    AddressInUse,

    /// A nonexistent interface was requested or the requested address was not local.
    AddressNotAvailable,

    /// The address is not valid for the address family of socket.
    AddressFamilyNotSupported,

    /// Too many symbolic links were encountered in resolving addr.
    SymLinkLoop,

    /// addr is too long.
    NameTooLong,

    /// A component in the directory prefix of the socket pathname does not exist.
    FileNotFound,

    /// Insufficient kernel memory was available.
    SystemResources,

    /// A component of the path prefix is not a directory.
    NotDir,

    /// The socket inode would reside on a read-only filesystem.
    ReadOnlyFileSystem,

    /// The network subsystem has failed.
    NetworkSubsystemFailed,

    FileDescriptorNotASocket,

    AlreadyBound,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - The address is protected, and the user is not the superuser. For UNIX domain sockets: Search permission is denied on  a  component of  the  path  prefix.
- `error.AddressInUse` - The given address is already in use, or in the case of Internet domain sockets, The  port number was specified as zero in the socket address structure, but, upon attempting to bind to  an  ephemeral  port,  it  was determined  that  all  port  numbers in the ephemeral port range are currently in use.  See the discussion of /proc/sys/net/ipv4/ip\_local\_port\_range ip(7).
- `error.AddressNotAvailable` - A nonexistent interface was requested or the requested address was not local.
- `error.AddressFamilyNotSupported` - The address is not valid for the address family of socket.
- `error.SymLinkLoop` - Too many symbolic links were encountered in resolving addr.
- `error.NameTooLong` - addr is too long.
- `error.FileNotFound` - A component in the directory prefix of the socket pathname does not exist.
- `error.SystemResources` - Insufficient kernel memory was available.
- `error.NotDir` - A component of the path prefix is not a directory.
- `error.ReadOnlyFileSystem` - The socket inode would reside on a read-only filesystem.
- `error.NetworkSubsystemFailed` - The network subsystem has failed.
- `error.FileDescriptorNotASocket`
- `error.AlreadyBound`

</details>

---

### <a id="error-listenerror"></a>`ListenError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ListenError = error{
    /// Another socket is already listening on the same port.
    /// For Internet domain sockets, the  socket referred to by sockfd had not previously
    /// been bound to an address and, upon attempting to bind it to an ephemeral port, it
    /// was determined that all port numbers in the ephemeral port range are currently in
    /// use.  See the discussion of /proc/sys/net/ipv4/ip_local_port_range in ip(7).
    AddressInUse,

    /// The file descriptor sockfd does not refer to a socket.
    FileDescriptorNotASocket,

    /// The socket is not of a type that supports the listen() operation.
    OperationNotSupported,

    /// The network subsystem has failed.
    NetworkSubsystemFailed,

    /// Ran out of system resources
    /// On Windows it can either run out of socket descriptors or buffer space
    SystemResources,

    /// Already connected
    AlreadyConnected,

    /// Socket has not been bound yet
    SocketNotBound,
} || UnexpectedError
```

**Errors:**

- `error.AddressInUse` - Another socket is already listening on the same port. For Internet domain sockets, the  socket referred to by sockfd had not previously been bound to an address and, upon attempting to bind it to an ephemeral port, it was determined that all port numbers in the ephemeral port range are currently in use.  See the discussion of /proc/sys/net/ipv4/ip\_local\_port\_range in ip(7).
- `error.FileDescriptorNotASocket` - The file descriptor sockfd does not refer to a socket.
- `error.OperationNotSupported` - The socket is not of a type that supports the listen() operation.
- `error.NetworkSubsystemFailed` - The network subsystem has failed.
- `error.SystemResources` - Ran out of system resources On Windows it can either run out of socket descriptors or buffer space
- `error.AlreadyConnected` - Already connected
- `error.SocketNotBound` - Socket has not been bound yet

</details>

---

### <a id="error-accepterror"></a>`AcceptError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const AcceptError = error{
    ConnectionAborted,

    /// The file descriptor sockfd does not refer to a socket.
    FileDescriptorNotASocket,

    /// The per-process limit on the number of open file descriptors has been reached.
    ProcessFdQuotaExceeded,

    /// The system-wide limit on the total number of open files has been reached.
    SystemFdQuotaExceeded,

    /// Not enough free memory.  This often means that the memory allocation  is  limited
    /// by the socket buffer limits, not by the system memory.
    SystemResources,

    /// Socket is not listening for new connections.
    SocketNotListening,

    ProtocolFailure,

    /// Firewall rules forbid connection.
    BlockedByFirewall,

    /// This error occurs when no global event loop is configured,
    /// and accepting from the socket would block.
    WouldBlock,

    /// An incoming connection was indicated, but was subsequently terminated by the
    /// remote peer prior to accepting the call.
    ConnectionResetByPeer,

    /// The network subsystem has failed.
    NetworkSubsystemFailed,

    /// The referenced socket is not a type that supports connection-oriented service.
    OperationNotSupported,
} || UnexpectedError
```

**Errors:**

- `error.ConnectionAborted`
- `error.FileDescriptorNotASocket` - The file descriptor sockfd does not refer to a socket.
- `error.ProcessFdQuotaExceeded` - The per-process limit on the number of open file descriptors has been reached.
- `error.SystemFdQuotaExceeded` - The system-wide limit on the total number of open files has been reached.
- `error.SystemResources` - Not enough free memory.  This often means that the memory allocation  is  limited by the socket buffer limits, not by the system memory.
- `error.SocketNotListening` - Socket is not listening for new connections.
- `error.ProtocolFailure`
- `error.BlockedByFirewall` - Firewall rules forbid connection.
- `error.WouldBlock` - This error occurs when no global event loop is configured, and accepting from the socket would block.
- `error.ConnectionResetByPeer` - An incoming connection was indicated, but was subsequently terminated by the remote peer prior to accepting the call.
- `error.NetworkSubsystemFailed` - The network subsystem has failed.
- `error.OperationNotSupported` - The referenced socket is not a type that supports connection-oriented service.

</details>

---

### <a id="error-epollcreateerror"></a>`EpollCreateError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const EpollCreateError = error{
    /// The  per-user   limit   on   the   number   of   epoll   instances   imposed   by
    /// /proc/sys/fs/epoll/max_user_instances  was encountered.  See epoll(7) for further
    /// details.
    /// Or, The per-process limit on the number of open file descriptors has been reached.
    ProcessFdQuotaExceeded,

    /// The system-wide limit on the total number of open files has been reached.
    SystemFdQuotaExceeded,

    /// There was insufficient memory to create the kernel object.
    SystemResources,
} || UnexpectedError
```

**Errors:**

- `error.ProcessFdQuotaExceeded` - The  per-user   limit   on   the   number   of   epoll   instances   imposed   by /proc/sys/fs/epoll/max\_user\_instances  was encountered.  See epoll(7) for further details. Or, The per-process limit on the number of open file descriptors has been reached.
- `error.SystemFdQuotaExceeded` - The system-wide limit on the total number of open files has been reached.
- `error.SystemResources` - There was insufficient memory to create the kernel object.

</details>

---

### <a id="error-epollctlerror"></a>`EpollCtlError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const EpollCtlError = error{
    /// op was EPOLL_CTL_ADD, and the supplied file descriptor fd is  already  registered
    /// with this epoll instance.
    FileDescriptorAlreadyPresentInSet,

    /// fd refers to an epoll instance and this EPOLL_CTL_ADD operation would result in a
    /// circular loop of epoll instances monitoring one another.
    OperationCausesCircularLoop,

    /// op was EPOLL_CTL_MOD or EPOLL_CTL_DEL, and fd is not registered with  this  epoll
    /// instance.
    FileDescriptorNotRegistered,

    /// There was insufficient memory to handle the requested op control operation.
    SystemResources,

    /// The  limit  imposed  by /proc/sys/fs/epoll/max_user_watches was encountered while
    /// trying to register (EPOLL_CTL_ADD) a new file descriptor on  an  epoll  instance.
    /// See epoll(7) for further details.
    UserResourceLimitReached,

    /// The target file fd does not support epoll.  This error can occur if fd refers to,
    /// for example, a regular file or a directory.
    FileDescriptorIncompatibleWithEpoll,
} || UnexpectedError
```

**Errors:**

- `error.FileDescriptorAlreadyPresentInSet` - op was EPOLL\_CTL\_ADD, and the supplied file descriptor fd is  already  registered with this epoll instance.
- `error.OperationCausesCircularLoop` - fd refers to an epoll instance and this EPOLL\_CTL\_ADD operation would result in a circular loop of epoll instances monitoring one another.
- `error.FileDescriptorNotRegistered` - op was EPOLL\_CTL\_MOD or EPOLL\_CTL\_DEL, and fd is not registered with  this  epoll instance.
- `error.SystemResources` - There was insufficient memory to handle the requested op control operation.
- `error.UserResourceLimitReached` - The  limit  imposed  by /proc/sys/fs/epoll/max\_user\_watches was encountered while trying to register (EPOLL\_CTL\_ADD) a new file descriptor on  an  epoll  instance. See epoll(7) for further details.
- `error.FileDescriptorIncompatibleWithEpoll` - The target file fd does not support epoll.  This error can occur if fd refers to, for example, a regular file or a directory.

</details>

---

### <a id="error-eventfderror"></a>`EventFdError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const EventFdError = error{
    SystemResources,
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
} || UnexpectedError
```

**Errors:**

- `error.SystemResources`
- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`

</details>

---

### <a id="error-getsocknameerror"></a>`GetSockNameError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const GetSockNameError = error{
    /// Insufficient resources were available in the system to perform the operation.
    SystemResources,

    /// The network subsystem has failed.
    NetworkSubsystemFailed,

    /// Socket hasn't been bound yet
    SocketNotBound,

    FileDescriptorNotASocket,
} || UnexpectedError
```

**Errors:**

- `error.SystemResources` - Insufficient resources were available in the system to perform the operation.
- `error.NetworkSubsystemFailed` - The network subsystem has failed.
- `error.SocketNotBound` - Socket hasn't been bound yet
- `error.FileDescriptorNotASocket`

</details>

---

### <a id="error-connecterror"></a>`ConnectError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ConnectError = error{
    /// For UNIX domain sockets, which are identified by pathname: Write permission is denied on  the  socket
    /// file,  or  search  permission  is  denied  for  one of the directories in the path prefix.
    /// or
    /// The user tried to connect to a broadcast address without having the socket broadcast flag enabled  or
    /// the connection request failed because of a local firewall rule.
    AccessDenied,

    /// See AccessDenied
    PermissionDenied,

    /// Local address is already in use.
    AddressInUse,

    /// (Internet  domain  sockets)  The  socket  referred  to  by sockfd had not previously been bound to an
    /// address and, upon attempting to bind it to an ephemeral port, it was determined that all port numbers
    /// in    the    ephemeral    port    range    are   currently   in   use.    See   the   discussion   of
    /// /proc/sys/net/ipv4/ip_local_port_range in ip(7).
    AddressNotAvailable,

    /// The passed address didn't have the correct address family in its sa_family field.
    AddressFamilyNotSupported,

    /// Insufficient entries in the routing cache.
    SystemResources,

    /// A connect() on a stream socket found no one listening on the remote address.
    ConnectionRefused,

    /// Network is unreachable.
    NetworkUnreachable,

    /// Timeout  while  attempting  connection.   The server may be too busy to accept new connections.  Note
    /// that for IP sockets the timeout may be very long when syncookies are enabled on the server.
    ConnectionTimedOut,

    /// This error occurs when no global event loop is configured,
    /// and connecting to the socket would block.
    WouldBlock,

    /// The given path for the unix socket does not exist.
    FileNotFound,

    /// Connection was reset by peer before connect could complete.
    ConnectionResetByPeer,

    /// Socket is non-blocking and already has a pending connection in progress.
    ConnectionPending,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - For UNIX domain sockets, which are identified by pathname: Write permission is denied on  the  socket file,  or  search  permission  is  denied  for  one of the directories in the path prefix. or The user tried to connect to a broadcast address without having the socket broadcast flag enabled  or the connection request failed because of a local firewall rule.
- `error.PermissionDenied` - See AccessDenied
- `error.AddressInUse` - Local address is already in use.
- `error.AddressNotAvailable` - (Internet  domain  sockets)  The  socket  referred  to  by sockfd had not previously been bound to an address and, upon attempting to bind it to an ephemeral port, it was determined that all port numbers in    the    ephemeral    port    range    are   currently   in   use.    See   the   discussion   of /proc/sys/net/ipv4/ip\_local\_port\_range in ip(7).
- `error.AddressFamilyNotSupported` - The passed address didn't have the correct address family in its sa\_family field.
- `error.SystemResources` - Insufficient entries in the routing cache.
- `error.ConnectionRefused` - A connect() on a stream socket found no one listening on the remote address.
- `error.NetworkUnreachable` - Network is unreachable.
- `error.ConnectionTimedOut` - Timeout  while  attempting  connection.   The server may be too busy to accept new connections.  Note that for IP sockets the timeout may be very long when syncookies are enabled on the server.
- `error.WouldBlock` - This error occurs when no global event loop is configured, and connecting to the socket would block.
- `error.FileNotFound` - The given path for the unix socket does not exist.
- `error.ConnectionResetByPeer` - Connection was reset by peer before connect could complete.
- `error.ConnectionPending` - Socket is non-blocking and already has a pending connection in progress.

</details>

---

### <a id="error-getsockopterror"></a>`GetSockOptError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const GetSockOptError = error{
    /// The calling process does not have the appropriate privileges.
    AccessDenied,

    /// The option is not supported by the protocol.
    InvalidProtocolOption,

    /// Insufficient resources are available in the system to complete the call.
    SystemResources,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - The calling process does not have the appropriate privileges.
- `error.InvalidProtocolOption` - The option is not supported by the protocol.
- `error.SystemResources` - Insufficient resources are available in the system to complete the call.

</details>

---

### <a id="error-fstaterror"></a>`FStatError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FStatError = error{
    SystemResources,

    /// In WASI, this error may occur when the file descriptor does
    /// not hold the required rights to get its filestat information.
    AccessDenied,
    PermissionDenied,
} || UnexpectedError
```

**Errors:**

- `error.SystemResources`
- `error.AccessDenied` - In WASI, this error may occur when the file descriptor does not hold the required rights to get its filestat information.
- `error.PermissionDenied`

</details>

---

### <a id="error-fstataterror"></a>`FStatAtError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FStatAtError = FStatError || error{
    NameTooLong,
    FileNotFound,
    SymLinkLoop,
    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,
}
```

**Errors:**

- `error.NameTooLong`
- `error.FileNotFound`
- `error.SymLinkLoop`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.

</details>

---

### <a id="error-kqueueerror"></a>`KQueueError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const KQueueError = error{
    /// The per-process limit on the number of open file descriptors has been reached.
    ProcessFdQuotaExceeded,

    /// The system-wide limit on the total number of open files has been reached.
    SystemFdQuotaExceeded,
} || UnexpectedError
```

**Errors:**

- `error.ProcessFdQuotaExceeded` - The per-process limit on the number of open file descriptors has been reached.
- `error.SystemFdQuotaExceeded` - The system-wide limit on the total number of open files has been reached.

</details>

---

### <a id="error-keventerror"></a>`KEventError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const KEventError = error{
    /// The process does not have permission to register a filter.
    AccessDenied,

    /// The event could not be found to be modified or deleted.
    EventNotFound,

    /// No memory was available to register the event.
    SystemResources,

    /// The specified process to attach to does not exist.
    ProcessNotFound,

    /// changelist or eventlist had too many items on it.
    /// TODO remove this possibility
    Overflow,
}
```

**Errors:**

- `error.AccessDenied` - The process does not have permission to register a filter.
- `error.EventNotFound` - The event could not be found to be modified or deleted.
- `error.SystemResources` - No memory was available to register the event.
- `error.ProcessNotFound` - The specified process to attach to does not exist.
- `error.Overflow` - changelist or eventlist had too many items on it. TODO remove this possibility

</details>

---

### <a id="error-inotifyiniterror"></a>`INotifyInitError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const INotifyInitError = error{
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
    SystemResources,
} || UnexpectedError
```

**Errors:**

- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`
- `error.SystemResources`

</details>

---

### <a id="error-inotifyaddwatcherror"></a>`INotifyAddWatchError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const INotifyAddWatchError = error{
    AccessDenied,
    NameTooLong,
    FileNotFound,
    SystemResources,
    UserResourceLimitReached,
    NotDir,
    WatchAlreadyExists,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied`
- `error.NameTooLong`
- `error.FileNotFound`
- `error.SystemResources`
- `error.UserResourceLimitReached`
- `error.NotDir`
- `error.WatchAlreadyExists`

</details>

---

### <a id="error-fanotifyiniterror"></a>`FanotifyInitError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FanotifyInitError = error{
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
    SystemResources,
    PermissionDenied,
    /// The kernel does not recognize the flags passed, likely because it is an
    /// older version.
    UnsupportedFlags,
} || UnexpectedError
```

**Errors:**

- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`
- `error.SystemResources`
- `error.PermissionDenied`
- `error.UnsupportedFlags` - The kernel does not recognize the flags passed, likely because it is an older version.

</details>

---

### <a id="error-fanotifymarkerror"></a>`FanotifyMarkError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FanotifyMarkError = error{
    MarkAlreadyExists,
    IsDir,
    NotAssociatedWithFileSystem,
    FileNotFound,
    SystemResources,
    UserMarkQuotaExceeded,
    NotDir,
    OperationNotSupported,
    PermissionDenied,
    NotSameFileSystem,
    NameTooLong,
} || UnexpectedError
```

**Errors:**

- `error.MarkAlreadyExists`
- `error.IsDir`
- `error.NotAssociatedWithFileSystem`
- `error.FileNotFound`
- `error.SystemResources`
- `error.UserMarkQuotaExceeded`
- `error.NotDir`
- `error.OperationNotSupported`
- `error.PermissionDenied`
- `error.NotSameFileSystem`
- `error.NameTooLong`

</details>

---

### <a id="error-mprotecterror"></a>`MProtectError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const MProtectError = error{
    /// The memory cannot be given the specified access.  This can happen, for example, if you
    /// mmap(2)  a  file  to  which  you have read-only access, then ask mprotect() to mark it
    /// PROT_WRITE.
    AccessDenied,

    /// Changing  the  protection  of a memory region would result in the total number of map‐
    /// pings with distinct attributes (e.g., read versus read/write protection) exceeding the
    /// allowed maximum.  (For example, making the protection of a range PROT_READ in the mid‐
    /// dle of a region currently protected as PROT_READ|PROT_WRITE would result in three map‐
    /// pings: two read/write mappings at each end and a read-only mapping in the middle.)
    OutOfMemory,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - The memory cannot be given the specified access.  This can happen, for example, if you mmap(2)  a  file  to  which  you have read-only access, then ask mprotect() to mark it PROT\_WRITE.
- `error.OutOfMemory` - Changing  the  protection  of a memory region would result in the total number of map‐ pings with distinct attributes (e.g., read versus read/write protection) exceeding the allowed maximum.  (For example, making the protection of a range PROT\_READ in the mid‐ dle of a region currently protected as PROT\_READ|PROT\_WRITE would result in three map‐ pings: two read/write mappings at each end and a read-only mapping in the middle.)

</details>

---

### <a id="error-forkerror"></a>`ForkError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ForkError = error{SystemResources} || UnexpectedError
```

**Errors:**

- `error.SystemResources`

</details>

---

### <a id="error-mmaperror"></a>`MMapError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const MMapError = error{
    /// The underlying filesystem of the specified file does not support memory mapping.
    MemoryMappingNotSupported,

    /// A file descriptor refers to a non-regular file. Or a file mapping was requested,
    /// but the file descriptor is not open for reading. Or `MAP.SHARED` was requested
    /// and `PROT_WRITE` is set, but the file descriptor is not open in `RDWR` mode.
    /// Or `PROT_WRITE` is set, but the file is append-only.
    AccessDenied,

    /// The `prot` argument asks for `PROT_EXEC` but the mapped area belongs to a file on
    /// a filesystem that was mounted no-exec.
    PermissionDenied,
    LockedMemoryLimitExceeded,
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
    OutOfMemory,

    /// Using FIXED_NOREPLACE flag and the process has already mapped memory at the given address
    MappingAlreadyExists,
} || UnexpectedError
```

**Errors:**

- `error.MemoryMappingNotSupported` - The underlying filesystem of the specified file does not support memory mapping.
- `error.AccessDenied` - A file descriptor refers to a non-regular file. Or a file mapping was requested, but the file descriptor is not open for reading. Or \`MAP.SHARED\` was requested and \`PROT\_WRITE\` is set, but the file descriptor is not open in \`RDWR\` mode. Or \`PROT\_WRITE\` is set, but the file is append-only.
- `error.PermissionDenied` - The \`prot\` argument asks for \`PROT\_EXEC\` but the mapped area belongs to a file on a filesystem that was mounted no-exec.
- `error.LockedMemoryLimitExceeded`
- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`
- `error.OutOfMemory`
- `error.MappingAlreadyExists` - Using FIXED\_NOREPLACE flag and the process has already mapped memory at the given address

</details>

---

### <a id="error-mremaperror"></a>`MRemapError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const MRemapError = error{
    LockedMemoryLimitExceeded,
    /// Either a bug in the calling code, or the operating system abused the
    /// EINVAL error code.
    InvalidSyscallParameters,
    OutOfMemory,
} || UnexpectedError
```

**Errors:**

- `error.LockedMemoryLimitExceeded`
- `error.InvalidSyscallParameters` - Either a bug in the calling code, or the operating system abused the EINVAL error code.
- `error.OutOfMemory`

</details>

---

### <a id="error-msyncerror"></a>`MSyncError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const MSyncError = error{
    UnmappedMemory,
    PermissionDenied,
} || UnexpectedError
```

**Errors:**

- `error.UnmappedMemory`
- `error.PermissionDenied`

</details>

---

### <a id="error-accesserror"></a>`AccessError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const AccessError = error{
    AccessDenied,
    PermissionDenied,
    FileNotFound,
    NameTooLong,
    InputOutput,
    SystemResources,
    BadPathName,
    FileBusy,
    SymLinkLoop,
    ReadOnlyFileSystem,
    /// WASI-only; file paths must be valid UTF-8.
    InvalidUtf8,
    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied`
- `error.PermissionDenied`
- `error.FileNotFound`
- `error.NameTooLong`
- `error.InputOutput`
- `error.SystemResources`
- `error.BadPathName`
- `error.FileBusy`
- `error.SymLinkLoop`
- `error.ReadOnlyFileSystem`
- `error.InvalidUtf8` - WASI-only; file paths must be valid UTF-8.
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/

</details>

---

### <a id="error-pipeerror"></a>`PipeError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const PipeError = error{
    SystemFdQuotaExceeded,
    ProcessFdQuotaExceeded,
} || UnexpectedError
```

**Errors:**

- `error.SystemFdQuotaExceeded`
- `error.ProcessFdQuotaExceeded`

</details>

---

### <a id="error-sysctlerror"></a>`SysCtlError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SysCtlError = error{
    PermissionDenied,
    SystemResources,
    NameTooLong,
    UnknownName,
} || UnexpectedError
```

**Errors:**

- `error.PermissionDenied`
- `error.SystemResources`
- `error.NameTooLong`
- `error.UnknownName`

</details>

---

### <a id="error-seekerror"></a>`SeekError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SeekError = error{
    Unseekable,

    /// In WASI, this error may occur when the file descriptor does
    /// not hold the required rights to seek on it.
    AccessDenied,
} || UnexpectedError
```

**Errors:**

- `error.Unseekable`
- `error.AccessDenied` - In WASI, this error may occur when the file descriptor does not hold the required rights to seek on it.

</details>

---

### <a id="error-fcntlerror"></a>`FcntlError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FcntlError = error{
    PermissionDenied,
    FileBusy,
    ProcessFdQuotaExceeded,
    Locked,
    DeadLock,
    LockedRegionLimitExceeded,
} || UnexpectedError
```

**Errors:**

- `error.PermissionDenied`
- `error.FileBusy`
- `error.ProcessFdQuotaExceeded`
- `error.Locked`
- `error.DeadLock`
- `error.LockedRegionLimitExceeded`

</details>

---

### <a id="error-flockerror"></a>`FlockError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FlockError = error{
    WouldBlock,

    /// The kernel ran out of memory for allocating file locks
    SystemResources,

    /// The underlying filesystem does not support file locks
    FileLocksNotSupported,
} || UnexpectedError
```

**Errors:**

- `error.WouldBlock`
- `error.SystemResources` - The kernel ran out of memory for allocating file locks
- `error.FileLocksNotSupported` - The underlying filesystem does not support file locks

</details>

---

### <a id="error-realpatherror"></a>`RealPathError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const RealPathError = error{
    FileNotFound,
    AccessDenied,
    PermissionDenied,
    NameTooLong,
    NotSupported,
    NotDir,
    SymLinkLoop,
    InputOutput,
    FileTooBig,
    IsDir,
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
    NoDevice,
    SystemResources,
    NoSpaceLeft,
    FileSystem,
    BadPathName,
    DeviceBusy,
    ProcessNotFound,

    SharingViolation,
    PipeBusy,

    /// Windows-only; file paths provided by the user must be valid WTF-8.
    /// https://simonsapin.github.io/wtf-8/
    InvalidWtf8,

    /// On Windows, `\\server` or `\\server\share` was not found.
    NetworkNotFound,

    PathAlreadyExists,

    /// On Windows, antivirus software is enabled by default. It can be
    /// disabled, but Windows Update sometimes ignores the user's preference
    /// and re-enables it. When enabled, antivirus software on Windows
    /// intercepts file system operations and makes them significantly slower
    /// in addition to possibly failing with this error code.
    AntivirusInterference,

    /// On Windows, the volume does not contain a recognized file system. File
    /// system drivers might not be loaded, or the volume may be corrupt.
    UnrecognizedVolume,
} || UnexpectedError
```

**Errors:**

- `error.FileNotFound`
- `error.AccessDenied`
- `error.PermissionDenied`
- `error.NameTooLong`
- `error.NotSupported`
- `error.NotDir`
- `error.SymLinkLoop`
- `error.InputOutput`
- `error.FileTooBig`
- `error.IsDir`
- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`
- `error.NoDevice`
- `error.SystemResources`
- `error.NoSpaceLeft`
- `error.FileSystem`
- `error.BadPathName`
- `error.DeviceBusy`
- `error.ProcessNotFound`
- `error.SharingViolation`
- `error.PipeBusy`
- `error.InvalidWtf8` - Windows-only; file paths provided by the user must be valid WTF-8. https://simonsapin.github.io/wtf-8/
- `error.NetworkNotFound` - On Windows, \`\\\\server\` or \`\\\\server\\share\` was not found.
- `error.PathAlreadyExists`
- `error.AntivirusInterference` - On Windows, antivirus software is enabled by default. It can be disabled, but Windows Update sometimes ignores the user's preference and re-enables it. When enabled, antivirus software on Windows intercepts file system operations and makes them significantly slower in addition to possibly failing with this error code.
- `error.UnrecognizedVolume` - On Windows, the volume does not contain a recognized file system. File system drivers might not be loaded, or the volume may be corrupt.

</details>

---

### <a id="error-clockgettimeerror"></a>`ClockGetTimeError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const ClockGetTimeError = error{UnsupportedClock} || UnexpectedError
```

**Errors:**

- `error.UnsupportedClock`

</details>

---

### <a id="error-schedgetaffinityerror"></a>`SchedGetAffinityError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SchedGetAffinityError = error{PermissionDenied} || UnexpectedError
```

**Errors:**

- `error.PermissionDenied`

</details>

---

### <a id="error-sigaltstackerror"></a>`SigaltstackError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SigaltstackError = error{
    /// The supplied stack size was less than MINSIGSTKSZ.
    SizeTooSmall,

    /// Attempted to change the signal stack while it was active.
    PermissionDenied,
} || UnexpectedError
```

**Errors:**

- `error.SizeTooSmall` - The supplied stack size was less than MINSIGSTKSZ.
- `error.PermissionDenied` - Attempted to change the signal stack while it was active.

</details>

---

### <a id="error-futimenserror"></a>`FutimensError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const FutimensError = error{
    /// times is NULL, or both nsec values are UTIME_NOW, and either:
    /// *  the effective user ID of the caller does not match the  owner
    ///    of  the  file,  the  caller does not have write access to the
    ///    file, and the caller is not privileged (Linux: does not  have
    ///    either  the  CAP_FOWNER  or the CAP_DAC_OVERRIDE capability);
    ///    or,
    /// *  the file is marked immutable (see chattr(1)).
    AccessDenied,

    /// The caller attempted to change one or both timestamps to a value
    /// other than the current time, or to change one of the  timestamps
    /// to the current time while leaving the other timestamp unchanged,
    /// (i.e., times is not NULL, neither nsec  field  is  UTIME_NOW,
    /// and neither nsec field is UTIME_OMIT) and either:
    /// *  the  caller's  effective  user ID does not match the owner of
    ///    file, and the caller is not privileged (Linux: does not  have
    ///    the CAP_FOWNER capability); or,
    /// *  the file is marked append-only or immutable (see chattr(1)).
    PermissionDenied,

    ReadOnlyFileSystem,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - times is NULL, or both nsec values are UTIME\_NOW, and either: \*  the effective user ID of the caller does not match the  owner of  the  file,  the  caller does not have write access to the file, and the caller is not privileged (Linux: does not  have either  the  CAP\_FOWNER  or the CAP\_DAC\_OVERRIDE capability); or, \*  the file is marked immutable (see chattr(1)).
- `error.PermissionDenied` - The caller attempted to change one or both timestamps to a value other than the current time, or to change one of the  timestamps to the current time while leaving the other timestamp unchanged, (i.e., times is not NULL, neither nsec  field  is  UTIME\_NOW, and neither nsec field is UTIME\_OMIT) and either: \*  the  caller's  effective  user ID does not match the owner of file, and the caller is not privileged (Linux: does not  have the CAP\_FOWNER capability); or, \*  the file is marked append-only or immutable (see chattr(1)).
- `error.ReadOnlyFileSystem`

</details>

---

### <a id="error-gethostnameerror"></a>`GetHostNameError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const GetHostNameError = error{PermissionDenied} || UnexpectedError
```

**Errors:**

- `error.PermissionDenied`

</details>

---

### <a id="error-senderror"></a>`SendError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SendError = error{
    /// (For UNIX domain sockets, which are identified by pathname) Write permission is  denied
    /// on  the destination socket file, or search permission is denied for one of the
    /// directories the path prefix.  (See path_resolution(7).)
    /// (For UDP sockets) An attempt was made to send to a network/broadcast address as  though
    /// it was a unicast address.
    AccessDenied,

    /// The socket is marked nonblocking and the requested operation would block, and
    /// there is no global event loop configured.
    /// It's also possible to get this error under the following condition:
    /// (Internet  domain datagram sockets) The socket referred to by sockfd had not previously
    /// been bound to an address and, upon attempting to bind it to an ephemeral port,  it  was
    /// determined that all port numbers in the ephemeral port range are currently in use.  See
    /// the discussion of /proc/sys/net/ipv4/ip_local_port_range in ip(7).
    WouldBlock,

    /// Another Fast Open is already in progress.
    FastOpenAlreadyInProgress,

    /// Connection reset by peer.
    ConnectionResetByPeer,

    /// The  socket  type requires that message be sent atomically, and the size of the message
    /// to be sent made this impossible. The message is not transmitted.
    MessageTooBig,

    /// The output queue for a network interface was full.  This generally indicates  that  the
    /// interface  has  stopped sending, but may be caused by transient congestion.  (Normally,
    /// this does not occur in Linux.  Packets are just silently dropped when  a  device  queue
    /// overflows.)
    /// This is also caused when there is not enough kernel memory available.
    SystemResources,

    /// The  local  end  has been shut down on a connection oriented socket.  In this case, the
    /// process will also receive a SIGPIPE unless MSG.NOSIGNAL is set.
    BrokenPipe,

    FileDescriptorNotASocket,

    /// Network is unreachable.
    NetworkUnreachable,

    /// The local network interface used to reach the destination is down.
    NetworkSubsystemFailed,

    /// The destination address is not listening.
    ConnectionRefused,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - (For UNIX domain sockets, which are identified by pathname) Write permission is  denied on  the destination socket file, or search permission is denied for one of the directories the path prefix.  (See path\_resolution(7).) (For UDP sockets) An attempt was made to send to a network/broadcast address as  though it was a unicast address.
- `error.WouldBlock` - The socket is marked nonblocking and the requested operation would block, and there is no global event loop configured. It's also possible to get this error under the following condition: (Internet  domain datagram sockets) The socket referred to by sockfd had not previously been bound to an address and, upon attempting to bind it to an ephemeral port,  it  was determined that all port numbers in the ephemeral port range are currently in use.  See the discussion of /proc/sys/net/ipv4/ip\_local\_port\_range in ip(7).
- `error.FastOpenAlreadyInProgress` - Another Fast Open is already in progress.
- `error.ConnectionResetByPeer` - Connection reset by peer.
- `error.MessageTooBig` - The  socket  type requires that message be sent atomically, and the size of the message to be sent made this impossible. The message is not transmitted.
- `error.SystemResources` - The output queue for a network interface was full.  This generally indicates  that  the interface  has  stopped sending, but may be caused by transient congestion.  (Normally, this does not occur in Linux.  Packets are just silently dropped when  a  device  queue overflows.) This is also caused when there is not enough kernel memory available.
- `error.BrokenPipe` - The  local  end  has been shut down on a connection oriented socket.  In this case, the process will also receive a SIGPIPE unless MSG.NOSIGNAL is set.
- `error.FileDescriptorNotASocket`
- `error.NetworkUnreachable` - Network is unreachable.
- `error.NetworkSubsystemFailed` - The local network interface used to reach the destination is down.
- `error.ConnectionRefused` - The destination address is not listening.

</details>

---

### <a id="error-sendmsgerror"></a>`SendMsgError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SendMsgError = SendError || error{
    /// The passed address didn't have the correct address family in its sa_family field.
    AddressFamilyNotSupported,

    /// Returned when socket is AF.UNIX and the given path has a symlink loop.
    SymLinkLoop,

    /// Returned when socket is AF.UNIX and the given path length exceeds `max_path_bytes` bytes.
    NameTooLong,

    /// Returned when socket is AF.UNIX and the given path does not point to an existing file.
    FileNotFound,
    NotDir,

    /// The socket is not connected (connection-oriented sockets only).
    SocketNotConnected,
    AddressNotAvailable,
}
```

**Errors:**

- `error.AddressFamilyNotSupported` - The passed address didn't have the correct address family in its sa\_family field.
- `error.SymLinkLoop` - Returned when socket is AF.UNIX and the given path has a symlink loop.
- `error.NameTooLong` - Returned when socket is AF.UNIX and the given path length exceeds \`max\_path\_bytes\` bytes.
- `error.FileNotFound` - Returned when socket is AF.UNIX and the given path does not point to an existing file.
- `error.NotDir`
- `error.SocketNotConnected` - The socket is not connected (connection-oriented sockets only).
- `error.AddressNotAvailable`

</details>

---

### <a id="error-sendtoerror"></a>`SendToError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SendToError = SendMsgError || error{
    /// The destination address is not reachable by the bound address.
    UnreachableAddress,
    /// The destination address is not listening.
    ConnectionRefused,
}
```

**Errors:**

- `error.UnreachableAddress` - The destination address is not reachable by the bound address.
- `error.ConnectionRefused` - The destination address is not listening.

</details>

---

### <a id="error-copyfilerangeerror"></a>`CopyFileRangeError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const CopyFileRangeError = error{
    FileTooBig,
    InputOutput,
    /// `fd_in` is not open for reading; or `fd_out` is not open  for  writing;
    /// or the  `APPEND`  flag  is  set  for `fd_out`.
    FilesOpenedWithWrongFlags,
    IsDir,
    OutOfMemory,
    NoSpaceLeft,
    Unseekable,
    PermissionDenied,
    SwapFile,
    CorruptedData,
} || PReadError || PWriteError || UnexpectedError
```

**Errors:**

- `error.FileTooBig`
- `error.InputOutput`
- `error.FilesOpenedWithWrongFlags` - \`fd\_in\` is not open for reading; or \`fd\_out\` is not open  for  writing; or the  \`APPEND\`  flag  is  set  for \`fd\_out\`.
- `error.IsDir`
- `error.OutOfMemory`
- `error.NoSpaceLeft`
- `error.Unseekable`
- `error.PermissionDenied`
- `error.SwapFile`
- `error.CorruptedData`

</details>

---

### <a id="error-pollerror"></a>`PollError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const PollError = error{
    /// The network subsystem has failed.
    NetworkSubsystemFailed,

    /// The kernel had no space to allocate file descriptor tables.
    SystemResources,
} || UnexpectedError
```

**Errors:**

- `error.NetworkSubsystemFailed` - The network subsystem has failed.
- `error.SystemResources` - The kernel had no space to allocate file descriptor tables.

</details>

---

### <a id="error-ppollerror"></a>`PPollError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const PPollError = error{
    /// The operation was interrupted by a delivery of a signal before it could complete.
    SignalInterrupt,

    /// The kernel had no space to allocate file descriptor tables.
    SystemResources,
} || UnexpectedError
```

**Errors:**

- `error.SignalInterrupt` - The operation was interrupted by a delivery of a signal before it could complete.
- `error.SystemResources` - The kernel had no space to allocate file descriptor tables.

</details>

---

### <a id="error-recvfromerror"></a>`RecvFromError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const RecvFromError = error{
    /// The socket is marked nonblocking and the requested operation would block, and
    /// there is no global event loop configured.
    WouldBlock,

    /// A remote host refused to allow the network connection, typically because it is not
    /// running the requested service.
    ConnectionRefused,

    /// Could not allocate kernel memory.
    SystemResources,

    ConnectionResetByPeer,
    ConnectionTimedOut,

    /// The socket has not been bound.
    SocketNotBound,

    /// The UDP message was too big for the buffer and part of it has been discarded
    MessageTooBig,

    /// The network subsystem has failed.
    NetworkSubsystemFailed,

    /// The socket is not connected (connection-oriented sockets only).
    SocketNotConnected,
} || UnexpectedError
```

**Errors:**

- `error.WouldBlock` - The socket is marked nonblocking and the requested operation would block, and there is no global event loop configured.
- `error.ConnectionRefused` - A remote host refused to allow the network connection, typically because it is not running the requested service.
- `error.SystemResources` - Could not allocate kernel memory.
- `error.ConnectionResetByPeer`
- `error.ConnectionTimedOut`
- `error.SocketNotBound` - The socket has not been bound.
- `error.MessageTooBig` - The UDP message was too big for the buffer and part of it has been discarded
- `error.NetworkSubsystemFailed` - The network subsystem has failed.
- `error.SocketNotConnected` - The socket is not connected (connection-oriented sockets only).

</details>

---

### <a id="error-dnexpanderror"></a>`DnExpandError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const DnExpandError = error{InvalidDnsPacket}
```

**Errors:**

- `error.InvalidDnsPacket`

</details>

---

### <a id="error-setsockopterror"></a>`SetSockOptError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SetSockOptError = error{
    /// The socket is already connected, and a specified option cannot be set while the socket is connected.
    AlreadyConnected,

    /// The option is not supported by the protocol.
    InvalidProtocolOption,

    /// The send and receive timeout values are too big to fit into the timeout fields in the socket structure.
    TimeoutTooBig,

    /// Insufficient resources are available in the system to complete the call.
    SystemResources,

    /// Setting the socket option requires more elevated permissions.
    PermissionDenied,

    OperationNotSupported,
    NetworkSubsystemFailed,
    FileDescriptorNotASocket,
    SocketNotBound,
    NoDevice,
} || UnexpectedError
```

**Errors:**

- `error.AlreadyConnected` - The socket is already connected, and a specified option cannot be set while the socket is connected.
- `error.InvalidProtocolOption` - The option is not supported by the protocol.
- `error.TimeoutTooBig` - The send and receive timeout values are too big to fit into the timeout fields in the socket structure.
- `error.SystemResources` - Insufficient resources are available in the system to complete the call.
- `error.PermissionDenied` - Setting the socket option requires more elevated permissions.
- `error.OperationNotSupported`
- `error.NetworkSubsystemFailed`
- `error.FileDescriptorNotASocket`
- `error.SocketNotBound`
- `error.NoDevice`

</details>

---

### <a id="error-memfdcreateerror"></a>`MemFdCreateError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const MemFdCreateError = error{
    SystemFdQuotaExceeded,
    ProcessFdQuotaExceeded,
    OutOfMemory,
    /// Either the name provided exceeded `NAME_MAX`, or invalid flags were passed.
    NameTooLong,
    SystemOutdated,
} || UnexpectedError
```

**Errors:**

- `error.SystemFdQuotaExceeded`
- `error.ProcessFdQuotaExceeded`
- `error.OutOfMemory`
- `error.NameTooLong` - Either the name provided exceeded \`NAME\_MAX\`, or invalid flags were passed.
- `error.SystemOutdated`

</details>

---

### <a id="error-tiocerror"></a>`TIOCError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TIOCError = error{NotATerminal}
```

**Errors:**

- `error.NotATerminal`

</details>

---

### <a id="error-termiosgeterror"></a>`TermiosGetError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TermiosGetError = TIOCError || UnexpectedError
```

</details>

---

### <a id="error-termiosseterror"></a>`TermiosSetError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TermiosSetError = TermiosGetError || error{ProcessOrphaned}
```

**Errors:**

- `error.ProcessOrphaned`

</details>

---

### <a id="error-termiogetpgrperror"></a>`TermioGetPgrpError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TermioGetPgrpError = TIOCError || UnexpectedError
```

</details>

---

### <a id="error-termiosetpgrperror"></a>`TermioSetPgrpError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TermioSetPgrpError = TermioGetPgrpError || error{NotAPgrpMember}
```

**Errors:**

- `error.NotAPgrpMember`

</details>

---

### <a id="error-setsiderror"></a>`SetSidError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SetSidError = error{
    /// The calling process is already a process group leader, or the process group ID of a process other than the calling process matches the process ID of the calling process.
    PermissionDenied,
} || UnexpectedError
```

**Errors:**

- `error.PermissionDenied` - The calling process is already a process group leader, or the process group ID of a process other than the calling process matches the process ID of the calling process.

</details>

---

### <a id="error-syncerror"></a>`SyncError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SyncError = error{
    InputOutput,
    NoSpaceLeft,
    DiskQuota,
    AccessDenied,
} || UnexpectedError
```

**Errors:**

- `error.InputOutput`
- `error.NoSpaceLeft`
- `error.DiskQuota`
- `error.AccessDenied`

</details>

---

### <a id="error-prctlerror"></a>`PrctlError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const PrctlError = error{
    /// Can only occur with PR_SET_SECCOMP/SECCOMP_MODE_FILTER or
    /// PR_SET_MM/PR_SET_MM_EXE_FILE
    AccessDenied,
    /// Can only occur with PR_SET_MM/PR_SET_MM_EXE_FILE
    InvalidFileDescriptor,
    InvalidAddress,
    /// Can only occur with PR_SET_SPECULATION_CTRL, PR_MPX_ENABLE_MANAGEMENT,
    /// or PR_MPX_DISABLE_MANAGEMENT
    UnsupportedFeature,
    /// Can only occur with PR_SET_FP_MODE
    OperationNotSupported,
    PermissionDenied,
} || UnexpectedError
```

**Errors:**

- `error.AccessDenied` - Can only occur with PR\_SET\_SECCOMP/SECCOMP\_MODE\_FILTER or PR\_SET\_MM/PR\_SET\_MM\_EXE\_FILE
- `error.InvalidFileDescriptor` - Can only occur with PR\_SET\_MM/PR\_SET\_MM\_EXE\_FILE
- `error.InvalidAddress`
- `error.UnsupportedFeature` - Can only occur with PR\_SET\_SPECULATION\_CTRL, PR\_MPX\_ENABLE\_MANAGEMENT, or PR\_MPX\_DISABLE\_MANAGEMENT
- `error.OperationNotSupported` - Can only occur with PR\_SET\_FP\_MODE
- `error.PermissionDenied`

</details>

---

### <a id="error-setrlimiterror"></a>`SetrlimitError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const SetrlimitError = error{ PermissionDenied, LimitTooBig } || UnexpectedError
```

**Errors:**

- `error.PermissionDenied`
- `error.LimitTooBig`

</details>

---

### <a id="error-mincoreerror"></a>`MincoreError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const MincoreError = error{
    /// A kernel resource was temporarily unavailable.
    SystemResources,
    /// vec points to an invalid address.
    InvalidAddress,
    /// addr is not page-aligned.
    InvalidSyscall,
    /// One of the following:
    /// * length is greater than user space TASK_SIZE - addr
    /// * addr + length contains unmapped memory
    OutOfMemory,
    /// The mincore syscall is not available on this version and configuration
    /// of this UNIX-like kernel.
    MincoreUnavailable,
} || UnexpectedError
```

**Errors:**

- `error.SystemResources` - A kernel resource was temporarily unavailable.
- `error.InvalidAddress` - vec points to an invalid address.
- `error.InvalidSyscall` - addr is not page-aligned.
- `error.OutOfMemory` - One of the following: \* length is greater than user space TASK\_SIZE - addr \* addr + length contains unmapped memory
- `error.MincoreUnavailable` - The mincore syscall is not available on this version and configuration of this UNIX-like kernel.

</details>

---

### <a id="error-madviseerror"></a>`MadviseError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const MadviseError = error{
    /// advice is MADV.REMOVE, but the specified address range is not a shared writable mapping.
    AccessDenied,
    /// advice is MADV.HWPOISON, but the caller does not have the CAP_SYS_ADMIN capability.
    PermissionDenied,
    /// A kernel resource was temporarily unavailable.
    SystemResources,
    /// One of the following:
    /// * addr is not page-aligned or length is negative
    /// * advice is not valid
    /// * advice is MADV.DONTNEED or MADV.REMOVE and the specified address range
    ///   includes locked, Huge TLB pages, or VM_PFNMAP pages.
    /// * advice is MADV.MERGEABLE or MADV.UNMERGEABLE, but the kernel was not
    ///   configured with CONFIG_KSM.
    /// * advice is MADV.FREE or MADV.WIPEONFORK but the specified address range
    ///   includes file, Huge TLB, MAP.SHARED, or VM_PFNMAP ranges.
    InvalidSyscall,
    /// (for MADV.WILLNEED) Paging in this area would exceed the process's
    /// maximum resident set size.
    WouldExceedMaximumResidentSetSize,
    /// One of the following:
    /// * (for MADV.WILLNEED) Not enough memory: paging in failed.
    /// * Addresses in the specified range are not currently mapped, or
    ///   are outside the address space of the process.
    OutOfMemory,
    /// The madvise syscall is not available on this version and configuration
    /// of the Linux kernel.
    MadviseUnavailable,
    /// The operating system returned an undocumented error code.
    Unexpected,
}
```

**Errors:**

- `error.AccessDenied` - advice is MADV.REMOVE, but the specified address range is not a shared writable mapping.
- `error.PermissionDenied` - advice is MADV.HWPOISON, but the caller does not have the CAP\_SYS\_ADMIN capability.
- `error.SystemResources` - A kernel resource was temporarily unavailable.
- `error.InvalidSyscall` - One of the following: \* addr is not page-aligned or length is negative \* advice is not valid \* advice is MADV.DONTNEED or MADV.REMOVE and the specified address range includes locked, Huge TLB pages, or VM\_PFNMAP pages. \* advice is MADV.MERGEABLE or MADV.UNMERGEABLE, but the kernel was not configured with CONFIG\_KSM. \* advice is MADV.FREE or MADV.WIPEONFORK but the specified address range includes file, Huge TLB, MAP.SHARED, or VM\_PFNMAP ranges.
- `error.WouldExceedMaximumResidentSetSize` - (for MADV.WILLNEED) Paging in this area would exceed the process's maximum resident set size.
- `error.OutOfMemory` - One of the following: \* (for MADV.WILLNEED) Not enough memory: paging in failed. \* Addresses in the specified range are not currently mapped, or are outside the address space of the process.
- `error.MadviseUnavailable` - The madvise syscall is not available on this version and configuration of the Linux kernel.
- `error.Unexpected` - The operating system returned an undocumented error code.

</details>

---

### <a id="error-perfeventopenerror"></a>`PerfEventOpenError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const PerfEventOpenError = error{
    /// Returned if the perf_event_attr size value is too small (smaller
    /// than PERF_ATTR_SIZE_VER0), too big (larger than the page  size),
    /// or  larger  than the kernel supports and the extra bytes are not
    /// zero.  When E2BIG is returned, the perf_event_attr size field is
    /// overwritten by the kernel to be the size of the structure it was
    /// expecting.
    TooBig,
    /// Returned when the requested event requires CAP_SYS_ADMIN permis‐
    /// sions  (or a more permissive perf_event paranoid setting).  Some
    /// common cases where an unprivileged process  may  encounter  this
    /// error:  attaching  to a process owned by a different user; moni‐
    /// toring all processes on a given CPU (i.e.,  specifying  the  pid
    /// argument  as  -1); and not setting exclude_kernel when the para‐
    /// noid setting requires it.
    /// Also:
    /// Returned on many (but not all) architectures when an unsupported
    /// exclude_hv,  exclude_idle,  exclude_user, or exclude_kernel set‐
    /// ting is specified.
    /// It can also happen, as with EACCES, when the requested event re‐
    /// quires   CAP_SYS_ADMIN   permissions   (or   a  more  permissive
    /// perf_event paranoid setting).  This includes  setting  a  break‐
    /// point on a kernel address, and (since Linux 3.13) setting a ker‐
    /// nel function-trace tracepoint.
    PermissionDenied,
    /// Returned if another event already has exclusive  access  to  the
    /// PMU.
    DeviceBusy,
    /// Each  opened  event uses one file descriptor.  If a large number
    /// of events are opened, the per-process limit  on  the  number  of
    /// open file descriptors will be reached, and no more events can be
    /// created.
    ProcessResources,
    EventRequiresUnsupportedCpuFeature,
    /// Returned if  you  try  to  add  more  breakpoint
    /// events than supported by the hardware.
    TooManyBreakpoints,
    /// Returned  if PERF_SAMPLE_STACK_USER is set in sample_type and it
    /// is not supported by hardware.
    SampleStackNotSupported,
    /// Returned if an event requiring a specific  hardware  feature  is
    /// requested  but  there is no hardware support.  This includes re‐
    /// questing low-skid events if not supported, branch tracing if  it
    /// is not available, sampling if no PMU interrupt is available, and
    /// branch stacks for software events.
    EventNotSupported,
    /// Returned  if  PERF_SAMPLE_CALLCHAIN  is   requested   and   sam‐
    /// ple_max_stack   is   larger   than   the  maximum  specified  in
    /// /proc/sys/kernel/perf_event_max_stack.
    SampleMaxStackOverflow,
    /// Returned if attempting to attach to a process that does not  exist.
    ProcessNotFound,
} || UnexpectedError
```

**Errors:**

- `error.TooBig` - Returned if the perf\_event\_attr size value is too small (smaller than PERF\_ATTR\_SIZE\_VER0), too big (larger than the page  size), or  larger  than the kernel supports and the extra bytes are not zero.  When E2BIG is returned, the perf\_event\_attr size field is overwritten by the kernel to be the size of the structure it was expecting.
- `error.PermissionDenied` - Returned when the requested event requires CAP\_SYS\_ADMIN permis‐ sions  (or a more permissive perf\_event paranoid setting).  Some common cases where an unprivileged process  may  encounter  this error:  attaching  to a process owned by a different user; moni‐ toring all processes on a given CPU (i.e.,  specifying  the  pid argument  as  -1); and not setting exclude\_kernel when the para‐ noid setting requires it. Also: Returned on many (but not all) architectures when an unsupported exclude\_hv,  exclude\_idle,  exclude\_user, or exclude\_kernel set‐ ting is specified. It can also happen, as with EACCES, when the requested event re‐ quires   CAP\_SYS\_ADMIN   permissions   (or   a  more  permissive perf\_event paranoid setting).  This includes  setting  a  break‐ point on a kernel address, and (since Linux 3.13) setting a ker‐ nel function-trace tracepoint.
- `error.DeviceBusy` - Returned if another event already has exclusive  access  to  the PMU.
- `error.ProcessResources` - Each  opened  event uses one file descriptor.  If a large number of events are opened, the per-process limit  on  the  number  of open file descriptors will be reached, and no more events can be created.
- `error.EventRequiresUnsupportedCpuFeature`
- `error.TooManyBreakpoints` - Returned if  you  try  to  add  more  breakpoint events than supported by the hardware.
- `error.SampleStackNotSupported` - Returned  if PERF\_SAMPLE\_STACK\_USER is set in sample\_type and it is not supported by hardware.
- `error.EventNotSupported` - Returned if an event requiring a specific  hardware  feature  is requested  but  there is no hardware support.  This includes re‐ questing low-skid events if not supported, branch tracing if  it is not available, sampling if no PMU interrupt is available, and branch stacks for software events.
- `error.SampleMaxStackOverflow` - Returned  if  PERF\_SAMPLE\_CALLCHAIN  is   requested   and   sam‐ ple\_max\_stack   is   larger   than   the  maximum  specified  in /proc/sys/kernel/perf\_event\_max\_stack.
- `error.ProcessNotFound` - Returned if attempting to attach to a process that does not  exist.

</details>

---

### <a id="error-timerfdcreateerror"></a>`TimerFdCreateError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TimerFdCreateError = error{
    PermissionDenied,
    ProcessFdQuotaExceeded,
    SystemFdQuotaExceeded,
    NoDevice,
    SystemResources,
} || UnexpectedError
```

**Errors:**

- `error.PermissionDenied`
- `error.ProcessFdQuotaExceeded`
- `error.SystemFdQuotaExceeded`
- `error.NoDevice`
- `error.SystemResources`

</details>

---

### <a id="error-timerfdgeterror"></a>`TimerFdGetError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TimerFdGetError = error{InvalidHandle} || UnexpectedError
```

**Errors:**

- `error.InvalidHandle`

</details>

---

### <a id="error-timerfdseterror"></a>`TimerFdSetError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const TimerFdSetError = TimerFdGetError || error{Canceled}
```

**Errors:**

- `error.Canceled`

</details>

---

### <a id="error-ptraceerror"></a>`PtraceError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const PtraceError = error{
    DeviceBusy,
    InputOutput,
    ProcessNotFound,
    PermissionDenied,
} || UnexpectedError
```

**Errors:**

- `error.DeviceBusy`
- `error.InputOutput`
- `error.ProcessNotFound`
- `error.PermissionDenied`

</details>

---

### <a id="error-nametofilehandleaterror"></a>`NameToFileHandleAtError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const NameToFileHandleAtError = error{
    FileNotFound,
    NotDir,
    OperationNotSupported,
    NameTooLong,
    Unexpected,
}
```

**Errors:**

- `error.FileNotFound`
- `error.NotDir`
- `error.OperationNotSupported`
- `error.NameTooLong`
- `error.Unexpected`

</details>

---

### <a id="error-ioctl-siocgifindex-error"></a>`IoCtl_SIOCGIFINDEX_Error`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const IoCtl_SIOCGIFINDEX_Error = error{
    FileSystem,
    InterfaceNotFound,
} || UnexpectedError
```

**Errors:**

- `error.FileSystem`
- `error.InterfaceNotFound`

</details>

---

### <a id="error-unexpectederror"></a>`UnexpectedError`

<details class="declaration-card" open>
<summary>Error Set – Expand to view the error members and guidance.</summary>

```zig
pub const UnexpectedError = error{
    /// The Operating System returned an undocumented error code.
    ///
    /// This error is in theory not possible, but it would be better
    /// to handle this error than to invoke undefined behavior.
    ///
    /// When this error code is observed, it usually means the Zig Standard
    /// Library needs a small patch to add the error code to the error set for
    /// the respective function.
    Unexpected,
}
```

**Errors:**

- `error.Unexpected` - The Operating System returned an undocumented error code. This error is in theory not possible, but it would be better to handle this error than to invoke undefined behavior. When this error code is observed, it usually means the Zig Standard Library needs a small patch to add the error code to the error set for the respective function.

</details>

---


