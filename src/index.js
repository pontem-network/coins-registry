Object.defineProperty(exports, "__esModule", { value: true });

const coins = require('./coins.json');
const pools = require('./pools.json');

// import coins from './coins.json';
// import pools from './pools.json';

const coinsRegistry = {
	coins,
	pools,
};

exports.coinsRegistry = coinsRegistry;