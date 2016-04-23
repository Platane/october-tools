import {list}                   from './list'
import {diff as comupteDiff, nest, shortenPath}    from 'utils/object'

export const diff = ( list, previous={} ) => {
    const by_id = {...previous}
    list
        .filter( x => !by_id[ x.id ] )
        .forEach( x => by_id[ x.id ] = shortenPath( comupteDiff( nest(x.beforeState), nest(x.afterState) ) ) )

    return by_id
}

diff.dependencies = [ list ]
