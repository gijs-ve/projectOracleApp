import { GameView, setView } from '../store/ui/slice';
import { useGameDispatch } from './useGameDispatch';

export const useSetView = (view: GameView) => {
    const dispatch = useGameDispatch();
    return () => dispatch(setView(view));
};
