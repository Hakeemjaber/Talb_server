const { Router } = require("express");
const { creatNewMeals,updateDatemeals,getAllMeals ,getTest} = require("../controller/Meals.controller");


const MealsRouter = Router()

MealsRouter.post("/creatNewMeals", creatNewMeals);
MealsRouter.post("/updateDatemeals", updateDatemeals);
MealsRouter.post("/getAllMeals", getAllMeals);
MealsRouter.get("/getTest", getTest);

module.exports = MealsRouter;
