"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.getAll = void 0;
const toDoController = __importStar(require("../services/toDo"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield toDoController.getAllToDos();
        res.json({ toDosData: result });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAll = getAll;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield toDoController.getOneToDos(id);
        res.json({ message: result });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getById = getById;
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
