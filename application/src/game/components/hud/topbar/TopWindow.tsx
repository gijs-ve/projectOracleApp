'use client';
import { useView } from '@/game/hooks/useView';
import { Navigation } from './Navigation';
import { ResourceDisplay } from './ResourceDisplay';

export const TopWindow = () => {
    const view = useView();
    switch (view) {
        case 'operator-selection':
        case 'world-selection':
            return null;
        case 'operator-creation':
            return <div>Back</div>;
        default:
            return (
                <>
                    <Navigation />
                    <ResourceDisplay />
                </>
            );
    }
};
