import {step}               from 'compute/graph'
import {graph as rawGraph}  from './raw'

export const nodePosition = ( action, graph, position={}, getValue, getPreviousValue ) => {

    switch( action.type ){

        case 'graph:step' :
            return step( graph, position )

        default :
            return graph.map( (n,i,arr) =>
                ({
                    x   : Math.cos( i/arr.length*6.28 +1 )*10,
                    y   : Math.sin( i/arr.length*6.28 +1 )*10,
                })
            )
    }
}
nodePosition.dependencies = [ rawGraph ]
nodePosition.actions = [ 'graph:step' ]



export const graph = ( graph, position ) =>
    graph.map( (n, i) =>
        ({
            ...n,
            ...position[ i ]
        })
    )
graph.dependencies = [ rawGraph, nodePosition ]
