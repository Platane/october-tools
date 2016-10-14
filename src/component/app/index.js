import React    from 'react'

import ActionList   from 'component/instrument/actionList'
import StateTree    from 'component/instrument/stateTree'
import ObjectTree   from 'component/objectTree'

import style        from './style.mcss'

const App = () =>
    <div className={ style.container }>

        <div className={ style.main }>

            <div className={ style.stateTree }>
                <StateTree />
            </div>
            <div className={ style.ObjectTree }>
                <ObjectTree tree={{ a: { b: 1, c: ['a',3,4,5,235]} }} />
            </div>

        </div>

        <div className={ style.actionList }>
            <ActionList />
        </div>

    </div>

module.exports = App
