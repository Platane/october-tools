import React, {PropTypes, Component} from 'react'

const TodoControl = ({ count, add }) => {

    const keyDown = event => {
        if ( event.which == 13 ){
            add( event.target.value )
            event.target.value = ''
        }
    }

    return (
        <div>
            <div>{ count }</div>
            <input onKeyDown={keyDown} />
        </div>
    )
}

export default TodoControl
