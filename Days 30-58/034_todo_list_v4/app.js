const express = require("express");
const bodyParser = require("body-parser");
let ejs = require('ejs');
const mongoose = require("mongoose");
const app = express();
const _ = require("lodash")

app.use(express.static("public"));
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://admin-jared:<password>@cluster0.nt6ii1m.mongodb.net/?retryWrites=true&w=majority');
    console.log("Connected");


const itemsSchema = {
    name: String
};

const Item = mongoose.model("Item", itemsSchema)

const item1 = new Item ({
    name: "Welcome to your ToDo List!"
});
const item2 = new Item ({
    name: "Hit the + button to add a new item."
});
const item3 = new Item ({
    name: "<-- Hit this checkbox to delete an item."
});

const defaultItems = [item1, item2, item3];

const listSchema = {
    name: String,
    items: [itemsSchema]
};

const List = mongoose.model("List", listSchema);


app.get('/', function (req, res) {

    Item.find({}, function(err, foundItems){
        
        if (foundItems.length === 0) {
            Item.insertMany(defaultItems, function(err) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Successfully saved default items to DB.")
                }
            });
            res.redirect("/");
        }
        else {
        res.render("list", { listTitle: "Today", items: foundItems});
    }
    });
});


app.post('/', function(req, res) {
    
    const itemName = req.body.newItem;
    const listName = req.body.list;

    const item = new Item ({
        name: itemName
    });

    if (listName == "Today") {
        item.save()
        res.redirect("/")
    }
    else {
        List.findOne({name: listName}, function(err, foundList) {
            foundList.items.push(item)
            foundList.save()
            res.redirect("/" + listName)
        })
    }

    


});


app.get("/:customListName", function(req, res) {
    const customListName = _.capitalize(req.params.customListName);

    List.findOne({name: customListName}, function(err, foundList) {
        if (!err) {
            if (!foundList){
                // Create a new list
                const list = new List({
                    name: customListName,
                    items: defaultItems
                })
            
                list.save();
                res.redirect("/" + customListName)
            }
            else {
                // Navigate to the list.
                res.render('list', {listTitle: foundList['name'], items: foundList.items});
            }
        }
    })
});

app.get("/about", function(req, res) {
    res.render("about")
})


app.post("/delete", function(req, res) {
    const checkedItemId = req.body.checkbox;
    const listName = req.body.listName;

    if (listName === "Today") {
        Item.findByIdAndRemove(checkedItemId, function(err) {
            if (err) {
                console.log(err)
            }
            else {
                console.log("Item deleted.")
                res.redirect("/")
            }
        })
    }
    else {
        List.findOneAndUpdate(
            {name: listName},
            {$pull: {items: {_id: checkedItemId}}},
            function(err, foundList) {
                if (!err) {
                    res.redirect("/" + listName)
                }
            });
    }

    
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
    console.log("Server opened on port 3000.")
})


};
