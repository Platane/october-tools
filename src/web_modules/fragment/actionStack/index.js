

export const list = ( action, list ) =>
    [ action.payload, ...list ]


list.defaultValue = []
list.actions = [ 'catchAction' ]
