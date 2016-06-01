import React, {PropTypes, Component} from 'react'

const TodoHeader = ({ add }) => {

    const keyDown = event => {
        if ( event.which == 13 ){
            add( event.target.value )
            event.target.value = ''
        }
    }

    return (
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" onKeyDown={keyDown} />
        </header>
    )
}

export default TodoHeader
