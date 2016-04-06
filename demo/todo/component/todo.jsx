import React, {PropTypes, Component} from 'react'
import TodoMain     from './todoMain/main.jsx'
import TodoFooter   from './todoFooter/main.jsx'
import TodoHeader   from './todoHeader/main.jsx'

const Todo = () =>
(
    <div id="todo">
        <section className="todoapp">
            <TodoHeader />
            <TodoMain />
            <TodoFooter />
        </section>
    </div>
)

export default Todo
