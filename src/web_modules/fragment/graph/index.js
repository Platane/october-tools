import {step, viewport as computeViewport } from 'compute/graph'

export const graph = ( action, graph ) => {

    switch( action.type ){
        case 'graph:step' :
            return step( graph )
        case 'graph:init' :
            return action.payload.graph
    }
}
graph.defaultValue = []
graph.actions = [ 'graph:step', 'graph:init' ]



const round = x => Math.round( x * 10 ) / 10
export const roundedGraph = ( graph ) =>
    graph.map( p => ({ ...p, x:round(p.x), y:round(p.y) }) )
roundedGraph.dependencies = [ graph ]



export const viewport = ( graph ) =>
    computeViewport( graph )
viewport.dependencies = [ roundedGraph ]

export const largeViewport = ( viewport ) => ({
    xMax: viewport.xMax + 20,
    xMin: viewport.xMin - 20,
    yMax: viewport.yMax + 20,
    yMin: viewport.yMin - 20,
})
largeViewport.dependencies = [ viewport ]
