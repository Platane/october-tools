
import React            from 'react'
import ReactDOM         from 'react-dom'
import App              from './component/app.jsx'

const render = store =>
    ReactDOM.render(<App { ...{ store } } />, document.querySelector('#app'))

export default render
