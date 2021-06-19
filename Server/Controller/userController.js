
var db = require('../models');

const addUser = async (req,res,next) =>{
    const data =await db.Users.create({
        name:"Ankit",
        email:"dante7785"

    })
    await data.save();
    res.status(200).json({
        message:"Succefully Added"
    })
}

module.exports = {
    addUser
}