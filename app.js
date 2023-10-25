import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import port from "./external/port.js";
import APIURL from "./external/apiurl.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/result", (req, res) => {
    res.render("index.ejs");
  });

app.post("/result", async (req,res) => {
    const contains = (req.body.contains);
    const type = (req.body.type);
    const blacklist = (req.body.blacklist);
    console.log(contains);
    console.log(type);
    console.log(blacklist);
    try{
        res.render("index.ejs", { contents : "Waiting for data... "})
    }
    catch(error){
        res.status(404).send(error.message);
    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})