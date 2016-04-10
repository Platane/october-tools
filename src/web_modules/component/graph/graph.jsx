import React, {PropTypes} from 'react'
import Node     from './node.jsx'
import Arc      from './arc.jsx'
import Flow     from './flow/main.jsx'

const Graph = ({ graph, viewport, position, selected,     selectNode }) =>
(

    <svg className="graph" viewBox={`${viewport.xMin} ${viewport.yMin} ${viewport.xMax-viewport.xMin} ${viewport.yMax-viewport.yMin}`} >

        {
            graph.reduce( (list, {arc}, i) =>
                [
                    ...list,
                    ...arc.map( (path, j) => <Arc key={i+':'+j} path={ path } />  )
                ],
                []
            )
        }

        <Flow />

        { graph.map( node => <Node key={node.name} {...node } selected={ selected==node.name } selectNode={ selectNode } /> ) }


    </svg>
)

Graph.PropTypes = {
    graph : PropTypes.arrayOf(
        PropTypes.shape({
            name    : PropTypes.string.isRequired,
            arc     : PropTypes.arrayOf(
                PropTypes.array.isRequired
            ).isRequired,
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
