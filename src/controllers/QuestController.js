const axios = require('axios');
const Quest = require('../models/Quest');

module.exports = {
    async index(req, res){
        const quests = await Quest.find();
        return res.json(quests);
    },

    async store(req, res){
        const { name, actived } = req.body;
        
        const quest = await Quest.create({
            name,
            actived,
        });

        return res.json(quest);
    }
};