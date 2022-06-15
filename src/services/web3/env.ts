// eslint-disable-next-line import/no-mutable-exports
export let env = {
  NETWORK_METADATA_PARAMS: [
    {
      chainId: '0x89', // A 0x-prefixed hexadecimal string
      chainName: 'Polygon',
      nativeCurrency: {
        name: 'Matic',
        symbol: 'MATIC',
        decimals: 18,
      },
      rpcUrls: ['https://polygon-rpc.com'],
      blockExplorerUrls: ['https://polygonscan.com/'],
    },
  ],
};

export const setUseDev = (isDev) => {
  if (isDev) {
    env = {
      NETWORK_METADATA_PARAMS: [
        {
          chainId: '0x13881', // A 0x-prefixed hexadecimal string
          chainName: 'Mumbai',
          nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18,
          },
          rpcUrls: ['https://matic-mumbai.chainstacklabs.com', 'https://rpc-mumbai.matic.today'],
          blockExplorerUrls: ['https://explorer-mumbai.maticvigil.com/'],
        },
      ],
    };
  }
};

// export const SKILL_WALLET_API = `https://${useDev ? 'dev.' : ''}api.skillwallet.id/api`;
// export const DITO_API = `https://${useDev ? 'dev.' : ''}api.distributed.town/api`;
// export const RPCs = useDev ? ['https://matic-mumbai.chainstacklabs.com', 'https://rpc-mumbai.matic.today'] : ['https://polygon-rpc.com'];
// export const BLOCKED_EXPLORER_URLS = useDev ? ['https://explorer-mumbai.maticvigil.com/'] : ['https://polygonscan.com/'];
