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
    
}