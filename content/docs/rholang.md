# Rholang

Rholang is a new programming language designed for use in distributed systems. This document describes the syntax in Rholang.

Rholang is "process-oriented": all computation is done by means of message passing. Messages are passed on "channels", which are rather like message queues; however, the channels behave more like bags (multisets) rather than queues, since there is no implicit ordering on messages.

Rholang is completely asynchronous, in the sense that while you can read a message from a channel and then do something with it, you can't send a message and then do something once it has been received, at least, not without explicitly waiting for an acknowledgment message from the receiver. Every channel has a name, and every name denotes a unique channel.

**Rholang language specification:**

[Language specification](https://developer.rchain.coop/assets/rholang-spec-0.2.pdf)

## VSCode Plugin

This is the Visual Studio Code extension for the Rholang programming language. It has support for syntax highlighting and code evaluation with error highlighting.
[Marketplace VSCode](https://marketplace.visualstudio.com/items?itemName=tgrospic.rholang)

## Local Node

Another way to run rholang code is to start up your own local RNode and use its rholang interpreter. For that rnode has to be installed. There are two modes to run rholang code locally: repl and eval
With repl you can type rholang code directly into the console and execute it. With eval you are running a .rho file and execute this file.

The command for repl with docker is:

- cmd:`$ docker run -it --rm --name rnode -v /data/rhoc-daemon-01:/var/lib/rnode rchain/rnode:latest repl`

## Cryptofex IDE

Pyrofex is developing an up-and-coming integrated development environment called [Cryptofex](https://cryptofex.io/). Cryptofex runs natively on windows, mac, and linux/. It offers rholang syntax highlighting and is capable of evaluating rholang code internally or with a running RNode. The IDE also supports ethereum development.

- **Write Rholang using an IntelliJ plugin** - This [Rholang IntelliJ plugin](https://github.com/tgrospic/rholang-idea) was created by a RChain community member.
