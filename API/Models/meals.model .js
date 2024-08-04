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
    category: {
        type: [],
        require: true,
    },
    ingredients: {
        type: [{
            id: String,
            price: {
                type: Number,
                default: 0
            }
        }],
    },
    Restaurant_Id: {
        type: String,
    },
});
const Meals_MODEL = model("meals", MealSchema);
module.exports = Meals_MODEL;

