
export const changeIndex = ( graph, index ) =>
    graph.map( (_, i) => graph[ index[ i ] ].map( i => index[ i ] ) )

export const clone = graph =>
    graph.map( arc => arc.slice() )
