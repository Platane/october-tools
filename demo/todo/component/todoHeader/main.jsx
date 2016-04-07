import React, {PropTypes, Component} from 'react'
import TodoHeader_ from './todoHeader.jsx'
import * as actions from '../../action'


class TodoControl extends Component {

    static contextTypes = {
        dispatch       : PropTypes.func,
    };

    add( label ){
        label && this.context.dispatch( actions.addTodo( label ) )
    }

    render() {
        return <TodoHeader_  {...this.state} add={ this.add.bind(this) } />
    }
}

export default TodoControl
