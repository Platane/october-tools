import React, {PropTypes} from 'react'

const Arc = ({ A, B, x }) =>
(
    <g>
        <line x1={A.x} x2={  x*B.x + (1-x)*A.x } y1={A.y} y2={ x*B.y + (1-x)*A.y } stroke="red" strokeWidth="0.2" />
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
    x       : PropTypes.number.isRequired,
}

export default Arc
