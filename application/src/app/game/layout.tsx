import { GameLayout } from '@/game/components/GameLayout';
import { gameName } from '@/lib/constants';

export const metadata = {
    title: gameName,
    description: ``,
};

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <GameLayout>{children}</GameLayout>;
}
