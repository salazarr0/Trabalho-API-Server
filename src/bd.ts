export enum USER_ROLE {
    NORMAL = "normal",
    ADMIN = "admin"
}

export interface User {
    id: Number;
    nome: string;
    email: string;
    role: USER_ROLE;
    idade: Number;
    createdAt: Date;
}
export interface Post {
    id: Number;
    title: string;
    content: string;
    authorId: Number;
    createdAt: Date;
    published: boolean;
}

export const users: User[] = [
    {
        id: 1,
        nome: "Joao",
        email: "joao@email.com",
        role: USER_ROLE.ADMIN,
        idade: 15,
        createdAt: new Date()
    },
    {
        id: 2,
        nome: "Maria",
        email: "maria@email.com",
        role: USER_ROLE.NORMAL,
        idade: 30,
        createdAt: new Date()
    },
    {
        id: 3,
        nome: "Miguel",
        email: "miguel@email.com",
        role: USER_ROLE.NORMAL,
        idade: 27,
        createdAt: new Date()
    },
    {
        id: 4,
        nome: "Luana",
        email: "luana@email.com",
        role: USER_ROLE.NORMAL,
        idade: 17,
        createdAt: new Date()
    },
    {
        id: 5,
        nome: "Yago",
        email: "yago@email.com",
        role: USER_ROLE.NORMAL,
        idade: 22,
        createdAt: new Date()
    },
    {
        id: 7,
        nome: "Lucas",
        email: "lucas@email.com",
        role: USER_ROLE.NORMAL,
        idade: 35,
        createdAt: new Date()
    },
    {
        id: 8,
        nome: "Alessandra",
        email: "alessandra@email.com",
        role: USER_ROLE.NORMAL,
        idade: 42,
        createdAt: new Date()
    },
    {
        id: 9,
        nome: "Luciana",
        email: "luciana@email.com",
        role: USER_ROLE.NORMAL,
        idade: 39,
        createdAt: new Date()
    },
    {
        id: 10,
        nome: "Gael",
        email: "gael@email.com",
        role: USER_ROLE.NORMAL,
        idade: 34,
        createdAt: new Date()
    },
    {
        id: 11,
        nome: "Valentina",
        email: "valentina@email.com",
        role: USER_ROLE.NORMAL,
        idade: 29,
        createdAt: new Date()
    },
    {
        id: 12,
        nome: "Sergio",
        email: "sergio@email.com",
        role: USER_ROLE.NORMAL,
        idade: 50,
        createdAt: new Date()
    },
    {
        id: 13,
        nome: "Gorbachev",
        email: "gorbachev@email.com",
        role: USER_ROLE.NORMAL,
        idade: 43,
        createdAt: new Date()
    },
    {
        id: 14,
        nome: "Vladimir",
        email: "vladimir@email.com",
        role: USER_ROLE.NORMAL,
        idade: 19,
        createdAt: new Date()
    },
    {
        id: 15,
        nome: "Lenin",
        email: "lenin@email.com",
        role: USER_ROLE.NORMAL,
        idade: 17,
        createdAt: new Date()
    },
    {
        id: 16,
        nome: "Franklin",
        email: "franklin@email.com",
        role: USER_ROLE.NORMAL,
        idade: 19,
        createdAt: new Date()
    },
    {
        id: 17,
        nome: "Roosevelt",
        email: "roosevelt@email.com",
        role: USER_ROLE.NORMAL,
        idade: 41,
        createdAt: new Date()
    }
];

export const post:Post[] = [];