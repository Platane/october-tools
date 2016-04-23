import React, {PropTypes} from 'react'
import ObjectTree         from 'component/objectTree/main.jsx'

const StateTree = ({ state }) => {

    return (

        <div className="stateTree">
            <ObjectTree object={ state }/>
        </div>

    )
}

export default StateTree
