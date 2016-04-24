
export const id = ( action ) =>
    action.payload && action.payload.id

id.actions = [ 'node:select' ]
