import Graph        from './graph'
import {connect}    from 'component/abstract/connect'

export default connect(

    root => [
        root.node.list,
        root.drawableGraph.graph,
        root.nodeSelected.id,
        root.drawableGraph.viewport.translate,
        root.drawableGraph.viewport.scale,
    ]
    ,

    ( nodeList, graph, selected, translate, scale ) => {

        const proj = k =>
            ({
                ...k,
                x: k.x * scale + translate.x,
                y: k.y * scale + translate.y,
            })

        return ({
            nodes   : graph.vertices.map( (p,i) => ({ ...proj( p ), name:nodeList[i].id  }) ),
            arcs    : graph.edges.map( x => x.points.map( proj ) ),
            viewport_translate  : translate,
            viewport_scale      : scale,
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
