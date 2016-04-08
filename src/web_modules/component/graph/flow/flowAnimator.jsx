import React, {PropTypes, Component} from 'react'
import Flow     from './flow.jsx'

class FlowAnimatetor extends Component {

    static propsTypes = {
        branch         : PropTypes.array.isRequired,
        velocity       : PropTypes.number,
    };

    constructor(){

        super()

        this.state={x:0}

        this.loop = ( branch ) => {

            const n = ( Array.isArray( branch ) ? branch : this.props.branch ).length
            const v = this.props.velocity || 0.02

            const x = Math.min( n, this.state.x + v )

            this.setState({ x })

            window.cancelAnimationFrame( this.kill_raf )
            if ( x < n )
                this.kill_raf = window.requestAnimationFrame( this.loop )

        }
    }

    componentWillReceiveProps(nextProps) {
        if ( this.props.branch != nextProps.branch ) {
            this.state.x = 0
            this.loop( nextProps.branch )
        }
    }

    componentWillMount() {
        this.state.x = 0
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
