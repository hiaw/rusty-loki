const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/hey", (req, res) => {
  res.send("Hey World!");
});
app.post("/echo", (req, res) => {
  res = res.status(200);
  if (req.get("Content-Type")) {
    res = res.type(req.get("Content-Type"));
  }
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
