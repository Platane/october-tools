import React, {PropTypes, Component} from 'react'
import TodoList     from './todoList/main.jsx'
import TodoControl  from './todoControl/main.jsx'

const Todo = () =>
(
    <div>
        <TodoList />
        <TodoControl />
    </div>
)

export default Todo
