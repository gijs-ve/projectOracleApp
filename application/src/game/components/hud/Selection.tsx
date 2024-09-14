import { classNames } from '@/lib/util/style/classNames';

export const Selection = () => {
    return (
        <div className={classNames('p-2 border border-white col-span-3 flex')}>
            <div className="aspect-square border rounded-full flex items-center justify-center">
                Test
            </div>
        </div>
    );
};
