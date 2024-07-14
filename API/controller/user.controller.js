const { getUserByID } = require("../../src/res/utils");
const USER_MODEL = require("../Models/user.model")

const creatNewUser = (req, res) => {
    const { name, phone, points, userName, pass } = req.body;

    USER_MODEL.create({
        name: name,
        phone: phone,
        points: points,
        userName,
        pass,
    })
        .then((creatRes) => {
            res.status(200).json({
                user: creatRes._doc
            });
        })
        .catch((e) => {
            res.status(500).json({
                error: true,
                errorMesseage: e.messeage,
            });
        });

}
const getAllUsers = async (req, res) => {
    try {
        const users = await USER_MODEL.find();
        res.status(200).json({ users })
    }
    catch (e) {
        res.status(500).json({
            error: true,
            errorMesseage: e.messeage,
        });
    }
}

const login = async (req, res) => {
    const { userName, pass } = req.body;

    const user = await USER_MODEL.findOne({ userName: userName }).catch((e) =>
        res.status(500).json({ error: true, errorMessage: e.message })
    );

    if (!user) {
        res.status(550).json({ error: true, errorMessage: "no user" });
        return;
    }

    if (user.pass == pass) {
        res.status(200).json({ auth: true, user: user });
    } else {
        res.status(545).json({ auth: false, errorMesage: "bad pass" });
    }
};
const updateUser = async (req, res) => {
    const { userID, updatedUser } = req.body;

    var user = await getUserByID(userID, res);

    if (!user) {

        return;
    }

    user.name = updatedUser.name || user.name;
    user.phone = updatedUser.phone || user.phone;
    user.pass = updatedUser.pass || user.pass;
    user.points = updatedUser.points || user.points;

    user
        .save()
        .then((saveRes) => res.status(200).json({ user: saveRes?._doc }))
        .catch((e) =>
            res.status(500).json({ error: true, errorMessage: e.message })
        );

}




module.exports = {
    login,
    updateUser,
    creatNewUser,
    getAllUsers,
};
