'use client';
import { useGameDispatch } from '@/game/hooks/useGameDispatch';
import { getPrivateUser } from '@/game/store/thunks/users';
import { useEffect } from 'react';

export const OnGameArrival = () => {
    const dispatch = useGameDispatch();
    useEffect(() => {
        dispatch(getPrivateUser());
    }, []);
    return null;
};
