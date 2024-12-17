const express = require('express')
const app = express()

app.get('/',(request, response)=>{
response.send('This is node app version 2.1')
})
//this is new comment
app.listen(4000, '0.0.0.0' , ()=>{
    console.log('server listening at port 4000')
})
//hello