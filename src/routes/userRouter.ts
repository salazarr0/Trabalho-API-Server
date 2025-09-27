import express from 'express';
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.get('/age-range', userController.filtrarFaixaEtaria);//exercicio 2 

userRouter.get('/userId/:id', userController.pegarPorID);//exercicio 1