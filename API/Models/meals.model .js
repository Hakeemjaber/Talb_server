const { Schema, model } = require("mongoose");
const MealSchema = new Schema({
    name: String,
    price: {
        type: Number,
        require: true,
    },
    Image: {
        type: String,
        require: false,
    },
    // option:{
    //     type:Array,
    //     require: true,
    // }
});
const Meals_MODEL = model("meals", MealSchema);
module.exports = Meals_MODEL;

