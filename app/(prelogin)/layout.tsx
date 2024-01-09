import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";

export default function PreloginLayout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <div className="min-h-full">{children}</div>
      <Footer />
    </>
  );
}
