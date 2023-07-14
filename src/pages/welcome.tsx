import { useState } from 'react';
import Head from "next/head";
import { TopNav, Footer } from "~/layout";

export default function Home() {
  return (
    <>

      <TopNav />

      <div className="mx-auto max-w-7xl p-4 bg-[#f6f6ef]">

        <div className="mx-auto max-w-4xl p-4">

          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-[#828282]">
              Welcome to Kiwi News
            </h1>

            <div>
              <p className="text-[#828282]">
                Kiwi News is the prime feed for hacker engineers building a decentralized future.
              </p>
              <p className="text-[#828282]">
                You don’t need to scroll Twitter anymore - all our content is handpicked and curated by the crypto-savvy Community.
              </p>
              <p className="text-[#828282]">
                We all follow Submission Guidelines to protect the feed from mid and off-topic content.
              </p>
              <p className="text-[#828282]">
                We are also credibly neutral - Kiwi News is built on top of the Kiwistand P2P network.
              </p>
            </div>

          </div>

          <div className="flex flex-wrap mt-8">

            <div className="w-full md:w-1/2 p-4">
              <img
                src="/kiwinft.png"
                alt="Kiwi NFT"
                className="w-full h-auto border-4 border-limegreen rounded-md"
              />

              <figcaption className="text-center mt-4 text-[#828282]">
                Minting Price: 0.02 ETH | {" "}
                <a href="https://etherscan.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  View on Etherscan
                </a>
              </figcaption>
            </div>

            <div className="w-full md:w-1/2 p-4">

              <p className="text-[#828282] pt-5 font-bold">If you want to join our community, mint the Kiwi NFT to:</p>

              <ul className="list-disc list-inside text-[#828282] space-y-2">
                <li>Submit and curate stories on the Kiwi News P2P network,</li>
                <li>Get distribution by exposing your content to a broader crypto-native audience,</li>
                <li>Share our links to Warpcast,</li>
                <li>Co-create the Kiwi News moderation system and influence governance,</li>
                <li>Gain access to the exclusive "Kiwi News NFT Holder" Telegram channel.</li>
              </ul>

              <p className="text-[#828282] pt-10">
                Your contribution supports the project's growth and its creator team, including <span className="text-blue-500">@timdaub</span>, <span className="text-blue-500">@macbudkowski</span>, <span className="text-blue-500">@freeatnet</span>, <span className="text-blue-500">@chrsmaral</span> and others!
              </p>

              <a href="https://zora.co/collect/eth:0xebb15487787cbf8ae2ffe1a6cca5a50e63003786" target="_blank" rel="noopener noreferrer" className="cursor-pointer inline-block bg-green-500 text-white px-6 py-3 mt-8 rounded font-bold text-center">
                Buy Kiwi NFT for 0.02 ETH
              </a>

              <p className="mt-4 text-[#828282]">alternatives: <a href="https://mint.fun" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">mint.fun</a></p>

            </div>

          </div>

          <div className="mt-8">

            <h2 className="text-2xl font-semibold mb-4 text-[#828282]">FAQ:</h2>

            <div>

              <h3 className="font-bold text-[#828282]">Who is picking these links?</h3>
              <p className="text-[#828282]">We are a community of 80+ crypto-savvy people who submit and upvote links to create a newsfeed we all want to use. You can learn more about the community here.</p>

              <h3 className="font-bold text-[#828282]">Why do build this?</h3>
              <p className="text-[#828282]">We want to create a space where crypto content can thrive. Where creators can reach new audiences and readers can find inspiring texts, podcasts and videos. You can read more about our vision here.</p>

              <h3 className="font-bold text-[#828282]">What is your current roadmap?</h3>
              <p className="text-[#828282]">We are working to make the web app experience more seamless. We also plan to ship the mobile app. You can read more about our plans here.</p>

              <h3 className="font-bold text-[#828282]">Where can I share my feature requests?</h3>
              <p className="text-[#828282]">If you’re our NFT holder, you can reach out to <span className="text-blue-500">@timdaub</span> or <span className="text-blue-500">@macbudkowski</span> to get added to the holders-only Telegram Chat. If you don’t hold our NFT, you can always add your requests here.</p>

              <h3 className="font-bold text-[#828282]">How do you determine the price of the NFT?</h3>
              <p className="text-[#828282]">We have a simple algorithm for price discovery. You can learn more about it here.</p>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );

}
