const mongoose = require("mongoose")
const blog = new mongoose.Schema({
    catid: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model("blog", blog)