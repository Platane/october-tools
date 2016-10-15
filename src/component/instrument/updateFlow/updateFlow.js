import React        from 'react'
import style        from './style.mcss'

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
    !props.bridges
        ? null
        : (
            <div className={ style.container }>
                <div className={ style.flowWrapper }>
                    <svg
                        className={ style.flow }
                        height={ (props.list.length+1) * height + 20 }
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

                <div className={ style.list }>
                    { props.list
                        .map( (name, i) =>
                            <div key={name} className={ style.item } style={{ transform: `translate3d(0,${ (i+1)*height - 6 }px,0)` }} >
                                <div className={ style.name } onClick={ () => props.selectFragment( name ) }>{ name }</div>
                            </div>
                        )
                    }
                </div>
            </div>
        )


module.exports = UpdateFlow
