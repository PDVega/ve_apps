const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  
const articleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
    timestamps: true
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article;
