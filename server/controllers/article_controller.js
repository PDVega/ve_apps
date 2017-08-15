const Article = require('../models/Article');

let post = (req, res) => {
  Article.create({
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    author: req.body.author
  }, (err, newArticle) => {
    if(err){
      res.send(err)
    } else {
      res.send(newArticle)
    }
  })
}

let getAll = (req, res) => {
  Article.find({}, (err, articles) => {
    if(err){
      res.send(err)
    } else {
      res.send(articles)
    }
  })
}

let getOne = (req, res) => {
  Article.findOne({
    _id: req.params.id
  })
  .populate('author')
  .exec((err, question) => {
    if(err){
      res.send(err);
    } else {
      res.send(question)
    }
  })
}


let update = (req, res) => {
  Article.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  },
  (err, updatedArticle) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedArticle);
    }
  })
}

let destroy = (req, res) => {
  Article.remove({
    _id: req.params.id
  }, (err, deleted) => {
    if (err) {
      res.send(err);
    } else {
      res.send(deleted);
    }
  })
}



module.exports = {
  post,
  getAll,
  getOne,
  update,
  destroy
};
