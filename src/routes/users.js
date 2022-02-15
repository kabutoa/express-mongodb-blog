const router = require('express').Router()

router.get('/:name', (req, res) => {
  res.render('users', {
    name: req.params.name
  })
})

module.exports = router
