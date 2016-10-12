const stepList = ( action, list ) =>
    [
        {
            id      : action.payload.id,
            date    : action.payload.date,
            action  : action.payload.action,
            state   : { ...action.payload.state },
        },
        ...list
    ]

stepList.actions      = ['catchAction']
stepList.initValue    = []

module.exports = stepList
