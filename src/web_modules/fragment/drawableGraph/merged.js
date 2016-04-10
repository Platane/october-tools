import * as node                from 'fragment/node'
import {position, pathGraph}    from './spacial'

export const graph = ( nodeList, position, pathGraph ) =>
    pathGraph.map( (arc, i) =>
        ({
            arc     : arc.map( path => path.map( i => position[ i ] ) ),
            name    : nodeList[ i ].id,
            ...position[ i ],
        })
    )

graph.dependencies = [ node.list, position, pathGraph ]
