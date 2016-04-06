

export const actionStack = ( action, stack ) =>
    [ ...stack, action.payload ]


actionStack.defaultValue = []
actionStack.actions = [ 'catchAction' ]
