
export const by_id = ( action ) =>
    action.payload.node_by_id

by_id.actions = [ 'node:init' ]
by_id.defaultValue = {}



export const list = ( by_id ) =>
    Object.keys( by_id ).map( id => by_id[id] )

list.dependencies = [ by_id ]
