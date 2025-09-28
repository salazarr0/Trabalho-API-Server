import { users, User} from '../bd';
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

    //exercicio 6
    deletarPost = (id: number) => {
        const index = post.findIndex((p) => p.id === id);
        if (index !== -1) {
            post.splice(index, 1);
        }
    }

    //exercicio 7
    buscarTodosOsPosts = (): Post[] => {
        return post;
    }
}