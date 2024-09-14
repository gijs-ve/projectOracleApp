import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax } from '@/lib/util/style/spacing';

type MiddleWindowProps = {
    children: React.ReactNode;
};
export const MiddleWindow = ({ children }: MiddleWindowProps) => {
    return (
        <div
            className={classNames(
                sidePaddingNoMax,
                'row-start-2 col-span-12 row-span-6',
            )}
        >
            <div className={classNames('grid grid-cols-12 h-full')}>
                {children}
            </div>
        </div>
    );
};
