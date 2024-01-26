import mongoose, { Document, Schema } from 'mongoose';


interface ToDo {
    title: string;
    dateCompleted?: Date | null;
    completed: boolean;
    progress: number;
    description : string;
};
const ToDoSchema = new Schema<ToDo>({
    title: { type: String, required: true },
    dateCompleted: { type: Date, default: null },
    completed: { type: Boolean, required: true },
    progress: { type: Number, required: true },
    description: { type: String, required: true },
  });

export const getAllToDos = () => {

}
export const getOneToDos = (id:string) => {

}
export const createToDo = (data:string) => {

}
export const updateTodo = (id:string, data:string) => {

}
export const deleteToDo = (id:string) =>{

}

