

export const list = ( action, list ) =>
    [ ...list, action.payload ]


list.defaultValue = []
list.actions = [ 'catchAction' ]
