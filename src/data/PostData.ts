import {post, Post} from "../bd"


export class PostData{
    //exercicio 3
    postDoUsuario = (novoPost:Post)=>{
        post.push(novoPost);
    }
}