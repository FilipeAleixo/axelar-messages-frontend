import supportedChains from "./chains";
import { IChainData } from "./types";
import { 
  //CHAIN_IDS_PRODUCTION, 
  CHAIN_IDS_DEVELOPMENT } from "../config";

export function ellipseAddress(address: String | undefined) {
  if (!address) {
    return "";
  }
  return address;
}

export function truncateHash(hash: string, length = 38): string {
  return hash.replace(hash.substring(6, length), "...");
}

export function getChainData(chainId?: number): IChainData | undefined {
  if (!chainId) {
    return undefined;
  }

  var allowedChainIds = CHAIN_IDS_DEVELOPMENT;

  // Only testnets allowed for now
  /*
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
  if (vercelEnv === "production") {
    console.log("VERCEL_ENV is production: restricting chain data to mainnet");
    allowedChainIds = CHAIN_IDS_PRODUCTION;
  }
  */

  const chainData = supportedChains
    // Keep only the chains allowed for development
    .filter((chain: any) => allowedChainIds.includes(chain.chain_id))
    .filter((chain: any) => chain.chain_id === chainId)[0];

  if (!chainData) {
    console.log(`Chain with ID ${chainId} is not supported`);
  }

  return chainData;
}

export function sendAxelar(chainId: number, address: string, message: string) {
  return 0;
}

export function receiveAxelar(chainId: number, address: string) {
  //websocket that keeps listening for messages in target address & target chain 
  return 0;
}