
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))


var area = require('./components/area')
var calculate = require('./components/calculate')
var pi = require('./components/pi')
var sum = require('./components/sum')
var volume = require('./components/volume')


app.get('/math/pi', pi)

app.get('/math/calculate', calculate)

app.post('/math/sum', sum)

app.all('/math/volume/:num1/:num2/:num3', volume)

app.post('/math/area', area)

app.listen(8080)

module.exports = {
  app: app
}
