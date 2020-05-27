const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

app.use(express.json())    // Parse incoming json to an object
app.use(userRouter)    // to show up in the browser, the corresponding page
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})