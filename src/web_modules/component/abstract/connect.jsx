import React, {PropTypes, Component} from 'react'
import * as root    from 'fragment'

export const connect = ( getDependencies, getState, C ) => {

    const dep = getDependencies( root )

    class Connect extends Component {

        static contextTypes = {
            dispatch       : PropTypes.func.isRequired,
            register       : PropTypes.func.isRequired,
            unregister     : PropTypes.func.isRequired,
            getValue       : PropTypes.func.isRequired,
        };

        constructor( ){
            super()

            this.state = {}

            this._update = ( ...args ) =>
                this.setState( getState( ...args ) )
        }

        componentDidMount() {
            this._mounted=true
            this.context.register( ...dep, this._update )
            this._update( ...dep.map( fragment => this.context.getValue( fragment ) ) )
        }

        componentWillUnmount() {
            this._mounted=false
            this.context.unregister( this._update )
        }

        render(){
            if ( !this._mounted )
                return null
            return <C {...this.state} {...this.props} />
        }
    }

    return Connect
}
