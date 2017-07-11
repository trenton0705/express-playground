var express = require('express')
var app = express()
var sum = require('./sum')
var calculate = require('./calculate')

app.get('/math/pi', function (req, res) {
  res.send(String(Math.PI))
})

app.get('/math/calculate', calculate)

app.post('/math/sum', sum)

module.exports = {
  app: app
}

app.listen(8080)
