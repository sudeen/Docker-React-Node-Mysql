const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../config/connection");
const SiteModel = require("../models/site");

Router.get("/api/getAllSites", (req, res) => {
  mysqlConnection.query("SELECT * from sites ", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  });
});

Router.post("/api/add", async (req, res) => {
  const site = req.body.site_name;
  console.log("Site: ", req.body);
  try {
    const data = await SiteModel.insert(mysqlConnection, site);
    res.status(201).json({
      status: "Success",
      value: site,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error,
    });
  }
});

Router.delete("/api/delete/:id", (req, res) => {
  const site_id = req.params.id;
  const DELETE_SITE_QUERY = `DELETE FROM sites WHERE id_sites = ${site_id}`;
  mysqlConnection.query(DELETE_SITE_QUERY, (err, results) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    } else {
      return res.json({ message: "Site deleted successfully!" });
    }
  });
});

module.exports = Router;
