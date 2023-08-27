import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse,
  } from "tsoa";

import { todo } from './todo';
import { Service, CreateTodo } from './todoService';

@Route('todo')
export class TodoController extends Controller {
   @Get('{todoId}')
    public async getTodo(
        @Path() todoId: string
        ): Promise<todo> {
        const instance = new Service();
        return instance.get(todoId);
    }
    @SuccessResponse('201', 'Got You That Todo')
    @Post('/create')
    public async createTodo(
      @Body() todo: CreateTodo
    ): Promise<void> {
      const instance = new Service();
      // return instance.create(todo);
    }
    // @SuccessResponse('201', 'Created That Todo')
}