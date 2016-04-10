import FlowAnimator from './flowAnimator.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.flow.withPosition.schedule, root.flow.withPosition.source  ]
    ,

    ( schedule, source ) =>
        ({ ...schedule, source })
    ,

    {}
    ,

    FlowAnimator
)
