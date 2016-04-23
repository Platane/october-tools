import * as node   from 'fragment/node'
import {pathGraph, position}    from 'fragment/drawableGraph'
import {change}                 from 'fragment/actionSelected'
import {source}                 from './source'

/**
 *
 * @param source      {number[]}        list of node ( represented as index in the graph ) from which the flow start
 * @param graph       {number[][]}      successor graph, graph[A] = [B]  <=>  B is successor of A <=>  A -> B
 * @param filter      {object}          list of node concerned by the change ( other will be ignored )
 *
 * @return {object}    for each node ( which is in the filter ) the length of longuest line to go from any source to the node
 *
 */
const longuestLine = ( source, graph, filter ) => {

    const longuestLine = []

    const traverse = ( A, n ) => {

        if ( A in longuestLine && longuestLine[ A ] >= n )
            return

        longuestLine[ A ] = n

        graph[ A ]
            // the node is concerned
            .filter( B => filter[ B ] )

            // set the longuest line value for the node, loop
            .forEach( B => traverse( B, n+1 ) )
    }

    source
        .forEach( S => traverse( S, 0 ) )

    return longuestLine
}


export const schedule = ( graph, source, _change, node_by_id, pathGraph ) => {

    const change = []
    Object.keys( _change )
        .forEach( id => change[ node_by_id[ id ].index ] = true )

    const l = longuestLine( source, graph, change )

    // list all the branches triggered by the action
    // sorted by temporality ( branches at step[n+1] are used after the ones at step[n] )
    const branch = []
    pathGraph
        .forEach( (arcs, A) =>

            change[ A ] && arcs
                .forEach( path => {

                    const B = path[ path.length-1 ]
                    branch
                        .push({
                            A,B,
                            ka: l[ A ],
                            kb: l[ B ] || ( l[ A ] + 1 ),
                            path
                        })

                })
        )

    branch.sort( (a,b) => a.ka < a.kb ? 1 : -1 )




    const node = change
        .map( (changed, A) => changed && { a: A, k: l[ A ] } )
        .filter( x => x )
        .sort( (a,b) => a.k < a.k ? 1 : -1 )

    return { branch, node }
}
schedule.dependencies = [ node.successorGraph, source, change , node.by_id, pathGraph ]
