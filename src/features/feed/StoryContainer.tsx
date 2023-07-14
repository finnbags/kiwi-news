import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BigNumber } from "@ethersproject/bignumber";
import { Web3Provider } from "@ethersproject/providers"; // <-- Added import
import { ethers } from "ethers"; // <-- Added import
import { TRPCClientError } from "@trpc/client";
import { useCallback, useState, useEffect } from "react";

import {
  STORY_EIP712_DOMAIN,
  STORY_EIP712_TYPES,
  STORY_MESSAGE_TYPE,
} from "~/constants";
import { api } from "~/utils/api";

import { useVotingState } from "./hooks";
import { StoryListItem } from "./StoryListItem";

export type StoryContainerProps = {
  title: string;
  href: string;
  timestamp: number;
  points: number;
  score: number;
  signature: string;
  poster: string;
  upvoters: string[];

  onUpvoteSubmitted?: (href: string) => void;
};

declare global {
  interface Window {
    ethereum: Record<string, unknown> | undefined;
  }
}

export function StoryContainer({
  onUpvoteSubmitted,
  ...story
}: StoryContainerProps) {
  const { href, points } = story;

  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    const initialize = async () => {
      if (window.ethereum !== undefined) {
        const connector = new WalletConnectConnector({
          rpc: { 1: "https://mainnet.infura.io/v3/2e40140b970948e594778a28dd6272f3" },
          bridge: "https://bridge.walletconnect.org",
          qrcode: true,
        });

        const provider = await connector.getProvider();
        await provider.enable();
        const account = provider.selectedAddress;
        setAddress(account);
      }
    };

    initialize().catch((error) => console.error(error));
  }, []);

  const handleConnect = useCallback(async () => {
    if (window.ethereum !== undefined) {
      const connector = new WalletConnectConnector({
        rpc: { 1: "https://mainnet.infura.io/v3/2e40140b970948e594778a28dd6272f3" },
        bridge: "https://bridge.walletconnect.org",
        qrcode: true,
      });
  
      const provider = await connector.getProvider();
      const signer = new ethers.Wallet(provider);
      const account = await signer.getAddress();
      setAddress(account);
    }
  }, []);

  const { mutateAsync: postUpvote, isLoading: isSubmittingUpvote } =
    api.post.upvote.useMutation({
      onSuccess(_, variables) {
        onUpvoteSubmitted?.(variables.href);
      },
    });

  const votingKey = address
    ? `k7d:hasVoted:${address.toLowerCase()}:${href}`
    : undefined;
  const {
    data: hasVoted,
    refetch: refetchHasVoted,
    mutate: markHasVoted,
  } = useVotingState({
    key: votingKey,
  });

  const handleUpvote = useCallback(async () => {
    if (!address) {
      handleConnect().catch((error) => console.error(error));
      return;
    }

    const timestamp = Math.trunc(Date.now() / 1000);

    const message = {
      domain: STORY_EIP712_DOMAIN,
      types: STORY_EIP712_TYPES,
      value: {
        href,
        title: "",
        type: STORY_MESSAGE_TYPE,
        timestamp: BigNumber.from(timestamp),
      },
    };

    const signature = await (window.ethereum as any).request({
      method: "eth_signTypedData_v4",
      params: [address, JSON.stringify(message)],
    });

    try {
      const response = await postUpvote({
        href,
        title: "",
        type: STORY_MESSAGE_TYPE,
        timestamp,
        signature,
      });

      console.log(response);

      markHasVoted(true);
    } catch (error) {
      if (
        error instanceof TRPCClientError &&
        error.message.match(/It was probably submitted and accepted before/)
      ) {
        markHasVoted(true);
        return;
      }

      throw error;
    } finally {
      refetchHasVoted().catch((error) => console.error(error));
    }
  }, [href, markHasVoted, postUpvote, refetchHasVoted, address, handleConnect]);

  return (
    <StoryListItem
      {...story}
      points={points + Number(isSubmittingUpvote)}
      hasVoted={hasVoted || isSubmittingUpvote}
      onClickVote={() => handleUpvote().catch((error) => console.error(error))}
    />
  );
}
