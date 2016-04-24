import * as _action     from 'fragment/action'
import * as node        from 'fragment/nodeSelected'
import {diff as computeDiff, nest, shortenPath}    from 'utils/object'

export const id = ( action ) =>
    action.payload.id


id.defaultValue = null
id.actions = [ 'action:select' ]


export const state = ( actionId, nodeId, actionList, actionState ) =>
    nodeId
        ? (( actionList.find( x => actionId == x.id ) || {} ).afterState || {} )[ nodeId ]
        : actionState[ actionId ] || {}


state.dependencies = [ id, node.id, _action.list, _action.state ]


export const diff = ( actionId, nodeId, actionDiff ) => {
    let diff = actionDiff[ actionId ]
    const path = nodeId
        ? nodeId.split('.')
        : []

    while( path.length ){
        const i = path.shift()
        typeof diff == 'object' && diff && i in diff
            ? diff = diff[ i ]
            : diff = null
    }

    return diff
}

diff.dependencies = [ id, node.id, _action.diff ]


export const change = ( id, actionChange ) =>
    actionChange[ id ] || {}

change.dependencies = [ id, _action.change ]


export const action = ( id, actionList ) =>
    actionList.find( x => id == x.id )

action.dependencies = [ id, _action.list ]
