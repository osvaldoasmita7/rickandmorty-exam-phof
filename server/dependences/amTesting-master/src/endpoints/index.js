"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpoints = void 0;
const getResource_1 = __importDefault(require("../utils/getResource"));
/**
 * Gets a list of available resources.<br/>
 * https://rickandmortyapi.com/documentation/#rest
 */
const getEndpoints = () => (0, getResource_1.default)({ endpoint: '', options: {} });
exports.getEndpoints = getEndpoints;
