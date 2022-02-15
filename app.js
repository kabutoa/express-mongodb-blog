const express = require('express')
const app = express()
const path = require('path')

const indexRouter = require('./src/routes/index')
const usersRouter = require('./src/routes/users')

app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/users', usersRouter)

app.listen(3000, () => {
  console.log('app is running at port 3000')
})
