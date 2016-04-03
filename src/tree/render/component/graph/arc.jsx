import React, {PropTypes} from 'react'

const Arc = ({ A, B }) =>
(
    <g className="node">

    </g>
)

Arc.PropTypes = {
    A   : PropTypes.shape({
        x       : PropTypes.number.isRequired,
        y       : PropTypes.number.isRequired,
    }),
    B   : PropTypes.shape({
        x       : PropTypes.number.isRequired,
        y       : PropTypes.number.isRequired,
    }),
}

export default Arc
