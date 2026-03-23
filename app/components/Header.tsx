import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={"/shop-all"}>Shop All</Link>
            <Link href={"/returns"}>Returns / Exchanges</Link>
          </li>
        </ul>
        <Image
          src="/joby_logo_blue.svg"
          alt="Joby Logo"
          width={120}
          height={40}
        />
        <ul>
          <li>Icons</li>
        </ul>
      </nav>
    </header>
  );
}
