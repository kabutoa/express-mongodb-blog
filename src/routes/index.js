const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('hello index')
})

module.exports = router
