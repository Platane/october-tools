import React, {PropTypes} from 'react'

const toSvgPath = path =>
    `M ${path[0].x} ${path[0].y}`
    + path.slice(1).map( p => `L ${p.x} ${p.y}`).join(' ')

const truncatePath = (path, k) => {
    const u = k*(path.length-1)
    const h = u % 1
    const n = 0|u

    const tPath = path.slice( 0, n+1 )

    n < path.length-1 && tPath.push({
        x : path[ n ].x * ( 1-h ) + path[ n+1 ].x * h,
        y : path[ n ].y * ( 1-h ) + path[ n+1 ].y * h,
    })

    return tPath
}

const Arc = ({ path, k }) =>
(
    <g className="flow-arc">
        <path className="flow-arc-path" d={ toSvgPath( truncatePath( path, k ) ) } />
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
