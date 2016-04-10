import React, {PropTypes} from 'react'

const Arc = ({ A, B, k }) =>
(
    <g className="flow-arc">
        <line x1={A.x} x2={  k*B.x + (1-k)*A.x } y1={A.y} y2={ k*B.y + (1-k)*A.y } />
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
    k       : PropTypes.number.isRequired,
}

export default Arc
