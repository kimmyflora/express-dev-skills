// controllers/skills.js

const SkillModel = require('../models/skill');
module.exports = {
    index
};


function index(req, res) {
    res.render('skills/index', {skills: SkillModel.getAll()});
}

// controllers/skills.js


