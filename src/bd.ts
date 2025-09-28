interface Users{
    id: number;
    nome: string;
    idade: Number;
}

export interface Post {
 id: number;
 title: string;
 content: string;
 authorId: number;
 createdAt: Date;
 published: boolean;
}

export const users: Users[] = [
    {id: 1, nome: "Joao", idade: 15},
    {id: 2, nome: "Maria", idade: 30},
    {id: 3, nome: "Miguel", idade: 27},
    {id: 4, nome: "Luana", idade: 17},
    {id: 5, nome: "Yago", idade: 22},
    {id: 7, nome: "Lucas", idade: 35},
    {id: 8, nome: "Alessandra", idade: 42},
    {id: 9, nome: "Luciana", idade: 39},
    {id: 10, nome: "Gael", idade: 34},
    {id: 11, nome: "Valentina", idade: 29},
    {id: 12, nome: "Sergio", idade: 50},
    {id: 13, nome: "Gorbachev", idade: 43},
    {id: 14, nome: "Vladimir", idade: 19},
    {id: 15, nome: "Lenin", idade: 17},
    {id: 16, nome: "Franlkin", idade: 19},
    {id: 17, nome: "Roosevelt", idade: 41}
]

export const post:Post[] = [];