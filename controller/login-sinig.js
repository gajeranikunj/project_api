const useradd = require("../model/loginscema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")



exports.sign_up = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10);

        await useradd.create(req.body);
        res.status(201).json({
            status: "successful",
            message: "User created successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
};


exports.login = async (req, res) => {
    try {
        var emailisornot = await useradd.findOne({ email: req.body.email })
        if (!emailisornot) throw new Error("email is not valid");

        var passwordisornot = await bcrypt.compare(req.body.password, emailisornot.password)
        if (!passwordisornot) throw new Error("password is not valid");

        var token = jwt.sign({ id: emailisornot._id }, "ram")

        res.status(200).json({
            status: "successfully",
            massage: "login successfully",
            data: emailisornot,
            authorizes: token
        })
    } catch (error) {
        res.status(400).json({
            status: "fill",
            massage: error.massage,
        })
    }
}