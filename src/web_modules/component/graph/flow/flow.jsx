import React, {PropTypes} from 'react'
import Arc      from './arc.jsx'

const Flow = ({ branch, position, x, source }) =>
(

    <g>
        {
            branch.slice(0, Math.ceil( x ) )
                .reduce( (arr, branches, k) =>
                    [
                        ...arr,
                        ...branches.map( ({a, b}) =>
                            <Arc key={ a+'-'+b } A={ position[ a ] } B={ position[ b ] } x={ x >= k+1 ? 1 : x%1 } />
                        )
                    ]
                    ,
                    []
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

    x    : PropTypes.number.isRequired,

    position: PropTypes.arrayOf(
        PropTypes.shape({
            x    : PropTypes.number.isRequired,
            y    : PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default Flow
