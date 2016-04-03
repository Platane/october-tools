require('file?name=demo.html!./index.html')
// require('./style/main.scss')

import {step, viewport} from './tree/compute'



let graph = Array.apply( null, new Array( 26 ))
    .map( (_,i) =>
        ({
            arc: Array.apply( null, new Array( i ))
                .map( (_,i) => i )
                .filter( (j,_,arr) => Math.random() > 0.4 )
                // .filter( (j,_,arr) => (1-(i-j)/arr.length) * Math.random() > 0.4 )
            ,
            name: (i+10).toString(36)
        })
    )
    .map( (n,i,arr) =>
        ({
            ...n,
            x:Math.cos( i/arr.length*6.28 )*50,
            y:Math.sin( i/arr.length*6.28 )*50,
        })
    )

import {EventEmitter}        from 'events'
const store = new EventEmitter
store.getGraph = () =>
    graph
store.getViewport = () => {
    const v = viewport( graph )
    v.xMax += 20
    v.yMax += 20
    v.xMin -= 20
    v.yMin -= 20
    return v
}




const loop = () => {

    graph = step( graph )

    store.emit('change')

    requestAnimationFrame( loop )
}
loop()

import render from './tree/render/index.jsx'

render( store )
