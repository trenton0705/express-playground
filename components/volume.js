module.exports = (req, res) => {
  var num1 = parseFloat(req.params.num1)
  var num2 = parseFloat(req.params.num2)
  var num3 = parseFloat(req.params.num3)
  res.send(String(num1 * num2 * num3))
}
