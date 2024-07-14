const IngredientsRouter = require("./Ingredients.routes");
const MealsRouter = require("./Meals.route");
const userRouter = require("./user.routes");

const Routes = [userRouter,IngredientsRouter,MealsRouter];

module.exports = Routes;