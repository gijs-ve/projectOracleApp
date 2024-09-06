import { LetterTiers } from 'project-oracle-helpers';

export const LettersInventory = () => {
    const mockLetterInventory: LetterTiers = {
        1: {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
            F: 0,
            G: 2,
            H: 0,
            I: 3,
            J: 0,
            K: 1,
            L: 0,
            M: 0,
            N: 0,
            O: 0,
            P: 2,
            Q: 0,
            R: 0,
            S: 0,
            T: 0,
            U: 0,
            V: 0,
            W: 0,
            X: 0,
            Y: 0,
            Z: 1,
        },
        2: {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 1,
            F: 0,
            G: 0,
            H: 0,
            I: 0,
            J: 0,
            K: 1,
            L: 0,
            M: 0,
            N: 0,
            O: 0,
            P: 2,
            Q: 0,
            R: 0,
            S: 0,
            T: 0,
            U: 0,
            V: 0,
            W: 0,
            X: 0,
            Y: 0,
            Z: 1,
        },
        3: {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
            F: 0,
            G: 0,
            H: 0,
            I: 0,
            J: 0,
            K: 0,
            L: 0,
            M: 0,
            N: 0,
            O: 0,
            P: 0,
            Q: 0,
            R: 0,
            S: 0,
            T: 0,
            U: 0,
            V: 0,
            W: 0,
            X: 0,
            Y: 0,
            Z: 0,
        },
    };
    //map to the following structure: { A: { 1: 0, 2: 0, 3: 0 }, B: { 1: 0, 2: 0, 3: 0 }, ... }
    function transformInventory(inventory: LetterTiers) {
        const result: { [key: string]: { [tier: number]: number } }[] = [];

        // Get all letters from the first tier (assuming all tiers have the same letters)
        const letters = Object.keys(inventory[1]);

        letters.forEach((letter) => {
            const letterObj: { [key: string]: { [tier: number]: number } } = {};
            letterObj[letter] = {};

            // Loop through all tiers and assign the corresponding value
            for (const tier in inventory) {
                letterObj[letter][Number(tier)] =
                    inventory[Number(tier)][letter];
            }

            result.push(letterObj);
        });

        return result;
    }
    const renderedInventory = transformInventory(mockLetterInventory);
    console.log({ renderedInventory });
    return (
        <div className="col-span-2 row-span2 border-2 border-white">
            <div className="grid grid-cols-2 gap-2">
                {renderedInventory.map((letterObj) => {
                    const letter = Object.keys(letterObj)[0];
                    return (
                        <div
                            key={letter}
                            className="flex flex-col items-center"
                        >
                            <h3>{letter}</h3>
                            <div className="flex gap-2">
                                {Object.keys(letterObj[letter]).map((tier) => (
                                    <div key={tier}>
                                        <p>{tier}</p>
                                        <p>{letterObj[letter][Number(tier)]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
