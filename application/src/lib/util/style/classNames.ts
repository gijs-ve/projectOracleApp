import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const classNames = (...args: ClassValue[]) => {
    return twMerge(clsx(args));
};
