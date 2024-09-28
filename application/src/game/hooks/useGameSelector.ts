import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { GameState } from '../store/store';

export const useGameSelector: TypedUseSelectorHook<GameState> = useSelector;
