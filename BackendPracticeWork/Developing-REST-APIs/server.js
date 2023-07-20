const express = require("express");

const app = express();

app.use(express.json());

/**
 * Stich the route to the server
 */
require("./Routes/idea.routes")(app);

app.listen(8080, () => {
  console.log("server started at 8080");
});

app.get("/", (req, res) => {
  res.send("Hi! Yasir");
});
