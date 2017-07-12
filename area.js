module.exports = (req, res) => {
  var type = req.body.type
  var radius = req.body.radius
  var width = req.body.width
  var height = req.body.height

  if (type === 'circle') {
    if (!req.body.radius) {
      res.send('Invalid')
    } else {
      res.send(`Area of a circle with radius of ${req.body.radius} is ${String(Math.PI * (radius * radius))}`)
    }
  } else {
    if (!req.body.width || !req.body.height) {
      res.send('Invalid')
    } else {
      res.send(`Area of a ${req.body.width}x${req.body.height} rectangle is ${String(width * height)}`)
    }
  }
}
