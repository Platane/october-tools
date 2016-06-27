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
const longuestLine = ( source, edges, edgeLength, filter ) => {

    const longuestLine = []

    const traverse = ( a, length ) => {

        if ( a in longuestLine && longuestLine[ a ] >= length )
            return

        longuestLine[ a ] = length

        edges
            .forEach( (x,i) => {

                if ( x.a == a && filter[ x.b ] )

                    traverse( x.b, length + edgeLength[ i ] )

            })
    }

    source
        .forEach( S => traverse( S, 0 ) )

    return longuestLine
}


export const schedule = ( edgeLength, {edges, vertices}, source, action, node_by_id, previous ) => {

    // quick return return empty schedule if no action selected
    if ( !action )
        return previous && previous.node.length == 0
            ? previous
            : { branch:[], node:[] }

    // the node that have changed, indexed by index
    const change = []
    Object.keys( action && action.afterState || {} )
        .filter( nodeId => action.afterState[ nodeId ] != action.beforeState[ nodeId ] )
        .forEach( nodeId => change[ node_by_id[ nodeId ].index ] = true )

    // for each node that have changed, the longuest line to go from a source to it
    const l = longuestLine( source, edges, edgeLength, change )

    // list all the branches triggered by the action
    // sorted by temporality ( branches at step[n+1] are used after the ones at step[n] )
    const branch = []
    edges
        .filter( ({a,b}) => change[ a ] && change[ b ] )
        .forEach( ({a,b,points}, i) =>
            branch
                .push({
                    points,
                    ka: l[ a ],
                    kb: l[ a ] + edgeLength[ i ],
                })

        )

    branch.sort( (a,b) => a.ka < b.ka ? 1 : -1 )



    const node = change
        .map( (changed, a) => changed && { a , k: l[ a ], ...vertices[ a ] } )
        .filter( x => x )
        .sort( (a,b) => a.k < a.k ? 1 : -1 )

    return { branch, node }
}
schedule.dependencies = [ edgeLength, graph, source, action , node.by_id ]
