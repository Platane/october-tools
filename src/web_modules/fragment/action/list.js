

export const list = ( action, list = [] ) =>
    action.type == 'catchAction'
        ? [ action.payload, ...list ]
        : list

list.source = true
