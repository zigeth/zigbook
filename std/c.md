# std.c

[← Back to index](index.md)

*Zig Standard Library Documentation*

| Key | Value |
| --- | --- |
| Module | `std.c` |
| Declarations | 781 |
| Breakdown | 247 functions · 4 types · 528 constants · 2 global variables |
| Generated (unix epoch) | 1760148102 |

---

## Table of Contents

- [Functions](#functions)
  - [`versionCheck`](#fn-versioncheck)
  - [`opendir`](#fn-opendir)
  - [`fdopendir`](#fn-fdopendir)
  - [`rewinddir`](#fn-rewinddir)
  - [`closedir`](#fn-closedir)
  - [`telldir`](#fn-telldir)
  - [`seekdir`](#fn-seekdir)
  - [`sigwait`](#fn-sigwait)
  - [`alarm`](#fn-alarm)
  - [`getpwent`](#fn-getpwent)
  - [`endpwent`](#fn-endpwent)
  - [`setpwent`](#fn-setpwent)
  - [`getpwnam`](#fn-getpwnam)
  - [`getpwnam\_r`](#fn-getpwnam-r)
  - [`getpwuid`](#fn-getpwuid)
  - [`getpwuid\_r`](#fn-getpwuid-r)
  - [`getgrent`](#fn-getgrent)
  - [`setgrent`](#fn-setgrent)
  - [`endgrent`](#fn-endgrent)
  - [`getgrnam`](#fn-getgrnam)
  - [`getgrnam\_r`](#fn-getgrnam-r)
  - [`getgrgid`](#fn-getgrgid)
  - [`getgrgid\_r`](#fn-getgrgid-r)
  - [`getrlimit64`](#fn-getrlimit64)
  - [`lseek64`](#fn-lseek64)
  - [`mmap64`](#fn-mmap64)
  - [`open64`](#fn-open64)
  - [`openat64`](#fn-openat64)
  - [`pread64`](#fn-pread64)
  - [`preadv64`](#fn-preadv64)
  - [`pwrite64`](#fn-pwrite64)
  - [`pwritev64`](#fn-pwritev64)
  - [`sendfile64`](#fn-sendfile64)
  - [`setrlimit64`](#fn-setrlimit64)
  - [`sched\_getaffinity`](#fn-sched-getaffinity)
  - [`eventfd`](#fn-eventfd)
  - [`epoll\_ctl`](#fn-epoll-ctl)
  - [`epoll\_create1`](#fn-epoll-create1)
  - [`epoll\_wait`](#fn-epoll-wait)
  - [`epoll\_pwait`](#fn-epoll-pwait)
  - [`timerfd\_create`](#fn-timerfd-create)
  - [`timerfd\_settime`](#fn-timerfd-settime)
  - [`timerfd\_gettime`](#fn-timerfd-gettime)
  - [`inotify\_init1`](#fn-inotify-init1)
  - [`inotify\_add\_watch`](#fn-inotify-add-watch)
  - [`inotify\_rm\_watch`](#fn-inotify-rm-watch)
  - [`fstat64`](#fn-fstat64)
  - [`fstatat64`](#fn-fstatat64)
  - [`fallocate64`](#fn-fallocate64)
  - [`fopen64`](#fn-fopen64)
  - [`ftruncate64`](#fn-ftruncate64)
  - [`fallocate`](#fn-fallocate)
  - [`getauxval`](#fn-getauxval)
  - [`dl\_iterate\_phdr`](#fn-dl-iterate-phdr)
  - [`memfd\_create`](#fn-memfd-create)
  - [`signalfd`](#fn-signalfd)
  - [`prlimit`](#fn-prlimit)
  - [`mincore`](#fn-mincore)
  - [`madvise`](#fn-madvise)
  - [`sigrtmin`](#fn-sigrtmin)
  - [`sigrtmax`](#fn-sigrtmax)
  - [`fopen`](#fn-fopen)
  - [`fclose`](#fn-fclose)
  - [`fwrite`](#fn-fwrite)
  - [`fread`](#fn-fread)
  - [`printf`](#fn-printf)
  - [`abort`](#fn-abort)
  - [`exit`](#fn-exit)
  - [`\_exit`](#fn--exit)
  - [`isatty`](#fn-isatty)
  - [`lseek`](#fn-lseek)
  - [`open`](#fn-open)
  - [`openat`](#fn-openat)
  - [`ftruncate`](#fn-ftruncate)
  - [`raise`](#fn-raise)
  - [`read`](#fn-read)
  - [`readv`](#fn-readv)
  - [`pread`](#fn-pread)
  - [`preadv`](#fn-preadv)
  - [`writev`](#fn-writev)
  - [`pwritev`](#fn-pwritev)
  - [`write`](#fn-write)
  - [`pwrite`](#fn-pwrite)
  - [`mmap`](#fn-mmap)
  - [`munmap`](#fn-munmap)
  - [`mremap`](#fn-mremap)
  - [`mprotect`](#fn-mprotect)
  - [`link`](#fn-link)
  - [`linkat`](#fn-linkat)
  - [`unlink`](#fn-unlink)
  - [`unlinkat`](#fn-unlinkat)
  - [`getcwd`](#fn-getcwd)
  - [`waitpid`](#fn-waitpid)
  - [`wait4`](#fn-wait4)
  - [`access`](#fn-access)
  - [`faccessat`](#fn-faccessat)
  - [`pipe`](#fn-pipe)
  - [`mkdir`](#fn-mkdir)
  - [`mkdirat`](#fn-mkdirat)
  - [`symlink`](#fn-symlink)
  - [`symlinkat`](#fn-symlinkat)
  - [`rename`](#fn-rename)
  - [`renameat`](#fn-renameat)
  - [`chdir`](#fn-chdir)
  - [`fchdir`](#fn-fchdir)
  - [`execve`](#fn-execve)
  - [`dup`](#fn-dup)
  - [`dup2`](#fn-dup2)
  - [`dup3`](#fn-dup3)
  - [`readlink`](#fn-readlink)
  - [`readlinkat`](#fn-readlinkat)
  - [`chmod`](#fn-chmod)
  - [`fchmod`](#fn-fchmod)
  - [`fchmodat`](#fn-fchmodat)
  - [`fchown`](#fn-fchown)
  - [`umask`](#fn-umask)
  - [`rmdir`](#fn-rmdir)
  - [`getenv`](#fn-getenv)
  - [`sysctl`](#fn-sysctl)
  - [`sysctlbyname`](#fn-sysctlbyname)
  - [`sysctlnametomib`](#fn-sysctlnametomib)
  - [`tcgetattr`](#fn-tcgetattr)
  - [`tcsetattr`](#fn-tcsetattr)
  - [`fcntl`](#fn-fcntl)
  - [`ioctl`](#fn-ioctl)
  - [`uname`](#fn-uname)
  - [`gethostname`](#fn-gethostname)
  - [`shutdown`](#fn-shutdown)
  - [`bind`](#fn-bind)
  - [`socketpair`](#fn-socketpair)
  - [`listen`](#fn-listen)
  - [`getsockname`](#fn-getsockname)
  - [`getpeername`](#fn-getpeername)
  - [`connect`](#fn-connect)
  - [`accept`](#fn-accept)
  - [`accept4`](#fn-accept4)
  - [`getsockopt`](#fn-getsockopt)
  - [`setsockopt`](#fn-setsockopt)
  - [`send`](#fn-send)
  - [`sendto`](#fn-sendto)
  - [`sendmsg`](#fn-sendmsg)
  - [`recv`](#fn-recv)
  - [`recvfrom`](#fn-recvfrom)
  - [`recvmsg`](#fn-recvmsg)
  - [`kill`](#fn-kill)
  - [`setuid`](#fn-setuid)
  - [`setgid`](#fn-setgid)
  - [`seteuid`](#fn-seteuid)
  - [`setegid`](#fn-setegid)
  - [`setreuid`](#fn-setreuid)
  - [`setregid`](#fn-setregid)
  - [`setresuid`](#fn-setresuid)
  - [`setresgid`](#fn-setresgid)
  - [`setpgid`](#fn-setpgid)
  - [`getuid`](#fn-getuid)
  - [`geteuid`](#fn-geteuid)
  - [`malloc`](#fn-malloc)
  - [`calloc`](#fn-calloc)
  - [`realloc`](#fn-realloc)
  - [`free`](#fn-free)
  - [`futimes`](#fn-futimes)
  - [`utimes`](#fn-utimes)
  - [`utimensat`](#fn-utimensat)
  - [`futimens`](#fn-futimens)
  - [`pthread\_create`](#fn-pthread-create)
  - [`pthread\_attr\_init`](#fn-pthread-attr-init)
  - [`pthread\_attr\_setstack`](#fn-pthread-attr-setstack)
  - [`pthread\_attr\_setstacksize`](#fn-pthread-attr-setstacksize)
  - [`pthread\_attr\_setguardsize`](#fn-pthread-attr-setguardsize)
  - [`pthread\_attr\_destroy`](#fn-pthread-attr-destroy)
  - [`pthread\_self`](#fn-pthread-self)
  - [`pthread\_join`](#fn-pthread-join)
  - [`pthread\_detach`](#fn-pthread-detach)
  - [`pthread\_atfork`](#fn-pthread-atfork)
  - [`pthread\_key\_create`](#fn-pthread-key-create)
  - [`pthread\_key\_delete`](#fn-pthread-key-delete)
  - [`pthread\_getspecific`](#fn-pthread-getspecific)
  - [`pthread\_setspecific`](#fn-pthread-setspecific)
  - [`pthread\_sigmask`](#fn-pthread-sigmask)
  - [`pthread\_getname\_np`](#fn-pthread-getname-np)
  - [`sem\_init`](#fn-sem-init)
  - [`sem\_destroy`](#fn-sem-destroy)
  - [`sem\_open`](#fn-sem-open)
  - [`sem\_close`](#fn-sem-close)
  - [`sem\_post`](#fn-sem-post)
  - [`sem\_wait`](#fn-sem-wait)
  - [`sem\_trywait`](#fn-sem-trywait)
  - [`sem\_timedwait`](#fn-sem-timedwait)
  - [`sem\_getvalue`](#fn-sem-getvalue)
  - [`shm\_open`](#fn-shm-open)
  - [`shm\_unlink`](#fn-shm-unlink)
  - [`kqueue`](#fn-kqueue)
  - [`kevent`](#fn-kevent)
  - [`port\_create`](#fn-port-create)
  - [`port\_associate`](#fn-port-associate)
  - [`port\_dissociate`](#fn-port-dissociate)
  - [`port\_send`](#fn-port-send)
  - [`port\_sendn`](#fn-port-sendn)
  - [`port\_get`](#fn-port-get)
  - [`port\_getn`](#fn-port-getn)
  - [`port\_alert`](#fn-port-alert)
  - [`getaddrinfo`](#fn-getaddrinfo)
  - [`freeaddrinfo`](#fn-freeaddrinfo)
  - [`getnameinfo`](#fn-getnameinfo)
  - [`gai\_strerror`](#fn-gai-strerror)
  - [`poll`](#fn-poll)
  - [`ppoll`](#fn-ppoll)
  - [`dn\_expand`](#fn-dn-expand)
  - [`pthread\_mutex\_lock`](#fn-pthread-mutex-lock)
  - [`pthread\_mutex\_unlock`](#fn-pthread-mutex-unlock)
  - [`pthread\_mutex\_trylock`](#fn-pthread-mutex-trylock)
  - [`pthread\_mutex\_destroy`](#fn-pthread-mutex-destroy)
  - [`pthread\_cond\_wait`](#fn-pthread-cond-wait)
  - [`pthread\_cond\_timedwait`](#fn-pthread-cond-timedwait)
  - [`pthread\_cond\_signal`](#fn-pthread-cond-signal)
  - [`pthread\_cond\_broadcast`](#fn-pthread-cond-broadcast)
  - [`pthread\_cond\_destroy`](#fn-pthread-cond-destroy)
  - [`pthread\_rwlock\_destroy`](#fn-pthread-rwlock-destroy)
  - [`pthread\_rwlock\_rdlock`](#fn-pthread-rwlock-rdlock)
  - [`pthread\_rwlock\_wrlock`](#fn-pthread-rwlock-wrlock)
  - [`pthread\_rwlock\_tryrdlock`](#fn-pthread-rwlock-tryrdlock)
  - [`pthread\_rwlock\_trywrlock`](#fn-pthread-rwlock-trywrlock)
  - [`pthread\_rwlock\_unlock`](#fn-pthread-rwlock-unlock)
  - [`dlopen`](#fn-dlopen)
  - [`dlclose`](#fn-dlclose)
  - [`dlsym`](#fn-dlsym)
  - [`dlerror`](#fn-dlerror)
  - [`sync`](#fn-sync)
  - [`syncfs`](#fn-syncfs)
  - [`fsync`](#fn-fsync)
  - [`fdatasync`](#fn-fdatasync)
  - [`prctl`](#fn-prctl)
  - [`getrlimit`](#fn-getrlimit)
  - [`setrlimit`](#fn-setrlimit)
  - [`fmemopen`](#fn-fmemopen)
  - [`syslog`](#fn-syslog)
  - [`openlog`](#fn-openlog)
  - [`closelog`](#fn-closelog)
  - [`setlogmask`](#fn-setlogmask)
  - [`if\_nametoindex`](#fn-if-nametoindex)
  - [`getpid`](#fn-getpid)
  - [`getppid`](#fn-getppid)
  - [`setsid`](#fn-setsid)
  - [`setlocale`](#fn-setlocale)
  - [`pthread\_getthreadid\_np`](#fn-pthread-getthreadid-np)
  - [`pthread\_set\_name\_np`](#fn-pthread-set-name-np)
  - [`pthread\_get\_name\_np`](#fn-pthread-get-name-np)

- [Types](#types)
  - [`MAP\_FAILED`](#type-map-failed)
  - [`DIR`](#type-dir)
  - [`FILE`](#type-file)
  - [`LC`](#type-lc)

- [Constants](#constants)
  - [`iovec`](#const-iovec)
  - [`iovec\_const`](#const-iovec-const)
  - [`LOCK`](#const-lock)
  - [`winsize`](#const-winsize)
  - [`ino\_t`](#const-ino-t)
  - [`off\_t`](#const-off-t)
  - [`timespec`](#const-timespec)
  - [`dev\_t`](#const-dev-t)
  - [`mode\_t`](#const-mode-t)
  - [`nlink\_t`](#const-nlink-t)
  - [`uid\_t`](#const-uid-t)
  - [`gid\_t`](#const-gid-t)
  - [`blksize\_t`](#const-blksize-t)
  - [`passwd`](#const-passwd)
  - [`group`](#const-group)
  - [`blkcnt\_t`](#const-blkcnt-t)
  - [`fd\_t`](#const-fd-t)
  - [`ARCH`](#const-arch)
  - [`TIMERFD\_CLOCK`](#const-timerfd-clock)
  - [`timerfd\_clockid\_t`](#const-timerfd-clockid-t)
  - [`CLOCK`](#const-clock)
  - [`clockid\_t`](#const-clockid-t)
  - [`CPU\_COUNT`](#const-cpu-count)
  - [`E`](#const-e)
  - [`Elf\_Symndx`](#const-elf-symndx)
  - [`F`](#const-f)
  - [`FD\_CLOEXEC`](#const-fd-cloexec)
  - [`F\_OK`](#const-f-ok)
  - [`X\_OK`](#const-x-ok)
  - [`W\_OK`](#const-w-ok)
  - [`R\_OK`](#const-r-ok)
  - [`Flock`](#const-flock)
  - [`HOST\_NAME\_MAX`](#const-host-name-max)
  - [`IOV\_MAX`](#const-iov-max)
  - [`CTL`](#const-ctl)
  - [`KERN`](#const-kern)
  - [`MADV`](#const-madv)
  - [`MSF`](#const-msf)
  - [`NAME\_MAX`](#const-name-max)
  - [`PATH\_MAX`](#const-path-max)
  - [`POLL`](#const-poll)
  - [`PROT`](#const-prot)
  - [`REG`](#const-reg)
  - [`RLIM`](#const-rlim)
  - [`S`](#const-s)
  - [`SA`](#const-sa)
  - [`sigval\_t`](#const-sigval-t)
  - [`SC`](#const-sc)
  - [`\_SC`](#const--sc)
  - [`SEEK`](#const-seek)
  - [`SHUT`](#const-shut)
  - [`SIG`](#const-sig)
  - [`SIOCGIFINDEX`](#const-siocgifindex)
  - [`STDIN\_FILENO`](#const-stdin-fileno)
  - [`STDOUT\_FILENO`](#const-stdout-fileno)
  - [`STDERR\_FILENO`](#const-stderr-fileno)
  - [`SYS`](#const-sys)
  - [`Sigaction`](#const-sigaction)
  - [`T`](#const-t)
  - [`IOCPARM\_MASK`](#const-iocparm-mask)
  - [`TCSA`](#const-tcsa)
  - [`TFD`](#const-tfd)
  - [`VDSO`](#const-vdso)
  - [`W`](#const-w)
  - [`clock\_t`](#const-clock-t)
  - [`cpu\_set\_t`](#const-cpu-set-t)
  - [`dl\_phdr\_info`](#const-dl-phdr-info)
  - [`epoll\_event`](#const-epoll-event)
  - [`ifreq`](#const-ifreq)
  - [`itimerspec`](#const-itimerspec)
  - [`msghdr`](#const-msghdr)
  - [`msghdr\_const`](#const-msghdr-const)
  - [`nfds\_t`](#const-nfds-t)
  - [`perf\_event\_attr`](#const-perf-event-attr)
  - [`pid\_t`](#const-pid-t)
  - [`pollfd`](#const-pollfd)
  - [`rlim\_t`](#const-rlim-t)
  - [`rlimit`](#const-rlimit)
  - [`rlimit\_resource`](#const-rlimit-resource)
  - [`rusage`](#const-rusage)
  - [`siginfo\_t`](#const-siginfo-t)
  - [`sigset\_t`](#const-sigset-t)
  - [`sigval`](#const-sigval)
  - [`addrinfo`](#const-addrinfo)
  - [`sockaddr`](#const-sockaddr)
  - [`socklen\_t`](#const-socklen-t)
  - [`in\_port\_t`](#const-in-port-t)
  - [`sa\_family\_t`](#const-sa-family-t)
  - [`AF`](#const-af)
  - [`PF`](#const-pf)
  - [`DT`](#const-dt)
  - [`MSG`](#const-msg)
  - [`SOCK`](#const-sock)
  - [`TCP`](#const-tcp)
  - [`IPPROTO`](#const-ipproto)
  - [`SOL`](#const-sol)
  - [`SO`](#const-so)
  - [`SOMAXCONN`](#const-somaxconn)
  - [`IFNAMESIZE`](#const-ifnamesize)
  - [`stack\_t`](#const-stack-t)
  - [`time\_t`](#const-time-t)
  - [`suseconds\_t`](#const-suseconds-t)
  - [`timeval`](#const-timeval)
  - [`timezone`](#const-timezone)
  - [`ucontext\_t`](#const-ucontext-t)
  - [`mcontext\_t`](#const-mcontext-t)
  - [`user\_desc`](#const-user-desc)
  - [`utsname`](#const-utsname)
  - [`PR`](#const-pr)
  - [`\_errno`](#const--errno)
  - [`RTLD`](#const-rtld)
  - [`dirent`](#const-dirent)
  - [`MAXNAMLEN`](#const-maxnamlen)
  - [`dirent64`](#const-dirent64)
  - [`AI`](#const-ai)
  - [`NI`](#const-ni)
  - [`EAI`](#const-eai)
  - [`dl\_iterate\_phdr\_callback`](#const-dl-iterate-phdr-callback)
  - [`Stat`](#const-stat)
  - [`pthread\_mutex\_t`](#const-pthread-mutex-t)
  - [`pthread\_cond\_t`](#const-pthread-cond-t)
  - [`pthread\_rwlock\_t`](#const-pthread-rwlock-t)
  - [`pthread\_attr\_t`](#const-pthread-attr-t)
  - [`pthread\_key\_t`](#const-pthread-key-t)
  - [`padded\_pthread\_spin\_t`](#const-padded-pthread-spin-t)
  - [`pthread\_spin\_t`](#const-pthread-spin-t)
  - [`sem\_t`](#const-sem-t)
  - [`Kevent`](#const-kevent)
  - [`port\_t`](#const-port-t)
  - [`port\_event`](#const-port-event)
  - [`AT`](#const-at)
  - [`O`](#const-o)
  - [`MAP`](#const-map)
  - [`MREMAP`](#const-mremap)
  - [`cc\_t`](#const-cc-t)
  - [`V`](#const-v)
  - [`NCCS`](#const-nccs)
  - [`termios`](#const-termios)
  - [`tc\_iflag\_t`](#const-tc-iflag-t)
  - [`tc\_oflag\_t`](#const-tc-oflag-t)
  - [`CSIZE`](#const-csize)
  - [`tc\_cflag\_t`](#const-tc-cflag-t)
  - [`tc\_lflag\_t`](#const-tc-lflag-t)
  - [`speed\_t`](#const-speed-t)
  - [`whence\_t`](#const-whence-t)
  - [`sig\_atomic\_t`](#const-sig-atomic-t)
  - [`NSIG`](#const-nsig)
  - [`MINSIGSTKSZ`](#const-minsigstksz)
  - [`SIGSTKSZ`](#const-sigstksz)
  - [`SS`](#const-ss)
  - [`EV`](#const-ev)
  - [`EVFILT`](#const-evfilt)
  - [`NOTE`](#const-note)
  - [`FUTEX`](#const-futex)
  - [`close`](#const-close)
  - [`clock\_getres`](#const-clock-getres)
  - [`clock\_gettime`](#const-clock-gettime)
  - [`fstat`](#const-fstat)
  - [`fstatat`](#const-fstatat)
  - [`arc4random\_buf`](#const-arc4random-buf)
  - [`getentropy`](#const-getentropy)
  - [`getrandom`](#const-getrandom)
  - [`sendfile`](#const-sendfile)
  - [`sigaltstack`](#const-sigaltstack)
  - [`pipe2`](#const-pipe2)
  - [`copy\_file\_range`](#const-copy-file-range)
  - [`getdirentries`](#const-getdirentries)
  - [`getdents`](#const-getdents)
  - [`getrusage`](#const-getrusage)
  - [`gettimeofday`](#const-gettimeofday)
  - [`msync`](#const-msync)
  - [`nanosleep`](#const-nanosleep)
  - [`readdir`](#const-readdir)
  - [`realpath`](#const-realpath)
  - [`sched\_yield`](#const-sched-yield)
  - [`sigaction`](#const-sigaction-1)
  - [`sigfillset`](#const-sigfillset)
  - [`sigaddset`](#const-sigaddset)
  - [`sigemptyset`](#const-sigemptyset)
  - [`sigdelset`](#const-sigdelset)
  - [`sigismember`](#const-sigismember)
  - [`sigprocmask`](#const-sigprocmask)
  - [`socket`](#const-socket)
  - [`stat`](#const-stat-1)
  - [`\_msize`](#const--msize)
  - [`malloc\_size`](#const-malloc-size)
  - [`malloc\_usable\_size`](#const-malloc-usable-size)
  - [`posix\_memalign`](#const-posix-memalign)
  - [`sysconf`](#const-sysconf)
  - [`sf\_hdtr`](#const-sf-hdtr)
  - [`flock`](#const-flock-1)
  - [`futex`](#const-futex-1)
  - [`fork`](#const-fork)
  - [`pthread\_setname\_np`](#const-pthread-setname-np)
  - [`pthread\_threadid\_np`](#const-pthread-threadid-np)
  - [`PTHREAD\_MUTEX\_INITIALIZER`](#const-pthread-mutex-initializer)
  - [`PTHREAD\_COND\_INITIALIZER`](#const-pthread-cond-initializer)
  - [`pthread\_t`](#const-pthread-t)
  - [`getcontext`](#const-getcontext)
  - [`max\_align\_t`](#const-max-align-t)
  - [`intmax\_t`](#const-intmax-t)
  - [`uintmax\_t`](#const-uintmax-t)
  - [`AF\_SUN`](#const-af-sun)
  - [`AT\_SUN`](#const-at-sun)
  - [`FILE\_EVENT`](#const-file-event)
  - [`GETCONTEXT`](#const-getcontext-1)
  - [`GETUSTACK`](#const-getustack)
  - [`PORT\_ALERT`](#const-port-alert)
  - [`PORT\_SOURCE`](#const-port-source)
  - [`POSIX\_FADV`](#const-posix-fadv)
  - [`SCM`](#const-scm)
  - [`SETCONTEXT`](#const-setcontext)
  - [`SETUSTACK`](#const-setustack)
  - [`SFD`](#const-sfd)
  - [`cmsghdr`](#const-cmsghdr)
  - [`ctid\_t`](#const-ctid-t)
  - [`file\_obj`](#const-file-obj)
  - [`fpregset\_t`](#const-fpregset-t)
  - [`id\_t`](#const-id-t)
  - [`lif\_ifinfo\_req`](#const-lif-ifinfo-req)
  - [`lif\_nd\_req`](#const-lif-nd-req)
  - [`lifreq`](#const-lifreq)
  - [`major\_t`](#const-major-t)
  - [`minor\_t`](#const-minor-t)
  - [`poolid\_t`](#const-poolid-t)
  - [`port\_notify`](#const-port-notify)
  - [`priority`](#const-priority)
  - [`procfs`](#const-procfs)
  - [`projid\_t`](#const-projid-t)
  - [`signalfd\_siginfo`](#const-signalfd-siginfo)
  - [`taskid\_t`](#const-taskid-t)
  - [`zoneid\_t`](#const-zoneid-t)
  - [`DirEnt`](#const-dirent-1)
  - [`\_get\_next\_area\_info`](#const--get-next-area-info)
  - [`\_get\_next\_image\_info`](#const--get-next-image-info)
  - [`\_get\_team\_info`](#const--get-team-info)
  - [`\_kern\_get\_current\_team`](#const--kern-get-current-team)
  - [`\_kern\_open\_dir`](#const--kern-open-dir)
  - [`\_kern\_read\_dir`](#const--kern-read-dir)
  - [`\_kern\_read\_stat`](#const--kern-read-stat)
  - [`\_kern\_rewind\_dir`](#const--kern-rewind-dir)
  - [`area\_id`](#const-area-id)
  - [`area\_info`](#const-area-info)
  - [`directory\_which`](#const-directory-which)
  - [`find\_directory`](#const-find-directory)
  - [`find\_thread`](#const-find-thread)
  - [`get\_system\_info`](#const-get-system-info)
  - [`image\_info`](#const-image-info)
  - [`port\_id`](#const-port-id)
  - [`sem\_id`](#const-sem-id)
  - [`status\_t`](#const-status-t)
  - [`system\_info`](#const-system-info)
  - [`team\_id`](#const-team-id)
  - [`team\_info`](#const-team-info)
  - [`thread\_id`](#const-thread-id)
  - [`AUTH`](#const-auth)
  - [`BI`](#const-bi)
  - [`HW`](#const-hw)
  - [`PTHREAD\_STACK\_MIN`](#const-pthread-stack-min)
  - [`TCFLUSH`](#const-tcflush)
  - [`TCIO`](#const-tcio)
  - [`auth\_approval`](#const-auth-approval)
  - [`auth\_call`](#const-auth-call)
  - [`auth\_cat`](#const-auth-cat)
  - [`auth\_challenge`](#const-auth-challenge)
  - [`auth\_check\_change`](#const-auth-check-change)
  - [`auth\_check\_expire`](#const-auth-check-expire)
  - [`auth\_checknologin`](#const-auth-checknologin)
  - [`auth\_clean`](#const-auth-clean)
  - [`auth\_close`](#const-auth-close)
  - [`auth\_clrenv`](#const-auth-clrenv)
  - [`auth\_clroption`](#const-auth-clroption)
  - [`auth\_clroptions`](#const-auth-clroptions)
  - [`auth\_getitem`](#const-auth-getitem)
  - [`auth\_getpwd`](#const-auth-getpwd)
  - [`auth\_getstate`](#const-auth-getstate)
  - [`auth\_getvalue`](#const-auth-getvalue)
  - [`auth\_item\_t`](#const-auth-item-t)
  - [`auth\_mkvalue`](#const-auth-mkvalue)
  - [`auth\_open`](#const-auth-open)
  - [`auth\_session\_t`](#const-auth-session-t)
  - [`auth\_setdata`](#const-auth-setdata)
  - [`auth\_setenv`](#const-auth-setenv)
  - [`auth\_setitem`](#const-auth-setitem)
  - [`auth\_setoption`](#const-auth-setoption)
  - [`auth\_setpwd`](#const-auth-setpwd)
  - [`auth\_setstate`](#const-auth-setstate)
  - [`auth\_userchallenge`](#const-auth-userchallenge)
  - [`auth\_usercheck`](#const-auth-usercheck)
  - [`auth\_userokay`](#const-auth-userokay)
  - [`auth\_userresponse`](#const-auth-userresponse)
  - [`auth\_verify`](#const-auth-verify)
  - [`bcrypt`](#const-bcrypt)
  - [`bcrypt\_checkpass`](#const-bcrypt-checkpass)
  - [`bcrypt\_gensalt`](#const-bcrypt-gensalt)
  - [`bcrypt\_newhash`](#const-bcrypt-newhash)
  - [`getpwnam\_shadow`](#const-getpwnam-shadow)
  - [`getpwuid\_shadow`](#const-getpwuid-shadow)
  - [`getthrid`](#const-getthrid)
  - [`login\_cap\_t`](#const-login-cap-t)
  - [`login\_close`](#const-login-close)
  - [`login\_getcapbool`](#const-login-getcapbool)
  - [`login\_getcapnum`](#const-login-getcapnum)
  - [`login\_getcapsize`](#const-login-getcapsize)
  - [`login\_getcapstr`](#const-login-getcapstr)
  - [`login\_getcaptime`](#const-login-getcaptime)
  - [`login\_getclass`](#const-login-getclass)
  - [`login\_getstyle`](#const-login-getstyle)
  - [`pledge`](#const-pledge)
  - [`pthread\_spinlock\_t`](#const-pthread-spinlock-t)
  - [`pw\_dup`](#const-pw-dup)
  - [`setclasscontext`](#const-setclasscontext)
  - [`setpassent`](#const-setpassent)
  - [`setusercontext`](#const-setusercontext)
  - [`uid\_from\_user`](#const-uid-from-user)
  - [`unveil`](#const-unveil)
  - [`user\_from\_uid`](#const-user-from-uid)
  - [`CAP\_RIGHTS\_VERSION`](#const-cap-rights-version)
  - [`KINFO\_FILE\_SIZE`](#const-kinfo-file-size)
  - [`MFD`](#const-mfd)
  - [`UMTX\_ABSTIME`](#const-umtx-abstime)
  - [`UMTX\_OP`](#const-umtx-op)
  - [`\_umtx\_op`](#const--umtx-op)
  - [`\_umtx\_time`](#const--umtx-time)
  - [`cap\_rights`](#const-cap-rights)
  - [`fflags\_t`](#const-fflags-t)
  - [`fsblkcnt\_t`](#const-fsblkcnt-t)
  - [`fsfilcnt\_t`](#const-fsfilcnt-t)
  - [`kinfo\_file`](#const-kinfo-file)
  - [`kinfo\_getfile`](#const-kinfo-getfile)
  - [`COPYFILE`](#const-copyfile)
  - [`CPUFAMILY`](#const-cpufamily)
  - [`PT`](#const-pt)
  - [`DB\_RECORDTYPE`](#const-db-recordtype)
  - [`EXC`](#const-exc)
  - [`EXCEPTION`](#const-exception)
  - [`MACH\_MSG\_TYPE`](#const-mach-msg-type)
  - [`MACH\_PORT\_RIGHT`](#const-mach-port-right)
  - [`MACH\_TASK\_BASIC\_INFO`](#const-mach-task-basic-info)
  - [`MACH\_TASK\_BASIC\_INFO\_COUNT`](#const-mach-task-basic-info-count)
  - [`MATTR`](#const-mattr)
  - [`NSVersionOfRunTimeLibrary`](#const-nsversionofruntimelibrary)
  - [`OPEN\_MAX`](#const-open-max)
  - [`POSIX\_SPAWN`](#const-posix-spawn)
  - [`TASK\_NULL`](#const-task-null)
  - [`TASK\_VM\_INFO`](#const-task-vm-info)
  - [`TASK\_VM\_INFO\_COUNT`](#const-task-vm-info-count)
  - [`THREAD\_BASIC\_INFO`](#const-thread-basic-info)
  - [`THREAD\_BASIC\_INFO\_COUNT`](#const-thread-basic-info-count)
  - [`THREAD\_IDENTIFIER\_INFO\_COUNT`](#const-thread-identifier-info-count)
  - [`THREAD\_NULL`](#const-thread-null)
  - [`THREAD\_STATE\_NONE`](#const-thread-state-none)
  - [`UL`](#const-ul)
  - [`VM`](#const-vm)
  - [`\_NSGetExecutablePath`](#const--nsgetexecutablepath)
  - [`\_\_getdirentries64`](#const---getdirentries64)
  - [`\_\_ulock\_wait`](#const---ulock-wait)
  - [`\_\_ulock\_wait2`](#const---ulock-wait2)
  - [`\_\_ulock\_wake`](#const---ulock-wake)
  - [`\_dyld\_get\_image\_header`](#const--dyld-get-image-header)
  - [`\_dyld\_get\_image\_name`](#const--dyld-get-image-name)
  - [`\_dyld\_get\_image\_vmaddr\_slide`](#const--dyld-get-image-vmaddr-slide)
  - [`\_dyld\_image\_count`](#const--dyld-image-count)
  - [`\_host\_page\_size`](#const--host-page-size)
  - [`clock\_get\_time`](#const-clock-get-time)
  - [`@"close$NOCANCEL"`](#const-closenocancel)
  - [`dispatch\_release`](#const-dispatch-release)
  - [`dispatch\_semaphore\_create`](#const-dispatch-semaphore-create)
  - [`dispatch\_semaphore\_signal`](#const-dispatch-semaphore-signal)
  - [`dispatch\_semaphore\_wait`](#const-dispatch-semaphore-wait)
  - [`dispatch\_time`](#const-dispatch-time)
  - [`fcopyfile`](#const-fcopyfile)
  - [`host\_t`](#const-host-t)
  - [`ipc\_space\_t`](#const-ipc-space-t)
  - [`ipc\_space\_port\_t`](#const-ipc-space-port-t)
  - [`kern\_return\_t`](#const-kern-return-t)
  - [`vm\_size\_t`](#const-vm-size-t)
  - [`kevent64`](#const-kevent64)
  - [`kevent64\_s`](#const-kevent64-s)
  - [`mach\_absolute\_time`](#const-mach-absolute-time)
  - [`mach\_continuous\_time`](#const-mach-continuous-time)
  - [`mach\_hdr`](#const-mach-hdr)
  - [`mach\_host\_self`](#const-mach-host-self)
  - [`mach\_msg`](#const-mach-msg)
  - [`mach\_msg\_type\_number\_t`](#const-mach-msg-type-number-t)
  - [`mach\_port\_allocate`](#const-mach-port-allocate)
  - [`mach\_port\_array\_t`](#const-mach-port-array-t)
  - [`mach\_port\_deallocate`](#const-mach-port-deallocate)
  - [`mach\_port\_insert\_right`](#const-mach-port-insert-right)
  - [`mach\_port\_name\_t`](#const-mach-port-name-t)
  - [`mach\_port\_t`](#const-mach-port-t)
  - [`mach\_task\_basic\_info`](#const-mach-task-basic-info-1)
  - [`mach\_task\_self`](#const-mach-task-self)
  - [`mach\_timebase\_info`](#const-mach-timebase-info)
  - [`mach\_timebase\_info\_data`](#const-mach-timebase-info-data)
  - [`mach\_vm\_address\_t`](#const-mach-vm-address-t)
  - [`mach\_vm\_protect`](#const-mach-vm-protect)
  - [`mach\_vm\_read`](#const-mach-vm-read)
  - [`mach\_vm\_region`](#const-mach-vm-region)
  - [`mach\_vm\_region\_recurse`](#const-mach-vm-region-recurse)
  - [`mach\_vm\_size\_t`](#const-mach-vm-size-t)
  - [`mach\_vm\_write`](#const-mach-vm-write)
  - [`natural\_t`](#const-natural-t)
  - [`os\_log\_create`](#const-os-log-create)
  - [`os\_log\_type\_enabled`](#const-os-log-type-enabled)
  - [`os\_signpost\_enabled`](#const-os-signpost-enabled)
  - [`os\_signpost\_id\_generate`](#const-os-signpost-id-generate)
  - [`os\_signpost\_id\_make\_with\_pointer`](#const-os-signpost-id-make-with-pointer)
  - [`os\_signpost\_interval\_begin`](#const-os-signpost-interval-begin)
  - [`os\_signpost\_interval\_end`](#const-os-signpost-interval-end)
  - [`os\_unfair\_lock`](#const-os-unfair-lock)
  - [`os\_unfair\_lock\_assert\_not\_owner`](#const-os-unfair-lock-assert-not-owner)
  - [`os\_unfair\_lock\_assert\_owner`](#const-os-unfair-lock-assert-owner)
  - [`os\_unfair\_lock\_lock`](#const-os-unfair-lock-lock)
  - [`os\_unfair\_lock\_trylock`](#const-os-unfair-lock-trylock)
  - [`os\_unfair\_lock\_unlock`](#const-os-unfair-lock-unlock)
  - [`pid\_for\_task`](#const-pid-for-task)
  - [`posix\_spawn`](#const-posix-spawn-1)
  - [`posix\_spawn\_file\_actions\_addchdir\_np`](#const-posix-spawn-file-actions-addchdir-np)
  - [`posix\_spawn\_file\_actions\_addclose`](#const-posix-spawn-file-actions-addclose)
  - [`posix\_spawn\_file\_actions\_adddup2`](#const-posix-spawn-file-actions-adddup2)
  - [`posix\_spawn\_file\_actions\_addfchdir\_np`](#const-posix-spawn-file-actions-addfchdir-np)
  - [`posix\_spawn\_file\_actions\_addinherit\_np`](#const-posix-spawn-file-actions-addinherit-np)
  - [`posix\_spawn\_file\_actions\_addopen`](#const-posix-spawn-file-actions-addopen)
  - [`posix\_spawn\_file\_actions\_destroy`](#const-posix-spawn-file-actions-destroy)
  - [`posix\_spawn\_file\_actions\_init`](#const-posix-spawn-file-actions-init)
  - [`posix\_spawn\_file\_actions\_t`](#const-posix-spawn-file-actions-t)
  - [`posix\_spawnattr\_destroy`](#const-posix-spawnattr-destroy)
  - [`posix\_spawnattr\_getflags`](#const-posix-spawnattr-getflags)
  - [`posix\_spawnattr\_init`](#const-posix-spawnattr-init)
  - [`posix\_spawnattr\_setflags`](#const-posix-spawnattr-setflags)
  - [`posix\_spawnattr\_t`](#const-posix-spawnattr-t)
  - [`posix\_spawnp`](#const-posix-spawnp)
  - [`pthread\_attr\_get\_qos\_class\_np`](#const-pthread-attr-get-qos-class-np)
  - [`pthread\_attr\_set\_qos\_class\_np`](#const-pthread-attr-set-qos-class-np)
  - [`pthread\_get\_qos\_class\_np`](#const-pthread-get-qos-class-np)
  - [`pthread\_set\_qos\_class\_self\_np`](#const-pthread-set-qos-class-self-np)
  - [`ptrace`](#const-ptrace)
  - [`task\_for\_pid`](#const-task-for-pid)
  - [`task\_get\_exception\_ports`](#const-task-get-exception-ports)
  - [`task\_info`](#const-task-info)
  - [`task\_info\_t`](#const-task-info-t)
  - [`task\_resume`](#const-task-resume)
  - [`task\_set\_exception\_ports`](#const-task-set-exception-ports)
  - [`task\_suspend`](#const-task-suspend)
  - [`task\_threads`](#const-task-threads)
  - [`task\_vm\_info\_data\_t`](#const-task-vm-info-data-t)
  - [`thread\_basic\_info`](#const-thread-basic-info-1)
  - [`thread\_get\_state`](#const-thread-get-state)
  - [`thread\_identifier\_info`](#const-thread-identifier-info)
  - [`thread\_info`](#const-thread-info)
  - [`thread\_info\_t`](#const-thread-info-t)
  - [`thread\_resume`](#const-thread-resume)
  - [`thread\_set\_state`](#const-thread-set-state)
  - [`vm\_deallocate`](#const-vm-deallocate)
  - [`vm\_machine\_attribute`](#const-vm-machine-attribute)
  - [`vm\_machine\_attribute\_val\_t`](#const-vm-machine-attribute-val-t)
  - [`vm\_map\_t`](#const-vm-map-t)
  - [`vm\_offset\_t`](#const-vm-offset-t)
  - [`vm\_prot\_t`](#const-vm-prot-t)
  - [`vm\_region\_basic\_info\_64`](#const-vm-region-basic-info-64)
  - [`vm\_region\_extended\_info`](#const-vm-region-extended-info)
  - [`vm\_region\_info\_t`](#const-vm-region-info-t)
  - [`vm\_region\_recurse\_info\_t`](#const-vm-region-recurse-info-t)
  - [`vm\_region\_submap\_info\_64`](#const-vm-region-submap-info-64)
  - [`vm\_region\_submap\_short\_info\_64`](#const-vm-region-submap-short-info-64)
  - [`vm\_region\_top\_info`](#const-vm-region-top-info)
  - [`caddr\_t`](#const-caddr-t)
  - [`exception\_behavior\_array\_t`](#const-exception-behavior-array-t)
  - [`exception\_behavior\_t`](#const-exception-behavior-t)
  - [`exception\_data\_t`](#const-exception-data-t)
  - [`exception\_data\_type\_t`](#const-exception-data-type-t)
  - [`exception\_flavor\_array\_t`](#const-exception-flavor-array-t)
  - [`exception\_handler\_array\_t`](#const-exception-handler-array-t)
  - [`exception\_handler\_t`](#const-exception-handler-t)
  - [`exception\_mask\_array\_t`](#const-exception-mask-array-t)
  - [`exception\_mask\_t`](#const-exception-mask-t)
  - [`exception\_port\_array\_t`](#const-exception-port-array-t)
  - [`exception\_port\_t`](#const-exception-port-t)
  - [`mach\_exception\_data\_t`](#const-mach-exception-data-t)
  - [`mach\_exception\_data\_type\_t`](#const-mach-exception-data-type-t)
  - [`mach\_msg\_bits\_t`](#const-mach-msg-bits-t)
  - [`mach\_msg\_id\_t`](#const-mach-msg-id-t)
  - [`mach\_msg\_option\_t`](#const-mach-msg-option-t)
  - [`mach\_msg\_size\_t`](#const-mach-msg-size-t)
  - [`mach\_msg\_timeout\_t`](#const-mach-msg-timeout-t)
  - [`mach\_msg\_type\_name\_t`](#const-mach-msg-type-name-t)
  - [`mach\_port\_right\_t`](#const-mach-port-right-t)
  - [`memory\_object\_offset\_t`](#const-memory-object-offset-t)
  - [`policy\_t`](#const-policy-t)
  - [`task\_policy\_flavor\_t`](#const-task-policy-flavor-t)
  - [`task\_policy\_t`](#const-task-policy-t)
  - [`task\_t`](#const-task-t)
  - [`thread\_act\_t`](#const-thread-act-t)
  - [`thread\_flavor\_t`](#const-thread-flavor-t)
  - [`thread\_port\_t`](#const-thread-port-t)
  - [`thread\_state\_flavor\_t`](#const-thread-state-flavor-t)
  - [`thread\_state\_t`](#const-thread-state-t)
  - [`thread\_t`](#const-thread-t)
  - [`time\_value\_t`](#const-time-value-t)
  - [`vm32\_object\_id\_t`](#const-vm32-object-id-t)
  - [`vm\_behavior\_t`](#const-vm-behavior-t)
  - [`vm\_inherit\_t`](#const-vm-inherit-t)
  - [`vm\_map\_read\_t`](#const-vm-map-read-t)
  - [`vm\_object\_id\_t`](#const-vm-object-id-t)
  - [`vm\_region\_flavor\_t`](#const-vm-region-flavor-t)
  - [`\_ksiginfo`](#const--ksiginfo)
  - [`\_lwp\_self`](#const--lwp-self)
  - [`lwpid\_t`](#const-lwpid-t)
  - [`lwp\_gettid`](#const-lwp-gettid)
  - [`umtx\_sleep`](#const-umtx-sleep)
  - [`umtx\_wakeup`](#const-umtx-wakeup)
  - [`PERF\_EVENT`](#const-perf-event)
  - [`disown`](#const-disown)
  - [`profiling\_enable`](#const-profiling-enable)
  - [`profiling\_disable`](#const-profiling-disable)
  - [`profiling\_free\_buffer`](#const-profiling-free-buffer)
  - [`futex\_wait`](#const-futex-wait)
  - [`futex\_wake`](#const-futex-wake)
  - [`purge`](#const-purge)
  - [`perf\_event`](#const-perf-event-1)
  - [`perf\_register\_string`](#const-perf-register-string)
  - [`get\_stack\_bounds`](#const-get-stack-bounds)
  - [`anon\_create`](#const-anon-create)
  - [`serenity\_readlink`](#const-serenity-readlink)
  - [`serenity\_open`](#const-serenity-open)
  - [`getkeymap`](#const-getkeymap)
  - [`setkeymap`](#const-setkeymap)

- [Global Variables](#global-variables)
  - [`\_mh\_execute\_header`](#var--mh-execute-header)
  - [`environ`](#var-environ)

---

## Types (4)

### <a id="type-map-failed"></a>`MAP_FAILED`

<details class="declaration-card" open>
<summary>Type Alias – Used by libc to communicate failure</summary>

Used by libc to communicate failure. Not actually part of the underlying syscall.

\`\`\`zig
pub const MAP_FAILED: *anyopaque = @ptrFromInt(maxInt(usize))
\`\`\`

</details>

---

### <a id="type-dir"></a>`DIR`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

\`\`\`zig
pub const DIR = opaque {}
\`\`\`

</details>

---

### <a id="type-file"></a>`FILE`

<details class="declaration-card" open>
<summary>Type Alias – Expand to see the underlying type and usage details.</summary>

\`\`\`zig
pub const FILE = opaque {}
\`\`\`

</details>

---

### <a id="type-lc"></a>`LC`

<details class="declaration-card" open>
<summary>Container – These are implementation defined but share identical values in at least musl and glibc:</summary>

These are implementation defined but share identical values in at least musl and glibc:
- https://git.musl-libc.org/cgit/musl/tree/include/locale.h?id=ab31e9d6a0fa7c5c408856c89df2dfb12c344039#n18
- https://sourceware.org/git/?p=glibc.git;a=blob;f=locale/bits/locale.h;h=0fcbb66114be5fef0577dc9047256eb508c45919;hb=c90cfce849d010474e8cccf3e5bff49a2c8b141f#l26

\`\`\`zig
pub const LC = enum(c_int) {
    CTYPE = 0,
    NUMERIC = 1,
    TIME = 2,
    COLLATE = 3,
    MONETARY = 4,
    MESSAGES = 5,
    ALL = 6,
    PAPER = 7,
    NAME = 8,
    ADDRESS = 9,
    TELEPHONE = 10,
    MEASUREMENT = 11,
    IDENTIFICATION = 12,
    _,
}
\`\`\`

**Fields:**

| Value | Description |
|-------|-------------|
| `CTYPE` |  |
| `NUMERIC` |  |
| `TIME` |  |
| `COLLATE` |  |
| `MONETARY` |  |
| `MESSAGES` |  |
| `ALL` |  |
| `PAPER` |  |
| `NAME` |  |
| `ADDRESS` |  |
| `TELEPHONE` |  |
| `MEASUREMENT` |  |
| `IDENTIFICATION` |  |
| `_` |  |

</details>

---

## Global Variables (2)

### <a id="var--mh-execute-header"></a>`_mh_execute_header`

<details class="declaration-card" open>
<summary>Variable – The value of the link editor defined symbol _MH_EXECUTE_SYM is the address</summary>

The value of the link editor defined symbol _MH_EXECUTE_SYM is the address
of the mach header in a Mach-O executable file type.  It does not appear in
any file type other than a MH_EXECUTE file type.  The type of the symbol is
absolute as the header is not part of any section.
This symbol is populated when linking the system's libc, which is guaranteed
on this operating system. However when building object files or libraries,
the system libc won't be linked until the final executable. So we
export a weak symbol here, to be overridden by the real one.

\`\`\`zig
pub extern var _mh_execute_header: mach_hdr
\`\`\`

</details>

---

### <a id="var-environ"></a>`environ`

<details class="declaration-card" open>
<summary>Variable – Expand to inspect the definition and usage details.</summary>

\`\`\`zig
pub extern "c" var environ: [*:null]?[*:0]u8
\`\`\`

</details>

---

## Constants (528)

### <a id="const-iovec"></a>`iovec`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const iovec = std.posix.iovec
\`\`\`

</details>

---

### <a id="const-iovec-const"></a>`iovec_const`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const iovec_const = std.posix.iovec_const
\`\`\`

</details>

---

### <a id="const-lock"></a>`LOCK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const LOCK = std.posix.LOCK
\`\`\`

</details>

---

### <a id="const-winsize"></a>`winsize`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const winsize = std.posix.winsize
\`\`\`

</details>

---

### <a id="const-ino-t"></a>`ino_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const ino_t = switch (native_os) {
    .linux => linux.ino_t,
    .emscripten => emscripten.ino_t,
    .wasi => wasi.inode_t,
    .windows => windows.LARGE_INTEGER,
    .haiku => i64,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L38
    else => u64,
}
\`\`\`

</details>

---

### <a id="const-off-t"></a>`off_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const off_t = switch (native_os) {
    .linux => linux.off_t,
    .emscripten => emscripten.off_t,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L39
    else => i64,
}
\`\`\`

</details>

---

### <a id="const-timespec"></a>`timespec`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const timespec = switch (native_os) {
    .linux => linux.timespec,
    .emscripten => emscripten.timespec,
    .wasi => extern struct {
        sec: time_t,
        nsec: isize,

        pub fn fromTimestamp(tm: wasi.timestamp_t) timespec {
            const sec: wasi.timestamp_t = tm / 1_000_000_000;
            const nsec = tm - sec * 1_000_000_000;
            return .{
                .sec = @as(time_t, @intCast(sec)),
                .nsec = @as(isize, @intCast(nsec)),
            };
        }

        pub fn toTimestamp(ts: timespec) wasi.timestamp_t {
            return @as(wasi.timestamp_t, @intCast(ts.sec * 1_000_000_000)) +
                @as(wasi.timestamp_t, @intCast(ts.nsec));
        }
    },
    // https://github.com/SerenityOS/serenity/blob/0a78056453578c18e0a04a0b45ebfb1c96d59005/Kernel/API/POSIX/time.h#L17-L20
    .windows, .serenity => extern struct {
        sec: time_t,
        nsec: c_long,
    },
    .dragonfly, .freebsd, .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        sec: isize,
        nsec: isize,
    },
    .netbsd, .solaris, .illumos => extern struct {
        sec: i64,
        nsec: isize,
    },
    .openbsd, .haiku => extern struct {
        sec: time_t,
        nsec: isize,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-dev-t"></a>`dev_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dev_t = switch (native_os) {
    .linux => linux.dev_t,
    .emscripten => emscripten.dev_t,
    .wasi => wasi.device_t,
    .openbsd, .haiku, .solaris, .illumos, .macos, .ios, .tvos, .watchos, .visionos => i32,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L43
    .netbsd, .freebsd, .serenity => u64,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-mode-t"></a>`mode_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mode_t = switch (native_os) {
    .linux => linux.mode_t,
    .emscripten => emscripten.mode_t,
    .openbsd, .haiku, .netbsd, .solaris, .illumos, .wasi, .windows => u32,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L44
    .freebsd, .macos, .ios, .tvos, .watchos, .visionos, .dragonfly, .serenity => u16,
    else => u0,
}
\`\`\`

</details>

---

### <a id="const-nlink-t"></a>`nlink_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const nlink_t = switch (native_os) {
    .linux => linux.nlink_t,
    .emscripten => emscripten.nlink_t,
    .wasi => c_ulonglong,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L45
    .freebsd, .serenity => u64,
    .openbsd, .netbsd, .solaris, .illumos => u32,
    .haiku => i32,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-uid-t"></a>`uid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const uid_t = switch (native_os) {
    .linux => linux.uid_t,
    .emscripten => emscripten.uid_t,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L28
    else => u32,
}
\`\`\`

</details>

---

### <a id="const-gid-t"></a>`gid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const gid_t = switch (native_os) {
    .linux => linux.gid_t,
    .emscripten => emscripten.gid_t,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L29
    else => u32,
}
\`\`\`

</details>

---

### <a id="const-blksize-t"></a>`blksize_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const blksize_t = switch (native_os) {
    .linux => linux.blksize_t,
    .emscripten => emscripten.blksize_t,
    .wasi => c_long,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L42
    .serenity => u64,
    else => i32,
}
\`\`\`

</details>

---

### <a id="const-passwd"></a>`passwd`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const passwd = switch (native_os) {
    // https://github.com/SerenityOS/serenity/blob/7442cfb5072b74a62c0e061e6e9ff44fda08780d/Userland/Libraries/LibC/pwd.h#L15-L23
    .linux, .serenity => extern struct {
        name: ?[*:0]const u8, // username
        passwd: ?[*:0]const u8, // user password
        uid: uid_t, // user ID
        gid: gid_t, // group ID
        gecos: ?[*:0]const u8, // user information
        dir: ?[*:0]const u8, // home directory
        shell: ?[*:0]const u8, // shell program
    },
    .netbsd, .openbsd, .macos => extern struct {
        name: ?[*:0]const u8, // user name
        passwd: ?[*:0]const u8, // encrypted password
        uid: uid_t, // user uid
        gid: gid_t, // user gid
        change: time_t, // password change time
        class: ?[*:0]const u8, // user access class
        gecos: ?[*:0]const u8, // Honeywell login info
        dir: ?[*:0]const u8, // home directory
        shell: ?[*:0]const u8, // default shell
        expire: time_t, // account expiration
    },
    .dragonfly, .freebsd => extern struct {
        name: ?[*:0]const u8, // user name
        passwd: ?[*:0]const u8, // encrypted password
        uid: uid_t, // user uid
        gid: gid_t, // user gid
        change: time_t, // password change time
        class: ?[*:0]const u8, // user access class
        gecos: ?[*:0]const u8, // Honeywell login info
        dir: ?[*:0]const u8, // home directory
        shell: ?[*:0]const u8, // default shell
        expire: time_t, // account expiration
        fields: c_int, // internal
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-group"></a>`group`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const group = switch (native_os) {
    .linux, .freebsd, .openbsd, .dragonfly, .netbsd, .macos => extern struct {
        name: ?[*:0]const u8,
        passwd: ?[*:0]const u8,
        gid: gid_t,
        mem: [*:null]?[*:0]const u8,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-blkcnt-t"></a>`blkcnt_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const blkcnt_t = switch (native_os) {
    .linux => linux.blkcnt_t,
    .emscripten => emscripten.blkcnt_t,
    .wasi => c_longlong,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L41
    .serenity => u64,
    else => i64,
}
\`\`\`

</details>

---

### <a id="const-fd-t"></a>`fd_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fd_t = switch (native_os) {
    .linux => linux.fd_t,
    .wasi => wasi.fd_t,
    .windows => windows.HANDLE,
    .serenity => c_int,
    else => i32,
}
\`\`\`

</details>

---

### <a id="const-arch"></a>`ARCH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const ARCH = switch (native_os) {
    .linux => linux.ARCH,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-timerfd-clock"></a>`TIMERFD_CLOCK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TIMERFD_CLOCK = timerfd_clockid_t
\`\`\`

</details>

---

### <a id="const-timerfd-clockid-t"></a>`timerfd_clockid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const timerfd_clockid_t = switch (native_os) {
    .freebsd => enum(u32) {
        REALTIME = 0,
        MONOTONIC = 4,
        _,
    },
    .linux => linux.timerfd_clockid_t,
    else => clockid_t,
}
\`\`\`

</details>

---

### <a id="const-clock"></a>`CLOCK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const CLOCK = clockid_t
\`\`\`

</details>

---

### <a id="const-clockid-t"></a>`clockid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const clockid_t = switch (native_os) {
    .linux, .emscripten => linux.clockid_t,
    .wasi => wasi.clockid_t,
    .macos, .ios, .tvos, .watchos, .visionos => enum(u32) {
        REALTIME = 0,
        MONOTONIC = 6,
        MONOTONIC_RAW = 4,
        MONOTONIC_RAW_APPROX = 5,
        UPTIME_RAW = 8,
        UPTIME_RAW_APPROX = 9,
        PROCESS_CPUTIME_ID = 12,
        THREAD_CPUTIME_ID = 16,
        _,
    },
    .haiku => enum(i32) {
        /// system-wide monotonic clock (aka system time)
        MONOTONIC = 0,
        /// system-wide real time clock
        REALTIME = -1,
        /// clock measuring the used CPU time of the current process
        PROCESS_CPUTIME_ID = -2,
        /// clock measuring the used CPU time of the current thread
        THREAD_CPUTIME_ID = -3,
    },
    .freebsd => enum(u32) {
        REALTIME = 0,
        VIRTUAL = 1,
        PROF = 2,
        MONOTONIC = 4,
        UPTIME = 5,
        UPTIME_PRECISE = 7,
        UPTIME_FAST = 8,
        REALTIME_PRECISE = 9,
        REALTIME_FAST = 10,
        MONOTONIC_PRECISE = 11,
        MONOTONIC_FAST = 12,
        SECOND = 13,
        THREAD_CPUTIME_ID = 14,
        PROCESS_CPUTIME_ID = 15,
    },
    .solaris, .illumos => enum(u32) {
        VIRTUAL = 1,
        THREAD_CPUTIME_ID = 2,
        REALTIME = 3,
        MONOTONIC = 4,
        PROCESS_CPUTIME_ID = 5,
    },
    .netbsd => enum(u32) {
        REALTIME = 0,
        VIRTUAL = 1,
        PROF = 2,
        MONOTONIC = 3,
        THREAD_CPUTIME_ID = 0x20000000,
        PROCESS_CPUTIME_ID = 0x40000000,
    },
    .dragonfly => enum(u32) {
        REALTIME = 0,
        VIRTUAL = 1,
        PROF = 2,
        MONOTONIC = 4,
        UPTIME = 5,
        UPTIME_PRECISE = 7,
        UPTIME_FAST = 8,
        REALTIME_PRECISE = 9,
        REALTIME_FAST = 10,
        MONOTONIC_PRECISE = 11,
        MONOTONIC_FAST = 12,
        SECOND = 13,
        THREAD_CPUTIME_ID = 14,
        PROCESS_CPUTIME_ID = 15,
    },
    .openbsd => enum(u32) {
        REALTIME = 0,
        PROCESS_CPUTIME_ID = 2,
        MONOTONIC = 3,
        THREAD_CPUTIME_ID = 4,
    },
    // https://github.com/SerenityOS/serenity/blob/0a78056453578c18e0a04a0b45ebfb1c96d59005/Kernel/API/POSIX/time.h#L24-L36
    .serenity => enum(c_int) {
        REALTIME = 0,
        MONOTONIC = 1,
        MONOTONIC_RAW = 2,
        REALTIME_COARSE = 3,
        MONOTONIC_COARSE = 4,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-cpu-count"></a>`CPU_COUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const CPU_COUNT = switch (native_os) {
    .linux => linux.CPU_COUNT,
    .emscripten => emscripten.CPU_COUNT,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-e"></a>`E`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const E = switch (native_os) {
    .linux => linux.E,
    .emscripten => emscripten.E,
    .wasi => wasi.errno_t,
    .windows => enum(u16) {
        /// No error occurred.
        SUCCESS = 0,
        PERM = 1,
        NOENT = 2,
        SRCH = 3,
        INTR = 4,
        IO = 5,
        NXIO = 6,
        @"2BIG" = 7,
        NOEXEC = 8,
        BADF = 9,
        CHILD = 10,
        AGAIN = 11,
        NOMEM = 12,
        ACCES = 13,
        FAULT = 14,
        BUSY = 16,
        EXIST = 17,
        XDEV = 18,
        NODEV = 19,
        NOTDIR = 20,
        ISDIR = 21,
        NFILE = 23,
        MFILE = 24,
        NOTTY = 25,
        FBIG = 27,
        NOSPC = 28,
        SPIPE = 29,
        ROFS = 30,
        MLINK = 31,
        PIPE = 32,
        DOM = 33,
        /// Also means `DEADLOCK`.
        DEADLK = 36,
        NAMETOOLONG = 38,
        NOLCK = 39,
        NOSYS = 40,
        NOTEMPTY = 41,

        INVAL = 22,
        RANGE = 34,
        ILSEQ = 42,

        // POSIX Supplement
        ADDRINUSE = 100,
        ADDRNOTAVAIL = 101,
        AFNOSUPPORT = 102,
        ALREADY = 103,
        BADMSG = 104,
        CANCELED = 105,
        CONNABORTED = 106,
        CONNREFUSED = 107,
        CONNRESET = 108,
        DESTADDRREQ = 109,
        HOSTUNREACH = 110,
        IDRM = 111,
        INPROGRESS = 112,
        ISCONN = 113,
        LOOP = 114,
        MSGSIZE = 115,
        NETDOWN = 116,
        NETRESET = 117,
        NETUNREACH = 118,
        NOBUFS = 119,
        NODATA = 120,
        NOLINK = 121,
        NOMSG = 122,
        NOPROTOOPT = 123,
        NOSR = 124,
        NOSTR = 125,
        NOTCONN = 126,
        NOTRECOVERABLE = 127,
        NOTSOCK = 128,
        NOTSUP = 129,
        OPNOTSUPP = 130,
        OTHER = 131,
        OVERFLOW = 132,
        OWNERDEAD = 133,
        PROTO = 134,
        PROTONOSUPPORT = 135,
        PROTOTYPE = 136,
        TIME = 137,
        TIMEDOUT = 138,
        TXTBSY = 139,
        WOULDBLOCK = 140,
        DQUOT = 10069,
        _,
    },
    .macos, .ios, .tvos, .watchos, .visionos => darwin.E,
    .freebsd => freebsd.E,
    .solaris, .illumos => enum(u16) {
        /// No error occurred.
        SUCCESS = 0,
        /// Not super-user
        PERM = 1,
        /// No such file or directory
        NOENT = 2,
        /// No such process
        SRCH = 3,
        /// interrupted system call
        INTR = 4,
        /// I/O error
        IO = 5,
        /// No such device or address
        NXIO = 6,
        /// Arg list too long
        @"2BIG" = 7,
        /// Exec format error
        NOEXEC = 8,
        /// Bad file number
        BADF = 9,
        /// No children
        CHILD = 10,
        /// Resource temporarily unavailable.
        /// also: WOULDBLOCK: Operation would block.
        AGAIN = 11,
        /// Not enough core
        NOMEM = 12,
        /// Permission denied
        ACCES = 13,
        /// Bad address
        FAULT = 14,
        /// Block device required
        NOTBLK = 15,
        /// Mount device busy
        BUSY = 16,
        /// File exists
        EXIST = 17,
        /// Cross-device link
        XDEV = 18,
        /// No such device
        NODEV = 19,
        /// Not a directory
        NOTDIR = 20,
        /// Is a directory
        ISDIR = 21,
        /// Invalid argument
        INVAL = 22,
        /// File table overflow
        NFILE = 23,
        /// Too many open files
        MFILE = 24,
        /// Inappropriate ioctl for device
        NOTTY = 25,
        /// Text file busy
        TXTBSY = 26,
        /// File too large
        FBIG = 27,
        /// No space left on device
        NOSPC = 28,
        /// Illegal seek
        SPIPE = 29,
        /// Read only file system
        ROFS = 30,
        /// Too many links
        MLINK = 31,
        /// Broken pipe
        PIPE = 32,
        /// Math arg out of domain of func
        DOM = 33,
        /// Math result not representable
        RANGE = 34,
        /// No message of desired type
        NOMSG = 35,
        /// Identifier removed
        IDRM = 36,
        /// Channel number out of range
        CHRNG = 37,
        /// Level 2 not synchronized
        L2NSYNC = 38,
        /// Level 3 halted
        L3HLT = 39,
        /// Level 3 reset
        L3RST = 40,
        /// Link number out of range
        LNRNG = 41,
        /// Protocol driver not attached
        UNATCH = 42,
        /// No CSI structure available
        NOCSI = 43,
        /// Level 2 halted
        L2HLT = 44,
        /// Deadlock condition.
        DEADLK = 45,
        /// No record locks available.
        NOLCK = 46,
        /// Operation canceled
        CANCELED = 47,
        /// Operation not supported
        NOTSUP = 48,

        // Filesystem Quotas
        /// Disc quota exceeded
        DQUOT = 49,

        // Convergent Error Returns
        /// invalid exchange
        BADE = 50,
        /// invalid request descriptor
        BADR = 51,
        /// exchange full
        XFULL = 52,
        /// no anode
        NOANO = 53,
        /// invalid request code
        BADRQC = 54,
        /// invalid slot
        BADSLT = 55,
        /// file locking deadlock error
        DEADLOCK = 56,
        /// bad font file fmt
        BFONT = 57,

        // Interprocess Robust Locks
        /// process died with the lock
        OWNERDEAD = 58,
        /// lock is not recoverable
        NOTRECOVERABLE = 59,
        /// locked lock was unmapped
        LOCKUNMAPPED = 72,
        /// Facility is not active
        NOTACTIVE = 73,
        /// multihop attempted
        MULTIHOP = 74,
        /// trying to read unreadable message
        BADMSG = 77,
        /// path name is too long
        NAMETOOLONG = 78,
        /// value too large to be stored in data type
        OVERFLOW = 79,
        /// given log. name not unique
        NOTUNIQ = 80,
        /// f.d. invalid for this operation
        BADFD = 81,
        /// Remote address changed
        REMCHG = 82,

        // Stream Problems
        /// Device not a stream
        NOSTR = 60,
        /// no data (for no delay io)
        NODATA = 61,
        /// timer expired
        TIME = 62,
        /// out of streams resources
        NOSR = 63,
        /// Machine is not on the network
        NONET = 64,
        /// Package not installed
        NOPKG = 65,
        /// The object is remote
        REMOTE = 66,
        /// the link has been severed
        NOLINK = 67,
        /// advertise error
        ADV = 68,
        /// srmount error
        SRMNT = 69,
        /// Communication error on send
        COMM = 70,
        /// Protocol error
        PROTO = 71,

        // Shared Library Problems
        /// Can't access a needed shared lib.
        LIBACC = 83,
        /// Accessing a corrupted shared lib.
        LIBBAD = 84,
        /// .lib section in a.out corrupted.
        LIBSCN = 85,
        /// Attempting to link in too many libs.
        LIBMAX = 86,
        /// Attempting to exec a shared library.
        LIBEXEC = 87,
        /// Illegal byte sequence.
        ILSEQ = 88,
        /// Unsupported file system operation
        NOSYS = 89,
        /// Symbolic link loop
        LOOP = 90,
        /// Restartable system call
        RESTART = 91,
        /// if pipe/FIFO, don't sleep in stream head
        STRPIPE = 92,
        /// directory not empty
        NOTEMPTY = 93,
        /// Too many users (for UFS)
        USERS = 94,

        // BSD Networking Software
        // Argument Errors
        /// Socket operation on non-socket
        NOTSOCK = 95,
        /// Destination address required
        DESTADDRREQ = 96,
        /// Message too long
        MSGSIZE = 97,
        /// Protocol wrong type for socket
        PROTOTYPE = 98,
        /// Protocol not available
        NOPROTOOPT = 99,
        /// Protocol not supported
        PROTONOSUPPORT = 120,
        /// Socket type not supported
        SOCKTNOSUPPORT = 121,
        /// Operation not supported on socket
        OPNOTSUPP = 122,
        /// Protocol family not supported
        PFNOSUPPORT = 123,
        /// Address family not supported by
        AFNOSUPPORT = 124,
        /// Address already in use
        ADDRINUSE = 125,
        /// Can't assign requested address
        ADDRNOTAVAIL = 126,

        // Operational Errors
        /// Network is down
        NETDOWN = 127,
        /// Network is unreachable
        NETUNREACH = 128,
        /// Network dropped connection because
        NETRESET = 129,
        /// Software caused connection abort
        CONNABORTED = 130,
        /// Connection reset by peer
        CONNRESET = 131,
        /// No buffer space available
        NOBUFS = 132,
        /// Socket is already connected
        ISCONN = 133,
        /// Socket is not connected
        NOTCONN = 134,
        /// Can't send after socket shutdown
        SHUTDOWN = 143,
        /// Too many references: can't splice
        TOOMANYREFS = 144,
        /// Connection timed out
        TIMEDOUT = 145,
        /// Connection refused
        CONNREFUSED = 146,
        /// Host is down
        HOSTDOWN = 147,
        /// No route to host
        HOSTUNREACH = 148,
        /// operation already in progress
        ALREADY = 149,
        /// operation now in progress
        INPROGRESS = 150,

        // SUN Network File System
        /// Stale NFS file handle
        STALE = 151,

        _,
    },
    .netbsd => netbsd.E,
    .dragonfly => dragonfly.E,
    .haiku => haiku.E,
    .openbsd => openbsd.E,
    // https://github.com/SerenityOS/serenity/blob/dd59fe35c7e5bbaf6b6b3acb3f9edc56619d4b66/Kernel/API/POSIX/errno.h
    .serenity => enum(c_int) {
        SUCCESS = 0,
        PERM = 1,
        NOENT = 2,
        SRCH = 3,
        INTR = 4,
        IO = 5,
        NXIO = 6,
        @"2BIG" = 7,
        NOEXEC = 8,
        BADF = 9,
        CHILD = 10,
        AGAIN = 11,
        NOMEM = 12,
        ACCES = 13,
        FAULT = 14,
        NOTBLK = 15,
        BUSY = 16,
        EXIST = 17,
        XDEV = 18,
        NODEV = 19,
        NOTDIR = 20,
        ISDIR = 21,
        INVAL = 22,
        NFILE = 23,
        MFILE = 24,
        NOTTY = 25,
        TXTBSY = 26,
        FBIG = 27,
        NOSPC = 28,
        SPIPE = 29,
        ROFS = 30,
        MLINK = 31,
        PIPE = 32,
        RANGE = 33,
        NAMETOOLONG = 34,
        LOOP = 35,
        OVERFLOW = 36,
        OPNOTSUPP = 37,
        NOSYS = 38,
        NOTIMPL = 39,
        AFNOSUPPORT = 40,
        NOTSOCK = 41,
        ADDRINUSE = 42,
        NOTEMPTY = 43,
        DOM = 44,
        CONNREFUSED = 45,
        HOSTDOWN = 46,
        ADDRNOTAVAIL = 47,
        ISCONN = 48,
        CONNABORTED = 49,
        ALREADY = 50,
        CONNRESET = 51,
        DESTADDRREQ = 52,
        HOSTUNREACH = 53,
        ILSEQ = 54,
        MSGSIZE = 55,
        NETDOWN = 56,
        NETUNREACH = 57,
        NETRESET = 58,
        NOBUFS = 59,
        NOLCK = 60,
        NOMSG = 61,
        NOPROTOOPT = 62,
        NOTCONN = 63,
        SHUTDOWN = 64,
        TOOMANYREFS = 65,
        SOCKTNOSUPPORT = 66,
        PROTONOSUPPORT = 67,
        DEADLK = 68,
        TIMEDOUT = 69,
        PROTOTYPE = 70,
        INPROGRESS = 71,
        NOTHREAD = 72,
        PROTO = 73,
        NOTSUP = 74,
        PFNOSUPPORT = 75,
        DIRINTOSELF = 76,
        DQUOT = 77,
        NOTRECOVERABLE = 78,
        CANCELED = 79,
        PROMISEVIOLATION = 80,
        STALE = 81,
        SRCNOTFOUND = 82,
        _,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-elf-symndx"></a>`Elf_Symndx`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const Elf_Symndx = switch (native_os) {
    .linux => linux.Elf_Symndx,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-f"></a>`F`

<details class="declaration-card" open>
<summary>Constant – Command flags for fcntl(2)</summary>

Command flags for fcntl(2).

\`\`\`zig
pub const F = switch (native_os) {
    .linux => linux.F,
    .emscripten => emscripten.F,
    .wasi => struct {
        // Match `F_*` constants from lib/libc/include/wasm-wasi-musl/__header_fcntl.h
        pub const GETFD = 1;
        pub const SETFD = 2;
        pub const GETFL = 3;
        pub const SETFL = 4;
    },
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        /// duplicate file descriptor
        pub const DUPFD = 0;
        /// get file descriptor flags
        pub const GETFD = 1;
        /// set file descriptor flags
        pub const SETFD = 2;
        /// get file status flags
        pub const GETFL = 3;
        /// set file status flags
        pub const SETFL = 4;
        /// get SIGIO/SIGURG proc/pgrp
        pub const GETOWN = 5;
        /// set SIGIO/SIGURG proc/pgrp
        pub const SETOWN = 6;
        /// get record locking information
        pub const GETLK = 7;
        /// set record locking information
        pub const SETLK = 8;
        /// F.SETLK; wait if blocked
        pub const SETLKW = 9;
        /// F.SETLK; wait if blocked, return on timeout
        pub const SETLKWTIMEOUT = 10;
        pub const FLUSH_DATA = 40;
        /// Used for regression test
        pub const CHKCLEAN = 41;
        /// Preallocate storage
        pub const PREALLOCATE = 42;
        /// Truncate a file without zeroing space
        pub const SETSIZE = 43;
        /// Issue an advisory read async with no copy to user
        pub const RDADVISE = 44;
        /// turn read ahead off/on for this fd
        pub const RDAHEAD = 45;
        /// turn data caching off/on for this fd
        pub const NOCACHE = 48;
        /// file offset to device offset
        pub const LOG2PHYS = 49;
        /// return the full path of the fd
        pub const GETPATH = 50;
        /// fsync + ask the drive to flush to the media
        pub const FULLFSYNC = 51;
        /// find which component (if any) is a package
        pub const PATHPKG_CHECK = 52;
        /// "freeze" all fs operations
        pub const FREEZE_FS = 53;
        /// "thaw" all fs operations
        pub const THAW_FS = 54;
        /// turn data caching off/on (globally) for this file
        pub const GLOBAL_NOCACHE = 55;
        /// add detached signatures
        pub const ADDSIGS = 59;
        /// add signature from same file (used by dyld for shared libs)
        pub const ADDFILESIGS = 61;
        /// used in conjunction with F.NOCACHE to indicate that DIRECT, synchronous writes
        /// should not be used (i.e. its ok to temporarily create cached pages)
        pub const NODIRECT = 62;
        /// Get the protection class of a file from the EA, returns int
        pub const GETPROTECTIONCLASS = 63;
        /// Set the protection class of a file for the EA, requires int
        pub const SETPROTECTIONCLASS = 64;
        /// file offset to device offset, extended
        pub const LOG2PHYS_EXT = 65;
        /// get record locking information, per-process
        pub const GETLKPID = 66;
        /// Mark the file as being the backing store for another filesystem
        pub const SETBACKINGSTORE = 70;
        /// return the full path of the FD, but error in specific mtmd circumstances
        pub const GETPATH_MTMINFO = 71;
        /// Returns the code directory, with associated hashes, to the caller
        pub const GETCODEDIR = 72;
        /// No SIGPIPE generated on EPIPE
        pub const SETNOSIGPIPE = 73;
        /// Status of SIGPIPE for this fd
        pub const GETNOSIGPIPE = 74;
        /// For some cases, we need to rewrap the key for AKS/MKB
        pub const TRANSCODEKEY = 75;
        /// file being written to a by single writer... if throttling enabled, writes
        /// may be broken into smaller chunks with throttling in between
        pub const SINGLE_WRITER = 76;
        /// Get the protection version number for this filesystem
        pub const GETPROTECTIONLEVEL = 77;
        /// Add detached code signatures (used by dyld for shared libs)
        pub const FINDSIGS = 78;
        /// Add signature from same file, only if it is signed by Apple (used by dyld for simulator)
        pub const ADDFILESIGS_FOR_DYLD_SIM = 83;
        /// fsync + issue barrier to drive
        pub const BARRIERFSYNC = 85;
        /// Add signature from same file, return end offset in structure on success
        pub const ADDFILESIGS_RETURN = 97;
        /// Check if Library Validation allows this Mach-O file to be mapped into the calling process
        pub const CHECK_LV = 98;
        /// Deallocate a range of the file
        pub const PUNCHHOLE = 99;
        /// Trim an active file
        pub const TRIM_ACTIVE_FILE = 100;
        /// mark the dup with FD_CLOEXEC
        pub const DUPFD_CLOEXEC = 67;
        /// shared or read lock
        pub const RDLCK = 1;
        /// unlock
        pub const UNLCK = 2;
        /// exclusive or write lock
        pub const WRLCK = 3;
    },
    .freebsd => struct {
        /// Duplicate file descriptor.
        pub const DUPFD = 0;
        /// Get file descriptor flags.
        pub const GETFD = 1;
        /// Set file descriptor flags.
        pub const SETFD = 2;
        /// Get file status flags.
        pub const GETFL = 3;
        /// Set file status flags.
        pub const SETFL = 4;

        /// Get SIGIO/SIGURG proc/pgrrp.
        pub const GETOWN = 5;
        /// Set SIGIO/SIGURG proc/pgrrp.
        pub const SETOWN = 6;

        /// Get record locking information.
        pub const GETLK = 11;
        /// Set record locking information.
        pub const SETLK = 12;
        /// Set record locking information and wait if blocked.
        pub const SETLKW = 13;

        /// Debugging support for remote locks.
        pub const SETLK_REMOTE = 14;
        /// Read ahead.
        pub const READAHEAD = 15;

        /// DUPFD with FD_CLOEXEC set.
        pub const DUPFD_CLOEXEC = 17;
        /// DUP2FD with FD_CLOEXEC set.
        pub const DUP2FD_CLOEXEC = 18;

        pub const ADD_SEALS = 19;
        pub const GET_SEALS = 20;
        /// Return `kinfo_file` for a file descriptor.
        pub const KINFO = 22;

        // Seals (ADD_SEALS, GET_SEALS)
        /// Prevent adding sealings.
        pub const SEAL_SEAL = 0x0001;
        /// May not shrink
        pub const SEAL_SHRINK = 0x0002;
        /// May not grow.
        pub const SEAL_GROW = 0x0004;
        /// May not write.
        pub const SEAL_WRITE = 0x0008;

        // Record locking flags (GETLK, SETLK, SETLKW).
        /// Shared or read lock.
        pub const RDLCK = 1;
        /// Unlock.
        pub const UNLCK = 2;
        /// Exclusive or write lock.
        pub const WRLCK = 3;
        /// Purge locks for a given system ID.
        pub const UNLCKSYS = 4;
        /// Cancel an async lock request.
        pub const CANCEL = 5;

        pub const SETOWN_EX = 15;
        pub const GETOWN_EX = 16;

        pub const GETOWNER_UIDS = 17;
    },
    .solaris, .illumos => struct {
        /// Unlock a previously locked region
        pub const ULOCK = 0;
        /// Lock a region for exclusive use
        pub const LOCK = 1;
        /// Test and lock a region for exclusive use
        pub const TLOCK = 2;
        /// Test a region for other processes locks
        pub const TEST = 3;

        /// Duplicate fildes
        pub const DUPFD = 0;
        /// Get fildes flags
        pub const GETFD = 1;
        /// Set fildes flags
        pub const SETFD = 2;
        /// Get file flags
        pub const GETFL = 3;
        /// Get file flags including open-only flags
        pub const GETXFL = 45;
        /// Set file flags
        pub const SETFL = 4;

        /// Unused
        pub const CHKFL = 8;
        /// Duplicate fildes at third arg
        pub const DUP2FD = 9;
        /// Like DUP2FD with O_CLOEXEC set EINVAL is fildes matches arg1
        pub const DUP2FD_CLOEXEC = 36;
        /// Like DUPFD with O_CLOEXEC set
        pub const DUPFD_CLOEXEC = 37;

        /// Is the file desc. a stream ?
        pub const ISSTREAM = 13;
        /// Turn on private access to file
        pub const PRIV = 15;
        /// Turn off private access to file
        pub const NPRIV = 16;
        /// UFS quota call
        pub const QUOTACTL = 17;
        /// Get number of BLKSIZE blocks allocated
        pub const BLOCKS = 18;
        /// Get optimal I/O block size
        pub const BLKSIZE = 19;
        /// Get owner (socket emulation)
        pub const GETOWN = 23;
        /// Set owner (socket emulation)
        pub const SETOWN = 24;
        /// Object reuse revoke access to file desc.
        pub const REVOKE = 25;
        /// Does vp have NFS locks private to lock manager
        pub const HASREMOTELOCKS = 26;

        /// Set file lock
        pub const SETLK = 6;
        /// Set file lock and wait
        pub const SETLKW = 7;
        /// Allocate file space
        pub const ALLOCSP = 10;
        /// Free file space
        pub const FREESP = 11;
        /// Get file lock
        pub const GETLK = 14;
        /// Get file lock owned by file
        pub const OFD_GETLK = 47;
        /// Set file lock owned by file
        pub const OFD_SETLK = 48;
        /// Set file lock owned by file and wait
        pub const OFD_SETLKW = 49;
        /// Set a file share reservation
        pub const SHARE = 40;
        /// Remove a file share reservation
        pub const UNSHARE = 41;
        /// Create Poison FD
        pub const BADFD = 46;

        /// Read lock
        pub const RDLCK = 1;
        /// Write lock
        pub const WRLCK = 2;
        /// Remove lock(s)
        pub const UNLCK = 3;
        /// remove remote locks for a given system
        pub const UNLKSYS = 4;

        // f_access values
        /// Read-only share access
        pub const RDACC = 0x1;
        /// Write-only share access
        pub const WRACC = 0x2;
        /// Read-Write share access
        pub const RWACC = 0x3;

        // f_deny values
        /// Don't deny others access
        pub const NODNY = 0x0;
        /// Deny others read share access
        pub const RDDNY = 0x1;
        /// Deny others write share access
        pub const WRDNY = 0x2;
        /// Deny others read or write share access
        pub const RWDNY = 0x3;
        /// private flag: Deny delete share access
        pub const RMDNY = 0x4;
    },
    .netbsd => struct {
        pub const DUPFD = 0;
        pub const GETFD = 1;
        pub const SETFD = 2;
        pub const GETFL = 3;
        pub const SETFL = 4;
        pub const GETOWN = 5;
        pub const SETOWN = 6;
        pub const GETLK = 7;
        pub const SETLK = 8;
        pub const SETLKW = 9;
        pub const CLOSEM = 10;
        pub const MAXFD = 11;
        pub const DUPFD_CLOEXEC = 12;
        pub const GETNOSIGPIPE = 13;
        pub const SETNOSIGPIPE = 14;
        pub const GETPATH = 15;

        pub const RDLCK = 1;
        pub const WRLCK = 3;
        pub const UNLCK = 2;
    },
    .dragonfly => struct {
        pub const ULOCK = 0;
        pub const LOCK = 1;
        pub const TLOCK = 2;
        pub const TEST = 3;

        pub const DUPFD = 0;
        pub const GETFD = 1;
        pub const RDLCK = 1;
        pub const SETFD = 2;
        pub const UNLCK = 2;
        pub const WRLCK = 3;
        pub const GETFL = 3;
        pub const SETFL = 4;
        pub const GETOWN = 5;
        pub const SETOWN = 6;
        pub const GETLK = 7;
        pub const SETLK = 8;
        pub const SETLKW = 9;
        pub const DUP2FD = 10;
        pub const DUPFD_CLOEXEC = 17;
        pub const DUP2FD_CLOEXEC = 18;
        pub const GETPATH = 19;
    },
    .haiku => struct {
        pub const DUPFD = 0x0001;
        pub const GETFD = 0x0002;
        pub const SETFD = 0x0004;
        pub const GETFL = 0x0008;
        pub const SETFL = 0x0010;

        pub const GETLK = 0x0020;
        pub const SETLK = 0x0080;
        pub const SETLKW = 0x0100;
        pub const DUPFD_CLOEXEC = 0x0200;

        pub const RDLCK = 0x0040;
        pub const UNLCK = 0x0200;
        pub const WRLCK = 0x0400;
    },
    .openbsd => struct {
        pub const DUPFD = 0;
        pub const GETFD = 1;
        pub const SETFD = 2;
        pub const GETFL = 3;
        pub const SETFL = 4;

        pub const GETOWN = 5;
        pub const SETOWN = 6;

        pub const GETLK = 7;
        pub const SETLK = 8;
        pub const SETLKW = 9;

        pub const RDLCK = 1;
        pub const UNLCK = 2;
        pub const WRLCK = 3;
    },
    .serenity => struct {
        // https://github.com/SerenityOS/serenity/blob/2808b0376406a40e31293bb3bcb9170374e90506/Kernel/API/POSIX/fcntl.h#L15-L24
        pub const DUPFD = 0;
        pub const GETFD = 1;
        pub const SETFD = 2;
        pub const GETFL = 3;
        pub const SETFL = 4;
        pub const ISTTY = 5;
        pub const GETLK = 6;
        pub const SETLK = 7;
        pub const SETLKW = 8;
        pub const DUPFD_CLOEXEC = 9;

        // https://github.com/SerenityOS/serenity/blob/2808b0376406a40e31293bb3bcb9170374e90506/Kernel/API/POSIX/fcntl.h#L45-L47
        pub const RDLCK = 0;
        pub const WRLCK = 1;
        pub const UNLCK = 2;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-fd-cloexec"></a>`FD_CLOEXEC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const FD_CLOEXEC = switch (native_os) {
    .linux => linux.FD_CLOEXEC,
    .emscripten => emscripten.FD_CLOEXEC,
    else => 1,
}
\`\`\`

</details>

---

### <a id="const-f-ok"></a>`F_OK`

<details class="declaration-card" open>
<summary>Constant – Test for existence of file</summary>

Test for existence of file.

\`\`\`zig
pub const F_OK = switch (native_os) {
    .linux => linux.F_OK,
    .emscripten => emscripten.F_OK,
    else => 0,
}
\`\`\`

</details>

---

### <a id="const-x-ok"></a>`X_OK`

<details class="declaration-card" open>
<summary>Constant – Test for execute or search permission</summary>

Test for execute or search permission.

\`\`\`zig
pub const X_OK = switch (native_os) {
    .linux => linux.X_OK,
    .emscripten => emscripten.X_OK,
    else => 1,
}
\`\`\`

</details>

---

### <a id="const-w-ok"></a>`W_OK`

<details class="declaration-card" open>
<summary>Constant – Test for write permission</summary>

Test for write permission.

\`\`\`zig
pub const W_OK = switch (native_os) {
    .linux => linux.W_OK,
    .emscripten => emscripten.W_OK,
    else => 2,
}
\`\`\`

</details>

---

### <a id="const-r-ok"></a>`R_OK`

<details class="declaration-card" open>
<summary>Constant – Test for read permission</summary>

Test for read permission.

\`\`\`zig
pub const R_OK = switch (native_os) {
    .linux => linux.R_OK,
    .emscripten => emscripten.R_OK,
    else => 4,
}
\`\`\`

</details>

---

### <a id="const-flock"></a>`Flock`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const Flock = switch (native_os) {
    .linux => linux.Flock,
    .emscripten => emscripten.Flock,
    .openbsd, .dragonfly, .netbsd, .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        start: off_t,
        len: off_t,
        pid: pid_t,
        type: i16,
        whence: i16,
    },
    .freebsd => extern struct {
        /// Starting offset.
        start: off_t,
        /// Number of consecutive bytes to be locked.
        /// A value of 0 means to the end of the file.
        len: off_t,
        /// Lock owner.
        pid: pid_t,
        /// Lock type.
        type: i16,
        /// Type of the start member.
        whence: i16,
        /// Remote system id or zero for local.
        sysid: i32,
    },
    .solaris, .illumos => extern struct {
        type: c_short,
        whence: c_short,
        start: off_t,
        // len == 0 means until end of file.
        len: off_t,
        sysid: c_int,
        pid: pid_t,
        __pad: [4]c_long,
    },
    .haiku => extern struct {
        type: i16,
        whence: i16,
        start: off_t,
        len: off_t,
        pid: pid_t,
    },
    // https://github.com/SerenityOS/serenity/blob/2808b0376406a40e31293bb3bcb9170374e90506/Kernel/API/POSIX/fcntl.h#L54-L60
    .serenity => extern struct {
        type: c_short,
        whence: c_short,
        start: off_t,
        len: off_t,
        pid: pid_t,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-host-name-max"></a>`HOST_NAME_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const HOST_NAME_MAX = switch (native_os) {
    .linux => linux.HOST_NAME_MAX,
    .macos, .ios, .tvos, .watchos, .visionos => 72,
    .openbsd, .haiku, .dragonfly, .netbsd, .solaris, .illumos, .freebsd => 255,
    // https://github.com/SerenityOS/serenity/blob/c87557e9c1865fa1a6440de34ff6ce6fc858a2b7/Kernel/API/POSIX/sys/limits.h#L22
    .serenity => 64,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-iov-max"></a>`IOV_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const IOV_MAX = switch (native_os) {
    .linux => linux.IOV_MAX,
    .emscripten => emscripten.IOV_MAX,
    // https://github.com/SerenityOS/serenity/blob/098af0f846a87b651731780ff48420205fd33754/Kernel/API/POSIX/sys/uio.h#L16
    .openbsd, .haiku, .solaris, .illumos, .wasi, .serenity => 1024,
    .macos, .ios, .tvos, .watchos, .visionos => 16,
    .dragonfly, .netbsd, .freebsd => KERN.IOV_MAX,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-ctl"></a>`CTL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const CTL = switch (native_os) {
    .freebsd => struct {
        pub const KERN = 1;
        pub const DEBUG = 5;
    },
    .netbsd => struct {
        pub const KERN = 1;
        pub const DEBUG = 5;
    },
    .dragonfly => struct {
        pub const UNSPEC = 0;
        pub const KERN = 1;
        pub const VM = 2;
        pub const VFS = 3;
        pub const NET = 4;
        pub const DEBUG = 5;
        pub const HW = 6;
        pub const MACHDEP = 7;
        pub const USER = 8;
        pub const LWKT = 10;
        pub const MAXID = 11;
        pub const MAXNAME = 12;
    },
    .openbsd => struct {
        pub const UNSPEC = 0;
        pub const KERN = 1;
        pub const VM = 2;
        pub const FS = 3;
        pub const NET = 4;
        pub const DEBUG = 5;
        pub const HW = 6;
        pub const MACHDEP = 7;

        pub const DDB = 9;
        pub const VFS = 10;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-kern"></a>`KERN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const KERN = switch (native_os) {
    .freebsd => struct {
        /// struct: process entries
        pub const PROC = 14;
        /// path to executable
        pub const PROC_PATHNAME = 12;
        /// file descriptors for process
        pub const PROC_FILEDESC = 33;
        pub const IOV_MAX = 35;
    },
    .netbsd => struct {
        /// struct: process argv/env
        pub const PROC_ARGS = 48;
        /// path to executable
        pub const PROC_PATHNAME = 5;
        pub const IOV_MAX = 38;
    },
    .dragonfly => struct {
        pub const PROC_ALL = 0;
        pub const OSTYPE = 1;
        pub const PROC_PID = 1;
        pub const OSRELEASE = 2;
        pub const PROC_PGRP = 2;
        pub const OSREV = 3;
        pub const PROC_SESSION = 3;
        pub const VERSION = 4;
        pub const PROC_TTY = 4;
        pub const MAXVNODES = 5;
        pub const PROC_UID = 5;
        pub const MAXPROC = 6;
        pub const PROC_RUID = 6;
        pub const MAXFILES = 7;
        pub const PROC_ARGS = 7;
        pub const ARGMAX = 8;
        pub const PROC_CWD = 8;
        pub const PROC_PATHNAME = 9;
        pub const SECURELVL = 9;
        pub const PROC_SIGTRAMP = 10;
        pub const HOSTNAME = 10;
        pub const HOSTID = 11;
        pub const CLOCKRATE = 12;
        pub const VNODE = 13;
        pub const PROC = 14;
        pub const FILE = 15;
        pub const PROC_FLAGMASK = 16;
        pub const PROF = 16;
        pub const PROC_FLAG_LWP = 16;
        pub const POSIX1 = 17;
        pub const NGROUPS = 18;
        pub const JOB_CONTROL = 19;
        pub const SAVED_IDS = 20;
        pub const BOOTTIME = 21;
        pub const NISDOMAINNAME = 22;
        pub const UPDATEINTERVAL = 23;
        pub const OSRELDATE = 24;
        pub const NTP_PLL = 25;
        pub const BOOTFILE = 26;
        pub const MAXFILESPERPROC = 27;
        pub const MAXPROCPERUID = 28;
        pub const DUMPDEV = 29;
        pub const IPC = 30;
        pub const DUMMY = 31;
        pub const PS_STRINGS = 32;
        pub const USRSTACK = 33;
        pub const LOGSIGEXIT = 34;
        pub const IOV_MAX = 35;
        pub const MAXPOSIXLOCKSPERUID = 36;
        pub const MAXID = 37;
    },
    .openbsd => struct {
        pub const OSTYPE = 1;
        pub const OSRELEASE = 2;
        pub const OSREV = 3;
        pub const VERSION = 4;
        pub const MAXVNODES = 5;
        pub const MAXPROC = 6;
        pub const MAXFILES = 7;
        pub const ARGMAX = 8;
        pub const SECURELVL = 9;
        pub const HOSTNAME = 10;
        pub const HOSTID = 11;
        pub const CLOCKRATE = 12;

        pub const PROF = 16;
        pub const POSIX1 = 17;
        pub const NGROUPS = 18;
        pub const JOB_CONTROL = 19;
        pub const SAVED_IDS = 20;
        pub const BOOTTIME = 21;
        pub const DOMAINNAME = 22;
        pub const MAXPARTITIONS = 23;
        pub const RAWPARTITION = 24;
        pub const MAXTHREAD = 25;
        pub const NTHREADS = 26;
        pub const OSVERSION = 27;
        pub const SOMAXCONN = 28;
        pub const SOMINCONN = 29;

        pub const NOSUIDCOREDUMP = 32;
        pub const FSYNC = 33;
        pub const SYSVMSG = 34;
        pub const SYSVSEM = 35;
        pub const SYSVSHM = 36;

        pub const MSGBUFSIZE = 38;
        pub const MALLOCSTATS = 39;
        pub const CPTIME = 40;
        pub const NCHSTATS = 41;
        pub const FORKSTAT = 42;
        pub const NSELCOLL = 43;
        pub const TTY = 44;
        pub const CCPU = 45;
        pub const FSCALE = 46;
        pub const NPROCS = 47;
        pub const MSGBUF = 48;
        pub const POOL = 49;
        pub const STACKGAPRANDOM = 50;
        pub const SYSVIPC_INFO = 51;
        pub const ALLOWKMEM = 52;
        pub const WITNESSWATCH = 53;
        pub const SPLASSERT = 54;
        pub const PROC_ARGS = 55;
        pub const NFILES = 56;
        pub const TTYCOUNT = 57;
        pub const NUMVNODES = 58;
        pub const MBSTAT = 59;
        pub const WITNESS = 60;
        pub const SEMINFO = 61;
        pub const SHMINFO = 62;
        pub const INTRCNT = 63;
        pub const WATCHDOG = 64;
        pub const ALLOWDT = 65;
        pub const PROC = 66;
        pub const MAXCLUSTERS = 67;
        pub const EVCOUNT = 68;
        pub const TIMECOUNTER = 69;
        pub const MAXLOCKSPERUID = 70;
        pub const CPTIME2 = 71;
        pub const CACHEPCT = 72;
        pub const FILE = 73;
        pub const WXABORT = 74;
        pub const CONSDEV = 75;
        pub const NETLIVELOCKS = 76;
        pub const POOL_DEBUG = 77;
        pub const PROC_CWD = 78;
        pub const PROC_NOBROADCASTKILL = 79;
        pub const PROC_VMMAP = 80;
        pub const GLOBAL_PTRACE = 81;
        pub const CONSBUFSIZE = 82;
        pub const CONSBUF = 83;
        pub const AUDIO = 84;
        pub const CPUSTATS = 85;
        pub const PFSTATUS = 86;
        pub const TIMEOUT_STATS = 87;
        pub const UTC_OFFSET = 88;
        pub const VIDEO = 89;

        pub const PROC_ALL = 0;
        pub const PROC_PID = 1;
        pub const PROC_PGRP = 2;
        pub const PROC_SESSION = 3;
        pub const PROC_TTY = 4;
        pub const PROC_UID = 5;
        pub const PROC_RUID = 6;
        pub const PROC_KTHREAD = 7;
        pub const PROC_SHOW_THREADS = 0x40000000;

        pub const PROC_ARGV = 1;
        pub const PROC_NARGV = 2;
        pub const PROC_ENV = 3;
        pub const PROC_NENV = 4;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-madv"></a>`MADV`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MADV = switch (native_os) {
    .linux => linux.MADV,
    .emscripten => emscripten.MADV,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const NORMAL = 0;
        pub const RANDOM = 1;
        pub const SEQUENTIAL = 2;
        pub const WILLNEED = 3;
        pub const DONTNEED = 4;
        pub const FREE = 5;
        pub const ZERO_WIRED_PAGES = 6;
        pub const FREE_REUSABLE = 7;
        pub const FREE_REUSE = 8;
        pub const CAN_REUSE = 9;
        pub const PAGEOUT = 10;
        pub const ZERO = 11;
    },
    .freebsd => struct {
        pub const NORMAL = 0;
        pub const RANDOM = 1;
        pub const SEQUENTIAL = 2;
        pub const WILLNEED = 3;
        pub const DONTNEED = 4;
        pub const FREE = 5;
        pub const NOSYNC = 6;
        pub const AUTOSYNC = 7;
        pub const NOCORE = 8;
        pub const CORE = 9;
        pub const PROTECT = 10;
    },
    .solaris, .illumos => struct {
        /// no further special treatment
        pub const NORMAL = 0;
        /// expect random page references
        pub const RANDOM = 1;
        /// expect sequential page references
        pub const SEQUENTIAL = 2;
        /// will need these pages
        pub const WILLNEED = 3;
        /// don't need these pages
        pub const DONTNEED = 4;
        /// contents can be freed
        pub const FREE = 5;
        /// default access
        pub const ACCESS_DEFAULT = 6;
        /// next LWP to access heavily
        pub const ACCESS_LWP = 7;
        /// many processes to access heavily
        pub const ACCESS_MANY = 8;
        /// contents will be purged
        pub const PURGE = 9;
    },
    .dragonfly => struct {
        pub const SEQUENTIAL = 2;
        pub const CONTROL_END = SETMAP;
        pub const DONTNEED = 4;
        pub const RANDOM = 1;
        pub const WILLNEED = 3;
        pub const NORMAL = 0;
        pub const CONTROL_START = INVAL;
        pub const FREE = 5;
        pub const NOSYNC = 6;
        pub const AUTOSYNC = 7;
        pub const NOCORE = 8;
        pub const CORE = 9;
        pub const INVAL = 10;
        pub const SETMAP = 11;
    },
    // https://github.com/SerenityOS/serenity/blob/6d59d4d3d9e76e39112842ec487840828f1c9bfe/Kernel/API/POSIX/sys/mman.h#L35-L41
    .serenity => struct {
        pub const NORMAL = 0x0;
        pub const SET_VOLATILE = 0x1;
        pub const SET_NONVOLATILE = 0x2;
        pub const DONTNEED = 0x3;
        pub const WILLNEED = 0x4;
        pub const SEQUENTIAL = 0x5;
        pub const RANDOM = 0x6;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-msf"></a>`MSF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MSF = switch (native_os) {
    .linux => linux.MSF,
    .emscripten => emscripten.MSF,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const ASYNC = 0x1;
        pub const INVALIDATE = 0x2;
        /// invalidate, leave mapped
        pub const KILLPAGES = 0x4;
        /// deactivate, leave mapped
        pub const DEACTIVATE = 0x8;
        pub const SYNC = 0x10;
    },
    .openbsd, .haiku, .dragonfly, .netbsd, .solaris, .illumos, .freebsd => struct {
        pub const ASYNC = 1;
        pub const INVALIDATE = 2;
        pub const SYNC = 4;
    },
    // https://github.com/SerenityOS/serenity/blob/6d59d4d3d9e76e39112842ec487840828f1c9bfe/Kernel/API/POSIX/sys/mman.h#L50-L52
    .serenity => struct {
        pub const SYNC = 1;
        pub const ASYNC = 2;
        pub const INVALIDATE = 4;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-name-max"></a>`NAME_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const NAME_MAX = switch (native_os) {
    .linux => linux.NAME_MAX,
    .emscripten => emscripten.NAME_MAX,
    // Haiku's headers make this 256, to contain room for the terminating null
    // character, but POSIX definition says that NAME_MAX does not include the
    // terminating null.
    // https://github.com/SerenityOS/serenity/blob/c87557e9c1865fa1a6440de34ff6ce6fc858a2b7/Kernel/API/POSIX/sys/limits.h#L20
    .haiku, .openbsd, .dragonfly, .netbsd, .solaris, .illumos, .freebsd, .macos, .ios, .tvos, .watchos, .visionos, .serenity => 255,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-path-max"></a>`PATH_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PATH_MAX = switch (native_os) {
    .linux => linux.PATH_MAX,
    .emscripten => emscripten.PATH_MAX,
    .wasi => 4096,
    .windows => 260,
    .openbsd, .haiku, .dragonfly, .netbsd, .solaris, .illumos, .freebsd, .macos, .ios, .tvos, .watchos, .visionos, .serenity => 1024,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-poll"></a>`POLL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const POLL = switch (native_os) {
    .linux => linux.POLL,
    .emscripten => emscripten.POLL,
    .wasi => struct {
        pub const RDNORM = 0x1;
        pub const WRNORM = 0x2;
        pub const IN = RDNORM;
        pub const OUT = WRNORM;
        pub const ERR = 0x1000;
        pub const HUP = 0x2000;
        pub const NVAL = 0x4000;
    },
    .windows => ws2_32.POLL,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const IN = 0x001;
        pub const PRI = 0x002;
        pub const OUT = 0x004;
        pub const RDNORM = 0x040;
        pub const WRNORM = OUT;
        pub const RDBAND = 0x080;
        pub const WRBAND = 0x100;

        pub const EXTEND = 0x0200;
        pub const ATTRIB = 0x0400;
        pub const NLINK = 0x0800;
        pub const WRITE = 0x1000;

        pub const ERR = 0x008;
        pub const HUP = 0x010;
        pub const NVAL = 0x020;

        pub const STANDARD = IN | PRI | OUT | RDNORM | RDBAND | WRBAND | ERR | HUP | NVAL;
    },
    .freebsd => struct {
        /// any readable data available.
        pub const IN = 0x0001;
        /// OOB/Urgent readable data.
        pub const PRI = 0x0002;
        /// file descriptor is writeable.
        pub const OUT = 0x0004;
        /// non-OOB/URG data available.
        pub const RDNORM = 0x0040;
        /// no write type differentiation.
        pub const WRNORM = OUT;
        /// OOB/Urgent readable data.
        pub const RDBAND = 0x0080;
        /// OOB/Urgent data can be written.
        pub const WRBAND = 0x0100;
        /// like IN, except ignore EOF.
        pub const INIGNEOF = 0x2000;
        /// some poll error occurred.
        pub const ERR = 0x0008;
        /// file descriptor was "hung up".
        pub const HUP = 0x0010;
        /// requested events "invalid".
        pub const NVAL = 0x0020;

        pub const STANDARD = IN | PRI | OUT | RDNORM | RDBAND | WRBAND | ERR | HUP | NVAL;
    },
    .solaris, .illumos => struct {
        pub const IN = 0x0001;
        pub const PRI = 0x0002;
        pub const OUT = 0x0004;
        pub const RDNORM = 0x0040;
        pub const WRNORM = .OUT;
        pub const RDBAND = 0x0080;
        pub const WRBAND = 0x0100;
        /// Read-side hangup.
        pub const RDHUP = 0x4000;

        /// Non-testable events (may not be specified in events).
        pub const ERR = 0x0008;
        pub const HUP = 0x0010;
        pub const NVAL = 0x0020;

        /// Events to control `/dev/poll` (not specified in revents)
        pub const REMOVE = 0x0800;
        pub const ONESHOT = 0x1000;
        pub const ET = 0x2000;
    },
    .dragonfly, .netbsd => struct {
        /// Testable events (may be specified in events field).
        pub const IN = 0x0001;
        pub const PRI = 0x0002;
        pub const OUT = 0x0004;
        pub const RDNORM = 0x0040;
        pub const WRNORM = OUT;
        pub const RDBAND = 0x0080;
        pub const WRBAND = 0x0100;

        /// Non-testable events (may not be specified in events field).
        pub const ERR = 0x0008;
        pub const HUP = 0x0010;
        pub const NVAL = 0x0020;
    },
    .haiku => struct {
        /// any readable data available
        pub const IN = 0x0001;
        /// file descriptor is writeable
        pub const OUT = 0x0002;
        pub const RDNORM = IN;
        pub const WRNORM = OUT;
        /// priority readable data
        pub const RDBAND = 0x0008;
        /// priority data can be written
        pub const WRBAND = 0x0010;
        /// high priority readable data
        pub const PRI = 0x0020;

        /// errors pending
        pub const ERR = 0x0004;
        /// disconnected
        pub const HUP = 0x0080;
        /// invalid file descriptor
        pub const NVAL = 0x1000;
    },
    .openbsd => struct {
        pub const IN = 0x0001;
        pub const PRI = 0x0002;
        pub const OUT = 0x0004;
        pub const ERR = 0x0008;
        pub const HUP = 0x0010;
        pub const NVAL = 0x0020;
        pub const RDNORM = 0x0040;
        pub const NORM = RDNORM;
        pub const WRNORM = OUT;
        pub const RDBAND = 0x0080;
        pub const WRBAND = 0x0100;
    },
    // https://github.com/SerenityOS/serenity/blob/265764ff2fec038855193296588a887fc322d76a/Kernel/API/POSIX/poll.h#L15-L24
    .serenity => struct {
        pub const IN = 0x0001;
        pub const PRI = 0x0002;
        pub const OUT = 0x0004;
        pub const ERR = 0x0008;
        pub const HUP = 0x0010;
        pub const NVAL = 0x0020;
        pub const RDNORM = IN;
        pub const WRNORM = OUT;
        pub const WRBAND = 0x1000;
        pub const RDHUP = 0x2000;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-prot"></a>`PROT`

<details class="declaration-card" open>
<summary>Constant – Basic memory protection flags</summary>

Basic memory protection flags

\`\`\`zig
pub const PROT = switch (native_os) {
    .linux => linux.PROT,
    .emscripten => emscripten.PROT,
    // https://github.com/SerenityOS/serenity/blob/6d59d4d3d9e76e39112842ec487840828f1c9bfe/Kernel/API/POSIX/sys/mman.h#L28-L31
    .openbsd, .haiku, .dragonfly, .netbsd, .solaris, .illumos, .freebsd, .windows, .serenity => struct {
        /// page can not be accessed
        pub const NONE = 0x0;
        /// page can be read
        pub const READ = 0x1;
        /// page can be written
        pub const WRITE = 0x2;
        /// page can be executed
        pub const EXEC = 0x4;
    },
    .macos, .ios, .tvos, .watchos, .visionos => struct {
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
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-reg"></a>`REG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const REG = switch (native_os) {
    .linux => linux.REG,
    .emscripten => emscripten.REG,
    .freebsd => switch (builtin.cpu.arch) {
        .aarch64 => struct {
            pub const FP = 29;
            pub const SP = 31;
            pub const PC = 32;
        },
        .arm => struct {
            pub const FP = 11;
            pub const SP = 13;
            pub const PC = 15;
        },
        .x86_64 => struct {
            pub const RBP = 12;
            pub const RIP = 21;
            pub const RSP = 24;
        },
        else => struct {},
    },
    .solaris, .illumos => struct {
        pub const R15 = 0;
        pub const R14 = 1;
        pub const R13 = 2;
        pub const R12 = 3;
        pub const R11 = 4;
        pub const R10 = 5;
        pub const R9 = 6;
        pub const R8 = 7;
        pub const RDI = 8;
        pub const RSI = 9;
        pub const RBP = 10;
        pub const RBX = 11;
        pub const RDX = 12;
        pub const RCX = 13;
        pub const RAX = 14;
        pub const RIP = 17;
        pub const RSP = 20;
    },
    .netbsd => switch (builtin.cpu.arch) {
        .aarch64, .aarch64_be => struct {
            pub const FP = 29;
            pub const SP = 31;
            pub const PC = 32;
        },
        .arm, .armeb => struct {
            pub const FP = 11;
            pub const SP = 13;
            pub const PC = 15;
        },
        .x86 => struct {
            pub const GS = 0;
            pub const FS = 1;
            pub const ES = 2;
            pub const DS = 3;
            pub const EDI = 4;
            pub const ESI = 5;
            pub const EBP = 6;
            pub const ESP = 7;
            pub const EBX = 8;
            pub const EDX = 9;
            pub const ECX = 10;
            pub const EAX = 11;
            pub const TRAPNO = 12;
            pub const ERR = 13;
            pub const EIP = 14;
            pub const CS = 15;
            pub const EFL = 16;
            pub const UESP = 17;
            pub const SS = 18;
        },
        .x86_64 => struct {
            pub const RDI = 0;
            pub const RSI = 1;
            pub const RDX = 2;
            pub const RCX = 3;
            pub const R8 = 4;
            pub const R9 = 5;
            pub const R10 = 6;
            pub const R11 = 7;
            pub const R12 = 8;
            pub const R13 = 9;
            pub const R14 = 10;
            pub const R15 = 11;
            pub const RBP = 12;
            pub const RBX = 13;
            pub const RAX = 14;
            pub const GS = 15;
            pub const FS = 16;
            pub const ES = 17;
            pub const DS = 18;
            pub const TRAPNO = 19;
            pub const ERR = 20;
            pub const RIP = 21;
            pub const CS = 22;
            pub const RFLAGS = 23;
            pub const RSP = 24;
            pub const SS = 25;
        },
        else => struct {},
    },
    else => struct {},
}
\`\`\`

</details>

---

### <a id="const-rlim"></a>`RLIM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const RLIM = switch (native_os) {
    .linux => linux.RLIM,
    .emscripten => emscripten.RLIM,
    // https://github.com/SerenityOS/serenity/blob/aae106e37b48f2158e68902293df1e4bf7b80c0f/Userland/Libraries/LibC/sys/resource.h#L52
    .openbsd, .haiku, .dragonfly, .netbsd, .freebsd, .macos, .ios, .tvos, .watchos, .visionos, .serenity => struct {
        /// No limit
        pub const INFINITY: rlim_t = (1 << 63) - 1;

        pub const SAVED_MAX = INFINITY;
        pub const SAVED_CUR = INFINITY;
    },
    .solaris, .illumos => struct {
        /// No limit
        pub const INFINITY: rlim_t = (1 << 63) - 3;
        pub const SAVED_MAX: rlim_t = (1 << 63) - 2;
        pub const SAVED_CUR: rlim_t = (1 << 63) - 1;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-s"></a>`S`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const S = switch (native_os) {
    .linux => linux.S,
    .emscripten => emscripten.S,
    .wasi => struct {
        // Match `S_*` constants from lib/libc/include/wasm-wasi-musl/__mode_t.h
        pub const IFBLK = 0x6000;
        pub const IFCHR = 0x2000;
        pub const IFDIR = 0x4000;
        pub const IFIFO = 0x1000;
        pub const IFLNK = 0xa000;
        pub const IFMT = IFBLK | IFCHR | IFDIR | IFIFO | IFLNK | IFREG | IFSOCK;
        pub const IFREG = 0x8000;
        pub const IFSOCK = 0xc000;

        pub fn ISBLK(m: u32) bool {
            return m & IFMT == IFBLK;
        }

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }

        pub fn ISDIR(m: u32) bool {
            return m & IFMT == IFDIR;
        }

        pub fn ISFIFO(m: u32) bool {
            return m & IFMT == IFIFO;
        }

        pub fn ISLNK(m: u32) bool {
            return m & IFMT == IFLNK;
        }

        pub fn ISREG(m: u32) bool {
            return m & IFMT == IFREG;
        }

        pub fn ISSOCK(m: u32) bool {
            return m & IFMT == IFSOCK;
        }
    },
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const IFMT = 0o170000;

        pub const IFIFO = 0o010000;
        pub const IFCHR = 0o020000;
        pub const IFDIR = 0o040000;
        pub const IFBLK = 0o060000;
        pub const IFREG = 0o100000;
        pub const IFLNK = 0o120000;
        pub const IFSOCK = 0o140000;
        pub const IFWHT = 0o160000;

        pub const ISUID = 0o4000;
        pub const ISGID = 0o2000;
        pub const ISVTX = 0o1000;
        pub const IRWXU = 0o700;
        pub const IRUSR = 0o400;
        pub const IWUSR = 0o200;
        pub const IXUSR = 0o100;
        pub const IRWXG = 0o070;
        pub const IRGRP = 0o040;
        pub const IWGRP = 0o020;
        pub const IXGRP = 0o010;
        pub const IRWXO = 0o007;
        pub const IROTH = 0o004;
        pub const IWOTH = 0o002;
        pub const IXOTH = 0o001;

        pub fn ISFIFO(m: u32) bool {
            return m & IFMT == IFIFO;
        }

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }

        pub fn ISDIR(m: u32) bool {
            return m & IFMT == IFDIR;
        }

        pub fn ISBLK(m: u32) bool {
            return m & IFMT == IFBLK;
        }

        pub fn ISREG(m: u32) bool {
            return m & IFMT == IFREG;
        }

        pub fn ISLNK(m: u32) bool {
            return m & IFMT == IFLNK;
        }

        pub fn ISSOCK(m: u32) bool {
            return m & IFMT == IFSOCK;
        }

        pub fn IWHT(m: u32) bool {
            return m & IFMT == IFWHT;
        }
    },
    .freebsd => struct {
        pub const IFMT = 0o170000;

        pub const IFIFO = 0o010000;
        pub const IFCHR = 0o020000;
        pub const IFDIR = 0o040000;
        pub const IFBLK = 0o060000;
        pub const IFREG = 0o100000;
        pub const IFLNK = 0o120000;
        pub const IFSOCK = 0o140000;
        pub const IFWHT = 0o160000;

        pub const ISUID = 0o4000;
        pub const ISGID = 0o2000;
        pub const ISVTX = 0o1000;
        pub const IRWXU = 0o700;
        pub const IRUSR = 0o400;
        pub const IWUSR = 0o200;
        pub const IXUSR = 0o100;
        pub const IRWXG = 0o070;
        pub const IRGRP = 0o040;
        pub const IWGRP = 0o020;
        pub const IXGRP = 0o010;
        pub const IRWXO = 0o007;
        pub const IROTH = 0o004;
        pub const IWOTH = 0o002;
        pub const IXOTH = 0o001;

        pub fn ISFIFO(m: u32) bool {
            return m & IFMT == IFIFO;
        }

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }

        pub fn ISDIR(m: u32) bool {
            return m & IFMT == IFDIR;
        }

        pub fn ISBLK(m: u32) bool {
            return m & IFMT == IFBLK;
        }

        pub fn ISREG(m: u32) bool {
            return m & IFMT == IFREG;
        }

        pub fn ISLNK(m: u32) bool {
            return m & IFMT == IFLNK;
        }

        pub fn ISSOCK(m: u32) bool {
            return m & IFMT == IFSOCK;
        }

        pub fn IWHT(m: u32) bool {
            return m & IFMT == IFWHT;
        }
    },
    .solaris, .illumos => struct {
        pub const IFMT = 0o170000;

        pub const IFIFO = 0o010000;
        pub const IFCHR = 0o020000;
        pub const IFDIR = 0o040000;
        pub const IFBLK = 0o060000;
        pub const IFREG = 0o100000;
        pub const IFLNK = 0o120000;
        pub const IFSOCK = 0o140000;
        /// SunOS 2.6 Door
        pub const IFDOOR = 0o150000;
        /// Solaris 10 Event Port
        pub const IFPORT = 0o160000;

        pub const ISUID = 0o4000;
        pub const ISGID = 0o2000;
        pub const ISVTX = 0o1000;
        pub const IRWXU = 0o700;
        pub const IRUSR = 0o400;
        pub const IWUSR = 0o200;
        pub const IXUSR = 0o100;
        pub const IRWXG = 0o070;
        pub const IRGRP = 0o040;
        pub const IWGRP = 0o020;
        pub const IXGRP = 0o010;
        pub const IRWXO = 0o007;
        pub const IROTH = 0o004;
        pub const IWOTH = 0o002;
        pub const IXOTH = 0o001;

        pub fn ISFIFO(m: u32) bool {
            return m & IFMT == IFIFO;
        }

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }

        pub fn ISDIR(m: u32) bool {
            return m & IFMT == IFDIR;
        }

        pub fn ISBLK(m: u32) bool {
            return m & IFMT == IFBLK;
        }

        pub fn ISREG(m: u32) bool {
            return m & IFMT == IFREG;
        }

        pub fn ISLNK(m: u32) bool {
            return m & IFMT == IFLNK;
        }

        pub fn ISSOCK(m: u32) bool {
            return m & IFMT == IFSOCK;
        }

        pub fn ISDOOR(m: u32) bool {
            return m & IFMT == IFDOOR;
        }

        pub fn ISPORT(m: u32) bool {
            return m & IFMT == IFPORT;
        }
    },
    .netbsd => struct {
        pub const IFMT = 0o170000;

        pub const IFIFO = 0o010000;
        pub const IFCHR = 0o020000;
        pub const IFDIR = 0o040000;
        pub const IFBLK = 0o060000;
        pub const IFREG = 0o100000;
        pub const IFLNK = 0o120000;
        pub const IFSOCK = 0o140000;
        pub const IFWHT = 0o160000;

        pub const ISUID = 0o4000;
        pub const ISGID = 0o2000;
        pub const ISVTX = 0o1000;
        pub const IRWXU = 0o700;
        pub const IRUSR = 0o400;
        pub const IWUSR = 0o200;
        pub const IXUSR = 0o100;
        pub const IRWXG = 0o070;
        pub const IRGRP = 0o040;
        pub const IWGRP = 0o020;
        pub const IXGRP = 0o010;
        pub const IRWXO = 0o007;
        pub const IROTH = 0o004;
        pub const IWOTH = 0o002;
        pub const IXOTH = 0o001;

        pub fn ISFIFO(m: u32) bool {
            return m & IFMT == IFIFO;
        }

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }

        pub fn ISDIR(m: u32) bool {
            return m & IFMT == IFDIR;
        }

        pub fn ISBLK(m: u32) bool {
            return m & IFMT == IFBLK;
        }

        pub fn ISREG(m: u32) bool {
            return m & IFMT == IFREG;
        }

        pub fn ISLNK(m: u32) bool {
            return m & IFMT == IFLNK;
        }

        pub fn ISSOCK(m: u32) bool {
            return m & IFMT == IFSOCK;
        }

        pub fn IWHT(m: u32) bool {
            return m & IFMT == IFWHT;
        }
    },
    .dragonfly => struct {
        pub const IREAD = IRUSR;
        pub const IEXEC = IXUSR;
        pub const IWRITE = IWUSR;
        pub const IXOTH = 1;
        pub const IWOTH = 2;
        pub const IROTH = 4;
        pub const IRWXO = 7;
        pub const IXGRP = 8;
        pub const IWGRP = 16;
        pub const IRGRP = 32;
        pub const IRWXG = 56;
        pub const IXUSR = 64;
        pub const IWUSR = 128;
        pub const IRUSR = 256;
        pub const IRWXU = 448;
        pub const ISTXT = 512;
        pub const BLKSIZE = 512;
        pub const ISVTX = 512;
        pub const ISGID = 1024;
        pub const ISUID = 2048;
        pub const IFIFO = 4096;
        pub const IFCHR = 8192;
        pub const IFDIR = 16384;
        pub const IFBLK = 24576;
        pub const IFREG = 32768;
        pub const IFDB = 36864;
        pub const IFLNK = 40960;
        pub const IFSOCK = 49152;
        pub const IFWHT = 57344;
        pub const IFMT = 61440;

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }
    },
    .haiku => struct {
        pub const IFMT = 0o170000;
        pub const IFSOCK = 0o140000;
        pub const IFLNK = 0o120000;
        pub const IFREG = 0o100000;
        pub const IFBLK = 0o060000;
        pub const IFDIR = 0o040000;
        pub const IFCHR = 0o020000;
        pub const IFIFO = 0o010000;
        pub const INDEX_DIR = 0o4000000000;

        pub const IUMSK = 0o7777;
        pub const ISUID = 0o4000;
        pub const ISGID = 0o2000;
        pub const ISVTX = 0o1000;
        pub const IRWXU = 0o700;
        pub const IRUSR = 0o400;
        pub const IWUSR = 0o200;
        pub const IXUSR = 0o100;
        pub const IRWXG = 0o070;
        pub const IRGRP = 0o040;
        pub const IWGRP = 0o020;
        pub const IXGRP = 0o010;
        pub const IRWXO = 0o007;
        pub const IROTH = 0o004;
        pub const IWOTH = 0o002;
        pub const IXOTH = 0o001;

        pub fn ISREG(m: u32) bool {
            return m & IFMT == IFREG;
        }

        pub fn ISLNK(m: u32) bool {
            return m & IFMT == IFLNK;
        }

        pub fn ISBLK(m: u32) bool {
            return m & IFMT == IFBLK;
        }

        pub fn ISDIR(m: u32) bool {
            return m & IFMT == IFDIR;
        }

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }

        pub fn ISFIFO(m: u32) bool {
            return m & IFMT == IFIFO;
        }

        pub fn ISSOCK(m: u32) bool {
            return m & IFMT == IFSOCK;
        }

        pub fn ISINDEX(m: u32) bool {
            return m & INDEX_DIR == INDEX_DIR;
        }
    },
    .openbsd => struct {
        pub const IFMT = 0o170000;

        pub const IFIFO = 0o010000;
        pub const IFCHR = 0o020000;
        pub const IFDIR = 0o040000;
        pub const IFBLK = 0o060000;
        pub const IFREG = 0o100000;
        pub const IFLNK = 0o120000;
        pub const IFSOCK = 0o140000;

        pub const ISUID = 0o4000;
        pub const ISGID = 0o2000;
        pub const ISVTX = 0o1000;
        pub const IRWXU = 0o700;
        pub const IRUSR = 0o400;
        pub const IWUSR = 0o200;
        pub const IXUSR = 0o100;
        pub const IRWXG = 0o070;
        pub const IRGRP = 0o040;
        pub const IWGRP = 0o020;
        pub const IXGRP = 0o010;
        pub const IRWXO = 0o007;
        pub const IROTH = 0o004;
        pub const IWOTH = 0o002;
        pub const IXOTH = 0o001;

        pub fn ISFIFO(m: u32) bool {
            return m & IFMT == IFIFO;
        }

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }

        pub fn ISDIR(m: u32) bool {
            return m & IFMT == IFDIR;
        }

        pub fn ISBLK(m: u32) bool {
            return m & IFMT == IFBLK;
        }

        pub fn ISREG(m: u32) bool {
            return m & IFMT == IFREG;
        }

        pub fn ISLNK(m: u32) bool {
            return m & IFMT == IFLNK;
        }

        pub fn ISSOCK(m: u32) bool {
            return m & IFMT == IFSOCK;
        }
    },
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/sys/stat.h#L16-L51
    .serenity => struct {
        pub const IFMT = 0o170000;
        pub const IFDIR = 0o040000;
        pub const IFCHR = 0o020000;
        pub const IFBLK = 0o060000;
        pub const IFREG = 0o100000;
        pub const IFIFO = 0o010000;
        pub const IFLNK = 0o120000;
        pub const IFSOCK = 0o140000;

        pub const ISUID = 0o4000;
        pub const ISGID = 0o2000;
        pub const ISVTX = 0o1000;
        pub const IRUSR = 0o400;
        pub const IWUSR = 0o200;
        pub const IXUSR = 0o100;
        pub const IREAD = IRUSR;
        pub const IWRITE = IWUSR;
        pub const IEXEC = IXUSR;
        pub const IRGRP = 0o040;
        pub const IWGRP = 0o020;
        pub const IXGRP = 0o010;
        pub const IROTH = 0o004;
        pub const IWOTH = 0o002;
        pub const IXOTH = 0o001;

        pub const IRWXU = IRUSR | IWUSR | IXUSR;

        pub const IRWXG = IRWXU >> 3;
        pub const IRWXO = IRWXG >> 3;

        pub fn ISDIR(m: u32) bool {
            return m & IFMT == IFDIR;
        }

        pub fn ISCHR(m: u32) bool {
            return m & IFMT == IFCHR;
        }

        pub fn ISBLK(m: u32) bool {
            return m & IFMT == IFBLK;
        }

        pub fn ISREG(m: u32) bool {
            return m & IFMT == IFREG;
        }

        pub fn ISFIFO(m: u32) bool {
            return m & IFMT == IFIFO;
        }

        pub fn ISLNK(m: u32) bool {
            return m & IFMT == IFLNK;
        }

        pub fn ISSOCK(m: u32) bool {
            return m & IFMT == IFSOCK;
        }
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sa"></a>`SA`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SA = switch (native_os) {
    .linux => linux.SA,
    .emscripten => emscripten.SA,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        /// take signal on signal stack
        pub const ONSTACK = 0x0001;
        /// restart system on signal return
        pub const RESTART = 0x0002;
        /// reset to SIG.DFL when taking signal
        pub const RESETHAND = 0x0004;
        /// do not generate SIG.CHLD on child stop
        pub const NOCLDSTOP = 0x0008;
        /// don't mask the signal we're delivering
        pub const NODEFER = 0x0010;
        /// don't keep zombies around
        pub const NOCLDWAIT = 0x0020;
        /// signal handler with SIGINFO args
        pub const SIGINFO = 0x0040;
        /// do not bounce off kernel's sigtramp
        pub const USERTRAMP = 0x0100;
        /// signal handler with SIGINFO args with 64bit regs information
        pub const @"64REGSET" = 0x0200;
    },
    .freebsd => struct {
        pub const ONSTACK = 0x0001;
        pub const RESTART = 0x0002;
        pub const RESETHAND = 0x0004;
        pub const NOCLDSTOP = 0x0008;
        pub const NODEFER = 0x0010;
        pub const NOCLDWAIT = 0x0020;
        pub const SIGINFO = 0x0040;
    },
    .solaris, .illumos => struct {
        pub const ONSTACK = 0x00000001;
        pub const RESETHAND = 0x00000002;
        pub const RESTART = 0x00000004;
        pub const SIGINFO = 0x00000008;
        pub const NODEFER = 0x00000010;
        pub const NOCLDWAIT = 0x00010000;
    },
    .netbsd => struct {
        pub const ONSTACK = 0x0001;
        pub const RESTART = 0x0002;
        pub const RESETHAND = 0x0004;
        pub const NOCLDSTOP = 0x0008;
        pub const NODEFER = 0x0010;
        pub const NOCLDWAIT = 0x0020;
        pub const SIGINFO = 0x0040;
    },
    .dragonfly => struct {
        pub const ONSTACK = 0x0001;
        pub const RESTART = 0x0002;
        pub const RESETHAND = 0x0004;
        pub const NODEFER = 0x0010;
        pub const NOCLDWAIT = 0x0020;
        pub const SIGINFO = 0x0040;
    },
    .haiku => struct {
        pub const NOCLDSTOP = 0x01;
        pub const NOCLDWAIT = 0x02;
        pub const RESETHAND = 0x04;
        pub const NODEFER = 0x08;
        pub const RESTART = 0x10;
        pub const ONSTACK = 0x20;
        pub const SIGINFO = 0x40;
        pub const NOMASK = NODEFER;
        pub const STACK = ONSTACK;
        pub const ONESHOT = RESETHAND;
    },
    .openbsd => struct {
        pub const ONSTACK = 0x0001;
        pub const RESTART = 0x0002;
        pub const RESETHAND = 0x0004;
        pub const NOCLDSTOP = 0x0008;
        pub const NODEFER = 0x0010;
        pub const NOCLDWAIT = 0x0020;
        pub const SIGINFO = 0x0040;
    },
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L65-L71
    .serenity => struct {
        pub const NOCLDSTOP = 1;
        pub const NOCLDWAIT = 2;
        pub const SIGINFO = 4;
        pub const ONSTACK = 0x08000000;
        pub const RESTART = 0x10000000;
        pub const NODEFER = 0x40000000;
        pub const RESETHAND = 0x80000000;
        pub const NOMASK = NODEFER;
        pub const ONESHOT = RESETHAND;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sigval-t"></a>`sigval_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigval_t = switch (native_os) {
    .netbsd, .solaris, .illumos => extern union {
        int: i32,
        ptr: ?*anyopaque,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sc"></a>`SC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SC = switch (native_os) {
    .linux => linux.SC,
    else => void,
}
\`\`\`

</details>

---

### <a id="const--sc"></a>`_SC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _SC = if (builtin.abi.isAndroid()) enum(c_int) {
    PAGESIZE = 39,
    NPROCESSORS_ONLN = 97,
} else switch (native_os) {
    .driverkit, .ios, .macos, .tvos, .visionos, .watchos => enum(c_int) {
        PAGESIZE = 29,
    },
    .dragonfly => enum(c_int) {
        PAGESIZE = 47,
    },
    .freebsd => enum(c_int) {
        PAGESIZE = 47,
    },
    .fuchsia => enum(c_int) {
        PAGESIZE = 30,
    },
    .haiku => enum(c_int) {
        PAGESIZE = 27,
    },
    .linux => enum(c_int) {
        PAGESIZE = 30,
    },
    .netbsd => enum(c_int) {
        PAGESIZE = 28,
    },
    .openbsd => enum(c_int) {
        PAGESIZE = 28,
    },
    .solaris, .illumos => enum(c_int) {
        PAGESIZE = 11,
        NPROCESSORS_ONLN = 15,
    },
    // https://github.com/SerenityOS/serenity/blob/1dfc9e2df39dd23f1de92530677c845aae4345f2/Kernel/API/POSIX/unistd.h#L36-L52
    .serenity => enum(c_int) {
        MONOTONIC_CLOCK = 0,
        NPROCESSORS_CONF = 1,
        NPROCESSORS_ONLN = 2,
        OPEN_MAX = 3,
        HOST_NAME_MAX = 4,
        TTY_NAME_MAX = 5,
        PAGESIZE = 6,
        GETPW_R_SIZE_MAX = 7,
        GETGR_R_SIZE_MAX = 8,
        CLK_TCK = 9,
        SYMLOOP_MAX = 10,
        MAPPED_FILES = 11,
        ARG_MAX = 12,
        IOV_MAX = 13,
        PHYS_PAGES = 14,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-seek"></a>`SEEK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SEEK = switch (native_os) {
    .linux => linux.SEEK,
    .emscripten => emscripten.SEEK,
    .wasi => struct {
        pub const SET: wasi.whence_t = .SET;
        pub const CUR: wasi.whence_t = .CUR;
        pub const END: wasi.whence_t = .END;
    },
    // https://github.com/SerenityOS/serenity/blob/808ce594db1f2190e5212a250e900bde2ffe710b/Kernel/API/POSIX/stdio.h#L15-L17
    .openbsd, .haiku, .netbsd, .freebsd, .macos, .ios, .tvos, .watchos, .visionos, .windows, .serenity => struct {
        pub const SET = 0;
        pub const CUR = 1;
        pub const END = 2;
    },
    .dragonfly, .solaris, .illumos => struct {
        pub const SET = 0;
        pub const CUR = 1;
        pub const END = 2;
        pub const DATA = 3;
        pub const HOLE = 4;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-shut"></a>`SHUT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SHUT = switch (native_os) {
    .linux => linux.SHUT,
    .emscripten => emscripten.SHUT,
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L40-L42
    else => struct {
        pub const RD = 0;
        pub const WR = 1;
        pub const RDWR = 2;
    },
}
\`\`\`

</details>

---

### <a id="const-sig"></a>`SIG`

<details class="declaration-card" open>
<summary>Constant – Signal types</summary>

Signal types

\`\`\`zig
pub const SIG = switch (native_os) {
    .linux => linux.SIG,
    .emscripten => emscripten.SIG,
    .windows => struct {
        /// interrupt
        pub const INT = 2;
        /// illegal instruction - invalid function image
        pub const ILL = 4;
        /// floating point exception
        pub const FPE = 8;
        /// segment violation
        pub const SEGV = 11;
        /// Software termination signal from kill
        pub const TERM = 15;
        /// Ctrl-Break sequence
        pub const BREAK = 21;
        /// abnormal termination triggered by abort call
        pub const ABRT = 22;
        /// SIGABRT compatible with other platforms, same as SIGABRT
        pub const ABRT_COMPAT = 6;

        // Signal action codes
        /// default signal action
        pub const DFL = 0;
        /// ignore signal
        pub const IGN = 1;
        /// return current value
        pub const GET = 2;
        /// signal gets error
        pub const SGE = 3;
        /// acknowledge
        pub const ACK = 4;
        /// Signal error value (returned by signal call on error)
        pub const ERR = -1;
    },
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const ERR: ?Sigaction.handler_fn = @ptrFromInt(maxInt(usize));
        pub const DFL: ?Sigaction.handler_fn = @ptrFromInt(0);
        pub const IGN: ?Sigaction.handler_fn = @ptrFromInt(1);
        pub const HOLD: ?Sigaction.handler_fn = @ptrFromInt(5);

        /// block specified signal set
        pub const BLOCK = 1;
        /// unblock specified signal set
        pub const UNBLOCK = 2;
        /// set specified signal set
        pub const SETMASK = 3;
        /// hangup
        pub const HUP = 1;
        /// interrupt
        pub const INT = 2;
        /// quit
        pub const QUIT = 3;
        /// illegal instruction (not reset when caught)
        pub const ILL = 4;
        /// trace trap (not reset when caught)
        pub const TRAP = 5;
        /// abort()
        pub const ABRT = 6;
        /// pollable event ([XSR] generated, not supported)
        pub const POLL = 7;
        /// compatibility
        pub const IOT = ABRT;
        /// EMT instruction
        pub const EMT = 7;
        /// floating point exception
        pub const FPE = 8;
        /// kill (cannot be caught or ignored)
        pub const KILL = 9;
        /// bus error
        pub const BUS = 10;
        /// segmentation violation
        pub const SEGV = 11;
        /// bad argument to system call
        pub const SYS = 12;
        /// write on a pipe with no one to read it
        pub const PIPE = 13;
        /// alarm clock
        pub const ALRM = 14;
        /// software termination signal from kill
        pub const TERM = 15;
        /// urgent condition on IO channel
        pub const URG = 16;
        /// sendable stop signal not from tty
        pub const STOP = 17;
        /// stop signal from tty
        pub const TSTP = 18;
        /// continue a stopped process
        pub const CONT = 19;
        /// to parent on child stop or exit
        pub const CHLD = 20;
        /// to readers pgrp upon background tty read
        pub const TTIN = 21;
        /// like TTIN for output if (tp->t_local&LTOSTOP)
        pub const TTOU = 22;
        /// input/output possible signal
        pub const IO = 23;
        /// exceeded CPU time limit
        pub const XCPU = 24;
        /// exceeded file size limit
        pub const XFSZ = 25;
        /// virtual time alarm
        pub const VTALRM = 26;
        /// profiling time alarm
        pub const PROF = 27;
        /// window size changes
        pub const WINCH = 28;
        /// information request
        pub const INFO = 29;
        /// user defined signal 1
        pub const USR1 = 30;
        /// user defined signal 2
        pub const USR2 = 31;
    },
    .freebsd => struct {
        pub const HUP = 1;
        pub const INT = 2;
        pub const QUIT = 3;
        pub const ILL = 4;
        pub const TRAP = 5;
        pub const ABRT = 6;
        pub const IOT = ABRT;
        pub const EMT = 7;
        pub const FPE = 8;
        pub const KILL = 9;
        pub const BUS = 10;
        pub const SEGV = 11;
        pub const SYS = 12;
        pub const PIPE = 13;
        pub const ALRM = 14;
        pub const TERM = 15;
        pub const URG = 16;
        pub const STOP = 17;
        pub const TSTP = 18;
        pub const CONT = 19;
        pub const CHLD = 20;
        pub const TTIN = 21;
        pub const TTOU = 22;
        pub const IO = 23;
        pub const XCPU = 24;
        pub const XFSZ = 25;
        pub const VTALRM = 26;
        pub const PROF = 27;
        pub const WINCH = 28;
        pub const INFO = 29;
        pub const USR1 = 30;
        pub const USR2 = 31;
        pub const THR = 32;
        pub const LWP = THR;
        pub const LIBRT = 33;

        pub const RTMIN = 65;
        pub const RTMAX = 126;

        pub const BLOCK = 1;
        pub const UNBLOCK = 2;
        pub const SETMASK = 3;

        pub const DFL: ?Sigaction.handler_fn = @ptrFromInt(0);
        pub const IGN: ?Sigaction.handler_fn = @ptrFromInt(1);
        pub const ERR: ?Sigaction.handler_fn = @ptrFromInt(maxInt(usize));

        pub const WORDS = 4;
        pub const MAXSIG = 128;

        pub inline fn IDX(sig: usize) usize {
            return sig - 1;
        }
        pub inline fn WORD(sig: usize) usize {
            return IDX(sig) >> 5;
        }
        pub inline fn BIT(sig: usize) usize {
            return 1 << (IDX(sig) & 31);
        }
        pub inline fn VALID(sig: usize) usize {
            return sig <= MAXSIG and sig > 0;
        }
    },
    .solaris, .illumos => struct {
        pub const DFL: ?Sigaction.handler_fn = @ptrFromInt(0);
        pub const ERR: ?Sigaction.handler_fn = @ptrFromInt(maxInt(usize));
        pub const IGN: ?Sigaction.handler_fn = @ptrFromInt(1);
        pub const HOLD: ?Sigaction.handler_fn = @ptrFromInt(2);

        pub const WORDS = 4;
        pub const MAXSIG = 75;

        pub const SIG_BLOCK = 1;
        pub const SIG_UNBLOCK = 2;
        pub const SIG_SETMASK = 3;

        pub const HUP = 1;
        pub const INT = 2;
        pub const QUIT = 3;
        pub const ILL = 4;
        pub const TRAP = 5;
        pub const IOT = 6;
        pub const ABRT = 6;
        pub const EMT = 7;
        pub const FPE = 8;
        pub const KILL = 9;
        pub const BUS = 10;
        pub const SEGV = 11;
        pub const SYS = 12;
        pub const PIPE = 13;
        pub const ALRM = 14;
        pub const TERM = 15;
        pub const USR1 = 16;
        pub const USR2 = 17;
        pub const CLD = 18;
        pub const CHLD = 18;
        pub const PWR = 19;
        pub const WINCH = 20;
        pub const URG = 21;
        pub const POLL = 22;
        pub const IO = .POLL;
        pub const STOP = 23;
        pub const TSTP = 24;
        pub const CONT = 25;
        pub const TTIN = 26;
        pub const TTOU = 27;
        pub const VTALRM = 28;
        pub const PROF = 29;
        pub const XCPU = 30;
        pub const XFSZ = 31;
        pub const WAITING = 32;
        pub const LWP = 33;
        pub const FREEZE = 34;
        pub const THAW = 35;
        pub const CANCEL = 36;
        pub const LOST = 37;
        pub const XRES = 38;
        pub const JVM1 = 39;
        pub const JVM2 = 40;
        pub const INFO = 41;

        pub const RTMIN = 42;
        pub const RTMAX = 74;

        pub inline fn IDX(sig: usize) usize {
            return sig - 1;
        }
        pub inline fn WORD(sig: usize) usize {
            return IDX(sig) >> 5;
        }
        pub inline fn BIT(sig: usize) usize {
            return 1 << (IDX(sig) & 31);
        }
        pub inline fn VALID(sig: usize) usize {
            return sig <= MAXSIG and sig > 0;
        }
    },
    .netbsd => struct {
        pub const DFL: ?Sigaction.handler_fn = @ptrFromInt(0);
        pub const IGN: ?Sigaction.handler_fn = @ptrFromInt(1);
        pub const ERR: ?Sigaction.handler_fn = @ptrFromInt(maxInt(usize));

        pub const WORDS = 4;
        pub const MAXSIG = 128;

        pub const BLOCK = 1;
        pub const UNBLOCK = 2;
        pub const SETMASK = 3;

        pub const HUP = 1;
        pub const INT = 2;
        pub const QUIT = 3;
        pub const ILL = 4;
        pub const TRAP = 5;
        pub const ABRT = 6;
        pub const IOT = ABRT;
        pub const EMT = 7;
        pub const FPE = 8;
        pub const KILL = 9;
        pub const BUS = 10;
        pub const SEGV = 11;
        pub const SYS = 12;
        pub const PIPE = 13;
        pub const ALRM = 14;
        pub const TERM = 15;
        pub const URG = 16;
        pub const STOP = 17;
        pub const TSTP = 18;
        pub const CONT = 19;
        pub const CHLD = 20;
        pub const TTIN = 21;
        pub const TTOU = 22;
        pub const IO = 23;
        pub const XCPU = 24;
        pub const XFSZ = 25;
        pub const VTALRM = 26;
        pub const PROF = 27;
        pub const WINCH = 28;
        pub const INFO = 29;
        pub const USR1 = 30;
        pub const USR2 = 31;
        pub const PWR = 32;

        pub const RTMIN = 33;
        pub const RTMAX = 63;

        pub inline fn IDX(sig: usize) usize {
            return sig - 1;
        }
        pub inline fn WORD(sig: usize) usize {
            return IDX(sig) >> 5;
        }
        pub inline fn BIT(sig: usize) usize {
            return 1 << (IDX(sig) & 31);
        }
        pub inline fn VALID(sig: usize) usize {
            return sig <= MAXSIG and sig > 0;
        }
    },
    .dragonfly => struct {
        pub const DFL: ?Sigaction.handler_fn = @ptrFromInt(0);
        pub const IGN: ?Sigaction.handler_fn = @ptrFromInt(1);
        pub const ERR: ?Sigaction.handler_fn = @ptrFromInt(maxInt(usize));

        pub const BLOCK = 1;
        pub const UNBLOCK = 2;
        pub const SETMASK = 3;

        pub const IOT = ABRT;
        pub const HUP = 1;
        pub const INT = 2;
        pub const QUIT = 3;
        pub const ILL = 4;
        pub const TRAP = 5;
        pub const ABRT = 6;
        pub const EMT = 7;
        pub const FPE = 8;
        pub const KILL = 9;
        pub const BUS = 10;
        pub const SEGV = 11;
        pub const SYS = 12;
        pub const PIPE = 13;
        pub const ALRM = 14;
        pub const TERM = 15;
        pub const URG = 16;
        pub const STOP = 17;
        pub const TSTP = 18;
        pub const CONT = 19;
        pub const CHLD = 20;
        pub const TTIN = 21;
        pub const TTOU = 22;
        pub const IO = 23;
        pub const XCPU = 24;
        pub const XFSZ = 25;
        pub const VTALRM = 26;
        pub const PROF = 27;
        pub const WINCH = 28;
        pub const INFO = 29;
        pub const USR1 = 30;
        pub const USR2 = 31;
        pub const THR = 32;
        pub const CKPT = 33;
        pub const CKPTEXIT = 34;

        pub const WORDS = 4;
    },
    .haiku => struct {
        pub const DFL: ?Sigaction.handler_fn = @ptrFromInt(0);
        pub const IGN: ?Sigaction.handler_fn = @ptrFromInt(1);
        pub const ERR: ?Sigaction.handler_fn = @ptrFromInt(maxInt(usize));

        pub const HOLD: ?Sigaction.handler_fn = @ptrFromInt(3);

        pub const HUP = 1;
        pub const INT = 2;
        pub const QUIT = 3;
        pub const ILL = 4;
        pub const CHLD = 5;
        pub const ABRT = 6;
        pub const IOT = ABRT;
        pub const PIPE = 7;
        pub const FPE = 8;
        pub const KILL = 9;
        pub const STOP = 10;
        pub const SEGV = 11;
        pub const CONT = 12;
        pub const TSTP = 13;
        pub const ALRM = 14;
        pub const TERM = 15;
        pub const TTIN = 16;
        pub const TTOU = 17;
        pub const USR1 = 18;
        pub const USR2 = 19;
        pub const WINCH = 20;
        pub const KILLTHR = 21;
        pub const TRAP = 22;
        pub const POLL = 23;
        pub const PROF = 24;
        pub const SYS = 25;
        pub const URG = 26;
        pub const VTALRM = 27;
        pub const XCPU = 28;
        pub const XFSZ = 29;
        pub const BUS = 30;
        pub const RESERVED1 = 31;
        pub const RESERVED2 = 32;

        pub const BLOCK = 1;
        pub const UNBLOCK = 2;
        pub const SETMASK = 3;
    },
    .openbsd => struct {
        pub const DFL: ?Sigaction.handler_fn = @ptrFromInt(0);
        pub const IGN: ?Sigaction.handler_fn = @ptrFromInt(1);
        pub const ERR: ?Sigaction.handler_fn = @ptrFromInt(maxInt(usize));
        pub const CATCH: ?Sigaction.handler_fn = @ptrFromInt(2);
        pub const HOLD: ?Sigaction.handler_fn = @ptrFromInt(3);

        pub const HUP = 1;
        pub const INT = 2;
        pub const QUIT = 3;
        pub const ILL = 4;
        pub const TRAP = 5;
        pub const ABRT = 6;
        pub const IOT = ABRT;
        pub const EMT = 7;
        pub const FPE = 8;
        pub const KILL = 9;
        pub const BUS = 10;
        pub const SEGV = 11;
        pub const SYS = 12;
        pub const PIPE = 13;
        pub const ALRM = 14;
        pub const TERM = 15;
        pub const URG = 16;
        pub const STOP = 17;
        pub const TSTP = 18;
        pub const CONT = 19;
        pub const CHLD = 20;
        pub const TTIN = 21;
        pub const TTOU = 22;
        pub const IO = 23;
        pub const XCPU = 24;
        pub const XFSZ = 25;
        pub const VTALRM = 26;
        pub const PROF = 27;
        pub const WINCH = 28;
        pub const INFO = 29;
        pub const USR1 = 30;
        pub const USR2 = 31;
        pub const PWR = 32;

        pub const BLOCK = 1;
        pub const UNBLOCK = 2;
        pub const SETMASK = 3;
    },
    // https://github.com/SerenityOS/serenity/blob/046c23f567a17758d762a33bdf04bacbfd088f9f/Kernel/API/POSIX/signal_numbers.h
    .serenity => struct {
        pub const INVAL = 0;
        pub const HUP = 1;
        pub const INT = 2;
        pub const QUIT = 3;
        pub const ILL = 4;
        pub const TRAP = 5;
        pub const ABRT = 6;
        pub const BUS = 7;
        pub const FPE = 8;
        pub const KILL = 9;
        pub const USR1 = 10;
        pub const SEGV = 11;
        pub const USR2 = 12;
        pub const PIPE = 13;
        pub const ALRM = 14;
        pub const TERM = 15;
        pub const STKFLT = 16;
        pub const CHLD = 17;
        pub const CONT = 18;
        pub const STOP = 19;
        pub const TSTP = 20;
        pub const TTIN = 21;
        pub const TTOU = 22;
        pub const URG = 23;
        pub const XCPU = 24;
        pub const XFSZ = 25;
        pub const VTALRM = 26;
        pub const PROF = 27;
        pub const WINCH = 28;
        pub const IO = 29;
        pub const INFO = 30;
        pub const SYS = 31;
        pub const CANCEL = 32;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-siocgifindex"></a>`SIOCGIFINDEX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SIOCGIFINDEX = switch (native_os) {
    .linux => linux.SIOCGIFINDEX,
    .emscripten => emscripten.SIOCGIFINDEX,
    .solaris, .illumos => solaris.SIOCGLIFINDEX,
    // https://github.com/SerenityOS/serenity/blob/cb10f70394fb7e9cfc77f827adb2e46d199bc3a5/Kernel/API/Ioctl.h#L118
    .serenity => 34,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-stdin-fileno"></a>`STDIN_FILENO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const STDIN_FILENO = switch (native_os) {
    .linux => linux.STDIN_FILENO,
    .emscripten => emscripten.STDIN_FILENO,
    else => 0,
}
\`\`\`

</details>

---

### <a id="const-stdout-fileno"></a>`STDOUT_FILENO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const STDOUT_FILENO = switch (native_os) {
    .linux => linux.STDOUT_FILENO,
    .emscripten => emscripten.STDOUT_FILENO,
    else => 1,
}
\`\`\`

</details>

---

### <a id="const-stderr-fileno"></a>`STDERR_FILENO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const STDERR_FILENO = switch (native_os) {
    .linux => linux.STDERR_FILENO,
    .emscripten => emscripten.STDERR_FILENO,
    else => 2,
}
\`\`\`

</details>

---

### <a id="const-sys"></a>`SYS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SYS = switch (native_os) {
    .linux => linux.SYS,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sigaction"></a>`Sigaction`

<details class="declaration-card" open>
<summary>Constant – Renamed from `sigaction` to `Sigaction` to avoid conflict with function name</summary>

Renamed from `sigaction` to `Sigaction` to avoid conflict with function name.

\`\`\`zig
pub const Sigaction = switch (native_os) {
    .linux => switch (native_arch) {
        .mips,
        .mipsel,
        .mips64,
        .mips64el,
        => if (builtin.target.abi.isMusl())
            common_linux_Sigaction
        else if (builtin.target.ptrBitWidth() == 64) extern struct {
            pub const handler_fn = *align(1) const fn (i32) callconv(.c) void;
            pub const sigaction_fn = *const fn (i32, *const siginfo_t, ?*anyopaque) callconv(.c) void;

            flags: c_uint,
            handler: extern union {
                handler: ?handler_fn,
                sigaction: ?sigaction_fn,
            },
            mask: sigset_t,
            restorer: ?*const fn () callconv(.c) void = null,
        } else extern struct {
            pub const handler_fn = *align(1) const fn (i32) callconv(.c) void;
            pub const sigaction_fn = *const fn (i32, *const siginfo_t, ?*anyopaque) callconv(.c) void;

            flags: c_uint,
            handler: extern union {
                handler: ?handler_fn,
                sigaction: ?sigaction_fn,
            },
            mask: sigset_t,
            restorer: ?*const fn () callconv(.c) void = null,
            __resv: [1]c_int = .{0},
        },
        .s390x => if (builtin.abi == .gnu) extern struct {
            pub const handler_fn = *align(1) const fn (i32) callconv(.c) void;
            pub const sigaction_fn = *const fn (i32, *const siginfo_t, ?*anyopaque) callconv(.c) void;

            handler: extern union {
                handler: ?handler_fn,
                sigaction: ?sigaction_fn,
            },
            __glibc_reserved0: c_int = 0,
            flags: c_uint,
            restorer: ?*const fn () callconv(.c) void = null,
            mask: sigset_t,
        } else common_linux_Sigaction,
        else => common_linux_Sigaction,
    },
    .emscripten => emscripten.Sigaction,
    .netbsd, .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        pub const handler_fn = *align(1) const fn (i32) callconv(.c) void;
        pub const sigaction_fn = *const fn (i32, *const siginfo_t, ?*anyopaque) callconv(.c) void;

        handler: extern union {
            handler: ?handler_fn,
            sigaction: ?sigaction_fn,
        },
        mask: sigset_t,
        flags: c_uint,
    },
    .dragonfly, .freebsd => extern struct {
        pub const handler_fn = *align(1) const fn (i32) callconv(.c) void;
        pub const sigaction_fn = *const fn (i32, *const siginfo_t, ?*anyopaque) callconv(.c) void;

        /// signal handler
        handler: extern union {
            handler: ?handler_fn,
            sigaction: ?sigaction_fn,
        },
        /// see signal options
        flags: c_uint,
        /// signal mask to apply
        mask: sigset_t,
    },
    .solaris, .illumos => extern struct {
        pub const handler_fn = *align(1) const fn (i32) callconv(.c) void;
        pub const sigaction_fn = *const fn (i32, *const siginfo_t, ?*anyopaque) callconv(.c) void;

        /// signal options
        flags: c_uint,
        /// signal handler
        handler: extern union {
            handler: ?handler_fn,
            sigaction: ?sigaction_fn,
        },
        /// signal mask to apply
        mask: sigset_t,
    },
    .haiku => extern struct {
        pub const handler_fn = *align(1) const fn (i32) callconv(.c) void;
        pub const sigaction_fn = *const fn (i32, *const siginfo_t, ?*anyopaque) callconv(.c) void;

        /// signal handler
        handler: extern union {
            handler: handler_fn,
            sigaction: sigaction_fn,
        },

        /// signal mask to apply
        mask: sigset_t,

        /// see signal options
        flags: i32,

        /// will be passed to the signal handler, BeOS extension
        userdata: *allowzero anyopaque = undefined,
    },
    .openbsd => extern struct {
        pub const handler_fn = *align(1) const fn (i32) callconv(.c) void;
        pub const sigaction_fn = *const fn (i32, *const siginfo_t, ?*anyopaque) callconv(.c) void;

        /// signal handler
        handler: extern union {
            handler: ?handler_fn,
            sigaction: ?sigaction_fn,
        },
        /// signal mask to apply
        mask: sigset_t,
        /// signal options
        flags: c_uint,
    },
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L39-L46
    .serenity => extern struct {
        pub const handler_fn = *align(1) const fn (c_int) callconv(.c) void;
        pub const sigaction_fn = *const fn (c_int, *const siginfo_t, ?*anyopaque) callconv(.c) void;

        handler: extern union {
            handler: ?handler_fn,
            sigaction: ?sigaction_fn,
        },
        mask: sigset_t,
        flags: c_int,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-t"></a>`T`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const T = switch (native_os) {
    .linux => linux.T,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const IOCGWINSZ = ior(0x40000000, 't', 104, @sizeOf(winsize));

        fn ior(inout: u32, group_arg: usize, num: usize, len: usize) usize {
            return (inout | ((len & IOCPARM_MASK) << 16) | ((group_arg) << 8) | (num));
        }
    },
    .freebsd => struct {
        pub const IOCEXCL = 0x2000740d;
        pub const IOCNXCL = 0x2000740e;
        pub const IOCSCTTY = 0x20007461;
        pub const IOCGPGRP = 0x40047477;
        pub const IOCSPGRP = 0x80047476;
        pub const IOCOUTQ = 0x40047473;
        pub const IOCSTI = 0x80017472;
        pub const IOCGWINSZ = 0x40087468;
        pub const IOCSWINSZ = 0x80087467;
        pub const IOCMGET = 0x4004746a;
        pub const IOCMBIS = 0x8004746c;
        pub const IOCMBIC = 0x8004746b;
        pub const IOCMSET = 0x8004746d;
        pub const FIONREAD = 0x4004667f;
        pub const IOCCONS = 0x80047462;
        pub const IOCPKT = 0x80047470;
        pub const FIONBIO = 0x8004667e;
        pub const IOCNOTTY = 0x20007471;
        pub const IOCSETD = 0x8004741b;
        pub const IOCGETD = 0x4004741a;
        pub const IOCSBRK = 0x2000747b;
        pub const IOCCBRK = 0x2000747a;
        pub const IOCGSID = 0x40047463;
        pub const IOCGPTN = 0x4004740f;
        pub const IOCSIG = 0x2004745f;
    },
    .solaris, .illumos => struct {
        pub const CGETA = tioc('T', 1);
        pub const CSETA = tioc('T', 2);
        pub const CSETAW = tioc('T', 3);
        pub const CSETAF = tioc('T', 4);
        pub const CSBRK = tioc('T', 5);
        pub const CXONC = tioc('T', 6);
        pub const CFLSH = tioc('T', 7);
        pub const IOCGWINSZ = tioc('T', 104);
        pub const IOCSWINSZ = tioc('T', 103);
        // Softcarrier ioctls
        pub const IOCGSOFTCAR = tioc('T', 105);
        pub const IOCSSOFTCAR = tioc('T', 106);
        // termios ioctls
        pub const CGETS = tioc('T', 13);
        pub const CSETS = tioc('T', 14);
        pub const CSANOW = tioc('T', 14);
        pub const CSETSW = tioc('T', 15);
        pub const CSADRAIN = tioc('T', 15);
        pub const CSETSF = tioc('T', 16);
        pub const IOCSETLD = tioc('T', 123);
        pub const IOCGETLD = tioc('T', 124);
        // NTP PPS ioctls
        pub const IOCGPPS = tioc('T', 125);
        pub const IOCSPPS = tioc('T', 126);
        pub const IOCGPPSEV = tioc('T', 127);

        pub const IOCGETD = tioc('t', 0);
        pub const IOCSETD = tioc('t', 1);
        pub const IOCHPCL = tioc('t', 2);
        pub const IOCGETP = tioc('t', 8);
        pub const IOCSETP = tioc('t', 9);
        pub const IOCSETN = tioc('t', 10);
        pub const IOCEXCL = tioc('t', 13);
        pub const IOCNXCL = tioc('t', 14);
        pub const IOCFLUSH = tioc('t', 16);
        pub const IOCSETC = tioc('t', 17);
        pub const IOCGETC = tioc('t', 18);
        /// bis local mode bits
        pub const IOCLBIS = tioc('t', 127);
        /// bic local mode bits
        pub const IOCLBIC = tioc('t', 126);
        /// set entire local mode word
        pub const IOCLSET = tioc('t', 125);
        /// get local modes
        pub const IOCLGET = tioc('t', 124);
        /// set break bit
        pub const IOCSBRK = tioc('t', 123);
        /// clear break bit
        pub const IOCCBRK = tioc('t', 122);
        /// set data terminal ready
        pub const IOCSDTR = tioc('t', 121);
        /// clear data terminal ready
        pub const IOCCDTR = tioc('t', 120);
        /// set local special chars
        pub const IOCSLTC = tioc('t', 117);
        /// get local special chars
        pub const IOCGLTC = tioc('t', 116);
        /// driver output queue size
        pub const IOCOUTQ = tioc('t', 115);
        /// void tty association
        pub const IOCNOTTY = tioc('t', 113);
        /// get a ctty
        pub const IOCSCTTY = tioc('t', 132);
        /// stop output, like ^S
        pub const IOCSTOP = tioc('t', 111);
        /// start output, like ^Q
        pub const IOCSTART = tioc('t', 110);
        /// get pgrp of tty
        pub const IOCGPGRP = tioc('t', 20);
        /// set pgrp of tty
        pub const IOCSPGRP = tioc('t', 21);
        /// get session id on ctty
        pub const IOCGSID = tioc('t', 22);
        /// simulate terminal input
        pub const IOCSTI = tioc('t', 23);
        /// set all modem bits
        pub const IOCMSET = tioc('t', 26);
        /// bis modem bits
        pub const IOCMBIS = tioc('t', 27);
        /// bic modem bits
        pub const IOCMBIC = tioc('t', 28);
        /// get all modem bits
        pub const IOCMGET = tioc('t', 29);

        fn tioc(t: u16, num: u8) u16 {
            return (t << 8) | num;
        }
    },
    .netbsd => struct {
        pub const IOCCBRK = 0x2000747a;
        pub const IOCCDTR = 0x20007478;
        pub const IOCCONS = 0x80047462;
        pub const IOCDCDTIMESTAMP = 0x40107458;
        pub const IOCDRAIN = 0x2000745e;
        pub const IOCEXCL = 0x2000740d;
        pub const IOCEXT = 0x80047460;
        pub const IOCFLAG_CDTRCTS = 0x10;
        pub const IOCFLAG_CLOCAL = 0x2;
        pub const IOCFLAG_CRTSCTS = 0x4;
        pub const IOCFLAG_MDMBUF = 0x8;
        pub const IOCFLAG_SOFTCAR = 0x1;
        pub const IOCFLUSH = 0x80047410;
        pub const IOCGETA = 0x402c7413;
        pub const IOCGETD = 0x4004741a;
        pub const IOCGFLAGS = 0x4004745d;
        pub const IOCGLINED = 0x40207442;
        pub const IOCGPGRP = 0x40047477;
        pub const IOCGQSIZE = 0x40047481;
        pub const IOCGRANTPT = 0x20007447;
        pub const IOCGSID = 0x40047463;
        pub const IOCGSIZE = 0x40087468;
        pub const IOCGWINSZ = 0x40087468;
        pub const IOCMBIC = 0x8004746b;
        pub const IOCMBIS = 0x8004746c;
        pub const IOCMGET = 0x4004746a;
        pub const IOCMSET = 0x8004746d;
        pub const IOCM_CAR = 0x40;
        pub const IOCM_CD = 0x40;
        pub const IOCM_CTS = 0x20;
        pub const IOCM_DSR = 0x100;
        pub const IOCM_DTR = 0x2;
        pub const IOCM_LE = 0x1;
        pub const IOCM_RI = 0x80;
        pub const IOCM_RNG = 0x80;
        pub const IOCM_RTS = 0x4;
        pub const IOCM_SR = 0x10;
        pub const IOCM_ST = 0x8;
        pub const IOCNOTTY = 0x20007471;
        pub const IOCNXCL = 0x2000740e;
        pub const IOCOUTQ = 0x40047473;
        pub const IOCPKT = 0x80047470;
        pub const IOCPKT_DATA = 0x0;
        pub const IOCPKT_DOSTOP = 0x20;
        pub const IOCPKT_FLUSHREAD = 0x1;
        pub const IOCPKT_FLUSHWRITE = 0x2;
        pub const IOCPKT_IOCTL = 0x40;
        pub const IOCPKT_NOSTOP = 0x10;
        pub const IOCPKT_START = 0x8;
        pub const IOCPKT_STOP = 0x4;
        pub const IOCPTMGET = 0x40287446;
        pub const IOCPTSNAME = 0x40287448;
        pub const IOCRCVFRAME = 0x80087445;
        pub const IOCREMOTE = 0x80047469;
        pub const IOCSBRK = 0x2000747b;
        pub const IOCSCTTY = 0x20007461;
        pub const IOCSDTR = 0x20007479;
        pub const IOCSETA = 0x802c7414;
        pub const IOCSETAF = 0x802c7416;
        pub const IOCSETAW = 0x802c7415;
        pub const IOCSETD = 0x8004741b;
        pub const IOCSFLAGS = 0x8004745c;
        pub const IOCSIG = 0x2000745f;
        pub const IOCSLINED = 0x80207443;
        pub const IOCSPGRP = 0x80047476;
        pub const IOCSQSIZE = 0x80047480;
        pub const IOCSSIZE = 0x80087467;
        pub const IOCSTART = 0x2000746e;
        pub const IOCSTAT = 0x80047465;
        pub const IOCSTI = 0x80017472;
        pub const IOCSTOP = 0x2000746f;
        pub const IOCSWINSZ = 0x80087467;
        pub const IOCUCNTL = 0x80047466;
        pub const IOCXMTFRAME = 0x80087444;
    },
    .haiku => struct {
        pub const CGETA = 0x8000;
        pub const CSETA = 0x8001;
        pub const CSETAF = 0x8002;
        pub const CSETAW = 0x8003;
        pub const CWAITEVENT = 0x8004;
        pub const CSBRK = 0x8005;
        pub const CFLSH = 0x8006;
        pub const CXONC = 0x8007;
        pub const CQUERYCONNECTED = 0x8008;
        pub const CGETBITS = 0x8009;
        pub const CSETDTR = 0x8010;
        pub const CSETRTS = 0x8011;
        pub const IOCGWINSZ = 0x8012;
        pub const IOCSWINSZ = 0x8013;
        pub const CVTIME = 0x8014;
        pub const IOCGPGRP = 0x8015;
        pub const IOCSPGRP = 0x8016;
        pub const IOCSCTTY = 0x8017;
        pub const IOCMGET = 0x8018;
        pub const IOCMSET = 0x8019;
        pub const IOCSBRK = 0x8020;
        pub const IOCCBRK = 0x8021;
        pub const IOCMBIS = 0x8022;
        pub const IOCMBIC = 0x8023;
        pub const IOCGSID = 0x8024;

        pub const FIONREAD = 0xbe000001;
        pub const FIONBIO = 0xbe000000;
    },
    .openbsd => struct {
        pub const IOCCBRK = 0x2000747a;
        pub const IOCCDTR = 0x20007478;
        pub const IOCCONS = 0x80047462;
        pub const IOCDCDTIMESTAMP = 0x40107458;
        pub const IOCDRAIN = 0x2000745e;
        pub const IOCEXCL = 0x2000740d;
        pub const IOCEXT = 0x80047460;
        pub const IOCFLAG_CDTRCTS = 0x10;
        pub const IOCFLAG_CLOCAL = 0x2;
        pub const IOCFLAG_CRTSCTS = 0x4;
        pub const IOCFLAG_MDMBUF = 0x8;
        pub const IOCFLAG_SOFTCAR = 0x1;
        pub const IOCFLUSH = 0x80047410;
        pub const IOCGETA = 0x402c7413;
        pub const IOCGETD = 0x4004741a;
        pub const IOCGFLAGS = 0x4004745d;
        pub const IOCGLINED = 0x40207442;
        pub const IOCGPGRP = 0x40047477;
        pub const IOCGQSIZE = 0x40047481;
        pub const IOCGRANTPT = 0x20007447;
        pub const IOCGSID = 0x40047463;
        pub const IOCGSIZE = 0x40087468;
        pub const IOCGWINSZ = 0x40087468;
        pub const IOCMBIC = 0x8004746b;
        pub const IOCMBIS = 0x8004746c;
        pub const IOCMGET = 0x4004746a;
        pub const IOCMSET = 0x8004746d;
        pub const IOCM_CAR = 0x40;
        pub const IOCM_CD = 0x40;
        pub const IOCM_CTS = 0x20;
        pub const IOCM_DSR = 0x100;
        pub const IOCM_DTR = 0x2;
        pub const IOCM_LE = 0x1;
        pub const IOCM_RI = 0x80;
        pub const IOCM_RNG = 0x80;
        pub const IOCM_RTS = 0x4;
        pub const IOCM_SR = 0x10;
        pub const IOCM_ST = 0x8;
        pub const IOCNOTTY = 0x20007471;
        pub const IOCNXCL = 0x2000740e;
        pub const IOCOUTQ = 0x40047473;
        pub const IOCPKT = 0x80047470;
        pub const IOCPKT_DATA = 0x0;
        pub const IOCPKT_DOSTOP = 0x20;
        pub const IOCPKT_FLUSHREAD = 0x1;
        pub const IOCPKT_FLUSHWRITE = 0x2;
        pub const IOCPKT_IOCTL = 0x40;
        pub const IOCPKT_NOSTOP = 0x10;
        pub const IOCPKT_START = 0x8;
        pub const IOCPKT_STOP = 0x4;
        pub const IOCPTMGET = 0x40287446;
        pub const IOCPTSNAME = 0x40287448;
        pub const IOCRCVFRAME = 0x80087445;
        pub const IOCREMOTE = 0x80047469;
        pub const IOCSBRK = 0x2000747b;
        pub const IOCSCTTY = 0x20007461;
        pub const IOCSDTR = 0x20007479;
        pub const IOCSETA = 0x802c7414;
        pub const IOCSETAF = 0x802c7416;
        pub const IOCSETAW = 0x802c7415;
        pub const IOCSETD = 0x8004741b;
        pub const IOCSFLAGS = 0x8004745c;
        pub const IOCSIG = 0x2000745f;
        pub const IOCSLINED = 0x80207443;
        pub const IOCSPGRP = 0x80047476;
        pub const IOCSQSIZE = 0x80047480;
        pub const IOCSSIZE = 0x80087467;
        pub const IOCSTART = 0x2000746e;
        pub const IOCSTAT = 0x80047465;
        pub const IOCSTI = 0x80017472;
        pub const IOCSTOP = 0x2000746f;
        pub const IOCSWINSZ = 0x80087467;
        pub const IOCUCNTL = 0x80047466;
        pub const IOCXMTFRAME = 0x80087444;
    },
    .dragonfly => struct {
        pub const IOCMODG = 0x40047403;
        pub const IOCMODS = 0x80047404;
        pub const IOCM_LE = 0x00000001;
        pub const IOCM_DTR = 0x00000002;
        pub const IOCM_RTS = 0x00000004;
        pub const IOCM_ST = 0x00000008;
        pub const IOCM_SR = 0x00000010;
        pub const IOCM_CTS = 0x00000020;
        pub const IOCM_CAR = 0x00000040;
        pub const IOCM_CD = 0x00000040;
        pub const IOCM_RNG = 0x00000080;
        pub const IOCM_RI = 0x00000080;
        pub const IOCM_DSR = 0x00000100;
        pub const IOCEXCL = 0x2000740d;
        pub const IOCNXCL = 0x2000740e;
        pub const IOCFLUSH = 0x80047410;
        pub const IOCGETA = 0x402c7413;
        pub const IOCSETA = 0x802c7414;
        pub const IOCSETAW = 0x802c7415;
        pub const IOCSETAF = 0x802c7416;
        pub const IOCGETD = 0x4004741a;
        pub const IOCSETD = 0x8004741b;
        pub const IOCSBRK = 0x2000747b;
        pub const IOCCBRK = 0x2000747a;
        pub const IOCSDTR = 0x20007479;
        pub const IOCCDTR = 0x20007478;
        pub const IOCGPGRP = 0x40047477;
        pub const IOCSPGRP = 0x80047476;
        pub const IOCOUTQ = 0x40047473;
        pub const IOCSTI = 0x80017472;
        pub const IOCNOTTY = 0x20007471;
        pub const IOCPKT = 0x80047470;
        pub const IOCPKT_DATA = 0x00000000;
        pub const IOCPKT_FLUSHREAD = 0x00000001;
        pub const IOCPKT_FLUSHWRITE = 0x00000002;
        pub const IOCPKT_STOP = 0x00000004;
        pub const IOCPKT_START = 0x00000008;
        pub const IOCPKT_NOSTOP = 0x00000010;
        pub const IOCPKT_DOSTOP = 0x00000020;
        pub const IOCPKT_IOCTL = 0x00000040;
        pub const IOCSTOP = 0x2000746f;
        pub const IOCSTART = 0x2000746e;
        pub const IOCMSET = 0x8004746d;
        pub const IOCMBIS = 0x8004746c;
        pub const IOCMBIC = 0x8004746b;
        pub const IOCMGET = 0x4004746a;
        pub const IOCREMOTE = 0x80047469;
        pub const IOCGWINSZ = 0x40087468;
        pub const IOCSWINSZ = 0x80087467;
        pub const IOCUCNTL = 0x80047466;
        pub const IOCSTAT = 0x20007465;
        pub const IOCGSID = 0x40047463;
        pub const IOCCONS = 0x80047462;
        pub const IOCSCTTY = 0x20007461;
        pub const IOCEXT = 0x80047460;
        pub const IOCSIG = 0x2000745f;
        pub const IOCDRAIN = 0x2000745e;
        pub const IOCMSDTRWAIT = 0x8004745b;
        pub const IOCMGDTRWAIT = 0x4004745a;
        pub const IOCTIMESTAMP = 0x40107459;
        pub const IOCDCDTIMESTAMP = 0x40107458;
        pub const IOCSDRAINWAIT = 0x80047457;
        pub const IOCGDRAINWAIT = 0x40047456;
        pub const IOCISPTMASTER = 0x20007455;
    },
    // https://github.com/SerenityOS/serenity/blob/cb10f70394fb7e9cfc77f827adb2e46d199bc3a5/Kernel/API/Ioctl.h#L84-L96
    .serenity => struct {
        pub const IOCGPGRP = 0;
        pub const IOCSPGRP = 1;
        pub const CGETS = 2;
        pub const CSETS = 3;
        pub const CSETSW = 4;
        pub const CSETSF = 5;
        pub const CFLSH = 6;
        pub const IOCGWINSZ = 7;
        pub const IOCSCTTY = 8;
        pub const IOCSTI = 9;
        pub const IOCNOTTY = 10;
        pub const IOCSWINSZ = 11;
        pub const IOCGPTN = 12;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-iocparm-mask"></a>`IOCPARM_MASK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const IOCPARM_MASK = switch (native_os) {
    .windows => ws2_32.IOCPARM_MASK,
    .macos, .ios, .tvos, .watchos, .visionos => 0x1fff,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-tcsa"></a>`TCSA`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TCSA = std.posix.TCSA
\`\`\`

</details>

---

### <a id="const-tfd"></a>`TFD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TFD = switch (native_os) {
    .linux => linux.TFD,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-vdso"></a>`VDSO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const VDSO = switch (native_os) {
    .linux => linux.VDSO,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-w"></a>`W`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const W = switch (native_os) {
    .linux => linux.W,
    .emscripten => emscripten.W,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        /// [XSI] no hang in wait/no child to reap
        pub const NOHANG = 0x00000001;
        /// [XSI] notify on stop, untraced child
        pub const UNTRACED = 0x00000002;

        pub fn EXITSTATUS(x: u32) u8 {
            return @as(u8, @intCast(x >> 8));
        }
        pub fn TERMSIG(x: u32) u32 {
            return status(x);
        }
        pub fn STOPSIG(x: u32) u32 {
            return x >> 8;
        }
        pub fn IFEXITED(x: u32) bool {
            return status(x) == 0;
        }
        pub fn IFSTOPPED(x: u32) bool {
            return status(x) == stopped and STOPSIG(x) != 0x13;
        }
        pub fn IFSIGNALED(x: u32) bool {
            return status(x) != stopped and status(x) != 0;
        }

        fn status(x: u32) u32 {
            return x & 0o177;
        }
        const stopped = 0o177;
    },
    .freebsd => struct {
        pub const NOHANG = 1;
        pub const UNTRACED = 2;
        pub const STOPPED = UNTRACED;
        pub const CONTINUED = 4;
        pub const NOWAIT = 8;
        pub const EXITED = 16;
        pub const TRAPPED = 32;

        pub fn EXITSTATUS(s: u32) u8 {
            return @as(u8, @intCast((s & 0xff00) >> 8));
        }
        pub fn TERMSIG(s: u32) u32 {
            return s & 0x7f;
        }
        pub fn STOPSIG(s: u32) u32 {
            return EXITSTATUS(s);
        }
        pub fn IFEXITED(s: u32) bool {
            return TERMSIG(s) == 0;
        }
        pub fn IFSTOPPED(s: u32) bool {
            return @as(u16, @truncate((((s & 0xffff) *% 0x10001) >> 8))) > 0x7f00;
        }
        pub fn IFSIGNALED(s: u32) bool {
            return (s & 0xffff) -% 1 < 0xff;
        }
    },
    .solaris, .illumos => struct {
        pub const EXITED = 0o001;
        pub const TRAPPED = 0o002;
        pub const UNTRACED = 0o004;
        pub const STOPPED = UNTRACED;
        pub const CONTINUED = 0o010;
        pub const NOHANG = 0o100;
        pub const NOWAIT = 0o200;

        pub fn EXITSTATUS(s: u32) u8 {
            return @as(u8, @intCast((s >> 8) & 0xff));
        }
        pub fn TERMSIG(s: u32) u32 {
            return s & 0x7f;
        }
        pub fn STOPSIG(s: u32) u32 {
            return EXITSTATUS(s);
        }
        pub fn IFEXITED(s: u32) bool {
            return TERMSIG(s) == 0;
        }

        pub fn IFCONTINUED(s: u32) bool {
            return ((s & 0o177777) == 0o177777);
        }

        pub fn IFSTOPPED(s: u32) bool {
            return (s & 0x00ff != 0o177) and !(s & 0xff00 != 0);
        }

        pub fn IFSIGNALED(s: u32) bool {
            return s & 0x00ff > 0 and s & 0xff00 == 0;
        }
    },
    .netbsd => struct {
        pub const NOHANG = 0x00000001;
        pub const UNTRACED = 0x00000002;
        pub const STOPPED = UNTRACED;
        pub const CONTINUED = 0x00000010;
        pub const NOWAIT = 0x00010000;
        pub const EXITED = 0x00000020;
        pub const TRAPPED = 0x00000040;

        pub fn EXITSTATUS(s: u32) u8 {
            return @as(u8, @intCast((s >> 8) & 0xff));
        }
        pub fn TERMSIG(s: u32) u32 {
            return s & 0x7f;
        }
        pub fn STOPSIG(s: u32) u32 {
            return EXITSTATUS(s);
        }
        pub fn IFEXITED(s: u32) bool {
            return TERMSIG(s) == 0;
        }

        pub fn IFCONTINUED(s: u32) bool {
            return ((s & 0x7f) == 0xffff);
        }

        pub fn IFSTOPPED(s: u32) bool {
            return ((s & 0x7f != 0x7f) and !IFCONTINUED(s));
        }

        pub fn IFSIGNALED(s: u32) bool {
            return !IFSTOPPED(s) and !IFCONTINUED(s) and !IFEXITED(s);
        }
    },
    .dragonfly => struct {
        pub const NOHANG = 0x0001;
        pub const UNTRACED = 0x0002;
        pub const CONTINUED = 0x0004;
        pub const STOPPED = UNTRACED;
        pub const NOWAIT = 0x0008;
        pub const EXITED = 0x0010;
        pub const TRAPPED = 0x0020;

        pub fn EXITSTATUS(s: u32) u8 {
            return @as(u8, @intCast((s & 0xff00) >> 8));
        }
        pub fn TERMSIG(s: u32) u32 {
            return s & 0x7f;
        }
        pub fn STOPSIG(s: u32) u32 {
            return EXITSTATUS(s);
        }
        pub fn IFEXITED(s: u32) bool {
            return TERMSIG(s) == 0;
        }
        pub fn IFSTOPPED(s: u32) bool {
            return @as(u16, @truncate((((s & 0xffff) *% 0x10001) >> 8))) > 0x7f00;
        }
        pub fn IFSIGNALED(s: u32) bool {
            return (s & 0xffff) -% 1 < 0xff;
        }
    },
    .haiku => struct {
        pub const NOHANG = 0x1;
        pub const UNTRACED = 0x2;
        pub const CONTINUED = 0x4;
        pub const EXITED = 0x08;
        pub const STOPPED = 0x10;
        pub const NOWAIT = 0x20;

        pub fn EXITSTATUS(s: u32) u8 {
            return @as(u8, @intCast(s & 0xff));
        }

        pub fn TERMSIG(s: u32) u32 {
            return (s >> 8) & 0xff;
        }

        pub fn STOPSIG(s: u32) u32 {
            return (s >> 16) & 0xff;
        }

        pub fn IFEXITED(s: u32) bool {
            return (s & ~@as(u32, 0xff)) == 0;
        }

        pub fn IFSTOPPED(s: u32) bool {
            return ((s >> 16) & 0xff) != 0;
        }

        pub fn IFSIGNALED(s: u32) bool {
            return ((s >> 8) & 0xff) != 0;
        }
    },
    .openbsd => struct {
        pub const NOHANG = 1;
        pub const UNTRACED = 2;
        pub const CONTINUED = 8;

        pub fn EXITSTATUS(s: u32) u8 {
            return @as(u8, @intCast((s >> 8) & 0xff));
        }
        pub fn TERMSIG(s: u32) u32 {
            return (s & 0x7f);
        }
        pub fn STOPSIG(s: u32) u32 {
            return EXITSTATUS(s);
        }
        pub fn IFEXITED(s: u32) bool {
            return TERMSIG(s) == 0;
        }

        pub fn IFCONTINUED(s: u32) bool {
            return ((s & 0o177777) == 0o177777);
        }

        pub fn IFSTOPPED(s: u32) bool {
            return (s & 0xff == 0o177);
        }

        pub fn IFSIGNALED(s: u32) bool {
            return (((s) & 0o177) != 0o177) and (((s) & 0o177) != 0);
        }
    },
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/sys/wait.h
    .serenity => struct {
        pub const NOHANG = 1;
        pub const UNTRACED = 2;
        pub const STOPPED = UNTRACED;
        pub const EXITED = 4;
        pub const CONTINUED = 8;
        pub const NOWAIT = 0x1000000;

        pub fn EXITSTATUS(s: u32) u8 {
            return @intCast((s & 0xff00) >> 8);
        }

        pub fn STOPSIG(s: u32) u32 {
            return EXITSTATUS(s);
        }

        pub fn TERMSIG(s: u32) u32 {
            return s & 0x7f;
        }

        pub fn IFEXITED(s: u32) bool {
            return TERMSIG(s) == 0;
        }

        pub fn IFSTOPPED(s: u32) bool {
            return (s & 0xff) == 0x7f;
        }

        pub fn IFSIGNALED(s: u32) bool {
            return (((s & 0x7f) + 1) >> 1) > 0;
        }

        pub fn IFCONTINUED(s: u32) bool {
            return s == 0xffff;
        }
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-clock-t"></a>`clock_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const clock_t = switch (native_os) {
    .linux => linux.clock_t,
    .emscripten => emscripten.clock_t,
    .macos, .ios, .tvos, .watchos, .visionos => c_ulong,
    .freebsd => isize,
    .openbsd, .solaris, .illumos => i64,
    .netbsd => u32,
    .haiku => i32,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L50
    .serenity => u64,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-cpu-set-t"></a>`cpu_set_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const cpu_set_t = switch (native_os) {
    .linux => linux.cpu_set_t,
    .emscripten => emscripten.cpu_set_t,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-dl-phdr-info"></a>`dl_phdr_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dl_phdr_info = switch (native_os) {
    .linux => linux.dl_phdr_info,
    .emscripten => emscripten.dl_phdr_info,
    .freebsd => extern struct {
        /// Module relocation base.
        addr: std.elf.Addr,
        /// Module name.
        name: ?[*:0]const u8,
        /// Pointer to module's phdr.
        phdr: [*]std.elf.Phdr,
        /// Number of entries in phdr.
        phnum: u16,
        /// Total number of loads.
        adds: u64,
        /// Total number of unloads.
        subs: u64,
        tls_modid: usize,
        tls_data: ?*anyopaque,
    },
    .solaris, .illumos => extern struct {
        addr: std.elf.Addr,
        name: ?[*:0]const u8,
        phdr: [*]std.elf.Phdr,
        phnum: std.elf.Half,
        /// Incremented when a new object is mapped into the process.
        adds: u64,
        /// Incremented when an object is unmapped from the process.
        subs: u64,
    },
    // https://github.com/SerenityOS/serenity/blob/45d81dceed81df0c8ef75b440b20cc0938195faa/Userland/Libraries/LibC/link.h#L15-L20
    .openbsd, .haiku, .dragonfly, .netbsd, .serenity => extern struct {
        addr: usize,
        name: ?[*:0]const u8,
        phdr: [*]std.elf.Phdr,
        phnum: std.elf.Half,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-epoll-event"></a>`epoll_event`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const epoll_event = switch (native_os) {
    .linux => linux.epoll_event,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-ifreq"></a>`ifreq`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const ifreq = switch (native_os) {
    .linux => linux.ifreq,
    .emscripten => emscripten.ifreq,
    .solaris, .illumos => lifreq,
    // https://github.com/SerenityOS/serenity/blob/9882848e0bf783dfc8e8a6d887a848d70d9c58f4/Kernel/API/POSIX/net/if.h#L49-L82
    .serenity => extern struct {
        // Not actually in a union, but the stdlib expects one for ifreq
        ifrn: extern union {
            name: [IFNAMESIZE]u8,
        },
        ifru: extern union {
            addr: sockaddr,
            dstaddr: sockaddr,
            broadaddr: sockaddr,
            netmask: sockaddr,
            hwaddr: sockaddr,
            flags: c_short,
            metric: c_int,
            vnetid: i64,
            media: u64,
            data: ?*anyopaque,
            index: c_uint,
        },
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-itimerspec"></a>`itimerspec`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const itimerspec = switch (native_os) {
    .linux => linux.itimerspec,
    .haiku => extern struct {
        interval: timespec,
        value: timespec,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-msghdr"></a>`msghdr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const msghdr = switch (native_os) {
    .linux => linux.msghdr,
    .openbsd,
    .emscripten,
    .dragonfly,
    .freebsd,
    .netbsd,
    .haiku,
    .solaris,
    .illumos,
    .macos,
    .driverkit,
    .ios,
    .tvos,
    .visionos,
    .watchos,
    => extern struct {
        /// optional address
        name: ?*sockaddr,
        /// size of address
        namelen: socklen_t,
        /// scatter/gather array
        iov: [*]iovec,
        /// # elements in iov
        iovlen: i32,
        /// ancillary data
        control: ?*anyopaque,
        /// ancillary data buffer len
        controllen: socklen_t,
        /// flags on received message
        flags: i32,
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L74-L82
    .serenity => extern struct {
        name: ?*anyopaque,
        namelen: socklen_t,
        iov: [*]iovec,
        iovlen: c_int,
        control: ?*anyopaque,
        controllen: socklen_t,
        flags: c_int,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-msghdr-const"></a>`msghdr_const`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const msghdr_const = switch (native_os) {
    .linux => linux.msghdr_const,
    .openbsd,
    .emscripten,
    .dragonfly,
    .freebsd,
    .netbsd,
    .haiku,
    .solaris,
    .illumos,
    .macos,
    .driverkit,
    .ios,
    .tvos,
    .visionos,
    .watchos,
    => extern struct {
        /// optional address
        name: ?*const sockaddr,
        /// size of address
        namelen: socklen_t,
        /// scatter/gather array
        iov: [*]const iovec_const,
        /// # elements in iov
        iovlen: u32,
        /// ancillary data
        control: ?*const anyopaque,
        /// ancillary data buffer len
        controllen: socklen_t,
        /// flags on received message
        flags: i32,
    },
    .serenity => extern struct {
        name: ?*const anyopaque,
        namelen: socklen_t,
        iov: [*]const iovec_const,
        iovlen: c_uint,
        control: ?*const anyopaque,
        controllen: socklen_t,
        flags: c_int,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-nfds-t"></a>`nfds_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const nfds_t = switch (native_os) {
    .linux => linux.nfds_t,
    .emscripten => emscripten.nfds_t,
    .haiku, .solaris, .illumos, .wasi => usize,
    .windows => c_ulong,
    .openbsd, .dragonfly, .netbsd, .freebsd, .macos, .ios, .tvos, .watchos, .visionos => u32,
    // https://github.com/SerenityOS/serenity/blob/265764ff2fec038855193296588a887fc322d76a/Kernel/API/POSIX/poll.h#L32
    .serenity => c_uint,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-perf-event-attr"></a>`perf_event_attr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const perf_event_attr = switch (native_os) {
    .linux => linux.perf_event_attr,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pid-t"></a>`pid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pid_t = switch (native_os) {
    .linux => linux.pid_t,
    .emscripten => emscripten.pid_t,
    .windows => windows.HANDLE,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L31-L32
    .serenity => c_int,
    else => i32,
}
\`\`\`

</details>

---

### <a id="const-pollfd"></a>`pollfd`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pollfd = switch (native_os) {
    .linux => linux.pollfd,
    .emscripten => emscripten.pollfd,
    .windows => ws2_32.pollfd,
    // https://github.com/SerenityOS/serenity/blob/265764ff2fec038855193296588a887fc322d76a/Kernel/API/POSIX/poll.h#L26-L30
    .serenity => extern struct {
        fd: fd_t,
        events: c_short,
        revents: c_short,
    },
    else => extern struct {
        fd: fd_t,
        events: i16,
        revents: i16,
    },
}
\`\`\`

</details>

---

### <a id="const-rlim-t"></a>`rlim_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const rlim_t = switch (native_os) {
    .linux => linux.rlim_t,
    .emscripten => emscripten.rlim_t,
    .openbsd, .netbsd, .solaris, .illumos, .macos, .ios, .tvos, .watchos, .visionos => u64,
    .haiku, .dragonfly, .freebsd => i64,
    // https://github.com/SerenityOS/serenity/blob/aae106e37b48f2158e68902293df1e4bf7b80c0f/Userland/Libraries/LibC/sys/resource.h#L54
    .serenity => usize,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-rlimit"></a>`rlimit`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const rlimit = switch (native_os) {
    .linux, .emscripten => linux.rlimit,
    .windows => void,
    // https://github.com/SerenityOS/serenity/blob/aae106e37b48f2158e68902293df1e4bf7b80c0f/Userland/Libraries/LibC/sys/resource.h#L56-L59
    else => extern struct {
        /// Soft limit
        cur: rlim_t,
        /// Hard limit
        max: rlim_t,
    },
}
\`\`\`

</details>

---

### <a id="const-rlimit-resource"></a>`rlimit_resource`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const rlimit_resource = switch (native_os) {
    .linux => linux.rlimit_resource,
    .emscripten => emscripten.rlimit_resource,
    .openbsd, .macos, .ios, .tvos, .watchos, .visionos => enum(c_int) {
        CPU = 0,
        FSIZE = 1,
        DATA = 2,
        STACK = 3,
        CORE = 4,
        RSS = 5,
        MEMLOCK = 6,
        NPROC = 7,
        NOFILE = 8,
        _,

        pub const AS: rlimit_resource = .RSS;
    },
    .freebsd => enum(c_int) {
        CPU = 0,
        FSIZE = 1,
        DATA = 2,
        STACK = 3,
        CORE = 4,
        RSS = 5,
        MEMLOCK = 6,
        NPROC = 7,
        NOFILE = 8,
        SBSIZE = 9,
        VMEM = 10,
        NPTS = 11,
        SWAP = 12,
        KQUEUES = 13,
        UMTXP = 14,
        _,

        pub const AS: rlimit_resource = .VMEM;
    },
    .solaris, .illumos => enum(c_int) {
        CPU = 0,
        FSIZE = 1,
        DATA = 2,
        STACK = 3,
        CORE = 4,
        NOFILE = 5,
        VMEM = 6,
        _,

        pub const AS: rlimit_resource = .VMEM;
    },
    .netbsd => enum(c_int) {
        CPU = 0,
        FSIZE = 1,
        DATA = 2,
        STACK = 3,
        CORE = 4,
        RSS = 5,
        MEMLOCK = 6,
        NPROC = 7,
        NOFILE = 8,
        SBSIZE = 9,
        VMEM = 10,
        NTHR = 11,
        _,

        pub const AS: rlimit_resource = .VMEM;
    },
    .dragonfly => enum(c_int) {
        CPU = 0,
        FSIZE = 1,
        DATA = 2,
        STACK = 3,
        CORE = 4,
        RSS = 5,
        MEMLOCK = 6,
        NPROC = 7,
        NOFILE = 8,
        SBSIZE = 9,
        VMEM = 10,
        POSIXLOCKS = 11,
        _,

        pub const AS: rlimit_resource = .VMEM;
    },
    .haiku => enum(i32) {
        CORE = 0,
        CPU = 1,
        DATA = 2,
        FSIZE = 3,
        NOFILE = 4,
        STACK = 5,
        AS = 6,
        NOVMON = 7,
        _,
    },
    // https://github.com/SerenityOS/serenity/blob/aae106e37b48f2158e68902293df1e4bf7b80c0f/Userland/Libraries/LibC/sys/resource.h#L42-L48
    .serenity => enum(c_int) {
        CORE = 1,
        CPU = 2,
        DATA = 3,
        FSIZE = 4,
        NOFILE = 5,
        STACK = 6,
        AS = 7,
        _,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-rusage"></a>`rusage`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const rusage = switch (native_os) {
    .linux => linux.rusage,
    .emscripten => emscripten.rusage,
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        utime: timeval,
        stime: timeval,
        maxrss: isize,
        ixrss: isize,
        idrss: isize,
        isrss: isize,
        minflt: isize,
        majflt: isize,
        nswap: isize,
        inblock: isize,
        oublock: isize,
        msgsnd: isize,
        msgrcv: isize,
        nsignals: isize,
        nvcsw: isize,
        nivcsw: isize,

        pub const SELF = 0;
        pub const CHILDREN = -1;
    },
    .solaris, .illumos => extern struct {
        utime: timeval,
        stime: timeval,
        maxrss: isize,
        ixrss: isize,
        idrss: isize,
        isrss: isize,
        minflt: isize,
        majflt: isize,
        nswap: isize,
        inblock: isize,
        oublock: isize,
        msgsnd: isize,
        msgrcv: isize,
        nsignals: isize,
        nvcsw: isize,
        nivcsw: isize,

        pub const SELF = 0;
        pub const CHILDREN = -1;
        pub const THREAD = 1;
    },
    // https://github.com/SerenityOS/serenity/blob/aae106e37b48f2158e68902293df1e4bf7b80c0f/Userland/Libraries/LibC/sys/resource.h#L18-L38
    .serenity => extern struct {
        utime: timeval,
        stime: timeval,
        maxrss: c_long,
        ixrss: c_long,
        idrss: c_long,
        isrss: c_long,
        minflt: c_long,
        majflt: c_long,
        nswap: c_long,
        inblock: c_long,
        oublock: c_long,
        msgsnd: c_long,
        msgrcv: c_long,
        nsignals: c_long,
        nvcsw: c_long,
        nivcsw: c_long,

        pub const SELF = 1;
        pub const CHILDREN = 2;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-siginfo-t"></a>`siginfo_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const siginfo_t = switch (native_os) {
    .linux => linux.siginfo_t,
    .emscripten => emscripten.siginfo_t,
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        signo: c_int,
        errno: c_int,
        code: c_int,
        pid: pid_t,
        uid: uid_t,
        status: c_int,
        addr: *allowzero anyopaque,
        value: extern union {
            int: c_int,
            ptr: *anyopaque,
        },
        si_band: c_long,
        _pad: [7]c_ulong,
    },
    .freebsd => extern struct {
        // Signal number.
        signo: c_int,
        // Errno association.
        errno: c_int,
        /// Signal code.
        ///
        /// Cause of signal, one of the SI_ macros or signal-specific values, i.e.
        /// one of the FPE_... values for SIGFPE.
        /// This value is equivalent to the second argument to an old-style FreeBSD
        /// signal handler.
        code: c_int,
        /// Sending process.
        pid: pid_t,
        /// Sender's ruid.
        uid: uid_t,
        /// Exit value.
        status: c_int,
        /// Faulting instruction.
        addr: *allowzero anyopaque,
        /// Signal value.
        value: sigval,
        reason: extern union {
            fault: extern struct {
                /// Machine specific trap code.
                trapno: c_int,
            },
            timer: extern struct {
                timerid: c_int,
                overrun: c_int,
            },
            mesgq: extern struct {
                mqd: c_int,
            },
            poll: extern struct {
                /// Band event for SIGPOLL. UNUSED.
                band: c_long,
            },
            spare: extern struct {
                spare1: c_long,
                spare2: [7]c_int,
            },
        },
    },
    .solaris, .illumos => extern struct {
        signo: c_int,
        code: c_int,
        errno: c_int,
        // 64bit architectures insert 4bytes of padding here, this is done by
        // correctly aligning the reason field
        reason: extern union {
            proc: extern struct {
                pid: pid_t,
                pdata: extern union {
                    kill: extern struct {
                        uid: uid_t,
                        value: sigval_t,
                    },
                    cld: extern struct {
                        utime: clock_t,
                        status: c_int,
                        stime: clock_t,
                    },
                },
                contract: solaris.ctid_t,
                zone: solaris.zoneid_t,
            },
            fault: extern struct {
                addr: *allowzero anyopaque,
                trapno: c_int,
                pc: ?*anyopaque,
            },
            file: extern struct {
                // fd not currently available for SIGPOLL.
                fd: c_int,
                band: c_long,
            },
            prof: extern struct {
                addr: ?*anyopaque,
                timestamp: timespec,
                syscall: c_short,
                sysarg: u8,
                fault: u8,
                args: [8]c_long,
                state: [10]c_int,
            },
            rctl: extern struct {
                entity: i32,
            },
            __pad: [256 - 4 * @sizeOf(c_int)]u8,
        } align(@sizeOf(usize)),

        comptime {
            assert(@sizeOf(@This()) == 256);
            assert(@alignOf(@This()) == @sizeOf(usize));
        }
    },
    .netbsd => extern union {
        pad: [128]u8,
        info: netbsd._ksiginfo,
    },
    .dragonfly => extern struct {
        signo: c_int,
        errno: c_int,
        code: c_int,
        pid: c_int,
        uid: uid_t,
        status: c_int,
        addr: *allowzero anyopaque,
        value: sigval,
        band: c_long,
        __spare__: [7]c_int,
    },
    .haiku => extern struct {
        signo: i32,
        code: i32,
        errno: i32,

        pid: pid_t,
        uid: uid_t,
        addr: *allowzero anyopaque,
    },
    .openbsd => extern struct {
        signo: c_int,
        code: c_int,
        errno: c_int,
        data: extern union {
            proc: extern struct {
                pid: pid_t,
                pdata: extern union {
                    kill: extern struct {
                        uid: uid_t,
                        value: sigval,
                    },
                    cld: extern struct {
                        utime: clock_t,
                        stime: clock_t,
                        status: c_int,
                    },
                },
            },
            fault: extern struct {
                addr: *allowzero anyopaque,
                trapno: c_int,
            },
            __pad: [128 - 3 * @sizeOf(c_int)]u8,
        },

        comptime {
            if (@sizeOf(usize) == 4)
                assert(@sizeOf(@This()) == 128)
            else
                // Take into account the padding between errno and data fields.
                assert(@sizeOf(@This()) == 136);
        }
    },
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L27-L37
    .serenity => extern struct {
        signo: c_int,
        code: c_int,
        errno: c_int,
        pid: pid_t,
        uid: uid_t,
        addr: ?*anyopaque,
        status: c_int,
        band: c_int,
        value: sigval,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sigset-t"></a>`sigset_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigset_t = switch (native_os) {
    .linux => [1024 / @bitSizeOf(c_ulong)]c_ulong, // glibc and musl present a 1024-bit sigset_t, while kernel's is 128-bit or less.
    .emscripten => emscripten.sigset_t,
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L19
    .openbsd, .serenity => u32,
    .macos, .ios, .tvos, .watchos, .visionos => darwin.sigset_t,
    .dragonfly, .netbsd, .solaris, .illumos, .freebsd => extern struct {
        __bits: [SIG.WORDS]u32,
    },
    .haiku => u64,
    else => u0,
}
\`\`\`

</details>

---

### <a id="const-sigval"></a>`sigval`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigval = switch (native_os) {
    .linux => linux.sigval,
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L22-L25
    .openbsd, .dragonfly, .freebsd, .serenity => extern union {
        int: c_int,
        ptr: ?*anyopaque,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-addrinfo"></a>`addrinfo`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const addrinfo = if (builtin.abi.isAndroid()) extern struct {
    flags: AI,
    family: i32,
    socktype: i32,
    protocol: i32,
    addrlen: socklen_t,
    canonname: ?[*:0]u8,
    addr: ?*sockaddr,
    next: ?*addrinfo,
} else switch (native_os) {
    .linux, .emscripten => linux.addrinfo,
    .windows => ws2_32.addrinfo,
    .freebsd, .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        flags: AI,
        family: i32,
        socktype: i32,
        protocol: i32,
        addrlen: socklen_t,
        canonname: ?[*:0]u8,
        addr: ?*sockaddr,
        next: ?*addrinfo,
    },
    .solaris, .illumos => extern struct {
        flags: AI,
        family: i32,
        socktype: i32,
        protocol: i32,
        addrlen: socklen_t,
        canonname: ?[*:0]u8,
        addr: ?*sockaddr,
        next: ?*addrinfo,
    },
    .netbsd => extern struct {
        flags: AI,
        family: i32,
        socktype: i32,
        protocol: i32,
        addrlen: socklen_t,
        canonname: ?[*:0]u8,
        addr: ?*sockaddr,
        next: ?*addrinfo,
    },
    .dragonfly => extern struct {
        flags: AI,
        family: i32,
        socktype: i32,
        protocol: i32,
        addrlen: socklen_t,
        canonname: ?[*:0]u8,
        addr: ?*sockaddr,
        next: ?*addrinfo,
    },
    .haiku => extern struct {
        flags: AI,
        family: i32,
        socktype: i32,
        protocol: i32,
        addrlen: socklen_t,
        canonname: ?[*:0]u8,
        addr: ?*sockaddr,
        next: ?*addrinfo,
    },
    // https://github.com/SerenityOS/serenity/blob/d510d2aeb2facbd8f6c383d70fd1b033e1fee5dd/Userland/Libraries/LibC/netdb.h#L66-L75
    .openbsd, .serenity => extern struct {
        flags: AI,
        family: c_int,
        socktype: c_int,
        protocol: c_int,
        addrlen: socklen_t,
        addr: ?*sockaddr,
        canonname: ?[*:0]u8,
        next: ?*addrinfo,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sockaddr"></a>`sockaddr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sockaddr = switch (native_os) {
    .linux, .emscripten => linux.sockaddr,
    .windows => ws2_32.sockaddr,
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        len: u8,
        family: sa_family_t,
        data: [14]u8,

        pub const SS_MAXSIZE = 128;
        pub const storage = extern struct {
            len: u8 align(8),
            family: sa_family_t,
            padding: [126]u8 = undefined,

            comptime {
                assert(@sizeOf(storage) == SS_MAXSIZE);
                assert(@alignOf(storage) == 8);
            }
        };
        pub const in = extern struct {
            len: u8 = @sizeOf(in),
            family: sa_family_t = AF.INET,
            port: in_port_t,
            addr: u32,
            zero: [8]u8 = [8]u8{ 0, 0, 0, 0, 0, 0, 0, 0 },
        };
        pub const in6 = extern struct {
            len: u8 = @sizeOf(in6),
            family: sa_family_t = AF.INET6,
            port: in_port_t,
            flowinfo: u32,
            addr: [16]u8,
            scope_id: u32,
        };

        /// UNIX domain socket
        pub const un = extern struct {
            len: u8 = @sizeOf(un),
            family: sa_family_t = AF.UNIX,
            path: [104]u8,
        };
    },
    .freebsd => extern struct {
        /// total length
        len: u8,
        /// address family
        family: sa_family_t,
        /// actually longer; address value
        data: [14]u8,

        pub const SS_MAXSIZE = 128;
        pub const storage = extern struct {
            len: u8 align(8),
            family: sa_family_t,
            padding: [126]u8 = undefined,

            comptime {
                assert(@sizeOf(storage) == SS_MAXSIZE);
                assert(@alignOf(storage) == 8);
            }
        };

        pub const in = extern struct {
            len: u8 = @sizeOf(in),
            family: sa_family_t = AF.INET,
            port: in_port_t,
            addr: u32,
            zero: [8]u8 = [8]u8{ 0, 0, 0, 0, 0, 0, 0, 0 },
        };

        pub const in6 = extern struct {
            len: u8 = @sizeOf(in6),
            family: sa_family_t = AF.INET6,
            port: in_port_t,
            flowinfo: u32,
            addr: [16]u8,
            scope_id: u32,
        };

        pub const un = extern struct {
            len: u8 = @sizeOf(un),
            family: sa_family_t = AF.UNIX,
            path: [104]u8,
        };
    },
    .solaris, .illumos => extern struct {
        /// address family
        family: sa_family_t,

        /// actually longer; address value
        data: [14]u8,

        pub const SS_MAXSIZE = 256;
        pub const storage = extern struct {
            family: sa_family_t align(8),
            padding: [254]u8 = undefined,

            comptime {
                assert(@sizeOf(storage) == SS_MAXSIZE);
                assert(@alignOf(storage) == 8);
            }
        };

        pub const in = extern struct {
            family: sa_family_t = AF.INET,
            port: in_port_t,
            addr: u32,
            zero: [8]u8 = [8]u8{ 0, 0, 0, 0, 0, 0, 0, 0 },
        };

        pub const in6 = extern struct {
            family: sa_family_t = AF.INET6,
            port: in_port_t,
            flowinfo: u32,
            addr: [16]u8,
            scope_id: u32,
            __src_id: u32 = 0,
        };

        /// Definitions for UNIX IPC domain.
        pub const un = extern struct {
            family: sa_family_t = AF.UNIX,
            path: [108]u8,
        };
    },
    .netbsd => extern struct {
        /// total length
        len: u8,
        /// address family
        family: sa_family_t,
        /// actually longer; address value
        data: [14]u8,

        pub const SS_MAXSIZE = 128;
        pub const storage = extern struct {
            len: u8 align(8),
            family: sa_family_t,
            padding: [126]u8 = undefined,

            comptime {
                assert(@sizeOf(storage) == SS_MAXSIZE);
                assert(@alignOf(storage) == 8);
            }
        };

        pub const in = extern struct {
            len: u8 = @sizeOf(in),
            family: sa_family_t = AF.INET,
            port: in_port_t,
            addr: u32,
            zero: [8]u8 = [8]u8{ 0, 0, 0, 0, 0, 0, 0, 0 },
        };

        pub const in6 = extern struct {
            len: u8 = @sizeOf(in6),
            family: sa_family_t = AF.INET6,
            port: in_port_t,
            flowinfo: u32,
            addr: [16]u8,
            scope_id: u32,
        };

        /// Definitions for UNIX IPC domain.
        pub const un = extern struct {
            /// total sockaddr length
            len: u8 = @sizeOf(un),

            family: sa_family_t = AF.LOCAL,

            /// path name
            path: [104]u8,
        };
    },
    .dragonfly => extern struct {
        len: u8,
        family: sa_family_t,
        data: [14]u8,

        pub const SS_MAXSIZE = 128;
        pub const storage = extern struct {
            len: u8 align(8),
            family: sa_family_t,
            padding: [126]u8 = undefined,

            comptime {
                assert(@sizeOf(storage) == SS_MAXSIZE);
                assert(@alignOf(storage) == 8);
            }
        };

        pub const in = extern struct {
            len: u8 = @sizeOf(in),
            family: sa_family_t = AF.INET,
            port: in_port_t,
            addr: u32,
            zero: [8]u8 = [8]u8{ 0, 0, 0, 0, 0, 0, 0, 0 },
        };

        pub const in6 = extern struct {
            len: u8 = @sizeOf(in6),
            family: sa_family_t = AF.INET6,
            port: in_port_t,
            flowinfo: u32,
            addr: [16]u8,
            scope_id: u32,
        };

        pub const un = extern struct {
            len: u8 = @sizeOf(un),
            family: sa_family_t = AF.UNIX,
            path: [104]u8,
        };
    },
    .haiku => extern struct {
        /// total length
        len: u8,
        /// address family
        family: sa_family_t,
        /// actually longer; address value
        data: [14]u8,

        pub const SS_MAXSIZE = 128;
        pub const storage = extern struct {
            len: u8 align(8),
            family: sa_family_t,
            padding: [126]u8 = undefined,

            comptime {
                assert(@sizeOf(storage) == SS_MAXSIZE);
                assert(@alignOf(storage) == 8);
            }
        };

        pub const in = extern struct {
            len: u8 = @sizeOf(in),
            family: sa_family_t = AF.INET,
            port: in_port_t,
            addr: u32,
            zero: [8]u8 = [8]u8{ 0, 0, 0, 0, 0, 0, 0, 0 },
        };

        pub const in6 = extern struct {
            len: u8 = @sizeOf(in6),
            family: sa_family_t = AF.INET6,
            port: in_port_t,
            flowinfo: u32,
            addr: [16]u8,
            scope_id: u32,
        };

        pub const un = extern struct {
            len: u8 = @sizeOf(un),
            family: sa_family_t = AF.UNIX,
            path: [104]u8,
        };
    },
    .openbsd => extern struct {
        /// total length
        len: u8,
        /// address family
        family: sa_family_t,
        /// actually longer; address value
        data: [14]u8,

        pub const SS_MAXSIZE = 256;
        pub const storage = extern struct {
            len: u8 align(8),
            family: sa_family_t,
            padding: [254]u8 = undefined,

            comptime {
                assert(@sizeOf(storage) == SS_MAXSIZE);
                assert(@alignOf(storage) == 8);
            }
        };

        pub const in = extern struct {
            len: u8 = @sizeOf(in),
            family: sa_family_t = AF.INET,
            port: in_port_t,
            addr: u32,
            zero: [8]u8 = [8]u8{ 0, 0, 0, 0, 0, 0, 0, 0 },
        };

        pub const in6 = extern struct {
            len: u8 = @sizeOf(in6),
            family: sa_family_t = AF.INET6,
            port: in_port_t,
            flowinfo: u32,
            addr: [16]u8,
            scope_id: u32,
        };

        /// Definitions for UNIX IPC domain.
        pub const un = extern struct {
            /// total sockaddr length
            len: u8 = @sizeOf(un),

            family: sa_family_t = AF.LOCAL,

            /// path name
            path: [104]u8,
        };
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L110-L114
    .serenity => extern struct {
        family: sa_family_t,
        data: [26]u8,

        // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/netinet/in.h
        const in_addr = u32;
        const in6_addr = [16]u8;
        pub const in = extern struct {
            family: sa_family_t = AF.INET,
            port: in_port_t,
            addr: in_addr,
            zero: [8]u8 = @splat(0),
        };
        pub const in6 = extern struct {
            family: sa_family_t = AF.INET6,
            port: in_port_t,
            flowinfo: u32,
            addr: in6_addr,
            scope_id: u32,
        };

        // https://github.com/SerenityOS/serenity/blob/b92e6b02e53b2927732f31b1442cad420b62d1ef/Kernel/API/POSIX/sys/un.h
        const UNIX_PATH_MAX = 108;
        pub const un = extern struct {
            family: sa_family_t = AF.LOCAL,
            path: [UNIX_PATH_MAX]u8,
        };
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-socklen-t"></a>`socklen_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const socklen_t = switch (native_os) {
    .linux, .emscripten => linux.socklen_t,
    .windows => ws2_32.socklen_t,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L57
    else => u32,
}
\`\`\`

</details>

---

### <a id="const-in-port-t"></a>`in_port_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const in_port_t = u16
\`\`\`

</details>

---

### <a id="const-sa-family-t"></a>`sa_family_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sa_family_t = switch (native_os) {
    .linux, .emscripten => linux.sa_family_t,
    .windows => ws2_32.ADDRESS_FAMILY,
    .openbsd, .haiku, .dragonfly, .netbsd, .freebsd, .macos, .ios, .tvos, .watchos, .visionos => u8,
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L66
    .solaris, .illumos, .serenity => u16,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-af"></a>`AF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const AF = if (builtin.abi.isAndroid()) struct {
    pub const UNSPEC = 0;
    pub const UNIX = 1;
    pub const LOCAL = 1;
    pub const INET = 2;
    pub const AX25 = 3;
    pub const IPX = 4;
    pub const APPLETALK = 5;
    pub const NETROM = 6;
    pub const BRIDGE = 7;
    pub const ATMPVC = 8;
    pub const X25 = 9;
    pub const INET6 = 10;
    pub const ROSE = 11;
    pub const DECnet = 12;
    pub const NETBEUI = 13;
    pub const SECURITY = 14;
    pub const KEY = 15;
    pub const NETLINK = 16;
    pub const ROUTE = NETLINK;
    pub const PACKET = 17;
    pub const ASH = 18;
    pub const ECONET = 19;
    pub const ATMSVC = 20;
    pub const RDS = 21;
    pub const SNA = 22;
    pub const IRDA = 23;
    pub const PPPOX = 24;
    pub const WANPIPE = 25;
    pub const LLC = 26;
    pub const CAN = 29;
    pub const TIPC = 30;
    pub const BLUETOOTH = 31;
    pub const IUCV = 32;
    pub const RXRPC = 33;
    pub const ISDN = 34;
    pub const PHONET = 35;
    pub const IEEE802154 = 36;
    pub const CAIF = 37;
    pub const ALG = 38;
    pub const NFC = 39;
    pub const VSOCK = 40;
    pub const KCM = 41;
    pub const QIPCRTR = 42;
    pub const MAX = 43;
} else switch (native_os) {
    .linux, .emscripten => linux.AF,
    .windows => ws2_32.AF,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const UNSPEC = 0;
        pub const LOCAL = 1;
        pub const UNIX = LOCAL;
        pub const INET = 2;
        pub const SYS_CONTROL = 2;
        pub const IMPLINK = 3;
        pub const PUP = 4;
        pub const CHAOS = 5;
        pub const NS = 6;
        pub const ISO = 7;
        pub const OSI = ISO;
        pub const ECMA = 8;
        pub const DATAKIT = 9;
        pub const CCITT = 10;
        pub const SNA = 11;
        pub const DECnet = 12;
        pub const DLI = 13;
        pub const LAT = 14;
        pub const HYLINK = 15;
        pub const APPLETALK = 16;
        pub const ROUTE = 17;
        pub const LINK = 18;
        pub const XTP = 19;
        pub const COIP = 20;
        pub const CNT = 21;
        pub const RTIP = 22;
        pub const IPX = 23;
        pub const SIP = 24;
        pub const PIP = 25;
        pub const ISDN = 28;
        pub const E164 = ISDN;
        pub const KEY = 29;
        pub const INET6 = 30;
        pub const NATM = 31;
        pub const SYSTEM = 32;
        pub const NETBIOS = 33;
        pub const PPP = 34;
        pub const MAX = 40;
    },
    .freebsd => struct {
        pub const UNSPEC = 0;
        pub const UNIX = 1;
        pub const LOCAL = UNIX;
        pub const FILE = LOCAL;
        pub const INET = 2;
        pub const IMPLINK = 3;
        pub const PUP = 4;
        pub const CHAOS = 5;
        pub const NETBIOS = 6;
        pub const ISO = 7;
        pub const OSI = ISO;
        pub const ECMA = 8;
        pub const DATAKIT = 9;
        pub const CCITT = 10;
        pub const SNA = 11;
        pub const DECnet = 12;
        pub const DLI = 13;
        pub const LAT = 14;
        pub const HYLINK = 15;
        pub const APPLETALK = 16;
        pub const ROUTE = 17;
        pub const LINK = 18;
        pub const pseudo_XTP = 19;
        pub const COIP = 20;
        pub const CNT = 21;
        pub const pseudo_RTIP = 22;
        pub const IPX = 23;
        pub const SIP = 24;
        pub const pseudo_PIP = 25;
        pub const ISDN = 26;
        pub const E164 = ISDN;
        pub const pseudo_KEY = 27;
        pub const INET6 = 28;
        pub const NATM = 29;
        pub const ATM = 30;
        pub const pseudo_HDRCMPLT = 31;
        pub const NETGRAPH = 32;
        pub const SLOW = 33;
        pub const SCLUSTER = 34;
        pub const ARP = 35;
        pub const BLUETOOTH = 36;
        pub const IEEE80211 = 37;
        pub const INET_SDP = 40;
        pub const INET6_SDP = 42;
        pub const MAX = 42;
    },
    .solaris, .illumos => struct {
        pub const UNSPEC = 0;
        pub const UNIX = 1;
        pub const LOCAL = UNIX;
        pub const FILE = UNIX;
        pub const INET = 2;
        pub const IMPLINK = 3;
        pub const PUP = 4;
        pub const CHAOS = 5;
        pub const NS = 6;
        pub const NBS = 7;
        pub const ECMA = 8;
        pub const DATAKIT = 9;
        pub const CCITT = 10;
        pub const SNA = 11;
        pub const DECnet = 12;
        pub const DLI = 13;
        pub const LAT = 14;
        pub const HYLINK = 15;
        pub const APPLETALK = 16;
        pub const NIT = 17;
        pub const @"802" = 18;
        pub const OSI = 19;
        pub const X25 = 20;
        pub const OSINET = 21;
        pub const GOSIP = 22;
        pub const IPX = 23;
        pub const ROUTE = 24;
        pub const LINK = 25;
        pub const INET6 = 26;
        pub const KEY = 27;
        pub const NCA = 28;
        pub const POLICY = 29;
        pub const INET_OFFLOAD = 30;
        pub const TRILL = 31;
        pub const PACKET = 32;
        pub const LX_NETLINK = 33;
        pub const MAX = 33;
    },
    .netbsd => struct {
        pub const UNSPEC = 0;
        pub const LOCAL = 1;
        pub const UNIX = LOCAL;
        pub const INET = 2;
        pub const IMPLINK = 3;
        pub const PUP = 4;
        pub const CHAOS = 5;
        pub const NS = 6;
        pub const ISO = 7;
        pub const OSI = ISO;
        pub const ECMA = 8;
        pub const DATAKIT = 9;
        pub const CCITT = 10;
        pub const SNA = 11;
        pub const DECnet = 12;
        pub const DLI = 13;
        pub const LAT = 14;
        pub const HYLINK = 15;
        pub const APPLETALK = 16;
        pub const OROUTE = 17;
        pub const LINK = 18;
        pub const COIP = 20;
        pub const CNT = 21;
        pub const IPX = 23;
        pub const INET6 = 24;
        pub const ISDN = 26;
        pub const E164 = ISDN;
        pub const NATM = 27;
        pub const ARP = 28;
        pub const BLUETOOTH = 31;
        pub const IEEE80211 = 32;
        pub const MPLS = 33;
        pub const ROUTE = 34;
        pub const CAN = 35;
        pub const ETHER = 36;
        pub const MAX = 37;
    },
    .dragonfly => struct {
        pub const UNSPEC = 0;
        pub const OSI = ISO;
        pub const UNIX = LOCAL;
        pub const LOCAL = 1;
        pub const INET = 2;
        pub const IMPLINK = 3;
        pub const PUP = 4;
        pub const CHAOS = 5;
        pub const NETBIOS = 6;
        pub const ISO = 7;
        pub const ECMA = 8;
        pub const DATAKIT = 9;
        pub const CCITT = 10;
        pub const SNA = 11;
        pub const DLI = 13;
        pub const LAT = 14;
        pub const HYLINK = 15;
        pub const APPLETALK = 16;
        pub const ROUTE = 17;
        pub const LINK = 18;
        pub const COIP = 20;
        pub const CNT = 21;
        pub const IPX = 23;
        pub const SIP = 24;
        pub const ISDN = 26;
        pub const INET6 = 28;
        pub const NATM = 29;
        pub const ATM = 30;
        pub const NETGRAPH = 32;
        pub const BLUETOOTH = 33;
        pub const MPLS = 34;
        pub const MAX = 36;
    },
    .haiku => struct {
        pub const UNSPEC = 0;
        pub const INET = 1;
        pub const APPLETALK = 2;
        pub const ROUTE = 3;
        pub const LINK = 4;
        pub const INET6 = 5;
        pub const DLI = 6;
        pub const IPX = 7;
        pub const NOTIFY = 8;
        pub const LOCAL = 9;
        pub const UNIX = LOCAL;
        pub const BLUETOOTH = 10;
        pub const MAX = 11;
    },
    .openbsd => struct {
        pub const UNSPEC = 0;
        pub const UNIX = 1;
        pub const LOCAL = UNIX;
        pub const INET = 2;
        pub const APPLETALK = 16;
        pub const INET6 = 24;
        pub const KEY = 30;
        pub const ROUTE = 17;
        pub const SNA = 11;
        pub const MPLS = 33;
        pub const BLUETOOTH = 32;
        pub const ISDN = 26;
        pub const MAX = 36;
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L17-L22
    .serenity => struct {
        pub const UNSPEC = 0;
        pub const LOCAL = 1;
        pub const UNIX = LOCAL;
        pub const INET = 2;
        pub const INET6 = 3;
        pub const MAX = 4;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pf"></a>`PF`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PF = if (builtin.abi.isAndroid()) struct {
    pub const UNSPEC = AF.UNSPEC;
    pub const UNIX = AF.UNIX;
    pub const LOCAL = AF.LOCAL;
    pub const INET = AF.INET;
    pub const AX25 = AF.AX25;
    pub const IPX = AF.IPX;
    pub const APPLETALK = AF.APPLETALK;
    pub const NETROM = AF.NETROM;
    pub const BRIDGE = AF.BRIDGE;
    pub const ATMPVC = AF.ATMPVC;
    pub const X25 = AF.X25;
    pub const PF_INET6 = AF.INET6;
    pub const PF_ROSE = AF.ROSE;
    pub const PF_DECnet = AF.DECnet;
    pub const PF_NETBEUI = AF.NETBEUI;
    pub const PF_SECURITY = AF.SECURITY;
    pub const PF_KEY = AF.KEY;
    pub const PF_NETLINK = AF.NETLINK;
    pub const PF_ROUTE = AF.ROUTE;
    pub const PF_PACKET = AF.PACKET;
    pub const PF_ASH = AF.ASH;
    pub const PF_ECONET = AF.ECONET;
    pub const PF_ATMSVC = AF.ATMSVC;
    pub const PF_RDS = AF.RDS;
    pub const PF_SNA = AF.SNA;
    pub const PF_IRDA = AF.IRDA;
    pub const PF_PPPOX = AF.PPPOX;
    pub const PF_WANPIPE = AF.WANPIPE;
    pub const PF_LLC = AF.LLC;
    pub const PF_CAN = AF.CAN;
    pub const PF_TIPC = AF.TIPC;
    pub const PF_BLUETOOTH = AF.BLUETOOTH;
    pub const PF_IUCV = AF.IUCV;
    pub const PF_RXRPC = AF.RXRPC;
    pub const PF_ISDN = AF.ISDN;
    pub const PF_PHONET = AF.PHONET;
    pub const PF_IEEE802154 = AF.IEEE802154;
    pub const PF_CAIF = AF.CAIF;
    pub const PF_ALG = AF.ALG;
    pub const PF_NFC = AF.NFC;
    pub const PF_VSOCK = AF.VSOCK;
    pub const PF_KCM = AF.KCM;
    pub const PF_QIPCRTR = AF.QIPCRTR;
    pub const PF_MAX = AF.MAX;
} else switch (native_os) {
    .linux, .emscripten => linux.PF,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const UNSPEC = AF.UNSPEC;
        pub const LOCAL = AF.LOCAL;
        pub const UNIX = PF.LOCAL;
        pub const INET = AF.INET;
        pub const IMPLINK = AF.IMPLINK;
        pub const PUP = AF.PUP;
        pub const CHAOS = AF.CHAOS;
        pub const NS = AF.NS;
        pub const ISO = AF.ISO;
        pub const OSI = AF.ISO;
        pub const ECMA = AF.ECMA;
        pub const DATAKIT = AF.DATAKIT;
        pub const CCITT = AF.CCITT;
        pub const SNA = AF.SNA;
        pub const DECnet = AF.DECnet;
        pub const DLI = AF.DLI;
        pub const LAT = AF.LAT;
        pub const HYLINK = AF.HYLINK;
        pub const APPLETALK = AF.APPLETALK;
        pub const ROUTE = AF.ROUTE;
        pub const LINK = AF.LINK;
        pub const XTP = AF.XTP;
        pub const COIP = AF.COIP;
        pub const CNT = AF.CNT;
        pub const SIP = AF.SIP;
        pub const IPX = AF.IPX;
        pub const RTIP = AF.RTIP;
        pub const PIP = AF.PIP;
        pub const ISDN = AF.ISDN;
        pub const KEY = AF.KEY;
        pub const INET6 = AF.INET6;
        pub const NATM = AF.NATM;
        pub const SYSTEM = AF.SYSTEM;
        pub const NETBIOS = AF.NETBIOS;
        pub const PPP = AF.PPP;
        pub const MAX = AF.MAX;
    },
    .freebsd => struct {
        pub const UNSPEC = AF.UNSPEC;
        pub const LOCAL = AF.LOCAL;
        pub const UNIX = PF.LOCAL;
        pub const INET = AF.INET;
        pub const IMPLINK = AF.IMPLINK;
        pub const PUP = AF.PUP;
        pub const CHAOS = AF.CHAOS;
        pub const NETBIOS = AF.NETBIOS;
        pub const ISO = AF.ISO;
        pub const OSI = AF.ISO;
        pub const ECMA = AF.ECMA;
        pub const DATAKIT = AF.DATAKIT;
        pub const CCITT = AF.CCITT;
        pub const DECnet = AF.DECnet;
        pub const DLI = AF.DLI;
        pub const LAT = AF.LAT;
        pub const HYLINK = AF.HYLINK;
        pub const APPLETALK = AF.APPLETALK;
        pub const ROUTE = AF.ROUTE;
        pub const LINK = AF.LINK;
        pub const XTP = AF.pseudo_XTP;
        pub const COIP = AF.COIP;
        pub const CNT = AF.CNT;
        pub const SIP = AF.SIP;
        pub const IPX = AF.IPX;
        pub const RTIP = AF.pseudo_RTIP;
        pub const PIP = AF.pseudo_PIP;
        pub const ISDN = AF.ISDN;
        pub const KEY = AF.pseudo_KEY;
        pub const INET6 = AF.pseudo_INET6;
        pub const NATM = AF.NATM;
        pub const ATM = AF.ATM;
        pub const NETGRAPH = AF.NETGRAPH;
        pub const SLOW = AF.SLOW;
        pub const SCLUSTER = AF.SCLUSTER;
        pub const ARP = AF.ARP;
        pub const BLUETOOTH = AF.BLUETOOTH;
        pub const IEEE80211 = AF.IEEE80211;
        pub const INET_SDP = AF.INET_SDP;
        pub const INET6_SDP = AF.INET6_SDP;
        pub const MAX = AF.MAX;
    },
    .solaris, .illumos => struct {
        pub const UNSPEC = AF.UNSPEC;
        pub const UNIX = AF.UNIX;
        pub const LOCAL = UNIX;
        pub const FILE = UNIX;
        pub const INET = AF.INET;
        pub const IMPLINK = AF.IMPLINK;
        pub const PUP = AF.PUP;
        pub const CHAOS = AF.CHAOS;
        pub const NS = AF.NS;
        pub const NBS = AF.NBS;
        pub const ECMA = AF.ECMA;
        pub const DATAKIT = AF.DATAKIT;
        pub const CCITT = AF.CCITT;
        pub const SNA = AF.SNA;
        pub const DECnet = AF.DECnet;
        pub const DLI = AF.DLI;
        pub const LAT = AF.LAT;
        pub const HYLINK = AF.HYLINK;
        pub const APPLETALK = AF.APPLETALK;
        pub const NIT = AF.NIT;
        pub const @"802" = AF.@"802";
        pub const OSI = AF.OSI;
        pub const X25 = AF.X25;
        pub const OSINET = AF.OSINET;
        pub const GOSIP = AF.GOSIP;
        pub const IPX = AF.IPX;
        pub const ROUTE = AF.ROUTE;
        pub const LINK = AF.LINK;
        pub const INET6 = AF.INET6;
        pub const KEY = AF.KEY;
        pub const NCA = AF.NCA;
        pub const POLICY = AF.POLICY;
        pub const TRILL = AF.TRILL;
        pub const PACKET = AF.PACKET;
        pub const LX_NETLINK = AF.LX_NETLINK;
        pub const MAX = AF.MAX;
    },
    .netbsd => struct {
        pub const UNSPEC = AF.UNSPEC;
        pub const LOCAL = AF.LOCAL;
        pub const UNIX = PF.LOCAL;
        pub const INET = AF.INET;
        pub const IMPLINK = AF.IMPLINK;
        pub const PUP = AF.PUP;
        pub const CHAOS = AF.CHAOS;
        pub const NS = AF.NS;
        pub const ISO = AF.ISO;
        pub const OSI = AF.ISO;
        pub const ECMA = AF.ECMA;
        pub const DATAKIT = AF.DATAKIT;
        pub const CCITT = AF.CCITT;
        pub const SNA = AF.SNA;
        pub const DECnet = AF.DECnet;
        pub const DLI = AF.DLI;
        pub const LAT = AF.LAT;
        pub const HYLINK = AF.HYLINK;
        pub const APPLETALK = AF.APPLETALK;
        pub const OROUTE = AF.OROUTE;
        pub const LINK = AF.LINK;
        pub const COIP = AF.COIP;
        pub const CNT = AF.CNT;
        pub const INET6 = AF.INET6;
        pub const IPX = AF.IPX;
        pub const ISDN = AF.ISDN;
        pub const E164 = AF.E164;
        pub const NATM = AF.NATM;
        pub const ARP = AF.ARP;
        pub const BLUETOOTH = AF.BLUETOOTH;
        pub const MPLS = AF.MPLS;
        pub const ROUTE = AF.ROUTE;
        pub const CAN = AF.CAN;
        pub const ETHER = AF.ETHER;
        pub const MAX = AF.MAX;
    },
    .dragonfly => struct {
        pub const INET6 = AF.INET6;
        pub const IMPLINK = AF.IMPLINK;
        pub const ROUTE = AF.ROUTE;
        pub const ISO = AF.ISO;
        pub const PIP = AF.pseudo_PIP;
        pub const CHAOS = AF.CHAOS;
        pub const DATAKIT = AF.DATAKIT;
        pub const INET = AF.INET;
        pub const APPLETALK = AF.APPLETALK;
        pub const SIP = AF.SIP;
        pub const OSI = AF.ISO;
        pub const CNT = AF.CNT;
        pub const LINK = AF.LINK;
        pub const HYLINK = AF.HYLINK;
        pub const MAX = AF.MAX;
        pub const KEY = AF.pseudo_KEY;
        pub const PUP = AF.PUP;
        pub const COIP = AF.COIP;
        pub const SNA = AF.SNA;
        pub const LOCAL = AF.LOCAL;
        pub const NETBIOS = AF.NETBIOS;
        pub const NATM = AF.NATM;
        pub const BLUETOOTH = AF.BLUETOOTH;
        pub const UNSPEC = AF.UNSPEC;
        pub const NETGRAPH = AF.NETGRAPH;
        pub const ECMA = AF.ECMA;
        pub const IPX = AF.IPX;
        pub const DLI = AF.DLI;
        pub const ATM = AF.ATM;
        pub const CCITT = AF.CCITT;
        pub const ISDN = AF.ISDN;
        pub const RTIP = AF.pseudo_RTIP;
        pub const LAT = AF.LAT;
        pub const UNIX = PF.LOCAL;
        pub const XTP = AF.pseudo_XTP;
        pub const DECnet = AF.DECnet;
    },
    .haiku => struct {
        pub const UNSPEC = AF.UNSPEC;
        pub const INET = AF.INET;
        pub const ROUTE = AF.ROUTE;
        pub const LINK = AF.LINK;
        pub const INET6 = AF.INET6;
        pub const LOCAL = AF.LOCAL;
        pub const UNIX = AF.UNIX;
        pub const BLUETOOTH = AF.BLUETOOTH;
    },
    .openbsd => struct {
        pub const UNSPEC = AF.UNSPEC;
        pub const LOCAL = AF.LOCAL;
        pub const UNIX = AF.UNIX;
        pub const INET = AF.INET;
        pub const APPLETALK = AF.APPLETALK;
        pub const INET6 = AF.INET6;
        pub const DECnet = AF.DECnet;
        pub const KEY = AF.KEY;
        pub const ROUTE = AF.ROUTE;
        pub const SNA = AF.SNA;
        pub const MPLS = AF.MPLS;
        pub const BLUETOOTH = AF.BLUETOOTH;
        pub const ISDN = AF.ISDN;
        pub const MAX = AF.MAX;
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L24-L29
    .serenity => struct {
        pub const LOCAL = AF.LOCAL;
        pub const UNIX = AF.LOCAL;
        pub const INET = AF.INET;
        pub const INET6 = AF.INET6;
        pub const UNSPEC = AF.UNSPEC;
        pub const MAX = AF.MAX;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-dt"></a>`DT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const DT = switch (native_os) {
    .linux => linux.DT,
    // https://github.com/SerenityOS/serenity/blob/1262a7d1424d0d2e89d80644409721cbf056ab17/Kernel/API/POSIX/dirent.h#L16-L35
    .netbsd, .freebsd, .openbsd, .macos, .ios, .tvos, .watchos, .visionos, .serenity => struct {
        pub const UNKNOWN = 0;
        pub const FIFO = 1;
        pub const CHR = 2;
        pub const DIR = 4;
        pub const BLK = 6;
        pub const REG = 8;
        pub const LNK = 10;
        pub const SOCK = 12;
        pub const WHT = 14;
    },
    .dragonfly => struct {
        pub const UNKNOWN = 0;
        pub const FIFO = 1;
        pub const CHR = 2;
        pub const DIR = 4;
        pub const BLK = 6;
        pub const REG = 8;
        pub const LNK = 10;
        pub const SOCK = 12;
        pub const WHT = 14;
        pub const DBF = 15;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-msg"></a>`MSG`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MSG = switch (native_os) {
    .linux => linux.MSG,
    .emscripten => emscripten.MSG,
    .windows => ws2_32.MSG,
    .driverkit, .macos, .ios, .tvos, .watchos, .visionos => darwin.MSG,
    .haiku => struct {
        pub const OOB = 0x0001;
        pub const PEEK = 0x0002;
        pub const DONTROUTE = 0x0004;
        pub const EOR = 0x0008;
        pub const TRUNC = 0x0010;
        pub const CTRUNC = 0x0020;
        pub const WAITALL = 0x0040;
        pub const DONTWAIT = 0x0080;
        pub const BCAST = 0x0100;
        pub const MCAST = 0x0200;
        pub const EOF = 0x0400;
        pub const NOSIGNAL = 0x0800;
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L56-L64
    .serenity => struct {
        pub const TRUNC = 0x1;
        pub const CTRUNC = 0x2;
        pub const PEEK = 0x4;
        pub const OOB = 0x8;
        pub const DONTROUTE = 0x10;
        pub const WAITALL = 0x20;
        pub const DONTWAIT = 0x40;
        pub const NOSIGNAL = 0x80;
        pub const EOR = 0x100;
    },
    .freebsd => struct {
        pub const OOB = 0x00000001;
        pub const PEEK = 0x00000002;
        pub const DONTROUTE = 0x00000004;
        pub const EOR = 0x00000008;
        pub const TRUNC = 0x00000010;
        pub const CTRUNC = 0x00000020;
        pub const WAITALL = 0x00000040;
        pub const DONTWAIT = 0x00000080;
        pub const EOF = 0x00000100;
        pub const NOTIFICATION = 0x00002000;
        pub const NBIO = 0x00004000;
        pub const COMPAT = 0x00008000;
        pub const SOCALLBCK = 0x00010000;
        pub const NOSIGNAL = 0x00020000;
        pub const CMSG_CLOEXEC = 0x00040000;
        pub const WAITFORONE = 0x00080000;
        pub const MORETOCOME = 0x00100000;
        pub const TLSAPPDATA = 0x00200000;
    },
    .netbsd => struct {
        pub const OOB = 0x0001;
        pub const PEEK = 0x0002;
        pub const DONTROUTE = 0x0004;
        pub const EOR = 0x0008;
        pub const TRUNC = 0x0010;
        pub const CTRUNC = 0x0020;
        pub const WAITALL = 0x0040;
        pub const DONTWAIT = 0x0080;
        pub const BCAST = 0x0100;
        pub const MCAST = 0x0200;
        pub const NOSIGNAL = 0x0400;
        pub const CMSG_CLOEXEC = 0x0800;
        pub const NBIO = 0x1000;
        pub const WAITFORONE = 0x2000;
        pub const NOTIFICATION = 0x4000;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sock"></a>`SOCK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SOCK = switch (native_os) {
    .linux => linux.SOCK,
    .emscripten => emscripten.SOCK,
    .windows => ws2_32.SOCK,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const STREAM = 1;
        pub const DGRAM = 2;
        pub const RAW = 3;
        pub const RDM = 4;
        pub const SEQPACKET = 5;
        pub const MAXADDRLEN = 255;

        /// Not actually supported by Darwin, but Zig supplies a shim.
        /// This numerical value is not ABI-stable. It need only not conflict
        /// with any other `SOCK` bits.
        pub const CLOEXEC = 1 << 15;
        /// Not actually supported by Darwin, but Zig supplies a shim.
        /// This numerical value is not ABI-stable. It need only not conflict
        /// with any other `SOCK` bits.
        pub const NONBLOCK = 1 << 16;
    },
    .freebsd => struct {
        pub const STREAM = 1;
        pub const DGRAM = 2;
        pub const RAW = 3;
        pub const RDM = 4;
        pub const SEQPACKET = 5;

        pub const CLOEXEC = 0x10000000;
        pub const NONBLOCK = 0x20000000;
    },
    .solaris, .illumos => struct {
        /// Datagram.
        pub const DGRAM = 1;
        /// STREAM.
        pub const STREAM = 2;
        /// Raw-protocol interface.
        pub const RAW = 4;
        /// Reliably-delivered message.
        pub const RDM = 5;
        /// Sequenced packed stream.
        pub const SEQPACKET = 6;

        pub const NONBLOCK = 0x100000;
        pub const NDELAY = 0x200000;
        pub const CLOEXEC = 0x080000;
    },
    .netbsd => struct {
        pub const STREAM = 1;
        pub const DGRAM = 2;
        pub const RAW = 3;
        pub const RDM = 4;
        pub const SEQPACKET = 5;
        pub const CONN_DGRAM = 6;
        pub const DCCP = CONN_DGRAM;

        pub const CLOEXEC = 0x10000000;
        pub const NONBLOCK = 0x20000000;
        pub const NOSIGPIPE = 0x40000000;
        pub const FLAGS_MASK = 0xf0000000;
    },
    .dragonfly => struct {
        pub const STREAM = 1;
        pub const DGRAM = 2;
        pub const RAW = 3;
        pub const RDM = 4;
        pub const SEQPACKET = 5;
        pub const MAXADDRLEN = 255;
        pub const CLOEXEC = 0x10000000;
        pub const NONBLOCK = 0x20000000;
    },
    .haiku => struct {
        pub const STREAM = 1;
        pub const DGRAM = 2;
        pub const RAW = 3;
        pub const SEQPACKET = 5;
        pub const MISC = 255;

        pub const NONBLOCK = 0x40000;
        pub const CLOEXEC = 0x80000;
    },
    .openbsd => struct {
        pub const STREAM = 1;
        pub const DGRAM = 2;
        pub const RAW = 3;
        pub const RDM = 4;
        pub const SEQPACKET = 5;

        pub const CLOEXEC = 0x8000;
        pub const NONBLOCK = 0x4000;
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L31-L38
    .serenity => struct {
        pub const STREAM = 1;
        pub const DGRAM = 2;
        pub const RAW = 3;
        pub const RDM = 4;
        pub const SEQPACKET = 5;

        pub const NONBLOCK = 0o4000;
        pub const CLOEXEC = 0o2000000;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-tcp"></a>`TCP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TCP = switch (native_os) {
    .macos => darwin.TCP,
    .linux => linux.TCP,
    .emscripten => emscripten.TCP,
    .windows => ws2_32.TCP,
    // https://github.com/SerenityOS/serenity/blob/61ac554a3403838f79ca746bd1c65ded6f97d124/Kernel/API/POSIX/netinet/tcp.h#L13-L14
    .serenity => struct {
        pub const NODELAY = 10;
        pub const MAXSEG = 11;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-ipproto"></a>`IPPROTO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const IPPROTO = switch (native_os) {
    .linux, .emscripten => linux.IPPROTO,
    .windows => ws2_32.IPPROTO,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const ICMP = 1;
        pub const ICMPV6 = 58;
        pub const TCP = 6;
        pub const UDP = 17;
        pub const IP = 0;
        pub const IPV6 = 41;
    },
    .freebsd => struct {
        /// dummy for IP
        pub const IP = 0;
        /// control message protocol
        pub const ICMP = 1;
        /// tcp
        pub const TCP = 6;
        /// user datagram protocol
        pub const UDP = 17;
        /// IP6 header
        pub const IPV6 = 41;
        /// raw IP packet
        pub const RAW = 255;
        /// IP6 hop-by-hop options
        pub const HOPOPTS = 0;
        /// group mgmt protocol
        pub const IGMP = 2;
        /// gateway^2 (deprecated)
        pub const GGP = 3;
        /// IPv4 encapsulation
        pub const IPV4 = 4;
        /// for compatibility
        pub const IPIP = IPV4;
        /// Stream protocol II
        pub const ST = 7;
        /// exterior gateway protocol
        pub const EGP = 8;
        /// private interior gateway
        pub const PIGP = 9;
        /// BBN RCC Monitoring
        pub const RCCMON = 10;
        /// network voice protocol
        pub const NVPII = 11;
        /// pup
        pub const PUP = 12;
        /// Argus
        pub const ARGUS = 13;
        /// EMCON
        pub const EMCON = 14;
        /// Cross Net Debugger
        pub const XNET = 15;
        /// Chaos
        pub const CHAOS = 16;
        /// Multiplexing
        pub const MUX = 18;
        /// DCN Measurement Subsystems
        pub const MEAS = 19;
        /// Host Monitoring
        pub const HMP = 20;
        /// Packet Radio Measurement
        pub const PRM = 21;
        /// xns idp
        pub const IDP = 22;
        /// Trunk-1
        pub const TRUNK1 = 23;
        /// Trunk-2
        pub const TRUNK2 = 24;
        /// Leaf-1
        pub const LEAF1 = 25;
        /// Leaf-2
        pub const LEAF2 = 26;
        /// Reliable Data
        pub const RDP = 27;
        /// Reliable Transaction
        pub const IRTP = 28;
        /// tp-4 w/ class negotiation
        pub const TP = 29;
        /// Bulk Data Transfer
        pub const BLT = 30;
        /// Network Services
        pub const NSP = 31;
        /// Merit Internodal
        pub const INP = 32;
        /// Datagram Congestion Control Protocol
        pub const DCCP = 33;
        /// Third Party Connect
        pub const @"3PC" = 34;
        /// InterDomain Policy Routing
        pub const IDPR = 35;
        /// XTP
        pub const XTP = 36;
        /// Datagram Delivery
        pub const DDP = 37;
        /// Control Message Transport
        pub const CMTP = 38;
        /// TP++ Transport
        pub const TPXX = 39;
        /// IL transport protocol
        pub const IL = 40;
        /// Source Demand Routing
        pub const SDRP = 42;
        /// IP6 routing header
        pub const ROUTING = 43;
        /// IP6 fragmentation header
        pub const FRAGMENT = 44;
        /// InterDomain Routing
        pub const IDRP = 45;
        /// resource reservation
        pub const RSVP = 46;
        /// General Routing Encap.
        pub const GRE = 47;
        /// Mobile Host Routing
        pub const MHRP = 48;
        /// BHA
        pub const BHA = 49;
        /// IP6 Encap Sec. Payload
        pub const ESP = 50;
        /// IP6 Auth Header
        pub const AH = 51;
        /// Integ. Net Layer Security
        pub const INLSP = 52;
        /// IP with encryption
        pub const SWIPE = 53;
        /// Next Hop Resolution
        pub const NHRP = 54;
        /// IP Mobility
        pub const MOBILE = 55;
        /// Transport Layer Security
        pub const TLSP = 56;
        /// SKIP
        pub const SKIP = 57;
        /// ICMP6
        pub const ICMPV6 = 58;
        /// IP6 no next header
        pub const NONE = 59;
        /// IP6 destination option
        pub const DSTOPTS = 60;
        /// any host internal protocol
        pub const AHIP = 61;
        /// CFTP
        pub const CFTP = 62;
        /// "hello" routing protocol
        pub const HELLO = 63;
        /// SATNET/Backroom EXPAK
        pub const SATEXPAK = 64;
        /// Kryptolan
        pub const KRYPTOLAN = 65;
        /// Remote Virtual Disk
        pub const RVD = 66;
        /// Pluribus Packet Core
        pub const IPPC = 67;
        /// Any distributed FS
        pub const ADFS = 68;
        /// Satnet Monitoring
        pub const SATMON = 69;
        /// VISA Protocol
        pub const VISA = 70;
        /// Packet Core Utility
        pub const IPCV = 71;
        /// Comp. Prot. Net. Executive
        pub const CPNX = 72;
        /// Comp. Prot. HeartBeat
        pub const CPHB = 73;
        /// Wang Span Network
        pub const WSN = 74;
        /// Packet Video Protocol
        pub const PVP = 75;
        /// BackRoom SATNET Monitoring
        pub const BRSATMON = 76;
        /// Sun net disk proto (temp.)
        pub const ND = 77;
        /// WIDEBAND Monitoring
        pub const WBMON = 78;
        /// WIDEBAND EXPAK
        pub const WBEXPAK = 79;
        /// ISO cnlp
        pub const EON = 80;
        /// VMTP
        pub const VMTP = 81;
        /// Secure VMTP
        pub const SVMTP = 82;
        /// Banyon VINES
        pub const VINES = 83;
        /// TTP
        pub const TTP = 84;
        /// NSFNET-IGP
        pub const IGP = 85;
        /// dissimilar gateway prot.
        pub const DGP = 86;
        /// TCF
        pub const TCF = 87;
        /// Cisco/GXS IGRP
        pub const IGRP = 88;
        /// OSPFIGP
        pub const OSPFIGP = 89;
        /// Strite RPC protocol
        pub const SRPC = 90;
        /// Locus Address Resoloution
        pub const LARP = 91;
        /// Multicast Transport
        pub const MTP = 92;
        /// AX.25 Frames
        pub const AX25 = 93;
        /// IP encapsulated in IP
        pub const IPEIP = 94;
        /// Mobile Int.ing control
        pub const MICP = 95;
        /// Semaphore Comm. security
        pub const SCCSP = 96;
        /// Ethernet IP encapsulation
        pub const ETHERIP = 97;
        /// encapsulation header
        pub const ENCAP = 98;
        /// any private encr. scheme
        pub const APES = 99;
        /// GMTP
        pub const GMTP = 100;
        /// payload compression (IPComp)
        pub const IPCOMP = 108;
        /// SCTP
        pub const SCTP = 132;
        /// IPv6 Mobility Header
        pub const MH = 135;
        /// UDP-Lite
        pub const UDPLITE = 136;
        /// IP6 Host Identity Protocol
        pub const HIP = 139;
        /// IP6 Shim6 Protocol
        pub const SHIM6 = 140;
        /// Protocol Independent Mcast
        pub const PIM = 103;
        /// CARP
        pub const CARP = 112;
        /// PGM
        pub const PGM = 113;
        /// MPLS-in-IP
        pub const MPLS = 137;
        /// PFSYNC
        pub const PFSYNC = 240;
        /// Reserved
        pub const RESERVED_253 = 253;
        /// Reserved
        pub const RESERVED_254 = 254;
    },
    .solaris, .illumos => struct {
        /// dummy for IP
        pub const IP = 0;
        /// Hop by hop header for IPv6
        pub const HOPOPTS = 0;
        /// control message protocol
        pub const ICMP = 1;
        /// group control protocol
        pub const IGMP = 2;
        /// gateway^2 (deprecated)
        pub const GGP = 3;
        /// IP in IP encapsulation
        pub const ENCAP = 4;
        /// tcp
        pub const TCP = 6;
        /// exterior gateway protocol
        pub const EGP = 8;
        /// pup
        pub const PUP = 12;
        /// user datagram protocol
        pub const UDP = 17;
        /// xns idp
        pub const IDP = 22;
        /// IPv6 encapsulated in IP
        pub const IPV6 = 41;
        /// Routing header for IPv6
        pub const ROUTING = 43;
        /// Fragment header for IPv6
        pub const FRAGMENT = 44;
        /// rsvp
        pub const RSVP = 46;
        /// IPsec Encap. Sec. Payload
        pub const ESP = 50;
        /// IPsec Authentication Hdr.
        pub const AH = 51;
        /// ICMP for IPv6
        pub const ICMPV6 = 58;
        /// No next header for IPv6
        pub const NONE = 59;
        /// Destination options
        pub const DSTOPTS = 60;
        /// "hello" routing protocol
        pub const HELLO = 63;
        /// UNOFFICIAL net disk proto
        pub const ND = 77;
        /// ISO clnp
        pub const EON = 80;
        /// OSPF
        pub const OSPF = 89;
        /// PIM routing protocol
        pub const PIM = 103;
        /// Stream Control
        pub const SCTP = 132;
        /// raw IP packet
        pub const RAW = 255;
        /// Sockets Direct Protocol
        pub const PROTO_SDP = 257;
    },
    .netbsd => struct {
        /// dummy for IP
        pub const IP = 0;
        /// IP6 hop-by-hop options
        pub const HOPOPTS = 0;
        /// control message protocol
        pub const ICMP = 1;
        /// group mgmt protocol
        pub const IGMP = 2;
        /// gateway^2 (deprecated)
        pub const GGP = 3;
        /// IP header
        pub const IPV4 = 4;
        /// IP inside IP
        pub const IPIP = 4;
        /// tcp
        pub const TCP = 6;
        /// exterior gateway protocol
        pub const EGP = 8;
        /// pup
        pub const PUP = 12;
        /// user datagram protocol
        pub const UDP = 17;
        /// xns idp
        pub const IDP = 22;
        /// tp-4 w/ class negotiation
        pub const TP = 29;
        /// DCCP
        pub const DCCP = 33;
        /// IP6 header
        pub const IPV6 = 41;
        /// IP6 routing header
        pub const ROUTING = 43;
        /// IP6 fragmentation header
        pub const FRAGMENT = 44;
        /// resource reservation
        pub const RSVP = 46;
        /// GRE encaps RFC 1701
        pub const GRE = 47;
        /// encap. security payload
        pub const ESP = 50;
        /// authentication header
        pub const AH = 51;
        /// IP Mobility RFC 2004
        pub const MOBILE = 55;
        /// IPv6 ICMP
        pub const IPV6_ICMP = 58;
        /// ICMP6
        pub const ICMPV6 = 58;
        /// IP6 no next header
        pub const NONE = 59;
        /// IP6 destination option
        pub const DSTOPTS = 60;
        /// ISO cnlp
        pub const EON = 80;
        /// Ethernet-in-IP
        pub const ETHERIP = 97;
        /// encapsulation header
        pub const ENCAP = 98;
        /// Protocol indep. multicast
        pub const PIM = 103;
        /// IP Payload Comp. Protocol
        pub const IPCOMP = 108;
        /// VRRP RFC 2338
        pub const VRRP = 112;
        /// Common Address Resolution Protocol
        pub const CARP = 112;
        /// L2TPv3
        pub const L2TP = 115;
        /// SCTP
        pub const SCTP = 132;
        /// PFSYNC
        pub const PFSYNC = 240;
        /// raw IP packet
        pub const RAW = 255;
    },
    .dragonfly => struct {
        pub const IP = 0;
        pub const ICMP = 1;
        pub const TCP = 6;
        pub const UDP = 17;
        pub const IPV6 = 41;
        pub const RAW = 255;
        pub const HOPOPTS = 0;
        pub const IGMP = 2;
        pub const GGP = 3;
        pub const IPV4 = 4;
        pub const IPIP = IPV4;
        pub const ST = 7;
        pub const EGP = 8;
        pub const PIGP = 9;
        pub const RCCMON = 10;
        pub const NVPII = 11;
        pub const PUP = 12;
        pub const ARGUS = 13;
        pub const EMCON = 14;
        pub const XNET = 15;
        pub const CHAOS = 16;
        pub const MUX = 18;
        pub const MEAS = 19;
        pub const HMP = 20;
        pub const PRM = 21;
        pub const IDP = 22;
        pub const TRUNK1 = 23;
        pub const TRUNK2 = 24;
        pub const LEAF1 = 25;
        pub const LEAF2 = 26;
        pub const RDP = 27;
        pub const IRTP = 28;
        pub const TP = 29;
        pub const BLT = 30;
        pub const NSP = 31;
        pub const INP = 32;
        pub const SEP = 33;
        pub const @"3PC" = 34;
        pub const IDPR = 35;
        pub const XTP = 36;
        pub const DDP = 37;
        pub const CMTP = 38;
        pub const TPXX = 39;
        pub const IL = 40;
        pub const SDRP = 42;
        pub const ROUTING = 43;
        pub const FRAGMENT = 44;
        pub const IDRP = 45;
        pub const RSVP = 46;
        pub const GRE = 47;
        pub const MHRP = 48;
        pub const BHA = 49;
        pub const ESP = 50;
        pub const AH = 51;
        pub const INLSP = 52;
        pub const SWIPE = 53;
        pub const NHRP = 54;
        pub const MOBILE = 55;
        pub const TLSP = 56;
        pub const SKIP = 57;
        pub const ICMPV6 = 58;
        pub const NONE = 59;
        pub const DSTOPTS = 60;
        pub const AHIP = 61;
        pub const CFTP = 62;
        pub const HELLO = 63;
        pub const SATEXPAK = 64;
        pub const KRYPTOLAN = 65;
        pub const RVD = 66;
        pub const IPPC = 67;
        pub const ADFS = 68;
        pub const SATMON = 69;
        pub const VISA = 70;
        pub const IPCV = 71;
        pub const CPNX = 72;
        pub const CPHB = 73;
        pub const WSN = 74;
        pub const PVP = 75;
        pub const BRSATMON = 76;
        pub const ND = 77;
        pub const WBMON = 78;
        pub const WBEXPAK = 79;
        pub const EON = 80;
        pub const VMTP = 81;
        pub const SVMTP = 82;
        pub const VINES = 83;
        pub const TTP = 84;
        pub const IGP = 85;
        pub const DGP = 86;
        pub const TCF = 87;
        pub const IGRP = 88;
        pub const OSPFIGP = 89;
        pub const SRPC = 90;
        pub const LARP = 91;
        pub const MTP = 92;
        pub const AX25 = 93;
        pub const IPEIP = 94;
        pub const MICP = 95;
        pub const SCCSP = 96;
        pub const ETHERIP = 97;
        pub const ENCAP = 98;
        pub const APES = 99;
        pub const GMTP = 100;
        pub const IPCOMP = 108;
        pub const PIM = 103;
        pub const CARP = 112;
        pub const PGM = 113;
        pub const PFSYNC = 240;
        pub const DIVERT = 254;
        pub const MAX = 256;
        pub const DONE = 257;
        pub const UNKNOWN = 258;
    },
    .haiku => struct {
        pub const IP = 0;
        pub const HOPOPTS = 0;
        pub const ICMP = 1;
        pub const IGMP = 2;
        pub const TCP = 6;
        pub const UDP = 17;
        pub const IPV6 = 41;
        pub const ROUTING = 43;
        pub const FRAGMENT = 44;
        pub const ESP = 50;
        pub const AH = 51;
        pub const ICMPV6 = 58;
        pub const NONE = 59;
        pub const DSTOPTS = 60;
        pub const ETHERIP = 97;
        pub const RAW = 255;
        pub const MAX = 256;
    },
    .openbsd => struct {
        /// dummy for IP
        pub const IP = 0;
        /// IP6 hop-by-hop options
        pub const HOPOPTS = IP;
        /// control message protocol
        pub const ICMP = 1;
        /// group mgmt protocol
        pub const IGMP = 2;
        /// gateway^2 (deprecated)
        pub const GGP = 3;
        /// IP header
        pub const IPV4 = IPIP;
        /// IP inside IP
        pub const IPIP = 4;
        /// tcp
        pub const TCP = 6;
        /// exterior gateway protocol
        pub const EGP = 8;
        /// pup
        pub const PUP = 12;
        /// user datagram protocol
        pub const UDP = 17;
        /// xns idp
        pub const IDP = 22;
        /// tp-4 w/ class negotiation
        pub const TP = 29;
        /// IP6 header
        pub const IPV6 = 41;
        /// IP6 routing header
        pub const ROUTING = 43;
        /// IP6 fragmentation header
        pub const FRAGMENT = 44;
        /// resource reservation
        pub const RSVP = 46;
        /// GRE encaps RFC 1701
        pub const GRE = 47;
        /// encap. security payload
        pub const ESP = 50;
        /// authentication header
        pub const AH = 51;
        /// IP Mobility RFC 2004
        pub const MOBILE = 55;
        /// IPv6 ICMP
        pub const IPV6_ICMP = 58;
        /// ICMP6
        pub const ICMPV6 = 58;
        /// IP6 no next header
        pub const NONE = 59;
        /// IP6 destination option
        pub const DSTOPTS = 60;
        /// ISO cnlp
        pub const EON = 80;
        /// Ethernet-in-IP
        pub const ETHERIP = 97;
        /// encapsulation header
        pub const ENCAP = 98;
        /// Protocol indep. multicast
        pub const PIM = 103;
        /// IP Payload Comp. Protocol
        pub const IPCOMP = 108;
        /// VRRP RFC 2338
        pub const VRRP = 112;
        /// Common Address Resolution Protocol
        pub const CARP = 112;
        /// PFSYNC
        pub const PFSYNC = 240;
        /// raw IP packet
        pub const RAW = 255;
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L44-L54
    .serenity => struct {
        pub const IP = 0;
        pub const ICMP = 1;
        pub const IGMP = 2;
        pub const IPIP = 4;
        pub const TCP = 6;
        pub const UDP = 17;
        pub const IPV6 = 41;
        pub const ESP = 50;
        pub const AH = 51;
        pub const ICMPV6 = 58;
        pub const RAW = 255;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sol"></a>`SOL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SOL = switch (native_os) {
    .linux => linux.SOL,
    .emscripten => emscripten.SOL,
    .windows => ws2_32.SOL,
    .openbsd, .haiku, .dragonfly, .netbsd, .freebsd, .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const SOCKET = 0xffff;
    },
    .solaris, .illumos => struct {
        pub const SOCKET = 0xffff;
        pub const ROUTE = 0xfffe;
        pub const PACKET = 0xfffd;
        pub const FILTER = 0xfffc;
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L127
    .serenity => struct {
        pub const SOCKET = 1;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-so"></a>`SO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SO = switch (native_os) {
    .linux => linux.SO,
    .emscripten => emscripten.SO,
    .windows => ws2_32.SO,
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const DEBUG = 0x0001;
        pub const ACCEPTCONN = 0x0002;
        pub const REUSEADDR = 0x0004;
        pub const KEEPALIVE = 0x0008;
        pub const DONTROUTE = 0x0010;
        pub const BROADCAST = 0x0020;
        pub const USELOOPBACK = 0x0040;
        pub const LINGER = 0x1080;
        pub const OOBINLINE = 0x0100;
        pub const REUSEPORT = 0x0200;
        pub const ACCEPTFILTER = 0x1000;
        pub const SNDBUF = 0x1001;
        pub const RCVBUF = 0x1002;
        pub const SNDLOWAT = 0x1003;
        pub const RCVLOWAT = 0x1004;
        pub const SNDTIMEO = 0x1005;
        pub const RCVTIMEO = 0x1006;
        pub const ERROR = 0x1007;
        pub const TYPE = 0x1008;

        pub const NREAD = 0x1020;
        pub const NKE = 0x1021;
        pub const NOSIGPIPE = 0x1022;
        pub const NOADDRERR = 0x1023;
        pub const NWRITE = 0x1024;
        pub const REUSESHAREUID = 0x1025;
    },
    .freebsd => struct {
        pub const DEBUG = 0x00000001;
        pub const ACCEPTCONN = 0x00000002;
        pub const REUSEADDR = 0x00000004;
        pub const KEEPALIVE = 0x00000008;
        pub const DONTROUTE = 0x00000010;
        pub const BROADCAST = 0x00000020;
        pub const USELOOPBACK = 0x00000040;
        pub const LINGER = 0x00000080;
        pub const OOBINLINE = 0x00000100;
        pub const REUSEPORT = 0x00000200;
        pub const TIMESTAMP = 0x00000400;
        pub const NOSIGPIPE = 0x00000800;
        pub const ACCEPTFILTER = 0x00001000;
        pub const BINTIME = 0x00002000;
        pub const NO_OFFLOAD = 0x00004000;
        pub const NO_DDP = 0x00008000;
        pub const REUSEPORT_LB = 0x00010000;

        pub const SNDBUF = 0x1001;
        pub const RCVBUF = 0x1002;
        pub const SNDLOWAT = 0x1003;
        pub const RCVLOWAT = 0x1004;
        pub const SNDTIMEO = 0x1005;
        pub const RCVTIMEO = 0x1006;
        pub const ERROR = 0x1007;
        pub const TYPE = 0x1008;
        pub const LABEL = 0x1009;
        pub const PEERLABEL = 0x1010;
        pub const LISTENQLIMIT = 0x1011;
        pub const LISTENQLEN = 0x1012;
        pub const LISTENINCQLEN = 0x1013;
        pub const SETFIB = 0x1014;
        pub const USER_COOKIE = 0x1015;
        pub const PROTOCOL = 0x1016;
        pub const PROTOTYPE = PROTOCOL;
        pub const TS_CLOCK = 0x1017;
        pub const MAX_PACING_RATE = 0x1018;
        pub const DOMAIN = 0x1019;
    },
    .solaris, .illumos => struct {
        pub const DEBUG = 0x0001;
        pub const ACCEPTCONN = 0x0002;
        pub const REUSEADDR = 0x0004;
        pub const KEEPALIVE = 0x0008;
        pub const DONTROUTE = 0x0010;
        pub const BROADCAST = 0x0020;
        pub const USELOOPBACK = 0x0040;
        pub const LINGER = 0x0080;
        pub const OOBINLINE = 0x0100;
        pub const DGRAM_ERRIND = 0x0200;
        pub const RECVUCRED = 0x0400;

        pub const SNDBUF = 0x1001;
        pub const RCVBUF = 0x1002;
        pub const SNDLOWAT = 0x1003;
        pub const RCVLOWAT = 0x1004;
        pub const SNDTIMEO = 0x1005;
        pub const RCVTIMEO = 0x1006;
        pub const ERROR = 0x1007;
        pub const TYPE = 0x1008;
        pub const PROTOTYPE = 0x1009;
        pub const ANON_MLP = 0x100a;
        pub const MAC_EXEMPT = 0x100b;
        pub const DOMAIN = 0x100c;
        pub const RCVPSH = 0x100d;

        pub const SECATTR = 0x1011;
        pub const TIMESTAMP = 0x1013;
        pub const ALLZONES = 0x1014;
        pub const EXCLBIND = 0x1015;
        pub const MAC_IMPLICIT = 0x1016;
        pub const VRRP = 0x1017;
    },
    .netbsd => struct {
        pub const DEBUG = 0x0001;
        pub const ACCEPTCONN = 0x0002;
        pub const REUSEADDR = 0x0004;
        pub const KEEPALIVE = 0x0008;
        pub const DONTROUTE = 0x0010;
        pub const BROADCAST = 0x0020;
        pub const USELOOPBACK = 0x0040;
        pub const LINGER = 0x0080;
        pub const OOBINLINE = 0x0100;
        pub const REUSEPORT = 0x0200;
        pub const NOSIGPIPE = 0x0800;
        pub const ACCEPTFILTER = 0x1000;
        pub const TIMESTAMP = 0x2000;
        pub const RERROR = 0x4000;

        pub const SNDBUF = 0x1001;
        pub const RCVBUF = 0x1002;
        pub const SNDLOWAT = 0x1003;
        pub const RCVLOWAT = 0x1004;
        pub const ERROR = 0x1007;
        pub const TYPE = 0x1008;
        pub const OVERFLOWED = 0x1009;

        pub const NOHEADER = 0x100a;
        pub const SNDTIMEO = 0x100b;
        pub const RCVTIMEO = 0x100c;
    },
    .dragonfly => struct {
        pub const DEBUG = 0x0001;
        pub const ACCEPTCONN = 0x0002;
        pub const REUSEADDR = 0x0004;
        pub const KEEPALIVE = 0x0008;
        pub const DONTROUTE = 0x0010;
        pub const BROADCAST = 0x0020;
        pub const USELOOPBACK = 0x0040;
        pub const LINGER = 0x0080;
        pub const OOBINLINE = 0x0100;
        pub const REUSEPORT = 0x0200;
        pub const TIMESTAMP = 0x0400;
        pub const NOSIGPIPE = 0x0800;
        pub const ACCEPTFILTER = 0x1000;
        pub const RERROR = 0x2000;
        pub const PASSCRED = 0x4000;

        pub const SNDBUF = 0x1001;
        pub const RCVBUF = 0x1002;
        pub const SNDLOWAT = 0x1003;
        pub const RCVLOWAT = 0x1004;
        pub const SNDTIMEO = 0x1005;
        pub const RCVTIMEO = 0x1006;
        pub const ERROR = 0x1007;
        pub const TYPE = 0x1008;
        pub const SNDSPACE = 0x100a;
        pub const CPUHINT = 0x1030;
    },
    .haiku => struct {
        pub const ACCEPTCONN = 0x00000001;
        pub const BROADCAST = 0x00000002;
        pub const DEBUG = 0x00000004;
        pub const DONTROUTE = 0x00000008;
        pub const KEEPALIVE = 0x00000010;
        pub const OOBINLINE = 0x00000020;
        pub const REUSEADDR = 0x00000040;
        pub const REUSEPORT = 0x00000080;
        pub const USELOOPBACK = 0x00000100;
        pub const LINGER = 0x00000200;

        pub const SNDBUF = 0x40000001;
        pub const SNDLOWAT = 0x40000002;
        pub const SNDTIMEO = 0x40000003;
        pub const RCVBUF = 0x40000004;
        pub const RCVLOWAT = 0x40000005;
        pub const RCVTIMEO = 0x40000006;
        pub const ERROR = 0x40000007;
        pub const TYPE = 0x40000008;
        pub const NONBLOCK = 0x40000009;
        pub const BINDTODEVICE = 0x4000000a;
        pub const PEERCRED = 0x4000000b;
    },
    .openbsd => struct {
        pub const DEBUG = 0x0001;
        pub const ACCEPTCONN = 0x0002;
        pub const REUSEADDR = 0x0004;
        pub const KEEPALIVE = 0x0008;
        pub const DONTROUTE = 0x0010;
        pub const BROADCAST = 0x0020;
        pub const USELOOPBACK = 0x0040;
        pub const LINGER = 0x0080;
        pub const OOBINLINE = 0x0100;
        pub const REUSEPORT = 0x0200;
        pub const TIMESTAMP = 0x0800;
        pub const BINDANY = 0x1000;
        pub const ZEROIZE = 0x2000;
        pub const SNDBUF = 0x1001;
        pub const RCVBUF = 0x1002;
        pub const SNDLOWAT = 0x1003;
        pub const RCVLOWAT = 0x1004;
        pub const SNDTIMEO = 0x1005;
        pub const RCVTIMEO = 0x1006;
        pub const ERROR = 0x1007;
        pub const TYPE = 0x1008;
        pub const NETPROC = 0x1020;
        pub const RTABLE = 0x1021;
        pub const PEERCRED = 0x1022;
        pub const SPLICE = 0x1023;
        pub const DOMAIN = 0x1024;
        pub const PROTOCOL = 0x1025;
    },
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L130-L150
    .serenity => struct {
        pub const RCVTIMEO = 0;
        pub const SNDTIMEO = 1;
        pub const TYPE = 2;
        pub const ERROR = 3;
        pub const PEERCRED = 4;
        pub const RCVBUF = 5;
        pub const SNDBUF = 6;
        pub const DEBUG = 7;
        pub const REUSEADDR = 8;
        pub const BINDTODEVICE = 9;
        pub const KEEPALIVE = 10;
        pub const TIMESTAMP = 11;
        pub const BROADCAST = 12;
        pub const LINGER = 13;
        pub const ACCEPTCONN = 14;
        pub const DONTROUTE = 15;
        pub const OOBINLINE = 16;
        pub const SNDLOWAT = 17;
        pub const RCVLOWAT = 18;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-somaxconn"></a>`SOMAXCONN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SOMAXCONN = switch (native_os) {
    .linux => linux.SOMAXCONN,
    .windows => ws2_32.SOMAXCONN,
    // https://github.com/SerenityOS/serenity/blob/ac44ec5ebc707f9dd0c3d4759a1e17e91db5d74f/Kernel/API/POSIX/sys/socket.h#L128
    .solaris, .illumos, .serenity => 128,
    .openbsd => 28,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-ifnamesize"></a>`IFNAMESIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const IFNAMESIZE = switch (native_os) {
    .linux => linux.IFNAMESIZE,
    .emscripten => emscripten.IFNAMESIZE,
    .windows => 30,
    // https://github.com/SerenityOS/serenity/blob/9882848e0bf783dfc8e8a6d887a848d70d9c58f4/Kernel/API/POSIX/net/if.h#L50
    .openbsd, .dragonfly, .netbsd, .freebsd, .macos, .ios, .tvos, .watchos, .visionos, .serenity => 16,
    .solaris, .illumos => 32,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-stack-t"></a>`stack_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const stack_t = switch (native_os) {
    .linux => linux.stack_t,
    .emscripten => emscripten.stack_t,
    .freebsd, .openbsd => extern struct {
        /// Signal stack base.
        sp: *anyopaque,
        /// Signal stack length.
        size: usize,
        /// SS_DISABLE and/or SS_ONSTACK.
        flags: i32,
    },
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L48-L52
    .serenity => extern struct {
        sp: *anyopaque,
        flags: c_int,
        size: usize,
    },
    else => extern struct {
        sp: [*]u8,
        size: isize,
        flags: i32,
    },
}
\`\`\`

</details>

---

### <a id="const-time-t"></a>`time_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const time_t = switch (native_os) {
    .linux => linux.time_t,
    .emscripten => emscripten.time_t,
    .haiku, .dragonfly => isize,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L47
    else => i64,
}
\`\`\`

</details>

---

### <a id="const-suseconds-t"></a>`suseconds_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const suseconds_t = switch (native_os) {
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L49
    .solaris, .illumos, .serenity => i64,
    .freebsd, .dragonfly => c_long,
    .netbsd => c_int,
    .haiku => i32,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-timeval"></a>`timeval`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const timeval = switch (native_os) {
    .linux => linux.timeval,
    .emscripten => emscripten.timeval,
    .windows => extern struct {
        sec: c_long,
        usec: c_long,
    },
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        sec: c_long,
        usec: i32,
    },
    // https://github.com/SerenityOS/serenity/blob/6b6eca0631c893c5f8cfb8274cdfe18e2d0637c0/Kernel/API/POSIX/sys/time.h#L15-L18
    .dragonfly, .netbsd, .freebsd, .solaris, .illumos, .serenity => extern struct {
        /// seconds
        sec: time_t,
        /// microseconds
        usec: suseconds_t,
    },
    .openbsd => extern struct {
        sec: time_t,
        usec: c_long,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-timezone"></a>`timezone`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const timezone = switch (native_os) {
    .linux => linux.timezone,
    .emscripten => emscripten.timezone,
    .openbsd, .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        minuteswest: i32,
        dsttime: i32,
    },
    // https://github.com/SerenityOS/serenity/blob/ba776390b5878ec0be1a9e595a3471a6cfe0a0cf/Userland/Libraries/LibC/sys/time.h#L19-L22
    .serenity => extern struct {
        minuteswest: c_int,
        dsttime: c_int,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-ucontext-t"></a>`ucontext_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const ucontext_t = switch (native_os) {
    .linux => linux.ucontext_t, // std.os.linux.ucontext_t is currently glibc-compatible, but it should probably not be.
    .emscripten => emscripten.ucontext_t,
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        onstack: c_int,
        sigmask: sigset_t,
        stack: stack_t,
        link: ?*ucontext_t,
        mcsize: u64,
        mcontext: *mcontext_t,
        __mcontext_data: mcontext_t,
    },
    .freebsd => extern struct {
        sigmask: sigset_t,
        mcontext: mcontext_t,
        link: ?*ucontext_t,
        stack: stack_t,
        flags: c_int,
        __spare__: [4]c_int,
    },
    .solaris, .illumos => extern struct {
        flags: u64,
        link: ?*ucontext_t,
        sigmask: sigset_t,
        stack: stack_t,
        mcontext: mcontext_t,
        brand_data: [3]?*anyopaque,
        filler: [2]i64,
    },
    .netbsd => extern struct {
        flags: u32,
        link: ?*ucontext_t,
        sigmask: sigset_t,
        stack: stack_t,
        mcontext: mcontext_t,
        __pad: [
            switch (builtin.cpu.arch) {
                .x86 => 4,
                .mips, .mipsel, .mips64, .mips64el => 14,
                .arm, .armeb, .thumb, .thumbeb => 1,
                .sparc, .sparc64 => if (@sizeOf(usize) == 4) 43 else 8,
                else => 0,
            }
        ]u32,
    },
    .dragonfly => extern struct {
        sigmask: sigset_t,
        mcontext: mcontext_t,
        link: ?*ucontext_t,
        stack: stack_t,
        cofunc: ?*fn (?*ucontext_t, ?*anyopaque) void,
        arg: ?*void,
        _spare: [4]c_int,
    },
    // https://github.com/SerenityOS/serenity/blob/87eac0e424cff4a1f941fb704b9362a08654c24d/Kernel/API/POSIX/ucontext.h#L19-L24
    .haiku, .serenity => extern struct {
        link: ?*ucontext_t,
        sigmask: sigset_t,
        stack: stack_t,
        mcontext: mcontext_t,
    },
    .openbsd => openbsd.ucontext_t,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-mcontext-t"></a>`mcontext_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mcontext_t = switch (native_os) {
    .linux => linux.mcontext_t,
    .emscripten => emscripten.mcontext_t,
    .macos, .ios, .tvos, .watchos, .visionos => darwin.mcontext_t,
    .freebsd => switch (builtin.cpu.arch) {
        .x86_64 => extern struct {
            onstack: u64,
            rdi: u64,
            rsi: u64,
            rdx: u64,
            rcx: u64,
            r8: u64,
            r9: u64,
            rax: u64,
            rbx: u64,
            rbp: u64,
            r10: u64,
            r11: u64,
            r12: u64,
            r13: u64,
            r14: u64,
            r15: u64,
            trapno: u32,
            fs: u16,
            gs: u16,
            addr: u64,
            flags: u32,
            es: u16,
            ds: u16,
            err: u64,
            rip: u64,
            cs: u64,
            rflags: u64,
            rsp: u64,
            ss: u64,
            len: u64,
            fpformat: u64,
            ownedfp: u64,
            fpstate: [64]u64 align(16),
            fsbase: u64,
            gsbase: u64,
            xfpustate: u64,
            xfpustate_len: u64,
            spare: [4]u64,
        },
        .aarch64 => extern struct {
            gpregs: extern struct {
                x: [30]u64,
                lr: u64,
                sp: u64,
                elr: u64,
                spsr: u32,
                _pad: u32,
            },
            fpregs: extern struct {
                q: [32]u128,
                sr: u32,
                cr: u32,
                flags: u32,
                _pad: u32,
            },
            flags: u32,
            _pad: u32,
            _spare: [8]u64,
        },
        else => struct {},
    },
    .solaris, .illumos => extern struct {
        gregs: [28]u64,
        fpregs: solaris.fpregset_t,
    },
    .netbsd => switch (builtin.cpu.arch) {
        .aarch64, .aarch64_be => extern struct {
            gregs: [35]u64,
            fregs: [528]u8 align(16),
            spare: [8]u64,
        },
        .x86 => extern struct {
            gregs: [19]u32,
            fpregs: [161]u32,
            mc_tlsbase: u32,
        },
        .x86_64 => extern struct {
            gregs: [26]u64,
            mc_tlsbase: u64,
            fpregs: [512]u8 align(8),
        },
        else => struct {},
    },
    .dragonfly => dragonfly.mcontext_t,
    .haiku => haiku.mcontext_t,
    .serenity => switch (native_arch) {
        // https://github.com/SerenityOS/serenity/blob/200e91cd7f1ec5453799a2720d4dc114a59cc289/Kernel/Arch/aarch64/mcontext.h#L15-L19
        .aarch64 => extern struct {
            x: [31]u64,
            sp: u64,
            pc: u64,
        },
        // https://github.com/SerenityOS/serenity/blob/66f8d0f031ef25c409dbb4fecaa454800fecae0f/Kernel/Arch/riscv64/mcontext.h#L15-L18
        .riscv64 => extern struct {
            x: [31]u64,
            pc: u64,
        },
        // https://github.com/SerenityOS/serenity/blob/7b9ea3efdec9f86a1042893e8107d0b23aad8727/Kernel/Arch/x86_64/mcontext.h#L15-L40
        .x86_64 => extern struct {
            rax: u64,
            rcx: u64,
            rdx: u64,
            rbx: u64,
            rsp: u64,
            rbp: u64,
            rsi: u64,
            rdi: u64,
            rip: u64,
            r8: u64,
            r9: u64,
            r10: u64,
            r11: u64,
            r12: u64,
            r13: u64,
            r14: u64,
            r15: u64,
            rflags: u64,
            cs: u32,
            ss: u32,
            ds: u32,
            es: u32,
            fs: u32,
            gs: u32,
        },
        else => struct {},
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-user-desc"></a>`user_desc`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const user_desc = switch (native_os) {
    .linux => linux.user_desc,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-utsname"></a>`utsname`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const utsname = switch (native_os) {
    .linux => linux.utsname,
    .emscripten => emscripten.utsname,
    .solaris, .illumos => extern struct {
        sysname: [256:0]u8,
        nodename: [256:0]u8,
        release: [256:0]u8,
        version: [256:0]u8,
        machine: [256:0]u8,
        domainname: [256:0]u8,
    },
    .macos => extern struct {
        sysname: [255:0]u8,
        nodename: [255:0]u8,
        release: [255:0]u8,
        version: [255:0]u8,
        machine: [255:0]u8,
    },
    // https://github.com/SerenityOS/serenity/blob/d794ed1de7a46482272683f8dc4c858806390f29/Kernel/API/POSIX/sys/utsname.h#L17-L23
    .serenity => extern struct {
        sysname: [UTSNAME_ENTRY_LEN:0]u8,
        nodename: [UTSNAME_ENTRY_LEN:0]u8,
        release: [UTSNAME_ENTRY_LEN:0]u8,
        version: [UTSNAME_ENTRY_LEN:0]u8,
        machine: [UTSNAME_ENTRY_LEN:0]u8,

        const UTSNAME_ENTRY_LEN = 64;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pr"></a>`PR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PR = switch (native_os) {
    .linux => linux.PR,
    else => void,
}
\`\`\`

</details>

---

### <a id="const--errno"></a>`_errno`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _errno = switch (native_os) {
    .linux => switch (native_abi) {
        .android, .androideabi => private.__errno,
        else => private.__errno_location,
    },
    .emscripten => private.__errno_location,
    .wasi, .dragonfly => private.errnoFromThreadLocal,
    .windows => private._errno,
    .macos, .ios, .tvos, .watchos, .visionos, .freebsd => private.__error,
    .solaris, .illumos => private.___errno,
    .openbsd, .netbsd => private.__errno,
    .haiku => haiku._errnop,
    // https://github.com/SerenityOS/serenity/blob/a353ceecf13b6f156a078e32f1ddf1d21366934c/Userland/Libraries/LibC/errno.h#L33
    .serenity => private.__errno_location,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-rtld"></a>`RTLD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const RTLD = switch (native_os) {
    .linux, .emscripten => packed struct(u32) {
        LAZY: bool = false,
        NOW: bool = false,
        NOLOAD: bool = false,
        _3: u5 = 0,
        GLOBAL: bool = false,
        _9: u3 = 0,
        NODELETE: bool = false,
        _: u19 = 0,
    },
    .dragonfly, .freebsd => packed struct(u32) {
        LAZY: bool = false,
        NOW: bool = false,
        _2: u6 = 0,
        GLOBAL: bool = false,
        TRACE: bool = false,
        _10: u2 = 0,
        NODELETE: bool = false,
        NOLOAD: bool = false,
        _: u18 = 0,
    },
    .haiku => packed struct(u32) {
        NOW: bool = false,
        GLOBAL: bool = false,
        _: u30 = 0,
    },
    .netbsd => packed struct(u32) {
        LAZY: bool = false,
        NOW: bool = false,
        _2: u6 = 0,
        GLOBAL: bool = false,
        LOCAL: bool = false,
        _10: u2 = 0,
        NODELETE: bool = false,
        NOLOAD: bool = false,
        _: u18 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        LAZY: bool = false,
        NOW: bool = false,
        NOLOAD: bool = false,
        _3: u5 = 0,
        GLOBAL: bool = false,
        PARENT: bool = false,
        GROUP: bool = false,
        WORLD: bool = false,
        NODELETE: bool = false,
        FIRST: bool = false,
        _14: u2 = 0,
        CONFGEN: bool = false,
        _: u15 = 0,
    },
    .openbsd => packed struct(u32) {
        LAZY: bool = false,
        NOW: bool = false,
        _2: u6 = 0,
        GLOBAL: bool = false,
        TRACE: bool = false,
        _: u22 = 0,
    },
    .macos, .ios, .tvos, .watchos, .visionos => packed struct(u32) {
        LAZY: bool = false,
        NOW: bool = false,
        LOCAL: bool = false,
        GLOBAL: bool = false,
        NOLOAD: bool = false,
        _5: u2 = 0,
        NODELETE: bool = false,
        FIRST: bool = false,
        _: u23 = 0,
    },
    // https://github.com/SerenityOS/serenity/blob/36a26d7fa80bc9c72b19442912d8967f448368ff/Userland/Libraries/LibC/dlfcn.h#L13-L17
    .serenity => packed struct(c_int) {
        DEFAULT: bool = false,
        _1: u1,
        LAZY: bool = false,
        NOW: bool = false,
        GLOBAL: bool = false,
        LOCAL: bool = false,
        _: std.meta.Int(.unsigned, @bitSizeOf(c_int) - 6) = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-dirent"></a>`dirent`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dirent = switch (native_os) {
    .linux, .emscripten => extern struct {
        ino: ino_t,
        off: off_t,
        reclen: c_ushort,
        type: u8,
        name: [256]u8,
    },
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        ino: u64,
        seekoff: u64,
        reclen: u16,
        namlen: u16,
        type: u8,
        name: [1024]u8,
    },
    .freebsd => extern struct {
        /// File number of entry.
        fileno: ino_t,
        /// Directory offset of entry.
        off: off_t,
        /// Length of this record.
        reclen: u16,
        /// File type, one of DT_.
        type: u8,
        pad0: u8 = 0,
        /// Length of the name member.
        namlen: u16,
        pad1: u16 = 0,
        /// Name of entry.
        name: [255:0]u8,
    },
    .solaris, .illumos => extern struct {
        /// Inode number of entry.
        ino: ino_t,
        /// Offset of this entry on disk.
        off: off_t,
        /// Length of this record.
        reclen: u16,
        /// File name.
        name: [MAXNAMLEN:0]u8,
    },
    .netbsd => extern struct {
        fileno: ino_t,
        reclen: u16,
        namlen: u16,
        type: u8,
        name: [MAXNAMLEN:0]u8,
    },
    .dragonfly => extern struct {
        fileno: c_ulong,
        namlen: u16,
        type: u8,
        unused1: u8,
        unused2: u32,
        name: [256]u8,

        pub fn reclen(self: dirent) u16 {
            return (@offsetOf(dirent, "name") + self.namlen + 1 + 7) & ~@as(u16, 7);
        }
    },
    .openbsd => extern struct {
        fileno: ino_t,
        off: off_t,
        reclen: u16,
        type: u8,
        namlen: u8,
        _: u32 align(1) = 0,
        name: [MAXNAMLEN:0]u8,
    },
    // https://github.com/SerenityOS/serenity/blob/abc150085f532f123b598949218893cb272ccc4c/Userland/Libraries/LibC/dirent.h#L14-L20
    .serenity => extern struct {
        ino: ino_t,
        off: off_t,
        reclen: c_ushort,
        type: u8,
        name: [255:0]u8,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-maxnamlen"></a>`MAXNAMLEN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MAXNAMLEN = switch (native_os) {
    .netbsd, .solaris, .illumos => 511,
    // https://github.com/SerenityOS/serenity/blob/1262a7d1424d0d2e89d80644409721cbf056ab17/Kernel/API/POSIX/dirent.h#L37
    .haiku, .serenity => NAME_MAX,
    .openbsd => 255,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-dirent64"></a>`dirent64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dirent64 = switch (native_os) {
    .linux => extern struct {
        ino: c_ulong,
        off: c_ulong,
        reclen: c_ushort,
        type: u8,
        name: [256]u8,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-ai"></a>`AI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const AI = if (builtin.abi.isAndroid()) packed struct(u32) {
    PASSIVE: bool = false,
    CANONNAME: bool = false,
    NUMERICHOST: bool = false,
    NUMERICSERV: bool = false,
    _4: u4 = 0,
    ALL: bool = false,
    V4MAPPED_CFG: bool = false,
    ADDRCONFIG: bool = false,
    V4MAPPED: bool = false,
    _: u20 = 0,
} else switch (native_os) {
    .linux, .emscripten => linux.AI,
    .dragonfly, .haiku, .freebsd => packed struct(u32) {
        PASSIVE: bool = false,
        CANONNAME: bool = false,
        NUMERICHOST: bool = false,
        NUMERICSERV: bool = false,
        _4: u4 = 0,
        ALL: bool = false,
        V4MAPPED_CFG: bool = false,
        ADDRCONFIG: bool = false,
        V4MAPPED: bool = false,
        _: u20 = 0,
    },
    .netbsd => packed struct(u32) {
        PASSIVE: bool = false,
        CANONNAME: bool = false,
        NUMERICHOST: bool = false,
        NUMERICSERV: bool = false,
        _4: u6 = 0,
        ADDRCONFIG: bool = false,
        _: u21 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        V4MAPPED: bool = false,
        ALL: bool = false,
        ADDRCONFIG: bool = false,
        PASSIVE: bool = false,
        CANONNAME: bool = false,
        NUMERICHOST: bool = false,
        NUMERICSERV: bool = false,
        _: u25 = 0,
    },
    .openbsd => packed struct(u32) {
        PASSIVE: bool = false,
        CANONNAME: bool = false,
        NUMERICHOST: bool = false,
        _3: u1 = 0,
        NUMERICSERV: bool = false,
        _5: u1 = 0,
        ADDRCONFIG: bool = false,
        _: u25 = 0,
    },
    .macos, .ios, .tvos, .watchos, .visionos => packed struct(u32) {
        PASSIVE: bool = false,
        CANONNAME: bool = false,
        NUMERICHOST: bool = false,
        _3: u5 = 0,
        ALL: bool = false,
        V4MAPPED_CFG: bool = false,
        ADDRCONFIG: bool = false,
        V4MAPPED: bool = false,
        NUMERICSERV: bool = false,
        _: u19 = 0,
    },
    .windows => ws2_32.AI,
    // https://github.com/SerenityOS/serenity/blob/d510d2aeb2facbd8f6c383d70fd1b033e1fee5dd/Userland/Libraries/LibC/netdb.h#L90-L96
    .serenity => packed struct(c_int) {
        PASSIVE: bool = false,
        CANONNAME: bool = false,
        NUMERICHOST: bool = false,
        NUMERICSERV: bool = false,
        V4MAPPED: bool = false,
        ALL: bool = false,
        ADDRCONFIG: bool = false,
        _: std.meta.Int(.unsigned, @bitSizeOf(c_int) - 7) = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-ni"></a>`NI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const NI = switch (native_os) {
    .linux, .emscripten => packed struct(u32) {
        NUMERICHOST: bool = false,
        NUMERICSERV: bool = false,
        NOFQDN: bool = false,
        NAMEREQD: bool = false,
        DGRAM: bool = false,
        _5: u3 = 0,
        NUMERICSCOPE: bool = false,
        _: u23 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        NOFQDN: bool = false,
        NUMERICHOST: bool = false,
        NAMEREQD: bool = false,
        NUMERICSERV: bool = false,
        DGRAM: bool = false,
        WITHSCOPEID: bool = false,
        NUMERICSCOPE: bool = false,
        _: u25 = 0,
    },
    // https://github.com/SerenityOS/serenity/blob/d510d2aeb2facbd8f6c383d70fd1b033e1fee5dd/Userland/Libraries/LibC/netdb.h#L101-L105
    .serenity => packed struct(c_int) {
        NUMERICHOST: bool = false,
        NUMERICSERV: bool = false,
        NAMEREQD: bool = false,
        NOFQDN: bool = false,
        DGRAM: bool = false,
        _: std.meta.Int(.unsigned, @bitSizeOf(c_int) - 5) = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-eai"></a>`EAI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const EAI = if (builtin.abi.isAndroid()) enum(c_int) {
    /// address family for hostname not supported
    ADDRFAMILY = 1,
    /// temporary failure in name resolution
    AGAIN = 2,
    /// invalid value for ai_flags
    BADFLAGS = 3,
    /// non-recoverable failure in name resolution
    FAIL = 4,
    /// ai_family not supported
    FAMILY = 5,
    /// memory allocation failure
    MEMORY = 6,
    /// no address associated with hostname
    NODATA = 7,
    /// hostname nor servname provided, or not known
    NONAME = 8,
    /// servname not supported for ai_socktype
    SERVICE = 9,
    /// ai_socktype not supported
    SOCKTYPE = 10,
    /// system error returned in errno
    SYSTEM = 11,
    /// invalid value for hints
    BADHINTS = 12,
    /// resolved protocol is unknown
    PROTOCOL = 13,
    /// argument buffer overflow
    OVERFLOW = 14,

    MAX = 15,

    _,
} else switch (native_os) {
    .linux, .emscripten => enum(c_int) {
        BADFLAGS = -1,
        NONAME = -2,
        AGAIN = -3,
        FAIL = -4,
        FAMILY = -6,
        SOCKTYPE = -7,
        SERVICE = -8,
        MEMORY = -10,
        SYSTEM = -11,
        OVERFLOW = -12,

        NODATA = -5,
        ADDRFAMILY = -9,
        INPROGRESS = -100,
        CANCELED = -101,
        NOTCANCELED = -102,
        ALLDONE = -103,
        INTR = -104,
        IDN_ENCODE = -105,

        _,
    },
    .haiku, .dragonfly, .netbsd, .freebsd, .macos, .ios, .tvos, .watchos, .visionos => enum(c_int) {
        /// address family for hostname not supported
        ADDRFAMILY = 1,
        /// temporary failure in name resolution
        AGAIN = 2,
        /// invalid value for ai_flags
        BADFLAGS = 3,
        /// non-recoverable failure in name resolution
        FAIL = 4,
        /// ai_family not supported
        FAMILY = 5,
        /// memory allocation failure
        MEMORY = 6,
        /// no address associated with hostname
        NODATA = 7,
        /// hostname nor servname provided, or not known
        NONAME = 8,
        /// servname not supported for ai_socktype
        SERVICE = 9,
        /// ai_socktype not supported
        SOCKTYPE = 10,
        /// system error returned in errno
        SYSTEM = 11,
        /// invalid value for hints
        BADHINTS = 12,
        /// resolved protocol is unknown
        PROTOCOL = 13,
        /// argument buffer overflow
        OVERFLOW = 14,
        _,
    },
    .solaris, .illumos => enum(c_int) {
        /// address family for hostname not supported
        ADDRFAMILY = 1,
        /// name could not be resolved at this time
        AGAIN = 2,
        /// flags parameter had an invalid value
        BADFLAGS = 3,
        /// non-recoverable failure in name resolution
        FAIL = 4,
        /// address family not recognized
        FAMILY = 5,
        /// memory allocation failure
        MEMORY = 6,
        /// no address associated with hostname
        NODATA = 7,
        /// name does not resolve
        NONAME = 8,
        /// service not recognized for socket type
        SERVICE = 9,
        /// intended socket type was not recognized
        SOCKTYPE = 10,
        /// system error returned in errno
        SYSTEM = 11,
        /// argument buffer overflow
        OVERFLOW = 12,
        /// resolved protocol is unknown
        PROTOCOL = 13,

        _,
    },
    .openbsd => enum(c_int) {
        /// address family for hostname not supported
        ADDRFAMILY = -9,
        /// name could not be resolved at this time
        AGAIN = -3,
        /// flags parameter had an invalid value
        BADFLAGS = -1,
        /// non-recoverable failure in name resolution
        FAIL = -4,
        /// address family not recognized
        FAMILY = -6,
        /// memory allocation failure
        MEMORY = -10,
        /// no address associated with hostname
        NODATA = -5,
        /// name does not resolve
        NONAME = -2,
        /// service not recognized for socket type
        SERVICE = -8,
        /// intended socket type was not recognized
        SOCKTYPE = -7,
        /// system error returned in errno
        SYSTEM = -11,
        /// invalid value for hints
        BADHINTS = -12,
        /// resolved protocol is unknown
        PROTOCOL = -13,
        /// argument buffer overflow
        OVERFLOW = -14,
        _,
    },
    // https://github.com/SerenityOS/serenity/blob/d510d2aeb2facbd8f6c383d70fd1b033e1fee5dd/Userland/Libraries/LibC/netdb.h#L77-L88
    .serenity => enum(c_int) {
        ADDRFAMILY = 1,
        AGAIN = 2,
        BADFLAGS = 3,
        FAIL = 4,
        FAMILY = 5,
        MEMORY = 6,
        NODATA = 7,
        NONAME = 8,
        SERVICE = 9,
        SOCKTYPE = 10,
        SYSTEM = 11,
        OVERFLOW = 12,
        _,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-dl-iterate-phdr-callback"></a>`dl_iterate_phdr_callback`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dl_iterate_phdr_callback = *const fn (info: *dl_phdr_info, size: usize, data: ?*anyopaque) callconv(.c) c_int
\`\`\`

</details>

---

### <a id="const-stat"></a>`Stat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const Stat = switch (native_os) {
    .linux => switch (native_arch) {
        .sparc64 => extern struct {
            dev: u64,
            __pad1: u16,
            ino: ino_t,
            mode: u32,
            nlink: u32,

            uid: u32,
            gid: u32,
            rdev: u64,
            __pad2: u16,

            size: off_t,
            blksize: isize,
            blocks: i64,

            atim: timespec,
            mtim: timespec,
            ctim: timespec,
            __reserved: [2]usize,

            pub fn atime(self: @This()) timespec {
                return self.atim;
            }

            pub fn mtime(self: @This()) timespec {
                return self.mtim;
            }

            pub fn ctime(self: @This()) timespec {
                return self.ctim;
            }
        },
        .mips, .mipsel => if (builtin.target.abi.isMusl()) extern struct {
            dev: dev_t,
            __pad0: [2]i32,
            ino: ino_t,
            mode: mode_t,
            nlink: nlink_t,
            uid: uid_t,
            gid: gid_t,
            rdev: dev_t,
            __pad1: [2]i32,
            size: off_t,
            atim: timespec,
            mtim: timespec,
            ctim: timespec,
            blksize: blksize_t,
            __pad3: i32,
            blocks: blkcnt_t,
            __pad4: [14]i32,

            pub fn atime(self: @This()) timespec {
                return self.atim;
            }

            pub fn mtime(self: @This()) timespec {
                return self.mtim;
            }

            pub fn ctime(self: @This()) timespec {
                return self.ctim;
            }
        } else extern struct {
            dev: u32,
            __pad0: [3]u32,
            ino: ino_t,
            mode: mode_t,
            nlink: nlink_t,
            uid: uid_t,
            gid: gid_t,
            rdev: u32,
            __pad1: [3]u32,
            size: off_t,
            atim: timespec,
            mtim: timespec,
            ctim: timespec,
            blksize: blksize_t,
            __pad3: u32,
            blocks: blkcnt_t,
            __pad4: [14]u32,

            pub fn atime(self: @This()) timespec {
                return self.atim;
            }

            pub fn mtime(self: @This()) timespec {
                return self.mtim;
            }

            pub fn ctime(self: @This()) timespec {
                return self.ctim;
            }
        },
        .mips64, .mips64el => if (builtin.target.abi.isMusl()) extern struct {
            dev: dev_t,
            __pad0: [3]i32,
            ino: ino_t,
            mode: mode_t,
            nlink: nlink_t,
            uid: uid_t,
            gid: gid_t,
            rdev: dev_t,
            __pad1: [2]u32,
            size: off_t,
            __pad2: i32,
            atim: timespec,
            mtim: timespec,
            ctim: timespec,
            blksize: blksize_t,
            __pad3: u32,
            blocks: blkcnt_t,
            __pad4: [14]i32,

            pub fn atime(self: @This()) timespec {
                return self.atim;
            }

            pub fn mtime(self: @This()) timespec {
                return self.mtim;
            }

            pub fn ctime(self: @This()) timespec {
                return self.ctim;
            }
        } else extern struct {
            dev: dev_t,
            __pad0: [3]u32,
            ino: ino_t,
            mode: mode_t,
            nlink: nlink_t,
            uid: uid_t,
            gid: gid_t,
            rdev: dev_t,
            __pad1: [3]u32,
            size: off_t,
            atim: timespec,
            mtim: timespec,
            ctim: timespec,
            blksize: blksize_t,
            __pad3: u32,
            blocks: blkcnt_t,
            __pad4: [14]i32,

            pub fn atime(self: @This()) timespec {
                return self.atim;
            }

            pub fn mtime(self: @This()) timespec {
                return self.mtim;
            }

            pub fn ctime(self: @This()) timespec {
                return self.ctim;
            }
        },

        else => std.os.linux.Stat, // libc stat is the same as kernel stat.
    },
    .emscripten => emscripten.Stat,
    .wasi => extern struct {
        // Match wasi-libc's `struct stat` in lib/libc/include/wasm-wasi-musl/__struct_stat.h
        dev: dev_t,
        ino: ino_t,
        nlink: nlink_t,
        mode: mode_t,
        uid: uid_t,
        gid: gid_t,
        __pad0: c_uint = 0,
        rdev: dev_t,
        size: off_t,
        blksize: blksize_t,
        blocks: blkcnt_t,
        atim: timespec,
        mtim: timespec,
        ctim: timespec,
        __reserved: [3]c_longlong = [3]c_longlong{ 0, 0, 0 },

        pub fn atime(self: @This()) timespec {
            return self.atim;
        }

        pub fn mtime(self: @This()) timespec {
            return self.mtim;
        }

        pub fn ctime(self: @This()) timespec {
            return self.ctim;
        }

        pub fn fromFilestat(st: wasi.filestat_t) Stat {
            return .{
                .dev = st.dev,
                .ino = st.ino,
                .mode = switch (st.filetype) {
                    .UNKNOWN => 0,
                    .BLOCK_DEVICE => S.IFBLK,
                    .CHARACTER_DEVICE => S.IFCHR,
                    .DIRECTORY => S.IFDIR,
                    .REGULAR_FILE => S.IFREG,
                    .SOCKET_DGRAM => S.IFSOCK,
                    .SOCKET_STREAM => S.IFIFO,
                    .SYMBOLIC_LINK => S.IFLNK,
                    _ => 0,
                },
                .nlink = st.nlink,
                .size = @intCast(st.size),
                .atim = timespec.fromTimestamp(st.atim),
                .mtim = timespec.fromTimestamp(st.mtim),
                .ctim = timespec.fromTimestamp(st.ctim),

                .uid = 0,
                .gid = 0,
                .rdev = 0,
                .blksize = 0,
                .blocks = 0,
            };
        }
    },
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        dev: i32,
        mode: u16,
        nlink: u16,
        ino: ino_t,
        uid: uid_t,
        gid: gid_t,
        rdev: i32,
        atimespec: timespec,
        mtimespec: timespec,
        ctimespec: timespec,
        birthtimespec: timespec,
        size: off_t,
        blocks: i64,
        blksize: i32,
        flags: u32,
        gen: u32,
        lspare: i32,
        qspare: [2]i64,

        pub fn atime(self: @This()) timespec {
            return self.atimespec;
        }

        pub fn mtime(self: @This()) timespec {
            return self.mtimespec;
        }

        pub fn ctime(self: @This()) timespec {
            return self.ctimespec;
        }

        pub fn birthtime(self: @This()) timespec {
            return self.birthtimespec;
        }
    },
    .freebsd => freebsd.Stat,
    .solaris, .illumos => extern struct {
        dev: dev_t,
        ino: ino_t,
        mode: mode_t,
        nlink: nlink_t,
        uid: uid_t,
        gid: gid_t,
        rdev: dev_t,
        size: off_t,
        atim: timespec,
        mtim: timespec,
        ctim: timespec,
        blksize: blksize_t,
        blocks: blkcnt_t,
        fstype: [16]u8,

        pub fn atime(self: @This()) timespec {
            return self.atim;
        }

        pub fn mtime(self: @This()) timespec {
            return self.mtim;
        }

        pub fn ctime(self: @This()) timespec {
            return self.ctim;
        }
    },
    .netbsd => extern struct {
        dev: dev_t,
        mode: mode_t,
        ino: ino_t,
        nlink: nlink_t,
        uid: uid_t,
        gid: gid_t,
        rdev: dev_t,
        atim: timespec,
        mtim: timespec,
        ctim: timespec,
        birthtim: timespec,
        size: off_t,
        blocks: blkcnt_t,
        blksize: blksize_t,
        flags: u32,
        gen: u32,
        __spare: [2]u32,

        pub fn atime(self: @This()) timespec {
            return self.atim;
        }

        pub fn mtime(self: @This()) timespec {
            return self.mtim;
        }

        pub fn ctime(self: @This()) timespec {
            return self.ctim;
        }

        pub fn birthtime(self: @This()) timespec {
            return self.birthtim;
        }
    },
    .dragonfly => extern struct {
        ino: ino_t,
        nlink: c_uint,
        dev: c_uint,
        mode: c_ushort,
        padding1: u16,
        uid: uid_t,
        gid: gid_t,
        rdev: c_uint,
        atim: timespec,
        mtim: timespec,
        ctim: timespec,
        size: c_ulong,
        blocks: i64,
        blksize: u32,
        flags: u32,
        gen: u32,
        lspare: i32,
        qspare1: i64,
        qspare2: i64,
        pub fn atime(self: @This()) timespec {
            return self.atim;
        }

        pub fn mtime(self: @This()) timespec {
            return self.mtim;
        }

        pub fn ctime(self: @This()) timespec {
            return self.ctim;
        }
    },
    .haiku => extern struct {
        dev: dev_t,
        ino: ino_t,
        mode: mode_t,
        nlink: nlink_t,
        uid: uid_t,
        gid: gid_t,
        size: off_t,
        rdev: dev_t,
        blksize: blksize_t,
        atim: timespec,
        mtim: timespec,
        ctim: timespec,
        crtim: timespec,
        type: u32,
        blocks: blkcnt_t,

        pub fn atime(self: @This()) timespec {
            return self.atim;
        }
        pub fn mtime(self: @This()) timespec {
            return self.mtim;
        }
        pub fn ctime(self: @This()) timespec {
            return self.ctim;
        }
        pub fn birthtime(self: @This()) timespec {
            return self.crtim;
        }
    },
    .openbsd => extern struct {
        mode: mode_t,
        dev: dev_t,
        ino: ino_t,
        nlink: nlink_t,
        uid: uid_t,
        gid: gid_t,
        rdev: dev_t,
        atim: timespec,
        mtim: timespec,
        ctim: timespec,
        size: off_t,
        blocks: blkcnt_t,
        blksize: blksize_t,
        flags: u32,
        gen: u32,
        birthtim: timespec,

        pub fn atime(self: @This()) timespec {
            return self.atim;
        }

        pub fn mtime(self: @This()) timespec {
            return self.mtim;
        }

        pub fn ctime(self: @This()) timespec {
            return self.ctim;
        }

        pub fn birthtime(self: @This()) timespec {
            return self.birthtim;
        }
    },
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/sys/stat.h#L53-L67
    .serenity => extern struct {
        dev: dev_t,
        ino: ino_t,
        mode: mode_t,
        nlink: nlink_t,
        uid: uid_t,
        gid: gid_t,
        rdev: dev_t,
        size: off_t,
        blksize: blksize_t,
        blocks: blkcnt_t,
        atim: timespec,
        mtim: timespec,
        ctim: timespec,

        pub fn atime(self: @This()) timespec {
            return self.atim;
        }

        pub fn mtime(self: @This()) timespec {
            return self.mtim;
        }

        pub fn ctime(self: @This()) timespec {
            return self.ctim;
        }
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pthread-mutex-t"></a>`pthread_mutex_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_mutex_t = switch (native_os) {
    .linux => extern struct {
        data: [data_len]u8 align(@alignOf(usize)) = [_]u8{0} ** data_len,

        const data_len = switch (native_abi) {
            .musl, .musleabi, .musleabihf => if (@sizeOf(usize) == 8) 40 else 24,
            .gnu, .gnuabin32, .gnuabi64, .gnueabi, .gnueabihf, .gnux32 => switch (native_arch) {
                .aarch64 => 48,
                .x86_64 => if (native_abi == .gnux32) 32 else 40,
                .mips64, .powerpc64, .powerpc64le, .sparc64 => 40,
                else => if (@sizeOf(usize) == 8) 40 else 24,
            },
            .android, .androideabi => if (@sizeOf(usize) == 8) 40 else 4,
            else => @compileError("unsupported ABI"),
        };
    },
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        sig: c_long = 0x32AAABA7,
        data: [data_len]u8 = [_]u8{0} ** data_len,

        const data_len = if (@sizeOf(usize) == 8) 56 else 40;
    },
    .freebsd, .dragonfly, .openbsd => extern struct {
        inner: ?*anyopaque = null,
    },
    .hermit => extern struct {
        ptr: usize = maxInt(usize),
    },
    .netbsd => extern struct {
        magic: u32 = 0x33330003,
        errorcheck: padded_pthread_spin_t = 0,
        ceiling: padded_pthread_spin_t = 0,
        owner: usize = 0,
        waiters: ?*u8 = null,
        recursed: u32 = 0,
        spare2: ?*anyopaque = null,
    },
    .haiku => extern struct {
        flags: u32 = 0,
        lock: i32 = 0,
        unused: i32 = -42,
        owner: i32 = -1,
        owner_count: i32 = 0,
    },
    .solaris, .illumos => extern struct {
        flag1: u16 = 0,
        flag2: u8 = 0,
        ceiling: u8 = 0,
        type: u16 = 0,
        magic: u16 = 0x4d58,
        lock: u64 = 0,
        data: u64 = 0,
    },
    .fuchsia => extern struct {
        data: [40]u8 align(@alignOf(usize)) = [_]u8{0} ** 40,
    },
    .emscripten => extern struct {
        data: [24]u8 align(4) = [_]u8{0} ** 24,
    },
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L68-L73
    .serenity => extern struct {
        lock: u32 = 0,
        owner: pthread_t = 0,
        level: c_int = 0,
        type: c_int = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pthread-cond-t"></a>`pthread_cond_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_cond_t = switch (native_os) {
    .linux => extern struct {
        data: [48]u8 align(@alignOf(usize)) = [_]u8{0} ** 48,
    },
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        sig: c_long = 0x3CB0B1BB,
        data: [data_len]u8 = [_]u8{0} ** data_len,
        const data_len = if (@sizeOf(usize) == 8) 40 else 24;
    },
    .freebsd, .dragonfly, .openbsd => extern struct {
        inner: ?*anyopaque = null,
    },
    .hermit => extern struct {
        ptr: usize = maxInt(usize),
    },
    .netbsd => extern struct {
        magic: u32 = 0x55550005,
        lock: pthread_spin_t = 0,
        waiters_first: ?*u8 = null,
        waiters_last: ?*u8 = null,
        mutex: ?*pthread_mutex_t = null,
        private: ?*anyopaque = null,
    },
    .haiku => extern struct {
        flags: u32 = 0,
        unused: i32 = -42,
        mutex: ?*anyopaque = null,
        waiter_count: i32 = 0,
        lock: i32 = 0,
    },
    .solaris, .illumos => extern struct {
        flag: [4]u8 = [_]u8{0} ** 4,
        type: u16 = 0,
        magic: u16 = 0x4356,
        data: u64 = 0,
    },
    .fuchsia, .emscripten => extern struct {
        data: [48]u8 align(@alignOf(usize)) = [_]u8{0} ** 48,
    },
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L80-L84
    .serenity => extern struct {
        mutex: ?*pthread_mutex_t = null,
        value: u32 = 0,
        clockid: clockid_t = .REALTIME_COARSE,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pthread-rwlock-t"></a>`pthread_rwlock_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_rwlock_t = switch (native_os) {
    .linux => switch (native_abi) {
        .android, .androideabi => switch (@sizeOf(usize)) {
            4 => extern struct {
                data: [40]u8 align(@alignOf(usize)) = [_]u8{0} ** 40,
            },
            8 => extern struct {
                data: [56]u8 align(@alignOf(usize)) = [_]u8{0} ** 56,
            },
            else => @compileError("impossible pointer size"),
        },
        else => extern struct {
            data: [56]u8 align(@alignOf(usize)) = [_]u8{0} ** 56,
        },
    },
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        sig: c_long = 0x2DA8B3B4,
        data: [192]u8 = [_]u8{0} ** 192,
    },
    .freebsd, .dragonfly, .openbsd => extern struct {
        ptr: ?*anyopaque = null,
    },
    .hermit => extern struct {
        ptr: usize = maxInt(usize),
    },
    .netbsd => extern struct {
        magic: c_uint = 0x99990009,
        interlock: switch (builtin.cpu.arch) {
            .aarch64, .aarch64_be, .m68k, .sparc, .sparc64, .x86, .x86_64 => u8,
            .arm, .armeb, .powerpc => c_int,
            .mips, .mipsel, .mips64, .mips64el => c_uint,
            else => unreachable,
        } = 0,
        rblocked_first: ?*u8 = null,
        rblocked_last: ?*u8 = null,
        wblocked_first: ?*u8 = null,
        wblocked_last: ?*u8 = null,
        nreaders: c_uint = 0,
        owner: ?pthread_t = null,
        private: ?*anyopaque = null,
    },
    .solaris, .illumos => extern struct {
        readers: i32 = 0,
        type: u16 = 0,
        magic: u16 = 0x5257,
        mutex: pthread_mutex_t = .{},
        readercv: pthread_cond_t = .{},
        writercv: pthread_cond_t = .{},
    },
    .fuchsia => extern struct {
        size: [56]u8 align(@alignOf(usize)) = [_]u8{0} ** 56,
    },
    .emscripten => extern struct {
        size: [32]u8 align(4) = [_]u8{0} ** 32,
    },
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L86
    .serenity => extern struct {
        inner: u64 = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pthread-attr-t"></a>`pthread_attr_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_attr_t = switch (native_os) {
    .linux, .emscripten, .dragonfly => extern struct {
        __size: [56]u8,
        __align: c_long,
    },
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        __sig: c_long,
        __opaque: [56]u8,
    },
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L75
    .freebsd, .openbsd, .serenity => extern struct {
        inner: ?*anyopaque = null,
    },
    .solaris, .illumos => extern struct {
        mutexattr: ?*anyopaque = null,
    },
    .netbsd => extern struct {
        magic: u32,
        flags: i32,
        private: ?*anyopaque,
    },
    .haiku => extern struct {
        detach_state: i32,
        sched_priority: i32,
        stack_size: i32,
        guard_size: i32,
        stack_address: ?*anyopaque,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pthread-key-t"></a>`pthread_key_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_key_t = switch (native_os) {
    .linux, .emscripten => c_uint,
    .macos, .ios, .tvos, .watchos, .visionos => c_ulong,
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L65
    .openbsd, .solaris, .illumos, .serenity => c_int,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-padded-pthread-spin-t"></a>`padded_pthread_spin_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const padded_pthread_spin_t = switch (native_os) {
    .netbsd => switch (builtin.cpu.arch) {
        .x86, .x86_64 => u32,
        .sparc, .sparc64 => u32,
        else => pthread_spin_t,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-pthread-spin-t"></a>`pthread_spin_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_spin_t = switch (native_os) {
    .netbsd => switch (builtin.cpu.arch) {
        .aarch64, .aarch64_be => u8,
        .mips, .mipsel, .mips64, .mips64el => u32,
        .powerpc, .powerpc64, .powerpc64le => i32,
        .x86, .x86_64 => u8,
        .arm, .armeb, .thumb, .thumbeb => i32,
        .sparc, .sparc64 => u8,
        .riscv32, .riscv64 => u32,
        else => @compileError("undefined pthread_spin_t for this arch"),
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-sem-t"></a>`sem_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sem_t = switch (native_os) {
    .linux, .emscripten => extern struct {
        __size: [4 * @sizeOf(usize)]u8 align(@alignOf(usize)),
    },
    .macos, .ios, .tvos, .watchos, .visionos => c_int,
    .freebsd => extern struct {
        _magic: u32,
        _kern: extern struct {
            _count: u32,
            _flags: u32,
        },
        _padding: u32,
    },
    .solaris, .illumos => extern struct {
        count: u32 = 0,
        type: u16 = 0,
        magic: u16 = 0x534d,
        __pad1: [3]u64 = [_]u64{0} ** 3,
        __pad2: [2]u64 = [_]u64{0} ** 2,
    },
    .openbsd, .netbsd, .dragonfly => ?*opaque {},
    .haiku => extern struct {
        type: i32,
        u: extern union {
            named_sem_id: i32,
            unnamed_sem: i32,
        },
        padding: [2]i32,
    },
    // https://github.com/SerenityOS/serenity/blob/aae106e37b48f2158e68902293df1e4bf7b80c0f/Userland/Libraries/LibC/semaphore.h#L23-L27
    .serenity => extern struct {
        magic: u32,
        value: u32,
        flags: u8,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-kevent"></a>`Kevent`

<details class="declaration-card" open>
<summary>Constant – Renamed from `kevent` to `Kevent` to avoid conflict with function name</summary>

Renamed from `kevent` to `Kevent` to avoid conflict with function name.

\`\`\`zig
pub const Kevent = switch (native_os) {
    .netbsd => extern struct {
        ident: usize,
        filter: i32,
        flags: u32,
        fflags: u32,
        data: i64,
        udata: usize,
    },
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        ident: usize,
        filter: i16,
        flags: u16,
        fflags: u32,
        data: isize,
        udata: usize,

        // sys/types.h on macos uses #pragma pack(4) so these checks are
        // to make sure the struct is laid out the same. These values were
        // produced from C code using the offsetof macro.
        comptime {
            assert(@offsetOf(@This(), "ident") == 0);
            assert(@offsetOf(@This(), "filter") == 8);
            assert(@offsetOf(@This(), "flags") == 10);
            assert(@offsetOf(@This(), "fflags") == 12);
            assert(@offsetOf(@This(), "data") == 16);
            assert(@offsetOf(@This(), "udata") == 24);
        }
    },
    .freebsd => extern struct {
        /// Identifier for this event.
        ident: usize,
        /// Filter for event.
        filter: i16,
        /// Action flags for kqueue.
        flags: u16,
        /// Filter flag value.
        fflags: u32,
        /// Filter data value.
        data: i64,
        /// Opaque user data identifier.
        udata: usize,
        /// Future extensions.
        _ext: [4]u64 = [_]u64{0} ** 4,
    },
    .dragonfly => extern struct {
        ident: usize,
        filter: c_short,
        flags: c_ushort,
        fflags: c_uint,
        data: isize,
        udata: usize,
    },
    .openbsd => extern struct {
        ident: usize,
        filter: c_short,
        flags: u16,
        fflags: c_uint,
        data: i64,
        udata: usize,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-port-t"></a>`port_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const port_t = switch (native_os) {
    .solaris, .illumos => c_int,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-port-event"></a>`port_event`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const port_event = switch (native_os) {
    .solaris, .illumos => extern struct {
        events: u32,
        /// Event source.
        source: u16,
        __pad: u16,
        /// Source-specific object.
        object: ?*anyopaque,
        /// User cookie.
        cookie: ?*anyopaque,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-at"></a>`AT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const AT = switch (native_os) {
    .linux => linux.AT,
    .windows => struct {
        /// Remove directory instead of unlinking file
        pub const REMOVEDIR = 0x200;
    },
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const FDCWD = -2;
        /// Use effective ids in access check
        pub const EACCESS = 0x0010;
        /// Act on the symlink itself not the target
        pub const SYMLINK_NOFOLLOW = 0x0020;
        /// Act on target of symlink
        pub const SYMLINK_FOLLOW = 0x0040;
        /// Path refers to directory
        pub const REMOVEDIR = 0x0080;
    },
    .freebsd => struct {
        /// Magic value that specify the use of the current working directory
        /// to determine the target of relative file paths in the openat() and
        /// similar syscalls.
        pub const FDCWD = -100;
        /// Check access using effective user and group ID
        pub const EACCESS = 0x0100;
        /// Do not follow symbolic links
        pub const SYMLINK_NOFOLLOW = 0x0200;
        /// Follow symbolic link
        pub const SYMLINK_FOLLOW = 0x0400;
        /// Remove directory instead of file
        pub const REMOVEDIR = 0x0800;
        /// Fail if not under dirfd
        pub const BENEATH = 0x1000;
    },
    .netbsd => struct {
        /// Magic value that specify the use of the current working directory
        /// to determine the target of relative file paths in the openat() and
        /// similar syscalls.
        pub const FDCWD = -100;
        /// Check access using effective user and group ID
        pub const EACCESS = 0x0100;
        /// Do not follow symbolic links
        pub const SYMLINK_NOFOLLOW = 0x0200;
        /// Follow symbolic link
        pub const SYMLINK_FOLLOW = 0x0400;
        /// Remove directory instead of file
        pub const REMOVEDIR = 0x0800;
    },
    .dragonfly => struct {
        pub const FDCWD = -328243;
        pub const SYMLINK_NOFOLLOW = 1;
        pub const REMOVEDIR = 2;
        pub const EACCESS = 4;
        pub const SYMLINK_FOLLOW = 8;
    },
    .openbsd => struct {
        /// Magic value that specify the use of the current working directory
        /// to determine the target of relative file paths in the openat() and
        /// similar syscalls.
        pub const FDCWD = -100;
        /// Check access using effective user and group ID
        pub const EACCESS = 0x01;
        /// Do not follow symbolic links
        pub const SYMLINK_NOFOLLOW = 0x02;
        /// Follow symbolic link
        pub const SYMLINK_FOLLOW = 0x04;
        /// Remove directory instead of file
        pub const REMOVEDIR = 0x08;
    },
    .haiku => struct {
        pub const FDCWD = -1;
        pub const SYMLINK_NOFOLLOW = 0x01;
        pub const SYMLINK_FOLLOW = 0x02;
        pub const REMOVEDIR = 0x04;
        pub const EACCESS = 0x08;
    },
    .solaris, .illumos => struct {
        /// Magic value that specify the use of the current working directory
        /// to determine the target of relative file paths in the openat() and
        /// similar syscalls.
        pub const FDCWD: fd_t = @bitCast(@as(u32, 0xffd19553));
        /// Do not follow symbolic links
        pub const SYMLINK_NOFOLLOW = 0x1000;
        /// Follow symbolic link
        pub const SYMLINK_FOLLOW = 0x2000;
        /// Remove directory instead of file
        pub const REMOVEDIR = 0x1;
        pub const TRIGGER = 0x2;
        /// Check access using effective user and group ID
        pub const EACCESS = 0x4;
    },
    .emscripten => struct {
        pub const FDCWD = -100;
        pub const SYMLINK_NOFOLLOW = 0x100;
        pub const REMOVEDIR = 0x200;
        pub const SYMLINK_FOLLOW = 0x400;
        pub const NO_AUTOMOUNT = 0x800;
        pub const EMPTY_PATH = 0x1000;
        pub const STATX_SYNC_TYPE = 0x6000;
        pub const STATX_SYNC_AS_STAT = 0x0000;
        pub const STATX_FORCE_SYNC = 0x2000;
        pub const STATX_DONT_SYNC = 0x4000;
        pub const RECURSIVE = 0x8000;
    },
    .wasi => struct {
        // Match `AT_*` constants in lib/libc/include/wasm-wasi-musl/__header_fcntl.h
        pub const EACCESS = 0x0;
        pub const SYMLINK_NOFOLLOW = 0x1;
        pub const SYMLINK_FOLLOW = 0x2;
        pub const REMOVEDIR = 0x4;
        /// When linking libc, we follow their convention and use -2 for current working directory.
        /// However, without libc, Zig does a different convention: it assumes the
        /// current working directory is the first preopen. This behavior can be
        /// overridden with a public function called `wasi_cwd` in the root source
        /// file.
        pub const FDCWD: fd_t = if (builtin.link_libc) -2 else 3;
    },
    // https://github.com/SerenityOS/serenity/blob/2808b0376406a40e31293bb3bcb9170374e90506/Kernel/API/POSIX/fcntl.h#L49-L52
    .serenity => struct {
        pub const FDCWD = -100;
        pub const SYMLINK_NOFOLLOW = 0x100;
        pub const REMOVEDIR = 0x200;
        pub const EACCESS = 0x400;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-o"></a>`O`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const O = switch (native_os) {
    .linux => linux.O,
    .emscripten => packed struct(u32) {
        ACCMODE: std.posix.ACCMODE = .RDONLY,
        _2: u4 = 0,
        CREAT: bool = false,
        EXCL: bool = false,
        NOCTTY: bool = false,
        TRUNC: bool = false,
        APPEND: bool = false,
        NONBLOCK: bool = false,
        DSYNC: bool = false,
        ASYNC: bool = false,
        DIRECT: bool = false,
        LARGEFILE: bool = false,
        DIRECTORY: bool = false,
        NOFOLLOW: bool = false,
        NOATIME: bool = false,
        CLOEXEC: bool = false,
        SYNC: bool = false,
        PATH: bool = false,
        TMPFILE: bool = false,
        _: u9 = 0,
    },
    .wasi => packed struct(u32) {
        // Match `O_*` bits from lib/libc/include/wasm-wasi-musl/__header_fcntl.h
        APPEND: bool = false,
        DSYNC: bool = false,
        NONBLOCK: bool = false,
        RSYNC: bool = false,
        SYNC: bool = false,
        _5: u7 = 0,
        CREAT: bool = false,
        DIRECTORY: bool = false,
        EXCL: bool = false,
        TRUNC: bool = false,
        _16: u8 = 0,
        NOFOLLOW: bool = false,
        EXEC: bool = false,
        read: bool = false,
        SEARCH: bool = false,
        write: bool = false,
        // O_CLOEXEC, O_TTY_ININT, O_NOCTTY are 0 in wasi-musl, so they're silently
        // ignored in C code.  Thus no mapping in Zig.
        _: u3 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        ACCMODE: std.posix.ACCMODE = .RDONLY,
        NDELAY: bool = false,
        APPEND: bool = false,
        SYNC: bool = false,
        _5: u1 = 0,
        DSYNC: bool = false,
        NONBLOCK: bool = false,
        CREAT: bool = false,
        TRUNC: bool = false,
        EXCL: bool = false,
        NOCTTY: bool = false,
        _12: u1 = 0,
        LARGEFILE: bool = false,
        XATTR: bool = false,
        RSYNC: bool = false,
        _16: u1 = 0,
        NOFOLLOW: bool = false,
        NOLINKS: bool = false,
        _19: u2 = 0,
        SEARCH: bool = false,
        EXEC: bool = false,
        CLOEXEC: bool = false,
        DIRECTORY: bool = false,
        DIRECT: bool = false,
        _: u6 = 0,
    },
    .netbsd => packed struct(u32) {
        ACCMODE: std.posix.ACCMODE = .RDONLY,
        NONBLOCK: bool = false,
        APPEND: bool = false,
        SHLOCK: bool = false,
        EXLOCK: bool = false,
        ASYNC: bool = false,
        SYNC: bool = false,
        NOFOLLOW: bool = false,
        CREAT: bool = false,
        TRUNC: bool = false,
        EXCL: bool = false,
        _12: u3 = 0,
        NOCTTY: bool = false,
        DSYNC: bool = false,
        RSYNC: bool = false,
        ALT_IO: bool = false,
        DIRECT: bool = false,
        _20: u1 = 0,
        DIRECTORY: bool = false,
        CLOEXEC: bool = false,
        SEARCH: bool = false,
        _: u8 = 0,
    },
    .openbsd => packed struct(u32) {
        ACCMODE: std.posix.ACCMODE = .RDONLY,
        NONBLOCK: bool = false,
        APPEND: bool = false,
        SHLOCK: bool = false,
        EXLOCK: bool = false,
        ASYNC: bool = false,
        SYNC: bool = false,
        NOFOLLOW: bool = false,
        CREAT: bool = false,
        TRUNC: bool = false,
        EXCL: bool = false,
        _12: u3 = 0,
        NOCTTY: bool = false,
        CLOEXEC: bool = false,
        DIRECTORY: bool = false,
        _: u14 = 0,
    },
    .haiku => packed struct(u32) {
        ACCMODE: std.posix.ACCMODE = .RDONLY,
        _2: u4 = 0,
        CLOEXEC: bool = false,
        NONBLOCK: bool = false,
        EXCL: bool = false,
        CREAT: bool = false,
        TRUNC: bool = false,
        APPEND: bool = false,
        NOCTTY: bool = false,
        NOTRAVERSE: bool = false,
        _14: u2 = 0,
        SYNC: bool = false,
        RSYNC: bool = false,
        DSYNC: bool = false,
        NOFOLLOW: bool = false,
        DIRECT: bool = false,
        DIRECTORY: bool = false,
        _: u10 = 0,
    },
    .macos, .ios, .tvos, .watchos, .visionos => packed struct(u32) {
        ACCMODE: std.posix.ACCMODE = .RDONLY,
        NONBLOCK: bool = false,
        APPEND: bool = false,
        SHLOCK: bool = false,
        EXLOCK: bool = false,
        ASYNC: bool = false,
        SYNC: bool = false,
        NOFOLLOW: bool = false,
        CREAT: bool = false,
        TRUNC: bool = false,
        EXCL: bool = false,
        _12: u3 = 0,
        EVTONLY: bool = false,
        _16: u1 = 0,
        NOCTTY: bool = false,
        _18: u2 = 0,
        DIRECTORY: bool = false,
        SYMLINK: bool = false,
        DSYNC: bool = false,
        _23: u1 = 0,
        CLOEXEC: bool = false,
        _25: u4 = 0,
        ALERT: bool = false,
        _30: u1 = 0,
        POPUP: bool = false,
    },
    .dragonfly => packed struct(u32) {
        ACCMODE: std.posix.ACCMODE = .RDONLY,
        NONBLOCK: bool = false,
        APPEND: bool = false,
        SHLOCK: bool = false,
        EXLOCK: bool = false,
        ASYNC: bool = false,
        SYNC: bool = false,
        NOFOLLOW: bool = false,
        CREAT: bool = false,
        TRUNC: bool = false,
        EXCL: bool = false,
        _12: u3 = 0,
        NOCTTY: bool = false,
        DIRECT: bool = false,
        CLOEXEC: bool = false,
        FBLOCKING: bool = false,
        FNONBLOCKING: bool = false,
        FAPPEND: bool = false,
        FOFFSET: bool = false,
        FSYNCWRITE: bool = false,
        FASYNCWRITE: bool = false,
        _24: u3 = 0,
        DIRECTORY: bool = false,
        _: u4 = 0,
    },
    .freebsd => packed struct(u32) {
        ACCMODE: std.posix.ACCMODE = .RDONLY,
        NONBLOCK: bool = false,
        APPEND: bool = false,
        SHLOCK: bool = false,
        EXLOCK: bool = false,
        ASYNC: bool = false,
        SYNC: bool = false,
        NOFOLLOW: bool = false,
        CREAT: bool = false,
        TRUNC: bool = false,
        EXCL: bool = false,
        DSYNC: bool = false,
        _13: u2 = 0,
        NOCTTY: bool = false,
        DIRECT: bool = false,
        DIRECTORY: bool = false,
        NOATIME: bool = false,
        _19: u1 = 0,
        CLOEXEC: bool = false,
        PATH: bool = false,
        TMPFILE: bool = false,
        _: u9 = 0,
    },
    // https://github.com/SerenityOS/serenity/blob/2808b0376406a40e31293bb3bcb9170374e90506/Kernel/API/POSIX/fcntl.h#L28-L43
    .serenity => packed struct(c_int) {
        ACCMODE: std.posix.ACCMODE = .NONE,
        EXEC: bool = false,
        CREAT: bool = false,
        EXCL: bool = false,
        NOCTTY: bool = false,
        TRUNC: bool = false,
        APPEND: bool = false,
        NONBLOCK: bool = false,
        DIRECTORY: bool = false,
        NOFOLLOW: bool = false,
        CLOEXEC: bool = false,
        DIRECT: bool = false,
        SYNC: bool = false,
        _: std.meta.Int(.unsigned, @bitSizeOf(c_int) - 14) = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-map"></a>`MAP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MAP = switch (native_os) {
    .linux => linux.MAP,
    .emscripten => packed struct(u32) {
        TYPE: enum(u4) {
            SHARED = 0x01,
            PRIVATE = 0x02,
            SHARED_VALIDATE = 0x03,
        },
        FIXED: bool = false,
        ANONYMOUS: bool = false,
        _6: u2 = 0,
        GROWSDOWN: bool = false,
        _9: u2 = 0,
        DENYWRITE: bool = false,
        EXECUTABLE: bool = false,
        LOCKED: bool = false,
        NORESERVE: bool = false,
        POPULATE: bool = false,
        NONBLOCK: bool = false,
        STACK: bool = false,
        HUGETLB: bool = false,
        SYNC: bool = false,
        FIXED_NOREPLACE: bool = false,
        _: u11 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        TYPE: enum(u4) {
            SHARED = 0x01,
            PRIVATE = 0x02,
        },
        FIXED: bool = false,
        RENAME: bool = false,
        NORESERVE: bool = false,
        @"32BIT": bool = false,
        ANONYMOUS: bool = false,
        ALIGN: bool = false,
        TEXT: bool = false,
        INITDATA: bool = false,
        _: u20 = 0,
    },
    .netbsd => packed struct(u32) {
        TYPE: enum(u2) {
            SHARED = 0x01,
            PRIVATE = 0x02,
        },
        REMAPDUP: bool = false,
        _3: u1 = 0,
        FIXED: bool = false,
        RENAME: bool = false,
        NORESERVE: bool = false,
        INHERIT: bool = false,
        _8: u1 = 0,
        HASSEMAPHORE: bool = false,
        TRYFIXED: bool = false,
        WIRED: bool = false,
        ANONYMOUS: bool = false,
        STACK: bool = false,
        _: u18 = 0,
    },
    .openbsd => packed struct(u32) {
        TYPE: enum(u4) {
            SHARED = 0x01,
            PRIVATE = 0x02,
        },
        FIXED: bool = false,
        _5: u7 = 0,
        ANONYMOUS: bool = false,
        _13: u1 = 0,
        STACK: bool = false,
        CONCEAL: bool = false,
        _: u16 = 0,
    },
    .haiku => packed struct(u32) {
        TYPE: enum(u2) {
            SHARED = 0x01,
            PRIVATE = 0x02,
        },
        FIXED: bool = false,
        ANONYMOUS: bool = false,
        NORESERVE: bool = false,
        _: u27 = 0,
    },
    .macos, .ios, .tvos, .watchos, .visionos => packed struct(u32) {
        TYPE: enum(u4) {
            SHARED = 0x01,
            PRIVATE = 0x02,
        },
        FIXED: bool = false,
        _5: u1 = 0,
        NORESERVE: bool = false,
        _7: u2 = 0,
        HASSEMAPHORE: bool = false,
        NOCACHE: bool = false,
        JIT: bool = false,
        ANONYMOUS: bool = false,
        _: u19 = 0,
    },
    .dragonfly => packed struct(u32) {
        TYPE: enum(u4) {
            SHARED = 0x01,
            PRIVATE = 0x02,
        },
        FIXED: bool = false,
        RENAME: bool = false,
        NORESERVE: bool = false,
        INHERIT: bool = false,
        NOEXTEND: bool = false,
        HASSEMAPHORE: bool = false,
        STACK: bool = false,
        NOSYNC: bool = false,
        ANONYMOUS: bool = false,
        VPAGETABLE: bool = false,
        _14: u2 = 0,
        TRYFIXED: bool = false,
        NOCORE: bool = false,
        SIZEALIGN: bool = false,
        _: u13 = 0,
    },
    .freebsd => packed struct(u32) {
        TYPE: enum(u4) {
            SHARED = 0x01,
            PRIVATE = 0x02,
        },
        FIXED: bool = false,
        _5: u5 = 0,
        STACK: bool = false,
        NOSYNC: bool = false,
        ANONYMOUS: bool = false,
        GUARD: bool = false,
        EXCL: bool = false,
        _15: u2 = 0,
        NOCORE: bool = false,
        PREFAULT_READ: bool = false,
        @"32BIT": bool = false,
        _: u12 = 0,
    },
    // https://github.com/SerenityOS/serenity/blob/6d59d4d3d9e76e39112842ec487840828f1c9bfe/Kernel/API/POSIX/sys/mman.h#L16-L26
    .serenity => packed struct(c_int) {
        TYPE: enum(u4) {
            SHARED = 0x01,
            PRIVATE = 0x02,
        },
        FIXED: bool = false,
        ANONYMOUS: bool = false,
        STACK: bool = false,
        NORESERVE: bool = false,
        RANDOMIZED: bool = false,
        PURGEABLE: bool = false,
        FIXED_NOREPLACE: bool = false,
        _: std.meta.Int(.unsigned, @bitSizeOf(c_int) - 11) = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-mremap"></a>`MREMAP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MREMAP = switch (native_os) {
    .linux => linux.MREMAP,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-cc-t"></a>`cc_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const cc_t = u8
\`\`\`

</details>

---

### <a id="const-v"></a>`V`

<details class="declaration-card" open>
<summary>Constant – Indices into the `cc` array in the `termios` struct</summary>

Indices into the `cc` array in the `termios` struct.

\`\`\`zig
pub const V = switch (native_os) {
    .linux => linux.V,
    .macos, .ios, .tvos, .watchos, .visionos, .netbsd, .openbsd => enum {
        EOF,
        EOL,
        EOL2,
        ERASE,
        WERASE,
        KILL,
        REPRINT,
        reserved,
        INTR,
        QUIT,
        SUSP,
        DSUSP,
        START,
        STOP,
        LNEXT,
        DISCARD,
        MIN,
        TIME,
        STATUS,
    },
    .freebsd => enum {
        EOF,
        EOL,
        EOL2,
        ERASE,
        WERASE,
        KILL,
        REPRINT,
        ERASE2,
        INTR,
        QUIT,
        SUSP,
        DSUSP,
        START,
        STOP,
        LNEXT,
        DISCARD,
        MIN,
        TIME,
        STATUS,
    },
    .haiku => enum {
        INTR,
        QUIT,
        ERASE,
        KILL,
        EOF,
        EOL,
        EOL2,
        SWTCH,
        START,
        STOP,
        SUSP,
    },
    .solaris, .illumos => enum {
        INTR,
        QUIT,
        ERASE,
        KILL,
        EOF,
        EOL,
        EOL2,
        SWTCH,
        START,
        STOP,
        SUSP,
        DSUSP,
        REPRINT,
        DISCARD,
        WERASE,
        LNEXT,
        STATUS,
        ERASE2,
    },
    .emscripten, .wasi => enum {
        INTR,
        QUIT,
        ERASE,
        KILL,
        EOF,
        TIME,
        MIN,
        SWTC,
        START,
        STOP,
        SUSP,
        EOL,
        REPRINT,
        DISCARD,
        WERASE,
        LNEXT,
        EOL2,
    },
    // https://github.com/SerenityOS/serenity/blob/d277cdfd4c7ed21d5248a83217ae03b9f890c3c8/Kernel/API/POSIX/termios.h#L32-L49
    .serenity => enum {
        INTR,
        QUIT,
        ERASE,
        KILL,
        EOF,
        TIME,
        MIN,
        SWTC,
        START,
        STOP,
        SUSP,
        EOL,
        REPRINT,
        DISCARD,
        WERASE,
        LNEXT,
        EOL2,
        INFO,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-nccs"></a>`NCCS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const NCCS = switch (native_os) {
    .linux => linux.NCCS,
    .macos, .ios, .tvos, .watchos, .visionos, .freebsd, .netbsd, .openbsd, .dragonfly => 20,
    .haiku => 11,
    .solaris, .illumos => 19,
    // https://github.com/SerenityOS/serenity/blob/d277cdfd4c7ed21d5248a83217ae03b9f890c3c8/Kernel/API/POSIX/termios.h#L15
    .emscripten, .wasi, .serenity => 32,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-termios"></a>`termios`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const termios = switch (native_os) {
    .linux => linux.termios,
    .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        iflag: tc_iflag_t,
        oflag: tc_oflag_t,
        cflag: tc_cflag_t,
        lflag: tc_lflag_t,
        cc: [NCCS]cc_t,
        ispeed: speed_t align(8),
        ospeed: speed_t,
    },
    // https://github.com/SerenityOS/serenity/blob/d277cdfd4c7ed21d5248a83217ae03b9f890c3c8/Kernel/API/POSIX/termios.h#L21-L29
    .freebsd, .netbsd, .dragonfly, .openbsd, .serenity => extern struct {
        iflag: tc_iflag_t,
        oflag: tc_oflag_t,
        cflag: tc_cflag_t,
        lflag: tc_lflag_t,
        cc: [NCCS]cc_t,
        ispeed: speed_t,
        ospeed: speed_t,
    },
    .haiku => extern struct {
        iflag: tc_iflag_t,
        oflag: tc_oflag_t,
        cflag: tc_cflag_t,
        lflag: tc_lflag_t,
        line: cc_t,
        ispeed: speed_t,
        ospeed: speed_t,
        cc: [NCCS]cc_t,
    },
    .solaris, .illumos => extern struct {
        iflag: tc_iflag_t,
        oflag: tc_oflag_t,
        cflag: tc_cflag_t,
        lflag: tc_lflag_t,
        cc: [NCCS]cc_t,
    },
    .emscripten, .wasi => extern struct {
        iflag: tc_iflag_t,
        oflag: tc_oflag_t,
        cflag: tc_cflag_t,
        lflag: tc_lflag_t,
        line: cc_t,
        cc: [NCCS]cc_t,
        ispeed: speed_t,
        ospeed: speed_t,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-tc-iflag-t"></a>`tc_iflag_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const tc_iflag_t = switch (native_os) {
    .linux => linux.tc_iflag_t,
    .macos, .ios, .tvos, .watchos, .visionos => packed struct(u64) {
        IGNBRK: bool = false,
        BRKINT: bool = false,
        IGNPAR: bool = false,
        PARMRK: bool = false,
        INPCK: bool = false,
        ISTRIP: bool = false,
        INLCR: bool = false,
        IGNCR: bool = false,
        ICRNL: bool = false,
        IXON: bool = false,
        IXOFF: bool = false,
        IXANY: bool = false,
        _12: u1 = 0,
        IMAXBEL: bool = false,
        IUTF8: bool = false,
        _: u49 = 0,
    },
    .netbsd, .freebsd, .dragonfly => packed struct(u32) {
        IGNBRK: bool = false,
        BRKINT: bool = false,
        IGNPAR: bool = false,
        PARMRK: bool = false,
        INPCK: bool = false,
        ISTRIP: bool = false,
        INLCR: bool = false,
        IGNCR: bool = false,
        ICRNL: bool = false,
        IXON: bool = false,
        IXOFF: bool = false,
        IXANY: bool = false,
        _12: u1 = 0,
        IMAXBEL: bool = false,
        _: u18 = 0,
    },
    .openbsd => packed struct(u32) {
        IGNBRK: bool = false,
        BRKINT: bool = false,
        IGNPAR: bool = false,
        PARMRK: bool = false,
        INPCK: bool = false,
        ISTRIP: bool = false,
        INLCR: bool = false,
        IGNCR: bool = false,
        ICRNL: bool = false,
        IXON: bool = false,
        IXOFF: bool = false,
        IXANY: bool = false,
        IUCLC: bool = false,
        IMAXBEL: bool = false,
        _: u18 = 0,
    },
    .haiku => packed struct(u32) {
        IGNBRK: bool = false,
        BRKINT: bool = false,
        IGNPAR: bool = false,
        PARMRK: bool = false,
        INPCK: bool = false,
        ISTRIP: bool = false,
        INLCR: bool = false,
        IGNCR: bool = false,
        ICRNL: bool = false,
        IUCLC: bool = false,
        IXON: bool = false,
        IXANY: bool = false,
        IXOFF: bool = false,
        _: u19 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        IGNBRK: bool = false,
        BRKINT: bool = false,
        IGNPAR: bool = false,
        PARMRK: bool = false,
        INPCK: bool = false,
        ISTRIP: bool = false,
        INLCR: bool = false,
        IGNCR: bool = false,
        ICRNL: bool = false,
        IUCLC: bool = false,
        IXON: bool = false,
        IXANY: bool = false,
        _12: u1 = 0,
        IMAXBEL: bool = false,
        _14: u1 = 0,
        DOSMODE: bool = false,
        _: u16 = 0,
    },
    // https://github.com/SerenityOS/serenity/blob/d277cdfd4c7ed21d5248a83217ae03b9f890c3c8/Kernel/API/POSIX/termios.h#L52-L66
    .emscripten, .wasi, .serenity => packed struct(u32) {
        IGNBRK: bool = false,
        BRKINT: bool = false,
        IGNPAR: bool = false,
        PARMRK: bool = false,
        INPCK: bool = false,
        ISTRIP: bool = false,
        INLCR: bool = false,
        IGNCR: bool = false,
        ICRNL: bool = false,
        IUCLC: bool = false,
        IXON: bool = false,
        IXANY: bool = false,
        IXOFF: bool = false,
        IMAXBEL: bool = false,
        IUTF8: bool = false,
        _: u17 = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-tc-oflag-t"></a>`tc_oflag_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const tc_oflag_t = switch (native_os) {
    .linux => linux.tc_oflag_t,
    .macos, .ios, .tvos, .watchos, .visionos => packed struct(u64) {
        OPOST: bool = false,
        ONLCR: bool = false,
        OXTABS: bool = false,
        ONOEOT: bool = false,
        OCRNL: bool = false,
        ONOCR: bool = false,
        ONLRET: bool = false,
        OFILL: bool = false,
        NLDLY: u2 = 0,
        TABDLY: u2 = 0,
        CRDLY: u2 = 0,
        FFDLY: u1 = 0,
        BSDLY: u1 = 0,
        VTDLY: u1 = 0,
        OFDEL: bool = false,
        _: u46 = 0,
    },
    .netbsd => packed struct(u32) {
        OPOST: bool = false,
        ONLCR: bool = false,
        OXTABS: bool = false,
        ONOEOT: bool = false,
        OCRNL: bool = false,
        _5: u1 = 0,
        ONOCR: bool = false,
        ONLRET: bool = false,
        _: u24 = 0,
    },
    .openbsd => packed struct(u32) {
        OPOST: bool = false,
        ONLCR: bool = false,
        OXTABS: bool = false,
        ONOEOT: bool = false,
        OCRNL: bool = false,
        OLCUC: bool = false,
        ONOCR: bool = false,
        ONLRET: bool = false,
        _: u24 = 0,
    },
    .freebsd, .dragonfly => packed struct(u32) {
        OPOST: bool = false,
        ONLCR: bool = false,
        _2: u1 = 0,
        ONOEOT: bool = false,
        OCRNL: bool = false,
        ONOCR: bool = false,
        ONLRET: bool = false,
        _: u25 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        OPOST: bool = false,
        OLCUC: bool = false,
        ONLCR: bool = false,
        OCRNL: bool = false,
        ONOCR: bool = false,
        ONLRET: bool = false,
        OFILL: bool = false,
        OFDEL: bool = false,
        NLDLY: u1 = 0,
        CRDLY: u2 = 0,
        TABDLY: u2 = 0,
        BSDLY: u1 = 0,
        VTDLY: u1 = 0,
        FFDLY: u1 = 0,
        PAGEOUT: bool = false,
        WRAP: bool = false,
        _: u14 = 0,
    },
    // https://github.com/SerenityOS/serenity/blob/d277cdfd4c7ed21d5248a83217ae03b9f890c3c8/Kernel/API/POSIX/termios.h#L69-L97
    .haiku, .wasi, .emscripten, .serenity => packed struct(u32) {
        OPOST: bool = false,
        OLCUC: bool = false,
        ONLCR: bool = false,
        OCRNL: bool = false,
        ONOCR: bool = false,
        ONLRET: bool = false,
        OFILL: bool = false,
        OFDEL: bool = false,
        NLDLY: u1 = 0,
        CRDLY: u2 = 0,
        TABDLY: u2 = 0,
        BSDLY: u1 = 0,
        VTDLY: u1 = 0,
        FFDLY: u1 = 0,
        _: u16 = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-csize"></a>`CSIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const CSIZE = switch (native_os) {
    .linux => linux.CSIZE,
    .haiku => enum(u1) { CS7, CS8 },
    else => enum(u2) { CS5, CS6, CS7, CS8 },
}
\`\`\`

</details>

---

### <a id="const-tc-cflag-t"></a>`tc_cflag_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const tc_cflag_t = switch (native_os) {
    .linux => linux.tc_cflag_t,
    .macos, .ios, .tvos, .watchos, .visionos => packed struct(u64) {
        CIGNORE: bool = false,
        _1: u5 = 0,
        CSTOPB: bool = false,
        _7: u1 = 0,
        CSIZE: CSIZE = .CS5,
        _10: u1 = 0,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        CCTS_OFLOW: bool = false,
        CRTS_IFLOW: bool = false,
        CDTR_IFLOW: bool = false,
        CDSR_OFLOW: bool = false,
        CCAR_OFLOW: bool = false,
        _: u43 = 0,
    },
    .freebsd => packed struct(u32) {
        CIGNORE: bool = false,
        _1: u7 = 0,
        CSIZE: CSIZE = .CS5,
        CSTOPB: bool = false,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        CCTS_OFLOW: bool = false,
        CRTS_IFLOW: bool = false,
        CDTR_IFLOW: bool = false,
        CDSR_OFLOW: bool = false,
        CCAR_OFLOW: bool = false,
        CNO_RTSDTR: bool = false,
        _: u10 = 0,
    },
    .netbsd => packed struct(u32) {
        CIGNORE: bool = false,
        _1: u7 = 0,
        CSIZE: CSIZE = .CS5,
        CSTOPB: bool = false,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        CRTSCTS: bool = false,
        CDTRCTS: bool = false,
        _18: u2 = 0,
        MDMBUF: bool = false,
        _: u11 = 0,
    },
    .dragonfly => packed struct(u32) {
        CIGNORE: bool = false,
        _1: u7 = 0,
        CSIZE: CSIZE = .CS5,
        CSTOPB: bool = false,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        CCTS_OFLOW: bool = false,
        CRTS_IFLOW: bool = false,
        CDTR_IFLOW: bool = false,
        CDSR_OFLOW: bool = false,
        CCAR_OFLOW: bool = false,
        _: u11 = 0,
    },
    .openbsd => packed struct(u32) {
        CIGNORE: bool = false,
        _1: u7 = 0,
        CSIZE: CSIZE = .CS5,
        CSTOPB: bool = false,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        CRTSCTS: bool = false,
        _17: u3 = 0,
        MDMBUF: bool = false,
        _: u11 = 0,
    },
    .haiku => packed struct(u32) {
        _0: u5 = 0,
        CSIZE: CSIZE = .CS7,
        CSTOPB: bool = false,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        XLOBLK: bool = false,
        CTSFLOW: bool = false,
        RTSFLOW: bool = false,
        _: u17 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        _0: u4 = 0,
        CSIZE: CSIZE = .CS5,
        CSTOPB: bool = false,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        RCV1EN: bool = false,
        XMT1EN: bool = false,
        LOBLK: bool = false,
        XCLUDE: bool = false,
        _16: u4 = 0,
        PAREXT: bool = false,
        CBAUDEXT: bool = false,
        CIBAUDEXT: bool = false,
        _23: u7 = 0,
        CRTSXOFF: bool = false,
        CRTSCTS: bool = false,
    },
    .wasi, .emscripten => packed struct(u32) {
        _0: u4 = 0,
        CSIZE: CSIZE = .CS5,
        CSTOPB: bool = false,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        _: u20 = 0,
    },
    // https://github.com/SerenityOS/serenity/blob/d277cdfd4c7ed21d5248a83217ae03b9f890c3c8/Kernel/API/POSIX/termios.h#L131-L141
    .serenity => packed struct(u32) {
        _0: u4 = 0,
        CSIZE: CSIZE = .CS5,
        CSTOPB: bool = false,
        CREAD: bool = false,
        PARENB: bool = false,
        PARODD: bool = false,
        HUPCL: bool = false,
        CLOCAL: bool = false,
        CBAUDEX: bool = false,
        _: u19 = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-tc-lflag-t"></a>`tc_lflag_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const tc_lflag_t = switch (native_os) {
    .linux => linux.tc_lflag_t,
    .macos, .ios, .tvos, .watchos, .visionos => packed struct(u64) {
        ECHOKE: bool = false,
        ECHOE: bool = false,
        ECHOK: bool = false,
        ECHO: bool = false,
        ECHONL: bool = false,
        ECHOPRT: bool = false,
        ECHOCTL: bool = false,
        ISIG: bool = false,
        ICANON: bool = false,
        ALTWERASE: bool = false,
        IEXTEN: bool = false,
        EXTPROC: bool = false,
        _12: u10 = 0,
        TOSTOP: bool = false,
        FLUSHO: bool = false,
        _24: u1 = 0,
        NOKERNINFO: bool = false,
        _26: u3 = 0,
        PENDIN: bool = false,
        _30: u1 = 0,
        NOFLSH: bool = false,
        _: u32 = 0,
    },
    .netbsd, .freebsd, .dragonfly => packed struct(u32) {
        ECHOKE: bool = false,
        ECHOE: bool = false,
        ECHOK: bool = false,
        ECHO: bool = false,
        ECHONL: bool = false,
        ECHOPRT: bool = false,
        ECHOCTL: bool = false,
        ISIG: bool = false,
        ICANON: bool = false,
        ALTWERASE: bool = false,
        IEXTEN: bool = false,
        EXTPROC: bool = false,
        _12: u10 = 0,
        TOSTOP: bool = false,
        FLUSHO: bool = false,
        _24: u1 = 0,
        NOKERNINFO: bool = false,
        _26: u3 = 0,
        PENDIN: bool = false,
        _30: u1 = 0,
        NOFLSH: bool = false,
    },
    .openbsd => packed struct(u32) {
        ECHOKE: bool = false,
        ECHOE: bool = false,
        ECHOK: bool = false,
        ECHO: bool = false,
        ECHONL: bool = false,
        ECHOPRT: bool = false,
        ECHOCTL: bool = false,
        ISIG: bool = false,
        ICANON: bool = false,
        ALTWERASE: bool = false,
        IEXTEN: bool = false,
        EXTPROC: bool = false,
        _12: u10 = 0,
        TOSTOP: bool = false,
        FLUSHO: bool = false,
        XCASE: bool = false,
        NOKERNINFO: bool = false,
        _26: u3 = 0,
        PENDIN: bool = false,
        _30: u1 = 0,
        NOFLSH: bool = false,
    },
    .haiku => packed struct(u32) {
        ISIG: bool = false,
        ICANON: bool = false,
        XCASE: bool = false,
        ECHO: bool = false,
        ECHOE: bool = false,
        ECHOK: bool = false,
        ECHONL: bool = false,
        NOFLSH: bool = false,
        TOSTOP: bool = false,
        IEXTEN: bool = false,
        ECHOCTL: bool = false,
        ECHOPRT: bool = false,
        ECHOKE: bool = false,
        FLUSHO: bool = false,
        PENDIN: bool = false,
        _: u17 = 0,
    },
    .solaris, .illumos => packed struct(u32) {
        ISIG: bool = false,
        ICANON: bool = false,
        XCASE: bool = false,
        ECHO: bool = false,
        ECHOE: bool = false,
        ECHOK: bool = false,
        ECHONL: bool = false,
        NOFLSH: bool = false,
        TOSTOP: bool = false,
        ECHOCTL: bool = false,
        ECHOPRT: bool = false,
        ECHOKE: bool = false,
        DEFECHO: bool = false,
        FLUSHO: bool = false,
        PENDIN: bool = false,
        IEXTEN: bool = false,
        _: u16 = 0,
    },
    .wasi, .emscripten => packed struct(u32) {
        ISIG: bool = false,
        ICANON: bool = false,
        _2: u1 = 0,
        ECHO: bool = false,
        ECHOE: bool = false,
        ECHOK: bool = false,
        ECHONL: bool = false,
        NOFLSH: bool = false,
        TOSTOP: bool = false,
        _9: u6 = 0,
        IEXTEN: bool = false,
        _: u16 = 0,
    },
    // https://github.com/SerenityOS/serenity/blob/d277cdfd4c7ed21d5248a83217ae03b9f890c3c8/Kernel/API/POSIX/termios.h#L168-L189
    .serenity => packed struct(u32) {
        ISIG: bool = false,
        ICANON: bool = false,
        XCASE: bool = false,
        ECHO: bool = false,
        ECHOE: bool = false,
        ECHOK: bool = false,
        ECHONL: bool = false,
        NOFLSH: bool = false,
        TOSTOP: bool = false,
        ECHOCTL: bool = false,
        ECHOPRT: bool = false,
        ECHOKE: bool = false,
        FLUSHO: bool = false,
        PENDIN: bool = false,
        _14: u6 = 0,
        IEXTEN: bool = false,
        EXTPROC: bool = false,
        _: u15 = 0,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-speed-t"></a>`speed_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const speed_t = switch (native_os) {
    .linux => linux.speed_t,
    .macos, .ios, .tvos, .watchos, .visionos, .openbsd => enum(u64) {
        B0 = 0,
        B50 = 50,
        B75 = 75,
        B110 = 110,
        B134 = 134,
        B150 = 150,
        B200 = 200,
        B300 = 300,
        B600 = 600,
        B1200 = 1200,
        B1800 = 1800,
        B2400 = 2400,
        B4800 = 4800,
        B9600 = 9600,
        B19200 = 19200,
        B38400 = 38400,
        B7200 = 7200,
        B14400 = 14400,
        B28800 = 28800,
        B57600 = 57600,
        B76800 = 76800,
        B115200 = 115200,
        B230400 = 230400,
    },
    .freebsd, .netbsd => enum(c_uint) {
        B0 = 0,
        B50 = 50,
        B75 = 75,
        B110 = 110,
        B134 = 134,
        B150 = 150,
        B200 = 200,
        B300 = 300,
        B600 = 600,
        B1200 = 1200,
        B1800 = 1800,
        B2400 = 2400,
        B4800 = 4800,
        B9600 = 9600,
        B19200 = 19200,
        B38400 = 38400,
        B7200 = 7200,
        B14400 = 14400,
        B28800 = 28800,
        B57600 = 57600,
        B76800 = 76800,
        B115200 = 115200,
        B230400 = 230400,
        B460800 = 460800,
        B500000 = 500000,
        B921600 = 921600,
        B1000000 = 1000000,
        B1500000 = 1500000,
        B2000000 = 2000000,
        B2500000 = 2500000,
        B3000000 = 3000000,
        B3500000 = 3500000,
        B4000000 = 4000000,
    },
    .dragonfly => enum(c_uint) {
        B0 = 0,
        B50 = 50,
        B75 = 75,
        B110 = 110,
        B134 = 134,
        B150 = 150,
        B200 = 200,
        B300 = 300,
        B600 = 600,
        B1200 = 1200,
        B1800 = 1800,
        B2400 = 2400,
        B4800 = 4800,
        B9600 = 9600,
        B19200 = 19200,
        B38400 = 38400,
        B7200 = 7200,
        B14400 = 14400,
        B28800 = 28800,
        B57600 = 57600,
        B76800 = 76800,
        B115200 = 115200,
        B230400 = 230400,
        B460800 = 460800,
        B921600 = 921600,
    },
    .haiku => enum(u8) {
        B0 = 0x00,
        B50 = 0x01,
        B75 = 0x02,
        B110 = 0x03,
        B134 = 0x04,
        B150 = 0x05,
        B200 = 0x06,
        B300 = 0x07,
        B600 = 0x08,
        B1200 = 0x09,
        B1800 = 0x0A,
        B2400 = 0x0B,
        B4800 = 0x0C,
        B9600 = 0x0D,
        B19200 = 0x0E,
        B38400 = 0x0F,
        B57600 = 0x10,
        B115200 = 0x11,
        B230400 = 0x12,
        B31250 = 0x13,
    },
    .solaris, .illumos => enum(c_uint) {
        B0 = 0,
        B50 = 1,
        B75 = 2,
        B110 = 3,
        B134 = 4,
        B150 = 5,
        B200 = 6,
        B300 = 7,
        B600 = 8,
        B1200 = 9,
        B1800 = 10,
        B2400 = 11,
        B4800 = 12,
        B9600 = 13,
        B19200 = 14,
        B38400 = 15,
        B57600 = 16,
        B76800 = 17,
        B115200 = 18,
        B153600 = 19,
        B230400 = 20,
        B307200 = 21,
        B460800 = 22,
        B921600 = 23,
        B1000000 = 24,
        B1152000 = 25,
        B1500000 = 26,
        B2000000 = 27,
        B2500000 = 28,
        B3000000 = 29,
        B3500000 = 30,
        B4000000 = 31,
    },
    // https://github.com/SerenityOS/serenity/blob/d277cdfd4c7ed21d5248a83217ae03b9f890c3c8/Kernel/API/POSIX/termios.h#L111-L159
    .emscripten, .wasi, .serenity => enum(u32) {
        B0 = 0o0000000,
        B50 = 0o0000001,
        B75 = 0o0000002,
        B110 = 0o0000003,
        B134 = 0o0000004,
        B150 = 0o0000005,
        B200 = 0o0000006,
        B300 = 0o0000007,
        B600 = 0o0000010,
        B1200 = 0o0000011,
        B1800 = 0o0000012,
        B2400 = 0o0000013,
        B4800 = 0o0000014,
        B9600 = 0o0000015,
        B19200 = 0o0000016,
        B38400 = 0o0000017,

        B57600 = 0o0010001,
        B115200 = 0o0010002,
        B230400 = 0o0010003,
        B460800 = 0o0010004,
        B500000 = 0o0010005,
        B576000 = 0o0010006,
        B921600 = 0o0010007,
        B1000000 = 0o0010010,
        B1152000 = 0o0010011,
        B1500000 = 0o0010012,
        B2000000 = 0o0010013,
        B2500000 = 0o0010014,
        B3000000 = 0o0010015,
        B3500000 = 0o0010016,
        B4000000 = 0o0010017,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-whence-t"></a>`whence_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const whence_t = if (native_os == .wasi) std.os.wasi.whence_t else c_int
\`\`\`

</details>

---

### <a id="const-sig-atomic-t"></a>`sig_atomic_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sig_atomic_t = switch (native_os) {
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L20
    .serenity => u32,
    else => c_int,
}
\`\`\`

</details>

---

### <a id="const-nsig"></a>`NSIG`

<details class="declaration-card" open>
<summary>Constant – maximum signal number + 1</summary>

maximum signal number + 1

\`\`\`zig
pub const NSIG = switch (native_os) {
    .linux => linux.NSIG,
    .windows => 23,
    .haiku => 65,
    .netbsd, .freebsd => 32,
    .macos => darwin.NSIG,
    .solaris, .illumos => 75,
    // https://github.com/SerenityOS/serenity/blob/046c23f567a17758d762a33bdf04bacbfd088f9f/Kernel/API/POSIX/signal_numbers.h#L42
    .openbsd, .serenity => 33,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-minsigstksz"></a>`MINSIGSTKSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MINSIGSTKSZ = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => 32768,
    .freebsd => switch (builtin.cpu.arch) {
        .x86, .x86_64 => 2048,
        .arm, .aarch64 => 4096,
        else => @compileError("unsupported arch"),
    },
    .solaris, .illumos => 2048,
    .haiku, .netbsd => 8192,
    .openbsd => 1 << openbsd.MAX_PAGE_SHIFT,
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L58
    .serenity => 4096,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-sigstksz"></a>`SIGSTKSZ`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SIGSTKSZ = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => 131072,
    .netbsd, .freebsd => MINSIGSTKSZ + 32768,
    .solaris, .illumos => 8192,
    .haiku => 16384,
    .openbsd => MINSIGSTKSZ + (1 << openbsd.MAX_PAGE_SHIFT) * 4,
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L59
    .serenity => 32768,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-ss"></a>`SS`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SS = switch (native_os) {
    .linux => linux.SS,
    .openbsd, .macos, .ios, .tvos, .watchos, .visionos, .netbsd, .freebsd => struct {
        pub const ONSTACK = 1;
        pub const DISABLE = 4;
    },
    // https://github.com/SerenityOS/serenity/blob/ec492a1a0819e6239ea44156825c4ee7234ca3db/Kernel/API/POSIX/signal.h#L54-L55
    .haiku, .solaris, .illumos, .serenity => struct {
        pub const ONSTACK = 0x1;
        pub const DISABLE = 0x2;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-ev"></a>`EV`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const EV = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        /// add event to kq (implies enable)
        pub const ADD = 0x0001;
        /// delete event from kq
        pub const DELETE = 0x0002;
        /// enable event
        pub const ENABLE = 0x0004;
        /// disable event (not reported)
        pub const DISABLE = 0x0008;
        /// only report one occurrence
        pub const ONESHOT = 0x0010;
        /// clear event state after reporting
        pub const CLEAR = 0x0020;
        /// force immediate event output
        /// ... with or without ERROR
        /// ... use KEVENT_FLAG_ERROR_EVENTS
        ///     on syscalls supporting flags
        pub const RECEIPT = 0x0040;
        /// disable event after reporting
        pub const DISPATCH = 0x0080;
        /// unique kevent per udata value
        pub const UDATA_SPECIFIC = 0x0100;
        /// ... in combination with DELETE
        /// will defer delete until udata-specific
        /// event enabled. EINPROGRESS will be
        /// returned to indicate the deferral
        pub const DISPATCH2 = DISPATCH | UDATA_SPECIFIC;
        /// report that source has vanished
        /// ... only valid with DISPATCH2
        pub const VANISHED = 0x0200;
        /// reserved by system
        pub const SYSFLAGS = 0xF000;
        /// filter-specific flag
        pub const FLAG0 = 0x1000;
        /// filter-specific flag
        pub const FLAG1 = 0x2000;
        /// EOF detected
        pub const EOF = 0x8000;
        /// error, data contains errno
        pub const ERROR = 0x4000;
        pub const POLL = FLAG0;
        pub const OOBAND = FLAG1;
    },
    .dragonfly => struct {
        pub const ADD = 1;
        pub const DELETE = 2;
        pub const ENABLE = 4;
        pub const DISABLE = 8;
        pub const ONESHOT = 16;
        pub const CLEAR = 32;
        pub const RECEIPT = 64;
        pub const DISPATCH = 128;
        pub const NODATA = 4096;
        pub const FLAG1 = 8192;
        pub const ERROR = 16384;
        pub const EOF = 32768;
        pub const SYSFLAGS = 61440;
    },
    .netbsd => struct {
        /// add event to kq (implies enable)
        pub const ADD = 0x0001;
        /// delete event from kq
        pub const DELETE = 0x0002;
        /// enable event
        pub const ENABLE = 0x0004;
        /// disable event (not reported)
        pub const DISABLE = 0x0008;
        /// only report one occurrence
        pub const ONESHOT = 0x0010;
        /// clear event state after reporting
        pub const CLEAR = 0x0020;
        /// force immediate event output
        /// ... with or without ERROR
        /// ... use KEVENT_FLAG_ERROR_EVENTS
        ///     on syscalls supporting flags
        pub const RECEIPT = 0x0040;
        /// disable event after reporting
        pub const DISPATCH = 0x0080;
    },
    .freebsd => struct {
        /// add event to kq (implies enable)
        pub const ADD = 0x0001;
        /// delete event from kq
        pub const DELETE = 0x0002;
        /// enable event
        pub const ENABLE = 0x0004;
        /// disable event (not reported)
        pub const DISABLE = 0x0008;
        /// only report one occurrence
        pub const ONESHOT = 0x0010;
        /// clear event state after reporting
        pub const CLEAR = 0x0020;
        /// error, event data contains errno
        pub const ERROR = 0x4000;
        /// force immediate event output
        /// ... with or without ERROR
        /// ... use KEVENT_FLAG_ERROR_EVENTS
        ///     on syscalls supporting flags
        pub const RECEIPT = 0x0040;
        /// disable event after reporting
        pub const DISPATCH = 0x0080;
    },
    .openbsd => struct {
        pub const ADD = 0x0001;
        pub const DELETE = 0x0002;
        pub const ENABLE = 0x0004;
        pub const DISABLE = 0x0008;
        pub const ONESHOT = 0x0010;
        pub const CLEAR = 0x0020;
        pub const RECEIPT = 0x0040;
        pub const DISPATCH = 0x0080;
        pub const FLAG1 = 0x2000;
        pub const ERROR = 0x4000;
        pub const EOF = 0x8000;
    },
    .haiku => struct {
        /// add event to kq (implies enable)
        pub const ADD = 0x0001;
        /// delete event from kq
        pub const DELETE = 0x0002;
        /// enable event
        pub const ENABLE = 0x0004;
        /// disable event (not reported)
        pub const DISABLE = 0x0008;
        /// only report one occurrence
        pub const ONESHOT = 0x0010;
        /// clear event state after reporting
        pub const CLEAR = 0x0020;
        /// force immediate event output
        /// ... with or without ERROR
        /// ... use KEVENT_FLAG_ERROR_EVENTS
        ///     on syscalls supporting flags
        pub const RECEIPT = 0x0040;
        /// disable event after reporting
        pub const DISPATCH = 0x0080;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-evfilt"></a>`EVFILT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const EVFILT = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        pub const READ = -1;
        pub const WRITE = -2;
        /// attached to aio requests
        pub const AIO = -3;
        /// attached to vnodes
        pub const VNODE = -4;
        /// attached to struct proc
        pub const PROC = -5;
        /// attached to struct proc
        pub const SIGNAL = -6;
        /// timers
        pub const TIMER = -7;
        /// Mach portsets
        pub const MACHPORT = -8;
        /// Filesystem events
        pub const FS = -9;
        /// User events
        pub const USER = -10;
        /// Virtual memory events
        pub const VM = -12;
        /// Exception events
        pub const EXCEPT = -15;
        pub const SYSCOUNT = 17;
    },
    .haiku => struct {
        pub const READ = -1;
        pub const WRITE = -2;
        /// attached to aio requests
        pub const AIO = -3;
        /// attached to vnodes
        pub const VNODE = -4;
        /// attached to struct proc
        pub const PROC = -5;
        /// attached to struct proc
        pub const SIGNAL = -6;
        /// timers
        pub const TIMER = -7;
        /// Process descriptors
        pub const PROCDESC = -8;
        /// Filesystem events
        pub const FS = -9;
        pub const LIO = -10;
        /// User events
        pub const USER = -11;
        /// Sendfile events
        pub const SENDFILE = -12;
        pub const EMPTY = -13;
    },
    .dragonfly => struct {
        pub const FS = -10;
        pub const USER = -9;
        pub const EXCEPT = -8;
        pub const TIMER = -7;
        pub const SIGNAL = -6;
        pub const PROC = -5;
        pub const VNODE = -4;
        pub const AIO = -3;
        pub const WRITE = -2;
        pub const READ = -1;
        pub const SYSCOUNT = 10;
        pub const MARKER = 15;
    },
    .netbsd => struct {
        pub const READ = 0;
        pub const WRITE = 1;
        /// attached to aio requests
        pub const AIO = 2;
        /// attached to vnodes
        pub const VNODE = 3;
        /// attached to struct proc
        pub const PROC = 4;
        /// attached to struct proc
        pub const SIGNAL = 5;
        /// timers
        pub const TIMER = 6;
        /// Filesystem events
        pub const FS = 7;
        /// User events
        pub const USER = 1;
    },
    .freebsd => struct {
        pub const READ = -1;
        pub const WRITE = -2;
        /// attached to aio requests
        pub const AIO = -3;
        /// attached to vnodes
        pub const VNODE = -4;
        /// attached to struct proc
        pub const PROC = -5;
        /// attached to struct proc
        pub const SIGNAL = -6;
        /// timers
        pub const TIMER = -7;
        /// Process descriptors
        pub const PROCDESC = -8;
        /// Filesystem events
        pub const FS = -9;
        pub const LIO = -10;
        /// User events
        pub const USER = -11;
        /// Sendfile events
        pub const SENDFILE = -12;
        pub const EMPTY = -13;
    },
    .openbsd => struct {
        pub const READ = -1;
        pub const WRITE = -2;
        pub const AIO = -3;
        pub const VNODE = -4;
        pub const PROC = -5;
        pub const SIGNAL = -6;
        pub const TIMER = -7;
        pub const DEVICE = -8;
        pub const EXCEPT = -9;
        pub const USER = -10;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-note"></a>`NOTE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const NOTE = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => struct {
        /// On input, TRIGGER causes the event to be triggered for output.
        pub const TRIGGER = 0x01000000;
        /// ignore input fflags
        pub const FFNOP = 0x00000000;
        /// and fflags
        pub const FFAND = 0x40000000;
        /// or fflags
        pub const FFOR = 0x80000000;
        /// copy fflags
        pub const FFCOPY = 0xc0000000;
        /// mask for operations
        pub const FFCTRLMASK = 0xc0000000;
        pub const FFLAGSMASK = 0x00ffffff;
        /// low water mark
        pub const LOWAT = 0x00000001;
        /// OOB data
        pub const OOB = 0x00000002;
        /// vnode was removed
        pub const DELETE = 0x00000001;
        /// data contents changed
        pub const WRITE = 0x00000002;
        /// size increased
        pub const EXTEND = 0x00000004;
        /// attributes changed
        pub const ATTRIB = 0x00000008;
        /// link count changed
        pub const LINK = 0x00000010;
        /// vnode was renamed
        pub const RENAME = 0x00000020;
        /// vnode access was revoked
        pub const REVOKE = 0x00000040;
        /// No specific vnode event: to test for EVFILT_READ      activation
        pub const NONE = 0x00000080;
        /// vnode was unlocked by flock(2)
        pub const FUNLOCK = 0x00000100;
        /// process exited
        pub const EXIT = 0x80000000;
        /// process forked
        pub const FORK = 0x40000000;
        /// process exec'd
        pub const EXEC = 0x20000000;
        /// shared with EVFILT_SIGNAL
        pub const SIGNAL = 0x08000000;
        /// exit status to be returned, valid for child       process only
        pub const EXITSTATUS = 0x04000000;
        /// provide details on reasons for exit
        pub const EXIT_DETAIL = 0x02000000;
        /// mask for signal & exit status
        pub const PDATAMASK = 0x000fffff;
        pub const PCTRLMASK = 0xf0000000;
        pub const EXIT_DETAIL_MASK = 0x00070000;
        pub const EXIT_DECRYPTFAIL = 0x00010000;
        pub const EXIT_MEMORY = 0x00020000;
        pub const EXIT_CSERROR = 0x00040000;
        /// will react on memory          pressure
        pub const VM_PRESSURE = 0x80000000;
        /// will quit on memory       pressure, possibly after cleaning up dirty state
        pub const VM_PRESSURE_TERMINATE = 0x40000000;
        /// will quit immediately on      memory pressure
        pub const VM_PRESSURE_SUDDEN_TERMINATE = 0x20000000;
        /// there was an error
        pub const VM_ERROR = 0x10000000;
        /// data is seconds
        pub const SECONDS = 0x00000001;
        /// data is microseconds
        pub const USECONDS = 0x00000002;
        /// data is nanoseconds
        pub const NSECONDS = 0x00000004;
        /// absolute timeout
        pub const ABSOLUTE = 0x00000008;
        /// ext[1] holds leeway for power aware timers
        pub const LEEWAY = 0x00000010;
        /// system does minimal timer coalescing
        pub const CRITICAL = 0x00000020;
        /// system does maximum timer coalescing
        pub const BACKGROUND = 0x00000040;
        pub const MACH_CONTINUOUS_TIME = 0x00000080;
        /// data is mach absolute time units
        pub const MACHTIME = 0x00000100;
    },
    .dragonfly => struct {
        pub const FFNOP = 0;
        pub const TRACK = 1;
        pub const DELETE = 1;
        pub const LOWAT = 1;
        pub const TRACKERR = 2;
        pub const OOB = 2;
        pub const WRITE = 2;
        pub const EXTEND = 4;
        pub const CHILD = 4;
        pub const ATTRIB = 8;
        pub const LINK = 16;
        pub const RENAME = 32;
        pub const REVOKE = 64;
        pub const PDATAMASK = 1048575;
        pub const FFLAGSMASK = 16777215;
        pub const TRIGGER = 16777216;
        pub const EXEC = 536870912;
        pub const FFAND = 1073741824;
        pub const FORK = 1073741824;
        pub const EXIT = 2147483648;
        pub const FFOR = 2147483648;
        pub const FFCTRLMASK = 3221225472;
        pub const FFCOPY = 3221225472;
        pub const PCTRLMASK = 4026531840;
    },
    .netbsd => struct {
        /// On input, TRIGGER causes the event to be triggered for output.
        pub const TRIGGER = 0x08000000;
        /// low water mark
        pub const LOWAT = 0x00000001;
        /// vnode was removed
        pub const DELETE = 0x00000001;
        /// data contents changed
        pub const WRITE = 0x00000002;
        /// size increased
        pub const EXTEND = 0x00000004;
        /// attributes changed
        pub const ATTRIB = 0x00000008;
        /// link count changed
        pub const LINK = 0x00000010;
        /// vnode was renamed
        pub const RENAME = 0x00000020;
        /// vnode access was revoked
        pub const REVOKE = 0x00000040;
        /// process exited
        pub const EXIT = 0x80000000;
        /// process forked
        pub const FORK = 0x40000000;
        /// process exec'd
        pub const EXEC = 0x20000000;
        /// mask for signal & exit status
        pub const PDATAMASK = 0x000fffff;
        pub const PCTRLMASK = 0xf0000000;
    },
    .freebsd => struct {
        /// On input, TRIGGER causes the event to be triggered for output.
        pub const TRIGGER = 0x01000000;
        /// ignore input fflags
        pub const FFNOP = 0x00000000;
        /// and fflags
        pub const FFAND = 0x40000000;
        /// or fflags
        pub const FFOR = 0x80000000;
        /// copy fflags
        pub const FFCOPY = 0xc0000000;
        /// mask for operations
        pub const FFCTRLMASK = 0xc0000000;
        pub const FFLAGSMASK = 0x00ffffff;
        /// low water mark
        pub const LOWAT = 0x00000001;
        /// behave like poll()
        pub const FILE_POLL = 0x00000002;
        /// vnode was removed
        pub const DELETE = 0x00000001;
        /// data contents changed
        pub const WRITE = 0x00000002;
        /// size increased
        pub const EXTEND = 0x00000004;
        /// attributes changed
        pub const ATTRIB = 0x00000008;
        /// link count changed
        pub const LINK = 0x00000010;
        /// vnode was renamed
        pub const RENAME = 0x00000020;
        /// vnode access was revoked
        pub const REVOKE = 0x00000040;
        /// vnode was opened
        pub const OPEN = 0x00000080;
        /// file closed, fd did not allow write
        pub const CLOSE = 0x00000100;
        /// file closed, fd did allow write
        pub const CLOSE_WRITE = 0x00000200;
        /// file was read
        pub const READ = 0x00000400;
        /// process exited
        pub const EXIT = 0x80000000;
        /// process forked
        pub const FORK = 0x40000000;
        /// process exec'd
        pub const EXEC = 0x20000000;
        /// mask for signal & exit status
        pub const PDATAMASK = 0x000fffff;
        pub const PCTRLMASK = 0xf0000000;
        /// data is seconds
        pub const SECONDS = 0x00000001;
        /// data is milliseconds
        pub const MSECONDS = 0x00000002;
        /// data is microseconds
        pub const USECONDS = 0x00000004;
        /// data is nanoseconds
        pub const NSECONDS = 0x00000008;
        /// timeout is absolute
        pub const ABSTIME = 0x00000010;
    },
    .openbsd => struct {
        // data/hint flags for EVFILT.{READ|WRITE}
        pub const LOWAT = 0x0001;
        pub const EOF = 0x0002;
        // data/hint flags for EVFILT.EXCEPT and EVFILT.{READ|WRITE}
        pub const OOB = 0x0004;
        // data/hint flags for EVFILT.VNODE
        pub const DELETE = 0x0001;
        pub const WRITE = 0x0002;
        pub const EXTEND = 0x0004;
        pub const ATTRIB = 0x0008;
        pub const LINK = 0x0010;
        pub const RENAME = 0x0020;
        pub const REVOKE = 0x0040;
        pub const TRUNCATE = 0x0080;
        // data/hint flags for EVFILT.PROC
        pub const EXIT = 0x80000000;
        pub const FORK = 0x40000000;
        pub const EXEC = 0x20000000;
        pub const PDATAMASK = 0x000fffff;
        pub const PCTRLMASK = 0xf0000000;
        pub const TRACK = 0x00000001;
        pub const TRACKERR = 0x00000002;
        pub const CHILD = 0x00000004;
        // data/hint flags for EVFILT.DEVICE
        pub const CHANGE = 0x00000001;
        // data/hint flags for EVFILT_USER
        pub const FFNOP = 0x00000000;
        pub const FFAND = 0x40000000;
        pub const FFOR = 0x80000000;
        pub const FFCOPY = 0xc0000000;
        pub const FFCTRLMASK = 0xc0000000;
        pub const FFLAGSMASK = 0x00ffffff;
        pub const TRIGGER = 0x01000000;
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-futex"></a>`FUTEX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const FUTEX = switch (native_os) {
    .openbsd => openbsd.FUTEX,
    .serenity => serenity.FUTEX,
    else => void,
}
\`\`\`

</details>

---

### <a id="const-close"></a>`close`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const close = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => darwin.@"close$NOCANCEL",
    else => private.close,
}
\`\`\`

</details>

---

### <a id="const-clock-getres"></a>`clock_getres`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const clock_getres = switch (native_os) {
    .netbsd => private.__clock_getres50,
    else => private.clock_getres,
}
\`\`\`

</details>

---

### <a id="const-clock-gettime"></a>`clock_gettime`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const clock_gettime = switch (native_os) {
    .netbsd => private.__clock_gettime50,
    else => private.clock_gettime,
}
\`\`\`

</details>

---

### <a id="const-fstat"></a>`fstat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fstat = switch (native_os) {
    .macos => switch (native_arch) {
        .x86_64 => private.@"fstat$INODE64",
        else => private.fstat,
    },
    .netbsd => private.__fstat50,
    else => private.fstat,
}
\`\`\`

</details>

---

### <a id="const-fstatat"></a>`fstatat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fstatat = switch (native_os) {
    .macos => switch (native_arch) {
        .x86_64 => private.@"fstatat$INODE64",
        else => private.fstatat,
    },
    else => private.fstatat,
}
\`\`\`

</details>

---

### <a id="const-arc4random-buf"></a>`arc4random_buf`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const arc4random_buf = switch (native_os) {
    .linux => if (builtin.abi.isAndroid()) private.arc4random_buf else {},
    .dragonfly, .netbsd, .freebsd, .solaris, .openbsd, .macos, .ios, .tvos, .watchos, .visionos => private.arc4random_buf,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-getentropy"></a>`getentropy`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getentropy = switch (native_os) {
    .linux => if (builtin.abi.isAndroid() and versionCheck(.{ .major = 28, .minor = 0, .patch = 0 })) private.getentropy else {},
    .emscripten => private.getentropy,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-getrandom"></a>`getrandom`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getrandom = switch (native_os) {
    .freebsd => private.getrandom,
    .linux => if (builtin.abi.isMusl() or
        (builtin.abi.isGnu() and versionCheck(.{ .major = 2, .minor = 25, .patch = 0 })) or
        (builtin.abi.isAndroid() and versionCheck(.{ .major = 28, .minor = 0, .patch = 0 })))
        private.getrandom
    else {},
    else => {},
}
\`\`\`

</details>

---

### <a id="const-sendfile"></a>`sendfile`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sendfile = switch (native_os) {
    .freebsd => freebsd.sendfile,
    .macos, .ios, .tvos, .watchos, .visionos => darwin.sendfile,
    .linux => private.sendfile,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-sigaltstack"></a>`sigaltstack`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigaltstack = switch (native_os) {
    .netbsd => private.__sigaltstack14,
    else => private.sigaltstack,
}
\`\`\`

</details>

---

### <a id="const-pipe2"></a>`pipe2`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pipe2 = switch (native_os) {
    .dragonfly, .emscripten, .netbsd, .freebsd, .solaris, .illumos, .openbsd, .linux, .serenity => private.pipe2,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-copy-file-range"></a>`copy_file_range`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const copy_file_range = switch (native_os) {
    .linux => private.copy_file_range,
    .freebsd => freebsd.copy_file_range,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-getdirentries"></a>`getdirentries`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getdirentries = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => private.__getdirentries64,
    else => private.getdirentries,
}
\`\`\`

</details>

---

### <a id="const-getdents"></a>`getdents`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getdents = switch (native_os) {
    .netbsd => private.__getdents30,
    else => private.getdents,
}
\`\`\`

</details>

---

### <a id="const-getrusage"></a>`getrusage`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getrusage = switch (native_os) {
    .netbsd => private.__getrusage50,
    else => private.getrusage,
}
\`\`\`

</details>

---

### <a id="const-gettimeofday"></a>`gettimeofday`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const gettimeofday = switch (native_os) {
    .netbsd => private.__gettimeofday50,
    else => private.gettimeofday,
}
\`\`\`

</details>

---

### <a id="const-msync"></a>`msync`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const msync = switch (native_os) {
    .netbsd => private.__msync13,
    else => private.msync,
}
\`\`\`

</details>

---

### <a id="const-nanosleep"></a>`nanosleep`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const nanosleep = switch (native_os) {
    .netbsd => private.__nanosleep50,
    else => private.nanosleep,
}
\`\`\`

</details>

---

### <a id="const-readdir"></a>`readdir`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const readdir = switch (native_os) {
    .macos => switch (native_arch) {
        .x86_64 => private.@"readdir$INODE64",
        else => private.readdir,
    },
    .windows => {},
    else => private.readdir,
}
\`\`\`

</details>

---

### <a id="const-realpath"></a>`realpath`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const realpath = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => private.@"realpath$DARWIN_EXTSN",
    else => private.realpath,
}
\`\`\`

</details>

---

### <a id="const-sched-yield"></a>`sched_yield`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sched_yield = switch (native_os) {
    .netbsd => private.__libc_thr_yield,
    else => private.sched_yield,
}
\`\`\`

</details>

---

### <a id="const-sigaction-1"></a>`sigaction`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigaction = switch (native_os) {
    .netbsd => private.__sigaction14,
    else => private.sigaction,
}
\`\`\`

</details>

---

### <a id="const-sigfillset"></a>`sigfillset`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigfillset = switch (native_os) {
    .netbsd => private.__sigfillset14,
    else => private.sigfillset,
}
\`\`\`

</details>

---

### <a id="const-sigaddset"></a>`sigaddset`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigaddset = private.sigaddset
\`\`\`

</details>

---

### <a id="const-sigemptyset"></a>`sigemptyset`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigemptyset = switch (native_os) {
    .netbsd => private.__sigemptyset14,
    else => private.sigemptyset,
}
\`\`\`

</details>

---

### <a id="const-sigdelset"></a>`sigdelset`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigdelset = private.sigdelset
\`\`\`

</details>

---

### <a id="const-sigismember"></a>`sigismember`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigismember = private.sigismember
\`\`\`

</details>

---

### <a id="const-sigprocmask"></a>`sigprocmask`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sigprocmask = switch (native_os) {
    .netbsd => private.__sigprocmask14,
    else => private.sigprocmask,
}
\`\`\`

</details>

---

### <a id="const-socket"></a>`socket`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const socket = switch (native_os) {
    .netbsd => private.__socket30,
    else => private.socket,
}
\`\`\`

</details>

---

### <a id="const-stat-1"></a>`stat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const stat = switch (native_os) {
    .macos => switch (native_arch) {
        .x86_64 => private.@"stat$INODE64",
        else => private.stat,
    },
    else => private.stat,
}
\`\`\`

</details>

---

### <a id="const--msize"></a>`_msize`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _msize = switch (native_os) {
    .windows => private._msize,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-malloc-size"></a>`malloc_size`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const malloc_size = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos, .serenity => private.malloc_size,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-malloc-usable-size"></a>`malloc_usable_size`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const malloc_usable_size = switch (native_os) {
    .freebsd, .linux, .serenity => private.malloc_usable_size,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-posix-memalign"></a>`posix_memalign`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_memalign = switch (native_os) {
    .dragonfly, .netbsd, .freebsd, .solaris, .openbsd, .linux, .macos, .ios, .tvos, .watchos, .visionos, .serenity => private.posix_memalign,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-sysconf"></a>`sysconf`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sysconf = switch (native_os) {
    .solaris => solaris.sysconf,
    else => private.sysconf,
}
\`\`\`

</details>

---

### <a id="const-sf-hdtr"></a>`sf_hdtr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sf_hdtr = switch (native_os) {
    .freebsd, .macos, .ios, .tvos, .watchos, .visionos => extern struct {
        headers: ?[*]const iovec_const,
        hdr_cnt: c_int,
        trailers: ?[*]const iovec_const,
        trl_cnt: c_int,
    },
    else => void,
}
\`\`\`

</details>

---

### <a id="const-flock-1"></a>`flock`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const flock = switch (native_os) {
    .windows, .wasi => {},
    else => private.flock,
}
\`\`\`

</details>

---

### <a id="const-futex-1"></a>`futex`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const futex = switch (native_os) {
    .openbsd => openbsd.futex,
    .serenity => serenity.futex,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-fork"></a>`fork`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fork = switch (native_os) {
    .dragonfly,
    .freebsd,
    .ios,
    .linux,
    .macos,
    .netbsd,
    .openbsd,
    .solaris,
    .illumos,
    .tvos,
    .watchos,
    .visionos,
    .haiku,
    .serenity,
    => private.fork,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-pthread-setname-np"></a>`pthread_setname_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_setname_np = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => darwin.pthread_setname_np,
    .solaris, .illumos => solaris.pthread_setname_np,
    .netbsd => netbsd.pthread_setname_np,
    else => private.pthread_setname_np,
}
\`\`\`

</details>

---

### <a id="const-pthread-threadid-np"></a>`pthread_threadid_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_threadid_np = switch (native_os) {
    .macos, .ios, .tvos, .watchos, .visionos => private.pthread_threadid_np,
    else => {},
}
\`\`\`

</details>

---

### <a id="const-pthread-mutex-initializer"></a>`PTHREAD_MUTEX_INITIALIZER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PTHREAD_MUTEX_INITIALIZER = pthread_mutex_t{}
\`\`\`

</details>

---

### <a id="const-pthread-cond-initializer"></a>`PTHREAD_COND_INITIALIZER`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PTHREAD_COND_INITIALIZER = pthread_cond_t{}
\`\`\`

</details>

---

### <a id="const-pthread-t"></a>`pthread_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_t = switch (native_os) {
    // https://github.com/SerenityOS/serenity/blob/b98f537f117b341788023ab82e0c11ca9ae29a57/Kernel/API/POSIX/sys/types.h#L64
    .serenity => c_int,
    else => *opaque {},
}
\`\`\`

</details>

---

### <a id="const-getcontext"></a>`getcontext`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getcontext = if (builtin.target.abi.isAndroid() or builtin.target.os.tag == .openbsd or builtin.target.os.tag == .haiku)
{} // libc does not implement getcontext
    else if (native_os == .linux and builtin.target.abi.isMusl())
        linux.getcontext
    else
        private.getcontext
\`\`\`

</details>

---

### <a id="const-max-align-t"></a>`max_align_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const max_align_t = if (native_abi == .msvc or native_abi == .itanium)
    f64
else if (native_os.isDarwin())
    c_longdouble
else
    extern struct {
        a: c_longlong,
        b: c_longdouble,
    }
\`\`\`

</details>

---

### <a id="const-intmax-t"></a>`intmax_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const intmax_t = i64
\`\`\`

</details>

---

### <a id="const-uintmax-t"></a>`uintmax_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const uintmax_t = u64
\`\`\`

</details>

---

### <a id="const-af-sun"></a>`AF_SUN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const AF_SUN = solaris.AF_SUN
\`\`\`

</details>

---

### <a id="const-at-sun"></a>`AT_SUN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const AT_SUN = solaris.AT_SUN
\`\`\`

</details>

---

### <a id="const-file-event"></a>`FILE_EVENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const FILE_EVENT = solaris.FILE_EVENT
\`\`\`

</details>

---

### <a id="const-getcontext-1"></a>`GETCONTEXT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const GETCONTEXT = solaris.GETCONTEXT
\`\`\`

</details>

---

### <a id="const-getustack"></a>`GETUSTACK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const GETUSTACK = solaris.GETUSTACK
\`\`\`

</details>

---

### <a id="const-port-alert"></a>`PORT_ALERT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PORT_ALERT = solaris.PORT_ALERT
\`\`\`

</details>

---

### <a id="const-port-source"></a>`PORT_SOURCE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PORT_SOURCE = solaris.PORT_SOURCE
\`\`\`

</details>

---

### <a id="const-posix-fadv"></a>`POSIX_FADV`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const POSIX_FADV = solaris.POSIX_FADV
\`\`\`

</details>

---

### <a id="const-scm"></a>`SCM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SCM = solaris.SCM
\`\`\`

</details>

---

### <a id="const-setcontext"></a>`SETCONTEXT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SETCONTEXT = solaris.SETCONTEXT
\`\`\`

</details>

---

### <a id="const-setustack"></a>`SETUSTACK`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SETUSTACK = solaris.GETUSTACK
\`\`\`

</details>

---

### <a id="const-sfd"></a>`SFD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const SFD = solaris.SFD
\`\`\`

</details>

---

### <a id="const-cmsghdr"></a>`cmsghdr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const cmsghdr = solaris.cmsghdr
\`\`\`

</details>

---

### <a id="const-ctid-t"></a>`ctid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const ctid_t = solaris.ctid_t
\`\`\`

</details>

---

### <a id="const-file-obj"></a>`file_obj`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const file_obj = solaris.file_obj
\`\`\`

</details>

---

### <a id="const-fpregset-t"></a>`fpregset_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fpregset_t = solaris.fpregset_t
\`\`\`

</details>

---

### <a id="const-id-t"></a>`id_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const id_t = solaris.id_t
\`\`\`

</details>

---

### <a id="const-lif-ifinfo-req"></a>`lif_ifinfo_req`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const lif_ifinfo_req = solaris.lif_ifinfo_req
\`\`\`

</details>

---

### <a id="const-lif-nd-req"></a>`lif_nd_req`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const lif_nd_req = solaris.lif_nd_req
\`\`\`

</details>

---

### <a id="const-lifreq"></a>`lifreq`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const lifreq = solaris.lifreq
\`\`\`

</details>

---

### <a id="const-major-t"></a>`major_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const major_t = solaris.major_t
\`\`\`

</details>

---

### <a id="const-minor-t"></a>`minor_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const minor_t = solaris.minor_t
\`\`\`

</details>

---

### <a id="const-poolid-t"></a>`poolid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const poolid_t = solaris.poolid_t
\`\`\`

</details>

---

### <a id="const-port-notify"></a>`port_notify`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const port_notify = solaris.port_notify
\`\`\`

</details>

---

### <a id="const-priority"></a>`priority`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const priority = solaris.priority
\`\`\`

</details>

---

### <a id="const-procfs"></a>`procfs`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const procfs = solaris.procfs
\`\`\`

</details>

---

### <a id="const-projid-t"></a>`projid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const projid_t = solaris.projid_t
\`\`\`

</details>

---

### <a id="const-signalfd-siginfo"></a>`signalfd_siginfo`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const signalfd_siginfo = solaris.signalfd_siginfo
\`\`\`

</details>

---

### <a id="const-taskid-t"></a>`taskid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const taskid_t = solaris.taskid_t
\`\`\`

</details>

---

### <a id="const-zoneid-t"></a>`zoneid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const zoneid_t = solaris.zoneid_t
\`\`\`

</details>

---

### <a id="const-dirent-1"></a>`DirEnt`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const DirEnt = haiku.DirEnt
\`\`\`

</details>

---

### <a id="const--get-next-area-info"></a>`_get_next_area_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _get_next_area_info = haiku._get_next_area_info
\`\`\`

</details>

---

### <a id="const--get-next-image-info"></a>`_get_next_image_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _get_next_image_info = haiku._get_next_image_info
\`\`\`

</details>

---

### <a id="const--get-team-info"></a>`_get_team_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _get_team_info = haiku._get_team_info
\`\`\`

</details>

---

### <a id="const--kern-get-current-team"></a>`_kern_get_current_team`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _kern_get_current_team = haiku._kern_get_current_team
\`\`\`

</details>

---

### <a id="const--kern-open-dir"></a>`_kern_open_dir`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _kern_open_dir = haiku._kern_open_dir
\`\`\`

</details>

---

### <a id="const--kern-read-dir"></a>`_kern_read_dir`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _kern_read_dir = haiku._kern_read_dir
\`\`\`

</details>

---

### <a id="const--kern-read-stat"></a>`_kern_read_stat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _kern_read_stat = haiku._kern_read_stat
\`\`\`

</details>

---

### <a id="const--kern-rewind-dir"></a>`_kern_rewind_dir`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _kern_rewind_dir = haiku._kern_rewind_dir
\`\`\`

</details>

---

### <a id="const-area-id"></a>`area_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const area_id = haiku.area_id
\`\`\`

</details>

---

### <a id="const-area-info"></a>`area_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const area_info = haiku.area_info
\`\`\`

</details>

---

### <a id="const-directory-which"></a>`directory_which`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const directory_which = haiku.directory_which
\`\`\`

</details>

---

### <a id="const-find-directory"></a>`find_directory`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const find_directory = haiku.find_directory
\`\`\`

</details>

---

### <a id="const-find-thread"></a>`find_thread`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const find_thread = haiku.find_thread
\`\`\`

</details>

---

### <a id="const-get-system-info"></a>`get_system_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const get_system_info = haiku.get_system_info
\`\`\`

</details>

---

### <a id="const-image-info"></a>`image_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const image_info = haiku.image_info
\`\`\`

</details>

---

### <a id="const-port-id"></a>`port_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const port_id = haiku.port_id
\`\`\`

</details>

---

### <a id="const-sem-id"></a>`sem_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const sem_id = haiku.sem_id
\`\`\`

</details>

---

### <a id="const-status-t"></a>`status_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const status_t = haiku.status_t
\`\`\`

</details>

---

### <a id="const-system-info"></a>`system_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const system_info = haiku.system_info
\`\`\`

</details>

---

### <a id="const-team-id"></a>`team_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const team_id = haiku.team_id
\`\`\`

</details>

---

### <a id="const-team-info"></a>`team_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const team_info = haiku.team_info
\`\`\`

</details>

---

### <a id="const-thread-id"></a>`thread_id`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_id = haiku.thread_id
\`\`\`

</details>

---

### <a id="const-auth"></a>`AUTH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const AUTH = openbsd.AUTH
\`\`\`

</details>

---

### <a id="const-bi"></a>`BI`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const BI = openbsd.BI
\`\`\`

</details>

---

### <a id="const-hw"></a>`HW`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const HW = openbsd.HW
\`\`\`

</details>

---

### <a id="const-pthread-stack-min"></a>`PTHREAD_STACK_MIN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PTHREAD_STACK_MIN = openbsd.PTHREAD_STACK_MIN
\`\`\`

</details>

---

### <a id="const-tcflush"></a>`TCFLUSH`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TCFLUSH = openbsd.TCFLUSH
\`\`\`

</details>

---

### <a id="const-tcio"></a>`TCIO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TCIO = openbsd.TCIO
\`\`\`

</details>

---

### <a id="const-auth-approval"></a>`auth_approval`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_approval = openbsd.auth_approval
\`\`\`

</details>

---

### <a id="const-auth-call"></a>`auth_call`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_call = openbsd.auth_call
\`\`\`

</details>

---

### <a id="const-auth-cat"></a>`auth_cat`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_cat = openbsd.auth_cat
\`\`\`

</details>

---

### <a id="const-auth-challenge"></a>`auth_challenge`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_challenge = openbsd.auth_challenge
\`\`\`

</details>

---

### <a id="const-auth-check-change"></a>`auth_check_change`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_check_change = openbsd.auth_check_change
\`\`\`

</details>

---

### <a id="const-auth-check-expire"></a>`auth_check_expire`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_check_expire = openbsd.auth_check_expire
\`\`\`

</details>

---

### <a id="const-auth-checknologin"></a>`auth_checknologin`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_checknologin = openbsd.auth_checknologin
\`\`\`

</details>

---

### <a id="const-auth-clean"></a>`auth_clean`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_clean = openbsd.auth_clean
\`\`\`

</details>

---

### <a id="const-auth-close"></a>`auth_close`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_close = openbsd.auth_close
\`\`\`

</details>

---

### <a id="const-auth-clrenv"></a>`auth_clrenv`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_clrenv = openbsd.auth_clrenv
\`\`\`

</details>

---

### <a id="const-auth-clroption"></a>`auth_clroption`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_clroption = openbsd.auth_clroption
\`\`\`

</details>

---

### <a id="const-auth-clroptions"></a>`auth_clroptions`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_clroptions = openbsd.auth_clroptions
\`\`\`

</details>

---

### <a id="const-auth-getitem"></a>`auth_getitem`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_getitem = openbsd.auth_getitem
\`\`\`

</details>

---

### <a id="const-auth-getpwd"></a>`auth_getpwd`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_getpwd = openbsd.auth_getpwd
\`\`\`

</details>

---

### <a id="const-auth-getstate"></a>`auth_getstate`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_getstate = openbsd.auth_getstate
\`\`\`

</details>

---

### <a id="const-auth-getvalue"></a>`auth_getvalue`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_getvalue = openbsd.auth_getvalue
\`\`\`

</details>

---

### <a id="const-auth-item-t"></a>`auth_item_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_item_t = openbsd.auth_item_t
\`\`\`

</details>

---

### <a id="const-auth-mkvalue"></a>`auth_mkvalue`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_mkvalue = openbsd.auth_mkvalue
\`\`\`

</details>

---

### <a id="const-auth-open"></a>`auth_open`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_open = openbsd.auth_open
\`\`\`

</details>

---

### <a id="const-auth-session-t"></a>`auth_session_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_session_t = openbsd.auth_session_t
\`\`\`

</details>

---

### <a id="const-auth-setdata"></a>`auth_setdata`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_setdata = openbsd.auth_setdata
\`\`\`

</details>

---

### <a id="const-auth-setenv"></a>`auth_setenv`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_setenv = openbsd.auth_setenv
\`\`\`

</details>

---

### <a id="const-auth-setitem"></a>`auth_setitem`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_setitem = openbsd.auth_setitem
\`\`\`

</details>

---

### <a id="const-auth-setoption"></a>`auth_setoption`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_setoption = openbsd.auth_setoption
\`\`\`

</details>

---

### <a id="const-auth-setpwd"></a>`auth_setpwd`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_setpwd = openbsd.auth_setpwd
\`\`\`

</details>

---

### <a id="const-auth-setstate"></a>`auth_setstate`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_setstate = openbsd.auth_setstate
\`\`\`

</details>

---

### <a id="const-auth-userchallenge"></a>`auth_userchallenge`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_userchallenge = openbsd.auth_userchallenge
\`\`\`

</details>

---

### <a id="const-auth-usercheck"></a>`auth_usercheck`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_usercheck = openbsd.auth_usercheck
\`\`\`

</details>

---

### <a id="const-auth-userokay"></a>`auth_userokay`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_userokay = openbsd.auth_userokay
\`\`\`

</details>

---

### <a id="const-auth-userresponse"></a>`auth_userresponse`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_userresponse = openbsd.auth_userresponse
\`\`\`

</details>

---

### <a id="const-auth-verify"></a>`auth_verify`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const auth_verify = openbsd.auth_verify
\`\`\`

</details>

---

### <a id="const-bcrypt"></a>`bcrypt`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const bcrypt = openbsd.bcrypt
\`\`\`

</details>

---

### <a id="const-bcrypt-checkpass"></a>`bcrypt_checkpass`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const bcrypt_checkpass = openbsd.bcrypt_checkpass
\`\`\`

</details>

---

### <a id="const-bcrypt-gensalt"></a>`bcrypt_gensalt`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const bcrypt_gensalt = openbsd.bcrypt_gensalt
\`\`\`

</details>

---

### <a id="const-bcrypt-newhash"></a>`bcrypt_newhash`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const bcrypt_newhash = openbsd.bcrypt_newhash
\`\`\`

</details>

---

### <a id="const-getpwnam-shadow"></a>`getpwnam_shadow`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getpwnam_shadow = openbsd.getpwnam_shadow
\`\`\`

</details>

---

### <a id="const-getpwuid-shadow"></a>`getpwuid_shadow`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getpwuid_shadow = openbsd.getpwuid_shadow
\`\`\`

</details>

---

### <a id="const-getthrid"></a>`getthrid`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getthrid = openbsd.getthrid
\`\`\`

</details>

---

### <a id="const-login-cap-t"></a>`login_cap_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_cap_t = openbsd.login_cap_t
\`\`\`

</details>

---

### <a id="const-login-close"></a>`login_close`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_close = openbsd.login_close
\`\`\`

</details>

---

### <a id="const-login-getcapbool"></a>`login_getcapbool`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_getcapbool = openbsd.login_getcapbool
\`\`\`

</details>

---

### <a id="const-login-getcapnum"></a>`login_getcapnum`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_getcapnum = openbsd.login_getcapnum
\`\`\`

</details>

---

### <a id="const-login-getcapsize"></a>`login_getcapsize`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_getcapsize = openbsd.login_getcapsize
\`\`\`

</details>

---

### <a id="const-login-getcapstr"></a>`login_getcapstr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_getcapstr = openbsd.login_getcapstr
\`\`\`

</details>

---

### <a id="const-login-getcaptime"></a>`login_getcaptime`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_getcaptime = openbsd.login_getcaptime
\`\`\`

</details>

---

### <a id="const-login-getclass"></a>`login_getclass`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_getclass = openbsd.login_getclass
\`\`\`

</details>

---

### <a id="const-login-getstyle"></a>`login_getstyle`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const login_getstyle = openbsd.login_getstyle
\`\`\`

</details>

---

### <a id="const-pledge"></a>`pledge`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pledge = openbsd.pledge
\`\`\`

</details>

---

### <a id="const-pthread-spinlock-t"></a>`pthread_spinlock_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_spinlock_t = openbsd.pthread_spinlock_t
\`\`\`

</details>

---

### <a id="const-pw-dup"></a>`pw_dup`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pw_dup = openbsd.pw_dup
\`\`\`

</details>

---

### <a id="const-setclasscontext"></a>`setclasscontext`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const setclasscontext = openbsd.setclasscontext
\`\`\`

</details>

---

### <a id="const-setpassent"></a>`setpassent`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const setpassent = openbsd.setpassent
\`\`\`

</details>

---

### <a id="const-setusercontext"></a>`setusercontext`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const setusercontext = openbsd.setusercontext
\`\`\`

</details>

---

### <a id="const-uid-from-user"></a>`uid_from_user`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const uid_from_user = openbsd.uid_from_user
\`\`\`

</details>

---

### <a id="const-unveil"></a>`unveil`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const unveil = openbsd.unveil
\`\`\`

</details>

---

### <a id="const-user-from-uid"></a>`user_from_uid`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const user_from_uid = openbsd.user_from_uid
\`\`\`

</details>

---

### <a id="const-cap-rights-version"></a>`CAP_RIGHTS_VERSION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const CAP_RIGHTS_VERSION = freebsd.CAP_RIGHTS_VERSION
\`\`\`

</details>

---

### <a id="const-kinfo-file-size"></a>`KINFO_FILE_SIZE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const KINFO_FILE_SIZE = freebsd.KINFO_FILE_SIZE
\`\`\`

</details>

---

### <a id="const-mfd"></a>`MFD`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MFD = freebsd.MFD
\`\`\`

</details>

---

### <a id="const-umtx-abstime"></a>`UMTX_ABSTIME`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const UMTX_ABSTIME = freebsd.UMTX_ABSTIME
\`\`\`

</details>

---

### <a id="const-umtx-op"></a>`UMTX_OP`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const UMTX_OP = freebsd.UMTX_OP
\`\`\`

</details>

---

### <a id="const--umtx-op"></a>`_umtx_op`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _umtx_op = freebsd._umtx_op
\`\`\`

</details>

---

### <a id="const--umtx-time"></a>`_umtx_time`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _umtx_time = freebsd._umtx_time
\`\`\`

</details>

---

### <a id="const-cap-rights"></a>`cap_rights`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const cap_rights = freebsd.cap_rights
\`\`\`

</details>

---

### <a id="const-fflags-t"></a>`fflags_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fflags_t = freebsd.fflags_t
\`\`\`

</details>

---

### <a id="const-fsblkcnt-t"></a>`fsblkcnt_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fsblkcnt_t = freebsd.fsblkcnt_t
\`\`\`

</details>

---

### <a id="const-fsfilcnt-t"></a>`fsfilcnt_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fsfilcnt_t = freebsd.fsfilcnt_t
\`\`\`

</details>

---

### <a id="const-kinfo-file"></a>`kinfo_file`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const kinfo_file = freebsd.kinfo_file
\`\`\`

</details>

---

### <a id="const-kinfo-getfile"></a>`kinfo_getfile`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const kinfo_getfile = freebsd.kinfo_getfile
\`\`\`

</details>

---

### <a id="const-copyfile"></a>`COPYFILE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const COPYFILE = darwin.COPYFILE
\`\`\`

</details>

---

### <a id="const-cpufamily"></a>`CPUFAMILY`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const CPUFAMILY = darwin.CPUFAMILY
\`\`\`

</details>

---

### <a id="const-pt"></a>`PT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PT = darwin.PT
\`\`\`

</details>

---

### <a id="const-db-recordtype"></a>`DB_RECORDTYPE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const DB_RECORDTYPE = darwin.DB_RECORDTYPE
\`\`\`

</details>

---

### <a id="const-exc"></a>`EXC`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const EXC = darwin.EXC
\`\`\`

</details>

---

### <a id="const-exception"></a>`EXCEPTION`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const EXCEPTION = darwin.EXCEPTION
\`\`\`

</details>

---

### <a id="const-mach-msg-type"></a>`MACH_MSG_TYPE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MACH_MSG_TYPE = darwin.MACH_MSG_TYPE
\`\`\`

</details>

---

### <a id="const-mach-port-right"></a>`MACH_PORT_RIGHT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MACH_PORT_RIGHT = darwin.MACH_PORT_RIGHT
\`\`\`

</details>

---

### <a id="const-mach-task-basic-info"></a>`MACH_TASK_BASIC_INFO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MACH_TASK_BASIC_INFO = darwin.MACH_TASK_BASIC_INFO
\`\`\`

</details>

---

### <a id="const-mach-task-basic-info-count"></a>`MACH_TASK_BASIC_INFO_COUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MACH_TASK_BASIC_INFO_COUNT = darwin.MACH_TASK_BASIC_INFO_COUNT
\`\`\`

</details>

---

### <a id="const-mattr"></a>`MATTR`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const MATTR = darwin.MATTR
\`\`\`

</details>

---

### <a id="const-nsversionofruntimelibrary"></a>`NSVersionOfRunTimeLibrary`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const NSVersionOfRunTimeLibrary = darwin.NSVersionOfRunTimeLibrary
\`\`\`

</details>

---

### <a id="const-open-max"></a>`OPEN_MAX`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const OPEN_MAX = darwin.OPEN_MAX
\`\`\`

</details>

---

### <a id="const-posix-spawn"></a>`POSIX_SPAWN`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const POSIX_SPAWN = darwin.POSIX_SPAWN
\`\`\`

</details>

---

### <a id="const-task-null"></a>`TASK_NULL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TASK_NULL = darwin.TASK_NULL
\`\`\`

</details>

---

### <a id="const-task-vm-info"></a>`TASK_VM_INFO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TASK_VM_INFO = darwin.TASK_VM_INFO
\`\`\`

</details>

---

### <a id="const-task-vm-info-count"></a>`TASK_VM_INFO_COUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const TASK_VM_INFO_COUNT = darwin.TASK_VM_INFO_COUNT
\`\`\`

</details>

---

### <a id="const-thread-basic-info"></a>`THREAD_BASIC_INFO`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const THREAD_BASIC_INFO = darwin.THREAD_BASIC_INFO
\`\`\`

</details>

---

### <a id="const-thread-basic-info-count"></a>`THREAD_BASIC_INFO_COUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const THREAD_BASIC_INFO_COUNT = darwin.THREAD_BASIC_INFO_COUNT
\`\`\`

</details>

---

### <a id="const-thread-identifier-info-count"></a>`THREAD_IDENTIFIER_INFO_COUNT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const THREAD_IDENTIFIER_INFO_COUNT = darwin.THREAD_IDENTIFIER_INFO_COUNT
\`\`\`

</details>

---

### <a id="const-thread-null"></a>`THREAD_NULL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const THREAD_NULL = darwin.THREAD_NULL
\`\`\`

</details>

---

### <a id="const-thread-state-none"></a>`THREAD_STATE_NONE`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const THREAD_STATE_NONE = darwin.THREAD_STATE_NONE
\`\`\`

</details>

---

### <a id="const-ul"></a>`UL`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const UL = darwin.UL
\`\`\`

</details>

---

### <a id="const-vm"></a>`VM`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const VM = darwin.VM
\`\`\`

</details>

---

### <a id="const--nsgetexecutablepath"></a>`_NSGetExecutablePath`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _NSGetExecutablePath = darwin._NSGetExecutablePath
\`\`\`

</details>

---

### <a id="const---getdirentries64"></a>`__getdirentries64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const __getdirentries64 = darwin.__getdirentries64
\`\`\`

</details>

---

### <a id="const---ulock-wait"></a>`__ulock_wait`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const __ulock_wait = darwin.__ulock_wait
\`\`\`

</details>

---

### <a id="const---ulock-wait2"></a>`__ulock_wait2`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const __ulock_wait2 = darwin.__ulock_wait2
\`\`\`

</details>

---

### <a id="const---ulock-wake"></a>`__ulock_wake`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const __ulock_wake = darwin.__ulock_wake
\`\`\`

</details>

---

### <a id="const--dyld-get-image-header"></a>`_dyld_get_image_header`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _dyld_get_image_header = darwin._dyld_get_image_header
\`\`\`

</details>

---

### <a id="const--dyld-get-image-name"></a>`_dyld_get_image_name`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _dyld_get_image_name = darwin._dyld_get_image_name
\`\`\`

</details>

---

### <a id="const--dyld-get-image-vmaddr-slide"></a>`_dyld_get_image_vmaddr_slide`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _dyld_get_image_vmaddr_slide = darwin._dyld_get_image_vmaddr_slide
\`\`\`

</details>

---

### <a id="const--dyld-image-count"></a>`_dyld_image_count`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _dyld_image_count = darwin._dyld_image_count
\`\`\`

</details>

---

### <a id="const--host-page-size"></a>`_host_page_size`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _host_page_size = darwin._host_page_size
\`\`\`

</details>

---

### <a id="const-clock-get-time"></a>`clock_get_time`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const clock_get_time = darwin.clock_get_time
\`\`\`

</details>

---

### <a id="const-closenocancel"></a>`@"close$NOCANCEL"`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const @"close$NOCANCEL" = darwin.@"close$NOCANCEL"
\`\`\`

</details>

---

### <a id="const-dispatch-release"></a>`dispatch_release`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dispatch_release = darwin.dispatch_release
\`\`\`

</details>

---

### <a id="const-dispatch-semaphore-create"></a>`dispatch_semaphore_create`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dispatch_semaphore_create = darwin.dispatch_semaphore_create
\`\`\`

</details>

---

### <a id="const-dispatch-semaphore-signal"></a>`dispatch_semaphore_signal`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dispatch_semaphore_signal = darwin.dispatch_semaphore_signal
\`\`\`

</details>

---

### <a id="const-dispatch-semaphore-wait"></a>`dispatch_semaphore_wait`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dispatch_semaphore_wait = darwin.dispatch_semaphore_wait
\`\`\`

</details>

---

### <a id="const-dispatch-time"></a>`dispatch_time`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const dispatch_time = darwin.dispatch_time
\`\`\`

</details>

---

### <a id="const-fcopyfile"></a>`fcopyfile`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const fcopyfile = darwin.fcopyfile
\`\`\`

</details>

---

### <a id="const-host-t"></a>`host_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const host_t = darwin.host_t
\`\`\`

</details>

---

### <a id="const-ipc-space-t"></a>`ipc_space_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const ipc_space_t = darwin.ipc_space_t
\`\`\`

</details>

---

### <a id="const-ipc-space-port-t"></a>`ipc_space_port_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const ipc_space_port_t = darwin.ipc_space_port_t
\`\`\`

</details>

---

### <a id="const-kern-return-t"></a>`kern_return_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const kern_return_t = darwin.kern_return_t
\`\`\`

</details>

---

### <a id="const-vm-size-t"></a>`vm_size_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_size_t = darwin.vm_size_t
\`\`\`

</details>

---

### <a id="const-kevent64"></a>`kevent64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const kevent64 = darwin.kevent64
\`\`\`

</details>

---

### <a id="const-kevent64-s"></a>`kevent64_s`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const kevent64_s = darwin.kevent64_s
\`\`\`

</details>

---

### <a id="const-mach-absolute-time"></a>`mach_absolute_time`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_absolute_time = darwin.mach_absolute_time
\`\`\`

</details>

---

### <a id="const-mach-continuous-time"></a>`mach_continuous_time`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_continuous_time = darwin.mach_continuous_time
\`\`\`

</details>

---

### <a id="const-mach-hdr"></a>`mach_hdr`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_hdr = darwin.mach_hdr
\`\`\`

</details>

---

### <a id="const-mach-host-self"></a>`mach_host_self`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_host_self = darwin.mach_host_self
\`\`\`

</details>

---

### <a id="const-mach-msg"></a>`mach_msg`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_msg = darwin.mach_msg
\`\`\`

</details>

---

### <a id="const-mach-msg-type-number-t"></a>`mach_msg_type_number_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_msg_type_number_t = darwin.mach_msg_type_number_t
\`\`\`

</details>

---

### <a id="const-mach-port-allocate"></a>`mach_port_allocate`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_port_allocate = darwin.mach_port_allocate
\`\`\`

</details>

---

### <a id="const-mach-port-array-t"></a>`mach_port_array_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_port_array_t = darwin.mach_port_array_t
\`\`\`

</details>

---

### <a id="const-mach-port-deallocate"></a>`mach_port_deallocate`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_port_deallocate = darwin.mach_port_deallocate
\`\`\`

</details>

---

### <a id="const-mach-port-insert-right"></a>`mach_port_insert_right`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_port_insert_right = darwin.mach_port_insert_right
\`\`\`

</details>

---

### <a id="const-mach-port-name-t"></a>`mach_port_name_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_port_name_t = darwin.mach_port_name_t
\`\`\`

</details>

---

### <a id="const-mach-port-t"></a>`mach_port_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_port_t = darwin.mach_port_t
\`\`\`

</details>

---

### <a id="const-mach-task-basic-info-1"></a>`mach_task_basic_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_task_basic_info = darwin.mach_task_basic_info
\`\`\`

</details>

---

### <a id="const-mach-task-self"></a>`mach_task_self`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_task_self = darwin.mach_task_self
\`\`\`

</details>

---

### <a id="const-mach-timebase-info"></a>`mach_timebase_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_timebase_info = darwin.mach_timebase_info
\`\`\`

</details>

---

### <a id="const-mach-timebase-info-data"></a>`mach_timebase_info_data`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_timebase_info_data = darwin.mach_timebase_info_data
\`\`\`

</details>

---

### <a id="const-mach-vm-address-t"></a>`mach_vm_address_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_vm_address_t = darwin.mach_vm_address_t
\`\`\`

</details>

---

### <a id="const-mach-vm-protect"></a>`mach_vm_protect`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_vm_protect = darwin.mach_vm_protect
\`\`\`

</details>

---

### <a id="const-mach-vm-read"></a>`mach_vm_read`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_vm_read = darwin.mach_vm_read
\`\`\`

</details>

---

### <a id="const-mach-vm-region"></a>`mach_vm_region`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_vm_region = darwin.mach_vm_region
\`\`\`

</details>

---

### <a id="const-mach-vm-region-recurse"></a>`mach_vm_region_recurse`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_vm_region_recurse = darwin.mach_vm_region_recurse
\`\`\`

</details>

---

### <a id="const-mach-vm-size-t"></a>`mach_vm_size_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_vm_size_t = darwin.mach_vm_size_t
\`\`\`

</details>

---

### <a id="const-mach-vm-write"></a>`mach_vm_write`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_vm_write = darwin.mach_vm_write
\`\`\`

</details>

---

### <a id="const-natural-t"></a>`natural_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const natural_t = darwin.natural_t
\`\`\`

</details>

---

### <a id="const-os-log-create"></a>`os_log_create`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_log_create = darwin.os_log_create
\`\`\`

</details>

---

### <a id="const-os-log-type-enabled"></a>`os_log_type_enabled`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_log_type_enabled = darwin.os_log_type_enabled
\`\`\`

</details>

---

### <a id="const-os-signpost-enabled"></a>`os_signpost_enabled`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_signpost_enabled = darwin.os_signpost_enabled
\`\`\`

</details>

---

### <a id="const-os-signpost-id-generate"></a>`os_signpost_id_generate`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_signpost_id_generate = darwin.os_signpost_id_generate
\`\`\`

</details>

---

### <a id="const-os-signpost-id-make-with-pointer"></a>`os_signpost_id_make_with_pointer`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_signpost_id_make_with_pointer = darwin.os_signpost_id_make_with_pointer
\`\`\`

</details>

---

### <a id="const-os-signpost-interval-begin"></a>`os_signpost_interval_begin`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_signpost_interval_begin = darwin.os_signpost_interval_begin
\`\`\`

</details>

---

### <a id="const-os-signpost-interval-end"></a>`os_signpost_interval_end`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_signpost_interval_end = darwin.os_signpost_interval_end
\`\`\`

</details>

---

### <a id="const-os-unfair-lock"></a>`os_unfair_lock`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_unfair_lock = darwin.os_unfair_lock
\`\`\`

</details>

---

### <a id="const-os-unfair-lock-assert-not-owner"></a>`os_unfair_lock_assert_not_owner`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_unfair_lock_assert_not_owner = darwin.os_unfair_lock_assert_not_owner
\`\`\`

</details>

---

### <a id="const-os-unfair-lock-assert-owner"></a>`os_unfair_lock_assert_owner`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_unfair_lock_assert_owner = darwin.os_unfair_lock_assert_owner
\`\`\`

</details>

---

### <a id="const-os-unfair-lock-lock"></a>`os_unfair_lock_lock`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_unfair_lock_lock = darwin.os_unfair_lock_lock
\`\`\`

</details>

---

### <a id="const-os-unfair-lock-trylock"></a>`os_unfair_lock_trylock`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_unfair_lock_trylock = darwin.os_unfair_lock_trylock
\`\`\`

</details>

---

### <a id="const-os-unfair-lock-unlock"></a>`os_unfair_lock_unlock`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const os_unfair_lock_unlock = darwin.os_unfair_lock_unlock
\`\`\`

</details>

---

### <a id="const-pid-for-task"></a>`pid_for_task`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pid_for_task = darwin.pid_for_task
\`\`\`

</details>

---

### <a id="const-posix-spawn-1"></a>`posix_spawn`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn = darwin.posix_spawn
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-addchdir-np"></a>`posix_spawn_file_actions_addchdir_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_addchdir_np = darwin.posix_spawn_file_actions_addchdir_np
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-addclose"></a>`posix_spawn_file_actions_addclose`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_addclose = darwin.posix_spawn_file_actions_addclose
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-adddup2"></a>`posix_spawn_file_actions_adddup2`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_adddup2 = darwin.posix_spawn_file_actions_adddup2
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-addfchdir-np"></a>`posix_spawn_file_actions_addfchdir_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_addfchdir_np = darwin.posix_spawn_file_actions_addfchdir_np
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-addinherit-np"></a>`posix_spawn_file_actions_addinherit_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_addinherit_np = darwin.posix_spawn_file_actions_addinherit_np
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-addopen"></a>`posix_spawn_file_actions_addopen`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_addopen = darwin.posix_spawn_file_actions_addopen
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-destroy"></a>`posix_spawn_file_actions_destroy`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_destroy = darwin.posix_spawn_file_actions_destroy
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-init"></a>`posix_spawn_file_actions_init`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_init = darwin.posix_spawn_file_actions_init
\`\`\`

</details>

---

### <a id="const-posix-spawn-file-actions-t"></a>`posix_spawn_file_actions_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawn_file_actions_t = darwin.posix_spawn_file_actions_t
\`\`\`

</details>

---

### <a id="const-posix-spawnattr-destroy"></a>`posix_spawnattr_destroy`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawnattr_destroy = darwin.posix_spawnattr_destroy
\`\`\`

</details>

---

### <a id="const-posix-spawnattr-getflags"></a>`posix_spawnattr_getflags`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawnattr_getflags = darwin.posix_spawnattr_getflags
\`\`\`

</details>

---

### <a id="const-posix-spawnattr-init"></a>`posix_spawnattr_init`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawnattr_init = darwin.posix_spawnattr_init
\`\`\`

</details>

---

### <a id="const-posix-spawnattr-setflags"></a>`posix_spawnattr_setflags`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawnattr_setflags = darwin.posix_spawnattr_setflags
\`\`\`

</details>

---

### <a id="const-posix-spawnattr-t"></a>`posix_spawnattr_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawnattr_t = darwin.posix_spawnattr_t
\`\`\`

</details>

---

### <a id="const-posix-spawnp"></a>`posix_spawnp`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const posix_spawnp = darwin.posix_spawnp
\`\`\`

</details>

---

### <a id="const-pthread-attr-get-qos-class-np"></a>`pthread_attr_get_qos_class_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_attr_get_qos_class_np = darwin.pthread_attr_get_qos_class_np
\`\`\`

</details>

---

### <a id="const-pthread-attr-set-qos-class-np"></a>`pthread_attr_set_qos_class_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_attr_set_qos_class_np = darwin.pthread_attr_set_qos_class_np
\`\`\`

</details>

---

### <a id="const-pthread-get-qos-class-np"></a>`pthread_get_qos_class_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_get_qos_class_np = darwin.pthread_get_qos_class_np
\`\`\`

</details>

---

### <a id="const-pthread-set-qos-class-self-np"></a>`pthread_set_qos_class_self_np`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const pthread_set_qos_class_self_np = darwin.pthread_set_qos_class_self_np
\`\`\`

</details>

---

### <a id="const-ptrace"></a>`ptrace`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const ptrace = darwin.ptrace
\`\`\`

</details>

---

### <a id="const-task-for-pid"></a>`task_for_pid`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_for_pid = darwin.task_for_pid
\`\`\`

</details>

---

### <a id="const-task-get-exception-ports"></a>`task_get_exception_ports`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_get_exception_ports = darwin.task_get_exception_ports
\`\`\`

</details>

---

### <a id="const-task-info"></a>`task_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_info = darwin.task_info
\`\`\`

</details>

---

### <a id="const-task-info-t"></a>`task_info_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_info_t = darwin.task_info_t
\`\`\`

</details>

---

### <a id="const-task-resume"></a>`task_resume`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_resume = darwin.task_resume
\`\`\`

</details>

---

### <a id="const-task-set-exception-ports"></a>`task_set_exception_ports`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_set_exception_ports = darwin.task_set_exception_ports
\`\`\`

</details>

---

### <a id="const-task-suspend"></a>`task_suspend`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_suspend = darwin.task_suspend
\`\`\`

</details>

---

### <a id="const-task-threads"></a>`task_threads`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_threads = darwin.task_threads
\`\`\`

</details>

---

### <a id="const-task-vm-info-data-t"></a>`task_vm_info_data_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_vm_info_data_t = darwin.task_vm_info_data_t
\`\`\`

</details>

---

### <a id="const-thread-basic-info-1"></a>`thread_basic_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_basic_info = darwin.thread_basic_info
\`\`\`

</details>

---

### <a id="const-thread-get-state"></a>`thread_get_state`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_get_state = darwin.thread_get_state
\`\`\`

</details>

---

### <a id="const-thread-identifier-info"></a>`thread_identifier_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_identifier_info = darwin.thread_identifier_info
\`\`\`

</details>

---

### <a id="const-thread-info"></a>`thread_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_info = darwin.thread_info
\`\`\`

</details>

---

### <a id="const-thread-info-t"></a>`thread_info_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_info_t = darwin.thread_info_t
\`\`\`

</details>

---

### <a id="const-thread-resume"></a>`thread_resume`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_resume = darwin.thread_resume
\`\`\`

</details>

---

### <a id="const-thread-set-state"></a>`thread_set_state`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_set_state = darwin.thread_set_state
\`\`\`

</details>

---

### <a id="const-vm-deallocate"></a>`vm_deallocate`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_deallocate = darwin.vm_deallocate
\`\`\`

</details>

---

### <a id="const-vm-machine-attribute"></a>`vm_machine_attribute`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_machine_attribute = darwin.vm_machine_attribute
\`\`\`

</details>

---

### <a id="const-vm-machine-attribute-val-t"></a>`vm_machine_attribute_val_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_machine_attribute_val_t = darwin.vm_machine_attribute_val_t
\`\`\`

</details>

---

### <a id="const-vm-map-t"></a>`vm_map_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_map_t = darwin.vm_map_t
\`\`\`

</details>

---

### <a id="const-vm-offset-t"></a>`vm_offset_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_offset_t = darwin.vm_offset_t
\`\`\`

</details>

---

### <a id="const-vm-prot-t"></a>`vm_prot_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_prot_t = darwin.vm_prot_t
\`\`\`

</details>

---

### <a id="const-vm-region-basic-info-64"></a>`vm_region_basic_info_64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_region_basic_info_64 = darwin.vm_region_basic_info_64
\`\`\`

</details>

---

### <a id="const-vm-region-extended-info"></a>`vm_region_extended_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_region_extended_info = darwin.vm_region_extended_info
\`\`\`

</details>

---

### <a id="const-vm-region-info-t"></a>`vm_region_info_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_region_info_t = darwin.vm_region_info_t
\`\`\`

</details>

---

### <a id="const-vm-region-recurse-info-t"></a>`vm_region_recurse_info_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_region_recurse_info_t = darwin.vm_region_recurse_info_t
\`\`\`

</details>

---

### <a id="const-vm-region-submap-info-64"></a>`vm_region_submap_info_64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_region_submap_info_64 = darwin.vm_region_submap_info_64
\`\`\`

</details>

---

### <a id="const-vm-region-submap-short-info-64"></a>`vm_region_submap_short_info_64`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_region_submap_short_info_64 = darwin.vm_region_submap_short_info_64
\`\`\`

</details>

---

### <a id="const-vm-region-top-info"></a>`vm_region_top_info`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_region_top_info = darwin.vm_region_top_info
\`\`\`

</details>

---

### <a id="const-caddr-t"></a>`caddr_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const caddr_t = darwin.caddr_t
\`\`\`

</details>

---

### <a id="const-exception-behavior-array-t"></a>`exception_behavior_array_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_behavior_array_t = darwin.exception_behavior_array_t
\`\`\`

</details>

---

### <a id="const-exception-behavior-t"></a>`exception_behavior_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_behavior_t = darwin.exception_behavior_t
\`\`\`

</details>

---

### <a id="const-exception-data-t"></a>`exception_data_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_data_t = darwin.exception_data_t
\`\`\`

</details>

---

### <a id="const-exception-data-type-t"></a>`exception_data_type_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_data_type_t = darwin.exception_data_type_t
\`\`\`

</details>

---

### <a id="const-exception-flavor-array-t"></a>`exception_flavor_array_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_flavor_array_t = darwin.exception_flavor_array_t
\`\`\`

</details>

---

### <a id="const-exception-handler-array-t"></a>`exception_handler_array_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_handler_array_t = darwin.exception_handler_array_t
\`\`\`

</details>

---

### <a id="const-exception-handler-t"></a>`exception_handler_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_handler_t = darwin.exception_handler_t
\`\`\`

</details>

---

### <a id="const-exception-mask-array-t"></a>`exception_mask_array_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_mask_array_t = darwin.exception_mask_array_t
\`\`\`

</details>

---

### <a id="const-exception-mask-t"></a>`exception_mask_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_mask_t = darwin.exception_mask_t
\`\`\`

</details>

---

### <a id="const-exception-port-array-t"></a>`exception_port_array_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_port_array_t = darwin.exception_port_array_t
\`\`\`

</details>

---

### <a id="const-exception-port-t"></a>`exception_port_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const exception_port_t = darwin.exception_port_t
\`\`\`

</details>

---

### <a id="const-mach-exception-data-t"></a>`mach_exception_data_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_exception_data_t = darwin.mach_exception_data_t
\`\`\`

</details>

---

### <a id="const-mach-exception-data-type-t"></a>`mach_exception_data_type_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_exception_data_type_t = darwin.mach_exception_data_type_t
\`\`\`

</details>

---

### <a id="const-mach-msg-bits-t"></a>`mach_msg_bits_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_msg_bits_t = darwin.mach_msg_bits_t
\`\`\`

</details>

---

### <a id="const-mach-msg-id-t"></a>`mach_msg_id_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_msg_id_t = darwin.mach_msg_id_t
\`\`\`

</details>

---

### <a id="const-mach-msg-option-t"></a>`mach_msg_option_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_msg_option_t = darwin.mach_msg_option_t
\`\`\`

</details>

---

### <a id="const-mach-msg-size-t"></a>`mach_msg_size_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_msg_size_t = darwin.mach_msg_size_t
\`\`\`

</details>

---

### <a id="const-mach-msg-timeout-t"></a>`mach_msg_timeout_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_msg_timeout_t = darwin.mach_msg_timeout_t
\`\`\`

</details>

---

### <a id="const-mach-msg-type-name-t"></a>`mach_msg_type_name_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_msg_type_name_t = darwin.mach_msg_type_name_t
\`\`\`

</details>

---

### <a id="const-mach-port-right-t"></a>`mach_port_right_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const mach_port_right_t = darwin.mach_port_right_t
\`\`\`

</details>

---

### <a id="const-memory-object-offset-t"></a>`memory_object_offset_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const memory_object_offset_t = darwin.memory_object_offset_t
\`\`\`

</details>

---

### <a id="const-policy-t"></a>`policy_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const policy_t = darwin.policy_t
\`\`\`

</details>

---

### <a id="const-task-policy-flavor-t"></a>`task_policy_flavor_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_policy_flavor_t = darwin.task_policy_flavor_t
\`\`\`

</details>

---

### <a id="const-task-policy-t"></a>`task_policy_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_policy_t = darwin.task_policy_t
\`\`\`

</details>

---

### <a id="const-task-t"></a>`task_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const task_t = darwin.task_t
\`\`\`

</details>

---

### <a id="const-thread-act-t"></a>`thread_act_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_act_t = darwin.thread_act_t
\`\`\`

</details>

---

### <a id="const-thread-flavor-t"></a>`thread_flavor_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_flavor_t = darwin.thread_flavor_t
\`\`\`

</details>

---

### <a id="const-thread-port-t"></a>`thread_port_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_port_t = darwin.thread_port_t
\`\`\`

</details>

---

### <a id="const-thread-state-flavor-t"></a>`thread_state_flavor_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_state_flavor_t = darwin.thread_state_flavor_t
\`\`\`

</details>

---

### <a id="const-thread-state-t"></a>`thread_state_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_state_t = darwin.thread_state_t
\`\`\`

</details>

---

### <a id="const-thread-t"></a>`thread_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const thread_t = darwin.thread_t
\`\`\`

</details>

---

### <a id="const-time-value-t"></a>`time_value_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const time_value_t = darwin.time_value_t
\`\`\`

</details>

---

### <a id="const-vm32-object-id-t"></a>`vm32_object_id_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm32_object_id_t = darwin.vm32_object_id_t
\`\`\`

</details>

---

### <a id="const-vm-behavior-t"></a>`vm_behavior_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_behavior_t = darwin.vm_behavior_t
\`\`\`

</details>

---

### <a id="const-vm-inherit-t"></a>`vm_inherit_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_inherit_t = darwin.vm_inherit_t
\`\`\`

</details>

---

### <a id="const-vm-map-read-t"></a>`vm_map_read_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_map_read_t = darwin.vm_map_read_t
\`\`\`

</details>

---

### <a id="const-vm-object-id-t"></a>`vm_object_id_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_object_id_t = darwin.vm_object_id_t
\`\`\`

</details>

---

### <a id="const-vm-region-flavor-t"></a>`vm_region_flavor_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const vm_region_flavor_t = darwin.vm_region_flavor_t
\`\`\`

</details>

---

### <a id="const--ksiginfo"></a>`_ksiginfo`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _ksiginfo = netbsd._ksiginfo
\`\`\`

</details>

---

### <a id="const--lwp-self"></a>`_lwp_self`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const _lwp_self = netbsd._lwp_self
\`\`\`

</details>

---

### <a id="const-lwpid-t"></a>`lwpid_t`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const lwpid_t = netbsd.lwpid_t
\`\`\`

</details>

---

### <a id="const-lwp-gettid"></a>`lwp_gettid`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const lwp_gettid = dragonfly.lwp_gettid
\`\`\`

</details>

---

### <a id="const-umtx-sleep"></a>`umtx_sleep`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const umtx_sleep = dragonfly.umtx_sleep
\`\`\`

</details>

---

### <a id="const-umtx-wakeup"></a>`umtx_wakeup`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const umtx_wakeup = dragonfly.umtx_wakeup
\`\`\`

</details>

---

### <a id="const-perf-event"></a>`PERF_EVENT`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const PERF_EVENT = serenity.PERF_EVENT
\`\`\`

</details>

---

### <a id="const-disown"></a>`disown`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const disown = serenity.disown
\`\`\`

</details>

---

### <a id="const-profiling-enable"></a>`profiling_enable`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const profiling_enable = serenity.profiling_enable
\`\`\`

</details>

---

### <a id="const-profiling-disable"></a>`profiling_disable`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const profiling_disable = serenity.profiling_disable
\`\`\`

</details>

---

### <a id="const-profiling-free-buffer"></a>`profiling_free_buffer`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const profiling_free_buffer = serenity.profiling_free_buffer
\`\`\`

</details>

---

### <a id="const-futex-wait"></a>`futex_wait`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const futex_wait = serenity.futex_wait
\`\`\`

</details>

---

### <a id="const-futex-wake"></a>`futex_wake`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const futex_wake = serenity.futex_wake
\`\`\`

</details>

---

### <a id="const-purge"></a>`purge`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const purge = serenity.purge
\`\`\`

</details>

---

### <a id="const-perf-event-1"></a>`perf_event`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const perf_event = serenity.perf_event
\`\`\`

</details>

---

### <a id="const-perf-register-string"></a>`perf_register_string`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const perf_register_string = serenity.perf_register_string
\`\`\`

</details>

---

### <a id="const-get-stack-bounds"></a>`get_stack_bounds`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const get_stack_bounds = serenity.get_stack_bounds
\`\`\`

</details>

---

### <a id="const-anon-create"></a>`anon_create`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const anon_create = serenity.anon_create
\`\`\`

</details>

---

### <a id="const-serenity-readlink"></a>`serenity_readlink`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const serenity_readlink = serenity.serenity_readlink
\`\`\`

</details>

---

### <a id="const-serenity-open"></a>`serenity_open`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const serenity_open = serenity.serenity_open
\`\`\`

</details>

---

### <a id="const-getkeymap"></a>`getkeymap`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const getkeymap = serenity.getkeymap
\`\`\`

</details>

---

### <a id="const-setkeymap"></a>`setkeymap`

<details class="declaration-card" open>
<summary>Constant – Expand to review the definition and notes.</summary>

\`\`\`zig
pub const setkeymap = serenity.setkeymap
\`\`\`

</details>

---

## Functions (247)

### <a id="fn-versioncheck"></a>`versionCheck`

<details class="declaration-card" open>
<summary>Function – * If not linking libc, returns `false`</summary>

* If not linking libc, returns `false`.
* If linking musl libc, returns `true`.
* If linking GNU libc (glibc), returns `true` if the target version is greater than or equal to
  `version`.
* If linking Android libc (bionic), returns `true` if the target API level is greater than or
  equal to `version.major`, ignoring other components.
* If linking a libc other than these, returns `false`.

\`\`\`zig
pub inline fn versionCheck(comptime version: std.SemanticVersion) bool {
    return comptime blk: {
        if (!builtin.link_libc) break :blk false;
        if (native_abi.isMusl()) break :blk true;
        if (builtin.target.isGnuLibC()) {
            const ver = builtin.os.versionRange().gnuLibCVersion().?;
            break :blk switch (ver.order(version)) {
                .gt, .eq => true,
                .lt => false,
            };
        } else if (builtin.abi.isAndroid()) {
            break :blk builtin.os.version_range.linux.android >= version.major;
        } else {
            break :blk false;
        }
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `version` | `std.SemanticVersion` | – | – |
| Return | `bool` | – | – |

</details>

---

### <a id="fn-opendir"></a>`opendir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn opendir(pathname: [*:0]const u8) ?*DIR
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pathname` | `[*:0]const u8` | – | – |
| Return | [`?*DIR`](#type-dir) | – | – |

</details>

---

### <a id="fn-fdopendir"></a>`fdopendir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fdopendir(fd: c_int) ?*DIR
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| Return | [`?*DIR`](#type-dir) | – | – |

</details>

---

### <a id="fn-rewinddir"></a>`rewinddir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn rewinddir(dp: *DIR) void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dp` | [`*DIR`](#type-dir) | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-closedir"></a>`closedir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn closedir(dp: *DIR) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dp` | [`*DIR`](#type-dir) | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-telldir"></a>`telldir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn telldir(dp: *DIR) c_long
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dp` | [`*DIR`](#type-dir) | – | – |
| Return | `c_long` | – | – |

</details>

---

### <a id="fn-seekdir"></a>`seekdir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn seekdir(dp: *DIR, loc: c_long) void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dp` | [`*DIR`](#type-dir) | – | – |
| `loc` | `c_long` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-sigwait"></a>`sigwait`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sigwait(set: ?*sigset_t, sig: ?*c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `set` | `?*sigset_t` | – | – |
| `sig` | `?*c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-alarm"></a>`alarm`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn alarm(seconds: c_uint) c_uint
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `seconds` | `c_uint` | – | – |
| Return | `c_uint` | – | – |

</details>

---

### <a id="fn-getpwent"></a>`getpwent`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getpwent() ?*passwd
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `?*passwd` | – | – |

</details>

---

### <a id="fn-endpwent"></a>`endpwent`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn endpwent() void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-setpwent"></a>`setpwent`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setpwent() void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-getpwnam"></a>`getpwnam`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getpwnam(name: [*:0]const u8) ?*passwd
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| Return | `?*passwd` | – | – |

</details>

---

### <a id="fn-getpwnam-r"></a>`getpwnam_r`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getpwnam_r(name: [*:0]const u8, pwd: *passwd, buf: [*]u8, buflen: usize, result: *?*passwd) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `pwd` | `*passwd` | – | – |
| `buf` | `[*]u8` | – | – |
| `buflen` | `usize` | – | – |
| `result` | `*?*passwd` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getpwuid"></a>`getpwuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getpwuid(uid: uid_t) ?*passwd
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uid` | `uid_t` | – | – |
| Return | `?*passwd` | – | – |

</details>

---

### <a id="fn-getpwuid-r"></a>`getpwuid_r`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getpwuid_r(uid: uid_t, pwd: *passwd, buf: [*]u8, buflen: usize, result: *?*passwd) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uid` | `uid_t` | – | – |
| `pwd` | `*passwd` | – | – |
| `buf` | `[*]u8` | – | – |
| `buflen` | `usize` | – | – |
| `result` | `*?*passwd` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getgrent"></a>`getgrent`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getgrent() ?*group
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `?*group` | – | – |

</details>

---

### <a id="fn-setgrent"></a>`setgrent`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setgrent() void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-endgrent"></a>`endgrent`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn endgrent() void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-getgrnam"></a>`getgrnam`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getgrnam(name: [*:0]const u8) ?*passwd
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| Return | `?*passwd` | – | – |

</details>

---

### <a id="fn-getgrnam-r"></a>`getgrnam_r`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getgrnam_r(name: [*:0]const u8, grp: *group, buf: [*]u8, buflen: usize, result: *?*group) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `grp` | `*group` | – | – |
| `buf` | `[*]u8` | – | – |
| `buflen` | `usize` | – | – |
| `result` | `*?*group` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getgrgid"></a>`getgrgid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getgrgid(gid: gid_t) ?*group
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gid` | `gid_t` | – | – |
| Return | `?*group` | – | – |

</details>

---

### <a id="fn-getgrgid-r"></a>`getgrgid_r`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getgrgid_r(gid: gid_t, grp: *group, buf: [*]u8, buflen: usize, result: *?*group) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gid` | `gid_t` | – | – |
| `grp` | `*group` | – | – |
| `buf` | `[*]u8` | – | – |
| `buflen` | `usize` | – | – |
| `result` | `*?*group` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getrlimit64"></a>`getrlimit64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getrlimit64(resource: rlimit_resource, rlim: *rlimit) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `resource` | `rlimit_resource` | – | – |
| `rlim` | `*rlimit` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-lseek64"></a>`lseek64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn lseek64(fd: fd_t, offset: i64, whence: c_int) i64
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `offset` | `i64` | – | – |
| `whence` | `c_int` | – | – |
| Return | `i64` | – | – |

</details>

---

### <a id="fn-mmap64"></a>`mmap64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn mmap64(addr: ?*align(page_size) anyopaque, len: usize, prot: c_uint, flags: c_uint, fd: fd_t, offset: i64) *anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `?*align(page_size) anyopaque` | – | – |
| `len` | `usize` | – | – |
| `prot` | `c_uint` | – | – |
| `flags` | `c_uint` | – | – |
| `fd` | `fd_t` | – | – |
| `offset` | `i64` | – | – |
| Return | `*anyopaque` | – | – |

</details>

---

### <a id="fn-open64"></a>`open64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn open64(path: [*:0]const u8, oflag: O, ...) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `oflag` | `O` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-openat64"></a>`openat64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn openat64(fd: c_int, path: [*:0]const u8, oflag: O, ...) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `oflag` | `O` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-pread64"></a>`pread64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pread64(fd: fd_t, buf: [*]u8, nbyte: usize, offset: i64) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | `[*]u8` | – | – |
| `nbyte` | `usize` | – | – |
| `offset` | `i64` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-preadv64"></a>`preadv64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn preadv64(fd: c_int, iov: [*]const iovec, iovcnt: c_uint, offset: i64) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `iov` | `[*]const iovec` | – | – |
| `iovcnt` | `c_uint` | – | – |
| `offset` | `i64` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-pwrite64"></a>`pwrite64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pwrite64(fd: fd_t, buf: [*]const u8, nbyte: usize, offset: i64) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | `[*]const u8` | – | – |
| `nbyte` | `usize` | – | – |
| `offset` | `i64` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-pwritev64"></a>`pwritev64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pwritev64(fd: c_int, iov: [*]const iovec_const, iovcnt: c_uint, offset: i64) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `iov` | `[*]const iovec_const` | – | – |
| `iovcnt` | `c_uint` | – | – |
| `offset` | `i64` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-sendfile64"></a>`sendfile64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sendfile64(out_fd: fd_t, in_fd: fd_t, offset: ?*i64, count: usize) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `out\_fd` | `fd_t` | – | – |
| `in\_fd` | `fd_t` | – | – |
| `offset` | `?*i64` | – | – |
| `count` | `usize` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-setrlimit64"></a>`setrlimit64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setrlimit64(resource: rlimit_resource, rlim: *const rlimit) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `resource` | `rlimit_resource` | – | – |
| `rlim` | `*const rlimit` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sched-getaffinity"></a>`sched_getaffinity`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sched_getaffinity(pid: c_int, size: usize, set: *cpu_set_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `c_int` | – | – |
| `size` | `usize` | – | – |
| `set` | `*cpu_set_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-eventfd"></a>`eventfd`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn eventfd(initval: c_uint, flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `initval` | `c_uint` | – | – |
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-epoll-ctl"></a>`epoll_ctl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn epoll_ctl(epfd: fd_t, op: c_uint, fd: fd_t, event: ?*epoll_event) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `epfd` | `fd_t` | – | – |
| `op` | `c_uint` | – | – |
| `fd` | `fd_t` | – | – |
| `event` | `?*epoll_event` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-epoll-create1"></a>`epoll_create1`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn epoll_create1(flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-epoll-wait"></a>`epoll_wait`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn epoll_wait(epfd: fd_t, events: [*]epoll_event, maxevents: c_uint, timeout: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `epfd` | `fd_t` | – | – |
| `events` | `[*]epoll_event` | – | – |
| `maxevents` | `c_uint` | – | – |
| `timeout` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-epoll-pwait"></a>`epoll_pwait`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn epoll_pwait(
    epfd: fd_t,
    events: [*]epoll_event,
    maxevents: c_int,
    timeout: c_int,
    sigmask: *const sigset_t,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `epfd` | `fd_t` | – | – |
| `events` | `[*]epoll_event` | – | – |
| `maxevents` | `c_int` | – | – |
| `timeout` | `c_int` | – | – |
| `sigmask` | `*const sigset_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-timerfd-create"></a>`timerfd_create`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn timerfd_create(clockid: timerfd_clockid_t, flags: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `clockid` | `timerfd_clockid_t` | – | – |
| `flags` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-timerfd-settime"></a>`timerfd_settime`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn timerfd_settime(
    fd: c_int,
    flags: c_int,
    new_value: *const itimerspec,
    old_value: ?*itimerspec,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `flags` | `c_int` | – | – |
| `new\_value` | `*const itimerspec` | – | – |
| `old\_value` | `?*itimerspec` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-timerfd-gettime"></a>`timerfd_gettime`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn timerfd_gettime(fd: c_int, curr_value: *itimerspec) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `curr\_value` | `*itimerspec` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-inotify-init1"></a>`inotify_init1`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn inotify_init1(flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-inotify-add-watch"></a>`inotify_add_watch`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn inotify_add_watch(fd: fd_t, pathname: [*:0]const u8, mask: u32) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `pathname` | `[*:0]const u8` | – | – |
| `mask` | `u32` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-inotify-rm-watch"></a>`inotify_rm_watch`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn inotify_rm_watch(fd: fd_t, wd: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `wd` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fstat64"></a>`fstat64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fstat64(fd: fd_t, buf: *Stat) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | [`*Stat`](#const-stat-1) | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fstatat64"></a>`fstatat64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fstatat64(dirfd: fd_t, noalias path: [*:0]const u8, noalias stat_buf: *Stat, flags: u32) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `stat\_buf` | [`*Stat`](#const-stat-1) | – | – |
| `flags` | `u32` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fallocate64"></a>`fallocate64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fallocate64(fd: fd_t, mode: c_int, offset: off_t, len: off_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `mode` | `c_int` | – | – |
| `offset` | `off_t` | – | – |
| `len` | `off_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fopen64"></a>`fopen64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fopen64(noalias filename: [*:0]const u8, noalias modes: [*:0]const u8) ?*FILE
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `filename` | `[*:0]const u8` | – | – |
| `modes` | `[*:0]const u8` | – | – |
| Return | [`?*FILE`](#type-file) | – | – |

</details>

---

### <a id="fn-ftruncate64"></a>`ftruncate64`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn ftruncate64(fd: c_int, length: off_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `length` | `off_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fallocate"></a>`fallocate`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fallocate(fd: fd_t, mode: c_int, offset: off_t, len: off_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `mode` | `c_int` | – | – |
| `offset` | `off_t` | – | – |
| `len` | `off_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getauxval"></a>`getauxval`

<details class="declaration-card" open>
<summary>Function – See std</summary>

See std.elf for constants for this

\`\`\`zig
pub extern "c" fn getauxval(__type: c_ulong) c_ulong
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `\_\_type` | `c_ulong` | – | – |
| Return | `c_ulong` | – | – |

</details>

---

### <a id="fn-dl-iterate-phdr"></a>`dl_iterate_phdr`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dl_iterate_phdr(callback: dl_iterate_phdr_callback, data: ?*anyopaque) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `callback` | `dl_iterate_phdr_callback` | – | – |
| `data` | `?*anyopaque` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-memfd-create"></a>`memfd_create`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn memfd_create(name: [*:0]const u8, flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-signalfd"></a>`signalfd`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn signalfd(fd: fd_t, mask: *const sigset_t, flags: u32) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `mask` | `*const sigset_t` | – | – |
| `flags` | `u32` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-prlimit"></a>`prlimit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn prlimit(pid: pid_t, resource: rlimit_resource, new_limit: *const rlimit, old_limit: *rlimit) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `resource` | `rlimit_resource` | – | – |
| `new\_limit` | `*const rlimit` | – | – |
| `old\_limit` | `*rlimit` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-mincore"></a>`mincore`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn mincore(
    addr: *align(page_size) anyopaque,
    length: usize,
    vec: [*]u8,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `*align(page_size) anyopaque` | – | – |
| `length` | `usize` | – | – |
| `vec` | `[*]u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-madvise"></a>`madvise`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn madvise(
    addr: *align(page_size) anyopaque,
    length: usize,
    advice: u32,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `*align(page_size) anyopaque` | – | – |
| `length` | `usize` | – | – |
| `advice` | `u32` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sigrtmin"></a>`sigrtmin`

<details class="declaration-card" open>
<summary>Function – Zig&#39;s version of SIGRTMIN</summary>

Zig's version of SIGRTMIN.  Actually a function.

\`\`\`zig
pub fn sigrtmin() u8 {
    return switch (native_os) {
        .freebsd => 65,
        .netbsd => 33,
        else => @truncate(@as(c_uint, @bitCast(private.__libc_current_sigrtmin()))),
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `u8` | – | – |

</details>

---

### <a id="fn-sigrtmax"></a>`sigrtmax`

<details class="declaration-card" open>
<summary>Function – Zig&#39;s version of SIGRTMAX</summary>

Zig's version of SIGRTMAX.  Actually a function.

\`\`\`zig
pub fn sigrtmax() u8 {
    return switch (native_os) {
        .freebsd => 126,
        .netbsd => 63,
        else => @truncate(@as(c_uint, @bitCast(private.__libc_current_sigrtmax()))),
    };
}
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `u8` | – | – |

</details>

---

### <a id="fn-fopen"></a>`fopen`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fopen(noalias filename: [*:0]const u8, noalias modes: [*:0]const u8) ?*FILE
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `filename` | `[*:0]const u8` | – | – |
| `modes` | `[*:0]const u8` | – | – |
| Return | [`?*FILE`](#type-file) | – | – |

</details>

---

### <a id="fn-fclose"></a>`fclose`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fclose(stream: *FILE) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `stream` | [`*FILE`](#type-file) | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fwrite"></a>`fwrite`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fwrite(noalias ptr: [*]const u8, size_of_type: usize, item_count: usize, noalias stream: *FILE) usize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `[*]const u8` | – | – |
| `size\_of\_type` | `usize` | – | – |
| `item\_count` | `usize` | – | – |
| `stream` | [`*FILE`](#type-file) | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-fread"></a>`fread`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fread(noalias ptr: [*]u8, size_of_type: usize, item_count: usize, noalias stream: *FILE) usize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ptr` | `[*]u8` | – | – |
| `size\_of\_type` | `usize` | – | – |
| `item\_count` | `usize` | – | – |
| `stream` | [`*FILE`](#type-file) | – | – |
| Return | `usize` | – | – |

</details>

---

### <a id="fn-printf"></a>`printf`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn printf(format: [*:0]const u8, ...) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `format` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-abort"></a>`abort`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn abort() noreturn
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `noreturn` | – | – |

</details>

---

### <a id="fn-exit"></a>`exit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn exit(code: c_int) noreturn
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `code` | `c_int` | – | – |
| Return | `noreturn` | – | – |

</details>

---

### <a id="fn--exit"></a>`_exit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn _exit(code: c_int) noreturn
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `code` | `c_int` | – | – |
| Return | `noreturn` | – | – |

</details>

---

### <a id="fn-isatty"></a>`isatty`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn isatty(fd: fd_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-lseek"></a>`lseek`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn lseek(fd: fd_t, offset: off_t, whence: whence_t) off_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `offset` | `off_t` | – | – |
| `whence` | `whence_t` | – | – |
| Return | `off_t` | – | – |

</details>

---

### <a id="fn-open"></a>`open`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn open(path: [*:0]const u8, oflag: O, ...) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `oflag` | `O` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-openat"></a>`openat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn openat(fd: c_int, path: [*:0]const u8, oflag: O, ...) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `oflag` | `O` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-ftruncate"></a>`ftruncate`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn ftruncate(fd: c_int, length: off_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `length` | `off_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-raise"></a>`raise`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn raise(sig: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sig` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-read"></a>`read`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn read(fd: fd_t, buf: [*]u8, nbyte: usize) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | `[*]u8` | – | – |
| `nbyte` | `usize` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-readv"></a>`readv`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn readv(fd: c_int, iov: [*]const iovec, iovcnt: c_uint) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `iov` | `[*]const iovec` | – | – |
| `iovcnt` | `c_uint` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-pread"></a>`pread`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pread(fd: fd_t, buf: [*]u8, nbyte: usize, offset: off_t) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | `[*]u8` | – | – |
| `nbyte` | `usize` | – | – |
| `offset` | `off_t` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-preadv"></a>`preadv`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn preadv(fd: c_int, iov: [*]const iovec, iovcnt: c_uint, offset: off_t) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `iov` | `[*]const iovec` | – | – |
| `iovcnt` | `c_uint` | – | – |
| `offset` | `off_t` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-writev"></a>`writev`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn writev(fd: c_int, iov: [*]const iovec_const, iovcnt: c_uint) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `iov` | `[*]const iovec_const` | – | – |
| `iovcnt` | `c_uint` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-pwritev"></a>`pwritev`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pwritev(fd: c_int, iov: [*]const iovec_const, iovcnt: c_uint, offset: off_t) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| `iov` | `[*]const iovec_const` | – | – |
| `iovcnt` | `c_uint` | – | – |
| `offset` | `off_t` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-write"></a>`write`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn write(fd: fd_t, buf: [*]const u8, nbyte: usize) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | `[*]const u8` | – | – |
| `nbyte` | `usize` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-pwrite"></a>`pwrite`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pwrite(fd: fd_t, buf: [*]const u8, nbyte: usize, offset: off_t) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `buf` | `[*]const u8` | – | – |
| `nbyte` | `usize` | – | – |
| `offset` | `off_t` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-mmap"></a>`mmap`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn mmap(addr: ?*align(page_size) anyopaque, len: usize, prot: c_uint, flags: MAP, fd: fd_t, offset: off_t) *anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `?*align(page_size) anyopaque` | – | – |
| `len` | `usize` | – | – |
| `prot` | `c_uint` | – | – |
| `flags` | [`MAP`](#const-map) | – | – |
| `fd` | `fd_t` | – | – |
| `offset` | `off_t` | – | – |
| Return | `*anyopaque` | – | – |

</details>

---

### <a id="fn-munmap"></a>`munmap`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn munmap(addr: *align(page_size) const anyopaque, len: usize) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `*align(page_size) const anyopaque` | – | – |
| `len` | `usize` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-mremap"></a>`mremap`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn mremap(addr: ?*align(page_size) const anyopaque, old_len: usize, new_len: usize, flags: MREMAP, ...) *anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `?*align(page_size) const anyopaque` | – | – |
| `old\_len` | `usize` | – | – |
| `new\_len` | `usize` | – | – |
| `flags` | [`MREMAP`](#fn-mremap) | – | – |
| Return | `*anyopaque` | – | – |

</details>

---

### <a id="fn-mprotect"></a>`mprotect`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn mprotect(addr: *align(page_size) anyopaque, len: usize, prot: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `*align(page_size) anyopaque` | – | – |
| `len` | `usize` | – | – |
| `prot` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-link"></a>`link`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn link(oldpath: [*:0]const u8, newpath: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `oldpath` | `[*:0]const u8` | – | – |
| `newpath` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-linkat"></a>`linkat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn linkat(oldfd: fd_t, oldpath: [*:0]const u8, newfd: fd_t, newpath: [*:0]const u8, flags: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `oldfd` | `fd_t` | – | – |
| `oldpath` | `[*:0]const u8` | – | – |
| `newfd` | `fd_t` | – | – |
| `newpath` | `[*:0]const u8` | – | – |
| `flags` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-unlink"></a>`unlink`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn unlink(path: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-unlinkat"></a>`unlinkat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn unlinkat(dirfd: fd_t, path: [*:0]const u8, flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getcwd"></a>`getcwd`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getcwd(buf: [*]u8, size: usize) ?[*]u8
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `[*]u8` | – | – |
| `size` | `usize` | – | – |
| Return | `?[*]u8` | – | – |

</details>

---

### <a id="fn-waitpid"></a>`waitpid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn waitpid(pid: pid_t, status: ?*c_int, options: c_int) pid_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `status` | `?*c_int` | – | – |
| `options` | `c_int` | – | – |
| Return | `pid_t` | – | – |

</details>

---

### <a id="fn-wait4"></a>`wait4`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn wait4(pid: pid_t, status: ?*c_int, options: c_int, ru: ?*rusage) pid_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `status` | `?*c_int` | – | – |
| `options` | `c_int` | – | – |
| `ru` | `?*rusage` | – | – |
| Return | `pid_t` | – | – |

</details>

---

### <a id="fn-access"></a>`access`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn access(path: [*:0]const u8, mode: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `mode` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-faccessat"></a>`faccessat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn faccessat(dirfd: fd_t, path: [*:0]const u8, mode: c_uint, flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `mode` | `c_uint` | – | – |
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-pipe"></a>`pipe`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pipe(fds: *[2]fd_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fds` | `*[2]fd_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-mkdir"></a>`mkdir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn mkdir(path: [*:0]const u8, mode: mode_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-mkdirat"></a>`mkdirat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn mkdirat(dirfd: fd_t, path: [*:0]const u8, mode: mode_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-symlink"></a>`symlink`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn symlink(existing: [*:0]const u8, new: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `existing` | `[*:0]const u8` | – | – |
| `new` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-symlinkat"></a>`symlinkat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn symlinkat(oldpath: [*:0]const u8, newdirfd: fd_t, newpath: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `oldpath` | `[*:0]const u8` | – | – |
| `newdirfd` | `fd_t` | – | – |
| `newpath` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-rename"></a>`rename`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn rename(old: [*:0]const u8, new: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old` | `[*:0]const u8` | – | – |
| `new` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-renameat"></a>`renameat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn renameat(olddirfd: fd_t, old: [*:0]const u8, newdirfd: fd_t, new: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `olddirfd` | `fd_t` | – | – |
| `old` | `[*:0]const u8` | – | – |
| `newdirfd` | `fd_t` | – | – |
| `new` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-chdir"></a>`chdir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn chdir(path: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fchdir"></a>`fchdir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fchdir(fd: fd_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-execve"></a>`execve`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn execve(path: [*:0]const u8, argv: [*:null]const ?[*:0]const u8, envp: [*:null]const ?[*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `argv` | `[*:null]const ?[*:0]const u8` | – | – |
| `envp` | `[*:null]const ?[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-dup"></a>`dup`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dup(fd: fd_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-dup2"></a>`dup2`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dup2(old_fd: fd_t, new_fd: fd_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old\_fd` | `fd_t` | – | – |
| `new\_fd` | `fd_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-dup3"></a>`dup3`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dup3(old: c_int, new: c_int, flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `old` | `c_int` | – | – |
| `new` | `c_int` | – | – |
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-readlink"></a>`readlink`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn readlink(noalias path: [*:0]const u8, noalias buf: [*]u8, bufsize: usize) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `buf` | `[*]u8` | – | – |
| `bufsize` | `usize` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-readlinkat"></a>`readlinkat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn readlinkat(dirfd: fd_t, noalias path: [*:0]const u8, noalias buf: [*]u8, bufsize: usize) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `buf` | `[*]u8` | – | – |
| `bufsize` | `usize` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-chmod"></a>`chmod`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn chmod(path: [*:0]const u8, mode: mode_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fchmod"></a>`fchmod`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fchmod(fd: fd_t, mode: mode_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `mode` | `mode_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fchmodat"></a>`fchmodat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fchmodat(fd: fd_t, path: [*:0]const u8, mode: mode_t, flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `path` | `[*:0]const u8` | – | – |
| `mode` | `mode_t` | – | – |
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fchown"></a>`fchown`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fchown(fd: fd_t, owner: uid_t, group: gid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `owner` | `uid_t` | – | – |
| `group` | `gid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-umask"></a>`umask`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn umask(mode: mode_t) mode_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `mode` | `mode_t` | – | – |
| Return | `mode_t` | – | – |

</details>

---

### <a id="fn-rmdir"></a>`rmdir`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn rmdir(path: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getenv"></a>`getenv`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getenv(name: [*:0]const u8) ?[*:0]u8
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| Return | `?[*:0]u8` | – | – |

</details>

---

### <a id="fn-sysctl"></a>`sysctl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sysctl(name: [*]const c_int, namelen: c_uint, oldp: ?*anyopaque, oldlenp: ?*usize, newp: ?*anyopaque, newlen: usize) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*]const c_int` | – | – |
| `namelen` | `c_uint` | – | – |
| `oldp` | `?*anyopaque` | – | – |
| `oldlenp` | `?*usize` | – | – |
| `newp` | `?*anyopaque` | – | – |
| `newlen` | `usize` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sysctlbyname"></a>`sysctlbyname`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sysctlbyname(name: [*:0]const u8, oldp: ?*anyopaque, oldlenp: ?*usize, newp: ?*anyopaque, newlen: usize) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `oldp` | `?*anyopaque` | – | – |
| `oldlenp` | `?*usize` | – | – |
| `newp` | `?*anyopaque` | – | – |
| `newlen` | `usize` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sysctlnametomib"></a>`sysctlnametomib`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sysctlnametomib(name: [*:0]const u8, mibp: ?*c_int, sizep: ?*usize) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `mibp` | `?*c_int` | – | – |
| `sizep` | `?*usize` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-tcgetattr"></a>`tcgetattr`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn tcgetattr(fd: fd_t, termios_p: *termios) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `termios\_p` | `*termios` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-tcsetattr"></a>`tcsetattr`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn tcsetattr(fd: fd_t, optional_action: TCSA, termios_p: *const termios) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `optional\_action` | [`TCSA`](#const-tcsa) | – | – |
| `termios\_p` | `*const termios` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fcntl"></a>`fcntl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fcntl(fd: fd_t, cmd: c_int, ...) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `cmd` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-ioctl"></a>`ioctl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn ioctl(fd: fd_t, request: c_int, ...) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `request` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-uname"></a>`uname`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn uname(buf: *utsname) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `*utsname` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-gethostname"></a>`gethostname`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn gethostname(name: [*]u8, len: usize) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*]u8` | – | – |
| `len` | `usize` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-shutdown"></a>`shutdown`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn shutdown(socket: fd_t, how: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `socket` | `fd_t` | – | – |
| `how` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-bind"></a>`bind`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn bind(socket: fd_t, address: ?*const sockaddr, address_len: socklen_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `socket` | `fd_t` | – | – |
| `address` | `?*const sockaddr` | – | – |
| `address\_len` | `socklen_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-socketpair"></a>`socketpair`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn socketpair(domain: c_uint, sock_type: c_uint, protocol: c_uint, sv: *[2]fd_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `domain` | `c_uint` | – | – |
| `sock\_type` | `c_uint` | – | – |
| `protocol` | `c_uint` | – | – |
| `sv` | `*[2]fd_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-listen"></a>`listen`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn listen(sockfd: fd_t, backlog: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `backlog` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getsockname"></a>`getsockname`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getsockname(sockfd: fd_t, noalias addr: *sockaddr, noalias addrlen: *socklen_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `addr` | `*sockaddr` | – | – |
| `addrlen` | `*socklen_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getpeername"></a>`getpeername`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getpeername(sockfd: fd_t, noalias addr: *sockaddr, noalias addrlen: *socklen_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `addr` | `*sockaddr` | – | – |
| `addrlen` | `*socklen_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-connect"></a>`connect`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn connect(sockfd: fd_t, sock_addr: *const sockaddr, addrlen: socklen_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `sock\_addr` | `*const sockaddr` | – | – |
| `addrlen` | `socklen_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-accept"></a>`accept`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn accept(sockfd: fd_t, noalias addr: ?*sockaddr, noalias addrlen: ?*socklen_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `addr` | `?*sockaddr` | – | – |
| `addrlen` | `?*socklen_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-accept4"></a>`accept4`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn accept4(sockfd: fd_t, noalias addr: ?*sockaddr, noalias addrlen: ?*socklen_t, flags: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `addr` | `?*sockaddr` | – | – |
| `addrlen` | `?*socklen_t` | – | – |
| `flags` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getsockopt"></a>`getsockopt`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getsockopt(sockfd: fd_t, level: i32, optname: u32, noalias optval: ?*anyopaque, noalias optlen: *socklen_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `level` | `i32` | – | – |
| `optname` | `u32` | – | – |
| `optval` | `?*anyopaque` | – | – |
| `optlen` | `*socklen_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setsockopt"></a>`setsockopt`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setsockopt(sockfd: fd_t, level: i32, optname: u32, optval: ?*const anyopaque, optlen: socklen_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `level` | `i32` | – | – |
| `optname` | `u32` | – | – |
| `optval` | `?*const anyopaque` | – | – |
| `optlen` | `socklen_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-send"></a>`send`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn send(sockfd: fd_t, buf: *const anyopaque, len: usize, flags: u32) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `buf` | `*const anyopaque` | – | – |
| `len` | `usize` | – | – |
| `flags` | `u32` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-sendto"></a>`sendto`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sendto(
    sockfd: fd_t,
    buf: *const anyopaque,
    len: usize,
    flags: u32,
    dest_addr: ?*const sockaddr,
    addrlen: socklen_t,
) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `buf` | `*const anyopaque` | – | – |
| `len` | `usize` | – | – |
| `flags` | `u32` | – | – |
| `dest\_addr` | `?*const sockaddr` | – | – |
| `addrlen` | `socklen_t` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-sendmsg"></a>`sendmsg`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sendmsg(sockfd: fd_t, msg: *const msghdr_const, flags: u32) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `msg` | `*const msghdr_const` | – | – |
| `flags` | `u32` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-recv"></a>`recv`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn recv(
    sockfd: fd_t,
    arg1: ?*anyopaque,
    arg2: usize,
    arg3: c_int,
) if (native_os == .windows) c_int else isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `arg1` | `?*anyopaque` | – | – |
| `arg2` | `usize` | – | – |
| `arg3` | `c_int` | – | – |
| Return | `if (native_os == .windows) c_int else isize` | – | – |

</details>

---

### <a id="fn-recvfrom"></a>`recvfrom`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn recvfrom(
    sockfd: fd_t,
    noalias buf: *anyopaque,
    len: usize,
    flags: u32,
    noalias src_addr: ?*sockaddr,
    noalias addrlen: ?*socklen_t,
) if (native_os == .windows) c_int else isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `buf` | `*anyopaque` | – | – |
| `len` | `usize` | – | – |
| `flags` | `u32` | – | – |
| `src\_addr` | `?*sockaddr` | – | – |
| `addrlen` | `?*socklen_t` | – | – |
| Return | `if (native_os == .windows) c_int else isize` | – | – |

</details>

---

### <a id="fn-recvmsg"></a>`recvmsg`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn recvmsg(sockfd: fd_t, msg: *msghdr, flags: u32) isize
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sockfd` | `fd_t` | – | – |
| `msg` | `*msghdr` | – | – |
| `flags` | `u32` | – | – |
| Return | `isize` | – | – |

</details>

---

### <a id="fn-kill"></a>`kill`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn kill(pid: pid_t, sig: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `sig` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setuid"></a>`setuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setuid(uid: uid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `uid` | `uid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setgid"></a>`setgid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setgid(gid: gid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `gid` | `gid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-seteuid"></a>`seteuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn seteuid(euid: uid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `euid` | `uid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setegid"></a>`setegid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setegid(egid: gid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `egid` | `gid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setreuid"></a>`setreuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setreuid(ruid: uid_t, euid: uid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ruid` | `uid_t` | – | – |
| `euid` | `uid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setregid"></a>`setregid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setregid(rgid: gid_t, egid: gid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rgid` | `gid_t` | – | – |
| `egid` | `gid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setresuid"></a>`setresuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setresuid(ruid: uid_t, euid: uid_t, suid: uid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ruid` | `uid_t` | – | – |
| `euid` | `uid_t` | – | – |
| `suid` | `uid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setresgid"></a>`setresgid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setresgid(rgid: gid_t, egid: gid_t, sgid: gid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rgid` | `gid_t` | – | – |
| `egid` | `gid_t` | – | – |
| `sgid` | `gid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setpgid"></a>`setpgid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setpgid(pid: pid_t, pgid: pid_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `pid` | `pid_t` | – | – |
| `pgid` | `pid_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getuid"></a>`getuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getuid() uid_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `uid_t` | – | – |

</details>

---

### <a id="fn-geteuid"></a>`geteuid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn geteuid() uid_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `uid_t` | – | – |

</details>

---

### <a id="fn-malloc"></a>`malloc`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn malloc(usize) ?*anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `?*anyopaque` | – | – |

</details>

---

### <a id="fn-calloc"></a>`calloc`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn calloc(usize, usize) ?*anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `?*anyopaque` | – | – |

</details>

---

### <a id="fn-realloc"></a>`realloc`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn realloc(?*anyopaque, usize) ?*anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `?*anyopaque` | – | – |

</details>

---

### <a id="fn-free"></a>`free`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn free(?*anyopaque) void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-futimes"></a>`futimes`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn futimes(fd: fd_t, times: ?*[2]timeval) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `times` | `?*[2]timeval` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-utimes"></a>`utimes`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn utimes(path: [*:0]const u8, times: ?*[2]timeval) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `[*:0]const u8` | – | – |
| `times` | `?*[2]timeval` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-utimensat"></a>`utimensat`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn utimensat(dirfd: fd_t, pathname: [*:0]const u8, times: ?*[2]timespec, flags: u32) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `dirfd` | `fd_t` | – | – |
| `pathname` | `[*:0]const u8` | – | – |
| `times` | `?*[2]timespec` | – | – |
| `flags` | `u32` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-futimens"></a>`futimens`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn futimens(fd: fd_t, times: ?*const [2]timespec) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `fd_t` | – | – |
| `times` | `?*const [2]timespec` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-pthread-create"></a>`pthread_create`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_create(
    noalias newthread: *pthread_t,
    noalias attr: ?*const pthread_attr_t,
    start_routine: *const fn (?*anyopaque) callconv(.c) ?*anyopaque,
    noalias arg: ?*anyopaque,
) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `newthread` | `*pthread_t` | – | – |
| `attr` | `?*const pthread_attr_t` | – | – |
| `start\_routine` | `*const fn (?*anyopaque) callconv(.c) ?*anyopaque` | – | – |
| `arg` | `?*anyopaque` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-attr-init"></a>`pthread_attr_init`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_attr_init(attr: *pthread_attr_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `attr` | `*pthread_attr_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-attr-setstack"></a>`pthread_attr_setstack`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_attr_setstack(attr: *pthread_attr_t, stackaddr: *anyopaque, stacksize: usize) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `attr` | `*pthread_attr_t` | – | – |
| `stackaddr` | `*anyopaque` | – | – |
| `stacksize` | `usize` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-attr-setstacksize"></a>`pthread_attr_setstacksize`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_attr_setstacksize(attr: *pthread_attr_t, stacksize: usize) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `attr` | `*pthread_attr_t` | – | – |
| `stacksize` | `usize` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-attr-setguardsize"></a>`pthread_attr_setguardsize`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_attr_setguardsize(attr: *pthread_attr_t, guardsize: usize) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `attr` | `*pthread_attr_t` | – | – |
| `guardsize` | `usize` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-attr-destroy"></a>`pthread_attr_destroy`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_attr_destroy(attr: *pthread_attr_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `attr` | `*pthread_attr_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-self"></a>`pthread_self`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_self() pthread_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `pthread_t` | – | – |

</details>

---

### <a id="fn-pthread-join"></a>`pthread_join`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_join(thread: pthread_t, arg_return: ?*?*anyopaque) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `thread` | `pthread_t` | – | – |
| `arg\_return` | `?*?*anyopaque` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-detach"></a>`pthread_detach`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_detach(thread: pthread_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `thread` | `pthread_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-atfork"></a>`pthread_atfork`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_atfork(
    prepare: ?*const fn () callconv(.c) void,
    parent: ?*const fn () callconv(.c) void,
    child: ?*const fn () callconv(.c) void,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `prepare` | `?*const fn () callconv(.c) void` | – | – |
| `parent` | `?*const fn () callconv(.c) void` | – | – |
| `child` | `?*const fn () callconv(.c) void` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-pthread-key-create"></a>`pthread_key_create`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_key_create(
    key: *pthread_key_t,
    destructor: ?*const fn (value: *anyopaque) callconv(.c) void,
) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `key` | `*pthread_key_t` | – | – |
| `destructor` | `?*const fn (value: *anyopaque) callconv(.c) void` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-key-delete"></a>`pthread_key_delete`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_key_delete(key: pthread_key_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `key` | `pthread_key_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-getspecific"></a>`pthread_getspecific`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_getspecific(key: pthread_key_t) ?*anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `key` | `pthread_key_t` | – | – |
| Return | `?*anyopaque` | – | – |

</details>

---

### <a id="fn-pthread-setspecific"></a>`pthread_setspecific`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_setspecific(key: pthread_key_t, value: ?*anyopaque) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `key` | `pthread_key_t` | – | – |
| `value` | `?*anyopaque` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-pthread-sigmask"></a>`pthread_sigmask`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_sigmask(how: c_int, set: *const sigset_t, oldset: *sigset_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `how` | `c_int` | – | – |
| `set` | `*const sigset_t` | – | – |
| `oldset` | `*sigset_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-pthread-getname-np"></a>`pthread_getname_np`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_getname_np(thread: pthread_t, name: [*:0]u8, len: usize) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `thread` | `pthread_t` | – | – |
| `name` | `[*:0]u8` | – | – |
| `len` | `usize` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sem-init"></a>`sem_init`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_init(sem: *sem_t, pshared: c_int, value: c_uint) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sem` | `*sem_t` | – | – |
| `pshared` | `c_int` | – | – |
| `value` | `c_uint` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sem-destroy"></a>`sem_destroy`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_destroy(sem: *sem_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sem` | `*sem_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sem-open"></a>`sem_open`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_open(name: [*:0]const u8, flag: c_int, mode: mode_t, value: c_uint) *sem_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `flag` | `c_int` | – | – |
| `mode` | `mode_t` | – | – |
| `value` | `c_uint` | – | – |
| Return | `*sem_t` | – | – |

</details>

---

### <a id="fn-sem-close"></a>`sem_close`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_close(sem: *sem_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sem` | `*sem_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sem-post"></a>`sem_post`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_post(sem: *sem_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sem` | `*sem_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sem-wait"></a>`sem_wait`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_wait(sem: *sem_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sem` | `*sem_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sem-trywait"></a>`sem_trywait`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_trywait(sem: *sem_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sem` | `*sem_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sem-timedwait"></a>`sem_timedwait`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_timedwait(sem: *sem_t, abs_timeout: *const timespec) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sem` | `*sem_t` | – | – |
| `abs\_timeout` | `*const timespec` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-sem-getvalue"></a>`sem_getvalue`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sem_getvalue(sem: *sem_t, sval: *c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `sem` | `*sem_t` | – | – |
| `sval` | `*c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-shm-open"></a>`shm_open`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn shm_open(name: [*:0]const u8, flag: c_int, mode: mode_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| `flag` | `c_int` | – | – |
| `mode` | `mode_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-shm-unlink"></a>`shm_unlink`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn shm_unlink(name: [*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `name` | `[*:0]const u8` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-kqueue"></a>`kqueue`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn kqueue() c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-kevent"></a>`kevent`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn kevent(
    kq: c_int,
    changelist: [*]const Kevent,
    nchanges: c_int,
    eventlist: [*]Kevent,
    nevents: c_int,
    timeout: ?*const timespec,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `kq` | `c_int` | – | – |
| `changelist` | `[*]const Kevent` | – | – |
| `nchanges` | `c_int` | – | – |
| `eventlist` | [`[*]Kevent`](#fn-kevent) | – | – |
| `nevents` | `c_int` | – | – |
| `timeout` | `?*const timespec` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-port-create"></a>`port_create`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn port_create() port_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `port_t` | – | – |

</details>

---

### <a id="fn-port-associate"></a>`port_associate`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn port_associate(
    port: port_t,
    source: u32,
    object: usize,
    events: u32,
    user_var: ?*anyopaque,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `port` | `port_t` | – | – |
| `source` | `u32` | – | – |
| `object` | `usize` | – | – |
| `events` | `u32` | – | – |
| `user\_var` | `?*anyopaque` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-port-dissociate"></a>`port_dissociate`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn port_dissociate(port: port_t, source: u32, object: usize) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `port` | `port_t` | – | – |
| `source` | `u32` | – | – |
| `object` | `usize` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-port-send"></a>`port_send`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn port_send(port: port_t, events: u32, user_var: ?*anyopaque) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `port` | `port_t` | – | – |
| `events` | `u32` | – | – |
| `user\_var` | `?*anyopaque` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-port-sendn"></a>`port_sendn`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn port_sendn(
    ports: [*]port_t,
    errors: []u32,
    num_ports: u32,
    events: u32,
    user_var: ?*anyopaque,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ports` | `[*]port_t` | – | – |
| `errors` | `[]u32` | – | – |
| `num\_ports` | `u32` | – | – |
| `events` | `u32` | – | – |
| `user\_var` | `?*anyopaque` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-port-get"></a>`port_get`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn port_get(port: port_t, event: *port_event, timeout: ?*timespec) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `port` | `port_t` | – | – |
| `event` | `*port_event` | – | – |
| `timeout` | `?*timespec` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-port-getn"></a>`port_getn`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn port_getn(
    port: port_t,
    event_list: []port_event,
    max_events: u32,
    events_retrieved: *u32,
    timeout: ?*timespec,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `port` | `port_t` | – | – |
| `event\_list` | `[]port_event` | – | – |
| `max\_events` | `u32` | – | – |
| `events\_retrieved` | `*u32` | – | – |
| `timeout` | `?*timespec` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-port-alert"></a>`port_alert`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn port_alert(port: port_t, flags: u32, events: u32, user_var: ?*anyopaque) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `port` | `port_t` | – | – |
| `flags` | `u32` | – | – |
| `events` | `u32` | – | – |
| `user\_var` | `?*anyopaque` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getaddrinfo"></a>`getaddrinfo`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getaddrinfo(
    noalias node: ?[*:0]const u8,
    noalias service: ?[*:0]const u8,
    noalias hints: ?*const addrinfo,
    /// On Linux, `res` will not be modified on error and `freeaddrinfo` will
    /// potentially crash if you pass it an undefined pointer
    noalias res: *?*addrinfo,
) EAI
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `node` | `?[*:0]const u8` | – | – |
| `service` | `?[*:0]const u8` | – | – |
| `hints` | `?*const addrinfo` | – | – |
| `res` | `*?*addrinfo` | – | – |
| Return | [`EAI`](#const-eai) | – | – |

</details>

---

### <a id="fn-freeaddrinfo"></a>`freeaddrinfo`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn freeaddrinfo(res: *addrinfo) void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `res` | `*addrinfo` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-getnameinfo"></a>`getnameinfo`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getnameinfo(
    noalias addr: *const sockaddr,
    addrlen: socklen_t,
    noalias host: ?[*]u8,
    hostlen: socklen_t,
    noalias serv: ?[*]u8,
    servlen: socklen_t,
    flags: NI,
) EAI
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `addr` | `*const sockaddr` | – | – |
| `addrlen` | `socklen_t` | – | – |
| `host` | `?[*]u8` | – | – |
| `hostlen` | `socklen_t` | – | – |
| `serv` | `?[*]u8` | – | – |
| `servlen` | `socklen_t` | – | – |
| `flags` | [`NI`](#const-ni) | – | – |
| Return | [`EAI`](#const-eai) | – | – |

</details>

---

### <a id="fn-gai-strerror"></a>`gai_strerror`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn gai_strerror(errcode: EAI) [*:0]const u8
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `errcode` | [`EAI`](#const-eai) | – | – |
| Return | `[*:0]const u8` | – | – |

</details>

---

### <a id="fn-poll"></a>`poll`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn poll(fds: [*]pollfd, nfds: nfds_t, timeout: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fds` | `[*]pollfd` | – | – |
| `nfds` | `nfds_t` | – | – |
| `timeout` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-ppoll"></a>`ppoll`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn ppoll(fds: [*]pollfd, nfds: nfds_t, timeout: ?*const timespec, sigmask: ?*const sigset_t) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fds` | `[*]pollfd` | – | – |
| `nfds` | `nfds_t` | – | – |
| `timeout` | `?*const timespec` | – | – |
| `sigmask` | `?*const sigset_t` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-dn-expand"></a>`dn_expand`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dn_expand(
    msg: [*:0]const u8,
    eomorig: [*:0]const u8,
    comp_dn: [*:0]const u8,
    exp_dn: [*:0]u8,
    length: c_int,
) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `msg` | `[*:0]const u8` | – | – |
| `eomorig` | `[*:0]const u8` | – | – |
| `comp\_dn` | `[*:0]const u8` | – | – |
| `exp\_dn` | `[*:0]u8` | – | – |
| `length` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-pthread-mutex-lock"></a>`pthread_mutex_lock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_mutex_lock(mutex: *pthread_mutex_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `mutex` | `*pthread_mutex_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-mutex-unlock"></a>`pthread_mutex_unlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_mutex_unlock(mutex: *pthread_mutex_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `mutex` | `*pthread_mutex_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-mutex-trylock"></a>`pthread_mutex_trylock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_mutex_trylock(mutex: *pthread_mutex_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `mutex` | `*pthread_mutex_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-mutex-destroy"></a>`pthread_mutex_destroy`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_mutex_destroy(mutex: *pthread_mutex_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `mutex` | `*pthread_mutex_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-cond-wait"></a>`pthread_cond_wait`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_cond_wait(noalias cond: *pthread_cond_t, noalias mutex: *pthread_mutex_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `cond` | `*pthread_cond_t` | – | – |
| `mutex` | `*pthread_mutex_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-cond-timedwait"></a>`pthread_cond_timedwait`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_cond_timedwait(noalias cond: *pthread_cond_t, noalias mutex: *pthread_mutex_t, noalias abstime: *const timespec) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `cond` | `*pthread_cond_t` | – | – |
| `mutex` | `*pthread_mutex_t` | – | – |
| `abstime` | `*const timespec` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-cond-signal"></a>`pthread_cond_signal`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_cond_signal(cond: *pthread_cond_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `cond` | `*pthread_cond_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-cond-broadcast"></a>`pthread_cond_broadcast`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_cond_broadcast(cond: *pthread_cond_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `cond` | `*pthread_cond_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-cond-destroy"></a>`pthread_cond_destroy`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_cond_destroy(cond: *pthread_cond_t) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `cond` | `*pthread_cond_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-rwlock-destroy"></a>`pthread_rwlock_destroy`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_rwlock_destroy(rwl: *pthread_rwlock_t) callconv(.c) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rwl` | `*pthread_rwlock_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-rwlock-rdlock"></a>`pthread_rwlock_rdlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_rwlock_rdlock(rwl: *pthread_rwlock_t) callconv(.c) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rwl` | `*pthread_rwlock_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-rwlock-wrlock"></a>`pthread_rwlock_wrlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_rwlock_wrlock(rwl: *pthread_rwlock_t) callconv(.c) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rwl` | `*pthread_rwlock_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-rwlock-tryrdlock"></a>`pthread_rwlock_tryrdlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_rwlock_tryrdlock(rwl: *pthread_rwlock_t) callconv(.c) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rwl` | `*pthread_rwlock_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-rwlock-trywrlock"></a>`pthread_rwlock_trywrlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_rwlock_trywrlock(rwl: *pthread_rwlock_t) callconv(.c) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rwl` | `*pthread_rwlock_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-pthread-rwlock-unlock"></a>`pthread_rwlock_unlock`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_rwlock_unlock(rwl: *pthread_rwlock_t) callconv(.c) E
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `rwl` | `*pthread_rwlock_t` | – | – |
| Return | `E` | – | – |

</details>

---

### <a id="fn-dlopen"></a>`dlopen`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dlopen(path: ?[*:0]const u8, mode: RTLD) ?*anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `path` | `?[*:0]const u8` | – | – |
| `mode` | [`RTLD`](#const-rtld) | – | – |
| Return | `?*anyopaque` | – | – |

</details>

---

### <a id="fn-dlclose"></a>`dlclose`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dlclose(handle: *anyopaque) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `handle` | `*anyopaque` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-dlsym"></a>`dlsym`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dlsym(handle: ?*anyopaque, symbol: [*:0]const u8) ?*anyopaque
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `handle` | `?*anyopaque` | – | – |
| `symbol` | `[*:0]const u8` | – | – |
| Return | `?*anyopaque` | – | – |

</details>

---

### <a id="fn-dlerror"></a>`dlerror`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn dlerror() ?[*:0]u8
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `?[*:0]u8` | – | – |

</details>

---

### <a id="fn-sync"></a>`sync`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn sync() void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-syncfs"></a>`syncfs`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn syncfs(fd: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fsync"></a>`fsync`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fsync(fd: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fdatasync"></a>`fdatasync`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fdatasync(fd: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `fd` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-prctl"></a>`prctl`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn prctl(option: c_int, ...) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `option` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getrlimit"></a>`getrlimit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getrlimit(resource: rlimit_resource, rlim: *rlimit) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `resource` | `rlimit_resource` | – | – |
| `rlim` | `*rlimit` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-setrlimit"></a>`setrlimit`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setrlimit(resource: rlimit_resource, rlim: *const rlimit) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `resource` | `rlimit_resource` | – | – |
| `rlim` | `*const rlimit` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-fmemopen"></a>`fmemopen`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn fmemopen(noalias buf: ?*anyopaque, size: usize, noalias mode: [*:0]const u8) ?*FILE
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `buf` | `?*anyopaque` | – | – |
| `size` | `usize` | – | – |
| `mode` | `[*:0]const u8` | – | – |
| Return | [`?*FILE`](#type-file) | – | – |

</details>

---

### <a id="fn-syslog"></a>`syslog`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn syslog(priority: c_int, message: [*:0]const u8, ...) void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `priority` | `c_int` | – | – |
| `message` | `[*:0]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-openlog"></a>`openlog`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn openlog(ident: [*:0]const u8, logopt: c_int, facility: c_int) void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `ident` | `[*:0]const u8` | – | – |
| `logopt` | `c_int` | – | – |
| `facility` | `c_int` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-closelog"></a>`closelog`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn closelog() void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `void` | – | – |

</details>

---

### <a id="fn-setlogmask"></a>`setlogmask`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setlogmask(maskpri: c_int) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `maskpri` | `c_int` | – | – |
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-if-nametoindex"></a>`if_nametoindex`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn if_nametoindex([*:0]const u8) c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-getpid"></a>`getpid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getpid() pid_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `pid_t` | – | – |

</details>

---

### <a id="fn-getppid"></a>`getppid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn getppid() pid_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `pid_t` | – | – |

</details>

---

### <a id="fn-setsid"></a>`setsid`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setsid() pid_t
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `pid_t` | – | – |

</details>

---

### <a id="fn-setlocale"></a>`setlocale`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn setlocale(category: LC, locale: ?[*:0]const u8) ?[*:0]const u8
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `category` | [`LC`](#type-lc) | – | – |
| `locale` | `?[*:0]const u8` | – | – |
| Return | `?[*:0]const u8` | – | – |

</details>

---

### <a id="fn-pthread-getthreadid-np"></a>`pthread_getthreadid_np`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_getthreadid_np() c_int
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| Return | `c_int` | – | – |

</details>

---

### <a id="fn-pthread-set-name-np"></a>`pthread_set_name_np`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_set_name_np(thread: pthread_t, name: [*:0]const u8) void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `thread` | `pthread_t` | – | – |
| `name` | `[*:0]const u8` | – | – |
| Return | `void` | – | – |

</details>

---

### <a id="fn-pthread-get-name-np"></a>`pthread_get_name_np`

<details class="declaration-card" open>
<summary>Function – Expand to view signature, parameters, and examples.</summary>

\`\`\`zig
pub extern "c" fn pthread_get_name_np(thread: pthread_t, name: [*:0]u8, len: usize) void
\`\`\`

**Parameters & Return:**

| Name | Type | Description | Default |
|------|------|-------------|---------|
| `thread` | `pthread_t` | – | – |
| `name` | `[*:0]u8` | – | – |
| `len` | `usize` | – | – |
| Return | `void` | – | – |

</details>

---
