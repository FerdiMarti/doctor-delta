// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import { ERC20 } from '@openzeppelin/contracts/token/ERC20/ERC20.sol';

//Contract to force hardhat to compile
abstract contract Include is ERC20 {
    constructor() {
        // Empty constructor
    }
}
