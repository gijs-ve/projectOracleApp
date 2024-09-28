type MiddleWindowContainerProps = {
    children: React.ReactNode;
};
export const MiddleWindowContainer = ({
    children,
}: MiddleWindowContainerProps) => {
    return <div className="flex justify-center h-full gap-8">{children}</div>;
};
