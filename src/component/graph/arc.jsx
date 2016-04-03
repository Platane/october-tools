import React, {PropTypes} from 'react'

const Arc = ({ A, B }) =>
(
    <line x1={A.x} x2={B.x} y1={A.y} y2={B.y} stroke="#aaa" strokeWidth="0.1" />
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
