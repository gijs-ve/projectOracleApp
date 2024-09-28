import { Reducer } from '@reduxjs/toolkit';
import { useEffect, useRef } from 'react';
import { useGameDispatch } from './useGameDispatch';

export const useEffectDispatch = (action: Reducer) => {
    const dispatch = useGameDispatch();
    const isDispatched = useRef(false);
    useEffect(() => {
        if (!isDispatched.current) {
            isDispatched.current = true;
            dispatch(action(undefined, { type: '' }));
        }
    }, []);
};
