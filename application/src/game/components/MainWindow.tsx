'use client';

import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax } from '@/lib/util/style/spacing';

export const MainWindow = () => {
    return (
        <div
            className={classNames(
                sidePaddingNoMax,
                'row-start-2 col-span-12 row-span-4',
            )}
        >
            <div className={classNames('grid grid-cols-12 h-full')}>Test</div>
        </div>
    );
};
