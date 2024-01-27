import mongoose, { Document, Schema } from 'mongoose';
// import ToDoModel from '../db/model'
import connectToMongo  from '../db/mongo';
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




  export const getAllToDos = async () => {
    const db = await connectToMongo();
    const collection = db.collection('toDos'); 
    try {
      const documents = await collection.find({}).toArray();
      return documents;
    } catch (error) {
      console.error('Error fetching todos:', error);
      throw error;
    }
  };
  
  export const getOneToDos = async (id: string) => {
    try {
      // const result = await ToDoModel.findById(id);
      return '';
    } catch (error) {
      console.error(`Error fetching todo with id ${id}:`, error);
      throw error;
    }
  };
  
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

