import * as node from 'fragment/node'

const extractGraph = ( node_by_id ) => {
    const graph = []
    Object.keys( node_by_id ).forEach( id => {
        graph[ node_by_id[ id ].index ] = {
            name    : node_by_id[ id ].id,
            arc     : node_by_id[ id ].dependencies.map( id => node_by_id[id].index ),
            index   : node_by_id[ id ].index
        }
    })
    return graph
}

export const graph = ( node_by_id ) =>
    extractGraph( node_by_id )

graph.dependencies = [ node.by_id ]
