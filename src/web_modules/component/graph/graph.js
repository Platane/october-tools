import React, {PropTypes} from 'react'
import Scene        from './scene'
import Slidable     from 'component/abstract/slidable'

const merge = ( ...fns ) =>
    ( ...args ) => fns.forEach( fn => fn( ...args ) )

const clickOnGraph = onClick =>
    event =>
        event.target.nodeName.toLowerCase() == 'svg'
            && onClick()

const onScreen = ({ kx, ky, width, height }) =>
({
    x : kx * width,
    y : ky * height,
})

const unproj = ( {x, y}, {viewport_scale, viewport_translate} ) =>
    ({
        x : ( x - viewport_translate.x ) / viewport_scale,
        y : ( y - viewport_translate.y ) / viewport_scale,
    })


class Graph extends Slidable {

    down( x ){
        this.anchor = onScreen( x )
    }

    move( x ){

        const c = onScreen( x )

        const dx = this.anchor.x - c.x
        const dy = this.anchor.y - c.y

        this.props.translate && this.props.translate({
            x: -dx,
            y: -dy,
        })

        this.anchor = c
    }

    wheel( event ){
        event.stopPropagation()
        event.preventDefault()

        const c = unproj( onScreen( this.params( event ) ), this.props )

        event.deltaY > 0
            ? this.props.scaleDown && this.props.scaleDown( c )
            : this.props.scaleUp && this.props.scaleUp( c )
    }

    render(){

        const { viewport_scale, viewport_translate,   selectNode } = this.props

        return (
            <svg className="graph"
                onMouseDown = { merge( this._down, clickOnGraph( selectNode ) ) }
                onTouchStart= { this._down }
                onWheel = { this.wheel.bind( this ) }
                ref='container'
                >

                <g>

                    <Scene {...this.props} />

                </g>

            </svg>
        )

    }
}
// <g transform={`translate(${viewport_translate.x},${viewport_translate.y}) scale(${viewport_scale})`} >

export default Graph
