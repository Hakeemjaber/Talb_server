
const { Router } = require("express");
const { creatNewCategory } = require("../controller/Category.controller");
const CategoryRouter = Router();

CategoryRouter.post("/creatNewCategory", creatNewCategory);

module.exports = CategoryRouter;
