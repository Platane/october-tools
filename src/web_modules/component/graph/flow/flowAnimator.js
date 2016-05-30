import React, {PropTypes, Component} from 'react'
import Flow     from './flow'

let u = 0

class FlowAnimatetor extends Component {

    static propsTypes = {
        branch         : PropTypes.array.isRequired,
        velocity       : PropTypes.number,
    };

    constructor(){

        super()

        this.state={k:0}

        this.loop = ( branch ) => {

            const n = ( Array.isArray( branch ) ? branch : this.props.branch ).reduce( (max,x) => Math.max( max, x.kb ), 0 ) +1
            const v = 'velocity' in this.props
                ? this.props.velocity
                : 'duration' in this.props
                    ? n/ this.props.duration
                    : 1

            const k = Math.min( n, this.state.k + v*16 )

            this.setState({ k })

            window.cancelAnimationFrame( this.kill_raf )
            if ( k < n )
                this.kill_raf = window.requestAnimationFrame( this.loop )

        }
    }

    componentWillReceiveProps(nextProps) {
        if ( this.props.schedule != nextProps.schedule ) {
            this.state.k = 0
            this.loop( nextProps.branch )
        }
    }

    componentWillMount() {
        this.state.k = 0
        this.loop()
    }

    componentWillUnmount() {
        window.cancelAnimationFrame( this.kill_raf )
    }

    render(){
        return <Flow {...this.state} {...this.props} />
    }

}

export default FlowAnimatetor
