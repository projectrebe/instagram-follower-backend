const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],

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