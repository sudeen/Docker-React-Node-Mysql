const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../config/connection");

const keywordModel = require("../models/keyword");

Router.get("/api/getAllKeywords", (req, res) => {
  mysqlConnection.query("SELECT * from keywords ", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

Router.post("/api/add", async (req, res) => {
  const keywords = req.body.keywords;
  // console.log("Keywords: ", req);
  try {
    const data = await keywordModel.insert(mysqlConnection, keywords);
    res.status(201).json({
      status: "Success",
      value: keywords,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error,
    });
  }
});

Router.delete("/api/delete/:id", (req, res) => {
  const keyword_id = req.params.id;
  const DELETE_KEYWRODS_QUERY = `DELETE FROM keywords WHERE id_keywords = ${keyword_id}`;
  mysqlConnection.query(DELETE_KEYWRODS_QUERY, (err, results) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    } else {
      return res.json({ message: "Keyword deleted successfully!" });
    }
  });
});

module.exports = Router;
