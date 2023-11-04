const {query}=require('express')
const User = require('../models/userschema');

// Get all users
exports.getAllUsers = async (req, res) => {
    const {email,username,password,sort,select}=req.query;
    const queryobject={};
  
    if(email){
        queryobject.email={$regex:email,$options:"i"};
        console.log(queryobject);
    }
    if(username){
        queryobject.username={$regex:username,$options:"i"};
        console.log(queryobject);
    }
    
     let apiData=User.find(queryobject);
     
     if(sort){
        //let sortfix=sort.replace(","," ");
        let sortfix=sort.split(",").join(" ");
        apiData=apiData.sort(sortfix);
     }
     
     if(select){
        let selectfix=select.split(",").join(" ");
        apiData=apiData.select(selectfix);
     }
  
    //  let page=Number(req.query.page) || 1;
    //  let limit =Number(req.query.limit) || 6;
    //  let skip=(page-1)*limit;
    //  apiData=apiData.skip(skip).limit(limit);

    try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating a user' });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error updating a user' });
  }
};

// Delete a user by ID
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.userId);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting a user' });
  }
};
