import React, {PropTypes, Component} from 'react'
import Graph_ from './graph.jsx'

class Graph extends Component {

    static contextTypes = {
        store       : PropTypes.object,
    };

    constructor(){
        super()

        this.state = { graph: [] }

        this.update = () =>
            this.setState({ graph: this.context.store.getGraph() })
    }

    componentDidMount() {
        this.context.store.on('change', this.update)
        this.update()
    }

    render() {
        return <Graph_  {...this.state}/>
    }
}

export default Graph
