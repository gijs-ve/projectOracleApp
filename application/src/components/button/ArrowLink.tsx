import classNames from 'classnames';
import Link from 'next/link';
import { PointyArrow } from '../ui/PointyArrow';
type ArrowLinkProps = {
    href: string;
    text: string;
    reversed?: boolean;
    className?: string;
    textColor?: `text-${string}`;
    arrowColor?: `fill-${string}`;
};
export const ArrowLink = ({
    href,
    text,
    reversed,
    className,
    textColor = 'text-white',
    arrowColor = 'fill-white',
}: ArrowLinkProps) => {
    return (
        <Link
            href={href}
            className={classNames(
                'font-exo  flex cursor-pointer items-center',
                className,
                textColor,
            )}
        >
            {reversed && <PointyArrow color={arrowColor} reversed />} {text}{' '}
            {!reversed && <PointyArrow color={arrowColor} />}
        </Link>
    );
};
