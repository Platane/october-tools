import React, {PropTypes, Component} from 'react'
import TodoFooter_ from './todoFooter.jsx'
import * as actions from '../../action'

import {todo} from '../../fragment'


class TodoFooter extends Component {

    static contextTypes = {
        register       : PropTypes.func,
        dispatch       : PropTypes.func,
        getValue       : PropTypes.func,
    };


    constructor(){
        super()

        this.state = { count:0 }
    }

    componentDidMount() {
        this.context.register( todo.count, count => this.setState({ count }) )
        this.setState({ count: this.context.getValue( todo.count ) })
    }

    add( label ){
        this.context.dispatch( actions.addTodo( label ) )
    }

    render() {
        return <TodoFooter_  {...this.state} add={ this.add.bind(this) } />
    }
}

export default TodoFooter
