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
	type: string;
	caution?: boolean;
	order: number;
};

export type Pool = {
	coinX: string;
	coinY: string;
	curve: 'unstable' | 'stable';
	networkId: number;
};

export type NetworkType = 'mainnet' | 'testnet';

export type CoinsRegister = {
	coins: Coin[];
	pools: Pool[];

	getCoinsFor: (NetworkType) => Coin[];
	getPoolsFor: (NetworkType) => Pool[];
};

export = register;

declare const register: CoinsRegister;
