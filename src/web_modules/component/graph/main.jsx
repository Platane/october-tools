import Graph        from './graph.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [
        root.drawableGraph.graph,
        root.nodeSelected.id,
        root.drawableGraph.viewport.translate,
        root.drawableGraph.viewport.scale,
    ]
    ,

    ( graph, selected, translate, scale ) =>
        ({
            nodes   : graph.vertices,
            arcs    : [].concat( ...graph.edges.map( x => x.map( x => x.points ) ) ),
            viewport_translate: translate,
            viewport_scale: scale,
            selected
        })
    ,

    {
        selectNode : ( dispatch, getValue, id ) =>
            dispatch( {type:'node:select', payload:{ id }} )
        ,

        translate : ( dispatch, getValue, point ) =>
            dispatch( {type:'graph:viewport:translate', payload:point } )
        ,

        scaleUp : ( dispatch, getValue, point ) =>
            dispatch( {type:'graph:viewport:scale:up', payload:point } )
        ,

        scaleDown : ( dispatch, getValue, point ) =>
            dispatch( {type:'graph:viewport:scale:down', payload:point } )
        ,
    }
    ,

    Graph
)
