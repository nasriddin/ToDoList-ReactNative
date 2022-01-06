import { TODO_LIST_ADD } from '../constants/ToDoListConstants'

const defaultListState = {
    todo: [
        {id: 1, title: 'Fixing bugs', about: 'fixing bugs in react native project and make it work', date: Date.now()},
        {id: 2, title: 'Fixing bugs inside telecom', about: 'fixing bugs in uztelecom project, finish it as quick as possible', date: Date.now()}
    ]
}

export const ToDoListReducer = (state = {todo: []}, action) => {
    switch (action.type){
        case TODO_LIST_ADD:
            const toDoList = state.todo;
            toDoList.push(action.item);
            return toDoList;
    }

    return defaultListState;

}

