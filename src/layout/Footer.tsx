import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export function Footer() {
  const { pathname } = useRouter();

  return (
    <div className="mb-4 flex h-12 w-full justify-center bg-white">
      <div className="mx-4 flex max-w-7xl flex-1 items-center justify-center md:mx-8">
        <div className="divide-x divide-solid divide-gray-300">
          <Link href="/welcome" className={classNames("text-xs px-4 py-2", pathname === "/welcome" && "font-bold")}>
            Access NFT
          </Link>
          <Link href="/newsletter" className={classNames("text-xs px-4 py-2", pathname === "/newsletter" && "font-bold")}>
            Newsletter
          </Link>
          <Link href="/privacypolicy" className={classNames("text-xs px-4 py-2", pathname === "/privacypolicy" && "font-bold")}>
            Privacy Policy
          </Link>
          <Link href="/api" className={classNames("text-xs px-4 py-2", pathname === "/api" && "font-bold")}>
            API
          </Link>
          <Link href="/about" className={classNames("text-xs px-4 py-2", pathname === "/about" && "font-bold")}>
            About
          </Link>
          <Link href="/requestfeature" className={classNames("text-xs px-4 py-2", pathname === "/requestfeature" && "font-bold")}>
            Request Features
          </Link>
          <Link href="/guidelines" className={classNames("text-xs px-4 py-2", pathname === "/guidelines" && "font-bold")}>
            Guidelines
          </Link>
          <Link href="/why" className={classNames("text-xs px-4 py-2", pathname === "/why" && "font-bold")}>
            Why?
          </Link>
        </div>
      </div>
    </div>
  );
}

