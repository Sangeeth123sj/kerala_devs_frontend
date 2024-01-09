import type { Metadata } from "next";
import "./globals.css";
import { nunitoSans } from "@/utils/font";
import { logos } from "@/constants/images/logo";

export const metadata: Metadata = {
  title: "Kerala Devs",
  description:
    "Open source gig/job platform exclusively for python developers in Kerala.",
  icons: [logos.logoWhite],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
