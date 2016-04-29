import * as node   from 'fragment/node'
import {action}  from 'fragment/actionSelected'


export const source = ( nodeList, selectedAction ) =>
    !selectedAction
        ? []
        : nodeList
            .filter( ({ source }) => source )
            .map( ({index}) => index )

source.dependencies = [ node.list, action ]
