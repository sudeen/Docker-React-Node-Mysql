let path = require("path");
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const KeywordsRoutes = require("./routes/keywords");
const SitesRoutes = require("./routes/sites");
const IndexRoute = require("./routes/index");

const app = express();
app.use(morgan("dev")); // Great middleware for logging
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true })); // To PARSE all form data

app.enable("trust proxy");
app.use(cors()); // To enable cross communication between frontend and backend
app.options("*", cors());

// app.use(express.static(__dirname + '../dist/'));
app.use(express.static(path.join(__dirname + '/frontend/build/')));

app.use("/", IndexRoute);
app.use("/keywords", KeywordsRoutes);
app.use("/sites", SitesRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT} | on production port 8080`);
});
