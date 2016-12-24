import React, {PropTypes, Component} from 'react'
import Todo from './todo'
import createDevTools from '../../../src/index'

class App extends Component {

    static childContextTypes = {
        dispatch        : PropTypes.func.isRequired,
        register        : PropTypes.func.isRequired,
        getValue        : PropTypes.func.isRequired,
    };

    getChildContext() {
        return {
            dispatch        : this.props.dispatch,
            register        : this.props.register,
            getValue        : this.props.getValue,
        }
    }

    render() {

        const DevTools = createDevTools( this.props )

        return (
            <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Todo />
                <div style={{ width: '200%'}} >
                    <DevTools />
                </div>
            </div>
        )
    }
}

export default App
