import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax } from '@/lib/util/style/spacing';
import { Inventory } from './Inventory';
import { LettersInventory } from './LettersInventory';

export const BottomHUD = () => {
    return (
        <div
            className={classNames(
                sidePaddingNoMax,
                'py-4 mb-4 max-w-max-page col-span-12 row-span-2 row-start-6 grid-cols-12 grid',
            )}
        >
            <LettersInventory />
            <Inventory />
        </div>
    );
};
