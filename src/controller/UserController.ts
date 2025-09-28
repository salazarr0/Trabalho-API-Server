import { Request, Response } from "express";
import{ UserBusiness } from '../business/UserBusiness';//importa a classe UserBussines com seus metodos.
//pulei linhas para o codigo ter uma melhor compreensão, por favor nao descontar ponto por linhas vazias!!!

export class UserController{
    userBusiness = new UserBusiness();//cria userBusiness como um objeto de UserBusiness
    //exercicio 1
    pegarPorID = (req:Request, res:Response) =>{
        try {
            const {id} = req.params;

            if(!id){//validacao para id não ser undefinied e dar problema com com o parseInt.
                return res.status(400).json({ message: 'O ID do usuário é obrigatório.' });
            }

            const userId = parseInt(id);//passa o id parea integer.

            if(isNaN(userId)){//validacao se o id não o um numero
                return res.status(400).json({ message: 'O ID não é um numero válido'});
            }
            const user = this.userBusiness.pegarPorID(userId);//chama o objeto User Bussines e seu metodo para setar o parãmetro com o valor extraído do userId.

            res.send(user);//retornar o usuario.

        }catch(error: any){

            if(error.message === 'Usuário não encontrado!'){//Aqui retorna o protocolo http da logica de erro se usuario for nulo.
                return res.status(404).json({
                    success: false,
                    message: 'Usuário não encontrado'
                })
            }

            res.send(error.message);
        }
    }
    //exercicio 2
    filtrarFaixaEtaria = (req: Request, res: Response) =>{
        try{
            const { min, max } = req.query;
            if(!min || !max){
                return res.status(400).json({message: "min e max são obrigatórios!"})

            }
            const minAge = parseInt(min as string);
            const maxAge = parseInt(max as string)

            if(isNaN(minAge) || isNaN(maxAge)){
                return res.status(400).json({message: "min e max devem ser números!"})
            }

            const users = this.userBusiness.filtrarFaixaEtaria(minAge, maxAge);

            res.send(users);
        }catch(error: any){

           if(error.message === 'Usuário não encontrado!'){
                return res.status(404).json({
                    success: false,
                    message: 'Usuário não encontrado',
                    sugestion: "Coloque uma faixa etária menor ex: 'min=20&max=25' "
                })
            }
            res.status(500).json({message: "Erro inexperado"});
        }
    }
    //exercicio 4
    atualizarUsuario = (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            
            const { nome, email, role, idade } = req.body;
            
            if(isNaN(id)){
                throw new Error("O 'id' deve ser um número.");
            }

            
            const input = { nome, email, role, idade };

            this.userBusiness.atualizarUsuario(id, input);

            res.status(200).json({ message: "Usuário atualizado com sucesso!" });

        } catch (error: any) {
            
            if (error.message.includes("não encontrado")) {
                res.status(404).json({ error: error.message });
            } else if (error.message.includes("já está em uso")) {
                res.status(409).json({ error: error.message });
            } else {
                res.status(400).json({ error: error.message });
            }
        }
    }
    //exercicio 7
     cleanupInactiveUsers = (req: Request, res: Response) => {
        try {
            const { confirm } = req.query;

            const usuariosRemovidos = this.userBusiness.cleanupInactiveUsers(confirm);

            res.status(200).json({
                message: "Limpeza de usuários inativos concluída.",
                usuariosRemovidos: usuariosRemovidos
            });

        } catch (error: any) {
            if (error.message.includes("Confirmação necessária")) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Ocorreu um erro inesperado no servidor." });
            }
        }
    }
    deletarUsuario = (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                throw new Error("O 'id' deve ser um número.");
            }
            
            this.userBusiness.deletarUsuario(id);
            res.status(200).json({ message: "Usuário deletado com sucesso." });
        } catch (error: any) {
            if (error.message.includes("não encontrado")) {
                res.status(404).json({ error: error.message });
            } else if (error.message.includes("não é permitido")) {
                res.status(403).json({ error: error.message });
            } else {
                res.status(400).json({ error: error.message });
            }
        }
    }
}