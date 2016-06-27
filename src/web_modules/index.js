
import './style/style'

import React, {PropTypes, Component} from 'react'
import App  from 'component/app'

import fragment             from 'fragment'
import {create}             from 'refinery-js'
import computeGraphLayout   from 'utils/graphLayout'



class RefineryTools extends Component {

    static propsTypes = {
        list        : PropTypes.func.isRequired,
        dispatch    : PropTypes.func.isRequired,
    };

    static childContextTypes = {
        dispatch      : PropTypes.func.isRequired,
        getValue      : PropTypes.func.isRequired,
        register      : PropTypes.func.isRequired,
        unregister    : PropTypes.func.isRequired,
    };

    constructor(){

        super()
        this.store = create( fragment )

        window.devToolState = () => this.store.getState()
    }

    componentDidMount() {

        // the dispatcher
        let i = 1
        this.props.hook( (action, beforeState, afterState) =>
            this.store.dispatch( {type:'catchAction', payload:{action, beforeState, afterState, id:i++, date:Date.now() } } )
        )

        // async actions
        this.store.register( fragment.node.successorGraph, graph =>

            computeGraphLayout( graph )
                .then( x => this.store.dispatch( {type:'success-graph:layoutCompute', payload:x } ) )
                .catch( error => this.store.dispatch( {type:'fail-graph:layoutCompute', payload:{error} } ) )

        )

        // the graph
        this.store.dispatch( {type:'node:init', payload:{ node_by_id: this.props.by_id()} } )
    }

    getChildContext() {
        return {
            dispatch      : this.store.dispatch,
            getValue      : this.store.getValue,
            register      : this.store.register,
            unregister    : this.store.unregister,
        }
    }

    render() {
        return <App />
    }
}

export default RefineryTools
