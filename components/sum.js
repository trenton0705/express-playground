module.exports = (req, res)=> {
  var numbers = req.query.n
  var result = 0
  for (var i = 0; i < numbers.length; i++) {
    result += parseFloat(numbers[i])
  }
  res.send(String(result))
}
