import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { ToDoListReducer } from './reducers/ToDoListReducer'

const reducer = combineReducers({
    toDoList: ToDoListReducer
});

const initialState = {
    todo: [
        {id: 1, title: 'Fixing bugs', about: 'fixing bugs in react native project and make it work', date: Date.now()},
        {id: 2, title: 'Fixing bugs inside telecom', about: 'fixing bugs in uztelecom project, finish it as quick as possible', date: Date.now()}
    ]
}

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));