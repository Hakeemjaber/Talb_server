const { Schema, model } = require("mongoose");

const IngredientsSchema = new Schema({
    name: String,
    priceing: {
        type: String,
        default: 0,
    },
    Image: {
        type: String,
        require: false,

    },
    ischecked: {
        type: Boolean,
        default: false,

    },
    typeOf: {
        type: String,
        require: true,
    },
    meal_Id:{
        type:Array,
        require: true,
    }
});

const Ingredients_MODEL = model("Ingredients", IngredientsSchema);

module.exports = Ingredients_MODEL;