import { getCharacters } from "./dependences/amTesting-master/src";
import JSONServer from "json-server";
async function startServer() {
  const charactersResponse = await getCharacters({});
  const db = { characters: charactersResponse?.data?.results || [] };

  const server = JSONServer.create();
  const router = JSONServer.router(db);
  const middlewares = JSONServer.defaults();

  server.use(middlewares);
  server.use(router);

  server.listen(4000, () => {
    console.log("✅ JSON Server corriendo en http://localhost:4000");
  });
}

startServer();
