import React from "react";

const ToDoListContext = React.createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (item) => {},
    clearItems:  () => {}
});
export default ToDoListContext;