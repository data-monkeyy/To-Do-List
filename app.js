const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items = [];

// use EJS as your view engine 
app.set('view engine', 'ejs');

app.get("/", function(req,res){

    var today = new Date();
    var day = "";

    var currentDay = today.getDay();
    switch(currentDay){
        case 0:
            day = 'Sunday';
            break;
        case 1:
            day = 'Monday';
            break;
        case 2:
            day = 'Tuesday';
            break;
        case 3:
            day = 'Wednesday';
            break;
        case 4:
            day = 'Thursday';
            break;
        case 5:
            day = 'Friday';
            break;
        case 6:
            day = 'Saturday';
            break;
        default:
            console.log(today.getDay());
            break;
    }

    res.render("list", {day:day, newListItems: items})
})

app.post("/", function(req,res){
    var item = req.body.newItem;
    console.log(item);
    items.push(item);

    res.redirect("/");
});

app.listen(3000, function(){
    console.log("server started on port 3000");
})