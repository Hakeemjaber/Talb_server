const { Router } = require("express");
const { login, creatNewUser, updateUser, getAllUsers } = require("../controller/user.controller");

const userRouter = Router();

userRouter.post("/creatNewUser", creatNewUser);
userRouter.post("/login", login);
userRouter.get("/getAllUsers", getAllUsers);
userRouter.post("/updateUser", updateUser);
// userRouter.post("/UpDate", (req , res) =>  UpDate(req , res));

module.exports = userRouter;