const Ingredients_MODEL = require("../Models/ingredients.model");
const { creatNewMealsWithIngredients } = require("./Meals.controller");


const creatNewIngredients = (req, res) => {
    const { name, pricing, image, ischecked, typeOf, mealname } = req.body;
    if (!creatNewMealsWithIngredients()) {

        Ingredients_MODEL.create({
            name: name,
            pricing,
            image,
            ischecked,
            typeOf,
            mealname,
        })
            .then((creatRes) => {
                console.log(creatRes);
                res.status(200).json({
                    data: creatRes._doc
                });
            })
            .catch((e) => {
                res.status(500).json({
                    error: true,
                    errorMesseage: e.messeage,
                });
            });
    }
}


module.exports = {
    creatNewIngredients,
}