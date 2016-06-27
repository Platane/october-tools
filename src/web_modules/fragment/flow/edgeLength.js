import {graph}      from 'fragment/drawableGraph'

const d = ( a, b ) => {
    const x = a.x - b.x
    const y = a.y - b.y
    return Math.sqrt( x*x + y*y )
}


export const edgeLength = ( graph ) =>
    graph.edges.map( x =>
        x.points.reduce( (sum, p,i,arr) =>
            i==0
                ? sum
                : sum + d( p, arr[i-1] )
        ,0)
    )
edgeLength.dependencies = [ graph ]
