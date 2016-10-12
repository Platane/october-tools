import {connect}            from 'component/abstract/connect'
import * as action          from 'action'
import List                 from './list'

module.exports = connect(

    root => [ root.instrument.actionList.list, root.core.stepSelected.id ],

    ( actionList, actionSelectedId ) => ({ actionList, actionSelectedId }),

    {
        selectAction: ( dispatch, actionId ) =>
            dispatch( action.selectStep( actionId ))
    },

    List
)
