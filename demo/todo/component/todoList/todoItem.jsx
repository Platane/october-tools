import React, {PropTypes, Component} from 'react'

const TodoItem = ({ id, label, remove }) =>
(
    <li>
        <div className="view">
            <input type="checkbox" className="toggle" />
            <label>{ label }</label>
            <button className="destroy" onClick={ () => remove(id) } />
        </div>
        <input className="edit" value={ label } />
    </li>
)

export default TodoItem
