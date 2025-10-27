"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
const character_1 = require("../character");
const generateQueryString_1 = __importStar(require("./generateQueryString"));
describe('generateQueryString', () => {
    test('Id or Ids', () => {
        const isIdRequired = true;
        expect((0, generateQueryString_1.default)(1, isIdRequired)).toBe('/1');
        expect((0, generateQueryString_1.default)([], isIdRequired)).toBe('/[0]');
        expect((0, generateQueryString_1.default)([1, 2, 3], isIdRequired)).toBe('/1,2,3');
    });
    test('filter object', () => {
        expect((0, generateQueryString_1.default)({ name: 'rick', status: 'Dead' })).toBe('/?name=rick&status=Dead');
    });
    test('error', () => {
        expect(() => (0, generateQueryString_1.default)()).toThrow();
        expect(() => (0, generateQueryString_1.default)('rick')).toThrow();
        expect(() => (0, generateQueryString_1.default)(1.1)).toThrow();
    });
});
describe('isArrayOfIntegers', () => {
    test('true', () => {
        expect((0, generateQueryString_1.isArrayOfIntegers)([1, 2])).toBe(true);
        expect((0, generateQueryString_1.isArrayOfIntegers)([1])).toBe(true);
        expect((0, generateQueryString_1.isArrayOfIntegers)([])).toBe(true);
    });
    test('false', () => {
        expect((0, generateQueryString_1.isArrayOfIntegers)([1, 'b'])).toBe(false);
        expect((0, generateQueryString_1.isArrayOfIntegers)([1, 1.2])).toBe(false);
    });
});
describe('Errors', () => {
    test('Client', () => {
        (0, character_1.getCharacters)(1).catch((error) => expect(error.message).toBe(generateQueryString_1.errorMessage.optional));
        (0, character_1.getCharacter)({ name: 'rick' }).catch((error) => expect(error.message).toBe(generateQueryString_1.errorMessage.required));
        (0, character_1.getCharacter)('wubba lubba dub dub').catch((error) => expect(error.message).toBe(generateQueryString_1.errorMessage.required));
        (0, character_1.getCharacters)('wubba lubba dub dub').catch((error) => expect(error.message).toBe(generateQueryString_1.errorMessage.optional));
    });
    test('API', async () => {
        const res = await (0, character_1.getCharacters)({ name: 'wubba lubba dub dub' });
        expect(res.status).toBe(404);
        expect(res.statusMessage).toBeTruthy();
    });
});
