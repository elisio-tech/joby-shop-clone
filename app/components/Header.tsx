"use client";
import Link from "next/link";
import Image from "next/image";
import Search from "./ui/buttons/Search";
import ShoppingCart from "./ui/buttons/ShoppingCart";
import User from "./ui/buttons/User";

export default function Header() {
  return (
    <header className="py-4">
      <nav className="flex items-center justify-between mx-12">
        {/* LEFT */}
        <div className="flex-1">
          <ul className="flex gap-6 tracking-wide">
            <li>
              <Link href="/shop-all">Shop All</Link>
            </li>
            <li>
              <Link href="/returns">Returns / Exchanges</Link>
            </li>
          </ul>
        </div>

        {/* CENTER */}
        <div className="flex-1 flex justify-center">
          <Link href="/">
            <Image
              src="/joby_logo_blue.svg"
              alt="Joby Logo"
              width={90}
              height={40}
            />
          </Link>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-end gap-4 items-center">
          <Search />
          <User />
          <ShoppingCart />
        </div>
      </nav>
    </header>
  );
}
