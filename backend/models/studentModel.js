mongoose =require("mongoose");


stuSchema = new mongoose.Schema({
        name:String,
        price:Number,
        author_name:String,
        publish_year:Number
})

module.exports = mongoose.model("student", stuSchema)