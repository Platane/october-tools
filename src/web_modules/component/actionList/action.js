import React, {PropTypes}   from 'react'
import ObjectTree           from 'component/objectTree/main'

const Action = ({ id, action, selected,   selectAction }) =>
(
    <div className={'action'+( selected ? ' action--selected' : '')} onClick={ () => selectAction( id ) } >

        <div className="action-type">{ action.type }</div>

        <div className="action-payload">
            <ObjectTree object={ action.payload || {}  } />
        </div>

    </div>
)

Action.PropTypes = {
    action: PropTypes.shape({
        type    : PropTypes.string.isRequired,
        payload : PropTypes.object,
    })
}

export default Action
