import { useAvailableOperators } from '@/game/hooks/useAvailableOperators';
import { useView } from '@/game/hooks/useView';
import { MiddleWindowContainer } from '../MiddleWindowContainer';

export const OracleSelection = () => {
    const availableOperators = useAvailableOperators();
    const view = useView();
    const showOptions = availableOperators && availableOperators.length > 0;

    return (
        <MiddleWindowContainer>
            {view === 'oracle-selection' && <div>TEst</div>}
        </MiddleWindowContainer>
    );
};
