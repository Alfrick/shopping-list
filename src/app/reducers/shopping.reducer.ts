import { Action } from '@ngrx/store';
import { Shopping } from './../models/shopping.model';
import * as ShoppingActions from './../actions/shopping.actions';

//defining the default state or the initial state
const defaultState: Shopping = {
    name: 'Default Shopping Item',

}
//defining the reducer function
export function ShoppingReducer(state: Shopping[] = [defaultState], action: ShoppingActions.Actions) {

  //switch statement that determines the type of action to return
    switch(action.type) {
        case ShoppingActions.ADD_ITEM:
            return [...state, action.payload];
        case ShoppingActions.DELETE_ITEM:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;
    }
}
