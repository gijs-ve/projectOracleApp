import { classNames } from '@/lib/util/style/classNames';

type WindowNavButtonProps = {
    text: string;
    onClick: () => void;
    className?: string;
    active?: boolean;
};
export const WindowNavButton = ({
    text,
    onClick,
    className,
    active,
}: WindowNavButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={classNames(
                'text-white text-base font-exo border overflow-hidden p-1 px-2',
                className,
                active
                    ? ''
                    : 'border-white border-opacity-0 hover:border-opacity-70',
            )}
        >
            {text}
        </button>
    );
};
