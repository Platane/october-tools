

export const list = ( action, list ) =>
    [ action.payload, ...list ]

list.actions = [ 'catchAction' ]
list.initValue = []
