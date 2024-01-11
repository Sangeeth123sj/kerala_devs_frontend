import { logos } from "@/constants/images/logo";
import Image from "next/image";

export default function AuthLayout({ children }: { children: any }) {
  return (
    <div className="p-5 flex-1 flex flex-wrap">
      <div className="flex-1 flex flex-col gap-2 justify-center items-center min-w-[300px]">
        <Image
          src={logos.logoBlack}
          width={250}
          height={250}
          alt="Logo of Kerala Devs"
        />
        <h1 className="text-3xl font-bold">Kerala Devs</h1>
        <p className="text-gray-600">
          A community of developers from Kerala, India
        </p>
      </div>
      <div className="flex-1 flex justify-center items-center min-w-[300px]">
        {children}
      </div>
    </div>
  );
}
