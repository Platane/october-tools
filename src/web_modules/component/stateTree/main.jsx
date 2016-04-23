import StateTree        from './stateTree.jsx'
import {connect}        from 'component/abstract/connect.jsx'

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
