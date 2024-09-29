import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { World } from 'project-oracle-helpers';

const gameViews = [
    'game',
    'settings',
    'leaderboard',
    'profile',
    'operator-selection',
    'operator-creation',
    'world-selection',
] as const;

export type GameView = (typeof gameViews)[number];
type AvailableWorld = Pick<World, 'id' | 'name'> & { createdAt: string };

export type UiState = {
    booleans: {
        appIsLoading: boolean;
    };
    view: GameView;
    availableWorlds: AvailableWorld[];
};
const initialState: UiState = {
    booleans: {
        appIsLoading: false,
    },
    view: 'operator-selection',
    availableWorlds: [],
};

export const uiSlice = createSlice({
    name: 'Ui Slice',
    initialState,
    reducers: {
        toggleValue: (
            state,
            action: PayloadAction<keyof typeof initialState.booleans>,
        ) => {
            state.booleans[action.payload] = !state.booleans[action.payload];
        },
        setTrue: (
            state,
            action: PayloadAction<keyof typeof initialState.booleans>,
        ) => {
            state.booleans[action.payload] = true;
        },
        setFalse: (
            state,
            action: PayloadAction<keyof typeof initialState.booleans>,
        ) => {
            state.booleans[action.payload] = false;
        },
        setView: (state, action: PayloadAction<GameView>) => {
            state.view = action.payload;
        },
        setAvailableWorlds: (
            state,
            action: PayloadAction<AvailableWorld[]>,
        ) => {
            state.availableWorlds = action.payload;
        },
    },
});

export const { toggleValue, setTrue, setFalse, setView, setAvailableWorlds } =
    uiSlice.actions;

export default uiSlice.reducer;
