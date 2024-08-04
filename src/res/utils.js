const Meals_MODEL = require("../../API/Models/meals.model ");
const USER_MODEL = require("../../API/Models/user.model");

const getUserByID = async (id, res) => {
  const user = await USER_MODEL.findById(id).catch((e) =>
    res.status(500).json({ error: true, errorMessage: e.message })
  );

  if (!user) {
    res.status(550).json({ error: true, errorMessage: "no user" });
    return;
  }

  return user;
};


const getMealByID = async (id, res) => {
  const meal = await Meals_MODEL.findById(id).catch((e) =>
    res.status(500).json({ error: true, errorMessage: e.message })
  );

  if (!meal) {
    res.status(550).json({ error: true, errorMessage: "no meal" });
    return;
  }

  return meal;
};



const getObjectByID = async (model, id, res) => {
  console.log(id);
  const object = await model.findOne({ _id: id }).catch((e) =>
    res.status(500).json({ error: true, errorMessage: e.message })
  );

  return object;
};


const getAllObject = async (model, filter, res) => {
  const objects = await model.find(filter).catch((e) =>
    res.status(500).json({ error: true, errorMessage: e.message })
  );
  return objects;
};

module.exports = {
  getUserByID,
  getAllObject,
  getObjectByID
};