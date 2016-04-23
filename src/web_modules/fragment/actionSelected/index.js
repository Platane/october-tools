import {list, state as actionState, change as actionChange, diff as diffChanged} from 'fragment/action'

export const id = ( action ) =>
    action.payload.id


id.defaultValue = null
id.actions = [ 'action:select' ]


export const state = ( id, state ) =>
    state[ id ] || {}

state.dependencies = [ id, actionState ]


export const change = ( id, change ) =>
    change[ id ] || {}

change.dependencies = [ id, actionChange ]


export const diff = ( id, diff ) =>
    diff[ id ]

diff.dependencies = [ id, diffChanged ]

export const action = ( id, list ) =>
    list.find( x => id == x.id )

action.dependencies = [ id, list ]
