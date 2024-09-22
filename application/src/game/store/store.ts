import { configureStore } from '@reduxjs/toolkit';

import operatorReducer from './operator/slice';
import worldReducer from './world/slice';

const store = configureStore({
    reducer: {
        operator: operatorReducer,
        world: worldReducer,
    },
});

export type GameState = ReturnType<typeof store.getState>;
export type GameDispatch = typeof store.dispatch;
export default store;
