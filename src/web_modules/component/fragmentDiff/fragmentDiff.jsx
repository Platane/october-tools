import React, {PropTypes} from 'react'

const FragmentDiff = ({ diff, nodeName }) =>
(

    <div className="fragmentDiff">
        <div className="fragmentDiff-name">{ nodeName }</div>
    </div>

)

FragmentDiff.PropTypes = {
    nodeName : PropTypes.string.isRequired,
}

export default FragmentDiff
