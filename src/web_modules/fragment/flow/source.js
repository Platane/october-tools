import * as node   from 'fragment/node'
import {selected}  from 'fragment/actionSelected'


export const source = ( nodeList, selectedAction ) =>
    !selectedAction
        ? []
        : nodeList
            .filter( ({ actions }) => actions.some( x => x == selectedAction.action.type ) )
            .map( ({index}) => index )

source.dependencies = [ node.list, selected ]
