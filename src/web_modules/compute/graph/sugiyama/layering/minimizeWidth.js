import sort                 from '../../topologicalOrdering/kahn'
import {addDummy}           from './addDummy'
import {changeIndex, clone} from '../../basic'



// assuming the graph is topologicaly sorted
const arcRedundancy = ( sorted_graph, A, B, X=A ) =>
    X == B ||
        ( B > X
            ? false
            : sorted_graph[X].some( X => X!=A && arcRedundancy( sorted_graph, A, B, X ) )
        )

const transitiveReduction = sorted_graph =>
    sorted_graph.forEach( (arc, A) => {

        for( let i = arc.length; i --; )
            arcRedundancy( sorted_graph, A, arc[i] ) && arc.splice( i, 1 )
    })


export const layerize = graph => {

    const sort_index    = sort( graph )
    const _sort_index   = []
    sort_index.forEach( (i,j) => _sort_index[i] = j )

    // sort the graph
    const sorted_graph = changeIndex( graph, sort_index )

    // remove redundant arc
    transitiveReduction( sorted_graph )

    const n = Math.ceil( Math.sqrt( graph.length ) )

    const layers = layering_fixedWidth( sorted_graph, n )

    layers.map( arr => arr.map( i => _sort_index[ i ] ) )

    addDummy( layers, clone( graph ) )
}



// assuming the graph is topologicaly sorted
//   ( = if A in before B in the list, B can't be a dependency for A )
const layering_fixedWidth = ( sorted_graph, width ) =>
    sorted_graph.reduce( (layers, _, b) => {

        const last = layers[ layers.length-1 ]

        if ( !last || last.length >= width || last.some( a => sorted_graph[ a ].some( k => b == k) ) )
            layers.push( [b] )

        else
            last.push( b )

        return layers
    }, [] )
