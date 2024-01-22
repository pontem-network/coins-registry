export type CoinSource =
	| 'pontem'
	| 'partners'
	| 'import'
	| 'pool'
	// Partners Sources
	| 'aptoge'
	| 'argo'
	| 'celer'
	| 'chainx'
	| 'ditto'
	| 'layerzero'
	| 'mojito'
	| 'tortuga'
	| 'wormhole';

export type Coin = {
	source: CoinSource;
	name: string;
	chainId: number;
	decimals: number;
	symbol: string;
	symbol_with_bridge: string;
	type: string;
	caution?: boolean;
	logo_url: string;
	order: number;
};

export type Pool = {
	coinX: string;
	coinY: string;
	curve: 'unstable' | 'stable';
	networkId: number;
	contract?: number;
	exceptional?: boolean;
};

export type StakingPool = {
	address: string;
	pool: {
		coinX: string;
		coinY: string;
		curve: string;
		networkId: number;
	};
	reward: string;
	order?: number;
	nftInfo?: {
		url: string;
	};
};

export type NetworkType = 'mainnet' | 'testnet';

export type CoinsRegister = {
	coins: Coin[];
	pools: Pool[];
	staking: Staking[];

	getCoinsFor: (NetworkType) => Coin[];
	getPoolsFor: (NetworkType) => Pool[];
	getStakingPoolsFor: (NetworkType) => StakingPool[];
};

export = register;

declare const register: CoinsRegister;
