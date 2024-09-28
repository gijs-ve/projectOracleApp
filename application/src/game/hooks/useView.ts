import { useGameSelector } from './useGameSelector';

export const useView = () => {
    return useGameSelector((state) => state.ui.view);
};
