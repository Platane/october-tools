import {connect}            from 'component/abstract/connect'
import * as action          from 'action'
import Root                 from './root'
import treeState            from './treeState'




module.exports = connect(

    root => [ root.core.nestedState, root.core.stepSelected.state ],

    ( nestedState, state ) => ({
        value       : state && state.current,
        outdated    : state && state.outdated,
        tree        : nestedState,
    }),

    {
        selectFragment: ( dispatch, fragmentName ) =>
            dispatch( action.selectFragment( fragmentName ))
    },

    treeState( Root )
)
