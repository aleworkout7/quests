const axios = require('axios');
const Teacher = require('../models/Teacher');

module.exports = {
    async store(req, res){
        const { name } = req.body;
        
        const teacher = await Teacher.create({
            name
        });

        return res.json(teacher);
    }
};