
export const selected = ( action ) =>
    action.payload.id

selected.defaultValue = null
selected.actions = [ 'node:select' ]
