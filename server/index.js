const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const default_route = require('./routes/api/default')

app.use('/api/default', default_route)


//Handle producion
if (process.env.NODE_ENV === 'production') {
    // console.log('production')
    //Static folder
    app.use(express.static(__dirname + '/public'))

    //Handle SPA
    app.get(/.*/, (req,res)=> res.sendFile(__dirname + '/public/index.html'))
}


const port = process.env.PORT || 5000
console.log(process.env.NODE_ENV)
app.listen(port, ()=>{
    console.log(`listening port: ${port}...`)
})