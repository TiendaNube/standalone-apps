const jsonServer = require("json-server");
const axios = require("axios");
const database = jsonServer.router("db.json");

function getCredentials() {
  return database.db.get("credentials").value();
}

export default getCredentials;
