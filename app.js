require("dotenv").config();
const express=require("express");
//instance get kar lete hai

const app=express();

//create app so that express ki jitni b functionalities or method hai uska use karle

const connectdb=require("./db/connect");

const PORT=process.env.PORT || 5000;
//jab live host karege toh jo b port avaiable hoga wo chalega but hum simply local 5000 use kar rahe yahe
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//const Product_route=require("./routes/product");
const courses_route=require("./routes/courses");

app.get("/",(req,res)=>{
    res.send("hi i m live");
}); 
//root define karege ,connect with server
//jab koi request karege toh usko yah msg milega

//middleware or set to router
//app.js ko batane b zaruri hai  ki new route use kar rahe hai
app.use("/api/courses",courses_route);
const start=async()=>{
    try{
        await connectdb(process.env.MONGO_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} YES I AM CONNECTED`);
        });
    }//check toh karle ki port connect hua hai ya nahi hua
    catch(error){
        console.log(error);
    }
}
start();
// aab server ko listen karne hai(function k through karege aur asyn await wala func hoga)
