import React, {PropTypes, Component} from 'react'
import TodoItem from './todoItem'

const TodoList = ({ todos, remove, setFinish }) =>
(
    <ul className="todo-list">
        {
            todos.map( todo =>
                <TodoItem key={todo.id} {...{...todo, remove, setFinish}} />
            )
        }
    </ul>
)

export default TodoList
