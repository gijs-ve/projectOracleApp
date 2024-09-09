import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax } from '@/lib/util/style/spacing';
import { NavigationItem } from './NavigationItem';

const MainViews = ['operator', 'rooms', 'oracles', 'vendors'];

export const Navigation = () => {
    return (
        <>
            <div className="col-span-7 row-span-1 row-start-1 drop-shadow-md">
                <div
                    className={classNames(
                        sidePaddingNoMax,
                        'h-full flex items-center gap-8 sm:gap-12 md:gap-16',
                    )}
                >
                    {MainViews.map((view) => (
                        <NavigationItem key={view} view={view} />
                    ))}
                </div>
            </div>
        </>
    );
};
