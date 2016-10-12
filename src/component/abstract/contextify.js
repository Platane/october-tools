import React, {PropTypes, Component} from 'react'

class Contextify extends Component {

    static propsTypes = {
        store         : PropTypes.object,
    };

    static childContextTypes = {
        store         : PropTypes.object,
    };

    getChildContext() {
        return {
            store         : this.props.store,
        }
    }
    render(){
        return this.props.children
    }
}

export default Contextify
