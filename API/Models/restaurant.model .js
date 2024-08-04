const { Schema, model } = require("mongoose");
const RestaurantSchema = new Schema({
    name: String,
    adress: {
        type: [{
            city: String,
            street: String,
            Number: String,
        }],
        require: true,
    },
    Image: {
        type: String,
        require: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    carouselImages: {
        type: [String],
        default:[]
    },



});
const Restaurant_MODEL = model("restaurant", RestaurantSchema);
module.exports = Restaurant_MODEL;

