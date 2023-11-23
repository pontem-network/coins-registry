/**
 * Known coins
 */
import coins from './coins.json';
/**
 * Known pools
 */
import pools from './pools.json';
/**
 * Known staking pools
 */
import staking from './staking.json';

const networks = {
	/**
	 * Aptos Mainnet Chain Id
	 */
	mainnet: 1,

	/**
	 * Aptos Testnet Chain Id
	 */
	testnet: 2,

	/**
	 * L2 Chain Id
	 */
	l2: 5,
};

/**
 * Main Coins Registry Entry
 */
const coinsRegistry = {
	coins,
	pools,
	staking,

	/**
	 * Get coins list for passed chain name
	 *
	 * @param {'mainnet'|'testnet'|'l2'} networkName Name of the chain
	 * @returns Array<Object>
	 */
	getCoinsFor: networkName =>
		coins.filter(coin => coin.chainId === networks[networkName]),

	/**
	 * Get swap pools list for passed chain name
	 *
	 * @param {'mainnet'|'testnet'|'l2'} networkName Name of the chain
	 * @returns Array<Object>
	 */
	getPoolsFor: networkName =>
		pools.filter(pool => pool.networkId === networks[networkName]),

	/**
	 * Get staking pools list for passed chain name
	 *
	 * @param {'mainnet'|'testnet'|'l2'} networkName Name of the chain
	 * @returns Array<Object>
	 */
	getStakingPoolsFor: networkName =>
		staking.filter(
			stakingPool => stakingPool.pool.networkId === networks[networkName],
		),
};

export default coinsRegistry;
