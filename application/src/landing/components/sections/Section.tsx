import { classNames } from '@/lib/util/style/classNames';
import { sidePadding } from '@/lib/util/style/spacing';
import { ComponentProps } from 'react';

type SectionProps = {
    className: string;
    children: React.ReactNode;
    innerClassName?: string;
    noGrid?: boolean;
    noSidePadding?: boolean;
    isFirst?: boolean;
} & ComponentProps<'section'>;
export const Section = ({
    className,
    innerClassName,
    children,
    noGrid,
    isFirst,
    noSidePadding,
    ...sectionProps
}: SectionProps) => {
    return (
        <section className={classNames('w-svw', className)} {...sectionProps}>
            <div
                className={classNames(
                    !noSidePadding && sidePadding,
                    'relative',
                    {
                        'grid grid-cols-12': !noGrid,
                    },
                    innerClassName,
                )}
            >
                {children}
            </div>
        </section>
    );
};
