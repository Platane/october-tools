const stepList = ( action, list ) =>
    [ action.payload, ...list ]

stepList.actions      = ['catchAction']
stepList.initValue    = []

module.exports = stepList
