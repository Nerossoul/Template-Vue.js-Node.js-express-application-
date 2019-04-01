const express = require('express')

const app = express()

const default_route = require('./routes/api/default')

app.use('/api/default', default_route)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`listening port: ${port}...`)
})