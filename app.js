const express = require("express");
const app = express();

// function albert(par1, par2) {
//     const result = 0
//     return result
// }
// const albert1 = (par1, par2) => par1 + par2

app.get("/", (req, res) => {
  res.send("home");
});

app.get("/chan", (req, res) => {
  let x = "asdasdasd";
  res.send(x);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
