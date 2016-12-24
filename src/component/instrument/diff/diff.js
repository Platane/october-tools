import React            from 'react'
import Value            from 'component/value'
import computeDiff      from 'util/computeDiff'

import style            from './style.mcss'
import stateTreeStyle   from '../stateTree/style.mcss'

const Diff = ({ value, path, state, selectFragment }) =>
    <div className={ style.diff }>

        <div className={ stateTreeStyle.name }>
            <div className={ stateTreeStyle.ticLeaf } >●</div>
            <div className={ stateTreeStyle.label }>{ value }</div>
        </div>

        <div className={ style.content }>

        </div>
    </div>


module.exports = Diff
