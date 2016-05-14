import React, {PropTypes} from 'react'
import Node     from './node.jsx'
import Arc      from './arc.jsx'
import Flow     from './flow/main.jsx'

const clickOnGraph = onClick =>
    event =>
        event.target.nodeName.toLowerCase() == 'svg'
            && onClick()

const Graph = ({ viewport, nodes, arcs, selected,     selectNode }) =>
(

    <svg
        className="graph"
        onClick={ clickOnGraph( () => selectNode() ) }
        viewBox={`${viewport.xMin} ${viewport.yMin} ${viewport.xMax-viewport.xMin} ${viewport.yMax-viewport.yMin}` } >

        { arcs.map( (points,i) => <Arc key={i} path={points} /> ) }

        { nodes.map( (node,i) => <Node key={i} {...node } selected={ selected==node.name } selectNode={ selectNode } /> ) }

        <Flow duration={1000}/>
    </svg>
)

Graph.PropTypes = {
    nodes : PropTypes.arrayOf(
        PropTypes.shape({
            x       : PropTypes.number.isRequired,
            y       : PropTypes.number.isRequired,
            name    : PropTypes.string.isRequired,
        })
    ).isRequired,

    arcs : PropTypes.arrayOf(
        PropTypes.shape({
            points  : PropTypes.arrayOf(
                PropTypes.shape({
                    x       : PropTypes.number.isRequired,
                    y       : PropTypes.number.isRequired,
                })
            )
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
