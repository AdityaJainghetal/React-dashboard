const StuModel =require("../models/studentModel");

const dataSave = async(req, res)=>{
    const {name,price, author_name,year} = req.body;

    ({
        name:name,
        price:price,
        author_name:author_name,
        year:year
    })

    res.send(data)

}


const dataSearch =async(req, res)=>{
    const {name} =req.body;
    const myData =await StuModel.find({name:name})
    res.send(myData);
}


const deleteDataDisplay= async(req,res)=>{
    const Data = await StuModel.find();
    res.send(Data);
}

const recordDelete =async (req,res)=>{
    const {myid} = req.body;
    const myRes = await StuModel.findByIdAndDelete(myid)
    res.send(myRes);

}


const dataDisplay= async(req,res)=>{
    const myData = await StuModel.find();
    res.find(myData)
}

module.exports={
    dataSave,
    dataDisplay,
    dataSearch,
    deleteDataDisplay,
    recordDelete

}