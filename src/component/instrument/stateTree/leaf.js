import React    from 'react'

import style    from './style.mcss'
import Value    from 'component/value'

const Leaf = props =>
    <div className={ style.leaf }>
        <div className={ style.name } onClick={ () => props.selectFragment( props.path ) }>
            <div className={ props.path == props.fragmentSelectedName ? style.ticLeafSelected : style.ticLeaf } >●</div>
            <div className={ style.label }>{ props.name }</div>
        </div>
        { props.values &&
            <div className={ style.value }>
                <Value value={ props.values[ props.path ] } />
            </div>
        }
    </div>


module.exports = Leaf
