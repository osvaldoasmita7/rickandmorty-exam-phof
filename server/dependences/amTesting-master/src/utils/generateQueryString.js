"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayOfIntegers = exports.errorMessage = void 0;
exports.errorMessage = {
    required: 'You are using an invalid argument. As an argument use an integer (Id) or an array of integers (Ids).',
    optional: 'You are using an invalid argument. As an argument use a filter object or leave it blank.',
};
const isInteger = (val) => typeof val === 'number' && Number.isInteger(val);
const isArrayOfIntegers = (val) => Array.isArray(val) && val.every(isInteger);
exports.isArrayOfIntegers = isArrayOfIntegers;
const generateQueryString = (query, isIdRequired) => {
    if (isIdRequired && isInteger(query)) {
        return `/${query}`;
    }
    if (isIdRequired && (0, exports.isArrayOfIntegers)(query)) {
        const arrayOfIds = query;
        /**
         * [0] forces the API to return an empty array.
         * This should be addressed in the next API codebase update.
         */
        return `/${arrayOfIds.length ? arrayOfIds : '[0]'}`;
    }
    if (!isIdRequired && typeof query === 'object' && !Array.isArray(query)) {
        const params = new URLSearchParams(query).toString();
        return `/?${params}`;
    }
    throw new Error(exports.errorMessage[isIdRequired ? 'required' : 'optional']);
};
exports.default = generateQueryString;
