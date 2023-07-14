import { ConnectKitButton } from "connectkit";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 14px 24px;
  color: #ffffff;
  background: #000000;
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  box-shadow: none;

  transition: none;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; /* Added property */
`;

export function TopNav() {
  const { pathname } = useRouter();
  const { address, isConnecting, isDisconnected } = useAccount();

  const isSubmitPage = pathname === "/submit";
  const isWelcomePage = pathname === "/welcome";
  const shouldShowTabs = !isSubmitPage && !isWelcomePage;

  return (
    <div className="mt-2 mx-auto max-w-7xl">
      <div className="flex h-16 bg-limegreen items-center justify-between p-4">
        <div className="flex h-12 items-center">
          <span className="text-4xl mr-1">☰</span>
        </div>

        <CenteredContainer> {/* Updated container */}
          <div className="flex items-center mx-auto">
            <span className="text-xl">🥝</span>
          </div>
        </CenteredContainer>

        <div className="flex h-12 items-center space-x-2 ml-auto">
          {!isSubmitPage && address && !isConnecting && !isDisconnected && (
            <Link href="/submit">
              <StyledButton className="mr-2">Submit</StyledButton>
            </Link>
          )}
          <ConnectKitButton.Custom>
            {({ isConnected, show, truncatedAddress, ensName }) => (
              <StyledButton onClick={show}>
                {isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
              </StyledButton>
            )}
          </ConnectKitButton.Custom>
        </div>
      </div>
      {shouldShowTabs && (
        <div className="flex bg-[#f6f6ef]">
          <div className="h-16 flex space-x-4 items-center justify-between p-4">
            <Link href="/">
              <div
                className={classNames(
                  "px-4 py-2 border-solid border-2 rounded cursor-pointer",
                  pathname === "/" && "border-[#33CC33] text-[#33CC33] font-bold",
                  pathname !== "/" && "border-[#808080] text-[#808080]"
                )}
              >
                Top
              </div>
            </Link>
            <Link href="/new">
              <div
                className={classNames(
                  "px-4 py-2 border-solid border-2 rounded cursor-pointer",
                  pathname === "/new" && "border-[#33CC33] text-[#33CC33] font-bold",
                  pathname !== "/new" && "border-[#808080] text-[#808080]"
                )}
              >
                New
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
