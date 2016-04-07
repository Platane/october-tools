import React, {PropTypes} from 'react'
import Action      from './action.jsx'

const ActionList = ({ list, selectedId,    selectAction }) =>
(

    <div className="actionList">
        {
            list.map( action =>
                <div key={action.id} className="actionList-item" >
                    <Action {...action} selected={ selectedId == action.id } selectAction={ selectAction } />
                </div>
            )
        }
    </div>

)

ActionList.PropTypes = {
    action : PropTypes.arrayOf(
        PropTypes.shape({
            id    : PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default ActionList
