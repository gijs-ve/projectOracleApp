'use client';
import { useView } from '@/game/hooks/useView';
import { Navigation } from './Navigation';
import { ResourceDisplay } from './ResourceDisplay';

export const Topbar = () => {
    const view = useView();
    switch (view) {
        case 'home':
            return null;
        default:
            return (
                <>
                    <Navigation />
                    <ResourceDisplay />
                </>
            );
    }
};
