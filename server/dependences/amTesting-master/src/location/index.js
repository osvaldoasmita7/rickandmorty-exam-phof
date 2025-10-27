"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocation = exports.getLocations = void 0;
const getResource_1 = __importDefault(require("../utils/getResource"));
const endpoint = 'location';
/**
 * Gets a collection of Locations.<br/>
 * https://rickandmortyapi.com/documentation/#location
 */
const getLocations = (filters) => (0, getResource_1.default)({ endpoint, options: filters ?? {} });
exports.getLocations = getLocations;
/**
 * Gets a Location by `id` or array of `ids`.<br/>
 * https://rickandmortyapi.com/documentation/#location
 */
const getLocation = (id) => (0, getResource_1.default)({ endpoint, options: id, isIdRequired: true });
exports.getLocation = getLocation;
