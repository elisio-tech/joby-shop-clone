"use client";
import Link from "next/link";
import Image from "next/image";
import Search from "./ui/buttons/Search";
import ShoppingCart from "./ui/buttons/ShoppingCart";
import User from "./ui/buttons/User";
import { useEffect, useState } from "react";

export default function Header() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isScrolled = scroll > 50;

  return (
    <header
      className={`py-6 fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : ""
      }`}
    >
      <nav className="flex items-center justify-between mx-12 transition-colors duration-300">
        <div className="flex-1">
          <ul className="flex gap-6 tracking-wide">
            <li
              className={` transition-all duration-200 text-zinc-600 hover:text-blue-500`}
            >
              <Link href="/shop-all">Shop All</Link>
            </li>
            <li
              className={` transition-all duration-200 text-zinc-600 hover:text-blue-500`}
            >
              <Link href="/returns">Returns / Exchanges</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex justify-center ">
          <Link href="/">
            <Image
              src={"/joby_logo_blue.svg"}
              alt="Joby Logo"
              width={90}
              height={40}
            />
          </Link>
        </div>

        <div
          className={`text-zinc-700 flex-1 flex justify-end gap-4 items-center `}
        >
          <Search />
          <User />
          <ShoppingCart />
        </div>
      </nav>
    </header>
  );
}
