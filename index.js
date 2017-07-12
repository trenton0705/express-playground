
var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var area = require('./area')
var calculate = require('./calculate')
var pi = require('./pi')
var sum = require('./sum')
var volume = require('./volume')

app.use(bodyParser.urlencoded({ extended: false }))



app.get('/math/pi', pi)

app.get('/math/calculate', calculate)

app.post('/math/sum', sum)

app.all('/math/volume/:num1/:num2/:num3', volume)

app.post('/math/area', area)

module.exports = {
  app: app
}

app.listen(8080)
