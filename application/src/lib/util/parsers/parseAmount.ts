export const parseAmount = (amount: number) => {
    if (amount >= 1000000) {
        return `${(amount / 1000000).toFixed(2)}m`;
    }
    if (amount >= 1000) {
        return `${(amount / 1000).toFixed(2)}k`;
    }
    return amount;
};
