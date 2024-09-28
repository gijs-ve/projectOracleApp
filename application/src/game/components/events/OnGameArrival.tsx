'use client';
import { useEffectDispatch } from '@/game/hooks/useEffectDispatch';
import { getPrivateUser } from '@/game/store/thunks/users';

export const OnGameArrival = () => {
    useEffectDispatch(getPrivateUser);
    return null;
};
