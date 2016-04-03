import React, {PropTypes} from 'react'
import Node     from './node.jsx'
import Arc      from './arc.jsx'

const Graph = ({ graph }) =>
(

    <svg>

        {
            graph.reduce( (arcs,A) =>
                [
                    ...arcs,
                    ...A.arc.map( b => <Arc key={A.name+'-'+graph[b].name} {...{ A, B:graph[b] } }/>  )
                ],
                []
            )
        }

        { graph.map( node => <Node key={node.name} {...node }/> ) }
        
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
