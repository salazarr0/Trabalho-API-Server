import { PostData } from "../data/PostData";
import { UserData } from "../data/UserData";
import {Post}from "../bd";
import { USER_ROLE } from "../bd";

interface AtualizarPostInputDTO {
    title?: string;
    content?: string;
    published?: boolean;
}

interface DeletarPostInputDTO {
    postId: number;
    userId: number;
}


export class PostBusiness{
    postData = new PostData();
    userData = new UserData();
    //exercicio 3
    postUsers = (title: string, content: string, authorId:number)=>{

        if(!title || !content || !authorId){
            throw new Error("Campos faltantes");
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

    //exercicio 5

    atualizarPost = (id: number, input: AtualizarPostInputDTO) => {
        const postParaAtualizar = this.postData.buscarPostPorId(id);
        if (!postParaAtualizar) {
            throw new Error("Post não encontrado. Verifique o 'id'.");
        }

        if (input.title !== undefined) {
            if (typeof input.title !== "string" || input.title.length < 3) {
                throw new Error("O campo 'title' deve ser uma string com no mínimo 3 caracteres.");
            }
            postParaAtualizar.title = input.title;
        }

        if (input.content !== undefined) {
            if (typeof input.content !== "string" || input.content.length < 10) {
                throw new Error("O campo 'content' deve ter no mínimo 10 caracteres.");
            }
            postParaAtualizar.content = input.content;
        }
        
        if (input.published !== undefined) {
            if (typeof input.published !== "boolean") {
                throw new Error("O campo 'published' deve ser um valor booleano (true ou false).");
            }
            postParaAtualizar.published = input.published;
        }
        this.postData.atualizarPost(id, postParaAtualizar);
    }

    //exercicio 6
    deletarPost = (input: DeletarPostInputDTO) => {
        const { postId, userId } = input;

        const postParaDeletar = this.postData.buscarPostPorId(postId);
        if (!postParaDeletar) {
            throw new Error("Post não encontrado.");
        }

        const usuarioQueRequisitou = this.userData.buscarUsuarioPorID(userId);
        if (!usuarioQueRequisitou) {
            throw new Error("Usuário não encontrado. Verifique o 'User-Id' enviado.");
        }

        const ehAdmin = usuarioQueRequisitou.role === USER_ROLE.ADMIN;
        const ehAutor = postParaDeletar.authorId === usuarioQueRequisitou.id;

        if (!ehAdmin && !ehAutor) {
            throw new Error("Apenas o autor do post ou administradores podem deletar este post.");
        }

        this.postData.deletarPost(postId);
    }

}