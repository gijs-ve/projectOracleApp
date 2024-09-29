import { GetState } from '@/game/store/store';
import { apiClient } from '@/lib/api/client';
import { setOperator } from '../operator/slice';
import { GameDispatch } from '../store';
import { retrieveToken } from './self';

export const createOperator =
    (name: string) => async (dispatch: GameDispatch) => {
        try {
            const token = dispatch(retrieveToken());
            const response = await apiClient.operators.createOperator({
                name,
                token,
            });
            if (response.ok) {
                const { createdAt, updatedAt, resources, ...operator } =
                    response.data;

                dispatch(
                    setOperator({
                        ...operator,
                        createdAt: new Date(createdAt).toString(),
                        updatedAt: new Date(updatedAt).toString(),
                        resources: resources.map((resource) => ({
                            ...resource,
                            updatedAt: new Date(resource.updatedAt).toString(),
                        })),
                    }),
                );
            }
        } catch (error) {
            console.error(error);
        }
    };

export const getPrivateOperator =
    (id: string) => async (dispatch: GameDispatch) => {
        try {
            const token = dispatch(retrieveToken());
            const response = await apiClient.operators.getPrivateOperator({
                operatorId: id,
                token,
            });

            if (response.ok) {
                const { createdAt, updatedAt, resources, ...operator } =
                    response.data;

                dispatch(
                    setOperator({
                        ...operator,
                        createdAt: new Date(createdAt).toString(),
                        updatedAt: new Date(updatedAt).toString(),
                        resources: resources.map((resource) => ({
                            ...resource,
                            updatedAt: new Date(resource.updatedAt).toString(),
                        })),
                    }),
                );
            }
        } catch (error) {
            console.error(error);
        }
    };

export const setWorld =
    (worldId: string) => async (dispatch: GameDispatch, getState: GetState) => {
        try {
            const token = dispatch(retrieveToken());
            const { operator } = getState();
            const response = await apiClient.operators.setWorld({
                worldId,
                token,
                operatorId: operator.id,
            });

            if (response.ok) {
                dispatch(getPrivateOperator(worldId));
            }
        } catch (error) {
            console.error(error);
        }
    };
