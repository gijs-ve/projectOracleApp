import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
    PrivateOperator,
    Resource,
    ResourceType,
    resourceTypes,
} from 'project-oracle-helpers';

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
export type OperatorState = Omit<
    PrivateOperator,
    'resources' | 'createdAt' | 'updatedAt'
> & {
    resources: (Omit<Resource, 'updatedAt'> & {
        updatedAt: string;
    })[];
    createdAt: string;
    updatedAt: string;
};

const initialState: OperatorState = {
    createdAt: '',
    updatedAt: '',
    name: '',
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
    resources: Object.keys(resourceTypes).map((type) => ({
        type: type as ResourceType,
        perMinute: 0,
        updatedAt: new Date().toString(),
        amount: 0,
    })),
    rooms: [],
    inventory: [],
    actions: [],
};

export const operatorSlice = createSlice({
    name: 'Operator Slice',
    initialState,
    reducers: {
        setOperator: (_, action: PayloadAction<OperatorState>) => ({
            ...action.payload,
        }),
        setOperatorId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
    },
});

export const { setOperator, setOperatorId } = operatorSlice.actions;

export default operatorSlice.reducer;
