const { Schema, model } = require("mongoose");
const userSchema = new Schema({
    name: String,
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    points: {
        type: Number,
        default: 0,
    },
    userName: String,
    pass: String,
});
const USER_MODEL = model("user", userSchema);
// model.exports = USER_MODEL;
module.exports = USER_MODEL;
