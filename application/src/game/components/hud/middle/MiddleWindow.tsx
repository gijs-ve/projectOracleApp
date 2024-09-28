'use client';
import { useView } from '@/game/hooks/useView';
import { classNames } from '@/lib/util/style/classNames';
import { sidePaddingNoMax } from '@/lib/util/style/spacing';
import { LeftWindow } from './LeftWindow';
import { OperatorSelection } from './OperatorSelection';
import { WorldSelection } from './WorldSelection';

type MiddleWindowProps = {};
export const MiddleWindow = ({}: MiddleWindowProps) => {
    return (
        <div
            className={classNames(
                sidePaddingNoMax,
                'row-start-2 col-span-12 row-span-6',
            )}
        >
            <RenderMiddleWindow />
            <div className={classNames('grid grid-cols-12 h-full')}></div>
        </div>
    );
};

const RenderMiddleWindow = () => {
    const view = useView();
    console.log({ view });
    switch (view) {
        case 'operator-selection':
        case 'operator-creation':
            return <OperatorSelection />;
        case 'world-selection':
            return <WorldSelection />;
        default:
            return (
                <>
                    <LeftWindow />
                    <div className="col-span-10 border-t border-r row-span-4">
                        transparent
                    </div>
                </>
            );
    }
};
