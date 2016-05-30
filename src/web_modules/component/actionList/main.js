import ActionList      from './actionList'
import {connect}    from 'component/abstract/connect'

export default connect(

    root => [ root.action.list, root.actionSelected.id ]
    ,

    ( list, selectedId ) =>
        ({ list, selectedId })
    ,

    {
        selectAction : ( dispatch, getAction, id ) =>
            dispatch( {type:'action:select', payload:{ id }} )
    }
    ,

    ActionList
)
