import React, {PropTypes} from 'react'

const FragmentDiff = ({ diff, fragmentId }) =>
(

    <div className="fragmentDiff">
        { fragmentId }
    </div>

)

FragmentDiff.PropTypes = {
    fragmentId : PropTypes.string.isRequired,
}

export default FragmentDiff
