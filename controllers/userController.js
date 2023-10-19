const User = require('../models/userModel');



//Register a User
exports.saveUser = async (req, res) => {
    console.log("req.body ", req.body);
    const { name, username } = req.body;
    console.log(name + " " + username);
    try {
        let user = await User.findOne({ username });
        if (!user) {
            user = await User.create({
                name, username,
            });
        }
        // sendToken(user, 201, res);
        res.status(201).json({
            success: true,
            user,
        });
    }
    catch (err) {
        console.log(err.message);
        res.send(err)
    }
};


exports.getAllUser = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            success: true,
            users,
        })
    }
    catch (err) {
        console.log(err.message);
        res.send(err)
    }
}