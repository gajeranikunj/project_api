const blog = require("../model/blog");
exports.create = async (req, res) => {
    try {
        await blog.create(req.body);
        res.status(201).json({
            status: "successful",
            message: "blog created successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
};





exports.getall = async (req, res) => {
    try {
        const data = await blog.find();
        res.status(200).json({
            status: "successful",
            message: "getall data successfully",
            data: data
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
            data: []
        });
    }
};


exports.getbyid = async (req, res) => {
    try {
        const data = await blog.find({ _id: req.params.id });
        res.status(200).json({
            status: "successful",
            message: "get data successfully",
            data: data
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
            data: []
        });
    }
};



exports.Delete = async (req, res) => {
    try {
        await blog.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({
            status: "successful",
            message: "Delete data successfully",
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
};



exports.Update = async (req, res) => {
    try {
        const data = await blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            status: "successful",
            message: "Data updated successfully",
            data: data,
        });
    } catch (error) {
        res.status(400).json({
            status: "error",
            message: error.message,
        });
    }
};


