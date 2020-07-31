# Beginners Tutorial

Written by Joshy Orndorff

In order to run the rholang snippets in this tutorial, you will need some kind of development environment. This is not an exhaustive guide to rholang development tools or stacks. Rather, it shows a few common basic development environments to get you started.

## VSCode Plugin

This is the Visual Studio Code extension for the Rholang programming language. It has support for syntax highlighting and code evaluation with error highlighting.
[Marketplace VSCode](https://marketplace.visualstudio.com/items?itemName=tgrospic.rholang)

## Cryptofex IDE

Pyrofex is developing an up-and-coming integrated development environment called [Cryptofex](https://cryptofex.io/). Cryptofex runs natively on windows, mac, and linux/. It offers rholang syntax highlighting and is capable of evaluating rholang code internally or with a running RNode. The IDE also supports ethereum development.

## Local Node

Another way to run rholang code is to start up your own local RNode and use its rholang interpreter. For that rnode has to be installed. There are two modes to run rholang code locally: repl and eval
With repl you can type rholang code directly into the console and execute it. With eval you are running a .rho file and execute this file.

The command for repl with docker is:

- cmd:`$ docker run -it --rm --name rnode -v /data/rhoc-daemon-01:/var/lib/rnode rchain/rnode:latest repl`

For use without docker use the following instructions:

Once RNode is installed, you can run a basic standalone node

```bash
$ rnode run -s -n
```

In a separate terminal, you can use RNode's eval mode to evaluate code.

```javascript
$ rnode eval intersection.rho
Evaluating from intersection.rho

Result for intersection.rho:
Deployment cost: CostAccount(39,Cost(1132))
Storage Contents:
 @{Unforgeable(0xb19519ab773d1ec4ce96f1b71b748552e4a084dfc9942371717f5cb87e818879)}!(@{"name"}!(Nil)) | @{Unforgeable(0xb19519ab773d1ec4ce96f1b71b748552e4a084dfc9942371717f5cb87e818879)}!(@{"age"}!(Nil)) | @{"world"}!("hello") | for( x0, x1 <= @{Unforgeable(0x01)} ) { Nil } | for( x0, x1, x2, x3 <= @{"secp256k1Verify"} ) { Nil } | for( x0, x1 <= @{"sha256Hash"} ) { Nil } | for( @{{@{"name"}!(_) | _ /\ @{"age"}!(_) | _}} <= @{Unforgeable(0xb19519ab773d1ec4ce96f1b71b748552e4a084dfc9942371717f5cb87e818879)} ) { @{Unforgeable(0x00)}!("Both name and age were in the data") } | for( x0, x1 <= @{Unforgeable(0x03)} ) { Nil } | for( x0, x1, x2, x3 <= @{"ed25519Verify"} ) { Nil } | for( x0, x1 <= @{"blake2b256Hash"} ) { Nil } | for( x0 <= @{Unforgeable(0x02)} ) { Nil } | for( x0 <= @{Unforgeable(0x00)} ) { Nil } | for( x0, x1 <= @{"keccak256Hash"} ) { Nil }
```

Some of RNode's output is shown in the same terminal that you run the code in. But other output comes directly from the node (the first terminal). So be sure to check both places until you're familiar with what output is displayed where.
