import React    from 'react'
import Tree     from './tree'

import style    from './style.mcss'


const Root = props =>
    <div className={ style.root }>
        { !!props.tree && typeof props.tree == 'object' &&
            Object.keys( props.tree )
                .map( name =>
                    <Tree { ...props } key={name} tree={ props.tree[name] } name={name} path={ [ name ] } />
                )
        }
    </div>

module.exports = Root
