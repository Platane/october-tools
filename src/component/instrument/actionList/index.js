import {connect}            from 'component/abstract/connect'
import * as action          from 'action'
import List                 from './list'

module.exports = connect(

    root => [ root.instrument.actionList.list, root.core.stepSelected.id ],

    ( actionList, actionSelectedId ) => ({
        actionList,
        actionSelectedId,
        actionSelected : actionList.find( x => actionSelectedId == x.id ),
    }),

    {
        selectAction: ( dispatch, actionId ) =>
            dispatch( action.selectStep( actionId ))
    },

    List
)
