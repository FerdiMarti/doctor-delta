export const datastoreAbi = {
    address: '0xFD70de6b91282D8017aA4E741e9Ae325CAb992d8',
    abi: [
        {
            inputs: [
                {
                    internalType: 'contract RoleStore',
                    name: '_roleStore',
                    type: 'address',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            inputs: [
                {
                    internalType: 'address',
                    name: 'msgSender',
                    type: 'address',
                },
                {
                    internalType: 'string',
                    name: 'role',
                    type: 'string',
                },
            ],
            name: 'Unauthorized',
            type: 'error',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'address',
                    name: 'value',
                    type: 'address',
                },
            ],
            name: 'addAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: 'value',
                    type: 'bytes32',
                },
            ],
            name: 'addBytes32',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'addUint',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'addressArrayValues',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'addressValues',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'int256',
                    name: 'value',
                    type: 'int256',
                },
            ],
            name: 'applyBoundedDeltaToUint',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'int256',
                    name: 'value',
                    type: 'int256',
                },
            ],
            name: 'applyDeltaToInt',
            outputs: [
                {
                    internalType: 'int256',
                    name: '',
                    type: 'int256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'int256',
                    name: 'value',
                    type: 'int256',
                },
                {
                    internalType: 'string',
                    name: 'errorMessage',
                    type: 'string',
                },
            ],
            name: 'applyDeltaToUint',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'applyDeltaToUint',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'boolArrayValues',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'boolValues',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'bytes32ArrayValues',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'bytes32Values',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'address',
                    name: 'value',
                    type: 'address',
                },
            ],
            name: 'containsAddress',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: 'value',
                    type: 'bytes32',
                },
            ],
            name: 'containsBytes32',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'containsUint',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'int256',
                    name: 'value',
                    type: 'int256',
                },
            ],
            name: 'decrementInt',
            outputs: [
                {
                    internalType: 'int256',
                    name: '',
                    type: 'int256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'decrementUint',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getAddress',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getAddressArray',
            outputs: [
                {
                    internalType: 'address[]',
                    name: '',
                    type: 'address[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
            ],
            name: 'getAddressCount',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'start',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'end',
                    type: 'uint256',
                },
            ],
            name: 'getAddressValuesAt',
            outputs: [
                {
                    internalType: 'address[]',
                    name: '',
                    type: 'address[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getBool',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getBoolArray',
            outputs: [
                {
                    internalType: 'bool[]',
                    name: '',
                    type: 'bool[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getBytes32',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getBytes32Array',
            outputs: [
                {
                    internalType: 'bytes32[]',
                    name: '',
                    type: 'bytes32[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
            ],
            name: 'getBytes32Count',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'start',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'end',
                    type: 'uint256',
                },
            ],
            name: 'getBytes32ValuesAt',
            outputs: [
                {
                    internalType: 'bytes32[]',
                    name: '',
                    type: 'bytes32[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getInt',
            outputs: [
                {
                    internalType: 'int256',
                    name: '',
                    type: 'int256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getIntArray',
            outputs: [
                {
                    internalType: 'int256[]',
                    name: '',
                    type: 'int256[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getString',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getStringArray',
            outputs: [
                {
                    internalType: 'string[]',
                    name: '',
                    type: 'string[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getUint',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'getUintArray',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
            ],
            name: 'getUintCount',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'start',
                    type: 'uint256',
                },
                {
                    internalType: 'uint256',
                    name: 'end',
                    type: 'uint256',
                },
            ],
            name: 'getUintValuesAt',
            outputs: [
                {
                    internalType: 'uint256[]',
                    name: '',
                    type: 'uint256[]',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'int256',
                    name: 'value',
                    type: 'int256',
                },
            ],
            name: 'incrementInt',
            outputs: [
                {
                    internalType: 'int256',
                    name: '',
                    type: 'int256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'incrementUint',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'intArrayValues',
            outputs: [
                {
                    internalType: 'int256',
                    name: '',
                    type: 'int256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'intValues',
            outputs: [
                {
                    internalType: 'int256',
                    name: '',
                    type: 'int256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'address',
                    name: 'value',
                    type: 'address',
                },
            ],
            name: 'removeAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeAddress',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeAddressArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeBool',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeBoolArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: 'value',
                    type: 'bytes32',
                },
            ],
            name: 'removeBytes32',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeBytes32',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeBytes32Array',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeInt',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeIntArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeString',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeStringArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeUint',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'setKey',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'removeUint',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
            ],
            name: 'removeUintArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'roleStore',
            outputs: [
                {
                    internalType: 'contract RoleStore',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'address',
                    name: 'value',
                    type: 'address',
                },
            ],
            name: 'setAddress',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'address[]',
                    name: 'value',
                    type: 'address[]',
                },
            ],
            name: 'setAddressArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'bool',
                    name: 'value',
                    type: 'bool',
                },
            ],
            name: 'setBool',
            outputs: [
                {
                    internalType: 'bool',
                    name: '',
                    type: 'bool',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'bool[]',
                    name: 'value',
                    type: 'bool[]',
                },
            ],
            name: 'setBoolArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32',
                    name: 'value',
                    type: 'bytes32',
                },
            ],
            name: 'setBytes32',
            outputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'bytes32[]',
                    name: 'value',
                    type: 'bytes32[]',
                },
            ],
            name: 'setBytes32Array',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'int256',
                    name: 'value',
                    type: 'int256',
                },
            ],
            name: 'setInt',
            outputs: [
                {
                    internalType: 'int256',
                    name: '',
                    type: 'int256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'int256[]',
                    name: 'value',
                    type: 'int256[]',
                },
            ],
            name: 'setIntArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'string',
                    name: 'value',
                    type: 'string',
                },
            ],
            name: 'setString',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'string[]',
                    name: 'value',
                    type: 'string[]',
                },
            ],
            name: 'setStringArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: 'value',
                    type: 'uint256',
                },
            ],
            name: 'setUint',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: 'key',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256[]',
                    name: 'value',
                    type: 'uint256[]',
                },
            ],
            name: 'setUintArray',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'stringArrayValues',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'stringValues',
            outputs: [
                {
                    internalType: 'string',
                    name: '',
                    type: 'string',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            name: 'uintArrayValues',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'bytes32',
                    name: '',
                    type: 'bytes32',
                },
            ],
            name: 'uintValues',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
    ],
    transactionHash: '0xadef634d96199f89abe86c15ea35d8957d9388b5767f92f93b7fec643ec0805e',
    receipt: {
        to: null,
        from: '0xE7BfFf2aB721264887230037940490351700a068',
        contractAddress: '0xFD70de6b91282D8017aA4E741e9Ae325CAb992d8',
        transactionIndex: 1,
        gasUsed: '11977545',
        logsBloom:
            '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        blockHash: '0x3ca68771f728b8f9b2da029b238895eff0a853bd83b4bb7276741b82762f9b47',
        transactionHash: '0xadef634d96199f89abe86c15ea35d8957d9388b5767f92f93b7fec643ec0805e',
        logs: [],
        blockNumber: 107737251,
        cumulativeGasUsed: '11977545',
        status: 1,
        byzantium: true,
    },
    args: ['0x3c3d99FD298f679DBC2CEcd132b4eC4d0F5e6e72'],
    numDeployments: 1,
    solcInputHash: '8c38905f7fa580b3f5fcce85ee3cb071',
    metadata:
        '{"compiler":{"version":"0.8.18+commit.87f61d96"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract RoleStore","name":"_roleStore","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"msgSender","type":"address"},{"internalType":"string","name":"role","type":"string"}],"name":"Unauthorized","type":"error"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"address","name":"value","type":"address"}],"name":"addAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"bytes32","name":"value","type":"bytes32"}],"name":"addBytes32","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"addUint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressArrayValues","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"addressValues","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"int256","name":"value","type":"int256"}],"name":"applyBoundedDeltaToUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"int256","name":"value","type":"int256"}],"name":"applyDeltaToInt","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"int256","name":"value","type":"int256"},{"internalType":"string","name":"errorMessage","type":"string"}],"name":"applyDeltaToUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"applyDeltaToUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"boolArrayValues","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"boolValues","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"bytes32ArrayValues","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"bytes32Values","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"address","name":"value","type":"address"}],"name":"containsAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"bytes32","name":"value","type":"bytes32"}],"name":"containsBytes32","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"containsUint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"int256","name":"value","type":"int256"}],"name":"decrementInt","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"decrementUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getAddressArray","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"}],"name":"getAddressCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getAddressValuesAt","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getBool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getBoolArray","outputs":[{"internalType":"bool[]","name":"","type":"bool[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getBytes32Array","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"}],"name":"getBytes32Count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getBytes32ValuesAt","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getInt","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getIntArray","outputs":[{"internalType":"int256[]","name":"","type":"int256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getStringArray","outputs":[{"internalType":"string[]","name":"","type":"string[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"getUintArray","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"}],"name":"getUintCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"getUintValuesAt","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"int256","name":"value","type":"int256"}],"name":"incrementInt","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"incrementUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"intArrayValues","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"intValues","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"address","name":"value","type":"address"}],"name":"removeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeAddressArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeBool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeBoolArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"bytes32","name":"value","type":"bytes32"}],"name":"removeBytes32","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeBytes32","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeBytes32Array","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeInt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeIntArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeString","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeStringArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeUint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"setKey","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"removeUint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"}],"name":"removeUintArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"roleStore","outputs":[{"internalType":"contract RoleStore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"address","name":"value","type":"address"}],"name":"setAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"address[]","name":"value","type":"address[]"}],"name":"setAddressArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setBool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bool[]","name":"value","type":"bool[]"}],"name":"setBoolArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes32","name":"value","type":"bytes32"}],"name":"setBytes32","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"bytes32[]","name":"value","type":"bytes32[]"}],"name":"setBytes32Array","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"int256","name":"value","type":"int256"}],"name":"setInt","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"int256[]","name":"value","type":"int256[]"}],"name":"setIntArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"string","name":"value","type":"string"}],"name":"setString","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"string[]","name":"value","type":"string[]"}],"name":"setStringArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setUint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"key","type":"bytes32"},{"internalType":"uint256[]","name":"value","type":"uint256[]"}],"name":"setUintArray","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stringArrayValues","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"stringValues","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"uintArrayValues","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"uintValues","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"contracts/data/DataStore.sol":"DataStore"},"evmVersion":"paris","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":10},"remappings":[]},"sources":{"@openzeppelin/contracts/utils/math/SafeCast.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (utils/math/SafeCast.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Wrappers over Solidity\'s uintXX/intXX casting operators with added overflow\\n * checks.\\n *\\n * Downcasting from uint256/int256 in Solidity does not revert on overflow. This can\\n * easily result in undesired exploitation or bugs, since developers usually\\n * assume that overflows raise errors. `SafeCast` restores this intuition by\\n * reverting the transaction when such an operation overflows.\\n *\\n * Using this library instead of the unchecked operations eliminates an entire\\n * class of bugs, so it\'s recommended to use it always.\\n *\\n * Can be combined with {SafeMath} and {SignedSafeMath} to extend it to smaller types, by performing\\n * all math on `uint256` and `int256` and then downcasting.\\n */\\nlibrary SafeCast {\\n    /**\\n     * @dev Returns the downcasted uint248 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint248).\\n     *\\n     * Counterpart to Solidity\'s `uint248` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 248 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint248(uint256 value) internal pure returns (uint248) {\\n        require(value <= type(uint248).max, \\"SafeCast: value doesn\'t fit in 248 bits\\");\\n        return uint248(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint240 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint240).\\n     *\\n     * Counterpart to Solidity\'s `uint240` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 240 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint240(uint256 value) internal pure returns (uint240) {\\n        require(value <= type(uint240).max, \\"SafeCast: value doesn\'t fit in 240 bits\\");\\n        return uint240(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint232 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint232).\\n     *\\n     * Counterpart to Solidity\'s `uint232` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 232 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint232(uint256 value) internal pure returns (uint232) {\\n        require(value <= type(uint232).max, \\"SafeCast: value doesn\'t fit in 232 bits\\");\\n        return uint232(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint224 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint224).\\n     *\\n     * Counterpart to Solidity\'s `uint224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     *\\n     * _Available since v4.2._\\n     */\\n    function toUint224(uint256 value) internal pure returns (uint224) {\\n        require(value <= type(uint224).max, \\"SafeCast: value doesn\'t fit in 224 bits\\");\\n        return uint224(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint216 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint216).\\n     *\\n     * Counterpart to Solidity\'s `uint216` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 216 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint216(uint256 value) internal pure returns (uint216) {\\n        require(value <= type(uint216).max, \\"SafeCast: value doesn\'t fit in 216 bits\\");\\n        return uint216(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint208 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint208).\\n     *\\n     * Counterpart to Solidity\'s `uint208` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 208 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint208(uint256 value) internal pure returns (uint208) {\\n        require(value <= type(uint208).max, \\"SafeCast: value doesn\'t fit in 208 bits\\");\\n        return uint208(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint200 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint200).\\n     *\\n     * Counterpart to Solidity\'s `uint200` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 200 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint200(uint256 value) internal pure returns (uint200) {\\n        require(value <= type(uint200).max, \\"SafeCast: value doesn\'t fit in 200 bits\\");\\n        return uint200(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint192 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint192).\\n     *\\n     * Counterpart to Solidity\'s `uint192` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 192 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint192(uint256 value) internal pure returns (uint192) {\\n        require(value <= type(uint192).max, \\"SafeCast: value doesn\'t fit in 192 bits\\");\\n        return uint192(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint184 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint184).\\n     *\\n     * Counterpart to Solidity\'s `uint184` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 184 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint184(uint256 value) internal pure returns (uint184) {\\n        require(value <= type(uint184).max, \\"SafeCast: value doesn\'t fit in 184 bits\\");\\n        return uint184(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint176 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint176).\\n     *\\n     * Counterpart to Solidity\'s `uint176` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 176 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint176(uint256 value) internal pure returns (uint176) {\\n        require(value <= type(uint176).max, \\"SafeCast: value doesn\'t fit in 176 bits\\");\\n        return uint176(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint168 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint168).\\n     *\\n     * Counterpart to Solidity\'s `uint168` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 168 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint168(uint256 value) internal pure returns (uint168) {\\n        require(value <= type(uint168).max, \\"SafeCast: value doesn\'t fit in 168 bits\\");\\n        return uint168(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint160 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint160).\\n     *\\n     * Counterpart to Solidity\'s `uint160` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 160 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint160(uint256 value) internal pure returns (uint160) {\\n        require(value <= type(uint160).max, \\"SafeCast: value doesn\'t fit in 160 bits\\");\\n        return uint160(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint152 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint152).\\n     *\\n     * Counterpart to Solidity\'s `uint152` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 152 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint152(uint256 value) internal pure returns (uint152) {\\n        require(value <= type(uint152).max, \\"SafeCast: value doesn\'t fit in 152 bits\\");\\n        return uint152(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint144 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint144).\\n     *\\n     * Counterpart to Solidity\'s `uint144` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 144 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint144(uint256 value) internal pure returns (uint144) {\\n        require(value <= type(uint144).max, \\"SafeCast: value doesn\'t fit in 144 bits\\");\\n        return uint144(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint136 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint136).\\n     *\\n     * Counterpart to Solidity\'s `uint136` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 136 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint136(uint256 value) internal pure returns (uint136) {\\n        require(value <= type(uint136).max, \\"SafeCast: value doesn\'t fit in 136 bits\\");\\n        return uint136(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint128 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint128).\\n     *\\n     * Counterpart to Solidity\'s `uint128` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 128 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint128(uint256 value) internal pure returns (uint128) {\\n        require(value <= type(uint128).max, \\"SafeCast: value doesn\'t fit in 128 bits\\");\\n        return uint128(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint120 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint120).\\n     *\\n     * Counterpart to Solidity\'s `uint120` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 120 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint120(uint256 value) internal pure returns (uint120) {\\n        require(value <= type(uint120).max, \\"SafeCast: value doesn\'t fit in 120 bits\\");\\n        return uint120(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint112 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint112).\\n     *\\n     * Counterpart to Solidity\'s `uint112` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 112 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint112(uint256 value) internal pure returns (uint112) {\\n        require(value <= type(uint112).max, \\"SafeCast: value doesn\'t fit in 112 bits\\");\\n        return uint112(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint104 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint104).\\n     *\\n     * Counterpart to Solidity\'s `uint104` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 104 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint104(uint256 value) internal pure returns (uint104) {\\n        require(value <= type(uint104).max, \\"SafeCast: value doesn\'t fit in 104 bits\\");\\n        return uint104(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint96 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint96).\\n     *\\n     * Counterpart to Solidity\'s `uint96` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 96 bits\\n     *\\n     * _Available since v4.2._\\n     */\\n    function toUint96(uint256 value) internal pure returns (uint96) {\\n        require(value <= type(uint96).max, \\"SafeCast: value doesn\'t fit in 96 bits\\");\\n        return uint96(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint88 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint88).\\n     *\\n     * Counterpart to Solidity\'s `uint88` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 88 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint88(uint256 value) internal pure returns (uint88) {\\n        require(value <= type(uint88).max, \\"SafeCast: value doesn\'t fit in 88 bits\\");\\n        return uint88(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint80 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint80).\\n     *\\n     * Counterpart to Solidity\'s `uint80` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 80 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint80(uint256 value) internal pure returns (uint80) {\\n        require(value <= type(uint80).max, \\"SafeCast: value doesn\'t fit in 80 bits\\");\\n        return uint80(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint72 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint72).\\n     *\\n     * Counterpart to Solidity\'s `uint72` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 72 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint72(uint256 value) internal pure returns (uint72) {\\n        require(value <= type(uint72).max, \\"SafeCast: value doesn\'t fit in 72 bits\\");\\n        return uint72(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint64 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint64).\\n     *\\n     * Counterpart to Solidity\'s `uint64` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 64 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint64(uint256 value) internal pure returns (uint64) {\\n        require(value <= type(uint64).max, \\"SafeCast: value doesn\'t fit in 64 bits\\");\\n        return uint64(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint56 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint56).\\n     *\\n     * Counterpart to Solidity\'s `uint56` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 56 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint56(uint256 value) internal pure returns (uint56) {\\n        require(value <= type(uint56).max, \\"SafeCast: value doesn\'t fit in 56 bits\\");\\n        return uint56(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint48 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint48).\\n     *\\n     * Counterpart to Solidity\'s `uint48` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 48 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint48(uint256 value) internal pure returns (uint48) {\\n        require(value <= type(uint48).max, \\"SafeCast: value doesn\'t fit in 48 bits\\");\\n        return uint48(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint40 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint40).\\n     *\\n     * Counterpart to Solidity\'s `uint40` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 40 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint40(uint256 value) internal pure returns (uint40) {\\n        require(value <= type(uint40).max, \\"SafeCast: value doesn\'t fit in 40 bits\\");\\n        return uint40(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint32 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint32).\\n     *\\n     * Counterpart to Solidity\'s `uint32` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 32 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint32(uint256 value) internal pure returns (uint32) {\\n        require(value <= type(uint32).max, \\"SafeCast: value doesn\'t fit in 32 bits\\");\\n        return uint32(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint24 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint24).\\n     *\\n     * Counterpart to Solidity\'s `uint24` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 24 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toUint24(uint256 value) internal pure returns (uint24) {\\n        require(value <= type(uint24).max, \\"SafeCast: value doesn\'t fit in 24 bits\\");\\n        return uint24(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint16 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint16).\\n     *\\n     * Counterpart to Solidity\'s `uint16` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 16 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint16(uint256 value) internal pure returns (uint16) {\\n        require(value <= type(uint16).max, \\"SafeCast: value doesn\'t fit in 16 bits\\");\\n        return uint16(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted uint8 from uint256, reverting on\\n     * overflow (when the input is greater than largest uint8).\\n     *\\n     * Counterpart to Solidity\'s `uint8` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 8 bits\\n     *\\n     * _Available since v2.5._\\n     */\\n    function toUint8(uint256 value) internal pure returns (uint8) {\\n        require(value <= type(uint8).max, \\"SafeCast: value doesn\'t fit in 8 bits\\");\\n        return uint8(value);\\n    }\\n\\n    /**\\n     * @dev Converts a signed int256 into an unsigned uint256.\\n     *\\n     * Requirements:\\n     *\\n     * - input must be greater than or equal to 0.\\n     *\\n     * _Available since v3.0._\\n     */\\n    function toUint256(int256 value) internal pure returns (uint256) {\\n        require(value >= 0, \\"SafeCast: value must be positive\\");\\n        return uint256(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int248 from int256, reverting on\\n     * overflow (when the input is less than smallest int248 or\\n     * greater than largest int248).\\n     *\\n     * Counterpart to Solidity\'s `int248` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 248 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt248(int256 value) internal pure returns (int248) {\\n        require(value >= type(int248).min && value <= type(int248).max, \\"SafeCast: value doesn\'t fit in 248 bits\\");\\n        return int248(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int240 from int256, reverting on\\n     * overflow (when the input is less than smallest int240 or\\n     * greater than largest int240).\\n     *\\n     * Counterpart to Solidity\'s `int240` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 240 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt240(int256 value) internal pure returns (int240) {\\n        require(value >= type(int240).min && value <= type(int240).max, \\"SafeCast: value doesn\'t fit in 240 bits\\");\\n        return int240(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int232 from int256, reverting on\\n     * overflow (when the input is less than smallest int232 or\\n     * greater than largest int232).\\n     *\\n     * Counterpart to Solidity\'s `int232` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 232 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt232(int256 value) internal pure returns (int232) {\\n        require(value >= type(int232).min && value <= type(int232).max, \\"SafeCast: value doesn\'t fit in 232 bits\\");\\n        return int232(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int224 from int256, reverting on\\n     * overflow (when the input is less than smallest int224 or\\n     * greater than largest int224).\\n     *\\n     * Counterpart to Solidity\'s `int224` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 224 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt224(int256 value) internal pure returns (int224) {\\n        require(value >= type(int224).min && value <= type(int224).max, \\"SafeCast: value doesn\'t fit in 224 bits\\");\\n        return int224(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int216 from int256, reverting on\\n     * overflow (when the input is less than smallest int216 or\\n     * greater than largest int216).\\n     *\\n     * Counterpart to Solidity\'s `int216` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 216 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt216(int256 value) internal pure returns (int216) {\\n        require(value >= type(int216).min && value <= type(int216).max, \\"SafeCast: value doesn\'t fit in 216 bits\\");\\n        return int216(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int208 from int256, reverting on\\n     * overflow (when the input is less than smallest int208 or\\n     * greater than largest int208).\\n     *\\n     * Counterpart to Solidity\'s `int208` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 208 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt208(int256 value) internal pure returns (int208) {\\n        require(value >= type(int208).min && value <= type(int208).max, \\"SafeCast: value doesn\'t fit in 208 bits\\");\\n        return int208(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int200 from int256, reverting on\\n     * overflow (when the input is less than smallest int200 or\\n     * greater than largest int200).\\n     *\\n     * Counterpart to Solidity\'s `int200` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 200 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt200(int256 value) internal pure returns (int200) {\\n        require(value >= type(int200).min && value <= type(int200).max, \\"SafeCast: value doesn\'t fit in 200 bits\\");\\n        return int200(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int192 from int256, reverting on\\n     * overflow (when the input is less than smallest int192 or\\n     * greater than largest int192).\\n     *\\n     * Counterpart to Solidity\'s `int192` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 192 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt192(int256 value) internal pure returns (int192) {\\n        require(value >= type(int192).min && value <= type(int192).max, \\"SafeCast: value doesn\'t fit in 192 bits\\");\\n        return int192(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int184 from int256, reverting on\\n     * overflow (when the input is less than smallest int184 or\\n     * greater than largest int184).\\n     *\\n     * Counterpart to Solidity\'s `int184` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 184 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt184(int256 value) internal pure returns (int184) {\\n        require(value >= type(int184).min && value <= type(int184).max, \\"SafeCast: value doesn\'t fit in 184 bits\\");\\n        return int184(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int176 from int256, reverting on\\n     * overflow (when the input is less than smallest int176 or\\n     * greater than largest int176).\\n     *\\n     * Counterpart to Solidity\'s `int176` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 176 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt176(int256 value) internal pure returns (int176) {\\n        require(value >= type(int176).min && value <= type(int176).max, \\"SafeCast: value doesn\'t fit in 176 bits\\");\\n        return int176(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int168 from int256, reverting on\\n     * overflow (when the input is less than smallest int168 or\\n     * greater than largest int168).\\n     *\\n     * Counterpart to Solidity\'s `int168` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 168 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt168(int256 value) internal pure returns (int168) {\\n        require(value >= type(int168).min && value <= type(int168).max, \\"SafeCast: value doesn\'t fit in 168 bits\\");\\n        return int168(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int160 from int256, reverting on\\n     * overflow (when the input is less than smallest int160 or\\n     * greater than largest int160).\\n     *\\n     * Counterpart to Solidity\'s `int160` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 160 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt160(int256 value) internal pure returns (int160) {\\n        require(value >= type(int160).min && value <= type(int160).max, \\"SafeCast: value doesn\'t fit in 160 bits\\");\\n        return int160(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int152 from int256, reverting on\\n     * overflow (when the input is less than smallest int152 or\\n     * greater than largest int152).\\n     *\\n     * Counterpart to Solidity\'s `int152` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 152 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt152(int256 value) internal pure returns (int152) {\\n        require(value >= type(int152).min && value <= type(int152).max, \\"SafeCast: value doesn\'t fit in 152 bits\\");\\n        return int152(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int144 from int256, reverting on\\n     * overflow (when the input is less than smallest int144 or\\n     * greater than largest int144).\\n     *\\n     * Counterpart to Solidity\'s `int144` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 144 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt144(int256 value) internal pure returns (int144) {\\n        require(value >= type(int144).min && value <= type(int144).max, \\"SafeCast: value doesn\'t fit in 144 bits\\");\\n        return int144(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int136 from int256, reverting on\\n     * overflow (when the input is less than smallest int136 or\\n     * greater than largest int136).\\n     *\\n     * Counterpart to Solidity\'s `int136` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 136 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt136(int256 value) internal pure returns (int136) {\\n        require(value >= type(int136).min && value <= type(int136).max, \\"SafeCast: value doesn\'t fit in 136 bits\\");\\n        return int136(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int128 from int256, reverting on\\n     * overflow (when the input is less than smallest int128 or\\n     * greater than largest int128).\\n     *\\n     * Counterpart to Solidity\'s `int128` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 128 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt128(int256 value) internal pure returns (int128) {\\n        require(value >= type(int128).min && value <= type(int128).max, \\"SafeCast: value doesn\'t fit in 128 bits\\");\\n        return int128(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int120 from int256, reverting on\\n     * overflow (when the input is less than smallest int120 or\\n     * greater than largest int120).\\n     *\\n     * Counterpart to Solidity\'s `int120` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 120 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt120(int256 value) internal pure returns (int120) {\\n        require(value >= type(int120).min && value <= type(int120).max, \\"SafeCast: value doesn\'t fit in 120 bits\\");\\n        return int120(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int112 from int256, reverting on\\n     * overflow (when the input is less than smallest int112 or\\n     * greater than largest int112).\\n     *\\n     * Counterpart to Solidity\'s `int112` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 112 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt112(int256 value) internal pure returns (int112) {\\n        require(value >= type(int112).min && value <= type(int112).max, \\"SafeCast: value doesn\'t fit in 112 bits\\");\\n        return int112(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int104 from int256, reverting on\\n     * overflow (when the input is less than smallest int104 or\\n     * greater than largest int104).\\n     *\\n     * Counterpart to Solidity\'s `int104` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 104 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt104(int256 value) internal pure returns (int104) {\\n        require(value >= type(int104).min && value <= type(int104).max, \\"SafeCast: value doesn\'t fit in 104 bits\\");\\n        return int104(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int96 from int256, reverting on\\n     * overflow (when the input is less than smallest int96 or\\n     * greater than largest int96).\\n     *\\n     * Counterpart to Solidity\'s `int96` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 96 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt96(int256 value) internal pure returns (int96) {\\n        require(value >= type(int96).min && value <= type(int96).max, \\"SafeCast: value doesn\'t fit in 96 bits\\");\\n        return int96(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int88 from int256, reverting on\\n     * overflow (when the input is less than smallest int88 or\\n     * greater than largest int88).\\n     *\\n     * Counterpart to Solidity\'s `int88` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 88 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt88(int256 value) internal pure returns (int88) {\\n        require(value >= type(int88).min && value <= type(int88).max, \\"SafeCast: value doesn\'t fit in 88 bits\\");\\n        return int88(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int80 from int256, reverting on\\n     * overflow (when the input is less than smallest int80 or\\n     * greater than largest int80).\\n     *\\n     * Counterpart to Solidity\'s `int80` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 80 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt80(int256 value) internal pure returns (int80) {\\n        require(value >= type(int80).min && value <= type(int80).max, \\"SafeCast: value doesn\'t fit in 80 bits\\");\\n        return int80(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int72 from int256, reverting on\\n     * overflow (when the input is less than smallest int72 or\\n     * greater than largest int72).\\n     *\\n     * Counterpart to Solidity\'s `int72` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 72 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt72(int256 value) internal pure returns (int72) {\\n        require(value >= type(int72).min && value <= type(int72).max, \\"SafeCast: value doesn\'t fit in 72 bits\\");\\n        return int72(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int64 from int256, reverting on\\n     * overflow (when the input is less than smallest int64 or\\n     * greater than largest int64).\\n     *\\n     * Counterpart to Solidity\'s `int64` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 64 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt64(int256 value) internal pure returns (int64) {\\n        require(value >= type(int64).min && value <= type(int64).max, \\"SafeCast: value doesn\'t fit in 64 bits\\");\\n        return int64(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int56 from int256, reverting on\\n     * overflow (when the input is less than smallest int56 or\\n     * greater than largest int56).\\n     *\\n     * Counterpart to Solidity\'s `int56` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 56 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt56(int256 value) internal pure returns (int56) {\\n        require(value >= type(int56).min && value <= type(int56).max, \\"SafeCast: value doesn\'t fit in 56 bits\\");\\n        return int56(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int48 from int256, reverting on\\n     * overflow (when the input is less than smallest int48 or\\n     * greater than largest int48).\\n     *\\n     * Counterpart to Solidity\'s `int48` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 48 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt48(int256 value) internal pure returns (int48) {\\n        require(value >= type(int48).min && value <= type(int48).max, \\"SafeCast: value doesn\'t fit in 48 bits\\");\\n        return int48(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int40 from int256, reverting on\\n     * overflow (when the input is less than smallest int40 or\\n     * greater than largest int40).\\n     *\\n     * Counterpart to Solidity\'s `int40` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 40 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt40(int256 value) internal pure returns (int40) {\\n        require(value >= type(int40).min && value <= type(int40).max, \\"SafeCast: value doesn\'t fit in 40 bits\\");\\n        return int40(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int32 from int256, reverting on\\n     * overflow (when the input is less than smallest int32 or\\n     * greater than largest int32).\\n     *\\n     * Counterpart to Solidity\'s `int32` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 32 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt32(int256 value) internal pure returns (int32) {\\n        require(value >= type(int32).min && value <= type(int32).max, \\"SafeCast: value doesn\'t fit in 32 bits\\");\\n        return int32(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int24 from int256, reverting on\\n     * overflow (when the input is less than smallest int24 or\\n     * greater than largest int24).\\n     *\\n     * Counterpart to Solidity\'s `int24` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 24 bits\\n     *\\n     * _Available since v4.7._\\n     */\\n    function toInt24(int256 value) internal pure returns (int24) {\\n        require(value >= type(int24).min && value <= type(int24).max, \\"SafeCast: value doesn\'t fit in 24 bits\\");\\n        return int24(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int16 from int256, reverting on\\n     * overflow (when the input is less than smallest int16 or\\n     * greater than largest int16).\\n     *\\n     * Counterpart to Solidity\'s `int16` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 16 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt16(int256 value) internal pure returns (int16) {\\n        require(value >= type(int16).min && value <= type(int16).max, \\"SafeCast: value doesn\'t fit in 16 bits\\");\\n        return int16(value);\\n    }\\n\\n    /**\\n     * @dev Returns the downcasted int8 from int256, reverting on\\n     * overflow (when the input is less than smallest int8 or\\n     * greater than largest int8).\\n     *\\n     * Counterpart to Solidity\'s `int8` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - input must fit into 8 bits\\n     *\\n     * _Available since v3.1._\\n     */\\n    function toInt8(int256 value) internal pure returns (int8) {\\n        require(value >= type(int8).min && value <= type(int8).max, \\"SafeCast: value doesn\'t fit in 8 bits\\");\\n        return int8(value);\\n    }\\n\\n    /**\\n     * @dev Converts an unsigned uint256 into a signed int256.\\n     *\\n     * Requirements:\\n     *\\n     * - input must be less than or equal to maxInt256.\\n     *\\n     * _Available since v3.0._\\n     */\\n    function toInt256(uint256 value) internal pure returns (int256) {\\n        // Note: Unsafe cast below is okay because `type(int256).max` is guaranteed to be positive\\n        require(value <= uint256(type(int256).max), \\"SafeCast: value doesn\'t fit in an int256\\");\\n        return int256(value);\\n    }\\n}\\n","keccak256":"0x02686c31ccb9ee77a299fa5f47327af5271f251a707a0e24f321957166ff0434","license":"MIT"},"@openzeppelin/contracts/utils/math/SignedMath.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.5.0) (utils/math/SignedMath.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Standard signed math utilities missing in the Solidity language.\\n */\\nlibrary SignedMath {\\n    /**\\n     * @dev Returns the largest of two signed numbers.\\n     */\\n    function max(int256 a, int256 b) internal pure returns (int256) {\\n        return a >= b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the smallest of two signed numbers.\\n     */\\n    function min(int256 a, int256 b) internal pure returns (int256) {\\n        return a < b ? a : b;\\n    }\\n\\n    /**\\n     * @dev Returns the average of two signed numbers without overflow.\\n     * The result is rounded towards zero.\\n     */\\n    function average(int256 a, int256 b) internal pure returns (int256) {\\n        // Formula from the book \\"Hacker\'s Delight\\"\\n        int256 x = (a & b) + ((a ^ b) >> 1);\\n        return x + (int256(uint256(x) >> 255) & (a ^ b));\\n    }\\n\\n    /**\\n     * @dev Returns the absolute unsigned value of a signed value.\\n     */\\n    function abs(int256 n) internal pure returns (uint256) {\\n        unchecked {\\n            // must be unchecked in order to support `n = type(int256).min`\\n            return uint256(n >= 0 ? n : -n);\\n        }\\n    }\\n}\\n","keccak256":"0xb3ebde1c8d27576db912d87c3560dab14adfb9cd001be95890ec4ba035e652e7","license":"MIT"},"@openzeppelin/contracts/utils/structs/EnumerableSet.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (utils/structs/EnumerableSet.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Library for managing\\n * https://en.wikipedia.org/wiki/Set_(abstract_data_type)[sets] of primitive\\n * types.\\n *\\n * Sets have the following properties:\\n *\\n * - Elements are added, removed, and checked for existence in constant time\\n * (O(1)).\\n * - Elements are enumerated in O(n). No guarantees are made on the ordering.\\n *\\n * ```\\n * contract Example {\\n *     // Add the library methods\\n *     using EnumerableSet for EnumerableSet.AddressSet;\\n *\\n *     // Declare a set state variable\\n *     EnumerableSet.AddressSet private mySet;\\n * }\\n * ```\\n *\\n * As of v3.3.0, sets of type `bytes32` (`Bytes32Set`), `address` (`AddressSet`)\\n * and `uint256` (`UintSet`) are supported.\\n *\\n * [WARNING]\\n * ====\\n *  Trying to delete such a structure from storage will likely result in data corruption, rendering the structure unusable.\\n *  See https://github.com/ethereum/solidity/pull/11843[ethereum/solidity#11843] for more info.\\n *\\n *  In order to clean an EnumerableSet, you can either remove all elements one by one or create a fresh instance using an array of EnumerableSet.\\n * ====\\n */\\nlibrary EnumerableSet {\\n    // To implement this library for multiple types with as little code\\n    // repetition as possible, we write it in terms of a generic Set type with\\n    // bytes32 values.\\n    // The Set implementation uses private functions, and user-facing\\n    // implementations (such as AddressSet) are just wrappers around the\\n    // underlying Set.\\n    // This means that we can only create new EnumerableSets for types that fit\\n    // in bytes32.\\n\\n    struct Set {\\n        // Storage of set values\\n        bytes32[] _values;\\n        // Position of the value in the `values` array, plus 1 because index 0\\n        // means a value is not in the set.\\n        mapping(bytes32 => uint256) _indexes;\\n    }\\n\\n    /**\\n     * @dev Add a value to a set. O(1).\\n     *\\n     * Returns true if the value was added to the set, that is if it was not\\n     * already present.\\n     */\\n    function _add(Set storage set, bytes32 value) private returns (bool) {\\n        if (!_contains(set, value)) {\\n            set._values.push(value);\\n            // The value is stored at length-1, but we add 1 to all indexes\\n            // and use 0 as a sentinel value\\n            set._indexes[value] = set._values.length;\\n            return true;\\n        } else {\\n            return false;\\n        }\\n    }\\n\\n    /**\\n     * @dev Removes a value from a set. O(1).\\n     *\\n     * Returns true if the value was removed from the set, that is if it was\\n     * present.\\n     */\\n    function _remove(Set storage set, bytes32 value) private returns (bool) {\\n        // We read and store the value\'s index to prevent multiple reads from the same storage slot\\n        uint256 valueIndex = set._indexes[value];\\n\\n        if (valueIndex != 0) {\\n            // Equivalent to contains(set, value)\\n            // To delete an element from the _values array in O(1), we swap the element to delete with the last one in\\n            // the array, and then remove the last element (sometimes called as \'swap and pop\').\\n            // This modifies the order of the array, as noted in {at}.\\n\\n            uint256 toDeleteIndex = valueIndex - 1;\\n            uint256 lastIndex = set._values.length - 1;\\n\\n            if (lastIndex != toDeleteIndex) {\\n                bytes32 lastValue = set._values[lastIndex];\\n\\n                // Move the last value to the index where the value to delete is\\n                set._values[toDeleteIndex] = lastValue;\\n                // Update the index for the moved value\\n                set._indexes[lastValue] = valueIndex; // Replace lastValue\'s index to valueIndex\\n            }\\n\\n            // Delete the slot where the moved value was stored\\n            set._values.pop();\\n\\n            // Delete the index for the deleted slot\\n            delete set._indexes[value];\\n\\n            return true;\\n        } else {\\n            return false;\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns true if the value is in the set. O(1).\\n     */\\n    function _contains(Set storage set, bytes32 value) private view returns (bool) {\\n        return set._indexes[value] != 0;\\n    }\\n\\n    /**\\n     * @dev Returns the number of values on the set. O(1).\\n     */\\n    function _length(Set storage set) private view returns (uint256) {\\n        return set._values.length;\\n    }\\n\\n    /**\\n     * @dev Returns the value stored at position `index` in the set. O(1).\\n     *\\n     * Note that there are no guarantees on the ordering of values inside the\\n     * array, and it may change when more values are added or removed.\\n     *\\n     * Requirements:\\n     *\\n     * - `index` must be strictly less than {length}.\\n     */\\n    function _at(Set storage set, uint256 index) private view returns (bytes32) {\\n        return set._values[index];\\n    }\\n\\n    /**\\n     * @dev Return the entire set in an array\\n     *\\n     * WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\\n     * to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\\n     * this function has an unbounded cost, and using it as part of a state-changing function may render the function\\n     * uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block.\\n     */\\n    function _values(Set storage set) private view returns (bytes32[] memory) {\\n        return set._values;\\n    }\\n\\n    // Bytes32Set\\n\\n    struct Bytes32Set {\\n        Set _inner;\\n    }\\n\\n    /**\\n     * @dev Add a value to a set. O(1).\\n     *\\n     * Returns true if the value was added to the set, that is if it was not\\n     * already present.\\n     */\\n    function add(Bytes32Set storage set, bytes32 value) internal returns (bool) {\\n        return _add(set._inner, value);\\n    }\\n\\n    /**\\n     * @dev Removes a value from a set. O(1).\\n     *\\n     * Returns true if the value was removed from the set, that is if it was\\n     * present.\\n     */\\n    function remove(Bytes32Set storage set, bytes32 value) internal returns (bool) {\\n        return _remove(set._inner, value);\\n    }\\n\\n    /**\\n     * @dev Returns true if the value is in the set. O(1).\\n     */\\n    function contains(Bytes32Set storage set, bytes32 value) internal view returns (bool) {\\n        return _contains(set._inner, value);\\n    }\\n\\n    /**\\n     * @dev Returns the number of values in the set. O(1).\\n     */\\n    function length(Bytes32Set storage set) internal view returns (uint256) {\\n        return _length(set._inner);\\n    }\\n\\n    /**\\n     * @dev Returns the value stored at position `index` in the set. O(1).\\n     *\\n     * Note that there are no guarantees on the ordering of values inside the\\n     * array, and it may change when more values are added or removed.\\n     *\\n     * Requirements:\\n     *\\n     * - `index` must be strictly less than {length}.\\n     */\\n    function at(Bytes32Set storage set, uint256 index) internal view returns (bytes32) {\\n        return _at(set._inner, index);\\n    }\\n\\n    /**\\n     * @dev Return the entire set in an array\\n     *\\n     * WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\\n     * to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\\n     * this function has an unbounded cost, and using it as part of a state-changing function may render the function\\n     * uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block.\\n     */\\n    function values(Bytes32Set storage set) internal view returns (bytes32[] memory) {\\n        return _values(set._inner);\\n    }\\n\\n    // AddressSet\\n\\n    struct AddressSet {\\n        Set _inner;\\n    }\\n\\n    /**\\n     * @dev Add a value to a set. O(1).\\n     *\\n     * Returns true if the value was added to the set, that is if it was not\\n     * already present.\\n     */\\n    function add(AddressSet storage set, address value) internal returns (bool) {\\n        return _add(set._inner, bytes32(uint256(uint160(value))));\\n    }\\n\\n    /**\\n     * @dev Removes a value from a set. O(1).\\n     *\\n     * Returns true if the value was removed from the set, that is if it was\\n     * present.\\n     */\\n    function remove(AddressSet storage set, address value) internal returns (bool) {\\n        return _remove(set._inner, bytes32(uint256(uint160(value))));\\n    }\\n\\n    /**\\n     * @dev Returns true if the value is in the set. O(1).\\n     */\\n    function contains(AddressSet storage set, address value) internal view returns (bool) {\\n        return _contains(set._inner, bytes32(uint256(uint160(value))));\\n    }\\n\\n    /**\\n     * @dev Returns the number of values in the set. O(1).\\n     */\\n    function length(AddressSet storage set) internal view returns (uint256) {\\n        return _length(set._inner);\\n    }\\n\\n    /**\\n     * @dev Returns the value stored at position `index` in the set. O(1).\\n     *\\n     * Note that there are no guarantees on the ordering of values inside the\\n     * array, and it may change when more values are added or removed.\\n     *\\n     * Requirements:\\n     *\\n     * - `index` must be strictly less than {length}.\\n     */\\n    function at(AddressSet storage set, uint256 index) internal view returns (address) {\\n        return address(uint160(uint256(_at(set._inner, index))));\\n    }\\n\\n    /**\\n     * @dev Return the entire set in an array\\n     *\\n     * WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\\n     * to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\\n     * this function has an unbounded cost, and using it as part of a state-changing function may render the function\\n     * uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block.\\n     */\\n    function values(AddressSet storage set) internal view returns (address[] memory) {\\n        bytes32[] memory store = _values(set._inner);\\n        address[] memory result;\\n\\n        /// @solidity memory-safe-assembly\\n        assembly {\\n            result := store\\n        }\\n\\n        return result;\\n    }\\n\\n    // UintSet\\n\\n    struct UintSet {\\n        Set _inner;\\n    }\\n\\n    /**\\n     * @dev Add a value to a set. O(1).\\n     *\\n     * Returns true if the value was added to the set, that is if it was not\\n     * already present.\\n     */\\n    function add(UintSet storage set, uint256 value) internal returns (bool) {\\n        return _add(set._inner, bytes32(value));\\n    }\\n\\n    /**\\n     * @dev Removes a value from a set. O(1).\\n     *\\n     * Returns true if the value was removed from the set, that is if it was\\n     * present.\\n     */\\n    function remove(UintSet storage set, uint256 value) internal returns (bool) {\\n        return _remove(set._inner, bytes32(value));\\n    }\\n\\n    /**\\n     * @dev Returns true if the value is in the set. O(1).\\n     */\\n    function contains(UintSet storage set, uint256 value) internal view returns (bool) {\\n        return _contains(set._inner, bytes32(value));\\n    }\\n\\n    /**\\n     * @dev Returns the number of values on the set. O(1).\\n     */\\n    function length(UintSet storage set) internal view returns (uint256) {\\n        return _length(set._inner);\\n    }\\n\\n    /**\\n     * @dev Returns the value stored at position `index` in the set. O(1).\\n     *\\n     * Note that there are no guarantees on the ordering of values inside the\\n     * array, and it may change when more values are added or removed.\\n     *\\n     * Requirements:\\n     *\\n     * - `index` must be strictly less than {length}.\\n     */\\n    function at(UintSet storage set, uint256 index) internal view returns (uint256) {\\n        return uint256(_at(set._inner, index));\\n    }\\n\\n    /**\\n     * @dev Return the entire set in an array\\n     *\\n     * WARNING: This operation will copy the entire storage to memory, which can be quite expensive. This is designed\\n     * to mostly be used by view accessors that are queried without any gas fees. Developers should keep in mind that\\n     * this function has an unbounded cost, and using it as part of a state-changing function may render the function\\n     * uncallable if the set grows to a point where copying to memory consumes too much gas to fit in a block.\\n     */\\n    function values(UintSet storage set) internal view returns (uint256[] memory) {\\n        bytes32[] memory store = _values(set._inner);\\n        uint256[] memory result;\\n\\n        /// @solidity memory-safe-assembly\\n        assembly {\\n            result := store\\n        }\\n\\n        return result;\\n    }\\n}\\n","keccak256":"0x5050943b32b6a8f282573d166b2e9d87ab7eb4dbba4ab6acf36ecb54fe6995e4","license":"MIT"},"contracts/data/DataStore.sol":{"content":"// SPDX-License-Identifier: BUSL-1.1\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../role/RoleModule.sol\\";\\nimport \\"../utils/Calc.sol\\";\\nimport \\"../utils/Printer.sol\\";\\n\\n// @title DataStore\\n// @dev DataStore for all general state values\\ncontract DataStore is RoleModule {\\n    using SafeCast for int256;\\n\\n    using EnumerableSet for EnumerableSet.Bytes32Set;\\n    using EnumerableSet for EnumerableSet.AddressSet;\\n    using EnumerableSet for EnumerableSet.UintSet;\\n    using EnumerableValues for EnumerableSet.Bytes32Set;\\n    using EnumerableValues for EnumerableSet.AddressSet;\\n    using EnumerableValues for EnumerableSet.UintSet;\\n\\n    // store for uint values\\n    mapping(bytes32 => uint256) public uintValues;\\n    // store for int values\\n    mapping(bytes32 => int256) public intValues;\\n    // store for address values\\n    mapping(bytes32 => address) public addressValues;\\n    // store for bool values\\n    mapping(bytes32 => bool) public boolValues;\\n    // store for string values\\n    mapping(bytes32 => string) public stringValues;\\n    // store for bytes32 values\\n    mapping(bytes32 => bytes32) public bytes32Values;\\n\\n    // store for uint[] values\\n    mapping(bytes32 => uint256[]) public uintArrayValues;\\n    // store for int[] values\\n    mapping(bytes32 => int256[]) public intArrayValues;\\n    // store for address[] values\\n    mapping(bytes32 => address[]) public addressArrayValues;\\n    // store for bool[] values\\n    mapping(bytes32 => bool[]) public boolArrayValues;\\n    // store for string[] values\\n    mapping(bytes32 => string[]) public stringArrayValues;\\n    // store for bytes32[] values\\n    mapping(bytes32 => bytes32[]) public bytes32ArrayValues;\\n\\n    // store for bytes32 sets\\n    mapping(bytes32 => EnumerableSet.Bytes32Set) internal bytes32Sets;\\n    // store for address sets\\n    mapping(bytes32 => EnumerableSet.AddressSet) internal addressSets;\\n    // store for uint256 sets\\n    mapping(bytes32 => EnumerableSet.UintSet) internal uintSets;\\n\\n    constructor(RoleStore _roleStore) RoleModule(_roleStore) {}\\n\\n    // @dev get the uint value for the given key\\n    // @param key the key of the value\\n    // @return the uint value for the key\\n    function getUint(bytes32 key) external view returns (uint256) {\\n        return uintValues[key];\\n    }\\n\\n    // @dev set the uint value for the given key\\n    // @param key the key of the value\\n    // @param value the value to set\\n    // @return the uint value for the key\\n    function setUint(bytes32 key, uint256 value) external onlyController returns (uint256) {\\n        uintValues[key] = value;\\n        return value;\\n    }\\n\\n    // @dev delete the uint value for the given key\\n    // @param key the key of the value\\n    function removeUint(bytes32 key) external onlyController {\\n        delete uintValues[key];\\n    }\\n\\n    // @dev add the input int value to the existing uint value\\n    // @param key the key of the value\\n    // @param value the input int value\\n    // @return the new uint value\\n    function applyDeltaToUint(bytes32 key, int256 value, string memory errorMessage) external onlyController returns (uint256) {\\n        uint256 currValue = uintValues[key];\\n        if (value < 0 && (-value).toUint256() > currValue) {\\n            revert(errorMessage);\\n        }\\n        uint256 nextUint = Calc.sumReturnUint256(currValue, value);\\n        uintValues[key] = nextUint;\\n        return nextUint;\\n    }\\n\\n    // @dev add the input uint value to the existing uint value\\n    // @param key the key of the value\\n    // @param value the input int value\\n    // @return the new uint value\\n    function applyDeltaToUint(bytes32 key, uint256 value) external onlyController returns (uint256) {\\n        uint256 currValue = uintValues[key];\\n        uint256 nextUint = currValue + value;\\n        uintValues[key] = nextUint;\\n        return nextUint;\\n    }\\n\\n    // @dev add the input int value to the existing uint value, prevent the uint\\n    // value from becoming negative\\n    // @param key the key of the value\\n    // @param value the input int value\\n    // @return the new uint value\\n    function applyBoundedDeltaToUint(bytes32 key, int256 value) external onlyController returns (uint256) {\\n        uint256 uintValue = uintValues[key];\\n        if (value < 0 && (-value).toUint256() > uintValue) {\\n            uintValues[key] = 0;\\n            return 0;\\n        }\\n\\n        uint256 nextUint = Calc.sumReturnUint256(uintValue, value);\\n        uintValues[key] = nextUint;\\n        return nextUint;\\n    }\\n\\n    // @dev add the input uint value to the existing uint value\\n    // @param key the key of the value\\n    // @param value the input uint value\\n    // @return the new uint value\\n    function incrementUint(bytes32 key, uint256 value) external onlyController returns (uint256) {\\n        uint256 nextUint = uintValues[key] + value;\\n        uintValues[key] = nextUint;\\n        return nextUint;\\n    }\\n\\n    // @dev subtract the input uint value from the existing uint value\\n    // @param key the key of the value\\n    // @param value the input uint value\\n    // @return the new uint value\\n    function decrementUint(bytes32 key, uint256 value) external onlyController returns (uint256) {\\n        uint256 nextUint = uintValues[key] - value;\\n        uintValues[key] = nextUint;\\n        return nextUint;\\n    }\\n\\n    // @dev get the int value for the given key\\n    // @param key the key of the value\\n    // @return the int value for the key\\n    function getInt(bytes32 key) external view returns (int256) {\\n        return intValues[key];\\n    }\\n\\n    // @dev set the int value for the given key\\n    // @param key the key of the value\\n    // @param value the value to set\\n    // @return the int value for the key\\n    function setInt(bytes32 key, int256 value) external onlyController returns (int256) {\\n        intValues[key] = value;\\n        return value;\\n    }\\n\\n    function removeInt(bytes32 key) external onlyController {\\n        delete intValues[key];\\n    }\\n\\n    // @dev add the input int value to the existing int value\\n    // @param key the key of the value\\n    // @param value the input int value\\n    // @return the new int value\\n    function applyDeltaToInt(bytes32 key, int256 value) external onlyController returns (int256) {\\n        int256 nextInt = intValues[key] + value;\\n        intValues[key] = nextInt;\\n        return nextInt;\\n    }\\n\\n    // @dev add the input int value to the existing int value\\n    // @param key the key of the value\\n    // @param value the input int value\\n    // @return the new int value\\n    function incrementInt(bytes32 key, int256 value) external onlyController returns (int256) {\\n        int256 nextInt = intValues[key] + value;\\n        intValues[key] = nextInt;\\n        return nextInt;\\n    }\\n\\n    // @dev subtract the input int value from the existing int value\\n    // @param key the key of the value\\n    // @param value the input int value\\n    // @return the new int value\\n    function decrementInt(bytes32 key, int256 value) external onlyController returns (int256) {\\n        int256 nextInt = intValues[key] - value;\\n        intValues[key] = nextInt;\\n        return nextInt;\\n    }\\n\\n    // @dev get the address value for the given key\\n    // @param key the key of the value\\n    // @return the address value for the key\\n    function getAddress(bytes32 key) external view returns (address) {\\n        return addressValues[key];\\n    }\\n\\n    // @dev set the address value for the given key\\n    // @param key the key of the value\\n    // @param value the value to set\\n    // @return the address value for the key\\n    function setAddress(bytes32 key, address value) external onlyController returns (address) {\\n        addressValues[key] = value;\\n        return value;\\n    }\\n\\n    // @dev delete the address value for the given key\\n    // @param key the key of the value\\n    function removeAddress(bytes32 key) external onlyController {\\n        delete addressValues[key];\\n    }\\n\\n    // @dev get the bool value for the given key\\n    // @param key the key of the value\\n    // @return the bool value for the key\\n    function getBool(bytes32 key) external view returns (bool) {\\n        return boolValues[key];\\n    }\\n\\n    // @dev set the bool value for the given key\\n    // @param key the key of the value\\n    // @param value the value to set\\n    // @return the bool value for the key\\n    function setBool(bytes32 key, bool value) external onlyController returns (bool) {\\n        boolValues[key] = value;\\n        return value;\\n    }\\n\\n    // @dev delete the bool value for the given key\\n    // @param key the key of the value\\n    function removeBool(bytes32 key) external onlyController {\\n        delete boolValues[key];\\n    }\\n\\n    // @dev get the string value for the given key\\n    // @param key the key of the value\\n    // @return the string value for the key\\n    function getString(bytes32 key) external view returns (string memory) {\\n        return stringValues[key];\\n    }\\n\\n    // @dev set the string value for the given key\\n    // @param key the key of the value\\n    // @param value the value to set\\n    // @return the string value for the key\\n    function setString(bytes32 key, string memory value) external onlyController returns (string memory) {\\n        stringValues[key] = value;\\n        return value;\\n    }\\n\\n    // @dev delete the string value for the given key\\n    // @param key the key of the value\\n    function removeString(bytes32 key) external onlyController {\\n        delete stringValues[key];\\n    }\\n\\n    // @dev get the bytes32 value for the given key\\n    // @param key the key of the value\\n    // @return the bytes32 value for the key\\n    function getBytes32(bytes32 key) external view returns (bytes32) {\\n        return bytes32Values[key];\\n    }\\n\\n    // @dev set the bytes32 value for the given key\\n    // @param key the key of the value\\n    // @param value the value to set\\n    // @return the bytes32 value for the key\\n    function setBytes32(bytes32 key, bytes32 value) external onlyController returns (bytes32) {\\n        bytes32Values[key] = value;\\n        return value;\\n    }\\n\\n    // @dev delete the bytes32 value for the given key\\n    // @param key the key of the value\\n    function removeBytes32(bytes32 key) external onlyController {\\n        delete bytes32Values[key];\\n    }\\n\\n    // @dev get the uint array for the given key\\n    // @param key the key of the uint array\\n    // @return the uint array for the key\\n    function getUintArray(bytes32 key) external view returns (uint256[] memory) {\\n        return uintArrayValues[key];\\n    }\\n\\n    // @dev set the uint array for the given key\\n    // @param key the key of the uint array\\n    // @param value the value of the uint array\\n    function setUintArray(bytes32 key, uint256[] memory value) external onlyController {\\n        uintArrayValues[key] = value;\\n    }\\n\\n    // @dev delete the uint array for the given key\\n    // @param key the key of the uint array\\n    // @param value the value of the uint array\\n    function removeUintArray(bytes32 key) external onlyController {\\n        delete uintArrayValues[key];\\n    }\\n\\n    // @dev get the int array for the given key\\n    // @param key the key of the int array\\n    // @return the int array for the key\\n    function getIntArray(bytes32 key) external view returns (int256[] memory) {\\n        return intArrayValues[key];\\n    }\\n\\n    // @dev set the int array for the given key\\n    // @param key the key of the int array\\n    // @param value the value of the int array\\n    function setIntArray(bytes32 key, int256[] memory value) external onlyController {\\n        intArrayValues[key] = value;\\n    }\\n\\n    // @dev delete the int array for the given key\\n    // @param key the key of the int array\\n    // @param value the value of the int array\\n    function removeIntArray(bytes32 key) external onlyController {\\n        delete intArrayValues[key];\\n    }\\n\\n    // @dev get the address array for the given key\\n    // @param key the key of the address array\\n    // @return the address array for the key\\n    function getAddressArray(bytes32 key) external view returns (address[] memory) {\\n        return addressArrayValues[key];\\n    }\\n\\n    // @dev set the address array for the given key\\n    // @param key the key of the address array\\n    // @param value the value of the address array\\n    function setAddressArray(bytes32 key, address[] memory value) external onlyController {\\n        addressArrayValues[key] = value;\\n    }\\n\\n    // @dev delete the address array for the given key\\n    // @param key the key of the address array\\n    // @param value the value of the address array\\n    function removeAddressArray(bytes32 key) external onlyController {\\n        delete addressArrayValues[key];\\n    }\\n\\n    // @dev get the bool array for the given key\\n    // @param key the key of the bool array\\n    // @return the bool array for the key\\n    function getBoolArray(bytes32 key) external view returns (bool[] memory) {\\n        return boolArrayValues[key];\\n    }\\n\\n    // @dev set the bool array for the given key\\n    // @param key the key of the bool array\\n    // @param value the value of the bool array\\n    function setBoolArray(bytes32 key, bool[] memory value) external onlyController {\\n        boolArrayValues[key] = value;\\n    }\\n\\n    // @dev delete the bool array for the given key\\n    // @param key the key of the bool array\\n    // @param value the value of the bool array\\n    function removeBoolArray(bytes32 key) external onlyController {\\n        delete boolArrayValues[key];\\n    }\\n\\n    // @dev get the string array for the given key\\n    // @param key the key of the string array\\n    // @return the string array for the key\\n    function getStringArray(bytes32 key) external view returns (string[] memory) {\\n        return stringArrayValues[key];\\n    }\\n\\n    // @dev set the string array for the given key\\n    // @param key the key of the string array\\n    // @param value the value of the string array\\n    function setStringArray(bytes32 key, string[] memory value) external onlyController {\\n        stringArrayValues[key] = value;\\n    }\\n\\n    // @dev delete the string array for the given key\\n    // @param key the key of the string array\\n    // @param value the value of the string array\\n    function removeStringArray(bytes32 key) external onlyController {\\n        delete stringArrayValues[key];\\n    }\\n\\n    // @dev get the bytes32 array for the given key\\n    // @param key the key of the bytes32 array\\n    // @return the bytes32 array for the key\\n    function getBytes32Array(bytes32 key) external view returns (bytes32[] memory) {\\n        return bytes32ArrayValues[key];\\n    }\\n\\n    // @dev set the bytes32 array for the given key\\n    // @param key the key of the bytes32 array\\n    // @param value the value of the bytes32 array\\n    function setBytes32Array(bytes32 key, bytes32[] memory value) external onlyController {\\n        bytes32ArrayValues[key] = value;\\n    }\\n\\n    // @dev delete the bytes32 array for the given key\\n    // @param key the key of the bytes32 array\\n    // @param value the value of the bytes32 array\\n    function removeBytes32Array(bytes32 key) external onlyController {\\n        delete bytes32ArrayValues[key];\\n    }\\n\\n    // @dev check whether the given value exists in the set\\n    // @param setKey the key of the set\\n    // @param value the value to check\\n    function containsBytes32(bytes32 setKey, bytes32 value) external view returns (bool) {\\n        return bytes32Sets[setKey].contains(value);\\n    }\\n\\n    // @dev get the length of the set\\n    // @param setKey the key of the set\\n    function getBytes32Count(bytes32 setKey) external view returns (uint256) {\\n        return bytes32Sets[setKey].length();\\n    }\\n\\n    // @dev get the values of the set in the given range\\n    // @param setKey the key of the set\\n    // @param the start of the range, values at the start index will be returned\\n    // in the result\\n    // @param the end of the range, values at the end index will not be returned\\n    // in the result\\n    function getBytes32ValuesAt(bytes32 setKey, uint256 start, uint256 end) external view returns (bytes32[] memory) {\\n        return bytes32Sets[setKey].valuesAt(start, end);\\n    }\\n\\n    // @dev add the given value to the set\\n    // @param setKey the key of the set\\n    // @param value the value to add\\n    function addBytes32(bytes32 setKey, bytes32 value) external onlyController {\\n        bytes32Sets[setKey].add(value);\\n    }\\n\\n    // @dev remove the given value from the set\\n    // @param setKey the key of the set\\n    // @param value the value to remove\\n    function removeBytes32(bytes32 setKey, bytes32 value) external onlyController {\\n        bytes32Sets[setKey].remove(value);\\n    }\\n\\n    // @dev check whether the given value exists in the set\\n    // @param setKey the key of the set\\n    // @param value the value to check\\n    function containsAddress(bytes32 setKey, address value) external view returns (bool) {\\n        return addressSets[setKey].contains(value);\\n    }\\n\\n    // @dev get the length of the set\\n    // @param setKey the key of the set\\n    function getAddressCount(bytes32 setKey) external view returns (uint256) {\\n        return addressSets[setKey].length();\\n    }\\n\\n    // @dev get the values of the set in the given range\\n    // @param setKey the key of the set\\n    // @param the start of the range, values at the start index will be returned\\n    // in the result\\n    // @param the end of the range, values at the end index will not be returned\\n    // in the result\\n    function getAddressValuesAt(bytes32 setKey, uint256 start, uint256 end) external view returns (address[] memory) {\\n        return addressSets[setKey].valuesAt(start, end);\\n    }\\n\\n    // @dev add the given value to the set\\n    // @param setKey the key of the set\\n    // @param value the value to add\\n    function addAddress(bytes32 setKey, address value) external onlyController {\\n        addressSets[setKey].add(value);\\n    }\\n\\n    // @dev remove the given value from the set\\n    // @param setKey the key of the set\\n    // @param value the value to remove\\n    function removeAddress(bytes32 setKey, address value) external onlyController {\\n        addressSets[setKey].remove(value);\\n    }\\n\\n    // @dev check whether the given value exists in the set\\n    // @param setKey the key of the set\\n    // @param value the value to check\\n    function containsUint(bytes32 setKey, uint256 value) external view returns (bool) {\\n        return uintSets[setKey].contains(value);\\n    }\\n\\n    // @dev get the length of the set\\n    // @param setKey the key of the set\\n    function getUintCount(bytes32 setKey) external view returns (uint256) {\\n        return uintSets[setKey].length();\\n    }\\n\\n    // @dev get the values of the set in the given range\\n    // @param setKey the key of the set\\n    // @param the start of the range, values at the start index will be returned\\n    // in the result\\n    // @param the end of the range, values at the end index will not be returned\\n    // in the result\\n    function getUintValuesAt(bytes32 setKey, uint256 start, uint256 end) external view returns (uint256[] memory) {\\n        return uintSets[setKey].valuesAt(start, end);\\n    }\\n\\n    // @dev add the given value to the set\\n    // @param setKey the key of the set\\n    // @param value the value to add\\n    function addUint(bytes32 setKey, uint256 value) external onlyController {\\n        uintSets[setKey].add(value);\\n    }\\n\\n    // @dev remove the given value from the set\\n    // @param setKey the key of the set\\n    // @param value the value to remove\\n    function removeUint(bytes32 setKey, uint256 value) external onlyController {\\n        uintSets[setKey].remove(value);\\n    }\\n}\\n","keccak256":"0x96796d4d9a697374ecce68d49ad4f88c34645b438b661f19e98408d86f9c48b0","license":"BUSL-1.1"},"contracts/error/Errors.sol":{"content":"// SPDX-License-Identifier: BUSL-1.1\\n\\npragma solidity ^0.8.0;\\n\\nlibrary Errors {\\n    // AdlUtils errors\\n    error InvalidSizeDeltaForAdl(uint256 sizeDeltaUsd, uint256 positionSizeInUsd);\\n    error AdlNotEnabled();\\n\\n    // Bank errors\\n    error SelfTransferNotSupported(address receiver);\\n    error InvalidNativeTokenSender(address msgSender);\\n\\n    // CallbackUtils errors\\n    error MaxCallbackGasLimitExceeded(uint256 callbackGasLimit, uint256 maxCallbackGasLimit);\\n\\n    // Config errors\\n    error InvalidBaseKey(bytes32 baseKey);\\n    error InvalidFeeFactor(bytes32 baseKey, uint256 value);\\n\\n    // Timelock errors\\n    error ActionAlreadySignalled();\\n    error ActionNotSignalled();\\n    error SignalTimeNotYetPassed(uint256 signalTime);\\n    error InvalidTimelockDelay(uint256 timelockDelay);\\n    error MaxTimelockDelayExceeded(uint256 timelockDelay);\\n    error InvalidFeeReceiver(address receiver);\\n    error InvalidOracleSigner(address receiver);\\n\\n    // DepositStoreUtils errors\\n    error DepositNotFound(bytes32 key);\\n\\n    // DepositUtils errors\\n    error EmptyDeposit();\\n    error EmptyDepositAmounts();\\n\\n    // ExecuteDepositUtils errors\\n    error MinMarketTokens(uint256 received, uint256 expected);\\n    error EmptyDepositAmountsAfterSwap();\\n    error InvalidPoolValueForDeposit(int256 poolValue);\\n    error InvalidSwapOutputToken(address outputToken, address expectedOutputToken);\\n\\n    // AdlHandler errors\\n    error AdlNotRequired(int256 pnlToPoolFactor, uint256 maxPnlFactorForAdl);\\n    error InvalidAdl(int256 nextPnlToPoolFactor, int256 pnlToPoolFactor);\\n    error PnlOvercorrected(int256 nextPnlToPoolFactor, uint256 minPnlFactorForAdl);\\n\\n    // ExchangeUtils errors\\n    error RequestNotYetCancellable(uint256 requestAge, uint256 requestExpirationAge, string requestType);\\n\\n    // OrderHandler errors\\n    error OrderNotUpdatable(uint256 orderType);\\n    error InvalidKeeperForFrozenOrder(address keeper);\\n\\n    // FeatureUtils errors\\n    error DisabledFeature(bytes32 key);\\n\\n    // FeeHandler errors\\n    error InvalidClaimFeesInput(uint256 marketsLength, uint256 tokensLength);\\n\\n    // GasUtils errors\\n    error InsufficientExecutionFee(uint256 minExecutionFee, uint256 executionFee);\\n    error InsufficientWntAmountForExecutionFee(uint256 wntAmount, uint256 executionFee);\\n    error InsufficientExecutionGas(uint256 startingGas, uint256 minHandleErrorGas);\\n\\n    // MarketFactory errors\\n    error MarketAlreadyExists(bytes32 salt, address existingMarketAddress);\\n\\n    // MarketStoreUtils errors\\n    error MarketNotFound(address key);\\n\\n    // MarketUtils errors\\n    error EmptyMarket();\\n    error DisabledMarket(address market);\\n    error MaxSwapPathLengthExceeded(uint256 swapPathLengh, uint256 maxSwapPathLength);\\n    error InsufficientPoolAmount(uint256 poolAmount, uint256 amount);\\n    error InsufficientReserve(uint256 reservedUsd, uint256 maxReservedUsd);\\n    error InsufficientReserveForOpenInterest(uint256 reservedUsd, uint256 maxReservedUsd);\\n    error UnableToGetOppositeToken(address inputToken, address market);\\n    error UnexpectedTokenForVirtualInventory(address token, address market);\\n    error EmptyMarketTokenSupply();\\n    error InvalidSwapMarket(address market);\\n    error UnableToGetCachedTokenPrice(address token, address market);\\n    error CollateralAlreadyClaimed(uint256 adjustedClaimableAmount, uint256 claimedAmount);\\n    error OpenInterestCannotBeUpdatedForSwapOnlyMarket(address market);\\n    error MaxOpenInterestExceeded(uint256 openInterest, uint256 maxOpenInterest);\\n    error MaxPoolAmountExceeded(uint256 poolAmount, uint256 maxPoolAmount);\\n    error UnexpectedBorrowingFactor(uint256 positionBorrowingFactor, uint256 cumulativeBorrowingFactor);\\n    error UnableToGetBorrowingFactorEmptyPoolUsd();\\n    error UnableToGetFundingFactorEmptyOpenInterest();\\n    error InvalidPositionMarket(address market);\\n    error InvalidCollateralTokenForMarket(address market, address token);\\n    error PnlFactorExceededForLongs(int256 pnlToPoolFactor, uint256 maxPnlFactor);\\n    error PnlFactorExceededForShorts(int256 pnlToPoolFactor, uint256 maxPnlFactor);\\n    error InvalidUiFeeFactor(uint256 uiFeeFactor, uint256 maxUiFeeFactor);\\n    error EmptyAddressInMarketTokenBalanceValidation(address market, address token);\\n    error InvalidMarketTokenBalance(address market, address token, uint256 balance, uint256 expectedMinBalance);\\n    error InvalidMarketTokenBalanceForCollateralAmount(address market, address token, uint256 balance, uint256 collateralAmount);\\n    error InvalidMarketTokenBalanceForClaimableFunding(address market, address token, uint256 balance, uint256 claimableFundingFeeAmount);\\n    error UnexpectedPoolValue(int256 poolValue);\\n\\n    // Oracle errors\\n    error EmptySigner(uint256 signerIndex);\\n    error InvalidBlockNumber(uint256 minOracleBlockNumber, uint256 currentBlockNumber);\\n    error InvalidMinMaxBlockNumber(uint256 minOracleBlockNumber, uint256 maxOracleBlockNumber);\\n    error MaxPriceAgeExceeded(uint256 oracleTimestamp, uint256 currentTimestamp);\\n    error MinOracleSigners(uint256 oracleSigners, uint256 minOracleSigners);\\n    error MaxOracleSigners(uint256 oracleSigners, uint256 maxOracleSigners);\\n    error BlockNumbersNotSorted(uint256 minOracleBlockNumber, uint256 prevMinOracleBlockNumber);\\n    error MinPricesNotSorted(address token, uint256 price, uint256 prevPrice);\\n    error MaxPricesNotSorted(address token, uint256 price, uint256 prevPrice);\\n    error EmptyPriceFeedMultiplier(address token);\\n    error InvalidFeedPrice(address token, int256 price);\\n    error PriceFeedNotUpdated(address token, uint256 timestamp, uint256 heartbeatDuration);\\n    error MaxSignerIndex(uint256 signerIndex, uint256 maxSignerIndex);\\n    error InvalidOraclePrice(address token);\\n    error InvalidSignerMinMaxPrice(uint256 minPrice, uint256 maxPrice);\\n    error InvalidMedianMinMaxPrice(uint256 minPrice, uint256 maxPrice);\\n    error DuplicateTokenPrice(address token);\\n    error NonEmptyTokensWithPrices(uint256 tokensWithPricesLength);\\n    error EmptyPriceFeed(address token);\\n    error PriceAlreadySet(address token, uint256 minPrice, uint256 maxPrice);\\n    error MaxRefPriceDeviationExceeded(\\n        address token,\\n        uint256 price,\\n        uint256 refPrice,\\n        uint256 maxRefPriceDeviationFactor\\n    );\\n\\n    // OracleModule errors\\n    error InvalidPrimaryPricesForSimulation(uint256 primaryTokensLength, uint256 primaryPricesLength);\\n    error EndOfOracleSimulation();\\n\\n    // OracleUtils errors\\n    error EmptyCompactedPrice(uint256 index);\\n    error EmptyCompactedBlockNumber(uint256 index);\\n    error EmptyCompactedTimestamp(uint256 index);\\n    error InvalidSignature(address recoveredSigner, address expectedSigner);\\n\\n    error EmptyPrimaryPrice(address token);\\n\\n    error OracleBlockNumbersAreSmallerThanRequired(uint256[] oracleBlockNumbers, uint256 expectedBlockNumber);\\n    error OracleBlockNumberNotWithinRange(\\n        uint256[] minOracleBlockNumbers,\\n        uint256[] maxOracleBlockNumbers,\\n        uint256 blockNumber\\n    );\\n\\n    // BaseOrderUtils errors\\n    error EmptyOrder();\\n    error UnsupportedOrderType();\\n    error InvalidOrderPrices(\\n        uint256 primaryPriceMin,\\n        uint256 primaryPriceMax,\\n        uint256 triggerPrice,\\n        uint256 orderType\\n    );\\n    error EmptySizeDeltaInTokens();\\n    error PriceImpactLargerThanOrderSize(int256 priceImpactUsd, uint256 sizeDeltaUsd);\\n    error NegativeExecutionPrice(int256 executionPrice, uint256 price, uint256 positionSizeInUsd, int256 priceImpactUsd, uint256 sizeDeltaUsd);\\n    error OrderNotFulfillableAtAcceptablePrice(uint256 price, uint256 acceptablePrice);\\n\\n    // IncreaseOrderUtils errors\\n    error UnexpectedPositionState();\\n\\n    // OrderUtils errors\\n    error OrderTypeCannotBeCreated(uint256 orderType);\\n    error OrderAlreadyFrozen();\\n\\n    // OrderStoreUtils errors\\n    error OrderNotFound(bytes32 key);\\n\\n    // SwapOrderUtils errors\\n    error UnexpectedMarket();\\n\\n    // DecreasePositionCollateralUtils errors\\n    error InsufficientFundsToPayForCosts(uint256 remainingCostUsd, string step);\\n    error InvalidOutputToken(address tokenOut, address expectedTokenOut);\\n\\n    // DecreasePositionUtils errors\\n    error InvalidDecreaseOrderSize(uint256 sizeDeltaUsd, uint256 positionSizeInUsd);\\n    error UnableToWithdrawCollateral(int256 estimatedRemainingCollateralUsd);\\n    error InvalidDecreasePositionSwapType(uint256 decreasePositionSwapType);\\n    error PositionShouldNotBeLiquidated();\\n\\n    // IncreasePositionUtils errors\\n    error InsufficientCollateralAmount(uint256 collateralAmount, int256 collateralDeltaAmount);\\n    error InsufficientCollateralUsd(int256 remainingCollateralUsd);\\n\\n    // PositionStoreUtils errors\\n    error PositionNotFound(bytes32 key);\\n\\n    // PositionUtils errors\\n    error LiquidatablePosition(string reason);\\n    error EmptyPosition();\\n    error InvalidPositionSizeValues(uint256 sizeInUsd, uint256 sizeInTokens);\\n    error MinPositionSize(uint256 positionSizeInUsd, uint256 minPositionSizeUsd);\\n\\n    // PositionPricingUtils errors\\n    error UsdDeltaExceedsLongOpenInterest(int256 usdDelta, uint256 longOpenInterest);\\n    error UsdDeltaExceedsShortOpenInterest(int256 usdDelta, uint256 shortOpenInterest);\\n\\n    // SwapPricingUtils errors\\n    error UsdDeltaExceedsPoolValue(int256 usdDelta, uint256 poolUsd);\\n\\n    // RoleModule errors\\n    error Unauthorized(address msgSender, string role);\\n\\n    // RoleStore errors\\n    error ThereMustBeAtLeastOneRoleAdmin();\\n    error ThereMustBeAtLeastOneTimelockMultiSig();\\n\\n    // ExchangeRouter errors\\n    error InvalidClaimFundingFeesInput(uint256 marketsLength, uint256 tokensLength);\\n    error InvalidClaimCollateralInput(uint256 marketsLength, uint256 tokensLength, uint256 timeKeysLength);\\n    error InvalidClaimAffiliateRewardsInput(uint256 marketsLength, uint256 tokensLength);\\n    error InvalidClaimUiFeesInput(uint256 marketsLength, uint256 tokensLength);\\n\\n    // SwapUtils errors\\n    error InvalidTokenIn(address tokenIn, address market);\\n    error InsufficientOutputAmount(uint256 outputAmount, uint256 minOutputAmount);\\n    error InsufficientSwapOutputAmount(uint256 outputAmount, uint256 minOutputAmount);\\n    error DuplicatedMarketInSwapPath(address market);\\n    error SwapPriceImpactExceedsAmountIn(uint256 amountAfterFees, int256 negativeImpactAmount);\\n\\n    // TokenUtils errors\\n    error EmptyTokenTranferGasLimit(address token);\\n    error TokenTransferError(address token, address receiver, uint256 amount);\\n    error EmptyHoldingAddress();\\n\\n    // AccountUtils errors\\n    error EmptyAccount();\\n    error EmptyReceiver();\\n\\n    // Array errors\\n    error CompactedArrayOutOfBounds(\\n        uint256[] compactedValues,\\n        uint256 index,\\n        uint256 slotIndex,\\n        string label\\n    );\\n\\n    error ArrayOutOfBoundsUint256(\\n        uint256[] values,\\n        uint256 index,\\n        string label\\n    );\\n\\n    error ArrayOutOfBoundsBytes(\\n        bytes[] values,\\n        uint256 index,\\n        string label\\n    );\\n\\n    // WithdrawalStoreUtils errors\\n    error WithdrawalNotFound(bytes32 key);\\n\\n    // WithdrawalUtils errors\\n    error EmptyWithdrawal();\\n    error EmptyWithdrawalAmount();\\n    error MinLongTokens(uint256 received, uint256 expected);\\n    error MinShortTokens(uint256 received, uint256 expected);\\n    error InsufficientMarketTokens(uint256 balance, uint256 expected);\\n    error InsufficientWntAmount(uint256 wntAmount, uint256 executionFee);\\n    error InvalidPoolValueForWithdrawal(int256 poolValue);\\n\\n    // Uint256Mask errors\\n    error MaskIndexOutOfBounds(uint256 index, string label);\\n    error DuplicatedIndex(uint256 index, string label);\\n}\\n","keccak256":"0xd8052d4aa698daafd882c56ddf3ef872c6bed4accac09b51047499ce0e4287f4","license":"BUSL-1.1"},"contracts/role/Role.sol":{"content":"// SPDX-License-Identifier: BUSL-1.1\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title Role\\n * @dev Library for role keys\\n */\\nlibrary Role {\\n    /**\\n     * @dev The ROLE_ADMIN role.\\n     */\\n    bytes32 public constant ROLE_ADMIN = keccak256(abi.encode(\\"ROLE_ADMIN\\"));\\n\\n    /**\\n     * @dev The TIMELOCK_ADMIN role.\\n     */\\n    bytes32 public constant TIMELOCK_ADMIN = keccak256(abi.encode(\\"TIMELOCK_ADMIN\\"));\\n\\n    /**\\n     * @dev The TIMELOCK_MULTISIG role.\\n     */\\n    bytes32 public constant TIMELOCK_MULTISIG = keccak256(abi.encode(\\"TIMELOCK_MULTISIG\\"));\\n\\n    /**\\n     * @dev The CONFIG_KEEPER role.\\n     */\\n    bytes32 public constant CONFIG_KEEPER = keccak256(abi.encode(\\"CONFIG_KEEPER\\"));\\n\\n    /**\\n     * @dev The CONTROLLER role.\\n     */\\n    bytes32 public constant CONTROLLER = keccak256(abi.encode(\\"CONTROLLER\\"));\\n\\n    /**\\n     * @dev The ROUTER_PLUGIN role.\\n     */\\n    bytes32 public constant ROUTER_PLUGIN = keccak256(abi.encode(\\"ROUTER_PLUGIN\\"));\\n\\n    /**\\n     * @dev The MARKET_KEEPER role.\\n     */\\n    bytes32 public constant MARKET_KEEPER = keccak256(abi.encode(\\"MARKET_KEEPER\\"));\\n\\n    /**\\n     * @dev The FEE_KEEPER role.\\n     */\\n    bytes32 public constant FEE_KEEPER = keccak256(abi.encode(\\"FEE_KEEPER\\"));\\n\\n    /**\\n     * @dev The ORDER_KEEPER role.\\n     */\\n    bytes32 public constant ORDER_KEEPER = keccak256(abi.encode(\\"ORDER_KEEPER\\"));\\n\\n    /**\\n     * @dev The FROZEN_ORDER_KEEPER role.\\n     */\\n    bytes32 public constant FROZEN_ORDER_KEEPER = keccak256(abi.encode(\\"FROZEN_ORDER_KEEPER\\"));\\n\\n    /**\\n     * @dev The PRICING_KEEPER role.\\n     */\\n    bytes32 public constant PRICING_KEEPER = keccak256(abi.encode(\\"PRICING_KEEPER\\"));\\n    /**\\n     * @dev The LIQUIDATION_KEEPER role.\\n     */\\n    bytes32 public constant LIQUIDATION_KEEPER = keccak256(abi.encode(\\"LIQUIDATION_KEEPER\\"));\\n    /**\\n     * @dev The ADL_KEEPER role.\\n     */\\n    bytes32 public constant ADL_KEEPER = keccak256(abi.encode(\\"ADL_KEEPER\\"));\\n}\\n","keccak256":"0x274c57667c715caa0b5b476ca0a46da20de5fbe2a882203e8c418799fd1302ca","license":"BUSL-1.1"},"contracts/role/RoleModule.sol":{"content":"// SPDX-License-Identifier: BUSL-1.1\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"./RoleStore.sol\\";\\n\\n/**\\n * @title RoleModule\\n * @dev Contract for role validation functions\\n */\\ncontract RoleModule {\\n    RoleStore public immutable roleStore;\\n\\n    /**\\n     * @dev Constructor that initializes the role store for this contract.\\n     *\\n     * @param _roleStore The contract instance to use as the role store.\\n     */\\n    constructor(RoleStore _roleStore) {\\n        roleStore = _roleStore;\\n    }\\n\\n    /**\\n     * @dev Only allows the contract\'s own address to call the function.\\n     */\\n    modifier onlySelf() {\\n        if (msg.sender != address(this)) {\\n            revert Errors.Unauthorized(msg.sender, \\"SELF\\");\\n        }\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the TIMELOCK_MULTISIG role to call the function.\\n     */\\n    modifier onlyTimelockMultisig() {\\n        _validateRole(Role.TIMELOCK_MULTISIG, \\"TIMELOCK_MULTISIG\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the TIMELOCK_ADMIN role to call the function.\\n     */\\n    modifier onlyTimelockAdmin() {\\n        _validateRole(Role.TIMELOCK_ADMIN, \\"TIMELOCK_ADMIN\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the CONFIG_KEEPER role to call the function.\\n     */\\n    modifier onlyConfigKeeper() {\\n        _validateRole(Role.CONFIG_KEEPER, \\"CONFIG_KEEPER\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the CONTROLLER role to call the function.\\n     */\\n    modifier onlyController() {\\n        _validateRole(Role.CONTROLLER, \\"CONTROLLER\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the ROUTER_PLUGIN role to call the function.\\n     */\\n    modifier onlyRouterPlugin() {\\n        _validateRole(Role.ROUTER_PLUGIN, \\"ROUTER_PLUGIN\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the MARKET_KEEPER role to call the function.\\n     */\\n    modifier onlyMarketKeeper() {\\n        _validateRole(Role.MARKET_KEEPER, \\"MARKET_KEEPER\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the FEE_KEEPER role to call the function.\\n     */\\n    modifier onlyFeeKeeper() {\\n        _validateRole(Role.FEE_KEEPER, \\"FEE_KEEPER\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the ORDER_KEEPER role to call the function.\\n     */\\n    modifier onlyOrderKeeper() {\\n        _validateRole(Role.ORDER_KEEPER, \\"ORDER_KEEPER\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the PRICING_KEEPER role to call the function.\\n     */\\n    modifier onlyPricingKeeper() {\\n        _validateRole(Role.PRICING_KEEPER, \\"PRICING_KEEPER\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the LIQUIDATION_KEEPER role to call the function.\\n     */\\n    modifier onlyLiquidationKeeper() {\\n        _validateRole(Role.LIQUIDATION_KEEPER, \\"LIQUIDATION_KEEPER\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Only allows addresses with the ADL_KEEPER role to call the function.\\n     */\\n    modifier onlyAdlKeeper() {\\n        _validateRole(Role.ADL_KEEPER, \\"ADL_KEEPER\\");\\n        _;\\n    }\\n\\n    /**\\n     * @dev Validates that the caller has the specified role.\\n     *\\n     * If the caller does not have the specified role, the transaction is reverted.\\n     *\\n     * @param role The key of the role to validate.\\n     * @param roleName The name of the role to validate.\\n     */\\n    function _validateRole(bytes32 role, string memory roleName) internal view {\\n        if (!roleStore.hasRole(msg.sender, role)) {\\n            revert Errors.Unauthorized(msg.sender, roleName);\\n        }\\n    }\\n}\\n","keccak256":"0xa5d3ead0543d4ef828baa1e833cc0969c31412965d65e2f9771e202637075325","license":"BUSL-1.1"},"contracts/role/RoleStore.sol":{"content":"// SPDX-License-Identifier: BUSL-1.1\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"@openzeppelin/contracts/utils/structs/EnumerableSet.sol\\";\\nimport \\"../utils/EnumerableValues.sol\\";\\nimport \\"./Role.sol\\";\\nimport \\"../error/Errors.sol\\";\\n\\n/**\\n * @title RoleStore\\n * @dev Stores roles and their members.\\n */\\ncontract RoleStore {\\n    using EnumerableSet for EnumerableSet.AddressSet;\\n    using EnumerableSet for EnumerableSet.Bytes32Set;\\n    using EnumerableValues for EnumerableSet.AddressSet;\\n    using EnumerableValues for EnumerableSet.Bytes32Set;\\n\\n    EnumerableSet.Bytes32Set internal roles;\\n    mapping(bytes32 => EnumerableSet.AddressSet) internal roleMembers;\\n    // checking if an account has a role is a frequently used function\\n    // roleCache helps to save gas by offering a more efficient lookup\\n    // vs calling roleMembers[key].contains(account)\\n    mapping(address => mapping (bytes32 => bool)) roleCache;\\n\\n    modifier onlyRoleAdmin() {\\n        if (!hasRole(msg.sender, Role.ROLE_ADMIN)) {\\n            revert Errors.Unauthorized(msg.sender, \\"ROLE_ADMIN\\");\\n        }\\n        _;\\n    }\\n\\n    constructor() {\\n        _grantRole(msg.sender, Role.ROLE_ADMIN);\\n    }\\n\\n    /**\\n     * @dev Grants the specified role to the given account.\\n     *\\n     * @param account The address of the account.\\n     * @param roleKey The key of the role to grant.\\n     */\\n    function grantRole(address account, bytes32 roleKey) external onlyRoleAdmin {\\n        _grantRole(account, roleKey);\\n    }\\n\\n    /**\\n     * @dev Revokes the specified role from the given account.\\n     *\\n     * @param account The address of the account.\\n     * @param roleKey The key of the role to revoke.\\n     */\\n    function revokeRole(address account, bytes32 roleKey) external onlyRoleAdmin {\\n        _revokeRole(account, roleKey);\\n    }\\n\\n    /**\\n     * @dev Returns true if the given account has the specified role.\\n     *\\n     * @param account The address of the account.\\n     * @param roleKey The key of the role.\\n     * @return True if the account has the role, false otherwise.\\n     */\\n    function hasRole(address account, bytes32 roleKey) public view returns (bool) {\\n        return roleCache[account][roleKey];\\n    }\\n\\n    /**\\n     * @dev Returns the number of roles stored in the contract.\\n     *\\n     * @return The number of roles.\\n     */\\n    function getRoleCount() external view returns (uint256) {\\n        return roles.length();\\n    }\\n\\n    /**\\n     * @dev Returns the keys of the roles stored in the contract.\\n     *\\n     * @param start The starting index of the range of roles to return.\\n     * @param end The ending index of the range of roles to return.\\n     * @return The keys of the roles.\\n     */\\n    function getRoles(uint256 start, uint256 end) external view returns (bytes32[] memory) {\\n        return roles.valuesAt(start, end);\\n    }\\n\\n    /**\\n     * @dev Returns the number of members of the specified role.\\n     *\\n     * @param roleKey The key of the role.\\n     * @return The number of members of the role.\\n     */\\n    function getRoleMemberCount(bytes32 roleKey) external view returns (uint256) {\\n        return roleMembers[roleKey].length();\\n    }\\n\\n    /**\\n     * @dev Returns the members of the specified role.\\n     *\\n     * @param roleKey The key of the role.\\n     * @param start the start index, the value for this index will be included.\\n     * @param end the end index, the value for this index will not be included.\\n     * @return The members of the role.\\n     */\\n    function getRoleMembers(bytes32 roleKey, uint256 start, uint256 end) external view returns (address[] memory) {\\n        return roleMembers[roleKey].valuesAt(start, end);\\n    }\\n\\n    function _grantRole(address account, bytes32 roleKey) internal {\\n        roles.add(roleKey);\\n        roleMembers[roleKey].add(account);\\n        roleCache[account][roleKey] = true;\\n    }\\n\\n    function _revokeRole(address account, bytes32 roleKey) internal {\\n        roleMembers[roleKey].remove(account);\\n        roleCache[account][roleKey] = false;\\n\\n        if (roleMembers[roleKey].length() == 0) {\\n            if (roleKey == Role.ROLE_ADMIN) {\\n                revert Errors.ThereMustBeAtLeastOneRoleAdmin();\\n            }\\n            if (roleKey == Role.TIMELOCK_MULTISIG) {\\n                revert Errors.ThereMustBeAtLeastOneTimelockMultiSig();\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0xaa7be1876450ec19568c0e12e4238332c96eb921974a19c0e4a6fe1fb943bf6d","license":"BUSL-1.1"},"contracts/utils/Calc.sol":{"content":"// SPDX-License-Identifier: BUSL-1.1\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"@openzeppelin/contracts/utils/math/SignedMath.sol\\";\\nimport \\"@openzeppelin/contracts/utils/math/SafeCast.sol\\";\\n\\n/**\\n * @title Calc\\n * @dev Library for math functions\\n */\\nlibrary Calc {\\n    using SignedMath for int256;\\n    using SafeCast for uint256;\\n\\n    /**\\n     * @dev Calculates the result of dividing the first number by the second number,\\n     * rounded up to the nearest integer.\\n     *\\n     * @param a the dividend\\n     * @param b the divisor\\n     * @return the result of dividing the first number by the second number, rounded up to the nearest integer\\n     */\\n    function roundUpDivision(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return (a + b - 1) / b;\\n    }\\n\\n    /**\\n     * Calculates the result of dividing the first number by the second number,\\n     * rounded up to the nearest integer.\\n     * The rounding is purely on the magnitude of a, if a is negative the result\\n     * is a larger magnitude negative\\n     *\\n     * @param a the dividend\\n     * @param b the divisor\\n     * @return the result of dividing the first number by the second number, rounded up to the nearest integer\\n     */\\n    function roundUpMagnitudeDivision(int256 a, uint256 b) internal pure returns (int256) {\\n        if (a < 0) {\\n            return (a - b.toInt256() + 1) / b.toInt256();\\n        }\\n\\n        return (a + b.toInt256() - 1) / b.toInt256();\\n    }\\n\\n    /**\\n     * Adds two numbers together and return a uint256 value, treating the second number as a signed integer.\\n     *\\n     * @param a the first number\\n     * @param b the second number\\n     * @return the result of adding the two numbers together\\n     */\\n    function sumReturnUint256(uint256 a, int256 b) internal pure returns (uint256) {\\n        if (b > 0) {\\n            return a + b.abs();\\n        }\\n\\n        return a - b.abs();\\n    }\\n\\n    /**\\n     * Adds two numbers together and return an int256 value, treating the second number as a signed integer.\\n     *\\n     * @param a the first number\\n     * @param b the second number\\n     * @return the result of adding the two numbers together\\n     */\\n    function sumReturnInt256(uint256 a, int256 b) internal pure returns (int256) {\\n        return a.toInt256() + b;\\n    }\\n\\n    /**\\n     * @dev Calculates the absolute difference between two numbers.\\n     *\\n     * @param a the first number\\n     * @param b the second number\\n     * @return the absolute difference between the two numbers\\n     */\\n    function diff(uint256 a, uint256 b) internal pure returns (uint256) {\\n        return a > b ? a - b : b - a;\\n    }\\n\\n    /**\\n     * Adds two numbers together, the result is bounded to prevent overflows.\\n     *\\n     * @param a the first number\\n     * @param b the second number\\n     * @return the result of adding the two numbers together\\n     */\\n    function boundedAdd(int256 a, int256 b) internal pure returns (int256) {\\n        // if either a or b is zero or if the signs are different there should not be any overflows\\n        if (a == 0 || b == 0 || (a < 0 && b > 0) || (a > 0 && b < 0)) {\\n            return a + b;\\n        }\\n\\n        // if adding `b` to `a` would result in a value less than the min int256 value\\n        // then return the min int256 value\\n        if (a < 0 && b <= type(int256).min - a) {\\n            return type(int256).min;\\n        }\\n\\n        // if adding `b` to `a` would result in a value more than the max int256 value\\n        // then return the max int256 value\\n        if (a > 0 && b >= type(int256).max - a) {\\n            return type(int256).max;\\n        }\\n\\n        return a + b;\\n    }\\n\\n    /**\\n     * Returns a - b, the result is bounded to prevent overflows.\\n     * Note that this will revert if b is type(int256).min because of the usage of \\"-b\\".\\n     *\\n     * @param a the first number\\n     * @param b the second number\\n     * @return the bounded result of a - b\\n     */\\n    function boundedSub(int256 a, int256 b) internal pure returns (int256) {\\n        // if either a or b is zero or the signs are the same there should not be any overflow\\n        if (a == 0 || b == 0 || (a > 0 && b > 0) || (a < 0 && b < 0)) {\\n            return a - b;\\n        }\\n\\n        // if adding `-b` to `a` would result in a value greater than the max int256 value\\n        // then return the max int256 value\\n        if (a > 0 && -b >= type(int256).max - a) {\\n            return type(int256).max;\\n        }\\n\\n        // if subtracting `b` from `a` would result in a value less than the min int256 value\\n        // then return the min int256 value\\n        if (a < 0 && -b <= type(int256).min - a) {\\n            return type(int256).min;\\n        }\\n\\n        return a - b;\\n    }\\n\\n\\n    /**\\n     * Converts the given unsigned integer to a signed integer, using the given\\n     * flag to determine whether the result should be positive or negative.\\n     *\\n     * @param a the unsigned integer to convert\\n     * @param isPositive whether the result should be positive (if true) or negative (if false)\\n     * @return the signed integer representation of the given unsigned integer\\n     */\\n    function toSigned(uint256 a, bool isPositive) internal pure returns (int256) {\\n        if (isPositive) {\\n            return a.toInt256();\\n        } else {\\n            return -a.toInt256();\\n        }\\n    }\\n}\\n","keccak256":"0x51ac46f67c8a7a377ade3b0abce4d2ae36ac27df11de9d8e9f2048d67d9d4985","license":"BUSL-1.1"},"contracts/utils/EnumerableValues.sol":{"content":"// SPDX-License-Identifier: BUSL-1.1\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"@openzeppelin/contracts/utils/structs/EnumerableSet.sol\\";\\n\\n/**\\n * @title EnumerableValues\\n * @dev Library to extend the EnumerableSet library with functions to get\\n * valuesAt for a range\\n */\\nlibrary EnumerableValues {\\n    using EnumerableSet for EnumerableSet.Bytes32Set;\\n    using EnumerableSet for EnumerableSet.AddressSet;\\n    using EnumerableSet for EnumerableSet.UintSet;\\n\\n    /**\\n     * Returns an array of bytes32 values from the given set, starting at the given\\n     * start index and ending before the given end index.\\n     *\\n     * @param set The set to get the values from.\\n     * @param start The starting index.\\n     * @param end The ending index.\\n     * @return An array of bytes32 values.\\n     */\\n    function valuesAt(EnumerableSet.Bytes32Set storage set, uint256 start, uint256 end) internal view returns (bytes32[] memory) {\\n        uint256 max = set.length();\\n        if (end > max) { end = max; }\\n\\n        bytes32[] memory items = new bytes32[](end - start);\\n        for (uint256 i = start; i < end; i++) {\\n            items[i - start] = set.at(i);\\n        }\\n\\n        return items;\\n    }\\n\\n\\n    /**\\n     * Returns an array of address values from the given set, starting at the given\\n     * start index and ending before the given end index.\\n     *\\n     * @param set The set to get the values from.\\n     * @param start The starting index.\\n     * @param end The ending index.\\n     * @return An array of address values.\\n     */\\n    function valuesAt(EnumerableSet.AddressSet storage set, uint256 start, uint256 end) internal view returns (address[] memory) {\\n        uint256 max = set.length();\\n        if (end > max) { end = max; }\\n\\n        address[] memory items = new address[](end - start);\\n        for (uint256 i = start; i < end; i++) {\\n            items[i - start] = set.at(i);\\n        }\\n\\n        return items;\\n    }\\n\\n\\n    /**\\n     * Returns an array of uint256 values from the given set, starting at the given\\n     * start index and ending before the given end index, the item at the end index will not be returned.\\n     *\\n     * @param set The set to get the values from.\\n     * @param start The starting index (inclusive, item at the start index will be returned).\\n     * @param end The ending index (exclusive, item at the end index will not be returned).\\n     * @return An array of uint256 values.\\n     */\\n    function valuesAt(EnumerableSet.UintSet storage set, uint256 start, uint256 end) internal view returns (uint256[] memory) {\\n        if (start >= set.length()) {\\n            return new uint256[](0);\\n        }\\n\\n        uint256 max = set.length();\\n        if (end > max) { end = max; }\\n\\n        uint256[] memory items = new uint256[](end - start);\\n        for (uint256 i = start; i < end; i++) {\\n            items[i - start] = set.at(i);\\n        }\\n\\n        return items;\\n    }\\n}\\n","keccak256":"0x1e525ad5645bc649551fa3a7d000af1cec96221d7fe1cdc17cedaf942b018f0d","license":"BUSL-1.1"},"contracts/utils/Printer.sol":{"content":"// SPDX-License-Identifier: BUSL-1.1\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"@openzeppelin/contracts/utils/math/SafeCast.sol\\";\\nimport \\"hardhat/console.sol\\";\\n\\n/**\\n * @title Printer\\n * @dev Library for console functions\\n */\\nlibrary Printer {\\n    using SafeCast for int256;\\n\\n    function log(string memory label, int256 value) internal view {\\n        if (value < 0) {\\n            console.log(\\n                \\"%s -%s\\",\\n                label,\\n                (-value).toUint256()\\n            );\\n        } else {\\n            console.log(\\n                \\"%s +%s\\",\\n                label,\\n                value.toUint256()\\n            );\\n        }\\n    }\\n}\\n","keccak256":"0xb110d6f03e8368922eea465f8aa806944beab79d34c3f7f0dc615ff6166e4042","license":"BUSL-1.1"},"hardhat/console.sol":{"content":"// SPDX-License-Identifier: MIT\\npragma solidity >= 0.4.22 <0.9.0;\\n\\nlibrary console {\\n\\taddress constant CONSOLE_ADDRESS = address(0x000000000000000000636F6e736F6c652e6c6f67);\\n\\n\\tfunction _sendLogPayload(bytes memory payload) private view {\\n\\t\\tuint256 payloadLength = payload.length;\\n\\t\\taddress consoleAddress = CONSOLE_ADDRESS;\\n\\t\\tassembly {\\n\\t\\t\\tlet payloadStart := add(payload, 32)\\n\\t\\t\\tlet r := staticcall(gas(), consoleAddress, payloadStart, payloadLength, 0, 0)\\n\\t\\t}\\n\\t}\\n\\n\\tfunction log() internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log()\\"));\\n\\t}\\n\\n\\tfunction logInt(int256 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(int256)\\", p0));\\n\\t}\\n\\n\\tfunction logUint(uint256 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256)\\", p0));\\n\\t}\\n\\n\\tfunction logString(string memory p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string)\\", p0));\\n\\t}\\n\\n\\tfunction logBool(bool p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool)\\", p0));\\n\\t}\\n\\n\\tfunction logAddress(address p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes(bytes memory p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes1(bytes1 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes1)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes2(bytes2 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes2)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes3(bytes3 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes3)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes4(bytes4 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes4)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes5(bytes5 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes5)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes6(bytes6 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes6)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes7(bytes7 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes7)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes8(bytes8 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes8)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes9(bytes9 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes9)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes10(bytes10 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes10)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes11(bytes11 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes11)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes12(bytes12 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes12)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes13(bytes13 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes13)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes14(bytes14 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes14)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes15(bytes15 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes15)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes16(bytes16 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes16)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes17(bytes17 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes17)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes18(bytes18 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes18)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes19(bytes19 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes19)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes20(bytes20 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes20)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes21(bytes21 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes21)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes22(bytes22 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes22)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes23(bytes23 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes23)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes24(bytes24 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes24)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes25(bytes25 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes25)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes26(bytes26 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes26)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes27(bytes27 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes27)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes28(bytes28 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes28)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes29(bytes29 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes29)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes30(bytes30 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes30)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes31(bytes31 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes31)\\", p0));\\n\\t}\\n\\n\\tfunction logBytes32(bytes32 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bytes32)\\", p0));\\n\\t}\\n\\n\\tfunction log(uint256 p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256)\\", p0));\\n\\t}\\n\\n\\tfunction log(string memory p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string)\\", p0));\\n\\t}\\n\\n\\tfunction log(bool p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool)\\", p0));\\n\\t}\\n\\n\\tfunction log(address p0) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address)\\", p0));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(address p0, address p1) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address)\\", p0, p1));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint256 p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,uint256)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,string)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,bool)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,address)\\", p0, p1, p2));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, uint256 p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,uint256,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, string memory p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,string,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, bool p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,bool,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(uint256 p0, address p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(uint256,address,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, uint256 p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,uint256,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, string memory p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,string,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, bool p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,bool,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(string memory p0, address p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(string,address,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, uint256 p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,uint256,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, string memory p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,string,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, bool p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,bool,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(bool p0, address p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(bool,address,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, uint256 p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,uint256,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, string memory p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,string,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, bool p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,bool,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint256 p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,uint256,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint256 p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,uint256,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint256 p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,uint256,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, uint256 p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,uint256,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,string,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,string,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,string,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, string memory p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,string,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,bool,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,bool,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,bool,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, bool p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,bool,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2, uint256 p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,address,uint256)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2, string memory p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,address,string)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2, bool p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,address,bool)\\", p0, p1, p2, p3));\\n\\t}\\n\\n\\tfunction log(address p0, address p1, address p2, address p3) internal view {\\n\\t\\t_sendLogPayload(abi.encodeWithSignature(\\"log(address,address,address,address)\\", p0, p1, p2, p3));\\n\\t}\\n\\n}\\n","keccak256":"0x60b0215121bf25612a6739fb2f1ec35f31ee82e4a8216c032c8243d904ab3aa9","license":"MIT"}},"version":1}',
    bytecode:
        '0x60a06040523480156200001157600080fd5b506040516200296638038062002966833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516128cb6200009b6000396000818161054c01526117c001526128cb6000f3fe608060405234801561001057600080fd5b50600436106103485760003560e01c80639921c3cc116101bb5780639921c3cc146106e85780639faf6fb6146106fb5780639fe7ac121461070e578063a6ed563e14610721578063a9fcf76b14610741578063abfdcced14610754578063adb353dc14610767578063b348e6391461077a578063b8320a081461078d578063bd02d0f5146107a0578063be43caa3146107c0578063bf498dd3146107d3578063bf7f035a146107e6578063c1dc9182146107f9578063c4f00fde1461080c578063c769d1a11461081f578063c80f4c6214610832578063ca446dd914610845578063cbb093dd14610858578063cc50eadd1461086b578063cf6a87221461087e578063d38eebc714610891578063d52852af146108b1578063dc97d962146108d1578063dd031997146108f1578063e208a70d14610904578063e2a4853a14610917578063e4e36c4e14610858578063e62461ce1461092a578063e7e4148e1461093d578063e98aabc114610950578063ec672cf614610963578063f069052a14610976578063f15caeac14610989578063f3903b9f1461099c578063f51fc0d9146109af57600080fd5b806301677da21461034d578063065f21a714610376578063116bb9291461039757806321f8a721146103b757806322538dae146103f857806322f874641461042157806326004846146104345780632d2899b614610449578063310b88821461046957806332f85bbf1461048c578063340dbab31461049f57806335d4d407146104b257806335ea8059146104c55780633dbacd1a146104d85780633e49bed0146104eb57806342c3bd96146104fe57806344a242b114610511578063499ea50e146105345780634a4a7b04146105475780634e91db081461056e5780635948f733146105815780635eb07dbd146105a15780636339734d146105b457806369721d41146105c75780636e899550146105da5780636fae54f0146105fa5780637026d42c1461060d578063743df325146106205780637ae1cfca1461064057806380aacdcd1461066357806386ac6bdf1461067657806388021a72146106895780638ca498b01461069c57806391d4403c146106af57806393266f9a146106c2578063986e791a146106d5575b600080fd5b61036061035b366004611fa9565b6109c2565b60405161036d9190612008565b60405180910390f35b610389610384366004611fa9565b610aae565b60405190815260200161036d565b6103aa6103a5366004611fa9565b610acb565b60405161036d919061206a565b6103e06103c5366004611fa9565b6000908152600260205260409020546001600160a01b031690565b6040516001600160a01b03909116815260200161036d565b6103e0610406366004611fa9565b6002602052600090815260409020546001600160a01b031681565b6103e061042f3660046120b0565b610b4d565b61044761044236600461213b565b610b85565b005b61045c610457366004611fa9565b610bf9565b60405161036d91906121dc565b61047c6104773660046120b0565b610c5a565b604051901515815260200161036d565b61038961049a366004612283565b610c79565b6103896104ad3660046120b0565b610d0a565b6104476104c03660046122e0565b610d52565b6103896104d3366004611fa9565b610d83565b6103896104e63660046120b0565b610d9a565b6103896104f93660046120b0565b610de3565b61044761050c366004611fa9565b610e0d565b61047c61051f366004611fa9565b60036020526000908152604090205460ff1681565b610447610542366004611fa9565b610e30565b6103e07f000000000000000000000000000000000000000000000000000000000000000081565b61038961057c3660046120b0565b610e5c565b61059461058f366004611fa9565b610e86565b60405161036d9190612376565b6104476105af36600461213b565b610ef1565b6103896105c23660046120b0565b610f22565b6104476105d53660046123d3565b610f53565b6105ed6105e83660046123ff565b610f7d565b60405161036d9190612445565b6103896106083660046120b0565b610fb1565b61045c61061b366004612458565b610ff9565b61038961062e366004611fa9565b60016020526000908152604090205481565b61047c61064e366004611fa9565b60009081526003602052604090205460ff1690565b61047c6106713660046120b0565b61101d565b61045c610684366004611fa9565b611060565b610447610697366004612484565b6110c0565b6103896106aa3660046120b0565b6110f1565b61047c6106bd3660046120b0565b611156565b6104476106d03660046120b0565b61116e565b6105ed6106e3366004611fa9565b611198565b6104476106f63660046120b0565b611230565b610447610709366004611fa9565b61125a565b61044761071c366004611fa9565b61128a565b61038961072f366004611fa9565b60009081526005602052604090205490565b61044761074f36600461213b565b6112b4565b61047c610762366004612540565b6112e5565b6104476107753660046120b0565b611318565b6104476107883660046123d3565b611342565b6105ed61079b3660046120b0565b61136c565b6103896107ae366004611fa9565b60009081526020819052604090205490565b6104476107ce366004611fa9565b611425565b6103896107e13660046120b0565b61144e565b6104476107f4366004611fa9565b61146a565b610447610807366004611fa9565b611493565b61038961081a3660046120b0565b6114bc565b61047c61082d3660046123d3565b6114d8565b6104476108403660046120b0565b6114f0565b6103e06108533660046123d3565b61151a565b6103896108663660046120b0565b61155a565b610447610879366004611fa9565b611588565b61044761088c366004611fa9565b6115b1565b61038961089f366004611fa9565b60006020819052908152604090205481565b6103896108bf366004611fa9565b60056020526000908152604090205481565b6103896108df366004611fa9565b60009081526001602052604090205490565b61045c6108ff366004611fa9565b6115d4565b610447610912366004611fa9565b611634565b6103896109253660046120b0565b61165d565b610447610938366004611fa9565b611687565b61059461094b366004612458565b6116aa565b61038961095e3660046120b0565b6116c6565b610447610971366004612570565b6116f4565b61045c610984366004612458565b611725565b6105ed610997366004611fa9565b611741565b6103896109aa366004611fa9565b61175a565b6104476109bd366004611fa9565b611771565b6060600a6000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610aa3578382906000526020600020018054610a1690612604565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4290612604565b8015610a8f5780601f10610a6457610100808354040283529160200191610a8f565b820191906000526020600020905b815481529060010190602001808311610a7257829003601f168201915b5050505050815260200190600101906109f7565b505050509050919050565b6000818152600e60205260408120610ac59061179a565b92915050565b600081815260096020908152604091829020805483518184028101840190945280845260609392830182828015610b4157602002820191906000526020600020906000905b825461010083900a900460ff161515815260206001928301818104948501949093039092029101808411610b105790505b50505050509050919050565b60086020528160005260406000208181548110610b6957600080fd5b6000918252602090912001546001600160a01b03169150829050565b610bd5604051602001610b979061263e565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b8152506117a4565b6000828152600b602090815260409091208251610bf492840190611d52565b505050565b600081815260076020908152604091829020805483518184028101840190945280845260609392830182828015610b4157602002820191906000526020600020905b815481526020019060010190808311610c3b5750505050509050919050565b6000828152600e60205260408120610c729083611858565b9392505050565b6000610c8d604051602001610b979061263e565b6000848152602081905260408120549084128015610cba575080610cb8610cb386612678565b611864565b115b15610ce2578260405162461bcd60e51b8152600401610cd99190612445565b60405180910390fd5b6000610cee82866118ba565b6000878152602081905260409020819055925050509392505050565b6000610d1e604051602001610b979061263e565b600083815260208190526040812054610d38908490612694565b600085815260208190526040902081905591505092915050565b610d64604051602001610b979061263e565b60008281526009602090815260409091208251610bf492840190611d99565b6000818152600d60205260408120610ac59061179a565b6000610dae604051602001610b979061263e565b60008381526020819052604081205490610dc88483612694565b60008681526020819052604090208190559250505092915050565b6000610df7604051602001610b979061263e565b5060009182526001602052604090912081905590565b610e1f604051602001610b979061263e565b600090815260208190526040812055565b610e42604051602001610b979061263e565b6000818152600760205260408120610e5991611e39565b50565b6000610e70604051602001610b979061263e565b5060009182526005602052604090912081905590565b600081815260086020908152604091829020805483518184028101840190945280845260609392830182828015610b4157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ec85750505050509050919050565b610f03604051602001610b979061263e565b60008281526006602090815260409091208251610bf492840190611d52565b60076020528160005260406000208181548110610f3e57600080fd5b90600052602060002001600091509150505481565b610f65604051602001610b979061263e565b6000828152600d60205260409020610bf490826118f1565b6060610f91604051602001610b979061263e565b6000838152600460205260409020610fa983826126f5565b509092915050565b6000610fc5604051602001610b979061263e565b600083815260016020526040812054610fdf9084906127b4565b600085815260016020526040902081905591505092915050565b6000838152600e60205260409020606090611015908484611906565b949350505050565b6009602052816000526040600020818154811061103957600080fd5b9060005260206000209060209182820401919006915091509054906101000a900460ff1681565b600081815260066020908152604091829020805483518184028101840190945280845260609392830182828015610b415760200282019190600052602060002090815481526020019060010190808311610c3b5750505050509050919050565b6110d2604051602001610b979061263e565b6000828152600a602090815260409091208251610bf492840190611e57565b6000611105604051602001610b979061263e565b600083815260208190526040812054908312801561112d57508061112b610cb385612678565b115b1561114a5750506000828152602081905260408120819055610ac5565b6000610dc882856118ba565b6000828152600c60205260408120610c729083611858565b611180604051602001610b979061263e565b6000828152600e60205260409020610bf490826119ea565b60008181526004602052604090208054606091906111b590612604565b80601f01602080910402602001604051908101604052809291908181526020018280546111e190612604565b8015610b415780601f1061120357610100808354040283529160200191610b41565b820191906000526020600020905b8154815290600101906020018083116112115750939695505050505050565b611242604051602001610b979061263e565b6000828152600c60205260409020610bf490826119ea565b61126c604051602001610b979061263e565b600090815260026020526040902080546001600160a01b0319169055565b61129c604051602001610b979061263e565b6000908152600360205260409020805460ff19169055565b6112c6604051602001610b979061263e565b60008281526007602090815260409091208251610bf492840190611d52565b60006112f9604051602001610b979061263e565b50600091825260036020526040909120805460ff191682151517905590565b61132a604051602001610b979061263e565b6000828152600e60205260409020610bf490826119f6565b611354604051602001610b979061263e565b6000828152600d60205260409020610bf49082611a02565b600a602052816000526040600020818154811061138857600080fd5b906000526020600020016000915091505080546113a490612604565b80601f01602080910402602001604051908101604052809291908181526020018280546113d090612604565b801561141d5780601f106113f25761010080835404028352916020019161141d565b820191906000526020600020905b81548152906001019060200180831161140057829003601f168201915b505050505081565b611437604051602001610b979061263e565b6000818152600660205260408120610e5991611e39565b600b6020528160005260406000208181548110610f3e57600080fd5b61147c604051602001610b979061263e565b6000818152600b60205260408120610e5991611e39565b6114a5604051602001610b979061263e565b6000818152600860205260408120610e5991611e39565b60066020528160005260406000208181548110610f3e57600080fd5b6000828152600d60205260408120610c729083611a17565b611502604051602001610b979061263e565b6000828152600c60205260409020610bf490826119f6565b600061152e604051602001610b979061263e565b5060009182526002602052604090912080546001600160a01b0319166001600160a01b03831617905590565b600061156e604051602001610b979061263e565b600083815260016020526040812054610fdf9084906127d4565b61159a604051602001610b979061263e565b6000818152600460205260408120610e5991611ea9565b6115c3604051602001610b979061263e565b600090815260056020526040812055565b6000818152600b6020908152604091829020805483518184028101840190945280845260609392830182828015610b415760200282019190600052602060002090815481526020019060010190808311610c3b5750505050509050919050565b611646604051602001610b979061263e565b6000818152600a60205260408120610e5991611ee3565b6000611671604051602001610b979061263e565b5060009182526020829052604090912081905590565b611699604051602001610b979061263e565b600090815260016020526040812055565b6000838152600d60205260409020606090611015908484611a2c565b60006116da604051602001610b979061263e565b600083815260208190526040812054610d389084906127fc565b611706604051602001610b979061263e565b60008281526008602090815260409091208251610bf492840190611f01565b6000838152600c60205260409020606090611015908484611aef565b600460205260009081526040902080546113a490612604565b6000818152600c60205260408120610ac59061179a565b611783604051602001610b979061263e565b6000818152600960205260408120610e5991611f56565b6000610ac5825490565b60405163ac4ab3fb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ac4ab3fb90604401602060405180830381865afa15801561180f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611833919061280f565b61185457338160405163a35b150b60e01b8152600401610cd992919061282c565b5050565b6000610c728383611ba5565b6000808212156118b65760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f7369746976656044820152606401610cd9565b5090565b6000808213156118de576118cd82611bbd565b6118d79084612694565b9050610ac5565b6118e782611bbd565b610c7290846127fc565b6000610c72836001600160a01b038416611bd0565b60606119118461179a565b831061192c5750604080516000815260208101909152610c72565b60006119378561179a565b905080831115611945578092505b600061195185856127fc565b6001600160401b03811115611968576119686120d2565b604051908082528060200260200182016040528015611991578160200160208202803683370190505b509050845b848110156119e0576119a88782611cca565b826119b388846127fc565b815181106119c3576119c3612850565b6020908102919091010152806119d881612866565b915050611996565b5095945050505050565b6000610c728383611bd0565b6000610c728383611cd6565b6000610c72836001600160a01b038416611cd6565b6000610c72836001600160a01b038416611ba5565b60606000611a398561179a565b905080831115611a47578092505b6000611a5385856127fc565b6001600160401b03811115611a6a57611a6a6120d2565b604051908082528060200260200182016040528015611a93578160200160208202803683370190505b509050845b848110156119e057611aaa8782611cca565b82611ab588846127fc565b81518110611ac557611ac5612850565b6001600160a01b039092166020928302919091019091015280611ae781612866565b915050611a98565b60606000611afc8561179a565b905080831115611b0a578092505b6000611b1685856127fc565b6001600160401b03811115611b2d57611b2d6120d2565b604051908082528060200260200182016040528015611b56578160200160208202803683370190505b509050845b848110156119e057611b6d8782611d20565b82611b7888846127fc565b81518110611b8857611b88612850565b602090810291909101015280611b9d81612866565b915050611b5b565b60009081526001919091016020526040902054151590565b6000808212156118b65781600003610ac5565b60008181526001830160205260408120548015611cb9576000611bf46001836127fc565b8554909150600090611c08906001906127fc565b9050818114611c6d576000866000018281548110611c2857611c28612850565b9060005260206000200154905080876000018481548110611c4b57611c4b612850565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611c7e57611c7e61287f565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610ac5565b6000915050610ac5565b5092915050565b6000610c728383611d28565b6000611ce28383611ba5565b611d1857508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610ac5565b506000610ac5565b6000610c7283835b6000826000018281548110611d3f57611d3f612850565b9060005260206000200154905092915050565b828054828255906000526020600020908101928215611d8d579160200282015b82811115611d8d578251825591602001919060010190611d72565b506118b6929150611f77565b82805482825590600052602060002090601f01602090048101928215611d8d5791602002820160005b83821115611dff57835183826101000a81548160ff0219169083151502179055509260200192600101602081600001049283019260010302611dc2565b8015611e2c5782816101000a81549060ff0219169055600101602081600001049283019260010302611dff565b50506118b6929150611f77565b5080546000825590600052602060002090810190610e599190611f77565b828054828255906000526020600020908101928215611e9d579160200282015b82811115611e9d5782518290611e8d90826126f5565b5091602001919060010190611e77565b506118b6929150611f8c565b508054611eb590612604565b6000825580601f10611ec5575050565b601f016020900490600052602060002090810190610e599190611f77565b5080546000825590600052602060002090810190610e599190611f8c565b828054828255906000526020600020908101928215611d8d579160200282015b82811115611d8d57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611f21565b50805460008255601f016020900490600052602060002090810190610e5991905b5b808211156118b65760008155600101611f78565b808211156118b6576000611fa08282611ea9565b50600101611f8c565b600060208284031215611fbb57600080fd5b5035919050565b6000815180845260005b81811015611fe857602081850181015186830182015201611fcc565b506000602082860101526020601f19601f83011685010191505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561205d57603f1988860301845261204b858351611fc2565b9450928501929085019060010161202f565b5092979650505050505050565b6020808252825182820181905260009190848201906040850190845b818110156120a4578351151583529284019291840191600101612086565b50909695505050505050565b600080604083850312156120c357600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715612110576121106120d2565b604052919050565b60006001600160401b03821115612131576121316120d2565b5060051b60200190565b6000806040838503121561214e57600080fd5b823591506020808401356001600160401b0381111561216c57600080fd5b8401601f8101861361217d57600080fd5b803561219061218b82612118565b6120e8565b81815260059190911b820183019083810190888311156121af57600080fd5b928401925b828410156121cd578335825292840192908401906121b4565b80955050505050509250929050565b6020808252825182820181905260009190848201906040850190845b818110156120a4578351835292840192918401916001016121f8565b600082601f83011261222557600080fd5b81356001600160401b0381111561223e5761223e6120d2565b612251601f8201601f19166020016120e8565b81815284602083860101111561226657600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006060848603121561229857600080fd5b833592506020840135915060408401356001600160401b038111156122bc57600080fd5b6122c886828701612214565b9150509250925092565b8015158114610e5957600080fd5b600080604083850312156122f357600080fd5b823591506020808401356001600160401b0381111561231157600080fd5b8401601f8101861361232257600080fd5b803561233061218b82612118565b81815260059190911b8201830190838101908883111561234f57600080fd5b928401925b828410156121cd578335612367816122d2565b82529284019290840190612354565b6020808252825182820181905260009190848201906040850190845b818110156120a45783516001600160a01b031683529284019291840191600101612392565b80356001600160a01b03811681146123ce57600080fd5b919050565b600080604083850312156123e657600080fd5b823591506123f6602084016123b7565b90509250929050565b6000806040838503121561241257600080fd5b8235915060208301356001600160401b0381111561242f57600080fd5b61243b85828601612214565b9150509250929050565b602081526000610c726020830184611fc2565b60008060006060848603121561246d57600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561249757600080fd5b823591506020808401356001600160401b03808211156124b657600080fd5b818601915086601f8301126124ca57600080fd5b81356124d861218b82612118565b81815260059190911b830184019084810190898311156124f757600080fd5b8585015b8381101561252f578035858111156125135760008081fd5b6125218c89838a0101612214565b8452509186019186016124fb565b508096505050505050509250929050565b6000806040838503121561255357600080fd5b823591506020830135612565816122d2565b809150509250929050565b6000806040838503121561258357600080fd5b823591506020808401356001600160401b038111156125a157600080fd5b8401601f810186136125b257600080fd5b80356125c061218b82612118565b81815260059190911b820183019083810190888311156125df57600080fd5b928401925b828410156121cd576125f5846123b7565b825292840192908401906125e4565b600181811c9082168061261857607f821691505b60208210810361263857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161268d5761268d612662565b5060000390565b80820180821115610ac557610ac5612662565b601f821115610bf457600081815260208120601f850160051c810160208610156126ce5750805b601f850160051c820191505b818110156126ed578281556001016126da565b505050505050565b81516001600160401b0381111561270e5761270e6120d2565b6127228161271c8454612604565b846126a7565b602080601f831160018114612757576000841561273f5750858301515b600019600386901b1c1916600185901b1785556126ed565b600085815260208120601f198616915b8281101561278657888601518255948401946001909101908401612767565b50858210156127a45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8181036000831280158383131683831282161715611cc357611cc3612662565b80820182811260008312801582168215821617156127f4576127f4612662565b505092915050565b81810381811115610ac557610ac5612662565b60006020828403121561282157600080fd5b8151610c72816122d2565b6001600160a01b038316815260406020820181905260009061101590830184611fc2565b634e487b7160e01b600052603260045260246000fd5b60006001820161287857612878612662565b5060010190565b634e487b7160e01b600052603160045260246000fdfea264697066735822122078fa982c04127061c9e1c94f963f87e841da3406d1c88b279897f047516f979e64736f6c63430008120033',
    deployedBytecode:
        '0x608060405234801561001057600080fd5b50600436106103485760003560e01c80639921c3cc116101bb5780639921c3cc146106e85780639faf6fb6146106fb5780639fe7ac121461070e578063a6ed563e14610721578063a9fcf76b14610741578063abfdcced14610754578063adb353dc14610767578063b348e6391461077a578063b8320a081461078d578063bd02d0f5146107a0578063be43caa3146107c0578063bf498dd3146107d3578063bf7f035a146107e6578063c1dc9182146107f9578063c4f00fde1461080c578063c769d1a11461081f578063c80f4c6214610832578063ca446dd914610845578063cbb093dd14610858578063cc50eadd1461086b578063cf6a87221461087e578063d38eebc714610891578063d52852af146108b1578063dc97d962146108d1578063dd031997146108f1578063e208a70d14610904578063e2a4853a14610917578063e4e36c4e14610858578063e62461ce1461092a578063e7e4148e1461093d578063e98aabc114610950578063ec672cf614610963578063f069052a14610976578063f15caeac14610989578063f3903b9f1461099c578063f51fc0d9146109af57600080fd5b806301677da21461034d578063065f21a714610376578063116bb9291461039757806321f8a721146103b757806322538dae146103f857806322f874641461042157806326004846146104345780632d2899b614610449578063310b88821461046957806332f85bbf1461048c578063340dbab31461049f57806335d4d407146104b257806335ea8059146104c55780633dbacd1a146104d85780633e49bed0146104eb57806342c3bd96146104fe57806344a242b114610511578063499ea50e146105345780634a4a7b04146105475780634e91db081461056e5780635948f733146105815780635eb07dbd146105a15780636339734d146105b457806369721d41146105c75780636e899550146105da5780636fae54f0146105fa5780637026d42c1461060d578063743df325146106205780637ae1cfca1461064057806380aacdcd1461066357806386ac6bdf1461067657806388021a72146106895780638ca498b01461069c57806391d4403c146106af57806393266f9a146106c2578063986e791a146106d5575b600080fd5b61036061035b366004611fa9565b6109c2565b60405161036d9190612008565b60405180910390f35b610389610384366004611fa9565b610aae565b60405190815260200161036d565b6103aa6103a5366004611fa9565b610acb565b60405161036d919061206a565b6103e06103c5366004611fa9565b6000908152600260205260409020546001600160a01b031690565b6040516001600160a01b03909116815260200161036d565b6103e0610406366004611fa9565b6002602052600090815260409020546001600160a01b031681565b6103e061042f3660046120b0565b610b4d565b61044761044236600461213b565b610b85565b005b61045c610457366004611fa9565b610bf9565b60405161036d91906121dc565b61047c6104773660046120b0565b610c5a565b604051901515815260200161036d565b61038961049a366004612283565b610c79565b6103896104ad3660046120b0565b610d0a565b6104476104c03660046122e0565b610d52565b6103896104d3366004611fa9565b610d83565b6103896104e63660046120b0565b610d9a565b6103896104f93660046120b0565b610de3565b61044761050c366004611fa9565b610e0d565b61047c61051f366004611fa9565b60036020526000908152604090205460ff1681565b610447610542366004611fa9565b610e30565b6103e07f000000000000000000000000000000000000000000000000000000000000000081565b61038961057c3660046120b0565b610e5c565b61059461058f366004611fa9565b610e86565b60405161036d9190612376565b6104476105af36600461213b565b610ef1565b6103896105c23660046120b0565b610f22565b6104476105d53660046123d3565b610f53565b6105ed6105e83660046123ff565b610f7d565b60405161036d9190612445565b6103896106083660046120b0565b610fb1565b61045c61061b366004612458565b610ff9565b61038961062e366004611fa9565b60016020526000908152604090205481565b61047c61064e366004611fa9565b60009081526003602052604090205460ff1690565b61047c6106713660046120b0565b61101d565b61045c610684366004611fa9565b611060565b610447610697366004612484565b6110c0565b6103896106aa3660046120b0565b6110f1565b61047c6106bd3660046120b0565b611156565b6104476106d03660046120b0565b61116e565b6105ed6106e3366004611fa9565b611198565b6104476106f63660046120b0565b611230565b610447610709366004611fa9565b61125a565b61044761071c366004611fa9565b61128a565b61038961072f366004611fa9565b60009081526005602052604090205490565b61044761074f36600461213b565b6112b4565b61047c610762366004612540565b6112e5565b6104476107753660046120b0565b611318565b6104476107883660046123d3565b611342565b6105ed61079b3660046120b0565b61136c565b6103896107ae366004611fa9565b60009081526020819052604090205490565b6104476107ce366004611fa9565b611425565b6103896107e13660046120b0565b61144e565b6104476107f4366004611fa9565b61146a565b610447610807366004611fa9565b611493565b61038961081a3660046120b0565b6114bc565b61047c61082d3660046123d3565b6114d8565b6104476108403660046120b0565b6114f0565b6103e06108533660046123d3565b61151a565b6103896108663660046120b0565b61155a565b610447610879366004611fa9565b611588565b61044761088c366004611fa9565b6115b1565b61038961089f366004611fa9565b60006020819052908152604090205481565b6103896108bf366004611fa9565b60056020526000908152604090205481565b6103896108df366004611fa9565b60009081526001602052604090205490565b61045c6108ff366004611fa9565b6115d4565b610447610912366004611fa9565b611634565b6103896109253660046120b0565b61165d565b610447610938366004611fa9565b611687565b61059461094b366004612458565b6116aa565b61038961095e3660046120b0565b6116c6565b610447610971366004612570565b6116f4565b61045c610984366004612458565b611725565b6105ed610997366004611fa9565b611741565b6103896109aa366004611fa9565b61175a565b6104476109bd366004611fa9565b611771565b6060600a6000838152602001908152602001600020805480602002602001604051908101604052809291908181526020016000905b82821015610aa3578382906000526020600020018054610a1690612604565b80601f0160208091040260200160405190810160405280929190818152602001828054610a4290612604565b8015610a8f5780601f10610a6457610100808354040283529160200191610a8f565b820191906000526020600020905b815481529060010190602001808311610a7257829003601f168201915b5050505050815260200190600101906109f7565b505050509050919050565b6000818152600e60205260408120610ac59061179a565b92915050565b600081815260096020908152604091829020805483518184028101840190945280845260609392830182828015610b4157602002820191906000526020600020906000905b825461010083900a900460ff161515815260206001928301818104948501949093039092029101808411610b105790505b50505050509050919050565b60086020528160005260406000208181548110610b6957600080fd5b6000918252602090912001546001600160a01b03169150829050565b610bd5604051602001610b979061263e565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b8152506117a4565b6000828152600b602090815260409091208251610bf492840190611d52565b505050565b600081815260076020908152604091829020805483518184028101840190945280845260609392830182828015610b4157602002820191906000526020600020905b815481526020019060010190808311610c3b5750505050509050919050565b6000828152600e60205260408120610c729083611858565b9392505050565b6000610c8d604051602001610b979061263e565b6000848152602081905260408120549084128015610cba575080610cb8610cb386612678565b611864565b115b15610ce2578260405162461bcd60e51b8152600401610cd99190612445565b60405180910390fd5b6000610cee82866118ba565b6000878152602081905260409020819055925050509392505050565b6000610d1e604051602001610b979061263e565b600083815260208190526040812054610d38908490612694565b600085815260208190526040902081905591505092915050565b610d64604051602001610b979061263e565b60008281526009602090815260409091208251610bf492840190611d99565b6000818152600d60205260408120610ac59061179a565b6000610dae604051602001610b979061263e565b60008381526020819052604081205490610dc88483612694565b60008681526020819052604090208190559250505092915050565b6000610df7604051602001610b979061263e565b5060009182526001602052604090912081905590565b610e1f604051602001610b979061263e565b600090815260208190526040812055565b610e42604051602001610b979061263e565b6000818152600760205260408120610e5991611e39565b50565b6000610e70604051602001610b979061263e565b5060009182526005602052604090912081905590565b600081815260086020908152604091829020805483518184028101840190945280845260609392830182828015610b4157602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610ec85750505050509050919050565b610f03604051602001610b979061263e565b60008281526006602090815260409091208251610bf492840190611d52565b60076020528160005260406000208181548110610f3e57600080fd5b90600052602060002001600091509150505481565b610f65604051602001610b979061263e565b6000828152600d60205260409020610bf490826118f1565b6060610f91604051602001610b979061263e565b6000838152600460205260409020610fa983826126f5565b509092915050565b6000610fc5604051602001610b979061263e565b600083815260016020526040812054610fdf9084906127b4565b600085815260016020526040902081905591505092915050565b6000838152600e60205260409020606090611015908484611906565b949350505050565b6009602052816000526040600020818154811061103957600080fd5b9060005260206000209060209182820401919006915091509054906101000a900460ff1681565b600081815260066020908152604091829020805483518184028101840190945280845260609392830182828015610b415760200282019190600052602060002090815481526020019060010190808311610c3b5750505050509050919050565b6110d2604051602001610b979061263e565b6000828152600a602090815260409091208251610bf492840190611e57565b6000611105604051602001610b979061263e565b600083815260208190526040812054908312801561112d57508061112b610cb385612678565b115b1561114a5750506000828152602081905260408120819055610ac5565b6000610dc882856118ba565b6000828152600c60205260408120610c729083611858565b611180604051602001610b979061263e565b6000828152600e60205260409020610bf490826119ea565b60008181526004602052604090208054606091906111b590612604565b80601f01602080910402602001604051908101604052809291908181526020018280546111e190612604565b8015610b415780601f1061120357610100808354040283529160200191610b41565b820191906000526020600020905b8154815290600101906020018083116112115750939695505050505050565b611242604051602001610b979061263e565b6000828152600c60205260409020610bf490826119ea565b61126c604051602001610b979061263e565b600090815260026020526040902080546001600160a01b0319169055565b61129c604051602001610b979061263e565b6000908152600360205260409020805460ff19169055565b6112c6604051602001610b979061263e565b60008281526007602090815260409091208251610bf492840190611d52565b60006112f9604051602001610b979061263e565b50600091825260036020526040909120805460ff191682151517905590565b61132a604051602001610b979061263e565b6000828152600e60205260409020610bf490826119f6565b611354604051602001610b979061263e565b6000828152600d60205260409020610bf49082611a02565b600a602052816000526040600020818154811061138857600080fd5b906000526020600020016000915091505080546113a490612604565b80601f01602080910402602001604051908101604052809291908181526020018280546113d090612604565b801561141d5780601f106113f25761010080835404028352916020019161141d565b820191906000526020600020905b81548152906001019060200180831161140057829003601f168201915b505050505081565b611437604051602001610b979061263e565b6000818152600660205260408120610e5991611e39565b600b6020528160005260406000208181548110610f3e57600080fd5b61147c604051602001610b979061263e565b6000818152600b60205260408120610e5991611e39565b6114a5604051602001610b979061263e565b6000818152600860205260408120610e5991611e39565b60066020528160005260406000208181548110610f3e57600080fd5b6000828152600d60205260408120610c729083611a17565b611502604051602001610b979061263e565b6000828152600c60205260409020610bf490826119f6565b600061152e604051602001610b979061263e565b5060009182526002602052604090912080546001600160a01b0319166001600160a01b03831617905590565b600061156e604051602001610b979061263e565b600083815260016020526040812054610fdf9084906127d4565b61159a604051602001610b979061263e565b6000818152600460205260408120610e5991611ea9565b6115c3604051602001610b979061263e565b600090815260056020526040812055565b6000818152600b6020908152604091829020805483518184028101840190945280845260609392830182828015610b415760200282019190600052602060002090815481526020019060010190808311610c3b5750505050509050919050565b611646604051602001610b979061263e565b6000818152600a60205260408120610e5991611ee3565b6000611671604051602001610b979061263e565b5060009182526020829052604090912081905590565b611699604051602001610b979061263e565b600090815260016020526040812055565b6000838152600d60205260409020606090611015908484611a2c565b60006116da604051602001610b979061263e565b600083815260208190526040812054610d389084906127fc565b611706604051602001610b979061263e565b60008281526008602090815260409091208251610bf492840190611f01565b6000838152600c60205260409020606090611015908484611aef565b600460205260009081526040902080546113a490612604565b6000818152600c60205260408120610ac59061179a565b611783604051602001610b979061263e565b6000818152600960205260408120610e5991611f56565b6000610ac5825490565b60405163ac4ab3fb60e01b8152336004820152602481018390527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063ac4ab3fb90604401602060405180830381865afa15801561180f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611833919061280f565b61185457338160405163a35b150b60e01b8152600401610cd992919061282c565b5050565b6000610c728383611ba5565b6000808212156118b65760405162461bcd60e51b815260206004820181905260248201527f53616665436173743a2076616c7565206d75737420626520706f7369746976656044820152606401610cd9565b5090565b6000808213156118de576118cd82611bbd565b6118d79084612694565b9050610ac5565b6118e782611bbd565b610c7290846127fc565b6000610c72836001600160a01b038416611bd0565b60606119118461179a565b831061192c5750604080516000815260208101909152610c72565b60006119378561179a565b905080831115611945578092505b600061195185856127fc565b6001600160401b03811115611968576119686120d2565b604051908082528060200260200182016040528015611991578160200160208202803683370190505b509050845b848110156119e0576119a88782611cca565b826119b388846127fc565b815181106119c3576119c3612850565b6020908102919091010152806119d881612866565b915050611996565b5095945050505050565b6000610c728383611bd0565b6000610c728383611cd6565b6000610c72836001600160a01b038416611cd6565b6000610c72836001600160a01b038416611ba5565b60606000611a398561179a565b905080831115611a47578092505b6000611a5385856127fc565b6001600160401b03811115611a6a57611a6a6120d2565b604051908082528060200260200182016040528015611a93578160200160208202803683370190505b509050845b848110156119e057611aaa8782611cca565b82611ab588846127fc565b81518110611ac557611ac5612850565b6001600160a01b039092166020928302919091019091015280611ae781612866565b915050611a98565b60606000611afc8561179a565b905080831115611b0a578092505b6000611b1685856127fc565b6001600160401b03811115611b2d57611b2d6120d2565b604051908082528060200260200182016040528015611b56578160200160208202803683370190505b509050845b848110156119e057611b6d8782611d20565b82611b7888846127fc565b81518110611b8857611b88612850565b602090810291909101015280611b9d81612866565b915050611b5b565b60009081526001919091016020526040902054151590565b6000808212156118b65781600003610ac5565b60008181526001830160205260408120548015611cb9576000611bf46001836127fc565b8554909150600090611c08906001906127fc565b9050818114611c6d576000866000018281548110611c2857611c28612850565b9060005260206000200154905080876000018481548110611c4b57611c4b612850565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611c7e57611c7e61287f565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610ac5565b6000915050610ac5565b5092915050565b6000610c728383611d28565b6000611ce28383611ba5565b611d1857508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610ac5565b506000610ac5565b6000610c7283835b6000826000018281548110611d3f57611d3f612850565b9060005260206000200154905092915050565b828054828255906000526020600020908101928215611d8d579160200282015b82811115611d8d578251825591602001919060010190611d72565b506118b6929150611f77565b82805482825590600052602060002090601f01602090048101928215611d8d5791602002820160005b83821115611dff57835183826101000a81548160ff0219169083151502179055509260200192600101602081600001049283019260010302611dc2565b8015611e2c5782816101000a81549060ff0219169055600101602081600001049283019260010302611dff565b50506118b6929150611f77565b5080546000825590600052602060002090810190610e599190611f77565b828054828255906000526020600020908101928215611e9d579160200282015b82811115611e9d5782518290611e8d90826126f5565b5091602001919060010190611e77565b506118b6929150611f8c565b508054611eb590612604565b6000825580601f10611ec5575050565b601f016020900490600052602060002090810190610e599190611f77565b5080546000825590600052602060002090810190610e599190611f8c565b828054828255906000526020600020908101928215611d8d579160200282015b82811115611d8d57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611f21565b50805460008255601f016020900490600052602060002090810190610e5991905b5b808211156118b65760008155600101611f78565b808211156118b6576000611fa08282611ea9565b50600101611f8c565b600060208284031215611fbb57600080fd5b5035919050565b6000815180845260005b81811015611fe857602081850181015186830182015201611fcc565b506000602082860101526020601f19601f83011685010191505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561205d57603f1988860301845261204b858351611fc2565b9450928501929085019060010161202f565b5092979650505050505050565b6020808252825182820181905260009190848201906040850190845b818110156120a4578351151583529284019291840191600101612086565b50909695505050505050565b600080604083850312156120c357600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715612110576121106120d2565b604052919050565b60006001600160401b03821115612131576121316120d2565b5060051b60200190565b6000806040838503121561214e57600080fd5b823591506020808401356001600160401b0381111561216c57600080fd5b8401601f8101861361217d57600080fd5b803561219061218b82612118565b6120e8565b81815260059190911b820183019083810190888311156121af57600080fd5b928401925b828410156121cd578335825292840192908401906121b4565b80955050505050509250929050565b6020808252825182820181905260009190848201906040850190845b818110156120a4578351835292840192918401916001016121f8565b600082601f83011261222557600080fd5b81356001600160401b0381111561223e5761223e6120d2565b612251601f8201601f19166020016120e8565b81815284602083860101111561226657600080fd5b816020850160208301376000918101602001919091529392505050565b60008060006060848603121561229857600080fd5b833592506020840135915060408401356001600160401b038111156122bc57600080fd5b6122c886828701612214565b9150509250925092565b8015158114610e5957600080fd5b600080604083850312156122f357600080fd5b823591506020808401356001600160401b0381111561231157600080fd5b8401601f8101861361232257600080fd5b803561233061218b82612118565b81815260059190911b8201830190838101908883111561234f57600080fd5b928401925b828410156121cd578335612367816122d2565b82529284019290840190612354565b6020808252825182820181905260009190848201906040850190845b818110156120a45783516001600160a01b031683529284019291840191600101612392565b80356001600160a01b03811681146123ce57600080fd5b919050565b600080604083850312156123e657600080fd5b823591506123f6602084016123b7565b90509250929050565b6000806040838503121561241257600080fd5b8235915060208301356001600160401b0381111561242f57600080fd5b61243b85828601612214565b9150509250929050565b602081526000610c726020830184611fc2565b60008060006060848603121561246d57600080fd5b505081359360208301359350604090920135919050565b6000806040838503121561249757600080fd5b823591506020808401356001600160401b03808211156124b657600080fd5b818601915086601f8301126124ca57600080fd5b81356124d861218b82612118565b81815260059190911b830184019084810190898311156124f757600080fd5b8585015b8381101561252f578035858111156125135760008081fd5b6125218c89838a0101612214565b8452509186019186016124fb565b508096505050505050509250929050565b6000806040838503121561255357600080fd5b823591506020830135612565816122d2565b809150509250929050565b6000806040838503121561258357600080fd5b823591506020808401356001600160401b038111156125a157600080fd5b8401601f810186136125b257600080fd5b80356125c061218b82612118565b81815260059190911b820183019083810190888311156125df57600080fd5b928401925b828410156121cd576125f5846123b7565b825292840192908401906125e4565b600181811c9082168061261857607f821691505b60208210810361263857634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b820161268d5761268d612662565b5060000390565b80820180821115610ac557610ac5612662565b601f821115610bf457600081815260208120601f850160051c810160208610156126ce5750805b601f850160051c820191505b818110156126ed578281556001016126da565b505050505050565b81516001600160401b0381111561270e5761270e6120d2565b6127228161271c8454612604565b846126a7565b602080601f831160018114612757576000841561273f5750858301515b600019600386901b1c1916600185901b1785556126ed565b600085815260208120601f198616915b8281101561278657888601518255948401946001909101908401612767565b50858210156127a45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8181036000831280158383131683831282161715611cc357611cc3612662565b80820182811260008312801582168215821617156127f4576127f4612662565b505092915050565b81810381811115610ac557610ac5612662565b60006020828403121561282157600080fd5b8151610c72816122d2565b6001600160a01b038316815260406020820181905260009061101590830184611fc2565b634e487b7160e01b600052603260045260246000fd5b60006001820161287857612878612662565b5060010190565b634e487b7160e01b600052603160045260246000fdfea264697066735822122078fa982c04127061c9e1c94f963f87e841da3406d1c88b279897f047516f979e64736f6c63430008120033',
    libraries: {
        GasUtils: '0xfE71535A66F3F810f5d81E83661Fc933329e9Eb3',
        OrderUtils: '0x2218D8c66F703A9088421E3fd75A166A27D1D9De',
        AdlUtils: '0x7E3037AB1442357A7b9bb19BDE4b4383BD13e8E0',
        PositionStoreUtils: '0x4f4a21b04d30B56A98aFefA5E2070787Cf22eB83',
        OrderStoreUtils: '0x0419073C68a65b286b30feC7F08bfc35E975Ed5B',
    },
    devdoc: {
        kind: 'dev',
        methods: {},
        version: 1,
    },
    userdoc: {
        kind: 'user',
        methods: {},
        version: 1,
    },
    storageLayout: {
        storage: [
            {
                astId: 9744,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'uintValues',
                offset: 0,
                slot: '0',
                type: 't_mapping(t_bytes32,t_uint256)',
            },
            {
                astId: 9748,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'intValues',
                offset: 0,
                slot: '1',
                type: 't_mapping(t_bytes32,t_int256)',
            },
            {
                astId: 9752,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'addressValues',
                offset: 0,
                slot: '2',
                type: 't_mapping(t_bytes32,t_address)',
            },
            {
                astId: 9756,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'boolValues',
                offset: 0,
                slot: '3',
                type: 't_mapping(t_bytes32,t_bool)',
            },
            {
                astId: 9760,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'stringValues',
                offset: 0,
                slot: '4',
                type: 't_mapping(t_bytes32,t_string_storage)',
            },
            {
                astId: 9764,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'bytes32Values',
                offset: 0,
                slot: '5',
                type: 't_mapping(t_bytes32,t_bytes32)',
            },
            {
                astId: 9769,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'uintArrayValues',
                offset: 0,
                slot: '6',
                type: 't_mapping(t_bytes32,t_array(t_uint256)dyn_storage)',
            },
            {
                astId: 9774,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'intArrayValues',
                offset: 0,
                slot: '7',
                type: 't_mapping(t_bytes32,t_array(t_int256)dyn_storage)',
            },
            {
                astId: 9779,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'addressArrayValues',
                offset: 0,
                slot: '8',
                type: 't_mapping(t_bytes32,t_array(t_address)dyn_storage)',
            },
            {
                astId: 9784,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'boolArrayValues',
                offset: 0,
                slot: '9',
                type: 't_mapping(t_bytes32,t_array(t_bool)dyn_storage)',
            },
            {
                astId: 9789,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'stringArrayValues',
                offset: 0,
                slot: '10',
                type: 't_mapping(t_bytes32,t_array(t_string_storage)dyn_storage)',
            },
            {
                astId: 9794,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'bytes32ArrayValues',
                offset: 0,
                slot: '11',
                type: 't_mapping(t_bytes32,t_array(t_bytes32)dyn_storage)',
            },
            {
                astId: 9799,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'bytes32Sets',
                offset: 0,
                slot: '12',
                type: 't_mapping(t_bytes32,t_struct(Bytes32Set)4953_storage)',
            },
            {
                astId: 9804,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'addressSets',
                offset: 0,
                slot: '13',
                type: 't_mapping(t_bytes32,t_struct(AddressSet)5060_storage)',
            },
            {
                astId: 9809,
                contract: 'contracts/data/DataStore.sol:DataStore',
                label: 'uintSets',
                offset: 0,
                slot: '14',
                type: 't_mapping(t_bytes32,t_struct(UintSet)5217_storage)',
            },
        ],
        types: {
            t_address: {
                encoding: 'inplace',
                label: 'address',
                numberOfBytes: '20',
            },
            't_array(t_address)dyn_storage': {
                base: 't_address',
                encoding: 'dynamic_array',
                label: 'address[]',
                numberOfBytes: '32',
            },
            't_array(t_bool)dyn_storage': {
                base: 't_bool',
                encoding: 'dynamic_array',
                label: 'bool[]',
                numberOfBytes: '32',
            },
            't_array(t_bytes32)dyn_storage': {
                base: 't_bytes32',
                encoding: 'dynamic_array',
                label: 'bytes32[]',
                numberOfBytes: '32',
            },
            't_array(t_int256)dyn_storage': {
                base: 't_int256',
                encoding: 'dynamic_array',
                label: 'int256[]',
                numberOfBytes: '32',
            },
            't_array(t_string_storage)dyn_storage': {
                base: 't_string_storage',
                encoding: 'dynamic_array',
                label: 'string[]',
                numberOfBytes: '32',
            },
            't_array(t_uint256)dyn_storage': {
                base: 't_uint256',
                encoding: 'dynamic_array',
                label: 'uint256[]',
                numberOfBytes: '32',
            },
            t_bool: {
                encoding: 'inplace',
                label: 'bool',
                numberOfBytes: '1',
            },
            t_bytes32: {
                encoding: 'inplace',
                label: 'bytes32',
                numberOfBytes: '32',
            },
            t_int256: {
                encoding: 'inplace',
                label: 'int256',
                numberOfBytes: '32',
            },
            't_mapping(t_bytes32,t_address)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => address)',
                numberOfBytes: '32',
                value: 't_address',
            },
            't_mapping(t_bytes32,t_array(t_address)dyn_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => address[])',
                numberOfBytes: '32',
                value: 't_array(t_address)dyn_storage',
            },
            't_mapping(t_bytes32,t_array(t_bool)dyn_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => bool[])',
                numberOfBytes: '32',
                value: 't_array(t_bool)dyn_storage',
            },
            't_mapping(t_bytes32,t_array(t_bytes32)dyn_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => bytes32[])',
                numberOfBytes: '32',
                value: 't_array(t_bytes32)dyn_storage',
            },
            't_mapping(t_bytes32,t_array(t_int256)dyn_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => int256[])',
                numberOfBytes: '32',
                value: 't_array(t_int256)dyn_storage',
            },
            't_mapping(t_bytes32,t_array(t_string_storage)dyn_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => string[])',
                numberOfBytes: '32',
                value: 't_array(t_string_storage)dyn_storage',
            },
            't_mapping(t_bytes32,t_array(t_uint256)dyn_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => uint256[])',
                numberOfBytes: '32',
                value: 't_array(t_uint256)dyn_storage',
            },
            't_mapping(t_bytes32,t_bool)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => bool)',
                numberOfBytes: '32',
                value: 't_bool',
            },
            't_mapping(t_bytes32,t_bytes32)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => bytes32)',
                numberOfBytes: '32',
                value: 't_bytes32',
            },
            't_mapping(t_bytes32,t_int256)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => int256)',
                numberOfBytes: '32',
                value: 't_int256',
            },
            't_mapping(t_bytes32,t_string_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => string)',
                numberOfBytes: '32',
                value: 't_string_storage',
            },
            't_mapping(t_bytes32,t_struct(AddressSet)5060_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => struct EnumerableSet.AddressSet)',
                numberOfBytes: '32',
                value: 't_struct(AddressSet)5060_storage',
            },
            't_mapping(t_bytes32,t_struct(Bytes32Set)4953_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => struct EnumerableSet.Bytes32Set)',
                numberOfBytes: '32',
                value: 't_struct(Bytes32Set)4953_storage',
            },
            't_mapping(t_bytes32,t_struct(UintSet)5217_storage)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => struct EnumerableSet.UintSet)',
                numberOfBytes: '32',
                value: 't_struct(UintSet)5217_storage',
            },
            't_mapping(t_bytes32,t_uint256)': {
                encoding: 'mapping',
                key: 't_bytes32',
                label: 'mapping(bytes32 => uint256)',
                numberOfBytes: '32',
                value: 't_uint256',
            },
            t_string_storage: {
                encoding: 'bytes',
                label: 'string',
                numberOfBytes: '32',
            },
            't_struct(AddressSet)5060_storage': {
                encoding: 'inplace',
                label: 'struct EnumerableSet.AddressSet',
                members: [
                    {
                        astId: 5059,
                        contract: 'contracts/data/DataStore.sol:DataStore',
                        label: '_inner',
                        offset: 0,
                        slot: '0',
                        type: 't_struct(Set)4759_storage',
                    },
                ],
                numberOfBytes: '64',
            },
            't_struct(Bytes32Set)4953_storage': {
                encoding: 'inplace',
                label: 'struct EnumerableSet.Bytes32Set',
                members: [
                    {
                        astId: 4952,
                        contract: 'contracts/data/DataStore.sol:DataStore',
                        label: '_inner',
                        offset: 0,
                        slot: '0',
                        type: 't_struct(Set)4759_storage',
                    },
                ],
                numberOfBytes: '64',
            },
            't_struct(Set)4759_storage': {
                encoding: 'inplace',
                label: 'struct EnumerableSet.Set',
                members: [
                    {
                        astId: 4754,
                        contract: 'contracts/data/DataStore.sol:DataStore',
                        label: '_values',
                        offset: 0,
                        slot: '0',
                        type: 't_array(t_bytes32)dyn_storage',
                    },
                    {
                        astId: 4758,
                        contract: 'contracts/data/DataStore.sol:DataStore',
                        label: '_indexes',
                        offset: 0,
                        slot: '1',
                        type: 't_mapping(t_bytes32,t_uint256)',
                    },
                ],
                numberOfBytes: '64',
            },
            't_struct(UintSet)5217_storage': {
                encoding: 'inplace',
                label: 'struct EnumerableSet.UintSet',
                members: [
                    {
                        astId: 5216,
                        contract: 'contracts/data/DataStore.sol:DataStore',
                        label: '_inner',
                        offset: 0,
                        slot: '0',
                        type: 't_struct(Set)4759_storage',
                    },
                ],
                numberOfBytes: '64',
            },
            t_uint256: {
                encoding: 'inplace',
                label: 'uint256',
                numberOfBytes: '32',
            },
        },
    },
};
