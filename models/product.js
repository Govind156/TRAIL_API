const mongoose = require("mongoose")

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:[true,"price must be provided"],
    },
    feature:{
        type:Boolean,
        default:false,
    },
    rating:{
        type:Number,
        default:4.9,
    },
    createdat:{type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values :["apple","Xiaomi","oppo","realme","oneplus"],
            message:`{value} is not supported`
        },
    },
});
module.exports=new mongoose.model("Product",productSchema);

