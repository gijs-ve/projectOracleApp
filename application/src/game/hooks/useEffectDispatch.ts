import { Reducer } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useGameDispatch } from './useGameDispatch';

export const useEffectDispatch = (action: Reducer) => {
    const dispatch = useGameDispatch();
    useEffect(() => {
        dispatch(action(undefined, { type: '' }));
    }, []);
};
