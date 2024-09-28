'use client';
import { useEffectDispatch } from '@/game/hooks/useEffectDispatch';
import { useGameSelector } from '@/game/hooks/useGameSelector';
import { getAvailableWorlds } from '@/game/store/thunks/ui';

export const WorldSelection = () => {
    console.log('RENDERING WORLD SELECTION');
    useEffectDispatch(getAvailableWorlds);
    const availableWorlds = useGameSelector(
        (state) => state.ui.availableWorlds,
    );

    console.log({ availableWorlds });
    return null;
};
