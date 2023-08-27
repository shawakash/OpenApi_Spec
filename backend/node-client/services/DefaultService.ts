/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Pick_todo_title_or_description_ } from '../models/Pick_todo_title_or_description_';
import type { todo } from '../models/todo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class DefaultService {

    /**
     * @param todoId
     * @returns todo Ok
     * @throws ApiError
     */
    public static getTodo(
        todoId: string,
    ): CancelablePromise<todo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/todo/{todoId}',
            path: {
                'todoId': todoId,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any Got You That Todo
     * @throws ApiError
     */
    public static createTodo(
        requestBody: Pick_todo_title_or_description_,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/todo/create',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
