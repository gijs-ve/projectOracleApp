'use client';
import { useEffectDispatch } from '@/game/hooks/useEffectDispatch';
import { useGameDispatch } from '@/game/hooks/useGameDispatch';
import { useGameSelector } from '@/game/hooks/useGameSelector';
import { setWorld } from '@/game/store/thunks/operators';
import { getAvailableWorlds } from '@/game/store/thunks/ui';
import { ActionButton } from '../../buttons/ActionButton';

export const WorldSelection = () => {
    useEffectDispatch(getAvailableWorlds);
    const availableWorlds = useGameSelector(
        (state) => state.ui.availableWorlds,
    );
    return (
        <div className="flex flex-col w-fit mx-auto">
            {availableWorlds.map(({ id, name }) => (
                <WorldSelectButton key={id} id={id} name={name} />
            ))}
        </div>
    );
};

const WorldSelectButton = ({ id, name }: { id: string; name: string }) => {
    const dispatch = useGameDispatch();
    return (
        <ActionButton onClick={() => dispatch(setWorld(id))}>
            {name}
        </ActionButton>
    );
};
