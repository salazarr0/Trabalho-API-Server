API de Gerenciamento de Usuários e Posts

API RESTful desenvolvida em Node.js com Express e TypeScript. O projeto demonstra uma arquitetura em camadas (Controller, Business, Data) para gerenciar usuários e seus respectivos posts, utilizando um banco de dados simulado em memória.

 Tecnologias Utilizadas

- Node.js: Ambiente de execução JavaScript.
- TypeScript: Superset do JavaScript que adiciona tipagem estática.
- Express.js: Framework web para criação de APIs.
- ts-node-dev: Ferramenta para rodar o servidor em modo de desenvolvimento com hot-reload.
- CORS: Middleware para permitir requisições de diferentes origens.

 Estrutura do Projeto

O projeto utiliza uma arquitetura em camadas para separar as responsabilidades:

/src
├── business/        Camada de Regras de Negócio
├── controllers/     Camada de Controle (Recebe e responde requisições HTTP)
├── data/            Camada de Acesso a Dados (Comunicação com o "banco")
├── models/          Interfaces e tipos (Estrutura dos dados)
├── routes/          Definição dos endpoints da API
├── bd.ts            Banco de dados simulado (array em memória)
└── server.ts        Arquivo principal que inicia o servidor Express


Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 16 ou superior)
- [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

Como Executar o Projeto

Siga os passos abaixo para rodar a API localmente:

```bash
 1. Clone o repositório (exemplo)
git clone [https://github.com/seu-usuario/nome-do-projeto.git](https://github.com/seu-usuario/nome-do-projeto.git)

 2. Acesse a pasta do projeto
cd nome-do-projeto

 3. Instale as dependências
npm install

 4. Rode o servidor em modo de desenvolvimento
 O servidor estará disponível em http://localhost:3003 (ou a porta que você configurou)
npm run dev
 Documentação da API
Endpoints de Usuários (/users)
PUT /users/:id
Atualiza completamente um usuário existente. Todos os campos são obrigatórios.

Parâmetros de URL:

id (number, obrigatório): ID do usuário a ser atualizado.

Corpo da Requisição (Body):

JSON

{
    "nome": "Novo Nome Completo",
    "email": "novo@email.com",
    "role": "normal",
    "idade": 35
}
Respostas:

200 OK: { "message": "Usuário atualizado com sucesso!" }

400 Bad Request: Erro de validação (ex: campos faltando, email inválido).

404 Not Found: Usuário com o ID especificado não encontrado.

409 Conflict: O email fornecido já está em uso por outro usuário.

DELETE /users/:id
Deleta um usuário específico.

Parâmetros de URL:

id (number, obrigatório): ID do usuário a ser deletado.

Respostas:

200 OK: { "message": "Usuário deletado com sucesso." }

403 Forbidden: Tentativa de remover o único administrador do sistema.

404 Not Found: Usuário com o ID especificado não encontrado.

GET /users/:id/posts
Busca todos os posts de um usuário específico.

Parâmetros de URL:

id (number, obrigatório): ID do usuário cujos posts serão listados.

Respostas:

200 OK: Retorna um array de objetos de post.

404 Not Found: Usuário com o ID especificado não encontrado.

DELETE /users/cleanup-inactive
Remove todos os usuários que não possuem posts. Administradores não são removidos.

Query Parameters:

confirm=true (string, obrigatório): Confirmação para executar a operação de limpeza.

Respostas:

200 OK: Retorna uma mensagem de sucesso e um array com os usuários que foram removidos.

JSON

{
    "message": "Limpeza de usuários inativos concluída.",
    "usuariosRemovidos": [
        {
            "id": 5,
            "nome": "Yago",
            "email": "yago@email.com",
            "role": "normal",
            "idade": 22,
            "createdAt": "2025-09-28T03:30:00.000Z"
        }
    ]
}
400 Bad Request: O parâmetro confirm=true não foi fornecido.

Endpoints de Posts (/posts)
POST /posts
Cria um novo post.

Corpo da Requisição (Body):

JSON

{
    "title": "Título do Meu Novo Post",
    "content": "Este é o conteúdo com mais de 10 caracteres.",
    "authorId": 1
}
Respostas:

201 Created: { "message": "Post criado com sucesso!" }

400 Bad Request: Erro de validação (ex: título curto, authorId faltando).

404 Not Found: O authorId fornecido não corresponde a um usuário existente.

GET /posts
Retorna uma lista de todos os posts.

Respostas:

200 OK: Retorna um array de objetos de post.

PATCH /posts/:id
Atualiza parcialmente um post existente.

Parâmetros de URL:

id (number, obrigatório): ID do post a ser atualizado.

Corpo da Requisição (Body): (Envie apenas os campos que deseja alterar)

JSON

{
    "title": "Este é um título atualizado",
    "published": true
}
Respostas:

200 OK: { "message": "Post atualizado com sucesso." }

400 Bad Request: Erro de validação (ex: published não é booleano).

404 Not Found: Post com o ID especificado não encontrado.

DELETE /posts/:id
Deleta um post específico.

Parâmetros de URL:

id (number, obrigatório): ID do post a ser deletado.

Headers:

User-Id (number, obrigatório): ID do usuário que está tentando deletar o post.

Respostas:

200 OK: { "message": "Post deletado com sucesso." }

403 Forbidden: O usuário (especificado no User-Id) não é o autor do post nem um administrador.

404 Not Found: Post ou usuário (do User-Id) não encontrado.
