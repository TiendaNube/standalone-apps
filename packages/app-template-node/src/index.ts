const express = require("express");
require("dotenv").config();
const axios = require("axios");
const port = process.env.PORT || 7200;
const jsonServer = require("json-server");

const app = express();
const router = jsonServer.router("db.json");

app.use(express.json());
app.get("/auth", async (req: any, res: any) => {
  try {
    if(!req.query.code) throw new Error("Authorization code not found");


    const body = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "authorization_code",
      authorization_code: req.query.code,
    }

    // Adiciona os dados recebidos ao array de usuários no arquivo db.json
    router.db.set("users", body).write();
    
    const bodyToPost = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: "authorization_code",
      code: req.query.code,
    }

    // Faz o POST para a API
    const response = await axios.post("https://www.tiendanube.com/apps/authorize/token", bodyToPost, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Retorna o token de acesso
    router.db.set("credentials", response.data).write();

    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
