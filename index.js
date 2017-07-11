var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello!')
})

app.get('/math/pi', function (req, res) {
  res.send(String(Math.PI))
})

app.get('/math/calculate', (req, res) => {
  var operator = req.query.operation
  console.log(operator);
  var x = parseFloat(req.query.x)
  var y = parseFloat(req.query.y)

  switch (operator) {
    case 'add':
      res.send(String(x + y))
      break;
    case 'subtract':
      res.send(String(x - y))
      break;
    case 'multiply':
      res.send(String(x * y))
      break;
    case 'divide':
      res.send(String(x / y))
      break;
    default:
      res.send(String(x + y))
  }
})



module.exports = {
  app: app
}

server.listen(8080)
