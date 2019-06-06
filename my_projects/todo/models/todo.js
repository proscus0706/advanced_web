var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be blank!"
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_data: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Todo", todoSchema);