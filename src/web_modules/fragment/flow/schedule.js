import * as node   from 'fragment/node'
import {graph}                  from 'fragment/drawableGraph'
import {action}                 from 'fragment/actionSelected'
import {edgeLength}             from './edgeLength'
import {source}                 from './source'

/**
 *
 * @param source      {number[]}            list of node ( represented as index in the graph ) from which the flow start
 * @param graph       {number[]{b,length}}  successor graph, graph[A] = [B]  <=>  B is successor of A <=>  A -> B
 * @param filter      {object}              list of node concerned by the change ( other will be ignored )
 *
 * @return {object}    for each node ( which is in the filter ) the length of longuest line to go from any source to the node
 *
 */
const longuestLine = ( source, graph, filter ) => {

    const longuestLine = []

    const traverse = ( A, length ) => {

        if ( A in longuestLine && longuestLine[ A ] >= length )
            return

        longuestLine[ A ] = length

        graph[ A ]
            // the node is concerned
            .filter( x => filter[ x.b ] )

            // set the longuest line value for the node, loop
            .forEach( x => traverse( x.b, length+x.length ) )
    }

    source
        .forEach( S => traverse( S, 0 ) )

    return longuestLine
}


export const schedule = ( edgeLength, {edges, vertices}, source, action, node_by_id ) => {

    // the node that have changed, indexed by index
    const change = []
    Object.keys( action && action.afterState || {} )
        .filter( nodeId => action.afterState[ nodeId ] != action.beforeState[ nodeId ] )
        .forEach( nodeId => change[ node_by_id[ nodeId ].index ] = true )

    // for each node that have changed, the longuest line to go from a source to it
    const l = longuestLine( source, edgeLength, change )

    // list all the branches triggered by the action
    // sorted by temporality ( branches at step[n+1] are used after the ones at step[n] )
    const branch = []
    edges
        .forEach( (arcs, A) =>

            change[ A ] && arcs
                .filter( ({b}) => change[ b ] )
                .forEach( ({b,points}) =>
                    branch
                        .push({
                            points,
                            ka: l[ A ],
                            kb: l[ A ] + edgeLength[ A ].find( x => x.b == b ).length,
                        })

                )
        )

    branch.sort( (a,b) => a.ka < b.ka ? 1 : -1 )




    const node = change
        .map( (changed, A) => changed && { a: A, k: l[ A ], ...vertices[ A ] } )
        .filter( x => x )
        .sort( (a,b) => a.k < a.k ? 1 : -1 )

    return { branch, node }
}
schedule.dependencies = [ edgeLength, graph, source, action , node.by_id ]
