const router = require('express').Router()

router.get('/:name', (req, res) => {
  res.send(`hello ${req.params.name}`)
})

module.exports = router
