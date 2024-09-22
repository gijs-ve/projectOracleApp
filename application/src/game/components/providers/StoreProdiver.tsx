'use client';

import store from '@/game/store/store';
import { Provider } from 'react-redux';

type StoreProviderProps = {
    children: React.ReactNode;
    className?: string;
};

export const StoreProvider = ({ children, className }: StoreProviderProps) => {
    return (
        <main className={className}>
            <Provider store={store}>{children}</Provider>
        </main>
    );
};
