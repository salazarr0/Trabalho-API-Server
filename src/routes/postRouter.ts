import express from 'express';//exercicio 3
import { PostController} from "../controller/PostController";

export const postRouter = express.Router();

const postController = new PostController();

postRouter.post('/postUsers', postController.postUsers);//exercicio 3

postRouter.patch('/:id', postController.atualizarPost);//exercicio 5
