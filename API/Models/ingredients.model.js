const { Schema, model } = require("mongoose");

const IngredientsSchema = new Schema({
    name: String,
    Image: {
        type: String,
        require: false,
    },
});

const Ingredients_MODEL = model("Ingredients", IngredientsSchema);

module.exports = Ingredients_MODEL;