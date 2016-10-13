import React    from 'react'

import style    from './style.mcss'
import Value    from 'component/value'

const Leaf = props =>
    <div className={ style.leaf }>
        <div className={ style.name }>
            <div className={ style.ticLeaf } >●</div>
            <div className={ style.label }>{ props.name }</div>
            <div className={ style.labelSeparator }>:</div>
        </div>
        <div className={ style.value }><Value value={props.value} /></div>
    </div>


module.exports = Leaf
