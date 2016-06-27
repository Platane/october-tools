import {by_id as node_by_id}    from 'fragment/node'


export const id = ( action ) =>
    action.payload.id

id.actions = [ 'node:select' ]


export const node = ( id, node_by_id ) =>
    id && node_by_id[ id ]

node.dependencies = [ id, node_by_id ]
