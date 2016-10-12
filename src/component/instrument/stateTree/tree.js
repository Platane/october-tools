import React    from 'react'

import style    from './style.mcss'
import Value    from './value'

const Tree = props =>
    typeof props.tree == 'string'
        ?
            <div className={ style.leaf }>
                <div className={ style.ticLeaf } />
                <div className={ style.label }>{ props.name }</div>
                    { props.value &&
                        <div className={ style.value }>
                            <Value value={ props.value[ props.path.join('.') ] } />
                        </div>
                    }
            </div>
        :
            <div className={ style.node }>
                <div className={ style.ticNode } />
                <div className={ style.label }>{ props.name }</div>

                { ( props.opened[ props.path.join('.') ]  || true ) &&
                    <div className={ style.children }>
                        { Object.keys( props.tree )
                            .map( name =>
                                <Tree { ...props } key={name} tree={ props.tree[ name ] } name={ name } path={ [ ...props.path, name ] } />
                            )
                        }
                    </div>
                }
            </div>


module.exports = Tree
