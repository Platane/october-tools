import React, {PropTypes} from 'react'
import Node     from './node.jsx'
import Arc      from './arc.jsx'
import Flow     from './flow/main.jsx'

const Graph = ({ graph, viewport,   selected, selectNode }) =>
(

    <svg className="graph" viewBox={`${viewport.xMin} ${viewport.yMin} ${viewport.xMax-viewport.xMin} ${viewport.yMax-viewport.yMin}`} >

        {
            graph.reduce( (arcs,B) =>
                [
                    ...arcs,
                    ...B.arc.map( a => <Arc key={B.name+'-'+graph[a].name} {...{ B, A:graph[a] } }/>  )
                ],
                []
            )
        }

        { graph.map( node => <Node key={node.name} {...node } selected={ selected==node.name } selectNode={ selectNode } /> ) }

        <Flow />

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
