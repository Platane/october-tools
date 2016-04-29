
export const id = ( action, id ) =>
    action.type == 'node:select'
        ? action.payload.id
        : id

id.source = true
