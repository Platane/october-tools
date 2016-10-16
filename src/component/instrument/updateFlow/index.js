import {connect}            from 'component/abstract/connect'
import UpdateFlow           from './main'
import * as action          from 'action'

const last = arr => arr[ arr.length-1 ]

const compute = ( fragments_by_name, changed, action ) => {

    const index_by_name = {}

    const list = Object.keys( changed )
        .sort( (a,b) => fragments_by_name[ a ].index > fragments_by_name[ b ].index ? 1 : -1 )

    list.forEach( (name,i) => index_by_name[ name ] = i )

    const bridges = []

    bridges[0] = {
        i    : 0,
        from : 'action',
        to   : list
            .filter( name => {
                const f = fragments_by_name[ name ]

                return f.allActions || ( f.actions && f.actions.some( a => a == action.type ) )
            })
            .map( name => index_by_name[ name ] )
    }

    const next = {}
    list.forEach( A =>
        fragments_by_name[A].dependencies.forEach( B =>
            ( next[B] = next[B] || [] ).push( A )
        )
    )

    const free_column = [ last( bridges[0].to ) || 0 ]
    list.forEach( name => {

        if ( !next[ name ] )
            return


        // bridge starts at
        const a = index_by_name[ name ]

        // bridge ends at
        const bs = next[ name ].map( name => index_by_name[ name ] )
        const b  = last( bs )

        // get next free column
        const smallest_free = free_column.reduceRight( (smallest_free, b, i) => b<=a ? i : smallest_free , free_column.length )

        free_column[ smallest_free ] = b

        bridges.push({
            i    : smallest_free,
            from : a,
            to   : bs,
        })
    })



    return {
        max_concurency: free_column.length,
        bridges,
        list,
    }
}

module.exports = connect(

    root => [
        root.core.fragments.by_name,
        root.core.fragmentSelected.name,
        root.core.stepSelected.changed.by_name,
        root.core.stepSelected.action,
        root.core.stepSelected.outdated,
    ],

    ( fragments_by_name, fragmentSelectedName, changed, action, outdated ) => ({
        action,
        outdated,
        fragmentSelectedName,
        ...(
            action
                ? compute( fragments_by_name, changed, action )
                : { bridges : null, list: null }
        )
    }),

    {
        selectFragment: ( dispatch, fragmentName ) =>
            dispatch( action.selectFragment( fragmentName, 'updateFlow' ))
    },

    UpdateFlow
)
