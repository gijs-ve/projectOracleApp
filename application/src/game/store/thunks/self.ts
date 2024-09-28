import { apiClient } from '@/lib/api/client';
import { deleteToken, getToken } from '@/lib/localStorage/gameToken';
import { GameDispatch } from '../store';
import { setFalse } from '../ui/slice';

export const validateToken = () => async (dispatch: GameDispatch) => {
    const token = getToken();
    if (!token) {
        dispatch(logOut());
        return;
    }
    const { ok } = await apiClient.auth.validateToken(token);
    if (!ok) {
        dispatch(logOut());
    }
};

export const logOut = () => async (dispatch: GameDispatch) => {
    deleteToken();
    dispatch(setFalse('appIsLoading'));
    if (typeof window !== 'undefined') {
        window.location.href = '/login';
    }
};
