
const { Schema, model } = require("mongoose");
const categorySchema = new Schema({
    name: String,
    Image: {
        type: String,
        require: false,
    },
});
const category_MODEL = model("category", categorySchema);
module.exports = category_MODEL;
