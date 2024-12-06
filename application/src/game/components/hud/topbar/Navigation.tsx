import { mainViews } from '@/game/constants/views';
import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax } from '@/lib/util/style/spacing';
import { NavigationItem } from './NavigationItem';

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
                    {mainViews.map(({ text, view }) => (
                        <NavigationItem key={text} view={view} text={text} />
                    ))}
                </div>
            </div>
        </>
    );
};
