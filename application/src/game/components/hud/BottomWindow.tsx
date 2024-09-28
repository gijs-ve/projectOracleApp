import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax } from '@/lib/util/style/spacing';
import { Inventory } from './Inventory';
import { Selection } from './Selection';

export const BottomHUD = () => {
    return (
        <div
            className={classNames(
                sidePaddingNoMax,
                'mb-4 max-w-max-page col-span-12 row-span-2 row-start-8 grid-cols-12 grid',
            )}
        >
            <Selection />
            <Inventory />
        </div>
    );
};
