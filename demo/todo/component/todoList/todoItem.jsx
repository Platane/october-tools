import React, {PropTypes, Component} from 'react'

const TodoItem = ({ id, label, finished, remove, setFinish }) =>
(
    <li className={ finished ? 'completed' : '' }>
        <div className="view">
            <input type="checkbox" className="toggle" checked={finished} onChange={ () => setFinish(id,!finished) } />
            <label>{ label }</label>
            <button className="destroy" onClick={ () => remove(id) } />
        </div>
        <input className="edit" readOnly value={ label } />
    </li>
)

export default TodoItem
