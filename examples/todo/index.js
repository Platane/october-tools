require('./index.html')
require('./style/index.css')

import {create}         from 'refinery-js'
import ReactDOM         from 'react-dom'
import React            from 'react'
import {todo}           from './fragment'
import App              from './component/app'

const pack = create( {todo} )

ReactDOM.render( React.createElement( App, pack, null ), document.getElementById('app') )
