import React, {PropTypes, Component} from 'react'
import Todo from './todo.jsx'
import OctoberTools from '../../../src/index.jsx'

class App extends Component {

    static propsTypes = {
        dispatch       : PropTypes.func.isRequired,
        fragments      : PropTypes.object.isRequired,
        getState       : PropTypes.func.isRequired,
        register       : PropTypes.func.isRequired,
    };

    static childContextTypes = {
        dispatch       : PropTypes.func.isRequired,
        fragments      : PropTypes.object.isRequired,
        getState       : PropTypes.func.isRequired,
        register       : PropTypes.func.isRequired,
    };

    getChildContext() {
        return {
            dispatch       : this.props.dispatch,
            fragments      : this.props.fragments,
            getState       : this.props.getState,
            register       : this.props.register,
        }
    }

    render() {
        return (
            <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Todo />
                <OctoberTools {...this.props} />
            </div>
        )
    }
}

export default App
