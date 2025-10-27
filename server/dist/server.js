"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("./dependences/amTesting-master/src");
const json_server_1 = __importDefault(require("json-server"));
async function startServer() {
    console.log("Bien");
    const charactersResponse = await (0, src_1.getCharacters)({});
    const db = { characters: charactersResponse?.data?.results || [] };
    const server = json_server_1.default.create();
    const router = json_server_1.default.router(db);
    const middlewares = json_server_1.default.defaults();
    server.use(middlewares);
    server.use(router);
    server.listen(4000, () => {
        console.log("✅ JSON Server corriendo en http://localhost:4000");
    });
}
startServer();
