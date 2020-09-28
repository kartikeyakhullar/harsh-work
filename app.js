const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const Personal = require("./models/personal");


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));


// Connecting to MongoDB

mongoose.connect('mongodb://localhost/marriageInfoDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.get("/", function (req, res) {
    res.render("index");
});

app.post("/info", function (req, res) {
    const personal = new Personal({
        fullName: req.body.fullName,
        gotra: req.body.gotra
    });

    console.log(req.body.fullName);
    console.log(req.body.gotra);

    personal.save(function (err) {
        if (!err) {
            res.redirect("/");
        }
    });
})



app.listen(3000, () => {
    console.log(`Server started on port!!`);
})