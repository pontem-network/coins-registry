<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

# LiquidSwap & Pontem Wallet Coins & Pools Registry

We are developing our own Coin Registry file formats for [LiquidSwap](https://liquidswap.com) and [Pontem Wallet](https://pontemwallet.xyz/), which contains all the information about coins and pools in which coins can be exchanged.

Currently, we use these files for data:

- coins.json
- pools.json
- staking.json

And an [index.js](src/index.js) file for easier usage of coins-registry in other projects. Through the interface, it is easy to get tokens or pools lists for the selected chain type. It provides two methods: `getCoinsFor`, `getPoolsFor` and `getStakingPoolsFor`. Each of these methods requires the network type as an argument. Possible values for network types: `mainnet` and `testnet`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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
    "order": 1,
    "logo_url": "https://raw.githubusercontent.com/pontem-network/coins-registry/main/src/coins-logos/apt.svg"
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

```logo_url``` - absolute path to coin logo from githubusercontent and this repo

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Pools Data Structure


```JSON
{
    "coinX": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT",
    "coinY": "0x1::aptos_coin::AptosCoin",
    "curve": "unstable",
    "networkId": 1
}
```

### Fields Description

```coinX``` - full type of coin. String with following structure ADDRESS::MODULE::COIN, e.g. ```0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT```.

```coinY``` - full type of coin. String with following structure ADDRESS::MODULE::COIN, e.g. ```0x1::aptos_coin::AptosCoin```.

> ⚠️ Coins should be sorted.


```curve``` - to strictly point curve type use the following values: 
* stable
* unstable
* selectable

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contribution

You are welcome to fork the current repository and do a PR. 

The current repository maintaining under MIT license.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tests

Check formatting with 

```shell
yarn test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License 

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/pontem-network/coins-registry.svg?style=for-the-badge
[contributors-url]: https://github.com/pontem-network/coins-registry/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/pontem-network/coins-registry.svg?style=for-the-badge
[forks-url]: https://github.com/pontem-network/coins-registry/network/members
[stars-shield]: https://img.shields.io/github/stars/pontem-network/coins-registry.svg?style=for-the-badge
[stars-url]: https://github.com/pontem-network/coins-registry/stargazers
[issues-shield]: https://img.shields.io/github/issues/pontem-network/coins-registry.svg?style=for-the-badge
[issues-url]: https://github.com/pontem-network/coins-registry/issues
[license-shield]: https://img.shields.io/github/license/pontem-network/coins-registry.svg?style=for-the-badge
[license-url]: https://github.com/pontem-network/coins-registry/blob/main/LICENSE
