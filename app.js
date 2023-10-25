import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

app.get("/result",(req,res) => {
    res.render("result.ejs", { contents : "Waiting for data... "})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})