import Footer from "./_components/footer/footer";
import Header from "./_components/header/header";

export default function PreloginLayout({ children }: { children: any }) {
  return (
    <div className="min-h-[100vh] flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
