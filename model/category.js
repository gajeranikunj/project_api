const mongoose = require("mongoose")
const categoryscema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    type: {
        type: String,
        require: true
    }
})

module.exports=mongoose.model("category",categoryscema)