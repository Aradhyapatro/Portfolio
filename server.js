require("dotenv").config({ path: "./config.env" });
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("views", "./");
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", async (req, res) => {
  console.log(req.body);

  let testAccount = nodemailer.createTransport;

  res.redirect("/");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
