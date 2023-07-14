import { BigNumber } from "@ethersproject/bignumber";
import { useCallback, type FormEventHandler } from "react";
import invariant from "ts-invariant";
import { useSignTypedData } from "wagmi";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import { useState } from "react";


import {
  STORY_EIP712_DOMAIN,
  STORY_EIP712_TYPES,
  STORY_MESSAGE_TYPE,
} from "~/constants";
import { TopNav } from "~/layout";
import { api } from "~/utils/api";
import { ConnectKitButton } from "connectkit";

export default function Submit() {
  const [showModal, setShowModal] = useState(false);
  const { mutateAsync: postStory } = api.post.story.useMutation();
  const { signTypedDataAsync } = useSignTypedData();

  const router = useRouter();
  const { address, isConnecting, isDisconnected } = useAccount();

  const handleSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
    async (event) => {
      event.preventDefault();
      const target = event.currentTarget;
      const formData = new FormData(target);

      const href = formData.get("href");
      invariant(typeof href === "string", "href must be a string");

      const title = formData.get("title");
      invariant(typeof title === "string", "title must be a string");

      const timestamp = Math.trunc(Date.now() / 1000);

      const signature = await signTypedDataAsync({
        // primaryType: "Message",
        // message: {
        //   href,
        //   title,
        //   type: STORY_MESSAGE_TYPE,
        //   timestamp: BigNumber.from(timestamp),
        // },
      });

      const response = await postStory({
        href,
        title,
        type: STORY_MESSAGE_TYPE,
        timestamp,
        signature,
      });

      // eslint-disable-next-line no-console -- TODO: remove
      console.log(response);
    },
    [postStory, signTypedDataAsync]
  );

  return (
    <>
      <TopNav />
      {showModal && (
        <div className="fixed z-50 top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#f6f6ef] p-5 rounded shadow-lg w-80 text-center">
            <h2 className="text-2xl mb-4">Confirm Purchase</h2>
            <div className="p-4">
              <img 
                src="/kiwinft.png" 
                alt="Kiwi NFT" 
                className="w-full h-auto border-4 border-limegreen rounded-md" 
              />
              <figcaption className="text-center mt-4 text-[#828282]">Mint Price: 0.02 ETH</figcaption>
            </div>
            <p>Do you want to proceed with the purchase of Kiwi NFT for 0.02 ETH?</p>
            <div className="flex justify-center space-x-4 mt-4">
              <button onClick={() => setShowModal(false)} className="inline-block bg-red-500 text-white px-6 py-3 rounded font-bold">
                Close
              </button>
              <button className="inline-block bg-green-500 text-white px-6 py-3 rounded font-bold">
                MINT
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="mx-auto pl-20 pr-20 pb-20 mb-8 max-w-7xl pr-4 pt-4 bg-[#f6f6ef]">
        <div className="mx-auto mb-8 max-w-7xl pr-4 pt-4 bg-[#f6f6ef]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="title"
                className="block text-sm font-semibold leading-6 text-gray-600"
              >
                Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                placeholder="Title"
                required
                className="mt-1.5 rounded-md border border-gray-300 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="href"
                className="block text-sm font-semibold leading-6 text-gray-600"
              >
                URL
              </label>
              <input
                id="href"
                name="href"
                type="url"
                placeholder="URL"
                className="mt-1.5 rounded-md border border-gray-300 p-2"
              />
            </div>
            {address ? (
              <button type="submit" className="bg-gray-300 px-4 py-2 text-white">
                Submit
              </button>
            ) : (
              <ConnectKitButton.Custom>
                {({ show }) => (
                  <button
                    type="button"
                    className="bg-blue-500 px-4 py-2 text-white"
                    onClick={show}
                  >
                    Connect Wallet
                  </button>
                )}
              </ConnectKitButton.Custom>
            )}
          </form>
       
            <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold">You're almost there!</h2>
              <p className="mt-2">
                To submit links to the p2p network, you'll need to:
              </p>
              <ul className="mt-2">
                <li>
                  <span role="img" aria-label="Connect Wallet">
                    🥝
                  </span>{" "}
                  Connect your wallet
                </li>
                <li>
                  <span role="img" aria-label="Mint NFT">
                    🥝
                  </span>{" "}
                  Mint our News Access NFT
                </li>
              </ul>
              <button 
  onClick={() => window.open("https://zora.co/collect/eth:0xebb15487787cbf8ae2ffe1a6cca5a50e63003786/mint", "_blank")} 
  className="inline-block bg-green-500 text-white px-6 py-3 rounded font-bold"
>
Buy Kiwi NFT for 0.02 ETH
</button>

            </div>
          
        </div>
      </div>
    </>
  );
}