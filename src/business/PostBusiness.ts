import { PostData } from "../data/PostData";
import { UserData } from "../data/UserData";
import {Post}from "../bd";

export class PostBusiness{
    postData = new PostData();
    userData = new UserData();
    //exercicio 3
    postUsers = (title: string, content: string, authorId:number)=>{

        if(!title || !content || !authorId){
            throw new Error("Campos fatantes");
        }

        if(title.length < 3){
            throw new Error("Campo com pelo menos 3 caractéres");
        }
        if(content.length < 10){
            throw new Error("Campo com pelo menos 10 caractéres");
        }
        const idAutor = this.userData.buscarFaixaEtaria;
        if(!idAutor){
            throw new Error("Autor inexistente");
        }
        const id = Date.now();

        const novoPost: Post = {
            id: id,
            title: title,
            content: content,
            authorId: authorId,
            createdAt: new Date(),
            published: false 
        };

        this.postData.postDoUsuario(novoPost);
    }

}