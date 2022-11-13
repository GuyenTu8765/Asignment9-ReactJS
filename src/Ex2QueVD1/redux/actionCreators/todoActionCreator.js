import { ADD_TODO } from "../actionType";

const addTodoAction = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

export default addTodoAction;
