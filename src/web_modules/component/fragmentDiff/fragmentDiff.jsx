import React, {PropTypes} from 'react'
import ObjectTree         from 'component/objectTree/main.jsx'

const FragmentDiff = ({ diff, nodeName }) => {
    const {after, before} = diff || {}

    return (

        <div className="fragmentDiff">
            <div className="fragmentDiff-name">{ nodeName }</div>
            <div className="fragmentDiff-body">

                <div className="fragmentDiff-afterState">
                    <ObjectTree object={ after }/>
                </div>

                <div className="fragmentDiff-beforeState">
                    <ObjectTree object={ before }/>
                </div>

            </div>
        </div>

    )
}

FragmentDiff.PropTypes = {
    nodeName : PropTypes.string.isRequired,
}

export default FragmentDiff
