import jsonServer  from "json-server";
import path from "path";
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";
import ICredentials from "./credentials.interface";

const jsonServerConfig = jsonServer.router(path.resolve("src/database/config.json"));

const server = jsonServer.create();
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(jsonServerConfig);

interface IDatabase {
  credentials: ICredentials;
}

const adapter = new FileSync<IDatabase>(path.resolve("src/database/config.json"));
const database = low(adapter);

function getCredentials(): ICredentials {
  return database.get("credentials").value();
}

function setCredentials(data: ICredentials) {
  database.set("credentials", data).write();
}


export {
  getCredentials,
  setCredentials,
}
