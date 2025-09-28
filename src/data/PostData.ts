import {post, Post} from "../bd"


export class PostData{
    //exercicio 3
    postDoUsuario = (novoPost:Post)=>{
        post.push(novoPost);
    }

    //exercicio 5
    buscarPostPorId = (id: number) => {
        const postFound = post.find((p) => p.id === id);
        return postFound;
    }

    atualizarPost = (id: number, postAtualizado: Post) => {
        const index = post.findIndex((p) => p.id === id);
        if (index !== -1) {
            post[index] = postAtualizado;
        }
    }
}