import FlowAnimator from './flowAnimator.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.flow.schedule, root.flow.source  ]
    ,

    ( schedule, source ) =>
        ({ ...schedule, source })
    ,

    {}
    ,

    FlowAnimator
)
