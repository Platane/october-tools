import graph            from 'fragment/core/fragments/by_name'

const cache = ( action, graph, cache, _graph ) => {

    if ( graph != _graph )
        // invalid the cache
        cache = {}

    if ( action.type == 'success-computeGraphLayout' )
        cache = { ...cache, [  action.payload.nodesHash ]: action.payload  }

    return cache
}
cache.actions      = [ 'success-computeGraphLayout' ]
cache.dependencies = [ graph ]
cache.initValue    = {}

module.exports = cache
