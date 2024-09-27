import { gameName } from '@/lib/constants';
import { Button } from '@/main/components/button/Button';
import { NormalSection } from '@/main/components/sections/NormalSection';

export default function LandingsPage() {
    return (
        <>
            <NormalSection
                sectionProps={{
                    isFirst: true,
                    innerClassName: 'flex w-full justify-center',
                }}
            >
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl">
                        {gameName}
                        <span className="hidden">
                            AI your way towards victory
                        </span>
                    </h1>
                    <h2 className="text-3xl">AI your way towards victory</h2>
                </div>
            </NormalSection>
            <NormalSection
                sectionProps={{
                    innerClassName: 'flex w-full justify-center gap-4',
                }}
            >
                <Button element="link" href="/register" text="Sign up" />
                <Button text="Login" />
            </NormalSection>
        </>
    );
}
