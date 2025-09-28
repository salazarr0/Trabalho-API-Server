import express from 'express';
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.delete('/cleanup-inactive', userController.cleanupInactiveUsers);

userRouter.get('/age-range', userController.filtrarFaixaEtaria);//exercicio 2 

userRouter.put('/:id', userController.atualizarUsuario);//exercicio 4

userRouter.get('/userId/:id', userController.pegarPorID);//exercicio 1

userRouter.put('/:id', userController.atualizarUsuario);//exercicio 7
userRouter.delete('/:id', userController.deletarUsuario);//exercicio 7

