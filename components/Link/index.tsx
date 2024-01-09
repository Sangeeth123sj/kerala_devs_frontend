import Link from "next/link";
enum Variants {
  Default = "default",
  Outlined = "outlined",
}
interface PrimaryLinkInterface {
  label: string;
  href: string;
  variant?: "default" | "outlined";
}
export function PrimaryLink({
  label,
  href,
  variant = "default",
}: PrimaryLinkInterface) {
  const styles = {
    default:
      "bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded min-w-[100px] text-center",
    outlined:
      "bg-transparent hover:bg-gray-100 text-gray-800 font-bold py-1 px-4 rounded min-w-[100px] text-center border border-gray-800",
  };
  return (
    <Link
      href={href}
      className={
        variant === Variants.Default ? styles.default : styles.outlined
      }
    >
      {label}
    </Link>
  );
}
