const express = require('express')
const app = express()
const port = 3000

require('./models/connection')







app.listen(port =>{
  console.log("Express Running " ,`http://localhost:${3000}`);
})
