import classNames from 'classnames';

type PointyArrowProps = {
    reversed?: boolean;
    className?: string;
    color?: `fill-${string}`;
};
export const PointyArrow = ({
    reversed,
    className,
    color,
}: PointyArrowProps) => {
    return (
        <svg
            className={classNames('mr-auto h-[30px]', {
                'transform rotate-180': reversed,
            })}
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
        >
            <path
                className={color}
                d="M24 15L24.6902 14.2764L25.4488 15L24.6902 15.7236L24 15ZM11 16C10.4477 16 10 15.5523 10 15C10 14.4477 10.4477 14 11 14V16ZM18.3999 8.27639L24.6902 14.2764L23.3098 15.7236L17.0195 9.72361L18.3999 8.27639ZM24.6902 15.7236L18.3999 21.7236L17.0195 20.2764L23.3098 14.2764L24.6902 15.7236ZM24 16H11V14H24V16Z"
            />
        </svg>
    );
};
