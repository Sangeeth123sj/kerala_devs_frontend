import { logos } from "@/constants/images/logo";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 py-6 flex items-center justify-between mt-auto shadow rounded-lg">
      <Link href={"/"} className="flex flex-col items-center">
        <Image
          src={logos.logoBlack}
          width={50}
          height={50}
          alt="logo of Kerala Devs"
        />
        <span>Kerala Devs</span>
      </Link>
      <div className="flex items-center gap-2">
        <span>&copy; 2024 Kerala Devs</span>
        <span className="text-gray-600">|</span>
        <Link href="/">Terms of Service</Link>
        <span className="text-gray-600">|</span>
        <Link href="/">Privacy Policy</Link>
      </div>
    </footer>
  );
}
