"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacter = exports.getCharacters = void 0;
const getResource_1 = __importDefault(require("../utils/getResource"));
const endpoint = 'character';
/**
 * Gets a collection of Characters.<br/>
 * https://rickandmortyapi.com/documentation/#character
 */
const getCharacters = (filters) => (0, getResource_1.default)({ endpoint, options: filters ?? {} });
exports.getCharacters = getCharacters;
/**
 * Gets a Character by `id` or array of `ids`.<br/>
 * https://rickandmortyapi.com/documentation/#character
 */
const getCharacter = (id) => (0, getResource_1.default)({ endpoint, options: id, isIdRequired: true });
exports.getCharacter = getCharacter;
