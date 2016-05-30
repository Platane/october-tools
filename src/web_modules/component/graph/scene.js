import React, {PropTypes} from 'react'
import Node         from './node'
import Arc          from './arc'
import Flow         from './flow/main'

const clickOnGraph = onClick =>
    event =>
        event.target.nodeName.toLowerCase() == 'svg'
            && onClick()

const Scene = ({ viewport, nodes, arcs, selected,     selectNode }) =>
(
    <g>
        { arcs.map( (points,i) => <Arc key={i} path={points} /> ) }

        { nodes.map( (node,i) => <Node key={i} {...node } selected={ selected==node.name } selectNode={ selectNode } /> ) }

        <Flow duration={1000}/>
    </g>
)


export default Scene
