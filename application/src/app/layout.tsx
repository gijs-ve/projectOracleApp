import { Footer } from "@/components/footer/Footer";
import "./globals.css";

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
