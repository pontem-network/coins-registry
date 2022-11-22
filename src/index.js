import coins from './coins.json';
import pools from './pools.json';

const networks = {
	mainnet: 1,
	testnet: 2,
};

const coinsRegistry = {
	coins,
	pools,

	getCoinsFor: networkName =>
		coins.filter(coin => coin.chainId === networks[networkName]),
	getPoolsFor: networkName =>
		pools.filter(pool => pool.networkId === networks[networkName]),
};

export default coinsRegistry;
