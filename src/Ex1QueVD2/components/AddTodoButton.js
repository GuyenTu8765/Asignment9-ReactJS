import store from "../redux/store";
import React from "react";
import addTodoAction from "./../redux/actionCreators/todoActionCreator";


class AddTodoButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }

  updateInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  handleAddTodo = () => {
    store.dispatch(addTodoAction(this.state.input));
    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <>
        <input onChange={this.updateInput} value={this.state.input} />
        <button onClick={this.handleAddTodo}>Add todo</button>
      </>
    );
  }
}

export default  AddTodoButton ;
