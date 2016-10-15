import nodesHash        from './nodesHash'
import cache            from './cache'

const layout = ( nodesHash, cache ) =>
    cache[ nodesHash ]

layout.dependencies = [ cache, nodesHash ]

module.exports = layout
