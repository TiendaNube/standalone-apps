const express = require("express");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes");
const port = process.env.PORT || 7200;

const app = express();

app.use(routes);
app.use(cors());

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
