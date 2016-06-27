import {node}                   from 'fragment/nodeSelected'
import {action as a}            from 'fragment/actionSelected'

export const dependencies = ( node, action ) =>
    !node || !action
        ? null
        : node.dependencies
            .map( id =>
                ({
                    id : id,
                    before  : action.beforeState[ id ],
                    after   : action.afterState[ id ],
                })
            )

dependencies.dependencies = [ node, a ]


export const action = ( node, action ) =>
    !node || !action || ( !node.allActions && !node.actions )
        ? null
        : action.action


action.dependencies = [ node, a ]



export const result = ( node, action ) =>
    !node || !action
        ? null
        : {
            id : node.id,
            before  : action.beforeState[ node.id ],
            after   : action.afterState[ node.id ],
        }

result.dependencies = [ node, a ]
