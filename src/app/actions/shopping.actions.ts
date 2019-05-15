//importing the necessary methods
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Shopping } from './../models/shopping.model';

//Defining a string constant for the type of action
export const ADD_ITEM       = '[SHOPPING] Add';
export const DELETE_ITEM    = '[SHOPPING] Delete';

//Creating a class for each of the actions
export class AddItem implements Action {
    readonly type = ADD_ITEM

    constructor(public payload: Shopping) {}
}

export class DeleteItem implements Action {
    readonly type = DELETE_ITEM

    constructor(public payload: number) {}
}

//Exporting the actions for use in reducers
export type Actions = AddItem | DeleteItem
