import React, {PropTypes} from 'react'
import ObjectTree         from 'component/objectTree/main.jsx'

const FragmentDiff = ({ diff }) => {

    return (

        <div className="fragmentDiff">

            <div className="fragmentDiff-afterState">
                <ObjectTree object={ diff }/>
            </div>

        </div>

    )
}

export default FragmentDiff
