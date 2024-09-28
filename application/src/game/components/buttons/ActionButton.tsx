'use client';
type ActionButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;
export const ActionButton = ({
    onClick,
    children,
    className,
    ...props
}: ActionButtonProps) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className={`bg-g-grayish text-g-white border border-g-white rounded-lg p-2 ${className}`}
        >
            {children}
        </button>
    );
};
