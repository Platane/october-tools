import React, {PropTypes, Component} from 'react'
import Graph_       from './graph.jsx'
import * as graph   from 'fragment/graph'

class Graph extends Component {

    static contextTypes = {
        register       : PropTypes.func.isRequired,
        getValue       : PropTypes.func.isRequired,
    };

    constructor(){
        super()

        this.state = { graph: [], viewport:{xMax:0,yMax:0,xMin:0,yMin:0}  }

        this.update = ( graph, viewport ) =>
            this.setState({ graph, viewport })
    }

    componentDidMount() {
        this.context.register( graph.roundedGraph, graph.largeViewport, this.update )
        this.update(
            this.context.getValue( graph.roundedGraph ),
            this.context.getValue( graph.largeViewport )
        )
    }

    render() {
        return <Graph_  {...this.state}/>
    }
}

export default Graph
