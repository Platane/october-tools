

export const list = ( action, list ) =>
    [ action.payload, ...list ]


list.defaultValue = []
list.actions = [ 'catchAction' ]



const computeChange = ({ beforeState, afterState }) => {

    const changed = {}

    Object.keys( beforeState )
        .filter( key => afterState[ key ] != beforeState[ key ] )
        .forEach( key => changed[ key ] = true )

    return changed
}

export const listWithChange = ( list, previous ) =>
    list.map( x =>
        previous.find( ({id}) => id == x.id ) || { ...x, change: computeChange( x ) }
    )

listWithChange.dependencies = [ list ]
