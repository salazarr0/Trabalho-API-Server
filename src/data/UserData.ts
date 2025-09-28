import {User, users} from '../bd';

export class UserData{
    //exercicio 1
    buscarUsuarioPorID = (id: Number) => {
        try{
            const userFound = users.find((u) => {// achar o usuario que tenha o id correspondente com o valor vindo do businnes.
                return u.id === id
            })
            return userFound;
        }catch(error:any){
            throw new Error(error.message);
        }
    }
    //exercicio 2
    buscarFaixaEtaria = (min: Number, max: Number) =>{
        try{
            const userFound = users.filter((u) => u.idade >= min && u.idade <= max);
            return userFound;
        }catch(error: any){
            throw new Error(error.message);
        }
    }
    //exercicio 4
    buscarUsuarioPorEmail = (email: string) => {
        try {
            const userFound = users.find((u) => u.email === email);
            return userFound;
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
    //exercicio 4
    atualizarUsuario = (id: Number, usuarioAtualizado: User) => {
        try {
            const index = users.findIndex((u) => u.id === id);

            if (index !== -1) {
                users[index] = usuarioAtualizado;
            }
        } catch (error: any) {
            throw new Error("Erro ao atualizar usuário no banco de dados.");
        }
    }   
}