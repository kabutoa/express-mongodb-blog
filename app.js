const express = require('express')
const app = express()
const indexRouter = require('./src/routes/index')
const usersRouter = require('./src/routes/users')

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(3000, () => {
  console.log('app is running at port 3000')
})
