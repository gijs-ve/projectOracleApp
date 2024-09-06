import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax } from '@/lib/util/style/spacing';

const MainViews = ['rooms', 'oracles', 'vendors'];

export const Navigation = () => {
    return (
        <div className="col-span-12 row-span-1  row-start-1 border-b-white border-b-2 drop-shadow-md">
            <div
                className={classNames(
                    sidePaddingNoMax,
                    'h-full flex items-center gap-8 sm:gap-12 md:gap-16',
                )}
            >
                {MainViews.map((view) => (
                    <button key={view} className="text-g-white">
                        {view}
                    </button>
                ))}
            </div>
        </div>
    );
};
