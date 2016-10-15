import klay                 from 'klayjs'

const toJSONKGraph = ( graph ) => {

    const names = Object.keys( graph )

    const children = names
        .map( name =>
            ({
                id      : name,
                width   : 1,
                height  : 1,
            })
        )

    const edges = []

    names
        .forEach( nameA =>
            graph[ nameA ].forEach( nameB =>
                edges.push({
                    id      : nameA+'-'+nameB,
                    source  : nameB,
                    target  : nameA,
                })
            )
        )

    return {children, edges}
}

const parse = res => {

    const vertices = {}
    res.children
        .forEach( ({ x,y,id }) => vertices[id] = { x: x+0.5, y: y+0.5 } )

    const edges = res.edges
        .map(
            x => ({
                a       : x.source,
                b       : x.target,
                points  : [
                    x.sourcePoint,
                    ...x.junctionPoints,
                    x.targetPoint,
                ]
            })
        )

    return { vertices, edges }
}

// assuming graph is
// {
//  nameA : [ nameB, nameC ],
//  nameB : [],
//  nameC : [],
const computeGraphLayout = ( graph ) =>
    new Promise( ( resolve, reject ) => {
        try {
            klay.layout({
                graph   : {
                    ...toJSONKGraph( graph ),
                    id          : 'root',
                    properties  : {
                        direction   : 'DOWN',
                        spacing     : 40,
                    },
                },
                options : {},
                success : layout => resolve( parse( layout ) ),
                error   : err => reject( err ),
            })
        }catch( err ){ reject( err ) }

    })

module.exports = computeGraphLayout
