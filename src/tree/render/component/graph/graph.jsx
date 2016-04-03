import React, {PropTypes} from 'react'
import Node     from './node.jsx'
import Arc      from './arc.jsx'

const Graph = ({ graph }) =>
(

    <svg>
        { graph.map( node => <Node key={node.name} {...node }/> ) }

        {
            graph.reduce( (arcs,A) =>
                [
                    ...arcs,
                    ...A.arc.map( B => <Arc key={A.name+'-'+B.name} {...{ A, B } }/>  )
                ],
                []
            )
        }
    </svg>
)

Graph.PropTypes = {
    graph : PropTypes.arrayOf(
        PropTypes.shape({
            name    : PropTypes.string.isRequired,
            arc     : PropTypes.arrayOf( PropTypes.number ).isRequired,
        })
    ).isRequired,
}

export default Graph
