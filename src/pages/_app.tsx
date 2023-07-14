import { AppType } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { api } from "~/utils/api";

import "~/styles/globals.css";

const config = createConfig(
  getDefaultConfig({
    alchemyId: "J25xS1d208NPzUMM2tqnHF68kVx2rWmX",
    walletConnectProjectId: "3163f0f619168ae02436bfc44faa24a1",
    appName: "Kiwi News",
    appDescription: "The prime feed for hacker engineers building a decentralized future",
    appUrl: "https://your-app-url.com", // Replace with your app's url
    appIcon: "/favicon.ico", // Replace with your app's icon url, no bigger than 1024x1024px (max. 1MB)
  }),
);


const MyApp: AppType = ({ Component, pageProps }) => {
  return (

  
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default api.withTRPC(MyApp);


