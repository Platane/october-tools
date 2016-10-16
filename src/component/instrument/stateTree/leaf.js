import React        from 'react'
import ObjectTree   from 'component/objectTree'
import Value        from 'component/value'
import ClickOutside from 'component/abstract/clickOutside'

import style        from './style.mcss'
import treeStyle    from '../../abstractTree/style.mcss'


const Leaf = props => {

    const openable  = props.values && typeof props.values[ props.path ] == 'object' && props.values[ props.path ]
    const value     = props.values && props.values[ props.path ]

    return (
        <div className={ style.leaf }>
            <div className={ style.name } onClick={ () => props.selectFragment( props.path ) }>
                <div className={ props.path == props.fragmentSelectedName ? style.ticLeafSelected : style.ticLeaf } >●</div>
                <div className={ style.label }>{ props.name }</div>
            </div>
            { props.values &&
                <div
                    className={ style.value + ' ' + ( openable ? style.valueOpenable : '' )  }
                    onClick={ openable && ( () => props.leafOpened[ props.path ] ? props.closeLeaf( props.path ) : props.openLeaf( props.path ) ) }>
                    {
                        props.outdated[ props.path ]
                            ? <div className={ style.outdated } title="update blocked by lazy computation" >❄</div>
                            : <Value value={ value } />
                    }
                </div>
            }
            { openable && props.leafOpened[ props.path ] &&
                <div className={ style.actionPopUp } >

                    <ClickOutside ignoreClassName={ treeStyle.name } onClickOutside={ e => props.closeLeaf( props.path ) } />

                    { Object.keys(value).length > 0 && <ObjectTree tree={ value } /> }

                    { Object.keys(value).length == 0 &&
                        (
                            Array.isArray(value)
                                ? <div className={ style.emptyValue }>{'[ ]'}</div>
                                : <div className={ style.emptyValue }>{'{ }'}</div>
                        )
                    }

                </div>
            }
        </div>
    )
}


module.exports = Leaf
