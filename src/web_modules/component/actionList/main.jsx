import ActionList      from './actionList.jsx'
import {connect}    from 'component/abstract/connect.jsx'

export default connect(

    root => [ root.action.list, root.actionSelected.selectedId ]
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
