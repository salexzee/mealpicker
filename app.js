// REQUIRES
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const request = require('request');
// LOCAL REQUIRES
const config_secrets = require('./config_secrets')
const routes = require('./routes/index')
const utility = require('./lib/utility')

// Create the app
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')


// Works on GET to /api with anything following it
app.get('/api*', (req, res) => {

  // Variable object for display page
  let variables = {}
  // Options for request()
  const options = {
    url: `https://api.locu.com/v1_0/venue/search/?api_key=a114be2b432ef4309090339f1c226e16a626f67c&category=restaurant&postal_code=${req.query.zip}`,
    headers: {
      'User-Agent': 'request'
    }
  }
  // Callback for request()
  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      // Parses body as JSON
      var info = JSON.parse(body)
      // Grabs a random item
      const item = utility.randArrayItem(info.objects)
      // Assign display page local variables
      variables.name = item.name
      variables.address = item.street_address
      variables.zip = item.postal_code
      variables.city = item.locality
      variables.website = item.website_url
      variables.phone = item.phone
      variables.addressUrl = (`http://maps.google.com/?q=${item.street_address}, ${item.locality}, ${item.postal_code}`)
      console.log(variables)
      // Renders the dislay page
      res.render('display', variables)
    } else {
      console.log(error) // Needs real error handling
    }
  }
  // Run it
  request(options, callback);

})





// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.render('error', {
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.render('error', {
    message: err.message,
    error: {}
  })
})


module.exports = app
