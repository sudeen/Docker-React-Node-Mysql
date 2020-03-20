let path = require("path");
const fs = require("fs");
const express = require("express");
const Router = express.Router();

// Default routing page to run the build version of frontend reactjs
Router.get("", (req, res) => {
    res.sendFile(path.join(__dirname + "../../build/index.html"));
    
 });

 module.exports = Router;
