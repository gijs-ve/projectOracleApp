import { apiClient } from '@/lib/api/client';
import { GameDispatch } from '../store';
import { setAvailableWorlds } from '../ui/slice';

export const getAvailableWorlds = () => async (dispatch: GameDispatch) => {
    try {
        const response = await apiClient.worlds.getWorlds();
        return;
        if (response.ok) {
            console.log({ response });
            dispatch(setAvailableWorlds(response.data));
        }
    } catch (error) {
        console.error(error);
    }
};
