const path = require("path");
const express = require("express");
const exp = require("constants");
const app = express();
app.use(express.static('public'))

app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/home.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/login.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

