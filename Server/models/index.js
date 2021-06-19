const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize('new','root','root', {
    host:"localhost",
    dialect:'mysql',
    pool:{max:5,min:0,idle:10000}
})
sequelize.authenticate()
.then(() =>{
    console.log("database Connected");
}).catch((err) => {
    console.log("Error"  +err);
    
})

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Used to Send the data you does not need to every time import Data
db.Users=require('./users')(sequelize,DataTypes)

//sync as well as Create Table and also drop table if already exists
db.sequelize.sync({force:false})
.then(() =>{
    console.log("yes Re-Sync");
})

module.exports = db;