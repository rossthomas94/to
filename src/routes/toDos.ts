import express from 'express';
const router = express.Router();

import * as todoController from '../controller/todoController';

router.get('/', todoController.getAll)
router.get('/id', todoController.getById)
router.post('/', todoController.createTodo)
router.put('/', todoController.updateTodO)
router.delete('/', todoController.deleteToDo)


export default router;
