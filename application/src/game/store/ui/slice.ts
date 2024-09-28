import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const gameViews = [
    'home',
    'game',
    'settings',
    'leaderboard',
    'profile',
] as const;

type GameView = (typeof gameViews)[number];
const initialState: {
    booleans: {
        appIsLoading: boolean;
    };
    view: GameView;
} = {
    booleans: {
        appIsLoading: false,
    },
    view: 'home',
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
    },
});

export const { toggleValue, setTrue, setFalse } = uiSlice.actions;

export default uiSlice.reducer;
