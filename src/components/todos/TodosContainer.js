import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => (
          <Todo key={i} text={todo} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }) => {
  return { todos };
};

export default connect(mapStateToProps)(TodosContainer);
