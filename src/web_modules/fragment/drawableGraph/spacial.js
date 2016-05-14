import * as node            from 'fragment/node'
import dagre                from 'dagre'


const computePosition = ( graph, nodeList ) => {

    const g = new dagre.graphlib.Graph

    g.setGraph({})

    g.setDefaultEdgeLabel( (a,b) => ({}) )

    graph
        .forEach( (arc,a) => g.setNode(''+a, { label: a, width: 1, height: 1 }) )

    graph
        .forEach( (arc,a) => arc.forEach( b => g.setEdge(''+a, ''+b) ) )

    g.nodesep = 4
    g.edgesep = 4
    g.ranksep = 4

    dagre.layout( g )


    const vertices = []
    g.nodes()
        .forEach( key => {
            const n = g.node(key)
            vertices[ +key ] = { x:n.x, y:n.y, name:nodeList[ +key ].id }
        })

    const edges = vertices.map( () => [] )
    g.edges()
       .forEach( e => edges[ +e.v ].push({ b:e.w, points: g.edge( e ).points }) )

    return { vertices, edges }
}

export const graph = ( graph, nodeList ) =>
    computePosition( graph, nodeList )
graph.dependencies = [ node.successorGraph, node.list ]
