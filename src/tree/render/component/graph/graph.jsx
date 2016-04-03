import React, {PropTypes} from 'react'
import Node     from './node.jsx'
import Arc      from './arc.jsx'

const width     = window.innerWidth
const height    = window.innerHeight
const Graph = ({ graph, viewport }) =>
(

    <svg viewBox={`${viewport.xMin} ${viewport.yMin} ${viewport.xMax-viewport.xMin} ${viewport.yMax-viewport.yMin}`} width={width} height={height} >

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

    viewport: PropTypes.shape({
        xMax    : PropTypes.number.isRequired,
        yMax    : PropTypes.number.isRequired,
        xMin    : PropTypes.number.isRequired,
        yMin    : PropTypes.number.isRequired,
    }).isRequired,
}

export default Graph
