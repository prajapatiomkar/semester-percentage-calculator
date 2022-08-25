const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/html/homePage.html")
})

app.post("/app.js",function(req,res){
    var {semester1,semester2,semester3,semester4} = req.body;   
    var eachSum = ((7.1*semester1+11)+(7.1*semester2+11)+(7.1*semester3+11)+(7.1*semester4+11))/4;
    var finalAnswer = eachSum.toFixed(2);
    // res.send("Result"+eachSum)

    var finalAnswer = eachSum.toFixed(2)

    res.render("result",{marks:finalAnswer})
})

app.listen(process.env.PORT || 3000, function () {
  
})