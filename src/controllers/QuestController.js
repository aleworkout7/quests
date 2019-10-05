const axios = require('axios');
const Quest = require('../models/Quest');

module.exports = {
    async index(req, res){
        const quests = await Quest.find();
        return res.json(quests);
    },

    async store(req, res){
        const { name, point, actived } = req.body;
        
        const quest = await Quest.create({
            name,
            actived,
            point,
        });

        return res.json(quest);
    }
};