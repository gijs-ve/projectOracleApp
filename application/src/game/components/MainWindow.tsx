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
            <div className={classNames('grid grid-cols-12 h-full')}>
                <div className="col-span-2 rows-8 border-2 border-white">
                    Test
                </div>
            </div>
        </div>
    );
};
