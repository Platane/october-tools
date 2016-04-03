import React, {PropTypes, Component} from 'react'
import TodoControl_ from './todoControl.jsx'
import * as actions from '../../action'

import {todo} from '../../fragment'


class TodoControl extends Component {

    static contextTypes = {
        register       : PropTypes.func,
        dispatch       : PropTypes.func,
    };


    constructor(){
        super()

        this.state = { count:0 }
    }

    componentDidMount() {
        this.context.register( todo.count, count => this.setState({ count }) )

    }

    add( label ){
        this.context.dispatch( actions.addTodo( label ) )
    }

    render() {
        return <TodoControl_  {...this.state} add={ this.add.bind(this) } />
    }
}

export default TodoControl
