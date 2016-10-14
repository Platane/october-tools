import React    from 'react'

import style    from './style.mcss'

const Leaf = props =>
    <div className={ style.label }>
        <div className={ style.labelName }>{ props.name }</div>
        { Array.isArray(props.tree) &&
            <div className={ style.labelType }>{`Array (${props.tree.length})`}</div>
        }
    </div>


module.exports = Leaf
