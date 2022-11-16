# LiquidSwap Coin Registry

We are developing our own Coin Registry file formats for [LiquidSwap](https://liquidswap.com), which contains all the information about coins and pools in which coins can be exchanged.

Currently, we use two files: 

- coins.json
- pools.json

and provide registries for mainnet and testnet.

## Coins Data Structure

There is a coins list in coins.json. One coin can be presented as follows:

```JSON
{
    "source": "aptos",
    "name": "Aptos Coin",
    "chainId": 1,
    "decimals": 8,
    "symbol": "APT",
    "type": "0x1::aptos_coin::AptosCoin",
    "caution": false,
    "order": 1
}
```

### Fields Description

```source``` - enum data type with strict value check. If you’d like to add the new value into it, fill the form. Usually source is the name of a partner's company to add many coins into the list. We support now following sources: 

* ```aptos``` - for the native Aptos Coin.
* ```partners``` - for other coins.
* ```celer``` - for coins provided by Celer.
* ```layerzero``` - for coins provided by Layer Zero.
* ```wormhole``` - for coins provided by Wormhole.

```name``` - coins' full name. We update this value by a request to the node. It is used on Picture 1 as a bottom string after the dot (on the picture it is Bitcoin).

```chainId``` - for mainnet value is 1. Currently, testnet coins stored in the ```testnet``` branch of this repo.

```decimals``` - how many decimals supports your coin. We update this value by a request to the node.

```symbol``` -  it is used to construct a coin alias, which can be equal to symbol as on Picture 1 in the top string.

```type``` - full type of coin. String with following structure ADDRESS::MODULE::COIN, e.g. ```0x1000000fa32d122c18a6a31c009ce5e71674f22d06a581bb0a15575e6addadcc::usda::USDA```.

```caution``` - if we need to show warning icon near the coin - we will add the caution field.

```order``` - order of coin in coins list. Current logic:

```
1 Apt
10 USDC
20 USDT
30 DAI
40 BTC
50 WETH
60 BUSD / BNB
1000 other coins
````

## Pools Data Structure


```JSON
{
    "coinX": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT",
    "coinY": "0x1::aptos_coin::AptosCoin",
    "curve": "uncorrelated",
    "networkId": 1
}
```

### Fields Description

```coinX``` - full type of coin. String with following structure ADDRESS::MODULE::COIN, e.g. ```0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT```.

```coinY``` - full type of coin. String with following structure ADDRESS::MODULE::COIN, e.g. ```0x1::aptos_coin::AptosCoin```.

> ⚠️ Coins should be sorted.


```curve``` - to strictly point curve type use the following values: 
* stable
* uncorrelated
* selectable


## Contribution

You are welcome to fork the current repository and do a PR. 

The current repository maintaining under MIT license.


## Tests

Check formatting with 

```shell
yarn test
```

## License 

MIT.
