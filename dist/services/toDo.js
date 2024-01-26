"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateTodo = exports.createToDo = exports.getOneToDos = exports.getAllToDos = void 0;
const mongoose_1 = require("mongoose");
const mongoURI = 'mongodb://localhost:50089/toDoDB';
;
const ToDoSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    dateCompleted: { type: Date, default: null },
    completed: { type: Boolean, required: true },
    progress: { type: Number, required: true },
    description: { type: String, required: true },
});
const getAllToDos = () => {
};
exports.getAllToDos = getAllToDos;
const getOneToDos = (id) => {
};
exports.getOneToDos = getOneToDos;
const createToDo = (data) => {
};
exports.createToDo = createToDo;
const updateTodo = (id, data) => {
};
exports.updateTodo = updateTodo;
const deleteToDo = (id) => {
};
exports.deleteToDo = deleteToDo;
