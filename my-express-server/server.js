const express = require('express');
const app = express();

app.get("/", function(request, response) {
   response.send("Hello World"); 
})

app.get("/about", function(request, response) {
   response.send("Test 1")
})

app.get("/contact", function(request, response) {
   response.send("Test 2")
})

app.listen(3000, function () {
   console.log('Server started on port 3000');
});