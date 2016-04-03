import React, {PropTypes, Component} from 'react'
import TodoItem from './todoItem.jsx'

const TodoList = ({ todos, remove, setFinish }) =>
(
    <div>
        {
            todos.map( todo =>
                <TodoItem key={todo.id} {...todo} />
            )
        }
    </div>
)

export default TodoList
