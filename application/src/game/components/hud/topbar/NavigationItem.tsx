type NavigationItemProps = {
    view: string;
};
export const NavigationItem = ({ view }: NavigationItemProps) => {
    return (
        <button
            key={view}
            className="hover:border-b hover:-translate-y-1 text-2xl py-4 px-2 text-g-white"
        >
            {view.toUpperCase()}
        </button>
    );
};
