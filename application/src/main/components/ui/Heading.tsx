import { classNames } from '@/lib/util/style/classNames';

type HeadingProps = {
    text: React.ReactNode;
    className?: string;
    h?: 1 | 2 | 3 | 4 | 5 | 6;
};
export const Heading = ({ text, className, h = 2 }: HeadingProps) => {
    const defaultClassName = classNames('font-bold font-t-rex-regular', {
        'text-5xl': h === 1 || h === 2,
        'text-4xl': h === 3,
        'text-3xl': h === 4,
    });
    const Element = `h${h}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    return (
        <Element className={classNames(defaultClassName, className)}>
            {text}
        </Element>
    );
};
