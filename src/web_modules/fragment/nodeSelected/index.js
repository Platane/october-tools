import {selected as currentAction} from 'fragment/actionSelected'

export const selected = ( action ) =>
    action.payload.id

selected.defaultValue = null
selected.actions = [ 'node:select' ]


export const onCurrentAction = ( selected, currentAction ) =>
    selected && currentAction && currentAction.beforeState[ selected ] &&
        {
            change  : currentAction.change[ selected ],
            before  : currentAction.beforeState[ selected ],
            after   : currentAction.afterState[ selected ],
        }

onCurrentAction.dependencies = [ selected, currentAction ]
