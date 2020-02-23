# Running RNode (non-Docker)

These are the run commands to start RNode (non-Docker)

## To connect to an existing network

> Please fill in the `<bootstrap ID>`. The current network ID is posted on [RChain public testnet information](https://rchain.atlassian.net/wiki/spaces/CORE/pages/678756429/RChain+public+testnet+information). The `<network>` is `optional`. You can fill in the name of the network you want to run on (testnet, betanet3).

```bash
rnode run --bootstrap <bootstrap ID> --network <network>
```

**Example:**

```bash
rnode run --bootstrap "rnode://25a48e34b10c5917aa21bdbbf45da56d3e7129c6@node0.testnet.rchain-dev.tk?protocol=40400&discovery=40404"
--network betanet3
```

> if the message: `- Waiting for first connection` is there for more than 1 minute, please check your ports and ip: [Network Configuration](../network-configuration)

- `--network` ... - Network ID, used to differentiate between multiple RChain networks. The current network ID is posted on [RChain public testnet information](https://rchain.atlassian.net/wiki/spaces/CORE/pages/678756429/RChain+public+testnet+information)
- `--bootstrap` ... - Address of the bootstrap node you want to connect with. The bootstrap node of Public Testnet address is:

```
rnode://25a48e34b10c5917aa21bdbbf45da56d3e7129c6@node0.testnet.rchain-dev.tk?protocol=40400&discovery=40404.
```

the RChain public testnet.

- `--map-size` 1099511627776 - LMDB map size. This is an interim solution until the sufficient size is set automatically.

## To run a standalone node

```bash
rnode run -s
```
