import { ViewItem } from '@/game/constants/views';
import { useSetView } from '@/game/hooks/useSetView';

export const NavigationItem = ({ view, text }: ViewItem) => {
    const setView = useSetView(view);
    return (
        <button
            onClick={setView}
            key={view}
            className="hover:border-b hover:-translate-y-1 text-2xl py-4 px-2 text-g-white"
        >
            {text.toUpperCase()}
        </button>
    );
};
