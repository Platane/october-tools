import Graph        from './graph.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.graph.roundedGraph, root.graph.largeViewport ]
    ,

    ( graph, viewport ) =>
        ({ graph, viewport })
    ,

    Graph
)
