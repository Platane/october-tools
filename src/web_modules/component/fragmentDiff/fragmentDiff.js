import React, {PropTypes} from 'react'
import ObjectTreeDiff         from './objectTreeDiff/main'

const FragmentDiff = ({ diff }) => {

    return (

        <div className="fragmentDiff">

            <div className="fragmentDiff-afterState">
                {
                    diff
                        ? <ObjectTreeDiff object={ diff }/>
                        : <div className="objectTree-diff">no change</div>
                }
            </div>

        </div>

    )
}

export default FragmentDiff
