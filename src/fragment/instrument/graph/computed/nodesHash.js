import nodes            from '../nodes'
import graph            from 'fragment/core/fragments/by_name'

const nodesHash = ( graph, nodes ) =>
    nodes && Object.keys( nodes )
        .map( name => graph[ name ].index )
        .sort()
        .join('|')

nodesHash.dependencies = [ graph, nodes ]
nodesHash.stateless    = true

module.exports = nodesHash
