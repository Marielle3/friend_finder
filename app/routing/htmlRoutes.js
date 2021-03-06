// require the path node package
var path = require('path')

module.exports = function (app) {
  // If user routes to survey or presses survey button on main html page, route to survey page
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'))
  })

  // If no matching route is found default to home page
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
  })
}
