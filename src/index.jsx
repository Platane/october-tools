import React, {PropTypes, Component} from 'react'
import App  from './component/app.jsx'
import {EventEmitter}        from 'events'
import {step, viewport} from './compute/graph'


const extractGraph = fragments => {
    const graph = []
    fragments.forEach( fragment => {
        graph[ fragment.index ] = {
            name    : fragment.path.join('.'),
            arc     : fragment.dependencies.map( ({index}) => index ),
            index   : fragment.index
        }
    })
    return graph
}

class OctoberTools extends Component {

    static propsTypes = {
        fragments      : PropTypes.object.isRequired,
    };

    static childContextTypes = {
        store      : PropTypes.object.isRequired,
    };

    constructor(){

        super()

        this.store = new EventEmitter
        this.store.graph = []
        this.store.getGraph = () =>
            this.store.graph
        this.store.getViewport = () => {
            const v = viewport( this.store.graph )
            v.xMax += 20
            v.yMax += 20
            v.xMin -= 20
            v.yMin -= 20
            return v
        }

        let i = 500


        const loop = () => {

            this.store.graph = step( this.store.graph )

            this.store.emit('change')

            if ( i -- > 0 )
                requestAnimationFrame( loop )
        }
        loop()
    }

    componentDidMount() {

        // this.store.graph = Array.apply( null, new Array( 26 ))
        //     .map( (_,i) =>
        //         ({
        //             arc: Array.apply( null, new Array( i ))
        //                 .map( (_,i) => i )
        //                 .filter( (j,_,arr) => Math.random() > 0.4 )
        //                 // .filter( (j,_,arr) => (1-(i-j)/arr.length) * Math.random() > 0.4 )
        //             ,
        //             name: (i+10).toString(36)
        //         })
        //     )
        this.store.graph = extractGraph( this.props.fragments )
            .map( (n,i,arr) =>
                ({
                    ...n,
                    x:Math.cos( i/arr.length*6.28 +1 )*10,
                    y:Math.sin( i/arr.length*6.28 +1 )*10,
                })
            )



    }

    getChildContext() {
        return {
            store       : this.store,
        }
    }

    render() {
        return <App />
    }
}

export default OctoberTools
