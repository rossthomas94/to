"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneToDos = exports.getAllToDos = void 0;
// import ToDoModel from '../db/model'
const mongo_1 = __importDefault(require("../db/mongo"));
// interface ToDo {
//   title: string;
//   dateCompleted?: Date | null;
//   completed: boolean;
//   progress: number;
//   description: string;
// }
// const ToDoSchema = new Schema<ToDo & Document>({
//   title: { type: String, required: true },
//   dateCompleted: { type: Date, default: null },
//   completed: { type: Boolean, required: true },
//   progress: { type: Number, required: true },
//   description: { type: String, required: true },
// });
const getAllToDos = () => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield (0, mongo_1.default)();
    const collection = db.collection('toDos');
    try {
        const documents = yield collection.find({}).toArray();
        return documents;
    }
    catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
});
exports.getAllToDos = getAllToDos;
const getOneToDos = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const result = await ToDoModel.findById(id);
        return '';
    }
    catch (error) {
        console.error(`Error fetching todo with id ${id}:`, error);
        throw error;
    }
});
exports.getOneToDos = getOneToDos;
// export const createToDo = async (data: ToDo) => {
//   try {
//     const result = await ToDoModel.create(data);
//     return result;
//   } catch (error) {
//     console.error('Error creating todo:', error);
//     throw error;
//   }
// };
// export const updateTodo = async (id: string, data: Partial<ToDo>) => {
//   try {
//     const result = await ToDoModel.findByIdAndUpdate(id, data, { new: true });
//     return result;
//   } catch (error) {
//     console.error(`Error updating todo with id ${id}:`, error);
//     throw error;
//   }
// };
// export const deleteToDo = async (id: string) => {
//   try {
//     const result = await ToDoModel.findByIdAndDelete(id);
//     return result;
//   } catch (error) {
//     console.error(`Error deleting todo with id ${id}:`, error);
//     throw error;
//   }
// };
