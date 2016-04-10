import React, {PropTypes} from 'react'

const arrowHead = (A, B, l, h) => {
    const vx = B.x - A.x
    const vy = B.y - A.y
    const d = Math.sqrt( vx*vx + vy*vy )

    return [
        'M', B.x, B.y,
        'L', B.x - vx/d*l + vy/d*h*0.5, B.y - vy/d*l - vx/d*h*0.5,
        'L', B.x - vx/d*l - vy/d*h*0.5, B.y - vy/d*l + vx/d*h*0.5,
        'Z'
    ].join(' ')
}
const Arc = ({ A, B }) =>
(
    <g className="arc">
        <line x1={A.x} x2={B.x} y1={A.y} y2={B.y} />
        <path fill="#aaa" d={ arrowHead( A, B, 3, 2 ) } />
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
