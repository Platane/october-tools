
export const by_id = ( action ) =>
    action.payload.node_by_id

by_id.actions = [ 'node:init' ]
by_id.initValue = {}


export const list = ( by_id ) => {
    const list = []
    Object.keys( by_id ).forEach( id => list[ by_id[id].index ] = by_id[id] )
    return list
}

list.dependencies = [ by_id ]


const extractGraph = ( node_by_id ) => {
    const graph = []
    Object.keys( node_by_id ).forEach( id =>
        graph[ node_by_id[ id ].index ] = node_by_id[ id ].next.map( id => node_by_id[id].index )
    )
    return graph
}

// successor graph
export const successorGraph = ( node_by_id ) =>
    extractGraph( node_by_id )

successorGraph.dependencies = [ by_id ]
