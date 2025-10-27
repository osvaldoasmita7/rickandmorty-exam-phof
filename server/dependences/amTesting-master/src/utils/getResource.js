"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generateQueryString_1 = __importDefault(require("./generateQueryString"));
const get_1 = __importDefault(require("./get"));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getResource = async ({ endpoint, options, isIdRequired = false }) => {
    const qs = (0, generateQueryString_1.default)(options, isIdRequired);
    return (0, get_1.default)(`${endpoint}/${qs}`);
};
exports.default = getResource;
