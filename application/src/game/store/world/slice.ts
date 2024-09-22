import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { World } from 'project-oracle-helpers';

const initialState: World = {
    id: '',
    name: '',
    depletedWords: [],
    operators: [],
    targetStars: 0,
    currentTime: new Date(),
};

export const worldSlice = createSlice({
    name: 'World Slice',
    initialState,
    reducers: {
        setWorld: (_, action: PayloadAction<World>) => ({
            ...action.payload,
        }),
    },
});

export const { setWorld } = worldSlice.actions;

export default worldSlice.reducer;
