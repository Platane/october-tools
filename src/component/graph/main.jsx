import React, {PropTypes, Component} from 'react'
import Graph_ from './graph.jsx'

class Graph extends Component {

    static contextTypes = {
        store       : PropTypes.object,
    };

    constructor(){
        super()

        this.state = { graph: [], viewport:{xMax:0,yMax:0,xMin:0,yMin:0}  }

        this.update = () =>
            this.setState({
                graph   : this.context.store.getGraph(),
                viewport: this.context.store.getViewport(),
            })
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
