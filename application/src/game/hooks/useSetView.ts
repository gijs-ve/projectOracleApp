import { GameView } from '../constants/views';
import { setView } from '../store/ui/slice';
import { useGameDispatch } from './useGameDispatch';
import { useLocalValue } from './useLocalValue';

export const useSetView = (view: GameView) => {
    const dispatch = useGameDispatch();
    const [_, setLocalValueView] = useLocalValue('view', view);
    return () => {
        dispatch(setView(view));
        setLocalValueView(view);
    };
};
