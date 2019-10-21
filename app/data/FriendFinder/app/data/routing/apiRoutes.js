// ROUTERS


var survey = require("./data/friends.js")(app);

module.exports = function(app) {
  app.get('/' , function (req,res){
    res.json(friends);
  });
  
  app.get('/survey', function(req,res) {
    res.json(survey);
  });
};