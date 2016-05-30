import React, {PropTypes, Component} from 'react'
import * as root    from 'fragment'

export const connect = ( getDependencies, getState, methods, C ) => {

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
            this._methods = {}

            this._update = ( ...args ) =>
                this.setState( getState( ...args ) )
        }

        componentDidMount() {

            this._mounted=true
            this._renderedOnce=false

            this.context.register( ...dep, this._update )

            this._methods = {}
            for ( let key in methods )
                this._methods[ key ] = methods[ key ].bind( null, this.context.dispatch, this.context.getValue )


            this._update( ...dep.map( fragment => this.context.getValue( fragment ) ) )
        }

        componentWillUnmount() {
            this._mounted=false
            this.context.unregister( this._update )
        }

        render(){
            if ( !this._mounted )
                return null
            this._renderedOnce = true
            return <C {...{ ...this.props, ...this.state, ...this._methods }} />
        }
    }

    return Connect
}
