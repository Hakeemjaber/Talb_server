const category_MODEL = require("../Models/category.model");

const creatNewCategory = (req, res) => {
    const { name, image } = req.body;
    category_MODEL.create({
        name: name,
        image,
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



module.exports = {
    creatNewCategory,
}