const express = require('express');

const QuestController = require('./controllers/QuestController');
const TeacherController = require('./controllers/TeacherController');

const routes = express.Router();

routes.get('/quest', QuestController.index);
routes.post('/quest', QuestController.store);
routes.post('/teacher', TeacherController.store);

module.exports = routes;