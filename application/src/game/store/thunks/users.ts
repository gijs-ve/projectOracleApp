import { apiClient } from '@/lib/api/client';
import { getToken } from '@/lib/localStorage/gameToken';
import { GameDispatch } from '../store';
import { setFalse, setTrue } from '../ui/slice';
import { setUser } from '../user/slice';
import { logOut } from './self';

export const getPrivateUser = () => async (dispatch: GameDispatch) => {
    dispatch(setTrue('appIsLoading'));
    const token = getToken();
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
