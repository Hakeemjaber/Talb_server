const Restaurant_MODEL = require("../Models/restaurant.model ");

const creatNewResturant = async (req, res) => {
    const { name, adress, image, phone } = req.body;

 Restaurant_MODEL.create({
        name: name,
        adress,
        image,
        phone,

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
                errorMesseage: e.message || "no message",
            });
        });
}
module.exports = {
    creatNewResturant,
}