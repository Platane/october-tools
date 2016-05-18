import React,{Component, PropTypes} from 'react'

const getPointerX = event =>
    event.targetTouches ? event.targetTouches[ 0 ].clientX : event.clientX

const getPointerY = event =>
    event.targetTouches ? event.targetTouches[ 0 ].clientY : event.clientY

const params = ( {bottom, top, right, left}, event ) => {

    const width  = right - left
    const height = bottom - top

    const x = getPointerX( event )
    const y = getPointerY( event )

    return {
        width,
        height,
        x,
        y,
        bottom,
        top,
        right,
        left,
        kx : ( x - left )/ width,
        ky : ( y - top )/ height,
    }
}

class Slidable extends Component {

    static propTypes = {

        downFn  : PropTypes.func,
        upFn    : PropTypes.func,
        moveFn  : PropTypes.func,
    };

    params( event ){
        return params( event, this.refs.container.getBoundingClientRect() )
    }

    constructor( ...args ) {

        super( ...args )


        this._down = event => {

            ;( this.down || this.props.downFn || (() => 0) ).call( this, params( this.refs.container.getBoundingClientRect(), event ) )

            // event.preventDefault()
            // event.stopPropagation()

            window.removeEventListener( 'mousemove',    this._move )
            window.removeEventListener( 'touchmove',    this._move )
            window.removeEventListener( 'mouseup',      this._up )
            window.removeEventListener( 'touchend',     this._up)
            window.removeEventListener( 'touchcancel',  this._up)
            window.addEventListener( 'mousemove',    this._move )
            window.addEventListener( 'touchmove',    this._move )
            window.addEventListener( 'mouseup',      this._up )
            window.addEventListener( 'touchend',     this._up)
            window.addEventListener( 'touchcancel',  this._up)

            this._move( event )
        }
        this._move = event =>
            ( this.move || this.props.moveFn || (() => 0) ).call( this, params( this.refs.container.getBoundingClientRect(), event ) )

        this._up = event => {

            ;( this.up || this.props.upFn || (() => 0) ).call( this, params( this.refs.container.getBoundingClientRect(), event ) )

            window.removeEventListener( 'mousemove',    this._move )
            window.removeEventListener( 'touchmove',    this._move )
            window.removeEventListener( 'mouseup',      this._up )
            window.removeEventListener( 'touchend',     this._up)
            window.removeEventListener( 'touchcancel',  this._up)
        }
    }

    componentWillUnmount() {
        window.removeEventListener( 'mousemove',    this._move )
        window.removeEventListener( 'touchmove',    this._move )
        window.removeEventListener( 'mouseup',      this._up )
        window.removeEventListener( 'touchend',     this._up)
        window.removeEventListener( 'touchcancel',  this._up)
    }

    render(){

        return (
            <div className="slidable" style={{width:'100%', height:'100%'}} onMouseDown = { this._down } onTouchStart= { this._down } ref='container'>
                { this.props.children }
            </div>
        )
    }
}

export default Slidable
