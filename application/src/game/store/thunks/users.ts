import { apiClient } from '@/lib/api/client';
import { GameDispatch } from '../store';
import { setFalse, setTrue } from '../ui/slice';
import { setUser } from '../user/slice';
import { logOut, retrieveToken } from './self';

export const getPrivateUser = () => async (dispatch: GameDispatch) => {
    dispatch(setTrue('appIsLoading'));
    const token = dispatch(retrieveToken());
    const response = await apiClient.users.getPrivateUser(token);

    if (response.ok) {
        const { createdAt, updatedAt, ...user } = response.data;
        dispatch(
            setUser({
                ...user,
                createdAt: createdAt.toString(),
                updatedAt: updatedAt.toString(),
            }),
        );
        dispatch(setFalse('appIsLoading'));
        return;
    }
    dispatch(logOut());
};
