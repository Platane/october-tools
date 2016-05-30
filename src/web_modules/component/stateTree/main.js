import StateTree        from './stateTree'
import {connect}        from 'component/abstract/connect'

export default connect(

    root => [ root.actionSelected.state ]
    ,

    ( state ) =>
        ({ state })
    ,

    {}
    ,

    StateTree
)
