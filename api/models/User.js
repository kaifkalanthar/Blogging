const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserScheme = new Schema({
    username: { type: String, required: true, min: 4, unique: true },
    name: { type: String, required: true, min: 4 },
    password: { type: String, required: true }
});

const UserModel = model("User", UserScheme);

module.exports = UserModel;