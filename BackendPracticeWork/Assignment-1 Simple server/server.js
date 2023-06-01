const express = require("express");
const posts = require("./posts");

const app = express();
const port = 3000;

app.get("/post", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
