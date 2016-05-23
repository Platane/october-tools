import React, {PropTypes} from 'react'
import Scene        from './scene.jsx'
import Slidable     from 'component/abstract/slidable.jsx'

const merge = ( ...fns ) =>
    ( ...args ) => fns.forEach( fn => fn( ...args ) )

const clickOnGraph = onClick =>
    event =>
        event.target.nodeName.toLowerCase() == 'svg'
            && onClick()

const unproj = ( {kx, ky, width, height}, {viewportRatio, viewport} ) => {

    const vpWidth = viewport.xMax - viewport.xMin
    const vpHeight = viewport.yMax - viewport.yMin

    const ratio = width / height
    const r = Math.max( ratio, viewportRatio )



    if ( ratio > viewportRatio ){
        return {
            x : kx * vpHeight * ratio,
            y : ky * vpHeight,
        }
    } else {
        return {
            x : kx * vpWidth,
            y : ky * vpWidth / ratio,
        }
    }
}


class Graph extends Slidable {

    down( x ){
        this.anchor = unproj( x , this.props )
    }

    move( x ){

        const c = unproj( x , this.props )

        const dx = this.anchor.x - c.x
        const dy = this.anchor.y - c.y

        this.props.setViewportCenter && this.props.setViewportCenter({
            x: this.props.viewportCenter.x + dx,
            y: this.props.viewportCenter.y + dy,
        })

        this.anchor = c
    }


    wheel( event ){
        event.stopPropagation()
        event.preventDefault()

        const c = unproj( this.params( event ), this.props )

        event.deltaY > 0
            ? this.props.zoomOut && this.props.zoomOut( c )
            : this.props.zoomIn && this.props.zoomIn( c )
    }

    render(){

        const { viewport, viewportCenter,    selectNode } = this.props

        return (
            <svg className="graph"
                onMouseDown = { merge( this._down, clickOnGraph( selectNode ) ) }
                onTouchStart= { this._down }
                onWheel = { this.wheel.bind( this ) }
                ref='container'
                viewBox={`${viewport.xMin} ${viewport.yMin} ${viewport.xMax-viewport.xMin} ${viewport.yMax-viewport.yMin}` }
                >

                <Scene {...this.props} />

            </svg>
        )

    }
}

export default Graph
