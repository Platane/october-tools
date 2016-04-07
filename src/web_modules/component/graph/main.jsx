import Graph        from './graph.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.graph.spacial.graph, root.graph.viewport.largeViewport, root.nodeSelected.selected ]
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
