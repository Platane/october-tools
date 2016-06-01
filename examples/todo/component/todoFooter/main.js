import React, {PropTypes, Component} from 'react'
import TodoFooter_ from './todoFooter'
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

        this.state = { filter:0 }
    }

    componentDidMount() {
        this.context.register(
            todo.filter,
            todo.count.finished,
            todo.count.unfinished,
            (filter, countFinished, countUnFinished) => this.setState({ filter, countFinished, countUnFinished })
        )

        this.setState({
            filter          : this.context.getValue( todo.filter ),
            countFinished   : this.context.getValue( todo.count.finished ),
            countUnFinished : this.context.getValue( todo.count.unfinished ),
        })
    }

    setFilter( filter ){
        this.context.dispatch( actions.setFilter( filter ) )
    }

    removeFinished( ){
        const ids = this.context.getValue( todo.listWithFinishState )
            .filter( x => x.finished )
            .map( x => x.id )
        this.context.dispatch( actions.removeMulti( ids ) )
    }

    render() {
        return <TodoFooter_  {...this.state} setFilter={ this.setFilter.bind(this) } removeFinished={ this.removeFinished.bind(this) } />
    }
}

export default TodoFooter
