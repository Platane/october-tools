import {list}           from './list'

const computeChange = ( A, B ) => {

    const change = {}

    Object.keys( A )
        .filter( key => B[ key ] != A[ key ] )
        .forEach( key => change[ key ] = true )

    return change
}

export const change = ( list, previous={} ) => {
    const by_id = {...previous}
    list
        .filter( x => !( x.id in by_id ) )
        .forEach( x => by_id[ x.id ] = computeChange( x.beforeState, x.afterState ) )

    return by_id
}

change.dependencies = [ list ]
