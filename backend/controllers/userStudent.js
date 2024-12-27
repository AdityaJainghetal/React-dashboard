const StuModel =require("../models/studentModel");

const dataSave = async(req, res)=>{
    const {name,price, author_name,publish_year} = req.body;
    console.log(req.body);
    
    const book = StuModel.create({
        name:name,
        price:price,
        author_name:author_name,
        publish_year:publish_year
    })

    res.send(book)

}


const dataSearch =async(req, res)=>{
    const {name} =req.body;
    const myData =await StuModel.find({name:name})
    res.send(myData);
}


const deleteDataDisplay=async(req, res)=>{
    const Data= await  StuModel.find();
    res.send(Data);
}



const recordDelete=async(req, res)=>{
 const {myid} = req.body;
 const myRes=await    StuModel.findByIdAndDelete(myid);
 res.send(myRes);
}


const dataDisplay= async(req,res)=>{
    const myData = await StuModel.find();
    res.send(myData)
}

const editDisplay =async(req,res)=>{
    const{id} =req.query;
    const Data = await StuModel.findById(id);
    res.send(Data);
}


const editDataSave = async(req,res)=>{
    const{id, _id,name,price,author_name,publish_year} =req.body;

    const myres= await StuModel.findByIdAndUpdate(id,{
        name:name,
        price:price,
        author_name:author_name,
        publish_year:publish_year
    })
    res.send("Ok")
}

module.exports={
    dataSave,
    dataDisplay,
    dataSearch,
    deleteDataDisplay,
    recordDelete,
    editDisplay,
    editDataSave

}