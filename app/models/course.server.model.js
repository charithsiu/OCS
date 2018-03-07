// Load the module dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define a new 'CourseSchema'
const CourseSchema = new Schema({
    term: {
        type: String,
    },
    subject: {
        type: String,
        default: '',
        trim: true
    },
    courseno: {
        type: String,
        default: '',
        trim: true
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    im: {
        type: String
    },
    creditrange: {
        type: String
    },
    level: {
        type: String
    },
    atttype: {
        type: String
    },
    atttype: {
        type: String
    },
    strarttime:{
        type:Date
    },
    endtime:{
        type:Date
    },
    classdays:{
        type: String
    },
    remarks:{
        type:String
    },
    status:{
        type:Boolean
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

// Create the 'Course' model out of the 'CourseSchema'
mongoose.model('Course', CourseSchema);