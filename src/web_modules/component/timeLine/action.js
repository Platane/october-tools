import React, {PropTypes}   from 'react'

const Action = ({ id, action, selected,   selectAction }) =>
(
    <div className={'timeLineAction'+( selected ? ' timeLineAction--selected' : '')} onClick={ () => selectAction( selected ? null : id ) } >

        <div className={'timeLineAction-ball timeLineAction-ball--'+action.type.replace(/\W:/,'')+( selected ? ' timeLineAction-ball--selected' : '')} />

        <div className="timeLineAction-type">{ action.type }</div>

    </div>
)

Action.PropTypes = {
    action: PropTypes.shape({
        type    : PropTypes.string.isRequired,
    })
}

export default Action
