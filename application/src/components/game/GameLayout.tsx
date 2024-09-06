type GameLayoutProps = {
    children: React.ReactNode;
};
export const GameLayout = ({ children }: GameLayoutProps) => {
    return (
        <html lang="en">
            <body className="">
                <main className="w-svw overflow-x-hidden relative h-svh bg-g-blackish">
                    {children}
                </main>
            </body>
        </html>
    );
};
