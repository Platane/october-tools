import {connect}            from 'component/abstract/connect'
import Diff                 from './diff'
import * as action          from 'action'
import treeState            from 'component/abstractTree/treeState'
import tree                 from 'component/abstractTree'
import {nest}               from 'util/object'

const rename = o => {
    const e = {}
    Object.keys(o).forEach( name => e[name] = name )
    return e
}

module.exports = connect(

    root => [
        root.core.fragmentSelected.name,
        root.core.stepSelected.changed.by_name,
        root.core.stepSelected.state,
    ],

    ( fragmentSelectedName, changed, state ) => ({

        tree : !state
            ? {}
            : fragmentSelectedName
                ? { fragmentSelectedName }
                : rename( changed )
        ,

        state,
    })
    ,

    {
        selectFragment: ( dispatch, fragmentName ) =>
            dispatch( action.selectFragment( fragmentName, 'diff' ))
    },

    treeState( tree( Diff ) )
)
