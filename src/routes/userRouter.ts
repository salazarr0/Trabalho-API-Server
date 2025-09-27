import express from 'express';
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();


userRouter.get('/:id', userController.pegarPorID);//exercicio 1