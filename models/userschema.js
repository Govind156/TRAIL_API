// Import necessary modules
const mongoose=require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true
    },
    userId: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: String,
    lastName: String,
    dateOfBirth: Date,
    profilePicture: String,
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    roles: [String]
  });

// Create a user model based on the schema
const user=mongoose.model("user",userSchema)
module.exports=user

