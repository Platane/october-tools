import React, {PropTypes} from 'react'
import Arc      from './arc.jsx'
import Node     from './node.jsx'

const Flow = ({ branch, node, position, k, source }) =>
(

    <g class="flow">

        {
            source
                .map( a =>
                    <Arc key={ 's'+a } A={ { x:position[ a ].x, y:position[ a ].y-10}  } B={ position[ a ] } k={ Math.min( k*2, 1) } />
                )
        }

        {
            branch
                .filter( ({ka}) => k-0.5 > ka  )
                .map( ({ a, b, ka, kb }) =>
                    <Arc key={ a+'-'+b } A={ position[ a ] } B={ position[ b ] } k={ Math.min( ( k -0.5 - ka )/( kb - ka ), 1) } />
                )
        }

        {
            node
                .map( n =>
                    <Node key={n.a} changed={ k-0.5 > n.k } { ...position[n.a] } />
                )
        }
    </g>
)

Flow.PropTypes = {
    branch : PropTypes.arrayOf(
        PropTypes.shape({
            a    : PropTypes.number.isRequired,
            b    : PropTypes.number.isRequired,
        })
    ).isRequired,

    source : PropTypes.arrayOf( PropTypes.number.isRequired ).isRequired,

    k    : PropTypes.number.isRequired,

    position: PropTypes.arrayOf(
        PropTypes.shape({
            x    : PropTypes.number.isRequired,
            y    : PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Flow
