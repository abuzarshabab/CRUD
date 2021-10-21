const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const path = require("path");

const mongoDB = require("./server/database/connection");

const app = express();

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 8080;

//log requests
app.use(morgan("tiny"));

// Database mongoDB connection

mongoDB();

// parse request to body parser
app.use(bodyparser.urlencoded({ extended: true }));

// set vies engine
app.set("view engine", "ejs");

// reference of specifying path
// app.set("views", path.resolve(__dirname, "view/ejs"));


//load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
//css/style.css
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
//css/style.css
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
//css/style.css

// load router 
app.use("/", require("./server/routes/router"));

// file handling

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
