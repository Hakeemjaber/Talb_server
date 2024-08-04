const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const USER_MODEL = require("./API/Models/user.model");
const Routes = require("./API/Routes/Routes");
const app = express();
app.use(express.json());
app.use(cors());
app.use('/' , Routes)

const mongooseLink = "mongodb+srv://hakeemjaber1:1234567890@cluster0.l7vl2yu.mongodb.net/"

app.get("/app", (req, res) => {
    res.status(200).json({
        name: "ahmed",
        age: "12",
    });
});

app.post("/whatmyResturant", (req, res) => {
    const { address, phone, catId, photo, title } = req.body;
    if (!title || !address || !phone) {
        res.status(701).json({
            error: true,
            errorMesseage: " title is MUST!!!"


        })
        return;
    }
    res.status(200).json({
        fullname: title + ' ' + phone + ' ' + address,
    });
});  

// app.post("/creatNewUser", (req, res) => {
//     const { name, phone, points ,userName , pass} = req.body;

//     USER_MODEL.create({
//         name: name,
//         phone: phone,
//         points: points,
//         userName,
//         pass,
//     })
//     .then((creatRes) => {
//         res.status(200).json({
//             user: creatRes._doc
//         });
//     })
//     .catch((e) => {
//         res.status(500).json({
//             error: true,
//             errorMesseage: e.messeage,
//         });
//     });

// })

// app.get("/getAllUsers", async (req, res) => {
//     try {
//         const users = await USER_MODEL.find();
//         res.status(200).json({ users })
//     }
//     catch (e) {
//         res.status(500).json({
//             error: true,
//             errorMesseage: e.messeage,
//         });
//     }
// })
// app.post("/creatNewUser", (req, res) => {
//     const {Email , code} = req.body;
//     USER_MODEL.create({
 
// router method. )(/route controler)

mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
    console.log("mongo connected");
})

module.exports = app;