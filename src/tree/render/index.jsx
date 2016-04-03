
import React            from 'react'
import ReactDOM         from 'react-dom'
import App              from './component/app.jsx'
import {EventEmitter}        from 'events'

const store = new EventEmitter
store.getGraph = () =>
    [
        {
            x: 10,
            y: 10,
            name: 'hello',
            arc:[]
        }
    ]

ReactDOM.render(<App { ...{ store } } />, document.querySelector('#app'))
