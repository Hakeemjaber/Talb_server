const USER_MODEL = require("../../API/Models/user.model");

const getUserByID = async (id , res) => {
    const user = await USER_MODEL.findById(id).catch((e) =>
      res.status(500).json({ error: true, errorMessage: e.message })
    );

    if (!user) {
        res.status(550).json({ error: true, errorMessage: "no user" });
        return;
    }
  
    return user;
  };
  
  module.exports = {
    getUserByID,
  };