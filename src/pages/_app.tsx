import { AppType } from "next/app";
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { api } from "~/utils/api";
import Head from 'next/head';

import "~/styles/globals.css";

const config = createConfig(
  getDefaultConfig({
    alchemyId: "J25xS1d208NPzUMM2tqnHF68kVx2rWmX",
    walletConnectProjectId: "3163f0f619168ae02436bfc44faa24a1",
    appName: "Kiwi News",
    appDescription: "The prime feed for hacker engineers building a decentralized future",
    appUrl: "https://news.kiwistand.com/", // Replace with your app's url
    appIcon: "/favicon.ico", // Replace with your app's icon url, no bigger than 1024x1024px (max. 1MB)
  }),
);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        {/* Meta tags for SEO and social media */}
        <meta name="description" content="My App" />
        
        {/* Open Graph */}
        <meta property="og:title" content="My App" />
        <meta property="og:description" content="The prime feed for hacker engineers building a decentralized future" />
        <meta property="og:image" content="/kiwitag.png" />
        <meta property="og:url" content="https://your-app-url.com" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kiwi News" />
        <meta name="twitter:description" content="The prime feed for hacker engineers building a decentralized future" />
        <meta name="twitter:image" content="/kiwitag.png" />
        <meta name="twitter:creator" content="@kiwinews" />
        
        {/* Telegram */}
        <meta property="telegram:site" content="kiwinews" />
        
        {/* Add other meta tags as needed */}
      </Head>
      <WagmiConfig config={config}>
        <ConnectKitProvider>
          <Component {...pageProps} />
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
};

export default api.withTRPC(MyApp);



