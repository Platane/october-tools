import React    from 'react'

import ActionList   from 'component/instrument/actionList'
import StateTree    from 'component/instrument/stateTree'
import Graph        from 'component/instrument/graph'
import UpdateFlow   from 'component/instrument/updateFlow'

import style        from './style.mcss'

const App = () =>
    <div className={ style.container }>

        <div className={ style.main }>

            <div className={ style.stateTree }>
                <StateTree />
            </div>

            <div className={ style.updateFlow }>
                <UpdateFlow />
            </div>

        </div>

        <div className={ style.actionList }>
            <ActionList />
        </div>

    </div>

module.exports = App
