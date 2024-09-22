import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { PrivateOperator } from 'project-oracle-helpers';

const initialLetters = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0,
    I: 0,
    J: 0,
    K: 0,
    L: 0,
    M: 0,
    N: 0,
    O: 0,
    P: 0,
    Q: 0,
    R: 0,
    S: 0,
    T: 0,
    U: 0,
    V: 0,
    W: 0,
    X: 0,
    Y: 0,
    Z: 0,
};

const initialState: PrivateOperator = {
    id: '',
    userId: '',
    worldId: '',
    stars: 0,
    letters: {
        1: initialLetters,
        2: initialLetters,
        3: initialLetters,
    },
    unlockedWords: [],
    resources: [],
    rooms: [],
    inventory: [],
    actions: [],
};

export const operatorSlice = createSlice({
    name: 'Operator Slice',
    initialState,
    reducers: {
        setOperator: (_, action: PayloadAction<PrivateOperator>) => ({
            ...action.payload,
        }),
    },
});

export const { setOperator } = operatorSlice.actions;

export default operatorSlice.reducer;
