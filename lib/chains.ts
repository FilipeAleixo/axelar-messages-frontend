import { IChainData } from './types';

const supportedChains: IChainData[] = [
  {
    name: 'Ethereum Goerli',
    chain_id: 5,
    gateway_contract: '0xe432150cce91c13a887f7D836923d5597adD8E31',
    gas_service_contract: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6',
  },
  {
    name: 'Moonbeam',
    chain_id: 1287,
    gateway_contract: '0x5769D84DD62a6fD969856c75c7D321b84d455929',
    gas_service_contract: '0xbE406F0189A0B4cf3A05C286473D23791Dd44Cc6',
  },
];

export default supportedChains;
