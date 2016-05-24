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

    ( graph, selected, translate, scale ) => {

        const proj = k =>
            ({
                ...k,
                x: k.x * scale + translate.x,
                y: k.y * scale + translate.y,
            })

        return ({
            nodes   : graph.vertices.map( proj ),
            arcs    : [].concat( ...graph.edges.map( x => x.map( x => x.points.map( proj ) ) ) ),
            viewport_translate: translate,
            viewport_scale: scale,
            selected
        })
    }
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
