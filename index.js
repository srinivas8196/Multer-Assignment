const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); //Specify the folder where the file will be stored.
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); //Specify the filename.
  },
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), function (req, res) {
  res.send("File uploaded successfully");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
