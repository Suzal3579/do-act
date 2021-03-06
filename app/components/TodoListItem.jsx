import React from "react";
import momemt from "moment";
import { connect } from "react-redux";

import { toggleTodo, startToggleTodo } from "Actions";

class TodoListItem extends React.Component {
    render() {
        const { todoItem, dispatch } = this.props;
        const todoClassName = todoItem.completed ? "todo todo-completed" : "todo";
        const renderDate = () => {
            let message = "Created at - ";
            let timeStamp = todoItem.createdAt;
            if (todoItem.completed) {
                message = "Completed at - ";
                timeStamp = todoItem.completedAt;
            }
            return message + momemt.unix(timeStamp).format("MMM Do YYYY @ h:mm a");
        }

        return (
            <div className={todoClassName} onClick={() => { dispatch(startToggleTodo(todoItem.id, !todoItem.completed)) }}>
                <div>
                    <input type="checkbox" checked={todoItem.completed} onChange={() => { }} />
                </div>
                <div>
                    <p>{todoItem.text}</p>
                    <p className="todo-subtext">{renderDate()}</p>
                </div>
            </div>
        );
    }
}

export default connect()(TodoListItem);