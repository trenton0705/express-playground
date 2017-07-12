module.exports = (req, res) => {
  var type = req.body.type
  var radius = req.body.radius
  var width = req.body.width
  var height = req.body.height

  if (type === 'circle') {
    res.send(String(Math.PI * (radius * radius)))
  } else {
    res.send(String(width * height))
  }

  // switch (type) {
  //   case 'circle':
  //     res.send(String(Math.PI * (radius * radius)))
  //     break;
  //   case 'rectangle':
  //     res.send(String(width * height))
  //     break;
  //
  // }
}
