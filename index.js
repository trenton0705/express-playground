var express = require('express')
var server = express()

server.get('/', function (request, response) {
  response.send('Hello!')
})

server.listen(8080)
