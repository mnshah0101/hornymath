const mongoose = require('mongoose'); // Import mongoose
const Schema = mongoose.Schema; // Create a Schema

const ProblemSchema = new Schema({
    problem: {
        type: String,
        required: true
    },
    problemTitle: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    difficulty: {
        type: Number,
        required: true
    },
    solutions: [
        { type: Schema.Types.ObjectId, ref: 'Solution', required: false }
    ],
    image: {
        type: String,
        required: true
    }

});


let Problem = mongoose.model('Problem', ProblemSchema); // Create a User model
module.exports = Problem; // Export User model
