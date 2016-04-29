
export const filter = ( action, previousValue='all' ) => {

    switch( action.type ) {
        case 'app:filter' :
            return action.payload.filter

        default :
            return previousValue
    }
}
filter.source = true
