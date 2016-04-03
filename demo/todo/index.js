require('file?name=index.html!./index.html')
// require('./style/main.scss')

import {create}         from 'october'
import ReactDOM         from 'react-dom'
import React            from 'react'
import {todo}           from './fragment'
import App              from './component/app.jsx'

const pack = create( {todo} )

ReactDOM.render( React.createElement( App, pack, null ), document.getElementById('app') )
