import { gameName } from '@/lib/constants';
import './globals.css';

export const metadata = {
    title: gameName,
    description: ``,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}
