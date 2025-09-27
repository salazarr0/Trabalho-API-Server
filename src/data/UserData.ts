import {users} from '../bd';

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
}