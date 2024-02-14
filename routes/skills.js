var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');




// GET /todos
router.get('/', skillsCtrl.index);
router.get('/id', skillsCtrl.show);
router.get('/new', skillsCtrl.new);
router.post('/', skillsCtrl.create);

module.exports = router;