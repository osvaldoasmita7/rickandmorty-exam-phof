"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get = async (endpoint) => {
    const res = await fetch(`https://rickandmortyapi.com/api/${endpoint}`);
    // response.status >= 200 && response.status < 300
    if (res.ok) {
        const data = await res.json();
        return {
            data,
            status: res.status,
            statusMessage: res.statusText,
        };
    }
    return {
        data: {},
        status: res.status,
        statusMessage: res.statusText,
    };
};
exports.default = get;
