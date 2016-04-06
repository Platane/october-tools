import React, {PropTypes, Component} from 'react'
import ActionList_       from './actionList.jsx'
import * as actions   from 'fragment/actionStack'

class ActionList extends Component {

    static contextTypes = {
        register       : PropTypes.func.isRequired,
        getValue       : PropTypes.func.isRequired,
    };

    constructor(){
        super()

        this.state = { list: []  }

        this.update = ( list ) =>
            this.setState({ list })
    }

    componentDidMount() {
        this.context.register( actions.list, this.update )
        this.update(
            this.context.getValue( actions.list )
        )
    }

    render() {
        return <ActionList_  {...this.state}/>
    }
}

export default ActionList
