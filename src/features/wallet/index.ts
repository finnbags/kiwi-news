// import { Connectors } from "@walletconnect/web3-react";
// import { IConnectorOptions } from "@walletconnect/types";
// import { configureChains } from "wagmi";
// import { mainnet } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
// import { publicProvider } from "wagmi/providers/public";
// import Web3 from "web3";

// import { env } from "~/env.mjs";

// const {
//   NEXT_PUBLIC_RAINBOW_APP_NAME: RAINBOW_APP_NAME,
//   NEXT_PUBLIC_ALCHEMY_API_KEY: ALCHEMY_API_KEY,
//   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID: WALLETCONNECT_PROJECT_ID,
// } = env;

// const { chains } = configureChains(
//   [mainnet],
//   [
//     alchemyProvider({
//       apiKey: ALCHEMY_API_KEY,
//     }),
//     publicProvider(),
//   ]
// );

// export { chains };

// const connectors = new Connectors<IConnectorOptions>({
//   walletconnect: {
//     rpc: { [mainnet.network]: mainnet.rpcUrls[0] },
//     bridge: "https://bridge.walletconnect.org",
//     qrcode: true,
//     pollingInterval: 15000,
//   },
// });

// const connector = connectors.connector("walletconnect");

// const web3 = new Web3(connector.provider);

// export const wagmiClient = {
//   autoConnect: true,
//   connectors: connectors.byName,
//   provider: web3.currentProvider,
// };
