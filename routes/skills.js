var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills');


 // GET /todos
 router.get('/', skillsCtrl.index);

module.exports = router;
