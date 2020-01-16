var express = require('express')
var path = require('path')

var app = express()
var PORT = process.env.PORT || 3000
var HOST = '0.0.0.0'

// Sets up the Express app to handle data parsing with built-in middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Provide server access to my public directory for serving my css and images
app.use(express.static(path.join(__dirname, './app/public')))
app.use(express.static(path.join(__dirname, './app/public/assets')))

// ROUTERS

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

// Initiate my server on the specified port
app.listen(PORT, HOST, function () {
  // Log with link when server has started
  console.log('Server listening on: http://localhost:' + PORT)
})
