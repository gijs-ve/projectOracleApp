import { useAvailableOperators } from '@/game/hooks/useAvailableOperators';

export const OperatorSelection = () => {
    const availableOperators = useAvailableOperators();
    console.log({ availableOperators });
    if (!availableOperators) {
        return null;
    }

    return (
        <div className="flex justify-center h-full gap-8">
            {[1, 2, 3].map((index) => {
                const operator = availableOperators[index];
                if (operator) {
                    return <OperatorChoice key={index} operator={operator} />;
                }
                return <OperatorCreation key={index} />;
            })}
        </div>
    );
};

type OperatorChoiceProps = {
    operator: { name: string; id: string };
};
const OperatorChoice = ({ operator }: OperatorChoiceProps) => {
    return <OperatorContainer>{operator.name}</OperatorContainer>;
};

const OperatorCreation = () => {
    return <OperatorContainer>New operator</OperatorContainer>;
};

type OperatorContainerProps = {
    children: React.ReactNode;
};
const OperatorContainer = ({ children }: OperatorContainerProps) => {
    return (
        <div className="size-40 border rounded-full justify-center items-center flex hover:bg-g-grayish cursor-pointer">
            {children}
        </div>
    );
};
