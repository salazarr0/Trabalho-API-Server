import {Response, Request} from "express";
import { PostBusiness } from "../business/PostBusiness";

export class PostController{
    postBusiness = new PostBusiness();
    //exercicio 3
    postUsers= (req: Request, res: Response)=>{
        try{
            const {title , content, authorId } = req.body;

            this.postBusiness.postUsers(title, content,authorId);

            res.status(201).json({ message: "Post criado com sucesso!" });
        }catch(error: any){
            if (error.message.includes("não encontrado")) {
                
                res.status(404).json({ error: error.message });
            } else {
                
                res.status(400).json({ error: error.message });
            }
        }
    }
    //exercicio 5
    atualizarPost = (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            const { title, content, published } = req.body;
            
            if (isNaN(id)) {
                throw new Error("O 'id' deve ser um número.");
            }

            const input = { title, content, published };
            this.postBusiness.atualizarPost(id, input);
            res.status(200).json({ message: "Post atualizado com sucesso." });
        } catch (error: any) {
            if (error.message.includes("não encontrado")) {
                res.status(404).json({ error: error.message });
            } else {
                res.status(400).json({ error: error.message });
            }
        }
    }
    //exercicio 6
    deletarPost = (req: Request, res: Response) => {
        try {
            const postId = parseInt(req.params.id);
            const userIdHeader = req.headers['user-id'];

            if (isNaN(postId)) {
                throw new Error("O 'id' do post deve ser um número.");
            }
            if (!userIdHeader) {
                throw new Error("O header 'User-Id' é obrigatório para autorização.");
            }

            const userId = parseInt(userIdHeader as string);
            if (isNaN(userId)) {
                throw new Error("O header 'User-Id' deve ser um número.");
            }
            
            const input = { postId, userId };
            this.postBusiness.deletarPost(input);
            
            res.status(200).json({ message: "Post deletado com sucesso." });
        } catch (error: any) {
            if (error.message.includes("não encontrado")) {
                res.status(404).json({ error: error.message });
            } else if (error.message.includes("Apenas o autor")) {
                res.status(403).json({ error: error.message });
            } else {
                res.status(400).json({ error: error.message });
            }
        }
    }
    
}