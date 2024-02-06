const express = require("express");
// const cors = require("cors");
const path = require("path");

const app = express();

// app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "front-end/build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/front-end/build", "index.html"));
});

// // set port, listen for requests
const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
