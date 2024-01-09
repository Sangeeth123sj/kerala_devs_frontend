import { PrimaryLink } from "@/components/Link";
import { logos } from "@/constants/images/logo";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="h-[100dvh] flex items-center justify-center gap-2">
      <Image
        src={logos.logoBlack}
        width={100}
        height={100}
        alt="Logo of Kerala Devs"
      />
      <div className="flex flex-col gap-3">
        <span className="font-bold">404 Not Found</span>
        <PrimaryLink label="Home" variant="outlined" href="/" />
      </div>
    </div>
  );
}
