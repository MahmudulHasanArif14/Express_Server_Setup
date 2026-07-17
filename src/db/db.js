const mongoose = require('mongoose');

function connectDB() {

    mongoose.connect("mongodb+srv://arifmahmudulhasanlu84:59qkKfoIZ3DKIUyS@cluster0.cmx38eq.mongodb.net/Test").then(() => {
        console.log("MongoDB connected successfully");
    }).catch((err) => {
        console.log("MongoDB connection failed", err);
    });


}

module.exports = connectDB;