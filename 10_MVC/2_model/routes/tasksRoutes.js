// Rotas das tasks

const express = require('express');
const router = express.Router();

const TaskController = require('../controllers/TaskController');

router.get('/add', TaskController.createTask);
router.post('/save', TaskController.createTaskSave);

router.get('/', TaskController.showTasks);



module.exports = router;



