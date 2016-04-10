import {position}    from 'fragment/drawableGraph'
import {source as source_}      from './source'
import {schedule as schedule_}    from './animatedPart'

export const schedule = ( {branch, node}, position ) =>
    ({
        branch  : branch.map( x => ({ ...x, path:x.path.map( i => position[ i ] ) }) ),
        node    : node.map( x => ({ ...x, ...position[ x.a ] }) )
    })
schedule.dependencies = [ schedule_, position ]

export const source = ( source, position ) =>
    source.map( x => position[ x ] )

source.dependencies = [ source_, position ]
