import klay                 from 'klayjs'

const properties = () =>
    ({
        direction   : 'RIGHT',
        spacing     : 40
    })

const toJSONKGraph = ( graph ) => {

    const children = graph
        .map( (_,i) =>
            ({
                id      : ''+i,
                width   : 1,
                height  : 1,
            })
        )

    const edges = []

    graph
        .forEach( (arr,a) =>
            arr.forEach( b =>
                edges.push({
                    id      : a+'-'+b,
                    source  : ''+a,
                    target  : ''+b,
                })
            )
        )

    return {children, edges}
}

const parse = ({ children, edges }) =>
    ({
        vertices : children
            .map( ({ x,y }) => ({ x: x+0.5, y: y+0.5 }) )
        ,

        edges   : edges
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
        ,
    })


const computePosition = ( graph ) =>
    new Promise( ( resolve, reject ) =>

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

    )

module.exports = computePosition
