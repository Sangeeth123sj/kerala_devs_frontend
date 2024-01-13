import { PrimaryLink } from "@/components/Link";
import Image from "next/image";
export interface AboutSectionProps {
  image: string;
  title: string;
  description: string;
  invert?: boolean;
}
export default function AboutSection({
  description,
  image,
  invert = false,
  title,
}: AboutSectionProps) {
  return (
    <div
      className={`flex gap-10 items-center justify-center ${
        invert ? `flex-row-reverse flex-wrap-reverse` : `flex-wrap`
      }`}
    >
      <div className="flex-1 rounded-2xl border shadow relative overflow-hidden max-w-[500px] min-w-[300px] aspect-video max-h-[400px]">
        <Image src={image} fill alt="" />
      </div>
      <div className="flex flex-col gap-3 flex-1 min-w-[300px]">
        <h2 className="text-4xl">{title}</h2>
        <span className="text-xl text-justify">{description}</span>
        <PrimaryLink
          href="https://github.com/Sangeeth123sj/kerala_devs_frontend"
          label="Contribute"
          variant="outlined"
        />
      </div>
    </div>
  );
}
