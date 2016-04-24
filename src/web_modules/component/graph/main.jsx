import Graph        from './graph.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.drawableGraph.merged.graph, root.drawableGraph.boundingBox, root.nodeSelected.id ]
    ,

    ( graph, viewport, selected ) =>
        ({ graph, viewport, selected })
    ,

    {
        selectNode : ( dispatch, getValue, id ) =>
            dispatch( {type:'node:select', payload:{ id }} )
    }
    ,

    Graph
)
