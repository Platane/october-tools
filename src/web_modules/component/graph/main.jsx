import Graph        from './graph.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [
        root.drawableGraph.graph,
        root.nodeSelected.id,
        root.drawableGraph.viewport.boundingBox,
        root.drawableGraph.viewport.center,
        root.drawableGraph.viewport.zoom,
        root.drawableGraph.viewport.ratio,
    ]
    ,

    ( graph, selected, viewport, viewportCenter, viewportZoom, viewportRatio ) =>
        ({
            nodes   : graph.vertices,
            arcs    : [].concat( ...graph.edges.map( x => x.map( x => x.points ) ) ),
            viewport,
            viewportCenter,
            viewportZoom,
            viewportRatio,
            selected
        })
    ,

    {
        selectNode : ( dispatch, getValue, id ) =>
            dispatch( {type:'node:select', payload:{ id }} )
        ,

        setViewportCenter : ( dispatch, getValue, point ) =>
            dispatch( {type:'graph:viewport:center:set', payload:point } )
        ,

        setViewportZoom : ( dispatch, getValue, point ) =>
            dispatch( {type:'graph:viewport:zoom:set', payload:point } )
        ,
    }
    ,

    Graph
)
