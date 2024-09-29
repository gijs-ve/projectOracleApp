import { configureStore } from '@reduxjs/toolkit';

import operatorReducer from './operator/slice';
import uiReducer from './ui/slice';
import userReducer from './user/slice';
import worldReducer from './world/slice';

const store = configureStore({
    reducer: {
        user: userReducer,
        world: worldReducer,
        operator: operatorReducer,
        ui: uiReducer,
    },
});

export type GameState = ReturnType<typeof store.getState>;
export type GetState = () => GameState;
export type GameDispatch = typeof store.dispatch;
export default store;
