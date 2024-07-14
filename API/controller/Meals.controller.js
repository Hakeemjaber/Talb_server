const Meals_MODEL = require("../Models/meals.model ");


const creatNewMeals =  async (req, res) => {
    const { name , price, image } = req.body;

    const dataMeal = await Meals_MODEL.create({
        name: name,
        price,
        image,
        
    })
        .then((creatRes) => {
            res?.status(200).json({
                data: creatRes._doc
            });
            return creatRes._doc;
        })
        .catch((e) => {
            res?.status(500).json({
                error: true,
                errorMesseage: e.messeage,
            });
            return {_id:false};
        });

        // console.log(dataMeal);
        return dataMeal._id;
}

const creatNewMealsWithIngredients =  async (req, res) => {
    const { name , price, image,option} = req?.body||{option:[]}
    const reqOfMeals={body:{name , price, image}}
    const id = await creatNewMeals(reqOfMeals);
    // const const { name , pricing, image , ischecked , typeOf, mealname} = option
    
}

module.exports = {
    creatNewMeals,
    creatNewMealsWithIngredients,  
}