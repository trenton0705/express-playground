module.exports = (req, res) => {
  var type = req.body.type
  var radius = req.body.radius
  var width = req.body.width
  var height = req.body.height

  if (type === 'circle') {

    if (!radius) {
      res.send('Invalid')
    } else {
      res.send(`Area of a circle with radius of ${radius} is ${Math.PI * Math.pow(radius, 2)}`)
    }

  } else {

    if (!width || !height) {
      res.send('Invalid')
    } else {
      res.send(`Area of a ${width}x${height} rectangle is ${width * height}`)
    }

  }
}
