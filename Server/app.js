const express = require('express')
const app = express();
const router  = express.Router();

const port = 3000;

//import Connection
require('./models')

//import controller
 const UserCtrl =require('./Controller/userController');


//  app.use('/',(req,res,next) =>{
//    res.send("Hello")
//  })

 app.post('/add',UserCtrl.addUser);
 app.put('/update',UserCtrl.updateUser);
 app.delete('/delete',UserCtrl.deleteUser);

 






app.listen(port);
