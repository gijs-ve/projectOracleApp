import { useAvailableOperators } from '@/game/hooks/useAvailableOperators';
import { useGameDispatch } from '@/game/hooks/useGameDispatch';
import { useSetView } from '@/game/hooks/useSetView';
import { useView } from '@/game/hooks/useView';
import { setOperatorId } from '@/game/store/operator/slice';
import { createOperator } from '@/game/store/thunks/operators';
import { classNames } from '@/lib/util/style/classNames';
import { Heading } from '@/main/components/ui/Heading';
import { Operator } from 'project-oracle-helpers';
import { useState } from 'react';
import { ActionButton } from '../../buttons/ActionButton';
import { MiddleWindowContainer } from './MiddleWindowContainer';

export const OperatorSelection = () => {
    const availableOperators = useAvailableOperators();
    const view = useView();
    if (!availableOperators) {
        return null;
    }

    return (
        <MiddleWindowContainer>
            {view === 'operator-selection' &&
                [0, 1, 2].map((index) => {
                    const operator = availableOperators[index];
                    if (operator) {
                        return (
                            <OperatorChoiceButton
                                key={index}
                                operator={operator}
                            />
                        );
                    }
                    return <OperatorCreationButton key={index} />;
                })}
            {view === 'operator-creation' && <OperatorCreation />}
        </MiddleWindowContainer>
    );
};

type OperatorChoiceProps = {
    operator: Operator;
};

const OperatorChoiceButton = ({
    operator: { name, stars, id },
}: OperatorChoiceProps) => {
    const dispatch = useGameDispatch();
    const setWorldSelection = useSetView('world-selection');
    const onClick = () => {
        dispatch(setOperatorId(id));
        setWorldSelection();
    };
    return (
        <OperatorContainer className="flex-col" onClick={onClick}>
            <span>{name}</span>
            <span>{stars}</span>
        </OperatorContainer>
    );
};

const OperatorCreationButton = () => {
    const setOperatorCreation = useSetView('operator-creation');
    return (
        <OperatorContainer onClick={setOperatorCreation}>
            New operator
        </OperatorContainer>
    );
};

type OperatorContainerProps = {
    children: React.ReactNode;
    className?: string;
} & React.HTMLAttributes<HTMLDivElement>;
const OperatorContainer = ({
    children,
    className,
    ...props
}: OperatorContainerProps) => {
    return (
        <div
            {...props}
            className={classNames(
                'size-40 border rounded-full justify-center items-center flex hover:bg-g-grayish cursor-pointer',
                className,
            )}
        >
            {children}
        </div>
    );
};

const OperatorCreation = () => {
    const dispatch = useGameDispatch();
    const [operatorName, setOperatorName] = useState('');
    return (
        <div className="flex flex-col">
            <Heading h={1} text="Create a new operator" />
            <div className="flex gap-4 mt-8">
                <input
                    value={operatorName}
                    type="text"
                    placeholder="Operator name"
                    className="p-2 text-g-blackish bg-white border border-g-white rounded-lg"
                    onChange={(e) => setOperatorName(e.target.value)}
                />
                <ActionButton
                    onClick={() => {
                        dispatch(createOperator(operatorName));
                    }}
                >
                    Create
                </ActionButton>
            </div>
        </div>
    );
};
