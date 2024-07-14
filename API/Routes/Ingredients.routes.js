
const { Router } = require("express");
const { creatNewIngredients } = require("../controller/Ingredients.controller");
const IngredientsRouter = Router();

IngredientsRouter.post("/creatNewIngredients", creatNewIngredients);

module.exports = IngredientsRouter;

