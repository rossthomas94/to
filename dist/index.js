"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser")); // Import body-parser
const toDos_1 = __importDefault(require("./routes/toDos"));
// import * as authorization from "./middleware/auth";
const app = (0, express_1.default)();
const port = 3000;
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/toDo', toDos_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
