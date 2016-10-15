require('./index.html')
require('./style/index.css')

import {create}         from 'refinery-js'
import ReactDOM         from 'react-dom'
import React            from 'react'
import {todo}           from './fragment'
import App              from './component/app'
import  * as action     from './action'

const pack = create( {todo} )

ReactDOM.render( React.createElement( App, pack, null ), document.getElementById('app') )


pack.dispatch( action.addTodo('swagg') )
pack.dispatch( action.addTodo('yolo') )
pack.dispatch( action.addTodo('chevre') )
