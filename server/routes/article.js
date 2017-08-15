const express = require('express');
const router = express.Router();
const Controller = require('../controllers/article_controller')

//article API
router.post('/', Controller.post)
router.get('/', Controller.getAll)
router.get('/:id', Controller.getOne)
router.put('/:id', Controller.update)
router.delete('/:id', Controller.destroy)

//get by author

//get by category

module.exports = router;
