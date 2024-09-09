import { Exo, Faustina, Inter } from 'next/font/google';
import { BottomHUD } from './hud/BottomHUD';
import { Topbar } from './hud/topbar/Topbar';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const faustina = Faustina({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-faustina',
});

const exo = Exo({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-exo',
});

type GameLayoutProps = {
    children: React.ReactNode;
};
export const GameLayout = ({ children }: GameLayoutProps) => {
    return (
        <html lang="en">
            <body
                className={`bg-g-blackish ${inter.variable} ${faustina.variable} ${exo.variable}`}
            >
                <main className="max-w-max-page max-h-svh mx-auto font-exo w-svw overflow-hidden relative h-svh grid grid-cols-12 grid-rows-7">
                    <Topbar />
                    {children}
                    <BottomHUD />
                </main>
            </body>
        </html>
    );
};
