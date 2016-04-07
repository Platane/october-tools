import {step}               from 'compute/graph'
import {graph as rawGraph}  from './raw'

export const nodePosition = ( action, graph, position={}, getValue, getPreviousValue ) => {

    switch( action.type ){

        case 'graph:step' :
            return step( graph, position )

        default :
        {
            const position = {}
            graph.forEach( (n,i,arr) =>
                position[ n.name ] = {
                    x   : Math.cos( i/arr.length*6.28 +1 )*10,
                    y   : Math.sin( i/arr.length*6.28 +1 )*10,
                }
            )

            return position
        }
    }
}
nodePosition.dependencies = [ rawGraph ]
nodePosition.actions = [ 'graph:step' ]



export const graph = ( graph, position ) =>
    graph.map( n =>
        ({
            ...n,
            ...position[ n.name ]
        })
    )
graph.dependencies = [ rawGraph, nodePosition ]
