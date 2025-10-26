

async function startServer() {
const JSONServer = await import("json-server").then(mod => mod.default);
const {getCharacters} = await import("rickmortyapi").then(mod => mod.default);


  const characters = await getCharacters({});

  const data = { characters };

  const server = JSONServer.create();
  const router = JSONServer.router(data);
  const middlewares = JSONServer.defaults();

  server.use(middlewares);
  server.use(router);

  server.listen(4000, () => {
    console.log("JSON Server running on http://localhost:4000");
  });
}

startServer();
