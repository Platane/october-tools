import React, {PropTypes, Component} from 'react'
import TodoList_ from './todoList.jsx'
import * as actions from '../../action'

import {todo} from '../../fragment'

class TodoList extends Component {

    static contextTypes = {
        register       : PropTypes.func,
    };

    constructor(){
        super()

        this.state = { todos:[]  }

    }

    componentDidMount() {
        this.context.register( todo.list, todos => this.setState({ todos }) )
    }

    setFinish( id, finish ){
        this.context.dispatch(
            finish
                ? actions.finishTodo( id )
                : actions.unfinishTodo( id )
        )
    }

    remove( id ){
        this.context.dispatch( actions.removeTodo( id ) )
    }

    render() {
        return <TodoList_  {...this.state} setFinish={ this.setFinish.bind(this) } remove={ this.remove.bind(this) } />
    }
}

export default TodoList
