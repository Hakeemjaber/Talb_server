const IngredientsRouter = require("./Ingredients.routes");
const MealsRouter = require("./Meals.route");
const userRouter = require("./user.routes");
const ResturantRouter = require("./Restaurant.routes");
const CategoryRouter = require("./Categorry.route");

const Routes = [userRouter, IngredientsRouter, MealsRouter, CategoryRouter, ResturantRouter];

module.exports = Routes;