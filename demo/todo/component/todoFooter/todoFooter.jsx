import React, {PropTypes, Component} from 'react'

const TodoFooter = ({ count }) =>
(
    <footer className="footer">

        <span className="todo-count" >
            <strong>{ count }</strong>
            <span>{` item${ count>0 ? 's' : '' } left`}</span>
        </span>

        <ul className="filters" >
            <li>
                <a href="#/" className="selected">All</a>
            </li>
            <span> </span>
            <li>
                <a href="#/active" className="">Active</a>
            </li>
            <span> </span>
            <li>
                <a href="#/completed" className="">Completed</a>
            </li>
        </ul>
    </footer>
)

export default TodoFooter
