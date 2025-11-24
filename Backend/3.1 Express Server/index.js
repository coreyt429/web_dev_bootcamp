import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});


app.route("/").get((req, res) => {
  res.send("Hello World!");
});