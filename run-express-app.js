const express = require("express");

const app = express();

app.get('/', function(req, res) {
   res.send("Server is running at http://localhost:3000");
});

app.listen(3000, function () {
      console.log("Server started on port 3000");
});