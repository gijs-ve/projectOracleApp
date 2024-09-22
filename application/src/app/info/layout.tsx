import { MainLayout } from '@/landing/components/containers/MainLayout';
import { gameName } from '@/lib/constants';
import './globals.css';

export const metadata = {
    title: gameName,
    description: ``,
};

export default function InfoLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <MainLayout>{children}</MainLayout>;
}
