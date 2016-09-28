"use strict";

const PORT        = process.env.PORT || 8080;
const express     = require("express");
const bodyParser  = require("body-parser");
const app         = express();
const path        = require('path');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, './../public', '/index.html'));
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
