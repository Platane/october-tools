import {connect}            from 'component/abstract/connect'
import * as action          from 'action'
import Root                 from './root'
import treeState            from './treeState'




module.exports = connect(

    root => [ root.core.nestedState, root.core.stepSelected.state, root.core.fragmentSelected.name ],

    ( nestedState, state, fragmentSelectedName ) => ({
        value                   : state && state.current,
        outdated                : state && state.outdated,
        tree                    : nestedState,
        fragmentSelectedName    : fragmentSelectedName,
    }),

    {
        selectFragment: ( dispatch, fragmentName ) =>
            dispatch( action.selectFragment( fragmentName ))
    },

    treeState( Root )
)
