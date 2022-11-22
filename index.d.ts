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
	curve: 'uncorrelated' | 'stable';
	networkId: number;
};

export type CoinsRegister = {
	coins: Coin[];
	pools: Pool[];
};

export = register;

declare const register: CoinsRegister;
