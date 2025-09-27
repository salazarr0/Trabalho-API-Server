import { UserData } from "../data/UserData";


export class UserBusiness{//exporta a classe
    userData = new UserData()//instancia usserData como objeto de UserData.
    //exrcicio 1
    pegarPorID = (id: Number/*valor de userId*/) =>{//cria um metodo dentro da classe UserData com parâmetro que ira ser setado la no controller com userId.
            
            const user = this.userData.buscarUsuarioPorID(id);//
            
            if(user == null){//logica de erro se usuario for nulo
                throw new Error("Usuário não encontrado!");
            }
    
            return user;
    }
    //exercicio 2
    filtrarFaixaEtaria = (min: Number, max: Number) =>{
        const users = this.userData.buscarFaixaEtaria(min,max);

        if(users.length === 0){
            throw new Error("Usuário não encontrado!");
        }
        return users;
    }
    
}