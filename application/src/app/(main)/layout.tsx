import { gameName } from '@/lib/constants';
import { MainLayout } from '@/main/components/containers/MainLayout';
import '../globals.css';

export const metadata = {
    title: gameName,
    description: ``,
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <MainLayout>{children}</MainLayout>;
}
