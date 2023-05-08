const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 7200;

const app = express();

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
