import React, {PropTypes}    from 'react'

import style    from './style.mcss'

// Leaf and Node will receive
//   path =  aaa.bbb.ccc
//   name =  ccc
//   props herited from the root
module.exports= ( Leaf, NodeLabel ) => {

    NodeLabel = NodeLabel || ( props => <div className={ style.label }>{ props.name }</div> )

    const Tree = props =>
        typeof props.tree != 'object'
            ?
                <Leaf { ...props } value={ props.tree }  />
            :
                <div className={ style.node }>

                    <div className={ style.name } onClick={ props.opened[ props.path ] ? () => props.close( props.path ) : () => props.open( props.path ) } >
                        <div className={ props.opened[ props.path ] ? style.ticNodeOpen : style.ticNodeClose } >▼</div>
                        <NodeLabel { ...props } />
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


    const Root = props =>
        <div className={ style.root }>
            { !!props.tree && typeof props.tree == 'object' &&
                Object.keys( props.tree )
                    .map( name =>
                        <Tree { ...props } key={name} tree={ props.tree[name] } name={name} path={ name } />
                    )
            }
        </div>


    Root.propTypes = {
        tree    : PropTypes.any,
        opened  : PropTypes.object.isRequired,
        open    : PropTypes.func.isRequired,
        close   : PropTypes.func.isRequired,
    }

    return Root
}
