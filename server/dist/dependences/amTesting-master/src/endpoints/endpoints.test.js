"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('getEndpoints', () => {
    test('returns API endpoints', async () => {
        const res = await (0, _1.getEndpoints)();
        expect(Object.keys(res.data)).toEqual(['characters', 'locations', 'episodes']);
    });
});
