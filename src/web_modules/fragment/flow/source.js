import * as node            from 'fragment/node'
import {action}             from 'fragment/actionSelected'

/**
 * for an action, the node that may react to the action type
 *
 * @return {number[]} list of index of node
 *
 */
export const source = ( nodeList, action ) =>
    !action
        ? []
        : nodeList
            .filter( x =>
                x.definition.allActions
                ||
                ( x.definition.actions && x.definition.actions.some( x => x == action.action.type  ) )
            )
            .map( ({index}) => index )

source.dependencies = [ node.list, action ]
