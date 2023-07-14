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
      {/* <!-- Primary Meta Tags --> */}
<title>Kiwi News 🥝</title>
<meta name="title" content="Kiwi News" />
<meta name="description" content="The prime feed for hacker engineers building a decentralized future" />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://denews-finn-bags.vercel.app/" />
<meta property="og:title" content="Kiwi News 🥝" />
<meta property="og:description" content="The prime feed for hacker engineers building a decentralized future" />
<meta property="og:image" content="https://denews-finn-bags.vercel.app/kiwitag.png" />

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://denews-finn-bags.vercel.app/" />
<meta property="twitter:title" content="Kiwi News 🥝" />
<meta property="twitter:description" content="The prime feed for hacker engineers building a decentralized future" />
<meta property="twitter:image" content="https://denews-finn-bags.vercel.app/kiwitag.png" />

{/* <!-- Meta Tags Generated --> */}
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



