require("dotenv").config({ path: "./config.env" });
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
console.log(__dirname + "\\views");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", async (req, res) => {
  console.log(req.body);

  let testAccount = nodemailer.createTransport;

  res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
