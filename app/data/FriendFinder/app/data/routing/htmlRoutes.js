// Basic route that sends the user first to the AJAX Page, catch-all route and survey html 
var path = require('path');

module.exports = function(app){

// default page
app.get("/", function(req, res) {
  res.json(path.join(__dirname, "../public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
}