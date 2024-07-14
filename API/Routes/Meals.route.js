const { Router } = require("express");
const { creatNewMeals, creatNewMealsWithIngredients } = require("../controller/Meals.controller");

const MealsRouter = Router();

MealsRouter.post("/creatNewMeals", creatNewMeals);
MealsRouter.post("/creatNewMealsWithIngredients", creatNewMealsWithIngredients);

module.exports = MealsRouter;
