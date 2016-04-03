import React, {PropTypes, Component} from 'react'
import Graph from './graph/main.jsx'

class App extends Component {

    static contextTypes = {
        store       : PropTypes.object,
    };

    static childContextTypes = {
        store       : PropTypes.object,
    };

    getChildContext() {
        return {
            store       : this.props.store,
        }
    }

    render() {
        return <Graph />
    }
}

export default App
