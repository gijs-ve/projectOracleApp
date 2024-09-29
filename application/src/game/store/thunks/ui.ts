import { apiClient } from '@/lib/api/client';
import { GameDispatch } from '../store';
import { setAvailableWorlds } from '../ui/slice';

export const getAvailableWorlds = () => async (dispatch: GameDispatch) => {
    try {
        const response = await apiClient.worlds.getWorlds();
        if (response.ok) {
            dispatch(
                setAvailableWorlds(
                    response.data.map((world) => ({
                        id: world.id,
                        name: world.name,
                        createdAt: world.createdAt.toString(),
                    })),
                ),
            );
        }
    } catch (error) {
        console.error(error);
    }
};
