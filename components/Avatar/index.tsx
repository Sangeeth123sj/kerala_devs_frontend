import { ContributerApiInterface } from "@/utils/api/github";
import Image from "next/image";
import Link from "next/link";

export function ContributionAvatar(props: ContributerApiInterface) {
  return (
    <Link href={props.html_url} target="_blank">
      <Image
        className="rounded-full shadow hover:scale-95 transition-all"
        title={props.login}
        src={props.avatar_url ?? ""}
        alt={`Avatar of ${props.login}`}
        width={80}
        height={80}
      />
    </Link>
  );
}
