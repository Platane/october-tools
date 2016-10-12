import React    from 'react'

import ActionList   from 'component/instrument/actionList'

import style        from './style.mcss'

const App = () =>
    <div className={ style.container }>
        <div className={ style.actionList }>
            <ActionList />
        </div>
    </div>

module.exports = App
