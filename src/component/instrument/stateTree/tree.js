import React    from 'react'

import style    from './style.mcss'
import Value    from './value'

const Tree = props =>
    typeof props.tree == 'string'
        ?
            <div className={ style.leaf }>
                <div className={ style.name } onClick={ () => props.selectFragment( props.path ) }>
                    <div className={ props.path == props.fragmentSelectedName ? style.ticLeafSelected : style.ticLeaf } >●</div>
                    <div className={ style.label }>{ props.name }</div>
                </div>
                { props.value &&
                    <div className={ style.value }>
                        <Value value={ props.value[ props.path ] } />
                    </div>
                }
            </div>
        :
            <div className={ style.node }>
                <div className={ style.name } onClick={ props.opened[ props.path ] ? () => props.close( props.path ) : () => props.open( props.path ) } >
                    <div className={ props.opened[ props.path ] ? style.ticNodeOpen : style.ticNodeClose } >▼</div>
                    <div className={ style.label }>{ props.name }</div>
                </div>

                { props.opened[ props.path ] &&
                    <div className={ style.children }>
                        { Object.keys( props.tree )
                            .map( name =>
                                <Tree { ...props } key={name} tree={ props.tree[ name ] } name={ name } path={ props.path+'.'+name } />
                            )
                        }
                    </div>
                }
            </div>


module.exports = Tree
