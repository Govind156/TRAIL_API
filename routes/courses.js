// let setup routes
//it mean different routes define karege
const express=require("express");
// it means express variable may require or we can say import karege express

const router=express.Router();
//got instance

const {getAllcourses,createCourse}=require("../controllers/courses");
const upload=require("../multer/imgconfig");
//define route
router.route("/").get(getAllcourses);
//router.route("/").post(upload.single("img"),createcourse);
router.route("/").post(upload.single("img"),createCourse);
module.exports=router;