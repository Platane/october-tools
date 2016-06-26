import TimeLine         from './timeLine'
import {connect}        from 'component/abstract/connect'

export default connect(

    ({ timeLine, action, actionSelected }) => [ action.list, timeLine.yAxis, actionSelected.id ]
    ,

    ( actions, yAxis, actionSelectedId ) =>
        ({ actions, yAxis, actionSelectedId })
    ,

    {
        selectAction : ( dispatch, getAction, id ) =>
            dispatch( {type:'action:select', payload:{ id }} )
    }
    ,

    TimeLine
)
