const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
rabbit_Name: String,
rabbit_Price: Number,
rabbit_gender: String
})
module.exports = mongoose.model("rabbit",
rabbitSchema)
