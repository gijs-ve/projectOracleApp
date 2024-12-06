import { useEffect } from 'react';
import { getPrivateUser } from '../store/thunks/users';
import { setView } from '../store/ui/slice';
import { useEffectDispatch } from './useEffectDispatch';
import { useGameDispatch } from './useGameDispatch';
import { useLocalValue } from './useLocalValue';

export const useOnGameArrival = () => {
    const dispatch = useGameDispatch();
    const [localValueView] = useLocalValue('view', 'world-default');

    useEffectDispatch(getPrivateUser);
    useEffect(() => {
        dispatch(setView(localValueView));
    }, []);

    return null;
};
