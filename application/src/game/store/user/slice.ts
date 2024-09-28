import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { User } from 'project-oracle-helpers';

type UserState = Omit<
    User<'private'>,
    'operators' | 'createdAt' | 'updatedAt'
> & {
    operators: { id: string; name: string }[];
    createdAt: string;
    updatedAt: string;
};
const initialState: UserState = {
    createdAt: '',
    updatedAt: '',
    id: '',
    name: '',
    victories: 0,
    role: 'USER',
    operators: [],
};

export const userSlice = createSlice({
    name: 'User Slice',
    initialState,
    reducers: {
        setUser: (_, action: PayloadAction<UserState>) => ({
            ...action.payload,
        }),
        addOperator: (
            state,
            action: PayloadAction<{ id: string; name: string }>,
        ) => {
            state.operators = [...state.operators, action.payload];
        },
        deleteOperator: (state, action: PayloadAction<string>) => {
            state.operators = state.operators.filter(
                (operator) => operator.id !== action.payload,
            );
        },
    },
});

export const { setUser, addOperator, deleteOperator } = userSlice.actions;

export default userSlice.reducer;
