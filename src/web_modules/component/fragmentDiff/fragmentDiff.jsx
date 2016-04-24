import React, {PropTypes} from 'react'
import ObjectTreeDiff         from './objectTreeDiff/main.jsx'

const FragmentDiff = ({ diff }) => {

    return (

        <div className="fragmentDiff">

            <div className="fragmentDiff-afterState">
                <ObjectTreeDiff object={ diff }/>
            </div>

        </div>

    )
}

export default FragmentDiff
