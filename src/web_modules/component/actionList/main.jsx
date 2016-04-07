import React, {PropTypes, Component} from 'react'
import ActionList_      from './actionList.jsx'
import * as frag        from 'fragment'

class ActionList extends Component {

    static contextTypes = {
        register       : PropTypes.func.isRequired,
        getValue       : PropTypes.func.isRequired,
        dispatch       : PropTypes.func.isRequired,
    };

    constructor(){
        super()

        this.state = { list: []  }

        this.update = ( list, selectedId ) =>
            this.setState({ list, selectedId })
    }

    componentDidMount() {
        this.context.register( frag.action.list, frag.actionSelected.selectedId, this.update )
        this.update(
            this.context.getValue( frag.action.list ),
            this.context.getValue( frag.actionSelected.selectedId )
        )
    }

    selectAction( id ) {
        this.context.dispatch( {type:'action:select', payload:{ id }} )
    }

    render() {
        return <ActionList_  {...this.state} selectAction={ this.selectAction.bind( this ) } />
    }
}

export default ActionList
