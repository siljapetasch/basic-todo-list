const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = ["Item 1", "Item 2", "Item 3"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    let today = new Date()
    let currentDay = today.getDay()
    const options = {weekday: 'long', day:"numeric", month:"long"};
    let day = today.toLocaleDateString('en-US', options);
    
    res.render('list', {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
    let item = req.body.newItem;
    console.log(item);
    items.push(item);
    res.redirect("/");

});

app.listen(3000,function(){
    console.log("Server running on port 3000")
});

