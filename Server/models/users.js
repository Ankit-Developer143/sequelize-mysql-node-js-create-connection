module.exports = (sequelize,DataTypes) =>{
    const Users = sequelize.define("users",{
        name:DataTypes.STRING,
        email:{
           type: DataTypes.STRING,
           defaultValue:'test3gmail.com'
        },
        gender:{
            type:DataTypes.STRING
        }
        
    })
    return Users;
}