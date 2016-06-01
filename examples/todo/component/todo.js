import React, {PropTypes, Component} from 'react'
import TodoMain     from './todoMain/main'
import TodoFooter   from './todoFooter/main'
import TodoHeader   from './todoHeader/main'

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
