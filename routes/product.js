// let setup routes
//it mean different routes define karege
const express=require("express");
// it means express variable may require or we can say import karege express

const router=express.Router();
//got instance

const {getAllProducts,getAllProductsTesting}=require("../controllers/product");
//define route
router.route("/").get(getAllProducts);
router.route("/Testing").get(getAllProductsTesting);


module.exports=router;