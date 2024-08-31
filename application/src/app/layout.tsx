import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import { gameName } from "@/lib/constants";
import "./globals.css";

export const metadata = {
  title: gameName,
  description: ``,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <main className="w-svw overflow-x-hidden relative min-h-svh ">
          <Header />
          {children}
          <Footer />
          <div className="z-50 h-full top-0 absolute left-0 hidden filler-page:w-filler filler-page:block bg-ablight-main border-r border-ablight-yellowish-light" />
          <div className="z-50 h-full top-0 absolute right-0 hidden filler-page:w-filler filler-page:block bg-ablight-main border-l border-ablight-yellowish-light" />
        </main>
      </body>
    </html>
  );
}
