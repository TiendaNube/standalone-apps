import ICredentials from "./credentials.interface";
const jsonServer = require("json-server");
const database = jsonServer.router("db.json");

function getCredentials(): ICredentials {
  return database.db.get("credentials").value();
}

export default getCredentials;
