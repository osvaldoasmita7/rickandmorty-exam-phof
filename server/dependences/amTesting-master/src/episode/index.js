"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEpisode = exports.getEpisodes = void 0;
const getResource_1 = __importDefault(require("../utils/getResource"));
const endpoint = 'episode';
/**
 * Gets a collection of Episodes.<br/>
 * https://rickandmortyapi.com/documentation/#episode
 */
const getEpisodes = (filters) => (0, getResource_1.default)({ endpoint, options: filters ?? {} });
exports.getEpisodes = getEpisodes;
/**
 * Gets an Episode by `id` or array of `ids`.<br/>
 * https://rickandmortyapi.com/documentation/#episode
 */
const getEpisode = (id) => (0, getResource_1.default)({ endpoint, options: id, isIdRequired: true });
exports.getEpisode = getEpisode;
