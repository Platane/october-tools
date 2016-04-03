import React, {PropTypes} from 'react'
import Graph from './graph.jsx'

const project = ( {x,y}, {xMax,yMax,xMin,yMin} ) => ({
    x : ( x - xMin ) / ( ( xMax - xMin ) || 1 ) * 500,
    y : ( y - yMin ) / ( ( yMax - yMin ) || 1 ) * 500,
})

const GraphViewport = ({ graph, viewport }) =>
    <Graph graph={ graph.map( p => ({ ...p, ...project( viewport, p ) }) )  } />



GraphViewport.PropTypes = {
    graph : PropTypes.arrayOf(
        PropTypes.shape({
            x       : PropTypes.number.isRequired,
            y       : PropTypes.number.isRequired,
        })
    ).isRequired,

    viewport: PropTypes.shape({
        xMax    : PropTypes.number.isRequired,
        yMax    : PropTypes.number.isRequired,
        xMin    : PropTypes.number.isRequired,
        yMin    : PropTypes.number.isRequired,
    }).isRequired,
}

export default GraphViewport
