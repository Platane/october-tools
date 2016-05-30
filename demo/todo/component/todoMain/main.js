import React, {PropTypes, Component} from 'react'
import TodoMain_ from './todoMain'
import * as actions from '../../action'


class TodoMain extends Component {

    static contextTypes = {
        dispatch       : PropTypes.func,
    };

    remove( id ){
        this.context.dispatch( actions.removeTodo( id ) )
    }

    render() {
        return <TodoMain_  remove={ this.remove.bind(this) } />
    }
}

export default TodoMain
