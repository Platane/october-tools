import React        from 'react'
import ObjectTree   from 'component/objectTree'

import style    from './style.mcss'

const ratio = 16

const List = ({ actionList, actionSelected, actionSelectedId, selectAction }) =>
    <div className={ style.container } style={{ height: ( actionList.length == 0 ? 0 : actionList[ actionList.length-1 ].y+1 ) * ratio }}>

        <div className={ style.bar } />

        { actionList
            .map( action =>
                <div
                    key={action.id}
                    className={ style.item }
                    style={{ transform:`translate3d(0,${Math.round(action.y*ratio)}px,0)` }}
                    onClick={ () => selectAction( action.id != actionSelectedId ? action.id : null ) }
                    >
                    <div className={ style.ball + ' ' +( action.id == actionSelectedId ? style.ballSelected : '' ) } />
                    <div className={ style.type } >{ action.type }</div>
                </div>
            )
        }

        { actionSelected &&
            <div
                className={ style.actionPopUp }
                style={{ transform:`translate3d(0,${Math.round(actionSelected.y*ratio)}px,0)` }}
                >
                <ObjectTree tree={ actionSelected.payload } />
            </div>
        }

    </div>

module.exports = List
