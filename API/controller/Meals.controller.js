const { getObjectByID, getAllObject } = require("../../src/res/utils");
const Meals_MODEL = require("../Models/meals.model ");


const creatNewMeals = async (req, res) => {
    const { name, price, image, ingredients, category, Restaurant_Id } = req.body;

    Meals_MODEL.create({
        name: name,
        price,
        image,
        ingredients,
        category,
        Restaurant_Id,

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
                errorMesseage: e.message,
            });
            // return {_id:false};
        });

    // console.log(dataMeal);
    // return dataMeal._id;
}

// const updatethemeal = async (req, res) => {
//     const { Id } = req?.body || { option: [] }
//     const reqOfMeals = { body: { name, price, image } }
//     const id = await creatNewMeals(reqOfMeals);

// }

const updateDatemeals = async (req, res) => {
    const { id, updatedmeal } = req.body;
    console.log("body", req.body);

    var meal = await getObjectByID(Meals_MODEL, id, res);

    if (!meal) {
        res.status(550).json({ error: true, errorMessage: "no meal" });
        return null;
    }

    meal.name = updatedmeal.name || meal.name;
    meal.price = updatedmeal.price || meal.price;
    meal.Image = updatedmeal.Image || meal.Image;
    meal.category = updatedmeal.category || meal.category;
    // meal.category.push(...updatedmeal.category)
    meal.ingredients = updatedmeal.ingredients || meal.ingredients;
    meal.Restaurant_Id = updatedmeal.Restaurant_Id || meal.Restaurant_Id;

    meal
        .save()
        .then((saveRes) => res.status(200).json({ meal: saveRes?._doc }))
        .catch((e) =>
            res.status(500).json({ error: true, errorMessage: e.message })
        );
}
const getAllMeals = async (req, res) => {
    const { fillter } = req.body;
    try {
        const Meals = await getAllObject(Meals_MODEL, fillter);
        res.status(200).json({
            count: Meals.length,
            Meals
        })
    }
    catch (e) {
        res.status(500).json({
            error: true,
            errorMesseage: e.messeage,
        });
    }
}

// {
//     "_id": "66a68ad73e0524047763217f",
//     "name": "Burger deal",
//     "price": 212,
//     "category": [
//         "66a682acf83f444b9ab63bf2"
//     ],
//     "ingredients": [
//         {
//             "id": "66a68099de6eb3336d17b7ed",
//             "price": 5,
//             "_id": "66a68ad73e05240477632180"
//         }
//     ],
//     "Restaurant_Id": "66a67a4ba586ca97ddf7e35c",
//     "__v": 0
// },

const getmeals = async (req, res) => {
    // const { meal } = req.body;
    // const Idmeal = await getAllObject(Meals_MODEL, id, res);

    // if (meal.category == Idmeal.category) {
    //     res.status(200).json({ auth: true, meal });
    // } else {
    //     res.status(545).json({ auth: false, errorMesage: "bad " });
    // }
};





module.exports = {
    creatNewMeals,
    updateDatemeals,
    getAllMeals,
    getmeals,
    // creatNewMealsWithIngredients,
}