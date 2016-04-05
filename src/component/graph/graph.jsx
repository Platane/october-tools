import React, {PropTypes} from 'react'
import Node     from './node.jsx'
import Arc      from './arc.jsx'

const width     = window.innerWidth * 0.6
const height    = window.innerHeight
const Graph = ({ graph, viewport }) =>
(

    <svg viewBox={`${viewport.xMin} ${viewport.yMin} ${viewport.xMax-viewport.xMin} ${viewport.yMax-viewport.yMin}`} width={width} height={height} >

        {
            graph.reduce( (arcs,B) =>
                [
                    ...arcs,
                    ...B.arc.map( a => <Arc key={B.name+'-'+graph[a].name} {...{ B, A:graph[a] } }/>  )
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
