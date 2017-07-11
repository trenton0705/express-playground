var express = require('express')
var server = express()

server.get('/', function (req, res) {
  res.send('Hello!')
})

server.get('/math/pi', function (req, res) {
  res.send(String(Math.PI))
})

module.exports = {
  server: server
}

server.listen(8080)
