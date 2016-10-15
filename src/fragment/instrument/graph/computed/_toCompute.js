import nodes            from '../nodes'
import nodesHash        from './nodesHash'
import cache            from './cache'
import graph            from 'fragment/core/fragments/by_name'

const pruneGraph = ( graph, nodes ) => {
    const g = {}
    Object.keys( graph )
        .filter( name => nodes[ name ] )
        .forEach( name =>
            g[ name ] = graph[ name ].dependencies.filter( name => nodes[ name ] )
        )
    return g
}

const _toCompute = ( graph, nodesHash, nodes, cache ) =>
    cache[ nodesHash ]
        ? []
        : [{
            nodesHash,
            graph       : pruneGraph( graph, nodes )
        }]

_toCompute.dependencies = [ graph, nodesHash, nodes, cache ]
_toCompute.stateless    = true

module.exports = _toCompute
