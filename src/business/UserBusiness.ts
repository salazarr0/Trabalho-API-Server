import { UserData } from "../data/UserData";
import { User, USER_ROLE } from "../bd"

interface AtualizarUsuarioInputDTO {
    nome: string;
    email: string;
    role: USER_ROLE;
    idade: number;
}

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
    //exercicio 4
    atualizarUsuario = (id: Number, input: AtualizarUsuarioInputDTO) => {
    
        const { nome, email, role, idade } = input;

        if (nome === undefined || email === undefined || role === undefined || idade === undefined) {
            throw new Error("Para o método PUT, todos os campos são obrigatórios: 'nome', 'email', 'role', 'idade'.");
        }
        
        if (typeof nome !== "string" || nome.length < 3) {
            throw new Error("O campo 'nome' deve ser uma string com no mínimo 3 caracteres.");
        }
        if (typeof idade !== "number" || idade <= 0) {
            throw new Error("O campo 'idade' deve ser um número positivo.");
        }
        
        if (typeof email !== "string" || !email.includes("@")) {
            throw new Error("O campo 'email' é inválido.");
        }
        if (role !== USER_ROLE.NORMAL && role !== USER_ROLE.ADMIN) {
            throw new Error("O campo 'role' deve ser 'normal' ou 'admin'.");
        }
        
        const usuarioParaAtualizar = this.userData.buscarUsuarioPorID(id);
        if (!usuarioParaAtualizar) {
            throw new Error("Usuário não encontrado. Verifique o 'id'.");
        }

        const usuarioComEmailConflitante = this.userData.buscarUsuarioPorEmail(email);
        if (usuarioComEmailConflitante && usuarioComEmailConflitante.id !== id) {
            throw new Error("Este email já está em uso por outro usuário.");
        }
        
        const usuarioAtualizado: User = {
            id: usuarioParaAtualizar.id,
            nome: nome,
            email: email,
            role: role,
            idade: idade,
            createdAt: usuarioParaAtualizar.createdAt
        };

        this.userData.atualizarUsuario(id, usuarioAtualizado);
    }
    
}