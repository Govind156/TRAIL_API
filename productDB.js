require("dotenv").config();
//get connecetDB
const connectDB=require("./db/connect")
// get model
const Product=require("./models/product")

//get product json  data
const ProductJson=require("./products.json");

const start=async()=>{
    try{
         await connectDB(process.env.MONGO_URL)
        // await Product.create(ProductJson)
        await Product.deleteMany()
        const products = await Product.create(ProductJson)
        console.log("Data inserted successfully:", products)
        console.log("success")
    }catch(error){
        console.log(error);
    }
}
start()

