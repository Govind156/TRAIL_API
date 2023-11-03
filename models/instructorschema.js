// instructorModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  instructorId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course' // Reference to the Course model
  },
  hearts: Number,
  image: String
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;