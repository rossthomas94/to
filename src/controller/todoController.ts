import { Request, Response } from "express"

import * as toDoController from '../services/toDo'

export const getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await toDoController.getAllToDos()
      res.json({ toDosData: result });
    } catch (error: any) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
export const getById = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id;
        const result = await toDoController.getOneToDos(id);
        res.json({ message: result });
      } catch (error: any) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
// export const createTodo = async (req: Request, res: Response):Promise<void>=> {
//     try {
//         const data = ''
//         const result = await toDoController.createToDo(data);
//         res.json({ message: result });
//       } catch (error: any) {
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
// }
// export const updateToDo =async (req: Request, res: Response):Promise<void> => {
//     try {
//         const id = req.params.id;
//         const data = ''
//         const result = await toDoController.updateTodo(id, data);
//         res.json({ message: result });
//       } catch (error: any) {
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
// }
// export const deleteToDo =async (req: Request, res: Response):Promise<void> => {
//     try {
//         const id = req.params.id;
//         const result = await toDoController.deleteToDo(id);
//         res.json({ message: result });
//       } catch (error: any) {
//         res.status(500).json({ error: 'Internal Server Error' });
//       }
// }