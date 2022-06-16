const express = require("express");
// const cors = require("cors");
// const fs = require("fs");
const ytdl = require("ytdl-core");
const app = express();
app.use("/static", express.static("./static"));

app.listen(3001, () => {
  console.log("It Works!");
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "./" });
});

app.get("/download", (req, res) => {
  var url = req.query.url;

  res.header("Content-Disposition", 'attachment; filename="Video.mp4');
  ytdl(url, {
    filter: (format) => format.container === "mp4",
    quality: "highest",
  }).pipe(res);
});
