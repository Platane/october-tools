import React, {PropTypes, Component} from 'react'
import Todo from './todo'
import DevTools from '../../../src/web_modules/index'

class App extends Component {

    static childContextTypes = {
        dispatch        : PropTypes.func.isRequired,
        register        : PropTypes.func.isRequired,
        getValue        : PropTypes.func.isRequired,
        list            : PropTypes.func.isRequired,
    };

    getChildContext() {
        return {
            dispatch        : this.props.dispatch,
            register        : this.props.register,
            getValue        : this.props.getValue,
            list            : this.props.list,
        }
    }

    render() {
        return (
            <div style={{ display:'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Todo />
                <div style={{ width: '160%'}} >
                    <DevTools {...this.props} />
                </div>
            </div>
        )
    }
}

export default App
