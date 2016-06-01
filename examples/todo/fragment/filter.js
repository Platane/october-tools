
export const filter = ( action ) =>
    action.payload.filter

filter.actions = [ 'app:filter' ]
filter.initValue = 'all'
