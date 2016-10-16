import React            from 'react'
import style            from './style.mcss'
import stateTreeStyle   from '../stateTree/style.mcss'

const bridgeWidth  = 10
const height       = 50
const lineWidth    = 1.5

const bridgePath = ( bridge ) => {

    const column = bridge.i+1

    const k = column*bridgeWidth*0.5

    const root = bridge.from == 'action'
        ? 0
        : bridge.from+1

    return [
        ...( root == 0
            ? []
            : [
                'M', 0                  , root*height    + column*lineWidth,
                'L', column*bridgeWidth , root*height +k + column*lineWidth,
                'L', column*bridgeWidth , root*height +k + column*lineWidth + 5,
            ]
        ),

        ...[].concat(
            ...bridge.to.map( y =>
                [
                    'M', column*bridgeWidth      , root *height +k  + column*lineWidth,
                    'L', column*bridgeWidth      , (y+1)*height -k  + column*lineWidth,
                    'L', 0                       , (y+1)*height     + column*lineWidth,

                    'M', 0                       , (y+1)*height     + column*lineWidth,
                    'L', 5/1.5                   , (y+1)*height     + column*lineWidth + 1.5/1.5,

                    'M', 0                       , (y+1)*height     + column*lineWidth,
                    'L', 2.5/1.5                 , (y+1)*height     + column*lineWidth - 5/1.5,
                ]
            )
        )
    ].join(' ')
}

const color = i => `hsl(${ i * 137 },80%,60%)`

const UpdateFlow = props =>
(
    <div className={ style.container }>
        <div className={ style.flowWrapper }>
            <svg
                className={ style.flow }
                height={ (props.list.length+1) * height }
                width={ bridgeWidth * props.max_concurency + 10 }
                >
                <g transform={`translate(${ bridgeWidth * props.max_concurency +5 },0) scale(-1,1)`}>
                    {
                        props.bridges.map( (bridge, i) =>
                            <path
                                key={i}
                                className={ style.bridge }
                                d={ bridgePath( bridge ) }
                                stroke={ color( i ) }
                                />
                        )
                    }
                </g>
            </svg>
        </div>

        <div className={ style.right }>

            <div className={ style.activeList } style={{ height: (props.list.length+1) * height }} >
                { props.list
                    .map( (name, i) =>
                        <div key={name} className={ style.activeItem } style={{ transform: `translate3d(-5px,${ (i+1)*height - 6 }px,0)` }} >
                            <div className={ stateTreeStyle.name } onClick={ () => props.selectFragment( name ) }>
                                <div className={ name == props.fragmentSelectedName ? stateTreeStyle.ticLeafSelected : stateTreeStyle.ticLeaf } >●</div>
                                <div className={ stateTreeStyle.label }>{ name }</div>
                            </div>
                        </div>
                    )
                }
            </div>

            { Object.keys( props.outdated ).length > 0 &&
                <div className={ style.passive }>
                    <div className={ style.passiveLabel }>{'also, those will be lazy updated :'}</div>
                    <div className={ style.passiveList }>
                        { Object.keys( props.outdated )
                            .map( (name, i) =>
                                <div key={name} className={ style.passiveItem } >
                                    <div className={ stateTreeStyle.name } onClick={ () => props.selectFragment( name ) }>
                                        <div className={ name == props.fragmentSelectedName ? stateTreeStyle.ticLeafSelected : stateTreeStyle.ticLeaf } >●</div>
                                        <div className={ stateTreeStyle.label }>{ name }</div>
                                    </div>
                                    <div className={ style.outdated } title="update blocked by lazy computation" >❄</div>
                                </div>
                            )
                        }
                    </div>
                </div>
            }

        </div>
    </div>
)


module.exports = UpdateFlow
