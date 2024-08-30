import { Footer } from "@/components/footer/Footer";
import { gameName } from "@/lib/constants/names";
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
