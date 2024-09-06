'use client';

import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax, ySidePadding } from '@/lib/util/style/spacing';

export const MainWindow = () => {
    return (
        <div
            className={classNames(
                sidePaddingNoMax,
                ySidePadding,
                'row-start-2 col-span-12 row-span-4 max-page:border-x-2',
            )}
        >
            MainWindow
        </div>
    );
};
