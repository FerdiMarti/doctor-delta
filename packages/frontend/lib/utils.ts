import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const CONTRACTS = {
    USDC: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
};
