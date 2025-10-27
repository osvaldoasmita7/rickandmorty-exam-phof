"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
describe('getLocations', () => {
    test('response schema', async () => {
        const res = await (0, _1.getLocations)();
        expect(res.status).toBeTruthy();
        expect(res.statusMessage).toBeTruthy();
        expect(res.data.info).toBeTruthy();
        expect(res.data.results).toHaveLength(20);
    });
    test('get by filter', async () => {
        const res = await (0, _1.getLocations)({ dimension: 'C-137' });
        res.data.results?.forEach((item) => {
            expect(item.dimension).toContain('C-137');
        });
    });
    test('pagination', async () => {
        const res = await (0, _1.getLocations)({ page: 2 });
        expect(res.data.info?.prev).toContain('?page=1');
        expect(res.data.info?.next).toContain('?page=3');
    });
});
describe('getLocation', () => {
    test('get by ID', async () => {
        const res = await (0, _1.getLocation)(1);
        expect(res.data.id).toBe(1);
    });
    test('get by IDs', async () => {
        const res = await (0, _1.getLocation)([1, 2]);
        expect(res.data[0].id).toBe(1);
        expect(res.data[1].id).toBe(2);
    });
});
