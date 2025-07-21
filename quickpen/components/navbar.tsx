import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.svg";
import { SearchInput } from "./search-input";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <Link href="/" className="flex gap-1 items-center shrink-0">
        <Image src={Logo} alt="Logo" width={36} height={36} />
        <h3 className="text-xl tracking-tight font-semibold">QuickPen</h3>
      </Link>

      <SearchInput />

      <div />
    </nav>
  );
}
