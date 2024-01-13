import { PrimaryLink } from "@/components/Link";
import { logos } from "@/constants/images/logo";
import { navbarConstants } from "@/constants/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-10 flex items-center justify-between px-5 py-6 shadow rounded-lg">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={logos.logoBlack}
          width={30}
          height={30}
          alt="Logo for Kerala Devs"
        />
        <span>Kerala Devs</span>
      </Link>
      <ul className="flex gap-2">
        {navbarConstants.map(({ name, route }) => (
          <li>
            <Link
              href={route}
              className="text-sm text-gray-500 hover:text-black"
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <PrimaryLink label="Login" href="/login" />
        <PrimaryLink label="Signup" href="/signup" variant="outlined" />
      </div>
    </header>
  );
}
