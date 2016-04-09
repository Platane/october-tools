import FlowAnimator from './flowAnimator.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.graph.spacial.nodePosition, root.flow.source, root.flow.schedule  ]
    ,

    ( position, source, schedule ) =>
        ({ position, source, branch:schedule.branch, node:schedule.node })
    ,

    {}
    ,

    FlowAnimator
)
