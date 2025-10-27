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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpoints = exports.getEpisode = exports.getEpisodes = exports.getLocation = exports.getLocations = exports.getCharacter = exports.getCharacters = void 0;
var character_1 = require("./character");
Object.defineProperty(exports, "getCharacters", { enumerable: true, get: function () { return character_1.getCharacters; } });
Object.defineProperty(exports, "getCharacter", { enumerable: true, get: function () { return character_1.getCharacter; } });
var location_1 = require("./location");
Object.defineProperty(exports, "getLocations", { enumerable: true, get: function () { return location_1.getLocations; } });
Object.defineProperty(exports, "getLocation", { enumerable: true, get: function () { return location_1.getLocation; } });
var episode_1 = require("./episode");
Object.defineProperty(exports, "getEpisodes", { enumerable: true, get: function () { return episode_1.getEpisodes; } });
Object.defineProperty(exports, "getEpisode", { enumerable: true, get: function () { return episode_1.getEpisode; } });
var endpoints_1 = require("./endpoints");
Object.defineProperty(exports, "getEndpoints", { enumerable: true, get: function () { return endpoints_1.getEndpoints; } });
__exportStar(require("./interfaces"), exports);
