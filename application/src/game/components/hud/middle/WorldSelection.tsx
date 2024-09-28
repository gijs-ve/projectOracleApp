'use client';
import { useEffectDispatch } from '@/game/hooks/useEffectDispatch';
import { useGameSelector } from '@/game/hooks/useGameSelector';
import { getAvailableWorlds } from '@/game/store/thunks/ui';

export const WorldSelection = () => {
    useEffectDispatch(getAvailableWorlds);
    const availableWorlds = useGameSelector(
        (state) => state.ui.availableWorlds,
    );
    return null;
};
