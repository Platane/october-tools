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

const Arc = ({ path }) =>
(
    <g className="arc">
        <path className="arc-path" d={ toSvgPath( path ) } />
        <path className="arc-arrow" d={ arrowHead( path[ path.length-2 ], path[ path.length-1 ], 3, 2 ) } />
        { path.map( (p, i) => <circle key={i} cx={p.x} cy={p.y} r={0.5} fill="#aaa" /> ) }
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

export default Arc
