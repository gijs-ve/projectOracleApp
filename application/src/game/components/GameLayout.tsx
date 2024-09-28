import { Exo, Faustina, Inter } from 'next/font/google';
import { OnGameArrival } from './events/OnGameArrival';
import { BottomHUD } from './hud/BottomHUD';
import { MiddleWindow } from './hud/middle/MiddleWindow';
import { Topbar } from './hud/topbar/Topbar';
import { StoreProvider } from './providers/StoreProdiver';

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
                <StoreProvider className="max-w-max-page max-h-svh mx-auto font-exo w-svw overflow-hidden relative h-svh grid grid-cols-12 grid-rows-9">
                    <OnGameArrival />
                    <Topbar />
                    <MiddleWindow />
                    {children}
                    <BottomHUD />
                </StoreProvider>
            </body>
        </html>
    );
};
