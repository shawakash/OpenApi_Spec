import { todo } from "./todo";
import fs from 'fs';

export type CreateTodo = Pick<todo, 'title' | 'description'>;


export class Service {
    public async get(todoId: string, ): Promise<todo> {
        // fs.readFile('todos.json', 'utf-8', (err, data) => {
        //     if(err) {
        //         throw new Error(err.message);
        //     }
        //     const todos: todo[] = JSON.parse(data);
        //     return todos.find(todo => todo.id === todoId);
        // });
        // const todos = fs.readFileSync(__dirname + '/todos.json', 'utf-8');
        // return JSON.parse(todos);
        return {
            title: 'Dummy Todo',
            description: 'Dummy',
            id: '832798',
            done: false
        }
    }
    public create(todo: CreateTodo) {
        // fs.readFile(__dirname + '/todos.json', 'utf-8', (err, data) => {
        //     if(err) {
        //         throw new Error(err.message);
        //     }
        //     console.log(data)
        //     data = JSON.parse(data);
        //     const id = Math.floor(Math.random() * 10000 + 1).toString();
        //     const newTodo: todo = {...todo, id, done: false};
        //     fs.writeFile('todos.json', JSON.stringify([...data, {...newTodo}]), (err) => {
        //         if(err) {
        //             throw new Error(err.message);
        //         };
        //         return;
        //     })
        // })
        console.log('From Create Todo');
        return {
            title: 'Dummy Todo',
            description: 'Dummy',
            id: '832798',
            done: false
        }
    }
}