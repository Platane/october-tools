import * as node   from 'fragment/node'
import {action, change}  from 'fragment/actionSelected'


export const source = ( nodeList, selectedAction, change ) =>
    !selectedAction
        ? []
        : nodeList
            .filter( ({ source, id }) => source && change[id]  )
            .map( ({index}) => index )

source.dependencies = [ node.list, action, change ]
