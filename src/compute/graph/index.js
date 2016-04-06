
const force = ( A, B, fn ) => {
    const x = B.x-A.x
    const y = B.y-A.y
    const d = Math.max( 1, Math.sqrt( x*x + y*y ) )
    const f = Math.min( 10, fn( d ) )
    return {
        x: x/d * f,
        y: y/d * f,
    }
}


export const step = ( graph ) =>

    graph.map( (A,a) => {

        let ax=0
        let ay=0

        graph.forEach( (B,b) => {

            // contact
            const {x,y} = force( A, B, d => -200 / ( d* d ) )
            ax += x
            ay += y

            // arc
            const AarcB = A.arc.some( x => x == b )
            const BarcA = B.arc.some( x => x == a )
            if ( AarcB || BarcA ) {
                const {x,y} = force( A, B, d => - 0.014 * ( 30 - d ) )
                ax += x
                ay += y

                // order on y axis
                if ( AarcB ) {

                    // A should be at least 10 unit greater than B on the y axis

                    // should be 10 or more
                    let d = A.y - B.y

                    if( d < 10 )
                        ay += Math.min( 0.1 * ( 10 - d ), 100 )
                }
                if ( BarcA ){

                    // A should be at least 10 unit lower than B on the y axis

                    // should be 10 or more
                    let d = B.y - A.y

                    if( d < 10 )
                        ay += Math.min( 0.1 * ( d - 10 ), 100 )
                }
            }


        })

        const vx = ax
        const vy = ay

        const x=A.x + vx
        const y=A.y + vy

        // return { ...A, x, y:A.index * 30 }
        return { ...A, x, y }
    })


export const viewport = graph =>
    graph.length==0
        ? {xMax:0,xMin:0,yMax:0,yMin:0}
        : graph.reduce(
            (box, node) => ({
                xMax: Math.max( node.x, box.xMax ),
                xMin: Math.min( node.x, box.xMin ),
                yMax: Math.max( node.y, box.yMax ),
                yMin: Math.min( node.y, box.yMin ),
            })
            ,{xMax:-Infinity,xMin:Infinity,yMax:-Infinity,yMin:Infinity}
        )
