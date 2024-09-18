import * as jsonServer from "json-server";
import { METHOD, Method, Response } from "@/mocks/api/responses";

import { route } from "@/mocks/api/responses";

const server = jsonServer.create();
const middles = jsonServer.defaults();

server.use(middles);

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow any origin
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

route.forEach((e) => {
  Object.keys(e.response).forEach((m) => {
    const response: Response = e.response[m as Method]!;
    switch (m) {
      case METHOD.GET:
        server.get(e.path, (_, res) => {
          res.status(response.statusCode).json(response.data);
        });
        break;
      case METHOD.PUT:
        server.put(e.path, (_, res) => {
          res.status(response.statusCode).json(response.data);
        });
        break;
      case METHOD.POST:
        server.post(e.path, (_, res) => {
          res.status(response.statusCode).json(response.data);
        });
        break;
      case METHOD.DELETE:
        server.delete(e.path, (_, res) => {
          res.status(response.statusCode).json(response.data);
        });
        break;
    }
  });
});

server.listen(3001, () => {
  console.log("start json-server");
});
