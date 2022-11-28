 const express = require("express");
    const mongoose = require("mongoose");
    const ejs = require("ejs");
    const bodyParser = require("body-parser");
    
    const app = express();
    app.use(bodyParser.urlencoded({
      extended: false
    }));
    app.set("view engine", "ejs");
    app.use(express.static("public"));
    
    main().catch(err => console.log(err));
    async function main() {
      await mongoose.connect("mongodb://127.0.0.1:27017/wikiDB");
    }
    
    const articleSchema = new mongoose.Schema({
      title: String,
      content: String
    });
    
    const Article = mongoose.model("Article", articleSchema);


////////////////////////////////// ALL ARTICLES /////////////////////////////

app.route("/articles")

.get(function (req, res) {
        Article.find({}, (err, foundArticles) => {
          if (!err) {
          res.send(foundArticles);
      }
      else {
          res.send(err);
      }
        })
    })

.post(function(req, res) {
    console.log(req.body.title);
    console.log(req.body.content);

    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });
    newArticle.save(function(err) {
        if (!err) {
            res.send("Successfully added a new article.")
        }
        else {
            res.send(err);
        };
    })

})

.delete(function(req, res) {
    Article.deleteMany(function(err) {
        if (!err) {
            res.send("Successfully deleted all articles.")
        }
        else {
            res.send(err);
        };
    })
});


////////////////////////////////// SINGLE ARTICLE /////////////////////////////

app.route('/articles/:articleTitle')

.get(function(req, res) {
    Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
        if (foundArticle) {
        res.send(foundArticle);
        }
        else {
            res.send(err);
        }
    })
})

.put(function(req, res) {
    Article.findOneAndUpdate(
        {title: req.params.articleTitle},
        {title: req.body.title, content: req.body.content},
        {overwrite: true}, 
        function(err) {
        if (!err) {
            res.send("Successfully updated the article.")
        }
    })
})

.patch(function(req, res) {
    Article.findOneAndUpdate(
        {title: req.params.articleTitle},
        {$set: req.body}, 
        function(err) {
        if (!err) {
            res.send("Successfully updated the article.")
        }
        else {
            res.send(err)
        }
    })
})

.delete(function(req, res) {
    Article.findOneAndDelete(
        {title: req.params.articleTitle}, 
        function(err) {
        if (!err) {
            res.send("Successfully deleted the article.")
        }
        else {
            res.send(err)
        }
    })
});




app.listen(3000, () => {
  console.log("Server started on port 3000");
});