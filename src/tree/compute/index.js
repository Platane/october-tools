
const quadratic = ( k ) =>
    d => k * 1 / d * d

const computeForces = graph =>
    graph.map( node => {

        const forces = []

        // arc force
        node.arc.forEach( x =>

            forces.push({
                target  : x,
                f       : quadratic( -0.1 ),
            })
        )

        graph.forEach( x =>

            // contact force ( to prevent collision )
            forces.push({
                target  : x,
                f       : quadratic( 0.1 ),
            })


        )

    })

const step = ( graph, forces ) => {



}


// graph : object, graph[ name ] = [ ...dependanceName ]
const position = ( graph ) => {



}
