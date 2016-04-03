
import React            from 'react'
import ReactDOM         from 'react-dom'
import App              from './component/app.jsx'
import {EventEmitter}        from 'events'

const store = new EventEmitter
store.getGraph = () =>
    [
        {
            x: 10,
            y: 40,
            name: 'hello',
            arc:[]
        },
        {
            x: 105,
            y: 140,
            name: 'welcome',
            arc:[0]
        },
    ]

ReactDOM.render(<App { ...{ store } } />, document.querySelector('#app'))
