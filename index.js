var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var sum = require('./sum')
var calculate = require('./calculate')
var area = require('./area')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/math/pi', function (req, res) {
  res.send(String(Math.PI))
})

app.get('/math/calculate', calculate)

app.post('/math/sum', sum)

app.all('/math/volume/:num1/:num2/:num3', (req, res) => {
  var num1 = parseFloat(req.params.num1)
  var num2 = parseFloat(req.params.num2)
  var num3 = parseFloat(req.params.num3)
  res.send(String(num1 * num2 * num3))
})

app.post('/math/area', area)

module.exports = {
  app: app
}

app.listen(8080)
