import nodesHash        from './nodesHash'
import cache            from './cache'

const layout = ( cache, nodesHash ) =>
    cache[ nodesHash ]

layout.dependencies = [ cache, nodesHash ]
layout.stateless    = true

module.exports = layout
