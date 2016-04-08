import FlowAnimator from './flowAnimator.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.graph.spacial.nodePosition, root.flow.source, root.flow.branch  ]
    ,

    ( position, source, branch ) =>
        ({ position, source, branch })
    ,

    {}
    ,

    FlowAnimator
)
