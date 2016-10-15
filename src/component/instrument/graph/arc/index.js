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

const toSvgPath = path =>
    `M ${path[0].x} ${path[0].y}`
    + path.slice(1).map( p => `L ${p.x} ${p.y}`).join(' ')

const Arc = ({ path, color }) =>
(
    <g className="arc">
        <path className="arc-path" stroke={ color } d={ toSvgPath( path ) } />
        <path className="arc-arrow" fill={ color } d={ arrowHead( path[ path.length-2 ], path[ path.length-1 ], 10, 8 ) } />
        { path.map( (p, i) => <circle key={i} cx={p.x} cy={p.y} r={1} fill="#aaa" /> ) }
    </g>
)

Arc.PropTypes = {
    path : PropTypes.arrayOf(
        PropTypes.shape({
            x       : PropTypes.number.isRequired,
            y       : PropTypes.number.isRequired,
        })
    )
}

module.exports = Arc
