import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

export function Footer() {
  const { pathname } = useRouter();

  return (
    <div className="mb-4 bg-white">
      <div className="flex flex-wrap justify-center">
        <Link href="/welcome" className={classNames("flex-shrink-0 text-center px-4 py-2", pathname === "/welcome" && "font-bold")}>
          Access NFT
        </Link>
        <Link href="/newsletter" className={classNames("flex-shrink-0 text-center px-4 py-2", pathname === "/newsletter" && "font-bold")}>
          Newsletter
        </Link>
        <Link href="/privacypolicy" className={classNames("flex-shrink-0 text-center px-4 py-2", pathname === "/privacypolicy" && "font-bold")}>
          Privacy Policy
        </Link>
        <Link href="/api" className={classNames("flex-shrink-0 text-center px-4 py-2", pathname === "/api" && "font-bold")}>
          API
        </Link>
        <Link href="/about" className={classNames("flex-shrink-0 text-center px-4 py-2", pathname === "/about" && "font-bold")}>
          About
        </Link>
        <Link href="/requestfeature" className={classNames("flex-shrink-0 text-center px-4 py-2", pathname === "/requestfeature" && "font-bold")}>
          Request Features
        </Link>
        <Link href="/guidelines" className={classNames("flex-shrink-0 text-center px-4 py-2", pathname === "/guidelines" && "font-bold")}>
          Guidelines
        </Link>
        <Link href="/why" className={classNames("flex-shrink-0 text-center px-4 py-2", pathname === "/why" && "font-bold")}>
          Why?
        </Link>
      </div>
    </div>
  );
}


