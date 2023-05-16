const express = require("express");
require("dotenv").config();
const routes = require("./routes");
const port = process.env.PORT || 7200;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
