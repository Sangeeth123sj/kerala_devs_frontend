import { PrimaryLink } from "@/components/Link";
import { logos } from "@/constants/images/logo";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-10 border flex items-center justify-between px-5 py-6">
      <div className="flex items-center gap-2">
        <Image
          src={logos.logoBlack}
          width={30}
          height={30}
          alt="Logo for Kerala Devs"
        />
        <span>Kerala Devs</span>
      </div>
      <div className="flex gap-2">
        <PrimaryLink label="Login" href="/login" />
        <PrimaryLink label="Register" href="/register" variant="outlined" />
      </div>
    </header>
  );
}
