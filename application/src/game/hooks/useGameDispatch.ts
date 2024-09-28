import type { GameDispatch } from '@/game/store/store';
import { useDispatch } from 'react-redux';

export const useGameDispatch: () => GameDispatch = useDispatch;
