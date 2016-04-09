import {list as nodeList}   from 'fragment/node'
import {graph}              from 'fragment/graph/raw'
import {selected}           from 'fragment/actionSelected'


export const source = ( nodeList, selectedAction ) =>
    !selectedAction
        ? []
        : nodeList
            .filter( ({ actions }) => actions.some( x => x == selectedAction.action.type ) )
            .map( ({index}) => index )

source.dependencies = [ nodeList, selected ]

export const schedule = ( graph, source, selectedAction ) => {

    const change = selectedAction && selectedAction.change || {}

    const longuestLine = {}
    const computeLonguestLine = b =>

        // cache result
        b in longuestLine
            ? longuestLine[ b ]
            : longuestLine[ b ] = (

                // if the node is source ...
                source.some( x => b == x )

                    // the line length is 0
                    ? 0

                    // else it's the longuest line of all the parents +1
                    : Math.max(
                        ...graph[ b ].arc
                            .filter( i => change[ graph[ i ].name ] )
                            .map( computeLonguestLine )
                        ) +1
            )
    graph
        .filter( ({name}) => change[ name ] )
        .forEach( ({index}) => computeLonguestLine( index ) )

    // list all the branches triggered by the action
    // sorted by temporality ( branches at step[n+1] are used after the ones at step[n] )
    const branch = []
    graph
        .forEach( ({index, arc}) =>

            arc
            .filter( i => change[ graph[i].name ] )
            .forEach( ia =>

                branch
                    .push({ a:ia, b:index, ka:longuestLine[ ia ], kb:longuestLine[ index ] || longuestLine[ ia ]+1 })

            )
        )

    branch.sort( (a,b) => a.ka < a.kb ? 1 : -1 )




    const node = graph
        .filter( ({name}) => change[ name ] )
        .map( ({index}) => ({ a: index, k: longuestLine[ index ] }) )
        .sort( (a,b) => a.k < a.k ? 1 : -1 )

    return { branch, node }
}
schedule.dependencies = [ graph, source, selected ]
