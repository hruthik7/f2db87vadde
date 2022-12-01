const mongoose = require("mongoose")
const rabbitSchema = mongoose.Schema({
rabbit_Name: String,
rabbit_Price:{type: Number, min:5000, max:40000},
rabbit_gender: String
})
module.exports = mongoose.model("rabbit",
rabbitSchema)
