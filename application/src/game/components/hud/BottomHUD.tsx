import { classNames } from '@/lib/util/style/classNames';
import { Inventory } from './Inventory';
import { Selection } from './Selection';

export const BottomHUD = () => {
    return (
        <div
            className={classNames(
                'py-4 max-w-max-page gap-4 col-span-12 row-span-2 row-start-6 border-t-2 border-white grid-cols-12 grid',
            )}
        >
            <Selection />
            <Inventory />
        </div>
    );
};
