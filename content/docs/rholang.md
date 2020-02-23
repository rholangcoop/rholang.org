# Rholang

Rholang is a new programming language designed for use in distributed systems. This document describes the syntax in Rholang.

Rholang is "process-oriented": all computation is done by means of message passing. Messages are passed on "channels", which are rather like message queues; however, the channels behave more like bags (multisets) rather than queues, since there is no implicit ordering on messages.

Rholang is completely asynchronous, in the sense that while you can read a message from a channel and then do something with it, you can't send a message and then do something once it has been received, at least, not without explicitly waiting for an acknowledgment message from the receiver. Every channel has a name, and every name denotes a unique channel.

**Rholang language specification:**

[Language specification](https://developer.rchain.coop/assets/rholang-spec-0.2.pdf)

## RChain Cloud

Members of the RChain community provide a public web-based [online rholang interpreter](http://rchain.cloud) ([mirror](https://rchaincloud.inblock.io)). This tool is the easiest way to get started and does not require installing any software.

## VSCode Plugin

This is the Visual Studio Code extension for the Rholang programming language. It has support for syntax highlighting and code evaluation with error highlighting.
[Marketplace VSCode](https://marketplace.visualstudio.com/items?itemName=tgrospic.rholang)

## Cryptofex IDE

Pyrofex is developing an up-and-coming integrated development environment called [Cryptofex](https://cryptofex.io/). Cryptofex runs natively on windows, mac, and linux/. It offers rholang syntax highlighting and is capable of evaluating rholang code internally or with a running RNode. The IDE also supports ethereum development.

- **Write Rholang using an IntelliJ plugin** - This [Rholang IntelliJ plugin](https://github.com/tgrospic/rholang-idea) was created by a RChain community member.

## Local Node

The tried and true way to run rholang code is to start up your own local RNode and use its rholang interpreter. First, you'll have to [install RNode](https://rchain.atlassian.net/wiki/spaces/CORE/pages/428376065/User+guide+for+running+RNode) for your platform.

For novice learners there are step-by-step guides on setting up a node using [AWS](https://blog.rchain.coop/running-rnode-0-5-3-on-amazon-ec2/) or [Docker](https://blog.rchain.coop/running-rnodev-0-6-x-with-docker/).

Once RNode is installed, you can run a basic standalone node

```bash
$ rnode run -s -n
```
