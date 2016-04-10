import React, {PropTypes, Component} from 'react'
import Flow     from './flow.jsx'

class FlowAnimatetor extends Component {

    static propsTypes = {
        branch         : PropTypes.array.isRequired,
        velocity       : PropTypes.number,
    };

    constructor(){

        super()

        this.state={k:0}

        this.loop = ( branch ) => {

            const n = ( Array.isArray( branch ) ? branch : this.props.branch ).length +1
            const v = this.props.velocity || 0.04

            const k = Math.min( n, this.state.k + v )

            this.setState({ k })

            window.cancelAnimationFrame( this.kill_raf )
            if ( k < n )
                this.kill_raf = window.requestAnimationFrame( this.loop )

        }
    }

    componentWillReceiveProps(nextProps) {
        if ( this.props.branch != nextProps.branch ) {
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
