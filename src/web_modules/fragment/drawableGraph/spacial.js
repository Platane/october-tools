import * as node            from 'fragment/node'
import {computePosition, pathGraph as computePathGraph}    from 'sugiyama-graph-drawing'

const r = graph =>
    computePosition( graph )
r.dependencies = [ node.successorGraph ]

export const position = ( action, r, position = [] ) => {

    switch( action.type ){

        case 'graph:step' :
            return position
            // return step( graph, position )

        default :
            return r.position
    }
}
position.dependencies = [ r ]
position.source = true


export const graphWithDummy = r =>
    r.graph
graphWithDummy.dependencies = [ r ]


export const pathGraph = ( graph, nodeList ) =>
    computePathGraph( graph, nodeList.length )
pathGraph.dependencies = [ graphWithDummy, node.list ]
