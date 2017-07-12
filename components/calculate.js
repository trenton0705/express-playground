module.exports = (req, res) => {
 var operator = req.query.operation

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
}
