import {connect}            from 'component/abstract/connect'
import * as action          from 'action'
import Leaf                 from './leaf'
import state                from './state'
import treeState            from 'component/abstractTree/treeState'
import tree                 from 'component/abstractTree'




module.exports = connect(

    root => [ root.core.fragments.tree, root.core.stepSelected.state, root.core.fragmentSelected.name ],

    ( nestedState, state, fragmentSelectedName ) => ({
        values                  : state && state.current,
        outdated                : state && state.outdated,
        tree                    : nestedState,
        fragmentSelectedName    : fragmentSelectedName,
    }),

    {
        selectFragment: ( dispatch, fragmentName ) =>
            dispatch( action.selectFragment( fragmentName, 'stateTree' ))
    },

    state( treeState( tree( Leaf ) ) )
)
