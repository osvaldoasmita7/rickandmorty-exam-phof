"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../dependences/amTesting-master/src/index");
async function startServer() {
    console.log("Bien");
    const charactersResponse = await (0, index_1.getCharacters)({});
    //   const db = { characters: charactersResponse?.data?.results || [] };
    //   const server = JSONServer.create();
    //   const router = JSONServer.router(db);
    //   const middlewares = JSONServer.defaults();
    //   server.use(middlewares);
    //   server.use(router);
    //   server.listen(4000, () => {
    //     console.log("✅ JSON Server corriendo en http://localhost:4000");
    //   });
}
startServer();
