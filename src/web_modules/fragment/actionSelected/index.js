import * as _action     from 'fragment/action'
import * as node        from 'fragment/nodeSelected'
import {diff as computeDiff, nest, shortenPath}    from 'utils/object'

export const id = ( action ) =>
    action.payload.id

id.actions = [ 'action:select' ]





export const action = ( id, actionList ) =>
    actionList.find( x => id == x.id )

action.dependencies = [ id, _action.list ]




export const state = ( nodeId, action ) =>
    !action
        ? null
        : nest(
            !nodeId
                ? action.afterState
                : action.afterState[ nodeId ]
        )

state.dependencies = [ node.id, action ]


/**
 *
 * diff stucture is
 * a : {
 *    b : {
 *       before : x
 *       after  : y
 *
 */
export const diff = ( nodeId, action ) => {

    if ( !action )
        return

    else if ( nodeId )
        return action.afterState[ nodeId ] == action.beforeState[ nodeId ]
            ? null
            : nest({
                before  : action.beforeState[ nodeId ],
                after   : action.afterState[ nodeId ],
            })

    else {
        const diff = {}
        Object.keys( action.beforeState )
            .filter( nodeId => action.afterState[ nodeId ] != action.beforeState[ nodeId ] )
            .forEach( nodeId =>
                diff[ nodeId ] = {
                    before  : action.beforeState[ nodeId ],
                    after   : action.afterState[ nodeId ],
                }
            )


        const o = nest( diff )

        // ensure that for each before, there is an after
        // which is a shitty pattern yeah
        const traverse = o => {

            if ( !o || typeof o != 'object' )
                return

            if ( 'after' in o && !( 'before' in o ) )
                o.before = typeof o.after == 'object' ? {} : null

            else if ( 'before' in o && !( 'after' in o ) )
                o.after = typeof o.before == 'object' ? {} : null

            Object.keys( o )
                .forEach( key => traverse( o[ key ] ) )
        }

        traverse( o )

        return o
    }
}

diff.dependencies = [ node.id, action ]
