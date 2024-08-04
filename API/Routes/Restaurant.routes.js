const { Router } = require("express");
const { creatNewResturant } = require("../controller/Restaurant.controller");

const ResturantRouter = Router();

ResturantRouter.post("/creatNewResturant", creatNewResturant);

module.exports = ResturantRouter;
