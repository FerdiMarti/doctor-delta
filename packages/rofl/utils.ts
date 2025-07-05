import { ethers } from 'ethers';

export function hashData(dataTypes: string[], dataValues: any[]): string {
    const coder = new ethers.AbiCoder();
    const bytes = coder.encode(dataTypes, dataValues);
    const hash = ethers.keccak256(bytes);

    return hash;
}

export function fundingFeeAmountPerSizeKey(market: string, collateralToken: string, isLong: boolean): string {
    return hashData(['bytes32', 'address', 'address', 'bool'], [FUNDING_FEE_AMOUNT_PER_SIZE, market, collateralToken, isLong]);
}

export const FUNDING_FEE_AMOUNT_PER_SIZE = hashString('FUNDING_FEE_AMOUNT_PER_SIZE');

export function hashString(string: string): string {
    return hashData(['string'], [string]);
}
