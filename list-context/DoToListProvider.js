import ToDoListContext from "./toDoList-context";
import React, {useReducer} from "react";

const defaultTodoState = {
    items: [
        {id: 1, title: 'Fixing bugs', about: 'fixing bugs in react native project and make it work', date: Date.now()},
        {id: 2, title: 'Fixing bugs inside telecom', about: 'fixing bugs in uztelecom project, finish it as quick as possible', date: Date.now()}
    ],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const toDoList = state.items;
        toDoList.push(action.item);
        return {
            items: toDoList
        }
    }
    if (action.type === 'REMOVE') {
        const updatedItems = state.items.filter(item => item.id !== action.id);
        return {
            items: updatedItems
        }
    }
    if (action.type === 'CLEAR'){
        return defaultTodoState
    }
    return defaultTodoState;
}
const TodoProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultTodoState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }
    const clearCartHandler = (id) => {
        dispatchCartAction({type: 'CLEAR'})
    }

    const cartContext = {
        items: cartState.items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler,

    }
    return (
        <ToDoListContext.Provider value={cartContext}>
            {props.children}
        </ToDoListContext.Provider>
    )
}
export default TodoProvider;