import { useGameSelector } from './useGameSelector';

export const useAvailableOperators = () => {
    return useGameSelector((state) => state.user.operators);
};
