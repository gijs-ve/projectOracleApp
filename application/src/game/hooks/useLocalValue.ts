// local storage
import { useEffect, useState } from 'react';

export const useLocalValue = (key: string, initialValue?: string) => {
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue;
    });
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
};
