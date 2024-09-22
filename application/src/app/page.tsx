import { Button } from '@/landing/components/button/Button';
import { MainLayout } from '@/landing/components/containers/MainLayout';
import { NormalSection } from '@/landing/components/sections/NormalSection';
import { gameName } from '@/lib/constants';

export default function LandingsPage() {
    return (
        <MainLayout>
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
                <Button text="Sign up" />
                <Button text="Login" />
            </NormalSection>
        </MainLayout>
    );
}
