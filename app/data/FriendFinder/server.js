var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTERS


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

module.exports = function(app) {
  app.get('/' , function (req,res){
    res.json(friends);
  });
  
  app.get('/survey', function(req,res) {
    res.json(survey);
  });
};
// starts server to begin listening 
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});