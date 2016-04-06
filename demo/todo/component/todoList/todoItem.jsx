import React, {PropTypes, Component} from 'react'

const TodoItem = ({ label }) =>
(
    <li>
        <div className="view">
            <input type="checkbox" className="toggle" />
            <label>{ label }</label>
            <button className="destroy" />
        </div>
        <input className="edit" value={ label } />
    </li>
)

export default TodoItem
