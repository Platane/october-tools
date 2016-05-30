import React, {PropTypes, Component} from 'react'

class Animated extends Component {

    constructor(){
        super()

        this.state = {}
        this.killAnimationFrame = null
        this.anim = null

        this.loop = ( ) => {

            const s = ( this.anim && this.anim() ) || ( this.props.anim && this.props.anim() )

            cancelAnimationFrame( this.killAnimationFrame )

            if ( s )
                this.setState( s )

            if ( !s || s.static )
                return

            this.killAnimationFrame = requestAnimationFrame( this.loop )
        }

    }

    componentDidMount(){
        this.loop()
    }

    componentWillReceiveProps(nextProps) {
        this.anim = nextProps.anim
        this.loop()
    }

    componentWillUnmount(){
        cancelAnimationFrame( this.killAnimationFrame )
    }

    render(){
        const renderedChildren = this.props.children( this.state )
        return renderedChildren && React.Children.only(renderedChildren)
    }
}

export default Animated
