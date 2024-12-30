const  UserModel= require("../models/userModel");


const userSave=async(req, res)=>{
    const {name, mobile, email, password}= req.body;
    
    const User= await UserModel.create(
        {
            name:name,
            mobile:mobile,
            email:email,
            password:password
        }
    )
  
    res.send({msg:"Succesfully Registered!!!"});
}
const userCheck=async(req, res)=>{
  const {email, password}= req.body; 
  const User= await UserModel.find({email});
  console.log(User);
    if (User.length>=1)
    {     
        if (User[0].password!=password)
        {
            res.status(401).send({msg:"Invalid Password!"})
        }
        else 
        {
            res.send({Data:User ,msg:"Welcome to my dashboard"})
        }
    }
    else 
    {
        res.status(401).send({msg:"Invalid Email"});
    }

}

module.exports={
    userSave,
    userCheck
}