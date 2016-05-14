import Graph        from './graph.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.drawableGraph.graph, root.drawableGraph.boundingBox, root.nodeSelected.id ]
    ,

    ( graph, viewport, selected ) =>
        ({
            nodes   : graph.vertices,
            arcs    : [].concat( ...graph.edges.map( x => x.map( x => x.points ) ) ),
            viewport,
            selected
        })
    ,

    {
        selectNode : ( dispatch, getValue, id ) =>
            dispatch( {type:'node:select', payload:{ id }} )
    }
    ,

    Graph
)
