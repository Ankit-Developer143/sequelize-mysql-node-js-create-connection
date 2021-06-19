
var db = require('../models');

const addUser = async (req,res,next) =>{
    const data =await db.Users.create({
        name:"Ramesh",
        email:"dante7785"

    })
    console.log(data);
    await data.save();
    res.status(200).json({
        message:("Succefully Added",+data.id)
        
    })  
}

const updateUser = async (req,res) =>{
    const update =await db.Users.update({ name:'final'},{
        where:{
            id:2
        }

    })
    


    res.status(200).json({ message:("Succefully Added",+update)})
}
const deleteUser = async (req,res) =>{
    const del =await db.Users.destroy({
        where:{
            id:3
        }

    })
    


    res.status(200).json({ message:("Succefully Added",+del)})
}


module.exports = {
    addUser,
    updateUser,
    deleteUser
}