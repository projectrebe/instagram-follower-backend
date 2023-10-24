const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Device Id"],
        maxLenght: [10, "Id should be 10 digit number"],
        minLength: [10, "Id should be 10 digit number"]

    },
    username: {
        type: String,
        required: [true, "Please Enter Your username"],
    },
    count: {
        type: Number
    }

}
    , { timestamps: true });

module.exports = mongoose.model("User", userSchema);